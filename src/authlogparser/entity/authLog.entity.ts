import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "authlog"})
export class AuthLog
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeStamp: string;

    @Column()
    logDetail: string;
}