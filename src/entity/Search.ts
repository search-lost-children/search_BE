import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Coordinator from "./Coordinator";
import Event from "./Event";


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

    @OneToMany(() => Event, event => event.search)
    events: Event[];

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