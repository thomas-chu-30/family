import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
    {
        component: BasicLayout,
        meta: {
            icon: 'lucide:layout-dashboard',
            order: -1,
            title: $t('page.dashboard.title'),
        },
        name: 'Dashboard',
        path: '/',
        children: [
            // {
            //     name: 'Analytics',
            //     path: '/analytics',
            //     component: () => import('#/views/dashboard/analytics/index.vue'),
            //     meta: {
            //         icon: 'lucide:area-chart',
            //         title: $t('page.dashboard.analytics'),
            //     },
            // },
            {
                name: 'Workspace',
                path: '/workspace',
                component: () => import('#/views/dashboard/workspace/index.vue'),
                meta: {
                    affixTab: true,
                    icon: 'carbon:workspace',
                    title: $t('page.dashboard.workspace'),
                },
            },
            {
                name: 'HopeChurch',
                path: '/hope-church',
                component: IFrameView,
                meta: {
                    icon: 'lucide:church',
                    iframeSrc: 'https://ms.hopechurch.org.tw/',
                    // keepAlive: true,
                    title: 'HopeChurch',
                },
            },
        ],
    },
];

export default routes;
