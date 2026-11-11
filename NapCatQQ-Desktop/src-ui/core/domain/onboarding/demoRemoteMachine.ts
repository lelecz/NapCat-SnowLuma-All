// 演示远端 MachineView：假数据 + 真卡壳，零 SSH。
// 显式依赖：NC → QQ。SnowLuma 已不再公开分发，演示里不列它。

import type { ComponentInfo } from '../../ipc/types';
import type { MachineComponentRow, MachineView } from '../components/types';
import { DEMO_REMOTE_HOST_ID } from './tourIds';

function info(
    id: ComponentInfo['id'],
    display_name: string,
    description: string,
    category: ComponentInfo['category'],
): ComponentInfo {
    return {
        id,
        display_name,
        description,
        repo_url: null,
        supported_targets: [],
        category,
        uninstall: 'supported',
    };
}

function notInstalled(component: ComponentInfo): MachineComponentRow {
    return {
        info: component,
        status: { state: 'not_installed' },
    };
}

/** 演示用 Linux 远端：按显式依赖展示，全部未安装。 */
export function buildDemoRemoteMachine(): MachineView {
    return {
        host: {
            host_id: DEMO_REMOTE_HOST_ID,
            display_name: '演示远端（Linux）',
            os: 'linux',
            locality: 'remote',
            state: 'connected',
        },
        framework: [
            notInstalled(info('napcat', 'NapCat', '远端协议端，依赖 QQ', 'framework')),
        ],
        runtimeDep: [
            notInstalled(info('qq', 'QQ', 'NapCat 用（Linux QQ）', 'runtime_dep')),
        ],
        selfApp: [],
    };
}
