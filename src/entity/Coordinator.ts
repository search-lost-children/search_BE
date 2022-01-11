import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import Search from "./Search";



@Entity()
export class Coordinator extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    searchId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => Search, search => search.coordinators)
    search: Search;
}

export default Coordinator