import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne} from "typeorm";
import Search from "./Search";



@Entity()
export class SearchNewTask extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskType: string;

    @Column()
    locationType: string;

    @Column()
    location: string;

    @Column()
    executorId: string;


    @ManyToOne(() => Search, search => search.tasks)
    search: Search;
}

export default SearchNewTask