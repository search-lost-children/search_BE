import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Coordinator from "./Coordinator";
import Task from "./Task";


@Entity()
export class Search extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date"
    })
    date: Date;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Coordinator, coordinator => coordinator.search)
    coordinators: Coordinator[];

    @OneToMany(() => Task, task => task.search)
    tasks: Task[];
}

export default Search