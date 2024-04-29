import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private baseUrl = 'http://localhost:3000/songs'; // URL del backend

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl); // Llama al backend para obtener las canciones
  }
}
