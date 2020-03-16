import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import 'reflect-metadata'

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    career: number

    @Column()
    birth_date: Date

    @Column()
    phone_number: string

    @Column()
    country: number

    @Column()
    city: string

    @Column()
    payment_method: number

    @Column()
    installments: number
}