(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{OGzg:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),o=u("MKJQ"),s=u("sZkV"),b=u("SVse"),a=u("s7LF"),r=u("mrSG"),c=u("ccyI"),h=u("0iHu"),d=u("AytR"),g=u("IheW");let f=(()=>{class l{constructor(l){this.http=l,this.url=d.a.API_URL}getCertificates(l,n,u=20){return this.http.get(`${this.url}users/${l}/certificates?page=${n}&limit=${u}`)}}return l.ngInjectableDef=e.Nb({factory:function(){return new l(e.Ob(g.c))},token:l,providedIn:"root"}),l})();var p=u("hCTW");class v{constructor(l,n,u,e,t){this.authService=l,this.navCtrl=n,this.pushService=u,this.toastController=e,this.usersService=t,this.canTogglePushNotifications=!1,this.page=1,l.getUserId().then(l=>{this.userId=l,this.getCertificates()}).catch(()=>r.a(this,void 0,void 0,(function*(){const l=yield this.toastController.create({message:"Kon geen user ID vinden"});yield l.present()}))),u.checkSubscription().then(l=>{this.canTogglePushNotifications=!0,l.subscriptionStatus.subscribed&&(this.pushMessages=!0)}).catch(l=>r.a(this,void 0,void 0,(function*(){const n=yield this.toastController.create({header:"Fout bij ophalen van push status",message:l.message,duration:p.b});yield n.present()})))}getCertificates(){this.usersService.getCertificates(this.userId,this.page).subscribe(l=>{this.totalCertificates=l.totalItems,this.certificates||(this.certificates=[]),this.certificates=this.certificates.concat(l.items)})}signOut(){return r.a(this,void 0,void 0,(function*(){yield this.authService.removeTokens(),yield this.navCtrl.navigateRoot(["/sign-in"])}))}togglePushMessages(){return r.a(this,void 0,void 0,(function*(){if(this.canTogglePushNotifications=!1,this.pushMessages){const l=yield this.authService.getUserId();this.pushService.subscribe(l).then(()=>r.a(this,void 0,void 0,(function*(){const l=yield this.toastController.create({duration:p.b,message:"Je bent ingeschreven voor pushberichten!"});this.canTogglePushNotifications=!0,yield l.present()}))).catch(l=>r.a(this,void 0,void 0,(function*(){const n=yield this.toastController.create({duration:p.b,header:"Kon pushberichten niet inschakelen!",message:l});yield n.present()})))}else this.pushService.unsubscribe().then(()=>r.a(this,void 0,void 0,(function*(){const l=yield this.toastController.create({duration:p.b,message:"Uitgeschreven voor pushberichten"});this.canTogglePushNotifications=!0,yield l.present()}))).catch(l=>r.a(this,void 0,void 0,(function*(){const n=yield this.toastController.create({duration:p.b,header:"Kon pushberichten niet uitschakelen!",message:l});yield n.present()})))}))}loadData(l){setTimeout(()=>{this.page++,this.getCertificates(),l.target.complete(),this.certificates.length>=this.totalCertificates&&(l.target.disabled=!0)},500)}}var k=e.mb({encapsulation:0,styles:[[""]],data:{}});function x(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,6,"ion-item",[],null,null,null,o.pb,o.u)),e.nb(1,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,2,"ion-label",[],null,null,null,o.qb,o.y)),e.nb(3,49152,null,0,s.O,[e.h,e.k,e.x],null,null),(l()(),e.Hb(4,0,[" "," "])),(l()(),e.ob(5,0,null,0,1,"ion-icon",[["slot","end"]],null,null,null,o.ib,o.q)),e.nb(6,49152,null,0,s.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,6,0,e.sb(1,"",n.context.$implicit.showInSkippersList?"boat":"reader-outline",""))}),(function(l,n){l(n,4,0,n.context.$implicit.name)}))}function m(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,x)),e.nb(2,278528,null,0,b.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.certificates)}),null)}function y(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,m)),e.nb(2,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],(function(l,n){l(n,2,0,n.component.certificates.length>0,e.Ab(n.parent,63))}),null)}function C(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,3,"ion-infinite-scroll",[["threshold","5%"]],null,[[null,"ionInfinite"]],(function(l,n,u){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadData(u)&&e),e}),o.kb,o.r)),e.nb(1,49152,null,0,s.F,[e.h,e.k,e.x],{threshold:[0,"threshold"]},null),(l()(),e.ob(2,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","Certificaten worden geladen"]],null,null,null,o.jb,o.s)),e.nb(3,49152,null,0,s.G,[e.h,e.k,e.x],{loadingText:[0,"loadingText"]},null)],(function(l,n){l(n,1,0,"5%"),l(n,3,0,"Certificaten worden geladen")}),null)}function I(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,10,"ion-grid",[],null,null,null,o.gb,o.o)),e.nb(1,49152,null,0,s.B,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,8,"ion-row",[],null,null,null,o.wb,o.E)),e.nb(3,49152,null,0,s.hb,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,6,"ion-col",[],null,null,null,o.db,o.l)),e.nb(5,49152,null,0,s.u,[e.h,e.k,e.x],null,null),(l()(),e.ob(6,0,null,0,4,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Certificaten worden geladen"])),(l()(),e.ob(9,0,null,null,1,"ion-spinner",[],null,null,null,o.Bb,o.J)),e.nb(10,49152,null,0,s.qb,[e.h,e.k,e.x],null,null)],null,null)}function J(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,8,"ion-grid",[],null,null,null,o.gb,o.o)),e.nb(1,49152,null,0,s.B,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,6,"ion-row",[],null,null,null,o.wb,o.E)),e.nb(3,49152,null,0,s.hb,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,4,"ion-col",[],null,null,null,o.db,o.l)),e.nb(5,49152,null,0,s.u,[e.h,e.k,e.x],null,null),(l()(),e.ob(6,0,null,0,2,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Geen certificaten gevonden"]))],null,null)}function A(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,10,"ion-header",[],null,null,null,o.hb,o.p)),e.nb(1,49152,null,0,s.C,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.ob(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Jb,o.R)),e.nb(3,49152,null,0,s.Ab,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.W,o.e)),e.nb(5,49152,null,0,s.m,[e.h,e.k,e.x],null,null),(l()(),e.ob(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,o.tb,o.C)),e.nb(7,49152,null,0,s.S,[e.h,e.k,e.x],{autoHide:[0,"autoHide"]},null),(l()(),e.ob(8,0,null,0,2,"ion-title",[],null,null,null,o.Hb,o.P)),e.nb(9,49152,null,0,s.yb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Accountinformatie "])),(l()(),e.ob(11,0,null,null,50,"ion-content",[],null,null,null,o.eb,o.m)),e.nb(12,49152,null,0,s.v,[e.h,e.k,e.x],null,null),(l()(),e.ob(13,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,o.hb,o.p)),e.nb(14,49152,null,0,s.C,[e.h,e.k,e.x],{collapse:[0,"collapse"]},null),(l()(),e.ob(15,0,null,0,4,"ion-toolbar",[],null,null,null,o.Jb,o.R)),e.nb(16,49152,null,0,s.Ab,[e.h,e.k,e.x],null,null),(l()(),e.ob(17,0,null,0,2,"ion-title",[["size","large"]],null,null,null,o.Hb,o.P)),e.nb(18,49152,null,0,s.yb,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Hb(-1,0,["Accountinformatie"])),(l()(),e.ob(20,0,null,0,25,"ion-list",[["lines","full"]],null,null,null,o.sb,o.z)),e.nb(21,49152,null,0,s.P,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.ob(22,0,null,0,2,"ion-list-header",[],null,null,null,o.rb,o.A)),e.nb(23,49152,null,0,s.Q,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Instellingen"])),(l()(),e.ob(25,0,null,0,6,"ion-item",[],null,null,null,o.pb,o.u)),e.nb(26,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.ob(27,0,null,0,1,"ion-icon",[["icon","person"],["slot","start"]],null,null,null,o.ib,o.q)),e.nb(28,49152,null,0,s.D,[e.h,e.k,e.x],{icon:[0,"icon"]},null),(l()(),e.ob(29,0,null,0,2,"ion-label",[],null,null,null,o.qb,o.y)),e.nb(30,49152,null,0,s.O,[e.h,e.k,e.x],null,null),(l()(),e.Hb(31,0,["",""])),(l()(),e.ob(32,0,null,0,13,"ion-item",[],null,null,null,o.pb,o.u)),e.nb(33,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.ob(34,0,null,0,1,"ion-icon",[["icon","chatbox"],["slot","start"]],null,null,null,o.ib,o.q)),e.nb(35,49152,null,0,s.D,[e.h,e.k,e.x],{icon:[0,"icon"]},null),(l()(),e.ob(36,0,null,0,2,"ion-label",[],null,null,null,o.qb,o.y)),e.nb(37,49152,null,0,s.O,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Pushberichten"])),(l()(),e.ob(39,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Ab(l,40)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,40)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.pushMessages=u)&&t),"ionChange"===n&&(t=!1!==i.togglePushMessages()&&t),t}),o.Ib,o.Q)),e.nb(40,16384,null,0,s.d,[e.k],null,null),e.Eb(1024,null,a.g,(function(l){return[l]}),[s.d]),e.nb(42,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.g]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,a.h,null,[a.k]),e.nb(44,16384,null,0,a.i,[[4,a.h]],null,null),e.nb(45,49152,null,0,s.zb,[e.h,e.k,e.x],{disabled:[0,"disabled"]},null),(l()(),e.ob(46,0,null,0,6,"ion-list",[["lines","full"]],null,null,null,o.sb,o.z)),e.nb(47,49152,null,0,s.P,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.ob(48,0,null,0,2,"ion-list-header",[],null,null,null,o.rb,o.A)),e.nb(49,49152,null,0,s.Q,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Mijn Certificaten"])),(l()(),e.eb(16777216,null,0,1,null,y)),e.nb(52,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.eb(16777216,null,0,1,null,C)),e.nb(54,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(55,0,null,0,6,"div",[["class","ion-button-footer"]],null,null,null,null,null)),(l()(),e.ob(56,0,null,null,5,"section",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.ob(57,0,null,null,4,"ion-button",[["class","sign-out-button"],["color","danger"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.signOut()&&e),e}),o.V,o.d)),e.nb(58,49152,null,0,s.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Hb(-1,0,[" Uitloggen "])),(l()(),e.ob(60,0,null,0,1,"ion-icon",[["name","log-out-outline"],["slot","end"]],null,null,null,o.ib,o.q)),e.nb(61,49152,null,0,s.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.eb(0,[["loading",2]],null,0,null,I)),(l()(),e.eb(0,[["noneFound",2]],null,0,null,J))],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,7,0,"false"),l(n,14,0,"condense"),l(n,18,0,"large"),l(n,21,0,"full"),l(n,28,0,"person"),l(n,35,0,"chatbox"),l(n,42,0,!u.canTogglePushNotifications,u.pushMessages),l(n,45,0,!u.canTogglePushNotifications),l(n,47,0,"full"),l(n,52,0,u.certificates,e.Ab(n,62)),l(n,54,0,u.certificates&&u.certificates.length<u.totalCertificates),l(n,58,0,"danger","block"),l(n,61,0,"log-out-outline")}),(function(l,n){l(n,31,0,n.component.userId),l(n,39,0,e.Ab(n,44).ngClassUntouched,e.Ab(n,44).ngClassTouched,e.Ab(n,44).ngClassPristine,e.Ab(n,44).ngClassDirty,e.Ab(n,44).ngClassValid,e.Ab(n,44).ngClassInvalid,e.Ab(n,44).ngClassPending)}))}function P(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"app-user",[],null,null,null,A,k)),e.nb(1,49152,null,0,v,[c.b,s.Gb,h.a,s.Nb,f],null,null)],null,null)}var M=e.kb("app-user",v,P,{},{},[]),H=u("iInd");class w{}u.d(n,"UserPageModuleNgFactory",(function(){return S}));var S=e.lb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[i.a,M]],[3,e.j],e.v]),e.yb(4608,b.l,b.k,[e.s,[2,b.u]]),e.yb(4608,a.o,a.o,[]),e.yb(4608,s.c,s.c,[e.x,e.g]),e.yb(4608,s.Fb,s.Fb,[s.c,e.j,e.p]),e.yb(4608,s.Jb,s.Jb,[s.c,e.j,e.p]),e.yb(1073742336,b.b,b.b,[]),e.yb(1073742336,a.n,a.n,[]),e.yb(1073742336,a.f,a.f,[]),e.yb(1073742336,s.Cb,s.Cb,[]),e.yb(1073742336,H.o,H.o,[[2,H.t],[2,H.m]]),e.yb(1073742336,w,w,[]),e.yb(1073742336,t,t,[]),e.yb(1024,H.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);