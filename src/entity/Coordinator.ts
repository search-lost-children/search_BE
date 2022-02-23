import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import Search from "./Search";
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

}

export default Coordinator