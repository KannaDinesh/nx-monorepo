var he=Object.defineProperty;var j=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var U=(s,i,e)=>i in s?he(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,k=(s,i)=>{for(var e in i||={})le.call(i,e)&&U(s,e,i[e]);if(j)for(var e of j(i))_e.call(i,e)&&U(s,e,i[e]);return s};import{DOCUMENT as l}from"@angular/common";import*as c from"@angular/core";import{inject as o,APP_ID as J,signal as me,QueryList as O,isSignal as H,effect as fe,InjectionToken as m,afterNextRender as pe,NgZone as f,Injector as ee,ElementRef as P,booleanAttribute as W,EventEmitter as ge}from"@angular/core";import{Platform as p,_getFocusedElementPierceShadowDom as be,normalizePassiveListenerOptions as te,_getEventTarget as g,_getShadowRoot as Ie}from"@angular/cdk/platform";import{_CdkPrivateStyleLoader as B,_VisuallyHiddenLoader as K}from"@angular/cdk/private";import{A as ve,Z as ye,ZERO as Ae,NINE as Ee,hasModifierKey as Te,PAGE_DOWN as Ce,PAGE_UP as ke,END as we,HOME as Fe,LEFT_ARROW as Le,RIGHT_ARROW as Me,UP_ARROW as Oe,DOWN_ARROW as De,TAB as xe,ALT as Ne,CONTROL as Re,MAC_META as Se,META as Pe,SHIFT as Be}from"@angular/cdk/keycodes";import{Subject as u,Subscription as ie,isObservable as Ke,of as se,BehaviorSubject as je}from"rxjs";import{tap as Ue,debounceTime as He,filter as We,map as Ve,take as V,skip as $e,distinctUntilChanged as Ye,takeUntil as Ze}from"rxjs/operators";import{coerceObservable as $}from"@angular/cdk/coercion/private";import{ContentObserver as ze,ObserversModule as Ge}from"@angular/cdk/observers";import{coerceElement as w}from"@angular/cdk/coercion";import{BreakpointObserver as qe}from"@angular/cdk/layout";var ne=" ";function Xe(s,i,e){let t=y(s,i);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),s.setAttribute(i,t.join(ne)))}function Qe(s,i,e){let t=y(s,i);e=e.trim();let n=t.filter(r=>r!==e);n.length?s.setAttribute(i,n.join(ne)):s.removeAttribute(i)}function y(s,i){return s.getAttribute(i)?.match(/\S+/g)??[]}var Vt="cdk-describedby-message-container",re="cdk-describedby-message",b="cdk-describedby-host",D=0,$t=(()=>{class s{_platform=o(p);_document=o(l);_messageRegistry=new Map;_messagesContainer=null;_id=`${D++}`;constructor(){o(B).load(K),this._id=o(J)+"-"+D++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=F(t,n);typeof t!="string"?(Y(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=F(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${b}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(b);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement("div");Y(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(F(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=y(e,"aria-describedby").filter(n=>n.indexOf(re)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);Xe(e,"aria-describedby",n.messageElement.id),e.setAttribute(b,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,Qe(e,"aria-describedby",n.messageElement.id),e.removeAttribute(b)}_isElementDescribedByMessage(e,t){let n=y(e,"aria-describedby"),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&n.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let n=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return n?!r||r.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function F(s,i){return typeof s=="string"?`${i||""}/${s}`:s}function Y(s,i){s.id||(s.id=`${re}-${i}-${D++}`)}var Je=200,A=class{_letterKeyStream=new u;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new u;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Je;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=ve&&e<=ye||e>=Ae&&e<=Ee)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ue(e=>this._pressedLetters.push(e)),He(i),We(()=>this._pressedLetters.length>0),Ve(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let n=(this._selectedItemIndex+t)%this._items.length,r=this._items[n];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}},E=class{_items;_activeItemIndex=-1;_activeItem=me(null);_wrap=!1;_typeaheadSubscription=ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof O?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):H(i)&&(this._effectRef=fe(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new u;change=new u;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new A(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex)}onKeydown(i){let e=i.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case xe:this.tabOut.next();return;case De:if(this._vertical&&n){this.setNextItemActive();break}else return;case Oe:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case Me:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case Le:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case Fe:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case we:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case ke:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case Ce:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(n||Te(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),n=e[t];this._activeItem.set(n??null),this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let n=(this._activeItemIndex+i*t+e.length)%e.length,r=e[n];if(!this._skipPredicateFn(r)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return H(this._items)?this._items():this._items instanceof O?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}}},Z=class extends E{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}},z=class extends E{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}},x=class{_activeItemIndex=-1;_activeItem=null;_shouldActivationFollowFocus=!1;_horizontalOrientation="ltr";_skipPredicateFn=i=>!1;_trackByFn=i=>i;_items=[];_typeahead;_typeaheadSubscription=ie.EMPTY;_hasInitialFocused=!1;_initializeFocus(){if(this._hasInitialFocused||this._items.length===0)return;let i=0;for(let t=0;t<this._items.length;t++)if(!this._skipPredicateFn(this._items[t])&&!this._isItemDisabled(this._items[t])){i=t;break}let e=this._items[i];e.makeFocusable?(this._activeItem?.unfocus(),this._activeItemIndex=i,this._activeItem=e,this._typeahead?.setCurrentSelectedItemIndex(i),e.makeFocusable()):this.focusItem(i),this._hasInitialFocused=!0}constructor(i,e){i instanceof O?(this._items=i.toArray(),i.changes.subscribe(t=>{this._items=t.toArray(),this._typeahead?.setItems(this._items),this._updateActiveItemIndex(this._items),this._initializeFocus()})):Ke(i)?i.subscribe(t=>{this._items=t,this._typeahead?.setItems(t),this._updateActiveItemIndex(t),this._initializeFocus()}):(this._items=i,this._initializeFocus()),typeof e.shouldActivationFollowFocus=="boolean"&&(this._shouldActivationFollowFocus=e.shouldActivationFollowFocus),e.horizontalOrientation&&(this._horizontalOrientation=e.horizontalOrientation),e.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),e.trackBy&&(this._trackByFn=e.trackBy),typeof e.typeAheadDebounceInterval<"u"&&this._setTypeAhead(e.typeAheadDebounceInterval)}change=new u;destroy(){this._typeaheadSubscription.unsubscribe(),this._typeahead?.destroy(),this.change.complete()}onKeydown(i){switch(i.key){case"Tab":return;case"ArrowDown":this._focusNextItem();break;case"ArrowUp":this._focusPreviousItem();break;case"ArrowRight":this._horizontalOrientation==="rtl"?this._collapseCurrentItem():this._expandCurrentItem();break;case"ArrowLeft":this._horizontalOrientation==="rtl"?this._expandCurrentItem():this._collapseCurrentItem();break;case"Home":this._focusFirstItem();break;case"End":this._focusLastItem();break;case"Enter":case" ":this._activateCurrentItem();break;default:if(i.key==="*"){this._expandAllItemsAtCurrentItemLevel();break}this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}getActiveItemIndex(){return this._activeItemIndex}getActiveItem(){return this._activeItem}_focusFirstItem(){this.focusItem(this._findNextAvailableItemIndex(-1))}_focusLastItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._items.length))}_focusNextItem(){this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex))}_focusPreviousItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex))}focusItem(i,e={}){e.emitChangeEvent??=!0;let t=typeof i=="number"?i:this._items.findIndex(a=>this._trackByFn(a)===this._trackByFn(i));if(t<0||t>=this._items.length)return;let n=this._items[t];if(this._activeItem!==null&&this._trackByFn(n)===this._trackByFn(this._activeItem))return;let r=this._activeItem;this._activeItem=n??null,this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t),this._activeItem?.focus(),r?.unfocus(),e.emitChangeEvent&&this.change.next(this._activeItem),this._shouldActivationFollowFocus&&this._activateCurrentItem()}_updateActiveItemIndex(i){let e=this._activeItem;if(!e)return;let t=i.findIndex(n=>this._trackByFn(n)===this._trackByFn(e));t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}_setTypeAhead(i){this._typeahead=new A(this._items,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.focusItem(e)})}_findNextAvailableItemIndex(i){for(let e=i+1;e<this._items.length;e++)if(!this._skipPredicateFn(this._items[e]))return e;return i}_findPreviousAvailableItemIndex(i){for(let e=i-1;e>=0;e--)if(!this._skipPredicateFn(this._items[e]))return e;return i}_collapseCurrentItem(){if(this._activeItem)if(this._isCurrentItemExpanded())this._activeItem.collapse();else{let i=this._activeItem.getParent();if(!i||this._skipPredicateFn(i))return;this.focusItem(i)}}_expandCurrentItem(){this._activeItem&&(this._isCurrentItemExpanded()?$(this._activeItem.getChildren()).pipe(V(1)).subscribe(i=>{let e=i.find(t=>!this._skipPredicateFn(t));e&&this.focusItem(e)}):this._activeItem.expand())}_isCurrentItemExpanded(){return this._activeItem?typeof this._activeItem.isExpanded=="boolean"?this._activeItem.isExpanded:this._activeItem.isExpanded():!1}_isItemDisabled(i){return typeof i.isDisabled=="boolean"?i.isDisabled:i.isDisabled?.()}_expandAllItemsAtCurrentItemLevel(){if(!this._activeItem)return;let i=this._activeItem.getParent(),e;i?e=$(i.getChildren()):e=se(this._items.filter(t=>t.getParent()===null)),e.pipe(V(1)).subscribe(t=>{for(let n of t)n.expand()})}_activateCurrentItem(){this._activeItem?.activate()}};function oe(){return(s,i)=>new x(s,i)}var ae=new m("tree-key-manager",{providedIn:"root",factory:oe}),Yt={provide:ae,useFactory:oe},N=class{_isNoopTreeKeyManager=!0;change=new u;destroy(){this.change.complete()}onKeydown(){}getActiveItemIndex(){return null}getActiveItem(){return null}focusItem(){}};function et(){return()=>new N}var Zt={provide:ae,useFactory:et},G=class{ignoreVisibility=!1},ce=(()=>{class s{_platform=o(p);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return it(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=tt(ut(e));if(t&&(q(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=q(e);return e.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ct(e)?!1:n==="audio"?e.hasAttribute("controls")?r!==-1:!1:n==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return dt(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function tt(s){try{return s.frameElement}catch{return null}}function it(s){return!!(s.offsetWidth||s.offsetHeight||typeof s.getClientRects=="function"&&s.getClientRects().length)}function st(s){let i=s.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function nt(s){return ot(s)&&s.type=="hidden"}function rt(s){return at(s)&&s.hasAttribute("href")}function ot(s){return s.nodeName.toLowerCase()=="input"}function at(s){return s.nodeName.toLowerCase()=="a"}function de(s){if(!s.hasAttribute("tabindex")||s.tabIndex===void 0)return!1;let i=s.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function q(s){if(!de(s))return null;let i=parseInt(s.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function ct(s){let i=s.nodeName.toLowerCase(),e=i==="input"&&s.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function dt(s){return nt(s)?!1:st(s)||rt(s)||s.hasAttribute("contenteditable")||de(s)}function ut(s){return s.ownerDocument&&s.ownerDocument.defaultView||window}var T=class{_element;_checker;_ngZone;_document;_injector;_startAnchor;_endAnchor;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,n,r=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=n,this._injector=a,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?pe(i,{injector:this._injector}):setTimeout(i)}},ht=(()=>{class s{_checker=o(ce);_ngZone=o(f);_document=o(l);_injector=o(ee);constructor(){o(B).load(K)}create(e,t=!1){return new T(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),zt=(()=>{class s{_elementRef=o(P);_focusTrapFactory=o(ht);focusTrap;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture;constructor(){o(p).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=be(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=c.\u0275\u0275defineDirective({type:s,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",W],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",W]},exportAs:["cdkTrapFocus"],features:[c.\u0275\u0275NgOnChangesFeature]})}return s})(),R=class extends T{_focusTrapManager;_inertStrategy;get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}constructor(i,e,t,n,r,a,d,C){super(i,e,t,n,d.defer,C),this._focusTrapManager=r,this._inertStrategy=a,this._focusTrapManager.register(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}},S=class{_listener=null;preventFocus(i){this._listener&&i._document.removeEventListener("focus",this._listener,!0),this._listener=e=>this._trapFocus(i,e),i._ngZone.runOutsideAngular(()=>{i._document.addEventListener("focus",this._listener,!0)})}allowFocus(i){this._listener&&(i._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(i,e){let t=e.target,n=i._element;t&&!n.contains(t)&&!t.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{i.enabled&&!n.contains(i._document.activeElement)&&i.focusFirstTabbableElement()})}},lt=new m("FOCUS_TRAP_INERT_STRATEGY"),_t=(()=>{class s{_focusTrapStack=[];register(e){this._focusTrapStack=this._focusTrapStack.filter(n=>n!==e);let t=this._focusTrapStack;t.length&&t[t.length-1]._disable(),t.push(e),e._enable()}deregister(e){e._disable();let t=this._focusTrapStack,n=t.indexOf(e);n!==-1&&(t.splice(n,1),t.length&&t[t.length-1]._enable())}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Gt=(()=>{class s{_checker=o(ce);_ngZone=o(f);_focusTrapManager=o(_t);_document=o(l);_inertStrategy;_injector=o(ee);constructor(){let e=o(lt,{optional:!0});this._inertStrategy=e||new S}create(e,t={defer:!1}){let n;return typeof t=="boolean"?n={defer:t}:n=t,new R(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n,this._injector)}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function mt(s){return s.buttons===0||s.detail===0}function ft(s){let i=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var pt=new m("cdk-input-modality-detector-options"),gt={ignoreKeys:[Ne,Re,Se,Pe,Be]},ue=650,_=te({passive:!0,capture:!0}),bt=(()=>{class s{_platform=o(p);modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=g(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ue||(this._modality.next(mt(e)?"keyboard":"mouse"),this._mostRecentTarget=g(e))};_onTouchstart=e=>{if(ft(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=g(e)};constructor(){let e=o(f),t=o(l),n=o(pt,{optional:!0});this._options=k(k({},gt),n),this.modalityDetected=this._modality.pipe($e(1)),this.modalityChanged=this.modalityDetected.pipe(Ye()),this._platform.isBrowser&&e.runOutsideAngular(()=>{t.addEventListener("keydown",this._onKeydown,_),t.addEventListener("mousedown",this._onMousedown,_),t.addEventListener("touchstart",this._onTouchstart,_)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,_),document.removeEventListener("mousedown",this._onMousedown,_),document.removeEventListener("touchstart",this._onTouchstart,_))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),It=new m("liveAnnouncerElement",{providedIn:"root",factory:vt});function vt(){return null}var yt=new m("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),At=0,Et=(()=>{class s{_ngZone=o(f);_defaultOptions=o(yt,{optional:!0});_liveElement;_document=o(l);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=o(It,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:"polite"),a==null&&n&&(a=n.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id=`cdk-live-announcer-${At++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let r=t[n],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),qt=(()=>{class s{_elementRef=o(P);_liveAnnouncer=o(Et);_contentObserver=o(ze);_ngZone=o(f);get politeness(){return this._politeness}set politeness(e){this._politeness=e==="off"||e==="assertive"?e:"polite",this._politeness==="off"?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{let t=this._elementRef.nativeElement.textContent;t!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(t,this._politeness,this.duration),this._previousAnnouncedText=t)})))}_politeness="polite";duration;_previousAnnouncedText;_subscription;constructor(){o(B).load(K)}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=c.\u0275\u0275defineDirective({type:s,selectors:[["","cdkAriaLive",""]],inputs:{politeness:[0,"cdkAriaLive","politeness"],duration:[0,"cdkAriaLiveDuration","duration"]},exportAs:["cdkAriaLive"]})}return s})(),v=function(s){return s[s.IMMEDIATE=0]="IMMEDIATE",s[s.EVENTUAL=1]="EVENTUAL",s}(v||{}),Tt=new m("cdk-focus-monitor-default-options"),I=te({passive:!0,capture:!0}),Ct=(()=>{class s{_ngZone=o(f);_platform=o(p);_inputModalityDetector=o(bt);_origin=null;_lastFocusOrigin;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=o(l,{optional:!0});_stopInputModalityDetector=new u;constructor(){let e=o(Tt,{optional:!0});this._detectionMode=e?.detectionMode||v.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=g(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=w(e);if(!this._platform.isBrowser||n.nodeType!==1)return se();let r=Ie(n)||this._getDocument(),a=this._elementInfo.get(n);if(a)return t&&(a.checkChildren=!0),a.subject;let d={checkChildren:t,subject:new u,rootNode:r};return this._elementInfo.set(n,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(e){let t=w(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=w(e),a=this._getDocument().activeElement;r===a?this._getClosestElementsInfo(r).forEach(([d,C])=>this._originChanged(d,t,C)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===v.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===v.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?ue:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=g(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,I),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,I)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ze(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,I),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,I),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Xt=(()=>{class s{_elementRef=o(P);_focusMonitor=o(Ct);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new ge;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=c.\u0275\u0275defineDirective({type:s,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return s})(),h=function(s){return s[s.NONE=0]="NONE",s[s.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",s[s.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",s}(h||{}),X="cdk-high-contrast-black-on-white",Q="cdk-high-contrast-white-on-black",L="cdk-high-contrast-active",kt=(()=>{class s{_platform=o(p);_hasCheckedHighContrastMode;_document=o(l);_breakpointSubscription;constructor(){this._breakpointSubscription=o(qe).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return h.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return h.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return h.BLACK_ON_WHITE}return h.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(L,X,Q),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===h.BLACK_ON_WHITE?e.add(L,X):t===h.WHITE_ON_BLACK&&e.add(L,Q)}}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Qt=(()=>{class s{constructor(){o(kt)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||s)};static \u0275mod=c.\u0275\u0275defineNgModule({type:s});static \u0275inj=c.\u0275\u0275defineInjector({imports:[Ge]})}return s})(),M={},Jt=(()=>{class s{_appId=o(J);getId(e){return this._appId!=="ng"&&(e+=this._appId),M.hasOwnProperty(e)||(M[e]=0),`${e}${M[e]++}`}static \u0275fac=function(t){return new(t||s)};static \u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();export{Qt as A11yModule,Z as ActiveDescendantKeyManager,$t as AriaDescriber,b as CDK_DESCRIBEDBY_HOST_ATTRIBUTE,re as CDK_DESCRIBEDBY_ID_PREFIX,qt as CdkAriaLive,Xt as CdkMonitorFocus,zt as CdkTrapFocus,R as ConfigurableFocusTrap,Gt as ConfigurableFocusTrapFactory,S as EventListenerFocusTrapInertStrategy,Tt as FOCUS_MONITOR_DEFAULT_OPTIONS,lt as FOCUS_TRAP_INERT_STRATEGY,z as FocusKeyManager,Ct as FocusMonitor,v as FocusMonitorDetectionMode,T as FocusTrap,ht as FocusTrapFactory,h as HighContrastMode,kt as HighContrastModeDetector,gt as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,pt as INPUT_MODALITY_DETECTOR_OPTIONS,bt as InputModalityDetector,ce as InteractivityChecker,G as IsFocusableConfig,yt as LIVE_ANNOUNCER_DEFAULT_OPTIONS,It as LIVE_ANNOUNCER_ELEMENT_TOKEN,vt as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,E as ListKeyManager,Et as LiveAnnouncer,Vt as MESSAGES_CONTAINER_ID,et as NOOP_TREE_KEY_MANAGER_FACTORY,Zt as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER,N as NoopTreeKeyManager,ae as TREE_KEY_MANAGER,oe as TREE_KEY_MANAGER_FACTORY,Yt as TREE_KEY_MANAGER_FACTORY_PROVIDER,x as TreeKeyManager,Jt as _IdGenerator,Xe as addAriaReferencedId,y as getAriaReferenceIds,mt as isFakeMousedownFromScreenReader,ft as isFakeTouchstartFromScreenReader,Qe as removeAriaReferencedId};
