import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//modelo do body

@Entity()
export class Body {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    textdata: string
    
}
