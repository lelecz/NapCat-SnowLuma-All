# -*- coding: utf-8 -*-
"""
此页面是用于管理 NapCatQQ 及其相关组件的页面

包含 安装、更新 NapCatQQ 以及 QQ 的功能
"""

from textual.screen import Screen
from textual.app import ComposeResult

from textual.widgets import Header, Footer, TabbedContent, TabPane, Placeholder, Label, Link, Static, Markdown, Button
from textual.containers import Vertical, Horizontal
from textual.widget import Widget

from models import AppInfoModel


TEST_MARKDOWN = """
# V4.8.124\r\n[使用文档](https://napneko.github.io/)\r\n\r\n## Windows 一键包\r\n我们为提供了的轻量化一键部署方案\r\n相对于普通需要安装QQ的方案,下面已内置QQ和Napcat 阅读使用文档参考\r\n\r\n你可以下载 \r\n\r\nNapCat.Shell.Windows.OneKey.zip (无头) \r\nNapCat.Framework.Windows.OneKey.zip (有头) \r\n\r\n启动后可自动化部署一键包,教程参考使用文档安装部分\r\n\r\n## 警告\r\n**注意QQ版本推荐使用 34606+ 版本 最低可以使用28060版本**\r\n**默认WebUi密钥为随机密码 控制台查看**\r\n\r\n**[9.9.19-34740 X64 Win](https://dldir1.qq.com/qqfile/qq/QQNT/f31348f2/QQ9.9.19.34740_x64.exe)**\r\n[LinuxX64 DEB 34606 ](https://dldir1.qq.com/qqfile/qq/QQNT/a7f1c5a0/linuxqq_3.2.17-34606_amd64.deb)\r\n[LinuxX64 RPM 34606 ](https://dldir1.qq.com/qqfile/qq/QQNT/a7f1c5a0/linuxqq_3.2.17-34606_x86_64.rpm)\r\n[LinuxArm64 DEB 34606 ](https://dldir1.qq.com/qqfile/qq/QQNT/a7f1c5a0/linuxqq_3.2.17-34606_arm64.deb)\r\n[LinuxArm64 RPM  34606 ](https://dldir1.qq.com/qqfile/qq/QQNT/a7f1c5a0/linuxqq_3.2.17-34606_aarch64.rpm)\r\n[MAC   DMG   31363 ](https://t.me/linqiqi_backup/1418)\r\n## 如果WinX64缺少运行库或者xxx.dll？\r\n[安装运行库](https://aka.ms/vs/17/release/vc_redist.x64.exe)\r\n\r\n## 更新\r\n1. 适配QQNT 37012\r\n2. 适配QQNT 37475\r\n3. 适配QQNT 37625\r\n4. 修复其它设备撤回问题 #1171 \r\n5. 增加群相册上传接口\r\n6. 增加群代办设置接口\r\n7. Windows下缓存清理增强 #1121 \r\n8. 升级部分依赖\r\n9. 新增 del_group_album_media  set_group_album_media_like  do_group_album_comment  get_group_album_media_list\r\n10. 优化packet吞吐能力 增加更多参数 控制url和多层消息获取\r\n11. 增加多媒体文件获取计数熔断\r\n12. 实现插件机制 免于在napcat上改动\r\n13. 适配39038\r\n14. 增加多媒体获取超时机制\r\n15. 自定义封面导致时长获取失效修复\r\n16. 安全性提升\r\n17. 全面支持流式下载 流式上传 多媒体接口\r\n18. 调整流式Api 增强下载 上传能力\r\n19. 适配40768 (包括MAC)\r\n20. go-cqhttp 上传接口返回 file_id (UploadGroupFile, UploadPrivateFile)
"""


class AppInfo(Widget):
    """应用组件信息小部件
    
    显示应用组件更新日志等信息
    """

    def __init__(self, app_info: AppInfoModel, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.app_info = app_info

    def compose(self) -> ComposeResult:
        yield Markdown(TEST_MARKDOWN)

    def on_mount(self) -> None:
        """挂载时触发"""
        self.border_title = f"{self.app_info.name} 更新日志"


class AppWidget(Widget):
    """应用组件小部件
    
    显示应用组件的基本信息
    """

    def __init__(self, app_info: AppInfoModel, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

        self.app_name = app_info.name
        self.author = app_info.author
        self.repo_url = app_info.repo_url
        self.description = app_info.description

    def compose(self) -> ComposeResult:
        with Horizontal():
            with Vertical(id="app-info"):
                yield Label(self.app_name)
                yield Label(self.author)
                yield Link(self.repo_url, tooltip="访问组件仓库")
                yield Static(self.description)
            with Vertical(id="app-actions"):
                yield Button("安装", id="install-btn")
                yield Button("更新", id="update-btn")
        
    def on_mount(self) -> None:
        """挂载时触发"""
        self.border_title = f"{self.app_name} 信息"


class AppPage(Vertical):
    """应用组件页面
    
    包含上方应用信息以及下方更新日志信息
    """

    def __init__(self, app_info: AppInfoModel, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.app_info = app_info

    def compose(self) -> ComposeResult:
        yield AppWidget(self.app_info)
        yield AppInfo(self.app_info)


class ManagerScreen(Screen):
    """管理界面"""

    def compose(self) -> ComposeResult:
        """构建界面"""
        yield Header(show_clock=True)

        with TabbedContent(id="manager-tabs"):
            with TabPane("NapCatQQ"):
                yield AppPage(
                    AppInfoModel(
                        name="NapCatQQ",
                        author="NapNeko",
                        repo_url="https://github.com/NapNeko/NapCatQQ",
                        description="NapCatQQ 是现代化的基于 NTQQ 的 Bot 协议端实现",
                    )
                )
            yield TabPane("QQ", Placeholder("QQ 管理界面"))

        yield Footer()

    def on_mount(self) -> None:
        """挂载时触发"""
        self.title = "NapCatQQ CLI - 管理界面"
        self.sub_title = "管理 NapCatQQ 及其相关组件"
