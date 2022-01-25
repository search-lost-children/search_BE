import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Coordinator from "./Coordinator";


@Entity()
export class Search extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Coordinator, coordinator => coordinator.search)
    coordinators: Coordinator[];

    @Column({
        nullable: true
    })
    coordLat:string;

    @Column({
        nullable: true
    })
    coordLong:string;

    @Column({
        nullable: true
    })
    address:string;

    @Column({
        nullable: true
    })
    info: string;

    @Column({
        type: "bytea",
        nullable: true
    })
    photo: Buffer;
}

export default Search