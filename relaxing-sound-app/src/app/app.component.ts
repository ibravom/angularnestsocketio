import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Usar CommonModule en lugar de BrowserModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Reemplazar BrowserModule con CommonModule
    RouterOutlet, 
    MatButtonModule, 
    MatIconModule, 
    MyModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'Music Reactions Live Interaction';
  private audio = new Audio();

  playSound() {
    this.audio.src = 'assets/male_scream_3.mp3';
    this.audio.load();
    this.audio.play();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '400px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
