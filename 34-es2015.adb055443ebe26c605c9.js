(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"9LzN":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),a=u("SVse"),b=u("iInd"),s=u("mrSG"),c=u("BA3h"),d=u("wd/R");class v{constructor(l,n,u,e){this.activatedRoute=l,this.reservationsService=n,this.router=u,this.alertController=e,this.reservationId=null,this.reservation=null,this.canCompleteReservation=!1}ionViewWillEnter(){this.reservationId=this.activatedRoute.snapshot.paramMap.get("reservation_id"),this.reservationsService.findById(this.reservationId).subscribe(l=>{this.reservation=l,!this.reservation.finished&&d(this.reservation.startTimestamp,"X").diff(d())<0&&(this.canCompleteReservation=!0)})}cancel(l){return s.a(this,void 0,void 0,(function*(){l.target.disabled=!0,(yield this.alertController.create({header:"Bevestiging annulering",message:"Weet je zeker dat je de reservering wilt annuleren? Dit kan niet ongedaan worden gemaakt.",buttons:[{text:"Ja",handler:()=>{l.target.disabled=!0,this.reservationsService.cancel(this.reservationId).subscribe(()=>this.router.navigate(["/reservations"]))}},{text:"Nee",role:"cancel",handler:()=>{l.target.disabled=!1}}]})).present()}))}toggleReadableState(l){return null!=l.accepted?l.accepted?"Goedgekeurd":"Afgekeurd":"Aanvraag"}}var g=e.mb({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"ion-spinner",[["class","ion-align-self-center"],["style","display: block; margin: 50px auto;"]],null,null,null,r.vb,r.G)),e.nb(1,49152,null,0,i.qb,[e.h,e.k,e.x],null,null)],null,null)}function f(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,e.sb(1,"",n.component.reservation.boat.image,""))}))}function p(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,19,"ion-card",[],null,null,null,r.Y,r.f)),e.nb(1,49152,null,0,i.n,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,4,"ion-card-header",[],null,null,null,r.V,r.h)),e.nb(3,49152,null,0,i.p,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),e.nb(5,49152,null,0,i.r,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Reserveringsdetails"])),(l()(),e.ob(7,0,null,0,12,"ion-card-content",[],null,null,null,r.U,r.g)),e.nb(8,49152,null,0,i.o,[e.h,e.k,e.x],null,null),(l()(),e.ob(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Dit zijn de details die zijn doorgegeven bij het invullen van het logboek. Deze gegevens zijn niet meer te wijzigen. "])),(l()(),e.ob(11,0,null,0,8,"ul",[],null,null,null,null,null)),(l()(),e.ob(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(13,null,["Windkracht: ",""])),(l()(),e.ob(14,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(15,null,["Gebruikte zeil: ",""])),(l()(),e.ob(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(17,null,["Motoruren: ",""])),(l()(),e.ob(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(19,null,["Afgetankt: ",""]))],null,(function(l,n){var u=n.component;l(n,13,0,u.reservation.windForce),l(n,15,0,u.reservation.sailUsed),l(n,17,0,u.reservation.motorHours),l(n,19,0,u.reservation.hasBeenRefueled?"Ja":"Nee")}))}function h(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,29,"div",[["id","container"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,26,"ion-card",[],null,null,null,r.Y,r.f)),e.nb(2,49152,null,0,i.n,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,f)),e.nb(4,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(5,0,null,0,4,"ion-card-header",[],null,null,null,r.V,r.h)),e.nb(6,49152,null,0,i.p,[e.h,e.k,e.x],null,null),(l()(),e.ob(7,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),e.nb(8,49152,null,0,i.r,[e.h,e.k,e.x],null,null),(l()(),e.Hb(9,0,["",""])),(l()(),e.ob(10,0,null,0,17,"ion-card-content",[],null,null,null,r.U,r.g)),e.nb(11,49152,null,0,i.o,[e.h,e.k,e.x],null,null),(l()(),e.ob(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Dit zijn de details van de reservering:"])),(l()(),e.ob(14,0,null,0,13,"ul",[],null,null,null,null,null)),(l()(),e.ob(15,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(16,null,["Status: ",""])),(l()(),e.ob(17,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.Hb(18,null,["Datum: ",""])),e.Db(19,1),(l()(),e.ob(20,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.Hb(21,null,["Starttijd: ",""])),e.Db(22,2),(l()(),e.ob(23,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.Hb(24,null,["Eindtijd: ",""])),e.Db(25,2),(l()(),e.ob(26,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(27,null,["",""])),(l()(),e.eb(16777216,null,null,1,null,p)),e.nb(29,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,null!=u.reservation.boat.image),l(n,29,0,u.reservation.finished)}),(function(l,n){var u=n.component;l(n,9,0,u.reservation.boat.name?u.reservation.boat.name:"GEEN NAAM"),l(n,16,0,u.toggleReadableState(u.reservation));var t=e.Ib(n,18,0,l(n,19,0,e.Ab(n.parent.parent,0),1e3*u.reservation.startTimestamp));l(n,18,0,t);var o=e.Ib(n,21,0,l(n,22,0,e.Ab(n.parent.parent,0),1e3*u.reservation.startTimestamp,"H:mm"));l(n,21,0,o);var r=e.Ib(n,24,0,l(n,25,0,e.Ab(n.parent.parent,0),1e3*u.reservation.endTimestamp,"H:mm"));l(n,24,0,r),l(n,27,0,u.reservation.skipper?"Schipper: "+u.reservation.skipper:"Er was geen andere schipper opgegeven.")}))}function m(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"section",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"div",[["class","footer-subtitle"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Deze reservering was afgekeurd. "]))],null,null)}function x(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"div",[["class","footer-subtitle"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Na het invullen van het logboek wordt deze reservering definitief afgesloten. "]))],null,null)}function I(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"div",[["class","footer-subtitle"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Je kan het logboek pas invullen na de starttijd. "]))],null,null)}function J(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,9,"section",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,3).onClick()&&t),"click"===n&&(t=!1!==e.Ab(l,4).onClick(u)&&t),t}),r.S,r.d)),e.nb(2,49152,null,0,i.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),e.nb(3,16384,null,0,b.n,[b.m,b.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.nb(4,737280,null,0,i.Kb,[a.h,i.Gb,e.k,b.m,[2,b.n]],null,null),(l()(),e.Hb(-1,0,[" Logboek invullen "])),(l()(),e.eb(16777216,null,null,1,null,x)),e.nb(7,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,I)),e.nb(9,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,!u.canCompleteReservation,"block"),l(n,3,0,e.sb(1,"/reservations/",u.reservationId,"/update/info")),l(n,4,0),l(n,7,0,u.canCompleteReservation),l(n,9,0,!u.canCompleteReservation)}),null)}function j(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,5,"section",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,2,"ion-button",[["color","danger"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cancel(u)&&e),e}),r.S,r.d)),e.nb(2,49152,null,0,i.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Hb(-1,0,[" Reservering annuleren "])),(l()(),e.ob(4,0,null,null,1,"div",[["class","footer-subtitle"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Dit is alleen mogelijk voordat de reservering goed- of afgekeurd is en kan niet ongedaan worden gemaakt. "]))],(function(l,n){l(n,2,0,"danger","block")}),null)}function H(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,k)),e.nb(2,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,h)),e.nb(4,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(5,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,m)),e.nb(7,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,J)),e.nb(9,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,j)),e.nb(11,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,null==u.reservation),l(n,4,0,null!=u.reservation),l(n,7,0,!1===u.reservation.accepted),l(n,9,0,!u.reservation.finished&&u.reservation.accepted),l(n,11,0,null==u.reservation.accepted)}),null)}function y(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,10,"ion-grid",[],null,null,null,r.db,r.o)),e.nb(1,49152,null,0,i.B,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,8,"ion-row",[],null,null,null,r.qb,r.B)),e.nb(3,49152,null,0,i.hb,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,6,"ion-col",[],null,null,null,r.ab,r.l)),e.nb(5,49152,null,0,i.u,[e.h,e.k,e.x],null,null),(l()(),e.ob(6,0,null,0,4,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Reservering wordt opgehaald"])),(l()(),e.ob(9,0,null,null,1,"ion-spinner",[],null,null,null,r.vb,r.G)),e.nb(10,49152,null,0,i.qb,[e.h,e.k,e.x],null,null)],null,null)}function w(l){return e.Jb(0,[e.Cb(0,a.d,[e.s]),(l()(),e.ob(1,0,null,null,14,"ion-header",[],null,null,null,r.eb,r.p)),e.nb(2,49152,null,0,i.C,[e.h,e.k,e.x],null,null),(l()(),e.ob(3,0,null,0,12,"ion-toolbar",[],null,null,null,r.Db,r.O)),e.nb(4,49152,null,0,i.Ab,[e.h,e.k,e.x],null,null),(l()(),e.ob(5,0,null,0,2,"ion-title",[],null,null,null,r.Bb,r.M)),e.nb(6,49152,null,0,i.yb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Reservering "])),(l()(),e.ob(8,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,r.T,r.e)),e.nb(9,49152,null,0,i.m,[e.h,e.k,e.x],null,null),(l()(),e.ob(10,0,null,0,5,"ion-button",[["routerDirection","back"],["routerLink","/reservations"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,12).onClick()&&t),"click"===n&&(t=!1!==e.Ab(l,13).onClick(u)&&t),t}),r.S,r.d)),e.nb(11,49152,null,0,i.l,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.nb(12,16384,null,0,b.n,[b.m,b.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.nb(13,737280,null,0,i.Kb,[a.h,i.Gb,e.k,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.ob(14,0,null,0,1,"ion-icon",[["name","arrow-back-outline"]],null,null,null,r.fb,r.q)),e.nb(15,49152,null,0,i.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.ob(16,0,null,null,4,"ion-content",[],null,null,null,r.bb,r.m)),e.nb(17,49152,null,0,i.v,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,H)),e.nb(19,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.eb(0,[["loading",2]],0,0,null,y))],(function(l,n){var u=n.component;l(n,11,0,"back"),l(n,12,0,"/reservations"),l(n,13,0,"back"),l(n,15,0,"arrow-back-outline"),l(n,19,0,null!=u.reservation,e.Ab(n,20))}),null)}function D(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"app-reservation",[],null,null,null,w,g)),e.nb(1,49152,null,0,v,[b.a,c.a,b.m,i.b],null,null)],null,null)}var M=e.kb("app-reservation",v,D,{},{},[]),R=u("s7LF");class A{}u.d(n,"ReservationPageModuleNgFactory",(function(){return C}));var C=e.lb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,M]],[3,e.j],e.v]),e.yb(4608,a.l,a.k,[e.s,[2,a.u]]),e.yb(4608,R.o,R.o,[]),e.yb(4608,i.c,i.c,[e.x,e.g]),e.yb(4608,i.Fb,i.Fb,[i.c,e.j,e.p]),e.yb(4608,i.Jb,i.Jb,[i.c,e.j,e.p]),e.yb(1073742336,a.b,a.b,[]),e.yb(1073742336,R.n,R.n,[]),e.yb(1073742336,R.f,R.f,[]),e.yb(1073742336,i.Cb,i.Cb,[]),e.yb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),e.yb(1073742336,A,A,[]),e.yb(1073742336,t,t,[]),e.yb(1024,b.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);