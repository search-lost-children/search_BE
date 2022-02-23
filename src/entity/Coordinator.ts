import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToOne} from "typeorm";
import Search from "./Search";
import Squad from "./Squads";
import User from "./Users";



@Entity()
export class Coordinator extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    searchId: number;
    @ManyToOne(() => Search, search => search.coordinators)
    search: Search;

    @Column()
    userId: number;
    @ManyToOne(() => User, user => user.coordinatorIn)
    user: User;


    @OneToOne(() => Squad, squad => squad.coordinator)
    squad:Squad
}

export default Coordinator