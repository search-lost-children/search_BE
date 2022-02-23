import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Coordinator from "./Coordinator";
import Task from "./Task";
import Event from "./Event";
import Coordinates from "./Coordinates";
import {Participant} from "./Participant";
import SearchStates from "../enums/searchStates.enum";
import Squad from "./Squads";

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
    coordLat:number;

    @Column({
        nullable: true
    })
    coordLong:number;

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

    @Column({
        type: 'enum',
        enum: SearchStates,
        default: SearchStates.active
    })
    status: SearchStates;

    @OneToMany(() => Coordinates, coordinates => coordinates.search)
    coordinates: Coordinates[];

    @OneToMany(() => Participant, participants => participants.search)
    participants: Participant[]

    @OneToMany(() => Task, task => task.search)
    tasks: Task[];

    @OneToMany(() => Squad, squad => squad.search)
    squads: Squad[];
}

export default Search