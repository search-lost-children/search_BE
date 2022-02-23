import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import Search from "./Search";
import Participant from "./Participant";
import Squad from "./Squads";

@Entity()
export class Task extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskType: string;

    @Column()
    locationType: string;

    @Column()
    location: string;

    @Column()
    searchId: number;
    @ManyToOne(() => Search, search => search.tasks)
    search: Search;

    @Column()
    participantId: number;
    @ManyToOne(() => Participant, participant => participant.tasks)
    participant: Participant;

    @Column()
    squadId: number;
    @ManyToOne(() => Squad, squad => squad.tasks)
    squad: Squad
}

export default Task