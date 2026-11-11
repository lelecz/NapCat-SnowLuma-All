import type { PluginModule } from 'napcat-types/napcat-onebot/network/plugin-manger';
import fs from 'fs';
import path from 'path';

import { pluginState } from './core/state';
import { computeNtHash, loadConfig } from './core/utils';
import { registerApiRoutes } from './services/api-service';
import { initAllScheduleTasks, clearAllScheduleTimers } from './services/schedule-service';

const plugin_init: PluginModule['plugin_init'] = async (ctx) => {
    pluginState.logger = ctx.logger;
    pluginState.dataPath = ctx.core.dataPath;
    pluginState.configPath = ctx.configPath;

    pluginState.log('info', 'NapCat 缓存清理插件已初始化');
    pluginState.log('info', `运行平台: ${pluginState.isWindows ? 'Windows' : 'Linux'}`);
    pluginState.log('info', `dataPath: ${pluginState.dataPath}`);

    // 使用 getLoginList() 获取所有登录过的账号的 uin/uid 映射
    try {
        const loginService = ctx.core.context.wrapper.NodeIKernelLoginService.get();
        const loginResult = await loginService.getLoginList();

        pluginState.log('info', `getLoginList 返回: result=${loginResult.result}, count=${loginResult.LocalLoginInfoList?.length || 0}`);

        if (loginResult.result === 0 && loginResult.LocalLoginInfoList) {
            pluginState.log('info', `获取到 ${loginResult.LocalLoginInfoList.length} 个登录账号`);

            for (const item of loginResult.LocalLoginInfoList) {
                if (item.uin && item.uid) {
                    pluginState.uinToUidMap.set(item.uin, item.uid);

                    // 如果是当前账号，设置 currentUid
                    if (item.uin === ctx.core.selfInfo.uin) {
                        pluginState.currentUid = item.uid;
                    }

                    // 预计算并缓存 hash 目录 (Linux)
                    if (!pluginState.isWindows) {
                        const hash = computeNtHash(item.uid);
                        const hashDir = path.join(pluginState.dataPath, `nt_qq_${hash}`);
                        if (fs.existsSync(hashDir)) {
                            pluginState.uinToHashDirMap.set(item.uin, hashDir);
                            pluginState.log('info', `账号 ${item.uin} 的 hash 目录已缓存: ${hashDir}`);
                        } else {
                            pluginState.log('warn', `账号 ${item.uin} 的 hash 目录不存在: ${hashDir}`);
                        }
                    }

                    pluginState.log('info', `已加载账号映射: uin=${item.uin}, uid=${item.uid}, nickName=${item.nickName || 'N/A'}`);
                }
            }
        } else {
            pluginState.log('warn', `getLoginList 返回结果异常: result=${loginResult.result}`);
        }
    } catch (e) {
        pluginState.log('warn', `通过 getLoginList 获取账号列表失败: ${e}`);

        // 回退到原有的 selfInfo 方式
        const selfInfo = ctx.core.selfInfo;
        if (selfInfo.uid && selfInfo.uin) {
            pluginState.currentUid = selfInfo.uid;
            pluginState.uinToUidMap.set(selfInfo.uin, selfInfo.uid);
            pluginState.log('info', `回退使用 selfInfo: uin=${selfInfo.uin}, uid=${selfInfo.uid}`);

            // 预计算并缓存 hash 目录 (Linux)
            if (!pluginState.isWindows) {
                const hash = computeNtHash(selfInfo.uid);
                const hashDir = path.join(pluginState.dataPath, `nt_qq_${hash}`);
                if (fs.existsSync(hashDir)) {
                    pluginState.uinToHashDirMap.set(selfInfo.uin, hashDir);
                    pluginState.log('info', `Linux hash 目录已缓存`);
                }
            }
        } else {
            pluginState.log('warn', `selfInfo 信息不完整: uid=${selfInfo.uid}, uin=${selfInfo.uin}`);
        }
    }

    // 加载配置
    loadConfig();

    // 初始化定时任务
    initAllScheduleTasks();

    // 注册静态资源
    ctx.router.static('/static', 'webui');

    // 插件信息脚本（用于前端获取插件名）
    ctx.router.get('/static/plugin-info.js', (_req: any, res: any) => {
        try {
            res.type('application/javascript');
            res.send(`window.__PLUGIN_NAME__ = ${JSON.stringify(ctx.pluginName)};`);
        } catch (e) {
            res.status(500).send('// failed to generate plugin-info');
        }
    });

    // 注册 API 路由
    registerApiRoutes(ctx.router, ctx.core.selfInfo.uin);

    // 注册扩展页面
    ctx.router.page({
        path: 'dashboard',
        title: '缓存清理',
        icon: '🧹',
        htmlFile: 'webui/dashboard.html',
        description: '查看和清理 QQ 缓存文件',
    });

    pluginState.log('info', 'WebUI 路由已注册:');
    pluginState.log('info', '  - API 路由: /api/Plugin/ext/' + ctx.pluginName + '/');
    pluginState.log('info', '  - 扩展页面: /plugin/' + ctx.pluginName + '/page/dashboard');
};

const plugin_cleanup: PluginModule['plugin_cleanup'] = async () => {
    clearAllScheduleTimers();
    pluginState.log('info', '缓存清理插件已卸载');
};

export { plugin_init, plugin_cleanup };
