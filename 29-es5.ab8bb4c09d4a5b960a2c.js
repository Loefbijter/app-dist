function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{i2Xo:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=function l(){_classCallCheck(this,l)},i=e("pMnS"),a=e("MKJQ"),o=e("sZkV"),r=e("iInd"),s=e("SVse"),b=e("s7LF"),c=e("nHN9"),h=e("tHQB"),g=e("ccyI"),m=function(){function l(n,e){_classCallCheck(this,l),this.materialReservationService=n,this.authService=e,this.page=0,this.status=-1,this.statusOptions=h.a,this.reservationStatusUtils=new h.b}return _createClass(l,[{key:"ionViewWillEnter",value:function(){var l=this;this.authService.getUserId().then((function(n){l.userId=n})),this.reloadReservations()}},{key:"changeStatus",value:function(){var l=this;this.materialReservations=[],this.page=1,null!=this.status&&-1!=this.status?this.materialReservationService.getByStatus(this.userId,this.status,this.page).subscribe({next:function(n){l.materialReservations=l.materialReservations.concat(n.items)}}):this.materialReservationService.getAll(this.page).subscribe({next:function(n){l.materialReservations=l.materialReservations.concat(n.items)}})}},{key:"reloadReservations",value:function(){var l=this;return new Promise((function(n,e){l.materialReservations=[],l.page=0,l.nextPage().then((function(){n()})).catch((function(l){e(l)}))}))}},{key:"nextPage",value:function(){var l=this;return this.page++,new Promise((function(n,e){null!=l.status&&-1!=l.status?l.materialReservationService.getByStatus(l.userId,l.status,l.page).subscribe((function(e){null==l.materialReservations&&(l.materialReservations=[]),l.materialReservations=l.materialReservations.concat(e.items),n(e)}),(function(l){e(l)})):l.materialReservationService.getAll(l.page).subscribe((function(e){null==l.materialReservations&&(l.materialReservations=[]),l.materialReservations=l.materialReservations.concat(e.items),n(e)}),(function(l){e(l)}))}))}},{key:"loadData",value:function(l){var n=this;this.nextPage().then((function(e){l.target.complete(),e.totalItems<=n.materialReservations.length&&(l.target.disabled=!0)}))}},{key:"readableState",value:function(l){return this.reservationStatusUtils.asString(l)}}]),l}(),v=t.mb({encapsulation:0,styles:[["ion-list[_ngcontent-%COMP%]{margin-bottom:20px}.list-margin[_ngcontent-%COMP%]{margin:60px 0 0}.text-danger[_ngcontent-%COMP%]{color:var(--ion-color-danger)}"]],data:{}});function d(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.material.imageUrl)}))}function p(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"ion-icon",[["name","checkmark-circle"],["size","large"]],null,null,null,a.fb,a.q)),t.nb(1,49152,null,0,o.D,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"checkmark-circle","large")}),null)}function f(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,21,"ion-item",[["button",""],["routerDirection","forward"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Ab(l,2).onClick()&&u),"click"===n&&(u=!1!==t.Ab(l,4).onClick(e)&&u),u}),a.jb,a.u)),t.nb(1,49152,null,0,o.I,[t.h,t.k,t.x],{button:[0,"button"],routerDirection:[1,"routerDirection"]},null),t.nb(2,16384,null,0,r.n,[r.m,r.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(3,3),t.nb(4,737280,null,0,o.Kb,[s.h,o.Gb,t.k,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.ob(5,0,null,0,5,"ion-avatar",[["slot","start"]],null,null,null,a.Q,a.b)),t.nb(6,49152,null,0,o.g,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,d)),t.nb(8,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,p)),t.nb(10,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(11,0,null,0,10,"ion-label",[],null,null,null,a.kb,a.v)),t.nb(12,49152,null,0,o.O,[t.h,t.k,t.x],null,null),(l()(),t.ob(13,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(14,null,[" ","x "," "])),(l()(),t.ob(15,0,null,0,1,"h5",[],[[8,"className",0]],null,null,null,null)),(l()(),t.Hb(16,null,[" "," "])),(l()(),t.ob(17,0,null,0,4,"h3",[],null,null,null,null,null)),(l()(),t.Hb(18,null,[" "," van "," tot "," "])),t.Db(19,1),t.Db(20,2),t.Db(21,2)],(function(l,n){l(n,1,0,"","forward");var e=l(n,3,0,"/","material-reservations",n.context.$implicit.id);l(n,2,0,e),l(n,4,0,"forward"),l(n,8,0,5!==n.context.$implicit.status),l(n,10,0,5===n.context.$implicit.status)}),(function(l,n){var e=n.component;l(n,14,0,n.context.$implicit.amount,n.context.$implicit.material.name),l(n,15,0,3===n.context.$implicit.status?"text-danger":""),l(n,16,0,e.readableState(n.context.$implicit.status));var u=t.Ib(n,18,0,l(n,19,0,t.Ab(n.parent,0),1e3*n.context.$implicit.startTimestamp)),i=t.Ib(n,18,1,l(n,20,0,t.Ab(n.parent,0),1e3*n.context.$implicit.startTimestamp,"H:mm")),a=t.Ib(n,18,2,l(n,21,0,t.Ab(n.parent,0),1e3*n.context.$implicit.endTimestamp,"H:mm"));l(n,18,0,u,i,a)}))}function k(l){return t.Jb(0,[t.Cb(0,s.d,[t.s]),(l()(),t.ob(1,0,null,null,10,"ion-header",[],null,null,null,a.eb,a.p)),t.nb(2,49152,null,0,o.C,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(l()(),t.ob(3,0,null,0,8,"ion-toolbar",[],null,null,null,a.Db,a.O)),t.nb(4,49152,null,0,o.Ab,[t.h,t.k,t.x],null,null),(l()(),t.ob(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.T,a.e)),t.nb(6,49152,null,0,o.m,[t.h,t.k,t.x],null,null),(l()(),t.ob(7,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,a.nb,a.z)),t.nb(8,49152,null,0,o.S,[t.h,t.k,t.x],{autoHide:[0,"autoHide"]},null),(l()(),t.ob(9,0,null,0,2,"ion-title",[],null,null,null,a.Bb,a.M)),t.nb(10,49152,null,0,o.yb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,[" Materiaalreserveringen "])),(l()(),t.ob(12,0,null,null,58,"ion-content",[],null,null,null,a.bb,a.m)),t.nb(13,49152,null,0,o.v,[t.h,t.k,t.x],null,null),(l()(),t.ob(14,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,a.eb,a.p)),t.nb(15,49152,null,0,o.C,[t.h,t.k,t.x],{collapse:[0,"collapse"]},null),(l()(),t.ob(16,0,null,0,4,"ion-toolbar",[],null,null,null,a.Db,a.O)),t.nb(17,49152,null,0,o.Ab,[t.h,t.k,t.x],null,null),(l()(),t.ob(18,0,null,0,2,"ion-title",[["size","large"]],null,null,null,a.Bb,a.M)),t.nb(19,49152,null,0,o.yb,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.Hb(-1,0,["Materiaalreserveringen"])),(l()(),t.ob(21,0,null,0,49,"div",[["id","container"]],null,null,null,null,null)),(l()(),t.ob(22,0,null,null,32,"ion-item",[],null,null,null,a.jb,a.u)),t.nb(23,49152,null,0,o.I,[t.h,t.k,t.x],null,null),(l()(),t.ob(24,0,null,0,2,"ion-label",[],null,null,null,a.kb,a.v)),t.nb(25,49152,null,0,o.O,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["Status"])),(l()(),t.ob(27,0,null,0,27,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.Ab(l,28)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ab(l,28)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(i.status=e)&&u),"ionChange"===n&&(u=!1!==i.changeStatus()&&u),u}),a.ub,a.E)),t.nb(28,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,b.g,(function(l){return[l]}),[o.Lb]),t.nb(30,671744,null,0,b.k,[[8,null],[8,null],[8,null],[6,b.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,b.h,null,[b.k]),t.nb(32,16384,null,0,b.i,[[4,b.h]],null,null),t.nb(33,49152,null,0,o.lb,[t.h,t.k,t.x],{interface:[0,"interface"]},null),(l()(),t.ob(34,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(35,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Allemaal"])),(l()(),t.ob(37,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(38,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Aangevraagd"])),(l()(),t.ob(40,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(41,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Geannuleerd"])),(l()(),t.ob(43,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(44,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Goedgekeurd"])),(l()(),t.ob(46,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(47,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Afgewezen"])),(l()(),t.ob(49,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(50,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Uitgeleend"])),(l()(),t.ob(52,0,null,0,2,"ion-select-option",[],null,null,null,a.tb,a.F)),t.nb(53,49152,null,0,o.mb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Teruggebracht"])),(l()(),t.ob(55,0,null,null,3,"ion-list",[],null,null,null,a.mb,a.w)),t.nb(56,49152,null,0,o.P,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,f)),t.nb(58,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(59,0,null,null,3,"ion-infinite-scroll",[["class","ion-padding-top"],["threshold","20px"]],null,[[null,"ionInfinite"]],(function(l,n,e){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(e)&&t),t}),a.hb,a.r)),t.nb(60,49152,null,0,o.F,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(l()(),t.ob(61,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","Meer reserveringen laden..."]],null,null,null,a.gb,a.s)),t.nb(62,49152,null,0,o.G,[t.h,t.k,t.x],{loadingText:[0,"loadingText"]},null),(l()(),t.ob(63,0,null,null,0,"div",[["class","list-margin"]],null,null,null,null,null)),(l()(),t.ob(64,0,null,null,6,"div",[["class","ion-button-footer"]],null,null,null,null,null)),(l()(),t.ob(65,0,null,null,5,"section",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.ob(66,0,null,null,4,"ion-button",[["expand","block"],["routerLink","/materials"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Ab(l,68).onClick()&&u),"click"===n&&(u=!1!==t.Ab(l,69).onClick(e)&&u),u}),a.S,a.d)),t.nb(67,49152,null,0,o.l,[t.h,t.k,t.x],{expand:[0,"expand"]},null),t.nb(68,16384,null,0,r.n,[r.m,r.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.nb(69,737280,null,0,o.Kb,[s.h,o.Gb,t.k,r.m,[2,r.n]],null,null),(l()(),t.Hb(-1,0,[" Nieuwe reservering "]))],(function(l,n){var e=n.component;l(n,2,0,!0),l(n,8,0,"false"),l(n,15,0,"condense"),l(n,19,0,"large"),l(n,30,0,e.status),l(n,33,0,"popover"),l(n,35,0,-1),l(n,38,0,e.statusOptions.REQUESTED),l(n,41,0,e.statusOptions.CANCELLED),l(n,44,0,e.statusOptions.ACCEPTED),l(n,47,0,e.statusOptions.DENIED),l(n,50,0,e.statusOptions.ISSUED),l(n,53,0,e.statusOptions.RETURNED),l(n,58,0,e.materialReservations),l(n,60,0,"20px"),l(n,62,0,"Meer reserveringen laden..."),l(n,67,0,"block"),l(n,68,0,"/materials"),l(n,69,0)}),(function(l,n){l(n,27,0,t.Ab(n,32).ngClassUntouched,t.Ab(n,32).ngClassTouched,t.Ab(n,32).ngClassPristine,t.Ab(n,32).ngClassDirty,t.Ab(n,32).ngClassValid,t.Ab(n,32).ngClassInvalid,t.Ab(n,32).ngClassPending)}))}var x=t.kb("app-material-reservations",m,(function(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"app-material-reservations",[],null,null,null,k,v)),t.nb(1,49152,null,0,m,[c.a,g.b],null,null)],null,null)}),{},{},[]),C=function(){return Promise.all([e.e(1),e.e(4)]).then(e.bind(null,"S/TM")).then((function(l){return l.ReservePageModuleNgFactory}))},y=function(){return e.e(0).then(e.bind(null,"BJ4d")).then((function(l){return l.MaterialReservationPageModuleNgFactory}))},R=function l(){_classCallCheck(this,l)};e.d(n,"MaterialReservationsPageModuleNgFactory",(function(){return A}));var A=t.lb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,x]],[3,t.j],t.v]),t.yb(4608,s.l,s.k,[t.s,[2,s.u]]),t.yb(4608,b.o,b.o,[]),t.yb(4608,o.c,o.c,[t.x,t.g]),t.yb(4608,o.Fb,o.Fb,[o.c,t.j,t.p]),t.yb(4608,o.Jb,o.Jb,[o.c,t.j,t.p]),t.yb(1073742336,s.b,s.b,[]),t.yb(1073742336,b.n,b.n,[]),t.yb(1073742336,b.f,b.f,[]),t.yb(1073742336,o.Cb,o.Cb,[]),t.yb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),t.yb(1073742336,R,R,[]),t.yb(1073742336,u,u,[]),t.yb(1024,r.k,(function(){return[[{path:"",component:m},{path:"reserve",loadChildren:C},{path:"reservation",loadChildren:y}]]}),[])])}))}}]);