# NapCat 全生态镜像（单一仓库 · 七大分类）

[NapCat](https://github.com/NapNeko/NapCatQQ) 与 [SnowLuma](https://github.com/TomyJan/SnowLuma) 全生态的完整快照，
按用途分七类平铺在一个仓库里。克隆一次拿到全部 **48 个项目 / 16439 个文件 / 约 512 MB**，无需子模块。

```bash
git clone https://github.com/lelecz/NapCat-SnowLuma-All.git
```

## 01-core —— 协议端核心（2）

| 目录 | 说明 |
|---|---|
| `NapCatQQ/` | NapCat 本体：基于 NTQQ 的 Bot 协议端实现（TypeScript，1111 文件） |
| `SnowLuma/` | 新一代协议框架 v2.4.2，Next Remote Protocol（TypeScript，1367 文件） |

## 02-client —— 客户端 / 控制台 / 启动器（6）

| 目录 | 说明 |
|---|---|
| `NapCatQQ-Desktop/` | 官方 GUI 控制台 V3（Rust + Tauri + React，3046 文件） |
| `NapCat-Windows-Boot/` | Windows 启动引导（C++） |
| `napcat-linux-launcher/` | Linux 启动器（C++） |
| `NapCat-TUI-CLI/` | Linux 交互式 TUI 管理端（Shell） |
| `NapCat-Magic-Cli/` | CLI 工具（Python） |
| `NapCatQQ-CLI/` | 早期命令行客户端（Python） |

## 03-deploy —— 安装与部署（9）

| 目录 | 说明 |
|---|---|
| `NapCat-Installer/` | Linux 通用一键安装脚本 |
| `napcat-linux-installer/` | Linux 精简安装脚本 |
| `NapCat-Mac-Installer/` | macOS 安装器（Swift） |
| `NapCat-Win-Installer/` | Windows 安装器（C++） |
| `NapCat-Termux/` | Android Termux 部署 |
| `NapCat-Docker/` | 官方 Docker 镜像构建 |
| `NapCat.Docker.Framework/` | Docker 运行时框架 |
| `NapCatAppImageBuild/` | AppImage 打包 |
| `NapCatLinuxNodeLoader/` | Linux 下 Node 原生模块加载器 |

## 04-plugins —— 插件生态（5）

| 目录 | 说明 |
|---|---|
| `napcat-plugin-template/` | 官方插件模板（TS，52 文件） |
| `napcat-plugin-debug/` | 调试插件 |
| `napcat-plugin-cleaner/` | 清理插件 |
| `napcat-plugin-index-archive/` | 插件索引（已归档） |
| `LiteLoader-NapCatExample/` | LiteLoaderQQNT 加载示例 |

## 05-native —— 底层 / Hook / 原生模块（12）

| 目录 | 说明 |
|---|---|
| `NapCat-Hook/` | Hook 框架（CMake） |
| `NapCat-Native/` | 原生模块（C++） |
| `NapCatNative-legacy/` | 原生模块旧版（C） |
| `NapCat-Core-Lib/` | 核心库（上游为空仓库） |
| `BytecodeInjectBoot/` | 字节码注入引导 |
| `NC-BootWay05/` | 注入引导实验（C++） |
| `FridaNodeTest/` | Frida 与 Node 互通测试（C++） |
| `PacketRelease/` | 封包处理 |
| `ffmpegAddon/` | FFmpeg 原生插件（C，44 文件） |
| `ffmpeg-build/` | FFmpeg 构建脚本 |
| `ntsilkwasm/` | SILK 音频编解码 WASM（TS） |
| `ntsilkwasm.core/` | SILK 编解码内核（C，8189 文件） |

## 06-tools —— 工具 / 研究 / 数据（9）

| 目录 | 说明 |
|---|---|
| `NTQQAntiRecall/` | 防撤回（C++） |
| `qq_dump_db/` | QQ 数据库导出（C++） |
| `NTQQScanQuick/` | 快速扫描工具（C++） |
| `protobuf-decoder/` | Protobuf 解码器 |
| `NapProto/` | 协议定义（TS） |
| `napcat-protocol/` | 协议说明 |
| `NapCatReforged-archive/` | 旧版重构（已归档） |
| `LLQQNT-Protocol-Enhance-archive/` | LiteLoader 协议增强（已归档） |
| `napcat-pr-release/` | PR 构建产物 |

## 07-docs —— 文档与站点（3）

| 目录 | 说明 |
|---|---|
| `NapCatDocs/` | 官方文档（HTML，799 文件） |
| `napneko.github.io/` | 官网源码（1184 文件） |
| `NapCatRoadMap/` | 路线图 |

## 自动重建

Actions → **Build monorepo** → Run workflow

工作流会按上面的分类映射重新拉取各仓库 main 分支并平铺合并；优先从 `lelecz/` 名下的 fork 拉，缺失则回退上游。

## 说明

- 快照时间：2026-11-11
- 各目录保留上游 LICENSE 与版权声明，使用遵守上游许可与当地法律法规
- 归档（archive）仓库与空仓库原样保留，便于对照历史
