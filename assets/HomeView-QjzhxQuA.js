var he=Object.defineProperty;var me=(l,t,e)=>t in l?he(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var N=(l,t,e)=>(me(l,typeof t!="symbol"?t+"":t,e),e);import{d as m,r as x,o as D,a as S,c as w,b as H,e as v,w as b,f as h,t as V,u as C,g as re}from"./index-JqXteQ8e.js";var le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ve={exports:{}};(function(l){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(a){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,g=0,I={},c={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function r(n){return n instanceof k?new k(n.type,r(n.content),n.alias):Array.isArray(n)?n.map(r):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(r){return Object.prototype.toString.call(r).slice(8,-1)},objId:function(r){return r.__id||Object.defineProperty(r,"__id",{value:++g}),r.__id},clone:function r(n,s){s=s||{};var i,o;switch(c.util.type(n)){case"Object":if(o=c.util.objId(n),s[o])return s[o];i={},s[o]=i;for(var d in n)n.hasOwnProperty(d)&&(i[d]=r(n[d],s));return i;case"Array":return o=c.util.objId(n),s[o]?s[o]:(i=[],s[o]=i,n.forEach(function(f,u){i[u]=r(f,s)}),i);default:return n}},getLanguage:function(r){for(;r;){var n=p.exec(r.className);if(n)return n[1].toLowerCase();r=r.parentElement}return"none"},setLanguage:function(r,n){r.className=r.className.replace(RegExp(p,"gi"),""),r.classList.add("language-"+n)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var r=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(r){var n=document.getElementsByTagName("script");for(var s in n)if(n[s].src==r)return n[s]}return null}},isActive:function(r,n,s){for(var i="no-"+n;r;){var o=r.classList;if(o.contains(n))return!0;if(o.contains(i))return!1;r=r.parentElement}return!!s}},languages:{plain:I,plaintext:I,text:I,txt:I,extend:function(r,n){var s=c.util.clone(c.languages[r]);for(var i in n)s[i]=n[i];return s},insertBefore:function(r,n,s,i){i=i||c.languages;var o=i[r],d={};for(var f in o)if(o.hasOwnProperty(f)){if(f==n)for(var u in s)s.hasOwnProperty(u)&&(d[u]=s[u]);s.hasOwnProperty(f)||(d[f]=o[f])}var y=i[r];return i[r]=d,c.languages.DFS(c.languages,function(A,z){z===y&&A!=r&&(this[A]=d)}),d},DFS:function r(n,s,i,o){o=o||{};var d=c.util.objId;for(var f in n)if(n.hasOwnProperty(f)){s.call(n,f,n[f],i||f);var u=n[f],y=c.util.type(u);y==="Object"&&!o[d(u)]?(o[d(u)]=!0,r(u,s,null,o)):y==="Array"&&!o[d(u)]&&(o[d(u)]=!0,r(u,s,f,o))}}},plugins:{},highlightAll:function(r,n){c.highlightAllUnder(document,r,n)},highlightAllUnder:function(r,n,s){var i={callback:s,container:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),c.hooks.run("before-all-elements-highlight",i);for(var o=0,d;d=i.elements[o++];)c.highlightElement(d,n===!0,i.callback)},highlightElement:function(r,n,s){var i=c.util.getLanguage(r),o=c.languages[i];c.util.setLanguage(r,i);var d=r.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(d,i);var f=r.textContent,u={element:r,language:i,grammar:o,code:f};function y(z){u.highlightedCode=z,c.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,c.hooks.run("after-highlight",u),c.hooks.run("complete",u),s&&s.call(u.element)}if(c.hooks.run("before-sanity-check",u),d=u.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!u.code){c.hooks.run("complete",u),s&&s.call(u.element);return}if(c.hooks.run("before-highlight",u),!u.grammar){y(c.util.encode(u.code));return}if(n&&a.Worker){var A=new Worker(c.filename);A.onmessage=function(z){y(z.data)},A.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else y(c.highlight(u.code,u.grammar,u.language))},highlight:function(r,n,s){var i={code:r,grammar:n,language:s};if(c.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=c.tokenize(i.code,i.grammar),c.hooks.run("after-tokenize",i),k.stringify(c.util.encode(i.tokens),i.language)},tokenize:function(r,n){var s=n.rest;if(s){for(var i in s)n[i]=s[i];delete n.rest}var o=new W;return O(o,o.head,r),B(r,o,n,o.head,0),Z(o)},hooks:{all:{},add:function(r,n){var s=c.hooks.all;s[r]=s[r]||[],s[r].push(n)},run:function(r,n){var s=c.hooks.all[r];if(!(!s||!s.length))for(var i=0,o;o=s[i++];)o(n)}},Token:k};a.Prism=c;function k(r,n,s,i){this.type=r,this.content=n,this.alias=s,this.length=(i||"").length|0}k.stringify=function r(n,s){if(typeof n=="string")return n;if(Array.isArray(n)){var i="";return n.forEach(function(y){i+=r(y,s)}),i}var o={type:n.type,content:r(n.content,s),tag:"span",classes:["token",n.type],attributes:{},language:s},d=n.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(o.classes,d):o.classes.push(d)),c.hooks.run("wrap",o);var f="";for(var u in o.attributes)f+=" "+u+'="'+(o.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+f+">"+o.content+"</"+o.tag+">"};function U(r,n,s,i){r.lastIndex=n;var o=r.exec(s);if(o&&i&&o[1]){var d=o[1].length;o.index+=d,o[0]=o[0].slice(d)}return o}function B(r,n,s,i,o,d){for(var f in s)if(!(!s.hasOwnProperty(f)||!s[f])){var u=s[f];u=Array.isArray(u)?u:[u];for(var y=0;y<u.length;++y){if(d&&d.cause==f+","+y)return;var A=u[y],z=A.inside,se=!!A.lookbehind,ie=!!A.greedy,de=A.alias;if(ie&&!A.pattern.global){var pe=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,pe+"g")}for(var oe=A.pattern||A,E=i.next,M=o;E!==n.tail&&!(d&&M>=d.reach);M+=E.value.length,E=E.next){var G=E.value;if(n.length>r.length)return;if(!(G instanceof k)){var X=1,L;if(ie){if(L=U(oe,M,r,se),!L||L.index>=r.length)break;var Y=L.index,ge=L.index+L[0].length,R=M;for(R+=E.value.length;Y>=R;)E=E.next,R+=E.value.length;if(R-=E.value.length,M=R,E.value instanceof k)continue;for(var q=E;q!==n.tail&&(R<ge||typeof q.value=="string");q=q.next)X++,R+=q.value.length;X--,G=r.slice(M,R),L.index-=M}else if(L=U(oe,0,G,se),!L)continue;var Y=L.index,J=L[0],ee=G.slice(0,Y),ce=G.slice(Y+J.length),te=M+G.length;d&&te>d.reach&&(d.reach=te);var K=E.prev;ee&&(K=O(n,K,ee),M+=ee.length),Q(n,K,X);var fe=new k(f,z?c.tokenize(J,z):J,de,J);if(E=O(n,K,fe),ce&&O(n,E,ce),X>1){var ne={cause:f+","+y,reach:te};B(r,n,s,E.prev,M,ne),d&&ne.reach>d.reach&&(d.reach=ne.reach)}}}}}}function W(){var r={value:null,prev:null,next:null},n={value:null,prev:r,next:null};r.next=n,this.head=r,this.tail=n,this.length=0}function O(r,n,s){var i=n.next,o={value:s,prev:n,next:i};return n.next=o,i.prev=o,r.length++,o}function Q(r,n,s){for(var i=n.next,o=0;o<s&&i!==r.tail;o++)i=i.next;n.next=i,i.prev=n,r.length-=o}function Z(r){for(var n=[],s=r.head.next;s!==r.tail;)n.push(s.value),s=s.next;return n}if(!a.document)return a.addEventListener&&(c.disableWorkerMessageHandler||a.addEventListener("message",function(r){var n=JSON.parse(r.data),s=n.language,i=n.code,o=n.immediateClose;a.postMessage(c.highlight(i,c.languages[s],s)),o&&a.close()},!1)),c;var $=c.util.currentScript();$&&(c.filename=$.src,$.hasAttribute("data-manual")&&(c.manual=!0));function _(){c.manual||c.highlightAll()}if(!c.manual){var F=document.readyState;F==="loading"||F==="interactive"&&$&&$.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return c}(t);l.exports&&(l.exports=e),typeof le<"u"&&(le.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(p,g){var I={};I["language-"+g]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[g]},I.cdata=/^<!\[CDATA\[|\]\]>$/i;var c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:I}};c["language-"+g]={pattern:/[\s\S]+/,inside:e.languages[g]};var k={};k[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:c},e.languages.insertBefore("markup","cdata",k)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(a,p){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:e.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(a){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+p.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var g=a.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",p=function($,_){return"✖ Error "+$+" while fetching file: "+_},g="✖ Error: File does not exist or is empty",I={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="data-src-status",k="loading",U="loaded",B="failed",W="pre[data-src]:not(["+c+'="'+U+'"]):not(['+c+'="'+k+'"])';function O($,_,F){var r=new XMLHttpRequest;r.open("GET",$,!0),r.onreadystatechange=function(){r.readyState==4&&(r.status<400&&r.responseText?_(r.responseText):r.status>=400?F(p(r.status,r.statusText)):F(g))},r.send(null)}function Q($){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec($||"");if(_){var F=Number(_[1]),r=_[2],n=_[3];return r?n?[F,Number(n)]:[F,void 0]:[F,F]}}e.hooks.add("before-highlightall",function($){$.selector+=", "+W}),e.hooks.add("before-sanity-check",function($){var _=$.element;if(_.matches(W)){$.code="",_.setAttribute(c,k);var F=_.appendChild(document.createElement("CODE"));F.textContent=a;var r=_.getAttribute("data-src"),n=$.language;if(n==="none"){var s=(/\.(\w+)$/.exec(r)||[,"none"])[1];n=I[s]||s}e.util.setLanguage(F,n),e.util.setLanguage(_,n);var i=e.plugins.autoloader;i&&i.loadLanguages(n),O(r,function(o){_.setAttribute(c,U);var d=Q(_.getAttribute("data-range"));if(d){var f=o.split(/\r\n?|\n/g),u=d[0],y=d[1]==null?f.length:d[1];u<0&&(u+=f.length),u=Math.max(0,Math.min(u-1,f.length)),y<0&&(y+=f.length),y=Math.max(0,Math.min(y,f.length)),o=f.slice(u,y).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(u+1))}F.textContent=o,e.highlightElement(F)},function(o){_.setAttribute(c,B),F.textContent=o})}}),e.plugins.fileHighlight={highlight:function(_){for(var F=(_||document).querySelectorAll(W),r=0,n;n=F[r++];)e.highlightElement(n)}};var Z=!1;e.fileHighlight=function(){Z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),Z=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ve);var j=(l=>(l.containerClassName="starscore-container",l.scoreWrapperClassName="starscore-radio-group",l.scoreItemClassName="starscore-radio",l.scoreIconClassName="starscore-radio__icon",l.scoreVoidIconClassName="starscore-radio__void-icon",l.scoreDescWrapperClassName="starscore-description",l))(j||{});const _e=(l,t)=>{const e=(l.getAttribute("style")||"").split(";").filter(g=>!!g.trim()).reduce((g,I)=>{const c=I.split(":").map(B=>B.trim()),k=c[0],U=c[1];return g[k]=U,g},{}),a=Object.assign(e,t),p=Object.keys(a).filter(g=>!!g.trim()).reduce((g,I)=>(g+=`${I}: ${a[I]};`,g),"");l.setAttribute("style",p)},ye=(l,t)=>{const e=typeof t=="string"?[t]:t;l.classList.add(...e)},ae=l=>typeof l=="number"?`${l}px`:l,be='<svg xmlns="http://www.w3.org/2000/svg" width="1em" class="icon" viewBox="0 0 1024 1024" fill="#FFA900" style="--svg-origin-width:200;--svg-origin-height:200;--svg-origin-width--with-unit:200px;--svg-origin-height--with-unit:200px;" data-svg-origin-width="200" data-svg-origin-height="200" font-size="200"><path d="M270.336 978.944c-57.344 29.696-95.232 3.072-83.968-61.44l46.08-268.288-194.56-190.464c-46.08-45.056-31.744-89.088 31.744-99.328l269.312-38.912L459.776 76.8c28.672-58.368 74.752-58.368 104.448 0l120.832 244.736 269.312 38.912c64.512 9.216 78.848 53.248 31.744 99.328l-194.56 189.44 46.08 268.288c11.264 63.488-26.624 91.136-83.968 61.44L512 851.968z"/></svg>',Se='<svg xmlns="http://www.w3.org/2000/svg" width="1em" class="icon" viewBox="0 0 1024 1024" style="--svg-origin-width:200;--svg-origin-height:200;--svg-origin-width--with-unit:200px;--svg-origin-height--with-unit:200px;" data-svg-origin-width="200" data-svg-origin-height="200" font-size="200"><path d="m512 111.616 130.048 263.623 290.93 42.211-210.489 205.255 49.721 289.678L512 775.622 251.79 912.383l49.721-289.678L91.022 417.45l290.93-42.211zm0-72.818a72.72 72.72 0 0 0-65.309 40.619L333.596 308.679l-253.042 36.75c-27.421 3.982-50.176 23.211-58.823 49.607a72.96 72.96 0 0 0 18.432 74.638l183.069 178.403-43.235 252.018c-4.665 27.307 6.599 54.955 29.013 71.225 12.629 9.216 27.762 13.881 42.781 13.881 11.605 0 23.211-2.731 33.906-8.419l226.304-118.898 226.304 119.011c10.695 5.575 22.301 8.419 33.906 8.419 15.133 0 30.151-4.665 42.781-13.881 22.414-16.27 33.678-43.918 29.013-71.225L800.77 648.19l183.069-178.403c19.797-19.342 26.965-48.242 18.432-74.638s-31.403-45.625-58.823-49.607l-253.042-36.75L577.311 79.53c-12.288-25.031-37.547-40.733-65.309-40.733z"/></svg>',we='<svg xmlns="http://www.w3.org/2000/svg" width="1em" class="icon" viewBox="0 0 1024 1024" style="--svg-origin-width:200;--svg-origin-height:200;--svg-origin-width--with-unit:200px;--svg-origin-height--with-unit:200px;" data-svg-origin-width="200" data-svg-origin-height="200" font-size="200"><path d="M1024 352c0 337-512 592-512 592S0 690 0 352C0 201.8 121.8 80 272 80c101.3 0 189.7 55.4 236.5 137.6 1.5 2.7 5.4 2.7 6.9 0C562.3 135.4 650.7 80 752 80c150.2 0 272 121.8 272 272"/></svg>',xe='<svg xmlns="http://www.w3.org/2000/svg" width="1em" class="icon" viewBox="0 0 1024 1024" style="--svg-origin-width:200;--svg-origin-height:200;--svg-origin-width--with-unit:200px;--svg-origin-height--with-unit:200px;" data-svg-origin-width="200" data-svg-origin-height="200" font-size="200"><path d="M752 144c55.6 0 107.8 21.6 147.1 60.9S960 296.4 960 352c0 32.7-6.1 66.4-18.1 100.2-11.4 32-28.3 64.9-50.3 97.8-38.7 57.8-93.4 116.2-162.5 173.6C643 795.1 555.6 847.2 512 871.5c-43.2-24-129.4-75.1-215.2-146-69.6-57.5-124.6-116-163.7-174-22.2-33.1-39.3-66.1-50.8-98.4C70.2 418.9 64 385 64 352c0-55.6 21.6-107.8 60.9-147.1S216.4 144 272 144c76.9 0 147.2 42.2 183.6 110.1l28.2 52.7c12.1 22.5 44.4 22.5 56.4 0l28.2-52.7C604.8 186.2 675.1 144 752 144m0-64c-101.3 0-189.7 55.4-236.5 137.6-1.5 2.7-5.4 2.7-6.9 0C461.7 135.4 373.3 80 272 80 121.8 80 0 201.8 0 352c0 338 512 592 512 592s512-255 512-592c0-150.2-121.8-272-272-272"/></svg>',ue={star:{icon:be,voidIcon:Se},heart:{icon:we,voidIcon:xe}};class Ce{constructor(t){N(this,"options",{container:"",count:5,initialValue:0,size:"20px",gutter:"4px",color:"#ee0a24",voidColor:"#c8c9cc",disabledColor:"#c8c9cc",icon:"",type:"star",voidIcon:"",clearable:!1,readonly:!1,disabled:!1,allowHalf:!1,scoreDetails:()=>"",showDescription:!1,descriptionColor:"#909399",descriptionFontSize:"13px",onChange:()=>{}});N(this,"container",null);N(this,"value",0);N(this,"hoverValue",null);this.options=Object.assign(this.options,t),this.value=this.options.initialValue,this.clickListener=this.clickListener.bind(this),this.onScoreHoverHandler=this.onScoreHoverHandler.bind(this),this.onScoreLeaveHandler=this.onScoreLeaveHandler.bind(this),this.initCSSVars(),this.render()}setValue(t){return this.value===t?this:(t<0?this.value=0:t>this.options.count?this.value=this.options.count:this.value=t,this.render(),this)}getValue(){return this.value}setOptions(t,e){return this.options=Object.assign(this.options,t),e&&(this.initCSSVars(),this.render()),this}getIcon(){return this.options.icon?this.options.icon:ue[this.options.type].icon}getVoidIcon(){return this.options.voidIcon?this.options.voidIcon:ue[this.options.type].voidIcon}get renderValue(){return this.hoverValue!==null?this.hoverValue:this.value}get scoreItems(){const t=[],e=this.renderValue;for(let a=1;a<=this.options.count;a++){const p=a-e,g=e>=a?1:p>=1?0:Number.parseFloat((1-p).toFixed(1));t.push({score:a,active:e>=a,proportion:g,width:`${g*100}%`})}return t}getScoreItemFromChild(t){return t.dataset.score?t:t.parentElement?this.getScoreItemFromChild(t.parentElement):null}emitChange(t){this.value!==t&&(this.options.onChange&&this.options.onChange(t),this.setValue(t))}scoreValueFormat(t){if(this.options.disabled||this.options.readonly)return null;const e=t.target,a=t.offsetX,p=this.getScoreItemFromChild(e);if(p){let g=Number(p.dataset.score);return this.options.allowHalf&&a<=g/2&&(g=g-.5),this.options.clearable&&this.value===g?0:g}return null}clickListener(t){const e=this.scoreValueFormat(t);e!==null&&this.emitChange(e)}onScoreHoverHandler(t){const e=this.scoreValueFormat(t);e!==null&&this.hoverValue!==e&&(this.hoverValue=e,this.render())}onScoreLeaveHandler(){this.hoverValue=null,this.render()}registerListeners(){this.removeListeners(),this.getScoreItemEl().forEach(t=>{t.addEventListener("click",this.clickListener),t.addEventListener("mouseenter",this.onScoreHoverHandler),t.addEventListener("mouseleave",this.onScoreLeaveHandler)})}removeListeners(){this.getScoreItemEl().forEach(t=>{t.removeEventListener("click",this.clickListener),t.removeEventListener("mouseenter",this.onScoreHoverHandler),t.removeEventListener("mouseleave",this.onScoreLeaveHandler)})}getScoreItemEl(){return this.getContainer().querySelectorAll(`.${j.scoreItemClassName}`)}initCSSVars(){_e(this.getContainer(),{"--starscore-size":ae(this.options.size),"--starscore-color":this.options.color,"--starscore-void-color":this.options.voidColor,"--starscore-disabled-color":this.options.disabledColor,"--starscore-gutter":ae(this.options.gutter),"--starscore-description-color":this.options.descriptionColor,"--starscore-description-font-size":ae(this.options.descriptionFontSize)})}generateRadioHTML(t){return`
      <div class="${j.scoreItemClassName}" data-score="${t.score}">
        <span class="${j.scoreVoidIconClassName}">${this.getVoidIcon()}</span>
        <span class="${j.scoreIconClassName}" style="width:${t.width}">${this.getIcon()}</span>
      </div>
    `}generateRadioGroupHTML(){const t=this.scoreItems.reduce((p,g)=>(p+=`${this.generateRadioHTML(g)}`,p),""),e=this.options.disabled?"disabled":"",a=this.options.readonly?"readonly":"";return`
      <div class="${j.scoreWrapperClassName} ${e} ${a}">${t}</div>
    `}generateScoreDescHTML(){if(!this.options.showDescription)return"";let t="";if(Array.isArray(this.options.scoreDetails)){const e=this.options.scoreDetails.find(a=>a.score===this.renderValue);e?t=e.description:t=""}else t=this.options.scoreDetails(this.renderValue);return`<div class="${j.scoreDescWrapperClassName}">${t}</div>`}render(){const t=this.getContainer(),e=`${this.generateRadioGroupHTML()}${this.generateScoreDescHTML()}`;ye(t,j.containerClassName),t.innerHTML=e,this.registerListeners()}destory(){this.removeListeners()}getContainer(){if(this.container)return this.container;const t=typeof this.options.container=="string"?document.querySelector(`${this.options.container}`):this.options.container;return t&&(this.container=t),t}}const T=l=>new Ce(l),$e=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),Fe=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,P=(l,t="starscore")=>l.replace("@/lib/main",t).replace("@/lib/interfaces/core",t),Ie={class:""},ke={class:"lang-markup"},Ae=m({name:"BasicUsage"}),Ee=m({...Ae,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",Ie,[v(a,{title:"Basic Usage","initial-expand":!0},{code:b(()=>[h("pre",ke,[h("code",null,V(C(P)(C(Fe))),1)])]),default:b(()=>[v($e)]),_:1})])}}}),Le=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1,size:25,color:"#ffd21e",voidColor:"#eee"}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),Me=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
      size: 25,
      color: '#ffd21e',
      voidColor: '#eee',
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,De={class:""},He={class:"lang-markup"},Ve=m({name:"CustomStyleUsage"}),Te=m({...Ve,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",De,[v(a,{title:"Custom Style"},{code:b(()=>[h("pre",He,[h("code",null,V(C(P)(C(Me))),1)])]),default:b(()=>[v(Le)]),_:1})])}}}),Pe=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:2.5,allowHalf:!0}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),ze=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 2.5,
      allowHalf: true,
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,Re={class:""},je={class:"lang-markup"},Ue=m({name:"HalfStarUsage"}),Be=m({...Ue,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",Re,[v(a,{title:"Half Star"},{code:b(()=>[h("pre",je,[h("code",null,V(C(P)(C(ze))),1)])]),default:b(()=>[v(Pe)]),_:1})])}}}),Oe=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1,count:6}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),Ge=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
      count: 6,
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,We={class:""},qe={class:"lang-markup"},Ne=m({name:"CustomCountUsage"}),Ze=m({...Ne,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",We,[v(a,{title:"Custom Count"},{code:b(()=>[h("pre",qe,[h("code",null,V(C(P)(C(Ge))),1)])]),default:b(()=>[v(Oe)]),_:1})])}}}),Xe=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:3,disabled:!0}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),Ye=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 3,
      disabled: true,
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,Je={class:""},Ke={class:"lang-markup"},Qe=m({name:"DisabledUsage"}),et=m({...Qe,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",Je,[v(a,{title:"Disabled"},{code:b(()=>[h("pre",Ke,[h("code",null,V(C(P)(C(Ye))),1)])]),default:b(()=>[v(Xe)]),_:1})])}}}),tt=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:3,readonly:!0}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),nt=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 3,
      readonly: true,
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,rt={class:""},at={class:"lang-markup"},st=m({name:"ReadonlyUsage"}),it=m({...st,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",rt,[v(a,{title:"Readonly"},{code:b(()=>[h("pre",at,[h("code",null,V(C(P)(C(nt))),1)])]),default:b(()=>[v(tt)]),_:1})])}}}),ot=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1,clearable:!0}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),ct=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
      clearable: true,
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,lt={class:""},ut=h("div",null,[re(" When the clearable prop is set to "),h("code",{class:"language-markup"},"true"),re(", clicking on the same value again will reset the value to "),h("code",{class:"language-markup"},"0"),re(". ")],-1),dt={class:"lang-markup"},pt=m({name:"ClearableUsage"}),gt=m({...pt,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",lt,[v(a,{title:"Clearable"},{description:b(()=>[ut]),code:b(()=>[h("pre",dt,[h("code",null,V(C(P)(C(ct))),1)])]),default:b(()=>[v(ot)]),_:1})])}}}),ft=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1,onChange(p){console.log(p)}}),console.log(e.value))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),ht=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
      onChange(score) {
        console.log(score)
      },
    })

    console.log(starscoreInstance.value)
  }
}

onMounted(() => {
  init()
})
<\/script>
`,mt={class:""},vt={class:"lang-markup"},_t=m({name:"ChangeEventUsage"}),yt=m({..._t,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",mt,[v(a,{title:"Change Event"},{code:b(()=>[h("pre",vt,[h("code",null,V(C(P)(C(ht))),1)])]),default:b(()=>[v(ft)]),_:1})])}}}),bt=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1,type:"heart"}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),St=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
      type: 'heart',
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,wt={class:""},xt={class:"lang-markup"},Ct=m({name:"BuiltInTypeUsage"}),$t=m({...Ct,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",wt,[v(a,{title:"Built-in icon Type"},{code:b(()=>[h("pre",xt,[h("code",null,V(C(P)(C(St))),1)])]),default:b(()=>[v(bt)]),_:1})])}}}),Ft=m({__name:"StarScore",setup(l){const t=x(),e=x(),a=()=>{t.value&&(e.value=T({container:t.value,initialValue:1,showDescription:!0,scoreDetails(p){return`${p}`}}))};return D(()=>{a()}),(p,g)=>(S(),w("div",{ref_key:"starscoreContainer",ref:t},null,512))}}),It=`<template>
  <div ref="starscoreContainer"></div>
</template>

<script lang="ts" setup>
import { createStarscore } from '@/lib/main'
import type { StarscoreInstance } from '@/lib/interfaces/core'
import { onMounted, ref } from 'vue'

const starscoreContainer = ref<HTMLElement>()
const starscoreInstance = ref<StarscoreInstance>()

const init = () => {
  if (starscoreContainer.value) {
    starscoreInstance.value = createStarscore({
      container: starscoreContainer.value,
      initialValue: 1,
      showDescription: true,
      scoreDetails(score) {
        return \`\${score}\`
      },
    })
  }
}

onMounted(() => {
  init()
})
<\/script>
`,kt={class:""},At={class:"lang-markup"},Et=m({name:"ShowDescriptionUsage"}),Lt=m({...Et,setup(l){return(t,e)=>{const a=H("DemoPanel");return S(),w("div",kt,[v(a,{title:"Show Description"},{code:b(()=>[h("pre",At,[h("code",null,V(C(P)(C(It))),1)])]),default:b(()=>[v(Ft)]),_:1})])}}}),Mt={class:"home-main"},Dt=m({__name:"HomeView",setup(l){return(t,e)=>(S(),w("main",Mt,[h("div",null,[v(Ee)]),h("div",null,[v($t)]),h("div",null,[v(Te)]),h("div",null,[v(Lt)]),h("div",null,[v(Be)]),h("div",null,[v(Ze)]),h("div",null,[v(gt)]),h("div",null,[v(et)]),h("div",null,[v(it)]),h("div",null,[v(yt)])]))}}),Ht=(l,t)=>{const e=l.__vccOpts||l;for(const[a,p]of t)e[a]=p;return e},Pt=Ht(Dt,[["__scopeId","data-v-60725f41"]]);export{Pt as default};
