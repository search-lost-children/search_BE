import {Entity, Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./Users";
import Search from "./Search";
import Squad from "./Squads";

@Entity()
export class Participant extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Search, search => search.participants)
    search: Search;

    @ManyToOne(() => User, user => user.participations)
    user: User;

    @Column({
        default: true
    })
    accessAllowed: boolean;

    @Column()
    userId:number

    @ManyToOne(() => Squad, squad => squad.participants)
    squad:Squad
}
export default Participant