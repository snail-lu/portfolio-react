"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[362],{3362:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(5671),o=n(3144),c=n(9340),i=n(8557),u=n(2791),f="DigitalClock_clock_container__tSBH5",a="DigitalClock_normal__Ztocx",l="DigitalClock_current__0Uo6m",s="DigitalClock_clock_item__YT211",p=n(184),y=function(t){(0,c.Z)(n,t);var e=(0,i.Z)(n);function n(t){var o;return(0,r.Z)(this,n),(o=e.call(this,t)).getCurrentTime=function(){var t=o.state.clockArray,e=new Date,n=e.getHours();n>19&&(t[1]=[0,1,2,3]);var r=(n=n<10?"0"+n:n+"").split(""),c=e.getMinutes(),i=(c=c<10?"0"+c:c+"").split(""),u=e.getSeconds(),f=(u=u<10?"0"+u:u+"").split(""),a=r.concat(i,f);o.setState({h:r,m:i,s:f,currentTime:a,clockArray:t})},o.state={clockArray:[[0,1,2],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9]]},o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.getCurrentTime()}),200)}},{key:"render",value:function(){var t=this.state,e=t.clockArray,n=t.currentTime,r=void 0===n?[]:n;return(0,p.jsx)("div",{className:f,children:e.map((function(t,e){return(0,p.jsx)("div",{className:s,style:{marginTop:30*(1-r[e])+"px"},children:(0,p.jsx)("div",{children:t.map((function(t){return(0,p.jsx)("div",{className:t==r[e]?l:a,children:t},t)}))},t[0].toString())},e)}))})}}]),n}(u.Component)},7326:function(t,e,n){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},5671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return o}})},8557:function(t,e,n){function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return u}});var o=n(1002),c=n(7326);function i(t,e){if(e&&("object"===(0,o.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(t)}function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return i(this,n)}}},9340:function(t,e,n){function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}n.d(e,{Z:function(){return o}})},1002:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=362.d717b6c1.chunk.js.map