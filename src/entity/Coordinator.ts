import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToOne} from "typeorm";
import Search from "./Search";
import Squad from "./Squads";



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

    @OneToOne(() => Squad, squad => squad.coordinator)
    squad:Squad
}

export default Coordinator