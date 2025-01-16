import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
    {
        component: BasicLayout,
        meta: {
            icon: 'lucide:layout-dashboard',
            title: $t('page.adminDashboard.title'),
        },
        name: 'AdminDashboard',
        path: '/admin-dashboard',
        children: [
            {
                name: 'User',
                path: '/user',
                component: () => import('#/views/admin-dashboard/user/index.vue'),
                meta: {
                    icon: 'lucide:user',
                    title: $t('page.adminDashboard.user'),
                },
            },
        ],
    },
];

export default routes;
