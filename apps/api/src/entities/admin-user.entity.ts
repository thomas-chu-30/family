import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AdminPermission } from './admin-permission.entity';
import { Role } from './role.entity';
import { SundaySchoolAnnouncement } from './sunday-school-announcement.entity';
import { User } from './user.entity';

@Entity('admin_users')
export class AdminUser {
    @OneToMany(() => AdminPermission, (adminPermission) => adminPermission.adminUser)
    adminPermissions: AdminPermission[];

    @PrimaryGeneratedColumn()
    adminUserId: number;

    @Column()
    lineAccessToken: string;

    @Column()
    lineRefreshToken: string;

    @Column()
    lineTokenExpiry: Date;

    @Column()
    lineUserId: string;

    @ManyToOne(() => Role, (role) => role.adminUsers)
    role: Role;

    @OneToMany(() => SundaySchoolAnnouncement, (announcement) => announcement.createdBy)
    sundaySchoolAnnouncements: SundaySchoolAnnouncement[];

    @ManyToOne(() => User, (user) => user.adminUsers)
    user: User;
}
