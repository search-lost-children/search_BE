import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Coordinator from "./Coordinator";
import Coordinates from "./Coordinates";

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

    @OneToMany(() => Coordinates, coordinates => coordinates.search)
    coordinates: Coordinates[];
}

export default Search