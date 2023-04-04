import { DataSource } from "typeorm"
import { Book } from "./entity/Book"

export const AppDataSource= new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "admin",
	database: "libraryapp",
	entities: [Book],
	synchronize: true,
	logging: false,
})
