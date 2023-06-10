import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//modelo do footer

@Entity()
export class Footer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameSitedata: string

    @Column()
    numberdata: string

    @Column()
    linkinstadata: string

    @Column()
    addressdata: string
    
}
