<script lang="ts" setup>
import type {
    WorkbenchProjectItem,
    WorkbenchQuickNavItem,
    WorkbenchTodoItem,
    WorkbenchTrendItem,
} from '@vben/common-ui';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import {
    AnalysisChartCard,
    WorkbenchHeader,
    WorkbenchProject,
    WorkbenchQuickNav,
    WorkbenchTodo,
    WorkbenchTrends,
} from '@vben/common-ui';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';
import { openWindow } from '@vben/utils';

import AnalyticsVisitsSource from '../analytics/analytics-visits-source.vue';

const userStore = useUserStore();

// 這是一個示例數據，實際項目中需要根據實際情況進行調整
// url 也可以是內部路由，在 navTo 方法中識別處理，進行內部跳轉
// 例如：url: /dashboard/workspace
const projectItems: WorkbenchProjectItem[] = [
    {
        color: '',
        content: '不要等待機會，而要創造機會。',
        date: '2021-04-01',
        group: '開源組',
        icon: 'carbon:logo-github',
        title: 'Github',
        url: 'https://github.com',
    },
    {
        color: '#3fb27f',
        content: '現在的你決定將來的你。',
        date: '2021-04-01',
        group: '算法組',
        icon: 'ion:logo-vue',
        title: 'Vue',
        url: 'https://vuejs.org',
    },
    {
        color: '#e18525',
        content: '沒有什麼才能比努力更重要。',
        date: '2021-04-01',
        group: '上班摸魚',
        icon: 'ion:logo-html5',
        title: 'Html5',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
    },
    {
        color: '#bf0c2c',
        content: '熱情和欲望可以突破一切難關。',
        date: '2021-04-01',
        group: 'UI',
        icon: 'ion:logo-angular',
        title: 'Angular',
        url: 'https://angular.io',
    },
    {
        color: '#00d8ff',
        content: '健康的身體是實現目標的基石。',
        date: '2021-04-01',
        group: '技術牛',
        icon: 'bx:bxl-react',
        title: 'React',
        url: 'https://reactjs.org',
    },
    {
        color: '#EBD94E',
        content: '路是走出來的，而不是空想出來的。',
        date: '2021-04-01',
        group: '架構組',
        icon: 'ion:logo-javascript',
        title: 'Js',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
    },
];

// 同樣，這裡的 url 也可以使用以 http 開頭的外部鏈接
const quickNavItems: WorkbenchQuickNavItem[] = [
    {
        color: '#1fdaca',
        icon: 'ion:home-outline',
        title: '首頁',
        url: '/',
    },
    {
        color: '#bf0c2c',
        icon: 'ion:grid-outline',
        title: '儀表盤',
        url: '/dashboard',
    },
    {
        color: '#e18525',
        icon: 'ion:layers-outline',
        title: '組件',
        url: '/demos/features/icons',
    },
    {
        color: '#3fb27f',
        icon: 'ion:settings-outline',
        title: '系統管理',
        url: '/demos/features/login-expired', // 這裡的 URL 是示例，實際項目中需要根據實際情況進行調整
    },
    {
        color: '#4daf1bc9',
        icon: 'ion:key-outline',
        title: '權限管理',
        url: '/demos/access/page-control',
    },
    {
        color: '#00d8ff',
        icon: 'ion:bar-chart-outline',
        title: '圖表',
        url: '/analytics',
    },
];

