"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[148],{185:function(t,n,e){e.d(n,{dVI:function(){return d}});var r=e(791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},i.apply(this,arguments)},s=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e};function c(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),c(t.child))}))}function u(t){return function(n){return r.createElement(l,i({attr:i({},t.attr)},n),c(t.child))}}function l(t){var n=function(n){var e,o=t.attr,a=t.size,c=t.title,u=s(t,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(e=n.className),t.className&&(e=(e?e+" ":"")+t.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,u,{className:e,style:i(i({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(t){return n(t)})):n(o)}function d(t){return u({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}},218:function(t,n,e){e.d(n,{x7:function(){return Et},ZP:function(){return kt}});var r=e(168),o=e(439),a=e(433),i=e(413),s=e(791),c=e(942),u={data:""},l=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||u},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=function t(n,e){var r="",o="",a="",i=function(i){var s=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":o+="f"==i[1]?t(s,i):i+"{"+t(s,"k"==i[1]?"":e)+"}":"object"==typeof s?o+=t(s,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,s):i+":"+s+";")};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},v={},g=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},h=function(t,n,e,r,o){var a=g(t),i=v[a]||(v[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!v[i]){var s=a!==t?t:function(t){for(var n,e,r=[{}];n=d.exec(t.replace(f,""));)n[4]?r.shift():n[3]?(e=n[3].replace(p," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(p," ").trim();return r[0]}(t);v[i]=m(o?(0,c.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var u=e&&v.g?v.g:null;return e&&(v.g=v[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(v[i],n,r,u),i},y=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":m(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function b(t){var n=this||{},e=t.call?t(n.p):t;return h(e.unshift?e.raw?y(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,l(n.target),n.g,n.o,n.k)}b.bind({g:1});var Z,x,w,E,k,O,C,j,N,z,P,I,A,D,M,_,S,T,F,H=b.bind({k:1});function L(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:x&&x()},s),e.o=/ *go\d+/.test(c),s.className=b.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),w&&u[0]&&w(s),Z(u,s)}return n?n(o):o}}var B=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},U=function(){var t=0;return function(){return(++t).toString()}}(),q=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),R=new Map,V=function(t){if(!R.has(t)){var n=setTimeout((function(){R.delete(t),G({type:4,toastId:t})}),1e3);R.set(t,n)}},W=function t(n,e){switch(e.type){case 0:return(0,i.Z)((0,i.Z)({},n),{},{toasts:[e.toast].concat((0,a.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=R.get(t);n&&clearTimeout(n)}(e.toast.id),(0,i.Z)((0,i.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?(0,i.Z)((0,i.Z)({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var o=e.toastId;return o?V(o):n.toasts.forEach((function(t){V(t.id)})),(0,i.Z)((0,i.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?(0,i.Z)((0,i.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?(0,i.Z)((0,i.Z)({},n),{},{toasts:[]}):(0,i.Z)((0,i.Z)({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return(0,i.Z)((0,i.Z)({},n),{},{pausedAt:e.time});case 6:var s=e.time-(n.pausedAt||0);return(0,i.Z)((0,i.Z)({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{pauseDuration:t.pauseDuration+s})}))})}},Y=[],$={toasts:[],pausedAt:void 0},G=function(t){$=W($,t),Y.forEach((function(t){t($)}))},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,i.Z)((0,i.Z)({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||U()})}(n,t,e);return G({type:2,toast:r}),r.id}},Q=function(t,n){return K("blank")(t,n)};Q.error=K("error"),Q.success=K("success"),Q.loading=K("loading"),Q.custom=K("custom"),Q.dismiss=function(t){G({type:3,toastId:t})},Q.remove=function(t){return G({type:4,toastId:t})},Q.promise=function(t,n,e){var r=Q.loading(n.loading,(0,i.Z)((0,i.Z)({},e),null==e?void 0:e.loading));return t.then((function(t){return Q.success(B(n.success,t),(0,i.Z)((0,i.Z)({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){Q.error(B(n.error,t),(0,i.Z)((0,i.Z)({id:r},e),null==e?void 0:e.error))})),t};var X=function(t,n){G({type:1,toast:{id:t,height:n}})},tt=function(){G({type:5,time:Date.now()})},nt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,s.useState)($),e=(0,o.Z)(n,2),r=e[0],a=e[1];(0,s.useEffect)((function(){return Y.push(a),function(){var t=Y.indexOf(a);t>-1&&Y.splice(t,1)}}),[r]);var c=r.toasts.map((function(n){var e,r;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||J[n.type],style:(0,i.Z)((0,i.Z)((0,i.Z)({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return(0,i.Z)((0,i.Z)({},r),{},{toasts:c})}(t),e=n.toasts,r=n.pausedAt;(0,s.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return Q.dismiss(n.id)}),e);n.visible&&Q.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var c=(0,s.useCallback)((function(){r&&G({type:6,time:Date.now()})}),[r]),u=(0,s.useCallback)((function(t,n){var r,o=n||{},i=o.reverseOrder,s=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,l=o.defaultPosition,d=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),f=d.findIndex((function(n){return n.id===t.id})),p=d.filter((function(t,n){return n<f&&t.visible})).length;return(r=d.filter((function(t){return t.visible}))).slice.apply(r,(0,a.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:X,startPause:tt,endPause:c,calculateOffset:u}}},et=H(E||(E=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),rt=H(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ot=H(O||(O=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),at=L("div")(C||(C=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),et,rt,(function(t){return t.secondary||"#fff"}),ot),it=H(j||(j=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),st=L("div")(N||(N=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),it),ct=H(z||(z=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ut=H(P||(P=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),lt=L("div")(I||(I=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),ct,ut,(function(t){return t.secondary||"#fff"})),dt=L("div")(A||(A=(0,r.Z)(["\n  position: absolute;\n"]))),ft=L("div")(D||(D=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),pt=H(M||(M=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),mt=L("div")(_||(_=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),pt),vt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?s.createElement(mt,null,e):e:"blank"===r?null:s.createElement(ft,null,s.createElement(st,(0,i.Z)({},o)),"loading"!==r&&s.createElement(dt,null,"error"===r?s.createElement(at,(0,i.Z)({},o)):s.createElement(lt,(0,i.Z)({},o))))},gt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},ht=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},yt=L("div")(S||(S=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),bt=L("div")(T||(T=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Zt=s.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,c=n.height?function(t,n){var e=t.includes("top")?1:-1,r=q()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[gt(e),ht(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:n?"".concat(H(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(H(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},u=s.createElement(vt,{toast:n}),l=s.createElement(bt,(0,i.Z)({},n.ariaProps),B(n.message,n));return s.createElement(yt,{className:n.className,style:(0,i.Z)((0,i.Z)((0,i.Z)({},c),r),n.style)},"function"==typeof a?a({icon:u,message:l}):s.createElement(s.Fragment,null,u,l))}));!function(t,n,e,r){m.p=n,Z=t,x=e,w=r}(s.createElement);var xt=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=s.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return s.createElement("div",{ref:i,className:e,style:r},a)},wt=b(F||(F=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Et=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,c=t.children,u=t.containerStyle,l=t.containerClassName,d=nt(o),f=d.toasts,p=d.handlers;return s.createElement("div",{style:(0,i.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return(0,i.Z)((0,i.Z)({left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return s.createElement(xt,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?wt:"",style:o},"custom"===t.type?B(t.message,t):c?c(t):s.createElement(Zt,{toast:t,position:e}))})))},kt=Q}}]);
//# sourceMappingURL=148.c70bf19d.chunk.js.map