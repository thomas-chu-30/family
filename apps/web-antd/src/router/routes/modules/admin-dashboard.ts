import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
    {
        component: BasicLayout,
        meta: {
            icon: 'lucide:monitor-check',
            title: $t('page.adminDashboard.title'),
        },
        name: 'AdminDashboard',
        path: '/admin-dashboard',
        children: [
            {
                name: 'FamilyAnnouncementEdit',
                path: '/family-announcement-edit',
                component: () => import('#/views/admin-dashboard/family-announcement-edit.vue'),
                meta: {
                    icon: 'lucide:edit',
                    title: $t('page.adminDashboard.familyAnnouncementEdit'),
                },
            },
            {
                name: 'User',
                path: '/user',
                component: () => import('#/views/admin-dashboard/user.vue'),
                meta: {
                    icon: 'lucide:user',
                    title: $t('page.adminDashboard.user'),
                },
            },
            {
                name: 'FamilyList',
                path: '/family-list',
                component: () => import('#/views/admin-dashboard/family.vue'),
                meta: {
                    icon: 'lucide:users',
                    title: $t('page.adminDashboard.family'),
                },
            },
            {
                name: 'Role',
                path: '/role',
                component: () => import('#/views/admin-dashboard/role.vue'),
                meta: {
                    icon: 'lucide:shield',
                    title: $t('page.adminDashboard.role'),
                },
            },
        ],
    },
];

export default routes;
