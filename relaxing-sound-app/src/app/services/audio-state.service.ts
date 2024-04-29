import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioStateService {
  private playingCard = new BehaviorSubject<string | null>(null);
  private isPlaying = new BehaviorSubject<boolean>(false);

  public playingCard$ = this.playingCard.asObservable();
  public isPlaying$ = this.isPlaying.asObservable();

  setPlayingCard(cardId: string | null, playing: boolean) {
    this.playingCard.next(cardId);
    this.isPlaying.next(playing);
  }
}