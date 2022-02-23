import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import {Participant} from "./Participant";
import Coordinator from "./Coordinator";
import Search from "./Search";
import Task from "./Task";


@Entity()
export class Squad extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    coordinatorId: number;
    @OneToOne(() => Coordinator, coordinator =>coordinator.squad)
    @JoinColumn()
    coordinator: Coordinator;

    @OneToMany(() => Participant, participants => participants.squad)
    participants: Participant[]

    @Column()
    searchId: number;
    @ManyToOne(() => Search, search => search.squads)
    search:Search;

    @OneToMany(() => Task, task => task.squad)
    tasks: Task[];
}
export default Squad