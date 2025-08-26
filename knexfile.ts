import type {Knex} from "knex";

export const config: { [key:string]: Knex.Config } = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || "3000", 10),
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD
        },
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/migrations"
        }
    }
}