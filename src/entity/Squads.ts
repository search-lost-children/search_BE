import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, OneToOne} from "typeorm";
import {Participant} from "./Participant";
import Coordinator from "./Coordinator";


@Entity()
export class Squad extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Coordinator, coordinator =>coordinator.squad)
    coordinator: Coordinator;

    @OneToMany(() => Participant, participants => participants.squad)
    participants: Participant[]

}
export default Squad