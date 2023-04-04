import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class Book extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	title: string
}
