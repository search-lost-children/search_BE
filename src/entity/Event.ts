import {Entity, Column, BaseEntity, ManyToOne} from "typeorm";

@Entity()
export class Event extends BaseEntity{
    @Column()
    priority: number;

    @Column()
    time: Date;

    @ManyToOne(() => User, user => user.id)
    author: User;

    @Column()
    description: string;

}
export default Event