# -*- coding: utf-8 -*-
"""
NapCatQQ CLI Application

这是使用 Textual 构建的命令行界面应用程序, 用于维护 NapCatQQ 程序

主要功能:
 - 下载 - 安装 - 更新 NapCatQQ
 - 管理配置文件


#Tips:
当前项目正在积极开发中, 可能会有一些不稳定的功能. 欢迎反馈和贡献!
"""

# 第三方库导入
from textual.app import App
from utils.log import logging

# 项目内模块导入
from screens import HomeScreen, ManagerScreen


class MainApp(App):
    """NapCatQQ CLI Application"""

    BINDINGS = [
        ("ctrl+q", "quit", "退出程序"),
        ("h", "push_screen('home')", "首页"),
    ]

    SCREENS = {
        "home": HomeScreen,
        "manager": ManagerScreen,
    }
    CSS_PATH = [
        "styles/screens.tcss",
    ]

    def on_mount(self) -> None:
        self.theme = "catppuccin-mocha"
        self.push_screen("home")


if __name__ == "__main__":
    app = MainApp()
    app.run()
