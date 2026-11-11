# -*- coding: utf-8 -*-
"""此模块包含各种Log相关的工具函数和类"""
import logging
from logging.handlers import RotatingFileHandler
from textual.logging import TextualHandler

from .path import path_utils

logging.basicConfig(
    level="NOTSET",
    handlers=[
        TextualHandler(),
        RotatingFileHandler(
            path_utils.logs_file,
            maxBytes=10 * 1024 * 1024,
            backupCount=32,
            encoding="utf-8"
        ),
    ],
)
