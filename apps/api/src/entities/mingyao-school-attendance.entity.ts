import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Course } from './course.entity';
import { User } from './user.entity';

@Entity('mingyao_school_attendance')
export class MingyaoSchoolAttendance {
    @Column()
    attendanceDate: Date;

    @PrimaryGeneratedColumn()
    attendanceId: number;

    @ManyToOne(() => Course, (course) => course.attendances)
    course: Course;

    @Column('text')
    remarks: string;

    @Column()
    status: string;

    @ManyToOne(() => User, (user) => user.attendances)
    student: User;
}
