import { defineConfig } from 'vite';
import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import { builtinModules } from 'module';
import fs from 'fs';

const nodeModules = [...builtinModules, builtinModules.map((m) => `node:${m}`)].flat();
// 依赖排除
const external = [];
// 构建后拷贝插件
// function copyToShellPlugin () {
//   return {
//     name: 'copy-to-shell',
//     writeBundle () {
//       try {
//         const sourceDir = resolve(__dirname, 'dist');
//         const targetDir = resolve(__dirname, '../napcat-shell/dist/plugins/napcat-plugin-cleaner');
//         const packageJsonSource = resolve(__dirname, 'package.json');
//         const webuiSourceDir = resolve(__dirname, 'webui');
//         const webuiTargetDir = resolve(targetDir, 'webui');

//         // 确保目标目录存在
//         if (!fs.existsSync(targetDir)) {
//           fs.mkdirSync(targetDir, { recursive: true });
//           console.log(`[copy-to-shell] Created directory: ${targetDir}`);
//         }

//         // 拷贝 dist 目录下的所有文件
//         const files = fs.readdirSync(sourceDir);
//         let copiedCount = 0;

//         files.forEach(file => {
//           const sourcePath = resolve(sourceDir, file);
//           const targetPath = resolve(targetDir, file);

//           if (fs.statSync(sourcePath).isFile()) {
//             fs.copyFileSync(sourcePath, targetPath);
//             copiedCount++;
//           }
//         });

//         // 拷贝 package.json
//         if (fs.existsSync(packageJsonSource)) {
//           const packageJsonTarget = resolve(targetDir, 'package.json');
//           fs.copyFileSync(packageJsonSource, packageJsonTarget);
//           copiedCount++;
//         }

//         // 拷贝 webui 目录
//         if (fs.existsSync(webuiSourceDir)) {
//           copyDirRecursive(webuiSourceDir, webuiTargetDir);
//           console.log(`[copy-to-shell] Copied webui directory to ${webuiTargetDir}`);
//         }

//         console.log(`[copy-to-shell] Successfully copied ${copiedCount} file(s) to ${targetDir}`);
//       } catch (error) {
//         console.error('[copy-to-shell] Failed to copy files:', error);
//         throw error;
//       }
//     },
//   };
// }

// 递归复制目录
function copyDirRecursive(src: string, dest: string) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 构建后复制 webui 到 dist 目录
function copyWebuiPlugin() {
  return {
    name: 'copy-webui',
    writeBundle() {
      try {
        const webuiSource = resolve(__dirname, 'webui/dist/dashboard.html');
        const webuiTargetDir = resolve(__dirname, 'dist/webui');
        const webuiTarget = resolve(webuiTargetDir, 'dashboard.html');
        const packageJsonSource = resolve(__dirname, 'package.json');
        const packageJsonTarget = resolve(__dirname, 'dist/package.json');

        // 确保目标目录存在
        if (!fs.existsSync(webuiTargetDir)) {
          fs.mkdirSync(webuiTargetDir, { recursive: true });
        }

        // 复制 dashboard.html
        if (fs.existsSync(webuiSource)) {
          fs.copyFileSync(webuiSource, webuiTarget);
          console.log(`[copy-webui] Copied dashboard.html to ${webuiTarget}`);
        } else {
          console.warn(`[copy-webui] Warning: ${webuiSource} not found. Run 'pnpm --filter webui build' first.`);
        }

        // 生成精简的 package.json（只保留运行时必要字段）
        if (fs.existsSync(packageJsonSource)) {
          const pkg = JSON.parse(fs.readFileSync(packageJsonSource, 'utf-8'));
          const distPkg = {
            name: pkg.name,
            plugin: pkg.plugin,
            version: pkg.version,
            type: pkg.type,
            main: pkg.main,
            description: pkg.description,
            author: pkg.author,
            dependencies: pkg.dependencies,
          };
          fs.writeFileSync(packageJsonTarget, JSON.stringify(distPkg, null, 2));
          console.log(`[copy-webui] Generated package.json to ${packageJsonTarget}`);
        }
      } catch (error) {
        console.error('[copy-webui] Failed to copy webui:', error);
      }
    },
  };
}

export default defineConfig({
  resolve: {
    conditions: ['node', 'default'],
    alias: {
      '@/napcat-core': resolve(__dirname, '../napcat-core'),
      '@': resolve(__dirname, '../'),
    },
  },
  build: {
    sourcemap: false,
    target: 'esnext',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'index.mjs',
    },
    rollupOptions: {
      external: [...nodeModules, ...external],
    },
  },
  plugins: [nodeResolve(), copyWebuiPlugin()],
});
