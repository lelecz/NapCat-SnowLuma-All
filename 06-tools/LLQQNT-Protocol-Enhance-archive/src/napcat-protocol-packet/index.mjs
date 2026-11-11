import _0x4eb4c0 from 'os';
import _0x565ced from 'node:fs';
import _0x1c2840, { constants } from 'node:os';
import _0x488089 from 'node:path';
import _0x3c3982, { createHash } from 'crypto';
import _0x46b480, { dirname } from 'path';
import { fileURLToPath } from 'url';
import _0x4ff4cc from 'fs';

const _0x401aa2 = {
	"3.2.12-28418-x64": {
	recv: "A0723E0",
	send: "A06EAE0"
},
	"9.9.15-28418-x64": {
	recv: "37A9004",
	send: "37A4BD0"
},
	"6.9.56-28418-x64": {
	send: "4471360",
	recv: "4473BCC"
},
	"6.9.56-28418-arm64": {
	send: "3FBDBF8",
	recv: "3FC0410"
},
	"9.9.15-28498-x64": {
	recv: "37A9004",
	send: "37A4BD0"
},
	"9.9.16-28788-x64": {
	send: "38076D0",
	recv: "380BB04"
},
	"3.2.13-28788-x64": {
	send: "A0CEC20",
	recv: "A0D2520"
},
	"3.2.13-28788-arm64": {
	send: "6E91018",
	recv: "6E94850"
},
	"9.9.16-28971-x64": {
	send: "38079F0",
	recv: "380BE24"
},
	"3.2.13-28971-x64": {
	send: "A0CEF60",
	recv: "A0D2860"
},
	"3.2.12-28971-arm64": {
	send: "6E91318",
	recv: "6E94B50"
},
	"6.9.58-28971-x64": {
	send: "449ACA0",
	recv: "449D50C"
},
	"6.9.58-28971-arm64": {
	send: "3FE0DB0",
	recv: "3FE35C8"
},
	"9.9.16-29271-x64": {
	send: "3833510",
	recv: "3837944"
},
	"3.2.13-29271-x64": {
	send: "A11E680",
	recv: "A121F80"
},
	"3.2.13-29271-arm64": {
	send: "6ECA098",
	recv: "6ECD8D0"
},
	"9.9.16-29456-x64": {
	send: "3835CD0",
	recv: "383A104"
},
	"3.2.13-29456-x64": {
	send: "A11E820",
	recv: "A122120"
},
	"3.2.13-29456-arm64": {
	send: "6ECA130",
	recv: "6ECD968"
},
	"6.9.59-29456-x64": {
	send: "44C57A0",
	recv: "44C800C"
},
	"6.9.59-29456-arm64": {
	send: "4005FE8",
	recv: "4008800"
}
};

const _0x106a4b=_0x1392;function _0x1392(_0x1104d3,_0x33c401){const _0x521475=_0x5214();return _0x1392=function(_0x1392c0,_0x15b22b){_0x1392c0=_0x1392c0-0x159;let _0x34ea9f=_0x521475[_0x1392c0];return _0x34ea9f;},_0x1392(_0x1104d3,_0x33c401);}(function(_0x3586ce,_0xfaf412){const _0x4b51cf=_0x1392,_0x43a1c2=_0x3586ce();while(!![]){try{const _0x1138a6=-parseInt(_0x4b51cf(0x187))/0x1+-parseInt(_0x4b51cf(0x17e))/0x2*(parseInt(_0x4b51cf(0x15a))/0x3)+-parseInt(_0x4b51cf(0x17b))/0x4+parseInt(_0x4b51cf(0x183))/0x5*(-parseInt(_0x4b51cf(0x177))/0x6)+parseInt(_0x4b51cf(0x168))/0x7+parseInt(_0x4b51cf(0x175))/0x8*(-parseInt(_0x4b51cf(0x15d))/0x9)+-parseInt(_0x4b51cf(0x160))/0xa*(-parseInt(_0x4b51cf(0x16c))/0xb);if(_0x1138a6===_0xfaf412)break;else _0x43a1c2['push'](_0x43a1c2['shift']());}catch(_0x1f3bd6){_0x43a1c2['push'](_0x43a1c2['shift']());}}}(_0x5214,0x50e4f));function getQQVersionConfigPath(_0x29b5bb=''){const _0x251d16=_0x1392;let _0x3533c9;if(_0x1c2840[_0x251d16(0x163)]()===_0x251d16(0x18b))_0x3533c9=_0x488089['join'](_0x488089[_0x251d16(0x186)](_0x29b5bb),_0x251d16(0x179),_0x251d16(0x176));else {if(_0x1c2840[_0x251d16(0x163)]()===_0x251d16(0x16a)){const _0x4fbe0d=_0x1c2840['homedir'](),_0x25a042=_0x488089[_0x251d16(0x182)](_0x4fbe0d,_0x251d16(0x162));_0x3533c9=_0x488089[_0x251d16(0x182)](_0x25a042,_0x251d16(0x17f));}else {const _0x23fc1d=_0x1c2840[_0x251d16(0x185)](),_0x1c41b2=_0x488089['resolve'](_0x23fc1d,'./.config/QQ');_0x3533c9=_0x488089['resolve'](_0x1c41b2,_0x251d16(0x17f));}}if(typeof _0x3533c9!==_0x251d16(0x170))return void 0x0;!_0x565ced['existsSync'](_0x3533c9)&&(_0x3533c9=_0x488089[_0x251d16(0x189)](_0x488089[_0x251d16(0x186)](_0x29b5bb),'./resources/app/versions/config.json'));if(!_0x565ced[_0x251d16(0x172)](_0x3533c9))return void 0x0;return _0x3533c9;}function _0x5214(){const _0x35603f=['32495DNLVIu','3.2.12.28060','homedir','dirname','652785QPfSlj','QQPackageInfo','join','getFullQQVersion','win32','toString','QQ版本获取失败','getQQBuildStr','9doAICB','QQMainPath','version','568791DWCbhc','linux','readFileSync','4540uPJquS','package.json','./Library/Application\x20Support/QQ','platform','Resources','QQVersionConfig','parse','28131','1536941dDWKVQ','isQuickUpdate','darwin','buildId','32615jcuNgl','9.9.15-28131','28060','/package.json','string','./resources/app/versions/','existsSync','./resources/app/package.json','QQPackageInfoPath','8YxeITh','config.json','306BmwiNl','6.9.53.28060','versions','app','666204jkJfrc','27254','curVersion','13564szKCyk','./versions/config.json','QQVersionConfigPath','execPath','resolve'];_0x5214=function(){return _0x35603f;};return _0x5214();}function getDefaultQQVersionConfigInfo(){const _0x8728a8=_0x1392;if(_0x1c2840['platform']()===_0x8728a8(0x15e))return {'baseVersion':'3.2.12.28060','curVersion':_0x8728a8(0x184),'prevVersion':'','onErrorVersions':[],'buildId':_0x8728a8(0x17c)};if(_0x1c2840['platform']()==='darwin')return {'baseVersion':'6.9.53.28060','curVersion':_0x8728a8(0x178),'prevVersion':'','onErrorVersions':[],'buildId':_0x8728a8(0x16e)};return {'baseVersion':_0x8728a8(0x16d),'curVersion':_0x8728a8(0x16d),'prevVersion':'','onErrorVersions':[],'buildId':_0x8728a8(0x167)};}function getQQPackageInfoPath(_0x3cd37e='',_0x290159){const _0x3df346=_0x1392;let _0x350412;if(_0x1c2840[_0x3df346(0x163)]()===_0x3df346(0x16a))_0x350412=_0x488089['join'](_0x488089['dirname'](_0x3cd37e),'..',_0x3df346(0x164),_0x3df346(0x17a),_0x3df346(0x161));else _0x1c2840[_0x3df346(0x163)]()===_0x3df346(0x15e)?_0x350412=_0x488089[_0x3df346(0x189)](_0x488089['dirname'](_0x3cd37e),_0x3df346(0x173)):_0x350412=_0x488089[_0x3df346(0x189)](_0x488089['dirname'](_0x3cd37e),'./versions/'+_0x290159+'/resources/app/package.json');return !_0x565ced['existsSync'](_0x350412)&&(_0x350412=_0x488089[_0x3df346(0x189)](_0x488089[_0x3df346(0x186)](_0x3cd37e),_0x3df346(0x171)+_0x290159+_0x3df346(0x16f))),_0x350412;}class QQBasicInfoWrapper{[_0x106a4b(0x15b)];[_0x106a4b(0x174)];[_0x106a4b(0x180)];[_0x106a4b(0x169)];[_0x106a4b(0x165)];[_0x106a4b(0x188)];constructor(){const _0x1f1665=_0x106a4b;this[_0x1f1665(0x15b)]=process[_0x1f1665(0x181)],this[_0x1f1665(0x180)]=getQQVersionConfigPath(this['QQMainPath']),this[_0x1f1665(0x169)]=!!this[_0x1f1665(0x180)],this[_0x1f1665(0x165)]=this[_0x1f1665(0x169)]?JSON[_0x1f1665(0x166)](_0x565ced[_0x1f1665(0x15f)](this['QQVersionConfigPath'])[_0x1f1665(0x18c)]()):getDefaultQQVersionConfigInfo(),this[_0x1f1665(0x174)]=getQQPackageInfoPath(this['QQMainPath'],this[_0x1f1665(0x165)]?.[_0x1f1665(0x17d)]),this[_0x1f1665(0x188)]=JSON[_0x1f1665(0x166)](_0x565ced[_0x1f1665(0x15f)](this[_0x1f1665(0x174)])[_0x1f1665(0x18c)]());}[_0x106a4b(0x18a)](){const _0x15f798=_0x106a4b,_0x7da438=this['isQuickUpdate']?this['QQVersionConfig']?.['curVersion']:this['QQPackageInfo']?.[_0x15f798(0x15c)];if(!_0x7da438)throw new Error(_0x15f798(0x18d));return _0x7da438;}[_0x106a4b(0x159)](){const _0x1aa09e=_0x106a4b;return this[_0x1aa09e(0x169)]?this[_0x1aa09e(0x165)]?.[_0x1aa09e(0x16b)]:this[_0x1aa09e(0x188)]?.['buildVersion'];}}

const _0xacc56a=_0x1045;function _0x1045(_0x1e6c58,_0x42fb40){const _0x258d58=_0x258d();return _0x1045=function(_0x104565,_0x302ad9){_0x104565=_0x104565-0xb2;let _0x5b8208=_0x258d58[_0x104565];return _0x5b8208;},_0x1045(_0x1e6c58,_0x42fb40);}(function(_0x486997,_0x1d1435){const _0x34d62b=_0x1045,_0x1c6dec=_0x486997();while(!![]){try{const _0x3893d2=parseInt(_0x34d62b(0xc0))/0x1+-parseInt(_0x34d62b(0xbc))/0x2+parseInt(_0x34d62b(0xc3))/0x3*(parseInt(_0x34d62b(0xb8))/0x4)+parseInt(_0x34d62b(0xb7))/0x5+-parseInt(_0x34d62b(0xc2))/0x6*(-parseInt(_0x34d62b(0xb9))/0x7)+parseInt(_0x34d62b(0xbe))/0x8*(-parseInt(_0x34d62b(0xbb))/0x9)+parseInt(_0x34d62b(0xb4))/0xa;if(_0x3893d2===_0x1d1435)break;else _0x1c6dec['push'](_0x1c6dec['shift']());}catch(_0x1054c1){_0x1c6dec['push'](_0x1c6dec['shift']());}}}(_0x258d,0x29a99));class LRUCache{[_0xacc56a(0xb6)];['cache'];constructor(_0x4ad469){const _0x1827ee=_0xacc56a;this[_0x1827ee(0xb6)]=_0x4ad469,this[_0x1827ee(0xba)]=new Map();}['get'](_0x59627e){const _0x4d1066=_0xacc56a,_0x5bdf56=this['cache'][_0x4d1066(0xc4)](_0x59627e);return _0x5bdf56!==void 0x0&&(this[_0x4d1066(0xba)][_0x4d1066(0xb2)](_0x59627e),this[_0x4d1066(0xba)][_0x4d1066(0xbd)](_0x59627e,_0x5bdf56)),_0x5bdf56;}[_0xacc56a(0xb5)](_0x50be1e,_0x2a72a5){const _0x460f0d=_0xacc56a;if(this['cache'][_0x460f0d(0xb3)](_0x50be1e))this['cache']['delete'](_0x50be1e);else {if(this['cache']['size']>=this['capacity']){const _0x39b984=this[_0x460f0d(0xba)][_0x460f0d(0xbf)]()['next']()[_0x460f0d(0xc1)];_0x39b984!==void 0x0&&this[_0x460f0d(0xba)][_0x460f0d(0xb2)](_0x39b984);}}this[_0x460f0d(0xba)][_0x460f0d(0xbd)](_0x50be1e,_0x2a72a5);}}function _0x258d(){const _0x549956=['capacity','22405FYWekg','28788rVTUHQ','738143zNGkVf','cache','642375lhNHwD','105140HGDVZS','set','16CKurgc','keys','127223BoUYdv','value','6iuqxMF','3FDggiM','get','delete','has','1216190NwIWWd','put'];_0x258d=function(){return _0x549956;};return _0x258d();}

function _0x423b(_0x4f042a,_0x2cb215){const _0x4ecffb=_0x4ecf();return _0x423b=function(_0x423bf5,_0x44051f){_0x423bf5=_0x423bf5-0x164;let _0x451cf2=_0x4ecffb[_0x423bf5];return _0x451cf2;},_0x423b(_0x4f042a,_0x2cb215);}(function(_0x31366e,_0x2ba247){const _0xed6b5d=_0x423b,_0x32fa75=_0x31366e();while(!![]){try{const _0xe71847=parseInt(_0xed6b5d(0x16d))/0x1*(-parseInt(_0xed6b5d(0x16a))/0x2)+parseInt(_0xed6b5d(0x16b))/0x3+-parseInt(_0xed6b5d(0x16e))/0x4+parseInt(_0xed6b5d(0x16f))/0x5*(-parseInt(_0xed6b5d(0x164))/0x6)+-parseInt(_0xed6b5d(0x169))/0x7*(-parseInt(_0xed6b5d(0x168))/0x8)+parseInt(_0xed6b5d(0x166))/0x9*(-parseInt(_0xed6b5d(0x167))/0xa)+parseInt(_0xed6b5d(0x165))/0xb*(parseInt(_0xed6b5d(0x16c))/0xc);if(_0xe71847===_0x2ba247)break;else _0x32fa75['push'](_0x32fa75['shift']());}catch(_0x41dbcd){_0x32fa75['push'](_0x32fa75['shift']());}}}(_0x4ecf,0xabc5d));function _0x4ecf(){const _0x4d0c3f=['626364UdkmDV','12GeIirO','1135lgpwuX','5380764SSEaKM','348010PRaCLU','42FOalXO','42879650vPSZwZ','9XYvNNf','4261230rhEKQY','8TNoWvT','622412TVSucS','2174qdynQC'];_0x4ecf=function(){return _0x4d0c3f;};return _0x4ecf();}const MoeHooVersion='v1.0.0';

