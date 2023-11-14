import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    plugins: [
        handlebars({
            partialDirectory: [resolve(__dirname, 'src/partials'), resolve(__dirname, 'src/pages')],
        }),
    ],
    server: {
        port: 3000
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: 'src/index.html',
                signin: 'src/pages/signin.html',
                signup: 'src/pages/signup.html',
                profile: 'src/pages/profile.html',
                chats: 'src/pages/chats.html',
                404: 'src/pages/404.html',
                500: 'src/pages/500.html',
            }
        }
    }
})
