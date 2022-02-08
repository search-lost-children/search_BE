import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import Search from "./Search";
import User from "./Users"

@Entity()
export class Coordinates extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lng: string;

    @Column()
    lat: string;

    @Column()
    searchId: number;

    @Column()
    userId: number;

    @Column()
    time: Date;

    @ManyToOne(() => Search, search => search.coordinates)
    search: Search;

    @ManyToOne(() => User, user => user.coordinates)
    user: User;
}

export default Coordinates