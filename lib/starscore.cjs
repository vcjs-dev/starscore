"use strict";var d=Object.defineProperty;var g=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var n=(t,e,s)=>(g(t,typeof e!="symbol"?e+"":e,s),s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("fourdom");var o=(t=>(t.containerClassName="starscore-container",t.scoreWrapperClassName="starscore-radio-group",t.scoreItemClassName="starscore-radio",t.scoreIconClassName="starscore-radio__icon",t.scoreVoidIconClassName="starscore-radio__void-icon",t))(o||{});const u='<svg xmlns="http://www.w3.org/2000/svg" width="1em" class="icon" viewBox="0 0 1024 1024" fill="#FFA900" style="--svg-origin-width:200;--svg-origin-height:200;--svg-origin-width--with-unit:200px;--svg-origin-height--with-unit:200px;" data-svg-origin-width="200" data-svg-origin-height="200" font-size="200"><path d="M270.336 978.944c-57.344 29.696-95.232 3.072-83.968-61.44l46.08-268.288-194.56-190.464c-46.08-45.056-31.744-89.088 31.744-99.328l269.312-38.912L459.776 76.8c28.672-58.368 74.752-58.368 104.448 0l120.832 244.736 269.312 38.912c64.512 9.216 78.848 53.248 31.744 99.328l-194.56 189.44 46.08 268.288c11.264 63.488-26.624 91.136-83.968 61.44L512 851.968 270.336 978.944z"/></svg>',p='<svg xmlns="http://www.w3.org/2000/svg" width="1em" class="icon" viewBox="0 0 1024 1024" style="--svg-origin-width:200;--svg-origin-height:200;--svg-origin-width--with-unit:200px;--svg-origin-height--with-unit:200px;" data-svg-origin-width="200" data-svg-origin-height="200" font-size="200"><path d="m512 111.616 130.048 263.623 290.93 42.211-210.489 205.255 49.721 289.678L512 775.622 251.79 912.383l49.721-289.678L91.022 417.45l290.93-42.211L512 111.616m0-72.818a72.721 72.721 0 0 0-65.309 40.619L333.596 308.679l-253.042 36.75c-27.421 3.982-50.176 23.211-58.823 49.607a72.957 72.957 0 0 0 18.432 74.638l183.069 178.403-43.235 252.018c-4.665 27.307 6.599 54.955 29.013 71.225 12.629 9.216 27.762 13.881 42.781 13.881 11.605 0 23.211-2.731 33.906-8.419l226.304-118.898 226.304 119.011c10.695 5.575 22.301 8.419 33.906 8.419 15.133 0 30.151-4.665 42.781-13.881 22.414-16.27 33.678-43.918 29.013-71.225L800.77 648.19l183.069-178.403c19.797-19.342 26.965-48.242 18.432-74.638s-31.403-45.625-58.823-49.607l-253.042-36.75L577.311 79.53c-12.288-25.031-37.547-40.733-65.309-40.733z"/></svg>',a=t=>typeof t=="number"?`${t}px`:t;class l{constructor(e){n(this,"options",{container:"",count:5,size:"20px",gutter:"4px",color:"#ee0a24",voidColor:"#c8c9cc",disabledColor:"#c8c9cc",icon:"",voidIcon:"",clearable:!0,readonly:!1,disabled:!1,allowHalf:!1,scoreDetails:[{score:1,description:""},{score:2,description:""},{score:3,description:""},{score:4,description:""},{score:5,description:""}],onChange:()=>{}});n(this,"container",null);n(this,"value",0);this.options=Object.assign(this.options,e),this.clickListener=this.clickListener.bind(this),this.initCSSVars(),this.render()}setValue(e){return e<0?this.value=0:e>this.options.count?this.value=this.options.count:this.value=e,this.render(),this.options.onChange&&this.options.onChange(this.value),this}get scoreItems(){const e=[];for(let s=1;s<=this.options.count;s++){const i=s-this.value,r=this.value>=s?1:i>=1?0:Number.parseFloat((1-i).toFixed(1));e.push({score:s,active:this.value>=s,proportion:r,width:`${r*100}%`})}return e}getScoreItemFromChild(e){return e.dataset.score?e:e.parentElement?this.getScoreItemFromChild(e.parentElement):null}clickListener(e){const s=e.target,i=this.getScoreItemFromChild(s);if(i){const r=Number(i.dataset.score),h=this.options.clearable&&this.value===r?0:r;this.setValue(h)}}registerListeners(){this.removeListeners(),this.getScoreItemEl().forEach(e=>{e.addEventListener("click",this.clickListener)})}removeListeners(){this.getScoreItemEl().forEach(e=>{e.removeEventListener("click",this.clickListener)})}getScoreItemEl(){return this.getContainer().querySelectorAll(`.${o.scoreItemClassName}`)}initCSSVars(){c.css(this.getContainer(),{"--starscore-size":a(this.options.size),"--starscore-color":this.options.color,"--starscore-void-color":this.options.voidColor,"--starscore-disabled-color":this.options.disabledColor,"--starscore-gutter":a(this.options.gutter)})}generateRadioHTML(e){return`
      <div class="${o.scoreItemClassName}" data-score="${e.score}">
        <span class="${o.scoreVoidIconClassName}">${p}</span>
        <span class="${o.scoreIconClassName}" style="width:${e.width}">${u}</span>
      </div>
    `}generateRadioGroupHTML(){const e=this.scoreItems.reduce((s,i)=>(s+=`${this.generateRadioHTML(i)}`,s),"");return`
      <div class="${o.scoreWrapperClassName}">${e}</div>
    `}render(){const e=this.getContainer(),s=`${this.generateRadioGroupHTML()}`;c.addClass(e,o.containerClassName),e.innerHTML=s,this.registerListeners()}destory(){this.removeListeners()}getContainer(){if(this.container)return this.container;const e=typeof this.options.container=="string"?document.querySelector(`${this.options.container}`):this.options.container;return e&&(this.container=e),e}}const m=t=>new l(t);exports.Starscore=l;exports.createStarscore=m;
