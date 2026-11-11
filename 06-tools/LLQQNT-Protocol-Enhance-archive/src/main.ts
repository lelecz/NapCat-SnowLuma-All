
// import prompt from 'custom-electron-prompt'
import PromptManager from "./electron-prompts/src/index"
const prompts = new PromptManager({width: 400})

import {NTQQPacketApi, initWrapperSession} from "./napcat-protocol-packet";
import {BrowserWindow, ipcMain} from 'electron';
import {PromptTemplate} from "./electron-prompts/src/types";

let wrapperSession: any = undefined;
let api: NTQQPacketApi;

initWrapperSession().then((session: any) => {
    console.log('initSession done', session);
    wrapperSession = session;
    api = new NTQQPacketApi(wrapperSession);
});

interface PokeParams{
    groupUin: string;
    userUin: string;
}

interface SpecialTitleParams{
    groupUin: string;
    userUid: string;
}

ipcMain.handle('llqqnt_pp_poke', async (event: any, {groupUin, userUin}: PokeParams) => {
    console.log('llqqnt_pp_poke called', userUin, groupUin);
    try {
        if (groupUin) {
            await api.sendPokePacket(+userUin, +groupUin);
        } else {
            await api.sendPokePacket(+userUin);
        }
    }catch (e) {
        console.log('llqqnt_pp_poke error', e);
    }
});

ipcMain.handle('llqqnt_pp_setSpecialTitle', async (event: any, {groupUin, userUid}: SpecialTitleParams) => {
    // let prompt = require('electron-osx-prompt');
    // const title = await prompt('设置头衔', '');
    const pTemplate: PromptTemplate = {
        windowTitle: "",
        cancelButton: {
            classes: ["btn", "btn-secondary"],
        },
        elements: [
            {
                type: "header",
                value: "设置头衔",
            },
            {
                type: "input",
                name: "title",
                placeholder: "",
                value: "",
                classes: ["form-control"],
            },
        ],
        buttons: [
            {
                name: "submit",
                value: "确定",
                classes: ["btn", "btn-primary"],
            },
        ],
    }

    const title = (await prompts.spawn(pTemplate))?.values.title;

    console.log('llqqnt_pp_setSpecialTitle called', groupUin, userUid, title);
    if (title){
        await api.sendSetSpecialTittlePacket(groupUin, userUid, title);
    }
});

export function onBrowserWindowCreated(window: BrowserWindow) {
    const allWindows = BrowserWindow.getAllWindows();
    allWindows.forEach((window) => {
        if (!window.isDestroyed()) {
            window.webContents.send('llqqnt_pp_create_window', {windowId: window.id});
        }
    });
}