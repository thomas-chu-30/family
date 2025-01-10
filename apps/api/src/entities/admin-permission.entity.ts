import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AdminUser } from './admin-user.entity';
import { PermissionsRole } from './permissions-role.entity';

@Entity('admin_permissions')
export class AdminPermission {
    @ManyToOne(() => AdminUser, (adminUser) => adminUser.adminPermissions)
    adminUser: AdminUser;

    @PrimaryGeneratedColumn()
    permissionId: number;

    @OneToMany(() => PermissionsRole, (permissionsRole) => permissionsRole.adminPermission)
    permissionsRoles: PermissionsRole[];

    @Column()
    permissionType: string;

    @Column()
    resourceId: number;

    @Column()
    resourceType: string;
}
