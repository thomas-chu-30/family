import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AdminUser } from './admin-user.entity';
import { Attendance } from './attendance.entity';
import { Course } from './course.entity';

@Entity('users')
export class User {
    @OneToMany(() => AdminUser, (adminUser) => adminUser.user)
    adminUsers: AdminUser[];

    @OneToMany(() => Attendance, (attendance) => attendance.student)
    attendances: Attendance[];

    @Column()
    birthDate: Date;

    @OneToMany(() => Course, (course) => course.instructor)
    courses: Course[];

    @Column()
    firstName: string;

    @Column()
    gender: string;

    @Column()
    lastName: string;

    @PrimaryGeneratedColumn()
    userId: number;
}
