(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{J3Yu:function(i,t,e){"use strict";e.r(t),e.d(t,"ion_loading",(function(){return m}));var n=e("imtE"),o=e("AfW+"),a=(e("aiEM"),e("1ym9")),s=(e("EV1M"),e("7TZ+")),r=e("Dl6n"),d=e("YtD4");const c=i=>{const t=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},l=i=>{const t=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},p=i=>{const t=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},g=i=>{const t=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},m=class{constructor(i){Object(n.k)(this,i),this.presented=!1,this.mode=Object(n.d)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(n.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(n.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(n.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(n.e)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=Object(n.d)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await Object(s.f)(this,"loadingEnter",c,p,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,i,t,"loadingLeave",l,g)}onDidDismiss(){return Object(s.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:t}=this,e=Object(n.d)(this);return Object(n.i)(n.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign(Object.assign({},Object(r.b)(this.cssClass)),{[e]:!0,"loading-translucent":this.translucent})},Object(n.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(n.i)("div",{class:"loading-wrapper",role:"dialog"},t&&Object(n.i)("div",{class:"loading-spinner"},Object(n.i)("ion-spinner",{name:t})),i&&Object(n.i)("div",{class:"loading-content",innerHTML:Object(d.a)(i)})))}get el(){return Object(n.f)(this)}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);--backdrop-opacity:var(--ion-backdrop-opacity,0.3);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);