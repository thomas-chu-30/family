import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
    return {
        application: {},
        vite: {
            server: {
                proxy: {
                    '/api': {
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, ''),
                        // mock代理目标地址
                        target: 'http://localhost:5320/api',
                        ws: true,
                    },
                    '/nest-api': {
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/nest-api/, ''),
                        // mock代理目标地址
                        target: 'http://localhost:3000/nest-api',
                        ws: true,
                    },
                },
            },
        },
    };
});
