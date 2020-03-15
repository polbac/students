import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import 'reflect-metadata'

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}