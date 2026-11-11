# -*- coding: utf-8 -*-

"""此模块包含程序用到的各种路径, 以及路径的处理函数"""


from pathlib import Path


class PathUtils:
    """路径处理工具类"""

    def __init__(self) -> None:
        """初始化路径处理工具类"""

        # 定义目录路径
        self.base_dir = Path.cwd() / "data"
        self.config_dir = self.base_dir / "config"
        self.logs_dir = self.base_dir / "logs"
        self.components_dir = self.base_dir / "components"

        # 定义文件路径
        self.config_file = self.config_dir / "config.json"
        self.bot_file = self.config_dir / "bot.json"
        self.logs_file = self.logs_dir / "app.log"
        
        # 定义组件安装路径
        self.napcat_component_dir = self.components_dir / "napcat"
        
    def ensure_paths(self) -> None:
        """确保所有必要的路径存在, 如果不存在则创建"""
        self.ensure_dir(self.base_dir)
        self.ensure_dir(self.config_dir)
        self.ensure_dir(self.logs_dir)
        self.ensure_dir(self.components_dir)
        self.ensure_dir(self.napcat_component_dir)

    @staticmethod
    def ensure_dir(path: Path) -> None:
        """确保目录存在, 如果不存在则创建"""
        if not path.exists():
            path.mkdir(parents=True, exist_ok=True)
            
            
path_utils = PathUtils()
path_utils.ensure_paths()
