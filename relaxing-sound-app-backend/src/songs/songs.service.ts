// songs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from '../entity/song';
@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>, 
  ) {}

  async findAll(): Promise<Song[]> {
    return this.songsRepository.find(); 
  }
  async incrementLikes(songId: number): Promise<number> {
    const song = await this.songsRepository.findOneBy({ id: songId });
    if (!song) {
      throw new Error('Song not found');
    }
    song.likes += 1;
    await this.songsRepository.save(song);
    return song.likes; 
  }
  async incrementPlays(songId: number): Promise<number> {
    const song = await this.songsRepository.findOneBy({ id: songId });
    if (!song) {
      throw new Error('Song not found');
    }
    song.plays += 1;
    await this.songsRepository.save(song);
    return song.plays; 
  }
}

