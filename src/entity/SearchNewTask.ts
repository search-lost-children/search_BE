import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne} from "typeorm";
import Search from "./Search";



@Entity()
export class SearchNewTask extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    searchResource: string;

    @Column()
    searchAddress: string;

    @ManyToOne(() => Search, search => search.tasks)
    search: Search;
}

export default SearchNewTask