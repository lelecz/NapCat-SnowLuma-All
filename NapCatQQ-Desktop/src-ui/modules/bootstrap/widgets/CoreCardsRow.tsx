// 概览 Core 卡：NapCat 安装状态 + 可更新徽章，点卡跳组件页。
// SnowLuma 仓库已关闭：未安装不再显示占位卡；已安装仍保留管理入口。
// 图标微交互：摸卡时猫耳抖一抖。

import React, { useRef } from 'react';
import gsap from 'gsap';
import { Card, Badge } from '../../../shared/ui';
import { useMotion } from '../../../hooks/preferences/useMotion';
import napcatPng from '../../../assets/napcat-symbol-48.png?inline';
import type { UpdateAvailableItem } from '../../../core/domain/release/normalize';
import { formatVersion } from '../../../core/domain/bootstrap/overviewFormat';
import type { AppRoute } from '../../../core/domain/ui/route';

export interface CoreCardsRowProps {
    napcatVersion: string | null;
    snowlumaVersion: string | null;
    updates: UpdateAvailableItem[];
    onNavigate: (route: AppRoute) => void;
}

export const CoreCardsRow: React.FC<CoreCardsRowProps> = ({
    napcatVersion,
    snowlumaVersion,
    updates,
    onNavigate,
}) => {
    const napcatUpdate = updates.find((u) => u.project === 'napcat');
    const snowlumaUpdate = updates.find((u) => u.project === 'snowluma');
    const showSnowluma = snowlumaVersion !== null;

    return (
        <div
            className={
                showSnowluma
                    ? 'grid grid-cols-1 gap-3 sm:grid-cols-2'
                    : 'grid grid-cols-1'
            }
        >
            <CoreCard
                kind="napcat"
                label="NapCat"
                version={napcatVersion}
                update={napcatUpdate ?? null}
                onNavigate={onNavigate}
            />
            {showSnowluma && (
                <CoreCard
                    kind="snowluma"
                    label="SnowLuma"
                    version={snowlumaVersion}
                    update={snowlumaUpdate ?? null}
                    onNavigate={onNavigate}
                />
            )}
        </div>
    );
};

interface CoreCardProps {
    kind: 'napcat' | 'snowluma';
    label: string;
    version: string | null;
    update: UpdateAvailableItem | null;
    onNavigate: (route: AppRoute) => void;
}

const CoreCard: React.FC<CoreCardProps> = ({ kind, label, version, update, onNavigate }) => {
    const installed = version !== null;
    const hasUpdate = installed && update !== null;
    const dotClass = installed ? 'bg-success shadow-glow-success' : 'bg-text-disabled/80';
    const m = useMotion();
    const iconRef = useRef<HTMLDivElement>(null);

    // 摸到卡片时图标动一下：猫耳朵抖一抖。
    const nudgeIcon = () => {
        const el = iconRef.current;
        if (!el || !m.enabled || m.preset.feel.popPeak === 1) return;
        gsap.killTweensOf(el);
        gsap.fromTo(
            el,
            { rotate: -8 },
            { rotate: 0, duration: 0.7 / Math.max(0.5, m.speed), ease: 'ndf-wiggle' },
        );
    };

    return (
        <Card
            padding="md"
            hover="lift"
            onClick={() => onNavigate('components')}
            onMouseEnter={nudgeIcon}
            className="flex items-center gap-3.5 transition-all cursor-pointer hover:shadow-popover"
        >
            <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border-subtle/40 ${
                    kind === 'napcat' ? 'bg-brand-soft/80' : 'bg-info-soft/80'
                }`}
            >
                <div
                    ref={iconRef}
                    className="grid place-items-center"
                    style={{ transformOrigin: '50% 60%' }}
                >
                    <img
                        src={napcatPng}
                        alt=""
                        className="h-6 w-6 select-none"
                        draggable={false}
                    />
                </div>
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5">
                        <span
                            aria-hidden
                            className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`}
                        />
                        <p className="truncate font-display text-sm font-semibold leading-none text-text">
                            {label}
                        </p>
                    </div>
                    {hasUpdate && (
                        <Badge
                            tone="warning"
                            appearance="soft"
                            className="text-[10px] px-1 py-0 font-normal"
                        >
                            可更新
                        </Badge>
                    )}
                </div>
                <p
                    className={`mt-1.5 truncate text-[11.5px] tabular-nums ${
                        installed ? 'font-mono text-text-secondary' : 'text-text-tertiary'
                    }`}
                >
                    {installed ? formatVersion(version) : '未安装'}
                </p>
            </div>
        </Card>
    );
};
