import { Career } from './Career';
import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import 'reflect-metadata'
import { Country } from './Country';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    //@ts-ignore
    @OneToOne(type => Career)
    @JoinColumn({ name: 'career' })
    career: Career

    @Column()
    birth_date: Date

    @Column()
    phone_number: string

    @Column()
    //@ts-ignore
    @OneToOne(type => Country)
    @JoinColumn({ name: 'country' })
    country: Country

    @Column()
    city: string

    @Column()
    payment_method: number

    @Column()
    installments: number
}