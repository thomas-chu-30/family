<script lang="ts" setup>
import type { WorkbenchTrendItem } from '@vben/common-ui';

import { WorkbenchTrends } from '@vben/common-ui';

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
</script>

<template>
    <div class="p-5">
        <WorkbenchTrends :items="trendItems" class="mt-5" title="幼幼班-最新動態" />
        <WorkbenchTrends :items="trendItems" class="mt-5" title="幼兒班-最新動態" />
    </div>
</template>
