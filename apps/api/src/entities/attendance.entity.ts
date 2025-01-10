import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';

@Entity('attendance')
export class Attendance {
    @Column()
    attendanceDate: Date;

    @PrimaryGeneratedColumn()
    attendanceId: number;

    @Column()
    entityId: number;

    @Column()
    entityType: string;

    @Column('text')
    remarks: string;

    @Column()
    status: string;

    @ManyToOne(() => User, (user) => user.attendances)
    student: User;
}
