import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SongCardComponent } from '../song-card/song-card.component';
import { SongService } from '../services/song.service';
@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,SongCardComponent,CommonModule],
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {
  songs: any[] = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.getSongs().subscribe(
      (data) => {
        this.songs = data;
      },
      (error) => {
        console.error('Error fetching songs', error);
      }
    );
  }
}
