import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AdminUser } from './admin-user.entity';

@Entity('sunday_school_announcements')
export class SundaySchoolAnnouncement {
    @Column('text')
    announcementContent: string;

    @PrimaryGeneratedColumn()
    announcementId: number;

    @Column()
    announcementTitle: string;

    @Column()
    className: string;

    @Column()
    createdAt: Date;

    @ManyToOne(() => AdminUser, (adminUser) => adminUser.sundaySchoolAnnouncements)
    createdBy: AdminUser;

    @Column()
    isDraft: boolean;

    @Column({ nullable: true })
    parentAnnouncementId: number;

    @Column()
    updatedAt: Date;

    @Column()
    version: number;
}
