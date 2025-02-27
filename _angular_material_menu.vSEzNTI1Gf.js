var ie=Object.defineProperty,ne=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var N=(a,m,e)=>m in a?ie(a,m,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[m]=e,I=(a,m)=>{for(var e in m||={})oe.call(m,e)&&N(a,e,m[e]);if(L)for(var e of L(m))se.call(m,e)&&N(a,e,m[e]);return a},B=(a,m)=>ne(a,ae(m));import*as i from"@angular/core";import{InjectionToken as f,inject as s,ElementRef as A,ChangeDetectorRef as b,booleanAttribute as _,TemplateRef as Q,ApplicationRef as re,Injector as X,ViewContainerRef as G,QueryList as me,EventEmitter as P,ANIMATION_MODULE_TYPE as le,afterNextRender as ce,NgZone as ue}from"@angular/core";import{FocusMonitor as W,_IdGenerator as de,FocusKeyManager as he,isFakeTouchstartFromScreenReader as pe,isFakeMousedownFromScreenReader as _e}from"@angular/cdk/a11y";import{UP_ARROW as ge,DOWN_ARROW as fe,RIGHT_ARROW as K,LEFT_ARROW as q,ESCAPE as be,hasModifierKey as ve,ENTER as Me,SPACE as ye}from"@angular/cdk/keycodes";import{Subject as g,merge as D,Subscription as w,of as H}from"rxjs";import{startWith as k,switchMap as Y,takeUntil as Ce,take as Ie,filter as we}from"rxjs/operators";import{DOCUMENT as Z}from"@angular/common";import{_StructuralStylesLoader as ke,MatRipple as xe,MatRippleModule as Re,MatCommonModule as z}from"@angular/material/core";import{_CdkPrivateStyleLoader as Te}from"@angular/cdk/private";import{TemplatePortal as J,DomPortalOutlet as Pe}from"@angular/cdk/portal";import{Directionality as De}from"@angular/cdk/bidi";import{Overlay as S,OverlayConfig as Ee,OverlayModule as Ae}from"@angular/cdk/overlay";import{normalizePassiveListenerOptions as Se}from"@angular/cdk/platform";import{CdkScrollableModule as Oe}from"@angular/cdk/scrolling";import{trigger as V,state as j,style as c,transition as x,animate as R}from"@angular/animations";var Fe=["mat-menu-item",""],Le=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Ne=["mat-icon, [matMenuItemIcon]","*"];function Be(a,m){a&1&&(i.\u0275\u0275namespaceSVG(),i.\u0275\u0275elementStart(0,"svg",2),i.\u0275\u0275element(1,"polygon",3),i.\u0275\u0275elementEnd())}var He=["*"];function Ye(a,m){if(a&1){let e=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"div",0),i.\u0275\u0275listener("click",function(){i.\u0275\u0275restoreView(e);let n=i.\u0275\u0275nextContext();return i.\u0275\u0275resetView(n.closed.emit("click"))})("animationstart",function(n){i.\u0275\u0275restoreView(e);let o=i.\u0275\u0275nextContext();return i.\u0275\u0275resetView(o._onAnimationStart(n.animationName))})("animationend",function(n){i.\u0275\u0275restoreView(e);let o=i.\u0275\u0275nextContext();return i.\u0275\u0275resetView(o._onAnimationDone(n.animationName))})("animationcancel",function(n){i.\u0275\u0275restoreView(e);let o=i.\u0275\u0275nextContext();return i.\u0275\u0275resetView(o._onAnimationDone(n.animationName))}),i.\u0275\u0275elementStart(1,"div",1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd()()}if(a&2){let e=i.\u0275\u0275nextContext();i.\u0275\u0275classMap(e._classList),i.\u0275\u0275classProp("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating),i.\u0275\u0275property("id",e.panelId),i.\u0275\u0275attribute("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var O=new f("MAT_MENU_PANEL"),E=(()=>{class a{_elementRef=s(A);_document=s(Z);_focusMonitor=s(W);_parentMenu=s(O,{optional:!0});_changeDetectorRef=s(b);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new g;_focused=new g;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(Te).load(ke),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=i.\u0275\u0275defineComponent({type:a,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&i.\u0275\u0275listener("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(i.\u0275\u0275attribute("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),i.\u0275\u0275classProp("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",_],disableRipple:[2,"disableRipple","disableRipple",_]},exportAs:["matMenuItem"],attrs:Fe,ngContentSelectors:Ne,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(i.\u0275\u0275projectionDef(Le),i.\u0275\u0275projection(0),i.\u0275\u0275elementStart(1,"span",0),i.\u0275\u0275projection(2,1),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(3,"div",1),i.\u0275\u0275template(4,Be,2,0,":svg:svg",2)),t&2&&(i.\u0275\u0275advance(3),i.\u0275\u0275property("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),i.\u0275\u0275advance(),i.\u0275\u0275conditional(n._triggersSubmenu?4:-1))},dependencies:[xe],encapsulation:2,changeDetection:0})}return a})();var $=new f("MatMenuContent"),gt=(()=>{class a{_template=s(Q);_appRef=s(re);_injector=s(X);_viewContainerRef=s(G);_document=s(Z);_changeDetectorRef=s(b);_portal;_outlet;_attached=new g;constructor(){}attach(e={}){this._portal||(this._portal=new J(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new Pe(this._document.createElement("div"),null,this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=i.\u0275\u0275defineDirective({type:a,selectors:[["ng-template","matMenuContent",""]],features:[i.\u0275\u0275ProvidersFeature([{provide:$,useExisting:a}])]})}return a})(),ze=new f("mat-menu-default-options",{providedIn:"root",factory:Ve});function Ve(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var T="_mat-menu-enter",h="_mat-menu-exit",p=(()=>{class a{_elementRef=s(A);_changeDetectorRef=s(b);_injector=s(X);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled;_allItems;_directDescendantItems=new me;_classList={};_panelAnimationState="void";_animationDone=new g;_isAnimating=!1;parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=I({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new P;close=this.closed;panelId=s(de).getId("mat-menu-panel-");constructor(){let e=s(ze);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop,this._animationsDisabled=s(le,{optional:!0})==="NoopAnimations"}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new he(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(k(this._directDescendantItems),Y(e=>D(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(k(this._directDescendantItems),Y(t=>D(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case be:ve(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case q:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case K:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===ge||t===fe)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ce(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=B(I({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===h;(t||e===T)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating=!1)}_onAnimationStart(e){(e===T||e===h)&&(this._isAnimating=!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(h),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?T:h)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(k(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=i.\u0275\u0275defineComponent({type:a,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&(i.\u0275\u0275contentQuery(o,$,5),i.\u0275\u0275contentQuery(o,E,5),i.\u0275\u0275contentQuery(o,E,4)),t&2){let r;i.\u0275\u0275queryRefresh(r=i.\u0275\u0275loadQuery())&&(n.lazyContent=r.first),i.\u0275\u0275queryRefresh(r=i.\u0275\u0275loadQuery())&&(n._allItems=r),i.\u0275\u0275queryRefresh(r=i.\u0275\u0275loadQuery())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&i.\u0275\u0275viewQuery(Q,5),t&2){let o;i.\u0275\u0275queryRefresh(o=i.\u0275\u0275loadQuery())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&i.\u0275\u0275attribute("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",_],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:_(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[i.\u0275\u0275ProvidersFeature([{provide:O,useExisting:a}])],ngContentSelectors:He,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275template(0,Ye,3,12,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,changeDetection:0})}return a})(),ee=new f("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let a=s(S);return()=>a.scrollStrategies.reposition()}});function je(a){return()=>a.scrollStrategies.reposition()}var Ue={provide:ee,deps:[S],useFactory:je},U=Se({passive:!0}),ft=8,u=new WeakMap,bt=(()=>{class a{_overlay=s(S);_element=s(A);_viewContainerRef=s(G);_menuItemInstance=s(E,{optional:!0,self:!0});_dir=s(De,{optional:!0});_focusMonitor=s(W);_ngZone=s(ue);_scrollStrategy=s(ee);_changeDetectorRef=s(b);_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=w.EMPTY;_hoverSubscription=w.EMPTY;_menuCloseSubscription=w.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_handleTouchStart=e=>{pe(e)||(this._openedBy="touch")};_openedBy=void 0;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}_menu;menuData;restoreFocus=!0;menuOpened=new P;onMenuOpen=this.menuOpened;menuClosed=new P;onMenuClose=this.menuClosed;constructor(){let e=s(O,{optional:!0});this._parentMaterialMenu=e instanceof p?e:void 0,this._element.nativeElement.addEventListener("touchstart",this._handleTouchStart,U)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this.menu&&this._ownsMenu(this.menu)&&u.delete(this.menu),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,U),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let t=u.get(e);u.set(e,this),t&&t!==this&&t.closeMenu();let n=this._createOverlay(e),o=n.getConfig(),r=o.positionStrategy;this._setPosition(e,r),o.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,n.hasAttached()||(n.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof p&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Ce(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof p&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Ie(1)).subscribe(()=>{t.detach(),n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&u.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe(n=>{this.menu instanceof p&&this.menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ee({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr"})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,d]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[v,M]=[r,d],[y,C]=[n,o],l=0;if(this.triggersSubmenu()){if(C=n=e.xPosition==="before"?"start":"end",o=y=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let F=this._parentMaterialMenu.items.first;this._parentInnerPadding=F?F._getHostElement().offsetTop:0}l=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(v=r==="top"?"bottom":"top",M=d==="top"?"bottom":"top");t.withPositions([{originX:n,originY:v,overlayX:y,overlayY:r,offsetY:l},{originX:o,originY:v,overlayX:C,overlayY:r,offsetY:l},{originX:n,originY:M,overlayX:y,overlayY:d,offsetY:-l},{originX:o,originY:M,overlayX:C,overlayY:d,offsetY:-l}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:H(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(we(r=>this._menuOpen&&r!==this._menuItemInstance)):H();return D(e,n,o,t)}_handleMousedown(e){_e(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===Me||t===ye)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===K&&this.dir==="ltr"||t===q&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&(this._openedBy="mouse",this.openMenu())}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new J(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return u.get(e)===this}static \u0275fac=function(t){return new(t||a)};static \u0275dir=i.\u0275\u0275defineDirective({type:a,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&i.\u0275\u0275listener("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&i.\u0275\u0275attribute("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]})}return a})(),vt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=i.\u0275\u0275defineNgModule({type:a});static \u0275inj=i.\u0275\u0275defineInjector({providers:[Ue],imports:[Re,z,Ae,Oe,z]})}return a})(),te={transformMenu:V("transformMenu",[j("void",c({opacity:0,transform:"scale(0.8)"})),x("void => enter",R("120ms cubic-bezier(0, 0, 0.2, 1)",c({opacity:1,transform:"scale(1)"}))),x("* => void",R("100ms 25ms linear",c({opacity:0})))]),fadeInItems:V("fadeInItems",[j("showing",c({opacity:1})),x("void => *",[c({opacity:0}),R("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Mt=te.fadeInItems,yt=te.transformMenu;export{$ as MAT_MENU_CONTENT,ze as MAT_MENU_DEFAULT_OPTIONS,O as MAT_MENU_PANEL,ee as MAT_MENU_SCROLL_STRATEGY,Ue as MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER,ft as MENU_PANEL_TOP_PADDING,p as MatMenu,gt as MatMenuContent,E as MatMenuItem,vt as MatMenuModule,bt as MatMenuTrigger,Mt as fadeInItems,te as matMenuAnimations,yt as transformMenu};
