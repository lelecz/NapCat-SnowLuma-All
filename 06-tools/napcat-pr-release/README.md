# napcat-pr-release

NapCatQQ PR 构建产物的临时发布仓库。

- 每次 PR 构建成功后，CI 会自动在此仓库创建 prerelease，包含构建产物和安装脚本。
- Release tag 格式：`pr-<PR号>-<短SHA>`
- 这些 release 为**测试用途**，请勿用于生产环境。
