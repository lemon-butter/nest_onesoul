import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    memberCode: number;

    @Column({length: 40, unique: true})
    userId: string;

    @Column({length: 40, unique: true})
    userPw: string;
}
