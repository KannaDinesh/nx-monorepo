import*as a from"@angular/core";import{inject as r,Injector as d,EnvironmentInjector as s,ApplicationRef as p,createComponent as l}from"@angular/core";var i=new WeakMap,g=(()=>{class e{_appRef;_injector=r(d);_environmentInjector=r(s);load(o){let t=this._appRef=this._appRef||this._injector.get(p),n=i.get(t);n||(n={loaders:new Set,refs:[]},i.set(t,n),t.onDestroy(()=>{i.get(t)?.refs.forEach(c=>c.destroy()),i.delete(t)})),n.loaders.has(o)||(n.loaders.add(o),n.refs.push(l(o,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),y=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,n){},styles:[".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}"],encapsulation:2,changeDetection:0})}return e})();export{g as _CdkPrivateStyleLoader,y as _VisuallyHiddenLoader};
