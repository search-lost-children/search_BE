import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Roles from "../enums/roles.enum";
import Coordinates from "./Coordinates";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    login: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: 'enum',
        enum: Roles,
    })
    role: Roles;

    @Column({
        nullable: true
    })
    phoneNumber: string;

    @OneToMany(() => Coordinates, coordinates => coordinates.user)
    coordinates: Coordinates[];

}

export default User