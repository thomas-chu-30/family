<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useAccessStore } from '@vben/stores';

const route = useRoute();
const router = useRouter();
const code = route.query.code;
// console.log(code);
const accessStore = useAccessStore();
async function requestAccessToken() {
    const url = 'https://api.line.me/oauth2/v2.1/token';

    const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string, // 授權碼
        redirect_uri: 'http://localhost:5666/line-login',
        client_id: '2006760974', // 你的 Client ID
        client_secret: 'a3647c185ad91c7c86517f65d619c001', // 你的 Client Secret
        // code_verifier: 'your_generated_code_verifier', // 如果使用 PKCE 流程
    });

    const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
    });

    const request = new Request(url, {
        method: 'POST',
        headers: headers,
        body: params.toString(),
    });

    try {
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log('Access Token Response:', data);
        const accessToken = data.access_token;
        await getUserProfile(accessToken);
        // console.log('User Profile:', profile);
        accessStore.setAccessToken('accessToken');
        // console.log('accessToken', accessStore.accessToken);
        router.push('/');
    } catch (error) {
        console.error('Error requesting access token:', error);
    }
}

async function getUserProfile(accessToken: string) {
    const url = 'https://api.line.me/v2/profile';

    const headers = new Headers({
        Authorization: `Bearer ${accessToken}`,
    });

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const profile = await response.json();
        // console.log('User Profile:', profile);
        return profile;
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
}

requestAccessToken();
</script>
<template>
    <div class="flex h-screen items-center justify-center">loading...</div>
</template>
