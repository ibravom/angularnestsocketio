import { Controller, Get } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from '../entity/song';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll(): Promise<Song[]> {
    return this.songsService.findAll();
  }
}