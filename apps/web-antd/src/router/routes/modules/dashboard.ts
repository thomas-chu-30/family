import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
    {
        component: BasicLayout,
        meta: {
            icon: 'lucide:home',
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
            {
                name: 'Thread',
                path: '/thread',
                component: IFrameView,
                meta: {
                    icon: 'lucide:thread',
                    iframeSrc: 'https://cgmfamily.tw/login',
                    // keepAlive: true,
                    title: 'Thread',
                },
            },
            {
                name: 'DonationReport',
                path: '/donation-report',
                component: IFrameView,
                meta: {
                    icon: 'lucide:church',
                    iframeSrc:
                        'https://docs.google.com/forms/d/e/1FAIpQLSdzNHbjXuCyABCWfT6g7JIpIgwbKExoXdrufs-6vf1-3zO-BA/viewform',
                    // keepAlive: true,
                    title: '奉獻回報',
                },
            },
        ],
    },
];

export default routes;
