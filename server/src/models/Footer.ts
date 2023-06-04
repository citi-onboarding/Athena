import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//modelo do footer

@Entity()
export class Footer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    namedata: string

    @Column()
    textdata: string

}