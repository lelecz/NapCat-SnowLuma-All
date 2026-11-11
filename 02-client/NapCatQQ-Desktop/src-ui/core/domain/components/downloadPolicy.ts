// SnowLuma 不再公开分发，移除相关下载入口。
// 已安装的保留管理功能（配置/启停），未安装的隐藏相关 UI 逻辑。
import type { ComponentId } from '../../ipc/types';
import type { HostComponentStatus } from './types';

/** 不再公开分发的组件集合（仓库私有化，不再提供安装/更新下载） */
export const UNAVAILABLE_COMPONENTS: ReadonlySet<ComponentId> = new Set(['snowluma']);

/** 该组件是否不再允许通过桌面端下载安装 */
export function isComponentUnavailable(id: ComponentId): boolean {
    return UNAVAILABLE_COMPONENTS.has(id);
}

/** 不可下载的组件在未安装时不应出现在组件列表中 */
export function shouldListComponent(id: ComponentId, status: HostComponentStatus): boolean {
    if (!isComponentUnavailable(id)) return true;
    // 已安装/版本不符但已检测到 -> 保留管理入口；未知状态也保留，让用户可重试探测
    return (
        status.state === 'installed' ||
        status.state === 'unusable' ||
        status.state === 'unknown'
    );
}

/** 不可下载的组件不应显示更新按钮（仓库关闭后无法获取新版本） */
export function isComponentUpdatable(id: ComponentId): boolean {
    return !isComponentUnavailable(id);
}