const _0x37d1ea=_0xb912;(function(_0x22764b,_0x1581ed){const _0xa10c3d=_0xb912,_0x2cae1e=_0x22764b();while(!![]){try{const _0x13dfc1=-parseInt(_0xa10c3d(0x1e5))/0x1*(-parseInt(_0xa10c3d(0x1b4))/0x2)+-parseInt(_0xa10c3d(0x1ba))/0x3+-parseInt(_0xa10c3d(0x1e3))/0x4+-parseInt(_0xa10c3d(0x1e2))/0x5+parseInt(_0xa10c3d(0x1f4))/0x6*(-parseInt(_0xa10c3d(0x1c8))/0x7)+-parseInt(_0xa10c3d(0x1f7))/0x8*(-parseInt(_0xa10c3d(0x1d0))/0x9)+parseInt(_0xa10c3d(0x1d9))/0xa*(parseInt(_0xa10c3d(0x1b8))/0xb);if(_0x13dfc1===_0x1581ed)break;else _0x2cae1e['push'](_0x2cae1e['shift']());}catch(_0x3e900c){_0x2cae1e['push'](_0x2cae1e['shift']());}}}(_0x4fd6,0xdcf23));function _0xb912(_0xc6a0f5,_0x28c442){const _0x4fd655=_0x4fd6();return _0xb912=function(_0xb91293,_0x395100){_0xb91293=_0xb91293-0x1aa;let _0x34dca3=_0x4fd655[_0xb91293];return _0x34dca3;},_0xb912(_0xc6a0f5,_0x28c442);}function _0x4fd6(){const _0x2ed79d=['SendPacket','[NTQQPacketApi]\x20MoeHoo\x20init\x20complete','linux.x64','672UUVTqQ','darwin.arm64','linux.arm64','arch','connect','[NTQQPacketApi]\x20MoeHooExport','MoeHooExport','wrapperSession','27BmcAyi','RTLD_LAZY','supportedPlatforms','[NTQQPacketApi]\x20copy\x20moehoo\x20error:','\x20complete','send','check','[NTQQPacketApi]\x20MoeHoo\x20init\x20hook\x20send\x20addr\x20','platform','38780UcRNro',',\x20recv\x20addr\x20','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','available','sendCommandImpl','random','win32.x64','InitHook','init','148450lfrBER','854024nvfDVX','sendOidbPacket','75ZgYJGe','[NTQQPacketApi]\x20MoeHoo\x20init\x20error:','randText','data','update','\x20with\x20trace_id\x20','getMsgService','sendCommand\x20timed\x20out\x20after\x20','then','sendPacket','digest','isAvailable','error','NapCat.Packet\x20未初始化！','[NTQQPacketApi]\x20moehoo_path_ori:','2730RPqGDt','\x20ms\x20for\x20','cmd','2165232hUdAkg','charAt','md5','exports','hex','includes','.node','url','join','[NTQQPacketApi]\x20moehoo_path:','existsSync','sendEvent','catch','29074ptEyqu','recv','registerCallback','debug','2145EUchwS','put','4399728KPxyMY','length','get','copyFileSync','[NTQQPacketApi]\x20dlopen\x20','[Core]\x20[Packet:Native]\x20缺失运行时文件:\x20','sendCommand','floor','log','from','dlopen'];_0x4fd6=function(){return _0x2ed79d;};return _0x4fd6();}let currentPath=import.meta[_0x37d1ea(0x1ae)];currentPath=fileURLToPath(currentPath[_0x37d1ea(0x1ae)]??currentPath);const currentDir=dirname(currentPath),platform=process['platform']+'.'+process['arch'],moehooPathOri=_0x46b480[_0x37d1ea(0x1af)](currentDir,'./moehoo/MoeHoo.'+platform+_0x37d1ea(0x1ad)),moehooPath=_0x46b480[_0x37d1ea(0x1af)](currentDir,'./moehoo/MoeHoo.'+MoeHooVersion+'.node');class PacketClient{['cb']=new LRUCache(0x1f4);['isAvailable']=![];[_0x37d1ea(0x1cf)];constructor(_0x3f3222){const _0x3299fb=_0x37d1ea;this[_0x3299fb(0x1cf)]=_0x3f3222;}[_0x37d1ea(0x1e7)](_0x1ca02f){const _0x3f5496=_0x37d1ea;let _0x3ec3f4='';const _0x26eec8=_0x3f5496(0x1db);for(let _0x10a650=0x0;_0x10a650<_0x1ca02f;_0x10a650++){_0x3ec3f4+=_0x26eec8[_0x3f5496(0x1f8)](Math[_0x3f5496(0x1c1)](Math[_0x3f5496(0x1de)]()*_0x26eec8[_0x3f5496(0x1bb)]));}return _0x3ec3f4;}get[_0x37d1ea(0x1dc)](){return this['isAvailable'];}async[_0x37d1ea(0x1b6)](_0x8728e7,_0x2fd84b,_0x51e1ff){const _0x2d456b=_0x37d1ea;this['cb'][_0x2d456b(0x1b9)](createHash(_0x2d456b(0x1f9))[_0x2d456b(0x1e9)](_0x8728e7)[_0x2d456b(0x1ef)]('hex')+_0x2fd84b,_0x51e1ff);}async[_0x37d1ea(0x1c0)](_0x40bfbf,_0xacb05f,_0x1be844,_0x253f9b=![],_0x5eb399=0x4e20,_0x338ed7=()=>{}){return new Promise((_0x5a01c9,_0x1d6f1d)=>{const _0x23a27c=_0xb912,_0x267598=setTimeout(()=>{const _0x33a8d8=_0xb912;_0x1d6f1d(new Error(_0x33a8d8(0x1ec)+_0x5eb399+_0x33a8d8(0x1f5)+_0x40bfbf+_0x33a8d8(0x1ea)+_0x1be844));},_0x5eb399);this[_0x23a27c(0x1b6)](_0x1be844,_0x23a27c(0x1d5),async _0xe7bb20=>{_0x338ed7(_0xe7bb20),!_0x253f9b&&(clearTimeout(_0x267598),_0x5a01c9(_0xe7bb20));}),_0x253f9b&&this[_0x23a27c(0x1b6)](_0x1be844,_0x23a27c(0x1b5),async _0x32c6d5=>{clearTimeout(_0x267598),_0x5a01c9(_0x32c6d5);}),this[_0x23a27c(0x1dd)](_0x40bfbf,_0xacb05f,_0x1be844);});}async[_0x37d1ea(0x1ee)](_0x5d2e53,_0x426124,_0x505490=![]){return new Promise((_0x540796,_0x765cb8)=>{const _0xba8faf=_0xb912;if(!this[_0xba8faf(0x1dc)])return console[_0xba8faf(0x1f1)](_0xba8faf(0x1f2)),void 0x0;const _0x12c6f0=_0x3c3982['createHash'](_0xba8faf(0x1f9))[_0xba8faf(0x1e9)](_0x426124)[_0xba8faf(0x1ef)](_0xba8faf(0x1ab)),_0x4d15cb=(this[_0xba8faf(0x1e7)](0x4)+_0x12c6f0+_0x426124)['slice'](0x0,_0x426124['length']/0x2);this[_0xba8faf(0x1c0)](_0x5d2e53,_0x426124,_0x4d15cb,_0x505490,0x4e20,async()=>{const _0x203d6d=_0xba8faf;await this[_0x203d6d(0x1cf)][_0x203d6d(0x1eb)]()['sendSsoCmdReqByContend'](_0x5d2e53,_0x4d15cb);})[_0xba8faf(0x1ed)](_0x5e9ddf=>_0x540796(_0x5e9ddf))[_0xba8faf(0x1b3)](_0x36838b=>_0x765cb8(_0x36838b));});}async[_0x37d1ea(0x1e4)](_0x221550,_0xfd5dab=![]){const _0x4c1713=_0x37d1ea;return this['sendPacket'](_0x221550[_0x4c1713(0x1f6)],_0x221550[_0x4c1713(0x1e8)],_0xfd5dab);}}class NativePacketClient extends PacketClient{[_0x37d1ea(0x1d2)]=[_0x37d1ea(0x1df),_0x37d1ea(0x1c7),_0x37d1ea(0x1ca),_0x37d1ea(0x1c9)];[_0x37d1ea(0x1ce)]={'exports':{}};[_0x37d1ea(0x1b2)]=new LRUCache(0x1f4);constructor(_0xe44755){super(_0xe44755);}get[_0x37d1ea(0x1dc)](){const _0x18dcb8=_0x37d1ea;return this[_0x18dcb8(0x1f0)];}[_0x37d1ea(0x1d6)](){const _0x23987c=_0x37d1ea;console[_0x23987c(0x1c2)]('[NTQQPacketApi]\x20开始检查支持的平台');const _0x27aea0=process[_0x23987c(0x1d8)]+'.'+process[_0x23987c(0x1cb)];if(!this['supportedPlatforms'][_0x23987c(0x1ac)](_0x27aea0))return console[_0x23987c(0x1c2)]('[Core]\x20[Packet:Native]\x20不支持的平台:\x20'+_0x27aea0),![];if(!_0x4ff4cc[_0x23987c(0x1b1)](moehooPathOri))return console[_0x23987c(0x1c2)](_0x23987c(0x1bf)+moehooPath),![];return !![];}async[_0x37d1ea(0x1e1)](_0x4831fa,_0x29e407,_0x236d0e){const _0x419c08=_0x37d1ea;console['log'](_0x419c08(0x1f3),moehooPathOri),console[_0x419c08(0x1c2)](_0x419c08(0x1b0),moehooPath);if(_0x4ff4cc['existsSync'](moehooPathOri)&&!_0x4ff4cc['existsSync'](moehooPath))try{_0x4ff4cc[_0x419c08(0x1bd)](moehooPathOri,moehooPath);}catch(_0x4dc39e){console[_0x419c08(0x1c2)](_0x419c08(0x1d3),_0x4dc39e);}try{process[_0x419c08(0x1c4)](this[_0x419c08(0x1ce)],moehooPath,constants[_0x419c08(0x1c4)][_0x419c08(0x1d1)]),console['log'](_0x419c08(0x1be)+moehooPath+_0x419c08(0x1d4));}catch(_0x37a7ec){console[_0x419c08(0x1f1)](_0x419c08(0x1be)+moehooPath+'\x20error:',_0x37a7ec);}try{console[_0x419c08(0x1c2)](_0x419c08(0x1cd),this[_0x419c08(0x1ce)]),console[_0x419c08(0x1c2)](_0x419c08(0x1d7)+_0x236d0e+_0x419c08(0x1da)+_0x29e407),this['MoeHooExport'][_0x419c08(0x1aa)][_0x419c08(0x1e0)]?.(_0x236d0e,_0x29e407,(_0x37eb3b,_0x126d32,_0x490a31,_0x2096c1,_0x2c4ee2)=>{const _0x1f1993=_0x419c08,_0x445513=createHash(_0x1f1993(0x1f9))[_0x1f1993(0x1e9)](Buffer[_0x1f1993(0x1c3)](_0x2c4ee2,_0x1f1993(0x1ab)))['digest'](_0x1f1993(0x1ab));_0x37eb3b===0x0&&this['cb'][_0x1f1993(0x1bc)](_0x445513+_0x1f1993(0x1b5))&&this['sendEvent'][_0x1f1993(0x1b9)](_0x2096c1,_0x445513);if(_0x37eb3b===0x1&&this[_0x1f1993(0x1b2)][_0x1f1993(0x1bc)](_0x2096c1)){const _0xe27464=this['sendEvent'][_0x1f1993(0x1bc)](_0x2096c1),_0x5eebba=this['cb'][_0x1f1993(0x1bc)](_0xe27464+_0x1f1993(0x1b5));_0x5eebba?.({'seq':_0x2096c1,'cmd':_0x490a31,'hex_data':_0x2c4ee2});}}),console[_0x419c08(0x1b7)](_0x419c08(0x1c6));}catch(_0x211e1a){console[_0x419c08(0x1f1)](_0x419c08(0x1e6),_0x211e1a);}this[_0x419c08(0x1f0)]=!![];}['sendCommandImpl'](_0x15c023,_0x58ac41,_0x23616f){const _0x34b83c=_0x37d1ea,_0x2c8ebd=createHash('md5')[_0x34b83c(0x1e9)](_0x23616f)[_0x34b83c(0x1ef)]('hex');this[_0x34b83c(0x1ce)]['exports'][_0x34b83c(0x1c5)]?.(_0x15c023,_0x58ac41,_0x2c8ebd),this['cb'][_0x34b83c(0x1bc)](_0x2c8ebd+_0x34b83c(0x1d5))?.({'seq':0x0,'cmd':_0x15c023,'hex_data':''});}[_0x37d1ea(0x1cc)](_0x55c3cc){return _0x55c3cc(),Promise['resolve']();}}

/**
 * Get the type of a JSON value.
 * Distinguishes between array, null and object.
 */
function typeofJsonValue(value) {
    let t = typeof value;
    if (t == "object") {
        if (Array.isArray(value))
            return "array";
        if (value === null)
            return "null";
    }
    return t;
}
/**
 * Is this a JSON object (instead of an array or null)?
 */
function isJsonObject(value) {
    return value !== null && typeof value == "object" && !Array.isArray(value);
}

// lookup table from base64 character to byte
let encTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
// lookup table from base64 character *code* to byte because lookup by number is fast
let decTable = [];
for (let i = 0; i < encTable.length; i++)
    decTable[encTable[i].charCodeAt(0)] = i;
// support base64url variants
decTable["-".charCodeAt(0)] = encTable.indexOf("+");
decTable["_".charCodeAt(0)] = encTable.indexOf("/");
/**
 * Decodes a base64 string to a byte array.
 *
 * - ignores white-space, including line breaks and tabs
 * - allows inner padding (can decode concatenated base64 strings)
 * - does not require padding
 * - understands base64url encoding:
 *   "-" instead of "+",
 *   "_" instead of "/",
 *   no padding
 */
function base64decode(base64Str) {
    // estimate byte size, not accounting for inner padding and whitespace
    let es = base64Str.length * 3 / 4;
    // if (es % 3 !== 0)
    // throw new Error('invalid base64 string');
    if (base64Str[base64Str.length - 2] == '=')
        es -= 2;
    else if (base64Str[base64Str.length - 1] == '=')
        es -= 1;
    let bytes = new Uint8Array(es), bytePos = 0, // position in byte array
    groupPos = 0, // position in base64 group
    b, // current byte
    p = 0 // previous byte
    ;
    for (let i = 0; i < base64Str.length; i++) {
        b = decTable[base64Str.charCodeAt(i)];
        if (b === undefined) {
            // noinspection FallThroughInSwitchStatementJS
            switch (base64Str[i]) {
                case '=':
                    groupPos = 0; // reset state when padding found
                case '\n':
                case '\r':
                case '\t':
                case ' ':
                    continue; // skip white-space, and padding
                default:
                    throw Error(`invalid base64 string.`);
            }
        }
        switch (groupPos) {
            case 0:
                p = b;
                groupPos = 1;
                break;
            case 1:
                bytes[bytePos++] = p << 2 | (b & 48) >> 4;
                p = b;
                groupPos = 2;
                break;
            case 2:
                bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
                p = b;
                groupPos = 3;
                break;
            case 3:
                bytes[bytePos++] = (p & 3) << 6 | b;
                groupPos = 0;
                break;
        }
    }
    if (groupPos == 1)
        throw Error(`invalid base64 string.`);
    return bytes.subarray(0, bytePos);
}
/**
 * Encodes a byte array to a base64 string.
 * Adds padding at the end.
 * Does not insert newlines.
 */
function base64encode(bytes) {
    let base64 = '', groupPos = 0, // position in base64 group
    b, // current byte
    p = 0; // carry over from previous byte
    for (let i = 0; i < bytes.length; i++) {
        b = bytes[i];
        switch (groupPos) {
            case 0:
                base64 += encTable[b >> 2];
                p = (b & 3) << 4;
                groupPos = 1;
                break;
            case 1:
                base64 += encTable[p | b >> 4];
                p = (b & 15) << 2;
                groupPos = 2;
                break;
            case 2:
                base64 += encTable[p | b >> 6];
                base64 += encTable[b & 63];
                groupPos = 0;
                break;
        }
    }
    // padding required?
    if (groupPos) {
        base64 += encTable[p];
        base64 += '=';
        if (groupPos == 1)
            base64 += '=';
    }
    return base64;
}

/**
 * This handler implements the default behaviour for unknown fields.
 * When reading data, unknown fields are stored on the message, in a
 * symbol property.
 * When writing data, the symbol property is queried and unknown fields
 * are serialized into the output again.
 */
var UnknownFieldHandler;
(function (UnknownFieldHandler) {
    /**
     * The symbol used to store unknown fields for a message.
     * The property must conform to `UnknownFieldContainer`.
     */
    UnknownFieldHandler.symbol = Symbol.for("protobuf-ts/unknown");
    /**
     * Store an unknown field during binary read directly on the message.
     * This method is compatible with `BinaryReadOptions.readUnknownField`.
     */
    UnknownFieldHandler.onRead = (typeName, message, fieldNo, wireType, data) => {
        let container = is(message) ? message[UnknownFieldHandler.symbol] : message[UnknownFieldHandler.symbol] = [];
        container.push({ no: fieldNo, wireType, data });
    };
    /**
     * Write unknown fields stored for the message to the writer.
     * This method is compatible with `BinaryWriteOptions.writeUnknownFields`.
     */
    UnknownFieldHandler.onWrite = (typeName, message, writer) => {
        for (let { no, wireType, data } of UnknownFieldHandler.list(message))
            writer.tag(no, wireType).raw(data);
    };
    /**
     * List unknown fields stored for the message.
     * Note that there may be multiples fields with the same number.
     */
    UnknownFieldHandler.list = (message, fieldNo) => {
        if (is(message)) {
            let all = message[UnknownFieldHandler.symbol];
            return fieldNo ? all.filter(uf => uf.no == fieldNo) : all;
        }
        return [];
    };
    /**
     * Returns the last unknown field by field number.
     */
    UnknownFieldHandler.last = (message, fieldNo) => UnknownFieldHandler.list(message, fieldNo).slice(-1)[0];
    const is = (message) => message && Array.isArray(message[UnknownFieldHandler.symbol]);
})(UnknownFieldHandler || (UnknownFieldHandler = {}));
/**
 * Protobuf binary format wire types.
 *
 * A wire type provides just enough information to find the length of the
 * following value.
 *
 * See https://developers.google.com/protocol-buffers/docs/encoding#structure
 */
