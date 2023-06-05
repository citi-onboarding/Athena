import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//modelo do footer

@Entity()
export class NavBar {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameInstadata: string

    @Column()
    numberdata: string
    
    @Column()
    addressdata: string
    
}
