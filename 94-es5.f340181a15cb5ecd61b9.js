function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(c){return void r(c)}u.done?e(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){asyncGeneratorStep(a,n,o,i,u,"next",t)}function u(t){asyncGeneratorStep(a,n,o,i,u,"throw",t)}i(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{k5eQ:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_route",(function(){return i})),r.d(e,"ion_route_redirect",(function(){return u})),r.d(e,"ion_router",(function(){return _})),r.d(e,"ion_router_link",(function(){return S}));var n=r("imtE"),o=(r("AfW+"),r("aiEM")),a=r("Dl6n"),i=function(){function t(e){_classCallCheck(this,t),Object(n.k)(this,e),this.url="",this.ionRouteDataChanged=Object(n.e)(this,"ionRouteDataChanged",7)}return _createClass(t,[{key:"onUpdate",value:function(t){this.ionRouteDataChanged.emit(t)}},{key:"onComponentProps",value:function(t,e){if(t!==e){var r=t?Object.keys(t):[],n=e?Object.keys(e):[];if(r.length===n.length){var o=!0,a=!1,i=void 0;try{for(var u,s=r[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var c=u.value;if(t[c]!==e[c])return void this.onUpdate(t)}}catch(l){a=!0,i=l}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}}else this.onUpdate(t)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),t}(),u=function(){function t(e){_classCallCheck(this,t),Object(n.k)(this,e),this.ionRouteRedirectChanged=Object(n.e)(this,"ionRouteRedirectChanged",7)}return _createClass(t,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),t}(),s=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},c=function(t){if(null==t)return[""];var e=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===e.length?[""]:e},l=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,r,n,o){var a,i,u,s,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c.length>4&&void 0!==c[4]&&c[4],t.prev=1,i=f(e),!(o>=r.length)&&i){t.next=5;break}return t.abrupt("return",a);case 5:return t.next=7,i.componentOnReady();case 7:return u=r[o],t.next=10,i.setRouteId(u.id,u.params,n);case 10:return(s=t.sent).changed&&(n="root",a=!0),t.next=14,l(s.element,r,n,o+1,a);case 14:if(a=t.sent,t.t0=s.markVisible,!t.t0){t.next=19;break}return t.next=19,s.markVisible();case 19:return t.abrupt("return",a);case 22:return t.prev=22,t.t1=t.catch(1),t.abrupt("return",(console.error(t.t1),!1));case 25:case"end":return t.stop()}}),t,null,[[1,22]])})));return function(e,r,n,o){return t.apply(this,arguments)}}(),h=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=function(t){if(t)return t.matches(h)?t:t.querySelector(h)||void 0},d=function(t,e){return e.find((function(e){return function(t,e){var r=e.from;if(void 0===e.to)return!1;if(r.length>t.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==t[n])return!1}return r.length===t.length}(t,e)}))},v=function(t,e){for(var r=Math.min(t.length,e.length),n=0;n<r&&t[n].toLowerCase()===e[n].id;n++);return n},p=function(t,e){for(var r,n=new m(t),o=!1,a=0;a<e.length;a++){var i=e[a].path;if(""===i[0])o=!0;else{var u=!0,s=!1,c=void 0;try{for(var l,h=i[Symbol.iterator]();!(u=(l=h.next()).done);u=!0){var f=l.value,d=n.next();if(":"===f[0]){if(""===d)return null;((r=r||[])[a]||(r[a]={}))[f.slice(1)]=d}else if(d!==f)return null}}catch(v){s=!0,c=v}finally{try{u||null==h.return||h.return()}finally{if(s)throw c}}o=!1}}return o&&o!==(""===n.next())?null:r?e.map((function(t,e){return{id:t.id,path:t.path,params:y(t.params,r[e])}})):e},y=function(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0},g=function(t){var e=1,r=1,n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value,c=!0,l=!1,h=void 0;try{for(var f,d=s.path[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;":"===v[0]?e+=Math.pow(1,r):""!==v&&(e+=Math.pow(2,r)),r++}}catch(p){l=!0,h=p}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}}}catch(p){o=!0,a=p}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e},m=function(){function t(e){_classCallCheck(this,t),this.path=e.slice()}return _createClass(t,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),t}(),b=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=R(t,"to");return{from:c(R(t,"from")),to:null==e?void 0:c(e)}}))},w=function(t){return C(k(t))},k=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Array.from(r.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(r){var n=R(r,"component");if(null==n)throw new Error("component missing in ion-route");return{path:c(R(r,"url")),id:n.toLowerCase(),params:r.componentProps,children:t(e,r)}}))},R=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},C=function(t){var e=[],r=!0,n=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=a.value;x([],e,u)}}catch(s){n=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return e},x=function t(e,r,n){var o=e.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length){var a=!0,i=!1,u=void 0;try{for(var s,c=n.children[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){t(o,r,s.value)}}catch(l){i=!0,u=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw u}}}else r.push(o)},_=function(){function t(e){_classCallCheck(this,t),Object(n.k)(this,e),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(n.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.e)(this,"ionRouteDidChange",7)}var e,r,a,i,u,h,m;return _createClass(t,[{key:"componentWillLoad",value:(m=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.debug("[ion-router] router will load"),t.next=3,f(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}));case 3:return console.debug("[ion-router] found nav"),t.next=6,this.onRoutesChanged();case 6:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(o.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(o.e)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}},{key:"onBackButton",value:function(t){var e=this;t.detail.register(0,(function(){return e.back()}))}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward";t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);var r=c(t);return this.setPath(r,e),this.writeNavStateRoot(r,e)}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(h=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES[".concat(t.length,"]"));var e=!0,r=!1,n=void 0;try{for(var o,a=function(){var t=o.value,e=[];t.forEach((function(t){return e.push.apply(e,_toConsumableArray(t.path))}));var r=t.map((function(t){return t.id}));console.debug("%c "+s(e),"font-weight: bold; padding-left: 20px","=>\t","(".concat(r.join(", "),")"))},i=t[Symbol.iterator]();!(e=(o=i.next()).done);e=!0)a()}catch(u){r=!0,n=u}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}console.groupEnd()}(w(this.el)),function(t){console.group("[ion-core] REDIRECTS[".concat(t.length,"]"));var e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var i=o.value;i.to&&console.debug("FROM: ","$c "+s(i.from),"font-weight: bold"," TO: ","$c "+s(i.to),"font-weight: bold")}}catch(u){r=!0,n=u}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}console.groupEnd()}(b(this.el));case 1:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"navChanged",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var r,n,o,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.busy){t.next=2;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return t.next=4,function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var r,n,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],o=window.document.body;case 2:if(!(n=f(o))){t.next=11;break}return t.next=5,n.getRouteId();case 5:if(a=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:o=a.element,a.element=void 0,r.push(a);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:r,outlet:n});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()();case 4:if(r=t.sent,n=r.ids,o=r.outlet,a=function(t,e){var r=null,n=0,o=t.map((function(t){return t.id})),a=!0,i=!1,u=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value,h=v(o,l);h>n&&(r=l,n=h)}}catch(f){i=!0,u=f}finally{try{a||null==c.return||c.return()}finally{if(i)throw u}}return r?r.map((function(e,r){return{id:e.id,path:e.path,params:y(e.params,t[r]&&t[r].params)}})):null}(n,w(this.el))){t.next=10;break}return t.abrupt("return",(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),!1));case 10:if(!(i=function(t){var e=[],r=!0,n=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=a.value,s=!0,c=!1,l=void 0;try{for(var h,f=u.path[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var d=h.value;if(":"===d[0]){var v=u.params&&u.params[d.slice(1)];if(!v)return null;e.push(v)}else""!==d&&e.push(d)}}catch(p){c=!0,l=p}finally{try{s||null==f.return||f.return()}finally{if(c)throw l}}}}catch(p){n=!0,o=p}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return e}(a))){t.next=19;break}return console.debug("[ion-router] nav changed -> update URL",n,i),this.setPath(i,e),t.next=16,this.safeWriteNavState(o,a,"root",i,null,n.length);case 16:t.t0=!0,t.next=20;break;case 19:t.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return t.abrupt("return",t.t0);case 21:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var t=this.getPath();t&&d(t,b(this.el))&&this.writeNavStateRoot(t,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,r=this.lastState;return this.lastState=e,e>r?"forward":e<r?"back":"root"}},{key:"writeNavStateRoot",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function t(e,r){var n,o,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return n=b(this.el),o=d(e,n),a=null,o&&(this.setPath(o.to,r),a=o.from,e=o.to),i=function(t,e){var r=null,n=0,o=!0,a=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var c=u.value,l=p(t,c);if(null!==l){var h=g(l);h>n&&(n=h,r=l)}}}catch(f){a=!0,i=f}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,w(this.el)),t.abrupt("return",i?this.safeWriteNavState(document.body,i,r,e,a):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"safeWriteNavState",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function t(e,r,n,o,a){var i,u,s,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>5&&void 0!==c[5]?c[5]:0,t.next=3,this.lock();case 3:return u=t.sent,s=!1,t.prev=5,t.next=8,this.writeNavState(e,r,n,o,a,i);case 8:s=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.error(t.t0);case 14:return t.abrupt("return",(u(),s));case 15:case"end":return t.stop()}}),t,this,[[5,11]])}))),function(t,e,r,n,o){return a.apply(this,arguments)})},{key:"lock",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise((function(t){return r=t})),t.t0=void 0!==e,!t.t0){t.next=6;break}return t.next=6,e;case 6:return t.abrupt("return",r);case 7:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"writeNavState",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e,r,n,o,a){var i,u,s,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=c.length>5&&void 0!==c[5]?c[5]:0,!this.busy){t.next=3;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 3:return this.busy=!0,(u=this.routeChangeEvent(o,a))&&this.ionRouteWillChange.emit(u),t.next=8,l(e,r,n,i);case 8:return s=t.sent,t.abrupt("return",(this.busy=!1,s&&console.debug("[ion-router] route changed",o),u&&this.ionRouteDidChange.emit(u),s));case 10:case"end":return t.stop()}}),t,this)}))),function(t,r,n,o,a){return e.apply(this,arguments)})},{key:"setPath",value:function(t,e){var r=this;this.state++,function(t,e,n,o,a,i){var u=s([].concat(_toConsumableArray(c(r.root)),_toConsumableArray(o)));n&&(u="#"+u),"forward"===a?t.pushState(i,"",u):t.replaceState(i,"",u)}(window.history,0,this.useHash,t,e,this.state)}},{key:"getPath",value:function(){var t=this;return function(e,r,n){var o=e.pathname;if(t.useHash){var a=e.hash;o="#"===a[0]?a.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var r=0;r<t.length;r++)if(t[r].length>0&&t[r]!==e[r])return null;return e.length===t.length?[""]:e.slice(t.length)}(c(r),c(o))}(window.location,this.root)}},{key:"routeChangeEvent",value:function(t,e){var r=this.previousPath,n=s(t);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:e?s(e):null,to:n}}},{key:"el",get:function(){return Object(n.f)(this)}}]),t}(),S=function(){function t(e){var r=this;_classCallCheck(this,t),Object(n.k)(this,e),this.routerDirection="forward",this.onClick=function(t){Object(a.d)(r.href,t,r.routerDirection)}}return _createClass(t,[{key:"render",value:function(){var t,e=Object(n.d)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(this.color)),(t={},_defineProperty(t,e,!0),_defineProperty(t,"ion-activatable",!0),t))},Object(n.i)("a",Object.assign({},r),Object(n.i)("slot",null)))}}],[{key:"style",get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]),t}()}}]);