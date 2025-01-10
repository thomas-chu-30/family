import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { MingyaoSchoolAttendance } from './mingyao-school-attendance.entity';
import { User } from './user.entity';

@Entity('courses')
export class Course {
    @OneToMany(() => MingyaoSchoolAttendance, (attendance) => attendance.course)
    attendances: MingyaoSchoolAttendance[];

    @Column('text')
    courseDescription: string;

    @PrimaryGeneratedColumn()
    courseId: number;

    @Column()
    courseName: string;

    @Column()
    endDate: Date;

    @ManyToOne(() => User, (user) => user.courses)
    instructor: User;

    @Column()
    startDate: Date;
}
