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
}

export default Search