const todoItems = ref<WorkbenchTodoItem[]>([
    {
        completed: false,
        content: `審查最近提交到Git倉庫的前端代碼，確保代碼質量和規範。`,
        date: '2024-07-30 11:00:00',
        title: '審查前端代碼提交',
    },
    {
        completed: true,
        content: `檢查並優化系統性能，降低CPU使用率。`,
        date: '2024-07-30 11:00:00',
        title: '系統性能優化',
    },
    {
        completed: false,
        content: `進行系統安全檢查，確保沒有安全漏洞或未授權的訪問。 `,
        date: '2024-07-30 11:00:00',
        title: '安全檢查',
    },
    {
        completed: false,
        content: `更新項目中的所有npm依賴包，確保使用最新版本。`,
        date: '2024-07-30 11:00:00',
        title: '更新項目依賴',
    },
    {
        completed: false,
        content: `修復用戶報告的頁面UI顯示問題，確保在不同瀏覽器中顯示一致。 `,
        date: '2024-07-30 11:00:00',
        title: '修復UI顯示問題',
    },
]);
const trendItems: WorkbenchTrendItem[] = [
    {
        avatar: 'svg:avatar-1',
        content: `在 <a>開源組</a> 創建了項目 <a>Vue</a>`,
        date: '剛剛',
        title: '威廉',
    },
    {
        avatar: 'svg:avatar-2',
        content: `關注了 <a>威廉</a> `,
        date: '1個小時前',
        title: '艾文',
    },
    {
        avatar: 'svg:avatar-3',
        content: `發布了 <a>個人動態</a> `,
        date: '1天前',
        title: '克里斯',
    },
    {
        avatar: 'svg:avatar-4',
        content: `發表文章 <a>如何編寫一個Vite插件</a> `,
        date: '2天前',
        title: 'Vben',
    },
    {
        avatar: 'svg:avatar-1',
        content: `回復了 <a>杰克</a> 的問題 <a>如何進行項目優化？</a>`,
        date: '3天前',
        title: '皮特',
    },
    {
        avatar: 'svg:avatar-2',
        content: `關閉了問題 <a>如何運行項目</a> `,
        date: '1周前',
        title: '杰克',
    },
    {
        avatar: 'svg:avatar-3',
        content: `發布了 <a>個人動態</a> `,
        date: '1周前',
        title: '威廉',
    },
    {
        avatar: 'svg:avatar-4',
        content: `推送了代碼到 <a>Github</a>`,
        date: '2021-04-01 20:00',
        title: '威廉',
    },
    {
        avatar: 'svg:avatar-4',
        content: `發表文章 <a>如何編寫使用 Admin Vben</a> `,
        date: '2021-03-01 20:00',
        title: 'Vben',
    },
];

const router = useRouter();

// 這是一個示例方法，實際項目中需要根據實際情況進行調整
// This is a sample method, adjust according to the actual project requirements
function navTo(nav: WorkbenchProjectItem | WorkbenchQuickNavItem) {
    if (nav.url?.startsWith('http')) {
        openWindow(nav.url);
        return;
    }
    if (nav.url?.startsWith('/')) {
        router.push(nav.url).catch((error) => {
            console.error('Navigation failed:', error);
        });
    } else {
        console.warn(`Unknown URL for navigation item: ${nav.title} -> ${nav.url}`);
    }
}
</script>

<template>
    <div class="p-5">
        <ol>
            <li>各樣公告</li>
        </ol>
        <WorkbenchHeader :avatar="userStore.userInfo?.avatar || preferences.app.defaultAvatar">
            <template #title> 早安, {{ userStore.userInfo?.realName }}, 開始您一天的工作吧！ </template>
            <template #description> 今日晴，20℃ - 32℃！ </template>
        </WorkbenchHeader>

        <div class="mt-5 flex flex-col lg:flex-row">
            <div class="mr-4 w-full lg:w-3/5">
                <WorkbenchProject :items="projectItems" title="項目" @click="navTo" />
                <WorkbenchTrends :items="trendItems" class="mt-5" title="最新動態" />
            </div>
            <div class="w-full lg:w-2/5">
                <WorkbenchQuickNav :items="quickNavItems" class="mt-5 lg:mt-0" title="快捷導航" @click="navTo" />
                <WorkbenchTodo :items="todoItems" class="mt-5" title="待辦事項" />
                <AnalysisChartCard class="mt-5" title="訪問來源">
                    <AnalyticsVisitsSource />
                </AnalysisChartCard>
            </div>
        </div>
    </div>
</template>
