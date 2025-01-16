import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
    {
        component: BasicLayout,
        meta: {
            icon: 'lucide:book-open',
            title: $t('page.sundaySchool.title'),
        },
        name: 'SundaySchool',
        path: '/sunday-school',
        children: [
            {
                name: 'SundaySchoolAnnouncement',
                path: 'announcement',
                component: () => import('#/views/sunday-school/announcement.vue'),
                meta: {
                    icon: 'lucide:megaphone',
                    title: $t('page.sundaySchool.announcement'),
                },
            },
            {
                name: 'SundaySchoolAnnouncementEdit',
                path: 'announcement/edit',
                component: () => import('#/views/sunday-school/announcement-edit.vue'),
                meta: {
                    icon: 'lucide:edit',
                    title: $t('page.sundaySchool.announcementEdit'),
                },
            },
            {
                name: 'SundaySchoolAttendance',
                path: 'attendance',
                component: () => import('#/views/sunday-school/index.vue'),
                meta: {
                    icon: 'lucide:check-circle',
                    title: $t('page.sundaySchool.attendance'),
                },
            },
        ],
    },
];

export default routes;
