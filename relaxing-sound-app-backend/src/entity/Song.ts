import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('songs')
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string; 

    @Column()
    artist: string;

    @Column()
    imageUrl: string;

    @Column({ default: 0 })
    likes: number;

    @Column({ default: 0 })
    plays: number;

    @Column()
    songUrl: string;

    @Column({ default: true })
    is_active: boolean;
}
