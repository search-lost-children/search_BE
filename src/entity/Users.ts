import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import Roles from "../enums/roles.enum";
import Event from "./Event";
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
        nullable: false
    })
    phoneNumber: string;

    @OneToMany(() => Event, event => event.author)
    events: Event[];

    @OneToMany(() => Coordinates, coordinates => coordinates.user)
    coordinates: Coordinates[];

}

export default User