import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Roles from "../enums/roles.enum";


@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    role: Roles;

    @Column()
    phoneNumber: string;

}

export default Users