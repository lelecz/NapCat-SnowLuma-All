// 框架对比 tour 步骤（本机 NC + 演示远端依赖）。
// SnowLuma 已不再公开分发，未安装的机器上没有它的下载入口，引导里也不再介绍。
// 显式依赖以产品为准；安装过程中的 ZIP / QQ 系统库会自动处理，不单列成「你要先装」项。

import { DEMO_REMOTE_HOST_ID, TOUR_IDS, type TourTargetId } from './tourIds';

export type FrameworkTourPhase = 'local' | 'remote' | 'bots';

export type FrameworkTourStep = {
    id: string;
    phase: FrameworkTourPhase;
    target: TourTargetId;
    title: string;
    body: string;
    /** 进入该步时选中的主机；默认本机 local。bots 阶段不选主机 */
    selectHostId?: string;
};

export const LOCAL_FRAMEWORK_STEPS: readonly FrameworkTourStep[] = [
    {
        id: 'local-framework-group',
        phase: 'local',
        target: TOUR_IDS.groupFramework,
        title: '协议端',
        body: 'Bot 跑在协议端上，Windows 本机只要 QQ。下面的「应用端」是接在协议端后面的插件框架，按实例装。',
        selectHostId: 'local',
    },
    {
        id: 'local-napcat',
        phase: 'local',
        target: TOUR_IDS.rowNapcat,
        title: '本机 NapCat',
        body: 'HOOK QQNT 的协议端，不带 QQ 窗口。',
        selectHostId: 'local',
    },
    {
        id: 'local-qq',
        phase: 'local',
        target: TOUR_IDS.rowQq,
        title: '本机 QQ',
        body: 'NapCat 挂在这上面。',
        selectHostId: 'local',
    },
];

export const REMOTE_DEMO_STEPS: readonly FrameworkTourStep[] = [
    {
        id: 'remote-host-tab',
        phase: 'remote',
        target: TOUR_IDS.hostTabDemoRemote,
        title: '演示远端（Linux）',
        body: '假主机，不写档案、不连 SSH。用来对照 Linux 上要装什么；真远端在「远程」页添加。',
        selectHostId: DEMO_REMOTE_HOST_ID,
    },
    {
        id: 'remote-napcat',
        phase: 'remote',
        target: TOUR_IDS.rowNapcat,
        title: '远端 NapCat',
        body: 'Linux 上主要依赖 QQ。装框架时 ZIP 等会自动带上；本机装好的不会同步到远端。',
        selectHostId: DEMO_REMOTE_HOST_ID,
    },
    {
        id: 'remote-deps',
        phase: 'remote',
        target: TOUR_IDS.groupRuntime,
        title: '远端运行时',
        body: '远端 NapCat 对应 QQ；ZIP / 系统库安装时会自动处理。',
        selectHostId: DEMO_REMOTE_HOST_ID,
    },
];

/**
 * 组件认路之后：走一遍「添加 Bot」演示流程。
 * 会打开真实新建页并预填演示数据，保存被拦截，不会写入配置。
 */
export const BOT_CREATE_STEPS: readonly FrameworkTourStep[] = [
    {
        id: 'bots-nav',
        phase: 'bots',
        target: TOUR_IDS.navBots,
        title: '侧栏 · 机器人',
        body: '「组件」页装依赖，这里建 Bot、启停、扫码。',
    },
    {
        id: 'bots-list',
        phase: 'bots',
        target: TOUR_IDS.botListHeader,
        title: 'Bot 实例列表',
        body: '每个实例一份配置，卡片上启动、配置、日志。下一步打开演示新建页。',
    },
    {
        id: 'bots-create-open',
        phase: 'bots',
        target: TOUR_IDS.botConfigHeader,
        title: '进入新建 Bot',
        body: '这是真实的新建页。已预填演示 QQ 与名称，仅供认路；点保存会被拦住，不会写入磁盘。',
    },
    {
        id: 'bots-identity',
        phase: 'bots',
        target: TOUR_IDS.botIdentitySection,
        title: '① 身份 · 账号与框架',
        body: 'QQ 账号、实例名称、底座。新建时 QQ 号会作为实例 id，保存后一般不能改。',
    },
    {
        id: 'bots-runtime',
        phase: 'bots',
        target: TOUR_IDS.botRuntimeSection,
        title: '① 身份 · 跑在哪',
        body: '本机直接跑，或选远程主机。远程 Linux 还可选直接运行 / Docker。演示默认本机。',
    },
    {
        id: 'bots-connections',
        phase: 'bots',
        target: TOUR_IDS.botConnectionsBody,
        title: '② 连接 · 对外通道',
        body: '至少一个 OneBot 通道（HTTP / WebSocket 等），外部才能连这个 Bot。底部可新增。',
    },
    {
        id: 'bots-save',
        phase: 'bots',
        target: TOUR_IDS.botSaveActions,
        title: '③ 保存（演示）',
        body: '日常填完点保存会写入配置。演示模式下点保存只会提示「不会真正添加」。',
    },
    {
        id: 'bots-after',
        phase: 'bots',
        target: TOUR_IDS.botListHeader,
        title: '真建好之后',
        body: '回到列表点启动，出码用手机 QQ 扫；超时再开一次登录。状态变绿即登录成功。',
    },
];

/** 组件页遮罩：本机 + 演示远端。创建 Bot 不接在后面，结束后另弹介绍层。 */
export const FULL_FRAMEWORK_TOUR_STEPS: readonly FrameworkTourStep[] = [
    ...LOCAL_FRAMEWORK_STEPS,
    ...REMOTE_DEMO_STEPS,
];
