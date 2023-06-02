import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class PeopleAthena {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column()
    text: string

}
