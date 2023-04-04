import { DataSource } from "typeorm"
import { Book } from "./entity/Book"

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "admin",
	database: "LibraryApp",
	entities: [Book],
	synchronize: true,
	logging: false,
})
