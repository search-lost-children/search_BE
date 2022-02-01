import {Entity, Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./Users";
import Search from "./Search";

@Entity()
export class Event extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Search, search => search.events)
    search: Search;

    @Column()
    priority: number;

    @Column()
    time: Date;

    @ManyToOne(() => User, user => user.events)
    author: User;

    @Column()
    description: string;

}
export default Event