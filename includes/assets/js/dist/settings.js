!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=107)}({107:function(e,t,n){jQuery,"undefined"==typeof noptinSettings&&(window.noptinSettings={}),window.noptinSettingsApp=n(108).default},108:function(e,t,n){"use strict";n.r(t);var o=n(22),r=n.n(o),i=(n(25),n(35)),s=new Vue({components:{"noptin-tooltip":r.a,"noptin-select":i.default},el:"#noptin-settings-app",data:jQuery.extend(!0,{},noptinSettings),methods:{switchTab:function(e){this.currentTab=e,this.currentSection="main"},switchSection:function(e){this.currentSection=e},tabClass:function(e){return this.currentTab===e?"nav-tab nav-tab-active":"nav-tab"},sectionClass:function(e){return this.currentSection===e?"current":""},saveSettings:function(){var e=jQuery;e(this.$el).fadeTo("fast",.33);var t=this.$data,n=this.error,o=this.saved,r=this.$el;e(this.$el).find(".noptin-save-saved").hide(),e(this.$el).find(".noptin-save-error").hide(),jQuery.post(noptin_params.ajaxurl,{_ajax_nonce:noptin_params.nonce,action:"noptin_save_options",state:t}).done((function(){e(r).fadeTo("fast",1).find(".noptin-save-saved").show().html("<p>".concat(o,"</p>"))})).fail((function(){e(r).fadeTo("fast",1).find(".noptin-save-error").show().html("<p>".concat(n,"</p>"))}))},upload_image:function(e){var t=this,n=wp.media({title:"Upload Image",multiple:!1}).open().on("select",(function(o){var r=n.state().get("selection").first();r.toJSON().sizes.large?t[e]=r.toJSON().sizes.large.url:t[e]=r.toJSON().sizes.full.url}))}},mounted:function(){}});t.default=s},20:function(e,t,n){"use strict";var o=n(21),r=n.n(o);t.default=r.a},21:function(e,t){e.exports={props:["value","tags"],mounted:function(){var e=this,t="yes"==this.tags;jQuery(this.$el).select2({width:"resolve",tags:t}).val(this.value).trigger("change.select2").on("change",(function(t){e.$emit("input",jQuery(t.currentTarget).val())}))},watch:{value:function(e){jQuery(this.$el).val(e).trigger("change.select2")}},destroyed:function(){jQuery(this.$el).off().select2("destroy")}}},22:function(e,t,n){e.exports=function(e){"use strict";function t(e,t,n){e&&t&&n&&(document.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n))}function n(e,t,n){e&&t&&(document.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n))}e=e&&e.hasOwnProperty("default")?e.default:e;var o={props:{tagName:{type:String,default:"span"},trigger:{type:String,default:"hover",validator:function(e){return["clickToOpen","click","clickToToggle","hover","focus"].indexOf(e)>-1}},delayOnMouseOver:{type:Number,default:10},delayOnMouseOut:{type:Number,default:10},disabled:{type:Boolean,default:!1},content:String,enterActiveClass:String,leaveActiveClass:String,boundariesSelector:String,reference:{},forceShow:{type:Boolean,default:!1},dataValue:{default:null},appendToBody:{type:Boolean,default:!1},visibleArrow:{type:Boolean,default:!0},transition:{type:String,default:""},stopPropagation:{type:Boolean,default:!1},preventDefault:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},rootClass:{type:String,default:""}},data:function(){return{referenceElm:null,popperJS:null,showPopper:!1,currentPlacement:"",popperOptions:{placement:"bottom",computeStyle:{gpuAcceleration:!1}}}},watch:{showPopper:function(e){e?(this.$emit("show",this),this.popperJS&&this.popperJS.enableEventListeners(),this.updatePopper()):(this.popperJS&&this.popperJS.disableEventListeners(),this.$emit("hide",this))},forceShow:{handler:function(e){this[e?"doShow":"doClose"]()},immediate:!0},disabled:function(e){e&&(this.showPopper=!1)}},created:function(){this.appendedArrow=!1,this.appendedToBody=!1,this.popperOptions=Object.assign(this.popperOptions,this.options)},mounted:function(){switch(this.referenceElm=this.reference||this.$slots.reference[0].elm,this.popper=this.$slots.default[0].elm,this.trigger){case"clickToOpen":t(this.referenceElm,"click",this.doShow),t(document,"click",this.handleDocumentClick);break;case"click":case"clickToToggle":t(this.referenceElm,"click",this.doToggle),t(document,"click",this.handleDocumentClick);break;case"hover":t(this.referenceElm,"mouseover",this.onMouseOver),t(this.popper,"mouseover",this.onMouseOver),t(this.referenceElm,"mouseout",this.onMouseOut),t(this.popper,"mouseout",this.onMouseOut);break;case"focus":t(this.referenceElm,"focus",this.onMouseOver),t(this.popper,"focus",this.onMouseOver),t(this.referenceElm,"blur",this.onMouseOut),t(this.popper,"blur",this.onMouseOut)}},methods:{doToggle:function(e){this.stopPropagation&&e.stopPropagation(),this.preventDefault&&e.preventDefault(),this.forceShow||(this.showPopper=!this.showPopper)},doShow:function(){this.showPopper=!0},doClose:function(){this.showPopper=!1},doDestroy:function(){this.showPopper||(this.popperJS&&(this.popperJS.destroy(),this.popperJS=null),this.appendedToBody&&(this.appendedToBody=!1,document.body.removeChild(this.popper.parentElement)))},createPopper:function(){var t=this;this.$nextTick((function(){if(t.visibleArrow&&t.appendArrow(t.popper),t.appendToBody&&!t.appendedToBody&&(t.appendedToBody=!0,document.body.appendChild(t.popper.parentElement)),t.popperJS&&t.popperJS.destroy&&t.popperJS.destroy(),t.boundariesSelector){var n=document.querySelector(t.boundariesSelector);n&&(t.popperOptions.modifiers=Object.assign({},t.popperOptions.modifiers),t.popperOptions.modifiers.preventOverflow=Object.assign({},t.popperOptions.modifiers.preventOverflow),t.popperOptions.modifiers.preventOverflow.boundariesElement=n)}t.popperOptions.onCreate=function(){t.$emit("created",t),t.$nextTick(t.updatePopper)},t.popperJS=new e(t.referenceElm,t.popper,t.popperOptions)}))},destroyPopper:function(){n(this.referenceElm,"click",this.doToggle),n(this.referenceElm,"mouseup",this.doClose),n(this.referenceElm,"mousedown",this.doShow),n(this.referenceElm,"focus",this.doShow),n(this.referenceElm,"blur",this.doClose),n(this.referenceElm,"mouseout",this.onMouseOut),n(this.referenceElm,"mouseover",this.onMouseOver),n(document,"click",this.handleDocumentClick),this.showPopper=!1,this.doDestroy()},appendArrow:function(e){if(!this.appendedArrow){this.appendedArrow=!0;var t=document.createElement("div");t.setAttribute("x-arrow",""),t.className="popper__arrow",e.appendChild(t)}},updatePopper:function(){this.popperJS?this.popperJS.scheduleUpdate():this.createPopper()},onMouseOver:function(){var e=this;clearTimeout(this._timer),this._timer=setTimeout((function(){e.showPopper=!0}),this.delayOnMouseOver)},onMouseOut:function(){var e=this;clearTimeout(this._timer),this._timer=setTimeout((function(){e.showPopper=!1}),this.delayOnMouseOut)},handleDocumentClick:function(e){this.$el&&this.referenceElm&&!this.elementContains(this.$el,e.target)&&!this.elementContains(this.referenceElm,e.target)&&this.popper&&!this.elementContains(this.popper,e.target)&&(this.$emit("documentClick",this),this.forceShow||(this.showPopper=!1))},elementContains:function(e,t){return"function"==typeof e.contains&&e.contains(t)}},destroyed:function(){this.destroyPopper()}};const r=o;return o.__file="popper.js.vue",function(e,t,n,o,r,i,s,a,p,f){"function"==typeof s&&(s,s=!1);const u="function"==typeof n?n.options:n;let c;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),c)if(u.functional){const e=u.render;u.render=function(t,n){return c.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,c):[c]}return n}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tagName,{tag:"component"},[n("transition",{attrs:{name:e.transition,"enter-active-class":e.enterActiveClass,"leave-active-class":e.leaveActiveClass},on:{"after-leave":e.doDestroy}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&e.showPopper,expression:"!disabled && showPopper"}],ref:"popper",class:e.rootClass},[e._t("default",[e._v(e._s(e.content))])],2)]),e._v(" "),e._t("reference")],2)},staticRenderFns:[]},0,r,0,0,0,void 0)}(n(74))},25:function(e,t,n){"use strict";t.a={templateData:function(e){var t={};if(noptinEditor&&noptinEditor.templates[e]){var n=noptinEditor.templates[e].data;Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},applyTemplate:function(e,t){Object.keys(e).forEach((function(n){console.log(e[n]),t[n]=e[n]})),t.hideFields=!1,t.gdprCheckbox=!1,this.updateFormSizes(t)},updateFormSizes:function(e){return"sidebar"==e.optinType?(e.formHeight="400px",e.formWidth="300px",void(e.singleLine=!1)):"popup"==e.optinType?(e.formWidth="620px",void(e.formHeight="280px")):"slide_in"==e.optinType?(e.formWidth="400px",void(e.formHeight="280px")):(e.formHeight="280px",void(e.formWidth="620px"))},updateCustomCss:function(e){jQuery("#formCustomCSS").text(e)},getColorThemeOptions:function(){var e=[];return Object.keys(noptinEditor.color_themes).forEach((function(t){var n={text:t,value:noptinEditor.color_themes[t],imageSrc:noptin_params.icon};e.push(n)})),e},getColorTheme:function(e){return e.colorTheme.split(" ")},changeColorTheme:function(e){var t=this.getColorTheme(e);t.length&&(e.noptinFormBg=t[0],e.formBorder.border_color=t[2],e.noptinButtonColor=t[0],e.noptinButtonBg=t[1],e.titleColor=t[1],e.descriptionColor=t[1],e.noteColor=t[1])},getFormData:function(e){var t={},n=jQuery(e).serializeArray();return jQuery.each(n,(function(e,n){t[n.name]=n.value})),t}}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){var e=this.$createElement;return(this._self._c||e)("select",{staticStyle:{width:"100%"}},[this._t("default")],2)},r=[];o._withStripped=!0},35:function(e,t,n){"use strict";var o=n(26),r=n(20),i=n(7),s=Object(i.a)(r.default,o.a,o.b,!1,null,null,null);s.options.__file="includes/assets/js/src/partials/noptin-select.vue",t.default=s.exports},42:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},7:function(e,t,n){"use strict";function o(e,t,n,o,r,i,s,a){var p,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=p):r&&(p=a?function(){r.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:r),p)if(f.functional){f._injectStyles=p;var u=f.render;f.render=function(e,t){return p.call(t),u(e,t)}}else{var c=f.beforeCreate;f.beforeCreate=c?[].concat(c,p):[p]}return{exports:e,options:f}}n.d(t,"a",(function(){return o}))},74:function(e,t,n){"use strict";n.r(t),function(e){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,o=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(n&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var r=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),o))}};function i(e){return e&&"[object Function]"==={}.toString.call(e)}function s(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function a(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function p(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=s(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:p(a(e))}function f(e){return e&&e.referenceNode?e.referenceNode:e}var u=n&&!(!window.MSInputMethodContext||!document.documentMode),c=n&&/MSIE 10/.test(navigator.userAgent);function l(e){return 11===e?u:10===e?c:u||c}function d(e){if(!e)return document.documentElement;for(var t=l(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===s(n,"position")?d(n):n:e?e.ownerDocument.documentElement:document.documentElement}function h(e){return null!==e.parentNode?h(e.parentNode):e}function m(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var s,a,p=i.commonAncestorContainer;if(e!==p&&t!==p||o.contains(r))return"BODY"===(a=(s=p).nodeName)||"HTML"!==a&&d(s.firstElementChild)!==s?d(p):p;var f=h(e);return f.host?m(f.host,t):m(e,h(t).host)}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=v(t,"top"),r=v(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function b(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+o+"Width"])}function w(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],l(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function y(e){var t=e.body,n=e.documentElement,o=l(10)&&getComputedStyle(n);return{height:w("Height",t,n,o),width:w("Width",t,n,o)}}var O=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function T(e){return S({},e,{right:e.left+e.width,bottom:e.top+e.height})}function C(e){var t={};try{if(l(10)){t=e.getBoundingClientRect();var n=v(e,"top"),o=v(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?y(e.ownerDocument):{},a=i.width||e.clientWidth||r.width,p=i.height||e.clientHeight||r.height,f=e.offsetWidth-a,u=e.offsetHeight-p;if(f||u){var c=s(e);f-=b(c,"x"),u-=b(c,"y"),r.width-=f,r.height-=u}return T(r)}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=l(10),r="HTML"===t.nodeName,i=C(e),a=C(t),f=p(e),u=s(t),c=parseFloat(u.borderTopWidth),d=parseFloat(u.borderLeftWidth);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var h=T({top:i.top-a.top-c,left:i.left-a.left-d,width:i.width,height:i.height});if(h.marginTop=0,h.marginLeft=0,!o&&r){var m=parseFloat(u.marginTop),v=parseFloat(u.marginLeft);h.top-=c-m,h.bottom-=c-m,h.left-=d-v,h.right-=d-v,h.marginTop=m,h.marginLeft=v}return(o&&!n?t.contains(f):t===f&&"BODY"!==f.nodeName)&&(h=g(h,t)),h}function M(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=_(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:v(n),a=t?0:v(n,"left"),p={top:s-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:r,height:i};return T(p)}function P(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===s(e,"position"))return!0;var n=a(e);return!!n&&P(n)}function k(e){if(!e||!e.parentElement||l())return document.documentElement;for(var t=e.parentElement;t&&"none"===s(t,"transform");)t=t.parentElement;return t||document.documentElement}function j(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},s=r?k(e):m(e,f(t));if("viewport"===o)i=M(s,r);else{var u=void 0;"scrollParent"===o?"BODY"===(u=p(a(t))).nodeName&&(u=e.ownerDocument.documentElement):u="window"===o?e.ownerDocument.documentElement:o;var c=_(u,s,r);if("HTML"!==u.nodeName||P(s))i=c;else{var l=y(e.ownerDocument),d=l.height,h=l.width;i.top+=c.top-c.marginTop,i.bottom=d+c.top,i.left+=c.left-c.marginLeft,i.right=h+c.left}}var v="number"==typeof(n=n||0);return i.left+=v?n:n.left||0,i.top+=v?n:n.top||0,i.right-=v?n:n.right||0,i.bottom-=v?n:n.bottom||0,i}function D(e){return e.width*e.height}function L(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=j(n,o,i,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map((function(e){return S({key:e},a[e],{area:D(a[e])})})).sort((function(e,t){return t.area-e.area})),f=p.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),u=f.length>0?f[0].key:p[0].key,c=e.split("-")[1];return u+(c?"-"+c:"")}function N(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=o?k(t):m(t,f(n));return _(n,r,o)}function B(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function F(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function A(e,t,n){n=n.split("-")[0];var o=B(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),s=i?"top":"left",a=i?"left":"top",p=i?"height":"width",f=i?"width":"height";return r[s]=t[s]+t[p]/2-o[p]/2,r[a]=n===a?t[a]-o[f]:t[F(a)],r}function H(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function $(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=H(e,(function(e){return e[t]===n}));return e.indexOf(o)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&i(n)&&(t.offsets.popper=T(t.offsets.popper),t.offsets.reference=T(t.offsets.reference),t=n(t,e))})),t}function W(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=L(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=A(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=$(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function R(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function J(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function I(){return this.state.isDestroyed=!0,R(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[J("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function U(e){var t=e.ownerDocument;return t?t.defaultView:window}function V(e,t,n,o){n.updateBound=o,U(e).addEventListener("resize",n.updateBound,{passive:!0});var r=p(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,s=i?t.ownerDocument.defaultView:t;s.addEventListener(n,o,{passive:!0}),i||e(p(s.parentNode),n,o,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function Q(){this.state.eventsEnabled||(this.state=V(this.reference,this.options,this.state,this.scheduleUpdate))}function z(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,U(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function Y(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function q(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Y(t[n])&&(o="px"),e.style[n]=t[n]+o}))}var G=n&&/Firefox/i.test(navigator.userAgent);function X(e,t,n){var o=H(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var K=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Z=K.slice(3);function ee(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z.indexOf(e),o=Z.slice(n+1).concat(Z.slice(0,n));return t?o.reverse():o}var te="flip",ne="clockwise",oe="counterclockwise";function re(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),s=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=s.indexOf(H(s,(function(e){return-1!==e.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var p=/\s*,\s*|\s+/,f=-1!==a?[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1]].concat(s.slice(a+1))]:[s];return(f=f.map((function(e,o){var r=(1===o?!i:i)?"height":"width",s=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],s=r[2];if(!i)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=o}return T(a)[t]/100*i}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}(e,r,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,o){Y(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}var ie={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),p=a?"left":"top",f=a?"width":"height",u={start:x({},p,i[p]),end:x({},p,i[p]+i[f]-s[f])};e.offsets.popper=S({},s,u[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,s=r.reference,a=o.split("-")[0],p=void 0;return p=Y(+n)?[+n,0]:re(n,i,s,a),"left"===a?(i.top+=p[0],i.left-=p[1]):"right"===a?(i.top+=p[0],i.left+=p[1]):"top"===a?(i.left+=p[0],i.top-=p[1]):"bottom"===a&&(i.left+=p[0],i.top+=p[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||d(e.instance.popper);e.instance.reference===n&&(n=d(n));var o=J("transform"),r=e.instance.popper.style,i=r.top,s=r.left,a=r[o];r.top="",r.left="",r[o]="";var p=j(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=s,r[o]=a,t.boundaries=p;var f=t.priority,u=e.offsets.popper,c={primary:function(e){var n=u[e];return u[e]<p[e]&&!t.escapeWithReference&&(n=Math.max(u[e],p[e])),x({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=u[n];return u[e]>p[e]&&!t.escapeWithReference&&(o=Math.min(u[n],p[e]-("right"===e?u.width:u.height))),x({},n,o)}};return f.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=S({},u,c[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",p=s?"left":"top",f=s?"width":"height";return n[a]<i(o[p])&&(e.offsets.popper[p]=i(o[p])-n[f]),n[p]>i(o[a])&&(e.offsets.popper[p]=i(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!X(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,a=i.popper,p=i.reference,f=-1!==["left","right"].indexOf(r),u=f?"height":"width",c=f?"Top":"Left",l=c.toLowerCase(),d=f?"left":"top",h=f?"bottom":"right",m=B(o)[u];p[h]-m<a[l]&&(e.offsets.popper[l]-=a[l]-(p[h]-m)),p[l]+m>a[h]&&(e.offsets.popper[l]+=p[l]+m-a[h]),e.offsets.popper=T(e.offsets.popper);var v=p[l]+p[u]/2-m/2,g=s(e.instance.popper),b=parseFloat(g["margin"+c]),w=parseFloat(g["border"+c+"Width"]),y=v-e.offsets.popper[l]-b-w;return y=Math.max(Math.min(a[u]-m,y),0),e.arrowElement=o,e.offsets.arrow=(x(n={},l,Math.round(y)),x(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(R(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=j(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=F(o),i=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case te:s=[o,r];break;case ne:s=ee(o);break;case oe:s=ee(o,!0);break;default:s=t.behavior}return s.forEach((function(a,p){if(o!==a||s.length===p+1)return e;o=e.placement.split("-")[0],r=F(o);var f=e.offsets.popper,u=e.offsets.reference,c=Math.floor,l="left"===o&&c(f.right)>c(u.left)||"right"===o&&c(f.left)<c(u.right)||"top"===o&&c(f.bottom)>c(u.top)||"bottom"===o&&c(f.top)<c(u.bottom),d=c(f.left)<c(n.left),h=c(f.right)>c(n.right),m=c(f.top)<c(n.top),v=c(f.bottom)>c(n.bottom),g="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),O=w||y;(l||g||O)&&(e.flipped=!0,(l||g)&&(o=s[p+1]),O&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=S({},e.offsets.popper,A(e.instance.popper,e.offsets.reference,e.placement)),e=$(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=i[n]-(a?r[s?"width":"height"]:0),e.placement=F(t),e.offsets.popper=T(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!X(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=H(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=H(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==i?i:t.gpuAcceleration,a=d(e.instance.popper),p=C(a),f={position:r.position},u=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,s=Math.floor,a=function(e){return e},p=i(r.width),f=i(o.width),u=-1!==["left","right"].indexOf(e.placement),c=-1!==e.placement.indexOf("-"),l=t?u||c||p%2==f%2?i:s:a,d=t?i:a;return{left:l(p%2==1&&f%2==1&&!c&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:l(o.right)}}(e,window.devicePixelRatio<2||!G),c="bottom"===n?"top":"bottom",l="right"===o?"left":"right",h=J("transform"),m=void 0,v=void 0;if(v="bottom"===c?"HTML"===a.nodeName?-a.clientHeight+u.bottom:-p.height+u.bottom:u.top,m="right"===l?"HTML"===a.nodeName?-a.clientWidth+u.right:-p.width+u.right:u.left,s&&h)f[h]="translate3d("+m+"px, "+v+"px, 0)",f[c]=0,f[l]=0,f.willChange="transform";else{var g="bottom"===c?-1:1,b="right"===l?-1:1;f[c]=v*g,f[l]=m*b,f.willChange=c+", "+l}var w={"x-placement":e.placement};return e.attributes=S({},w,e.attributes),e.styles=S({},f,e.styles),e.arrowStyles=S({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return q(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&q(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=N(r,t,e,n.positionFixed),s=L(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),q(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},se=function(){function e(t,n){var o=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};O(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=r(this.update.bind(this)),this.options=S({},e.Defaults,s),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(S({},e.Defaults.modifiers,s.modifiers)).forEach((function(t){o.options.modifiers[t]=S({},e.Defaults.modifiers[t]||{},s.modifiers?s.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return S({name:e},o.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&i(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)})),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return E(e,[{key:"update",value:function(){return W.call(this)}},{key:"destroy",value:function(){return I.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return z.call(this)}}]),e}();se.Utils=("undefined"!=typeof window?window:e).PopperUtils,se.placements=K,se.Defaults=ie,t.default=se}.call(this,n(42))}});