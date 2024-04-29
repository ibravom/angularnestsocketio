import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AudioStateService } from '../services/audio-state.service';
import { AudioService } from '../services/audio.service';
import { Subscription } from 'rxjs';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatButtonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css',
})
export class SongCardComponent implements OnChanges {
  @Input() cardId: string | undefined;
  @Input() songUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() artist: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() likes: number | undefined;
  @Input() plays: number | undefined;

  isLiked: boolean = false;
  isPlaying: boolean = false;
  private subscription: Subscription | undefined;
  constructor(
    private audioService: AudioService,
    private stateService: AudioStateService,
    private socketService: SocketService
  ) {
    this.subscription = this.stateService.playingCard$.subscribe((id) => {
      this.isPlaying = id === this.cardId;
    });
  }
  ngOnInit() {
    this.listenForLikes();
    this.listenForPlays();
    this.subscription = this.stateService.playingCard$.subscribe((currentPlayingId) => {
      this.isPlaying = currentPlayingId === this.cardId;
    });
  }

  toggleLike(): void {
    this.socketService.like(Number(this.cardId));
    // this.isLiked = !this.isLiked;
    this.isLiked = true;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['likes'] || changes['plays']) {
    }
  }
  togglePlay() {
    if (this.isPlaying) {
      this.audioService.stop();
      this.stateService.setPlayingCard(null, false);
      this.isPlaying = false;
    } else {
      this.audioService.play(this.songUrl!, () => {
        this.isPlaying = false;
        this.stateService.setPlayingCard(null, false);
      });
      this.stateService.setPlayingCard(this.cardId!, true);
      this.isPlaying = true;
      this.socketService.play(Number(this.cardId));
    }
  }
  playSong(url: string) {
    this.togglePlay();
  }
  private listenForLikes(): void {
    this.socketService.onLikesUpdated().subscribe((data) => {
      if (data.songId === this.cardId) {
        this.likes = data.likes; // Actualiza los likes
      }
    });
  }
  private listenForPlays(): void {
    this.socketService.onPlaysUpdated().subscribe((data) => {
      if (data.songId === this.cardId) {
        this.plays = data.plays; // Actualiza los plays
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    // Asegúrate de desuscribirte de cualquier suscripción de Socket.IO si es necesario
  }
}
