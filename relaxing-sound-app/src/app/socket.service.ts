// src/app/socket.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000', { transports: ['websocket'] });
    // this.socket.on('connect', () => console.log('Connected to WebSocket server'));
    // this.socket.on('connect_error', (error) => console.error('Connection error:', error));
  }

  // Método para emitir un 'like'
  like(songId: number): void {
    this.socket.emit('like', { songId });
  }

  // Método para escuchar actualizaciones de 'likes'
  onLikesUpdated(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('likesUpdated', (data: any) => {
        observer.next(data);
      });
    });
  }
  play(songId: number): void {
    this.socket.emit('play', { songId });
  }
  onPlaysUpdated(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('playsUpdated', (data: any) => {
        observer.next(data);
      });
    });
  }
  // Puedes añadir más métodos para manejar otros eventos
}
