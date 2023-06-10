import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//modelo do navbar

@Entity()
export class NavBar {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    linkinstadata: string

    @Column()
    linknumberdata: string

}
