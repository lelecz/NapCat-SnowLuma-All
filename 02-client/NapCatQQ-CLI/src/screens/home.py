# -*- coding: utf-8 -*-
"""
此模块是 NapCatQQ CLI 程序的初始界面

包含菜单项和欢迎信息
用于引导用户进行下一步操作
"""

# 第三方库导入
from textual.app import ComposeResult
from textual.screen import Screen
from textual.widgets import Footer, Header, Static
from textual.widget import Widget
from textual.reactive import reactive
from textual.containers import Vertical

LOGO_WORD_ART = r"""
 __   __  ______  ______  ______  ______  ______     ______  __      __    
/\ "-.\ \/\  __ \/\  == \/\  ___\/\  __ \/\__  _\   /\  ___\/\ \    /\ \   
\ \ \-.  \ \  __ \ \  _-/\ \ \___\ \  __ \/_/\ \/   \ \ \___\ \ \___\ \ \  
 \ \_\\"\_\ \_\ \_\ \_\   \ \_____\ \_\ \_\ \ \_\    \ \_____\ \_____\ \_\ 
  \/_/ \/_/\/_/\/_/\/_/    \/_____/\/_/\/_/  \/_/     \/_____/\/_____/\/_/ 
                                                                           
"""


class MenuItem(Widget):
    """菜单项组件

    用于显示菜单选项
    """

    label = reactive("undefined")
    sub_label = reactive("undefined")

    def __init__(self, title: str, sub_title: str, screen_name: str, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.label = title
        self.sub_label = sub_title
        self.screen_name = screen_name
        
    def on_click(self) -> None:
        """点击菜单项时触发"""
        self.app.push_screen(self.screen_name)

    def render(self) -> str:
        return f"[b]{self.label}[/]\n[i]{self.sub_label}[/]"


class HomeScreen(Screen):
    """欢迎界面"""

    def compose(self) -> ComposeResult:
        """构建界面"""
        yield Header(show_clock=True)

        yield Static(LOGO_WORD_ART, id="logo")
        yield Static("[@click=app.bell]欢迎使用 [b]NapCatQQ CLI[/][/]", id="welcome-message")

        yield Vertical(
            MenuItem("NapCatQQ", "安装&更新 NapCatQQ 及相关组件", "manager"),
            MenuItem("Bot", "管理 NapCatQQ Bot 的配置文件", "manager"),
            MenuItem("Settings", "关于 NapCatQQ CLI 程序的设置", "manager"),
            id="menu-container",
        )
        yield Footer()

    def on_mount(self) -> None:
        """界面挂载时设置标题和子标题"""
        self.title = "NapCatQQ CLI - Home"
        self.sub_title = "欢迎使用 NapCatQQ CLI"
