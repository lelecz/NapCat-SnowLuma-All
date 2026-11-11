# NapCat + SnowLuma 全生态（单一仓库）

把 [NapCat](https://github.com/NapNeko/NapCatQQ) 与 [SnowLuma](https://github.com/TomyJan/SnowLuma) 全生态，
**平铺合并进一个仓库**，作为防上游删库 / 改协议 / 断更的完整快照。克隆一次即可拿到全部源码，无需子模块。

## 克隆

```bash
git clone https://github.com/lelecz/NapCat-SnowLuma-All.git
```

## 目录

| 目录 | 说明 | 文件数 | 上游 |
|---|---|---|---|
| `NapCatQQ/` | NapCat 协议端本体（NTQQ Bot 框架，TS） | 1111 | NapNeko/NapCatQQ |
| `SnowLuma/` | SnowLuma 协议框架 v2.4.2（TS） | 1367 | TomyJan/SnowLuma |
| `NapCatQQ-Desktop/` | GUI 控制台 V3（Rust+Tauri+React） | 3046 | NapNeko/NapCatQQ-Desktop |
| `NapCat-Installer/` | Linux 一键安装脚本 | 22 | NapNeko/NapCat-Installer |
| `NapCat-Termux/` | Android Termux 部署 | 10 | NapNeko/NapCat-Termux |
| `LiteLoader-NapCatExample/` | LiteLoaderQQNT 加载示例 | 12 | NapNeko/LiteLoader-NapCatExample |
| `BytecodeInjectBoot/` | 字节码注入引导 | 1 | NapNeko/BytecodeInjectBoot |

合计 **5571 个文件 / 约 202 MB**（快照时间 2026-11-11）。

## 更新

`.github/workflows/merge-monorepo.yml` 会在 GitHub 服务器端重新拉取本人名下各 fork 的 main 并平铺合并：

Actions → *Merge into monorepo* → Run workflow

本地快速更新单个项目：

```bash
# 例：只更新 NapCatQQ 目录（保持其他不动）
git subtree pull --prefix=NapCatQQ https://github.com/lelecz/NapCatQQ.git main --squash
```

## 上游与许可

各目录保留原项目的 LICENSE 与版权声明；使用请遵守上游许可证与当地法律法规。
