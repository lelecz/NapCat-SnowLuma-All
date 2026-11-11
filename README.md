# NapCat + SnowLuma 全生态聚合仓库

把 [NapCat](https://github.com/NapNeko/NapCatQQ) 与 [SnowLuma](https://github.com/TomyJan/SnowLuma) 全生态，
以 **git submodule** 形式锁定在本人账号下的 fork 快照，防止上游删库 / 改协议 / 断更。

## 一键全部拉取

```bash
git clone --recursive https://github.com/lelecz/NapCat-SnowLuma-All.git
# 已克隆过：
git submodule update --init --recursive
```

## 子模块（7 个，锁定 main 当前提交）

| 目录 | 说明 | 锁定提交 |
|---|---|---|
| [`NapCatQQ`](./NapCatQQ) | NapCat 协议端本体（NTQQ Bot 框架，TypeScript） | `72912f293924` |
| [`SnowLuma`](./SnowLuma) | 新一代协议框架 v2.4.2（Next Remote Protocol，TypeScript） | `f2ea3354f8bb` |
| [`NapCatQQ-Desktop`](./NapCatQQ-Desktop) | 官方 GUI 控制台 V3（Rust + Tauri + React） | `0ad64a4ce233` |
| [`NapCat-Installer`](./NapCat-Installer) | Linux 一键安装脚本 | `cbc0f10212a6` |
| [`NapCat-Termux`](./NapCat-Termux) | Android Termux 部署 | `9f011b5aaa49` |
| [`LiteLoader-NapCatExample`](./LiteLoader-NapCatExample) | LiteLoaderQQNT 加载示例 | `65e016bb24bb` |
| [`BytecodeInjectBoot`](./BytecodeInjectBoot) | 字节码注入引导 | `8ad8c8e4d475` |

## 同步上游最新

```bash
git submodule update --remote --merge
git commit -am "sync upstream"
git push
```

## 上游

NapNeko/NapCatQQ · TomyJan/SnowLuma · NapNeko/NapCatQQ-Desktop · NapNeko/NapCat-Installer · NapNeko/NapCat-Termux · NapNeko/LiteLoader-NapCatExample · NapNeko/BytecodeInjectBoot