var WireType;
(function (WireType) {
    /**
     * Used for int32, int64, uint32, uint64, sint32, sint64, bool, enum
     */
    WireType[WireType["Varint"] = 0] = "Varint";
    /**
     * Used for fixed64, sfixed64, double.
     * Always 8 bytes with little-endian byte order.
     */
    WireType[WireType["Bit64"] = 1] = "Bit64";
    /**
     * Used for string, bytes, embedded messages, packed repeated fields
     *
     * Only repeated numeric types (types which use the varint, 32-bit,
     * or 64-bit wire types) can be packed. In proto3, such fields are
     * packed by default.
     */
    WireType[WireType["LengthDelimited"] = 2] = "LengthDelimited";
    /**
     * Used for groups
     * @deprecated
     */
    WireType[WireType["StartGroup"] = 3] = "StartGroup";
    /**
     * Used for groups
     * @deprecated
     */
    WireType[WireType["EndGroup"] = 4] = "EndGroup";
    /**
     * Used for fixed32, sfixed32, float.
     * Always 4 bytes with little-endian byte order.
     */
    WireType[WireType["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));

// Copyright 2008 Google Inc.  All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Code generated by the Protocol Buffer compiler is owned by the owner
// of the input file used when generating it.  This code is not
// standalone and requires a support library to be linked with it.  This
// support library is itself covered by the above license.
/**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [0]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */
function varint64read() {
    let lowBits = 0;
    let highBits = 0;
    for (let shift = 0; shift < 28; shift += 7) {
        let b = this.buf[this.pos++];
        lowBits |= (b & 0x7F) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [lowBits, highBits];
        }
    }
    let middleByte = this.buf[this.pos++];
    // last four bits of the first 32 bit number
    lowBits |= (middleByte & 0x0F) << 28;
    // 3 upper bits are part of the next 32 bit number
    highBits = (middleByte & 0x70) >> 4;
    if ((middleByte & 0x80) == 0) {
        this.assertBounds();
        return [lowBits, highBits];
    }
    for (let shift = 3; shift <= 31; shift += 7) {
        let b = this.buf[this.pos++];
        highBits |= (b & 0x7F) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [lowBits, highBits];
        }
    }
    throw new Error('invalid varint');
}
/**
 * Write a 64 bit varint, given as two JS numbers, to the given bytes array.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
 */
function varint64write(lo, hi, bytes) {
    for (let i = 0; i < 28; i = i + 7) {
        const shift = lo >>> i;
        const hasNext = !((shift >>> 7) == 0 && hi == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xFF;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    const splitBits = ((lo >>> 28) & 0x0F) | ((hi & 0x07) << 4);
    const hasMoreBits = !((hi >> 3) == 0);
    bytes.push((hasMoreBits ? splitBits | 0x80 : splitBits) & 0xFF);
    if (!hasMoreBits) {
        return;
    }
    for (let i = 3; i < 31; i = i + 7) {
        const shift = hi >>> i;
        const hasNext = !((shift >>> 7) == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xFF;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    bytes.push((hi >>> 31) & 0x01);
}
// constants for binary math
const TWO_PWR_32_DBL$1 = (1 << 16) * (1 << 16);
/**
 * Parse decimal string of 64 bit integer value as two JS numbers.
 *
 * Returns tuple:
 * [0]: minus sign?
 * [1]: low bits
 * [2]: high bits
 *
 * Copyright 2008 Google Inc.
 */
function int64fromString(dec) {
    // Check for minus sign.
    let minus = dec[0] == '-';
    if (minus)
        dec = dec.slice(1);
    // Work 6 decimal digits at a time, acting like we're converting base 1e6
    // digits to binary. This is safe to do with floating point math because
    // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        // Note: Number('') is 0.
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        // Carry bits from lowBits to highBits
        if (lowBits >= TWO_PWR_32_DBL$1) {
            highBits = highBits + ((lowBits / TWO_PWR_32_DBL$1) | 0);
            lowBits = lowBits % TWO_PWR_32_DBL$1;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return [minus, lowBits, highBits];
}
/**
 * Format 64 bit integer value (as two JS numbers) to decimal string.
 *
 * Copyright 2008 Google Inc.
 */
function int64toString(bitsLow, bitsHigh) {
    // Skip the expensive conversion if the number is small enough to use the
    // built-in conversions.
    if ((bitsHigh >>> 0) <= 0x1FFFFF) {
        return '' + (TWO_PWR_32_DBL$1 * bitsHigh + (bitsLow >>> 0));
    }
    // What this code is doing is essentially converting the input number from
    // base-2 to base-1e7, which allows us to represent the 64-bit range with
    // only 3 (very large) digits. Those digits are then trivial to convert to
    // a base-10 string.
    // The magic numbers used here are -
    // 2^24 = 16777216 = (1,6777216) in base-1e7.
    // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.
    // Split 32:32 representation into 16:24:24 representation so our
    // intermediate digits don't overflow.
    let low = bitsLow & 0xFFFFFF;
    let mid = (((bitsLow >>> 24) | (bitsHigh << 8)) >>> 0) & 0xFFFFFF;
    let high = (bitsHigh >> 16) & 0xFFFF;
    // Assemble our three base-1e7 digits, ignoring carries. The maximum
    // value in a digit at this step is representable as a 48-bit integer, which
    // can be stored in a 64-bit floating point number.
    let digitA = low + (mid * 6777216) + (high * 6710656);
    let digitB = mid + (high * 8147497);
    let digitC = (high * 2);
    // Apply carries from A to B and from B to C.
    let base = 10000000;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    // Convert base-1e7 digits to base-10, with optional leading zeroes.
    function decimalFrom1e7(digit1e7, needLeadingZeros) {
        let partial = digit1e7 ? String(digit1e7) : '';
        if (needLeadingZeros) {
            return '0000000'.slice(partial.length) + partial;
        }
        return partial;
    }
    return decimalFrom1e7(digitC, /*needLeadingZeros=*/ 0) +
        decimalFrom1e7(digitB, /*needLeadingZeros=*/ digitC) +
        // If the final 1e7 digit didn't need leading zeros, we would have
        // returned via the trivial code path at the top.
        decimalFrom1e7(digitA, /*needLeadingZeros=*/ 1);
}
/**
 * Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
 */
function varint32write(value, bytes) {
    if (value >= 0) {
        // write value as varint 32
        while (value > 0x7f) {
            bytes.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        bytes.push(value);
    }
    else {
        for (let i = 0; i < 9; i++) {
            bytes.push(value & 127 | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
/**
 * Read an unsigned 32 bit varint.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
 */
function varint32read() {
    let b = this.buf[this.pos++];
    let result = b & 0x7F;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7F) << 7;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7F) << 14;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7F) << 21;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    // Extract only last 4 bits
    b = this.buf[this.pos++];
    result |= (b & 0x0F) << 28;
    for (let readBytes = 5; ((b & 0x80) !== 0) && readBytes < 10; readBytes++)
        b = this.buf[this.pos++];
    if ((b & 0x80) != 0)
        throw new Error('invalid varint');
    this.assertBounds();
    // Result can have 32 bits, convert it to unsigned
    return result >>> 0;
}

let BI;
function detectBi() {
    const dv = new DataView(new ArrayBuffer(8));
    const ok = globalThis.BigInt !== undefined
        && typeof dv.getBigInt64 === "function"
        && typeof dv.getBigUint64 === "function"
        && typeof dv.setBigInt64 === "function"
        && typeof dv.setBigUint64 === "function";
    BI = ok ? {
        MIN: BigInt("-9223372036854775808"),
        MAX: BigInt("9223372036854775807"),
        UMIN: BigInt("0"),
        UMAX: BigInt("18446744073709551615"),
        C: BigInt,
        V: dv,
    } : undefined;
}
detectBi();
function assertBi(bi) {
    if (!bi)
        throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
}
// used to validate from(string) input (when bigint is unavailable)
const RE_DECIMAL_STR = /^-?[0-9]+$/;
// constants for binary math
const TWO_PWR_32_DBL = 0x100000000;
const HALF_2_PWR_32 = 0x080000000;
// base class for PbLong and PbULong provides shared code
class SharedPbLong {
    /**
     * Create a new instance with the given bits.
     */
    constructor(lo, hi) {
        this.lo = lo | 0;
        this.hi = hi | 0;
    }
    /**
     * Is this instance equal to 0?
     */
    isZero() {
        return this.lo == 0 && this.hi == 0;
    }
    /**
     * Convert to a native number.
     */
    toNumber() {
        let result = this.hi * TWO_PWR_32_DBL + (this.lo >>> 0);
        if (!Number.isSafeInteger(result))
            throw new Error("cannot convert to safe number");
        return result;
    }
}
/**
 * 64-bit unsigned integer as two 32-bit values.
 * Converts between `string`, `number` and `bigint` representations.
 */
class PbULong extends SharedPbLong {
    /**
     * Create instance from a `string`, `number` or `bigint`.
     */
    static from(value) {
        if (BI)
            // noinspection FallThroughInSwitchStatementJS
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    if (value == "")
                        throw new Error('string is no integer');
                    value = BI.C(value);
                case "number":
                    if (value === 0)
                        return this.ZERO;
                    value = BI.C(value);
                case "bigint":
                    if (!value)
                        return this.ZERO;
                    if (value < BI.UMIN)
                        throw new Error('signed value for ulong');
                    if (value > BI.UMAX)
                        throw new Error('ulong too large');
                    BI.V.setBigUint64(0, value, true);
                    return new PbULong(BI.V.getInt32(0, true), BI.V.getInt32(4, true));
            }
        else
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    value = value.trim();
                    if (!RE_DECIMAL_STR.test(value))
                        throw new Error('string is no integer');
                    let [minus, lo, hi] = int64fromString(value);
                    if (minus)
                        throw new Error('signed value for ulong');
                    return new PbULong(lo, hi);
                case "number":
                    if (value == 0)
                        return this.ZERO;
                    if (!Number.isSafeInteger(value))
                        throw new Error('number is no integer');
                    if (value < 0)
                        throw new Error('signed value for ulong');
                    return new PbULong(value, value / TWO_PWR_32_DBL);
            }
        throw new Error('unknown value ' + typeof value);
    }
    /**
     * Convert to decimal string.
     */
    toString() {
        return BI ? this.toBigInt().toString() : int64toString(this.lo, this.hi);
    }
    /**
     * Convert to native bigint.
     */
    toBigInt() {
        assertBi(BI);
        BI.V.setInt32(0, this.lo, true);
        BI.V.setInt32(4, this.hi, true);
        return BI.V.getBigUint64(0, true);
    }
}
/**
 * ulong 0 singleton.
 */
PbULong.ZERO = new PbULong(0, 0);
/**
 * 64-bit signed integer as two 32-bit values.
 * Converts between `string`, `number` and `bigint` representations.
 */
class PbLong extends SharedPbLong {
    /**
     * Create instance from a `string`, `number` or `bigint`.
     */
    static from(value) {
        if (BI)
            // noinspection FallThroughInSwitchStatementJS
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    if (value == "")
                        throw new Error('string is no integer');
                    value = BI.C(value);
                case "number":
                    if (value === 0)
                        return this.ZERO;
                    value = BI.C(value);
                case "bigint":
                    if (!value)
                        return this.ZERO;
                    if (value < BI.MIN)
                        throw new Error('signed long too small');
                    if (value > BI.MAX)
                        throw new Error('signed long too large');
                    BI.V.setBigInt64(0, value, true);
                    return new PbLong(BI.V.getInt32(0, true), BI.V.getInt32(4, true));
            }
        else
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    value = value.trim();
                    if (!RE_DECIMAL_STR.test(value))
                        throw new Error('string is no integer');
                    let [minus, lo, hi] = int64fromString(value);
                    if (minus) {
                        if (hi > HALF_2_PWR_32 || (hi == HALF_2_PWR_32 && lo != 0))
                            throw new Error('signed long too small');
                    }
                    else if (hi >= HALF_2_PWR_32)
                        throw new Error('signed long too large');
                    let pbl = new PbLong(lo, hi);
                    return minus ? pbl.negate() : pbl;
                case "number":
                    if (value == 0)
                        return this.ZERO;
                    if (!Number.isSafeInteger(value))
                        throw new Error('number is no integer');
                    return value > 0
                        ? new PbLong(value, value / TWO_PWR_32_DBL)
                        : new PbLong(-value, -value / TWO_PWR_32_DBL).negate();
            }
        throw new Error('unknown value ' + typeof value);
    }
    /**
     * Do we have a minus sign?
     */
    isNegative() {
        return (this.hi & HALF_2_PWR_32) !== 0;
    }
    /**
     * Negate two's complement.
     * Invert all the bits and add one to the result.
     */
    negate() {
        let hi = ~this.hi, lo = this.lo;
        if (lo)
            lo = ~lo + 1;
        else
            hi += 1;
        return new PbLong(lo, hi);
    }
    /**
     * Convert to decimal string.
     */
    toString() {
        if (BI)
            return this.toBigInt().toString();
        if (this.isNegative()) {
            let n = this.negate();
            return '-' + int64toString(n.lo, n.hi);
        }
        return int64toString(this.lo, this.hi);
    }
    /**
     * Convert to native bigint.
     */
    toBigInt() {
        assertBi(BI);
        BI.V.setInt32(0, this.lo, true);
        BI.V.setInt32(4, this.hi, true);
        return BI.V.getBigInt64(0, true);
    }
}
/**
 * long 0 singleton.
 */
PbLong.ZERO = new PbLong(0, 0);

const defaultsRead$1 = {
    readUnknownField: true,
    readerFactory: bytes => new BinaryReader(bytes),
};
/**
 * Make options for reading binary data form partial options.
 */
function binaryReadOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsRead$1), options) : defaultsRead$1;
}
class BinaryReader {
    constructor(buf, textDecoder) {
        this.varint64 = varint64read; // dirty cast for `this`
        /**
         * Read a `uint32` field, an unsigned 32 bit varint.
         */
        this.uint32 = varint32read; // dirty cast for `this` and access to protected `buf`
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder("utf-8", {
            fatal: true,
            ignoreBOM: true,
        });
    }
    /**
     * Reads a tag - field number and wire type.
     */
    tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5)
            throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [fieldNo, wireType];
    }
    /**
     * Skip one element on the wire and return the skipped data.
     * Supports WireType.StartGroup since v2.0.0-alpha.23.
     */
    skip(wireType) {
        let start = this.pos;
        // noinspection FallThroughInSwitchStatementJS
        switch (wireType) {
            case WireType.Varint:
                while (this.buf[this.pos++] & 0x80) {
                    // ignore
                }
                break;
            case WireType.Bit64:
                this.pos += 4;
            case WireType.Bit32:
                this.pos += 4;
                break;
            case WireType.LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case WireType.StartGroup:
                // From descriptor.proto: Group type is deprecated, not supported in proto3.
                // But we must still be able to parse and treat as unknown.
                let t;
                while ((t = this.tag()[1]) !== WireType.EndGroup) {
                    this.skip(t);
                }
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    /**
     * Throws error if position in byte array is out of range.
     */
    assertBounds() {
        if (this.pos > this.len)
            throw new RangeError("premature EOF");
    }
    /**
     * Read a `int32` field, a signed 32 bit varint.
     */
    int32() {
        return this.uint32() | 0;
    }
    /**
     * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
     */
    sint32() {
        let zze = this.uint32();
        // decode zigzag
        return (zze >>> 1) ^ -(zze & 1);
    }
    /**
     * Read a `int64` field, a signed 64-bit varint.
     */
    int64() {
        return new PbLong(...this.varint64());
    }
    /**
     * Read a `uint64` field, an unsigned 64-bit varint.
     */
    uint64() {
        return new PbULong(...this.varint64());
    }
    /**
     * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
     */
    sint64() {
        let [lo, hi] = this.varint64();
        // decode zig zag
        let s = -(lo & 1);
        lo = ((lo >>> 1 | (hi & 1) << 31) ^ s);
        hi = (hi >>> 1 ^ s);
        return new PbLong(lo, hi);
    }
    /**
     * Read a `bool` field, a variant.
     */
    bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
    }
    /**
     * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
     */
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
     */
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
     */
    fixed64() {
        return new PbULong(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
     */
    sfixed64() {
        return new PbLong(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `float` field, 32-bit floating point number.
     */
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `double` field, a 64-bit floating point number.
     */
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    /**
     * Read a `bytes` field, length-delimited arbitrary data.
     */
    bytes() {
        let len = this.uint32();
        let start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    /**
     * Read a `string` field, length-delimited data converted to UTF-8 text.
     */
    string() {
        return this.textDecoder.decode(this.bytes());
    }
}

/**
 * assert that condition is true or throw error (with message)
 */
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
const FLOAT32_MAX = 3.4028234663852886e+38, FLOAT32_MIN = -3.4028234663852886e+38, UINT32_MAX = 0xFFFFFFFF, INT32_MAX = 0X7FFFFFFF, INT32_MIN = -0X80000000;
function assertInt32(arg) {
    if (typeof arg !== "number")
        throw new Error('invalid int 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN)
        throw new Error('invalid int 32: ' + arg);
}
function assertUInt32(arg) {
    if (typeof arg !== "number")
        throw new Error('invalid uint 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0)
        throw new Error('invalid uint 32: ' + arg);
}
function assertFloat32(arg) {
    if (typeof arg !== "number")
        throw new Error('invalid float 32: ' + typeof arg);
    if (!Number.isFinite(arg))
        return;
    if (arg > FLOAT32_MAX || arg < FLOAT32_MIN)
        throw new Error('invalid float 32: ' + arg);
}

const defaultsWrite$1 = {
    writeUnknownFields: true,
    writerFactory: () => new BinaryWriter(),
};
/**
 * Make options for writing binary data form partial options.
 */
function binaryWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsWrite$1), options) : defaultsWrite$1;
}
class BinaryWriter {
    constructor(textEncoder) {
        /**
         * Previous fork states.
         */
        this.stack = [];
        this.textEncoder = textEncoder !== null && textEncoder !== void 0 ? textEncoder : new TextEncoder();
        this.chunks = [];
        this.buf = [];
    }
    /**
     * Return all bytes written and reset this writer.
     */
    finish() {
        this.chunks.push(new Uint8Array(this.buf)); // flush the buffer
        let len = 0;
        for (let i = 0; i < this.chunks.length; i++)
            len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for (let i = 0; i < this.chunks.length; i++) {
            bytes.set(this.chunks[i], offset);
            offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
    }
    /**
     * Start a new fork for length-delimited data like a message
     * or a packed repeated field.
     *
     * Must be joined later with `join()`.
     */
    fork() {
        this.stack.push({ chunks: this.chunks, buf: this.buf });
        this.chunks = [];
        this.buf = [];
        return this;
    }
    /**
     * Join the last fork. Write its length and bytes, then
     * return to the previous state.
     */
    join() {
        // get chunk of fork
        let chunk = this.finish();
        // restore previous state
        let prev = this.stack.pop();
        if (!prev)
            throw new Error('invalid state, fork stack empty');
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        // write length of chunk as varint
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    /**
     * Writes a tag (field number and wire type).
     *
     * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
     *
     * Generated code should compute the tag ahead of time and call `uint32()`.
     */
    tag(fieldNo, type) {
        return this.uint32((fieldNo << 3 | type) >>> 0);
    }
    /**
     * Write a chunk of raw bytes.
     */
    raw(chunk) {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf));
            this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
    }
    /**
     * Write a `uint32` value, an unsigned 32 bit varint.
     */
    uint32(value) {
        assertUInt32(value);
        // write value as varint 32, inlined for speed
        while (value > 0x7f) {
            this.buf.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        this.buf.push(value);
        return this;
    }
    /**
     * Write a `int32` value, a signed 32 bit varint.
     */
    int32(value) {
        assertInt32(value);
        varint32write(value, this.buf);
        return this;
    }
    /**
     * Write a `bool` value, a variant.
     */
    bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
    }
    /**
     * Write a `bytes` value, length-delimited arbitrary data.
     */
    bytes(value) {
        this.uint32(value.byteLength); // write length of chunk as varint
        return this.raw(value);
    }
    /**
     * Write a `string` value, length-delimited data converted to UTF-8 text.
     */
    string(value) {
        let chunk = this.textEncoder.encode(value);
        this.uint32(chunk.byteLength); // write length of chunk as varint
        return this.raw(chunk);
    }
    /**
     * Write a `float` value, 32-bit floating point number.
     */
    float(value) {
        assertFloat32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `double` value, a 64-bit floating point number.
     */
    double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
     */
    fixed32(value) {
        assertUInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
     */
    sfixed32(value) {
        assertInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
     */
    sint32(value) {
        assertInt32(value);
        // zigzag encode
        value = ((value << 1) ^ (value >> 31)) >>> 0;
        varint32write(value, this.buf);
        return this;
    }
    /**
     * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
     */
    sfixed64(value) {
        let chunk = new Uint8Array(8);
        let view = new DataView(chunk.buffer);
        let long = PbLong.from(value);
        view.setInt32(0, long.lo, true);
        view.setInt32(4, long.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
     */
    fixed64(value) {
        let chunk = new Uint8Array(8);
        let view = new DataView(chunk.buffer);
        let long = PbULong.from(value);
        view.setInt32(0, long.lo, true);
        view.setInt32(4, long.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `int64` value, a signed 64-bit varint.
     */
    int64(value) {
        let long = PbLong.from(value);
        varint64write(long.lo, long.hi, this.buf);
        return this;
    }
    /**
     * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
     */
    sint64(value) {
        let long = PbLong.from(value), 
        // zigzag encode
        sign = long.hi >> 31, lo = (long.lo << 1) ^ sign, hi = ((long.hi << 1) | (long.lo >>> 31)) ^ sign;
        varint64write(lo, hi, this.buf);
        return this;
    }
    /**
     * Write a `uint64` value, an unsigned 64-bit varint.
     */
    uint64(value) {
        let long = PbULong.from(value);
        varint64write(long.lo, long.hi, this.buf);
        return this;
    }
}

const defaultsWrite = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0,
}, defaultsRead = {
    ignoreUnknownFields: false,
};
/**
 * Make options for reading JSON data from partial options.
 */
function jsonReadOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsRead), options) : defaultsRead;
}
/**
 * Make options for writing JSON data from partial options.
 */
function jsonWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsWrite), options) : defaultsWrite;
}

/**
 * The symbol used as a key on message objects to store the message type.
 *
 * Note that this is an experimental feature - it is here to stay, but
 * implementation details may change without notice.
 */
const MESSAGE_TYPE = Symbol.for("protobuf-ts/message-type");

/**
 * Converts snake_case to lowerCamelCase.
 *
 * Should behave like protoc:
 * https://github.com/protocolbuffers/protobuf/blob/e8ae137c96444ea313485ed1118c5e43b2099cf1/src/google/protobuf/compiler/java/java_helpers.cc#L118
 */
function lowerCamelCase(snakeCase) {
    let capNext = false;
    const sb = [];
    for (let i = 0; i < snakeCase.length; i++) {
        let next = snakeCase.charAt(i);
        if (next == '_') {
            capNext = true;
        }
        else if (/\d/.test(next)) {
            sb.push(next);
            capNext = true;
        }
        else if (capNext) {
            sb.push(next.toUpperCase());
            capNext = false;
        }
        else if (i == 0) {
            sb.push(next.toLowerCase());
        }
        else {
            sb.push(next);
        }
    }
    return sb.join('');
}

/**
 * Scalar value types. This is a subset of field types declared by protobuf
 * enum google.protobuf.FieldDescriptorProto.Type The types GROUP and MESSAGE
 * are omitted, but the numerical values are identical.
 */
var ScalarType;
(function (ScalarType) {
    // 0 is reserved for errors.
    // Order is weird for historical reasons.
    ScalarType[ScalarType["DOUBLE"] = 1] = "DOUBLE";
    ScalarType[ScalarType["FLOAT"] = 2] = "FLOAT";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
    // negative values are likely.
    ScalarType[ScalarType["INT64"] = 3] = "INT64";
    ScalarType[ScalarType["UINT64"] = 4] = "UINT64";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
    // negative values are likely.
    ScalarType[ScalarType["INT32"] = 5] = "INT32";
    ScalarType[ScalarType["FIXED64"] = 6] = "FIXED64";
    ScalarType[ScalarType["FIXED32"] = 7] = "FIXED32";
    ScalarType[ScalarType["BOOL"] = 8] = "BOOL";
    ScalarType[ScalarType["STRING"] = 9] = "STRING";
    // Tag-delimited aggregate.
    // Group type is deprecated and not supported in proto3. However, Proto3
    // implementations should still be able to parse the group wire format and
    // treat group fields as unknown fields.
    // TYPE_GROUP = 10,
    // TYPE_MESSAGE = 11,  // Length-delimited aggregate.
    // New in version 2.
    ScalarType[ScalarType["BYTES"] = 12] = "BYTES";
    ScalarType[ScalarType["UINT32"] = 13] = "UINT32";
    // TYPE_ENUM = 14,
    ScalarType[ScalarType["SFIXED32"] = 15] = "SFIXED32";
    ScalarType[ScalarType["SFIXED64"] = 16] = "SFIXED64";
    ScalarType[ScalarType["SINT32"] = 17] = "SINT32";
    ScalarType[ScalarType["SINT64"] = 18] = "SINT64";
})(ScalarType || (ScalarType = {}));
/**
 * JavaScript representation of 64 bit integral types. Equivalent to the
 * field option "jstype".
 *
 * By default, protobuf-ts represents 64 bit types as `bigint`.
 *
 * You can change the default behaviour by enabling the plugin parameter
 * `long_type_string`, which will represent 64 bit types as `string`.
 *
 * Alternatively, you can change the behaviour for individual fields
 * with the field option "jstype":
 *
 * ```protobuf
 * uint64 my_field = 1 [jstype = JS_STRING];
 * uint64 other_field = 2 [jstype = JS_NUMBER];
 * ```
 */
var LongType;
(function (LongType) {
    /**
     * Use JavaScript `bigint`.
     *
     * Field option `[jstype = JS_NORMAL]`.
     */
    LongType[LongType["BIGINT"] = 0] = "BIGINT";
    /**
     * Use JavaScript `string`.
     *
     * Field option `[jstype = JS_STRING]`.
     */
    LongType[LongType["STRING"] = 1] = "STRING";
    /**
     * Use JavaScript `number`.
     *
     * Large values will loose precision.
     *
     * Field option `[jstype = JS_NUMBER]`.
     */
    LongType[LongType["NUMBER"] = 2] = "NUMBER";
})(LongType || (LongType = {}));
/**
 * Protobuf 2.1.0 introduced packed repeated fields.
 * Setting the field option `[packed = true]` enables packing.
 *
 * In proto3, all repeated fields are packed by default.
 * Setting the field option `[packed = false]` disables packing.
 *
 * Packed repeated fields are encoded with a single tag,
 * then a length-delimiter, then the element values.
 *
 * Unpacked repeated fields are encoded with a tag and
 * value for each element.
 *
 * `bytes` and `string` cannot be packed.
 */
var RepeatType;
(function (RepeatType) {
    /**
     * The field is not repeated.
     */
    RepeatType[RepeatType["NO"] = 0] = "NO";
    /**
     * The field is repeated and should be packed.
     * Invalid for `bytes` and `string`, they cannot be packed.
     */
    RepeatType[RepeatType["PACKED"] = 1] = "PACKED";
    /**
     * The field is repeated but should not be packed.
     * The only valid repeat type for repeated `bytes` and `string`.
     */
    RepeatType[RepeatType["UNPACKED"] = 2] = "UNPACKED";
})(RepeatType || (RepeatType = {}));
/**
 * Turns PartialFieldInfo into FieldInfo.
 */
function normalizeFieldInfo(field) {
    var _a, _b, _c, _d;
    field.localName = (_a = field.localName) !== null && _a !== void 0 ? _a : lowerCamelCase(field.name);
    field.jsonName = (_b = field.jsonName) !== null && _b !== void 0 ? _b : lowerCamelCase(field.name);
    field.repeat = (_c = field.repeat) !== null && _c !== void 0 ? _c : RepeatType.NO;
    field.opt = (_d = field.opt) !== null && _d !== void 0 ? _d : (field.repeat ? false : field.oneof ? false : field.kind == "message");
    return field;
}

/**
 * Is the given value a valid oneof group?
 *
 * We represent protobuf `oneof` as algebraic data types (ADT) in generated
 * code. But when working with messages of unknown type, the ADT does not
 * help us.
 *
 * This type guard checks if the given object adheres to the ADT rules, which
 * are as follows:
 *
 * 1) Must be an object.
 *
 * 2) Must have a "oneofKind" discriminator property.
 *
 * 3) If "oneofKind" is `undefined`, no member field is selected. The object
 * must not have any other properties.
 *
 * 4) If "oneofKind" is a `string`, the member field with this name is
 * selected.
 *
 * 5) If a member field is selected, the object must have a second property
 * with this name. The property must not be `undefined`.
 *
 * 6) No extra properties are allowed. The object has either one property
 * (no selection) or two properties (selection).
 *
 */
function isOneofGroup(any) {
    if (typeof any != 'object' || any === null || !any.hasOwnProperty('oneofKind')) {
        return false;
    }
    switch (typeof any.oneofKind) {
        case "string":
            if (any[any.oneofKind] === undefined)
                return false;
            return Object.keys(any).length == 2;
        case "undefined":
            return Object.keys(any).length == 1;
        default:
            return false;
    }
}

// noinspection JSMethodCanBeStatic
class ReflectionTypeCheck {
    constructor(info) {
        var _a;
        this.fields = (_a = info.fields) !== null && _a !== void 0 ? _a : [];
    }
    prepare() {
        if (this.data)
            return;
        const req = [], known = [], oneofs = [];
        for (let field of this.fields) {
            if (field.oneof) {
                if (!oneofs.includes(field.oneof)) {
                    oneofs.push(field.oneof);
                    req.push(field.oneof);
                    known.push(field.oneof);
                }
            }
            else {
                known.push(field.localName);
                switch (field.kind) {
                    case "scalar":
                    case "enum":
                        if (!field.opt || field.repeat)
                            req.push(field.localName);
                        break;
                    case "message":
                        if (field.repeat)
                            req.push(field.localName);
                        break;
                    case "map":
                        req.push(field.localName);
                        break;
                }
            }
        }
        this.data = { req, known, oneofs: Object.values(oneofs) };
    }
    /**
     * Is the argument a valid message as specified by the
     * reflection information?
     *
     * Checks all field types recursively. The `depth`
     * specifies how deep into the structure the check will be.
     *
     * With a depth of 0, only the presence of fields
     * is checked.
     *
     * With a depth of 1 or more, the field types are checked.
     *
     * With a depth of 2 or more, the members of map, repeated
     * and message fields are checked.
     *
     * Message fields will be checked recursively with depth - 1.
     *
     * The number of map entries / repeated values being checked
     * is < depth.
     */
    is(message, depth, allowExcessProperties = false) {
        if (depth < 0)
            return true;
        if (message === null || message === undefined || typeof message != 'object')
            return false;
        this.prepare();
        let keys = Object.keys(message), data = this.data;
        // if a required field is missing in arg, this cannot be a T
        if (keys.length < data.req.length || data.req.some(n => !keys.includes(n)))
            return false;
        if (!allowExcessProperties) {
            // if the arg contains a key we dont know, this is not a literal T
            if (keys.some(k => !data.known.includes(k)))
                return false;
        }
        // "With a depth of 0, only the presence and absence of fields is checked."
        // "With a depth of 1 or more, the field types are checked."
        if (depth < 1) {
            return true;
        }
        // check oneof group
        for (const name of data.oneofs) {
            const group = message[name];
            if (!isOneofGroup(group))
                return false;
            if (group.oneofKind === undefined)
                continue;
            const field = this.fields.find(f => f.localName === group.oneofKind);
            if (!field)
                return false; // we found no field, but have a kind, something is wrong
            if (!this.field(group[group.oneofKind], field, allowExcessProperties, depth))
                return false;
        }
        // check types
        for (const field of this.fields) {
            if (field.oneof !== undefined)
                continue;
            if (!this.field(message[field.localName], field, allowExcessProperties, depth))
                return false;
        }
        return true;
    }
    field(arg, field, allowExcessProperties, depth) {
        let repeated = field.repeat;
        switch (field.kind) {
            case "scalar":
                if (arg === undefined)
                    return field.opt;
                if (repeated)
                    return this.scalars(arg, field.T, depth, field.L);
                return this.scalar(arg, field.T, field.L);
            case "enum":
                if (arg === undefined)
                    return field.opt;
                if (repeated)
                    return this.scalars(arg, ScalarType.INT32, depth);
                return this.scalar(arg, ScalarType.INT32);
            case "message":
                if (arg === undefined)
                    return true;
                if (repeated)
                    return this.messages(arg, field.T(), allowExcessProperties, depth);
                return this.message(arg, field.T(), allowExcessProperties, depth);
            case "map":
                if (typeof arg != 'object' || arg === null)
                    return false;
                if (depth < 2)
                    return true;
                if (!this.mapKeys(arg, field.K, depth))
                    return false;
                switch (field.V.kind) {
                    case "scalar":
                        return this.scalars(Object.values(arg), field.V.T, depth, field.V.L);
                    case "enum":
                        return this.scalars(Object.values(arg), ScalarType.INT32, depth);
                    case "message":
                        return this.messages(Object.values(arg), field.V.T(), allowExcessProperties, depth);
                }
                break;
        }
        return true;
    }
    message(arg, type, allowExcessProperties, depth) {
        if (allowExcessProperties) {
            return type.isAssignable(arg, depth);
        }
        return type.is(arg, depth);
    }
    messages(arg, type, allowExcessProperties, depth) {
        if (!Array.isArray(arg))
            return false;
        if (depth < 2)
            return true;
        if (allowExcessProperties) {
            for (let i = 0; i < arg.length && i < depth; i++)
                if (!type.isAssignable(arg[i], depth - 1))
                    return false;
        }
        else {
            for (let i = 0; i < arg.length && i < depth; i++)
                if (!type.is(arg[i], depth - 1))
                    return false;
        }
        return true;
    }
    scalar(arg, type, longType) {
        let argType = typeof arg;
        switch (type) {
            case ScalarType.UINT64:
            case ScalarType.FIXED64:
            case ScalarType.INT64:
            case ScalarType.SFIXED64:
            case ScalarType.SINT64:
                switch (longType) {
                    case LongType.BIGINT:
                        return argType == "bigint";
                    case LongType.NUMBER:
                        return argType == "number" && !isNaN(arg);
                    default:
                        return argType == "string";
                }
            case ScalarType.BOOL:
                return argType == 'boolean';
            case ScalarType.STRING:
                return argType == 'string';
            case ScalarType.BYTES:
                return arg instanceof Uint8Array;
            case ScalarType.DOUBLE:
            case ScalarType.FLOAT:
                return argType == 'number' && !isNaN(arg);
            default:
                // case ScalarType.UINT32:
                // case ScalarType.FIXED32:
                // case ScalarType.INT32:
                // case ScalarType.SINT32:
                // case ScalarType.SFIXED32:
                return argType == 'number' && Number.isInteger(arg);
        }
    }
    scalars(arg, type, depth, longType) {
        if (!Array.isArray(arg))
            return false;
        if (depth < 2)
            return true;
        if (Array.isArray(arg))
            for (let i = 0; i < arg.length && i < depth; i++)
                if (!this.scalar(arg[i], type, longType))
                    return false;
        return true;
    }
    mapKeys(map, type, depth) {
        let keys = Object.keys(map);
        switch (type) {
            case ScalarType.INT32:
            case ScalarType.FIXED32:
            case ScalarType.SFIXED32:
            case ScalarType.SINT32:
            case ScalarType.UINT32:
                return this.scalars(keys.slice(0, depth).map(k => parseInt(k)), type, depth);
            case ScalarType.BOOL:
                return this.scalars(keys.slice(0, depth).map(k => k == 'true' ? true : k == 'false' ? false : k), type, depth);
            default:
                return this.scalars(keys, type, depth, LongType.STRING);
        }
    }
}

/**
 * Utility method to convert a PbLong or PbUlong to a JavaScript
 * representation during runtime.
 *
 * Works with generated field information, `undefined` is equivalent
 * to `STRING`.
 */
function reflectionLongConvert(long, type) {
    switch (type) {
        case LongType.BIGINT:
            return long.toBigInt();
        case LongType.NUMBER:
            return long.toNumber();
        default:
            // case undefined:
            // case LongType.STRING:
            return long.toString();
    }
}

/**
 * Reads proto3 messages in canonical JSON format using reflection information.
 *
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 */
class ReflectionJsonReader {
    constructor(info) {
        this.info = info;
    }
    prepare() {
        var _a;
        if (this.fMap === undefined) {
            this.fMap = {};
            const fieldsInput = (_a = this.info.fields) !== null && _a !== void 0 ? _a : [];
            for (const field of fieldsInput) {
                this.fMap[field.name] = field;
                this.fMap[field.jsonName] = field;
                this.fMap[field.localName] = field;
            }
        }
    }
    // Cannot parse JSON <type of jsonValue> for <type name>#<fieldName>.
    assert(condition, fieldName, jsonValue) {
        if (!condition) {
            let what = typeofJsonValue(jsonValue);
            if (what == "number" || what == "boolean")
                what = jsonValue.toString();
            throw new Error(`Cannot parse JSON ${what} for ${this.info.typeName}#${fieldName}`);
        }
    }
    /**
     * Reads a message from canonical JSON format into the target message.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */
    read(input, message, options) {
        this.prepare();
        const oneofsHandled = [];
        for (const [jsonKey, jsonValue] of Object.entries(input)) {
            const field = this.fMap[jsonKey];
            if (!field) {
                if (!options.ignoreUnknownFields)
                    throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${jsonKey}`);
                continue;
            }
            const localName = field.localName;
            // handle oneof ADT
            let target; // this will be the target for the field value, whether it is member of a oneof or not
            if (field.oneof) {
                if (jsonValue === null && (field.kind !== 'enum' || field.T()[0] !== 'google.protobuf.NullValue')) {
                    continue;
                }
                // since json objects are unordered by specification, it is not possible to take the last of multiple oneofs
                if (oneofsHandled.includes(field.oneof))
                    throw new Error(`Multiple members of the oneof group "${field.oneof}" of ${this.info.typeName} are present in JSON.`);
                oneofsHandled.push(field.oneof);
                target = message[field.oneof] = {
                    oneofKind: localName
                };
            }
            else {
                target = message;
            }
            // we have handled oneof above. we just have read the value into `target`.
            if (field.kind == 'map') {
                if (jsonValue === null) {
                    continue;
                }
                // check input
                this.assert(isJsonObject(jsonValue), field.name, jsonValue);
                // our target to put map entries into
                const fieldObj = target[localName];
                // read entries
                for (const [jsonObjKey, jsonObjValue] of Object.entries(jsonValue)) {
                    this.assert(jsonObjValue !== null, field.name + " map value", null);
                    // read value
                    let val;
                    switch (field.V.kind) {
                        case "message":
                            val = field.V.T().internalJsonRead(jsonObjValue, options);
                            break;
                        case "enum":
                            val = this.enum(field.V.T(), jsonObjValue, field.name, options.ignoreUnknownFields);
                            if (val === false)
                                continue;
                            break;
                        case "scalar":
                            val = this.scalar(jsonObjValue, field.V.T, field.V.L, field.name);
                            break;
                    }
                    this.assert(val !== undefined, field.name + " map value", jsonObjValue);
                    // read key
                    let key = jsonObjKey;
                    if (field.K == ScalarType.BOOL)
                        key = key == "true" ? true : key == "false" ? false : key;
                    key = this.scalar(key, field.K, LongType.STRING, field.name).toString();
                    fieldObj[key] = val;
                }
            }
            else if (field.repeat) {
                if (jsonValue === null)
                    continue;
                // check input
                this.assert(Array.isArray(jsonValue), field.name, jsonValue);
                // our target to put array entries into
                const fieldArr = target[localName];
                // read array entries
                for (const jsonItem of jsonValue) {
                    this.assert(jsonItem !== null, field.name, null);
                    let val;
                    switch (field.kind) {
                        case "message":
                            val = field.T().internalJsonRead(jsonItem, options);
                            break;
                        case "enum":
                            val = this.enum(field.T(), jsonItem, field.name, options.ignoreUnknownFields);
                            if (val === false)
                                continue;
                            break;
                        case "scalar":
                            val = this.scalar(jsonItem, field.T, field.L, field.name);
                            break;
                    }
                    this.assert(val !== undefined, field.name, jsonValue);
                    fieldArr.push(val);
                }
            }
            else {
                switch (field.kind) {
                    case "message":
                        if (jsonValue === null && field.T().typeName != 'google.protobuf.Value') {
                            this.assert(field.oneof === undefined, field.name + " (oneof member)", null);
                            continue;
                        }
                        target[localName] = field.T().internalJsonRead(jsonValue, options, target[localName]);
                        break;
                    case "enum":
                        let val = this.enum(field.T(), jsonValue, field.name, options.ignoreUnknownFields);
                        if (val === false)
                            continue;
                        target[localName] = val;
                        break;
                    case "scalar":
                        target[localName] = this.scalar(jsonValue, field.T, field.L, field.name);
                        break;
                }
            }
        }
    }
    /**
     * Returns `false` for unrecognized string representations.
     *
     * google.protobuf.NullValue accepts only JSON `null` (or the old `"NULL_VALUE"`).
     */
    enum(type, json, fieldName, ignoreUnknownFields) {
        if (type[0] == 'google.protobuf.NullValue')
            assert(json === null || json === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${fieldName}, enum ${type[0]} only accepts null.`);
        if (json === null)
            // we require 0 to be default value for all enums
            return 0;
        switch (typeof json) {
            case "number":
                assert(Number.isInteger(json), `Unable to parse field ${this.info.typeName}#${fieldName}, enum can only be integral number, got ${json}.`);
                return json;
            case "string":
                let localEnumName = json;
                if (type[2] && json.substring(0, type[2].length) === type[2])
                    // lookup without the shared prefix
                    localEnumName = json.substring(type[2].length);
                let enumNumber = type[1][localEnumName];
                if (typeof enumNumber === 'undefined' && ignoreUnknownFields) {
                    return false;
                }
                assert(typeof enumNumber == "number", `Unable to parse field ${this.info.typeName}#${fieldName}, enum ${type[0]} has no value for "${json}".`);
                return enumNumber;
        }
        assert(false, `Unable to parse field ${this.info.typeName}#${fieldName}, cannot parse enum value from ${typeof json}".`);
    }
    scalar(json, type, longType, fieldName) {
        let e;
        try {
            switch (type) {
                // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
                // Either numbers or strings are accepted. Exponent notation is also accepted.
                case ScalarType.DOUBLE:
                case ScalarType.FLOAT:
                    if (json === null)
                        return .0;
                    if (json === "NaN")
                        return Number.NaN;
                    if (json === "Infinity")
                        return Number.POSITIVE_INFINITY;
                    if (json === "-Infinity")
                        return Number.NEGATIVE_INFINITY;
                    if (json === "") {
                        e = "empty string";
                        break;
                    }
                    if (typeof json == "string" && json.trim().length !== json.length) {
                        e = "extra whitespace";
                        break;
                    }
                    if (typeof json != "string" && typeof json != "number") {
                        break;
                    }
                    let float = Number(json);
                    if (Number.isNaN(float)) {
                        e = "not a number";
                        break;
                    }
                    if (!Number.isFinite(float)) {
                        // infinity and -infinity are handled by string representation above, so this is an error
                        e = "too large or small";
                        break;
                    }
                    if (type == ScalarType.FLOAT)
                        assertFloat32(float);
                    return float;
                // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
                case ScalarType.INT32:
                case ScalarType.FIXED32:
                case ScalarType.SFIXED32:
                case ScalarType.SINT32:
                case ScalarType.UINT32:
                    if (json === null)
                        return 0;
                    let int32;
                    if (typeof json == "number")
                        int32 = json;
                    else if (json === "")
                        e = "empty string";
                    else if (typeof json == "string") {
                        if (json.trim().length !== json.length)
                            e = "extra whitespace";
                        else
                            int32 = Number(json);
                    }
                    if (int32 === undefined)
                        break;
                    if (type == ScalarType.UINT32)
                        assertUInt32(int32);
                    else
                        assertInt32(int32);
                    return int32;
                // int64, fixed64, uint64: JSON value will be a decimal string. Either numbers or strings are accepted.
                case ScalarType.INT64:
                case ScalarType.SFIXED64:
                case ScalarType.SINT64:
                    if (json === null)
                        return reflectionLongConvert(PbLong.ZERO, longType);
                    if (typeof json != "number" && typeof json != "string")
                        break;
                    return reflectionLongConvert(PbLong.from(json), longType);
                case ScalarType.FIXED64:
                case ScalarType.UINT64:
                    if (json === null)
                        return reflectionLongConvert(PbULong.ZERO, longType);
                    if (typeof json != "number" && typeof json != "string")
                        break;
                    return reflectionLongConvert(PbULong.from(json), longType);
                // bool:
                case ScalarType.BOOL:
                    if (json === null)
                        return false;
                    if (typeof json !== "boolean")
                        break;
                    return json;
                // string:
                case ScalarType.STRING:
                    if (json === null)
                        return "";
                    if (typeof json !== "string") {
                        e = "extra whitespace";
                        break;
                    }
                    try {
                        encodeURIComponent(json);
                    }
                    catch (e) {
                        e = "invalid UTF8";
                        break;
                    }
                    return json;
                // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
                // Either standard or URL-safe base64 encoding with/without paddings are accepted.
                case ScalarType.BYTES:
                    if (json === null || json === "")
                        return new Uint8Array(0);
                    if (typeof json !== 'string')
                        break;
                    return base64decode(json);
            }
        }
        catch (error) {
            e = error.message;
        }
        this.assert(false, fieldName + (e ? " - " + e : ""), json);
    }
}

/**
 * Writes proto3 messages in canonical JSON format using reflection
 * information.
 *
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 */
class ReflectionJsonWriter {
    constructor(info) {
        var _a;
        this.fields = (_a = info.fields) !== null && _a !== void 0 ? _a : [];
    }
    /**
     * Converts the message to a JSON object, based on the field descriptors.
     */
    write(message, options) {
        const json = {}, source = message;
        for (const field of this.fields) {
            // field is not part of a oneof, simply write as is
            if (!field.oneof) {
                let jsonValue = this.field(field, source[field.localName], options);
                if (jsonValue !== undefined)
                    json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
                continue;
            }
            // field is part of a oneof
            const group = source[field.oneof];
            if (group.oneofKind !== field.localName)
                continue; // not selected, skip
            const opt = field.kind == 'scalar' || field.kind == 'enum'
                ? Object.assign(Object.assign({}, options), { emitDefaultValues: true }) : options;
            let jsonValue = this.field(field, group[field.localName], opt);
            assert(jsonValue !== undefined);
            json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
        }
        return json;
    }
    field(field, value, options) {
        let jsonValue = undefined;
        if (field.kind == 'map') {
            assert(typeof value == "object" && value !== null);
            const jsonObj = {};
            switch (field.V.kind) {
                case "scalar":
                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        const val = this.scalar(field.V.T, entryValue, field.name, false, true);
                        assert(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
                case "message":
                    const messageType = field.V.T();
                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        const val = this.message(messageType, entryValue, field.name, options);
                        assert(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
                case "enum":
                    const enumInfo = field.V.T();
                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        assert(entryValue === undefined || typeof entryValue == 'number');
                        const val = this.enum(enumInfo, entryValue, field.name, false, true, options.enumAsInteger);
                        assert(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
            }
            if (options.emitDefaultValues || Object.keys(jsonObj).length > 0)
                jsonValue = jsonObj;
        }
        else if (field.repeat) {
            assert(Array.isArray(value));
            const jsonArr = [];
            switch (field.kind) {
                case "scalar":
                    for (let i = 0; i < value.length; i++) {
                        const val = this.scalar(field.T, value[i], field.name, field.opt, true);
                        assert(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
                case "enum":
                    const enumInfo = field.T();
                    for (let i = 0; i < value.length; i++) {
                        assert(value[i] === undefined || typeof value[i] == 'number');
                        const val = this.enum(enumInfo, value[i], field.name, field.opt, true, options.enumAsInteger);
                        assert(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
                case "message":
                    const messageType = field.T();
                    for (let i = 0; i < value.length; i++) {
                        const val = this.message(messageType, value[i], field.name, options);
                        assert(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
            }
            // add converted array to json output
            if (options.emitDefaultValues || jsonArr.length > 0 || options.emitDefaultValues)
                jsonValue = jsonArr;
        }
        else {
            switch (field.kind) {
                case "scalar":
                    jsonValue = this.scalar(field.T, value, field.name, field.opt, options.emitDefaultValues);
                    break;
                case "enum":
                    jsonValue = this.enum(field.T(), value, field.name, field.opt, options.emitDefaultValues, options.enumAsInteger);
                    break;
                case "message":
                    jsonValue = this.message(field.T(), value, field.name, options);
                    break;
            }
        }
        return jsonValue;
    }
    /**
     * Returns `null` as the default for google.protobuf.NullValue.
     */
    enum(type, value, fieldName, optional, emitDefaultValues, enumAsInteger) {
        if (type[0] == 'google.protobuf.NullValue')
            return !emitDefaultValues && !optional ? undefined : null;
        if (value === undefined) {
            assert(optional);
            return undefined;
        }
        if (value === 0 && !emitDefaultValues && !optional)
            // we require 0 to be default value for all enums
            return undefined;
        assert(typeof value == 'number');
        assert(Number.isInteger(value));
        if (enumAsInteger || !type[1].hasOwnProperty(value))
            // if we don't now the enum value, just return the number
            return value;
        if (type[2])
            // restore the dropped prefix
            return type[2] + type[1][value];
        return type[1][value];
    }
    message(type, value, fieldName, options) {
        if (value === undefined)
            return options.emitDefaultValues ? null : undefined;
        return type.internalJsonWrite(value, options);
    }
    scalar(type, value, fieldName, optional, emitDefaultValues) {
        if (value === undefined) {
            assert(optional);
            return undefined;
        }
        const ed = emitDefaultValues || optional;
        // noinspection FallThroughInSwitchStatementJS
        switch (type) {
            // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
            case ScalarType.INT32:
            case ScalarType.SFIXED32:
            case ScalarType.SINT32:
                if (value === 0)
                    return ed ? 0 : undefined;
                assertInt32(value);
                return value;
            case ScalarType.FIXED32:
            case ScalarType.UINT32:
                if (value === 0)
                    return ed ? 0 : undefined;
                assertUInt32(value);
                return value;
            // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
            // Either numbers or strings are accepted. Exponent notation is also accepted.
            case ScalarType.FLOAT:
                assertFloat32(value);
            case ScalarType.DOUBLE:
                if (value === 0)
                    return ed ? 0 : undefined;
                assert(typeof value == 'number');
                if (Number.isNaN(value))
                    return 'NaN';
                if (value === Number.POSITIVE_INFINITY)
                    return 'Infinity';
                if (value === Number.NEGATIVE_INFINITY)
                    return '-Infinity';
                return value;
            // string:
            case ScalarType.STRING:
                if (value === "")
                    return ed ? '' : undefined;
                assert(typeof value == 'string');
                return value;
            // bool:
            case ScalarType.BOOL:
                if (value === false)
                    return ed ? false : undefined;
                assert(typeof value == 'boolean');
                return value;
            // JSON value will be a decimal string. Either numbers or strings are accepted.
            case ScalarType.UINT64:
            case ScalarType.FIXED64:
                assert(typeof value == 'number' || typeof value == 'string' || typeof value == 'bigint');
                let ulong = PbULong.from(value);
                if (ulong.isZero() && !ed)
                    return undefined;
                return ulong.toString();
            // JSON value will be a decimal string. Either numbers or strings are accepted.
            case ScalarType.INT64:
            case ScalarType.SFIXED64:
            case ScalarType.SINT64:
                assert(typeof value == 'number' || typeof value == 'string' || typeof value == 'bigint');
                let long = PbLong.from(value);
                if (long.isZero() && !ed)
                    return undefined;
                return long.toString();
            // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
            // Either standard or URL-safe base64 encoding with/without paddings are accepted.
            case ScalarType.BYTES:
                assert(value instanceof Uint8Array);
                if (!value.byteLength)
                    return ed ? "" : undefined;
                return base64encode(value);
        }
    }
}

/**
 * Creates the default value for a scalar type.
 */
function reflectionScalarDefault(type, longType = LongType.STRING) {
    switch (type) {
        case ScalarType.BOOL:
            return false;
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
            return reflectionLongConvert(PbULong.ZERO, longType);
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
            return reflectionLongConvert(PbLong.ZERO, longType);
        case ScalarType.DOUBLE:
        case ScalarType.FLOAT:
            return 0.0;
        case ScalarType.BYTES:
            return new Uint8Array(0);
        case ScalarType.STRING:
            return "";
        default:
            // case ScalarType.INT32:
            // case ScalarType.UINT32:
            // case ScalarType.SINT32:
            // case ScalarType.FIXED32:
            // case ScalarType.SFIXED32:
            return 0;
    }
}

/**
 * Reads proto3 messages in binary format using reflection information.
 *
 * https://developers.google.com/protocol-buffers/docs/encoding
 */
class ReflectionBinaryReader {
    constructor(info) {
        this.info = info;
    }
    prepare() {
        var _a;
        if (!this.fieldNoToField) {
            const fieldsInput = (_a = this.info.fields) !== null && _a !== void 0 ? _a : [];
            this.fieldNoToField = new Map(fieldsInput.map(field => [field.no, field]));
        }
    }
    /**
     * Reads a message from binary format into the target message.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */
    read(reader, message, options, length) {
        this.prepare();
        const end = length === undefined ? reader.len : reader.pos + length;
        while (reader.pos < end) {
            // read the tag and find the field
            const [fieldNo, wireType] = reader.tag(), field = this.fieldNoToField.get(fieldNo);
            if (!field) {
                let u = options.readUnknownField;
                if (u == "throw")
                    throw new Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.info.typeName}`);
                let d = reader.skip(wireType);
                if (u !== false)
                    (u === true ? UnknownFieldHandler.onRead : u)(this.info.typeName, message, fieldNo, wireType, d);
                continue;
            }
            // target object for the field we are reading
            let target = message, repeated = field.repeat, localName = field.localName;
            // if field is member of oneof ADT, use ADT as target
            if (field.oneof) {
                target = target[field.oneof];
                // if other oneof member selected, set new ADT
                if (target.oneofKind !== localName)
                    target = message[field.oneof] = {
                        oneofKind: localName
                    };
            }
            // we have handled oneof above, we just have read the value into `target[localName]`
            switch (field.kind) {
                case "scalar":
                case "enum":
                    let T = field.kind == "enum" ? ScalarType.INT32 : field.T;
                    let L = field.kind == "scalar" ? field.L : undefined;
                    if (repeated) {
                        let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                        if (wireType == WireType.LengthDelimited && T != ScalarType.STRING && T != ScalarType.BYTES) {
                            let e = reader.uint32() + reader.pos;
                            while (reader.pos < e)
                                arr.push(this.scalar(reader, T, L));
                        }
                        else
                            arr.push(this.scalar(reader, T, L));
                    }
                    else
                        target[localName] = this.scalar(reader, T, L);
                    break;
                case "message":
                    if (repeated) {
                        let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                        let msg = field.T().internalBinaryRead(reader, reader.uint32(), options);
                        arr.push(msg);
                    }
                    else
                        target[localName] = field.T().internalBinaryRead(reader, reader.uint32(), options, target[localName]);
                    break;
                case "map":
                    let [mapKey, mapVal] = this.mapEntry(field, reader, options);
                    // safe to assume presence of map object, oneof cannot contain repeated values
                    target[localName][mapKey] = mapVal;
                    break;
            }
        }
    }
    /**
     * Read a map field, expecting key field = 1, value field = 2
     */
    mapEntry(field, reader, options) {
        let length = reader.uint32();
        let end = reader.pos + length;
        let key = undefined; // javascript only allows number or string for object properties
        let val = undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    if (field.K == ScalarType.BOOL)
                        key = reader.bool().toString();
                    else
                        // long types are read as string, number types are okay as number
                        key = this.scalar(reader, field.K, LongType.STRING);
                    break;
                case 2:
                    switch (field.V.kind) {
                        case "scalar":
                            val = this.scalar(reader, field.V.T, field.V.L);
                            break;
                        case "enum":
                            val = reader.int32();
                            break;
                        case "message":
                            val = field.V.T().internalBinaryRead(reader, reader.uint32(), options);
                            break;
                    }
                    break;
                default:
                    throw new Error(`Unknown field ${fieldNo} (wire type ${wireType}) in map entry for ${this.info.typeName}#${field.name}`);
            }
        }
        if (key === undefined) {
            let keyRaw = reflectionScalarDefault(field.K);
            key = field.K == ScalarType.BOOL ? keyRaw.toString() : keyRaw;
        }
        if (val === undefined)
            switch (field.V.kind) {
                case "scalar":
                    val = reflectionScalarDefault(field.V.T, field.V.L);
                    break;
                case "enum":
                    val = 0;
                    break;
                case "message":
                    val = field.V.T().create();
                    break;
            }
        return [key, val];
    }
    scalar(reader, type, longType) {
        switch (type) {
            case ScalarType.INT32:
                return reader.int32();
            case ScalarType.STRING:
                return reader.string();
            case ScalarType.BOOL:
                return reader.bool();
            case ScalarType.DOUBLE:
                return reader.double();
            case ScalarType.FLOAT:
                return reader.float();
            case ScalarType.INT64:
                return reflectionLongConvert(reader.int64(), longType);
            case ScalarType.UINT64:
                return reflectionLongConvert(reader.uint64(), longType);
            case ScalarType.FIXED64:
                return reflectionLongConvert(reader.fixed64(), longType);
            case ScalarType.FIXED32:
                return reader.fixed32();
            case ScalarType.BYTES:
                return reader.bytes();
            case ScalarType.UINT32:
                return reader.uint32();
            case ScalarType.SFIXED32:
                return reader.sfixed32();
            case ScalarType.SFIXED64:
                return reflectionLongConvert(reader.sfixed64(), longType);
            case ScalarType.SINT32:
                return reader.sint32();
            case ScalarType.SINT64:
                return reflectionLongConvert(reader.sint64(), longType);
        }
    }
}

/**
 * Writes proto3 messages in binary format using reflection information.
 *
 * https://developers.google.com/protocol-buffers/docs/encoding
 */
class ReflectionBinaryWriter {
    constructor(info) {
        this.info = info;
    }
    prepare() {
        if (!this.fields) {
            const fieldsInput = this.info.fields ? this.info.fields.concat() : [];
            this.fields = fieldsInput.sort((a, b) => a.no - b.no);
        }
    }
    /**
     * Writes the message to binary format.
     */
    write(message, writer, options) {
        this.prepare();
        for (const field of this.fields) {
            let value, // this will be our field value, whether it is member of a oneof or not
            emitDefault, // whether we emit the default value (only true for oneof members)
            repeated = field.repeat, localName = field.localName;
            // handle oneof ADT
            if (field.oneof) {
                const group = message[field.oneof];
                if (group.oneofKind !== localName)
                    continue; // if field is not selected, skip
                value = group[localName];
                emitDefault = true;
            }
            else {
                value = message[localName];
                emitDefault = false;
            }
            // we have handled oneof above. we just have to honor `emitDefault`.
            switch (field.kind) {
                case "scalar":
                case "enum":
                    let T = field.kind == "enum" ? ScalarType.INT32 : field.T;
                    if (repeated) {
                        assert(Array.isArray(value));
                        if (repeated == RepeatType.PACKED)
                            this.packed(writer, T, field.no, value);
                        else
                            for (const item of value)
                                this.scalar(writer, T, field.no, item, true);
                    }
                    else if (value === undefined)
                        assert(field.opt);
                    else
                        this.scalar(writer, T, field.no, value, emitDefault || field.opt);
                    break;
                case "message":
                    if (repeated) {
                        assert(Array.isArray(value));
                        for (const item of value)
                            this.message(writer, options, field.T(), field.no, item);
                    }
                    else {
                        this.message(writer, options, field.T(), field.no, value);
                    }
                    break;
                case "map":
                    assert(typeof value == 'object' && value !== null);
                    for (const [key, val] of Object.entries(value))
                        this.mapEntry(writer, options, field, key, val);
                    break;
            }
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u === true ? UnknownFieldHandler.onWrite : u)(this.info.typeName, message, writer);
    }
    mapEntry(writer, options, field, key, value) {
        writer.tag(field.no, WireType.LengthDelimited);
        writer.fork();
        // javascript only allows number or string for object properties
        // we convert from our representation to the protobuf type
        let keyValue = key;
        switch (field.K) {
            case ScalarType.INT32:
            case ScalarType.FIXED32:
            case ScalarType.UINT32:
            case ScalarType.SFIXED32:
            case ScalarType.SINT32:
                keyValue = Number.parseInt(key);
                break;
            case ScalarType.BOOL:
                assert(key == 'true' || key == 'false');
                keyValue = key == 'true';
                break;
        }
        // write key, expecting key field number = 1
        this.scalar(writer, field.K, 1, keyValue, true);
        // write value, expecting value field number = 2
        switch (field.V.kind) {
            case 'scalar':
                this.scalar(writer, field.V.T, 2, value, true);
                break;
            case 'enum':
                this.scalar(writer, ScalarType.INT32, 2, value, true);
                break;
            case 'message':
                this.message(writer, options, field.V.T(), 2, value);
                break;
        }
        writer.join();
    }
    message(writer, options, handler, fieldNo, value) {
        if (value === undefined)
            return;
        handler.internalBinaryWrite(value, writer.tag(fieldNo, WireType.LengthDelimited).fork(), options);
        writer.join();
    }
    /**
     * Write a single scalar value.
     */
    scalar(writer, type, fieldNo, value, emitDefault) {
        let [wireType, method, isDefault] = this.scalarInfo(type, value);
        if (!isDefault || emitDefault) {
            writer.tag(fieldNo, wireType);
            writer[method](value);
        }
    }
    /**
     * Write an array of scalar values in packed format.
     */
    packed(writer, type, fieldNo, value) {
        if (!value.length)
            return;
        assert(type !== ScalarType.BYTES && type !== ScalarType.STRING);
        // write tag
        writer.tag(fieldNo, WireType.LengthDelimited);
        // begin length-delimited
        writer.fork();
        // write values without tags
        let [, method,] = this.scalarInfo(type);
        for (let i = 0; i < value.length; i++)
            writer[method](value[i]);
        // end length delimited
        writer.join();
    }
    /**
     * Get information for writing a scalar value.
     *
     * Returns tuple:
     * [0]: appropriate WireType
     * [1]: name of the appropriate method of IBinaryWriter
     * [2]: whether the given value is a default value
     *
     * If argument `value` is omitted, [2] is always false.
     */
    scalarInfo(type, value) {
        let t = WireType.Varint;
        let m;
        let i = value === undefined;
        let d = value === 0;
        switch (type) {
            case ScalarType.INT32:
                m = "int32";
                break;
            case ScalarType.STRING:
                d = i || !value.length;
                t = WireType.LengthDelimited;
                m = "string";
                break;
            case ScalarType.BOOL:
                d = value === false;
                m = "bool";
                break;
            case ScalarType.UINT32:
                m = "uint32";
                break;
            case ScalarType.DOUBLE:
                t = WireType.Bit64;
                m = "double";
                break;
            case ScalarType.FLOAT:
                t = WireType.Bit32;
                m = "float";
                break;
            case ScalarType.INT64:
                d = i || PbLong.from(value).isZero();
                m = "int64";
                break;
            case ScalarType.UINT64:
                d = i || PbULong.from(value).isZero();
                m = "uint64";
                break;
            case ScalarType.FIXED64:
                d = i || PbULong.from(value).isZero();
                t = WireType.Bit64;
                m = "fixed64";
                break;
            case ScalarType.BYTES:
                d = i || !value.byteLength;
                t = WireType.LengthDelimited;
                m = "bytes";
                break;
            case ScalarType.FIXED32:
                t = WireType.Bit32;
                m = "fixed32";
                break;
            case ScalarType.SFIXED32:
                t = WireType.Bit32;
                m = "sfixed32";
                break;
            case ScalarType.SFIXED64:
                d = i || PbLong.from(value).isZero();
                t = WireType.Bit64;
                m = "sfixed64";
                break;
            case ScalarType.SINT32:
                m = "sint32";
                break;
            case ScalarType.SINT64:
                d = i || PbLong.from(value).isZero();
                m = "sint64";
                break;
        }
        return [t, m, i || d];
    }
}

/**
 * Creates an instance of the generic message, using the field
 * information.
 */
function reflectionCreate(type) {
    /**
     * This ternary can be removed in the next major version.
     * The `Object.create()` code path utilizes a new `messagePrototype`
     * property on the `IMessageType` which has this same `MESSAGE_TYPE`
     * non-enumerable property on it. Doing it this way means that we only
     * pay the cost of `Object.defineProperty()` once per `IMessageType`
     * class of once per "instance". The falsy code path is only provided
     * for backwards compatibility in cases where the runtime library is
     * updated without also updating the generated code.
     */
    const msg = type.messagePrototype
        ? Object.create(type.messagePrototype)
        : Object.defineProperty({}, MESSAGE_TYPE, { value: type });
    for (let field of type.fields) {
        let name = field.localName;
        if (field.opt)
            continue;
        if (field.oneof)
            msg[field.oneof] = { oneofKind: undefined };
        else if (field.repeat)
            msg[name] = [];
        else
            switch (field.kind) {
                case "scalar":
                    msg[name] = reflectionScalarDefault(field.T, field.L);
                    break;
                case "enum":
                    // we require 0 to be default value for all enums
                    msg[name] = 0;
                    break;
                case "map":
                    msg[name] = {};
                    break;
            }
    }
    return msg;
}

/**
 * Copy partial data into the target message.
 *
 * If a singular scalar or enum field is present in the source, it
 * replaces the field in the target.
 *
 * If a singular message field is present in the source, it is merged
 * with the target field by calling mergePartial() of the responsible
 * message type.
 *
 * If a repeated field is present in the source, its values replace
 * all values in the target array, removing extraneous values.
 * Repeated message fields are copied, not merged.
 *
 * If a map field is present in the source, entries are added to the
 * target map, replacing entries with the same key. Entries that only
 * exist in the target remain. Entries with message values are copied,
 * not merged.
 *
 * Note that this function differs from protobuf merge semantics,
 * which appends repeated fields.
 */
function reflectionMergePartial(info, target, source) {
    let fieldValue, // the field value we are working with
    input = source, output; // where we want our field value to go
    for (let field of info.fields) {
        let name = field.localName;
        if (field.oneof) {
            const group = input[field.oneof]; // this is the oneof`s group in the source
            if ((group === null || group === void 0 ? void 0 : group.oneofKind) == undefined) { // the user is free to omit
                continue; // we skip this field, and all other members too
            }
            fieldValue = group[name]; // our value comes from the the oneof group of the source
            output = target[field.oneof]; // and our output is the oneof group of the target
            output.oneofKind = group.oneofKind; // always update discriminator
            if (fieldValue == undefined) {
                delete output[name]; // remove any existing value
                continue; // skip further work on field
            }
        }
        else {
            fieldValue = input[name]; // we are using the source directly
            output = target; // we want our field value to go directly into the target
            if (fieldValue == undefined) {
                continue; // skip further work on field, existing value is used as is
            }
        }
        if (field.repeat)
            output[name].length = fieldValue.length; // resize target array to match source array
        // now we just work with `fieldValue` and `output` to merge the value
        switch (field.kind) {
            case "scalar":
            case "enum":
                if (field.repeat)
                    for (let i = 0; i < fieldValue.length; i++)
                        output[name][i] = fieldValue[i]; // not a reference type
                else
                    output[name] = fieldValue; // not a reference type
                break;
            case "message":
                let T = field.T();
                if (field.repeat)
                    for (let i = 0; i < fieldValue.length; i++)
                        output[name][i] = T.create(fieldValue[i]);
                else if (output[name] === undefined)
                    output[name] = T.create(fieldValue); // nothing to merge with
                else
                    T.mergePartial(output[name], fieldValue);
                break;
            case "map":
                // Map and repeated fields are simply overwritten, not appended or merged
                switch (field.V.kind) {
                    case "scalar":
                    case "enum":
                        Object.assign(output[name], fieldValue); // elements are not reference types
                        break;
                    case "message":
                        let T = field.V.T();
                        for (let k of Object.keys(fieldValue))
                            output[name][k] = T.create(fieldValue[k]);
                        break;
                }
                break;
        }
    }
}

/**
 * Determines whether two message of the same type have the same field values.
 * Checks for deep equality, traversing repeated fields, oneof groups, maps
 * and messages recursively.
 * Will also return true if both messages are `undefined`.
 */
function reflectionEquals(info, a, b) {
    if (a === b)
        return true;
    if (!a || !b)
        return false;
    for (let field of info.fields) {
        let localName = field.localName;
        let val_a = field.oneof ? a[field.oneof][localName] : a[localName];
        let val_b = field.oneof ? b[field.oneof][localName] : b[localName];
        switch (field.kind) {
            case "enum":
            case "scalar":
                let t = field.kind == "enum" ? ScalarType.INT32 : field.T;
                if (!(field.repeat
                    ? repeatedPrimitiveEq(t, val_a, val_b)
                    : primitiveEq(t, val_a, val_b)))
                    return false;
                break;
            case "map":
                if (!(field.V.kind == "message"
                    ? repeatedMsgEq(field.V.T(), objectValues(val_a), objectValues(val_b))
                    : repeatedPrimitiveEq(field.V.kind == "enum" ? ScalarType.INT32 : field.V.T, objectValues(val_a), objectValues(val_b))))
                    return false;
                break;
            case "message":
                let T = field.T();
                if (!(field.repeat
                    ? repeatedMsgEq(T, val_a, val_b)
                    : T.equals(val_a, val_b)))
                    return false;
                break;
        }
    }
    return true;
}
const objectValues = Object.values;
function primitiveEq(type, a, b) {
    if (a === b)
        return true;
    if (type !== ScalarType.BYTES)
        return false;
    let ba = a;
    let bb = b;
    if (ba.length !== bb.length)
        return false;
    for (let i = 0; i < ba.length; i++)
        if (ba[i] != bb[i])
            return false;
    return true;
}
function repeatedPrimitiveEq(type, a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!primitiveEq(type, a[i], b[i]))
            return false;
    return true;
}
function repeatedMsgEq(type, a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!type.equals(a[i], b[i]))
            return false;
    return true;
}

const baseDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({}));
/**
 * This standard message type provides reflection-based
 * operations to work with a message.
 */
class MessageType {
    constructor(name, fields, options) {
        this.defaultCheckDepth = 16;
        this.typeName = name;
        this.fields = fields.map(normalizeFieldInfo);
        this.options = options !== null && options !== void 0 ? options : {};
        this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, baseDescriptors), { [MESSAGE_TYPE]: { value: this } }));
        this.refTypeCheck = new ReflectionTypeCheck(this);
        this.refJsonReader = new ReflectionJsonReader(this);
        this.refJsonWriter = new ReflectionJsonWriter(this);
        this.refBinReader = new ReflectionBinaryReader(this);
        this.refBinWriter = new ReflectionBinaryWriter(this);
    }
    create(value) {
        let message = reflectionCreate(this);
        if (value !== undefined) {
            reflectionMergePartial(this, message, value);
        }
        return message;
    }
    /**
     * Clone the message.
     *
     * Unknown fields are discarded.
     */
    clone(message) {
        let copy = this.create();
        reflectionMergePartial(this, copy, message);
        return copy;
    }
    /**
     * Determines whether two message of the same type have the same field values.
     * Checks for deep equality, traversing repeated fields, oneof groups, maps
     * and messages recursively.
     * Will also return true if both messages are `undefined`.
     */
    equals(a, b) {
        return reflectionEquals(this, a, b);
    }
    /**
     * Is the given value assignable to our message type
     * and contains no [excess properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)?
     */
    is(arg, depth = this.defaultCheckDepth) {
        return this.refTypeCheck.is(arg, depth, false);
    }
    /**
     * Is the given value assignable to our message type,
     * regardless of [excess properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)?
     */
    isAssignable(arg, depth = this.defaultCheckDepth) {
        return this.refTypeCheck.is(arg, depth, true);
    }
    /**
     * Copy partial data into the target message.
     */
    mergePartial(target, source) {
        reflectionMergePartial(this, target, source);
    }
    /**
     * Create a new message from binary format.
     */
    fromBinary(data, options) {
        let opt = binaryReadOptions(options);
        return this.internalBinaryRead(opt.readerFactory(data), data.byteLength, opt);
    }
    /**
     * Read a new message from a JSON value.
     */
    fromJson(json, options) {
        return this.internalJsonRead(json, jsonReadOptions(options));
    }
    /**
     * Read a new message from a JSON string.
     * This is equivalent to `T.fromJson(JSON.parse(json))`.
     */
    fromJsonString(json, options) {
        let value = JSON.parse(json);
        return this.fromJson(value, options);
    }
    /**
     * Write the message to canonical JSON value.
     */
    toJson(message, options) {
        return this.internalJsonWrite(message, jsonWriteOptions(options));
    }
    /**
     * Convert the message to canonical JSON string.
     * This is equivalent to `JSON.stringify(T.toJson(t))`
     */
    toJsonString(message, options) {
        var _a;
        let value = this.toJson(message, options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Write the message to binary format.
     */
    toBinary(message, options) {
        let opt = binaryWriteOptions(options);
        return this.internalBinaryWrite(message, opt.writerFactory(), opt).finish();
    }
    /**
     * This is an internal method. If you just want to read a message from
     * JSON, use `fromJson()` or `fromJsonString()`.
     *
     * Reads JSON value and merges the fields into the target
     * according to protobuf rules. If the target is omitted,
     * a new instance is created first.
     */
    internalJsonRead(json, options, target) {
        if (json !== null && typeof json == "object" && !Array.isArray(json)) {
            let message = target !== null && target !== void 0 ? target : this.create();
            this.refJsonReader.read(json, message, options);
            return message;
        }
        throw new Error(`Unable to parse message ${this.typeName} from JSON ${typeofJsonValue(json)}.`);
    }
    /**
     * This is an internal method. If you just want to write a message
     * to JSON, use `toJson()` or `toJsonString().
     *
     * Writes JSON value and returns it.
     */
    internalJsonWrite(message, options) {
        return this.refJsonWriter.write(message, options);
    }
    /**
     * This is an internal method. If you just want to write a message
     * in binary format, use `toBinary()`.
     *
     * Serializes the message in binary format and appends it to the given
     * writer. Returns passed writer.
     */
    internalBinaryWrite(message, writer, options) {
        this.refBinWriter.write(message, writer, options);
        return writer;
    }
    /**
     * This is an internal method. If you just want to read a message from
     * binary data, use `fromBinary()`.
     *
     * Reads data from binary format and merges the fields into
     * the target according to protobuf rules. If the target is
     * omitted, a new instance is created first.
     */
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create();
        this.refBinReader.read(reader, message, options, length);
        return message;
    }
}

function _0x4c67(_0x142e01,_0x2902a9){const _0x304c73=_0x304c();return _0x4c67=function(_0x4c6786,_0x22f31f){_0x4c6786=_0x4c6786-0x1ca;let _0x3a8ba6=_0x304c73[_0x4c6786];return _0x3a8ba6;},_0x4c67(_0x142e01,_0x2902a9);}const _0xcd859e=_0x4c67;function _0x304c(){const _0x79292=['scalar','optional','keys','cache','297534bNMLdQ','getInstance','function','encode','message','PACKED','realMsg','1408266gLTlRv','1470195oyFayg','UNPACKED','_proto_msg','create','set','204BFhUFJ','4GdSRnP','STRING','_field','BYTES','210308ZkdBKv','1153104GeloZH','4300767vlTwVY','3638BrkHoD','includes','decode','repeat','type','toBinary','kind','map'];_0x304c=function(){return _0x79292;};return _0x304c();}(function(_0x16c5f3,_0xd84c13){const _0x1e3e04=_0x4c67,_0xc0d7e4=_0x16c5f3();while(!![]){try{const _0x70ac2a=-parseInt(_0x1e3e04(0x1dd))/0x1*(-parseInt(_0x1e3e04(0x1e5))/0x2)+parseInt(_0x1e3e04(0x1d0))/0x3+parseInt(_0x1e3e04(0x1de))/0x4*(-parseInt(_0x1e3e04(0x1d8))/0x5)+-parseInt(_0x1e3e04(0x1d7))/0x6+-parseInt(_0x1e3e04(0x1e2))/0x7+-parseInt(_0x1e3e04(0x1e3))/0x8+parseInt(_0x1e3e04(0x1e4))/0x9;if(_0x70ac2a===_0xd84c13)break;else _0xc0d7e4['push'](_0xc0d7e4['shift']());}catch(_0x1f47ef){_0xc0d7e4['push'](_0xc0d7e4['shift']());}}}(_0x304c,0x3bdc1));function ProtoField(_0x342175,_0x3032f6,_0x46f127,_0x33ce74){const _0x2e1b22=_0x4c67;return typeof _0x3032f6===_0x2e1b22(0x1d2)?{'kind':_0x2e1b22(0x1d4),'no':_0x342175,'type':_0x3032f6,'optional':_0x46f127??![],'repeat':![]}:{'kind':_0x2e1b22(0x1cc),'no':_0x342175,'type':_0x3032f6,'optional':_0x46f127??![],'repeat':![]};}class NapProtoRealMsg{[_0xcd859e(0x1e0)];[_0xcd859e(0x1da)];static ['cache']=new WeakMap();constructor(_0x2ce9c4){const _0x21e9d7=_0xcd859e;this[_0x21e9d7(0x1e0)]=Object[_0x21e9d7(0x1ce)](_0x2ce9c4)[_0x21e9d7(0x1cb)](_0x399959=>{const _0x84068a=_0x21e9d7,_0x311929=_0x2ce9c4[_0x399959];if(_0x311929[_0x84068a(0x1ca)]==='scalar'){const _0x4c0aea=_0x311929[_0x84068a(0x1e8)]?[ScalarType[_0x84068a(0x1df)],ScalarType[_0x84068a(0x1e1)]][_0x84068a(0x1e6)](_0x311929['type'])?RepeatType[_0x84068a(0x1d9)]:RepeatType[_0x84068a(0x1d5)]:RepeatType['NO'];return {'no':_0x311929['no'],'name':_0x399959,'kind':_0x84068a(0x1cc),'T':_0x311929[_0x84068a(0x1e9)],'opt':_0x311929[_0x84068a(0x1cd)],'repeat':_0x4c0aea};}else {if(_0x311929['kind']===_0x84068a(0x1d4))return {'no':_0x311929['no'],'name':_0x399959,'kind':_0x84068a(0x1d4),'repeat':_0x311929[_0x84068a(0x1e8)]?RepeatType['PACKED']:RepeatType['NO'],'T':()=>NapProtoRealMsg[_0x84068a(0x1d1)](_0x311929[_0x84068a(0x1e9)]())[_0x84068a(0x1da)]};}}),this['_proto_msg']=new MessageType('nya',this['_field']);}static['getInstance'](_0x324327){const _0x5a1c3c=_0xcd859e;let _0x1b6d9e=this[_0x5a1c3c(0x1cf)]['get'](_0x324327);return !_0x1b6d9e&&(_0x1b6d9e=new NapProtoRealMsg(_0x324327),this[_0x5a1c3c(0x1cf)][_0x5a1c3c(0x1dc)](_0x324327,_0x1b6d9e)),_0x1b6d9e;}[_0xcd859e(0x1d3)](_0x2d340c){const _0x5254dc=_0xcd859e;return this[_0x5254dc(0x1da)][_0x5254dc(0x1ea)](this[_0x5254dc(0x1da)][_0x5254dc(0x1db)](_0x2d340c));}[_0xcd859e(0x1e7)](_0x54263b){const _0x18ab40=_0xcd859e;return this[_0x18ab40(0x1da)]['fromBinary'](_0x54263b);}}class NapProtoMsg{[_0xcd859e(0x1d6)];constructor(_0x53a77c){const _0x15c1e6=_0xcd859e;this[_0x15c1e6(0x1d6)]=NapProtoRealMsg[_0x15c1e6(0x1d1)](_0x53a77c);}['encode'](_0x139854){const _0x3c4ae5=_0xcd859e;return this[_0x3c4ae5(0x1d6)][_0x3c4ae5(0x1d3)](_0x139854);}[_0xcd859e(0x1e7)](_0x3f75e6){const _0x18d3d3=_0xcd859e;return this[_0x18d3d3(0x1d6)][_0x18d3d3(0x1e7)](_0x3f75e6);}}

const _0x115107=_0x15ec;(function(_0x3baa4e,_0x17ca18){const _0x380189=_0x15ec,_0x2a5e8f=_0x3baa4e();while(!![]){try{const _0x2dd41b=parseInt(_0x380189(0x13a))/0x1+parseInt(_0x380189(0x135))/0x2*(-parseInt(_0x380189(0x134))/0x3)+parseInt(_0x380189(0x138))/0x4+parseInt(_0x380189(0x13b))/0x5+-parseInt(_0x380189(0x131))/0x6+-parseInt(_0x380189(0x136))/0x7+parseInt(_0x380189(0x137))/0x8;if(_0x2dd41b===_0x17ca18)break;else _0x2a5e8f['push'](_0x2a5e8f['shift']());}catch(_0x181391){_0x2a5e8f['push'](_0x2a5e8f['shift']());}}}(_0x53f5,0x386a4));function _0x53f5(){const _0x48f794=['260786FmVfsD','583205KEyPcE','1427124nKRfVo','STRING','BYTES','299955soyItU','2zIllDk','2161530USLKik','3869880OhAgpF','66172KBJxej','UINT32'];_0x53f5=function(){return _0x48f794;};return _0x53f5();}function _0x15ec(_0x2e3ff0,_0xbc73ae){const _0x53f578=_0x53f5();return _0x15ec=function(_0x15ec58,_0x5e5696){_0x15ec58=_0x15ec58-0x131;let _0x2d4209=_0x53f578[_0x15ec58];return _0x2d4209;},_0x15ec(_0x2e3ff0,_0xbc73ae);}const OidbSvcTrpcTcpBase={'command':ProtoField(0x1,ScalarType[_0x115107(0x139)]),'subCommand':ProtoField(0x2,ScalarType[_0x115107(0x139)]),'body':ProtoField(0x4,ScalarType['BYTES']),'errorMsg':ProtoField(0x5,ScalarType[_0x115107(0x132)],!![]),'isReserved':ProtoField(0xc,ScalarType[_0x115107(0x139)])};({'body':ProtoField(0x4,ScalarType[_0x115107(0x133)])});

const _0x38c957=_0x45dd;(function(_0x598caf,_0x4842d2){const _0xa55bd8=_0x45dd,_0x3425df=_0x598caf();while(!![]){try{const _0x21ea51=parseInt(_0xa55bd8(0x189))/0x1*(parseInt(_0xa55bd8(0x192))/0x2)+-parseInt(_0xa55bd8(0x18b))/0x3+-parseInt(_0xa55bd8(0x187))/0x4*(parseInt(_0xa55bd8(0x18d))/0x5)+-parseInt(_0xa55bd8(0x18a))/0x6+-parseInt(_0xa55bd8(0x191))/0x7+-parseInt(_0xa55bd8(0x188))/0x8*(-parseInt(_0xa55bd8(0x18f))/0x9)+parseInt(_0xa55bd8(0x190))/0xa*(parseInt(_0xa55bd8(0x18c))/0xb);if(_0x21ea51===_0x4842d2)break;else _0x3425df['push'](_0x3425df['shift']());}catch(_0x4e0a6f){_0x3425df['push'](_0x3425df['shift']());}}}(_0x2e0c,0x954aa));function _0x2e0c(){const _0x49d826=['9ROlnBM','18210PPxkUn','118734APbqau','870bqgJCy','2636iYxuIe','7421448EmSJXT','458befNlc','4124448whGUwZ','965643XHphZs','3663aHNjMX','725JeFMoe','UINT32'];_0x2e0c=function(){return _0x49d826;};return _0x2e0c();}function _0x45dd(_0x573978,_0x32d8bd){const _0x2e0c8f=_0x2e0c();return _0x45dd=function(_0x45ddde,_0x5c5126){_0x45ddde=_0x45ddde-0x187;let _0x2d7ed5=_0x2e0c8f[_0x45ddde];return _0x2d7ed5;},_0x45dd(_0x573978,_0x32d8bd);}const OidbSvcTrpcTcp0XED3_1={'uin':ProtoField(0x1,ScalarType['UINT32']),'groupUin':ProtoField(0x2,ScalarType[_0x38c957(0x18e)]),'friendUin':ProtoField(0x5,ScalarType[_0x38c957(0x18e)]),'ext':ProtoField(0x6,ScalarType[_0x38c957(0x18e)],!![])};

const _0x2f1e14=_0x1715;(function(_0x2ae22f,_0x1d561b){const _0x130dc4=_0x1715,_0x28c5a8=_0x2ae22f();while(!![]){try{const _0x18348c=parseInt(_0x130dc4(0x12e))/0x1*(-parseInt(_0x130dc4(0x12f))/0x2)+parseInt(_0x130dc4(0x125))/0x3+-parseInt(_0x130dc4(0x131))/0x4*(parseInt(_0x130dc4(0x130))/0x5)+parseInt(_0x130dc4(0x12b))/0x6+-parseInt(_0x130dc4(0x12d))/0x7+-parseInt(_0x130dc4(0x128))/0x8*(-parseInt(_0x130dc4(0x127))/0x9)+-parseInt(_0x130dc4(0x124))/0xa;if(_0x18348c===_0x1d561b)break;else _0x28c5a8['push'](_0x28c5a8['shift']());}catch(_0x19853c){_0x28c5a8['push'](_0x28c5a8['shift']());}}}(_0x5063,0xa94cd));function _0x5063(){const _0x1d66b1=['7308160jXXygy','3300048gSbZvk','UINT32','3996DfBitI','23752Whyyit','SINT32','STRING','4049628YSAVZI','BYTES','2033955pcmAkZ','11LTALku','1694uZmrhR','26635aTpZPP','1028VABHkF'];_0x5063=function(){return _0x1d66b1;};return _0x5063();}function _0x1715(_0x3a545c,_0x552c56){const _0x5063b1=_0x5063();return _0x1715=function(_0x1715ad,_0x3ed609){_0x1715ad=_0x1715ad-0x124;let _0x464843=_0x5063b1[_0x1715ad];return _0x464843;},_0x1715(_0x3a545c,_0x552c56);}const OidbSvcTrpcTcp0X8FC_2_Body={'targetUid':ProtoField(0x1,ScalarType[_0x2f1e14(0x12a)]),'specialTitle':ProtoField(0x5,ScalarType[_0x2f1e14(0x12a)]),'expiredTime':ProtoField(0x6,ScalarType[_0x2f1e14(0x129)]),'uinName':ProtoField(0x7,ScalarType[_0x2f1e14(0x12a)]),'targetName':ProtoField(0x8,ScalarType[_0x2f1e14(0x12a)])};const OidbSvcTrpcTcp0X8FC_2={'groupUin':ProtoField(0x1,ScalarType[_0x2f1e14(0x126)]),'body':ProtoField(0x3,ScalarType[_0x2f1e14(0x12c)])};

const _0x5342e5=_0x533c;(function(_0x9414dc,_0x2d3b2a){const _0x201211=_0x533c,_0x5bf990=_0x9414dc();while(!![]){try{const _0x5ac308=parseInt(_0x201211(0x178))/0x1*(parseInt(_0x201211(0x174))/0x2)+-parseInt(_0x201211(0x173))/0x3+parseInt(_0x201211(0x176))/0x4+parseInt(_0x201211(0x175))/0x5+parseInt(_0x201211(0x171))/0x6+parseInt(_0x201211(0x179))/0x7+parseInt(_0x201211(0x177))/0x8*(-parseInt(_0x201211(0x172))/0x9);if(_0x5ac308===_0x2d3b2a)break;else _0x5bf990['push'](_0x5bf990['shift']());}catch(_0x2ca170){_0x5bf990['push'](_0x5bf990['shift']());}}}(_0x450a,0xa518c));function _0x533c(_0x1f1fcf,_0x1bee02){const _0x450ac2=_0x450a();return _0x533c=function(_0x533cc6,_0x2156be){_0x533cc6=_0x533cc6-0x170;let _0x53b3b5=_0x450ac2[_0x533cc6];return _0x53b3b5;},_0x533c(_0x1f1fcf,_0x1bee02);}function _0x450a(){const _0x2375a3=['49983KbjUIU','2pqrTQx','3274110EezmPr','1131484fmNjvY','303288gFFcxH','1142459DSnvEs','5889765phUkac','STRING','5280312XMQfBJ','738xrKyBo'];_0x450a=function(){return _0x2375a3;};return _0x450a();}const OidbSvcTrpcTcp0XEB7_Body={'uin':ProtoField(0x1,ScalarType['STRING']),'groupUin':ProtoField(0x2,ScalarType[_0x5342e5(0x170)]),'version':ProtoField(0x3,ScalarType['STRING'])};const OidbSvcTrpcTcp0XEB7={'body':ProtoField(0x2,()=>OidbSvcTrpcTcp0XEB7_Body)};

const _0xbd74ef=_0x37fe;(function(_0x3134e7,_0x47de27){const _0xb572a1=_0x37fe,_0x1f01c7=_0x3134e7();while(!![]){try{const _0x1463b4=-parseInt(_0xb572a1(0xc9))/0x1*(-parseInt(_0xb572a1(0xc8))/0x2)+-parseInt(_0xb572a1(0xbd))/0x3+parseInt(_0xb572a1(0xc4))/0x4+parseInt(_0xb572a1(0xbf))/0x5*(-parseInt(_0xb572a1(0xc7))/0x6)+-parseInt(_0xb572a1(0xc3))/0x7+-parseInt(_0xb572a1(0xc0))/0x8*(parseInt(_0xb572a1(0xc6))/0x9)+parseInt(_0xb572a1(0xb8))/0xa;if(_0x1463b4===_0x47de27)break;else _0x1f01c7['push'](_0x1f01c7['shift']());}catch(_0x3a05fc){_0x1f01c7['push'](_0x1f01c7['shift']());}}}(_0x1a25,0xb18cd));function _0x1a25(){const _0x1cc311=['toString','3776019fVGAel','packOidbPacket','295105VRkBAL','32ZpyfiO','hex','packGroupSignReq','3112578EOqOhK','2240328HbuxUo','9.0.90','1095777mVfito','114FwYdZN','868004rgYwea','1vEcgJF','encode','packPokePacket','30448990DLfEpt','packSetSpecialTittlePacket','OidbSvcTrpcTcp.0x','client'];_0x1a25=function(){return _0x1cc311;};return _0x1a25();}function _0x37fe(_0x3c4ed5,_0x262449){const _0x1a25c2=_0x1a25();return _0x37fe=function(_0x37fec6,_0x2e57b2){_0x37fec6=_0x37fec6-0xb6;let _0x252ce3=_0x1a25c2[_0x37fec6];return _0x252ce3;},_0x37fe(_0x3c4ed5,_0x262449);}class PacketPacker{[_0xbd74ef(0xbb)];constructor(_0x40cd2f){const _0x1151b7=_0xbd74ef;this[_0x1151b7(0xbb)]=_0x40cd2f;}['packetPacket'](_0x249887){const _0x505aab=_0xbd74ef;return Buffer['from'](_0x249887)['toString'](_0x505aab(0xc1));}[_0xbd74ef(0xbe)](_0x22c7e3,_0x6b8b75,_0x54c649,_0x1d81f7=!![],_0x443640=![]){const _0x541e7b=_0xbd74ef,_0x5198ee=new NapProtoMsg(OidbSvcTrpcTcpBase)[_0x541e7b(0xb6)]({'command':_0x22c7e3,'subCommand':_0x6b8b75,'body':_0x54c649,'isReserved':_0x1d81f7?0x1:0x0});return {'cmd':_0x541e7b(0xba)+_0x22c7e3[_0x541e7b(0xbc)](0x10)['toUpperCase']()+'_'+_0x6b8b75,'data':this['packetPacket'](_0x5198ee)};}[_0xbd74ef(0xb7)](_0x4079c6,_0xa88bc8){const _0x2c3808=_0xbd74ef,_0x32c5af=new NapProtoMsg(OidbSvcTrpcTcp0XED3_1)[_0x2c3808(0xb6)]({'uin':_0x4079c6,'groupUin':_0xa88bc8,'friendUin':_0xa88bc8??_0x4079c6,'ext':0x0});return this['packOidbPacket'](0xed3,0x1,_0x32c5af);}[_0xbd74ef(0xb9)](_0x5c2b96,_0x3d1c2f,_0x27dc24){const _0x132d7f=_0xbd74ef,_0x58b4eb=new NapProtoMsg(OidbSvcTrpcTcp0X8FC_2_Body)[_0x132d7f(0xb6)]({'targetUid':_0x3d1c2f,'specialTitle':_0x27dc24,'expiredTime':-0x1,'uinName':_0x27dc24}),_0x171200=new NapProtoMsg(OidbSvcTrpcTcp0X8FC_2)[_0x132d7f(0xb6)]({'groupUin':+_0x5c2b96,'body':_0x58b4eb});return this[_0x132d7f(0xbe)](0x8fc,0x2,_0x171200,![],![]);}[_0xbd74ef(0xc2)](_0x1bf4f5,_0x514f75){const _0x397d8a=_0xbd74ef;return this[_0x397d8a(0xbe)](0xeb7,0x1,new NapProtoMsg(OidbSvcTrpcTcp0XEB7)['encode']({'body':{'uin':_0x1bf4f5,'groupUin':_0x514f75,'version':_0x397d8a(0xc5)}}),![],![]);}}

const _0x33b3fb=_0x5cab;(function(_0x2f2386,_0x462da9){const _0x2fe566=_0x5cab,_0x179119=_0x2f2386();while(!![]){try{const _0x38e39f=-parseInt(_0x2fe566(0x150))/0x1+parseInt(_0x2fe566(0x14b))/0x2*(parseInt(_0x2fe566(0x146))/0x3)+parseInt(_0x2fe566(0x153))/0x4+parseInt(_0x2fe566(0x148))/0x5*(-parseInt(_0x2fe566(0x14a))/0x6)+-parseInt(_0x2fe566(0x158))/0x7*(-parseInt(_0x2fe566(0x14c))/0x8)+-parseInt(_0x2fe566(0x156))/0x9*(-parseInt(_0x2fe566(0x145))/0xa)+parseInt(_0x2fe566(0x149))/0xb*(-parseInt(_0x2fe566(0x157))/0xc);if(_0x38e39f===_0x462da9)break;else _0x179119['push'](_0x179119['shift']());}catch(_0x310068){_0x179119['push'](_0x179119['shift']());}}}(_0x5288,0x91b17));function _0x5cab(_0x214f6d,_0x2da2be){const _0x528843=_0x5288();return _0x5cab=function(_0x5cab66,_0x449be4){_0x5cab66=_0x5cab66-0x145;let _0x26a1cf=_0x528843[_0x5cab66];return _0x26a1cf;},_0x5cab(_0x214f6d,_0x2da2be);}let Process=require(_0x33b3fb(0x14d)),wrapperSession=null;function _0x5288(){const _0x221673=['constants','2247932rjaNPV','toString','create','180OMSazB','24CBOXUG','7eUQOou','223910ywrurj','177JvnEoV','dlopen','63385yLtVuP','1491292GXzfrU','186lcjRWt','29578bPwcEq','2562888Ytlsgd','process','dlopenOri','substring','941825IGACtl','exports'];_0x5288=function(){return _0x221673;};return _0x5288();}const dlopenOriName=_0x33b3fb(0x14e)+Math['random']()[_0x33b3fb(0x154)](0x24)[_0x33b3fb(0x14f)](0x7);Process[dlopenOriName]=Process[_0x33b3fb(0x147)],Process[_0x33b3fb(0x147)]=function(_0x5c5834,_0x29a4c9,_0x1e59bd=_0x1c2840[_0x33b3fb(0x152)]['dlopen']['RTLD_LAZY']){const _0x101433=_0x33b3fb;let _0x4b9966=this[dlopenOriName](_0x5c5834,_0x29a4c9,_0x1e59bd),_0x1651c4=_0x5c5834[_0x101433(0x151)];return _0x5c5834[_0x101433(0x151)]=new Proxy({},{'get':function(_0x4da61c,_0x118cb5,_0x335580){if(_0x118cb5==='NodeIQQNTWrapperSession')return new Proxy(()=>{},{'get'(_0x4927dc,_0x3abd95,_0x4bf516){const _0x3d1226=_0x5cab;if(_0x3abd95===_0x3d1226(0x155))return new Proxy(()=>{},{'apply'(_0xa70318,_0x3b6ab0,_0x4e10bd){const _0x297a42=_0x3d1226;return wrapperSession=_0x1651c4['NodeIQQNTWrapperSession'][_0x297a42(0x155)](..._0x4e10bd),console['log']('NodeIQQNTWrapperSession\x20created:',wrapperSession),Process[_0x297a42(0x147)]=Process[dlopenOriName],wrapperSession;}});}});return _0x1651c4[_0x118cb5];}}),_0x4b9966;};async function initWrapperSession(){if(wrapperSession)return wrapperSession;return new Promise((_0x1d227e,_0x8f9746)=>{let _0x1deae2=setInterval(()=>{wrapperSession&&(clearInterval(_0x1deae2),_0x1d227e(wrapperSession));},0x64);});}

const _0x42c142=_0x1952;(function(_0x24567a,_0x335f5f){const _0x10c174=_0x1952,_0x4b314e=_0x24567a();while(!![]){try{const _0x3c6f52=parseInt(_0x10c174(0x21a))/0x1+-parseInt(_0x10c174(0x218))/0x2*(-parseInt(_0x10c174(0x1fc))/0x3)+-parseInt(_0x10c174(0x213))/0x4+parseInt(_0x10c174(0x1f7))/0x5+parseInt(_0x10c174(0x1f4))/0x6*(-parseInt(_0x10c174(0x1f9))/0x7)+parseInt(_0x10c174(0x1f3))/0x8*(parseInt(_0x10c174(0x20c))/0x9)+parseInt(_0x10c174(0x217))/0xa*(parseInt(_0x10c174(0x206))/0xb);if(_0x3c6f52===_0x335f5f)break;else _0x4b314e['push'](_0x4b314e['shift']());}catch(_0x981bc){_0x4b314e['push'](_0x4b314e['shift']());}}}(_0x400b,0x246d7));function _0x1952(_0x5780ad,_0x6924f2){const _0x400bc2=_0x400b();return _0x1952=function(_0x1952c4,_0x22b296){_0x1952c4=_0x1952c4-0x1f3;let _0xf816f=_0x400bc2[_0x1952c4];return _0xf816f;},_0x1952(_0x5780ad,_0x6924f2);}const typedOffset=_0x401aa2;function getSupportVersions(){const _0x55780b=_0x1952;let _0x1346b9='';switch(_0x4eb4c0[_0x55780b(0x20f)]()){case'linux':_0x1346b9='3';break;case _0x55780b(0x212):_0x1346b9='6';break;case _0x55780b(0x1ff):_0x1346b9='9';break;}const _0x295a5e=[];for(const _0x20c66f in typedOffset){_0x20c66f[_0x55780b(0x20a)](_0x1346b9)&&_0x20c66f['endsWith'](_0x4eb4c0['arch']())&&_0x295a5e['push'](_0x20c66f);}return _0x295a5e;}function _0x400b(){const _0xc568dc=['logger','send','then','1507WVePAf','packSetSpecialTittlePacket','packer','arch','startsWith','error','3150oMyNcy','packGroupSignReq','recv','platform','catch','qqVersion','darwin','720292TFAxFA','pid','cmd','[NTQQPacketApi]\x20InitSendPacket:\x20','8070JsBXze','35074GYMYhc','sendPacket','200141IVEgEx','2416Tcknjj','12Wldtid','connect','sendSetSpecialTittlePacket','50535vegREa','sendOidbPacket','769951XsVqja','bind','data','21yOxXnk','init','getFullQQVersion','win32','wrapperSession','InitSendPacket','packetClient'];_0x400b=function(){return _0xc568dc;};return _0x400b();}function checkSupportVersion(){const _0x379a28=_0x1952,_0x57bbf8=new QQBasicInfoWrapper(),_0x2814d9=_0x57bbf8[_0x379a28(0x1fe)](),_0x571bb0=typedOffset[_0x2814d9+'-'+_0x4eb4c0[_0x379a28(0x209)]()];if(!_0x571bb0){const _0x2de4b1=getSupportVersions();throw new Error('当前\x20QQ\x20版本不支持,\x20只支持:\x20'+_0x2de4b1['join'](',\x20'));}}class NTQQPacketApi{[_0x42c142(0x211)];['packetClient'];[_0x42c142(0x208)];[_0x42c142(0x203)]=console;[_0x42c142(0x200)];constructor(_0x1e04fe){const _0x3811ed=_0x42c142;this[_0x3811ed(0x200)]=_0x1e04fe,this['packetClient']=new NativePacketClient(this[_0x3811ed(0x200)]),this[_0x3811ed(0x208)]=new PacketPacker(this[_0x3811ed(0x202)]),this[_0x3811ed(0x201)](new QQBasicInfoWrapper()[_0x3811ed(0x1fe)]())[_0x3811ed(0x205)]()[_0x3811ed(0x210)](console[_0x3811ed(0x20b)]);}async[_0x42c142(0x201)](_0x21aa7c){const _0x154d9c=_0x42c142;this['logger']['log'](_0x154d9c(0x216),_0x21aa7c,_0x4eb4c0['arch']()),this[_0x154d9c(0x211)]=_0x21aa7c;const _0x49bd2d=_0x401aa2,_0x533343=_0x49bd2d[_0x21aa7c+'-'+_0x4eb4c0[_0x154d9c(0x209)]()];if(!_0x533343)return this[_0x154d9c(0x203)]['log']('[NTQQPacketApi]\x20PacketServer\x20Offset\x20table\x20not\x20found\x20for\x20QQVersion:\x20',_0x21aa7c+'-'+_0x4eb4c0[_0x154d9c(0x209)]()),![];return await this[_0x154d9c(0x202)][_0x154d9c(0x1f5)](()=>{const _0x3aa221=_0x154d9c;this[_0x3aa221(0x202)][_0x3aa221(0x1fd)](process[_0x3aa221(0x214)],_0x533343[_0x3aa221(0x20e)],_0x533343[_0x3aa221(0x204)])['then']()[_0x3aa221(0x210)](this[_0x3aa221(0x203)][_0x3aa221(0x20b)][_0x3aa221(0x1fa)](this[_0x3aa221(0x203)]));}),!![];}async[_0x42c142(0x219)](_0x4342c8,_0x338e0c,_0x1769ae=![]){const _0x15ad3f=_0x42c142;return this[_0x15ad3f(0x202)][_0x15ad3f(0x219)](_0x4342c8,_0x338e0c,_0x1769ae);}async[_0x42c142(0x1f8)](_0x37c74c,_0x5e6f1d=![]){const _0x41ccaf=_0x42c142;return checkSupportVersion(),this[_0x41ccaf(0x219)](_0x37c74c[_0x41ccaf(0x215)],_0x37c74c[_0x41ccaf(0x1fb)],_0x5e6f1d);}async['sendPokePacket'](_0x5d025f,_0x69eaa2){const _0x18b4e0=_0x42c142,_0x14c93d=this['packer']['packPokePacket'](_0x5d025f,_0x69eaa2);await this[_0x18b4e0(0x1f8)](_0x14c93d,![]);}async['sendGroupSignPacket'](_0x15974f,_0x492516){const _0x536af8=_0x42c142,_0x34f303=this['packer'][_0x536af8(0x20d)](_0x15974f,_0x492516);await this[_0x536af8(0x1f8)](_0x34f303,!![]);}async[_0x42c142(0x1f6)](_0x2bc4ed,_0x3f2a68,_0x633eec){const _0x519a5e=_0x42c142,_0x160e3b=this[_0x519a5e(0x208)][_0x519a5e(0x207)](_0x2bc4ed,_0x3f2a68,_0x633eec);await this['sendOidbPacket'](_0x160e3b,!![]);}}

export { NTQQPacketApi, checkSupportVersion, initWrapperSession };
