import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Testimony {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    text: string

}

