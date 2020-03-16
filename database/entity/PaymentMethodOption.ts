import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import 'reflect-metadata'

@Entity()
export class PaymentMethodOption {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}