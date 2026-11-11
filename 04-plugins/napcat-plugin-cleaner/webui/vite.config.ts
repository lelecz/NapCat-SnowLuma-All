import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { resolve } from 'path'
import fs from 'fs'
// 从 package.json 读取版本号
import pkg from '../package.json'

// 自定义插件：构建完成后将 index.html 重命名为 dashboard.html 并移动到 webui 根目录
function renameToDashboard(): Plugin {
    return {
        name: 'rename-to-dashboard',
        closeBundle() {
            const distPath = resolve(__dirname, 'dist/index.html')
            const targetPath = resolve(__dirname, 'dist/dashboard.html')
            if (fs.existsSync(distPath)) {
                fs.copyFileSync(distPath, targetPath)
                console.log('\n✓ 已在 dist 目录生成 dashboard.html')
            }
        }
    }
}

export default defineConfig({
    plugins: [react(), viteSingleFile(), renameToDashboard()],
    define: {
        '__APP_VERSION__': JSON.stringify(pkg.version)
    },
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        cssCodeSplit: false,
        assetsInlineLimit: 100000000,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
            output: {
                inlineDynamicImports: true,
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:6099',
                changeOrigin: true,
            }
        },
    },
})