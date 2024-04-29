// src/seed-songs.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Song } from "./entity/Song";
require ("dotenv").config();
const songData = [
    {
        title: "Song One",
        artist: "Artist One",
        imageUrl: "https://picsum.photos/100/100?random=1",
        likes: 150,
        plays: 1000,
        songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
        title: "Song Two",
        artist: "Artist Two",
        imageUrl: "https://picsum.photos/100/100?random=2",
        likes: 250,
        plays: 3000,
        songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    // Más canciones...
];

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        __dirname + "/entity/**/*.ts"
    ],
    synchronize: false,
});

AppDataSource.initialize()
    .then(async () => {
        const songRepository = AppDataSource.getRepository(Song);
        for (const song of songData) {
            const newSong = songRepository.create(song);
            await songRepository.save(newSong);
        }
    })
    .catch(error => console.log("Error during Data Source initialization", error));
