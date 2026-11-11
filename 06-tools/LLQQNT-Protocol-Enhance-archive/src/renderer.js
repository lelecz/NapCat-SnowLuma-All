import i_poke from './icon/poke.svg'
import i_title from './icon/special-title.svg'

function getMsgByAvatar(avatarElement) {
  let messageEle = avatarElement.parentElement.parentElement.parentElement.parentElement;
  let messageId = messageEle.id;
  const msgListRef = app.__vue_app__?.config?.globalProperties?.$store?.state?.aio_chatMsgArea.msgListRef.msgs;
  const msg = msgListRef.find(msg => msg.id === messageId)?.data;
  return msg;
}

function injectCSS() {
  const style = document.createElement('style');
  style.textContent = `
     [q-theme="light"] .my-icon{
        filter: invert(1) hue-rotate(180deg);
      }
`;

// 将 style 元素添加到 <head>
  document.head.appendChild(style);
}

export function injectContextMenu() {
  // 可以使用消息id从app.__vue_app__?.config?.globalProperties?.$store?.state?.aio_chatMsgArea获取群号和群成员
  injectCSS()
  console.log('[协议增强] Inject context menu...');

  // 选择目标节点
  const targetNode = document.body;
  function hookNode(node){
    if (node.nodeType === Node.ELEMENT_NODE) {
      const avatars = node.querySelectorAll('.avatar');
      avatars.forEach(avatar => {
        // console.log(avatar);
        avatar.addEventListener('contextmenu', e => {
          // console.log('右击了头像', e);
          const message = getMsgByAvatar(e.target)
          if (message.chatType === 1) {
            window.llqqnt_pp.poke(message.senderUin);
          }
        });
      });
    }
    if (node?.previousSibling?.classList?.contains('q-context-menu')) {
      const r = node.previousSibling.getBoundingClientRect();
      const rightClickEle = document.elementFromPoint(r.x, r.y);
      // console.log("右击的元素", rightClickEle);
      if (rightClickEle.classList?.contains('avatar')) {
        node.previousSibling.insertAdjacentHTML('beforeend',
          `<a class="q-context-menu-item q-context-menu-item--normal poke-menu vue-component" bf-label-inner="true">
                 <div class="q-context-menu-item__icon q-context-menu-item__head"><i class="q-svg-icon q-icon" style="width: 16px; height: 16px"> 
                 <img class="my-icon" src="${i_poke}" alt="" style="width: 16px; height: 16px;transform: rotate(90deg) scaleY(-1);"></i></div>` +
          '<span class="q-context-menu-item__text" >戳一戳</span></a>' +
          '<a class="q-context-menu-item q-context-menu-item--normal special-title-menu">' +
          `<div class="q-context-menu-item__icon q-context-menu-item__head"><i class="q-svg-icon q-icon" style="width: 16px; height: 16px">
                <img class="my-icon" src="${i_title}" alt="" style="width: 16px; height: 16px"></i></div>` +
          '<span class="q-context-menu-item__text" >设置头衔</span></a>'
        );
        node.previousSibling.querySelector('.poke-menu').addEventListener('click', e => {
          const message = getMsgByAvatar(rightClickEle)
          // const groupName = document.getElementsByClassName("chat-header__contact-name")[0].firstElementChild.textContent.trim();
          window.llqqnt_pp.poke(message.senderUin, message.peerUin);
        });

        node.previousSibling.querySelector('.special-title-menu').addEventListener('click', e => {
          const message = getMsgByAvatar(rightClickEle)
          // const groupName = document.getElementsByClassName("chat-header__contact-name")[0].firstElementChild.textContent.trim();
          window.llqqnt_pp.setSpecialTitle(message.peerUin, message.senderUid);
        });

      }
    }
  }
  // console.log(targetNode);
  // 配置需要观察的变动类型
  hookNode(targetNode);
  const config = {
    childList: true,      // 观察子节点的变动
    subtree: true         // 观察后代节点
  };

  // 创建一个回调函数，当变动发生时执行
  const callback = function (mutationsList, observer) {
    // console.log(mutationsList);
    for (const mutation of mutationsList) {
      // console.log(mutation.addedNodes);
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(hookNode);
      }
    }
  };

  // 创建一个新的观察者实例并传入回调函数
  const observer = new MutationObserver(callback);

  // 开始观察目标节点并传入配置
  observer.observe(targetNode, config);
}

function onLoad() {
  const injectedWindowIds = new Set();
  window.llqqnt_pp.ipcOn('llqqnt_pp_create_window', (event, args) => {
    // console.log('llqqnt_pp_create_window', args)
    const {windowId} = args;
    if (injectedWindowIds.has(windowId)) {
      return;
    }
    injectedWindowIds.add(windowId);
    injectContextMenu();
  })
}
onLoad()



export async function onSettingWindowCreated(view) {
  view.innerHTML = `
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>
                <setting-text>功能：戳一戳、设置群头衔（群主才可用）</setting-text>
            </setting-item>
            <setting-item>
                <setting-text>使用方法：群聊头像右键弹出功能菜单，私聊头像右键戳一戳</setting-text>
            </setting-item>
        </setting-list>
    </setting-panel>
    
    <setting-panel>
        <setting-list data-direction="column">
           <setting-item>
                <setting-text>支持的 Windows QQ 版本：X64 28418 ~ 29456</setting-text>
            </setting-item>
            <setting-item>
                <setting-text>支持的 Linux QQ 版本：X64/Arm64 28498 ~ 29456</setting-text>
            </setting-item> 
            <setting-item>
                <setting-text>支持的 Mac QQ 版本：Arm64 29456</setting-text>
            </setting-item> 
            <setting-item>
                <setting-link data-value="https://github.com/NapNeko/LLQQNT-Protocol-Enhance/">当前版本：1.0.5</setting-link>
                <setting-link data-value="https://qm.qq.com/q/fnNSnyClMY">QQ群 545402644</setting-link>
            </setting-item>
        </setting-list>
    </setting-panel>
    `
}
