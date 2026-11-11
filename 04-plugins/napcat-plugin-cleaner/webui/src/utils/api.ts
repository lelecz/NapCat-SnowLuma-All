// API implementation for NapCat Plugin WebUI
import { ApiResponse } from '../types';

// 从 URL 解析插件名
function resolvePluginName(): string {
    // 首先尝试从 window.__PLUGIN_NAME__ 获取（由 plugin-info.js 注入）
    if ((window as any).__PLUGIN_NAME__) return (window as any).__PLUGIN_NAME__;
    try {
        if (window.parent && (window.parent as any).__PLUGIN_NAME__) return (window.parent as any).__PLUGIN_NAME__;
    } catch (e) { /* ignore */ }
    // 从 URL 路径解析
    const extMatch = location.pathname.match(/\/ext\/([^\/]+)/);
    if (extMatch) return extMatch[1];
    const pluginMatch = location.pathname.match(/\/plugin\/([^\/]+)/);
    if (pluginMatch) return pluginMatch[1];
    return 'napcat-plugin-cleaner';
}

// 从 localStorage 获取 token（NapCat WebUI 鉴权方式）
function getToken(): string {
    return localStorage.getItem('token') || '';
}

function authHeaders(): Record<string, string> {
    const token = getToken();
    const headers: Record<string, string> = {};
    if (token) headers['Authorization'] = 'Bearer ' + token;
    return headers;
}

const PLUGIN_NAME = resolvePluginName();
const apiBase = '/api/Plugin/ext/' + PLUGIN_NAME;

export async function request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = endpoint.startsWith('http') ? endpoint : `${apiBase}${endpoint}`;

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...authHeaders(),
        ...(options.headers as Record<string, string> || {})
    };

    try {
        const res = await fetch(url, { ...options, headers });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || `HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (e) {
        console.error("API Request Failed", e);
        throw e;
    }
}
