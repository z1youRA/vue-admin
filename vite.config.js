import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import process from 'process'

export default defineConfig({
    define: { 'process.env': {} },
    server: {
        https: false,
        proxy: {
            '/api': {
                target: 'https://lianghj.top:8888/api/private/v1/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: false
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: false
        }),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
            // 指定symbolId格式
            symbolId: 'icon-[name]'
        })
    ],
    resolve: { alias: { '@': path.resolve(process.cwd(), 'src') } }
})
