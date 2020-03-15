import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import 'reflect-metadata'

@Entity()
export class Career {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}