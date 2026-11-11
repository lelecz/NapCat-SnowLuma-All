// 账号和底座选择；功能开关与本机组件安装状态共同决定底座可选项。
import { useEffect, useMemo } from 'react';
import { Badge, FormSection, NumberField, TextField } from '../../../../shared/ui';
import { useFeatures } from '../../../../hooks/preferences/featureTogglesStore';
import { useRuntimeReadiness } from '../../../../hooks/components/useRuntimeReadiness';
import type { BackendType } from '../../../../core/ipc/generated/domain/BackendType';
import type { IdentityTabProps } from './identityConfig';
import { IdentityChoiceCard } from './IdentityChoiceCard';

const BACKEND_ITEMS: ReadonlyArray<{
    value: BackendType;
    label: string;
    badge: string;
    summary: string;
    tone: 'brand' | 'info';
}> = [
    {
        value: 'napcat',
        label: 'NapCat',
        badge: '不带 QQ GUI',
        summary: '运行时关闭 QQ 客户端窗口，纯后台轻量托管',
        tone: 'brand',
    },
    {
        value: 'snowluma',
        label: 'SnowLuma',
        badge: '带 QQ GUI',
        summary: '保留 QQ 客户端窗口，支持桌面交互与远端 VNC',
        tone: 'info',
    },
];

export function IdentityAccountSection({
    data,
    onChange,
    isEditMode,
    isRunning,
}: Pick<IdentityTabProps, 'data' | 'onChange' | 'isEditMode' | 'isRunning'>) {
    // 设置里关掉的协议端不给选；已经是它的（老配置）照常显示
    const features = useFeatures();
    // SnowLuma 仓库已关闭：本机没装时不再提供这个底座选项；编辑已有 SL Bot 例外保留
    const { readiness, probing } = useRuntimeReadiness('local', 'snowluma');
    const localSnowLumaUsable = useMemo(() => {
        if (isEditMode && data.backend_type === 'snowluma') return true;
        if (probing || !readiness) return true; // 探测完成前先不隐藏，避免闪没
        return readiness.root.status.state === 'satisfied';
    }, [isEditMode, data.backend_type, readiness, probing]);
    const backendItems = useMemo(
        () =>
            BACKEND_ITEMS.filter(
                (i) =>
                    (features[i.value] || i.value === data.backend_type) &&
                    (i.value !== 'snowluma' || localSnowLumaUsable),
            ),
        [features, data.backend_type, localSnowLumaUsable],
    );
    // 新建时默认的底座被关了，换成开着的那个（两个至少留一个）
    useEffect(() => {
        if (isEditMode || features[data.backend_type]) return;
        if (data.backend_type === 'snowluma' && !localSnowLumaUsable) {
            onChange({ backend_type: 'napcat' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- onChange 每次渲染都是新的
    }, [isEditMode, features, data.backend_type, localSnowLumaUsable]);

    const namePlaceholder = useMemo(() => {
        if (data.QQID > 0) {
            const tail = String(data.QQID).slice(-4);
            return `Bot-${tail}`;
        }
        return '例如：Bot-01';
    }, [data.QQID]);

    return (
        <div data-tour-id="bot-identity-section">
            <FormSection title="账号与底座">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <NumberField
                        label="QQ 账号"
                        required
                        value={data.QQID || null}
                        onValueChange={(v) => onChange({ QQID: v ?? 0 })}
                        placeholder="例如：10001"
                        disabled={isEditMode}
                    />
                    <TextField
                        label="实例名称"
                        value={data.name}
                        onValueChange={(v) => onChange({ name: v })}
                        placeholder={namePlaceholder}
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-text-secondary">底座类型</span>
                        {isRunning && (
                            <span className="text-2xs text-text-tertiary">
                                运行中需先停止再切换底座
                            </span>
                        )}
                    </div>
                    <div
                        role="radiogroup"
                        aria-label="底座类型"
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                    >
                        {backendItems.map((item) => (
                            <IdentityChoiceCard
                                key={item.value}
                                selected={data.backend_type === item.value}
                                disabled={isRunning}
                                onSelect={() => onChange({ backend_type: item.value })}
                                label={item.label}
                                summary={item.summary}
                                badge={
                                    <Badge
                                        tone={item.tone}
                                        appearance="soft"
                                        className="shrink-0 text-[11px]"
                                    >
                                        {item.badge}
                                    </Badge>
                                }
                            />
                        ))}
                    </div>
                </div>
            </FormSection>
        </div>
    );
}
