/*! For license information please see 131.85924f52.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[131],{321:function(t,r,e){e.d(r,{a:function(){return i}});var n=e(881),o=e(184),i=function(){return(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"300px"},children:(0,o.jsx)(n.s5,{strokeColor:"blue",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})})}},256:function(t,r,e){e.d(r,{Bt:function(){return s},Ch:function(){return h},cu:function(){return a},y:function(){return u},zT:function(){return c}});var n=e(861),o=e(243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:I(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function x(){}var w={};h(w,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(_([])));j&&j!==e&&n.call(j,c)&&(w=j);var k=x.prototype=g.prototype=Object.create(w);function Z(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function I(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function N(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,N(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=h(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},Z(L.prototype),h(L.prototype,u,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(k),h(k,s,"Generator"),h(k,c,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=_,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:_(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var a=function(){var t=(0,n.Z)(i().mark((function t(){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3","/trending/all/day",r={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc"},t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3").concat("/trending/all/day","?"),{headers:r});case 5:return e=t.sent,t.abrupt("return",e.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3",e="/movie/".concat(r),n={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc"},t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3").concat(e,"?language=en-US"),{headers:n});case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3",e="/movie/".concat(r,"/credits"),n={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc"},t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3").concat(e,"?language=en-US"),{headers:n});case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3",e="/movie/".concat(r,"/reviews"),n={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc"},t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3").concat(e,"?language=en-US&page=1"),{headers:n});case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3","/search/movie",e={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc"},t.next=5,o.Z.get("".concat("https://api.themoviedb.org/3").concat("/search/movie","?query=").concat(r),{headers:e});case 5:return n=t.sent,t.abrupt("return",n.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},131:function(t,r,e){e.r(r),e.d(r,{default:function(){return O}});var n,o,i,a,c,u,s,h=e(861),l=e(439),f=e(791),p=e(689),v=e(256),d=e(168),y=e(867),g=e(87),m=y.ZP.img(n||(n=(0,d.Z)(["\n  width: 290px;\n  height: 480px;\n  margin-bottom: 12px;\n  border-radius: 5px;\n"]))),x=y.ZP.div(o||(o=(0,d.Z)(["\n  margin-top: 35px;\n  margin-left: 40px;\n  width: 1000px;\n"]))),w=y.ZP.p(i||(i=(0,d.Z)(["\n  margin-top: 30px;\n  font-size: 17px;\n"]))),b=y.ZP.h3(a||(a=(0,d.Z)(["\n  margin-top: 187px;\n  margin-bottom: 20px;\n"]))),j=y.ZP.div(c||(c=(0,d.Z)(["\n  margin-top: 30px;\n"]))),k=y.ZP.div(u||(u=(0,d.Z)(["\n  display: flex;\n  margin-top: 30px;\n  margin-left: 40px;\n"]))),Z=(0,y.ZP)(g.OL)(s||(s=(0,d.Z)(["\n  font-size: 15px;\n  font-weight: 400;\n  display: block;\n  padding-top: 15px;\n  margin-left: 20px;\n  color: black;\n\n  &.active {\n    color: blue;\n  }\n"]))),L=e(321),I=e(184);function N(){N=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:L(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var f="suspendedStart",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(_([])));b&&b!==e&&n.call(b,a)&&(x=b);var j=m.prototype=y.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function L(r,e,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function I(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,I(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},k(Z.prototype),s(Z.prototype,c,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=_,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:_(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}var O=function(){var t,r,e=(0,p.UO)(),n=(0,f.useState)(null),o=(0,l.Z)(n,2),i=o[0],a=o[1],c=(0,p.TH)(),u=(0,f.useRef)(null!==(t=null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"),s=(0,f.useState)(!1),d=(0,l.Z)(s,2),y=d[0],g=d[1];return(0,f.useEffect)((function(){function t(){return(t=(0,h.Z)(N().mark((function t(){var r;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,v.zT)(e.movieId);case 4:r=t.sent,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,I.jsxs)("div",{children:[y&&(0,I.jsx)(L.a,{}),i&&(0,I.jsxs)("div",{children:[(0,I.jsx)(Z,{to:u.current,children:"\u2190 Go back"}),(0,I.jsxs)(k,{children:[(0,I.jsx)(m,{src:"https://image.tmdb.org/t/p/original".concat(i.poster_path),alt:i.original_title}),(0,I.jsxs)(x,{children:[(0,I.jsx)("h2",{children:i.original_title||i.name}),(0,I.jsxs)(w,{children:["User Scores: ",i.vote_average," %"]}),(0,I.jsx)(b,{children:"Overview"}),(0,I.jsx)("p",{children:i.overview}),(0,I.jsx)(j,{children:i.genres&&(0,I.jsxs)("div",{children:[(0,I.jsx)("h3",{style:{marginBottom:"20px"},children:"Genres:"}),i.genres.map((function(t){return t.name})).join(", ")]})})]})]}),(0,I.jsxs)("ul",{style:{display:"flex",flexDirection:"row",marginLeft:"40px",gap:"10px",marginBottom:"10px"},children:[(0,I.jsx)("li",{children:(0,I.jsx)(Z,{to:"cast",children:"Cast"})}),(0,I.jsx)("li",{children:(0,I.jsx)(Z,{to:"review",children:"Review"})})]}),(0,I.jsx)(f.Suspense,{children:(0,I.jsx)(p.j3,{})})]})]})}}}]);
//# sourceMappingURL=131.85924f52.chunk.js.map