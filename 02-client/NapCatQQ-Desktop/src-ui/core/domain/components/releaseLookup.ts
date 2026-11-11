// 组件 id → 远端 release 快照的映射表：「更新到 vX」按钮与「日志」按钮共用。
// QQ 走 pcConfig 版本探测没有 changelog，latestReleaseFor 只给 GitHub release 组件。

import type { ReleaseInfoView, ReleaseSnapshotView } from '../release/normalize';
import type { ComponentId, Os } from '../../ipc/types';

export function resolveLatestVersion(
    releases: ReleaseSnapshotView,
    hostOs: Os | undefined,
    id: ComponentId,
): string | null {
    switch (id) {
        case 'napcat':
            return releases.napcat?.version ?? null;
        case 'snowluma':
            // 仓库已不再公开，桌面端不提供 SnowLuma 下载/更新
            return null;
        case 'desktop_self':
            return releases.desktop?.version ?? null;
        case 'ncd_watch':
            return releases.ncdWatch?.version ?? null;
        case 'qq':
            // 按当前主机 OS 选 Linux/Windows 探测结果；远端几乎全是 Linux QQ
            if (hostOs === 'windows') {
                return releases.qqWindows?.version ?? null;
            }
            return releases.qqLinux?.version ?? releases.qqWindows?.version ?? null;
        default:
            return null;
    }
}

export function resolveLatestRelease(
    releases: ReleaseSnapshotView,
    id: ComponentId,
): ReleaseInfoView | null {
    switch (id) {
        case 'napcat':
            return releases.napcat;
        case 'snowluma':
            return null;
        case 'desktop_self':
            return releases.desktop;
        case 'ncd_watch':
            return releases.ncdWatch;
        default:
            return null;
    }
}

export function releaseNotesLabel(id: ComponentId | null): string {
    switch (id) {
        case 'napcat':
            return 'NapCat';
        case 'snowluma':
            return 'SnowLuma（仓库已关闭）';
        case 'desktop_self':
            return 'NapCatQQ Desktop';
        case 'ncd_watch':
            return 'ncd-watch';
        default:
            return '组件';
    }
}
