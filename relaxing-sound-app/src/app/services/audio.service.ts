import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  
  private audio = new Audio(); // Usar el objeto Audio nativo de HTML5

  constructor() {
    this.audio.onended = () => {
      this.handleAudioEnd(); // Llamada cuando el audio termina
    };
  }

  play(url: string, onEnd?: () => void) {
    this.audio.src = url;
    this.audio.load(); // Carga el recurso de audio
    this.audio.play(); // Reproduce el audio

    // Configura un callback para cuando el audio termine si se proporciona
    if (onEnd) {
      this.audio.onended = onEnd;
    }
  }

  stop() {
    this.audio.pause(); // Pausa el audio
    this.audio.currentTime = 0; // Reinicia el tiempo de reproducción
  }

  private handleAudioEnd() {
    // Puedes realizar más acciones aquí si es necesario
  }
}
