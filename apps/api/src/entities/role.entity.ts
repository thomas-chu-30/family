import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AdminUser } from './admin-user.entity';
import { PermissionsRole } from './permissions-role.entity';

@Entity('roles')
export class Role {
    @OneToMany(() => AdminUser, (adminUser) => adminUser.role)
    adminUsers: AdminUser[];

    @Column()
    description: string;

    @OneToMany(() => PermissionsRole, (permissionsRole) => permissionsRole.role)
    permissionsRoles: PermissionsRole[];

    @PrimaryGeneratedColumn()
    roleId: number;

    @Column()
    roleName: string;
}
