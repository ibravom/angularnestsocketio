// src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
require ("dotenv").config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + "/entity/**/*.ts"],
    migrations: [
        __dirname + "/migrations/**/*{.ts,.js}"
    ],
});

AppDataSource.initialize()
    .then(() => {
        
    })
    .catch((err) => {
    });
