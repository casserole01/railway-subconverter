(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b00f33d"],{"14c3":function(e,t,o){var l=o("c6b6"),r=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var n=o.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==l(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"25f0":function(e,t,o){"use strict";var l=o("6eeb"),r=o("825a"),n=o("d039"),s=o("ad6d"),a="toString",i=RegExp.prototype,c=i[a],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=a;(u||d)&&l(RegExp.prototype,a,(function(){var e=r(this),t=String(e.source),o=e.flags,l=String(void 0===o&&e instanceof RegExp&&!("flags"in i)?s.call(e):o);return"/"+t+"/"+l}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var l=o("23e7"),r=o("b727").filter,n=o("1dde"),s=o("ae40"),a=n("filter"),i=s("filter");l({target:"Array",proto:!0,forced:!a||!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var l=o("d784"),r=o("825a"),n=o("7b0b"),s=o("50c4"),a=o("a691"),i=o("1d80"),c=o("8aa5"),u=o("14c3"),d=Math.max,p=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};l("replace",2,(function(e,t,o,l){var g=l.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=l.REPLACE_KEEPS_$0,S=g?"$":"$0";return[function(o,l){var r=i(this),n=void 0==o?void 0:o[e];return void 0!==n?n.call(o,r,l):t.call(String(r),o,l)},function(e,l){if(!g&&v||"string"===typeof l&&-1===l.indexOf(S)){var n=o(t,e,this,l);if(n.done)return n.value}var i=r(e),f=String(this),m="function"===typeof l;m||(l=String(l));var h=i.global;if(h){var x=i.unicode;i.lastIndex=0}var k=[];while(1){var C=u(i,f);if(null===C)break;if(k.push(C),!h)break;var w=String(C[0]);""===w&&(i.lastIndex=c(f,s(i.lastIndex),x))}for(var R="",U=0,_=0;_<k.length;_++){C=k[_];for(var $=String(C[0]),E=d(p(a(C.index),f.length),0),A=[],T=1;T<C.length;T++)A.push(b(C[T]));var I=C.groups;if(m){var O=[$].concat(A,E,f);void 0!==I&&O.push(I);var L=String(l.apply(void 0,O))}else L=y($,f,E,A,I,l);E>=U&&(R+=f.slice(U,E)+L,U=E+$.length)}return R+f.slice(U)}];function y(e,o,l,r,s,a){var i=l+e.length,c=r.length,u=h;return void 0!==s&&(s=n(s),u=m),t.call(a,u,(function(t,n){var a;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,l);case"'":return o.slice(i);case"<":a=s[n.slice(1,-1)];break;default:var u=+n;if(0===u)return t;if(u>c){var d=f(u/10);return 0===d?t:d<=c?void 0===r[d-1]?n.charAt(1):r[d-1]+n.charAt(1):t}a=r[u-1]}return void 0===a?"":a}))}}))},6547:function(e,t,o){var l=o("a691"),r=o("1d80"),n=function(e){return function(t,o){var n,s,a=String(r(t)),i=l(o),c=a.length;return i<0||i>=c?e?"":void 0:(n=a.charCodeAt(i),n<55296||n>56319||i+1===c||(s=a.charCodeAt(i+1))<56320||s>57343?e?a.charAt(i):n:e?a.slice(i,i+2):s-56320+(n-55296<<10)+65536)}};e.exports={codeAt:n(!1),charAt:n(!0)}},"6a95":function(e,t,o){"use strict";o("fda7")},"8aa5":function(e,t,o){"use strict";var l=o("6547").charAt;e.exports=function(e,t,o){return t+(o?l(e,t).length:1)}},9263:function(e,t,o){"use strict";var l=o("ad6d"),r=o("9f7f"),n=RegExp.prototype.exec,s=String.prototype.replace,a=n,i=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=i||u||c;d&&(a=function(e){var t,o,r,a,d=this,p=c&&d.sticky,f=l.call(d),m=d.source,h=0,b=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),b=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(m="(?: "+m+")",b=" "+b,h++),o=new RegExp("^(?:"+m+")",f)),u&&(o=new RegExp("^"+m+"$(?!\\s)",f)),i&&(t=d.lastIndex),r=n.call(p?o:d,b),p?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:i&&r&&(d.lastIndex=d.global?r.index+r[0].length:t),u&&r&&r.length>1&&s.call(r[0],o,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=a},"9f7f":function(e,t,o){"use strict";var l=o("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=l((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=l((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var l=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&l((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Subconverter "),o("svg-icon",{staticStyle:{"margin-left":"15px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"15px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"15px"}},[e._v(" "+e._s(e.backendVersion)+" ")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"100px","label-position":"left"}},[o("el-form-item",{staticStyle:{display:"none"},attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("Basic")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("Advanced")])],1),o("el-form-item",{attrs:{label:"Url:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"Support subscription links or ss/ssr/vmess single links, one per line for multiple links or separated by |"},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"Client:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Backend:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入自己的后端"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Short url:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入其他可用短链API"},model:{value:e.form.shortType,callback:function(t){e.$set(e.form,"shortType",t)},expression:"form.shortType"}},e._l(e.options.shortTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"Remote:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},[e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoRemoteConfig},slot:"append"},[e._v("配置示例")])],2)],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-collapse",[o("el-collapse-item",[o("template",{slot:"title"},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"Advanced:"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"limr",icon:"el-icon-more-outline"}},[e._v("Click to show / hide")])],1)],1),o("el-form-item",{attrs:{label:"Include:"}},[o("el-input",{attrs:{placeholder:"Include nodes, support regular expressions"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"Exclude:"}},[o("el-input",{attrs:{placeholder:"Exclude nodes, support regular expressions"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"Rename:"}},[o("el-input",{attrs:{placeholder:"Use @ to rename,examples:`HK@HK2``TW@TW2`"},model:{value:e.form.rename,callback:function(t){e.$set(e.form,"rename",t)},expression:"form.rename"}})],1),o("el-form-item",{attrs:{label:"File Name:"}},[o("el-input",{attrs:{placeholder:"Name of the output file"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{staticStyle:{"margin-top":"5.9px"},attrs:{label:"Output as Node list",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-col",[o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash New Field"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"TFO"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Node type"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Sort node"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Filter useless nodes"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Skip certificate verification"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"NetEase Cloud Music"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("More Options")])],1)],1)],1)],1)],2)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"30px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"Url:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("Copy")])],1)],1),o("el-form-item",{attrs:{label:"Short url:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("Copy")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"160px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("Get subscription")]),o("el-button",{staticStyle:{width:"160px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("Get short url")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"160px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("Custom configuration")]),o("el-button",{staticStyle:{width:"160px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("One click for Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("Reference Configuration")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("Cancel")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("OK")])],1)],1)],1)},r=[],n=(o("4de4"),o("c975"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/limr95/sub-web-modify"),s="https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini",a="https://github.com/tindy2013/subconverter/releases",i="https://shaguo.link/sub?",c="https://tlp.pw/short",u="https://api.wcc.best/config/upload",d="https://t.me/yikoudaguo",p={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",Surfboard:"surfboard","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksR:"ssr",ShadowsocksD:"ssd",V2Ray:"v2ray",Trojan:"trojan","混合订阅（mixed）":"mixed","自动判断客户端":"auto"},shortTypes:{"tlp.pw":"https://tlp.pw/short","suo.yt":"https://suo.yt/short","dlj.tf":"https://dlj.tf/short","sub.cm":"https://sub.cm/short"},customBackend:{"localhost:25500":"http://localhost:25500/sub?","shaguo.link（自用）":"https://shaguo.link/sub?","api.shaguo.gay（自用）":"https://api.shaguo.gay/sub?","subcon.dlj.tf (subconverter作者后端)":"https://subcon.dlj.tf/sub?","api.wcc.best (sub-web作者后端)":"https://api.wcc.best/sub?","api.dler.io（lhie1后端）":"https://api.dler.io/sub?","sub.id9.cc (品云☁️后端)":"https://sub.id9.cc/sub?","api.sublink.dev（普拉斯公益后端）":"https://api.sublink.dev/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://shaguo.link/sub?"},{value:"https://api.shaguo.gay/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://sub.id9.cc/sub?"},{value:"https://api.sublink.dev/sub?"}],remoteConfig:[{label:"Default",options:[{label:"Default",value:""},{label:"My rules",value:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/Myrules.ini"},{label:"My rules For CFM",value:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/CFM.ini"},{label:"Adguard",value:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/Adguard.ini"},{label:"🍟A组去重+重命名",value:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/%F0%9F%8D%9FA%E7%BB%84.ini"},{label:"🍟B组去重+重命名",value:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/%F0%9F%8D%9FB%E7%BB%84.ini"},{label:"🍟E组去重+重命名",value:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/%F0%9F%8D%9FE%E7%BB%84.ini"}]},{label:"Online rules",options:[{label:"lhie1 rules",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_clash.ini"},{label:"lhie1 rules Full",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_dler.ini"},{label:"ConnersHua rules",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_backtocn.ini"},{label:"ACL4SSR_Default",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_AdblockPlus",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_NoAuto",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_Mini",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Mini_MultiMode",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"}]},{label:"universal",options:[{label:"No-Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/no-urltest.ini"},{label:"Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(Only rules，No-Urltest)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"https://shaguo.link/sub?",shortType:"https://tlp.pw/short",remoteConfig:"https://cdn.jsdelivr.net/gh/Dashaguo/My-rules@main/Myrules.ini",excludeRemarks:"",includeRemarks:"",filename:"",rename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!0,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:d,sampleConfig:s}},created:function(){document.title="砂锅的Subconverter",this.isPC=this.$getOS().isPc},mounted:function(){this.form.clientType="clash",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(n)},gotoTgChannel:function(){window.open(d)},gotoGayhub:function(){window.open(a)},gotoRemoteConfig:function(){window.open(s)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("Please fill in the required fields first to generate a link"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("Please fill in the required fields first to generate a link"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},gotovideo:function(){this.$alert("~",{type:"warning",confirmButtonText:"OK",customClass:"msgbox",showClose:!1}).then((function(){var e="https://www.youtube.com/watch?v=EkZPqsYBTuw";window.open(e)}))},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("Subscription link and client are required fields"),!1;var e=""===this.form.customBackend?i:this.form.customBackend,t=this.form.sourceSubUrl;t=t.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=e+"target="+this.form.clientType+"&url="+encodeURIComponent(t)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),""!==this.form.rename&&(this.customSubUrl+="&rename="+encodeURIComponent(this.form.rename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&fdn="+this.form.fdn.toString()+"&scv="+this.form.scv.toString()+"&sort="+this.form.sort.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("Copied")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("Please subscribe to the link first, and then get the short link."),!1;var t=""===this.form.shortType?c:this.form.shortType;this.loading=!0;var o=new FormData;o.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(t,o,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("Copied")):e.$message.error("Failed to get the short link："+t.data.Message)})).catch((function(){e.$message.error("Failed to get the short link")})).finally((function(){e.loading=!1}))},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("Remote rules can't be empty"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("Remote rules uploaded successfully, link has been copied, valid for three months"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("Remote rules upload failed："+t.data.Message)})).catch((function(){e.$message.error("Remote rules upload failed")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,l=e?o.filter(this.createFilter(e)):o;t(l)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(i.substring(0,i.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))}}},f=p,m=(o("6a95"),o("2877")),h=Object(m["a"])(f,l,r,!1,null,null,null);t["default"]=h.exports},ac1f:function(e,t,o){"use strict";var l=o("23e7"),r=o("9263");l({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,o){"use strict";var l=o("825a");e.exports=function(){var e=l(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c975:function(e,t,o){"use strict";var l=o("23e7"),r=o("4d64").indexOf,n=o("a640"),s=o("ae40"),a=[].indexOf,i=!!a&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});l({target:"Array",proto:!0,forced:i||!c||!u},{indexOf:function(e){return i?a.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var l=o("6eeb"),r=o("d039"),n=o("b622"),s=o("9263"),a=o("9112"),i=n("species"),c=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,d){var m=n(e),h=!r((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),b=h&&!r((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[i]=function(){return o},o.flags="",o[m]=/./[m]),o.exec=function(){return t=!0,null},o[m](""),!t}));if(!h||!b||"replace"===e&&(!c||!u||p)||"split"===e&&!f){var g=/./[m],v=o(m,""[e],(function(e,t,o,l,r){return t.exec===s?h&&!r?{done:!0,value:g.call(t,o,l)}:{done:!0,value:e.call(o,t,l)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=v[0],y=v[1];l(String.prototype,e,S),l(RegExp.prototype,m,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&a(RegExp.prototype[m],"sham",!0)}},fda7:function(e,t,o){}}]);
//# sourceMappingURL=chunk-1b00f33d.416a2543.js.map