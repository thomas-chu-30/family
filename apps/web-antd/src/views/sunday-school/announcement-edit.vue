<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { TabPane, Tabs } from 'ant-design-vue';

const activeTab = ref('basic');
</script>

<template>
    <Page content-class="flex flex-col gap-4" header-class="pb-0" title="公告編輯">
        <template #description>
            <div class="text-muted-foreground">
                <p>bla ...</p>
            </div>
            <Tabs v-model:active-key="activeTab" :tab-bar-style="{ marginBottom: 0 }">
                <TabPane key="basic" tab="幼幼班" />
                <TabPane key="layout" tab="幼兒班" />
                <TabPane key="layout" tab="國小低班" />
                <TabPane key="layout" tab="國小高班" />
            </Tabs>
        </template>
        <div v-show="activeTab === 'basic'">basic</div>
        <div v-show="activeTab === 'layout'">layout</div>
    </Page>
</template>
