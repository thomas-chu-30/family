import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AdminPermission } from './admin-permission.entity';
import { Role } from './role.entity';

@Entity('permissions_role')
export class PermissionsRole {
    @ManyToOne(() => AdminPermission, (adminPermission) => adminPermission.permissionsRoles)
    adminPermission: AdminPermission;

    @PrimaryGeneratedColumn()
    permissionsRoleId: number;

    @ManyToOne(() => Role, (role) => role.permissionsRoles)
    role: Role;
}
