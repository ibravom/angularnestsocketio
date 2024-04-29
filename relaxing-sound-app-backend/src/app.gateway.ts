import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SongsService } from './songs/songs.service';
@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    credentials: true
  },
  transports: ['websocket']
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private songService: SongsService) {}
  @WebSocketServer() server: Server;
  afterInit(server: Server) {
  }
  handleConnection(client: any, ...args: any[]) {
  }

  handleDisconnect(client: any) {
  }

  @SubscribeMessage('like')
  async handleLike(client: any, payload: { songId: number }): Promise<void> {
    const updatedLikes = await this.songService.incrementLikes(payload.songId);
    this.server.emit('likesUpdated', { songId: payload.songId, likes: updatedLikes });
  }
  @SubscribeMessage('play')
  async handlePlays(client: any, payload: { songId: number }): Promise<void> {
    const updatedPlays = await this.songService.incrementPlays(payload.songId);
    this.server.emit('playsUpdated', { songId: payload.songId, plays: updatedPlays });
  }
}
