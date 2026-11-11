# -*- coding: utf-8 -*-

from dataclasses import dataclass


@dataclass
class AppInfoModel:
    """应用组件信息模型"""

    name: str
    author: str
    repo_url: str
    description: str