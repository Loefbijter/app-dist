(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),b=u("MKJQ"),i=u("sZkV"),r=u("iInd"),a=u("SVse"),c=u("mrSG"),s=u("BA3h");class k{constructor(l,n,u){this.reservationsService=l,this.actionSheetController=n,this.router=u}openActionSheet(){return c.a(this,void 0,void 0,(function*(){const l=yield this.actionSheetController.create({header:"Nieuwe reservering",buttons:[{text:"Bootreservering",icon:"boat",handler:()=>{this.router.navigate(["/boats"])}},{text:"Materiaalreservering",icon:"watch",handler:()=>{this.router.navigate(["/materials"])}},{text:"Annuleren",icon:"close",role:"cancel"}]});yield l.present()}))}ngOnInit(){this.reservationsService.getOwn(1,1).subscribe()}}var h=o.mb({encapsulation:0,styles:[[""]],data:{}});function m(l){return o.Jb(0,[(l()(),o.ob(0,0,null,null,16,"ion-header",[],null,null,null,b.hb,b.p)),o.nb(1,49152,null,0,i.C,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,14,"ion-toolbar",[],null,null,null,b.Jb,b.R)),o.nb(3,49152,null,0,i.Ab,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.W,b.e)),o.nb(5,49152,null,0,i.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,b.tb,b.C)),o.nb(7,49152,null,0,i.S,[o.h,o.k,o.x],{autoHide:[0,"autoHide"]},null),(l()(),o.ob(8,0,null,0,2,"ion-title",[],null,null,null,b.Hb,b.P)),o.nb(9,49152,null,0,i.yb,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,[" De Loefbijter "])),(l()(),o.ob(11,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,b.W,b.e)),o.nb(12,49152,null,0,i.m,[o.h,o.k,o.x],null,null),(l()(),o.ob(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openActionSheet()&&o),o}),b.V,b.d)),o.nb(14,49152,null,0,i.l,[o.h,o.k,o.x],null,null),(l()(),o.ob(15,0,null,0,1,"ion-icon",[["icon","add-circle-outline"],["slot","icon-only"]],null,null,null,b.ib,b.q)),o.nb(16,49152,null,0,i.D,[o.h,o.k,o.x],{icon:[0,"icon"]},null),(l()(),o.ob(17,0,null,null,64,"ion-content",[],null,null,null,b.eb,b.m)),o.nb(18,49152,null,0,i.v,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(19,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,b.hb,b.p)),o.nb(20,49152,null,0,i.C,[o.h,o.k,o.x],{collapse:[0,"collapse"]},null),(l()(),o.ob(21,0,null,0,4,"ion-toolbar",[],null,null,null,b.Jb,b.R)),o.nb(22,49152,null,0,i.Ab,[o.h,o.k,o.x],null,null),(l()(),o.ob(23,0,null,0,2,"ion-title",[["size","large"]],null,null,null,b.Hb,b.P)),o.nb(24,49152,null,0,i.yb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Hb(-1,0,["De Loefbijter"])),(l()(),o.ob(26,0,null,0,55,"div",[["id","container"]],null,null,null,null,null)),(l()(),o.ob(27,0,null,null,12,"ion-card",[],null,null,null,b.bb,b.f)),o.nb(28,49152,null,0,i.n,[o.h,o.k,o.x],null,null),(l()(),o.ob(29,0,null,0,7,"ion-card-header",[],null,null,null,b.Y,b.h)),o.nb(30,49152,null,0,i.p,[o.h,o.k,o.x],null,null),(l()(),o.ob(31,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.Z,b.i)),o.nb(32,49152,null,0,i.q,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Welkom terug bij"])),(l()(),o.ob(34,0,null,0,2,"ion-card-title",[],null,null,null,b.ab,b.j)),o.nb(35,49152,null,0,i.r,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Jouw persoonlijke dashboard"])),(l()(),o.ob(37,0,null,0,2,"ion-card-content",[],null,null,null,b.X,b.g)),o.nb(38,49152,null,0,i.o,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,[" Gebruik deze app om je in te schrijven voor activiteiten, voor het reserveren van boten of materiaal en om bij te blijven met het laatste nieuws. "])),(l()(),o.ob(40,0,null,null,41,"ion-list",[],null,null,null,b.sb,b.z)),o.nb(41,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.ob(42,0,null,0,9,"ion-item",[["button",""],["routerLink","/reservations"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Ab(l,44).onClick()&&e),"click"===n&&(e=!1!==o.Ab(l,45).onClick(u)&&e),e}),b.pb,b.u)),o.nb(43,49152,null,0,i.I,[o.h,o.k,o.x],{button:[0,"button"]},null),o.nb(44,16384,null,0,r.n,[r.m,r.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.nb(45,737280,null,0,i.Kb,[a.h,i.Gb,o.k,r.m,[2,r.n]],null,null),(l()(),o.ob(46,0,null,0,1,"ion-icon",[["color","primary"],["name","boat"],["slot","start"]],null,null,null,b.ib,b.q)),o.nb(47,49152,null,0,i.D,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.ob(48,0,null,0,3,"ion-label",[],null,null,null,b.qb,b.y)),o.nb(49,49152,null,0,i.O,[o.h,o.k,o.x],null,null),(l()(),o.ob(50,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Jouw reserveringen"])),(l()(),o.ob(52,0,null,0,9,"ion-item",[["button",""],["routerLink","/material-reservations"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Ab(l,54).onClick()&&e),"click"===n&&(e=!1!==o.Ab(l,55).onClick(u)&&e),e}),b.pb,b.u)),o.nb(53,49152,null,0,i.I,[o.h,o.k,o.x],{button:[0,"button"]},null),o.nb(54,16384,null,0,r.n,[r.m,r.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.nb(55,737280,null,0,i.Kb,[a.h,i.Gb,o.k,r.m,[2,r.n]],null,null),(l()(),o.ob(56,0,null,0,1,"ion-icon",[["color","primary"],["name","shirt"],["slot","start"]],null,null,null,b.ib,b.q)),o.nb(57,49152,null,0,i.D,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.ob(58,0,null,0,3,"ion-label",[],null,null,null,b.qb,b.y)),o.nb(59,49152,null,0,i.O,[o.h,o.k,o.x],null,null),(l()(),o.ob(60,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Jouw materiaalreserveringen"])),(l()(),o.ob(62,0,null,0,9,"ion-item",[["button",""],["routerLink","/activities"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Ab(l,64).onClick()&&e),"click"===n&&(e=!1!==o.Ab(l,65).onClick(u)&&e),e}),b.pb,b.u)),o.nb(63,49152,null,0,i.I,[o.h,o.k,o.x],{button:[0,"button"]},null),o.nb(64,16384,null,0,r.n,[r.m,r.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.nb(65,737280,null,0,i.Kb,[a.h,i.Gb,o.k,r.m,[2,r.n]],null,null),(l()(),o.ob(66,0,null,0,1,"ion-icon",[["color","primary"],["name","beer"],["slot","start"]],null,null,null,b.ib,b.q)),o.nb(67,49152,null,0,i.D,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.ob(68,0,null,0,3,"ion-label",[],null,null,null,b.qb,b.y)),o.nb(69,49152,null,0,i.O,[o.h,o.k,o.x],null,null),(l()(),o.ob(70,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Activiteiten"])),(l()(),o.ob(72,0,null,0,9,"ion-item",[["button",""],["routerLink","/news"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Ab(l,74).onClick()&&e),"click"===n&&(e=!1!==o.Ab(l,75).onClick(u)&&e),e}),b.pb,b.u)),o.nb(73,49152,null,0,i.I,[o.h,o.k,o.x],{button:[0,"button"]},null),o.nb(74,16384,null,0,r.n,[r.m,r.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.nb(75,737280,null,0,i.Kb,[a.h,i.Gb,o.k,r.m,[2,r.n]],null,null),(l()(),o.ob(76,0,null,0,1,"ion-icon",[["color","primary"],["name","newspaper"],["slot","start"]],null,null,null,b.ib,b.q)),o.nb(77,49152,null,0,i.D,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.ob(78,0,null,0,3,"ion-label",[],null,null,null,b.qb,b.y)),o.nb(79,49152,null,0,i.O,[o.h,o.k,o.x],null,null),(l()(),o.ob(80,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Nieuwsberichten"]))],(function(l,n){l(n,1,0,!0),l(n,7,0,"false"),l(n,16,0,"add-circle-outline"),l(n,18,0,!0),l(n,20,0,"condense"),l(n,24,0,"large"),l(n,43,0,""),l(n,44,0,"/reservations"),l(n,45,0),l(n,47,0,"primary","boat"),l(n,53,0,""),l(n,54,0,"/material-reservations"),l(n,55,0),l(n,57,0,"primary","shirt"),l(n,63,0,""),l(n,64,0,"/activities"),l(n,65,0),l(n,67,0,"primary","beer"),l(n,73,0,""),l(n,74,0,"/news"),l(n,75,0),l(n,77,0,"primary","newspaper")}),null)}function p(l){return o.Jb(0,[(l()(),o.ob(0,0,null,null,1,"app-home",[],null,null,null,m,h)),o.nb(1,114688,null,0,k,[s.a,i.a,r.m],null,null)],(function(l,n){l(n,1,0)}),null)}var v=o.kb("app-home",k,p,{},{},[]),d=u("s7LF");u.d(n,"HomePageModuleNgFactory",(function(){return x}));var x=o.lb(e,[],(function(l){return o.xb([o.yb(512,o.j,o.X,[[8,[t.a,v]],[3,o.j],o.v]),o.yb(4608,a.l,a.k,[o.s,[2,a.u]]),o.yb(4608,d.o,d.o,[]),o.yb(4608,i.c,i.c,[o.x,o.g]),o.yb(4608,i.Fb,i.Fb,[i.c,o.j,o.p]),o.yb(4608,i.Jb,i.Jb,[i.c,o.j,o.p]),o.yb(1073742336,a.b,a.b,[]),o.yb(1073742336,d.n,d.n,[]),o.yb(1073742336,d.f,d.f,[]),o.yb(1073742336,i.Cb,i.Cb,[]),o.yb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),o.yb(1073742336,e,e,[]),o.yb(1024,r.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);