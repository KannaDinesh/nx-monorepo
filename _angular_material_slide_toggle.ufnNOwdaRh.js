import*as e from"@angular/core";import{InjectionToken as g,forwardRef as m,inject as d,ElementRef as p,ChangeDetectorRef as v,EventEmitter as n,HostAttributeToken as f,ANIMATION_MODULE_TYPE as y,booleanAttribute as r,numberAttribute as k}from"@angular/core";import{NG_VALUE_ACCESSOR as I,NG_VALIDATORS as w,CheckboxRequiredValidator as C}from"@angular/forms";import{FocusMonitor as z,_IdGenerator as M}from"@angular/cdk/a11y";import{_StructuralStylesLoader as x,MatRipple as D,_MatInternalFormField as E,MatCommonModule as h}from"@angular/material/core";import{_CdkPrivateStyleLoader as T}from"@angular/cdk/private";var R=["switch"],S=["*"];function L(c,o){c&1&&(e.\u0275\u0275elementStart(0,"span",10),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(1,"svg",12),e.\u0275\u0275element(2,"path",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"svg",14),e.\u0275\u0275element(4,"path",15),e.\u0275\u0275elementEnd()())}var A=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),q={provide:I,useExisting:m(()=>b),multi:!0},l=class{source;checked;constructor(o,t){this.source=o,this.checked=t}},b=(()=>{class c{_elementRef=d(p);_focusMonitor=d(z);_changeDetectorRef=d(v);defaults=d(A);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new l(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations;_focused;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new n;toggleChange=new n;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){d(T).load(x);let t=d(new f("tabindex"),{optional:!0}),a=this.defaults,i=d(y,{optional:!0});this.tabIndex=t==null?0:parseInt(t)||0,this.color=a.color||"accent",this._noopAnimations=i==="NoopAnimations",this.id=this._uniqueId=d(M).getId("mat-mdc-slide-toggle-"),this.hideIcon=a.hideIcon??!1,this.disabledInteractive=a.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new l(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["mat-slide-toggle"]],viewQuery:function(a,i){if(a&1&&e.\u0275\u0275viewQuery(R,5),a&2){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(i._switchElement=s.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(a,i){a&2&&(e.\u0275\u0275hostProperty("id",i.id),e.\u0275\u0275attribute("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),e.\u0275\u0275classMap(i.color?"mat-"+i.color:""),e.\u0275\u0275classProp("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",r],color:"color",disabled:[2,"disabled","disabled",r],disableRipple:[2,"disableRipple","disableRipple",r],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:k(t)],checked:[2,"checked","checked",r],hideIcon:[2,"hideIcon","hideIcon",r],disabledInteractive:[2,"disabledInteractive","disabledInteractive",r]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[e.\u0275\u0275ProvidersFeature([q,{provide:w,useExisting:c,multi:!0}]),e.\u0275\u0275NgOnChangesFeature],ngContentSelectors:S,decls:13,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(a,i){if(a&1){let s=e.\u0275\u0275getCurrentView();e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",1)(1,"button",2,0),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(s),e.\u0275\u0275resetView(i._handleClick())}),e.\u0275\u0275element(3,"span",3),e.\u0275\u0275elementStart(4,"span",4)(5,"span",5)(6,"span",6),e.\u0275\u0275element(7,"span",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"span",8),e.\u0275\u0275element(9,"span",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(10,L,5,0,"span",10),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(11,"label",11),e.\u0275\u0275listener("click",function(_){return e.\u0275\u0275restoreView(s),e.\u0275\u0275resetView(_.stopPropagation())}),e.\u0275\u0275projection(12),e.\u0275\u0275elementEnd()()}if(a&2){let s=e.\u0275\u0275reference(2);e.\u0275\u0275property("labelPosition",i.labelPosition),e.\u0275\u0275advance(),e.\u0275\u0275classProp("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),e.\u0275\u0275property("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),e.\u0275\u0275attribute("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),e.\u0275\u0275advance(8),e.\u0275\u0275property("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),e.\u0275\u0275advance(),e.\u0275\u0275conditional(i.hideIcon?-1:10),e.\u0275\u0275advance(),e.\u0275\u0275property("for",i.buttonId),e.\u0275\u0275attribute("id",i._labelId)}},dependencies:[D,E],styles:['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height, 32px);border-radius:var(--mdc-switch-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width, 2px);border-color:var(--mat-switch-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width, 2px);border-color:var(--mat-switch-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size, 16px);height:var(--mat-switch-unselected-handle-size, 16px);margin:var(--mat-switch-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size, 24px);height:var(--mat-switch-selected-handle-size, 24px);margin:var(--mat-switch-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size, 24px);height:var(--mat-switch-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size, 28px);height:var(--mat-switch-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size, 40px);height:var(--mdc-switch-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 16px);height:var(--mdc-switch-unselected-icon-size, 16px);fill:var(--mdc-switch-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 16px);height:var(--mdc-switch-selected-icon-size, 16px);fill:var(--mdc-switch-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}'],encapsulation:2,changeDetection:0})}return c})(),V={provide:w,useExisting:m(()=>O),multi:!0},O=(()=>{class c extends C{static \u0275fac=(()=>{let t;return function(i){return(t||(t=e.\u0275\u0275getInheritedFactory(c)))(i||c)}})();static \u0275dir=e.\u0275\u0275defineDirective({type:c,selectors:[["mat-slide-toggle","required","","formControlName",""],["mat-slide-toggle","required","","formControl",""],["mat-slide-toggle","required","","ngModel",""]],features:[e.\u0275\u0275ProvidersFeature([V]),e.\u0275\u0275InheritDefinitionFeature]})}return c})(),J=(()=>{class c{static \u0275fac=function(a){return new(a||c)};static \u0275mod=e.\u0275\u0275defineNgModule({type:c});static \u0275inj=e.\u0275\u0275defineInjector({})}return c})(),K=(()=>{class c{static \u0275fac=function(a){return new(a||c)};static \u0275mod=e.\u0275\u0275defineNgModule({type:c});static \u0275inj=e.\u0275\u0275defineInjector({imports:[b,h,h]})}return c})();export{A as MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,V as MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR,q as MAT_SLIDE_TOGGLE_VALUE_ACCESSOR,b as MatSlideToggle,l as MatSlideToggleChange,K as MatSlideToggleModule,O as MatSlideToggleRequiredValidator,J as _MatSlideToggleRequiredValidatorModule};
