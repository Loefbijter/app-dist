function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+VWq":function(l,n,u){"use strict";u.r(n);var e,t=u("8Y7J"),i=function l(){_classCallCheck(this,l)},o=u("pMnS"),c=u("MKJQ"),b=u("sZkV"),a=u("SVse"),r=u("AytR"),s=u("IheW"),f=((e=function(){function l(n){_classCallCheck(this,l),this.http=n}return _createClass(l,[{key:"getPage",value:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return this.http.get("".concat(r.a.API_URL,"news?page=").concat(l,"&limit=").concat(n,"&published=true"))}}]),l}()).ngInjectableDef=t.Nb({factory:function(){return new e(t.Ob(s.c))},token:e,providedIn:"root"}),e),h=function(){function l(n){_classCallCheck(this,l),this.newsService=n,this.page=0}return _createClass(l,[{key:"ngOnInit",value:function(){this.nextPage()}},{key:"nextPage",value:function(){var l=this;return this.page++,new Promise((function(n,u){l.newsService.getPage(l.page).subscribe((function(u){u.items.forEach((function(l){l.expanded=!1})),null==l.articles&&(l.articles=[]),l.articles=l.articles.concat(u.items),n(u)}),(function(l){u(l)}))}))}},{key:"expand",value:function(l){l.expanded=!l.expanded}},{key:"loadData",value:function(l){var n=this;this.nextPage().then((function(u){l.target.complete(),u.totalItems<=n.articles.length&&(l.target.disabled=!0)}))}}]),l}(),p=t.mb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin:4px 10px auto 0}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:7px 0 auto}"]],data:{}});function d(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.image)}))}function g(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,4,"ion-card-header",[],null,null,null,c.V,c.h)),t.nb(1,49152,null,0,b.p,[t.h,t.k,t.x],null,null),(l()(),t.ob(2,0,null,0,2,"ion-card-title",[],null,null,null,c.X,c.j)),t.nb(3,49152,null,0,b.r,[t.h,t.k,t.x],null,null),(l()(),t.Hb(4,0,[" "," "]))],null,(function(l,n){l(n,4,0,n.parent.context.$implicit.title)}))}function x(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.text)}))}function k(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,3,"ion-card-content",[],null,null,null,c.U,c.g)),t.nb(1,49152,null,0,b.o,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,x)),t.nb(3,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.parent.context.$implicit.expanded)}),null)}function m(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,18,"ion-card",[],null,null,null,c.Y,c.f)),t.nb(1,49152,null,0,b.n,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,d)),t.nb(3,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(4,0,null,0,10,"ion-item",[],null,null,null,c.jb,c.u)),t.nb(5,49152,null,0,b.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.ob(6,0,null,0,1,"ion-icon",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.expand(l.context.$implicit)&&e),e}),c.fb,c.q)),t.nb(7,49152,null,0,b.D,[t.h,t.k,t.x],{icon:[0,"icon"]},null),(l()(),t.ob(8,0,null,0,6,"ion-label",[],null,null,null,c.kb,c.v)),t.nb(9,49152,null,0,b.O,[t.h,t.k,t.x],null,null),(l()(),t.ob(10,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(11,null,["",""])),(l()(),t.ob(12,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),t.Hb(13,null,["",""])),t.Db(14,1),(l()(),t.eb(16777216,null,0,1,null,g)),t.nb(16,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,k)),t.nb(18,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.image),l(n,5,0,n.context.$implicit.expanded?"full":"none"),l(n,7,0,n.context.$implicit.expanded?"chevron-up":"chevron-down"),l(n,16,0,n.context.$implicit.expanded),l(n,18,0,n.context.$implicit.expanded)}),(function(l,n){l(n,11,0,n.context.$implicit.title);var u=t.Ib(n,13,0,l(n,14,0,t.Ab(n.parent.parent,0),1e3*n.context.$implicit.publishedAt));l(n,13,0,u)}))}function v(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,10,"ion-card",[],null,null,null,c.Y,c.f)),t.nb(1,49152,null,0,b.n,[t.h,t.k,t.x],null,null),(l()(),t.ob(2,0,null,0,4,"ion-card-header",[],null,null,null,c.V,c.h)),t.nb(3,49152,null,0,b.p,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,2,"ion-card-title",[],null,null,null,c.X,c.j)),t.nb(5,49152,null,0,b.r,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["Geen nieuwsberichten gevonden"])),(l()(),t.ob(7,0,null,0,3,"ion-card-content",[],null,null,null,c.U,c.g)),t.nb(8,49152,null,0,b.o,[t.h,t.k,t.x],null,null),(l()(),t.ob(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Er zijn nog geen nieuwsberichten toegevoegd."]))],null,null)}function y(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,m)),t.nb(2,278528,null,0,a.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(3,0,null,null,3,"ion-infinite-scroll",[["class","ion-padding-top"],["threshold","20px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadData(u)&&e),e}),c.hb,c.r)),t.nb(4,49152,null,0,b.F,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(l()(),t.ob(5,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","Meer nieuwsberichten laden..."]],null,null,null,c.gb,c.s)),t.nb(6,49152,null,0,b.G,[t.h,t.k,t.x],{loadingText:[0,"loadingText"]},null),(l()(),t.eb(16777216,null,null,1,null,v)),t.nb(8,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.articles),l(n,4,0,"20px"),l(n,6,0,"Meer nieuwsberichten laden..."),l(n,8,0,u.articles&&0==u.articles.length)}),null)}function I(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,10,"ion-grid",[],null,null,null,c.db,c.o)),t.nb(1,49152,null,0,b.B,[t.h,t.k,t.x],null,null),(l()(),t.ob(2,0,null,0,8,"ion-row",[],null,null,null,c.qb,c.B)),t.nb(3,49152,null,0,b.hb,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,6,"ion-col",[],null,null,null,c.ab,c.l)),t.nb(5,49152,null,0,b.u,[t.h,t.k,t.x],null,null),(l()(),t.ob(6,0,null,0,4,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Nieuwsberichten worden opgehaald"])),(l()(),t.ob(9,0,null,null,1,"ion-spinner",[],null,null,null,c.vb,c.G)),t.nb(10,49152,null,0,b.qb,[t.h,t.k,t.x],null,null)],null,null)}function w(l){return t.Jb(0,[t.Cb(0,a.d,[t.s]),(l()(),t.ob(1,0,null,null,10,"ion-header",[],null,null,null,c.eb,c.p)),t.nb(2,49152,null,0,b.C,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(l()(),t.ob(3,0,null,0,8,"ion-toolbar",[],null,null,null,c.Db,c.O)),t.nb(4,49152,null,0,b.Ab,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.T,c.e)),t.nb(6,49152,null,0,b.m,[t.h,t.k,t.x],null,null),(l()(),t.ob(7,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,c.nb,c.z)),t.nb(8,49152,null,0,b.S,[t.h,t.k,t.x],{autoHide:[0,"autoHide"]},null),(l()(),t.ob(9,0,null,0,2,"ion-title",[],null,null,null,c.Bb,c.M)),t.nb(10,49152,null,0,b.yb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,[" Nieuws "])),(l()(),t.ob(12,0,null,null,10,"ion-content",[],null,null,null,c.bb,c.m)),t.nb(13,49152,null,0,b.v,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.ob(14,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,c.eb,c.p)),t.nb(15,49152,null,0,b.C,[t.h,t.k,t.x],{collapse:[0,"collapse"]},null),(l()(),t.ob(16,0,null,0,4,"ion-toolbar",[],null,null,null,c.Db,c.O)),t.nb(17,49152,null,0,b.Ab,[t.h,t.k,t.x],null,null),(l()(),t.ob(18,0,null,0,2,"ion-title",[["size","large"]],null,null,null,c.Bb,c.M)),t.nb(19,49152,null,0,b.yb,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.Hb(-1,0,["Nieuws"])),(l()(),t.eb(16777216,null,0,1,null,y)),t.nb(22,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.eb(0,[["loading",2]],null,0,null,I))],(function(l,n){var u=n.component;l(n,2,0,!0),l(n,8,0,"false"),l(n,13,0,!0),l(n,15,0,"condense"),l(n,19,0,"large"),l(n,22,0,null!=u.articles,t.Ab(n,23))}),null)}var C=t.kb("app-articles",h,(function(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"app-articles",[],null,null,null,w,p)),t.nb(1,114688,null,0,h,[f],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),J=u("s7LF"),M=u("iInd"),j=function l(){_classCallCheck(this,l)};u.d(n,"ArticlesPageModuleNgFactory",(function(){return P}));var P=t.lb(i,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,C]],[3,t.j],t.v]),t.yb(4608,a.l,a.k,[t.s,[2,a.u]]),t.yb(4608,J.o,J.o,[]),t.yb(4608,b.c,b.c,[t.x,t.g]),t.yb(4608,b.Fb,b.Fb,[b.c,t.j,t.p]),t.yb(4608,b.Jb,b.Jb,[b.c,t.j,t.p]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,J.n,J.n,[]),t.yb(1073742336,J.f,J.f,[]),t.yb(1073742336,b.Cb,b.Cb,[]),t.yb(1073742336,M.o,M.o,[[2,M.t],[2,M.m]]),t.yb(1073742336,j,j,[]),t.yb(1073742336,i,i,[]),t.yb(1024,M.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);