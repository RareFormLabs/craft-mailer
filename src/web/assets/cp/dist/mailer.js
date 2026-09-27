var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap,o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}},s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,v=_.trustedTypes,y=v?v.emptyScript:``,b=_.reactiveElementPolyfillSupport,x=(e,t)=>e,ee={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},te=(e,t)=>!d(e,t),ne={attribute:!0,type:String,converter:ee,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=new WeakMap;var re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(x(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ee:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ee:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??te)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};re.elementStyles=[],re.shadowRootOptions={mode:`open`},re[x(`elementProperties`)]=new Map,re[x(`finalized`)]=new Map,b?.({ReactiveElement:re}),(_.reactiveElementVersions??=[]).push(`2.1.2`);var ie=globalThis,ae=e=>e,oe=ie.trustedTypes,se=oe?oe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ce=`$lit$`,le=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+le,de=`<${ue}>`,fe=document,pe=()=>fe.createComment(``),me=e=>e===null||typeof e!=`object`&&typeof e!=`function`,he=Array.isArray,ge=e=>he(e)||typeof e?.[Symbol.iterator]==`function`,_e=`[ 	
\f\r]`,ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,be=/>/g,xe=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Se=/'/g,Ce=/"/g,we=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Te=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),Ee=new WeakMap,De=fe.createTreeWalker(fe,129);function Oe(e,t){if(!he(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return se===void 0?t:se.createHTML(t)}var ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ve;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ve?c[1]===`!--`?o=ye:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=xe):(we.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=xe):o=be:o===xe?c[0]===`>`?(o=i??ve,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?xe:c[3]===`"`?Ce:Se):o===Ce||o===Se?o=xe:o===ye||o===be?o=ve:(o=xe,i=void 0);let d=o===xe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ve?n+de:l>=0?(r.push(s),n.slice(0,l)+ce+n.slice(l)+le+d):n+le+(l===-2?t:d)}return[Oe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ae=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ke(t,n);if(this.el=e.createElement(l,r),De.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=De.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ce)){let t=u[o++],n=i.getAttribute(e).split(le),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:Pe}),i.removeAttribute(e)}else e.startsWith(le)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(we.test(i.tagName)){let e=i.textContent.split(le),t=e.length-1;if(t>0){i.textContent=oe?oe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],pe()),De.nextNode(),c.push({type:2,index:++a});i.append(e[t],pe())}}}else if(i.nodeType===8){if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(le,e+1))!==-1;)c.push({type:7,index:a}),e+=le.length-1}}a++}}static createElement(e,t){let n=fe.createElement(`template`);return n.innerHTML=e,n}};function je(e,t,n=e,r){if(t===Te)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=me(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=je(e,i._$AS(e,t.values),i,r)),t}var Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??fe).importNode(t,!0);De.currentNode=r;let i=De.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ne(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=De.nextNode(),a++)}return De.currentNode=fe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ne=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),me(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Te&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ge(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&me(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new Ae(e)),t}k(t){he(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(pe()),this.O(pe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ae(e).nextSibling;ae(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=je(this,e,t,0),a=!me(e)||e!==this._$AH&&e!==Te,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=je(this,r[n+o],t,o),s===Te&&(s=this._$AH[o]),a||=!me(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ie=class extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Le=class extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??C)===Te)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}},ze={M:ce,P:le,A:ue,C:1,L:ke,R:Me,D:ge,V:je,I:Ne,H:Pe,N:Ie,U:Le,B:Fe,F:Re},Be=ie.litHtmlPolyfillSupport;Be?.(Ae,Ne),(ie.litHtmlVersions??=[]).push(`3.3.3`);var Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ne(t.insertBefore(pe(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis,Ue=class extends re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});var We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.2`);var Ge={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:te},Ke=(e=Ge,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function w(e){return(t,n)=>typeof n==`object`?Ke(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function T(e){return w({...e,state:!0,attribute:!1})}var qe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function E(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return qe(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return qe(n,r,{get(){return a(this)}})}}var Je=e=>(t,n)=>{let r=()=>{customElements.get(e)||customElements.define(e,t)};n===void 0?r():n.addInitializer(r)},Ye=new Map;function Xe(e,t,n){let r=t.flatMap(e=>Array.isArray(e)?e:[e]).map(e=>`cssText`in e&&typeof e.cssText==`string`?e.cssText:s(e).cssText).join(`
`);if(!(`adoptedStyleSheets`in Document.prototype)||typeof CSSStyleSheet>`u`){let i=n??String(t.length);if(!e.querySelector(`style[data-pk-adopted-styles="${i}"]`)){let t=document.createElement(`style`);t.dataset.pkAdoptedStyles=i,t.textContent=r,e.prepend(t)}return}let i=n??r,a=Ye.get(i);a||(a=new CSSStyleSheet,a.replaceSync(r),Ye.set(i,a)),e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]}var Ze=c`
    @layer pk-component {
        :host {
            display: inline-block;
            vertical-align: middle;
        }
    }
`;c`
    .pk-focus-ring:focus {
        outline: none;
    }

    .pk-focus-ring:focus-visible {
        box-shadow: var(--pk-shadow-focus);
    }
`;var Qe=c`
    @layer pk-reset {
        :host {
            box-sizing: border-box;
        }

        :host *,
        :host *::before,
        :host *::after {
            box-sizing: border-box;
        }

        :host(:not([hidden])) {
            /* Prevent UA / CP margin on unstyled custom element hosts in light DOM. */
            margin: 0;
        }
    }
`,$e=class extends Ue{constructor(...e){super(...e),this.pkRenderFailed=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}connectedCallback(){super.connectedCallback(),this.hasAttribute(`data-pk`)||this.setAttribute(`data-pk`,``)}createRenderRoot(){let e=super.createRenderRoot();return Xe(e,[Qe],`pk-shadow-reset`),e}performUpdate(){if(!this.pkRenderFailed)try{let e=super.performUpdate();e instanceof Promise&&e.catch(e=>{this.handleRenderFailure(e)})}catch(e){this.handleRenderFailure(e)}}handleRenderFailure(e){let t=e instanceof Error?e:Error(String(e));this.pkRenderFailed=!0,this.dispatchEvent(new CustomEvent(`pk-error`,{detail:{tagName:this.localName||this.tagName.toLowerCase(),message:t.message,stack:t.stack},bubbles:!0,composed:!0}));try{let e=this.renderRoot;if(e){e.textContent=``;let t=document.createElement(`div`);t.setAttribute(`part`,`error`),t.setAttribute(`role`,`alert`),t.textContent=`This control failed to load.`,e.appendChild(t)}}catch{}}};function D(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function et(e=`default`){return e===`xxs`||e===`xs`?`xxs`:e===`lg`||e===`xl`?`sm`:`xs`}function tt(e=`default`,t){return t||(e===`primary`||e===`secondary`||e===`dashed`||e===`outline`||e===`transparent`?e:`default`)}var nt=[Ze,c`
        @layer pk-component {
            :host {
                display: block;
                box-sizing: border-box;
            }

            :host([centered]) {
                position: absolute;
                top: 50%;
                left: 50%;
                display: block;
                width: fit-content;
                height: fit-content;
                margin: 0;
                transform: translate(-50%, -50%);
            }

            .spinner {
                display: block;
                box-sizing: border-box;
                margin-inline: auto;
                border-style: solid;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-radius: 50%;
                animation: pk-spinner-spin 0.5s linear infinite;
            }

            /* Sizes */
            :host([size='xxs']) .spinner {
                width: 0.75rem;
                height: 0.75rem;
                border-width: 1px;
            }

            :host([size='xs']) .spinner {
                width: 1rem;
                height: 1rem;
                border-width: 2px;
            }

            :host([size='sm']) .spinner,
            :host(:not([size])) .spinner {
                width: 1.5rem;
                height: 1.5rem;
                border-width: 2px;
            }

            :host([size='md']) .spinner {
                width: 2rem;
                height: 2rem;
                border-width: 2px;
            }

            :host([size='lg']) .spinner {
                width: 3rem;
                height: 3rem;
                border-width: 2px;
            }

            :host([size='xl']) .spinner {
                width: 4rem;
                height: 4rem;
                border-width: 2px;
            }

            /* Variants — matched to button loading contrast */
            :host([variant='default']:not([tone])) .spinner {
                border-top-color: var(--pk-color-red-500);
                border-right-color: var(--pk-color-red-500);
            }

            :host([variant='primary']:not([tone])) .spinner,
            :host([variant='secondary']:not([tone])) .spinner {
                border-top-color: var(--pk-color-white);
                border-right-color: var(--pk-color-white);
            }

            :host([variant='dashed']:not([tone])) .spinner,
            :host([variant='outline']:not([tone])) .spinner,
            :host([variant='transparent']:not([tone])) .spinner {
                border-top-color: var(--pk-color-gray-700);
                border-right-color: var(--pk-color-gray-700);
            }

            /* Standalone tone overrides */
            :host([tone='sky']) .spinner {
                border-top-color: var(--pk-color-sky-600);
                border-right-color: var(--pk-color-sky-600);
            }

            :host([tone='emerald']) .spinner {
                border-top-color: var(--pk-color-emerald-600);
                border-right-color: var(--pk-color-emerald-600);
            }

            :host([tone='violet']) .spinner {
                border-top-color: var(--pk-color-violet-600);
                border-right-color: var(--pk-color-violet-600);
            }

            :host([tone='amber']) .spinner {
                border-top-color: var(--pk-color-amber-500);
                border-right-color: var(--pk-color-amber-500);
            }

            @keyframes pk-spinner-spin {
                to {
                    transform: rotate(360deg);
                }
            }
        }
    `],rt=class extends $e{constructor(...e){super(...e),this.variant=`default`,this.size=`sm`,this.centered=!1}static{this.styles=nt}render(){return S`
            <div part="base" class="spinner" aria-hidden="true"></div>
        `}};D([w({reflect:!0})],rt.prototype,`variant`,void 0),D([w({reflect:!0})],rt.prototype,`size`,void 0),D([w({reflect:!0})],rt.prototype,`tone`,void 0),D([w({type:Boolean,reflect:!0})],rt.prototype,`centered`,void 0),rt=D([Je(`pk-spinner`)],rt);var it=c`
    @layer pk-component {
        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
            vertical-align: middle;
            overflow: visible;
        }
    }
`;function at(e,t=`var(--pk-btn-radius, var(--pk-radius-lg))`){let n=s(e),r=s(t);return c`
        ${n} {
            border-top-left-radius: var(--pk-bg-start-start-radius, ${r});
            border-top-right-radius: var(--pk-bg-start-end-radius, ${r});
            border-bottom-left-radius: var(--pk-bg-end-start-radius, ${r});
            border-bottom-right-radius: var(--pk-bg-end-end-radius, ${r});
        }
    `}function ot(){return c`
        :host([data-pk-group-orientation='horizontal']:not([data-pk-group-item-first]):not([data-pk-group-item-last])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-item-first]:not([data-pk-group-item-last])) {
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-item-last]:not([data-pk-group-item-first])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-end-start-radius: 0;
        }

        :host([data-pk-group-orientation='vertical']:not([data-pk-group-item-first]):not([data-pk-group-item-last])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-item-first]:not([data-pk-group-item-last])) {
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-item-last]:not([data-pk-group-item-first])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
        }
    `}function st(){return c`
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join][variant='outline']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join][variant='dashed']) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join][variant='outline']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-join][variant='dashed']) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            margin-inline-start: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([variant='outline']):not([variant='dashed']):not([variant='link']):not([variant='none'])) {
            margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([variant='outline']):not([variant='dashed']):not([variant='link']):not([variant='none'])) {
            margin-block-start: var(--pk-bg-vertical-indent, 0);
            margin-inline-start: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='primary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='secondary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='default']) {
            margin-inline-start: 0;
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='primary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='secondary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='default']) {
            margin-block-start: 0;
            margin-inline-start: 0;
        }

        /* Filled variants — Craft margin gap; parent background shows through.
         * !important: outer preflight/utilities beat non-important :host margin
         * (revert-layer cannot restore shadow host values — it still specifies outer 0).
         */
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='primary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='secondary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='default']) {
            margin-inline-end: var(--pk-btn-group-gap, 1px) !important;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='primary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='secondary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='default']) {
            margin-block-end: var(--pk-btn-group-gap, 1px) !important;
        }
    `}function ct(e){let t=s(e);return c`
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) ${t} {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) ${t} {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]:not([variant='outline']):not([variant='dashed'])) ${t} {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]:not([variant='outline']):not([variant='dashed'])) ${t} {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) ${t},
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) ${t} {
            border-right-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) ${t},
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) ${t} {
            border-bottom-width: 0;
        }
    `}var lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ut=e=>(...t)=>({_$litDirective$:e,values:t}),dt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ft=ut(class extends dt{constructor(e){if(super(e),e.type!==lt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Te}}),pt=class extends dt{constructor(e){if(super(e),this.it=C,e.type!==lt.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===Te)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};pt.directiveName=`unsafeHTML`,pt.resultType=1;var mt=ut(pt),ht=class extends pt{};ht.directiveName=`unsafeSVG`,ht.resultType=2;var gt=ut(ht),_t={width:448,height:512,path:`M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z`},vt={width:448,height:512,path:`M448 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z`},yt={width:448,height:512,path:`M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`},bt={width:448,height:512,path:`M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`},xt={width:384,height:512,path:`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`},St={width:512,height:512,path:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`},Ct={width:512,height:512,path:`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`},wt={width:512,height:512,path:`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`},Tt={width:512,height:512,path:`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`},Et={width:384,height:512,path:`M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z`},Dt={width:512,height:512,path:`M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z`},Ot={width:448,height:512,path:`M224 0c17.7 0 32 14.3 32 32l0 168.6 144-83.1c15.3-8.8 34.9-3.6 43.7 11.7s3.6 34.9-11.7 43.7L288 256 432 339.1c15.3 8.8 20.6 28.4 11.7 43.7s-28.4 20.6-43.7 11.7L256 311.4 256 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-168.6-144 83.1c-15.3 8.8-34.9 3.6-43.7-11.7S.7 348 16 339.1L160 256 16 172.9C.7 164-4.5 144.5 4.3 129.1S32.7 108.6 48 117.4L192 200.6 192 32c0-17.7 14.3-32 32-32z`},kt={width:384,height:512,path:`M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l32 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128L32 32zM288 160c0 35.3-28.7 64-64 64l-96 0 0-128 96 0c35.3 0 64 28.7 64 64zM128 416l0-128 128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-128 0z`},At={width:576,height:512,path:`M416 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 37.5c0 25.5 10.1 49.9 28.1 67.9l22.6 22.6-22.6 22.6c-18 18-28.1 42.4-28.1 67.9l0 37.5c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c53 0 96-43 96-96l0-37.5c0-8.5 3.4-16.6 9.4-22.6l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3l-45.3-45.3c-6-6-9.4-14.1-9.4-22.6l0-37.5c0-53-43-96-96-96zM160 32c-53 0-96 43-96 96l0 37.5c0 8.5-3.4 16.6-9.4 22.6L9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l45.3 45.3c6 6 9.4 14.1 9.4 22.6L64 384c0 53 43 96 96 96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32-14.3-32-32l0-37.5c0-25.5-10.1-49.9-28.1-67.9L77.3 256 99.9 233.4c18-18 28.1-42.4 28.1-67.9l0-37.5c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z`},jt={width:448,height:512,path:`M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z`},Mt={width:320,height:512,path:`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`},Nt={width:320,height:512,path:`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`},Pt={width:448,height:512,path:`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`},Ft={width:448,height:512,path:`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`},It={width:320,height:512,path:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`},Lt={width:320,height:512,path:`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`},Rt={width:448,height:512,path:`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`},zt={width:512,height:512,path:`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z`},Bt={width:512,height:512,path:`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`},Vt={width:512,height:512,path:`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`},Ht={width:512,height:512,path:`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`},Ut={width:384,height:512,path:`M320 32l-8.6 0C300.4 12.9 279.7 0 256 0L128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64zM136 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0z`},Wt={width:512,height:512,path:`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`},Gt={width:512,height:512,path:`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`},Kt={width:576,height:512,path:`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`},qt={width:448,height:512,path:`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`},Jt={width:448,height:512,path:`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`},Yt={width:448,height:512,path:`M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z`},Xt={width:576,height:512,path:`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`},Zt={width:576,height:512,path:`M272 48L160 48c-8.8 0-16 7.2-16 16l0 176-48 0 0-176c0-35.3 28.7-64 64-64L293.5 0c17 0 33.3 6.7 45.3 18.7L461.3 141.3c12 12 18.7 28.3 18.7 45.3l0 53.5-48 0 0-32-88 0c-39.8 0-72-32.2-72-72l0-88zM96 384l48 0 0 64c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64zM412.1 160L320 67.9 320 136c0 13.3 10.7 24 24 24l68.1 0zM24 288l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24zm208 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm208 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`},Qt={width:448,height:512,path:`M32 0C49.7 0 64 14.3 64 32l0 16 69-17.2c38.1-9.5 78.3-5.1 113.5 12.5 46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1l0 279.7c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4-37.9-19-81.4-23.7-122.5-13.4L64 384 64 480c0 17.7-14.3 32-32 32S0 497.7 0 480L0 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9 0 65.5-64 13.9 0 65.5 48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3l0-63.9 38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9 0 66.7-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8l0 71.4c21.8 1.9 43.3 6.7 64 14.4l0-69.8 22.7 6.7c13.5 4 27.3 6.4 41.3 7.4l0-64.2c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12 0-62c-13-3.8-25.8-8.8-38.2-15-8.2-4.1-16.9-7-25.8-8.8l0 72.4c-13-.4-26 .8-38.7 3.6l-25.3 5.5 0-75.2-64 16 0 73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2 0-71.7-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5l0 77.4zm64-149.4l0-70.8c-20.9 6.1-42.4 9.1-64 9.1l0 69.4c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z`},$t={width:448,height:512,path:`M71.3 295.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2s-57.4 21.9-79.2 0zM184.4 182.5c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2-57.3 21.8-79.2 0zm0 147c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.9-21.8-21.9-57.3 0-79.2zM297.5 216.4c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.8-21.9-21.8-57.3 0-79.2z`},en={width:512,height:512,path:`M64 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM256 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm192 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM256 416a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM64 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z`},tn={width:320,height:512,path:`M128 64A64 64 0 1 0 0 64 64 64 0 1 0 128 64zm0 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM0 448c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64zM320 64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM320 448c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z`},nn={width:512,height:512,path:`M448 96c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-64 32c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l17.7-8.8 0 236.2-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-288zM64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 128 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-128 0 0-128z`},rn={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM368 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l81.1 0c21.5 0 38.9 17.4 38.9 38.9 0 13.9-7.5 26.8-19.6 33.8l-76.3 43.6C347.5 269.7 320 317.1 320 368.5l0 47.5c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-15.5c0-28.4 15.2-54.6 39.9-68.7l76.3-43.6C532.2 237.9 552 203.8 552 166.9 552 110.1 505.9 64 449.1 64L368 64z`},an={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 256c0 17.7 14.3 32 32 32l56 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c61.9 0 112-50.1 112-112 0-31.3-12.9-59.7-33.6-80 20.7-20.3 33.6-48.7 33.6-80 0-61.9-50.1-112-112-112l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-56 0c-17.7 0-32 14.3-32 32z`},on={width:512,height:512,path:`M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zm288 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 44.2 35.8 80 80 80l80 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-80 0c-8.8 0-16-7.2-16-16l0-112z`},sn={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 64c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l80 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0c66.3 0 120-53.7 120-120S498.3 208 432 208l-48 0 0-80 120 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L352 64z`},cn={width:512,height:512,path:`M32 64c17.7 0 32 14.3 32 32l0 128 96 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-96 0 0 128c0 17.7-14.3 32-32 32S0 433.7 0 416L0 96C0 78.3 14.3 64 32 64zm352 64c-17.7 0-32 14.3-32 32l0 53.5c10-3.5 20.8-5.5 32-5.5l32 0c53 0 96 43 96 96l0 48c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-192c0-53 43-96 96-96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0zM352 304l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z`},ln={width:576,height:512,path:`M315 315L473.4 99.9 444.1 70.6 229 229 315 315zm-187 5l0 0 0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0 457.6 0 468.5 4.5 476.6 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5l-71.7 0-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l51.7-51.7 70.6 70.6-19.7 19.7c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z`},un={width:512,height:512,path:`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`},dn={width:384,height:512,path:`M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0-133.3 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0 133.3-320-64 0c-17.7 0-32-14.3-32-32z`},fn={width:384,height:512,path:`M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z`},pn={width:576,height:512,path:`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`},mn={width:384,height:512,path:`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`},hn={width:512,height:512,path:`M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z`},gn={width:512,height:512,path:`M0 72C0 58.8 10.7 48 24 48l48 0c13.3 0 24 10.7 24 24l0 104 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-80-24 0C10.7 96 0 85.3 0 72zM30.4 301.2C41.8 292.6 55.7 288 70 288l4.9 0c33.7 0 61.1 27.4 61.1 61.1 0 19.6-9.4 37.9-25.2 49.4l-24 17.5 33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-90.7 0C13.1 464 0 450.9 0 434.7 0 425.3 4.5 416.5 12.1 411l70.5-51.3c3.4-2.5 5.4-6.4 5.4-10.6 0-7.2-5.9-13.1-13.1-13.1L70 336c-3.9 0-7.7 1.3-10.8 3.6L38.4 355.2c-10.6 8-25.6 5.8-33.6-4.8S-1 324.8 9.6 316.8l20.8-15.6zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`},_n={width:512,height:512,path:`M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`},vn={width:448,height:512,path:`M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z`},yn={width:448,height:512,path:`M0 64C0 46.3 14.3 32 32 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 320 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-320-16 0C14.3 96 0 81.7 0 64z`},bn={width:448,height:512,path:`M160 0L416 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-416-48 0 0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160-48 0C71.6 320 0 248.4 0 160S71.6 0 160 0z`},xn={width:512,height:512,path:`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`},Sn={width:448,height:512,path:`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`},Cn={width:512,height:512,path:`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z`},wn={width:448,height:512,path:`M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z`},Tn={width:512,height:512,path:`M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z`},En={width:512,height:512,path:`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`},Dn={width:512,height:512,path:`M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z`},On={width:576,height:512,path:`M32 448L160 64h64l128 384h-64l-32-96H128l-32 96H32zm117.3-160h85.3L192 160l-42.7 128zM336 448l80-240h48l80 240h-48l-16-48h-80l-16 48h-48zm80-96h48l-24-72-24 72z`},kn={width:512,height:512,path:`M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z`},An={width:512,height:512,path:`M96 157.5C96 88.2 152.2 32 221.5 32L368 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L221.5 96c-34 0-61.5 27.5-61.5 61.5 0 31 23.1 57.2 53.9 61l44.1 5.5 222 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l83.1 0C103 204.6 96 181.8 96 157.5zM349.2 336l65.5 0c.9 6.1 1.4 12.2 1.4 18.5 0 69.3-56.2 125.5-125.5 125.5L144 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l146.5 0c34 0 61.5-27.5 61.5-61.5 0-6.4-1-12.7-2.8-18.5z`},jn={width:576,height:512,path:`M96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l15.3 0 89.6 128-89.6 128-15.3 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c10.4 0 20.2-5.1 26.2-13.6L240 311.8 325.8 434.4c6 8.6 15.8 13.6 26.2 13.6l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-15.3 0-89.6-128 89.6-128 15.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-10.4 0-20.2 5.1-26.2 13.6L240 200.2 154.2 77.6C148.2 69.1 138.4 64 128 64L96 64zM544 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9 5.6 11.2 16.9 17.7 28.6 17.7l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128z`},Mn={width:576,height:512,path:`M544 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16C449.9 27.3 443.5 46.5 451.4 62.3 457 73.5 468.3 80 480 80l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128zM96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l15.3 0 89.6 128-89.6 128-15.3 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c10.4 0 20.2-5.1 26.2-13.6L240 311.8 325.8 434.4c6 8.6 15.8 13.6 26.2 13.6l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-15.3 0-89.6-128 89.6-128 15.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-10.4 0-20.2 5.1-26.2 13.6L240 200.2 154.2 77.6C148.2 69.1 138.4 64 128 64L96 64z`},Nn={width:448,height:512,path:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-320 0-6.5-.3C25.2 476.4 0 449.1 0 416L0 96C0 60.7 28.7 32 64 32l320 0zM64 320l0 96 128 0 0-96-128 0zm192 0l0 96 128 0 0-96-128 0zM64 256l128 0 0-96-128 0 0 96zm192 0l128 0 0-96-128 0 0 96z`},Pn={width:576,height:512,path:`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L322.7 256.9 368.2 96 471 96 465 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C545.6 61.3 522.7 32 491.5 32l-319 0c-19.8 0-37.3 12.1-44.5 30.1l-87-87zM180.4 114.5l4.6-18.5 116.7 0-30.8 109-90.5-90.5zM241 310.8L211.3 416 160 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-42.2 0 15.1-53.3-51.9-51.9z`},Fn={width:512,height:512,path:`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`},In={width:384,height:512,path:`M0 32C0 14.3 14.3 0 32 0L96 0c17.7 0 32 14.3 32 32S113.7 64 96 64l0 160c0 53 43 96 96 96s96-43 96-96l0-160c-17.7 0-32-14.3-32-32S270.3 0 288 0l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 160c0 88.4-71.6 160-160 160S32 312.4 32 224L32 64C14.3 64 0 49.7 0 32zM0 480c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z`},Ln={width:384,height:512,path:`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`},Rn={width:128,height:512,path:`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`},zn={width:512,height:512,path:`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`},Bn={width:512,height:512,path:`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`},Vn={width:448,height:512,path:`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`},Hn={alignCenter:_t,alignJustify:vt,alignLeft:yt,alignRight:bt,arrowDown:xt,arrowLeft:St,arrowRight:Ct,arrowRotateLeft:wt,arrowRotateRight:Tt,arrowUp:Et,arrowUpRightFromSquare:Dt,asterisk:Ot,bold:kt,bracketsCurly:At,calendar:jt,caretDown:Mt,caretUp:Nt,check:Pt,chevronDown:Ft,chevronLeft:It,chevronRight:Lt,chevronUp:Rt,circle:zt,circleCheck:Bt,circleExclamation:Vt,circleInfo:Ht,clipboard:Ut,clock:Wt,clone:Gt,code:Kt,copy:qt,download:Jt,ellipsis:Yt,ellipsisVertical:Rn,eye:Xt,fileDashedLine:Zt,flagCheckered:Qt,gear:zn,gripDots:en,gripDotsVertical:tn,gripMove:$t,h1:nn,h2:rn,h3:an,h4:on,h5:sn,h6:cn,heading:yn,highlighter:ln,house:un,italic:dn,lightbulb:fn,link:pn,lock:mn,list:hn,listOl:gn,listUl:_n,minus:vn,paragraph:bn,pen:xn,penToSquare:Bn,plus:Sn,circlePlus:Cn,quoteRight:wn,arrowsRotate:Tn,magnifyingGlass:En,share:Dn,smallCaps:On,sliders:kn,strikethrough:An,subscript:jn,superscript:Mn,table:Nn,textSlash:Pn,trash:Vn,triangleExclamation:Fn,underline:In,xmark:Ln},Un=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Wn=e=>{let t=e.trim();return t&&(/[A-Z]/.test(t)?Un(t):t.toLowerCase())},Gn=`__PK_ICON_REGISTRY__`,Kn=`__PK_ICON_REGISTRY_LISTENERS__`,qn=()=>{let e=globalThis;return e[Gn]||(e[Gn]={}),e[Gn]},Jn=()=>{let e=globalThis;return e[Kn]||(e[Kn]=new Set),e[Kn]},Yn=()=>{for(let e of Jn())try{e()}catch{}},Xn=e=>{let t=Jn();return t.add(e),()=>{t.delete(e)}},Zn=()=>Object.keys(qn()).sort(),Qn=e=>{if(!e)return;let t=qn();return t[Wn(e)]??t[e]},$n=(e,t)=>{let n=Wn(e);if(!n)throw Error(`registerIcon: name must be a non-empty string`);if(!t?.path||!t.width||!t.height)throw Error(`registerIcon: icon "${n}" must include width, height, and path`);qn()[n]=t,Yn()},er=e=>{let t=!1;for(let[n,r]of Object.entries(e)){let e=Wn(n);if(!e)throw Error(`registerIcon: name must be a non-empty string`);if(!r?.path||!r.width||!r.height)throw Error(`registerIcon: icon "${e}" must include width, height, and path`);qn()[e]=r,t=!0}t&&Yn()},tr=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),nr=e=>{let{width:t,height:n}=e;if(t===n)return`0 0 ${t} ${n}`;let r=Math.max(t,n);return`${(t-r)/2} ${(n-r)/2} ${r} ${r}`},rr=(e,t={})=>{let{title:n,className:r,attributes:i={}}=t,a={xmlns:`http://www.w3.org/2000/svg`,viewBox:nr(e),overflow:`visible`,...i};return r&&(a.class=r),n?(a.role=`img`,a[`aria-label`]=n):(a[`aria-hidden`]=`true`,a.focusable=`false`),`<svg ${Object.entries(a).map(([e,t])=>`${e}="${tr(t)}"`).join(` `)}><path fill="currentColor" d="${tr(e.path)}"/></svg>`},ir=t({alignCenter:()=>_t,alignJustify:()=>vt,alignLeft:()=>yt,alignRight:()=>bt,arrowDown:()=>xt,arrowLeft:()=>St,arrowRight:()=>Ct,arrowRotateLeft:()=>wt,arrowRotateRight:()=>Tt,arrowUp:()=>Et,arrowUpRightFromSquare:()=>Dt,arrowsRotate:()=>Tn,asterisk:()=>Ot,bold:()=>kt,bracketsCurly:()=>At,calendar:()=>jt,caretDown:()=>Mt,caretUp:()=>Nt,check:()=>Pt,chevronDown:()=>Ft,chevronLeft:()=>It,chevronRight:()=>Lt,chevronUp:()=>Rt,circle:()=>zt,circleCheck:()=>Bt,circleExclamation:()=>Vt,circleInfo:()=>Ht,circlePlus:()=>Cn,clipboard:()=>Ut,clock:()=>Wt,clone:()=>Gt,code:()=>Kt,copy:()=>qt,download:()=>Jt,ellipsis:()=>Yt,ellipsisVertical:()=>Rn,eye:()=>Xt,fileDashedLine:()=>Zt,flagCheckered:()=>Qt,gear:()=>zn,getIcon:()=>Qn,getIconNames:()=>Zn,gripDots:()=>en,gripDotsVertical:()=>tn,gripMove:()=>$t,h1:()=>nn,h2:()=>rn,h3:()=>an,h4:()=>on,h5:()=>sn,h6:()=>cn,heading:()=>yn,highlighter:()=>ln,house:()=>un,iconToSvg:()=>rr,iconViewBox:()=>nr,icons:()=>Hn,italic:()=>dn,lightbulb:()=>fn,link:()=>pn,list:()=>hn,listOl:()=>gn,listUl:()=>_n,lock:()=>mn,magnifyingGlass:()=>En,minus:()=>vn,normalizeIconName:()=>Wn,paragraph:()=>bn,pen:()=>xn,penToSquare:()=>Bn,plus:()=>Sn,quoteRight:()=>wn,registerIcon:()=>$n,registerIcons:()=>er,share:()=>Dn,sliders:()=>kn,smallCaps:()=>On,strikethrough:()=>An,subscribeIconRegistry:()=>Xn,subscript:()=>jn,superscript:()=>Mn,table:()=>Nn,textSlash:()=>Pn,trash:()=>Vn,triangleExclamation:()=>Fn,underline:()=>In,xmark:()=>Ln}),ar=[Ze,it,ot(),at(`.button`),st(),ct(`.button`),c`
        @layer pk-component {
            :host {
                font-family: var(--pk-font-family);
                cursor: pointer;
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
                /*
                 * Slotted labels inherit from the host — pin the size-token font
                 * (and button line-height) so Craft CP / Tailwind hosts match.
                 */
                font-size: var(--pk-btn-font);
                line-height: 1.2;
            }

            :host([disabled]) {
                cursor: not-allowed;
                pointer-events: none;
            }

            :host([loading]):not([disabled]) {
                pointer-events: none;
            }

            .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: var(--pk-btn-icon-gap);
                box-sizing: border-box;
                width: auto;
                margin: 0;
                /* Every button carries a 1px border (transparent for fill/plain variants) so the box
                 * model is identical across variants and states. Prevents width shift when swapping a
                 * button between filled and outline/dashed, or toggling states. Matches Bootstrap
                 * (transparent baseline) and  (border always present, only color changes).
                 */
                border: 1px solid transparent;
                border-radius: var(--pk-btn-radius);
                font: inherit;
                font-size: var(--pk-btn-font);
                font-weight: 400;
                line-height: 1.2;
                text-decoration: none;
                white-space: nowrap;
                /* Inherit host cursor so className/style (e.g. cursor-move) pierce shadow. */
                cursor: inherit;
                user-select: none;
                vertical-align: middle;
                appearance: none;
                background: var(--pk-btn-fill, var(--pk-action-fill));
                color: var(--pk-btn-on, var(--pk-action-on));
                height: var(--pk-btn-height);
                min-height: var(--pk-btn-height);
                /* Block padding defaults to 0 (height tokens center content). Override for nav rows. */
                padding-block: var(--pk-btn-padding-block, 0);
                padding-inline: var(--pk-btn-padding-inline);
                transition: background-color 0.12s ease, box-shadow 0.12s ease, color 0.12s ease;
            }

            .button:disabled {
                opacity: 0.5;
            }

            .icon-slot {
                display: none;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
            }

            .icon-slot--has-content {
                display: inline-flex;
            }

            /* Fixed token sizes for all icons (labeled or icon-only) — matches plugin-kit-react Button. */
            .icon-slot slot::slotted(svg),
            slot[name='start']::slotted(svg),
            slot[name='end']::slotted(svg) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                flex-shrink: 0;
                pointer-events: none;
            }

            .icon-slot slot::slotted(img),
            slot[name='start']::slotted(img),
            slot[name='end']::slotted(img) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                object-fit: contain;
                flex-shrink: 0;
                pointer-events: none;
            }

            /* pk-icon sizes itself from font-size (1em), so scale it to the
             * icon token. This keeps the idiomatic slotted pk-icon usage in
             * sync with raw slotted svg. Set width/height explicitly — %/size-full
             * collapses when the icon-slot has no definite box.
             */
            .icon-slot slot::slotted(pk-icon),
            slot[name='start']::slotted(pk-icon),
            slot[name='end']::slotted(pk-icon) {
                font-size: var(--pk-btn-icon-size);
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                /* Kill pk-icon's text-baseline nudge (-0.125em) — flex slots center optically. */
                vertical-align: 0;
                flex-shrink: 0;
                pointer-events: none;
            }

            .label {
                display: inline-flex;
                align-items: center;
                min-width: 0;
                line-height: 1.2;
            }

            /* Trailing slot (status): grow + clip the label so end sits at the far edge
             * and long titles truncate instead of colliding with the indicator.
             */
            .button:has(.icon-slot--end.icon-slot--has-content) .label:not(.is-empty) {
                flex: 1 1 auto;
                overflow: hidden;
            }

            .label.is-empty {
                display: none;
            }

            /* Icon-only (no label): square hit box = size height. Button owns the target;
             * glyph size comes from --pk-btn-icon-size. Do not Tailwind-size the Icon.
             * Opt out with icon (compact), size=none, or group-trigger (narrow disclosure cap).
             */
            :host(:not([icon]):not([size='none']):not([group-trigger])) .button:not(.has-label) {
                width: var(--pk-btn-height);
                min-width: var(--pk-btn-height);
                padding-inline: 0;
            }

            /* Compact density (icon attr): padless box that hugs the glyph.
             * size still drives --pk-btn-icon-size; height/width tiers do not apply.
             * Use for dense x / ellipsis in cells — not for table action rows (prefer square above).
             * line-height: 0 collapses whitespace flex-struts so the glyph sits dead-center.
             */
            :host([icon]) {
                display: inline-flex;
                line-height: 0;
                vertical-align: middle;
            }

            :host([icon]) .button {
                display: flex;
                width: auto;
                min-width: 0;
                height: auto;
                min-height: 0;
                padding-inline: 0.25rem;
                padding-block: 0;
                line-height: 0;
                align-items: center;
                justify-content: center;
            }

            /* Keep label space while loading even before slotchange runs. */
            .button.loading .label.is-empty {
                display: inline-flex;
                visibility: hidden;
            }

            /* Sizes — token-driven scale (see tokens.css) */
            :host([size='xxs']) {
                --pk-btn-height: var(--pk-btn-height-xxs);
                --pk-btn-font: var(--pk-btn-font-xxs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xxs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xxs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xxs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xxs);
                --pk-btn-radius: var(--pk-btn-radius-xxs);
            }

            :host([size='xs']) {
                --pk-btn-height: var(--pk-btn-height-xs);
                --pk-btn-font: var(--pk-btn-font-xs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xs);
                --pk-btn-radius: var(--pk-btn-radius-xs);
            }

            :host([size='sm']) {
                --pk-btn-height: var(--pk-btn-height-sm);
                --pk-btn-font: var(--pk-btn-font-sm);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-sm);
                --pk-btn-icon-size: var(--pk-btn-icon-size-sm);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-sm);
                --pk-btn-caret-size: var(--pk-btn-caret-size-sm);
                --pk-btn-radius: var(--pk-btn-radius-sm);
            }

            :host([size='default']) {
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
            }

            :host([size='lg']) {
                --pk-btn-height: var(--pk-btn-height-lg);
                --pk-btn-font: var(--pk-btn-font-lg);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-lg);
                --pk-btn-icon-size: var(--pk-btn-icon-size-lg);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-lg);
                --pk-btn-caret-size: var(--pk-btn-caret-size-lg);
                --pk-btn-radius: var(--pk-btn-radius-lg);
            }

            :host([size='xl']) {
                --pk-btn-height: var(--pk-btn-height-xl);
                --pk-btn-font: var(--pk-btn-font-xl);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xl);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xl);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xl);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xl);
                --pk-btn-radius: var(--pk-btn-radius-xl);
            }

            /* No preset scale — size to content or set --pk-btn-* on the host for one-off dimensions
             * (height, padding, font, icon, radius) without fighting a named size tier.
             * Pair with icon for a padless glyph host, or set --pk-btn-padding-inline / --pk-btn-height yourself.
             */
            :host([size='none']) {
                --pk-btn-height: auto;
                --pk-btn-font: inherit;
                --pk-btn-padding-inline: 0px;
                --pk-btn-padding-block: 0px;
                --pk-btn-icon-size: 1em;
                --pk-btn-icon-gap: 0px;
                --pk-btn-caret-size: 1em;
                --pk-btn-radius: 0px;
            }

            :host([size='none']) .button {
                height: auto;
                min-height: auto;
                width: 100%;
            }

            /* Variants */
            :host([variant='default']) {
                --pk-btn-fill: var(--pk-action-fill);
                --pk-btn-fill-hover: var(--pk-action-fill-hover);
                --pk-btn-fill-active: var(--pk-action-fill-active);
                --pk-btn-on: var(--pk-action-on);
            }

            :host([variant='primary']) {
                --pk-btn-fill: var(--pk-action-primary-fill);
                --pk-btn-fill-hover: var(--pk-action-primary-fill-hover);
                --pk-btn-fill-active: var(--pk-action-primary-fill-active);
                --pk-btn-on: var(--pk-action-primary-on);
            }

            :host([variant='primary']) .button,
            :host([variant='secondary']) .button {
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
            }

            :host([variant='secondary']) {
                --pk-btn-fill: var(--pk-color-gray-500);
                --pk-btn-fill-hover: var(--pk-color-gray-550);
                --pk-btn-fill-active: var(--pk-color-gray-600);
                --pk-btn-on: var(--pk-color-white);
            }

            :host([variant='outline']) .button {
                background: transparent;
                border-color: var(--pk-color-slate-400);
                color: var(--pk-color-gray-700);
            }

            :host([variant='transparent']) .button {
                background: transparent;
                color: var(--pk-color-gray-700);
            }

            /* link/none opt out of the shared transparent 1px border: they never render a border, so
             * carrying one only pads the box by 2px inline (and 2px block at size='none', where height
             * is auto). These are the "inline text" / "no chrome" variants — content-sized is the point,
             * and neither participates in button-group border joins. Other variants keep the stable box.
             */
            /*
             * Craft CP sets --link-color on :root (inherits into shadow). Prefer that,
             * then kit --pk-color-link — not sky-700 (reads as a different “CP blue”).
             * Color on :host so consumer utilities (e.g. text-[var(--link-color)]) can override.
             * Height must be content-sized — default --pk-btn-height (34px) bloated table rows.
             */
            :host([variant='link']) {
                color: var(--link-color, var(--pk-color-link));
                --pk-btn-height: auto;
                --pk-btn-padding-inline: 0;
                --pk-btn-padding-block: 0;
            }

            :host([variant='link']) .button {
                background: transparent;
                border-width: 0;
                border-radius: 0;
                color: inherit;
                width: auto;
                height: auto;
                min-height: 0;
                padding: 0;
                text-underline-offset: 2px;
            }

            :host([variant='dashed']) .button {
                background: transparent;
                border-style: dashed;
                border-color: var(--pk-color-slate-500);
                color: var(--pk-color-gray-700);
            }

            :host([variant='none']) .button {
                border-width: 0;
                border-radius: 0;
                background: transparent;
                color: inherit;
            }

            /* Interaction — pseudo-classes only; playground matrices use dev/pk-button-demo-states.css */
            .button:hover:not(:disabled) {
                background: var(--pk-btn-fill-hover, var(--pk-btn-fill));
            }

            :host([variant='outline']) .button:hover:not(:disabled),
            :host([variant='transparent']) .button:hover:not(:disabled),
            :host([variant='dashed']) .button:hover:not(:disabled) {
                background: var(--pk-color-slate-150);
            }

            :host([variant='link']) .button:hover:not(:disabled) {
                background: transparent;
                text-decoration: underline;
            }

            :host([variant='none']) .button:hover:not(:disabled) {
                background: transparent;
            }

            .button:active:not(:disabled) {
                background: var(--pk-btn-fill-active, var(--pk-btn-fill-hover, var(--pk-btn-fill)));
            }

            :host([variant='outline']) .button:active:not(:disabled),
            :host([variant='transparent']) .button:active:not(:disabled),
            :host([variant='dashed']) .button:active:not(:disabled) {
                background: var(--pk-color-slate-200);
            }

            :host([variant='link']) .button:active:not(:disabled),
            :host([variant='none']) .button:active:not(:disabled) {
                background: transparent;
            }

            .button:focus {
                outline: none;
            }

            .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            /* Bordered variants: fold the button's own border into the focus ring by recoloring it to
             * the accent (and solidifying dashed) so focus reads as one cohesive ring instead of a
             * doubled border. The ring is thinned to 1px here because the recolored 1px border already
             * supplies the other half — total 2px, matching the filled variants' ring weight.
             */
            :host([variant='outline']) .button:focus-visible,
            :host([variant='dashed']) .button:focus-visible {
                border-color: var(--pk-color-sky-600);
                box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 5px 1px hsl(from var(--pk-color-sky-600) h s l / 0.7);
            }

            :host([variant='dashed']) .button:focus-visible {
                border-style: solid;
            }

            :host(.pk-dialog__close) .button:focus-visible {
                box-shadow: 0 0 0 2px var(--pk-color-gray-600);
            }

            :host-context(pk-button-group) {
                position: relative;
            }

            :host-context(pk-button-group[orientation='vertical']) {
                display: block;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group[orientation='vertical']) .button {
                width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group:focus-visible) {
                z-index: 2;
            }

            /* Bordered variants — matching border divider (filled uses margin gap via buttonGroupIndentStyles) */

            :host([variant='primary']) .button:focus-visible,
            :host([variant='secondary']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus-inset);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button {
                background: var(--pk-color-gray-500);
                color: var(--pk-color-white);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:hover:not(:disabled) {
                background: var(--pk-color-gray-550);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:active:not(:disabled) {
                background: var(--pk-color-gray-600);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([variant='link']) .button:focus-visible {
                box-shadow: none;
                text-decoration: underline;
            }

            .button.loading {
                position: relative;
                cursor: default;
                pointer-events: none;
            }

            .label.loading {
                visibility: hidden;
            }

            .button.loading .icon-slot,
            .button.loading slot[name='start']::slotted(*),
            .button.loading slot[name='end']::slotted(*) {
                visibility: hidden;
            }

            .button.caret .icon-slot--end.icon-slot--has-content {
                display: none;
            }

            /* Scope to the caret span — the button host also gets class caret when
               with-caret is set; an unscoped .caret rule was adding 2px margin
               to the whole button and shifting dropdown anchors left. */
            .button > .caret {
                display: inline-flex;
                align-self: center;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
                /* Sits slightly further from the label than the flex gap alone. */
                margin-inline-start: 2px;
            }

            /* Caret has its own per-size token (--pk-btn-caret-size), kept deliberately smaller than
             * --pk-btn-icon-size so it reads as a subordinate dropdown affordance next to real icons.
             */
            .button > .caret svg {
                display: block;
                width: var(--pk-btn-caret-size);
                height: var(--pk-btn-caret-size);
            }

            :host([group-trigger]) .button {
                padding-inline: 6px;
            }

            /* Compact disclosure cap — hide content, keep only the shared SVG caret (centered). */
            :host([group-trigger]) .label,
            :host([group-trigger]) .icon-slot {
                display: none;
            }

            :host([group-trigger]) .button > .caret {
                margin-inline-start: 0;
            }

            :host([size='sm'][group-trigger]) .button,
            :host([size='xs'][group-trigger]) .button,
            :host([size='xxs'][group-trigger]) .button {
                padding-inline: 6px;
            }

            :host([size='lg'][group-trigger]) .button {
                padding-inline: 10px;
            }

            :host([size='xl'][group-trigger]) .button {
                padding-inline: 12px;
            }

            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: solid;
                border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: solid;
                border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: dashed;
                border-left-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: dashed;
                border-top-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-right-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-bottom-width: 0;
            }
        }
    `],or=rr(Ft),O=class extends $e{constructor(...e){super(...e),this.variant=`default`,this.size=`default`,this.disabled=!1,this.loading=!1,this.withCaret=!1,this.groupTrigger=!1,this.icon=!1,this.title=``,this.ariaLabel=null,this.type=`button`,this.hasDefaultSlotContent=!1,this.hasStartSlotContent=!1,this.hasEndSlotContent=!1,this.startSlotChanged=e=>{this.iconSlotChanged(e,`start`)},this.endSlotChanged=e=>{this.iconSlotChanged(e,`end`)},this.handleHostClick=e=>{if(this.disabled||this.loading||this.href||this.type!==`submit`&&this.type!==`reset`)return;let t=this.resolveAssociatedForm();if(t){if(e.preventDefault(),e.stopPropagation(),this.type===`reset`){t.reset();return}if(typeof t.requestSubmit==`function`){t.requestSubmit();return}t.dispatchEvent(new Event(`submit`,{bubbles:!0,cancelable:!0}))}}}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=ar}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}iconSlotChanged(e,t){let n=e.target.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE);t===`start`?this.hasStartSlotContent=n:this.hasEndSlotContent=n}buttonClasses(){return ft({button:!0,"has-label":this.hasDefaultSlotContent,loading:this.loading,caret:this.withCaret,"group-trigger":this.groupTrigger})}connectedCallback(){super.connectedCallback(),this.setAttribute(`data-slot`,`button`),this.addEventListener(`click`,this.handleHostClick)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),super.disconnectedCallback()}resolveAssociatedForm(){let e=(this.form||this.getAttribute(`form`)||``).trim();if(e){let t=this.ownerDocument?.getElementById(e);if(t instanceof HTMLFormElement&&t.id!==`main`)return t}let t=this.closest(`form`);return t&&t.id!==`main`?t:null}render(){let e=this.spinnerSize||et(this.size),t=tt(this.variant,this.spinnerVariant),n=!!this.href,r=this.ariaLabel||this.title||``;return S`
            ${n?S`
                    <a
                        part="base"
                        class=${this.buttonClasses()}
                        href=${this.href}
                        target=${this.target??C}
                        rel=${this.rel??C}
                        aria-label=${r||C}
                    >
                        ${this.renderInner(e,t)}
                    </a>
                `:S`
                    <button
                        part="base"
                        class=${this.buttonClasses()}
                        type=${this.type}
                        ?disabled=${this.disabled}
                        aria-disabled=${this.disabled?`true`:C}
                        aria-busy=${this.loading?`true`:C}
                        aria-label=${r||C}
                        name=${this.name??C}
                        value=${this.value??C}
                    >
                        ${this.renderInner(e,t)}
                    </button>
                `}
        `}renderInner(e,t){return S`
            <span
                class=${ft({"icon-slot":!0,"icon-slot--start":!0,"icon-slot--has-content":this.hasStartSlotContent})}
            >
                <slot name="start" @slotchange=${this.startSlotChanged}></slot>
            </span>
            ${this.loading?S`
                    <pk-spinner
                        variant=${t}
                        size=${e}
                        tone=${this.spinnerTone??C}
                        centered
                    ></pk-spinner>
                `:C}
            <span
                class=${ft({label:!0,"is-empty":!this.hasDefaultSlotContent,loading:this.loading})}
            >
                <slot @slotchange=${this.defaultSlotChanged}></slot>
            </span>
            <span
                class=${ft({"icon-slot":!0,"icon-slot--end":!0,"icon-slot--has-content":this.hasEndSlotContent})}
            >
                <slot name="end" @slotchange=${this.endSlotChanged}></slot>
            </span>
            ${this.withCaret||this.groupTrigger?S`<span part="caret" class="caret">${gt(or)}</span>`:C}
        `}};D([w({reflect:!0})],O.prototype,`variant`,void 0),D([w({reflect:!0})],O.prototype,`size`,void 0),D([w({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),D([w({type:Boolean,reflect:!0})],O.prototype,`loading`,void 0),D([w({reflect:!0,attribute:`spinner-size`})],O.prototype,`spinnerSize`,void 0),D([w({reflect:!0,attribute:`spinner-variant`})],O.prototype,`spinnerVariant`,void 0),D([w({reflect:!0,attribute:`spinner-tone`})],O.prototype,`spinnerTone`,void 0),D([w({type:Boolean,reflect:!0,attribute:`with-caret`})],O.prototype,`withCaret`,void 0),D([w({type:Boolean,reflect:!0,attribute:`group-trigger`})],O.prototype,`groupTrigger`,void 0),D([w({type:Boolean,reflect:!0})],O.prototype,`icon`,void 0),D([w()],O.prototype,`href`,void 0),D([w()],O.prototype,`target`,void 0),D([w()],O.prototype,`rel`,void 0),D([w()],O.prototype,`name`,void 0),D([w()],O.prototype,`value`,void 0),D([w()],O.prototype,`title`,void 0),D([w({attribute:`aria-label`})],O.prototype,`ariaLabel`,void 0),D([w()],O.prototype,`type`,void 0),D([w({reflect:!0})],O.prototype,`form`,void 0),D([T()],O.prototype,`hasDefaultSlotContent`,void 0),D([T()],O.prototype,`hasStartSlotContent`,void 0),D([T()],O.prototype,`hasEndSlotContent`,void 0),O=D([Je(`pk-button`)],O);var sr=[`aria-labelledby`,`aria-describedby`,`aria-invalid`,`aria-errormessage`,`aria-required`,`aria-label`];function cr(e){return e.hasAttribute(`aria-labelledby`)||e.hasAttribute(`aria-describedby`)||e.hasAttribute(`aria-errormessage`)}function lr(e,t){for(let n of sr){let r=e.getAttribute(n);r===null?t.removeAttribute(n):t.setAttribute(n,r)}}function ur({control:e,labelId:t,instructionsId:n,hasLabel:r,hasInstructions:i,required:a=!1,invalid:o=!1}){r&&t?e.setAttribute(`aria-labelledby`,t):e.removeAttribute(`aria-labelledby`),i&&n?e.setAttribute(`aria-describedby`,n):e.removeAttribute(`aria-describedby`),a?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`),o?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-errormessage`)}var dr=class{constructor(e,t,n){this.host=e,this.getTarget=t,this.onSync=n}connect(){this.sync(),this.observer=new MutationObserver(()=>{this.sync()}),this.observer.observe(this.host,{attributes:!0,attributeFilter:[...sr]})}disconnect(){this.observer?.disconnect(),this.observer=void 0}sync(){if(!cr(this.host)){this.onSync?.();return}let e=this.getTarget();e&&lr(this.host,e)}},fr=class extends Event{constructor(){super(`pk-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}};function pr(){return{observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys.push(`customError`)),t}}}var mr=class extends $e{static{this.formAssociated=!0}static get validators(){return[pr()]}static get observedAttributes(){let e=new Set(super.observedAttributes??[]);for(let t of this.validators)for(let n of t.observedAttributes??[])e.add(n);return[...e]}constructor(){super(),this.internals=this.attachInternals(),this.assumeInteractionOn=[`input`],this.validators=[],this.name=null,this.disabled=!1,this.required=!1,this.customError=null,this.valueHasChanged=!1,this.hasInteracted=!1,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new fr))},this.handleInteraction=e=>{this.emittedEvents.includes(e.type)||this.emittedEvents.push(e.type),this.emittedEvents.length>=this.assumeInteractionOn.length&&(this.hasInteracted=!0,this.updateValidity())},this.addEventListener(`invalid`,this.emitInvalid)}connectedCallback(){super.connectedCallback();for(let e of this.assumeInteractionOn)this.addEventListener(e,this.handleInteraction);this.updateValidity()}disconnectedCallback(){this.hostAriaMirror?.disconnect(),this.hostAriaMirror=void 0;for(let e of this.assumeInteractionOn)this.removeEventListener(e,this.handleInteraction);this.removeEventListener(`invalid`,this.emitInvalid),super.disconnectedCallback()}updated(e){e.has(`customError`)&&this.setCustomValidity(this.customError??``),e.has(`disabled`)&&this.setState(`disabled`,!!this.disabled),(e.has(`value`)||e.has(`disabled`)||e.has(`required`)||e.has(`name`))&&this.syncFormValue(),this.updateValidity(),super.updated(e),this.syncHostAriaMirror()}firstUpdated(e){super.firstUpdated(e),this.connectHostAriaMirror()}getAriaMirrorTarget(){return this.input??null}syncStandaloneAria(){}connectHostAriaMirror(){this.hostAriaMirror?.disconnect(),this.hostAriaMirror=new dr(this,()=>this.getAriaMirrorTarget(),()=>this.syncStandaloneAria()),this.hostAriaMirror.connect()}syncHostAriaMirror(){this.hostAriaMirror?.sync()}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.resetToDefaultValue(),this.syncFormValue(),this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.restoreFormState(e),this.syncFormValue(),this.updateValidity()}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}getForm(){return this.internals.form}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}resetValidity(){this.setCustomValidity(``),this.internals.setValidity({}),this.syncCustomStates()}setCustomValidity(e){if(!e){this.customError=null,this.internals.setValidity({}),this.syncCustomStates();return}this.customError=e;let t=this.validationTarget;t instanceof HTMLElement?this.internals.setValidity({customError:!0},e,t):this.internals.setValidity({customError:!0},e),this.syncCustomStates()}get validationTarget(){return this.input}get allValidators(){return[...this.constructor.validators??[],...this.validators??[]]}setFormValue(e,t){this.internals.setFormValue(e,t??e)}setValue(e,t){this.setFormValue(e,t??e)}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.internals.setValidity({}),this.syncCustomStates();return}let e=this.allValidators;if(!e.length)return;let t={customError:!!this.customError},n=``,r=this.validationTarget;for(let r of e){let{isValid:e,message:i,invalidKeys:a}=r.checkValidity(this);if(!e){n||=i;for(let e of a)t[e]=!0}}n||=this.validationMessage,r instanceof HTMLElement?this.internals.setValidity(t,n,r):this.internals.setValidity(t,n),this.syncCustomStates()}syncCustomStates(){let e=this.internals.validity.valid;this.setState(`required`,this.required),this.setState(`optional`,!this.required),this.setState(`invalid`,!e),this.setState(`valid`,e),this.setState(`user-invalid`,!e&&this.hasInteracted),this.setState(`user-valid`,e&&this.hasInteracted)}setState(e,t){let n=this.internals.states;n&&(t?n.add(e):n.delete(e))}syncFormValue(){}resetToDefaultValue(){}restoreFormState(e){}};D([w({reflect:!0})],mr.prototype,`name`,void 0),D([w({type:Boolean,reflect:!0})],mr.prototype,`disabled`,void 0),D([w({type:Boolean,reflect:!0})],mr.prototype,`required`,void 0),D([w({attribute:`custom-error`,reflect:!0})],mr.prototype,`customError`,void 0),D([w({attribute:!1,state:!0})],mr.prototype,`valueHasChanged`,void 0),D([w({attribute:!1,state:!0})],mr.prototype,`hasInteracted`,void 0);function hr(e={}){let{validationElement:t,validationProperty:n}=e;!t&&typeof document<`u`&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage??`Please fill out this field.`,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};if(!e.required)return t;let i=e[n];return i!=null&&i!==!1&&i!==``?t:(t.isValid=!1,t.message=typeof r.message==`function`?r.message(e):r.message??``,t.invalidKeys.push(`valueMissing`),t)}};return r}var gr=class{constructor(e,...t){this.host=e,this.boundSlots=new Set,this.lastHasContent=new Map,this.handleSlotChange=()=>{let e=!1;for(let t of this.slotNames){let n=this.test(t);this.lastHasContent.get(t)!==n&&(this.lastHasContent.set(t,n),e=!0)}e&&this.host.requestUpdate()},this.slotNames=t,e.addController(this)}hostConnected(){this.bindSlotListeners()}hostUpdated(){this.bindSlotListeners()}hostDisconnected(){for(let e of this.boundSlots)e.removeEventListener(`slotchange`,this.handleSlotChange);this.boundSlots.clear()}bindSlotListeners(){for(let e of this.slotNames){let t=this.findSlot(e);t&&!this.boundSlots.has(t)&&(this.boundSlots.add(t),t.addEventListener(`slotchange`,this.handleSlotChange),this.lastHasContent.has(e)||this.lastHasContent.set(e,this.test(e)))}}findSlot(e){return this.host.shadowRoot?e?this.host.shadowRoot.querySelector(`slot[name="${e}"]`):this.host.shadowRoot.querySelector(`slot:not([name])`):null}test(e,t=!1){if(t||this.hasLightDomSlotContent(e))return!0;let n=this.findSlot(e);return n?n.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE):!1}hasLightDomSlotContent(e){return[...this.host.children].some(t=>t.getAttribute(`slot`)===e)}};function _r(){return S`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path
                fill="currentColor"
                d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z"
            />
        </svg>
    `}function vr(){return S`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path fill="currentColor" d="M96 352V288H544V352H96z" />
        </svg>
    `}var yr=[c`
    @layer pk-component {
        .control {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            width: var(--pk-checkbox-size);
            height: var(--pk-checkbox-size);
            border: 1px solid var(--pk-checkbox-border-color, #c0cbd9);
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-white);
            cursor: pointer;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([disabled]) .control {
            cursor: not-allowed;
        }

        .input:focus-visible + .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 4px 0 hsl(from var(--pk-color-sky-600) h s l / 0.7);
        }

        :host([invalid]) .control,
        .input[aria-invalid='true'] + .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .input:focus-visible + .control,
        .input[aria-invalid='true']:focus-visible + .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: 0 0 0 1px var(--pk-color-rose-600), 0 0 4px 0 hsl(from var(--pk-color-rose-600) h s l / 0.7);
        }

        .indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--pk-color-gray-900);
        }

        .icon-check,
        .icon-indeterminate {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
        }

        .icon-check svg {
            width: 14px;
            height: 14px;
            transform: translateY(1px) scale(1.2);
        }

        .icon-indeterminate svg {
            width: 12px;
            height: 12px;
        }

        :host([checked]) .icon-check,
        .input:checked + .control .icon-check {
            opacity: 1;
        }

        :host([indeterminate]) .icon-check,
        .input:indeterminate + .control .icon-check {
            opacity: 0;
        }

        :host([indeterminate]) .icon-indeterminate,
        .input:indeterminate + .control .icon-indeterminate {
            opacity: 1;
        }
    }
`,c`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            /* Hit target is the content-sized .root label (Craft checkbox-select), not the host. */
            cursor: default;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        :host([disabled]) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .root {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: flex-start;
            gap: var(--pk-control-label-gap);
            /* Content-sized like Craft's <label> beside the checkbox — not full-row. */
            width: fit-content;
            max-width: 100%;
            margin: 0;
            min-height: 0;
            cursor: pointer;
            user-select: none;
            position: relative;
        }

        :host([disabled]) .root {
            cursor: not-allowed;
        }

        .root--with-hint {
            align-items: flex-start;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
            appearance: none;
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .label {
            line-height: max(1rem, var(--pk-checkbox-size));
            /* Match form-control / Craft body labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            cursor: pointer;
        }

        :host([disabled]) .label {
            cursor: not-allowed;
        }

        :host(.all-option) .label {
            font-weight: 700;
        }

        .hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
        }

        .hint:empty {
            display: none;
        }
    }
`],br=class extends mr{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new gr(this,`hint`),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.invalid=!1,this.checkboxValue=`on`,this.defaultChecked=!1,this.ariaLabel=null,this.hint=``,this.withHint=!1,this.hasDefaultSlotContent=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=yr}static get validators(){return[...super.validators,hr({validationProperty:`checked`})]}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.checkboxValue:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked,this.indeterminate=!1}restoreFormState(e){this.checked=e===`on`||e===this.checkboxValue}updated(e){if(!this.input){super.updated(e);return}(e.has(`indeterminate`)||e.has(`checked`))&&(this.input.indeterminate=this.indeterminate,this.input.checked=this.checked),super.updated(e)}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.hasDefaultSlotContent,t=!!this.hint||this.hasSlotController.test(`hint`,this.withHint);return S`
            <label
                part="base"
                class=${ft({root:!0,"root--with-hint":t})}
            >
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    name=${this.name??C}
                    value=${this.checkboxValue}
                    aria-labelledby=${e?`label`:C}
                    aria-describedby=${t?`hint`:C}
                    aria-label=${e?C:this.ariaLabel??C}
                    aria-invalid=${this.invalid?`true`:C}
                    @change=${this.handleChange}
                />
                <span part="control" class="control">
                    <span part="checked-icon" class="icon-check">${_r()}</span>
                    <span part="indeterminate-icon" class="icon-indeterminate">${vr()}</span>
                </span>
                ${e||t?S`
                        <span class="text">
                            ${e?S`
                                    <span part="label" class="label" id="label">
                                        <slot @slotchange=${this.defaultSlotChanged}></slot>
                                    </span>
                                `:S`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
                            ${t?S`
                                    <span part="hint" class="hint" id="hint">
                                        <slot name="hint">${this.hint}</slot>
                                    </span>
                                `:C}
                        </span>
                    `:S`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
            </label>
        `}};D([w({type:Boolean,reflect:!0})],br.prototype,`checked`,void 0),D([w({type:Boolean,reflect:!0})],br.prototype,`indeterminate`,void 0),D([w({type:Boolean,reflect:!0})],br.prototype,`disabled`,void 0),D([w({type:Boolean,reflect:!0})],br.prototype,`invalid`,void 0),D([w()],br.prototype,`checkboxValue`,void 0),D([w({attribute:`default-checked`,type:Boolean})],br.prototype,`defaultChecked`,void 0),D([w({attribute:`aria-label`})],br.prototype,`ariaLabel`,void 0),D([w()],br.prototype,`hint`,void 0),D([w({type:Boolean,attribute:`with-hint`})],br.prototype,`withHint`,void 0),D([E(`.input`)],br.prototype,`input`,void 0),D([T()],br.prototype,`hasDefaultSlotContent`,void 0),br=D([Je(`pk-checkbox`)],br);var k=(e,t={})=>rr(e,{title:t.title}),xr=(e,t={})=>{let n=document.createElement(`template`);n.innerHTML=k(e,t);let r=n.content.firstElementChild;if(!(r instanceof SVGSVGElement))throw Error(`Icon render did not produce an SVG element.`);return r},Sr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyNames,Tr=Object.prototype.hasOwnProperty,Er=(e,t)=>{let n={};for(var r in e)Sr(n,r,{get:e[r],enumerable:!0});return t||Sr(n,Symbol.toStringTag,{value:`Module`}),n},Dr=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=wr(t),a=0,o=i.length,s;a<o;a++)s=i[a],!Tr.call(e,s)&&s!==n&&Sr(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=Cr(t,s))||r.enumerable});return e},Or=(e,t,n)=>(Dr(e,t,`default`),n&&Dr(n,t,`default`)),kr=`M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l208 0 32 0 16 0 256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L320 64l-16 0-32 0L64 64zm512 48c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16l-256 0 0-288 256 0zM178.3 175.9l64 144c4.5 10.1-.1 21.9-10.2 26.4s-21.9-.1-26.4-10.2L196.8 316l-73.6 0-8.9 20.1c-4.5 10.1-16.3 14.6-26.4 10.2s-14.6-16.3-10.2-26.4l64-144c3.2-7.2 10.4-11.9 18.3-11.9s15.1 4.7 18.3 11.9zM179 276l-19-42.8L141 276l38 0zM456 164c-11 0-20 9-20 20l0 4-52 0c-11 0-20 9-20 20s9 20 20 20l72 0 35.1 0c-7.3 16.7-17.4 31.9-29.8 45l-.5-.5-14.6-14.6c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L430 298.3c-5.9 3.6-12.1 6.9-18.5 9.8l-3.6 1.6c-10.1 4.5-14.6 16.3-10.2 26.4s16.3 14.6 26.4 10.2l3.6-1.6c12-5.3 23.4-11.8 34-19.4c4.3 3 8.6 5.8 13.1 8.5l18.9 11.3c9.5 5.7 21.8 2.6 27.4-6.9s2.6-21.8-6.9-27.4l-18.9-11.3c-.9-.5-1.8-1.1-2.7-1.6c17.2-18.8 30.7-40.9 39.6-65.4L534 228l2 0c11 0 20-9 20-20s-9-20-20-20l-16 0-44 0 0-4c0-11-9-20-20-20z`,Ar=()=>{let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),e.setAttribute(`viewBox`,`0 0 640 512`);let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return t.setAttribute(`d`,kr),e.append(t),e},A=Er({createIconElement:()=>xr,createTranslationIconElement:()=>Ar,renderIconHtml:()=>k});Or(A,ir);var jr=[];function Mr(e){jr.push(e)}function Nr(e){for(let t=jr.length-1;t>=0;--t)if(jr[t]===e){jr.splice(t,1);break}}function Pr(e){return jr.length>0&&jr[jr.length-1]===e}var Fr=new Set,Ir=null,Lr=new Set([` `,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`]);function Rr(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&Fr.has(t))return!0;return!1}function zr(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`}function Br(){let e=document.body,t=e.style.overflow;e.style.setProperty(`overflow`,`hidden`,`important`);let n=e=>{Rr(e)||e.preventDefault()},r=e=>{Rr(e)||e.preventDefault()},i=e=>{Lr.has(e.key)&&(Rr(e)||zr(e.target)||e.preventDefault())};return window.addEventListener(`wheel`,n,{passive:!1,capture:!0}),window.addEventListener(`touchmove`,r,{passive:!1,capture:!0}),window.addEventListener(`keydown`,i,{capture:!0}),()=>{window.removeEventListener(`wheel`,n,{capture:!0}),window.removeEventListener(`touchmove`,r,{capture:!0}),window.removeEventListener(`keydown`,i,{capture:!0}),e.style.removeProperty(`overflow`),t&&(e.style.overflow=t)}}function Vr(e){Fr.add(e),Fr.size===1&&(document.documentElement.classList.add(`pk-scroll-lock`),document.documentElement.style.setProperty(`--pk-scroll-lock-size`,`0px`),Ir=Br())}function Hr(e){Fr.delete(e),Fr.size===0&&(Ir?.(),Ir=null,document.documentElement.classList.remove(`pk-scroll-lock`),document.documentElement.style.removeProperty(`--pk-scroll-lock-size`),document.documentElement.style.removeProperty(`--pk-scroll-lock-gutter`))}var Ur=class extends Event{constructor(){super(`pk-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Wr=class extends Event{constructor(){super(`pk-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Gr=class extends Event{constructor(e=`unknown`){super(`pk-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail={source:e}}},Kr=class extends Event{constructor(){super(`pk-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}};function qr(e,t,n=500){return new Promise(r=>{let i=new AbortController,{signal:a}=i;if(e.classList.contains(t)){r();return}e.classList.add(t);let o=!1,s=()=>{o||(o=!0,e.classList.remove(t),window.clearTimeout(c),r(),i.abort())};e.addEventListener(`animationend`,s,{once:!0,signal:a}),e.addEventListener(`animationcancel`,s,{once:!0,signal:a});let c=window.setTimeout(s,n);requestAnimationFrame(()=>{!o&&e.getAnimations().length===0&&s()})})}var Jr=`.modal-shade, .modal`,Yr=e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`&&Number.parseFloat(t.opacity||`1`)>0};function Xr(e=document){let t=e.querySelectorAll(Jr);for(let e of t)if(e instanceof HTMLElement&&!e.closest(`pk-dialog`)&&Yr(e))return!0;return!1}function Zr(e,t={}){let n=t.getDocument?.()??document,r=t.root??n.body,i=Xr(n),a=()=>{let t=Xr(n);t!==i&&(i=t,e(t))},o=new MutationObserver(()=>{a()});o.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`hidden`]});let s=window.setInterval(a,250);return{disconnect:()=>{o.disconnect(),window.clearInterval(s)}}}var Qr=c`
    @layer pk-component {
        :host {
            /* Not display:contents — that flattens the trigger slot into flex parents
               (e.g. playground cards) and stretches pk-button full width, same class of
               bug as the dropdown host. Dialog host is display none/block, not contents. */
            display: inline-block;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            vertical-align: middle;
        }

        /*
         * Controlled dialogs (no slot="trigger") — panel is top-layer / fixed while
         * yielding. An inline-block host still sizes to the open <dialog> box in some
         * engines and expands parents (Formie nested field cards grow a blank gap).
         *
         * Zero box ≠ gone from the tree: Tailwind space-y-* uses :not(:last-child) on
         * DOM siblings, so an in-tree host still steals last-child and margins the
         * previous sibling. Prefer flex/grid gap-* (skips out-of-flow children), or
         * mount overlays outside the spaced stack. True light-DOM portal would also fix it.
         */
        :host(:not([data-has-trigger])) {
            position: absolute;
            width: 0;
            height: 0;
            max-width: none;
            margin: 0;
            padding: 0;
            overflow: visible;
            vertical-align: unset;
        }

        .dialog {
            display: flex;
            flex-direction: column;
            width: min(100%, var(--pk-dialog-width, var(--pk-dialog-max-width, 32rem)));
            min-width: var(--pk-dialog-min-width, 0);
            /* Keep UA :modal inset (0) — that + margin:auto centers the panel. Do not
             * unset inset; it breaks centering (field edit landed top-left). */
            height: var(--pk-dialog-height, fit-content);
            min-height: var(--pk-dialog-min-height, 0);
            max-height: var(--pk-dialog-max-height, calc(100vh - 2rem));
            margin: auto;
            padding: 0;
            /* v1 DialogContent: no CSS border — edge is the 1px ring inside --pk-shadow-modal. */
            border: 0;
            border-radius: var(--pk-radius-lg);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-modal);
            color: var(--pk-color-gray-900);
            overflow: hidden;
            opacity: 1;
            transform: scale(1);
        }

        .dialog:focus,
        .dialog:focus-visible {
            outline: none;
        }

        .dialog:not([open]) {
            display: none;
        }

        .dialog--wide {
            --pk-dialog-max-width: 42rem;
        }

        /* motion only via animateWithClass — never auto-animate on [open] alone. */
        .dialog.show {
            animation: pk-dialog-in 0.15s ease;
        }

        .dialog.hide {
            animation: pk-dialog-out 0.15s ease forwards;
        }

        .dialog.pulse {
            animation: pk-dialog-pulse 0.25s ease;
        }

        @keyframes pk-dialog-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-dialog-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        @keyframes pk-dialog-pulse {
            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(0.98);
            }
        }

        .dialog.show::backdrop {
            animation: pk-dialog-backdrop-in 0.15s ease;
        }

        .dialog.hide::backdrop {
            animation: pk-dialog-backdrop-in 0.15s ease reverse;
        }

        .dialog::backdrop {
            background: hsl(from var(--pk-color-gray-900) h s l / 0.2);
            opacity: 1;
        }

        @keyframes pk-dialog-backdrop-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .header {
            position: relative;
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            gap: 0.2rem;
            padding: 1rem;
            border-bottom: 1px solid var(--pk-color-gray-150);
            border-radius: var(--pk-radius-lg) var(--pk-radius-lg) 0 0;
            background: #f3f7fb;
            text-align: left;
        }

        .title {
            margin: 0;
            padding-inline-end: 2rem;
            font-size: 0.9375rem;
            font-weight: 600;
            line-height: 1.2;
            color: var(--pk-color-gray-900);
        }

        .description {
            margin: 0;
            padding-inline-end: 2rem;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 1.4;
            color: var(--pk-color-gray-500);
        }

        .close {
            --pk-dialog-close-focus-padding: 0.25rem;
            position: absolute;
            top: calc(1rem - var(--pk-dialog-close-focus-padding));
            right: calc(1rem - var(--pk-dialog-close-focus-padding));
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));
            height: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));
            margin: 0;
            padding: var(--pk-dialog-close-focus-padding);
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            line-height: 0;
            opacity: 0.7;
            transition: opacity 0.12s ease;
            box-sizing: border-box;
        }

        .close-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
        }

        .close-icon svg {
            display: block;
            width: 1.125rem;
            height: 1.125rem;
        }

        .close:hover {
            opacity: 1;
            background: transparent;
        }

        .close:focus-visible {
            opacity: 1;
            box-shadow: 0 0 0 2px var(--pk-color-gray-600);
        }

        .body {
            flex: 1 1 auto;
            min-height: 0;
            overflow: auto;
            padding: 0;
            /* v1 DialogContent inherited CP text defaults (14px / gray-700) — do not
             * downshift body copy to sm/gray-600 or slotted content reads smaller than v1. */
            font-size: var(--pk-font-size-base);
            line-height: 1.5;
            color: var(--pk-color-gray-700);
        }

        .body--padded {
            padding: 1rem;
        }

        .footer {
            display: flex;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: flex-end;
            gap: 0.5rem;
            padding: 0.625rem 1rem;
            border-top: 1px solid var(--pk-color-gray-150);
            border-radius: 0 0 var(--pk-radius-lg) var(--pk-radius-lg);
            background: #e4edf6;
        }
    }
`,$r=k(A.xmark),ei=class extends $e{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.disablePointerDismissal=!1,this.withoutHeader=!1,this.withoutBodyPadding=!1,this.disableScrollLock=!1,this.size=`default`,this.triggerElement=null,this.previouslyFocused=null,this.yieldingToHostModal=!1,this.hostModalObserver=null,this.yieldBox=null,this.handleDocumentKeyDown=e=>{this.yieldingToHostModal||e.key===`Escape`&&this.open&&Pr(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(`escape`))},this.onHostModalPresenceChange=e=>{e?this.yieldToHostModal():this.restoreFromHostModal()},this.showing=!1,this.handleDialogCancel=e=>{e.preventDefault(),!this.dialogElement.classList.contains(`hide`)&&Pr(this)&&this.requestClose(`escape`)},this.handleDialogClick=e=>{e.composedPath().some(e=>e instanceof Element&&e.matches(`[data-dialog="close"], [data-dialog-close]`))&&(e.stopPropagation(),this.requestClose(`close-button`))},this.handleDialogPointerDown=async e=>{if(e.target===this.dialogElement&&Pr(this)){if(!this.disablePointerDismissal){this.requestClose(`pointer-dismiss`);return}await qr(this.dialogElement,`pulse`)}},this.onTriggerClick=e=>{e.preventDefault(),this.open=!0},this.onFooterSlotChange=()=>{this.requestUpdate()}}static{this.styles=Qr}hasCustomHeaderSlot(){return this.querySelector(`:scope > [slot="header"]`)!==null}applyYieldPosition(e){let t=this.dialogElement;t.style.position=`fixed`,t.style.top=`${e.top}px`,t.style.left=`${e.left}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.margin=`0`,t.style.maxHeight=`none`,t.style.zIndex=`99`,t.toggleAttribute(`data-yielding`,!0)}clearYieldPosition(){let e=this.dialogElement;e&&(e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.maxHeight=``,e.style.zIndex=``,e.removeAttribute(`data-yielding`),this.yieldBox=null)}yieldToHostModal(){if(this.yieldingToHostModal||!this.open||!this.dialogElement?.open)return;let e=this.dialogElement.getBoundingClientRect();this.yieldBox={top:e.top,left:e.left,width:e.width,height:e.height},this.yieldingToHostModal=!0;try{this.dialogElement.close(),this.dialogElement.show(),this.applyYieldPosition(this.yieldBox)}catch{this.yieldingToHostModal=!1,this.clearYieldPosition()}}restoreFromHostModal(){if(this.yieldingToHostModal&&(this.yieldingToHostModal=!1,this.clearYieldPosition(),this.open&&this.dialogElement))try{this.dialogElement.open&&this.dialogElement.close(),this.dialogElement.showModal()}catch{}}firstUpdated(){this.open&&this.show()}disconnectedCallback(){this.disableScrollLock||Hr(this),this.removeOpenListeners(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`open`)&&this.hasUpdated&&this.handleOpenChange()}handleOpenChange(){this.open&&!this.dialogElement.open?this.show():!this.open&&this.dialogElement.open&&(this.open=!0,this.requestClose(`api`))}async show(e=`api`){if(!(this.showing||this.dialogElement?.open)){this.showing=!0;try{let e=new Ur;if(!this.dispatchEvent(e)){this.open=!1;return}this.addOpenListeners(),this.previouslyFocused=document.activeElement,this.open=!0,this.dialogElement.showModal(),this.disableScrollLock||Vr(this),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);if(e){(e.shadowRoot?.querySelector(`input, textarea, select, button`)??e).focus({preventScroll:!0});return}this.dialogElement.focus({preventScroll:!0})}),await qr(this.dialogElement,`show`),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0})),this.dispatchEvent(new Wr)}finally{this.showing=!1}}}async hide(e=`unknown`){await this.requestClose(e)}closeDialog(){this.requestClose(`close-button`)}async requestClose(e=`unknown`){let t=new Gr(typeof e==`string`?e:`close-button`);if(!this.dispatchEvent(t)){this.open=!0,await qr(this.dialogElement,`pulse`);return}this.removeOpenListeners(),await qr(this.dialogElement,`hide`),this.open=!1,this.dialogElement.close(),this.disableScrollLock||Hr(this);let n=this.previouslyFocused;this.previouslyFocused=null,n?.isConnected&&window.setTimeout(()=>{n.focus({preventScroll:!0})},0),this.dispatchEvent(new Kr),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}forceOverlayReset(){if(this.open=!1,this.yieldingToHostModal=!1,this.clearYieldPosition(),this.removeOpenListeners(),this.dialogElement?.open)try{this.dialogElement.close()}catch{}this.dialogElement?.classList.remove(`hide`,`show`,`pulse`),this.disableScrollLock||Hr(this)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),Mr(this),this.hostModalObserver?.disconnect(),this.hostModalObserver=Zr(this.onHostModalPresenceChange),this.onHostModalPresenceChange(Xr())}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),Nr(this),this.hostModalObserver?.disconnect(),this.hostModalObserver=null,this.yieldingToHostModal=!1,this.clearYieldPosition()}syncHasTriggerAttribute(){this.toggleAttribute(`data-has-trigger`,!!this.triggerElement)}onTriggerSlotChange(e){let[t]=e.target.assignedElements({flatten:!0});this.triggerElement&&this.triggerElement.removeEventListener(`click`,this.onTriggerClick),this.triggerElement=t??null,this.syncHasTriggerAttribute(),this.triggerElement&&this.triggerElement.addEventListener(`click`,this.onTriggerClick)}render(){let e=!this.hasCustomHeaderSlot()&&!this.withoutHeader&&!!this.label,t=e&&!this.withoutBodyPadding,n=this.querySelector(`:scope > [slot="footer"]`)!==null;return S`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <dialog
                part="panel"
                class=${ft({dialog:!0,open:this.open,"dialog--wide":this.size===`wide`})}
                tabindex="-1"
                @cancel=${this.handleDialogCancel}
                @click=${this.handleDialogClick}
                @pointerdown=${this.handleDialogPointerDown}
            >
                <slot name="header">
                    ${e?S`
                            <header part="header" class="header">
                                <h2 part="title" class="title">
                                    <slot name="label">${this.label}</slot>
                                </h2>
                                ${this.description?S`
                                        <p part="description" class="description">
                                            <slot name="description">${this.description}</slot>
                                        </p>
                                    `:S`<slot name="description" hidden></slot>`}
                                <button type="button" class="close" data-dialog="close" aria-label="Close">
                                    <span class="close-icon" aria-hidden="true">${gt($r)}</span>
                                </button>
                            </header>
                        `:C}
                </slot>
                <div
                    part="body"
                    class=${ft({body:!0,"body--padded":t})}
                >
                    <slot></slot>
                </div>
                ${n?S`
                        <footer part="footer" class="footer">
                            <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
                        </footer>
                    `:S`<slot name="footer" @slotchange=${this.onFooterSlotChange} hidden></slot>`}
            </dialog>
        `}};D([w({type:Boolean,reflect:!0})],ei.prototype,`open`,void 0),D([w()],ei.prototype,`label`,void 0),D([w()],ei.prototype,`description`,void 0),D([w({attribute:`disable-pointer-dismissal`,type:Boolean,reflect:!0})],ei.prototype,`disablePointerDismissal`,void 0),D([w({attribute:`without-header`,type:Boolean,reflect:!0})],ei.prototype,`withoutHeader`,void 0),D([w({attribute:`without-body-padding`,type:Boolean,reflect:!0})],ei.prototype,`withoutBodyPadding`,void 0),D([w({attribute:`disable-scroll-lock`,type:Boolean,reflect:!0})],ei.prototype,`disableScrollLock`,void 0),D([w({reflect:!0})],ei.prototype,`size`,void 0),D([E(`dialog`)],ei.prototype,`dialogElement`,void 0),D([T()],ei.prototype,`triggerElement`,void 0),ei=D([Je(`pk-dialog`)],ei);function ti(e){let t=e.split(`-`)[0];return t===`inline-start`?`left`:t===`inline-end`?`right`:t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`}function ni(e,t,n,r,i){let a=ti(e),o=t.x+t.width/2-n.x,s=t.y+t.height/2-n.y;return Math.abs(i?.y??0)>r&&(a===`top`||a===`bottom`)?`${o}px ${t.y+t.height/2-n.y}px`:{top:`${o}px calc(100% + ${r}px)`,bottom:`${o}px ${-r}px`,left:`calc(100% + ${r}px) ${s}px`,right:`${-r}px ${s}px`}[a]}function ri(e,t){if(!t){e.removeAttribute(`data-side`);return}e.setAttribute(`data-side`,ti(t))}function ii(e,t,n=100,r){let i=()=>e.getAttribute(`data-current-placement`)??t;return!r?.requireEvent&&e.hasAttribute(`data-current-placement`)?Promise.resolve(i()):new Promise(t=>{let a=!1,o=()=>{a||(a=!0,t(i()))};e.addEventListener(`pk-reposition`,o,{once:!0}),r?.requireEvent||requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.hasAttribute(`data-current-placement`)&&o()})}),window.setTimeout(o,n)})}var ai=c`
    @layer pk-component {
        .pk-popup-content {
            transform-origin: var(--pk-transform-origin, top);
        }

        .pk-popup-content[data-open] {
            animation: pk-popup-content-in 100ms ease-out;
        }

        .pk-popup-content[data-open][data-side='bottom'] {
            animation-name: pk-popup-content-in-bottom;
        }

        .pk-popup-content[data-open][data-side='top'] {
            animation-name: pk-popup-content-in-top;
        }

        .pk-popup-content[data-open][data-side='left'] {
            animation-name: pk-popup-content-in-left;
        }

        .pk-popup-content[data-open][data-side='right'] {
            animation-name: pk-popup-content-in-right;
        }

        /* Exit: fade + zoom only — matches tw-animate animate-out / tooltip motion. */
        .pk-popup-content.closing {
            animation: pk-popup-content-out 100ms ease-in forwards;
        }
    }

    @keyframes pk-popup-content-in {
        from {
            opacity: 0;
            transform: scale(0.95);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes pk-popup-content-out {
        from {
            opacity: 1;
            transform: scale(1);
        }

        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes pk-popup-content-in-bottom {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-top {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-left {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }

    @keyframes pk-popup-content-in-right {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }
`,oi={default:c`
        --pk-dropdown-item-padding-block: 8px;
        --pk-dropdown-item-padding-inline: 12px;
        --pk-dropdown-item-gap: 0.625rem;
        --pk-dropdown-item-font-size: var(--pk-font-size-base);
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 12px;
        --pk-dropdown-label-font-size: 13px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xs:c`
        --pk-dropdown-item-padding-block: 3px;
        --pk-dropdown-item-padding-inline: 8px;
        --pk-dropdown-item-gap: 0.375rem;
        --pk-dropdown-item-font-size: 12px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 10px;
        --pk-dropdown-label-padding-inline: 8px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 11px;
    `,sm:c`
        --pk-dropdown-item-padding-block: 4px;
        --pk-dropdown-item-padding-inline: 10px;
        --pk-dropdown-item-gap: 0.4375rem;
        --pk-dropdown-item-font-size: 13px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 10px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 12px;
    `,lg:c`
        --pk-dropdown-item-padding-block: 10px;
        --pk-dropdown-item-padding-inline: 14px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 16px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 14px;
        --pk-dropdown-label-padding-inline: 14px;
        --pk-dropdown-label-font-size: 14px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xl:c`
        --pk-dropdown-item-padding-block: 12px;
        --pk-dropdown-item-padding-inline: 16px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 18px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 16px;
        --pk-dropdown-label-padding-inline: 16px;
        --pk-dropdown-label-font-size: 15px;
        --pk-dropdown-details-font-size: var(--pk-font-size-base);
    `},si=c`
    @layer pk-component {
        :host {
            ${oi.default}
        }

        :host([size='xs']) {
            ${oi.xs}
        }

        :host([size='sm']) {
            ${oi.sm}
        }

        :host([size='lg']) {
            ${oi.lg}
        }

        :host([size='xl']) {
            ${oi.xl}
        }
    }
`,ci=c`
    @layer pk-component {
        .panel[data-size='default'],
        .submenu-panel[data-size='default'] {
            ${oi.default}
        }

        .panel[data-size='xs'],
        .submenu-panel[data-size='xs'] {
            ${oi.xs}
        }

        .panel[data-size='sm'],
        .submenu-panel[data-size='sm'] {
            ${oi.sm}
        }

        .panel[data-size='lg'],
        .submenu-panel[data-size='lg'] {
            ${oi.lg}
        }

        .panel[data-size='xl'],
        .submenu-panel[data-size='xl'] {
            ${oi.xl}
        }
    }
`;c`
    ${si}
    ${ci}
`;var li=[ai,ci,c`
    @layer pk-component {
        :host {
            display: block;
            position: relative;
            /*
             * Slotted label text inherits from this host (light DOM), not from
             * shadow .item — pin size-token metrics so Craft CP / Tailwind /
             * bare hosts all get the same item rhythm.
             */
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .item {
            display: flex;
            align-items: center;
            gap: var(--pk-dropdown-item-gap, 0.625rem);
            width: 100%;
            margin: 0;
            padding: var(--pk-dropdown-item-padding-block, 8px) var(--pk-dropdown-item-padding-inline, 12px);
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            /* Explicit — do not let font:inherit re-leak page line-height. */
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([data-highlighted]) .item,
        :host([submenu-open]) .item {
            background: var(--pk-color-slate-100);
        }

        .item:focus-visible {
            background: var(--pk-color-slate-100);
        }

        .item[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .label {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .prefix {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            line-height: 0;
        }

        .prefix--empty {
            display: none;
        }

        .prefix ::slotted(*) {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            /* Kill pk-icon text-baseline nudge inside the padded flex row. */
            vertical-align: 0;
        }

        .prefix ::slotted(svg),
        .prefix ::slotted(*) svg,
        .prefix ::slotted(.pk-dropdown-item__prefix-icon) {
            display: block;
            width: var(--pk-dropdown-item-icon-size, 12px) !important;
            height: var(--pk-dropdown-item-icon-size, 12px) !important;
            max-width: var(--pk-dropdown-item-icon-size, 12px);
            max-height: var(--pk-dropdown-item-icon-size, 12px);
            flex-shrink: 0;
            pointer-events: none;
        }

        .details {
            margin-left: auto;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-dropdown-details-font-size, var(--pk-font-size-sm));
            letter-spacing: 0.04em;
        }

        .details:empty {
            display: none;
        }

        .check {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            color: var(--pk-color-gray-700);
        }

        .check svg {
            display: block;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            pointer-events: none;
        }

        .submenu-icon {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 1rem;
            color: var(--pk-color-gray-700);
        }

        .submenu-icon svg {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
        }

        .check {
            opacity: 0;
        }

        :host([checked]) .check {
            opacity: 1;
        }

        :host([type='checkbox']) .check,
        :host([type='radio']) .check {
            margin-left: auto;
        }

        :host([type='checkbox'][checked]) .check,
        :host([type='radio'][checked]) .check {
            opacity: 1;
        }

        .submenu-icon:empty {
            display: none;
        }

        :host([destructive]) .item {
            color: var(--pk-color-error);
        }

        :host([destructive]) .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([destructive]) .item:focus-visible {
            color: var(--pk-color-error);
        }

        .submenu-panel {
            width: max-content;
            min-width: 8rem;
            max-height: var(--pk-popup-available-height, calc(100dvh - 20px));
            overflow: auto;
            overscroll-behavior: contain;
            padding: 4px 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            /* Match root menu panel — Craft body text, not gray-900. */
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .submenu-panel ::slotted(pk-dropdown-item),
        .submenu-panel ::slotted(pk-dropdown-separator),
        .submenu-panel ::slotted(pk-dropdown-label) {
            display: block;
        }

        .submenu-panel[hidden] {
            display: none !important;
        }
    }
`],ui,di=k(Pt),fi=k(Lt),pi=class extends $e{static{ui=this}constructor(...e){super(...e),this.value=``,this.type=`normal`,this.radioGroup=``,this.disabled=!1,this.destructive=!1,this.checked=!1,this.submenuOpen=!1,this.active=!1,this.submenuAnimated=!1,this.hasSlotController=new gr(this,`submenu`,`details`,`start`,`prefix`),this.handleMouseEnter=()=>{this.hasSubmenu()&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.styles=li}connectedCallback(){super.connectedCallback(),this.syncRole(),this.syncSubmenuAria(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseenter`,this.handleMouseEnter)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseenter`,this.handleMouseEnter),this.closeSubmenu(),super.disconnectedCallback()}updated(e){(e.has(`type`)||e.has(`checked`))&&this.syncRole(),(e.has(`submenuOpen`)||e.size===0)&&this.syncSubmenuAria(),e.has(`submenuOpen`)&&(this.submenuOpen?this.ensureSubmenuSurface():this.submenuAnimated=!1)}hasSubmenu(){return this.hasSlotController.test(`submenu`)}syncSubmenuAria(){let e=this.hasSubmenu();e?this.setAttribute(`aria-haspopup`,`menu`):this.removeAttribute(`aria-haspopup`),this.setAttribute(`aria-expanded`,e&&this.submenuOpen?`true`:`false`)}focusControl(){this.shadowRoot?.querySelector(`.item`)?.focus({preventScroll:!0})}focus(e){let t=this.shadowRoot?.querySelector(`.item`);if(t){t.focus(e);return}super.focus(e)}get submenuElement(){return this.submenuPanelElement??null}closeSubmenu(){this.submenuAnimated=!1,this.submenuOpen=!1}openSubmenu(){this.hasSubmenu()&&!this.disabled&&this.isConnected&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}notifyParentOfOpening(){this.dispatchEvent(new CustomEvent(`pk-submenu-open`,{bubbles:!0,composed:!0,detail:{item:this}}));let e=this.parentElement;if(e)for(let t of e.children)t!==this&&t instanceof ui&&t.getAttribute(`slot`)===this.getAttribute(`slot`)&&t.submenuOpen&&(t.submenuOpen=!1)}ensureSubmenuSurface(){this.hasSubmenu()&&!this.disabled&&(this.submenuAnimated=!0,this.updateComplete.then(()=>{this.submenuOpen&&this.submenuPanelElement&&(this.submenuPanelElement.hidden=!1,ri(this.submenuPanelElement,`right-start`),ii(this.submenuPopupElement,`right-start`).then(e=>{ri(this.submenuPanelElement,e)}))}))}syncRole(){if(this.type===`checkbox`){this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}if(this.type===`radio`){this.setAttribute(`role`,`menuitemradio`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}this.hasSubmenu()&&(e.preventDefault(),this.openSubmenu())}render(){let e=this.hasSubmenu(),t=this.type===`checkbox`||this.type===`radio`,n=this.hasSlotController.test(`start`)||this.hasSlotController.test(`prefix`);return S`
            <button
                part="item"
                type="button"
                class="item"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:C}
                @click=${this.handleClick}
            >
                <span
                    part="prefix"
                    class=${n?`prefix`:`prefix prefix--empty`}
                >
                    <slot name="start"></slot>
                    <slot name="prefix"></slot>
                </span>
                <span part="label" class="label"><slot></slot></span>
                <span class="details"><slot name="details"></slot></span>
                ${t?S`<span part="check" class="check" aria-hidden="true">${gt(di)}</span>`:C}
                ${e?S`<span class="submenu-icon" aria-hidden="true">${gt(fi)}</span>`:C}
            </button>
            ${e?S`
                <pk-popup
                    .active=${this.submenuOpen}
                    .anchor=${this}
                    placement="right-start"
                    .distance=${0}
                    .skidding=${-4}
                    flip
                    shift
                    auto-size="vertical"
                    .autoSizePadding=${10}
                    hover-bridge
                    style="--pk-popup-z-index: 1001"
                >
                    <div
                        part="submenu"
                        class="submenu-panel pk-popup-content"
                        role="menu"
                        data-size=${mi(this)}
                        ?hidden=${!this.submenuOpen}
                        data-open=${this.submenuAnimated?``:C}
                        aria-orientation="vertical"
                    >
                        <slot name="submenu"></slot>
                    </div>
                </pk-popup>
            `:C}
        `}};D([w()],pi.prototype,`value`,void 0),D([w({reflect:!0})],pi.prototype,`type`,void 0),D([w({attribute:`radio-group`})],pi.prototype,`radioGroup`,void 0),D([w({type:Boolean,reflect:!0})],pi.prototype,`disabled`,void 0),D([w({type:Boolean,reflect:!0})],pi.prototype,`destructive`,void 0),D([w({type:Boolean,reflect:!0})],pi.prototype,`checked`,void 0),D([w({attribute:`submenu-open`,type:Boolean,reflect:!0})],pi.prototype,`submenuOpen`,void 0),D([w({type:Boolean})],pi.prototype,`active`,void 0),D([T()],pi.prototype,`submenuAnimated`,void 0),D([E(`.submenu-panel`)],pi.prototype,`submenuPanelElement`,void 0),D([E(`pk-popup`)],pi.prototype,`submenuPopupElement`,void 0),pi=ui=D([Je(`pk-dropdown-item`)],pi);function mi(e){let t=e.parentElement?.getAttribute(`data-size`);if(t===`xs`||t===`sm`||t==="default"||t===`lg`||t===`xl`)return t;let n=e.closest(`pk-dropdown-menu`)?.getAttribute(`size`);return n===`xs`||n===`sm`||n===`lg`||n===`xl`?n:`default`}function*hi(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*hi(e.shadowRoot.activeElement)))}var gi=globalThis.HTMLElement!==void 0&&Object.prototype.hasOwnProperty.call(globalThis.HTMLElement.prototype,`popover`),_i=Math.min,vi=Math.max,yi=Math.round,bi=Math.floor,xi=e=>({x:e,y:e}),Si={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Ci(e,t,n){return vi(e,_i(t,n))}function wi(e,t){return typeof e==`function`?e(t):e}function Ti(e){return e.split(`-`)[0]}function Ei(e){return e.split(`-`)[1]}function Di(e){return e===`x`?`y`:`x`}function Oi(e){return e===`y`?`height`:`width`}function ki(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Ai(e){return Di(ki(e))}function ji(e,t,n){n===void 0&&(n=!1);let r=Ei(e),i=Ai(e),a=Oi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Bi(o)),[o,Bi(o)]}function Mi(e){let t=Bi(e);return[Ni(e),t,Ni(t)]}function Ni(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Pi=[`left`,`right`],Fi=[`right`,`left`],Ii=[`top`,`bottom`],Li=[`bottom`,`top`];function Ri(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Fi:Pi:t?Pi:Fi;case`left`:case`right`:return t?Ii:Li;default:return[]}}function zi(e,t,n,r){let i=Ei(e),a=Ri(Ti(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ni)))),a}function Bi(e){let t=Ti(e);return Si[t]+e.slice(t.length)}function Vi(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Hi(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Vi(e)}function Ui(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Wi(e,t,n){let{reference:r,floating:i}=e,a=ki(t),o=Ai(t),s=Oi(o),c=Ti(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Ei(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Gi(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=wi(t,e),p=Hi(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ui(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ui(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Ki=50,qi=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Gi},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Wi(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Ki&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Wi(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ji=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=wi(e,t)||{};if(l==null)return{};let d=Hi(u),f={x:n,y:r},p=Ai(i),m=Oi(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],ee=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),te=ee?ee[y]:0;(!te||!await(o.isElement==null?void 0:o.isElement(ee)))&&(te=s.floating[y]||a.floating[m]);let ne=b/2-x/2,re=te/2-h[m]/2-1,ie=_i(d[_],re),ae=_i(d[v],re),oe=te-h[m]-ae,se=te/2-h[m]/2+ne,ce=Ci(ie,se,oe),le=!c.arrow&&Ei(i)!=null&&se!==ce&&a.reference[m]/2-(se<ie?ie:ae)-h[m]/2<0,ue=le?se<ie?se-ie:se-oe:0;return{[p]:f[p]+ue,data:{[p]:ce,centerOffset:se-ce-ue,...le&&{alignmentOffset:ue}},reset:le}}}),Yi=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=wi(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Ti(r),_=ki(o),v=Ti(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Bi(o)]:Mi(o)),x=p!==`none`;!d&&x&&b.push(...zi(o,m,p,y));let ee=[o,...b],te=await s.detectOverflow(t,h),ne=[],re=i.flip?.overflows||[];if(l&&ne.push(te[g]),u){let e=ji(r,a,y);ne.push(te[e[0]],te[e[1]])}if(re=[...re,{placement:r,overflows:ne}],!ne.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===ki(t)||re.every(e=>ki(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:re},reset:{placement:t}};let n=re.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=re.filter(e=>{if(x){let t=ki(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Xi=new Set([`left`,`top`]);async function Zi(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Ti(n),s=Ei(n),c=ki(n)===`y`,l=Xi.has(o)?-1:1,u=a&&c?-1:1,d=wi(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Qi=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Zi(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},$i=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=wi(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=ki(i),p=Di(f),m=u[p],h=u[f],g=(e,t)=>Ci(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},ea=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=wi(e,t),c=await i.detectOverflow(t,s),l=Ti(n),u=Ei(n),d=ki(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=_i(p-c[m],g),y=_i(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,te=y;b!=null&&b.enabled.x&&(te=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?te=f-2*vi(c.left,c.right):ee=p-2*vi(c.top,c.bottom)),await o({...t,availableWidth:te,availableHeight:ee});let ne=await i.getDimensions(a.floating);return f!==ne.width||p!==ne.height?{reset:{rects:!0}}:{}}}};function ta(){return typeof window<`u`}function na(e){return aa(e)?(e.nodeName||``).toLowerCase():`#document`}function ra(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ia(e){return((aa(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function aa(e){return ta()?e instanceof Node||e instanceof ra(e).Node:!1}function oa(e){return ta()?e instanceof Element||e instanceof ra(e).Element:!1}function sa(e){return ta()?e instanceof HTMLElement||e instanceof ra(e).HTMLElement:!1}function ca(e){return!ta()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof ra(e).ShadowRoot}function la(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=ba(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function ua(e){return/^(table|td|th)$/.test(na(e))}function da(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var fa=/transform|translate|scale|rotate|perspective|filter/,pa=/paint|layout|strict|content/,ma=e=>!!e&&e!==`none`,ha;function ga(e){let t=oa(e)?ba(e):e;return ma(t.transform)||ma(t.translate)||ma(t.scale)||ma(t.rotate)||ma(t.perspective)||!va()&&(ma(t.backdropFilter)||ma(t.filter))||fa.test(t.willChange||``)||pa.test(t.contain||``)}function _a(e){let t=Sa(e);for(;sa(t)&&!ya(t);){if(ga(t))return t;if(da(t))return null;t=Sa(t)}return null}function va(){return ha??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),ha}function ya(e){return/^(html|body|#document)$/.test(na(e))}function ba(e){return ra(e).getComputedStyle(e)}function xa(e){return oa(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Sa(e){if(na(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||ca(e)&&e.host||ia(e);return ca(t)?t.host:t}function Ca(e){let t=Sa(e);return ya(t)?(e.ownerDocument||e).body:sa(t)&&la(t)?t:Ca(t)}function wa(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ca(e),i=r===e.ownerDocument?.body,a=ra(r);if(i){let e=Ta(a);return t.concat(a,a.visualViewport||[],la(r)?r:[],e&&n?wa(e):[])}return t.concat(r,wa(r,[],n))}function Ta(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ea(e){let t=ba(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=sa(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=yi(n)!==a||yi(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Da(e){return oa(e)?e:e.contextElement}function Oa(e){let t=Da(e);if(!sa(t))return xi(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ea(t),o=(a?yi(n.width):n.width)/r,s=(a?yi(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var ka=xi(0);function Aa(e){let t=ra(e);return!va()||!t.visualViewport?ka:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ja(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===ra(e)}function Ma(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Da(e),o=xi(1);t&&(r?oa(r)&&(o=Oa(r)):o=Oa(e));let s=ja(a,n,r)?Aa(a):xi(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=ra(a),t=oa(r)?ra(r):r,n=e,i=Ta(n);for(;i&&t!==n;){let e=Oa(i),t=i.getBoundingClientRect(),r=ba(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=ra(i),i=Ta(n)}}return Ui({width:u,height:d,x:c,y:l})}function Na(e,t){let n=xa(e).scrollLeft;return t?t.left+n:Ma(ia(e)).left+n}function Pa(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Na(e,n),y:n.top+t.scrollTop}}function Fa(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=ia(r),s=t?da(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=xi(1),u=xi(0),d=sa(r);if((d||!a)&&((na(r)!==`body`||la(o))&&(c=xa(r)),d)){let e=Ma(r);l=Oa(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Pa(o,c):xi(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Ia(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function La(e){let t=xa(e),n=e.ownerDocument.body,r=vi(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=vi(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Na(e),o=-t.scrollTop;return ba(n).direction===`rtl`&&(a+=vi(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var Ra=25;function za(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=ra(e),a=ia(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!va()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Na(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Ra&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Ba(e,t){let n=Ma(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Oa(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Va(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=za(e,n,t);else if(t===`document`)r=La(ia(e));else if(oa(t))r=Ba(t,n);else{let n=Aa(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ui(r)}function Ha(e,t){let n=t.get(e);if(n)return n;let r=wa(e,[],!1).filter(e=>oa(e)&&na(e)!==`body`),i=null,a=ba(e).position===`fixed`,o=a?Sa(e):e;for(;oa(o)&&!ya(o);){let e=ba(o),t=ga(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Sa(o)}return t.set(e,r),r}function Ua(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?da(t)?[]:Ha(t,this._c):[].concat(n),r],o=Va(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Va(t,a[e],i);s=vi(n.top,s),c=_i(n.right,c),l=_i(n.bottom,l),u=vi(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Wa(e){let{width:t,height:n}=Ea(e);return{width:t,height:n}}function Ga(e,t,n){let r=sa(t),i=ia(t),a=n===`fixed`,o=Ma(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=xi(0);if((r||!a)&&((na(t)!==`body`||la(i))&&(s=xa(t)),r)){let e=Ma(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Na(i));let l=i&&!r&&!a?Pa(i,s):xi(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Ka(e){return ba(e).position===`static`}function qa(e,t){if(!sa(e)||ba(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return ia(e)===n&&(n=n.ownerDocument.body),n}function Ja(e,t){let n=ra(e);if(da(e))return n;if(!sa(e)){let t=Sa(e);for(;t&&!ya(t);){if(oa(t)&&!Ka(t))return t;t=Sa(t)}return n}let r=qa(e,t);for(;r&&ua(r)&&Ka(r);)r=qa(r,t);return r&&ya(r)&&Ka(r)&&!ga(r)?n:r||_a(e)||n}var Ya=async function(e){let t=this.getOffsetParent||Ja,n=this.getDimensions,r=await n(e.floating);return{reference:Ga(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Xa(e){return ba(e).direction===`rtl`}var Za={convertOffsetParentRelativeRectToViewportRelativeRect:Fa,getDocumentElement:ia,getClippingRect:Ua,getOffsetParent:Ja,getElementRects:Ya,getClientRects:Ia,getDimensions:Wa,getScale:Oa,isElement:oa,isRTL:Xa};function Qa(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $a(e,t,n){let r=null,i,a=ia(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=bi(d),h=bi(a.clientWidth-(u+f)),g=bi(a.clientHeight-(d+p)),_=bi(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:vi(0,_i(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Qa(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=ra(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function eo(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Da(e),u=i||a?[...l?wa(l):[],...t?wa(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?$a(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Ma(e):null;c&&g();function g(){let t=Ma(e);h&&!Qa(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var to=Qi,no=$i,ro=Yi,io=ea,ao=Ji,oo=(e,t,n)=>{let r=new Map,i=n??{},a={...Za,...i.platform,_c:r};return qi(e,t,{...i,platform:a})};function so(e){return lo(e)}function co(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function lo(e){for(let t=e;t;t=co(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=co(e);t;t=co(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||ga(e)||t.tagName===`BODY`))return t}return null}function uo(e,t){if(!t)return null;let n=e.getRootNode();if(n instanceof Document||n instanceof ShadowRoot){let e=n.getElementById(t);if(e)return e}return e.ownerDocument.getElementById(t)}var fo=class extends Event{constructor(){super(`pk-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},po=c`
    @layer pk-component {
        :host {
            display: contents;
        }

        .popup {
            position: absolute;
            isolation: isolate;
            width: max-content;
            z-index: var(--pk-popup-z-index, 1000);
            /* Never transition coordinates — flip would animate the jump. */
            transition: none;

            /* Reset UA styles for [popover] — see  pk-popup. */
            inset: unset;
            padding: unset;
            margin: unset;
            height: unset;
            color: unset;
            background: unset;
            border: unset;
            overflow: unset;
        }

        .popup-fixed {
            position: fixed;
        }

        .popup:not(.active) {
            display: none;
        }

        /* Prefer visibility over opacity so enter animations are not fighting a
         * 0→1 fade. Matches base-ui isPositioned / hide-until-placed.
         */
        .popup.active:not(.positioned) {
            visibility: hidden;
            pointer-events: none;
        }

        .popup.show {
            animation: pk-popup-surface-in 100ms ease-out;
        }

        .popup.hide {
            animation: pk-popup-surface-out 100ms ease-in forwards;
        }

        @keyframes pk-popup-surface-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-popup-surface-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        .arrow {
            position: absolute;
            width: var(--pk-popup-arrow-size, 6px);
            height: var(--pk-popup-arrow-size, 6px);
            rotate: 45deg;
            background: var(--pk-popup-arrow-color, var(--pk-color-white));
            z-index: 1;
        }

        .hover-bridge {
            position: fixed;
            z-index: calc(var(--pk-popup-z-index, 1000) - 1);
            inset: 0;
            clip-path: polygon(
                var(--pk-hover-bridge-top-left-x, 0) var(--pk-hover-bridge-top-left-y, 0),
                var(--pk-hover-bridge-top-right-x, 0) var(--pk-hover-bridge-top-right-y, 0),
                var(--pk-hover-bridge-bottom-right-x, 0) var(--pk-hover-bridge-bottom-right-y, 0),
                var(--pk-hover-bridge-bottom-left-x, 0) var(--pk-hover-bridge-bottom-left-y, 0)
            );
            pointer-events: auto;
        }

        .hover-bridge:not(.hover-bridge-visible) {
            display: none;
        }
    }
`;function mo(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e}function ho(e){return e||(gi?`absolute`:`fixed`)}function go(e,t){if(gi&&!mo(e)&&t===`scroll`)return wa(e).filter(e=>e instanceof Element)}var j=class extends $e{constructor(...e){super(...e),this.anchor=``,this.active=!1,this.boundary=`viewport`,this.placement=`bottom-start`,this.distance=4,this.skidding=0,this.flip=!0,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=8,this.shift=!0,this.shiftPadding=8,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.autoSizePadding=8,this.anchorTracking=!0,this.hoverBridge=!1,this.anchorElement=null,this.settlingInitialPosition=!1,this.settleGeneration=0}static{this.styles=po}disconnectedCallback(){this.stop(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`active`)&&(this.active?(this.resolveAnchor(),this.start()):this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&!e.has(`active`)&&this.reposition()}reposition(){this.settlingInitialPosition||this.repositionAsync()}async repositionAsync(e=!0){let t=this.popupElement,n=this.arrow?this.arrowElement:null;if(!this.active||!this.anchorElement||!t)return!1;let r=go(this.anchorElement,this.boundary),i=[to({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?i.push(io({apply:({rects:e})=>{let n=this.sync===`width`||this.sync===`both`,r=this.sync===`height`||this.sync===`both`;t.style.width=n?`${e.reference.width}px`:``,t.style.height=r?`${e.reference.height}px`:``}})):(t.style.width=``,t.style.height=``),this.flip&&i.push(ro({boundary:r,fallbackPlacements:this.flipFallbackPlacements?this.flipFallbackPlacements.split(` `).map(e=>e.trim()).filter(Boolean):void 0,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&i.push(no({boundary:r,padding:this.shiftPadding})),this.autoSize?i.push(io({boundary:r,padding:this.autoSizePadding,apply:({availableHeight:e,availableWidth:n})=>{let r=this.autoSize===`horizontal`||this.autoSize===`both`,i=this.autoSize===`vertical`||this.autoSize===`both`;r?t.style.setProperty(`--pk-popup-available-width`,`${Math.max(0,Math.floor(n))}px`):t.style.removeProperty(`--pk-popup-available-width`),i?t.style.setProperty(`--pk-popup-available-height`,`${Math.max(0,Math.floor(e))}px`):t.style.removeProperty(`--pk-popup-available-height`)}})):(t.style.removeProperty(`--pk-popup-available-width`),t.style.removeProperty(`--pk-popup-available-height`)),this.arrow&&n&&i.push(ao({element:n,padding:this.arrowPadding}));let a=ho(this.positionMethod),o=a===`fixed`;t.classList.toggle(`popup-fixed`,o);let s=gi?e=>Za.getOffsetParent(e,so):Za.getOffsetParent,{x:c,y:l,middlewareData:u,placement:d}=await oo(this.anchorElement,t,{placement:this.placement,middleware:i,strategy:a,platform:{...Za,getOffsetParent:s}});if(!this.active||!t.isConnected)return!1;let f={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[d.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,d),Object.assign(t.style,{left:`${c}px`,top:`${l}px`,...o?{position:`fixed`}:{position:``}}),this.anchorElement){let e=this.anchorElement.getBoundingClientRect(),n=t.getBoundingClientRect();t.style.setProperty(`--pk-anchor-width`,`${e.width}px`),t.style.setProperty(`--pk-anchor-height`,`${e.height}px`);let r=ni(d,e,n,this.distance,u.shift);t.style.setProperty(`--pk-transform-origin`,r)}if(this.arrow&&n){let e=u.arrow?.x,t=u.arrow?.y,r=``,i=``,a=``,o=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`${this.arrowPadding}px`:``;r=typeof t==`number`?`${this.arrowPadding}px`:``,o=n}else this.arrowPlacement===`end`?(i=typeof e==`number`?`${this.arrowPadding}px`:``,a=typeof t==`number`?`${this.arrowPadding}px`:``):this.arrowPlacement===`center`?(o=typeof e==`number`?`50%`:``,r=typeof t==`number`?`50%`:``):(o=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(n.style,{top:r,right:i,bottom:a,left:o,transform:``,[f]:`calc(-1 * var(--pk-popup-arrow-size, 6px) / 2)`})}return requestAnimationFrame(()=>this.updateHoverBridge()),e&&this.dispatchEvent(new fo),!0}frames(e){return new Promise(t=>{let n=e=>{if(e<=0){t();return}requestAnimationFrame(()=>n(e-1))};n(e)})}async settleInitialPosition(){let e=++this.settleGeneration,t=this.popupElement;if(!t){this.settlingInitialPosition=!1;return}await this.frames(2),this.active&&e===this.settleGeneration&&(await this.repositionAsync(!1),t.offsetHeight,await this.frames(1),this.active&&e===this.settleGeneration&&(await this.repositionAsync(!1),this.active&&e===this.settleGeneration&&(t.classList.add(`positioned`),this.settlingInitialPosition=!1,requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new fo))))}resolveAnchor(){if(typeof this.anchor==`string`&&this.anchor){this.anchorElement=uo(this,this.anchor);return}if(this.anchor instanceof Element||mo(this.anchor)){this.anchorElement=this.anchor;return}let e=this.querySelector(`[slot="anchor"]`);e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]??null),this.anchorElement=e}async handleAnchorChange(){await this.stop(),this.resolveAnchor(),this.anchorElement&&this.active&&this.start()}usesPopoverTopLayer(){return gi&&this.positionMethod!==`fixed`}stop(){return new Promise(e=>{let t=this.popupElement;this.settleGeneration+=1,this.settlingInitialPosition=!1,t?.classList.remove(`positioned`),this.usesPopoverTopLayer()&&t?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,t?.style.removeProperty(`--pk-transform-origin`),requestAnimationFrame(()=>e())):e(),this.removeAttribute(`data-current-placement`)})}releasePositioning(){this.cleanup&&=(this.cleanup(),void 0)}async awaitHidden(){await this.stop()}start(){this.anchorElement&&this.active&&this.isConnected&&this.popupElement&&(this.popupElement.classList.remove(`positioned`),this.settlingInitialPosition=!0,this.usesPopoverTopLayer()&&this.popupElement.showPopover?.(),this.anchorTracking&&(this.cleanup=eo(this.anchorElement,this.popupElement,()=>{this.settlingInitialPosition||this.reposition()})),this.settleInitialPosition())}getContentElement(){let e=((this.shadowRoot?.querySelector(`slot:not([name])`))?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement);if(e)return e;for(let e of this.childNodes)if(e instanceof HTMLElement&&e.getAttribute(`slot`)!==`anchor`)return e;return null}updateHoverBridge(){let e=this.popupElement;if(!this.hoverBridge||!this.anchorElement||!e)return;let t=this.anchorElement.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.placement.includes(`top`)||this.placement.includes(`bottom`),i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;r?t.top<n.top?(i=t.left,a=t.bottom,o=t.right,s=t.bottom,c=n.left,l=n.top,u=n.right,d=n.top):(i=n.left,a=n.bottom,o=n.right,s=n.bottom,c=t.left,l=t.top,u=t.right,d=t.top):t.left<n.left?(i=t.right,a=t.top,o=n.left,s=n.top,c=t.right,l=t.bottom,u=n.left,d=n.bottom):(i=n.right,a=n.top,o=t.left,s=t.top,c=n.right,l=n.bottom,u=t.left,d=t.bottom),this.style.setProperty(`--pk-hover-bridge-top-left-x`,`${i}px`),this.style.setProperty(`--pk-hover-bridge-top-left-y`,`${a}px`),this.style.setProperty(`--pk-hover-bridge-top-right-x`,`${o}px`),this.style.setProperty(`--pk-hover-bridge-top-right-y`,`${s}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-x`,`${c}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-y`,`${l}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-x`,`${u}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-y`,`${d}px`)}render(){let e=!gi||this.positionMethod===`fixed`,t=this.usesPopoverTopLayer();return S`
            <slot name="anchor" @slotchange=${()=>{this.handleAnchorChange()}}></slot>
            ${this.hoverBridge?S`
                <div
                    part="hover-bridge"
                    class=${ft({"hover-bridge":!0,"hover-bridge-visible":this.active})}
                    aria-hidden="true"
                ></div>
            `:C}
            <div
                popover=${t?`manual`:C}
                part="popup"
                class=${ft({popup:!0,active:this.active,"popup-fixed":e})}
            >
                ${this.arrow?S`<div part="arrow" class="arrow"></div>`:C}
                <slot></slot>
            </div>
        `}};D([w()],j.prototype,`anchor`,void 0),D([w({type:Boolean,reflect:!0})],j.prototype,`active`,void 0),D([w({attribute:`position-method`})],j.prototype,`positionMethod`,void 0),D([w({reflect:!0})],j.prototype,`boundary`,void 0),D([w({reflect:!0})],j.prototype,`placement`,void 0),D([w({type:Number})],j.prototype,`distance`,void 0),D([w({type:Number})],j.prototype,`skidding`,void 0),D([w({type:Boolean})],j.prototype,`flip`,void 0),D([w({attribute:`flip-fallback-placements`})],j.prototype,`flipFallbackPlacements`,void 0),D([w({attribute:`flip-fallback-strategy`})],j.prototype,`flipFallbackStrategy`,void 0),D([w({attribute:`flip-padding`,type:Number})],j.prototype,`flipPadding`,void 0),D([w({type:Boolean})],j.prototype,`shift`,void 0),D([w({attribute:`shift-padding`,type:Number})],j.prototype,`shiftPadding`,void 0),D([w({type:Boolean})],j.prototype,`arrow`,void 0),D([w({attribute:`arrow-placement`})],j.prototype,`arrowPlacement`,void 0),D([w({attribute:`arrow-padding`,type:Number})],j.prototype,`arrowPadding`,void 0),D([w()],j.prototype,`sync`,void 0),D([w({attribute:`auto-size`})],j.prototype,`autoSize`,void 0),D([w({attribute:`auto-size-padding`,type:Number})],j.prototype,`autoSizePadding`,void 0),D([w({attribute:`anchor-tracking`,type:Boolean})],j.prototype,`anchorTracking`,void 0),D([w({attribute:`hover-bridge`,type:Boolean})],j.prototype,`hoverBridge`,void 0),D([E(`.popup`)],j.prototype,`popupElement`,void 0),D([E(`.arrow`)],j.prototype,`arrowElement`,void 0),j=D([Je(`pk-popup`)],j);var _o=[ot(),si,ci,c`
        @layer pk-component {
            /* Standalone: keep a real box so the trigger is not a flex-stretched
               child of the page (display:contents flattened pk-button to full card width).
               Button groups override below — same as legacy + React MenuButton inline-flex wrap. */
            :host {
                display: inline-block;
                position: relative;
                width: fit-content;
                max-width: 100%;
                align-self: flex-start;
                vertical-align: middle;
            }

            :host([data-pk-group-orientation]) {
                display: inline-flex;
                vertical-align: middle;
                flex: 0 0 auto;
                width: auto;
                max-width: none;
                align-self: auto;
            }

            /* Belt-and-suspenders if a parent still flattens layout onto the trigger. */
            ::slotted([slot='trigger']) {
                width: fit-content;
                max-width: 100%;
                flex: 0 0 auto;
                align-self: flex-start;
            }

            :host([data-pk-group-orientation]) ::slotted([slot='trigger']) {
                --pk-bg-start-start-radius: inherit;
                --pk-bg-start-end-radius: inherit;
                --pk-bg-end-start-radius: inherit;
                --pk-bg-end-end-radius: inherit;
                align-self: auto;
                max-width: none;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]) {
                margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]) {
                margin-block-start: var(--pk-bg-vertical-indent, 0);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            }

            /* Menu panel — hug content; do not stretch to trigger/anchor width. */
            .panel {
                display: flex;
                flex-direction: column;
                width: max-content;
                min-width: 8rem;
                max-height: var(--pk-popup-available-height, calc(100dvh - 20px));
                margin: 0;
                overflow: auto;
                overscroll-behavior: contain;
                padding: 4px 0;
                border: 0;
                border-radius: var(--pk-radius-md);
                background: var(--pk-color-white);
                box-shadow: var(--pk-shadow-popup);
                /* v1 DropdownMenuItem had no face color — inherited Craft body
                 * (--text-color ≈ gray-700). Do not force gray-900 (too dark). */
                color: var(--text-color, var(--pk-color-gray-700));
                outline: none;
                text-align: start;
                user-select: none;
                /* Match v1 Base UI: popup writes --pk-transform-origin from the
                 * anchor center on the connecting edge (e.g. top-right for
                 * bottom-end). Keyword edge centers made end-aligned menus
                 * scale from the middle of the panel. */
                transform-origin: var(--pk-transform-origin, top);
            }

            .panel.show {
                animation: pk-dropdown-menu-show 100ms ease;
            }

            .panel.hide {
                animation: pk-dropdown-menu-show 100ms ease reverse;
            }

            .panel[hidden] {
                display: none !important;
            }

            ::slotted(pk-dropdown-item),
            ::slotted(pk-dropdown-separator),
            ::slotted(pk-dropdown-label),
            .panel > pk-dropdown-item,
            .panel > pk-dropdown-separator,
            .panel > pk-dropdown-label {
                display: block;
            }

            ::slotted([data-menu-item]) {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                width: 100%;
                margin: 0;
                padding: 8px 12px;
                border: 0;
                background: transparent;
                color: inherit;
                font: inherit;
                font-size: var(--pk-font-size-base);
                text-align: left;
                white-space: nowrap;
                cursor: default;
                user-select: none;
                outline: none;
                box-sizing: border-box;
            }

            ::slotted([data-menu-item]:hover:not([disabled])) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item]:focus-visible) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item][disabled]) {
                pointer-events: none;
                opacity: 0.5;
            }

            ::slotted(pk-dropdown-item[destructive]),
            ::slotted([data-destructive]) {
                color: var(--pk-color-error);
            }

            ::slotted([data-menu-separator]) {
                display: block;
                height: 1px;
                margin: 4px 0;
                background: var(--pk-color-slate-200);
                border: 0;
                padding: 0;
            }
        }

        /* Outside @layer so constructed stylesheets resolve the name reliably. */
        @keyframes pk-dropdown-menu-show {
            from {
                scale: 0.9;
                opacity: 0;
            }

            to {
                scale: 1;
                opacity: 1;
            }
        }
    `],vo=new Set,yo=class extends $e{constructor(...e){super(...e),this.open=!1,this.size=`default`,this.placement=`bottom-start`,this.sideOffset=4,this.distance=4,this.skidding=0,this.for=``,this.userTypedQuery=``,this.userTypedTimeout=0,this.openSubmenuStack=[],this.openedByKeyboard=!1,this.triggerElement=null,this.handleMenuClick=e=>{let t=this.resolveMenuItem(e);if(t&&!t.disabled){if(t.hasSubmenu()){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.openSubmenu()),e.stopPropagation();return}this.makeSelection(t)}},this.handleSubmenuOpening=e=>{let t=e.detail?.item;t instanceof pi&&(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t))},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement,r=e.composedPath(),i=t.matches(`:hover`),a=!!n.matches(`:hover`),o=i||r.some(e=>e===t),s=a||r.some(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===n);!o&&!s&&window.setTimeout(()=>{!i&&!a&&(t.submenuOpen=!1)},100)},this.handleTriggerClick=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open)},this.handleExternalTriggerClick=e=>{e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open},this.handleTriggerKeyDown=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(this.open||(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!0,this.open=!0))},this.handleDocumentKeyDown=e=>{let t=this.isRtl();if(e.key===`Escape`&&this.open&&Pr(this)){e.preventDefault(),e.stopPropagation(),this.open=!1,this.getTrigger()?.focus({preventScroll:!0});return}if(!this.open)return;let n=[...hi()].find(e=>e.localName===`pk-dropdown-item`),r=n?.localName===`pk-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a&&i?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu()){e.preventDefault(),e.stopPropagation(),this.closeSiblingSubmenus(s),s.openSubmenu(),this.addToSubmenuStack(s),window.setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&this.setActiveItem(e,e[0])},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,window.setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`&&t.parentElement instanceof pi?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`){this.open=!1;return}if(e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)){window.clearTimeout(this.userTypedTimeout),this.userTypedTimeout=window.setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key;let t=this.userTypedQuery.trim().toLowerCase();l=o.find(e=>(e.textContent||``).trim().toLowerCase().startsWith(t))}if(l){e.preventDefault(),e.stopPropagation(),this.setActiveItem(o,l);return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu()?(this.closeSiblingSubmenus(s),s.openSubmenu(),this.addToSubmenuStack(s),window.setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&this.setActiveItem(e,e[0])},0)):this.makeSelection(s))},this.handleDocumentPointerDown=e=>{let t=e.composedPath(),n=this.getTrigger();t.some(e=>e===this||e===n)||(this.open=!1)}}static{this.styles=_o}get panelElement(){return this.menuElement??null}get popup(){return this.popupElement??null}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleTriggerClick,!0),this.addEventListener(`keydown`,this.handleTriggerKeyDown)}firstUpdated(){let e=()=>{if(this.for){this.resolveExternalTrigger();return}this.syncSlottedTrigger()};queueMicrotask(e),requestAnimationFrame(e)}disconnectedCallback(){window.clearTimeout(this.userTypedTimeout),this.removeEventListener(`click`,this.handleTriggerClick,!0),this.removeEventListener(`keydown`,this.handleTriggerKeyDown),this.unbindTrigger(this.triggerElement),this.triggerElement=null,this.closeAllSubmenus(),this.popupElement&&(this.popupElement.active=!1),this.menuElement?.classList.remove(`show`,`hide`),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),Nr(this),vo.delete(this),super.disconnectedCallback()}async updated(e){if(super.updated(e),e.has(`for`)&&this.resolveExternalTrigger(),e.has(`open`)&&this.syncTriggerExpanded(),!e.has(`open`))return;let t=e.get(`open`);t!==this.open&&(t!==void 0||this.open!==!1)&&(this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu(`unknown`)))}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`pk-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=((e.shadowRoot?.querySelector(`slot[name="submenu"]`))?.assignedElements({flatten:!0})??[...e.children].filter(e=>e.getAttribute(`slot`)===`submenu`)).filter(e=>e.localName===`pk-dropdown-item`);return t?n:n.filter(e=>!e.disabled)}getTrigger(){return this.for?uo(this,this.for)??this.triggerElement:this.querySelector(`[slot="trigger"]`)??this.triggerElement}getAnchor(){return this.getTrigger()??``}resolveExternalTrigger(){this.unbindTrigger(this.triggerElement),this.triggerElement=this.for?uo(this,this.for):null,this.bindTrigger(this.triggerElement),this.requestUpdate()}onTriggerSlotChange(e){if(this.for)return;let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t??null,this.bindTrigger(this.triggerElement),this.requestUpdate()}syncSlottedTrigger(){let e=this.renderRoot.querySelector(`slot[name="trigger"]`);e&&this.onTriggerSlotChange({target:e})}bindTrigger(e){e&&(e.setAttribute(`aria-haspopup`,`menu`),this.for&&(e.addEventListener(`click`,this.handleExternalTriggerClick),e.addEventListener(`keydown`,this.handleTriggerKeyDown)),this.syncTriggerExpanded())}unbindTrigger(e){e?.removeEventListener(`click`,this.handleExternalTriggerClick),e?.removeEventListener(`keydown`,this.handleTriggerKeyDown)}syncTriggerExpanded(){this.getTrigger()?.setAttribute(`aria-expanded`,this.open?`true`:`false`)}closeAfterSelect(e=`api`){this.open=!1}makeSelection(e){let t=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked),e.type===`radio`&&!e.checked&&(e.checked=!0);let n={value:e.value,type:e.type,checked:e.checked,radioGroup:e.radioGroup};e.dispatchEvent(new CustomEvent(`pk-select`,{detail:n,bubbles:!1,composed:!1,cancelable:!0}));let r=new CustomEvent(`pk-select`,{detail:n,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r),r.defaultPrevented||(this.open=!1,t?.focus({preventScroll:!0}))}resolveMenuItem(e){let t=e.target;if(t instanceof pi)return t;if(t instanceof Element){let e=t.closest(`pk-dropdown-item`);if(e instanceof pi)return e}return e.composedPath().find(e=>e instanceof pi)??null}whenClosed(){return this.open?new Promise(e=>{this.addEventListener(`pk-after-hide`,()=>{this.popupElement.stop().then(()=>e())},{once:!0})}):this.popupElement?.active?this.popupElement.stop():Promise.resolve()}forceDismissCleanup(){this.open=!1,this.popupElement.active=!1,this.menuElement?.classList.remove(`show`,`hide`),this.closeAllSubmenus(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),Nr(this),vo.delete(this)}isRtl(){return getComputedStyle(this).direction===`rtl`}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1,e.active=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`pk-dropdown-item:not([slot="submenu"])`);(t instanceof pi?this.getSubmenuItems(t,!0):this.getItems(!0)).forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}setActiveItem(e,t){e.forEach(e=>{e.active=e===t,e===t?e.setAttribute(`data-highlighted`,``):e.removeAttribute(`data-highlighted`)}),t.focus({preventScroll:!0}),t.scrollIntoView({block:`nearest`})}async showMenu(){if(!this.popupElement||!this.menuElement)return;this.for&&!this.triggerElement?.isConnected&&this.resolveExternalTrigger();let e=new Ur;if(!this.dispatchEvent(e)){this.open=!1;return}if(this.popupElement.active&&(this.popupElement.active=!1,this.menuElement.classList.remove(`show`,`hide`),await this.updateComplete),vo.forEach(e=>{e!==this&&(e.open=!1)}),this.popupElement.active=!0,this.open=!0,vo.add(this),Mr(this),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),await this.updateComplete,await ii(this.popupElement,this.placement,100,{requireEvent:!0}),!this.open){this.popupElement.active=!1,vo.delete(this),Nr(this),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove);return}this.menuElement.classList.remove(`hide`),await qr(this.menuElement,`show`);let t=this.getItems();t.length>0&&(this.openedByKeyboard?this.setActiveItem(t,t[0]):(t.forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),this.menuElement.focus({preventScroll:!0}))),this.openedByKeyboard=!1,this.dispatchEvent(new Wr),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))}async hideMenu(e){if(!this.popupElement||!this.menuElement)return;let t=new Gr(e);if(!this.dispatchEvent(t)){this.open=!0;return}this.open=!1,vo.delete(this),Nr(this),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.userTypedQuery=``,window.clearTimeout(this.userTypedTimeout),this.getItems(!0).forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),this.menuElement.classList.remove(`show`),await qr(this.menuElement,`hide`),this.popupElement.active=!1,this.dispatchEvent(new Kr),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}render(){let e=this.hasUpdated?this.popupElement?.active:this.open;return S`
            <pk-popup
                .anchor=${this.for?this.getAnchor():``}
                placement=${this.placement}
                .distance=${this.distance||this.sideOffset}
                .skidding=${this.skidding}
                ?active=${e}
                flip
                shift
                .shiftPadding=${10}
                auto-size="vertical"
                .autoSizePadding=${10}
            >
                <slot
                    name="trigger"
                    slot="anchor"
                    @slotchange=${this.onTriggerSlotChange}
                ></slot>

                <div
                    id="menu"
                    part="panel"
                    class="panel"
                    role="menu"
                    tabindex="-1"
                    aria-orientation="vertical"
                    data-size=${this.size}
                    @click=${this.handleMenuClick}
                    @pk-submenu-open=${this.handleSubmenuOpening}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}};D([w({type:Boolean,reflect:!0})],yo.prototype,`open`,void 0),D([w({reflect:!0})],yo.prototype,`size`,void 0),D([w({reflect:!0})],yo.prototype,`placement`,void 0),D([w({attribute:`side-offset`,type:Number})],yo.prototype,`sideOffset`,void 0),D([w({type:Number})],yo.prototype,`distance`,void 0),D([w({type:Number})],yo.prototype,`skidding`,void 0),D([w({reflect:!0})],yo.prototype,`for`,void 0),D([E(`slot:not([name])`)],yo.prototype,`defaultSlot`,void 0),D([E(`#menu`)],yo.prototype,`menuElement`,void 0),D([E(`pk-popup`)],yo.prototype,`popupElement`,void 0),yo=D([Je(`pk-dropdown-menu`)],yo);var bo=c`
    @layer pk-component {
        .form-control {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            width: 100%;
        }

        .form-control__header {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .form-control__label {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            margin: 0;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            font-weight: 700;
            line-height: var(--pk-line-height);
        }

        .form-control__instructions,
        .form-control__hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__instructions:empty,
        .form-control__hint:empty {
            display: none;
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .form-control__input {
            display: flex;
            align-items: stretch;
            position: relative;
            width: 100%;
        }

        .form-control__start,
        .form-control__end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
        }

        .form-control__start {
            margin-inline-end: 6px;
        }

        .form-control__end {
            margin-inline-start: 6px;
        }

        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var(--pk-color-gray-500);
            cursor: pointer;
            line-height: 0;
        }

        .icon-button:focus-visible {
            outline: none;
            box-shadow: var(--pk-shadow-focus);
            border-radius: var(--pk-radius-sm);
        }

        .icon-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`,xo=0;function So(e=`pk`){return xo+=1,`${e}-${xo}`}[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`,`),[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`].join(`,`);var Co={};function wo(e){let t=Co[e];if(t)return t;t=Co[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function To(e,t){typeof t!=`string`&&(t=To.defaultChars);let n=wo(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;t+=e<128?`��`:String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;t+=e<2048||e>=55296&&e<=57343?`���`:String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}To.defaultChars=`;/?:@&=+$,#`,To.componentChars=``;var Eo={};function Do(e){let t=Eo[e];if(t)return t;t=Eo[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Oo(e,t,n){typeof t!=`string`&&(n=t,t=Oo.defaultChars),n===void 0&&(n=!0);let r=Do(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}Oo.defaultChars=`;/?:@&=+$,-_.!~*'()#`,Oo.componentChars=`-_.!~*'()`;function ko(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function Ao(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var jo=/^([a-z0-9.+-]+:)/i,Mo=/:[0-9]*$/,No=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Po=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],Fo=[`/`,`?`,`#`],Io=255,Lo=/^[+a-z0-9A-Z_-]{0,63}$/,Ro=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,zo={javascript:!0,"javascript:":!0},Bo={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Vo(e,t){if(e&&e instanceof Ao)return e;let n=new Ao;return n.parse(e,t),n}Ao.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=No.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=jo.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&zo[o])&&(a=a.substr(2),this.slashes=!0)),!zo[o]&&(i||o&&!Bo[o])){let e=-1;for(let t=0;t<Fo.length;t++)r=a.indexOf(Fo[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<Po.length;t++)r=a.indexOf(Po[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(Lo)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(Lo)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(Ro);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>Io&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),Bo[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},Ao.prototype.parseHost=function(e){let t=Mo.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Ho=t({decode:()=>To,encode:()=>Oo,format:()=>ko,parse:()=>Vo}),Uo=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\0-\x1F\x7F-\x9F]/,Go=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Ko=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,qo=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Jo=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Yo=t({Any:()=>Uo,Cc:()=>Wo,Cf:()=>Go,P:()=>Ko,S:()=>qo,Z:()=>Jo}),Xo=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),Zo=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),Qo=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),$o=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function es(e){return e>=55296&&e<=57343||e>1114111?65533:Qo.get(e)??e}var ts;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(ts||={});var ns=32,rs;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(rs||={});function is(e){return e>=ts.ZERO&&e<=ts.NINE}function as(e){return e>=ts.UPPER_A&&e<=ts.UPPER_F||e>=ts.LOWER_A&&e<=ts.LOWER_F}function ss(e){return e>=ts.UPPER_A&&e<=ts.UPPER_Z||e>=ts.LOWER_A&&e<=ts.LOWER_Z||is(e)}function cs(e){return e===ts.EQUALS||ss(e)}var ls;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(ls||={});var us;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(us||={});var ds=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=ls.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=us.Strict}startEntity(e){this.decodeMode=e,this.state=ls.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case ls.EntityStart:return e.charCodeAt(t)===ts.NUM?(this.state=ls.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=ls.NamedEntity,this.stateNamedEntity(e,t));case ls.NumericStart:return this.stateNumericStart(e,t);case ls.NumericDecimal:return this.stateNumericDecimal(e,t);case ls.NumericHex:return this.stateNumericHex(e,t);case ls.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|ns)===ts.LOWER_X?(this.state=ls.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=ls.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(is(r)||as(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(is(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===ts.SEMI)this.consumed+=1;else if(this.decodeMode===us.Strict)return 0;return this.emitCodePoint(es(this.result),this.consumed),this.errors&&(e!==ts.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&rs.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=ps(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===us.Attribute&&(i===0||cs(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&rs.VALUE_LENGTH)>>14,i!==0){if(a===ts.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==us.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&rs.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~rs.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case ls.NamedEntity:return this.result!==0&&(this.decodeMode!==us.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case ls.NumericDecimal:return this.emitNumericEntity(0,2);case ls.NumericHex:return this.emitNumericEntity(0,3);case ls.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case ls.EntityStart:return 0}}};function fs(e){let t=``,n=new ds(e,e=>t+=$o(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function ps(e,t,n,r){let i=(t&rs.BRANCH_LENGTH)>>7,a=t&rs.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var ms=fs(Xo);fs(Zo);function hs(e,t=us.Legacy){return ms(e,t)}function gs(e){return ms(e,us.Strict)}var _s=t({arrayReplaceAt:()=>Cs,asciiTrim:()=>Gs,assign:()=>Ss,escapeHtml:()=>Is,escapeRE:()=>Rs,fromCodePoint:()=>Ts,has:()=>xs,isMdAsciiPunct:()=>Hs,isPunctChar:()=>Bs,isPunctCharCode:()=>Vs,isSpace:()=>M,isString:()=>ys,isValidEntityCode:()=>ws,isWhiteSpace:()=>zs,lib:()=>Ks,normalizeReference:()=>Us,unescapeAll:()=>js,unescapeMd:()=>As});function vs(e){return Object.prototype.toString.call(e)}function ys(e){return vs(e)===`[object String]`}var bs=Object.prototype.hasOwnProperty;function xs(e,t){return bs.call(e,t)}function Ss(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Cs(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function ws(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Ts(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Es=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ds=RegExp(Es.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Os=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function ks(e,t){if(t.charCodeAt(0)===35&&Os.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return ws(n)?Ts(n):e}let n=hs(e);return n===e?e:n}function As(e){return e.indexOf(`\\`)<0?e:e.replace(Es,`$1`)}function js(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Ds,function(e,t,n){return t||ks(e,n)})}var Ms=/[&<>"]/,Ns=/[&<>"]/g,Ps={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Fs(e){return Ps[e]}function Is(e){return Ms.test(e)?e.replace(Ns,Fs):e}var Ls=/[.?*+^$[\]\\(){}|-]/g;function Rs(e){return e.replace(Ls,`\\$&`)}function M(e){switch(e){case 9:case 32:return!0}return!1}function zs(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Bs(e){return Ko.test(e)||qo.test(e)}function Vs(e){return Bs(Ts(e))}function Hs(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Us(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function Ws(e){return e===32||e===9||e===10||e===13}function Gs(e){let t=0;for(;t<e.length&&Ws(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&Ws(e.charCodeAt(n));n--);return e.slice(t,n+1)}var Ks={mdurl:Ho,ucmicro:Yo};function qs(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function Js(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=js(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=js(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function Ys(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=js(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=js(e.slice(t,a)),o}var Xs=t({parseLinkDestination:()=>Js,parseLinkLabel:()=>qs,parseLinkTitle:()=>Ys}),Zs={};Zs.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Is(a.content)+`</code>`},Zs.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Is(e[t].content)+`</code></pre>
`},Zs.fence=function(e,t,n,r,i){let a=e[t],o=a.info?js(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Is(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},Zs.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},Zs.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},Zs.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},Zs.text=function(e,t){return Is(e[t].content)},Zs.html_block=function(e,t){return e[t].content},Zs.html_inline=function(e,t){return e[t].content};function Qs(){this.rules=Ss({},Zs)}Qs.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Is(e.attrs[t][0])+`="`+Is(e.attrs[t][1])+`"`;return r},Qs.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Qs.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Qs.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`}return r},Qs.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function $s(){this.__rules__=[],this.__cache__=null}$s.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},$s.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},$s.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},$s.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},$s.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},$s.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},$s.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},$s.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},$s.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},$s.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ec(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}ec.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},ec.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},ec.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},ec.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},ec.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function tc(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}tc.prototype.Token=ec;var nc=/\r\n?|\n/g,rc=/\0/g;function ic(e){let t;t=e.src.replace(nc,`
`),t=t.replace(rc,`�`),e.src=t}function ac(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function oc(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function sc(e){return/^<a[>\s]/i.test(e)}function cc(e){return/^<\/a\s*>/i.test(e)}function lc(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=[],a=0;for(let t=r.length-1;t>=0;t--){let n=r[t];if(n.type===`link_close`){for(t--;r[t].level!==n.level&&r[t].type!==`link_open`;)t--;continue}if(n.type===`html_inline`&&(sc(n.content)&&a>0&&a--,cc(n.content)&&a++),!(a>0)&&n.type===`text`&&e.md.linkify.test(n.content)){let a=n.content,o=e.md.linkify.match(a),s=[],c=n.level,l=0;o.length>0&&o[0].index===0&&t>0&&r[t-1].type===`text_special`&&(o=o.slice(1));for(let t=0;t<o.length;t++){let n=o[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let i=o[t].text;i=o[t].schema?o[t].schema===`mailto:`&&!/^mailto:/i.test(i)?e.md.normalizeLinkText(`mailto:`+i).replace(/^mailto:/,``):e.md.normalizeLinkText(i):e.md.normalizeLinkText(`http://`+i).replace(/^http:\/\//,``);let u=o[t].index;if(u>l){let t=new e.Token(`text`,``,0);t.content=a.slice(l,u),t.level=c,s.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=c++,d.markup=`linkify`,d.info=`auto`,s.push(d);let f=new e.Token(`text`,``,0);f.content=i,f.level=c,s.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--c,p.markup=`linkify`,p.info=`auto`,s.push(p),l=o[t].lastIndex}if(l<a.length){let t=new e.Token(`text`,``,0);t.content=a.slice(l),t.level=c,s.push(t)}i.push({index:t,nodes:s})}}if(i.length>0){let e=r.length;for(let t of i)e+=t.nodes.length-1;let a=Array(e),o=0,s=0;i.reverse();for(let e=0;e<r.length;e++){let t=i[o];if(t?.index===e){for(let e of t.nodes)a[s++]=e;o++}else a[s++]=r[e]}t[n].children=a}}}var uc=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,dc=/\((c|tm|r)\)/i,fc=/\((c|tm|r)\)/gi,pc={c:`©`,r:`®`,tm:`™`};function mc(e,t){return pc[t.toLowerCase()]}function hc(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(fc,mc)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function gc(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&uc.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function _c(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(dc.test(e.tokens[t].content)&&hc(e.tokens[t].children),uc.test(e.tokens[t].content)&&gc(e.tokens[t].children))}var vc=/['"]/,yc=/['"]/g,bc=`’`,xc=1e3;function Sc(e,t,n){for(;e.length>n;){let n=e.pop();n.isSingleQuote?t.single=n.prevSameQuoteIdx:t.double=n.prevSameQuoteIdx}}function Cc(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function wc(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function Tc(e,t){let n,r=[],i={single:-1,double:-1},a={};for(let o=0;o<e.length;o++){let s=e[o],c=e[o].level;for(n=r.length-1;n>=0&&!(r[n].level<=c);n--);if(Sc(r,i,n+1),s.type!==`text`)continue;let l=s.content,u=0,d=l.length;OUTER:for(;u<d;){yc.lastIndex=u;let s=yc.exec(l);if(!s)break;let f=!0,p=!0;u=s.index+1;let m=s[0]===`'`,h=32;if(s.index-1>=0)h=l.charCodeAt(s.index-1);else for(n=o-1;n>=0&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n--)if(e[n].content){h=e[n].content.charCodeAt(e[n].content.length-1);break}let g=32;if(u<d)g=l.charCodeAt(u);else for(n=o+1;n<e.length&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n++)if(e[n].content){g=e[n].content.charCodeAt(0);break}let _=Hs(h)||Vs(h),v=Hs(g)||Vs(g),y=zs(h),b=zs(g);if(b?f=!1:v&&(y||_||(f=!1)),y?p=!1:_&&(b||v||(p=!1)),g===34&&s[0]===`"`&&h>=48&&h<=57&&(p=f=!1),f&&p&&(f=_,p=v),!f&&!p){m&&Cc(a,o,s.index,bc);continue}if(p&&(n=m?i.single:i.double,n>=0&&r[n].level===c)){let e=r[n],c,l;m?(c=t.md.options.quotes[2],l=t.md.options.quotes[3]):(c=t.md.options.quotes[0],l=t.md.options.quotes[1]),Cc(a,o,s.index,l),Cc(a,e.tokenIdx,e.contentPos,c),Sc(r,i,n);continue OUTER}if(f){if(r.length>=xc)return;r.push({tokenIdx:o,contentPos:s.index,isSingleQuote:m,level:c,prevSameQuoteIdx:m?i.single:i.double}),m?i.single=r.length-1:i.double=r.length-1}else p&&m&&Cc(a,o,s.index,bc)}}Object.keys(a).forEach(function(t){e[t].content=wc(e[t].content,a[t])})}function Ec(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&vc.test(e.tokens[t].content)&&Tc(e.tokens[t].children,e)}function Dc(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Oc=[[`normalize`,ic],[`block`,ac],[`inline`,oc],[`linkify`,lc],[`replacements`,_c],[`smartquotes`,Ec],[`text_join`,Dc]];function kc(){this.ruler=new $s;for(let e=0;e<Oc.length;e++)this.ruler.push(Oc[e][0],Oc[e][1])}kc.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},kc.prototype.State=tc;function Ac(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o){if(M(s)){n++,s===9?r+=4-r%4:r++;continue}o=!0}(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Ac.prototype.push=function(e,t,n){let r=new ec(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},Ac.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Ac.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Ac.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&M(this.src.charCodeAt(e));e++);return e},Ac.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!M(this.src.charCodeAt(--e)))return e+1;return e},Ac.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Ac.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Ac.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(M(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},Ac.prototype.Token=ec;var jc=65536;function Mc(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Nc(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Pc(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!M(s)||o===45&&M(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!M(t))return!1;a++}let c=Mc(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=Mc(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Nc(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=Mc(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Nc(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>jc))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Fc(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Ic(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Lc(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(M(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Rc(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!M(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function zc(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!M(e.src.charCodeAt(r))?-1:r}function Bc(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!M(a))?-1:i}function Vc(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Hc(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Bc(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=zc(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],ee=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ee,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let te=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){te=!0;break}if(te)break;if(d){if(p=Bc(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=zc(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Vc(e,h),!0}function Uc(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!M(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!M(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&M(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&M(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=Us(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var Wc=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Gc=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,Kc=`<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>`,qc=RegExp(`^(?:`+Gc+`|`+Kc+`|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),Jc=RegExp(`^(?:`+Gc+`|`+Kc+`)`),Yc=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Wc.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(Jc.source+`\\s*$`),/^$/,!1]];function Xc(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<Yc.length&&!Yc[s][0].test(o);s++);if(s===Yc.length)return!1;if(r)return Yc[s][2];let c=t+1,l=Yc[s][1].test(``);if(!Yc[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),Yc[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function Zc(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!M(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&M(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=Gs(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function Qc(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=Gs(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function $c(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=Gs(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var el=[[`table`,Pc,[`paragraph`,`reference`]],[`code`,Fc],[`fence`,Ic,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Lc,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Rc,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Hc,[`paragraph`,`reference`,`blockquote`]],[`reference`,Uc],[`html_block`,Xc,[`paragraph`,`reference`,`blockquote`]],[`heading`,Zc,[`paragraph`,`reference`,`blockquote`]],[`lheading`,Qc],[`paragraph`,$c]];function tl(){this.ruler=new $s;for(let e=0;e<el.length;e++)this.ruler.push(el[e][0],el[e][1],{alt:(el[e][2]||[]).slice()})}tl.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},tl.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},tl.prototype.State=Ac;function nl(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}nl.prototype.pushPending=function(){let e=new ec(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},nl.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new ec(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},nl.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=Hs(i)||Vs(i),l=Hs(s)||Vs(s),u=zs(i),d=zs(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},nl.prototype.Token=ec;function rl(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function il(e,t){let n=e.pos;for(;n<e.posMax&&!rl(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function al(e){return e>=65&&e<=90||e>=97&&e<=122}function ol(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function sl(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=n-Math.min(10,e.pending.length,n),a=n;for(;a>i&&ol(e.src.charCodeAt(a-1));)a--;if(a===n||!al(e.src.charCodeAt(a)))return!1;let o=n-a,s=e.md.linkify.matchAtStart(e.src.slice(a));if(!s)return!1;let c=s.url;if(c.length<=o)return!1;let l=c.length;for(;l>0&&c.charCodeAt(l-1)===42;)l--;l!==c.length&&(c=c.slice(0,l));let u=e.md.normalizeLink(c);if(!e.md.validateLink(u))return!1;if(!t){e.pending=e.pending.slice(0,-o);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,u]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(c);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=c.length-o,!0}function cl(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t){if(r>=0&&e.pending.charCodeAt(r)===32){if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0)}else e.push(`softbreak`,`br`,0)}for(n++;n<i&&M(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var ll=[];for(let e=0;e<256;e++)ll.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){ll[e.charCodeAt(0)]=1});function ul(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),M(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);t.content=i<256&&ll[i]!==0?a:o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function dl(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function fl(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function pl(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function ml(e){let t=e.tokens_meta,n=e.tokens_meta.length;pl(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&pl(e,t[r].delimiters)}var hl={tokenize:fl,postProcess:ml};function gl(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function _l(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function vl(e){let t=e.tokens_meta,n=e.tokens_meta.length;_l(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&_l(e,t[r].delimiters)}var yl={tokenize:gl,postProcess:vl};function bl(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),M(n)||n===10);m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),M(n)||n===10);m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),M(n)||n===10);m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[Us(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function xl(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),M(n)||n===10);a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),M(n)||n===10);a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),M(n)||n===10);a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[Us(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var Sl=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Cl=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function wl(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Cl.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(Sl.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function Tl(e){return/^<a[>\s]/i.test(e)}function El(e){return/^<\/a\s*>/i.test(e)}function Dl(e){let t=e|32;return t>=97&&t<=122}function Ol(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!Dl(i))return!1;let a=e.src.slice(r).match(qc);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],Tl(t.content)&&e.linkLevel++,El(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var kl=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Al=/^&([a-z][a-z0-9]{1,31});/i;function jl(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(kl);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=ws(t)?Ts(t):Ts(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Al);if(r){let n=gs(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function Ml(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Nl(e){let t=e.tokens_meta,n=e.tokens_meta.length;Ml(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&Ml(t[e].delimiters)}function Pl(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Fl=[[`text`,il],[`linkify`,sl],[`newline`,cl],[`escape`,ul],[`backticks`,dl],[`strikethrough`,hl.tokenize],[`emphasis`,yl.tokenize],[`link`,bl],[`image`,xl],[`autolink`,wl],[`html_inline`,Ol],[`entity`,jl]],Il=[[`balance_pairs`,Nl],[`strikethrough`,hl.postProcess],[`emphasis`,yl.postProcess],[`fragments_join`,Pl]];function Ll(){this.ruler=new $s;for(let e=0;e<Fl.length;e++)this.ruler.push(Fl[e][0],Fl[e][1]);this.ruler2=new $s;for(let e=0;e<Il.length;e++)this.ruler2.push(Il[e][0],Il[e][1])}Ll.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},Ll.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Ll.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},Ll.prototype.State=nl;function Rl(e){let t={};e||={},t.src_Any=Uo.source,t.src_Cc=Wo.source,t.src_Z=Jo.source,t.src_P=Ko.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function zl(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Bl(e){return Object.prototype.toString.call(e)}function Vl(e){return Bl(e)===`[object String]`}function Hl(e){return Bl(e)===`[object Object]`}function Ul(e){return Bl(e)===`[object RegExp]`}function Wl(e){return Bl(e)===`[object Function]`}function Gl(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var Kl={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function ql(e){return Object.keys(e||{}).reduce(function(e,t){return e||Kl.hasOwnProperty(t)},!1)}var Jl={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Yl=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,Xl=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function Zl(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function Ql(){return function(e,t){t.normalize(e)}}function $l(e){let t=e.re=Rl(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Yl),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Hl(n)){Ul(n.validate)?r.validate=Zl(n.validate):Wl(n.validate)?r.validate=n.validate:a(t,n),Wl(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=Ql();return}if(Vl(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:Ql()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Gl).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function eu(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function tu(e,t){if(!(this instanceof tu))return new tu(e,t);t||ql(e)&&(t=e,e={}),this.__opts__=zl({},Kl,t),this.__schemas__=zl({},Jl,e),this.__compiled__={},this.__tlds__=Xl,this.__tlds_replaced__=!1,this.re={},$l(this)}tu.prototype.add=function(e,t){return this.__schemas__[e]=t,$l(this),this},tu.prototype.set=function(e){return this.__opts__=zl(this.__opts__,e),this},tu.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},tu.prototype.pretest=function(e){return this.re.pretest.test(e)},tu.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},tu.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new eu(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},tu.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new eu(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},tu.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),$l(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,$l(this),this)},tu.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},tu.prototype.onCompile=function(){};var nu=2147483647,ru=36,iu=1,au=26,ou=38,su=700,cu=72,lu=128,uu=`-`,du=/^xn--/,fu=/[^\0-\x7F]/,pu=/[\x2E\u3002\uFF0E\uFF61]/g,mu={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},hu=35,gu=Math.floor,_u=String.fromCharCode;function vu(e){throw RangeError(mu[e])}function yu(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function bu(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(pu,`.`);let i=yu(e.split(`.`),t).join(`.`);return r+i}function xu(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var Su=e=>String.fromCodePoint(...e),Cu=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ru},wu=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Tu=function(e,t,n){let r=0;for(e=n?gu(e/su):e>>1,e+=gu(e/t);e>455;r+=ru)e=gu(e/hu);return gu(r+36*e/(e+ou))},Eu=function(e){let t=[],n=e.length,r=0,i=lu,a=cu,o=e.lastIndexOf(uu);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&vu(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=ru;;i+=ru){s>=n&&vu(`invalid-input`);let o=Cu(e.charCodeAt(s++));o>=ru&&vu(`invalid-input`),o>gu((nu-r)/t)&&vu(`overflow`),r+=o*t;let c=i<=a?iu:i>=a+au?au:i-a;if(o<c)break;let l=ru-c;t>gu(nu/l)&&vu(`overflow`),t*=l}let c=t.length+1;a=Tu(r-o,c,o==0),gu(r/c)>nu-i&&vu(`overflow`),i+=gu(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},Du=function(e){let t=[];e=xu(e);let n=e.length,r=lu,i=0,a=cu;for(let n of e)n<128&&t.push(_u(n));let o=t.length,s=o;for(o&&t.push(uu);s<n;){let n=nu;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>gu((nu-i)/c)&&vu(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>nu&&vu(`overflow`),n===r){let e=i;for(let n=ru;;n+=ru){let r=n<=a?iu:n>=a+au?au:n-a;if(e<r)break;let i=e-r,o=ru-r;t.push(_u(wu(r+i%o,0))),e=gu(i/o)}t.push(_u(wu(e,0))),a=Tu(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Ou={version:`2.3.1`,ucs2:{decode:xu,encode:Su},decode:Eu,encode:Du,toASCII:function(e){return bu(e,function(e){return fu.test(e)?`xn--`+Du(e):e})},toUnicode:function(e){return bu(e,function(e){return du.test(e)?Eu(e.slice(4).toLowerCase()):e})}},ku={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Au=/^(vbscript|javascript|file|data):/,ju=/^data:image\/(gif|png|jpeg|webp);/;function Mu(e){let t=e.trim().toLowerCase();return!Au.test(t)||ju.test(t)}var Nu=[`http:`,`https:`,`mailto:`];function Pu(e){let t=Vo(e,!0);if(t.hostname&&(!t.protocol||Nu.indexOf(t.protocol)>=0))try{t.hostname=Ou.toASCII(t.hostname)}catch{}return Oo(ko(t))}function Fu(e){let t=Vo(e,!0);if(t.hostname&&(!t.protocol||Nu.indexOf(t.protocol)>=0))try{t.hostname=Ou.toUnicode(t.hostname)}catch{}return To(ko(t),To.defaultChars+`%`)}function Iu(e,t){if(!(this instanceof Iu))return new Iu(e,t);t||ys(e)||(t=e||{},e=`default`),this.inline=new Ll,this.block=new tl,this.core=new kc,this.renderer=new Qs,this.linkify=new tu,this.validateLink=Mu,this.normalizeLink=Pu,this.normalizeLinkText=Fu,this.utils=_s,this.helpers=Ss({},Xs),this.options={},this.configure(e),t&&this.set(t)}Iu.prototype.set=function(e){return Ss(this.options,e),this},Iu.prototype.configure=function(e){let t=this;if(ys(e)){let t=e;if(e=ku[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},Iu.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},Iu.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},Iu.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},Iu.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},Iu.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},Iu.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},Iu.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};function Lu(){return new Iu({html:!1,linkify:!0,typographer:!0,breaks:!0})}var Ru,zu=()=>Ru??=Lu(),Bu=e=>e?zu().renderInline(e):``,Vu=c`
    @layer pk-component {
        .pk-inline-markdown a {
            color: var(--pk-color-blue-500);
            text-decoration: none;
        }

        .pk-inline-markdown a:hover {
            text-decoration: underline;
        }

        /* Craft p code — gray chip; tip/warning/error override bg/border on pk-field. */
        .pk-inline-markdown code {
            /* Craft --border-hairline ≈ gray-800 @ 10%. */
            border: 1px solid color-mix(in srgb, var(--pk-color-gray-800) 10%, transparent);
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-gray-100);
            padding-block: 0.0625em;
            padding-inline: 0.25em;
            font-family: var(--pk-font-family-mono, ui-monospace, monospace);
            /* v1 field help/errors used [&_code]:text-[0.85em] — tighter than --pk-font-size-mono (0.9em). */
            font-size: var(--pk-inline-markdown-code-font-size, 0.85em);
            line-height: var(--pk-line-height-mono, 1.5);
            /* Inherit tip/warning/error/instructions text color (Craft parity). */
            color: inherit;
        }
    }
`;function Hu({control:e,labelId:t,instructionsId:n,errorsId:r,warningId:i,tipId:a,controlId:o,hasLabel:s,hasInstructions:c,hasErrors:l,hasWarning:u,hasTip:d,hasRequired:f=!1,invalid:p=!1}){e.id||=o,s?e.setAttribute(`aria-labelledby`,t):e.removeAttribute(`aria-labelledby`);let m=[c?n:``,l?r:``,u?i:``,d?a:``].filter(Boolean);m.length>0?e.setAttribute(`aria-describedby`,m.join(` `)):e.removeAttribute(`aria-describedby`),f?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`);let h=!!(p||l);h?(e.setAttribute(`aria-invalid`,`true`),e.setAttribute(`aria-errormessage`,r)):(e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-errormessage`)),Uu(e,h)}function Uu(e,t){if(`invalid`in e){e.invalid=t;return}e.toggleAttribute(`invalid`,t)}function Wu(e){if(!e)return C;let t=Bu(e);return t?mt(t):C}var Gu=c`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
        }

        .form-control__control {
            display: block;
            position: relative;
            width: 100%;
        }

        .form-control__header--with-end {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 0.75rem;
        }

        .form-control__header-main {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
            flex: 1 1 auto;
        }

        .form-control__header-end {
            flex-shrink: 0;
        }

        .form-control__required {
            display: inline-flex;
            align-items: center;
            color: var(--pk-color-rose-600);
            line-height: 0;
        }

        .form-control__required svg {
            display: block;
            width: 10px;
            height: 10px;
        }

        .form-control__translatable {
            display: inline-flex;
            align-items: center;
            color: var(--pk-color-gray-550);
            line-height: 0;
        }

        .form-control__translatable svg {
            display: block;
            width: 1rem;
            height: 1rem;
            fill: currentColor;
        }

        .form-control__errors {
            margin: 0;
            padding-inline-start: 20px;
            color: var(--pk-color-error);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            list-style: square;
        }

        .form-control__errors:empty {
            display: none;
        }

        .form-control__warning {
            display: flex;
            align-items: flex-start;
            gap: 0.25rem;
            min-width: 0;
            margin: 0;
            color: var(--pk-color-warning);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__warning:empty {
            display: none;
        }

        .form-control__warning-icon {
            display: inline-flex;
            flex-shrink: 0;
            margin-top: 0.3em;
            width: 0.75rem;
            height: 0.75rem;
            line-height: 0;
        }

        .form-control__warning-text {
            min-width: 0;
            margin: 0;
        }

        .form-control__warning-icon svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        /* Craft .warning code — amber chip matching warning text. */
        .form-control__warning .pk-inline-markdown code {
            background-color: var(--pk-color-amber-100);
            border-color: var(--pk-color-amber-300);
        }

        .form-control__tip {
            display: flex;
            align-items: flex-start;
            gap: 0.25rem;
            min-width: 0;
            margin: 0;
            color: var(--pk-color-sky-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__tip:empty {
            display: none;
        }

        .form-control__tip-icon {
            display: inline-flex;
            flex-shrink: 0;
            margin-top: 0.3em;
            width: 0.75rem;
            height: 0.75rem;
            line-height: 0;
        }

        .form-control__tip-text {
            min-width: 0;
            margin: 0;
        }

        .form-control__tip-icon svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        .form-control__tip-text a {
            text-decoration: underline;
        }

        /* Craft .tip code — sky/notice chip matching tip text. */
        .form-control__tip .pk-inline-markdown code {
            background-color: var(--pk-color-sky-100);
            border-color: var(--pk-color-sky-300);
        }

        /* Craft --bg-error / --border-error pattern for field errors. */
        .form-control__errors.pk-inline-markdown code {
            background-color: var(--pk-color-red-100);
            border-color: var(--pk-color-red-300);
        }
    }
`,Ku=class extends $e{constructor(...e){super(...e),this.hasSlotController=new gr(this,`label`,`instructions`,`hint`,`header-end`,`warning`,`tip`,`errors`),this.baseId=So(`pk-field`),this.label=``,this.instructions=``,this.required=!1,this.translatable=!1,this.warning=``,this.tip=``,this.errors=[],this.for=``,this.onLabelClick=e=>{let t=e.target;t instanceof Element&&(t.closest(`button, a, input, select, textarea, [role="button"], [role="link"]`)||this.focusControl())},this.onControlSlotChange=()=>{this.syncControlAria(),this.requestUpdate()}}static{this.styles=[bo,Vu,Gu]}connectedCallback(){super.connectedCallback();let e=this.getAttribute(`hint`);e&&!this.instructions&&(this.instructions=e)}updated(e){super.updated(e),(e.has(`label`)||e.has(`instructions`)||e.has(`errors`)||e.has(`warning`)||e.has(`tip`)||e.has(`required`)||e.has(`for`))&&this.syncControlAria()}get labelId(){return`${this.baseId}-label`}get instructionsId(){return`${this.baseId}-instructions`}get errorsId(){return`${this.baseId}-errors`}get warningId(){return`${this.baseId}-warning`}get tipId(){return`${this.baseId}-tip`}get controlId(){return this.for||`${this.baseId}-control`}hasLabel(){return!!this.label||this.hasSlotController.test(`label`)}hasInstructions(){return!!this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)}hasHeaderEnd(){return this.hasSlotController.test(`header-end`)}hasErrors(){return this.errors.length>0||this.hasSlotController.test(`errors`)}hasWarning(){return!!this.warning||this.hasSlotController.test(`warning`)}hasTip(){return!!this.tip||this.hasSlotController.test(`tip`)}getControlElement(){let[e]=this.controlSlot?.assignedElements({flatten:!0})??[];return e instanceof HTMLElement?e:this.for?this.getRootNode().getElementById(this.for):null}focusControl(){let e=this.getControlElement();e&&typeof e.focus==`function`&&e.focus()}syncControlAria(){let e=this.getControlElement();e&&Hu({control:e,labelId:this.labelId,instructionsId:this.instructionsId,errorsId:this.errorsId,warningId:this.warningId,tipId:this.tipId,controlId:this.controlId,hasLabel:this.hasLabel(),hasInstructions:this.hasInstructions(),hasErrors:this.hasErrors(),hasWarning:this.hasWarning(),hasTip:this.hasTip(),hasRequired:this.required,invalid:this.hasErrors()})}render(){let e=this.hasLabel(),t=this.hasInstructions(),n=this.hasHeaderEnd(),r=this.hasErrors(),i=this.hasWarning(),a=this.hasTip(),o=this.for||(e?this.controlId:C);return S`
            <div part="form-control" class="form-control">
                ${e||t||n?S`
                        <div
                            part="header"
                            class=${ft({"form-control__header":!0,"form-control__header--with-end":n})}
                        >
                            <div class="form-control__header-main">
                                ${e?S`
                                        <label
                                            part="label"
                                            class="form-control__label"
                                            id=${this.labelId}
                                            for=${o}
                                            data-error=${r?`true`:C}
                                            @click=${this.onLabelClick}
                                        >
                                            <slot name="label">${this.label}</slot>
                                            ${this.required?S`
                                                    <span class="sr-only">Required</span>
                                                    <span class="form-control__required" aria-hidden="true">
                                                        ${xr(A.asterisk)}
                                                    </span>
                                                `:C}
                                            ${this.translatable?S`
                                                    <span class="form-control__translatable">
                                                        ${Ar()}
                                                        <span class="sr-only">Translatable</span>
                                                    </span>
                                                `:C}
                                        </label>
                                    `:C}

                                ${t?S`
                                        <p
                                            part="instructions"
                                            class="form-control__instructions pk-inline-markdown"
                                            id=${this.instructionsId}
                                        >
                                            <slot name="instructions">${Wu(this.instructions)}</slot>
                                            <slot name="hint"></slot>
                                        </p>
                                    `:C}
                            </div>

                            ${n?S`
                                    <div part="header-end" class="form-control__header-end">
                                        <slot name="header-end"></slot>
                                    </div>
                                `:S`<slot name="header-end" hidden></slot>`}
                        </div>
                    `:C}

                <div part="control" class="form-control__control">
                    <slot @slotchange=${this.onControlSlotChange}></slot>
                </div>

                ${r?S`
                        <ul part="errors" class="form-control__errors pk-inline-markdown" id=${this.errorsId}>
                            ${this.errors.map(e=>S`<li>${Wu(e)}</li>`)}
                            <slot name="errors"></slot>
                        </ul>
                    `:C}

                ${i?S`
                        <div part="warning" class="form-control__warning" id=${this.warningId}>
                            <span class="form-control__warning-icon" aria-hidden="true">
                                ${xr(A.triangleExclamation)}
                            </span>
                            <p class="form-control__warning-text pk-inline-markdown">
                                <slot name="warning">${Wu(this.warning)}</slot>
                            </p>
                        </div>
                    `:C}

                ${a?S`
                        <div part="tip" class="form-control__tip" id=${this.tipId}>
                            <span class="form-control__tip-icon" aria-hidden="true">
                                ${xr(A.lightbulb)}
                            </span>
                            <p class="form-control__tip-text pk-inline-markdown">
                                <span class="sr-only">Tip: </span>
                                <slot name="tip">${Wu(this.tip)}</slot>
                            </p>
                        </div>
                    `:C}
            </div>
        `}};D([w()],Ku.prototype,`label`,void 0),D([w()],Ku.prototype,`instructions`,void 0),D([w({type:Boolean,reflect:!0})],Ku.prototype,`required`,void 0),D([w({type:Boolean,reflect:!0})],Ku.prototype,`translatable`,void 0),D([w()],Ku.prototype,`warning`,void 0),D([w()],Ku.prototype,`tip`,void 0),D([w({attribute:!1})],Ku.prototype,`errors`,void 0),D([w({reflect:!0})],Ku.prototype,`for`,void 0),D([E(`slot:not([name])`)],Ku.prototype,`controlSlot`,void 0),Ku=D([Je(`pk-field`)],Ku);function qu(){return{checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&typeof t.checkValidity==`function`&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&typeof t.validationMessage==`string`&&(n.message=t.validationMessage),!(`validity`in t)||!t.validity)return n.invalidKeys.push(`customError`),n;for(let e of Object.keys(t.validity)){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}}var Ju=class extends Event{constructor(){super(`pk-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};function Yu(e,t){return t||(e.getAttribute(`hint`)??``)}function Xu(e,t,n=!1){return!!t||e(`instructions`,n)||e(`hint`)}var Zu=e=>e??C,{I:Qu}=ze,$u=e=>e.strings===void 0,ed={},td=(e,t=ed)=>e._$AH=t,nd=ut(class extends dt{constructor(e){if(super(e),e.type!==lt.PROPERTY&&e.type!==lt.ATTRIBUTE&&e.type!==lt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!$u(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Te||t===C)return t;let n=e.element,r=e.name;if(e.type===lt.PROPERTY){if(t===n[r])return Te}else if(e.type===lt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Te}else if(e.type===lt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Te;return td(e),t}}),rd=new Set([`button`,`submit`,`reset`,`checkbox`,`radio`,`file`,`image`,`hidden`]),id=`pk-implicit-submit`,ad=(e,t)=>{if(e.key!==`Enter`||e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return!1;let n=(t||`text`).toLowerCase();return!rd.has(n)},od=e=>{let t=e.closest?.(`pk-dialog`);if(t){let e=t.querySelector(`form`);if(e)return e}let n=e.form;return n&&n.id===`main`?e.closest?.(`form`)===n?null:e.closest(`form`):n},sd=(e,t,n)=>{if(e.disabled||e.readonly||!ad(t,n))return!1;let r=od(e);return!r||r.id===`main`?!1:(t.preventDefault(),t.stopPropagation(),r.dispatchEvent(new CustomEvent(id,{bubbles:!1,cancelable:!0})),!0)},cd=c`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            /*
             * Control chrome tokens — inherit into light-DOM in-control actions
             * (e.g. pk-copy-button[slot=end]) the same way combobox/image-browser
             * size their trailing clear/expand hit targets.
             */
            --pk-input-padding-block: 6px;
            --pk-input-padding-inline: 8px;
            --pk-input-control-gap: 6px;
            --pk-input-decoration-size: 0.75rem;
        }

        :host([data-pk-group-orientation]) {
            display: flex;
            flex-direction: column;
            width: auto;
            flex: 0 1 auto;
            align-self: stretch;
        }

        :host([data-pk-group-orientation]) .form-control {
            gap: 0;
            height: 100%;
        }

        :host([data-pk-group-orientation]) .form-control__input {
            min-height: var(--pk-btn-height-default);
            height: 100%;
        }

        :host([data-pk-group-orientation]) .form-control__start,
        :host([data-pk-group-orientation]) .form-control__end {
            display: none;
        }

        :host([data-pk-group-orientation]) .form-control__input {
            width: 100%;
        }

        :host([data-pk-group-orientation]) .input {
            width: 100%;
        }

        :host([data-pk-group-orientation]) .input {
            min-height: var(--pk-btn-height-default);
            height: 100%;
        }

        :host([data-pk-group-orientation='vertical']) {
            width: 100%;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join]) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join]) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]) .form-control__input {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
            box-shadow: none;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
            box-shadow: none;
        }

        :host([data-pk-group-divider]) .form-control__input:focus-within,
        :host([data-pk-group-divider][data-state='focus-visible']) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input:focus-within,
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-state='focus-visible']) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        /* Chrome lives on the flex shell (part=base) so slot=start/end adornments sit
         * inside the border — same visual contract as pk-input-group / v1 InputGroup.
         * Height is content-sized (v1): padding-block + --pk-input-control-line-height + border.
         * Trailing actions (clear, pk-copy-button[slot=end]) stay in flex flow so long
         * values never paint under the button — mirror combobox / image-browser.
         */
        .form-control__input {
            align-items: center;
            gap: var(--pk-input-control-gap);
            padding-inline: var(--pk-input-padding-inline);
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius, var(--pk-radius-sm));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .form-control__start,
        .form-control__end {
            margin: 0;
            color: var(--pk-color-gray-400);
            line-height: 0;
            align-self: stretch;
            align-items: center;
        }

        /* Decorative glyphs only — interactive in-control actions opt out below. */
        .form-control__start ::slotted(*),
        .form-control__end ::slotted(*) {
            display: block;
            max-width: 1.25rem;
            max-height: 1.25rem;
        }

        /* Copy (and similar) inside the field: flex-reserved space, not absolute overlay. */
        .form-control__end:has(::slotted(pk-copy-button)) {
            align-items: stretch;
        }

        .form-control__end ::slotted(pk-copy-button) {
            display: inline-flex;
            align-self: stretch;
            align-items: stretch;
            max-width: none;
            max-height: none;
            /*
             * Pull into trailing padding like combobox expand/clear, but leave a
             * small inset so the glyph is not tight against the field border.
             */
            margin-inline-end: calc(-1 * var(--pk-input-padding-inline) + 4px);
            margin-block: calc(-1 * var(--pk-input-padding-block));
        }

        .input {
            display: block;
            width: 100%;
            margin: 0;
            /* v1 Input default: py-1.5 + text-sm (14px / 1.25rem lh) → 34px with border. */
            padding-block: var(--pk-input-padding-block);
            padding-inline: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: var(--pk-input-control-line-height, 1.25rem);
            appearance: none;
            box-sizing: border-box;
            outline: none;
        }

        .form-control__input .input {
            flex: 1 1 auto;
            min-width: 0;
        }

        .input::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /*
         * Craft text:focus-visible only sets box-shadow (--focus-ring); resting border stays.
         * Do not also set border-color — --pk-input-focus-shadow already includes 0 0 0 1px,
         * so border-color + that ring reads as a double focus treatment.
         */
        :host(:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .form-control__input:has(.input:disabled) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .input:disabled {
            cursor: not-allowed;
        }

        :host([invalid]) .form-control__input,
        :host(:state(user-invalid)) .form-control__input {
            border-color: var(--pk-color-rose-600);
        }

        /* Invalid + focus: rose ring (same token as select/combobox), not sky over rose border. */
        :host([invalid]) .form-control__input:focus-within,
        :host([invalid][data-state='focus-visible']) .form-control__input,
        :host(:state(user-invalid)) .form-control__input:focus-within {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xs']) {
            --pk-input-padding-block: 4px;
            --pk-input-padding-inline: 6px;
            --pk-input-control-gap: 4px;
            --pk-input-decoration-size: 0.625rem;
        }

        :host([size='xs']) .input {
            font-size: 11px;
        }

        :host([size='sm']) {
            --pk-input-padding-block: 4px;
            --pk-input-padding-inline: 8px;
            --pk-input-control-gap: 4px;
            --pk-input-decoration-size: 0.6875rem;
        }

        :host([size='sm']) .input {
            font-size: 12px;
        }

        :host([size='lg']) {
            --pk-input-padding-block: 8px;
            --pk-input-padding-inline: 12px;
            --pk-input-control-gap: 8px;
            --pk-input-decoration-size: 0.875rem;
        }

        :host([size='lg']) .input {
            font-size: var(--pk-font-size-base);
        }

        :host([size='xl']) {
            --pk-input-padding-block: 10px;
            --pk-input-padding-inline: 16px;
            --pk-input-control-gap: 8px;
            --pk-input-decoration-size: 1rem;
        }

        :host([size='xl']) .input {
            font-size: 16px;
        }

        /*
         * Mono face + 0.9× optical size + line-height 1.5. The taller line-height
         * offsets the smaller face so padding + content height stays aligned with
         * stock inputs (1.25rem ≈ 1.5 × 12.6px). Scale the size's face, not
         * the parent em, so xs/sm/xl mono stay proportional.
         */
        :host([mono]) .input {
            font-family: var(--pk-input-mono-font-family);
            font-size: calc(var(--pk-font-size-base) * 0.9);
            line-height: var(--pk-input-mono-line-height, 1.5);
        }

        :host([mono][size='xs']) .input {
            font-size: calc(11px * 0.9);
        }

        :host([mono][size='sm']) .input {
            font-size: calc(12px * 0.9);
        }

        :host([mono][size='lg']) .input {
            font-size: calc(var(--pk-font-size-base) * 0.9);
        }

        :host([mono][size='xl']) .input {
            font-size: calc(16px * 0.9);
        }

        /* Editable-table cells (v1): flush into the row — no chrome border/radius.
         * Prefer reflected fit-cell (Lit property); data-editable-table-input is a legacy alias.
         * Fill host → form-control → input so the control spans the full td.
         */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            height: 100%;
            min-height: 100%;
            gap: 0;
        }

        :host([fit-cell]) .form-control__input,
        :host([data-editable-table-input]) .form-control__input {
            height: 100%;
            min-height: 100%;
            flex: 1 1 auto;
            padding-inline: 0;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
        }

        :host([fit-cell]) .input,
        :host([data-editable-table-input]) .input {
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .form-control__input,
        :host([fit-cell]:state(user-invalid)) .form-control__input,
        :host([data-editable-table-input][invalid]) .form-control__input,
        :host([data-editable-table-input]:state(user-invalid)) .form-control__input {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        :host([fit-cell][invalid]) .form-control__input:focus-within,
        :host([fit-cell][invalid][data-state='focus-visible']) .form-control__input,
        :host([fit-cell]:state(user-invalid)) .form-control__input:focus-within,
        :host([data-editable-table-input][invalid]) .form-control__input:focus-within,
        :host([data-editable-table-input][invalid][data-state='focus-visible']) .form-control__input,
        :host([data-editable-table-input]:state(user-invalid)) .form-control__input:focus-within {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) .form-control__input {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) .form-control__input {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]) .form-control__input {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail]) .form-control__input {
            border-right-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail]) .form-control__input {
            border-bottom-width: 0;
        }

        /*
         * Clear is a flex trailing action (not absolute). Reserves width in the
         * control so values cannot scroll under the glyph — same contract as
         * combobox clear/expand and image-browser clear.
         */
        .clear-button {
            display: inline-flex;
            flex-shrink: 0;
            align-self: stretch;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: calc(var(--pk-input-decoration-size) + var(--pk-input-padding-inline));
            margin-block: calc(-1 * var(--pk-input-padding-block));
            /* Match pk-copy-button[slot=end]: pull into padding but leave a 4px glyph inset. */
            margin-inline-end: calc(-1 * var(--pk-input-padding-inline) + 4px);
            font-size: var(--pk-input-decoration-size);
            line-height: 1;
        }
    }
`,N=class extends mr{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new gr(this,`instructions`,`hint`,`label`,`start`,`end`),this.inputId=So(`pk-input`),this.type=`text`,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.mono=!1,this.autofocus=!1,this.withLabel=!1,this.withInstructions=!1}static{this.styles=[bo,ot(),at(`.input`,`var(--pk-input-border-radius, var(--pk-radius-sm))`),ct(`.input`),cd]}static get validators(){return[...super.validators,qu(),hr()]}get value(){return this.valueHasChanged?this._value??``:this._value??this.defaultValue??``}set value(e){let t=e??``;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=Yu(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=this.defaultValue??``),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=!!this.label||this.hasSlotController.test(`label`,this.withLabel),t=Xu((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions);ur({control:this.input,labelId:`${this.inputId}-label`,instructionsId:`${this.inputId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return Xu((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleKeyDown(e){sd(this,e,this.type)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.dispatchEvent(new Ju),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.input.focus())}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent(),n=this.withClear&&!this.disabled&&!this.readonly&&this.value.length>0,r=this.hasSlotController.test(`start`),i=this.hasSlotController.test(`end`);return S`
            <div part="form-control" class="form-control">
                ${e||t?S`
                        <div part="header" class="form-control__header">
                            ${e?S`
                                    <label
                                        part="label"
                                        class="form-control__label"
                                        id=${`${this.inputId}-label`}
                                        for=${`${this.inputId}-control`}
                                    >
                                        <slot name="label">${this.label}</slot>
                                    </label>
                                `:C}

                            ${t?S`
                                    <p
                                        part="instructions"
                                        class="form-control__instructions"
                                        id=${`${this.inputId}-instructions`}
                                    >
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </p>
                                `:C}
                        </div>
                    `:C}

                <div part="base" class="form-control__input">
                    ${r?S`
                            <span part="start" class="form-control__start">
                                <slot name="start"></slot>
                            </span>
                        `:S`<slot name="start" hidden></slot>`}

                    <input
                        part="input"
                        class="input"
                        id=${e?`${this.inputId}-control`:C}
                        type=${this.type}
                        .value=${nd(this.value)}
                        placeholder=${this.placeholder||C}
                        pattern=${Zu(this.pattern)}
                        minlength=${Zu(this.minlength)}
                        maxlength=${Zu(this.maxlength)}
                        min=${Zu(this.min)}
                        max=${Zu(this.max)}
                        step=${Zu(this.step)}
                        autocomplete=${Zu(this.autocomplete)}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        ?required=${this.required}
                        ?autofocus=${this.autofocus}
                        @input=${this.handleInput}
                        @change=${this.handleChange}
                        @keydown=${this.handleKeyDown}
                        @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                        @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                    />

                    ${n?S`
                            <button
                                part="clear-button"
                                class="icon-button clear-button"
                                type="button"
                                tabindex="-1"
                                aria-label="Clear"
                                @click=${this.handleClearClick}
                            >
                                <slot name="clear-icon">×</slot>
                            </button>
                        `:C}

                    ${i?S`
                            <span part="end" class="form-control__end">
                                <slot name="end"></slot>
                            </span>
                        `:S`<slot name="end" hidden></slot>`}
                </div>
            </div>
        `}};D([E(`input`)],N.prototype,`input`,void 0),D([w({reflect:!0})],N.prototype,`type`,void 0),D([T()],N.prototype,`value`,null),D([w({attribute:`value`,reflect:!0})],N.prototype,`defaultValue`,void 0),D([w({reflect:!0})],N.prototype,`size`,void 0),D([w()],N.prototype,`label`,void 0),D([w()],N.prototype,`instructions`,void 0),D([w({attribute:`with-clear`,type:Boolean})],N.prototype,`withClear`,void 0),D([w()],N.prototype,`placeholder`,void 0),D([w({type:Boolean,reflect:!0})],N.prototype,`readonly`,void 0),D([w({type:Boolean,reflect:!0})],N.prototype,`invalid`,void 0),D([w({type:Boolean,reflect:!0,attribute:`fit-cell`})],N.prototype,`fitCell`,void 0),D([w({type:Boolean,reflect:!0})],N.prototype,`mono`,void 0),D([w()],N.prototype,`pattern`,void 0),D([w({type:Number})],N.prototype,`minlength`,void 0),D([w({type:Number})],N.prototype,`maxlength`,void 0),D([w()],N.prototype,`min`,void 0),D([w()],N.prototype,`max`,void 0),D([w()],N.prototype,`step`,void 0),D([w()],N.prototype,`autocomplete`,void 0),D([w({type:Boolean,reflect:!0})],N.prototype,`autofocus`,void 0),D([w({attribute:`with-label`,type:Boolean})],N.prototype,`withLabel`,void 0),D([w({attribute:`with-instructions`,type:Boolean})],N.prototype,`withInstructions`,void 0),N=D([Je(`pk-input`)],N);var ld=c`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
            --pk-lightswitch-border-color: var(--pk-color-slate-800);
            --pk-lightswitch-track-off: var(--pk-color-gray-200);
            --pk-lightswitch-track-on: var(--pk-color-teal-550);
            --pk-lightswitch-track-on-border: var(--pk-color-teal-550-border);
            --pk-lightswitch-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-sky-600),
                0 0 6px 1px hsl(from var(--pk-color-sky-600) h s l / 0.8);
            --pk-lightswitch-invalid-shadow: 0 0 0 1px #fff, 0 0 0 2.5px var(--pk-color-rose-600);
            --pk-lightswitch-invalid-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-rose-600),
                0 0 6px 1px hsl(from var(--pk-color-rose-600) h s l / 0.8);
        }

        :host([disabled]) {
            cursor: not-allowed;
        }

        .base {
            display: inline-flex;
            align-items: flex-start;
            gap: 0.5rem;
        }

        :host([disabled]) .base {
            opacity: 0.5;
        }

        .content {
            min-width: 0;
            cursor: pointer;
            user-select: none;
        }

        :host([disabled]) .content {
            cursor: not-allowed;
        }

        .label {
            display: block;
            /* Match checkbox / radio option labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            line-height: 1rem;
        }

        .label:empty {
            display: none;
        }

        .instructions:empty,
        .hint:empty {
            display: none;
        }

        .switch {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 11px;
            background: var(--pk-lightswitch-track-off, #d8dee7);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            cursor: pointer;
            user-select: none;
            appearance: none;
            transition: background-color 0.15s ease, box-shadow 0.15s ease;
        }

        .switch:focus {
            outline: none;
        }

        .switch:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        .switch[aria-checked='true'] {
            background: var(--pk-lightswitch-track-on, #0f9d8a);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .switch[aria-checked='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        :host([invalid]) .switch,
        :host(:state(user-invalid)) .switch,
        .switch[aria-invalid='true'] {
            box-shadow: var(--pk-lightswitch-invalid-shadow);
        }

        :host([invalid]) .switch[aria-checked='true'],
        :host(:state(user-invalid)) .switch[aria-checked='true'],
        .switch[aria-invalid='true'][aria-checked='true'] {
            background: var(--pk-lightswitch-track-on);
        }

        :host([invalid]) .switch:focus-visible,
        :host(:state(user-invalid)) .switch:focus-visible,
        .switch[aria-invalid='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-invalid-focus-shadow);
        }

        .switch:disabled {
            cursor: not-allowed;
        }

        :host([size='default']) .switch {
            width: 34px;
            height: 22px;
        }

        :host([size='sm']) .switch {
            width: 28px;
            height: 18px;
            border-radius: 9px;
        }

        :host([size='xs']) .switch {
            width: 24px;
            height: 16px;
            border-radius: 8px;
        }

        :host([size='xxs']) .switch {
            width: 24px;
            height: 14px;
            border-radius: 7px;
        }

        .thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--pk-color-white, #fff);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            pointer-events: none;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        :host([size='default']) .thumb {
            width: 18px;
            height: 18px;
            transform: translateX(2px);
        }

        :host([size='default']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 4px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='sm']) .thumb {
            width: 14px;
            height: 14px;
            transform: translateX(2px);
        }

        :host([size='sm']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xs']) .thumb {
            width: 12px;
            height: 12px;
            transform: translateX(2px);
        }

        :host([size='xs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xxs']) .thumb {
            width: 10px;
            height: 10px;
            transform: translateX(2px);
        }

        :host([size='xxs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(12px);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .thumb svg {
            width: 14px;
            height: 14px;
            color: var(--pk-lightswitch-track-on);
            opacity: 0;
            transform: translateY(1px);
            transition: opacity 0.15s ease;
        }

        .switch[aria-checked='true'] .thumb svg {
            opacity: 1;
        }

        :host([size='sm']) .thumb svg {
            width: 10px;
            height: 10px;
        }

        :host([size='xs']) .thumb svg,
        :host([size='xxs']) .thumb svg {
            display: none;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
        }
    }
`,ud=S`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
        <path fill="currentColor" d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z" />
    </svg>
`,dd=class extends mr{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new gr(this,`instructions`,`hint`),this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.size=`default`,this.value=`on`,this.label=``,this.instructions=``}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=[bo,ld]}static get validators(){return[...super.validators,qu(),hr({validationProperty:`checked`})]}connectedCallback(){this.instructions=Yu(this,this.instructions),super.connectedCallback()}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.value:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked}restoreFormState(e){this.checked=e===`on`||e===this.value}updated(e){this.input&&e.has(`checked`)&&(this.input.checked=this.checked),super.updated(e)}click(){this.switchElement?.click()}focus(e){this.switchElement?.focus(e)}blur(){this.switchElement?.blur()}toggle(){this.disabled||(this.checked=!this.checked,this.emitCheckedChange())}handleKeyDown(e){let t=this.matches(`:dir(rtl)`);if(e.key===` `||e.key===`Enter`){e.preventDefault(),this.toggle();return}if(e.key===`ArrowLeft`){e.preventDefault(),this.checked=t,this.emitCheckedChange();return}e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.emitCheckedChange())}emitCheckedChange(){this.hasInteracted=!0,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleLabelClick(e){this.disabled||e.target===this.switchElement||this.toggle()}hasLabelContent(){if(this.label)return!0;let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e?e.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE):!1}render(){let e=Xu((e,t)=>this.hasSlotController.test(e,t),this.instructions),t=this.hasLabelContent();return S`
            <div part="base" class="base">
                <button
                    part="switch"
                    class="switch"
                    type="button"
                    role="switch"
                    ?disabled=${this.disabled}
                    aria-checked=${this.checked?`true`:`false`}
                    aria-invalid=${this.invalid?`true`:C}
                    aria-describedby=${e?`instructions`:C}
                    aria-labelledby=${t?`label`:C}
                    @click=${this.toggle}
                    @keydown=${this.handleKeyDown}
                >
                    <span part="thumb" class="thumb">${ud}</span>
                </button>
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    tabindex="-1"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    value=${this.value}
                    aria-invalid=${this.invalid?`true`:C}
                    @change=${e=>e.stopPropagation()}
                />
                ${t||e?S`
                        <div class="content" @click=${this.handleLabelClick}>
                            ${t?S`
                                    <span part="label" class="label" id="label">
                                        <slot></slot>${this.label}
                                    </span>
                                `:C}
                            ${e?S`
                                    <span part="instructions" class="instructions form-control__instructions" id="instructions">
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </span>
                                `:C}
                        </div>
                    `:C}
            </div>
        `}};D([w({type:Boolean,reflect:!0})],dd.prototype,`checked`,void 0),D([w({attribute:`default-checked`,type:Boolean})],dd.prototype,`defaultChecked`,void 0),D([w({type:Boolean,reflect:!0})],dd.prototype,`invalid`,void 0),D([w({reflect:!0})],dd.prototype,`size`,void 0),D([w()],dd.prototype,`value`,void 0),D([w()],dd.prototype,`label`,void 0),D([w()],dd.prototype,`instructions`,void 0),D([E(`.input`)],dd.prototype,`input`,void 0),D([E(`[part="switch"]`)],dd.prototype,`switchElement`,void 0),dd=D([Je(`pk-lightswitch`)],dd);var fd=c`
    @layer pk-component {
        :host {
            display: inline-block;
            flex-shrink: 0;
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 9999px;
            vertical-align: middle;
        }

        .status {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: inherit;
        }

        :host([status='all']) .status { background: linear-gradient(60deg, #184cef, #e5422b); }
        :host([status='on']) .status,
        :host([status='live']) .status,
        :host([status='active']) .status,
        :host([status='enabled']) .status,
        :host([status='teal']) .status,
        :host([status='turquoise']) .status { background: var(--pk-color-teal-550); }
        :host([status='off']) .status,
        :host([status='suspended']) .status,
        :host([status='expired']) .status,
        :host([status='red']) .status { background: var(--pk-color-red-600); }
        :host([status='warning']) .status { background: var(--pk-color-amber-100); }
        :host([status='pending']) .status,
        :host([status='orange']) .status { background: var(--pk-color-orange-400); }
        :host([status='amber']) .status { background: var(--pk-color-amber-500); }
        :host([status='yellow']) .status { background: var(--pk-color-yellow-500); }
        :host([status='lime']) .status { background: var(--pk-color-lime-500); }
        :host([status='green']) .status { background: var(--pk-color-green-600); }
        :host([status='emerald']) .status { background: var(--pk-color-emerald-500); }
        :host([status='cyan']) .status { background: var(--pk-color-cyan-500); }
        :host([status='sky']) .status { background: var(--pk-color-sky-500); }
        :host([status='blue']) .status { background: var(--pk-color-blue-600); }
        :host([status='indigo']) .status { background: var(--pk-color-indigo-500); }
        :host([status='violet']) .status { background: var(--pk-color-violet-500); }
        :host([status='purple']) .status { background: var(--pk-color-purple-500); }
        :host([status='fuchsia']) .status { background: var(--pk-color-fuchsia-500); }
        :host([status='pink']) .status { background: var(--pk-color-pink-500); }
        :host([status='rose']) .status { background: var(--pk-color-rose-500); }
        :host([status='light']) .status { background: var(--pk-color-gray-100); }
        :host([status='gray']) .status,
        :host([status='grey']) .status { background: var(--pk-color-gray-300); }
        :host([status='white']) .status { background: var(--pk-color-white); }
        :host([status='black']) .status { background: var(--pk-color-gray-800); }
        :host([status='disabled']) .status,
        :host([status='inactive']) .status {
            /* Ring color is overridable for inverted / selected surfaces. */
            background: transparent;
            box-shadow: inset 0 0 0 2px var(--pk-status-ring, var(--pk-color-gray-500));
        }
    }
`,pd=class extends $e{constructor(...e){super(...e),this.status=`on`,this.ariaLabel=null}static{this.styles=fd}render(){return S`
            <span
                part="base"
                class="status"
                role="status"
                aria-label=${this.ariaLabel??C}
            ></span>
        `}};D([w({reflect:!0})],pd.prototype,`status`,void 0),D([w({attribute:`aria-label`})],pd.prototype,`ariaLabel`,void 0),pd=D([Je(`pk-status`)],pd);var md=class extends $e{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.selected=!1,this.focusIndex=-1}focusControl(){this.shadowRoot?.querySelector(`.trigger`)?.focus()}handleClick(){this.disabled||this.dispatchEvent(new CustomEvent(`pk-tab-select`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleKeyDown(e){this.dispatchEvent(new CustomEvent(`pk-tab-keydown`,{detail:{event:e,value:this.value},bubbles:!0,composed:!0}))}renderTrigger(e){return S`
            <button
                part="trigger"
                type="button"
                class=${e}
                role="tab"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:C}
                aria-selected=${this.selected?`true`:`false`}
                tabindex=${this.focusIndex}
                aria-controls=${this.panelId??C}
                @click=${this.handleClick}
                @keydown=${this.handleKeyDown}
            >
                <span part="icon" class="icon">
                    <slot name="icon"></slot>
                </span>
                <span part="label" class="label">
                    <slot></slot>
                </span>
                <span part="status" class="status">
                    <slot name="status"></slot>
                </span>
            </button>
        `}};D([w()],md.prototype,`value`,void 0),D([w({type:Boolean,reflect:!0})],md.prototype,`disabled`,void 0),D([w({type:Boolean,reflect:!0})],md.prototype,`selected`,void 0),D([w({type:Number,attribute:`focus-index`})],md.prototype,`focusIndex`,void 0),D([w()],md.prototype,`panelId`,void 0);var hd=c`
    @layer pk-component {
        :host {
            /* Size to the shadow trigger. Prefer flex-start so a short list line
             * (or host utilities like Tailwind items-center) cannot stretch the
             * host shorter than the trigger and clip the modal active underline. */
            display: inline-flex;
            flex-shrink: 0;
            align-self: flex-start;
            height: auto;
            min-height: auto;
            align-items: stretch;
            /* Pin type metrics for slotted labels — vars cascade from pk-tabs. */
            font-family: var(--pk-font-family);
            font-size: var(--pk-tabs-trigger-font-size, 13px);
            font-weight: var(--pk-tabs-trigger-font-weight, 400);
            line-height: var(--pk-tabs-trigger-line-height, 1.4);
            color: var(--pk-tabs-trigger-color, inherit);
        }

        .trigger {
            position: relative;
            display: var(--pk-tabs-trigger-display, inline-flex);
            align-items: center;
            justify-content: var(--pk-tabs-trigger-justify, center);
            gap: var(--pk-tabs-trigger-gap, 0.5rem);
            width: var(--pk-tabs-trigger-width, auto);
            min-height: var(--pk-tabs-trigger-min-height, 2rem);
            padding: var(--pk-tabs-trigger-padding-block, 0.375rem)
                var(--pk-tabs-trigger-padding-inline, 0.75rem);
            border: 0;
            border-top: var(--pk-tabs-trigger-border-top, 0 solid transparent);
            border-radius: var(--pk-tabs-trigger-radius, var(--pk-radius-sm));
            background: transparent;
            color: inherit;
            font: inherit;
            font-family: var(--pk-font-family);
            font-size: var(--pk-tabs-trigger-font-size, 13px);
            font-weight: var(--pk-tabs-trigger-font-weight, 400);
            line-height: var(--pk-tabs-trigger-line-height, 1.4);
            text-align: var(--pk-tabs-trigger-text-align, center);
            text-transform: var(--pk-tabs-trigger-text-transform, none);
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-shadow: none;
            box-sizing: border-box;
            transition: background-color 0.12s ease, color 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease;
        }

        /* Collapse optional icon/status lanes when nothing is slotted. */
        .icon,
        .status {
            display: none;
            flex: none;
            align-items: center;
            justify-content: center;
            line-height: 0;
        }

        .icon:has(::slotted(*)),
        .status:has(::slotted(*)) {
            display: inline-flex;
        }

        .icon {
            width: var(--pk-tabs-trigger-icon-size, 1.125rem);
            height: var(--pk-tabs-trigger-icon-size, 1.125rem);
            font-size: var(--pk-tabs-trigger-icon-size, 1.125rem);
            color: var(--pk-tabs-trigger-icon-color, inherit);
        }

        .icon ::slotted(*) {
            display: block;
            max-width: 100%;
            max-height: 100%;
            /* Kill pk-icon text-baseline nudge so logos/icons sit on the flex midline. */
            vertical-align: 0;
        }

        .label {
            display: inline-flex;
            flex: var(--pk-tabs-trigger-label-flex, 0 1 auto);
            align-items: center;
            min-width: 0;
            line-height: inherit;
        }

        .status {
            margin-inline-start: var(--pk-tabs-trigger-status-margin, 0);
            color: var(--pk-tabs-trigger-status-color, inherit);
        }

        .trigger:hover:not(:disabled):not([aria-disabled='true']):not([aria-selected='true']) {
            border-top-color: transparent;
            background: var(--pk-tabs-trigger-hover-bg, rgb(255 255 255 / 0.7));
            color: var(--pk-tabs-trigger-hover-color, var(--pk-color-gray-700));
        }

        /*
         * Focus ring is only for :focus-visible on a non-selected tab (manual
         * activation). Selected + focus-visible must NOT draw a ring — active
         * chrome is the underline (mouse) or is replaced by the modal focus box
         * via --pk-tabs-trigger-focus-selected-shadow when set.
         */
        .trigger:focus-visible:not([aria-selected='true']) {
            box-shadow: inset 0 0 0 2px var(--pk-color-sky-600);
        }

        .trigger:disabled,
        .trigger[aria-disabled='true'] {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .trigger[aria-selected='true'],
        :host([selected]) .trigger {
            border-top: var(--pk-tabs-trigger-selected-border-top, var(--pk-tabs-trigger-border-top, 0 solid transparent));
            border-radius: var(--pk-tabs-trigger-selected-radius, var(--pk-radius-sm));
            background: var(--pk-tabs-trigger-selected-bg, var(--pk-color-white));
            color: var(--pk-tabs-trigger-selected-color, var(--pk-color-gray-800));
            box-shadow: var(--pk-tabs-trigger-selected-shadow, 0 1px 2px rgba(31, 41, 51, 0.12));
        }

        .trigger[aria-selected='true']:hover,
        :host([selected]) .trigger:hover {
            background: var(--pk-tabs-trigger-selected-hover-bg, var(--pk-tabs-trigger-selected-bg, var(--pk-color-white)));
            color: var(--pk-tabs-trigger-selected-hover-color, var(--pk-tabs-trigger-selected-color, var(--pk-color-gray-800)));
        }

        /* screen3: keyboard focus on the active tab → full inset box, no underline. */
        .trigger[aria-selected='true']:focus-visible,
        :host([selected]) .trigger:focus-visible {
            box-shadow: var(
                --pk-tabs-trigger-focus-selected-shadow,
                var(--pk-tabs-trigger-selected-shadow, 0 0 #0000)
            );
        }

        .trigger[aria-selected='true']:focus-visible::after,
        :host([selected]) .trigger:focus-visible::after {
            height: var(--pk-tabs-trigger-focus-selected-underline-height, var(--pk-tabs-trigger-underline-height, 0));
        }

        .trigger[aria-selected='true']::after,
        :host([selected]) .trigger::after {
            content: '';
            position: absolute;
            right: var(--pk-tabs-trigger-underline-inset, 15px);
            bottom: 0;
            left: var(--pk-tabs-trigger-underline-inset, 15px);
            height: var(--pk-tabs-trigger-underline-height, 0);
            /* Keep the bar above the list hairline when both meet at the clip edge. */
            z-index: 1;
            background: var(--pk-color-sky-600);
            pointer-events: none;
        }

        /*
         * Validation error chrome (v1 ModalTabs / PaneTabs text-error).
         * Host sets data-has-errors; light-DOM text-* cannot pierce the trigger.
         */
        :host([data-has-errors]) {
            --pk-tabs-trigger-color: var(--pk-color-error, #d81f23);
            --pk-tabs-trigger-hover-color: var(--pk-color-rose-700, #be123c);
            --pk-tabs-trigger-selected-color: var(--pk-color-error, #d81f23);
            --pk-tabs-trigger-selected-hover-color: var(--pk-color-rose-700, #be123c);
            --pk-tabs-trigger-icon-color: inherit;
            --pk-tabs-trigger-status-color: inherit;
        }
    }
`,gd=class extends md{static{this.styles=hd}render(){return this.renderTrigger(`trigger pk-tabs__trigger`)}};gd=D([Je(`pk-tab`)],gd);var _d=class extends $e{constructor(...e){super(...e),this.value=``,this.hidden=!0}renderPanel(e){return S`
            <div
                part="content"
                class=${e}
                role="tabpanel"
                id=${this.tabId??C}
                aria-labelledby=${this.tabId??C}
                aria-hidden=${this.hidden?`true`:`false`}
                tabindex=${this.hidden?C:`0`}
            >
                <slot></slot>
            </div>
        `}};D([w()],_d.prototype,`value`,void 0),D([w({type:Boolean,reflect:!0})],_d.prototype,`hidden`,void 0),D([w()],_d.prototype,`tabId`,void 0);var vd=c`
    @layer pk-component {
        :host {
            /* Flex column so .content can own overflow when the host is height-capped
             * by a modal/pane parent (flex: 1 1 0% + min-height: 0). */
            display: flex;
            flex-direction: column;
            flex: var(--pk-tabs-panel-flex, none);
            min-height: var(--pk-tabs-panel-min-height, 0);
            min-width: 0;
            overflow: hidden;
        }

        :host([hidden]) {
            display: none !important;
        }

        .content {
            flex: 1 1 auto;
            min-height: 0;
            padding: var(--pk-tabs-panel-padding, 0);
            overflow-y: auto;
            border-radius: var(--pk-tabs-panel-radius, 0);
            background: var(--pk-tabs-panel-bg, transparent);
            outline: none;
            font-family: var(--pk-font-family);
            font-size: var(--pk-tabs-panel-font-size, var(--pk-font-size-base));
            line-height: var(--pk-line-height);
        }

        .content:focus-visible {
            box-shadow: inset 0 0 0 2px var(--pk-color-sky-600);
            border-radius: var(--pk-radius-sm);
        }
    }
`,yd=class extends _d{static{this.styles=vd}render(){return this.renderPanel(`content pk-tabs__content`)}};yd=D([Je(`pk-tab-panel`)],yd);var bd=c`
    @layer pk-component {
        :host {
            display: block;
            max-width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            /* Frame chrome on the host (matches v1 PaneTabs root) so consumer
             * overflow utilities on the host do not clip the pane shadow. */
            border-radius: var(--pk-tabs-root-radius);
            box-shadow: var(--pk-tabs-root-shadow);
            overflow: var(--pk-tabs-root-overflow);

            /* Root */
            --pk-tabs-root-gap: 0.75rem;
            --pk-tabs-root-height: auto;
            --pk-tabs-root-radius: 0;
            --pk-tabs-root-shadow: none;
            --pk-tabs-root-overflow: visible;

            /* List */
            --pk-tabs-list-display: inline-flex;
            --pk-tabs-list-width: fit-content;
            --pk-tabs-list-align-self: flex-start;
            --pk-tabs-list-align-items: center;
            --pk-tabs-list-padding: 2px;
            --pk-tabs-list-border-width: 1px;
            --pk-tabs-list-border-color: var(--pk-color-gray-150);
            --pk-tabs-list-border-bottom: var(--pk-tabs-list-border-width) solid var(--pk-tabs-list-border-color);
            --pk-tabs-list-radius: var(--pk-radius-md);
            --pk-tabs-list-bg: color-mix(in oklab, var(--pk-color-gray-100) 90%, transparent);
            --pk-tabs-list-shadow: 0 1px 2px rgba(31, 41, 51, 0.06);
            /* Transparent no-op — keyword none in a multi-shadow list invalidates the whole property. */
            --pk-tabs-list-inset-shadow: 0 0 #0000;
            --pk-tabs-list-color: var(--pk-color-gray-500);
            --pk-tabs-list-overflow-x: auto;
            --pk-tabs-list-overflow-y: visible;

            /* Trigger (inherited by pk-tab) */
            --pk-tabs-trigger-display: inline-flex;
            --pk-tabs-trigger-justify: center;
            --pk-tabs-trigger-width: auto;
            --pk-tabs-trigger-gap: 0.5rem;
            --pk-tabs-trigger-min-height: 2rem;
            --pk-tabs-trigger-padding-block: 0.375rem;
            --pk-tabs-trigger-padding-inline: 0.75rem;
            --pk-tabs-trigger-radius: var(--pk-radius-sm);
            --pk-tabs-trigger-color: inherit;
            --pk-tabs-trigger-font-size: 13px;
            --pk-tabs-trigger-font-weight: 400;
            --pk-tabs-trigger-text-align: center;
            --pk-tabs-trigger-text-transform: none;
            --pk-tabs-trigger-border-top: 0 solid transparent;
            --pk-tabs-trigger-hover-bg: rgb(255 255 255 / 0.7);
            --pk-tabs-trigger-hover-color: var(--pk-color-gray-700);
            --pk-tabs-trigger-selected-hover-bg: var(--pk-tabs-trigger-selected-bg, var(--pk-color-white));
            --pk-tabs-trigger-selected-hover-color: var(--pk-tabs-trigger-selected-color, var(--pk-color-gray-800));
            --pk-tabs-trigger-selected-bg: var(--pk-color-white);
            --pk-tabs-trigger-selected-color: var(--pk-color-gray-800);
            --pk-tabs-trigger-selected-shadow: 0 1px 2px rgba(31, 41, 51, 0.12);
            --pk-tabs-trigger-selected-radius: var(--pk-radius-sm);
            --pk-tabs-trigger-selected-border-top: 0 solid transparent;
            --pk-tabs-trigger-underline-height: 0;
            --pk-tabs-trigger-underline-inset: 15px;
            --pk-tabs-trigger-label-flex: 0 1 auto;
            --pk-tabs-trigger-icon-size: 1.125rem;
            --pk-tabs-trigger-icon-color: inherit;
            --pk-tabs-trigger-status-margin: 0;
            --pk-tabs-trigger-status-color: inherit;

            /* Group headings (pk-tab-heading) */
            --pk-tabs-heading-padding: 0.75rem 0.5rem 0.375rem;
            --pk-tabs-heading-color: var(--pk-color-gray-400);
            --pk-tabs-heading-font-size: 11px;
            --pk-tabs-heading-font-weight: 600;
            --pk-tabs-heading-letter-spacing: 0.04em;
            --pk-tabs-heading-text-transform: uppercase;

            /* Panel (inherited by pk-tab-panel) */
            --pk-tabs-panel-flex: none;
            --pk-tabs-panel-min-height: 0;
            --pk-tabs-panel-padding: 0;
            --pk-tabs-panel-bg: transparent;
            --pk-tabs-panel-radius: 0;
            --pk-tabs-panel-font-size: var(--pk-font-size-base);
        }

        :host([variant='pane']),
        :host([variant='modal']),
        :host([variant='sidebar']) {
            height: 100%;
            min-height: 0;
            --pk-tabs-root-height: 100%;
        }

        .tabs {
            display: flex;
            flex-direction: column;
            gap: var(--pk-tabs-root-gap);
            height: var(--pk-tabs-root-height);
            min-height: 0;
            /* Radius/shadow/overflow live on :host — keep the layout shell fill-only. */
        }

        .tabs[data-placement='bottom'] {
            flex-direction: column-reverse;
        }

        .tabs[data-placement='start'],
        .tabs[data-placement='end'] {
            flex-direction: row;
            align-items: flex-start;
            gap: 1rem;
        }

        .tabs[data-placement='end'] {
            flex-direction: row-reverse;
        }

        .tabs[data-placement='start'] .list,
        .tabs[data-placement='end'] .list {
            flex-direction: column;
            align-self: stretch;
        }

        .list {
            display: var(--pk-tabs-list-display);
            width: var(--pk-tabs-list-width);
            max-width: 100%;
            align-self: var(--pk-tabs-list-align-self);
            align-items: var(--pk-tabs-list-align-items);
            justify-content: flex-start;
            /* Tab strip must not shrink when panels flex-fill the column — otherwise
             * overflow-y clips trigger padding and the modal active underline. */
            flex-shrink: 0;
            position: relative;
            z-index: var(--pk-tabs-list-z-index, auto);
            isolation: isolate;
            padding: var(--pk-tabs-list-padding);
            border: var(--pk-tabs-list-border-width) solid var(--pk-tabs-list-border-color);
            border-bottom: var(--pk-tabs-list-border-bottom, var(--pk-tabs-list-border-width) solid var(--pk-tabs-list-border-color));
            border-radius: var(--pk-tabs-list-radius);
            background: var(--pk-tabs-list-bg);
            box-shadow: var(--pk-tabs-list-shadow), var(--pk-tabs-list-inset-shadow);
            color: var(--pk-tabs-list-color);
            overflow-x: var(--pk-tabs-list-overflow-x, auto);
            overflow-y: var(--pk-tabs-list-overflow-y, visible);
        }

        /* Pane — matches plugin-kit-react PaneTabs */
        :host([variant='pane']) {
            --pk-tabs-root-gap: 0;
            --pk-tabs-root-radius: var(--pk-radius-lg);
            --pk-tabs-root-shadow:
                0 0 0 1px var(--pk-color-gray-200),
                0 2px 12px rgb(205 216 228 / 50%);
            --pk-tabs-root-overflow: visible;

            --pk-tabs-list-display: flex;
            --pk-tabs-list-width: auto;
            --pk-tabs-list-align-self: stretch;
            --pk-tabs-list-align-items: flex-end;
            --pk-tabs-list-padding: 0;
            --pk-tabs-list-border-width: 0;
            --pk-tabs-list-radius: var(--pk-radius-lg) var(--pk-radius-lg) 0 0;
            --pk-tabs-list-bg: var(--pk-color-gray-50);
            /* Must not use keyword none — box-shadow: none, inset … is invalid and drops the hairline. */
            --pk-tabs-list-shadow: inset 0 -1px 0 0 rgb(154 165 177 / 25%);
            --pk-tabs-list-inset-shadow: 0 0 #0000;
            --pk-tabs-list-overflow-x: auto;
            --pk-tabs-list-overflow-y: visible;

            --pk-tabs-trigger-display: flex;
            --pk-tabs-trigger-justify: flex-start;
            --pk-tabs-trigger-min-height: 45px;
            --pk-tabs-trigger-padding-block: 0;
            --pk-tabs-trigger-padding-inline: 24px;
            --pk-tabs-trigger-radius: 0;
            --pk-tabs-trigger-border-top: 0 solid transparent;
            --pk-tabs-trigger-color: var(--pk-color-gray-550);
            --pk-tabs-trigger-font-size: var(--pk-font-size-base);
            --pk-tabs-trigger-font-weight: 400;
            --pk-tabs-trigger-hover-bg: var(--pk-color-slate-100);
            --pk-tabs-trigger-hover-color: var(--pk-color-gray-550);
            --pk-tabs-trigger-selected-bg: var(--pk-color-white);
            --pk-tabs-trigger-selected-color: var(--pk-color-gray-700);
            --pk-tabs-trigger-selected-border-top: 0 solid transparent;
            /* Match Craft .pane-tabs [role=tab].sel — inset top accent + elevation. */
            --pk-tabs-trigger-selected-shadow:
                inset 0 2px 0 var(--pk-color-gray-500),
                0 0 0 1px rgb(51 64 77 / 10%),
                0 2px 12px rgb(205 216 228 / 90%);
            --pk-tabs-trigger-selected-radius: 2px 2px 0 0;

            /* 0% basis — panel fills leftover height and scrolls; auto basis grew with
             * content and clipped under dialog overflow:hidden (Edit Buttons Appearance). */
            --pk-tabs-panel-flex: 1 1 0%;
            --pk-tabs-panel-min-height: 0;
            /*
             * No built-in panel inset — matches v1 PaneTabsContent (padding came from
             * the consumer: ReportTabPanel / FormBuilderTabContent / DefaultsPanel p-6).
             * A non-zero value here double-pads those surfaces.
             */
            --pk-tabs-panel-padding: 0;
            --pk-tabs-panel-bg: var(--pk-color-white);
            --pk-tabs-panel-radius: 0 0 var(--pk-radius-lg) var(--pk-radius-lg);
            --pk-tabs-panel-font-size: var(--pk-font-size-sm, 14px);
        }

        /* Craft bumps the first tab start corner to --radius-lg so the inset
         * accent follows the pane radius instead of reading as clipped at 2px.
         */
        :host([variant='pane']) ::slotted(pk-tab:first-child) {
            --pk-tabs-trigger-selected-radius: var(--pk-radius-lg) 2px 0 0;
        }

        /* Modal — matches plugin-kit-react ModalTabs */
        :host([variant='modal']) {
            --pk-tabs-root-gap: 0;
            --pk-tabs-root-height: 100%;
            /* Dialog already rounds the panel — host radius + overflow clips the
             * first tab’s focus ring into a one-corner “rounded border”. */
            --pk-tabs-root-radius: 0;
            /* Clip to the height chain so panels scroll inside, not through the footer. */
            --pk-tabs-root-overflow: hidden;

            --pk-tabs-list-display: flex;
            --pk-tabs-list-width: 100%;
            --pk-tabs-list-align-self: stretch;
            --pk-tabs-list-align-items: stretch;
            --pk-tabs-list-padding: 0;
            --pk-tabs-list-border-width: 0;
            --pk-tabs-list-border-bottom: 1px solid var(--pk-color-gray-100);
            --pk-tabs-list-radius: 0;
            --pk-tabs-list-bg: var(--pk-color-white);
            --pk-tabs-list-shadow: 0 1px 5px #cdd8e440;
            /* Transparent no-op — keyword none in a multi-shadow list invalidates the whole property. */
            --pk-tabs-list-inset-shadow: 0 0 #0000;
            --pk-tabs-list-color: inherit;
            --pk-tabs-list-overflow-x: auto;
            /* auto (not hidden): overflow-x:auto + overflow-y:hidden clips ~1 device
             * pixel of the bottom active underline, so the 2px sky bar reads as 1px. */
            --pk-tabs-list-overflow-y: auto;
            /* v1 ModalTabsList z-11 — keep the strip above scrolling panel content
             * (editable-table action columns, etc.) when body/panel scrolls. */
            --pk-tabs-list-z-index: 11;

            --pk-tabs-trigger-display: inline-flex;
            --pk-tabs-trigger-justify: center;
            --pk-tabs-trigger-min-height: auto;
            --pk-tabs-trigger-padding-block: 15px;
            --pk-tabs-trigger-padding-inline: 15px;
            --pk-tabs-trigger-radius: 0;
            --pk-tabs-trigger-color: #64788d;
            --pk-tabs-trigger-font-size: 12px;
            --pk-tabs-trigger-font-weight: 500;
            --pk-tabs-trigger-text-transform: uppercase;
            --pk-tabs-trigger-hover-bg: transparent;
            --pk-tabs-trigger-hover-color: var(--pk-color-sky-600);
            --pk-tabs-trigger-selected-bg: transparent;
            --pk-tabs-trigger-selected-color: #64788d;
            --pk-tabs-trigger-selected-hover-bg: transparent;
            --pk-tabs-trigger-selected-hover-color: var(--pk-color-sky-600);
            /* Active (mouse) = 15px-inset underline. Active + :focus-visible = screen3 box. */
            --pk-tabs-trigger-selected-shadow: none;
            --pk-tabs-trigger-selected-radius: 0;
            --pk-tabs-trigger-underline-height: 2px;
            --pk-tabs-trigger-underline-inset: 15px;
            --pk-tabs-trigger-focus-selected-shadow: inset 0 0 0 2px var(--pk-color-sky-600);
            --pk-tabs-trigger-focus-selected-underline-height: 0;

            /* 0% basis — panel fills leftover height and scrolls; auto basis grew with
             * content and clipped under dialog overflow:hidden (Edit Buttons Appearance). */
            --pk-tabs-panel-flex: 1 1 0%;
            --pk-tabs-panel-min-height: 0;
            --pk-tabs-panel-padding: 1rem;
            --pk-tabs-panel-bg: transparent;
            --pk-tabs-panel-radius: 0;
            --pk-tabs-panel-font-size: var(--pk-font-size-sm, 14px);
        }

        /* Sidebar — vertical nav list with optional icons, status, and headings */
        :host([variant='sidebar']) {
            --pk-tabs-root-gap: 0;
            --pk-tabs-root-radius: 0;
            --pk-tabs-root-shadow: none;
            --pk-tabs-root-overflow: visible;

            --pk-tabs-list-display: flex;
            --pk-tabs-list-width: var(--pk-tabs-sidebar-width, 14rem);
            --pk-tabs-list-align-self: stretch;
            --pk-tabs-list-align-items: stretch;
            --pk-tabs-list-padding: 0.5rem;
            --pk-tabs-list-border-width: 0;
            --pk-tabs-list-border-bottom: 0 solid transparent;
            --pk-tabs-list-radius: 0;
            --pk-tabs-list-bg: var(--pk-color-gray-100);
            --pk-tabs-list-shadow: 0 0 #0000;
            --pk-tabs-list-inset-shadow: 0 0 #0000;
            --pk-tabs-list-color: var(--pk-color-gray-600);
            --pk-tabs-list-overflow-x: hidden;
            --pk-tabs-list-overflow-y: auto;

            --pk-tabs-trigger-display: flex;
            --pk-tabs-trigger-justify: flex-start;
            --pk-tabs-trigger-width: 100%;
            /* Match Craft/Formie integrations nav: padding 7px 10px, 16px icons, content-sized height. */
            --pk-tabs-trigger-gap: 10px;
            --pk-tabs-trigger-min-height: 0;
            --pk-tabs-trigger-padding-block: 7px;
            --pk-tabs-trigger-padding-inline: 10px;
            --pk-tabs-trigger-radius: var(--pk-radius-md);
            --pk-tabs-trigger-color: var(--pk-color-gray-700);
            --pk-tabs-trigger-font-size: 13px;
            --pk-tabs-trigger-font-weight: 400;
            --pk-tabs-trigger-line-height: 1.2;
            --pk-tabs-trigger-text-align: start;
            --pk-tabs-trigger-text-transform: none;
            --pk-tabs-trigger-border-top: 0 solid transparent;
            --pk-tabs-trigger-hover-bg: color-mix(in oklab, var(--pk-color-gray-200) 70%, transparent);
            --pk-tabs-trigger-hover-color: var(--pk-color-gray-800);
            --pk-tabs-trigger-selected-bg: var(--pk-color-gray-500);
            --pk-tabs-trigger-selected-color: var(--pk-color-white);
            --pk-tabs-trigger-selected-hover-bg: var(--pk-color-gray-500);
            --pk-tabs-trigger-selected-hover-color: var(--pk-color-white);
            --pk-tabs-trigger-selected-shadow: none;
            --pk-tabs-trigger-selected-radius: var(--pk-radius-md);
            --pk-tabs-trigger-selected-border-top: 0 solid transparent;
            --pk-tabs-trigger-underline-height: 0;
            --pk-tabs-trigger-label-flex: 1 1 auto;
            --pk-tabs-trigger-icon-size: 16px;
            --pk-tabs-trigger-status-margin: auto;
            --pk-tabs-trigger-status-color: var(--pk-color-gray-400);

            --pk-tabs-heading-padding: 14px 10px 5px;
            --pk-tabs-heading-color: var(--pk-color-gray-400);
            --pk-tabs-heading-font-size: 11px;
            --pk-tabs-heading-font-weight: 600;
            --pk-tabs-heading-letter-spacing: 0.04em;
            --pk-tabs-heading-text-transform: uppercase;

            /* 0% basis — panel fills leftover height and scrolls; auto basis grew with
             * content and clipped under dialog overflow:hidden (Edit Buttons Appearance). */
            --pk-tabs-panel-flex: 1 1 0%;
            --pk-tabs-panel-min-height: 0;
            --pk-tabs-panel-padding: 1.25rem;
            --pk-tabs-panel-bg: var(--pk-color-white);
            --pk-tabs-panel-radius: 0;
            --pk-tabs-panel-font-size: var(--pk-font-size-base);
        }

        :host([variant='sidebar']) .tabs {
            flex-direction: row;
            align-items: stretch;
            gap: 0;
        }

        :host([variant='sidebar']) .tabs[data-placement='end'] {
            flex-direction: row-reverse;
        }

        :host([variant='sidebar']) .list {
            flex-direction: column;
            gap: 0.125rem;
            flex: none;
        }

        :host([variant='sidebar']) ::slotted(pk-tab) {
            display: block;
            width: 100%;
        }

        :host([variant='sidebar']) ::slotted(pk-tab-heading) {
            display: block;
            width: 100%;
        }

        /* First group heading sits closer to the list top edge */
        :host([variant='sidebar']) ::slotted(pk-tab-heading:first-child) {
            --pk-tabs-heading-padding: 10px 10px 5px;
        }

        /* Hollow inactive dots read better on the selected dark pill */
        :host([variant='sidebar']) ::slotted(pk-tab[selected]) {
            --pk-tabs-trigger-status-color: var(--pk-color-gray-300);
        }
    }
`,xd=class extends $e{constructor(...e){super(...e),this.value=``,this.variant=`default`,this.orientation=`horizontal`,this.placement=`top`,this.activation=`manual`,this.disabled=!1,this.ariaLabel=null,this.baseId=So(`pk-tabs`),this.tabs=[],this.panels=[],this.focusedValue=``,this.syncTabs=()=>{let e=this.shadowRoot?.querySelector(`slot[name="nav"]`);e&&(this.tabs=e.assignedElements({flatten:!0}).filter(e=>e.tagName===`PK-TAB`),this.ensureDefaultValue(),this.applySelection())},this.syncPanels=()=>{let e=this.shadowRoot?.querySelector(`slot:not([name])`);e&&(this.panels=e.assignedElements({flatten:!0}).filter(e=>e.tagName===`PK-TAB-PANEL`),this.applySelection())},this.handleTabSelect=e=>{if(!this.isOwnTabEvent(e)||this.disabled)return;e.stopPropagation();let{value:t}=e.detail;if(t===this.value&&this.activation===`manual`){this.focusedValue=t,this.applySelection();return}t!==this.value&&this.selectTab(t)},this.handleTabKeyDown=e=>{if(!this.isOwnTabEvent(e))return;e.stopPropagation();let t=e.detail.event,n=this.getEnabledTabs();if(n.length===0)return;let r=n.findIndex(t=>t.value===e.detail.value);if(r<0)return;let i=r,a=this.getEffectiveOrientation()===`horizontal`;switch(t.key){case`ArrowDown`:if(a)return;t.preventDefault(),i=r>=n.length-1?0:r+1;break;case`ArrowUp`:if(a)return;t.preventDefault(),i=r<=0?n.length-1:r-1;break;case`ArrowRight`:if(!a)return;t.preventDefault(),i=r>=n.length-1?0:r+1;break;case`ArrowLeft`:if(!a)return;t.preventDefault(),i=r<=0?n.length-1:r-1;break;case`Home`:t.preventDefault(),i=0;break;case`End`:t.preventDefault(),i=n.length-1;break;default:return}let o=n[i];o&&(this.activation===`auto`?o.value===this.value?o.focusControl():this.selectTab(o.value):(this.focusedValue=o.value,this.applySelection(),o.focusControl()))}}static{this.styles=bd}connectedCallback(){super.connectedCallback(),this.addEventListener(`pk-tab-select`,this.handleTabSelect),this.addEventListener(`pk-tab-keydown`,this.handleTabKeyDown)}disconnectedCallback(){this.removeEventListener(`pk-tab-select`,this.handleTabSelect),this.removeEventListener(`pk-tab-keydown`,this.handleTabKeyDown),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`disabled`)||e.has(`activation`))&&(e.has(`value`)&&(this.focusedValue=this.value),this.applySelection())}ensureDefaultValue(){if(this.value||this.tabs.length===0)return;let e=this.tabs.find(e=>!e.disabled&&!this.disabled);e&&(this.value=e.value,this.focusedValue=this.value)}getEnabledTabs(){return this.tabs.filter(e=>!e.disabled&&!this.disabled)}getEffectiveOrientation(){return this.variant===`sidebar`?`vertical`:this.orientation}getEffectivePlacement(){return this.variant===`sidebar`&&(this.placement===`top`||this.placement===`bottom`)?`start`:this.placement}applySelection(){let e=this.getAttribute(`data-current-value`)??``,t=this.activation===`manual`?this.focusedValue:this.value;for(let e of this.tabs){let n=e.value===this.value,r=`${this.baseId}-tab-${e.value}`,i=`${this.baseId}-panel-${e.value}`;e.selected=n,e.disabled=this.disabled||e.hasAttribute(`disabled`),e.focusIndex=e.value===t?0:-1,e.panelId=i,e.id=r}for(let t of this.panels){let n=t.value===this.value,r=`${this.baseId}-tab-${t.value}`,i=`${this.baseId}-panel-${t.value}`;t.hidden!==!n&&(n?this.dispatchEvent(new CustomEvent(`pk-tab-show`,{detail:{value:t.value},bubbles:!0,composed:!0})):e===t.value&&this.dispatchEvent(new CustomEvent(`pk-tab-hide`,{detail:{value:t.value},bubbles:!0,composed:!0}))),t.hidden=!n,t.tabId=r,t.id=i}this.setAttribute(`data-current-value`,this.value)}isOwnTabEvent(e){let t=e.target;return t instanceof HTMLElement&&t.tagName===`PK-TAB`&&this.tabs.includes(t)}selectTab(e){this.value=e,this.focusedValue=e,this.applySelection(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){let e=this.getEffectiveOrientation();return S`
            <div part="base" class="tabs pk-tabs" data-placement=${this.getEffectivePlacement()}>
                <div
                    part="list"
                    class="list pk-tabs__list"
                    role="tablist"
                    aria-orientation=${e}
                    aria-label=${this.ariaLabel??C}
                    @slotchange=${this.syncTabs}
                >
                    <slot name="nav"></slot>
                </div>
                <slot @slotchange=${this.syncPanels}></slot>
            </div>
        `}};D([w()],xd.prototype,`value`,void 0),D([w({reflect:!0})],xd.prototype,`variant`,void 0),D([w({reflect:!0})],xd.prototype,`orientation`,void 0),D([w({reflect:!0})],xd.prototype,`placement`,void 0),D([w({reflect:!0})],xd.prototype,`activation`,void 0),D([w({type:Boolean,reflect:!0})],xd.prototype,`disabled`,void 0),D([w({attribute:`aria-label`})],xd.prototype,`ariaLabel`,void 0),D([T()],xd.prototype,`tabs`,void 0),D([T()],xd.prototype,`panels`,void 0),D([T()],xd.prototype,`focusedValue`,void 0),xd=D([Je(`pk-tabs`)],xd);var Sd=c`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .textarea {
            display: block;
            width: 100%;
            min-height: 5rem;
            margin: 0;
            padding: 7px 10px;
            border: var(--pk-input-border);
            border-radius: var(--pk-textarea-border-radius, var(--pk-radius-md));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: 1.4;
            resize: vertical;
            appearance: none;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .textarea::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /* Craft: focus is box-shadow only — do not also flip border-color (double ring). */
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .textarea:disabled {
            cursor: not-allowed;
            opacity: 0.5;
            background: var(--pk-color-gray-50);
        }

        :host([invalid]) .textarea,
        :host(:state(user-invalid)) .textarea {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .textarea:focus,
        :host([invalid]) .textarea:focus-visible,
        :host([invalid][data-state='focus-visible']) .textarea,
        :host(:state(user-invalid)) .textarea:focus,
        :host(:state(user-invalid)) .textarea:focus-visible {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        /* Editable-table cells (v1): flush into the row and fill cell height.
         * Chain height through form-control — percentage on .textarea alone
         * doesn't resolve when the wrapper sizes to content (rows / min-height). */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]) .textarea,
        :host([data-editable-table-input]) .textarea {
            flex: 1 1 auto;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            height: 100%;
            min-height: 0;
            max-height: 100%;
            /* Match text-cell inset (v1 py-1.5 / px-2). 0.5rem block padding +
             * line-height 1.4 overflows the 34px et cell and shows a scrollbar
             * even for empty / single-line notes. */
            padding: 0.375rem 0.5rem;
            line-height: 1.25;
            overflow-x: hidden;
            overflow-y: auto;
            resize: none;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .textarea,
        :host([fit-cell]:state(user-invalid)) .textarea,
        :host([fit-cell][invalid]) .textarea:focus,
        :host([fit-cell][invalid]) .textarea:focus-visible,
        :host([fit-cell]:state(user-invalid)) .textarea:focus,
        :host([fit-cell]:state(user-invalid)) .textarea:focus-visible,
        :host([data-editable-table-input][invalid]) .textarea,
        :host([data-editable-table-input]:state(user-invalid)) .textarea,
        :host([data-editable-table-input][invalid]) .textarea:focus,
        :host([data-editable-table-input][invalid]) .textarea:focus-visible,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus-visible {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }
    }
`,Cd=class extends mr{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new gr(this,`instructions`,`hint`,`label`),this.controlId=So(`pk-textarea`),this.placeholder=``,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.withLabel=!1,this.withInstructions=!1}static{this.styles=[bo,Sd]}static get validators(){return[...super.validators,qu(),hr()]}get value(){return this.valueHasChanged?this._value??``:this._value??this.defaultValue??``}set value(e){let t=e??``;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=Yu(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=this.defaultValue??``),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=this.hasLabelContent(),t=this.hasInstructionsContent();ur({control:this.input,labelId:`${this.controlId}-label`,instructionsId:`${this.controlId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return Xu((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent();return S`
            <div part="form-control" class="form-control">
                ${e?S`
                        <label
                            part="label"
                            class="form-control__label"
                            id=${`${this.controlId}-label`}
                            for=${`${this.controlId}-control`}
                        >
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:C}

                ${t?S`
                        <p
                            part="instructions"
                            class="form-control__instructions"
                            id=${`${this.controlId}-instructions`}
                        >
                            <slot name="instructions">${this.instructions}</slot>
                            <slot name="hint"></slot>
                        </p>
                    `:C}

                <textarea
                    part="textarea"
                    class="textarea"
                    id=${e?`${this.controlId}-control`:C}
                    rows=${Zu(this.fitCell?this.rows??1:this.rows)}
                    .value=${nd(this.value)}
                    placeholder=${this.placeholder||C}
                    maxlength=${Zu(this.maxlength)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                    @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                ></textarea>
            </div>
        `}};D([E(`textarea`)],Cd.prototype,`input`,void 0),D([w()],Cd.prototype,`placeholder`,void 0),D([T()],Cd.prototype,`value`,null),D([w({attribute:`value`,reflect:!0})],Cd.prototype,`defaultValue`,void 0),D([w({reflect:!0})],Cd.prototype,`size`,void 0),D([w()],Cd.prototype,`label`,void 0),D([w()],Cd.prototype,`instructions`,void 0),D([w({type:Boolean,reflect:!0})],Cd.prototype,`readonly`,void 0),D([w({type:Boolean,reflect:!0})],Cd.prototype,`invalid`,void 0),D([w({type:Boolean,reflect:!0,attribute:`fit-cell`})],Cd.prototype,`fitCell`,void 0),D([w({type:Number})],Cd.prototype,`rows`,void 0),D([w({type:Number,attribute:`max-length`})],Cd.prototype,`maxlength`,void 0),D([w({attribute:`with-label`,type:Boolean})],Cd.prototype,`withLabel`,void 0),D([w({attribute:`with-instructions`,type:Boolean})],Cd.prototype,`withInstructions`,void 0),Cd=D([Je(`pk-textarea`)],Cd);var wd=c`
    @layer pk-component {
        :host {
            display: block;
            /*
             * Slotted label copy inherits through the flat tree from this host
             * when page metrics would otherwise leak via font:inherit chains.
             */
            font-size: var(--pk-dropdown-label-font-size, 13px);
            line-height: 1.3;
            color: var(--pk-color-slate-700, rgba(96, 125, 159, 0.7));
        }

        /* Match v1 DropdownMenuLabel — text-slate-700, regular weight (not medium). */
        .label {
            margin: 0;
            padding-block-start: 6px;
            padding-block-end: 4px;
            padding-inline: var(--pk-dropdown-label-padding-inline, 12px);
            color: inherit;
            font: inherit;
            font-weight: 400;
            user-select: none;
            pointer-events: none;
        }
    }
`,Td=class extends $e{static{this.styles=wd}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}render(){return S`
            <div part="label" class="label">
                <slot></slot>
            </div>
        `}};Td=D([Je(`pk-dropdown-label`)],Td);var Ed=class extends $e{static{this.styles=c`
        @layer pk-component {
            :host {
                display: block;
            }

            hr {
                display: block;
                height: 1px;
                margin: 4px 0;
                border: 0;
                padding: 0;
                background: var(--pk-color-slate-200);
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}render(){return S`<hr part="base" />`}};Ed=D([Je(`pk-dropdown-separator`)],Ed);var Dd=[c`
    @layer pk-component {
        .content.pk-popup-content {
            transform-origin: var(--pk-transform-origin, top);
        }

        .content.pk-popup-content[data-open] {
            animation: pk-tooltip-in 150ms ease forwards;
        }

        .content.pk-popup-content[data-open][data-side='top'] {
            animation-name: pk-tooltip-in-top;
        }

        .content.pk-popup-content[data-open][data-side='bottom'] {
            animation-name: pk-tooltip-in-bottom;
        }

        .content.pk-popup-content[data-open][data-side='left'] {
            animation-name: pk-tooltip-in-left;
        }

        .content.pk-popup-content[data-open][data-side='right'] {
            animation-name: pk-tooltip-in-right;
        }

        .content.pk-popup-content.closing {
            animation: pk-tooltip-out 150ms ease;
        }

        @keyframes pk-tooltip-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-tooltip-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        @keyframes pk-tooltip-in-top {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes pk-tooltip-in-bottom {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(-0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes pk-tooltip-in-left {
            from {
                opacity: 0;
                transform: scale(0.95) translateX(0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateX(0);
            }
        }

        @keyframes pk-tooltip-in-right {
            from {
                opacity: 0;
                transform: scale(0.95) translateX(-0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateX(0);
            }
        }
    }
`,c`
    @layer pk-component {
        :host {
            display: inline-block;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            vertical-align: middle;
            --pk-popup-z-index: 250;
            --pk-tooltip-arrow-size: 9px;
            --pk-tooltip-arrow-inset: 1px;
        }

        .content:not([data-open]):not(.closing) {
            opacity: 0;
            pointer-events: none;
        }

        .content[data-open]:not(.closing) {
            opacity: 1;
        }

        .content {
            position: relative;
            isolation: isolate;
            overflow: visible;
            width: fit-content;
            max-width: 20rem;
            padding: 4px 8px;
            border-radius: var(--pk-radius-sm);
            background: #1c2e36;
            color: var(--pk-color-white);
            font-family: var(--pk-font-family);
            font-size: 12px;
            line-height: 1.4;
            pointer-events: none;
        }

        .content::after {
            content: '';
            position: absolute;
            z-index: -1;
            width: var(--pk-tooltip-arrow-size);
            height: var(--pk-tooltip-arrow-size);
            background: #1c2e36;
            border-radius: 2px;
            rotate: 45deg;
            pointer-events: none;
        }

        .content[data-side='top']::after {
            left: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            bottom: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[data-side='bottom']::after {
            left: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            top: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[data-side='left']::after {
            top: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            right: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[data-side='right']::after {
            top: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            left: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[hidden] {
            display: none !important;
        }
    }
    `],Od=class extends $e{constructor(...e){super(...e),this.placement=`top`,this.trigger=`hover focus`,this.disabled=!1,this.openDelay=0,this.closeDelay=0,this.content=``,this.for=``,this.open=!1,this.triggerElement=null,this.contentAnimated=!1,this.closing=!1,this.contentSide=null,this.hasSlottedBody=!1,this.triggerId=So(`pk-tooltip-trigger`),this.tooltipId=So(`pk-tooltip`),this.showGeneration=0,this.exitGeneration=0,this.syncPlacementAnimation=()=>{let e=this.popupElement?.getAttribute(`data-current-placement`)??this.placement,t=this.popupElement?.getContentElement();this.contentSide=e?ti(e):null,ri(this.popupElement,e),t&&ri(t,e)},this.onBodySlotChange=e=>{let t=e.target;this.hasSlottedBody=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim())},this.scheduleShow=()=>{this.usesPointerTrigger()&&(window.clearTimeout(this.closeTimer),window.clearTimeout(this.openTimer),this.openTimer=window.setTimeout(()=>this.showTooltip(),this.openDelay))},this.scheduleHide=()=>{this.usesPointerTrigger()&&(window.clearTimeout(this.openTimer),window.clearTimeout(this.closeTimer),this.closeTimer=window.setTimeout(()=>this.hideTooltip(),this.closeDelay))}}static{this.styles=Dd}disconnectedCallback(){this.popupElement?.removeEventListener(`pk-reposition`,this.syncPlacementAnimation),this.clearTimers(),this.hideTooltip(!0),super.disconnectedCallback()}updated(e){super.updated(e),(e.has(`trigger`)||e.has(`disabled`)||e.has(`for`))&&this.rebindTrigger(),this.disabled&&this.open&&this.hideTooltip(!0)}firstUpdated(){this.popupElement.addEventListener(`pk-reposition`,this.syncPlacementAnimation),this.for&&queueMicrotask(()=>{this.resolveExternalTrigger()})}async show(){this.disabled||(this.clearTimers(),this.showTooltip(!0),await this.updateComplete)}async hide(){this.clearTimers(),this.hideTooltip(!0),await this.updateComplete}clearTimers(){window.clearTimeout(this.openTimer),window.clearTimeout(this.closeTimer)}resolveExternalTrigger(){this.triggerElement=uo(this,this.for),this.rebindTrigger()}onTriggerSlotChange(e){let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t??null,this.rebindTrigger(),this.requestUpdate()}rebindTrigger(){this.unbindTrigger(this.triggerElement),this.for&&(this.triggerElement=uo(this,this.for)),this.bindTrigger(this.triggerElement)}usesPointerTrigger(){return!this.disabled&&this.trigger!==`manual`}bindTrigger(e){e&&this.usesPointerTrigger()&&(e.id||=this.triggerId,e.setAttribute(`aria-describedby`,this.tooltipId),e.addEventListener(`mouseenter`,this.scheduleShow),e.addEventListener(`mouseleave`,this.scheduleHide),e.addEventListener(`focus`,this.scheduleShow),e.addEventListener(`blur`,this.scheduleHide))}unbindTrigger(e){e&&(e.removeAttribute(`aria-describedby`),e.removeEventListener(`mouseenter`,this.scheduleShow),e.removeEventListener(`mouseleave`,this.scheduleHide),e.removeEventListener(`focus`,this.scheduleShow),e.removeEventListener(`blur`,this.scheduleHide))}getAnchor(){return this.for?uo(this,this.for):this.triggerElement?this.triggerElement:null}prepareContentForEnter(e){e&&(e.classList.remove(`closing`),e.style.animation=`none`,e.getBoundingClientRect(),e.style.removeProperty(`animation`),e.style.removeProperty(`opacity`),e.style.removeProperty(`transform`))}showTooltip(e=!1){if(!this.getAnchor()||this.open&&this.contentAnimated&&!this.closing&&!e)return;this.open||this.dispatchEvent(new Ur);let t=++this.showGeneration;this.exitGeneration+=1,this.closing=!1,this.open=!0,this.contentAnimated=!1,this.prepareContentForEnter(this.popupElement?.getContentElement()),this.updateComplete.then(async()=>{t===this.showGeneration&&(await ii(this.popupElement,this.placement),t===this.showGeneration&&(this.syncPlacementAnimation(),this.prepareContentForEnter(this.popupElement?.getContentElement()),this.contentAnimated=!0,this.dispatchEvent(new Wr),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))))})}hideTooltip(e=!1,t=!1){if((this.open||this.closing||e)&&(!this.closing||e)){if(t){let e=new Gr(`api`);if(!this.dispatchEvent(e))return}if(this.showGeneration+=1,e){this.finishHide();return}if(!this.contentAnimated){this.finishHide();return}this.playExitAnimation()}}async playExitAnimation(){if(!this.open)return;let e=this.exitGeneration+1;this.exitGeneration=e;let t=this.popupElement?.getContentElement();this.closing=!0,this.contentAnimated=!1,t&&await this.waitForExitAnimation(t),e===this.exitGeneration&&this.finishHide()}waitForExitAnimation(e){return new Promise(t=>{let n=!1,r=()=>{n||(n=!0,e.removeEventListener(`animationend`,i),window.clearTimeout(a),e.classList.remove(`closing`),t())},i=t=>{t.target===e&&t.animationName.startsWith(`pk-tooltip-out`)&&r()};e.classList.add(`closing`),e.addEventListener(`animationend`,i);let a=window.setTimeout(r,200)})}finishHide(){let e=this.popupElement?.getContentElement();this.closing=!1,this.contentAnimated=!1,this.contentSide=null,this.open=!1,this.popupElement?.removeAttribute(`data-side`),this.prepareContentForEnter(e),this.dispatchEvent(new Kr),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}render(){let e=this.getAnchor();return S`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <pk-popup
                .active=${this.open||this.closing}
                .anchor=${e??``}
                .placement=${this.placement}
                .distance=${4}
                hover-bridge
                flip
                shift
            >
                <div
                    part="content"
                    class=${ft({content:!0,"pk-popup-content":!0,closing:this.closing})}
                    id=${this.tooltipId}
                    role="tooltip"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.contentAnimated&&!this.closing?``:C}
                    data-side=${this.contentSide??C}
                >
                    <slot @slotchange=${this.onBodySlotChange}></slot>
                    ${this.hasSlottedBody?C:this.content||C}
                </div>
            </pk-popup>
        `}};D([w({reflect:!0})],Od.prototype,`placement`,void 0),D([w({reflect:!0})],Od.prototype,`trigger`,void 0),D([w({type:Boolean,reflect:!0})],Od.prototype,`disabled`,void 0),D([w({type:Number,attribute:`open-delay`})],Od.prototype,`openDelay`,void 0),D([w({type:Number,attribute:`close-delay`})],Od.prototype,`closeDelay`,void 0),D([w()],Od.prototype,`content`,void 0),D([w({reflect:!0})],Od.prototype,`for`,void 0),D([E(`pk-popup`)],Od.prototype,`popupElement`,void 0),D([T()],Od.prototype,`open`,void 0),D([T()],Od.prototype,`contentAnimated`,void 0),D([T()],Od.prototype,`closing`,void 0),D([T()],Od.prototype,`contentSide`,void 0),D([T()],Od.prototype,`hasSlottedBody`,void 0),Od=D([Je(`pk-tooltip`)],Od);var kd=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.1 1.4 5 4.3l2.9-2.9.7.7L5.7 5l2.9 2.9-.7.7L5 5.7l-2.9 2.9-.7-.7L4.3 5 1.4 2.1z"/>
</svg>`,Ad=`pk-variable-tag-configure`,jd=e=>{let t=e;for(;t;){if(t instanceof HTMLElement&&t.localName.startsWith(`pk-tiptap`))return t;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return null},Md=(e,t)=>{let n=e.view.dom,r=jd(n),i=r&&`variableTagConfigure`in r?r.variableTagConfigure:null;typeof i==`function`&&i(t),(r??n).dispatchEvent(new CustomEvent(Ad,{bubbles:!0,composed:!0,detail:t}))};function Nd(e,t){let n=()=>{let e=typeof t==`function`?t():t;return typeof e==`number`?e:void 0};return{deleteNode:()=>{let t=n();if(typeof t!=`number`)return;let r=e.state.doc.nodeAt(t);r&&r.type.name===`variableTag`&&e.chain().focus().deleteRange({from:t,to:t+r.nodeSize}).run()},updateAttributes:t=>{let r=n();if(typeof r!=`number`)return;let i=e.state.doc.nodeAt(r);i&&i.type.name===`variableTag`&&e.chain().command(({tr:e,dispatch:n})=>(n&&e.setNodeMarkup(r,void 0,{...i.attrs,...t}),!0)).run()},resolvePos:n}}function Pd(){return e=>{let{editor:t,getPos:n}=e,{deleteNode:r,updateAttributes:i,resolvePos:a}=Nd(t,n),o=e.node,s=e=>{let t=!!e.unresolved,n=String(e.value??``),r=String(e.label||e.value||``);if(c.classList.toggle(`pk-variable-tag--unresolved`,t),t){c.dataset.unresolved=`true`;let e=n?`Unknown or missing reference — ${n}`:`Unknown or missing reference`;c.setAttribute(`aria-description`,e),l.setAttribute(`aria-invalid`,`true`)}else delete c.dataset.unresolved,c.removeAttribute(`aria-description`),l.removeAttribute(`aria-invalid`);l.textContent=r},c=document.createElement(`span`);c.className=`pk-variable-tag`,c.id=So(`pk-variable-tag`),c.setAttribute(`contenteditable`,`false`),c.setAttribute(`data-drag-handle`,``),c.dataset.label=String(o.attrs.label??``),c.dataset.variableValue=String(o.attrs.value??``);let l=document.createElement(`button`);l.type=`button`,l.className=`pk-variable-tag__label`,l.draggable=!1,c.append(l),s(o.attrs);let u=null,d=!1,f=0,p=()=>{let e=a();if(typeof e==`number`){let n=t.state.doc.nodeAt(e);if(n?.type.name===`variableTag`)return{...n.attrs}}return{...o.attrs}},m=()=>{if(!t.isEditable)return;let e=Date.now();e-f<300||(f=e,c.removeAttribute(`draggable`),Md(t,{editor:t,anchor:c,attrs:p(),getPos:a,updateAttributes:i,deleteNode:r}))};l.addEventListener(`pointerdown`,e=>{e.button===0&&(e.preventDefault(),e.stopPropagation(),m())}),l.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),m()});let h=e=>{if(e){if(u)return;u=document.createElement(`button`),u.type=`button`,u.className=`pk-variable-tag__remove`,u.setAttribute(`aria-label`,`Remove`),u.draggable=!1,u.innerHTML=kd,u.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation()}),u.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),r()}),c.append(u);return}u?.remove(),u=null};return h(t.isEditable),o.attrs.openOnInsert&&t.isEditable&&!d&&(d=!0,queueMicrotask(()=>{i({openOnInsert:!1}),m()})),{dom:c,stopEvent:e=>{let t=e.target;return t instanceof Element&&!!(t.closest(`.pk-variable-tag__label`)||t.closest(`.pk-variable-tag__remove`))},selectNode:()=>{c.classList.add(`ProseMirror-selectednode`),c.removeAttribute(`draggable`)},deselectNode:()=>{c.classList.remove(`ProseMirror-selectednode`),c.removeAttribute(`draggable`)},update(e){return e.type.name===`variableTag`&&(o=e,c.dataset.label=String(e.attrs.label??``),c.dataset.variableValue=String(e.attrs.value??``),s(e.attrs),h(t.isEditable),!0)}}}}var Fd=c`
    .pk-variable-tag {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        max-width: 100%;
        margin-inline: 1px;
        margin-block-start: -3px;
        padding: 0;
        border-radius: 2px;
        background: #5c6bc0;
        color: #fff;
        font-size: 11px;
        font-weight: 400;
        line-height: 1;
        white-space: nowrap;
        vertical-align: middle;
        overflow: hidden;
        cursor: default;
        box-sizing: border-box;
    }

    /* Unresolved / missing reference — muted grey (not alarm yellow). */
    .pk-variable-tag--unresolved {
        background: var(--pk-color-gray-100, #f3f4f6);
        color: var(--pk-color-gray-600, #4b5563);
        box-shadow: inset 0 0 0 1px var(--pk-color-gray-300, #d1d5db);
    }

    .pk-variable-tag--unresolved.ProseMirror-selectednode {
        box-shadow:
            inset 0 0 0 1px var(--pk-color-gray-400, #9ca3af),
            0 0 0 2px rgba(156, 163, 175, 0.45);
    }

    .pk-variable-tag.ProseMirror-selectednode {
        outline: none;
        box-shadow: 0 0 0 2px rgba(123, 140, 232, 0.5);
    }

    .pk-variable-tag__label {
        display: inline-flex;
        align-items: center;
        max-width: 220px;
        margin: 0;
        padding: 4px 5px;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: inherit;
        line-height: inherit;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        user-select: none;
    }

    .pk-variable-tag__remove {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        align-self: stretch;
        margin: 0;
        padding: 4px 5px 4px 4px;
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 0;
        appearance: none;
    }

    .pk-variable-tag__remove svg {
        display: block;
        width: 10px;
        height: 10px;
        pointer-events: none;
    }
`,Id=c`
    @layer pk-component {
        .ProseMirror {
            outline: none;
            min-height: 2rem;
            padding: 1rem;
            background: rgb(251, 252, 254);
            /* Craft CP body text (~gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            /* Match pk-input / body (14px). sm (13px) matched field instructions and looked undersized vs v1. */
            font-size: var(--pk-font-size-base);
            line-height: 1.5;
            white-space: pre-wrap;
            box-sizing: border-box;
        }

        .ProseMirror p {
            margin: 0 0 0.5rem;
        }

        .ProseMirror p:last-child {
            margin-bottom: 0;
        }

        .ProseMirror h1 {
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0 0 0.5rem;
        }

        .ProseMirror h2 {
            font-size: 1.125rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
        }

        .ProseMirror h3,
        .ProseMirror h4,
        .ProseMirror h5,
        .ProseMirror h6 {
            font-weight: 600;
            margin: 0 0 0.5rem;
        }

        .ProseMirror a {
            color: var(--pk-color-blue-600);
            text-decoration: underline;
            cursor: pointer;
        }

        .ProseMirror ul,
        .ProseMirror ol {
            margin: 0 0 0.5rem;
            padding-left: 1.25rem;
        }

        .ProseMirror blockquote {
            margin: 0 0 0.5rem;
            padding-left: 0.75rem;
            border-left: 3px solid var(--pk-color-gray-300);
            color: var(--pk-color-gray-600);
        }

        .ProseMirror code {
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
            background: var(--pk-color-gray-100);
            border-radius: 0.2rem;
            padding: 0.1rem 0.25rem;
        }

        .ProseMirror pre {
            margin: 0 0 0.5rem;
            padding: 0.75rem;
            background: var(--pk-color-gray-900);
            color: var(--pk-color-gray-50);
            border-radius: var(--pk-radius-md);
            overflow-x: auto;
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        ${Fd}
    }
`;c`
    @layer pk-component {
        .ProseMirror {
            outline: none;
            margin: 0;
            /* Match stock pk-input padding by default. Hosts can override density via
             * --pk-tiptap-input-* (light DOM cannot style .ProseMirror in the shadow tree).
             */
            padding-block: var(--pk-tiptap-input-padding-block, 6px);
            padding-inline-start: var(--pk-tiptap-input-padding-inline-start, 8px);
            padding-inline-end: var(--pk-tiptap-input-padding-inline-end, 8px);
            /* One-liner clip: padding + control line-height (v1 text-sm), not a fixed shell token. */
            height: var(--pk-tiptap-input-height, calc(var(--pk-input-control-line-height, 1.25rem) + 12px));
            max-height: var(--pk-tiptap-input-height, calc(var(--pk-input-control-line-height, 1.25rem) + 12px));
            background: var(--pk-input-bg);
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-tiptap-input-font-size, var(--pk-font-size-base));
            line-height: var(--pk-tiptap-input-line-height, var(--pk-input-control-line-height, 1.25rem));
            white-space: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            box-sizing: border-box;
            scrollbar-width: none;
        }

        .ProseMirror::-webkit-scrollbar {
            display: none;
        }

        /* OneLinerDocument is inline-only; keep p inline if a schema ever wraps text. */
        .ProseMirror p {
            margin: 0;
            display: inline;
            line-height: inherit;
        }

        /* Read-only display: no input padding/height box (v1 skipped chrome when readOnly).
         * Inherit color/weight so list name links (text-blue-600 font-bold) show through. */
        :host([readonly]) .ProseMirror {
            padding-block: 0;
            padding-inline: 0;
            height: auto;
            max-height: none;
            background: transparent;
            overflow: visible;
            white-space: normal;
            color: inherit;
            font-weight: inherit;
            font-size: inherit;
        }

        ${Fd}
    }
`,c`
    @layer pk-component {
        /* Inherit host color/size so light-DOM wrappers (warning banners, badges)
           can restyle read-only TipTap without piercing the shadow tree. */
        .ProseMirror {
            outline: none;
            color: inherit;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }

        .ProseMirror p {
            margin: 0;
        }
    }
`;function Ld(e){this.content=e}Ld.prototype={constructor:Ld,find:function(e){for(var t=0;t<this.content.length;t+=2)if(this.content[t]===e)return t;return-1},get:function(e){var t=this.find(e);return t==-1?void 0:this.content[t+1]},update:function(e,t,n){var r=n&&n!=e?this.remove(n):this,i=r.find(e),a=r.content.slice();return i==-1?a.push(n||e,t):(a[i+1]=t,n&&(a[i]=n)),new Ld(a)},remove:function(e){var t=this.find(e);if(t==-1)return this;var n=this.content.slice();return n.splice(t,2),new Ld(n)},addToStart:function(e,t){return new Ld([e,t].concat(this.remove(e).content))},addToEnd:function(e,t){var n=this.remove(e).content.slice();return n.push(e,t),new Ld(n)},addBefore:function(e,t,n){var r=this.remove(t),i=r.content.slice(),a=r.find(e);return i.splice(a==-1?i.length:a,0,t,n),new Ld(i)},forEach:function(e){for(var t=0;t<this.content.length;t+=2)e(this.content[t],this.content[t+1])},prepend:function(e){return e=Ld.from(e),e.size?new Ld(e.content.concat(this.subtract(e).content)):this},append:function(e){return e=Ld.from(e),e.size?new Ld(this.subtract(e).content.concat(e.content)):this},subtract:function(e){var t=this;e=Ld.from(e);for(var n=0;n<e.content.length;n+=2)t=t.remove(e.content[n]);return t},toObject:function(){var e={};return this.forEach(function(t,n){e[t]=n}),e},get size(){return this.content.length>>1}},Ld.from=function(e){if(e instanceof Ld)return e;var t=[];if(e)for(var n in e)t.push(n,e[n]);return new Ld(t)};function Rd(e,t,n){for(let r=0;;r++){if(r==e.childCount||r==t.childCount)return e.childCount==t.childCount?null:n;let i=e.child(r),a=t.child(r);if(i==a){n+=i.nodeSize;continue}if(!i.sameMarkup(a))return n;if(i.isText&&i.text!=a.text){let e=i.text,t=a.text,r=0;for(;e[r]==t[r];r++)n++;return r&&r<e.length&&r<t.length&&Vd(e.charCodeAt(r-1))&&Bd(e.charCodeAt(r))&&n--,n}if(i.content.size||a.content.size){let e=Rd(i.content,a.content,n+1);if(e!=null)return e}n+=i.nodeSize}}function zd(e,t,n,r){for(let i=e.childCount,a=t.childCount;;){if(i==0||a==0)return i==a?null:{a:n,b:r};let o=e.child(--i),s=t.child(--a),c=o.nodeSize;if(o==s){n-=c,r-=c;continue}if(!o.sameMarkup(s))return{a:n,b:r};if(o.isText&&o.text!=s.text){let e=o.text,t=s.text,i=e.length,a=t.length;for(;i>0&&a>0&&e[i-1]==t[a-1];)i--,a--,n--,r--;return i&&a&&i<e.length&&Vd(e.charCodeAt(i-1))&&Bd(e.charCodeAt(i))&&(n++,r++),{a:n,b:r}}if(o.content.size||s.content.size){let e=zd(o.content,s.content,n-1,r-1);if(e)return e}n-=c,r-=c}}function Bd(e){return e>=56320&&e<57344}function Vd(e){return e>=55296&&e<56320}var P=class e{constructor(e,t){if(this.content=e,this.size=t||0,t==null)for(let t=0;t<e.length;t++)this.size+=e[t].nodeSize}nodesBetween(e,t,n,r=0,i){for(let a=0,o=0;o<t;a++){let s=this.content[a],c=o+s.nodeSize;if(c>e&&n(s,r+o,i||null,a)!==!1&&s.content.size){let i=o+1;s.nodesBetween(Math.max(0,e-i),Math.min(s.content.size,t-i),n,r+i)}o=c}}descendants(e){this.nodesBetween(0,this.size,e)}textBetween(e,t,n,r){let i=``,a=!0;return this.nodesBetween(e,t,(o,s)=>{let c=o.isText?o.text.slice(Math.max(e,s)-s,t-s):o.isLeaf?r?typeof r==`function`?r(o):r:o.type.spec.leafText?o.type.spec.leafText(o):``:``;o.isBlock&&(o.isLeaf&&c||o.isTextblock)&&n&&(a?a=!1:i+=n),i+=c},0),i}append(t){if(!t.size)return this;if(!this.size)return t;let n=this.lastChild,r=t.firstChild,i=this.content.slice(),a=0;for(n.isText&&n.sameMarkup(r)&&(i[i.length-1]=n.withText(n.text+r.text),a=1);a<t.content.length;a++)i.push(t.content[a]);return new e(i,this.size+t.size)}cut(t,n=this.size){if(t==0&&n==this.size)return this;let r=[],i=0;if(n>t)for(let e=0,a=0;a<n;e++){let o=this.content[e],s=a+o.nodeSize;s>t&&((a<t||s>n)&&(o=o.isText?o.cut(Math.max(0,t-a),Math.min(o.text.length,n-a)):o.cut(Math.max(0,t-a-1),Math.min(o.content.size,n-a-1))),r.push(o),i+=o.nodeSize),a=s}return new e(r,i)}cutByIndex(t,n){return t==n?e.empty:t==0&&n==this.content.length?this:new e(this.content.slice(t,n))}replaceChild(t,n){let r=this.content[t];if(r==n)return this;let i=this.content.slice(),a=this.size+n.nodeSize-r.nodeSize;return i[t]=n,new e(i,a)}addToStart(t){return new e([t].concat(this.content),this.size+t.nodeSize)}addToEnd(t){return new e(this.content.concat(t),this.size+t.nodeSize)}eq(e){if(this.content.length!=e.content.length)return!1;for(let t=0;t<this.content.length;t++)if(!this.content[t].eq(e.content[t]))return!1;return!0}get firstChild(){return this.content.length?this.content[0]:null}get lastChild(){return this.content.length?this.content[this.content.length-1]:null}get childCount(){return this.content.length}child(e){let t=this.content[e];if(!t)throw RangeError(`Index `+e+` out of range for `+this);return t}maybeChild(e){return this.content[e]||null}forEach(e){for(let t=0,n=0;t<this.content.length;t++){let r=this.content[t];e(r,n,t),n+=r.nodeSize}}findDiffStart(e,t=0){return Rd(this,e,t)}findDiffEnd(e,t=this.size,n=e.size){return zd(this,e,t,n)}findIndex(e){if(e==0)return Ud(0,e);if(e==this.size)return Ud(this.content.length,e);if(e>this.size||e<0)throw RangeError(`Position ${e} outside of fragment (${this})`);for(let t=0,n=0;;t++){let r=this.child(t),i=n+r.nodeSize;if(i>=e)return i==e?Ud(t+1,i):Ud(t,n);n=i}}toString(){return`<`+this.toStringInner()+`>`}toStringInner(){return this.content.join(`, `)}toJSON(){return this.content.length?this.content.map(e=>e.toJSON()):null}static fromJSON(t,n){if(!n)return e.empty;if(!Array.isArray(n))throw RangeError(`Invalid input for Fragment.fromJSON`);return e.fromArray(n.map(t.nodeFromJSON))}static fromArray(t){if(!t.length)return e.empty;let n,r=0;for(let e=0;e<t.length;e++){let i=t[e];r+=i.nodeSize,e&&i.isText&&t[e-1].sameMarkup(i)?(n||=t.slice(0,e),n[n.length-1]=i.withText(n[n.length-1].text+i.text)):n&&n.push(i)}return new e(n||t,r)}static from(t){if(!t)return e.empty;if(t instanceof e)return t;if(Array.isArray(t))return this.fromArray(t);if(t.attrs)return new e([t],t.nodeSize);throw RangeError(`Can not convert `+t+` to a Fragment`+(t.nodesBetween?` (looks like multiple versions of prosemirror-model were loaded)`:``))}};P.empty=new P([],0);var Hd={index:0,offset:0};function Ud(e,t){return Hd.index=e,Hd.offset=t,Hd}function Wd(e,t){if(e===t)return!0;if(!(e&&typeof e==`object`)||!(t&&typeof t==`object`))return!1;let n=Array.isArray(e);if(Array.isArray(t)!=n)return!1;if(n){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!Wd(e[n],t[n]))return!1}else{for(let n in e)if(!(n in t)||!Wd(e[n],t[n]))return!1;for(let n in t)if(!(n in e))return!1}return!0}var F=class e{constructor(e,t){this.type=e,this.attrs=t}addToSet(e){let t,n=!1;for(let r=0;r<e.length;r++){let i=e[r];if(this.eq(i))return e;if(this.type.excludes(i.type))t||=e.slice(0,r);else if(i.type.excludes(this.type))return e;else!n&&i.type.rank>this.type.rank&&(t||=e.slice(0,r),t.push(this),n=!0),t&&t.push(i)}return t||=e.slice(),n||t.push(this),t}removeFromSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return e.slice(0,t).concat(e.slice(t+1));return e}isInSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return!0;return!1}eq(e){return this==e||this.type==e.type&&Wd(this.attrs,e.attrs)}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return e}static fromJSON(e,t){if(!t)throw RangeError(`Invalid input for Mark.fromJSON`);let n=e.marks[t.type];if(!n)throw RangeError(`There is no mark type ${t.type} in this schema`);return n.create(t.attrs)}static sameSet(e,t){if(e==t)return!0;if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].eq(t[n]))return!1;return!0}static setFrom(t){if(!t||Array.isArray(t)&&t.length==0)return e.none;if(t instanceof e)return[t];let n=t.slice();return n.sort((e,t)=>e.type.rank-t.type.rank),n}};F.none=[];var Gd=class extends Error{},I=class e{constructor(e,t,n){this.content=e,this.openStart=t,this.openEnd=n}get size(){return this.content.size-this.openStart-this.openEnd}insertAt(t,n){let r=qd(this.content,t+this.openStart,n,this.openStart+1,this.openEnd+1);return r&&new e(r,this.openStart,this.openEnd)}removeBetween(t,n){return new e(Kd(this.content,t+this.openStart,n+this.openStart),this.openStart,this.openEnd)}eq(e){return this.content.eq(e.content)&&this.openStart==e.openStart&&this.openEnd==e.openEnd}toString(){return this.content+`(`+this.openStart+`,`+this.openEnd+`)`}toJSON(){if(!this.content.size)return null;let e={content:this.content.toJSON()};return this.openStart>0&&(e.openStart=this.openStart),this.openEnd>0&&(e.openEnd=this.openEnd),e}static fromJSON(t,n){if(!n)return e.empty;let r=n.openStart||0,i=n.openEnd||0;if(typeof r!=`number`||typeof i!=`number`)throw RangeError(`Invalid input for Slice.fromJSON`);return new e(P.fromJSON(t,n.content),r,i)}static maxOpen(t,n=!0){let r=0,i=0;for(let e=t.firstChild;e&&!e.isLeaf&&(n||!e.type.spec.isolating);e=e.firstChild)r++;for(let e=t.lastChild;e&&!e.isLeaf&&(n||!e.type.spec.isolating);e=e.lastChild)i++;return new e(t,r,i)}};I.empty=new I(P.empty,0,0);function Kd(e,t,n){let{index:r,offset:i}=e.findIndex(t),a=e.maybeChild(r),{index:o,offset:s}=e.findIndex(n);if(i==t||a.isText){if(s!=n&&!e.child(o).isText)throw RangeError(`Removing non-flat range`);return e.cut(0,t).append(e.cut(n))}if(r!=o)throw RangeError(`Removing non-flat range`);return e.replaceChild(r,a.copy(Kd(a.content,t-i-1,n-i-1)))}function qd(e,t,n,r,i,a){let{index:o,offset:s}=e.findIndex(t),c=e.maybeChild(o);if(s==t||c.isText)return a&&r<=0&&i<=0&&!a.canReplace(o,o,n)?null:e.cut(0,t).append(n).append(e.cut(t));let l=qd(c.content,t-s-1,n,o==0?r-1:0,o==e.childCount-1?i-1:0,c);return l&&e.replaceChild(o,c.copy(l))}function Jd(e,t,n){if(n.openStart>e.depth)throw new Gd(`Inserted content deeper than insertion position`);if(e.depth-n.openStart!=t.depth-n.openEnd)throw new Gd(`Inconsistent open depths`);return Yd(e,t,n,0)}function Yd(e,t,n,r){let i=e.index(r),a=e.node(r);if(i==t.index(r)&&r<e.depth-n.openStart){let o=Yd(e,t,n,r+1);return a.copy(a.content.replaceChild(i,o))}if(!n.content.size)return ef(a,nf(e,t,r));if(!n.openStart&&!n.openEnd&&e.depth==r&&t.depth==r){let r=e.parent,i=r.content;return ef(r,i.cut(0,e.parentOffset).append(n.content).append(i.cut(t.parentOffset)))}{let{start:i,end:o}=rf(n,e);return ef(a,tf(e,i,o,t,r))}}function Xd(e,t){if(!t.type.compatibleContent(e.type))throw new Gd(`Cannot join `+t.type.name+` onto `+e.type.name)}function Zd(e,t,n){let r=e.node(n);return Xd(r,t.node(n)),r}function Qd(e,t){let n=t.length-1;n>=0&&e.isText&&e.sameMarkup(t[n])?t[n]=e.withText(t[n].text+e.text):t.push(e)}function $d(e,t,n,r){let i=(t||e).node(n),a=0,o=t?t.index(n):i.childCount;e&&(a=e.index(n),e.depth>n?a++:e.textOffset&&(Qd(e.nodeAfter,r),a++));for(let e=a;e<o;e++)Qd(i.child(e),r);t&&t.depth==n&&t.textOffset&&Qd(t.nodeBefore,r)}function ef(e,t){if(!e.type.validContent(t))throw new Gd(`Invalid content for node `+e.type.name);return e.copy(t)}function tf(e,t,n,r,i){let a=e.depth>i&&Zd(e,t,i+1),o=r.depth>i&&Zd(n,r,i+1),s=[];return $d(null,e,i,s),a&&o&&t.index(i)==n.index(i)?(Xd(a,o),Qd(ef(a,tf(e,t,n,r,i+1)),s)):(a&&Qd(ef(a,nf(e,t,i+1)),s),$d(t,n,i,s),o&&Qd(ef(o,nf(n,r,i+1)),s)),$d(r,null,i,s),new P(s)}function nf(e,t,n){let r=[];return $d(null,e,n,r),e.depth>n&&Qd(ef(Zd(e,t,n+1),nf(e,t,n+1)),r),$d(t,null,n,r),new P(r)}function rf(e,t){let n=t.depth-e.openStart,r=t.node(n).copy(e.content);for(let e=n-1;e>=0;e--)r=t.node(e).copy(P.from(r));return{start:r.resolveNoCache(e.openStart+n),end:r.resolveNoCache(r.content.size-e.openEnd-n)}}var af=class e{constructor(e,t,n){this.pos=e,this.path=t,this.parentOffset=n,this.depth=t.length/3-1}resolveDepth(e){return e==null?this.depth:e<0?this.depth+e:e}get parent(){return this.node(this.depth)}get doc(){return this.node(0)}node(e){return this.path[this.resolveDepth(e)*3]}index(e){return this.path[this.resolveDepth(e)*3+1]}indexAfter(e){return e=this.resolveDepth(e),this.index(e)+(e==this.depth&&!this.textOffset?0:1)}start(e){return e=this.resolveDepth(e),e==0?0:this.path[e*3-1]+1}end(e){return e=this.resolveDepth(e),this.start(e)+this.node(e).content.size}before(e){if(e=this.resolveDepth(e),!e)throw RangeError(`There is no position before the top-level node`);return e==this.depth+1?this.pos:this.path[e*3-1]}after(e){if(e=this.resolveDepth(e),!e)throw RangeError(`There is no position after the top-level node`);return e==this.depth+1?this.pos:this.path[e*3-1]+this.path[e*3].nodeSize}get textOffset(){return this.pos-this.path[this.path.length-1]}get nodeAfter(){let e=this.parent,t=this.index(this.depth);if(t==e.childCount)return null;let n=this.pos-this.path[this.path.length-1],r=e.child(t);return n?e.child(t).cut(n):r}get nodeBefore(){let e=this.index(this.depth),t=this.pos-this.path[this.path.length-1];return t?this.parent.child(e).cut(0,t):e==0?null:this.parent.child(e-1)}posAtIndex(e,t){t=this.resolveDepth(t);let n=this.path[t*3],r=t==0?0:this.path[t*3-1]+1;for(let t=0;t<e;t++)r+=n.child(t).nodeSize;return r}marks(){let e=this.parent,t=this.index();if(e.content.size==0)return F.none;if(this.textOffset)return e.child(t).marks;let n=e.maybeChild(t-1),r=e.maybeChild(t);if(!n){let e=n;n=r,r=e}let i=n.marks;for(var a=0;a<i.length;a++)i[a].type.spec.inclusive===!1&&(!r||!i[a].isInSet(r.marks))&&(i=i[a--].removeFromSet(i));return i}marksAcross(e){let t=this.parent.maybeChild(this.index());if(!t||!t.isInline)return null;let n=t.marks,r=e.parent.maybeChild(e.index());for(var i=0;i<n.length;i++)n[i].type.spec.inclusive===!1&&(!r||!n[i].isInSet(r.marks))&&(n=n[i--].removeFromSet(n));return n}sharedDepth(e){for(let t=this.depth;t>0;t--)if(this.start(t)<=e&&this.end(t)>=e)return t;return 0}blockRange(e=this,t){if(e.pos<this.pos)return e.blockRange(this);for(let n=this.depth-(this.parent.inlineContent||this.pos==e.pos?1:0);n>=0;n--)if(e.pos<=this.end(n)&&(!t||t(this.node(n))))return new lf(this,e,n);return null}sameParent(e){return this.pos-this.parentOffset==e.pos-e.parentOffset}max(e){return e.pos>this.pos?e:this}min(e){return e.pos<this.pos?e:this}toString(){let e=``;for(let t=1;t<=this.depth;t++)e+=(e?`/`:``)+this.node(t).type.name+`_`+this.index(t-1);return e+`:`+this.parentOffset}static resolve(t,n){if(!(n>=0&&n<=t.content.size))throw RangeError(`Position `+n+` out of range`);let r=[],i=0,a=n;for(let e=t;;){let{index:t,offset:n}=e.content.findIndex(a),o=a-n;if(r.push(e,t,i+n),!o||(e=e.child(t),e.isText))break;a=o-1,i+=n+1}return new e(n,r,a)}static resolveCached(t,n){let r=cf.get(t);if(r)for(let e=0;e<r.elts.length;e++){let t=r.elts[e];if(t.pos==n)return t}else cf.set(t,r=new of);let i=r.elts[r.i]=e.resolve(t,n);return r.i=(r.i+1)%sf,i}},of=class{constructor(){this.elts=[],this.i=0}},sf=12,cf=new WeakMap,lf=class{constructor(e,t,n){this.$from=e,this.$to=t,this.depth=n}get start(){return this.$from.before(this.depth+1)}get end(){return this.$to.after(this.depth+1)}get parent(){return this.$from.node(this.depth)}get startIndex(){return this.$from.index(this.depth)}get endIndex(){return this.$to.indexAfter(this.depth)}},uf=Object.create(null),df=class e{constructor(e,t,n,r=F.none){this.type=e,this.attrs=t,this.marks=r,this.content=n||P.empty}get children(){return this.content.content}get nodeSize(){return this.isLeaf?1:2+this.content.size}get childCount(){return this.content.childCount}child(e){return this.content.child(e)}maybeChild(e){return this.content.maybeChild(e)}forEach(e){this.content.forEach(e)}nodesBetween(e,t,n,r=0){this.content.nodesBetween(e,t,n,r,this)}descendants(e){this.nodesBetween(0,this.content.size,e)}get textContent(){return this.isLeaf&&this.type.spec.leafText?this.type.spec.leafText(this):this.textBetween(0,this.content.size,``)}textBetween(e,t,n,r){return this.content.textBetween(e,t,n,r)}get firstChild(){return this.content.firstChild}get lastChild(){return this.content.lastChild}eq(e){return this==e||this.sameMarkup(e)&&this.content.eq(e.content)}sameMarkup(e){return this.hasMarkup(e.type,e.attrs,e.marks)}hasMarkup(e,t,n){return this.type==e&&Wd(this.attrs,t||e.defaultAttrs||uf)&&F.sameSet(this.marks,n||F.none)}copy(t=null){return t==this.content?this:new e(this.type,this.attrs,t,this.marks)}mark(t){return t==this.marks?this:new e(this.type,this.attrs,this.content,t)}cut(e,t=this.content.size){return e==0&&t==this.content.size?this:this.copy(this.content.cut(e,t))}slice(e,t=this.content.size,n=!1){if(e==t)return I.empty;let r=this.resolve(e),i=this.resolve(t),a=n?0:r.sharedDepth(t),o=r.start(a);return new I(r.node(a).content.cut(r.pos-o,i.pos-o),r.depth-a,i.depth-a)}replace(e,t,n){return Jd(this.resolve(e),this.resolve(t),n)}nodeAt(e){for(let t=this;;){let{index:n,offset:r}=t.content.findIndex(e);if(t=t.maybeChild(n),!t)return null;if(r==e||t.isText)return t;e-=r+1}}childAfter(e){let{index:t,offset:n}=this.content.findIndex(e);return{node:this.content.maybeChild(t),index:t,offset:n}}childBefore(e){if(e==0)return{node:null,index:0,offset:0};let{index:t,offset:n}=this.content.findIndex(e);if(n<e)return{node:this.content.child(t),index:t,offset:n};let r=this.content.child(t-1);return{node:r,index:t-1,offset:n-r.nodeSize}}resolve(e){return af.resolveCached(this,e)}resolveNoCache(e){return af.resolve(this,e)}rangeHasMark(e,t,n){let r=!1;return t>e&&this.nodesBetween(e,t,e=>(n.isInSet(e.marks)&&(r=!0),!r)),r}get isBlock(){return this.type.isBlock}get isTextblock(){return this.type.isTextblock}get inlineContent(){return this.type.inlineContent}get isInline(){return this.type.isInline}get isText(){return this.type.isText}get isLeaf(){return this.type.isLeaf}get isAtom(){return this.type.isAtom}toString(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);let e=this.type.name;return this.content.size&&(e+=`(`+this.content.toStringInner()+`)`),pf(this.marks,e)}contentMatchAt(e){let t=this.type.contentMatch.matchFragment(this.content,0,e);if(!t)throw Error(`Called contentMatchAt on a node with invalid content`);return t}canReplace(e,t,n=P.empty,r=0,i=n.childCount){let a=this.contentMatchAt(e).matchFragment(n,r,i),o=a&&a.matchFragment(this.content,t);if(!o||!o.validEnd)return!1;for(let e=r;e<i;e++)if(!this.type.allowsMarks(n.child(e).marks))return!1;return!0}canReplaceWith(e,t,n,r){if(r&&!this.type.allowsMarks(r))return!1;let i=this.contentMatchAt(e).matchType(n),a=i&&i.matchFragment(this.content,t);return a?a.validEnd:!1}canAppend(e){return e.content.size?this.canReplace(this.childCount,this.childCount,e.content):this.type.compatibleContent(e.type)}check(){this.type.checkContent(this.content),mf(this.type.attrs,this.attrs,`node`,this.type.name);let e=F.none;for(let t=0;t<this.marks.length;t++){let n=this.marks[t];mf(n.type.attrs,n.attrs,`mark`,n.type.name),e=n.addToSet(e)}if(!F.sameSet(e,this.marks))throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(e=>e.type.name)}`);this.content.forEach(e=>e.check())}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return this.content.size&&(e.content=this.content.toJSON()),this.marks.length&&(e.marks=this.marks.map(e=>e.toJSON())),e}static fromJSON(e,t){if(!t)throw RangeError(`Invalid input for Node.fromJSON`);let n;if(t.marks){if(!Array.isArray(t.marks))throw RangeError(`Invalid mark data for Node.fromJSON`);n=t.marks.map(e.markFromJSON)}if(t.type==`text`){if(typeof t.text!=`string`)throw RangeError(`Invalid text node in JSON`);return e.text(t.text,n)}let r=P.fromJSON(e,t.content);return e.nodeType(t.type).create(t.attrs,r,n)}};df.prototype.text=void 0;var ff=class e extends df{constructor(e,t,n,r){if(super(e,t,null,r),!n)throw RangeError(`Empty text nodes are not allowed`);this.text=n}toString(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):pf(this.marks,JSON.stringify(this.text))}get textContent(){return this.text}textBetween(e,t){return this.text.slice(e,t)}get nodeSize(){return this.text.length}mark(t){return t==this.marks?this:new e(this.type,this.attrs,this.text,t)}withText(t){return t==this.text?this:new e(this.type,this.attrs,t,this.marks)}cut(e=0,t=this.text.length){return e==0&&t==this.text.length?this:this.withText(this.text.slice(e,t))}eq(e){return this.sameMarkup(e)&&this.text==e.text}toJSON(){let e=super.toJSON();return e.text=this.text,e}};function pf(e,t){for(let n=e.length-1;n>=0;n--)t=e[n].type.name+`(`+t+`)`;return t}function mf(e,t,n,r){for(let i in t)if(!(i in e))throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);for(let n in e)e[n].validate&&e[n].validate(t[n])}var hf=class e{constructor(e){this.validEnd=e,this.next=[],this.wrapCache=[]}static parse(t,n){let r=new gf(t,n);if(r.next==null)return e.empty;let i=_f(r);r.next&&r.err(`Unexpected trailing text`);let a=Df(wf(i));return Of(a,r),a}matchType(e){for(let t=0;t<this.next.length;t++)if(this.next[t].type==e)return this.next[t].next;return null}matchFragment(e,t=0,n=e.childCount){let r=this;for(let i=t;r&&i<n;i++)r=r.matchType(e.child(i).type);return r}get inlineContent(){return this.next.length!=0&&this.next[0].type.isInline}get defaultType(){for(let e=0;e<this.next.length;e++){let{type:t}=this.next[e];if(!(t.isText||t.hasRequiredAttrs()))return t}return null}compatible(e){for(let t=0;t<this.next.length;t++)for(let n=0;n<e.next.length;n++)if(this.next[t].type==e.next[n].type)return!0;return!1}fillBefore(e,t=!1,n=0){let r=[this];function i(a,o){let s=a.matchFragment(e,n);if(s&&(!t||s.validEnd))return P.from(o.map(e=>e.createAndFill()));for(let e=0;e<a.next.length;e++){let{type:t,next:n}=a.next[e];if(!(t.isText||t.hasRequiredAttrs())&&r.indexOf(n)==-1){r.push(n);let e=i(n,o.concat(t));if(e)return e}}return null}return i(this,[])}findWrapping(e){for(let t=0;t<this.wrapCache.length;t+=2)if(this.wrapCache[t]==e)return this.wrapCache[t+1];let t=this.computeWrapping(e);return this.wrapCache.push(e,t),t}computeWrapping(e){let t=Object.create(null),n=[{match:this,type:null,via:null}];for(;n.length;){let r=n.shift(),i=r.match;if(i.matchType(e)){let e=[];for(let t=r;t.type;t=t.via)e.push(t.type);return e.reverse()}for(let e=0;e<i.next.length;e++){let{type:a,next:o}=i.next[e];!a.isLeaf&&!a.hasRequiredAttrs()&&!(a.name in t)&&(!r.type||o.validEnd)&&(n.push({match:a.contentMatch,type:a,via:r}),t[a.name]=!0)}}return null}get edgeCount(){return this.next.length}edge(e){if(e>=this.next.length)throw RangeError(`There's no ${e}th edge in this content match`);return this.next[e]}toString(){let e=[];function t(n){e.push(n);for(let r=0;r<n.next.length;r++)e.indexOf(n.next[r].next)==-1&&t(n.next[r].next)}return t(this),e.map((t,n)=>{let r=n+(t.validEnd?`*`:` `)+` `;for(let n=0;n<t.next.length;n++)r+=(n?`, `:``)+t.next[n].type.name+`->`+e.indexOf(t.next[n].next);return r}).join(`
`)}};hf.empty=new hf(!0);var gf=class{constructor(e,t){this.string=e,this.nodeTypes=t,this.inline=null,this.pos=0,this.tokens=e.split(/\s*(?=\b|\W|$)/),this.tokens[this.tokens.length-1]==``&&this.tokens.pop(),this.tokens[0]==``&&this.tokens.shift()}get next(){return this.tokens[this.pos]}eat(e){return this.next==e&&(this.pos++||!0)}err(e){throw SyntaxError(e+` (in content expression '`+this.string+`')`)}};function _f(e){let t=[];do t.push(vf(e));while(e.eat(`|`));return t.length==1?t[0]:{type:`choice`,exprs:t}}function vf(e){let t=[];do t.push(yf(e));while(e.next&&e.next!=`)`&&e.next!=`|`);return t.length==1?t[0]:{type:`seq`,exprs:t}}function yf(e){let t=Cf(e);for(;;)if(e.eat(`+`))t={type:`plus`,expr:t};else if(e.eat(`*`))t={type:`star`,expr:t};else if(e.eat(`?`))t={type:`opt`,expr:t};else if(e.eat(`{`))t=xf(e,t);else break;return t}function bf(e){/\D/.test(e.next)&&e.err(`Expected number, got '`+e.next+`'`);let t=Number(e.next);return e.pos++,t}function xf(e,t){let n=bf(e),r=n;return e.eat(`,`)&&(r=e.next==`}`?-1:bf(e)),e.eat(`}`)||e.err(`Unclosed braced range`),{type:`range`,min:n,max:r,expr:t}}function Sf(e,t){let n=e.nodeTypes,r=n[t];if(r)return[r];let i=[];for(let e in n){let r=n[e];r.isInGroup(t)&&i.push(r)}return i.length==0&&e.err(`No node type or group '`+t+`' found`),i}function Cf(e){if(e.eat(`(`)){let t=_f(e);return e.eat(`)`)||e.err(`Missing closing paren`),t}if(/\W/.test(e.next))e.err(`Unexpected token '`+e.next+`'`);else{let t=Sf(e,e.next).map(t=>(e.inline==null?e.inline=t.isInline:e.inline!=t.isInline&&e.err(`Mixing inline and block content`),{type:`name`,value:t}));return e.pos++,t.length==1?t[0]:{type:`choice`,exprs:t}}}function wf(e){let t=[[]];return i(a(e,0),n()),t;function n(){return t.push([])-1}function r(e,n,r){let i={term:r,to:n};return t[e].push(i),i}function i(e,t){e.forEach(e=>e.to=t)}function a(e,t){if(e.type==`choice`)return e.exprs.reduce((e,n)=>e.concat(a(n,t)),[]);if(e.type==`seq`)for(let r=0;;r++){let o=a(e.exprs[r],t);if(r==e.exprs.length-1)return o;i(o,t=n())}else if(e.type==`star`){let o=n();return r(t,o),i(a(e.expr,o),o),[r(o)]}else if(e.type==`plus`){let o=n();return i(a(e.expr,t),o),i(a(e.expr,o),o),[r(o)]}else if(e.type==`opt`)return[r(t)].concat(a(e.expr,t));else if(e.type==`range`){let o=t;for(let t=0;t<e.min;t++){let t=n();i(a(e.expr,o),t),o=t}if(e.max==-1)i(a(e.expr,o),o);else for(let t=e.min;t<e.max;t++){let t=n();r(o,t),i(a(e.expr,o),t),o=t}return[r(o)]}else if(e.type==`name`)return[r(t,void 0,e.value)];else throw Error(`Unknown expr type`)}}function Tf(e,t){return t-e}function Ef(e,t){let n=[];return r(t),n.sort(Tf);function r(t){let i=e[t];if(i.length==1&&!i[0].term)return r(i[0].to);n.push(t);for(let e=0;e<i.length;e++){let{term:t,to:a}=i[e];!t&&n.indexOf(a)==-1&&r(a)}}}function Df(e){let t=Object.create(null);return n(Ef(e,0));function n(r){let i=[];r.forEach(t=>{e[t].forEach(({term:t,to:n})=>{if(!t)return;let r;for(let e=0;e<i.length;e++)i[e][0]==t&&(r=i[e][1]);Ef(e,n).forEach(e=>{r||i.push([t,r=[]]),r.indexOf(e)==-1&&r.push(e)})})});let a=t[r.join(`,`)]=new hf(r.indexOf(e.length-1)>-1);for(let e=0;e<i.length;e++){let r=i[e][1].sort(Tf);a.next.push({type:i[e][0],next:t[r.join(`,`)]||n(r)})}return a}}function Of(e,t){for(let n=0,r=[e];n<r.length;n++){let e=r[n],i=!e.validEnd,a=[];for(let t=0;t<e.next.length;t++){let{type:n,next:o}=e.next[t];a.push(n.name),i&&!(n.isText||n.hasRequiredAttrs())&&(i=!1),r.indexOf(o)==-1&&r.push(o)}i&&t.err(`Only non-generatable nodes (`+a.join(`, `)+`) in a required position (see https://prosemirror.net/docs/guide/#generatable)`)}}function kf(e){let t=Object.create(null);for(let n in e){let r=e[n];if(!r.hasDefault)return null;t[n]=r.default}return t}function Af(e,t){let n=Object.create(null);for(let r in e){let i=e[r],a=t&&t[r];if(a===void 0){if(i.hasDefault)a=i.default;else throw RangeError(`No value supplied for attribute `+r)}else i.validate&&i.validate(a);n[r]=a}return n}function jf(e,t){let n=Object.create(null);if(t)for(let r in t)n[r]=new Pf(e,r,t[r]);return n}var Mf=class e{constructor(e,t,n){this.name=e,this.schema=t,this.spec=n,this.markSet=null,this.groups=n.group?n.group.split(` `):[],this.attrs=jf(e,n.attrs),this.defaultAttrs=kf(this.attrs),this.contentMatch=null,this.inlineContent=null,this.isBlock=!(n.inline||e==`text`),this.isText=e==`text`}get isInline(){return!this.isBlock}get isTextblock(){return this.isBlock&&this.inlineContent}get isLeaf(){return this.contentMatch==hf.empty}get isAtom(){return this.isLeaf||!!this.spec.atom}isInGroup(e){return this.groups.indexOf(e)>-1}get whitespace(){return this.spec.whitespace||(this.spec.code?`pre`:`normal`)}hasRequiredAttrs(){for(let e in this.attrs)if(this.attrs[e].isRequired)return!0;return!1}compatibleContent(e){return this==e||this.contentMatch.compatible(e.contentMatch)}computeAttrs(e){return!e&&this.defaultAttrs?this.defaultAttrs:Af(this.attrs,e)}create(e=null,t,n){if(this.isText)throw Error(`NodeType.create can't construct text nodes`);return new df(this,this.computeAttrs(e),P.from(t),F.setFrom(n))}createChecked(e=null,t,n){return t=P.from(t),this.checkContent(t),new df(this,this.computeAttrs(e),t,F.setFrom(n))}createAndFill(e=null,t,n){if(e=this.computeAttrs(e),t=P.from(t),t.size){let e=this.contentMatch.fillBefore(t);if(!e)return null;t=e.append(t)}let r=this.contentMatch.matchFragment(t),i=r&&r.fillBefore(P.empty,!0);return i?new df(this,e,t.append(i),F.setFrom(n)):null}validContent(e){let t=this.contentMatch.matchFragment(e);if(!t||!t.validEnd)return!1;for(let t=0;t<e.childCount;t++)if(!this.allowsMarks(e.child(t).marks))return!1;return!0}checkContent(e){if(!this.validContent(e))throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)}checkAttrs(e){}allowsMarkType(e){return this.markSet==null||this.markSet.indexOf(e)>-1}allowsMarks(e){if(this.markSet==null)return!0;for(let t=0;t<e.length;t++)if(!this.allowsMarkType(e[t].type))return!1;return!0}allowedMarks(e){if(this.markSet==null)return e;let t;for(let n=0;n<e.length;n++)this.allowsMarkType(e[n].type)?t&&t.push(e[n]):t||=e.slice(0,n);return t?t.length?t:F.none:e}static compile(t,n){let r=Object.create(null);t.forEach((t,i)=>r[t]=new e(t,n,i));let i=n.spec.topNode||`doc`;if(!r[i])throw RangeError(`Schema is missing its top node type ('`+i+`')`);if(!r.text)throw RangeError(`Every schema needs a 'text' type`);for(let e in r.text.attrs)throw RangeError(`The text node type should not have attributes`);return r}};function Nf(e,t,n){let r=n.split(`|`);return n=>{let i=n===null?`null`:typeof n;if(r.indexOf(i)<0)throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`)}}var Pf=class{constructor(e,t,n){this.hasDefault=Object.prototype.hasOwnProperty.call(n,`default`),this.default=n.default,this.validate=typeof n.validate==`string`?Nf(e,t,n.validate):n.validate}get isRequired(){return!this.hasDefault}},Ff=class e{constructor(e,t,n,r){this.name=e,this.rank=t,this.schema=n,this.spec=r,this.attrs=jf(e,r.attrs),this.excluded=null;let i=kf(this.attrs);this.instance=i?new F(this,i):null}create(e=null){return!e&&this.instance?this.instance:new F(this,Af(this.attrs,e))}static compile(t,n){let r=Object.create(null),i=0;return t.forEach((t,a)=>r[t]=new e(t,i++,n,a)),r}removeFromSet(e){for(var t=0;t<e.length;t++)e[t].type==this&&(e=e.slice(0,t).concat(e.slice(t+1)),t--);return e}isInSet(e){for(let t=0;t<e.length;t++)if(e[t].type==this)return e[t]}excludes(e){return this.excluded.indexOf(e)>-1}},If=class{constructor(e){this.linebreakReplacement=null,this.cached=Object.create(null);let t=this.spec={};for(let n in e)t[n]=e[n];t.nodes=Ld.from(e.nodes),t.marks=Ld.from(e.marks||{}),this.nodes=Mf.compile(this.spec.nodes,this),this.marks=Ff.compile(this.spec.marks,this);let n=Object.create(null);for(let e in this.nodes){if(e in this.marks)throw RangeError(e+` can not be both a node and a mark`);let t=this.nodes[e],r=t.spec.content||``,i=t.spec.marks;if(t.contentMatch=n[r]||(n[r]=hf.parse(r,this.nodes)),t.inlineContent=t.contentMatch.inlineContent,t.spec.linebreakReplacement){if(this.linebreakReplacement)throw RangeError(`Multiple linebreak nodes defined`);if(!t.isInline||!t.isLeaf)throw RangeError(`Linebreak replacement nodes must be inline leaf nodes`);this.linebreakReplacement=t}t.markSet=i==`_`?null:i?Lf(this,i.split(` `)):i==``||!t.inlineContent?[]:null}for(let e in this.marks){let t=this.marks[e],n=t.spec.excludes;t.excluded=n==null?[t]:n==``?[]:Lf(this,n.split(` `))}this.nodeFromJSON=e=>df.fromJSON(this,e),this.markFromJSON=e=>F.fromJSON(this,e),this.topNodeType=this.nodes[this.spec.topNode||`doc`],this.cached.wrappings=Object.create(null)}node(e,t=null,n,r){if(typeof e==`string`)e=this.nodeType(e);else if(!(e instanceof Mf))throw RangeError(`Invalid node type: `+e);else if(e.schema!=this)throw RangeError(`Node type from different schema used (`+e.name+`)`);return e.createChecked(t,n,r)}text(e,t){let n=this.nodes.text;return new ff(n,n.defaultAttrs,e,F.setFrom(t))}mark(e,t){return typeof e==`string`&&(e=this.marks[e]),e.create(t)}nodeType(e){let t=this.nodes[e];if(!t)throw RangeError(`Unknown node type: `+e);return t}};function Lf(e,t){let n=[];for(let r=0;r<t.length;r++){let i=t[r],a=e.marks[i],o=a;if(a)n.push(a);else for(let t in e.marks){let r=e.marks[t];(i==`_`||r.spec.group&&r.spec.group.split(` `).indexOf(i)>-1)&&n.push(o=r)}if(!o)throw SyntaxError(`Unknown mark type: '`+t[r]+`'`)}return n}function Rf(e){return e.tag!=null}function zf(e){return e.style!=null}var Bf=class e{constructor(e,t){this.schema=e,this.rules=t,this.tags=[],this.styles=[];let n=this.matchedStyles=[];t.forEach(e=>{if(Rf(e))this.tags.push(e);else if(zf(e)){let t=/[^=]*/.exec(e.style)[0];n.indexOf(t)<0&&n.push(t),this.styles.push(e)}}),this.normalizeLists=!this.tags.some(t=>{if(!/^(ul|ol)\b/.test(t.tag)||!t.node)return!1;let n=e.nodes[t.node];return n.contentMatch.matchType(n)})}parse(e,t={}){let n=new Yf(this,t,!1);return n.addAll(e,F.none,t.from,t.to),n.finish()}parseSlice(e,t={}){let n=new Yf(this,t,!0);return n.addAll(e,F.none,t.from,t.to),I.maxOpen(n.finish())}matchTag(e,t,n){for(let r=n?this.tags.indexOf(n)+1:0;r<this.tags.length;r++){let n=this.tags[r];if(Zf(e,n.tag)&&(n.namespace===void 0||e.namespaceURI==n.namespace)&&(!n.context||t.matchesContext(n.context))){if(n.getAttrs){let t=n.getAttrs(e);if(t===!1)continue;n.attrs=t||void 0}return n}}}matchStyle(e,t,n,r){for(let i=r?this.styles.indexOf(r)+1:0;i<this.styles.length;i++){let r=this.styles[i],a=r.style;if(!(a.indexOf(e)!=0||r.context&&!n.matchesContext(r.context)||a.length>e.length&&(a.charCodeAt(e.length)!=61||a.slice(e.length+1)!=t))){if(r.getAttrs){let e=r.getAttrs(t);if(e===!1)continue;r.attrs=e||void 0}return r}}}static schemaRules(e){let t=[];function n(e){let n=e.priority==null?50:e.priority,r=0;for(;r<t.length;r++){let e=t[r];if((e.priority==null?50:e.priority)<n)break}t.splice(r,0,e)}for(let t in e.marks){let r=e.marks[t].spec.parseDOM;r&&r.forEach(e=>{n(e=Qf(e)),e.mark||e.ignore||e.clearMark||(e.mark=t)})}for(let t in e.nodes){let r=e.nodes[t].spec.parseDOM;r&&r.forEach(e=>{n(e=Qf(e)),e.node||e.ignore||e.mark||(e.node=t)})}return t}static fromSchema(t){return t.cached.domParser||(t.cached.domParser=new e(t,e.schemaRules(t)))}},Vf={address:!0,article:!0,aside:!0,blockquote:!0,body:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},Hf={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},Uf={ol:!0,ul:!0},Wf=1,Gf=2,Kf=4;function qf(e,t,n){return t==null?e&&e.whitespace==`pre`?3:n&-5:(t?Wf:0)|(t===`full`?Gf:0)}var Jf=class{constructor(e,t,n,r,i,a){this.type=e,this.attrs=t,this.marks=n,this.solid=r,this.options=a,this.content=[],this.activeMarks=F.none,this.match=i||(a&Kf?null:e.contentMatch)}findWrapping(e){if(!this.match){if(!this.type)return[];let t=this.type.contentMatch.fillBefore(P.from(e));if(t)this.match=this.type.contentMatch.matchFragment(t);else{let t=this.type.contentMatch,n;return(n=t.findWrapping(e.type))?(this.match=t,n):null}}return this.match.findWrapping(e.type)}finish(e){if(!(this.options&Wf)){let e=this.content[this.content.length-1],t;if(e&&e.isText&&(t=/[ \t\r\n\u000c]+$/.exec(e.text))){let n=e;e.text.length==t[0].length?this.content.pop():this.content[this.content.length-1]=n.withText(n.text.slice(0,n.text.length-t[0].length))}}let t=P.from(this.content);return!e&&this.match&&(t=t.append(this.match.fillBefore(P.empty,!0))),this.type?this.type.create(this.attrs,t,this.marks):t}inlineContext(e){return this.type?this.type.inlineContent:this.content.length?this.content[0].isInline:e.parentNode&&!Vf.hasOwnProperty(e.parentNode.nodeName.toLowerCase())}},Yf=class{constructor(e,t,n){this.parser=e,this.options=t,this.isOpen=n,this.open=0,this.localPreserveWS=!1;let r=t.topNode,i,a=qf(null,t.preserveWhitespace,0)|(n?Kf:0);i=r?new Jf(r.type,r.attrs,F.none,!0,t.topMatch||r.type.contentMatch,a):n?new Jf(null,null,F.none,!0,null,a):new Jf(e.schema.topNodeType,null,F.none,!0,null,a),this.nodes=[i],this.find=t.findPositions,this.needsBlock=!1}get top(){return this.nodes[this.open]}addDOM(e,t){e.nodeType==3?this.addTextNode(e,t):e.nodeType==1&&this.addElement(e,t)}addTextNode(e,t){let n=e.nodeValue,r=this.top,i=r.options&Gf?`full`:this.localPreserveWS||(r.options&Wf)>0,{schema:a}=this.parser;if(i===`full`||r.inlineContext(e)||/[^ \t\r\n\u000c]/.test(n)){if(!i){if(n=n.replace(/[ \t\r\n\u000c]+/g,` `),/^[ \t\r\n\u000c]/.test(n)&&this.open==this.nodes.length-1){let t=r.content[r.content.length-1],i=e.previousSibling;(!t||i&&i.nodeName==`BR`||t.isText&&/[ \t\r\n\u000c]$/.test(t.text))&&(n=n.slice(1))}}else if(i===`full`)n=n.replace(/\r\n?/g,`
`);else if(a.linebreakReplacement&&/[\r\n]/.test(n)&&this.top.findWrapping(a.linebreakReplacement.create())){let e=n.split(/\r?\n|\r/);for(let n=0;n<e.length;n++)n&&this.insertNode(a.linebreakReplacement.create(),t,!0),e[n]&&this.insertNode(a.text(e[n]),t,!/\S/.test(e[n]));n=``}else n=n.replace(/\r?\n|\r/g,` `);n&&this.insertNode(a.text(n),t,!/\S/.test(n)),this.findInText(e)}else this.findInside(e)}addElement(e,t,n){let r=this.localPreserveWS,i=this.top;(e.tagName==`PRE`||/pre/.test(e.style&&e.style.whiteSpace))&&(this.localPreserveWS=!0);let a=e.nodeName.toLowerCase(),o;Uf.hasOwnProperty(a)&&this.parser.normalizeLists&&Xf(e);let s=this.options.ruleFromNode&&this.options.ruleFromNode(e)||(o=this.parser.matchTag(e,this,n));out:if(s?s.ignore:Hf.hasOwnProperty(a))this.findInside(e),this.ignoreFallback(e,t);else if(!s||s.skip||s.closeParent){s&&s.closeParent?this.open=Math.max(0,this.open-1):s&&s.skip.nodeType&&(e=s.skip);let n,r=this.needsBlock;if(Vf.hasOwnProperty(a))i.content.length&&i.content[0].isInline&&this.open&&(this.open--,i=this.top),n=!0,i.type||(this.needsBlock=!0);else if(!e.firstChild){this.leafFallback(e,t);break out}let o=s&&s.skip?t:this.readStyles(e,t);o&&this.addAll(e,o),n&&this.sync(i),this.needsBlock=r}else{let n=this.readStyles(e,t);n&&this.addElementByRule(e,s,n,s.consuming===!1?o:void 0)}this.localPreserveWS=r}leafFallback(e,t){e.nodeName==`BR`&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(e.ownerDocument.createTextNode(`
`),t)}ignoreFallback(e,t){e.nodeName==`BR`&&(!this.top.type||!this.top.type.inlineContent)&&this.findPlace(this.parser.schema.text(`-`),t,!0)}readStyles(e,t){let n=e.style;if(n&&n.length)for(let e=0;e<this.parser.matchedStyles.length;e++){let r=this.parser.matchedStyles[e],i=n.getPropertyValue(r);if(i)for(let e;;){let n=this.parser.matchStyle(r,i,this,e);if(!n)break;if(n.ignore)return null;if(t=n.clearMark?t.filter(e=>!n.clearMark(e)):t.concat(this.parser.schema.marks[n.mark].create(n.attrs)),n.consuming===!1)e=n;else break}}return t}addElementByRule(e,t,n,r){let i,a;if(t.node){if(a=this.parser.schema.nodes[t.node],a.isLeaf)this.insertNode(a.create(t.attrs),n,e.nodeName==`BR`)||this.leafFallback(e,n);else{let e=this.enter(a,t.attrs||null,n,t.preserveWhitespace);e&&(i=!0,n=e)}}else{let e=this.parser.schema.marks[t.mark];n=n.concat(e.create(t.attrs))}let o=this.top;if(a&&a.isLeaf)this.findInside(e);else if(r)this.addElement(e,n,r);else if(t.getContent)this.findInside(e),t.getContent(e,this.parser.schema).forEach(e=>this.insertNode(e,n,!1));else{let r=e;typeof t.contentElement==`string`?r=e.querySelector(t.contentElement):typeof t.contentElement==`function`?r=t.contentElement(e):t.contentElement&&(r=t.contentElement),this.findAround(e,r,!0),this.addAll(r,n),this.findAround(e,r,!1)}i&&this.sync(o)&&this.open--}addAll(e,t,n,r){let i=n||0;for(let a=n?e.childNodes[n]:e.firstChild,o=r==null?null:e.childNodes[r];a!=o;a=a.nextSibling,++i)this.findAtPoint(e,i),this.addDOM(a,t);this.findAtPoint(e,i)}findPlace(e,t,n){let r,i;for(let t=this.open,a=0;t>=0;t--){let o=this.nodes[t],s=o.findWrapping(e);if(s&&(!r||r.length>s.length+a)&&(r=s,i=o,!s.length))break;if(o.solid){if(n)break;a+=2}}if(!r)return null;this.sync(i);for(let e=0;e<r.length;e++)t=this.enterInner(r[e],null,t,!1);return t}insertNode(e,t,n){if(e.isInline&&this.needsBlock&&!this.top.type){let e=this.textblockFromContext();e&&(t=this.enterInner(e,null,t))}let r=this.findPlace(e,t,n);if(r){this.closeExtra();let t=this.top;t.match&&=t.match.matchType(e.type);let n=F.none;for(let i of r.concat(e.marks))(t.type?t.type.allowsMarkType(i.type):$f(i.type,e.type))&&(n=i.addToSet(n));return t.content.push(e.mark(n)),!0}return!1}enter(e,t,n,r){let i=this.findPlace(e.create(t),n,!1);return i&&=this.enterInner(e,t,n,!0,r),i}enterInner(e,t,n,r=!1,i){this.closeExtra();let a=this.top;a.match=a.match&&a.match.matchType(e);let o=qf(e,i,a.options);a.options&Kf&&a.content.length==0&&(o|=Kf);let s=F.none;return n=n.filter(t=>!(a.type?a.type.allowsMarkType(t.type):$f(t.type,e))||(s=t.addToSet(s),!1)),this.nodes.push(new Jf(e,t,s,r,null,o)),this.open++,n}closeExtra(e=!1){let t=this.nodes.length-1;if(t>this.open){for(;t>this.open;t--)this.nodes[t-1].content.push(this.nodes[t].finish(e));this.nodes.length=this.open+1}}finish(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(!!(this.isOpen||this.options.topOpen))}sync(e){for(let t=this.open;t>=0;t--)if(this.nodes[t]==e)return this.open=t,!0;else this.localPreserveWS&&(this.nodes[t].options|=Wf);return!1}get currentPos(){this.closeExtra();let e=0;for(let t=this.open;t>=0;t--){let n=this.nodes[t].content;for(let t=n.length-1;t>=0;t--)e+=n[t].nodeSize;t&&e++}return e}findAtPoint(e,t){if(this.find)for(let n=0;n<this.find.length;n++)this.find[n].node==e&&this.find[n].offset==t&&(this.find[n].pos=this.currentPos)}findInside(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].pos==null&&e.nodeType==1&&e.contains(this.find[t].node)&&(this.find[t].pos=this.currentPos)}findAround(e,t,n){if(e!=t&&this.find)for(let r=0;r<this.find.length;r++)this.find[r].pos==null&&e.nodeType==1&&e.contains(this.find[r].node)&&t.compareDocumentPosition(this.find[r].node)&(n?2:4)&&(this.find[r].pos=this.currentPos)}findInText(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].node==e&&(this.find[t].pos=this.currentPos-(e.nodeValue.length-this.find[t].offset))}matchesContext(e){if(e.indexOf(`|`)>-1)return e.split(/\s*\|\s*/).some(this.matchesContext,this);let t=e.split(`/`),n=this.options.context,r=!this.isOpen&&(!n||n.parent.type==this.nodes[0].type),i=-(n?n.depth+1:0)+ +!r,a=(e,o)=>{for(;e>=0;e--){let s=t[e];if(s==``){if(e==t.length-1||e==0)continue;for(;o>=i;o--)if(a(e-1,o))return!0;return!1}{let e=o>0||o==0&&r?this.nodes[o].type:n&&o>=i?n.node(o-i).type:null;if(!e||e.name!=s&&!e.isInGroup(s))return!1;o--}}return!0};return a(t.length-1,this.open)}textblockFromContext(){let e=this.options.context;if(e)for(let t=e.depth;t>=0;t--){let n=e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;if(n&&n.isTextblock&&n.defaultAttrs)return n}for(let e in this.parser.schema.nodes){let t=this.parser.schema.nodes[e];if(t.isTextblock&&t.defaultAttrs)return t}}};function Xf(e){for(let t=e.firstChild,n=null;t;t=t.nextSibling){let e=t.nodeType==1?t.nodeName.toLowerCase():null;e&&Uf.hasOwnProperty(e)&&n?(n.appendChild(t),t=n):e==`li`?n=t:e&&(n=null)}}function Zf(e,t){return(e.matches||e.msMatchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector).call(e,t)}function Qf(e){let t={};for(let n in e)t[n]=e[n];return t}function $f(e,t){let n=t.schema.nodes;for(let r in n){let i=n[r];if(!i.allowsMarkType(e))continue;let a=[],o=e=>{a.push(e);for(let n=0;n<e.edgeCount;n++){let{type:r,next:i}=e.edge(n);if(r==t||a.indexOf(i)<0&&o(i))return!0}};if(o(i.contentMatch))return!0}}var ep=class e{constructor(e,t){this.nodes=e,this.marks=t}serializeFragment(e,t={},n){n||=np(t).createDocumentFragment();let r=n,i=[];return e.forEach(e=>{if(i.length||e.marks.length){let n=0,a=0;for(;n<i.length&&a<e.marks.length;){let t=e.marks[a];if(!this.marks[t.type.name]){a++;continue}if(!t.eq(i[n][0])||t.type.spec.spanning===!1)break;n++,a++}for(;n<i.length;)r=i.pop()[1];for(;a<e.marks.length;){let n=e.marks[a++],o=this.serializeMark(n,e.isInline,t);o&&(i.push([n,r]),r.appendChild(o.dom),r=o.contentDOM||o.dom)}}r.appendChild(this.serializeNodeInner(e,t))}),n}serializeNodeInner(e,t){if(e.isText)return np(t).createTextNode(e.text);let{dom:n,contentDOM:r}=op(np(t),this.nodes[e.type.name](e),null,e.attrs);if(r){if(e.isLeaf)throw RangeError(`Content hole not allowed in a leaf node spec`);this.serializeFragment(e.content,t,r)}return n}serializeNode(e,t={}){let n=this.serializeNodeInner(e,t);for(let r=e.marks.length-1;r>=0;r--){let i=this.serializeMark(e.marks[r],e.isInline,t);i&&((i.contentDOM||i.dom).appendChild(n),n=i.dom)}return n}serializeMark(e,t,n={}){let r=this.marks[e.type.name];return r&&op(np(n),r(e,t),null,e.attrs)}static renderSpec(e,t,n=null,r){return typeof t==`string`?{dom:e.createTextNode(t)}:op(e,t,n,r)}static fromSchema(t){return t.cached.domSerializer||(t.cached.domSerializer=new e(this.nodesFromSchema(t),this.marksFromSchema(t)))}static nodesFromSchema(e){let t=tp(e.nodes);return t.text||=e=>e.text,t}static marksFromSchema(e){return tp(e.marks)}};function tp(e){let t={};for(let n in e){let r=e[n].spec.toDOM;r&&(t[n]=r)}return t}function np(e){return e.document||window.document}var rp=new WeakMap;function ip(e){let t=rp.get(e);return t===void 0&&rp.set(e,t=ap(e)),t}function ap(e){let t=null;function n(e){if(e&&typeof e==`object`){if(Array.isArray(e)){if(typeof e[0]==`string`)t||=[],t.push(e);else for(let t=0;t<e.length;t++)n(e[t])}else for(let t in e)n(e[t])}}return n(e),t}function op(e,t,n,r){if(t.nodeType==1)return{dom:t};if(t.dom&&t.dom.nodeType==1)return t;let i=t[0],a;if(typeof i!=`string`)throw RangeError(`Invalid array passed to renderSpec`);if(r&&(a=ip(r))&&a.indexOf(t)>-1)throw RangeError(`Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.`);let o=i.indexOf(` `);o>0&&(n=i.slice(0,o),i=i.slice(o+1));let s,c=n?e.createElementNS(n,i):e.createElement(i),l=t[1],u=1;if(l&&typeof l==`object`&&l.nodeType==null&&!Array.isArray(l)){u=2;for(let e in l)if(l[e]!=null){let t=e.indexOf(` `);t>0?c.setAttributeNS(e.slice(0,t),e.slice(t+1),l[e]):e==`style`&&c.style?c.style.cssText=l[e]:c.setAttribute(e,l[e])}}for(let i=u;i<t.length;i++){let a=t[i];if(a===0){if(i<t.length-1||i>u)throw RangeError(`Content hole must be the only child of its parent node`);return{dom:c,contentDOM:c}}if(typeof a==`string`)c.appendChild(e.createTextNode(a));else{let{dom:t,contentDOM:i}=op(e,a,n,r);if(c.appendChild(t),i){if(s)throw RangeError(`Multiple content holes`);s=i}}}return{dom:c,contentDOM:s}}var sp=65535,cp=2**16;function lp(e,t){return e+t*cp}function up(e){return e&sp}function dp(e){return(e-(e&sp))/cp}var fp=1,pp=2,mp=4,hp=8,gp=class{constructor(e,t,n){this.pos=e,this.delInfo=t,this.recover=n}get deleted(){return(this.delInfo&hp)>0}get deletedBefore(){return(this.delInfo&5)>0}get deletedAfter(){return(this.delInfo&6)>0}get deletedAcross(){return(this.delInfo&mp)>0}},_p=class e{constructor(t,n=!1){if(this.ranges=t,this.inverted=n,!t.length&&e.empty)return e.empty}recover(e){let t=0,n=up(e);if(!this.inverted)for(let e=0;e<n;e++)t+=this.ranges[e*3+2]-this.ranges[e*3+1];return this.ranges[n*3]+t+dp(e)}mapResult(e,t=1){return this._map(e,t,!1)}map(e,t=1){return this._map(e,t,!0)}_map(e,t,n){let r=0,i=this.inverted?2:1,a=this.inverted?1:2;for(let o=0;o<this.ranges.length;o+=3){let s=this.ranges[o]-(this.inverted?r:0);if(s>e)break;let c=this.ranges[o+i],l=this.ranges[o+a],u=s+c;if(e<=u){let i=c?e==s?-1:e==u?1:t:t,a=s+r+(i<0?0:l);if(n)return a;let d=e==(t<0?s:u)?null:lp(o/3,e-s),f=0;return c&&(f|=e==s?pp:e==u?fp:mp,(t<0?e!=s:e!=u)&&(f|=hp)),new gp(a,f,d)}r+=l-c}return n?e+r:new gp(e+r,0,null)}touches(e,t){let n=0,r=up(t),i=this.inverted?2:1,a=this.inverted?1:2;for(let t=0;t<this.ranges.length;t+=3){let o=this.ranges[t]-(this.inverted?n:0);if(o>e)break;let s=this.ranges[t+i];if(e<=o+s&&t==r*3)return!0;n+=this.ranges[t+a]-s}return!1}forEach(e){let t=this.inverted?2:1,n=this.inverted?1:2;for(let r=0,i=0;r<this.ranges.length;r+=3){let a=this.ranges[r],o=a-(this.inverted?i:0),s=a+(this.inverted?0:i),c=this.ranges[r+t],l=this.ranges[r+n];e(o,o+c,s,s+l),i+=l-c}}invert(){return new e(this.ranges,!this.inverted)}toString(){return(this.inverted?`-`:``)+JSON.stringify(this.ranges)}static offset(t){return t==0?e.empty:new e(t<0?[0,-t,0]:[0,0,t])}};_p.empty=new _p([]);var vp=class e{constructor(e,t,n=0,r=e?e.length:0){this.mirror=t,this.from=n,this.to=r,this._maps=e||[],this.ownData=!(e||t)}get maps(){return this._maps}slice(t=0,n=this.maps.length){return new e(this._maps,this.mirror,t,n)}appendMap(e,t){this.ownData||=(this._maps=this._maps.slice(),this.mirror=this.mirror&&this.mirror.slice(),!0),this.to=this._maps.push(e),t!=null&&this.setMirror(this._maps.length-1,t)}appendMapping(e){for(let t=0,n=this._maps.length;t<e._maps.length;t++){let r=e.getMirror(t);this.appendMap(e._maps[t],r!=null&&r<t?n+r:void 0)}}getMirror(e){if(this.mirror){for(let t=0;t<this.mirror.length;t++)if(this.mirror[t]==e)return this.mirror[t+(t%2?-1:1)]}}setMirror(e,t){this.mirror||=[],this.mirror.push(e,t)}appendMappingInverted(e){for(let t=e.maps.length-1,n=this._maps.length+e._maps.length;t>=0;t--){let r=e.getMirror(t);this.appendMap(e._maps[t].invert(),r!=null&&r>t?n-r-1:void 0)}}invert(){let t=new e;return t.appendMappingInverted(this),t}map(e,t=1){if(this.mirror)return this._map(e,t,!0);for(let n=this.from;n<this.to;n++)e=this._maps[n].map(e,t);return e}mapResult(e,t=1){return this._map(e,t,!1)}_map(e,t,n){let r=0;for(let n=this.from;n<this.to;n++){let i=this._maps[n].mapResult(e,t);if(i.recover!=null){let t=this.getMirror(n);if(t!=null&&t>n&&t<this.to){n=t,e=this._maps[t].recover(i.recover);continue}}r|=i.delInfo,e=i.pos}return n?e:new gp(e,r,null)}},yp=Object.create(null),bp=class{getMap(){return _p.empty}merge(e){return null}static fromJSON(e,t){if(!t||!t.stepType)throw RangeError(`Invalid input for Step.fromJSON`);let n=yp[t.stepType];if(!n)throw RangeError(`No step type ${t.stepType} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in yp)throw RangeError(`Duplicate use of step JSON ID `+e);return yp[e]=t,t.prototype.jsonID=e,t}},xp=class e{constructor(e,t){this.doc=e,this.failed=t}static ok(t){return new e(t,null)}static fail(t){return new e(null,t)}static fromReplace(t,n,r,i){try{return e.ok(t.replace(n,r,i))}catch(t){if(t instanceof Gd)return e.fail(t.message);throw t}}};function Sp(e,t,n){let r=[];for(let i=0;i<e.childCount;i++){let a=e.child(i);a.content.size&&(a=a.copy(Sp(a.content,t,a))),a.isInline&&(a=t(a,n,i)),r.push(a)}return P.fromArray(r)}var Cp=class e extends bp{constructor(e,t,n){super(),this.from=e,this.to=t,this.mark=n}apply(e){let t=e.slice(this.from,this.to),n=e.resolve(this.from),r=n.node(n.sharedDepth(this.to)),i=new I(Sp(t.content,(e,t)=>!e.isAtom||!t.type.allowsMarkType(this.mark.type)?e:e.mark(this.mark.addToSet(e.marks)),r),t.openStart,t.openEnd);return xp.fromReplace(e,this.from,this.to,i)}invert(){return new wp(this.from,this.to,this.mark)}map(t){let n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)}merge(t){return t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from?new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark):null}toJSON(){return{stepType:`addMark`,mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`)throw RangeError(`Invalid input for AddMarkStep.fromJSON`);return new e(n.from,n.to,t.markFromJSON(n.mark))}};bp.jsonID(`addMark`,Cp);var wp=class e extends bp{constructor(e,t,n){super(),this.from=e,this.to=t,this.mark=n}apply(e){let t=e.slice(this.from,this.to),n=new I(Sp(t.content,e=>e.mark(this.mark.removeFromSet(e.marks)),e),t.openStart,t.openEnd);return xp.fromReplace(e,this.from,this.to,n)}invert(){return new Cp(this.from,this.to,this.mark)}map(t){let n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)}merge(t){return t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from?new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark):null}toJSON(){return{stepType:`removeMark`,mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`)throw RangeError(`Invalid input for RemoveMarkStep.fromJSON`);return new e(n.from,n.to,t.markFromJSON(n.mark))}};bp.jsonID(`removeMark`,wp);var Tp=class e extends bp{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return xp.fail(`No node at mark step's position`);let n=t.type.create(t.attrs,null,this.mark.addToSet(t.marks));return xp.fromReplace(e,this.pos,this.pos+1,new I(P.from(n),0,+!t.isLeaf))}invert(t){let n=t.nodeAt(this.pos);if(n){let t=this.mark.addToSet(n.marks);if(t.length==n.marks.length){for(let r=0;r<n.marks.length;r++)if(!n.marks[r].isInSet(t))return new e(this.pos,n.marks[r]);return new e(this.pos,this.mark)}}return new Ep(this.pos,this.mark)}map(t){let n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.mark)}toJSON(){return{stepType:`addNodeMark`,pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(t,n){if(typeof n.pos!=`number`)throw RangeError(`Invalid input for AddNodeMarkStep.fromJSON`);return new e(n.pos,t.markFromJSON(n.mark))}};bp.jsonID(`addNodeMark`,Tp);var Ep=class e extends bp{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return xp.fail(`No node at mark step's position`);let n=t.type.create(t.attrs,null,this.mark.removeFromSet(t.marks));return xp.fromReplace(e,this.pos,this.pos+1,new I(P.from(n),0,+!t.isLeaf))}invert(e){let t=e.nodeAt(this.pos);return!t||!this.mark.isInSet(t.marks)?this:new Tp(this.pos,this.mark)}map(t){let n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.mark)}toJSON(){return{stepType:`removeNodeMark`,pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(t,n){if(typeof n.pos!=`number`)throw RangeError(`Invalid input for RemoveNodeMarkStep.fromJSON`);return new e(n.pos,t.markFromJSON(n.mark))}};bp.jsonID(`removeNodeMark`,Ep);var Dp=class e extends bp{constructor(e,t,n,r=!1){super(),this.from=e,this.to=t,this.slice=n,this.structure=r}apply(e){return this.structure&&kp(e,this.from,this.to)?xp.fail(`Structure replace would overwrite content`):xp.fromReplace(e,this.from,this.to,this.slice)}getMap(){return new _p([this.from,this.to-this.from,this.slice.size])}invert(t){return new e(this.from,this.from+this.slice.size,t.slice(this.from,this.to))}map(t){let n=t.mapResult(this.to,-1),r=this.from==this.to&&e.MAP_BIAS<0?n:t.mapResult(this.from,1);return r.deletedAcross&&n.deletedAcross?null:new e(r.pos,Math.max(r.pos,n.pos),this.slice,this.structure)}merge(t){if(!(t instanceof e)||t.structure||this.structure)return null;if(this.from+this.slice.size==t.from&&!this.slice.openEnd&&!t.slice.openStart){let n=this.slice.size+t.slice.size==0?I.empty:new I(this.slice.content.append(t.slice.content),this.slice.openStart,t.slice.openEnd);return new e(this.from,this.to+(t.to-t.from),n,this.structure)}if(t.to==this.from&&!this.slice.openStart&&!t.slice.openEnd){let n=this.slice.size+t.slice.size==0?I.empty:new I(t.slice.content.append(this.slice.content),t.slice.openStart,this.slice.openEnd);return new e(t.from,this.to,n,this.structure)}return null}toJSON(){let e={stepType:`replace`,from:this.from,to:this.to};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`)throw RangeError(`Invalid input for ReplaceStep.fromJSON`);return new e(n.from,n.to,I.fromJSON(t,n.slice),!!n.structure)}};Dp.MAP_BIAS=1,bp.jsonID(`replace`,Dp);var Op=class e extends bp{constructor(e,t,n,r,i,a,o=!1){super(),this.from=e,this.to=t,this.gapFrom=n,this.gapTo=r,this.slice=i,this.insert=a,this.structure=o}apply(e){if(this.structure&&(kp(e,this.from,this.gapFrom)||kp(e,this.gapTo,this.to)))return xp.fail(`Structure gap-replace would overwrite content`);let t=e.slice(this.gapFrom,this.gapTo);if(t.openStart||t.openEnd)return xp.fail(`Gap is not a flat range`);let n=this.slice.insertAt(this.insert,t.content);return n?xp.fromReplace(e,this.from,this.to,n):xp.fail(`Content does not fit in gap`)}getMap(){return new _p([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])}invert(t){let n=this.gapTo-this.gapFrom;return new e(this.from,this.from+this.slice.size+n,this.from+this.insert,this.from+this.insert+n,t.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)}map(t){let n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1),i=this.from==this.gapFrom?n.pos:t.map(this.gapFrom,-1),a=this.to==this.gapTo?r.pos:t.map(this.gapTo,1);return n.deletedAcross&&r.deletedAcross||i<n.pos||a>r.pos?null:new e(n.pos,r.pos,i,a,this.slice,this.insert,this.structure)}toJSON(){let e={stepType:`replaceAround`,from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`||typeof n.gapFrom!=`number`||typeof n.gapTo!=`number`||typeof n.insert!=`number`)throw RangeError(`Invalid input for ReplaceAroundStep.fromJSON`);return new e(n.from,n.to,n.gapFrom,n.gapTo,I.fromJSON(t,n.slice),n.insert,!!n.structure)}};bp.jsonID(`replaceAround`,Op);function kp(e,t,n){let r=e.resolve(t),i=n-t,a=r.depth;for(;i>0&&a>0&&r.indexAfter(a)==r.node(a).childCount;)a--,i--;if(i>0){let e=r.node(a).maybeChild(r.indexAfter(a));for(;i>0;){if(!e||e.isLeaf)return!0;e=e.firstChild,i--}}return!1}function Ap(e,t,n,r){let i=[],a=[],o,s;e.doc.nodesBetween(t,n,(e,c,l)=>{if(!e.isInline)return;let u=e.marks;if(!r.isInSet(u)&&l.type.allowsMarkType(r.type)){let l=Math.max(c,t),d=Math.min(c+e.nodeSize,n),f=r.addToSet(u);for(let e=0;e<u.length;e++)u[e].isInSet(f)||(o&&o.to==l&&o.mark.eq(u[e])?o.to=d:i.push(o=new wp(l,d,u[e])));s&&s.to==l?s.to=d:a.push(s=new Cp(l,d,r))}}),i.forEach(t=>e.step(t)),a.forEach(t=>e.step(t))}function jp(e,t,n,r){let i=[],a=0;e.doc.nodesBetween(t,n,(e,o)=>{if(!e.isInline)return;a++;let s=null;if(r instanceof Ff){let t=e.marks,n;for(;n=r.isInSet(t);)(s||=[]).push(n),t=n.removeFromSet(t)}else r?r.isInSet(e.marks)&&(s=[r]):s=e.marks;if(s&&s.length){let r=Math.min(o+e.nodeSize,n);for(let e=0;e<s.length;e++){let n=s[e],c;for(let e=0;e<i.length;e++){let t=i[e];t.step==a-1&&n.eq(i[e].style)&&(c=t)}c?(c.to=r,c.step=a):i.push({style:n,from:Math.max(o,t),to:r,step:a})}}}),i.forEach(t=>e.step(new wp(t.from,t.to,t.style)))}function Mp(e,t,n,r=n.contentMatch,i=!0){let a=e.doc.nodeAt(t),o=[],s=t+1;for(let t=0;t<a.childCount;t++){let c=a.child(t),l=s+c.nodeSize,u=r.matchType(c.type);if(!u)o.push(new Dp(s,l,I.empty));else{r=u;for(let t=0;t<c.marks.length;t++)n.allowsMarkType(c.marks[t].type)||e.step(new wp(s,l,c.marks[t]));if(i&&c.isText&&n.whitespace!=`pre`){let e,t=/\r?\n|\r/g,r;for(;e=t.exec(c.text);)r||=new I(P.from(n.schema.text(` `,n.allowedMarks(c.marks))),0,0),o.push(new Dp(s+e.index,s+e.index+e[0].length,r))}}s=l}if(!r.validEnd){let t=r.fillBefore(P.empty,!0);e.replace(s,s,new I(t,0,0))}for(let t=o.length-1;t>=0;t--)e.step(o[t])}function Np(e,t,n){return(t==0||e.canReplace(t,e.childCount))&&(n==e.childCount||e.canReplace(0,n))}function Pp(e){let t=e.parent.content.cutByIndex(e.startIndex,e.endIndex);for(let n=e.depth,r=0,i=0;;--n){let a=e.$from.node(n),o=e.$from.index(n)+r,s=e.$to.indexAfter(n)-i;if(n<e.depth&&a.canReplace(o,s,t))return n;if(n==0||a.type.spec.isolating||!Np(a,o,s))break;o&&(r=1),s<a.childCount&&(i=1)}return null}function Fp(e,t,n){let{$from:r,$to:i,depth:a}=t,o=r.before(a+1),s=i.after(a+1),c=o,l=s,u=P.empty,d=0;for(let e=a,t=!1;e>n;e--)t||r.index(e)>0?(t=!0,u=P.from(r.node(e).copy(u)),d++):c--;let f=P.empty,p=0;for(let e=a,t=!1;e>n;e--)t||i.after(e+1)<i.end(e)?(t=!0,f=P.from(i.node(e).copy(f)),p++):l++;e.step(new Op(c,l,o,s,new I(u.append(f),d,p),u.size-d,!0))}function Ip(e,t,n=null,r=e){let i=Rp(e,t),a=i&&zp(r,t);return a?i.map(Lp).concat({type:t,attrs:n}).concat(a.map(Lp)):null}function Lp(e){return{type:e,attrs:null}}function Rp(e,t){let{parent:n,startIndex:r,endIndex:i}=e,a=n.contentMatchAt(r).findWrapping(t);if(!a)return null;let o=a.length?a[0]:t;return n.canReplaceWith(r,i,o)?a:null}function zp(e,t){let{parent:n,startIndex:r,endIndex:i}=e,a=n.child(r),o=t.contentMatch.findWrapping(a.type);if(!o)return null;let s=(o.length?o[o.length-1]:t).contentMatch;for(let e=r;s&&e<i;e++)s=s.matchType(n.child(e).type);return!s||!s.validEnd?null:o}function Bp(e,t,n){let r=P.empty;for(let e=n.length-1;e>=0;e--){if(r.size){let t=n[e].type.contentMatch.matchFragment(r);if(!t||!t.validEnd)throw RangeError(`Wrapper type given to Transform.wrap does not form valid content of its parent wrapper`)}r=P.from(n[e].type.create(n[e].attrs,r))}let i=t.start,a=t.end;e.step(new Op(i,a,i,a,new I(r,0,0),n.length,!0))}function Vp(e,t,n,r,i){if(!r.isTextblock)throw RangeError(`Type given to setBlockType should be a textblock`);let a=e.steps.length;e.doc.nodesBetween(t,n,(t,n)=>{let o=typeof i==`function`?i(t):i;if(t.isTextblock&&!t.hasMarkup(r,o)&&Wp(e.doc,e.mapping.slice(a).map(n),r)){let i=null;if(r.schema.linebreakReplacement){let e=r.whitespace==`pre`,t=!!r.contentMatch.matchType(r.schema.linebreakReplacement);e&&!t?i=!1:!e&&t&&(i=!0)}i===!1&&Up(e,t,n,a),Mp(e,e.mapping.slice(a).map(n,1),r,void 0,i===null);let s=e.mapping.slice(a),c=s.map(n,1),l=s.map(n+t.nodeSize,1);return e.step(new Op(c,l,c+1,l-1,new I(P.from(r.create(o,null,t.marks)),0,0),1,!0)),i===!0&&Hp(e,t,n,a),!1}})}function Hp(e,t,n,r){t.forEach((i,a)=>{if(i.isText){let o,s=/\r?\n|\r/g;for(;o=s.exec(i.text);){let i=e.mapping.slice(r).map(n+1+a+o.index);e.replaceWith(i,i+1,t.type.schema.linebreakReplacement.create())}}})}function Up(e,t,n,r){t.forEach((i,a)=>{if(i.type==i.type.schema.linebreakReplacement){let i=e.mapping.slice(r).map(n+1+a);e.replaceWith(i,i+1,t.type.schema.text(`
`))}})}function Wp(e,t,n){let r=e.resolve(t),i=r.index();return r.parent.canReplaceWith(i,i+1,n)}function Gp(e,t,n,r,i){let a=e.doc.nodeAt(t);if(!a)throw RangeError(`No node at given position`);n||=a.type;let o=n.create(r,null,i||a.marks);if(a.isLeaf)return e.replaceWith(t,t+a.nodeSize,o);if(!n.validContent(a.content))throw RangeError(`Invalid content for node type `+n.name);e.step(new Op(t,t+a.nodeSize,t+1,t+a.nodeSize-1,new I(P.from(o),0,0),1,!0))}function Kp(e,t,n=1,r){let i=e.resolve(t),a=i.depth-n,o=r&&r[r.length-1]||i.parent;if(a<0||i.parent.type.spec.isolating||!i.parent.canReplace(i.index(),i.parent.childCount)||!o.type.validContent(i.parent.content.cutByIndex(i.index(),i.parent.childCount)))return!1;for(let e=i.depth-1,t=n-2;e>a;e--,t--){let n=i.node(e),a=i.index(e);if(n.type.spec.isolating)return!1;let o=n.content.cutByIndex(a,n.childCount),s=r&&r[t+1];s&&(o=o.replaceChild(0,s.type.create(s.attrs)));let c=r&&r[t]||n;if(!n.canReplace(a+1,n.childCount)||!c.type.validContent(o))return!1}let s=i.indexAfter(a),c=r&&r[0];return i.node(a).canReplaceWith(s,s,c?c.type:i.node(a+1).type)}function qp(e,t,n=1,r){let i=e.doc.resolve(t),a=P.empty,o=P.empty;for(let e=i.depth,t=i.depth-n,s=n-1;e>t;e--,s--){a=P.from(i.node(e).copy(a));let t=r&&r[s];o=P.from(t?t.type.create(t.attrs,o):i.node(e).copy(o))}e.step(new Dp(t,t,new I(a.append(o),n,n),!0))}function Jp(e,t){let n=e.resolve(t),r=n.index();return Xp(n.nodeBefore,n.nodeAfter)&&n.parent.canReplace(r,r+1)}function Yp(e,t){t.content.size||e.type.compatibleContent(t.type);let n=e.contentMatchAt(e.childCount),{linebreakReplacement:r}=e.type.schema;for(let i=0;i<t.childCount;i++){let a=t.child(i),o=a.type==r?e.type.schema.nodes.text:a.type;if(n=n.matchType(o),!n||!e.type.allowsMarks(a.marks))return!1}return n.validEnd}function Xp(e,t){return!!(e&&t&&!e.isLeaf&&Yp(e,t))}function Zp(e,t,n=-1){let r=e.resolve(t);for(let e=r.depth;;e--){let i,a,o=r.index(e);if(e==r.depth?(i=r.nodeBefore,a=r.nodeAfter):n>0?(i=r.node(e+1),o++,a=r.node(e).maybeChild(o)):(i=r.node(e).maybeChild(o-1),a=r.node(e+1)),i&&!i.isTextblock&&Xp(i,a)&&r.node(e).canReplace(o,o+1))return t;if(e==0)break;t=n<0?r.before(e):r.after(e)}}function Qp(e,t,n){let r=null,{linebreakReplacement:i}=e.doc.type.schema,a=e.doc.resolve(t-n),o=a.node().type;if(i&&o.inlineContent){let e=o.whitespace==`pre`,t=!!o.contentMatch.matchType(i);e&&!t?r=!1:!e&&t&&(r=!0)}let s=e.steps.length;if(r===!1){let r=e.doc.resolve(t+n);Up(e,r.node(),r.before(),s)}o.inlineContent&&Mp(e,t+n-1,o,a.node().contentMatchAt(a.index()),r==null);let c=e.mapping.slice(s),l=c.map(t-n);if(e.step(new Dp(l,c.map(t+n,-1),I.empty,!0)),r===!0){let t=e.doc.resolve(l);Hp(e,t.node(),t.before(),e.steps.length)}return e}function $p(e,t,n){let r=e.resolve(t);if(r.parent.canReplaceWith(r.index(),r.index(),n))return t;if(r.parentOffset==0)for(let e=r.depth-1;e>=0;e--){let t=r.index(e);if(r.node(e).canReplaceWith(t,t,n))return r.before(e+1);if(t>0)return null}if(r.parentOffset==r.parent.content.size)for(let e=r.depth-1;e>=0;e--){let t=r.indexAfter(e);if(r.node(e).canReplaceWith(t,t,n))return r.after(e+1);if(t<r.node(e).childCount)return null}return null}function em(e,t,n){let r=e.resolve(t);if(!n.content.size)return t;let i=n.content;for(let e=0;e<n.openStart;e++)i=i.firstChild.content;for(let e=1;e<=(n.openStart==0&&n.size?2:1);e++)for(let t=r.depth;t>=0;t--){let n=t==r.depth?0:r.pos<=(r.start(t+1)+r.end(t+1))/2?-1:1,a=r.index(t)+ +(n>0),o=r.node(t),s=!1;if(e==1)s=o.canReplace(a,a,i);else{let e=o.contentMatchAt(a).findWrapping(i.firstChild.type);s=e&&o.canReplaceWith(a,a,e[0])}if(s)return n==0?r.pos:n<0?r.before(t+1):r.after(t+1)}return null}function tm(e,t,n=t,r=I.empty){if(t==n&&!r.size)return null;let i=e.resolve(t),a=e.resolve(n);return nm(i,a,r)?new Dp(t,n,r):new rm(i,a,r).fit()}function nm(e,t,n){return!n.openStart&&!n.openEnd&&e.start()==t.start()&&e.parent.canReplace(e.index(),t.index(),n.content)}var rm=class{constructor(e,t,n){this.$from=e,this.$to=t,this.unplaced=n,this.frontier=[],this.placed=P.empty;for(let t=0;t<=e.depth;t++){let n=e.node(t);this.frontier.push({type:n.type,match:n.contentMatchAt(e.indexAfter(t))})}for(let t=e.depth;t>0;t--)this.placed=P.from(e.node(t).copy(this.placed))}get depth(){return this.frontier.length-1}fit(){for(;this.unplaced.size;){let e=this.findFittable();e?this.placeNodes(e):this.openMore()||this.dropNode()}let e=this.mustMoveInline(),t=this.placed.size-this.depth-this.$from.depth,n=this.$from,r=this.close(e<0?this.$to:n.doc.resolve(e));if(!r)return null;let i=this.placed,a=n.depth,o=r.depth;for(;a&&o&&i.childCount==1;)i=i.firstChild.content,a--,o--;let s=new I(i,a,o);return e>-1?new Op(n.pos,e,this.$to.pos,this.$to.end(),s,t):s.size||n.pos!=this.$to.pos?new Dp(n.pos,r.pos,s):null}findFittable(){let e=this.unplaced.openStart;for(let t=this.unplaced.content,n=0,r=this.unplaced.openEnd;n<e;n++){let i=t.firstChild;if(t.childCount>1&&(r=0),i.type.spec.isolating&&r<=n){e=n;break}t=i.content}for(let t=1;t<=2;t++)for(let n=t==1?e:this.unplaced.openStart;n>=0;n--){let e,r=null;n?(r=om(this.unplaced.content,n-1).firstChild,e=r.content):e=this.unplaced.content;let i=e.firstChild;for(let e=this.depth;e>=0;e--){let{type:a,match:o}=this.frontier[e],s,c=null;if(t==1&&(i?o.matchType(i.type)||(c=o.fillBefore(P.from(i),!1)):r&&a.compatibleContent(r.type)))return{sliceDepth:n,frontierDepth:e,parent:r,inject:c};if(t==2&&i&&(s=o.findWrapping(i.type)))return{sliceDepth:n,frontierDepth:e,parent:r,wrap:s};if(r&&o.matchType(r.type))break}}}openMore(){let{content:e,openStart:t,openEnd:n}=this.unplaced;return dm(e,-1)<=t?!1:(this.unplaced.size>1&&dm(e,1)>n&&n++,this.unplaced=new I(e,t+1,n),!0)}dropNode(){let{content:e,openStart:t,openEnd:n}=this.unplaced,r=om(e,t);if(r.childCount<=1&&t>0){let i=e.size-t<=t+r.size;this.unplaced=new I(im(e,t-1,1),t-1,i?t-1:n)}else this.unplaced=new I(im(e,t,1),t,n)}placeNodes({sliceDepth:e,frontierDepth:t,parent:n,inject:r,wrap:i}){for(;this.depth>t;)this.closeFrontierNode();if(i)for(let e=0;e<i.length;e++)this.openFrontierNode(i[e]);let a=this.unplaced,o=n?n.content:a.content,s=a.openStart-e,c=0,l=[],{match:u,type:d}=this.frontier[t];if(r){for(let e=0;e<r.childCount;e++)l.push(r.child(e));u=u.matchFragment(r)}let f=o.size+e-(a.content.size-a.openEnd);for(;c<o.childCount;){let e=o.child(c),t=u.matchType(e.type);if(!t)break;c++,(c>1||s==0||e.content.size)&&(u=t,l.push(sm(e.mark(d.allowedMarks(e.marks)),c==1?s:0,c==o.childCount?f:-1)))}let p=c==o.childCount;p||(f=-1),this.placed=am(this.placed,t,P.from(l)),this.frontier[t].match=u,p&&f<0&&n&&n.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(let e=0,t=o;e<f;e++){let e=t.lastChild;this.frontier.push({type:e.type,match:e.contentMatchAt(e.childCount)}),t=e.content}this.unplaced=p?e==0?I.empty:new I(im(a.content,e-1,1),e-1,f<0?a.openEnd:e-1):new I(im(a.content,e,c),a.openStart,a.openEnd)}mustMoveInline(){if(!this.$to.parent.isTextblock)return-1;let e=this.frontier[this.depth],t;if(!e.type.isTextblock||!cm(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;let{depth:n}=this.$to,r=this.$to.after(n);for(;n>1&&r==this.$to.end(--n);)++r;return r}findCloseLevel(e){scan:for(let t=Math.min(this.depth,e.depth);t>=0;t--){let{match:n,type:r}=this.frontier[t],i=t<e.depth&&e.end(t+1)==e.pos+(e.depth-(t+1)),a=cm(e,t,r,n,i);if(a){for(let n=t-1;n>=0;n--){let{match:t,type:r}=this.frontier[n],i=cm(e,n,r,t,!0);if(!i||i.childCount)continue scan}return{depth:t,fit:a,move:i?e.doc.resolve(e.after(t+1)):e}}}}close(e){let t=this.findCloseLevel(e);if(!t)return null;for(;this.depth>t.depth;)this.closeFrontierNode();t.fit.childCount&&(this.placed=am(this.placed,t.depth,t.fit)),e=t.move;for(let n=t.depth+1;n<=e.depth;n++){let t=e.node(n),r=t.type.contentMatch.fillBefore(t.content,!0,e.index(n));this.openFrontierNode(t.type,t.attrs,r)}return e}openFrontierNode(e,t=null,n){let r=this.frontier[this.depth];r.match=r.match.matchType(e),this.placed=am(this.placed,this.depth,P.from(e.create(t,n))),this.frontier.push({type:e,match:e.contentMatch})}closeFrontierNode(){let e=this.frontier.pop().match.fillBefore(P.empty,!0);e.childCount&&(this.placed=am(this.placed,this.frontier.length,e))}};function im(e,t,n){return t==0?e.cutByIndex(n,e.childCount):e.replaceChild(0,e.firstChild.copy(im(e.firstChild.content,t-1,n)))}function am(e,t,n){return t==0?e.append(n):e.replaceChild(e.childCount-1,e.lastChild.copy(am(e.lastChild.content,t-1,n)))}function om(e,t){for(let n=0;n<t;n++)e=e.firstChild.content;return e}function sm(e,t,n){if(t<=0)return e;let r=e.content;return t>1&&(r=r.replaceChild(0,sm(r.firstChild,t-1,r.childCount==1?n-1:0))),t>0&&(r=e.type.contentMatch.fillBefore(r).append(r),n<=0&&(r=r.append(e.type.contentMatch.matchFragment(r).fillBefore(P.empty,!0)))),e.copy(r)}function cm(e,t,n,r,i){let a=e.node(t),o=i?e.indexAfter(t):e.index(t);if(o==a.childCount&&!n.compatibleContent(a.type))return null;let s=r.fillBefore(a.content,!0,o);return s&&!lm(n,a.content,o)?s:null}function lm(e,t,n){for(let r=n;r<t.childCount;r++)if(!e.allowsMarks(t.child(r).marks))return!0;return!1}function um(e){return e.spec.defining||e.spec.definingForContent}function dm(e,t){for(let n=0;;n++){let r=t<0?e.firstChild:e.lastChild;if(!r||r.isAtom)return n;e=r.content}}function fm(e,t,n,r){if(!r.size)return e.deleteRange(t,n);let i=e.doc.resolve(t),a=e.doc.resolve(n);if(nm(i,a,r))return e.step(new Dp(t,n,r));let o=gm(i,a);o[o.length-1]==0&&o.pop();let s=-(i.depth+1);o.unshift(s);for(let e=i.depth,t=i.pos-1;e>0;e--,t--){let n=i.node(e).type.spec;if(n.defining||n.definingAsContext||n.isolating)break;o.indexOf(e)>-1?s=e:i.before(e)==t&&o.splice(1,0,-e)}let c=o.indexOf(s),l=[],u=r.openStart;for(let e=r.content,t=0;;t++){let n=e.firstChild;if(l.push(n),t==r.openStart)break;e=n.content}for(let e=u-1;e>=0;e--){let t=l[e],n=um(t.type);if(n&&!t.sameMarkup(i.node(Math.abs(s)-1)))u=e;else if(n||!t.type.isTextblock)break}for(let t=r.openStart;t>=0;t--){let s=(t+u+1)%(r.openStart+1),d=l[s];if(d)for(let t=0;t<o.length;t++){let l=o[(t+c)%o.length],u=!0;l<0&&(u=!1,l=-l);let f=i.node(l-1),p=i.index(l-1);if(f.canReplaceWith(p,p,d.type,d.marks))return e.replace(i.before(l),u?a.after(l):n,new I(pm(r.content,0,r.openStart,s),s,r.openEnd))}}let d=e.steps.length;for(let s=o.length-1;s>=0&&(e.replace(t,n,r),!(e.steps.length>d));s--){let e=o[s];e<0||(t=i.before(e),n=a.after(e))}}function pm(e,t,n,r,i){if(t<n){let i=e.firstChild;e=e.replaceChild(0,i.copy(pm(i.content,t+1,n,r,i)))}if(t>r){let t=i.contentMatchAt(0),n=t.fillBefore(e).append(e);e=n.append(t.matchFragment(n).fillBefore(P.empty,!0))}return e}function mm(e,t,n,r){if(!r.isInline&&t==n&&e.doc.resolve(t).parent.content.size){let i=$p(e.doc,t,r.type);i!=null&&(t=n=i)}e.replaceRange(t,n,new I(P.from(r),0,0))}function hm(e,t,n){let r=e.doc.resolve(t),i=e.doc.resolve(n);if(r.parent.isTextblock&&i.parent.isTextblock&&r.start()!=i.start()&&r.parentOffset==0&&i.parentOffset==0){let a=r.sharedDepth(n),o=!1;for(let e=r.depth;e>a;e--)r.node(e).type.spec.isolating&&(o=!0);for(let e=i.depth;e>a;e--)i.node(e).type.spec.isolating&&(o=!0);if(!o){for(let e=r.depth;e>0&&t==r.start(e);e--)t=r.before(e);for(let e=i.depth;e>0&&n==i.start(e);e--)n=i.before(e);r=e.doc.resolve(t),i=e.doc.resolve(n)}}let a=gm(r,i);for(let t=0;t<a.length;t++){let n=a[t],o=t==a.length-1;if(o&&n==0||r.node(n).type.contentMatch.validEnd)return e.delete(r.start(n),i.end(n));if(n>0&&(o||r.node(n-1).canReplace(r.index(n-1),i.indexAfter(n-1))))return e.delete(r.before(n),i.after(n))}for(let a=1;a<=r.depth&&a<=i.depth;a++)if(t-r.start(a)==r.depth-a&&n>r.end(a)&&i.end(a)-n!=i.depth-a&&r.start(a-1)==i.start(a-1)&&r.node(a-1).canReplace(r.index(a-1),i.index(a-1)))return e.delete(r.before(a),n);e.delete(t,n)}function gm(e,t){let n=[],r=Math.min(e.depth,t.depth);for(let i=r;i>=0;i--){let r=e.start(i);if(r<e.pos-(e.depth-i)||t.end(i)>t.pos+(t.depth-i)||e.node(i).type.spec.isolating||t.node(i).type.spec.isolating)break;(r==t.start(i)||i==e.depth&&i==t.depth&&e.parent.inlineContent&&t.parent.inlineContent&&i&&t.start(i-1)==r-1)&&n.push(i)}return n}var _m=class e extends bp{constructor(e,t,n){super(),this.pos=e,this.attr=t,this.value=n}apply(e){let t=e.nodeAt(this.pos);if(!t)return xp.fail(`No node at attribute step's position`);let n=Object.create(null);for(let e in t.attrs)n[e]=t.attrs[e];n[this.attr]=this.value;let r=t.type.create(n,null,t.marks);return xp.fromReplace(e,this.pos,this.pos+1,new I(P.from(r),0,+!t.isLeaf))}getMap(){return _p.empty}invert(t){return new e(this.pos,this.attr,t.nodeAt(this.pos).attrs[this.attr])}map(t){let n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.attr,this.value)}toJSON(){return{stepType:`attr`,pos:this.pos,attr:this.attr,value:this.value}}static fromJSON(t,n){if(typeof n.pos!=`number`||typeof n.attr!=`string`)throw RangeError(`Invalid input for AttrStep.fromJSON`);return new e(n.pos,n.attr,n.value)}};bp.jsonID(`attr`,_m);var vm=class e extends bp{constructor(e,t){super(),this.attr=e,this.value=t}apply(e){let t=Object.create(null);for(let n in e.attrs)t[n]=e.attrs[n];t[this.attr]=this.value;let n=e.type.create(t,e.content,e.marks);return xp.ok(n)}getMap(){return _p.empty}invert(t){return new e(this.attr,t.attrs[this.attr])}map(e){return this}toJSON(){return{stepType:`docAttr`,attr:this.attr,value:this.value}}static fromJSON(t,n){if(typeof n.attr!=`string`)throw RangeError(`Invalid input for DocAttrStep.fromJSON`);return new e(n.attr,n.value)}};bp.jsonID(`docAttr`,vm);var ym=class extends Error{};ym=function e(t){let n=Error.call(this,t);return n.__proto__=e.prototype,n},ym.prototype=Object.create(Error.prototype),ym.prototype.constructor=ym,ym.prototype.name=`TransformError`;var bm=class{constructor(e){this.doc=e,this.steps=[],this.docs=[],this.mapping=new vp}get before(){return this.docs.length?this.docs[0]:this.doc}step(e){let t=this.maybeStep(e);if(t.failed)throw new ym(t.failed);return this}maybeStep(e){let t=e.apply(this.doc);return t.failed||this.addStep(e,t.doc),t}get docChanged(){return this.steps.length>0}changedRange(){let e=1e9,t=-1e9;for(let n=0;n<this.mapping.maps.length;n++){let r=this.mapping.maps[n];n&&(e=r.map(e,1),t=r.map(t,-1)),r.forEach((n,r,i,a)=>{e=Math.min(e,i),t=Math.max(t,a)})}return e==1e9?null:{from:e,to:t}}addStep(e,t){this.docs.push(this.doc),this.steps.push(e),this.mapping.appendMap(e.getMap()),this.doc=t}replace(e,t=e,n=I.empty){let r=tm(this.doc,e,t,n);return r&&this.step(r),this}replaceWith(e,t,n){return this.replace(e,t,new I(P.from(n),0,0))}delete(e,t){return this.replace(e,t,I.empty)}insert(e,t){return this.replaceWith(e,e,t)}replaceRange(e,t,n){return fm(this,e,t,n),this}replaceRangeWith(e,t,n){return mm(this,e,t,n),this}deleteRange(e,t){return hm(this,e,t),this}lift(e,t){return Fp(this,e,t),this}join(e,t=1){return Qp(this,e,t),this}wrap(e,t){return Bp(this,e,t),this}setBlockType(e,t=e,n,r=null){return Vp(this,e,t,n,r),this}setNodeMarkup(e,t,n=null,r){return Gp(this,e,t,n,r),this}setNodeAttribute(e,t,n){return this.step(new _m(e,t,n)),this}setDocAttribute(e,t){return this.step(new vm(e,t)),this}addNodeMark(e,t){return this.step(new Tp(e,t)),this}removeNodeMark(e,t){let n=this.doc.nodeAt(e);if(!n)throw RangeError(`No node at position `+e);if(t instanceof F)t.isInSet(n.marks)&&this.step(new Ep(e,t));else{let r=n.marks,i,a=[];for(;i=t.isInSet(r);)a.push(new Ep(e,i)),r=i.removeFromSet(r);for(let e=a.length-1;e>=0;e--)this.step(a[e])}return this}split(e,t=1,n){return qp(this,e,t,n),this}addMark(e,t,n){return Ap(this,e,t,n),this}removeMark(e,t,n){return jp(this,e,t,n),this}clearIncompatible(e,t,n){return Mp(this,e,t,n),this}},xm=Object.create(null),L=class{constructor(e,t,n){this.$anchor=e,this.$head=t,this.ranges=n||[new Sm(e.min(t),e.max(t))]}get anchor(){return this.$anchor.pos}get head(){return this.$head.pos}get from(){return this.$from.pos}get to(){return this.$to.pos}get $from(){return this.ranges[0].$from}get $to(){return this.ranges[0].$to}get empty(){let e=this.ranges;for(let t=0;t<e.length;t++)if(e[t].$from.pos!=e[t].$to.pos)return!1;return!0}content(){return this.$from.doc.slice(this.from,this.to,!0)}replace(e,t=I.empty){let n=t.content.lastChild,r=null;for(let e=0;e<t.openEnd;e++)r=n,n=n.lastChild;let i=e.steps.length,a=this.ranges;for(let o=0;o<a.length;o++){let{$from:s,$to:c}=a[o],l=e.mapping.slice(i);e.replaceRange(l.map(s.pos),l.map(c.pos),o?I.empty:t),o==0&&Am(e,i,(n?n.isInline:r&&r.isTextblock)?-1:1)}}replaceWith(e,t){let n=e.steps.length,r=this.ranges;for(let i=0;i<r.length;i++){let{$from:a,$to:o}=r[i],s=e.mapping.slice(n),c=s.map(a.pos),l=s.map(o.pos);i?e.deleteRange(c,l):(e.replaceRangeWith(c,l,t),Am(e,n,t.isInline?-1:1))}}static findFrom(e,t,n=!1){let r=e.parent.inlineContent?new R(e):km(e.node(0),e.parent,e.pos,e.index(),t,n);if(r)return r;for(let r=e.depth-1;r>=0;r--){let i=t<0?km(e.node(0),e.node(r),e.before(r+1),e.index(r),t,n):km(e.node(0),e.node(r),e.after(r+1),e.index(r)+1,t,n);if(i)return i}return null}static near(e,t=1){return this.findFrom(e,t)||this.findFrom(e,-t)||new Dm(e.node(0))}static atStart(e){return km(e,e,0,0,1)||new Dm(e)}static atEnd(e){return km(e,e,e.content.size,e.childCount,-1)||new Dm(e)}static fromJSON(e,t){if(!t||!t.type)throw RangeError(`Invalid input for Selection.fromJSON`);let n=xm[t.type];if(!n)throw RangeError(`No selection type ${t.type} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in xm)throw RangeError(`Duplicate use of selection JSON ID `+e);return xm[e]=t,t.prototype.jsonID=e,t}getBookmark(){return R.between(this.$anchor,this.$head).getBookmark()}};L.prototype.visible=!0;var Sm=class{constructor(e,t){this.$from=e,this.$to=t}},Cm=!1;function wm(e){!Cm&&!e.parent.inlineContent&&(Cm=!0,console.warn(`TextSelection endpoint not pointing into a node with inline content (`+e.parent.type.name+`)`))}var R=class e extends L{constructor(e,t=e){wm(e),wm(t),super(e,t)}get $cursor(){return this.$anchor.pos==this.$head.pos?this.$head:null}map(t,n){let r=t.resolve(n.map(this.head));if(!r.parent.inlineContent)return L.near(r);let i=t.resolve(n.map(this.anchor));return new e(i.parent.inlineContent?i:r,r)}replace(e,t=I.empty){if(super.replace(e,t),t==I.empty){let t=this.$from.marksAcross(this.$to);t&&e.ensureMarks(t)}}eq(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head}getBookmark(){return new Tm(this.anchor,this.head)}toJSON(){return{type:`text`,anchor:this.anchor,head:this.head}}static fromJSON(t,n){if(typeof n.anchor!=`number`||typeof n.head!=`number`)throw RangeError(`Invalid input for TextSelection.fromJSON`);return new e(t.resolve(n.anchor),t.resolve(n.head))}static create(e,t,n=t){let r=e.resolve(t);return new this(r,n==t?r:e.resolve(n))}static between(t,n,r){let i=t.pos-n.pos;if((!r||i)&&(r=i>=0?1:-1),!n.parent.inlineContent){let e=L.findFrom(n,r,!0)||L.findFrom(n,-r,!0);if(e)n=e.$head;else return L.near(n,r)}return t.parent.inlineContent||(i==0?t=n:(t=(L.findFrom(t,-r,!0)||L.findFrom(t,r,!0)).$anchor,t.pos<n.pos!=i<0&&(t=n))),new e(t,n)}};L.jsonID(`text`,R);var Tm=class e{constructor(e,t){this.anchor=e,this.head=t}map(t){return new e(t.map(this.anchor),t.map(this.head))}resolve(e){return R.between(e.resolve(this.anchor),e.resolve(this.head))}},z=class e extends L{constructor(e){let t=e.nodeAfter,n=e.node(0).resolve(e.pos+t.nodeSize);super(e,n),this.node=t}map(t,n){let{deleted:r,pos:i}=n.mapResult(this.anchor),a=t.resolve(i);return r?L.near(a):new e(a)}content(){return new I(P.from(this.node),0,0)}eq(t){return t instanceof e&&t.anchor==this.anchor}toJSON(){return{type:`node`,anchor:this.anchor}}getBookmark(){return new Em(this.anchor)}static fromJSON(t,n){if(typeof n.anchor!=`number`)throw RangeError(`Invalid input for NodeSelection.fromJSON`);return new e(t.resolve(n.anchor))}static create(t,n){return new e(t.resolve(n))}static isSelectable(e){return!e.isText&&e.type.spec.selectable!==!1}};z.prototype.visible=!1,L.jsonID(`node`,z);var Em=class e{constructor(e){this.anchor=e}map(t){let{deleted:n,pos:r}=t.mapResult(this.anchor);return n?new Tm(r,r):new e(r)}resolve(e){let t=e.resolve(this.anchor),n=t.nodeAfter;return n&&z.isSelectable(n)?new z(t):L.near(t)}},Dm=class e extends L{constructor(e){super(e.resolve(0),e.resolve(e.content.size))}replace(e,t=I.empty){if(t==I.empty){e.delete(0,e.doc.content.size);let t=L.atStart(e.doc);t.eq(e.selection)||e.setSelection(t)}else super.replace(e,t)}toJSON(){return{type:`all`}}static fromJSON(t){return new e(t)}map(t){return new e(t)}eq(t){return t instanceof e}getBookmark(){return Om}};L.jsonID(`all`,Dm);var Om={map(){return this},resolve(e){return new Dm(e)}};function km(e,t,n,r,i,a=!1){if(t.inlineContent)return R.create(e,n);for(let o=r-(i>0?0:1);i>0?o<t.childCount:o>=0;o+=i){let r=t.child(o);if(!r.isAtom){let t=km(e,r,n+i,i<0?r.childCount:0,i,a);if(t)return t}else if(!a&&z.isSelectable(r))return z.create(e,n-(i<0?r.nodeSize:0));n+=r.nodeSize*i}return null}function Am(e,t,n){let r=e.steps.length-1;if(r<t)return;let i=e.steps[r];if(!(i instanceof Dp||i instanceof Op))return;let a=e.mapping.maps[r],o;a.forEach((e,t,n,r)=>{o??=r}),e.setSelection(L.near(e.doc.resolve(o),n))}var jm=1,Mm=2,Nm=4,Pm=class extends bm{constructor(e){super(e.doc),this.curSelectionFor=0,this.updated=0,this.meta=Object.create(null),this.time=Date.now(),this.curSelection=e.selection,this.storedMarks=e.storedMarks}get selection(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection}setSelection(e){if(e.$from.doc!=this.doc)throw RangeError(`Selection passed to setSelection must point at the current document`);return this.curSelection=e,this.curSelectionFor=this.steps.length,this.updated=(this.updated|jm)&-3,this.storedMarks=null,this}get selectionSet(){return(this.updated&jm)>0}setStoredMarks(e){return this.storedMarks=e,this.updated|=Mm,this}ensureMarks(e){return F.sameSet(this.storedMarks||this.selection.$from.marks(),e)||this.setStoredMarks(e),this}addStoredMark(e){return this.ensureMarks(e.addToSet(this.storedMarks||this.selection.$head.marks()))}removeStoredMark(e){return this.ensureMarks(e.removeFromSet(this.storedMarks||this.selection.$head.marks()))}get storedMarksSet(){return(this.updated&Mm)>0}addStep(e,t){super.addStep(e,t),this.updated&=-3,this.storedMarks=null}setTime(e){return this.time=e,this}replaceSelection(e){return this.selection.replace(this,e),this}replaceSelectionWith(e,t=!0){let n=this.selection;return t&&(e=e.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||F.none))),n.replaceWith(this,e),this}deleteSelection(){return this.selection.replace(this),this}insertText(e,t,n){let r=this.doc.type.schema;if(t==null)return e?this.replaceSelectionWith(r.text(e),!0):this.deleteSelection();{if(n??=t,!e)return this.deleteRange(t,n);let i=this.storedMarks;if(!i){let e=this.doc.resolve(t);i=n==t?e.marks():e.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(t,n,r.text(e,i)),!this.selection.empty&&this.selection.to==t+e.length&&this.setSelection(L.near(this.selection.$to)),this}}setMeta(e,t){return this.meta[typeof e==`string`?e:e.key]=t,this}getMeta(e){return this.meta[typeof e==`string`?e:e.key]}get isGeneric(){for(let e in this.meta)return!1;return!0}scrollIntoView(){return this.updated|=Nm,this}get scrolledIntoView(){return(this.updated&Nm)>0}};function Fm(e,t){return!t||!e?e:e.bind(t)}var Im=class{constructor(e,t,n){this.name=e,this.init=Fm(t.init,n),this.apply=Fm(t.apply,n)}},Lm=[new Im(`doc`,{init(e){return e.doc||e.schema.topNodeType.createAndFill()},apply(e){return e.doc}}),new Im(`selection`,{init(e,t){return e.selection||L.atStart(t.doc)},apply(e){return e.selection}}),new Im(`storedMarks`,{init(e){return e.storedMarks||null},apply(e,t,n,r){return r.selection.$cursor?e.storedMarks:null}}),new Im(`scrollToSelection`,{init(){return 0},apply(e,t){return e.scrolledIntoView?t+1:t}})],Rm=class{constructor(e,t){this.schema=e,this.plugins=[],this.pluginsByKey=Object.create(null),this.fields=Lm.slice(),t&&t.forEach(e=>{if(this.pluginsByKey[e.key])throw RangeError(`Adding different instances of a keyed plugin (`+e.key+`)`);this.plugins.push(e),this.pluginsByKey[e.key]=e,e.spec.state&&this.fields.push(new Im(e.key,e.spec.state,e))})}},zm=class e{constructor(e){this.config=e}get schema(){return this.config.schema}get plugins(){return this.config.plugins}apply(e){return this.applyTransaction(e).state}filterTransaction(e,t=-1){for(let n=0;n<this.config.plugins.length;n++)if(n!=t){let t=this.config.plugins[n];if(t.spec.filterTransaction&&!t.spec.filterTransaction.call(t,e,this))return!1}return!0}applyTransaction(e){if(!this.filterTransaction(e))return{state:this,transactions:[]};let t=[e],n=this.applyInner(e),r=null;for(;;){let i=!1;for(let a=0;a<this.config.plugins.length;a++){let o=this.config.plugins[a];if(o.spec.appendTransaction){let s=r?r[a].n:0,c=r?r[a].state:this,l=s<t.length&&o.spec.appendTransaction.call(o,s?t.slice(s):t,c,n);if(l&&n.filterTransaction(l,a)){if(l.setMeta(`appendedTransaction`,e),!r){r=[];for(let e=0;e<this.config.plugins.length;e++)r.push(e<a?{state:n,n:t.length}:{state:this,n:0})}t.push(l),n=n.applyInner(l),i=!0}r&&(r[a]={state:n,n:t.length})}}if(!i)return{state:n,transactions:t}}}applyInner(t){if(!t.before.eq(this.doc))throw RangeError(`Applying a mismatched transaction`);let n=new e(this.config),r=this.config.fields;for(let e=0;e<r.length;e++){let i=r[e];n[i.name]=i.apply(t,this[i.name],this,n)}return n}get tr(){return new Pm(this)}static create(t){let n=new Rm(t.doc?t.doc.type.schema:t.schema,t.plugins),r=new e(n);for(let e=0;e<n.fields.length;e++)r[n.fields[e].name]=n.fields[e].init(t,r);return r}reconfigure(t){let n=new Rm(this.schema,t.plugins),r=n.fields,i=new e(n);for(let e=0;e<r.length;e++){let n=r[e].name;i[n]=this.hasOwnProperty(n)?this[n]:r[e].init(t,i)}return i}toJSON(e){let t={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(t.storedMarks=this.storedMarks.map(e=>e.toJSON())),e&&typeof e==`object`)for(let n in e){if(n==`doc`||n==`selection`)throw RangeError("The JSON fields `doc` and `selection` are reserved");let r=e[n],i=r.spec.state;i&&i.toJSON&&(t[n]=i.toJSON.call(r,this[r.key]))}return t}static fromJSON(t,n,r){if(!n)throw RangeError(`Invalid input for EditorState.fromJSON`);if(!t.schema)throw RangeError(`Required config field 'schema' missing`);let i=new Rm(t.schema,t.plugins),a=new e(i);return i.fields.forEach(e=>{if(e.name==`doc`)a.doc=df.fromJSON(t.schema,n.doc);else if(e.name==`selection`)a.selection=L.fromJSON(a.doc,n.selection);else if(e.name==`storedMarks`)n.storedMarks&&(a.storedMarks=n.storedMarks.map(t.schema.markFromJSON));else{if(r)for(let i in r){let o=r[i],s=o.spec.state;if(o.key==e.name&&s&&s.fromJSON&&Object.prototype.hasOwnProperty.call(n,i)){a[e.name]=s.fromJSON.call(o,t,n[i],a);return}}a[e.name]=e.init(t,a)}}),a}};function Bm(e,t,n){for(let r in e){let i=e[r];i instanceof Function?i=i.bind(t):r==`handleDOMEvents`&&(i=Bm(i,t,{})),n[r]=i}return n}var B=class{constructor(e){this.spec=e,this.props={},e.props&&Bm(e.props,this,this.props),this.key=e.key?e.key.key:Hm(`plugin`)}getState(e){return e[this.key]}},Vm=Object.create(null);function Hm(e){return e in Vm?e+`$`+ ++Vm[e]:(Vm[e]=0,e+`$`)}var V=class{constructor(e=`key`){this.key=Hm(e)}get(e){return e.config.pluginsByKey[this.key]}getState(e){return e[this.key]}},Um=(e,t)=>!e.selection.empty&&(t&&t(e.tr.deleteSelection().scrollIntoView()),!0);function Wm(e,t){let{$cursor:n}=e.selection;return!n||(t?!t.endOfTextblock(`backward`,e):n.parentOffset>0)?null:n}var Gm=(e,t,n)=>{let r=Wm(e,n);if(!r)return!1;let i=Zm(r);if(!i){let n=r.blockRange(),i=n&&Pp(n);return i!=null&&(t&&t(e.tr.lift(n,i).scrollIntoView()),!0)}let a=i.nodeBefore;if(hh(e,i,t,-1))return!0;if(r.parent.content.size==0&&(Ym(a,`end`)||z.isSelectable(a)))for(let n=r.depth;;n--){let o=tm(e.doc,r.before(n),r.after(n),I.empty);if(o&&o.slice.size<o.to-o.from){if(t){let n=e.tr.step(o);n.setSelection(Ym(a,`end`)?L.findFrom(n.doc.resolve(n.mapping.map(i.pos,-1)),-1):z.create(n.doc,i.pos-a.nodeSize)),t(n.scrollIntoView())}return!0}if(n==1||r.node(n-1).childCount>1)break}return a.isAtom&&i.depth==r.depth-1?(t&&t(e.tr.delete(i.pos-a.nodeSize,i.pos).scrollIntoView()),!0):!1},Km=(e,t,n)=>{let r=Wm(e,n);if(!r)return!1;let i=Zm(r);return i?Jm(e,i,t):!1},qm=(e,t,n)=>{let r=Qm(e,n);if(!r)return!1;let i=th(r);return i?Jm(e,i,t):!1};function Jm(e,t,n){let r=t.nodeBefore,i=t.pos-1;for(;!r.isTextblock;i--){if(r.type.spec.isolating)return!1;let e=r.lastChild;if(!e)return!1;r=e}let a=t.nodeAfter,o=t.pos+1;for(;!a.isTextblock;o++){if(a.type.spec.isolating)return!1;let e=a.firstChild;if(!e)return!1;a=e}let s=tm(e.doc,i,o,I.empty);if(!s||s.from!=i||s instanceof Dp&&s.slice.size>=o-i)return!1;if(n){let t=e.tr.step(s);t.setSelection(R.create(t.doc,i)),n(t.scrollIntoView())}return!0}function Ym(e,t,n=!1){for(let r=e;r;r=t==`start`?r.firstChild:r.lastChild){if(r.isTextblock)return!0;if(n&&r.childCount!=1)return!1}return!1}var Xm=(e,t,n)=>{let{$head:r,empty:i}=e.selection,a=r;if(!i)return!1;if(r.parent.isTextblock){if(n?!n.endOfTextblock(`backward`,e):r.parentOffset>0)return!1;a=Zm(r)}let o=a&&a.nodeBefore;return!o||!z.isSelectable(o)?!1:(t&&t(e.tr.setSelection(z.create(e.doc,a.pos-o.nodeSize)).scrollIntoView()),!0)};function Zm(e){if(!e.parent.type.spec.isolating)for(let t=e.depth-1;t>=0;t--){if(e.index(t)>0)return e.doc.resolve(e.before(t+1));if(e.node(t).type.spec.isolating)break}return null}function Qm(e,t){let{$cursor:n}=e.selection;return!n||(t?!t.endOfTextblock(`forward`,e):n.parentOffset<n.parent.content.size)?null:n}var $m=(e,t,n)=>{let r=Qm(e,n);if(!r)return!1;let i=th(r);if(!i)return!1;let a=i.nodeAfter;if(hh(e,i,t,1))return!0;if(r.parent.content.size==0&&(Ym(a,`start`)||z.isSelectable(a))){let n=tm(e.doc,r.before(),r.after(),I.empty);if(n&&n.slice.size<n.to-n.from){if(t){let r=e.tr.step(n);r.setSelection(Ym(a,`start`)?L.findFrom(r.doc.resolve(r.mapping.map(i.pos)),1):z.create(r.doc,r.mapping.map(i.pos))),t(r.scrollIntoView())}return!0}}return a.isAtom&&i.depth==r.depth-1?(t&&t(e.tr.delete(i.pos,i.pos+a.nodeSize).scrollIntoView()),!0):!1},eh=(e,t,n)=>{let{$head:r,empty:i}=e.selection,a=r;if(!i)return!1;if(r.parent.isTextblock){if(n?!n.endOfTextblock(`forward`,e):r.parentOffset<r.parent.content.size)return!1;a=th(r)}let o=a&&a.nodeAfter;return!o||!z.isSelectable(o)?!1:(t&&t(e.tr.setSelection(z.create(e.doc,a.pos)).scrollIntoView()),!0)};function th(e){if(!e.parent.type.spec.isolating)for(let t=e.depth-1;t>=0;t--){let n=e.node(t);if(e.index(t)+1<n.childCount)return e.doc.resolve(e.after(t+1));if(n.type.spec.isolating)break}return null}var nh=(e,t)=>{let n=e.selection,r=n instanceof z,i;if(r){if(n.node.isTextblock||!Jp(e.doc,n.from))return!1;i=n.from}else if(i=Zp(e.doc,n.from,-1),i==null)return!1;if(t){let n=e.tr.join(i);r&&n.setSelection(z.create(n.doc,i-e.doc.resolve(i).nodeBefore.nodeSize)),t(n.scrollIntoView())}return!0},rh=(e,t)=>{let n=e.selection,r;if(n instanceof z){if(n.node.isTextblock||!Jp(e.doc,n.to))return!1;r=n.to}else if(r=Zp(e.doc,n.to,1),r==null)return!1;return t&&t(e.tr.join(r).scrollIntoView()),!0},ih=(e,t)=>{let{$from:n,$to:r}=e.selection,i=n.blockRange(r),a=i&&Pp(i);return a!=null&&(t&&t(e.tr.lift(i,a).scrollIntoView()),!0)},ah=(e,t)=>{let{$head:n,$anchor:r}=e.selection;return!n.parent.type.spec.code||!n.sameParent(r)?!1:(t&&t(e.tr.insertText(`
`).scrollIntoView()),!0)};function oh(e){for(let t=0;t<e.edgeCount;t++){let{type:n}=e.edge(t);if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}var sh=(e,t)=>{let{$head:n,$anchor:r}=e.selection;if(!n.parent.type.spec.code||!n.sameParent(r))return!1;let i=n.node(-1),a=n.indexAfter(-1),o=oh(i.contentMatchAt(a));if(!o||!i.canReplaceWith(a,a,o))return!1;if(t){let r=n.after(),i=e.tr.replaceWith(r,r,o.createAndFill());i.setSelection(L.near(i.doc.resolve(r),1)),t(i.scrollIntoView())}return!0},ch=(e,t)=>{let n=e.selection,{$from:r,$to:i}=n;if(n instanceof Dm||r.parent.inlineContent||i.parent.inlineContent)return!1;let a=oh(i.parent.contentMatchAt(i.indexAfter()));if(!a||!a.isTextblock)return!1;if(t){let n=(!r.parentOffset&&i.index()<i.parent.childCount?r:i).pos,o=e.tr.insert(n,a.createAndFill());o.setSelection(R.create(o.doc,n+1)),t(o.scrollIntoView())}return!0},lh=(e,t)=>{let{$cursor:n}=e.selection;if(!n||n.parent.content.size)return!1;if(n.depth>1&&n.after()!=n.end(-1)){let r=n.before();if(Kp(e.doc,r))return t&&t(e.tr.split(r).scrollIntoView()),!0}let r=n.blockRange(),i=r&&Pp(r);return i!=null&&(t&&t(e.tr.lift(r,i).scrollIntoView()),!0)};function uh(e){return(t,n)=>{if(t.selection instanceof z&&t.selection.node.isBlock){let{$from:e}=t.selection;return!e.parentOffset||!Kp(t.doc,e.pos)?!1:(n&&n(t.tr.split(e.pos).scrollIntoView()),!0)}if(!t.selection.$from.depth)return!1;let r=t.tr;!t.selection.empty&&(t.selection instanceof R||t.selection instanceof Dm)&&r.deleteSelection();let{$from:i}=r.selection,a=r.steps.length,o=[],s,c,l=!1,u=!1;for(let t=i.depth;;t--)if(i.node(t).isBlock){l=i.end(t)==i.pos+(i.depth-t),u=i.start(t)==i.pos-(i.depth-t),c=oh(i.node(t-1).contentMatchAt(i.indexAfter(t-1)));let n=e&&e(i.parent,l,i);o.unshift(n||(l&&c?{type:c}:null)),s=t;break}else{if(t==1)return!1;o.unshift(null)}let d=i.pos,f=Kp(r.doc,d,o.length,o);if(f||=(o[0]=c?{type:c}:null,Kp(r.doc,d,o.length,o)),!f)return!1;if(r.split(d,o.length,o),!l&&u&&i.node(s).type!=c){let e=r.mapping.slice(a),t=e.map(i.before(s)),n=r.doc.resolve(t);c&&i.node(s-1).canReplaceWith(n.index(),n.index()+1,c)&&r.setNodeMarkup(e.map(i.before(s)),c)}return n&&n(r.scrollIntoView()),!0}}var dh=uh(),fh=(e,t)=>{let{$from:n,to:r}=e.selection,i,a=n.sharedDepth(r);return a!=0&&(i=n.before(a),t&&t(e.tr.setSelection(z.create(e.doc,i))),!0)},ph=(e,t)=>(t&&t(e.tr.setSelection(new Dm(e.doc))),!0);function mh(e,t,n){let r=t.nodeBefore,i=t.nodeAfter,a=t.index();return!r||!i||!r.type.compatibleContent(i.type)?!1:!r.content.size&&t.parent.canReplace(a-1,a)?(n&&n(e.tr.delete(t.pos-r.nodeSize,t.pos).scrollIntoView()),!0):!t.parent.canReplace(a,a+1)||!(i.isTextblock||Jp(e.doc,t.pos))?!1:(n&&n(e.tr.join(t.pos).scrollIntoView()),!0)}function hh(e,t,n,r){let i=t.nodeBefore,a=t.nodeAfter,o,s,c=i.type.spec.isolating||a.type.spec.isolating;if(!c&&mh(e,t,n))return!0;let l=!c&&t.parent.canReplace(t.index(),t.index()+1);if(l&&(o=(s=i.contentMatchAt(i.childCount)).findWrapping(a.type))&&s.matchType(o[0]||a.type).validEnd){if(n){let r=t.pos+a.nodeSize,s=P.empty;for(let e=o.length-1;e>=0;e--)s=P.from(o[e].create(null,s));s=P.from(i.copy(s));let c=e.tr.step(new Op(t.pos-1,r,t.pos,r,new I(s,1,0),o.length,!0)),l=c.doc.resolve(r+2*o.length);l.nodeAfter&&l.nodeAfter.type==i.type&&Jp(c.doc,l.pos)&&c.join(l.pos),n(c.scrollIntoView())}return!0}let u=a.type.spec.isolating||r>0&&c?null:L.findFrom(t,1),d=u&&u.$from.blockRange(u.$to),f=d&&Pp(d);if(f!=null&&f>=t.depth)return n&&n(e.tr.lift(d,f).scrollIntoView()),!0;if(l&&Ym(a,`start`,!0)&&Ym(i,`end`)){let r=i,o=[];for(;o.push(r),!r.isTextblock;)r=r.lastChild;let s=a,c=1;for(;!s.isTextblock;s=s.firstChild)c++;if(r.canReplace(r.childCount,r.childCount,s.content)){if(n){let r=P.empty;for(let e=o.length-1;e>=0;e--)r=P.from(o[e].copy(r));n(e.tr.step(new Op(t.pos-o.length,t.pos+a.nodeSize,t.pos+c,t.pos+a.nodeSize-c,new I(r,o.length,0),0,!0)).scrollIntoView())}return!0}}return!1}function gh(e){return function(t,n){let r=t.selection,i=e<0?r.$from:r.$to,a=i.depth;for(;i.node(a).isInline;){if(!a)return!1;a--}return i.node(a).isTextblock?(n&&n(t.tr.setSelection(R.create(t.doc,e<0?i.start(a):i.end(a)))),!0):!1}}var _h=gh(-1),vh=gh(1);function yh(e,t=null){return function(n,r){let{$from:i,$to:a}=n.selection,o=i.blockRange(a),s=o&&Ip(o,e,t);return s?(r&&r(n.tr.wrap(o,s).scrollIntoView()),!0):!1}}function bh(e,t=null){return function(n,r){let i=!1;for(let r=0;r<n.selection.ranges.length&&!i;r++){let{$from:{pos:a},$to:{pos:o}}=n.selection.ranges[r];n.doc.nodesBetween(a,o,(r,a)=>{if(i)return!1;if(r.isTextblock&&!r.hasMarkup(e,t)){if(r.type==e)i=!0;else{let t=n.doc.resolve(a),r=t.index();i=t.parent.canReplaceWith(r,r+1,e)}}})}if(!i)return!1;if(r){let i=n.tr;for(let r=0;r<n.selection.ranges.length;r++){let{$from:{pos:a},$to:{pos:o}}=n.selection.ranges[r];i.setBlockType(a,o,e,t)}r(i.scrollIntoView())}return!0}}function xh(...e){return function(t,n,r){for(let i=0;i<e.length;i++)if(e[i](t,n,r))return!0;return!1}}var Sh=xh(Um,Gm,Xm),Ch=xh(Um,$m,eh),wh={Enter:xh(ah,ch,lh,dh),"Mod-Enter":sh,Backspace:Sh,"Mod-Backspace":Sh,"Shift-Backspace":Sh,Delete:Ch,"Mod-Delete":Ch,"Mod-a":ph},Th={"Ctrl-h":wh.Backspace,"Alt-Backspace":wh[`Mod-Backspace`],"Ctrl-d":wh.Delete,"Ctrl-Alt-Backspace":wh[`Mod-Delete`],"Alt-Delete":wh[`Mod-Delete`],"Alt-d":wh[`Mod-Delete`],"Ctrl-a":_h,"Ctrl-e":vh};for(let e in wh)Th[e]=wh[e];typeof navigator<`u`?/Mac|iP(hone|[oa]d)/.test(navigator.platform):typeof os<`u`&&os.platform&&os.platform();function Eh(e,t=null){return function(n,r){let{$from:i,$to:a}=n.selection,o=i.blockRange(a);if(!o)return!1;let s=r?n.tr:null;return Dh(s,o,e,t)?(r&&r(s.scrollIntoView()),!0):!1}}function Dh(e,t,n,r=null){let i=!1,a=t,o=t.$from.doc;if(t.depth>=2&&t.$from.node(t.depth-1).type.compatibleContent(n)&&t.startIndex==0){if(t.$from.index(t.depth-1)==0)return!1;let e=o.resolve(t.start-2);a=new lf(e,e,t.depth),t.endIndex<t.parent.childCount&&(t=new lf(t.$from,o.resolve(t.$to.end(t.depth)),t.depth)),i=!0}let s=Ip(a,n,r,t);return s?(e&&Oh(e,t,s,i,n),!0):!1}function Oh(e,t,n,r,i){let a=P.empty;for(let e=n.length-1;e>=0;e--)a=P.from(n[e].type.create(n[e].attrs,a));e.step(new Op(t.start-(r?2:0),t.end,t.start,t.end,new I(a,0,0),n.length,!0));let o=0;for(let e=0;e<n.length;e++)n[e].type==i&&(o=e+1);let s=n.length-o,c=t.start+n.length-(r?2:0),l=t.parent;for(let n=t.startIndex,r=t.endIndex,i=!0;n<r;n++,i=!1)!i&&Kp(e.doc,c,s)&&(e.split(c,s),c+=2*s),c+=l.child(n).nodeSize;return e}function kh(e){return function(t,n){let{$from:r,$to:i}=t.selection,a=r.blockRange(i,t=>t.childCount>0&&t.firstChild.type==e);return a?n?r.node(a.depth-1).type==e?Ah(t,n,e,a):jh(t,n,a):!0:!1}}function Ah(e,t,n,r){let i=e.tr,a=r.end,o=r.$to.end(r.depth);a<o&&(i.step(new Op(a-1,o,a,o,new I(P.from(n.create(null,r.parent.copy())),1,0),1,!0)),r=new lf(i.doc.resolve(r.$from.pos),i.doc.resolve(o),r.depth));let s=Pp(r);if(s==null)return!1;i.lift(r,s);let c=i.doc.resolve(i.mapping.map(a,-1)-1);return Jp(i.doc,c.pos)&&c.nodeBefore.type==c.nodeAfter.type&&i.join(c.pos),t(i.scrollIntoView()),!0}function jh(e,t,n){let r=e.tr,i=n.parent;for(let e=n.end,t=n.endIndex-1,a=n.startIndex;t>a;t--)e-=i.child(t).nodeSize,r.delete(e-1,e+1);let a=r.doc.resolve(n.start),o=a.nodeAfter;if(r.mapping.map(n.end)!=n.start+a.nodeAfter.nodeSize)return!1;let s=n.startIndex==0,c=n.endIndex==i.childCount,l=a.node(-1),u=a.index(-1);if(!l.canReplace(u+ +!s,u+1,o.content.append(c?P.empty:P.from(i))))return!1;let d=a.pos,f=d+o.nodeSize;return r.step(new Op(d-+!!s,f+ +!!c,d+1,f-1,new I((s?P.empty:P.from(i.copy(P.empty))).append(c?P.empty:P.from(i.copy(P.empty))),+!s,+!c),+!s)),t(r.scrollIntoView()),!0}function Mh(e){return function(t,n){let{$from:r,$to:i}=t.selection,a=r.blockRange(i,t=>t.childCount>0&&t.firstChild.type==e);if(!a)return!1;let o=a.startIndex;if(o==0)return!1;let s=a.parent,c=s.child(o-1);if(c.type!=e)return!1;if(n){let r=c.lastChild&&c.lastChild.type==s.type,i=P.from(r?e.create():null),o=new I(P.from(e.create(null,P.from(s.type.create(null,i)))),r?3:1,0),l=a.start,u=a.end;n(t.tr.step(new Op(l-(r?3:1),u,l,u,o,1,!0)).scrollIntoView())}return!0}}var Nh=function(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t},Ph=function(e){let t=e.assignedSlot||e.parentNode;return t&&t.nodeType==11?t.host:t},Fh=null,Ih=function(e,t,n){let r=Fh||=document.createRange();return r.setEnd(e,n??e.nodeValue.length),r.setStart(e,t||0),r},Lh=function(){Fh=null},Rh=function(e,t,n,r){return n&&(Bh(e,t,n,r,-1)||Bh(e,t,n,r,1))},zh=/^(img|br|input|textarea|hr)$/i;function Bh(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:Vh(e))){let n=e.parentNode;if(!n||!H(n)||qh(e)||zh.test(e.nodeName)||e.contentEditable==`false`)return!1;t=Nh(e)+(i<0?0:1),e=n}else if(H(e)){let n=e.childNodes[t+(i<0?-1:0)];if(H(n)&&n.contentEditable==`false`){if(n.pmViewDesc?.ignoreForSelection)t+=i;else return!1}else e=n,t=i<0?Vh(e):0}else return!1}}function Vh(e){return e.nodeType==3?e.nodeValue.length:e.childNodes.length}function H(e){return e.nodeType==1}function Hh(e){return e.nodeType==3}function Uh(e,t){return t?e.contains(H(t)?t:t.parentNode):!1}function Wh(e,t){for(;;){if(Hh(e)&&t)return e;if(H(e)&&t>0){if(e.contentEditable==`false`)return null;e=e.childNodes[t-1],t=Vh(e)}else if(e.parentNode&&!qh(e))t=Nh(e),e=e.parentNode;else return null}}function Gh(e,t){for(;;){if(Hh(e)&&t<e.nodeValue.length)return e;if(H(e)&&t<e.childNodes.length){if(e.contentEditable==`false`)return null;e=e.childNodes[t],t=0}else if(e.parentNode&&!qh(e))t=Nh(e)+1,e=e.parentNode;else return null}}function Kh(e,t,n){for(let r=t==0,i=t==Vh(e);r||i;){if(e==n)return!0;let t=Nh(e);if(e=e.parentNode,!e)return!1;r&&=t==0,i&&=t==Vh(e)}}function qh(e){let t;for(let n=e;n&&!(t=n.pmViewDesc);n=n.parentNode);return t&&t.node&&t.node.isBlock&&(t.dom==e||t.contentDOM==e)}var Jh=function(e){return e.focusNode&&Rh(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)};function Yh(e,t){let n=document.createEvent(`Event`);return n.initEvent(`keydown`,!0,!0),n.keyCode=e,n.key=n.code=t,n}function Xh(e){let t=e.activeElement;for(;t&&t.shadowRoot;)t=t.shadowRoot.activeElement;return t}function Zh(e,t,n){if(e.caretPositionFromPoint)try{let r=e.caretPositionFromPoint(t,n);if(r)return{node:r.offsetNode,offset:Math.min(Vh(r.offsetNode),r.offset)}}catch{}if(e.caretRangeFromPoint){let r=e.caretRangeFromPoint(t,n);if(r)return{node:r.startContainer,offset:Math.min(Vh(r.startContainer),r.startOffset)}}}var Qh=typeof navigator<`u`?navigator:null,$h=typeof document<`u`?document:null,eg=Qh&&Qh.userAgent||``,tg=/Edge\/(\d+)/.exec(eg),ng=/MSIE \d/.exec(eg),rg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(eg),ig=!!(ng||rg||tg),ag=ng?document.documentMode:rg?+rg[1]:tg?+tg[1]:0,og=!ig&&/gecko\/(\d+)/i.test(eg);og&&+(/Firefox\/(\d+)/.exec(eg)||[0,0])[1];var sg=!ig&&/Chrome\/(\d+)/.exec(eg),cg=!!sg,lg=sg?+sg[1]:0,ug=!ig&&!!Qh&&/Apple Computer/.test(Qh.vendor),dg=ug&&(/Mobile\/\w+/.test(eg)||!!Qh&&Qh.maxTouchPoints>2),fg=dg||(Qh?/Mac/.test(Qh.platform):!1),pg=Qh?/Win/.test(Qh.platform):!1,mg=/Android \d/.test(eg),hg=!!$h&&`webkitFontSmoothing`in $h.documentElement.style,gg=hg?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0;function _g(e){let t=e.defaultView&&e.defaultView.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.documentElement.clientWidth,top:0,bottom:e.documentElement.clientHeight}}function vg(e,t){return typeof e==`number`?e:e[t]}function yg(e){let t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return{left:t.left,right:t.left+e.clientWidth*n,top:t.top,bottom:t.top+e.clientHeight*r}}function bg(e,t,n){if(!Fg(t)&&t.left==0)return;let r=e.someProp(`scrollThreshold`)||0,i=e.someProp(`scrollMargin`)||5,a=e.dom.ownerDocument;for(let o=n||e.dom;o;){if(!H(o)){o=Ph(o);continue}let e=o==a.body,n=e?_g(a):yg(o),s=0,c=0;if(t.top<n.top+vg(r,`top`)?c=-(n.top-t.top+vg(i,`top`)):t.bottom>n.bottom-vg(r,`bottom`)&&(c=t.bottom-t.top>n.bottom-n.top?t.top+vg(i,`top`)-n.top:t.bottom-n.bottom+vg(i,`bottom`)),t.left<n.left+vg(r,`left`)?s=-(n.left-t.left+vg(i,`left`)):t.right>n.right-vg(r,`right`)&&(s=t.right-n.right+vg(i,`right`)),s||c){if(e)a.defaultView.scrollBy(s,c);else{let e=o.scrollLeft,n=o.scrollTop;c&&(o.scrollTop+=c),s&&(o.scrollLeft+=s);let r=o.scrollLeft-e,i=o.scrollTop-n;t={left:t.left-r,top:t.top-i,right:t.right-r,bottom:t.bottom-i}}}let l=e?`fixed`:getComputedStyle(o).position;if(/^(fixed|sticky)$/.test(l))break;o=l==`absolute`?o.offsetParent:Ph(o)}}function xg(e){let t=e.dom.getBoundingClientRect(),n=Math.max(0,t.top),r,i;for(let a=(t.left+t.right)/2,o=n+1;o<Math.min(innerHeight,t.bottom);o+=5){let t=e.root.elementFromPoint(a,o);if(!t||t==e.dom||!e.dom.contains(t))continue;let s=t.getBoundingClientRect();if(s.top>=n-20){r=t,i=s.top;break}}return{refDOM:r,refTop:i,stack:Sg(e.dom)}}function Sg(e){let t=[],n=e.ownerDocument;for(let r=e;r&&(t.push({dom:r,top:r.scrollTop,left:r.scrollLeft}),e!=n);r=Ph(r));return t}function Cg({refDOM:e,refTop:t,stack:n}){let r=e?e.getBoundingClientRect().top:0;wg(n,r==0?0:r-t)}function wg(e,t){for(let n=0;n<e.length;n++){let{dom:r,top:i,left:a}=e[n];r.scrollTop!=i+t&&(r.scrollTop=i+t),r.scrollLeft!=a&&(r.scrollLeft=a)}}var Tg=null;function Eg(e){if(e.setActive)return e.setActive();if(Tg)return e.focus(Tg);let t=Sg(e);e.focus(Tg==null?{get preventScroll(){return Tg={preventScroll:!0},!0}}:void 0),Tg||(Tg=!1,wg(t,0))}function Dg(e,t){let n,r=2e8,i,a=0,o=t.top,s=t.top,c,l;for(let u=e.firstChild,d=0;u;u=u.nextSibling,d++){let e;if(H(u))e=u.getClientRects();else if(Hh(u))e=Ih(u).getClientRects();else continue;for(let f=0;f<e.length;f++){let p=e[f];if(p.top<=o&&p.bottom>=s){o=Math.max(p.bottom,o),s=Math.min(p.top,s);let e=p.left>t.left?p.left-t.left:p.right<t.left?t.left-p.right:0;if(e<r){n=u,r=e,i=e&&Hh(n)?{left:p.right<t.left?p.right:p.left,top:t.top}:t,H(u)&&e&&(a=d+ +(t.left>=(p.left+p.right)/2));continue}}else p.top>t.top&&!c&&p.left<=t.left&&p.right>=t.left&&(c=u,l={left:Math.max(p.left,Math.min(p.right,t.left)),top:p.top});!n&&(t.left>=p.right&&t.top>=p.top||t.left>=p.left&&t.top>=p.bottom)&&(a=d+1)}}return!n&&c&&(n=c,i=l,r=0),n&&Hh(n)?Og(n,i):!n||r?{node:e,offset:a}:Dg(n,i)}function Og(e,t){let n=e.nodeValue.length,r=document.createRange(),i;for(let a=0;a<n;a++){r.setEnd(e,a+1),r.setStart(e,a);let n=Ig(r,1);if(n.top!=n.bottom&&kg(t,n)){i={node:e,offset:a+ +(t.left>=(n.left+n.right)/2)};break}}return r.detach(),i||{node:e,offset:0}}function kg(e,t){return e.left>=t.left-1&&e.left<=t.right+1&&e.top>=t.top-1&&e.top<=t.bottom+1}function Ag(e,t){let n=e.parentNode;return n&&/^li$/i.test(n.nodeName)&&t.left<e.getBoundingClientRect().left?n:e}function jg(e,t,n){let{node:r,offset:i}=Dg(t,n),a=-1;if(H(r)&&!r.firstChild){let e=r.getBoundingClientRect();a=e.left!=e.right&&n.left>(e.left+e.right)/2?1:-1}return e.docView.posFromDOM(r,i,a)}function Mg(e,t,n,r){let i=-1;for(let n=t,a=!1;n!=e.dom;){let t=e.docView.nearestDesc(n,!0),o;if(!t)return null;if(H(t.dom)&&(t.node.isBlock&&t.parent||!t.contentDOM)&&((o=t.dom.getBoundingClientRect()).width||o.height)&&(t.node.isBlock&&t.parent&&!/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName)&&(!a&&o.left>r.left||o.top>r.top?i=t.posBefore:(!a&&o.right<r.left||o.bottom<r.top)&&(i=t.posAfter),a=!0),!t.contentDOM&&i<0&&!t.node.isText))return(t.node.isBlock?r.top<(o.top+o.bottom)/2:r.left<(o.left+o.right)/2)?t.posBefore:t.posAfter;n=t.dom.parentNode}return i>-1?i:e.docView.posFromDOM(t,n,-1)}function Ng(e,t,n){let r=e.childNodes.length;if(r&&n.top<n.bottom)for(let i=Math.max(0,Math.min(r-1,Math.floor(r*(t.top-n.top)/(n.bottom-n.top))-2)),a=i;;){let n=e.childNodes[a];if(H(n)){let e=n.getClientRects();for(let r=0;r<e.length;r++){let i=e[r];if(kg(t,i))return Ng(n,t,i)}}if((a=(a+1)%r)==i)break}return e}function Pg(e,t){let n=e.dom.ownerDocument,r,i=0,a=Zh(n,t.left,t.top);a&&({node:r,offset:i}=a);let o=(e.root.elementFromPoint?e.root:n).elementFromPoint(t.left,t.top),s;if(!o||!e.dom.contains(o)){let n=e.dom.getBoundingClientRect();if(!kg(t,n)||(o=Ng(e.dom,t,n),!o))return null}if(ug)for(let e=o;r&&e;e=Ph(e))e.draggable&&(r=void 0);if(o=Ag(o,t),r){if(og&&H(r)&&(i=Math.min(i,r.childNodes.length),i<r.childNodes.length)){let e=r.childNodes[i],n;e.nodeName==`IMG`&&(n=e.getBoundingClientRect()).right<=t.left&&n.bottom>t.top&&i++}let n;hg&&i&&H(r)&&H(n=r.childNodes[i-1])&&n.contentEditable==`false`&&n.getBoundingClientRect().top>=t.top&&i--,r==e.dom&&i==r.childNodes.length-1&&H(r.lastChild)&&t.top>r.lastChild.getBoundingClientRect().bottom?s=e.state.doc.content.size:(i==0||!H(r)||r.childNodes[i-1].nodeName!=`BR`)&&(s=Mg(e,r,i,t))}s??=jg(e,o,t);let c=e.docView.nearestDesc(o,!0);return{pos:s,inside:c?c.posAtStart-c.border:-1}}function Fg(e){return e.top<e.bottom||e.left<e.right}function Ig(e,t){let n=e.getClientRects();if(n.length){let e=n[t<0?0:n.length-1];if(Fg(e))return e}return Array.prototype.find.call(n,Fg)||e.getBoundingClientRect()}var Lg=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;function Rg(e,t,n){let{node:r,offset:i,atom:a}=e.docView.domFromPos(t,n<0?-1:1),o=hg||og;if(Hh(r)){if(o&&(Lg.test(r.nodeValue)||(n<0?!i:i==r.nodeValue.length))){let e=Ig(Ih(r,i,i),n);if(og&&i&&/\s/.test(r.nodeValue[i-1])&&i<r.nodeValue.length){let t=Ig(Ih(r,i-1,i-1),-1);if(t.top==e.top){let n=Ig(Ih(r,i,i+1),-1);if(n.top!=e.top)return zg(n,n.left<t.left)}}return e}{let e=i,t=i,a=n<0?1:-1;return n<0&&!i?(t++,a=-1):n>=0&&i==r.nodeValue.length?(e--,a=1):n<0?e--:t++,zg(Ig(Ih(r,e,t),a),a<0)}}if(!e.state.doc.resolve(t-(a||0)).parent.inlineContent){if(a==null&&i&&(n<0||i==Vh(r))){let e=r.childNodes[i-1];if(H(e))return Bg(e.getBoundingClientRect(),!1)}if(a==null&&i<Vh(r)){let e=r.childNodes[i];if(H(e))return Bg(e.getBoundingClientRect(),!0)}return Bg(r.getBoundingClientRect(),n>=0)}if(a==null&&i&&(n<0||i==Vh(r))){let e=r.childNodes[i-1],t=Hh(e)?Ih(e,Vh(e)-+!o):H(e)&&(e.nodeName!=`BR`||!e.nextSibling)?e:null;if(t)return zg(Ig(t,1),!1)}if(a==null&&i<Vh(r)){let e=r.childNodes[i];for(;e.pmViewDesc&&e.pmViewDesc.ignoreForCoords;)e=e.nextSibling;let t=e?Hh(e)?Ih(e,0,+!o):H(e)?e:null:null;if(t)return zg(Ig(t,-1),!0)}return zg(Ig(Hh(r)?Ih(r):r,-n),n>=0)}function zg(e,t){if(e.width==0)return e;let n=t?e.left:e.right;return{top:e.top,bottom:e.bottom,left:n,right:n}}function Bg(e,t){if(e.height==0)return e;let n=t?e.top:e.bottom;return{top:n,bottom:n,left:e.left,right:e.right}}function Vg(e,t,n){let r=e.state,i=e.root.activeElement;r!=t&&e.updateState(t),i!=e.dom&&e.focus();try{return n()}finally{r!=t&&e.updateState(r),i!=e.dom&&i&&i.focus()}}function Hg(e,t,n){let r=t.selection,i=n==`up`?r.$from:r.$to;return Vg(e,t,()=>{let{node:t}=e.docView.domFromPos(i.pos,n==`up`?-1:1);for(;;){let n=e.docView.nearestDesc(t,!0);if(!n)break;if(n.node.isBlock){t=n.contentDOM||n.dom;break}t=n.dom.parentNode}let r=Rg(e,i.pos,1);for(let e=t.firstChild;e;e=e.nextSibling){let t;if(H(e))t=e.getClientRects();else if(Hh(e))t=Ih(e,0,e.nodeValue.length).getClientRects();else continue;for(let e=0;e<t.length;e++){let i=t[e];if(i.bottom>i.top+1&&(n==`up`?r.top-i.top>(i.bottom-r.top)*2:i.bottom-r.bottom>(r.bottom-i.top)*2))return!1}}return!0})}var Ug=/[\u0590-\u08ac]/;function Wg(e,t,n){let{$head:r}=t.selection;if(!r.parent.isTextblock)return!1;let i=r.parentOffset,a=!i,o=i==r.parent.content.size,s=e.domSelection();return s?!Ug.test(r.parent.textContent)||!s.modify?n==`left`||n==`backward`?a:o:Vg(e,t,()=>{let{focusNode:t,focusOffset:i,anchorNode:a,anchorOffset:o}=e.domSelectionRange(),c=s.caretBidiLevel;s.modify(`move`,n,`character`);let l=r.depth?e.docView.domAfterPos(r.before()):e.dom,{focusNode:u,focusOffset:d}=e.domSelectionRange(),f=u&&!Uh(l,u)||t==u&&i==d;try{s.collapse(a,o),t&&(t!=a||i!=o)&&s.extend&&s.extend(t,i)}catch{}return c!=null&&(s.caretBidiLevel=c),f}):r.pos==r.start()||r.pos==r.end()}var Gg=null,Kg=null,qg=!1;function Jg(e,t,n){return Gg==t&&Kg==n?qg:(Gg=t,Kg=n,qg=n==`up`||n==`down`?Hg(e,t,n):Wg(e,t,n))}var Yg=0,Xg=1,Zg=2,Qg=3,$g=class{constructor(e,t,n,r){this.parent=e,this.children=t,this.dom=n,this.contentDOM=r,this.dirty=Yg,n.pmViewDesc=this}matchesWidget(e){return!1}matchesMark(e){return!1}matchesNode(e,t,n){return!1}matchesHack(e){return!1}parseRule(e){return null}stopEvent(e){return!1}get size(){let e=0;for(let t=0;t<this.children.length;t++)e+=this.children[t].size;return e}get border(){return 0}destroy(){this.parent=void 0,this.dom.pmViewDesc==this&&(this.dom.pmViewDesc=void 0);for(let e=0;e<this.children.length;e++)this.children[e].destroy()}posBeforeChild(e){for(let t=0,n=this.posAtStart;;t++){let r=this.children[t];if(r==e)return n;n+=r.size}}get posBefore(){return this.parent.posBeforeChild(this)}get posAtStart(){return this.parent?this.parent.posBeforeChild(this)+this.border:0}get posAfter(){return this.posBefore+this.size}get posAtEnd(){return this.posAtStart+this.size-2*this.border}localPosFromDOM(e,t,n){if(this.contentDOM&&Uh(this.contentDOM,e)){if(n<0){let n,r;if(e==this.contentDOM)n=e.childNodes[t-1];else{for(;e.parentNode!=this.contentDOM;)e=e.parentNode;n=e.previousSibling}for(;n&&!((r=n.pmViewDesc)&&r.parent==this);)n=n.previousSibling;return n?this.posBeforeChild(r)+r.size:this.posAtStart}{let n,r;if(e==this.contentDOM)n=e.childNodes[t];else{for(;e.parentNode!=this.contentDOM;)e=e.parentNode;n=e.nextSibling}for(;n&&!((r=n.pmViewDesc)&&r.parent==this);)n=n.nextSibling;return n?this.posBeforeChild(r):this.posAtEnd}}let r;if(e==this.dom&&this.contentDOM)r=t>Nh(this.contentDOM);else if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM))r=!!(e.compareDocumentPosition(this.contentDOM)&4);else if(this.dom.firstChild){if(t==0)for(let t=e;;t=t.parentNode){if(t==this.dom){r=!1;break}if(t.previousSibling)break}if(r==null&&t==e.childNodes.length)for(let t=e;;t=t.parentNode){if(t==this.dom){r=!0;break}if(t.nextSibling)break}}return r??n>0?this.posAtEnd:this.posAtStart}nearestDesc(e,t=!1){for(let n=!0,r=e;r;r=r.parentNode){let i=this.getDesc(r),a;if(i&&(!t||i.node)){if(n&&(a=i.nodeDOM)&&!(H(a)?Uh(a,e):a==e))n=!1;else return i}}}getDesc(e){let t=e.pmViewDesc;for(let e=t;e;e=e.parent)if(e==this)return t}posFromDOM(e,t,n){for(let r=e;r;r=r.parentNode){let i=this.getDesc(r);if(i)return i.localPosFromDOM(e,t,n)}return-1}descAt(e){for(let t=0,n=0;t<this.children.length;t++){let r=this.children[t],i=n+r.size;if(n==e&&i!=n){for(;!r.border&&r.children.length;)for(let e=0;e<r.children.length;e++){let t=r.children[e];if(t.size){r=t;break}}return r}if(e<i)return r.descAt(e-n-r.border);n=i}}domFromPos(e,t){if(!this.contentDOM)return{node:this.dom,offset:0,atom:e+1};let n=0,r=0;for(let t=0;n<this.children.length;n++){let i=this.children[n],a=t+i.size;if(a>e){r=e-t;break}t=a}if(r)return this.children[n].domFromPos(r-this.children[n].border,t);for(;n>0;n--){let e=this.children[n-1];if(e.size||!(e instanceof o_||e instanceof e_&&e.side>=0))break}if(t<=0){let e,r=!0;for(;e=n?this.children[n-1]:null,e&&e.dom.parentNode!=this.contentDOM;n--,r=!1);return e&&t&&r&&!e.border&&!e.domAtom?e.domFromPos(e.size,t):{node:this.contentDOM,offset:e?Nh(e.dom)+1:0}}{let e,r=!0;for(;e=n<this.children.length?this.children[n]:null,e&&e.dom.parentNode!=this.contentDOM;n++,r=!1);return e&&r&&!e.border&&!e.domAtom?e.domFromPos(0,t):{node:this.contentDOM,offset:e?Nh(e.dom):this.contentDOM.childNodes.length}}}parseRange(e,t,n=0){if(this.children.length==0)return{node:this.contentDOM,from:e,to:t,fromOffset:0,toOffset:this.contentDOM.childNodes.length};let r=-1,i=-1;for(let a=n,o=0;;o++){let n=this.children[o],s=a+n.size;if(r==-1&&e<=s){let i=a+n.border;if(e>=i&&t<=s-n.border&&n.node&&n.contentDOM&&this.contentDOM.contains(n.contentDOM))return n.parseRange(e,t,i);e=a;for(let t=o;t>0;t--){let n=this.children[t-1];if(n.size&&n.dom.parentNode==this.contentDOM&&!n.emptyChildAt(1)){r=Nh(n.dom)+1;break}e-=n.size}r==-1&&(r=0)}if(r>-1&&(s>t||o==this.children.length-1)){t=s;for(let e=o+1;e<this.children.length;e++){let n=this.children[e];if(n.size&&n.dom.parentNode==this.contentDOM&&!n.emptyChildAt(-1)){i=Nh(n.dom);break}t+=n.size}i==-1&&(i=this.contentDOM.childNodes.length);break}a=s}return{node:this.contentDOM,from:e,to:t,fromOffset:r,toOffset:i}}emptyChildAt(e){if(this.border||!this.contentDOM||!this.children.length)return!1;let t=this.children[e<0?0:this.children.length-1];return t.size==0||t.emptyChildAt(e)}domAfterPos(e){let{node:t,offset:n}=this.domFromPos(e,0);if(!H(t)||n==t.childNodes.length)throw RangeError(`No node after pos `+e);return t.childNodes[n]}setSelection(e,t,n,r=!1){let i=Math.min(e,t),a=Math.max(e,t);for(let o=0,s=0;o<this.children.length;o++){let c=this.children[o],l=s+c.size;if(i>s&&a<l)return c.setSelection(e-s-c.border,t-s-c.border,n,r);s=l}let o=this.domFromPos(e,e?-1:1),s=t==e?o:this.domFromPos(t,t?-1:1),c=n.root.getSelection(),l=n.domSelectionRange(),u=!1;if((og||ug)&&e==t){let{node:e,offset:t}=o;if(Hh(e)){if(u=!!(t&&e.nodeValue[t-1]==`
`),u&&t==e.nodeValue.length)for(let t=e,n;t;t=t.parentNode){if(n=t.nextSibling){n.nodeName==`BR`&&(o=s={node:n.parentNode,offset:Nh(n)+1});break}let e=t.pmViewDesc;if(e&&e.node&&e.node.isBlock)break}}else{let n=e.childNodes[t-1];u=n&&(n.nodeName==`BR`||n.contentEditable==`false`)}}if(og&&l.focusNode&&l.focusNode!=s.node&&H(l.focusNode)){let e=l.focusNode.childNodes[l.focusOffset];e&&e.contentEditable==`false`&&(r=!0)}if(!(r||u&&ug)&&Rh(o.node,o.offset,l.anchorNode,l.anchorOffset)&&Rh(s.node,s.offset,l.focusNode,l.focusOffset))return;let d=!1;if((c.extend||e==t)&&!(u&&og)){c.collapse(o.node,o.offset);try{e!=t&&c.extend(s.node,s.offset),d=!0}catch{}}if(!d){if(e>t){let e=o;o=s,s=e}let n=document.createRange();n.setEnd(s.node,s.offset),n.setStart(o.node,o.offset),c.removeAllRanges(),c.addRange(n)}}ignoreMutation(e){return!this.contentDOM&&e.type!=`selection`}get contentLost(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)}markDirty(e,t){for(let n=0,r=0;r<this.children.length;r++){let i=this.children[r],a=n+i.size;if(n==a?e<=a&&t>=n:e<a&&t>n){let r=n+i.border,o=a-i.border;if(e>=r&&t<=o){this.dirty=e==n||t==a?Zg:Xg,e==r&&t==o&&(i.contentLost||i.dom.parentNode!=this.contentDOM)?i.dirty=Qg:i.markDirty(e-r,t-r);return}i.dirty=i.dom==i.contentDOM&&i.dom.parentNode==this.contentDOM&&!i.children.length?Zg:Qg}n=a}this.dirty=Zg}markParentsDirty(){let e=1;for(let t=this.parent;t;t=t.parent,e++){let n=e==1?Zg:Xg;t.dirty<n&&(t.dirty=n)}}get domAtom(){return!1}get ignoreForCoords(){return!1}get ignoreForSelection(){return!1}isText(e){return!1}},e_=class extends $g{constructor(e,t,n,r){let i,a=t.type.toDOM;if(typeof a==`function`&&(a=a(n,()=>{if(!i)return r;if(i.parent)return i.parent.posBeforeChild(i)})),!t.type.spec.raw){let e=H(a)?a:document.createElement(`span`);e!=a&&e.appendChild(a),e.hasAttribute(`contenteditable`)||(e.contentEditable=`false`),e.classList.add(`ProseMirror-widget`)}super(e,[],a,null),this.widget=t,this.widget=t,i=this}matchesWidget(e){return this.dirty==Yg&&e.type.eq(this.widget.type)}parseRule(){return{ignore:!0}}stopEvent(e){let t=this.widget.spec.stopEvent;return t?t(e):!1}ignoreMutation(e){return e.type!=`selection`||this.widget.spec.ignoreSelection}destroy(){this.widget.type.destroy(this.dom),super.destroy()}get domAtom(){return!0}get ignoreForSelection(){return!!this.widget.type.spec.relaxedSide}get side(){return this.widget.type.side}},t_=class extends $g{constructor(e,t,n,r){super(e,[],t,null),this.textDOM=n,this.text=r}get size(){return this.text.length}localPosFromDOM(e,t){return e==this.textDOM?this.posAtStart+t:this.posAtStart+(t?this.size:0)}domFromPos(e){return{node:this.textDOM,offset:e}}ignoreMutation(e){return e.type===`characterData`&&e.target.nodeValue==e.oldValue}},n_=class e extends $g{constructor(e,t,n,r,i){super(e,[],n,r),this.mark=t,this.spec=i}static create(t,n,r,i){let a=i.nodeViews[n.type.name],o=a&&a(n,i,r);return(!o||!o.dom)&&(o=ep.renderSpec(document,n.type.spec.toDOM(n,r),null,n.attrs)),new e(t,n,o.dom,o.contentDOM||o.dom,o)}parseRule(){return this.dirty&Qg||this.mark.type.spec.reparseInView?null:{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM}}matchesMark(e){return this.dirty!=Qg&&this.mark.eq(e)}markDirty(e,t){if(super.markDirty(e,t),this.dirty!=Yg){let e=this.parent;for(;!e.node;)e=e.parent;e.dirty<this.dirty&&(e.dirty=this.dirty),this.dirty=Yg}}slice(t,n,r){let i=e.create(this.parent,this.mark,!0,r),a=this.children,o=this.size;n<o&&(a=C_(a,n,o,r)),t>0&&(a=C_(a,0,t,r));for(let e=0;e<a.length;e++)a[e].parent=i;return i.children=a,i}ignoreMutation(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):super.ignoreMutation(e)}destroy(){this.spec.destroy&&this.spec.destroy(),super.destroy()}},r_=class e extends $g{constructor(e,t,n,r,i,a,o){super(e,[],i,a),this.node=t,this.outerDeco=n,this.innerDeco=r,this.nodeDOM=o}static create(t,n,r,i,a,o){let s=a.nodeViews[n.type.name],c,l=s&&s(n,a,()=>{if(!c)return o;if(c.parent)return c.parent.posBeforeChild(c)},r,i),u=l&&l.dom,d=l&&l.contentDOM;if(n.isText){if(!u)u=document.createTextNode(n.text);else if(!Hh(u))throw RangeError(`Text must be rendered as a DOM text node`)}else if(!u){let e=ep.renderSpec(document,n.type.spec.toDOM(n),null,n.attrs);({dom:u,contentDOM:d}=e)}!d&&!n.isText&&u.nodeName!=`BR`&&(u.hasAttribute(`contenteditable`)||(u.contentEditable=`false`),n.type.spec.draggable&&(u.draggable=!0));let f=u;return u=m_(u,r,n),l?c=new s_(t,n,r,i,u,d||null,f,l):n.isText?new a_(t,n,r,i,u,f):new e(t,n,r,i,u,d||null,f)}parseRule(e){if(this.node.type.spec.reparseInView)return null;let t={node:this.node.type.name,attrs:this.node.attrs};if(this.node.type.whitespace==`pre`&&(t.preserveWhitespace=`full`),!this.contentDOM)t.getContent=()=>this.node.content;else if(!this.contentLost)t.contentElement=this.contentDOM;else{for(let e=this.children.length-1;e>=0;e--){let n=this.children[e];if(this.dom.contains(n.dom.parentNode)){t.contentElement=n.dom.parentNode;break}}if(!t.contentElement){let n=e&&e.find(t=>H(t)&&e.indexOf(t.parentNode)<0&&this.dom.contains(t));n?t.contentElement=n:t.getContent=()=>P.empty}}return t}matchesNode(e,t,n){return this.dirty==Yg&&e.eq(this.node)&&h_(t,this.outerDeco)&&n.eq(this.innerDeco)}get size(){return this.node.nodeSize}get border(){return+!this.node.isLeaf}updateChildren(e,t){let n=this.node.inlineContent,r=t,i=e.composing?this.localCompositionInfo(e,t):null,a=i&&i.pos>-1?i:null,o=i&&i.pos<0,s=new __(this,a&&a.node,e),c=this.node.inlineContent,l=c&&this.node.isBlock;b_(this.node,this.innerDeco,(t,i,a)=>{t.spec.marks?s.syncToMarks(t.spec.marks,n,e,i):t.type.side>=0&&!a&&s.syncToMarks(i==this.node.childCount?F.none:this.node.child(i).marks,n,e,i),s.placeWidget(t,e,r)},(t,a,u,d)=>{s.syncToMarks(t.marks,n,e,d),l&&t.isAtom&&!t.isText&&s.addHackNode(`IMG`,s.top);let f;s.findNodeMatch(t,a,u,d)||o&&e.state.selection.from>r&&e.state.selection.to<r+t.nodeSize&&(f=s.findIndexWithChild(i.node))>-1&&s.updateNodeAt(t,a,u,f,e)||s.updateNextNode(t,a,u,e,d,r)||s.addNode(t,a,u,e,r),r+=t.nodeSize,c&&(l=t.isAtom&&!t.isText)}),s.syncToMarks([],n,e,0),this.node.isTextblock&&s.addTextblockHacks(),s.destroyRest(),(s.changed||this.dirty==Zg)&&(a&&this.protectLocalComposition(e,a),c_(this.contentDOM,this.children,e),dg&&x_(this.dom))}localCompositionInfo(e,t){let{from:n,to:r}=e.state.selection;if(!(e.state.selection instanceof R)||n<t||r>t+this.node.content.size)return null;let i=e.input.compositionNode;if(!i||!this.dom.contains(i.parentNode))return null;if(this.node.inlineContent){let e=i.nodeValue,a=S_(this.node.content,e,n-t,r-t);return a<0?null:{node:i,pos:a,text:e}}return{node:i,pos:-1,text:``}}protectLocalComposition(e,{node:t,pos:n,text:r}){if(this.getDesc(t))return;let i=t;for(;i.parentNode!=this.contentDOM;i=i.parentNode){for(;i.previousSibling;)i.parentNode.removeChild(i.previousSibling);for(;i.nextSibling;)i.parentNode.removeChild(i.nextSibling);i.pmViewDesc&&(i.pmViewDesc=void 0)}let a=new t_(this,i,t,r);e.input.compositionNodes.push(a),this.children=C_(this.children,n,n+r.length,e,a)}update(e,t,n,r){return this.dirty==Qg||!e.sameMarkup(this.node)?!1:(this.updateInner(e,t,n,r),!0)}updateInner(e,t,n,r){this.updateOuterDeco(t),this.node=e,this.innerDeco=n,this.contentDOM&&this.updateChildren(r,this.posAtStart),this.dirty=Yg}updateOuterDeco(e){if(h_(e,this.outerDeco))return;let t=!H(this.nodeDOM),n=this.dom;this.dom=f_(this.dom,this.nodeDOM,d_(this.outerDeco,this.node,t),d_(e,this.node,t)),this.dom!=n&&(n.pmViewDesc=void 0,this.dom.pmViewDesc=this),this.outerDeco=e}selectNode(){H(this.nodeDOM)&&(this.nodeDOM.classList.add(`ProseMirror-selectednode`),(this.contentDOM||!this.node.type.spec.draggable)&&(this.nodeDOM.draggable=!0))}deselectNode(){H(this.nodeDOM)&&(this.nodeDOM.classList.remove(`ProseMirror-selectednode`),(this.contentDOM||!this.node.type.spec.draggable)&&this.nodeDOM.removeAttribute(`draggable`))}get domAtom(){return this.node.isAtom}};function i_(e,t,n,r,i){m_(r,t,e);let a=new r_(void 0,e,t,n,r,r,r);return a.contentDOM&&a.updateChildren(i,0),a}var a_=class e extends r_{constructor(e,t,n,r,i,a){super(e,t,n,r,i,null,a)}parseRule(){let e=this.nodeDOM.parentNode;for(;e&&e!=this.dom&&!e.pmIsDeco;)e=e.parentNode;return{skip:e||!0}}update(e,t,n,r){return this.dirty==Qg||this.dirty!=Yg&&!this.inParent()||!e.sameMarkup(this.node)?!1:(this.updateOuterDeco(t),(this.dirty!=Yg||e.text!=this.node.text)&&e.text!=this.nodeDOM.nodeValue&&(this.nodeDOM.nodeValue=e.text,r.trackWrites==this.nodeDOM&&(r.trackWrites=null)),this.node=e,this.dirty=Yg,!0)}inParent(){let e=this.parent.contentDOM;for(let t=this.nodeDOM;t;t=t.parentNode)if(t==e)return!0;return!1}domFromPos(e){return{node:this.nodeDOM,offset:e}}localPosFromDOM(e,t,n){return e==this.nodeDOM?this.posAtStart+Math.min(t,this.node.text.length):super.localPosFromDOM(e,t,n)}ignoreMutation(e){return e.type!=`characterData`&&e.type!=`selection`}slice(t,n,r){let i=this.node.cut(t,n),a=document.createTextNode(i.text);return new e(this.parent,i,this.outerDeco,this.innerDeco,a,a)}markDirty(e,t){super.markDirty(e,t),this.dom!=this.nodeDOM&&(e==0||t==this.nodeDOM.nodeValue.length)&&(this.dirty=Qg)}get domAtom(){return!1}isText(e){return this.node.text==e}},o_=class extends $g{parseRule(){return{ignore:!0}}matchesHack(e){return this.dirty==Yg&&this.dom.nodeName==e}get domAtom(){return!0}get ignoreForCoords(){return this.dom.nodeName==`IMG`}},s_=class extends r_{constructor(e,t,n,r,i,a,o,s){super(e,t,n,r,i,a,o),this.spec=s}update(e,t,n,r){if(this.dirty==Qg)return!1;if(this.spec.update&&(this.node.type==e.type||this.spec.multiType)){let i=this.spec.update(e,t,n);return i&&this.updateInner(e,t,n,r),i}return!this.contentDOM&&!e.isLeaf?!1:super.update(e,t,n,r)}selectNode(){this.spec.selectNode?this.spec.selectNode():super.selectNode()}deselectNode(){this.spec.deselectNode?this.spec.deselectNode():super.deselectNode()}setSelection(e,t,n,r){this.spec.setSelection?this.spec.setSelection(e,t,n.root):super.setSelection(e,t,n,r)}destroy(){this.spec.destroy&&this.spec.destroy(),super.destroy()}stopEvent(e){return this.spec.stopEvent?this.spec.stopEvent(e):!1}ignoreMutation(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):super.ignoreMutation(e)}};function c_(e,t,n){let r=e.firstChild,i=!1;for(let a=0;a<t.length;a++){let o=t[a],s=o.dom;if(s.parentNode==e){for(;s!=r;)r=g_(r),i=!0;r=r.nextSibling}else i=!0,e.insertBefore(s,r);if(o instanceof n_){let t=r?r.previousSibling:e.lastChild;c_(o.contentDOM,o.children,n),r=t?t.nextSibling:e.firstChild}}for(;r;)r=g_(r),i=!0;i&&n.trackWrites==e&&(n.trackWrites=null)}var l_=function(e){e&&(this.nodeName=e)};l_.prototype=Object.create(null);var u_=[new l_];function d_(e,t,n){if(e.length==0)return u_;let r=n?u_[0]:new l_,i=[r];for(let a=0;a<e.length;a++){let o=e[a].type.attrs;if(o){o.nodeName&&i.push(r=new l_(o.nodeName));for(let e in o){let a=o[e];a!=null&&(n&&i.length==1&&i.push(r=new l_(t.isInline?`span`:`div`)),e==`class`?r.class=(r.class?r.class+` `:``)+a:e==`style`?r.style=(r.style?r.style+`;`:``)+a:e!=`nodeName`&&(r[e]=a))}}}return i}function f_(e,t,n,r){if(n==u_&&r==u_)return t;let i=t;for(let t=0;t<r.length;t++){let a=r[t],o=n[t];if(t){let t;o&&o.nodeName==a.nodeName&&i!=e&&(t=i.parentNode)&&t.nodeName.toLowerCase()==a.nodeName?i=t:(t=document.createElement(a.nodeName),t.pmIsDeco=!0,t.appendChild(i),o=u_[0],i=t)}p_(i,o||u_[0],a)}return i}function p_(e,t,n){for(let r in t)r!=`class`&&r!=`style`&&r!=`nodeName`&&!(r in n)&&e.removeAttribute(r);for(let r in n)r!=`class`&&r!=`style`&&r!=`nodeName`&&n[r]!=t[r]&&e.setAttribute(r,n[r]);if(t.class!=n.class){let r=t.class?t.class.split(` `).filter(Boolean):[],i=n.class?n.class.split(` `).filter(Boolean):[];for(let t=0;t<r.length;t++)i.indexOf(r[t])==-1&&e.classList.remove(r[t]);for(let t=0;t<i.length;t++)r.indexOf(i[t])==-1&&e.classList.add(i[t]);e.classList.length==0&&e.removeAttribute(`class`)}if(t.style!=n.style){if(t.style){let n=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,r;for(;r=n.exec(t.style);)e.style.removeProperty(r[1])}n.style&&(e.style.cssText+=n.style)}}function m_(e,t,n){return f_(e,e,u_,d_(t,n,!H(e)))}function h_(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].type.eq(t[n].type))return!1;return!0}function g_(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var __=class{constructor(e,t,n){this.lock=t,this.view=n,this.index=0,this.stack=[],this.changed=!1,this.top=e,this.preMatch=v_(e.node.content,e)}destroyBetween(e,t){if(e!=t){for(let n=e;n<t;n++)this.top.children[n].destroy();this.top.children.splice(e,t-e),this.changed=!0}}destroyRest(){this.destroyBetween(this.index,this.top.children.length)}syncToMarks(e,t,n,r){let i=0,a=this.stack.length>>1,o=Math.min(a,e.length);for(;i<o&&(i==a-1?this.top:this.stack[i+1<<1]).matchesMark(e[i])&&e[i].type.spec.spanning!==!1;)i++;for(;i<a;)this.destroyRest(),this.top.dirty=Yg,this.index=this.stack.pop(),this.top=this.stack.pop(),a--;for(;a<e.length;){this.stack.push(this.top,this.index+1);let i=-1,o=this.top.children.length;r<this.preMatch.index&&(o=Math.min(this.index+3,o));for(let t=this.index;t<o;t++){let n=this.top.children[t];if(n.matchesMark(e[a])&&!this.isLocked(n.dom)){i=t;break}}if(i<0&&this.index<this.top.children.length){let t=this.top.children[this.index];t instanceof n_&&t.dirty!=Qg&&t.mark.type==e[a].type&&t.spec.update&&!this.isLocked(t.dom)&&t.spec.update(e[a])&&(t.mark=e[a],i=this.index,this.changed=!0)}if(i>-1)i>this.index&&(this.changed=!0,this.destroyBetween(this.index,i)),this.top=this.top.children[this.index];else{let r=n_.create(this.top,e[a],t,n);this.top.children.splice(this.index,0,r),this.top=r,this.changed=!0}this.index=0,a++}}findNodeMatch(e,t,n,r){let i=-1,a;if(r>=this.preMatch.index&&(a=this.preMatch.matches[r-this.preMatch.index]).parent==this.top&&a.matchesNode(e,t,n))i=this.top.children.indexOf(a,this.index);else for(let r=this.index,a=Math.min(this.top.children.length,r+5);r<a;r++){let a=this.top.children[r];if(a.matchesNode(e,t,n)&&!this.preMatch.matched.has(a)){i=r;break}}return i<0?!1:(this.destroyBetween(this.index,i),this.index++,!0)}updateNodeAt(e,t,n,r,i){let a=this.top.children[r];return a.dirty==Qg&&a.dom==a.contentDOM&&(a.dirty=Zg),a.update(e,t,n,i)?(this.destroyBetween(this.index,r),this.index++,!0):!1}findIndexWithChild(e){for(;;){let t=e.parentNode;if(!t)return-1;if(t==this.top.contentDOM){let t=e.pmViewDesc;if(t){for(let e=this.index;e<this.top.children.length;e++)if(this.top.children[e]==t)return e}return-1}e=t}}updateNextNode(e,t,n,r,i,a){for(let o=this.index;o<this.top.children.length;o++){let s=this.top.children[o];if(s instanceof r_){let c=this.preMatch.matched.get(s);if(c!=null&&c!=i)return!1;let l=s.dom,u,d=this.isLocked(l)&&!(e.isText&&s.node&&s.node.isText&&s.nodeDOM.nodeValue==e.text&&s.dirty!=Qg&&h_(t,s.outerDeco));if(!d&&s.update(e,t,n,r))return this.destroyBetween(this.index,o),s.dom!=l&&(this.changed=!0),this.index++,!0;if(!d&&(u=this.recreateWrapper(s,e,t,n,r,a)))return this.destroyBetween(this.index,o),this.top.children[this.index]=u,u.contentDOM&&(u.dirty=Zg,u.updateChildren(r,a+1),u.dirty=Yg),this.changed=!0,this.index++,!0;break}}return!1}recreateWrapper(e,t,n,r,i,a){if(e.dirty||t.isAtom||!e.children.length||!e.node.content.eq(t.content)||!h_(n,e.outerDeco)||!r.eq(e.innerDeco))return null;let o=r_.create(this.top,t,n,r,i,a);if(o.contentDOM){o.children=e.children,e.children=[];for(let e of o.children)e.parent=o}return e.destroy(),o}addNode(e,t,n,r,i){let a=r_.create(this.top,e,t,n,r,i);a.contentDOM&&a.updateChildren(r,i+1),this.top.children.splice(this.index++,0,a),this.changed=!0}placeWidget(e,t,n){let r=this.index<this.top.children.length?this.top.children[this.index]:null;if(r&&r.matchesWidget(e)&&(e==r.widget||!r.widget.type.toDOM.parentNode))this.index++;else{let r=new e_(this.top,e,t,n);this.top.children.splice(this.index++,0,r),this.changed=!0}}addTextblockHacks(){let e=this.top.children[this.index-1],t=this.top;for(;e instanceof n_;)t=e,e=t.children[t.children.length-1];(!e||!(e instanceof a_)||/\n$/.test(e.node.text)||this.view.requiresGeckoHackNode&&/\s$/.test(e.node.text))&&((ug||cg)&&e&&e.dom.contentEditable==`false`&&this.addHackNode(`IMG`,t),this.addHackNode(`BR`,this.top))}addHackNode(e,t){if(t==this.top&&this.index<t.children.length&&t.children[this.index].matchesHack(e))this.index++;else{let n=document.createElement(e);e==`IMG`&&(n.className=`ProseMirror-separator`,n.alt=``),e==`BR`&&(n.className=`ProseMirror-trailingBreak`);let r=new o_(this.top,[],n,null);t==this.top?t.children.splice(this.index++,0,r):t.children.push(r),this.changed=!0}}isLocked(e){return this.lock&&(e==this.lock||H(e)&&e.contains(this.lock.parentNode))}};function v_(e,t){let n=t,r=n.children.length,i=e.childCount,a=new Map,o=[];outer:for(;i>0;){let s;for(;;)if(r){let e=n.children[r-1];if(e instanceof n_)n=e,r=e.children.length;else{s=e,r--;break}}else if(n==t)break outer;else r=n.parent.children.indexOf(n),n=n.parent;let c=s.node;if(c){if(c!=e.child(i-1))break;--i,a.set(s,i),o.push(s)}}return{index:i,matched:a,matches:o.reverse()}}function y_(e,t){return e.type.side-t.type.side}function b_(e,t,n,r){let i=t.locals(e),a=0;if(i.length==0){for(let n=0;n<e.childCount;n++){let o=e.child(n);r(o,i,t.forChild(a,o),n),a+=o.nodeSize}return}let o=0,s=[],c=null;for(let l=0;;){let u,d;for(;o<i.length&&i[o].to==a;){let e=i[o++];e.widget&&(u?(d||=[u]).push(e):u=e)}if(u){if(d){d.sort(y_);for(let e=0;e<d.length;e++)n(d[e],l,!!c)}else n(u,l,!!c)}let f,p;if(c)p=-1,f=c,c=null;else if(l<e.childCount)p=l,f=e.child(l++);else break;for(let e=0;e<s.length;e++)s[e].to<=a&&s.splice(e--,1);for(;o<i.length&&i[o].from<=a&&i[o].to>a;)s.push(i[o++]);let m=a+f.nodeSize;if(f.isText){let e=m;o<i.length&&i[o].from<e&&(e=i[o].from);for(let t=0;t<s.length;t++)s[t].to<e&&(e=s[t].to);e<m&&(c=f.cut(e-a),f=f.cut(0,e-a),m=e,p=-1)}else for(;o<i.length&&i[o].to<m;)o++;let h=f.isInline&&!f.isLeaf?s.filter(e=>!e.inline):s.slice();r(f,h,t.forChild(a,f),p),a=m}}function x_(e){if(e.nodeName==`UL`||e.nodeName==`OL`){let t=e.style.cssText;e.style.cssText=t+`; list-style: square !important`,window.getComputedStyle(e).listStyle,e.style.cssText=t}}function S_(e,t,n,r){for(let i=0,a=0;i<e.childCount&&a<=r;){let o=e.child(i++),s=a;if(a+=o.nodeSize,!o.isText)continue;let c=o.text;for(;i<e.childCount;){let t=e.child(i++);if(a+=t.nodeSize,!t.isText)break;c+=t.text}if(a>=n){if(a>=r&&c.slice(r-t.length-s,r-s)==t)return r-t.length;let e=s<r?c.lastIndexOf(t,r-s-1):-1;if(e>=0&&e+t.length+s>=n)return s+e;if(n==r&&c.length>=r+t.length-s&&c.slice(r-s,r-s+t.length)==t)return r}}return-1}function C_(e,t,n,r,i){let a=[];for(let o=0,s=0;o<e.length;o++){let c=e[o],l=s,u=s+=c.size;l>=n||u<=t?a.push(c):(l<t&&a.push(c.slice(0,t-l,r)),i&&=(a.push(i),void 0),u>n&&a.push(c.slice(n-l,c.size,r)))}return a}function w_(e,t=null){let n=e.domSelectionRange(),r=e.state.doc;if(!n.focusNode)return null;let i=e.docView.nearestDesc(n.focusNode),a=i&&i.size==0,o=e.docView.posFromDOM(n.focusNode,n.focusOffset,1);if(o<0)return null;let s=r.resolve(o),c,l;if(Jh(n)){for(c=o;i&&!i.node;)i=i.parent;if(i&&i.node.isAtom&&z.isSelectable(i.node)&&i.parent&&!(i.node.isInline&&Kh(n.focusNode,n.focusOffset,i.dom))){let e=i.posBefore;l=new z(o==e?s:r.resolve(e))}else if(og&&t==`key`&&o>e.state.selection.to&&H(n.focusNode)&&n.focusOffset==n.focusNode.childNodes.length&&i&&i.posAtStart>e.state.selection.to)for(let e=n.focusNode;;e=e.parentNode){if(getComputedStyle(e).overflow!=`visible`){l=L.findFrom(r.resolve(i.posAtStart),1);break}if(e==i.dom||e.nextSibling||!e.parentNode||!H(e.parentNode))break}}else{if(n instanceof e.dom.ownerDocument.defaultView.Selection&&n.rangeCount>1){let t=o,i=o;for(let r=0;r<n.rangeCount;r++){let a=n.getRangeAt(r);t=Math.min(t,e.docView.posFromDOM(a.startContainer,a.startOffset,1)),i=Math.max(i,e.docView.posFromDOM(a.endContainer,a.endOffset,-1))}if(t<0)return null;[c,o]=i==e.state.selection.anchor?[i,t]:[t,i],s=r.resolve(o)}else c=e.docView.posFromDOM(n.anchorNode,n.anchorOffset,1);if(c<0)return null}let u=r.resolve(c);if(!l){let n=t==`pointer`||e.state.selection.head<s.pos&&!a?1:-1;l=F_(e,u,s,n)}return l}function T_(e){return e.editable?e.hasFocus():L_(e)&&document.activeElement&&document.activeElement.contains(e.dom)}function E_(e,t=!1){let n=e.state.selection;if(N_(e,n),!T_(e))return;let r=e.input.mouseDown;if(!t&&cg&&r){let t=e.domSelectionRange(),n=e.domObserver.currentSelection;if(t.anchorNode&&n.anchorNode&&Rh(t.anchorNode,t.anchorOffset,n.anchorNode,n.anchorOffset)&&r.delaySelUpdate()){e.domObserver.setCurSelection();return}}if(e.domObserver.disconnectSelection(),e.cursorWrapper)M_(e);else{let{anchor:r,head:i}=n,a,o;D_&&!(n instanceof R)&&(n.$from.parent.inlineContent||(a=O_(e,n.from)),!n.empty&&!n.$from.parent.inlineContent&&(o=O_(e,n.to))),e.docView.setSelection(r,i,e,t),D_&&(a&&A_(a),o&&A_(o)),n.visible?e.dom.classList.remove(`ProseMirror-hideselection`):(e.dom.classList.add(`ProseMirror-hideselection`),`onselectionchange`in document&&j_(e))}e.domObserver.setCurSelection(),e.domObserver.connectSelection()}var D_=ug||cg&&lg<63;function O_(e,t){let{node:n,offset:r}=e.docView.domFromPos(t,0),i=r<n.childNodes.length?n.childNodes[r]:null,a=r?n.childNodes[r-1]:null;if(ug&&i&&i.contentEditable==`false`)return k_(i);if((!i||i.contentEditable==`false`)&&(!a||a.contentEditable==`false`)){if(i)return k_(i);if(a)return k_(a)}}function k_(e){return e.contentEditable=`true`,ug&&e.draggable&&(e.draggable=!1,e.wasDraggable=!0),e}function A_(e){e.contentEditable=`false`,e.wasDraggable&&=(e.draggable=!0,null)}function j_(e){let t=e.dom.ownerDocument;t.removeEventListener(`selectionchange`,e.input.hideSelectionGuard);let n=e.domSelectionRange(),r=n.anchorNode,i=n.anchorOffset;t.addEventListener(`selectionchange`,e.input.hideSelectionGuard=()=>{(n.anchorNode!=r||n.anchorOffset!=i)&&(t.removeEventListener(`selectionchange`,e.input.hideSelectionGuard),setTimeout(()=>{(!T_(e)||e.state.selection.visible)&&e.dom.classList.remove(`ProseMirror-hideselection`)},20))})}function M_(e){let t=e.domSelection();if(!t)return;let n=e.cursorWrapper.dom,r=n.nodeName==`IMG`;r?t.collapse(n.parentNode,Nh(n)+1):t.collapse(n,0),!r&&!e.state.selection.visible&&ig&&ag<=11&&(n.disabled=!0,n.disabled=!1)}function N_(e,t){if(t instanceof z){let n=e.docView.descAt(t.from);n!=e.lastSelectedViewDesc&&(P_(e),n&&n.selectNode(),e.lastSelectedViewDesc=n)}else P_(e)}function P_(e){e.lastSelectedViewDesc&&=(e.lastSelectedViewDesc.parent&&e.lastSelectedViewDesc.deselectNode(),void 0)}function F_(e,t,n,r){return e.someProp(`createSelectionBetween`,r=>r(e,t,n))||R.between(t,n,r)}function I_(e){return e.editable&&!e.hasFocus()?!1:L_(e)}function L_(e){let t=e.domSelectionRange();if(!t.anchorNode)return!1;try{return Uh(e.dom,t.anchorNode)&&(e.editable||Uh(e.dom,t.focusNode))}catch{return!1}}function R_(e){let t=e.docView.domFromPos(e.state.selection.anchor,0),n=e.domSelectionRange();return Rh(t.node,t.offset,n.anchorNode,n.anchorOffset)}function z_(e,t){let{$anchor:n,$head:r}=e.selection,i=t>0?n.max(r):n.min(r),a=i.parent.inlineContent?i.depth?e.doc.resolve(t>0?i.after():i.before()):null:i;return a&&L.findFrom(a,t)}function B_(e,t){return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()),!0}function V_(e,t,n){let r=e.state.selection;if(r instanceof R){if(n.indexOf(`s`)>-1){let{$head:n}=r,i=n.textOffset?null:t<0?n.nodeBefore:n.nodeAfter;if(!i||i.isText||!i.isLeaf)return!1;let a=e.state.doc.resolve(n.pos+i.nodeSize*(t<0?-1:1));return B_(e,new R(r.$anchor,a))}if(!r.empty)return!1;if(e.endOfTextblock(t>0?`forward`:`backward`)){let n=z_(e.state,t);return n&&n instanceof z?B_(e,n):!1}if(!(fg&&n.indexOf(`m`)>-1)){let n=r.$head,i=n.textOffset?null:t<0?n.nodeBefore:n.nodeAfter,a;if(!i||i.isText)return!1;let o=t<0?n.pos-i.nodeSize:n.pos;return i.isAtom||(a=e.docView.descAt(o))&&!a.contentDOM?z.isSelectable(i)?B_(e,new z(t<0?e.state.doc.resolve(n.pos-i.nodeSize):n)):B_(e,new R(e.state.doc.resolve(t<0?o:o+i.nodeSize))):!1}}else if(r instanceof z&&r.node.isInline)return B_(e,new R(t>0?r.$to:r.$from));else{let n=z_(e.state,t);return n?B_(e,n):!1}}function H_(e,t){let n=e.pmViewDesc;return n?n.size==0&&(t<0||e.nextSibling||e.nodeName!=`BR`):H(e)&&e.contentEditable==`false`}function U_(e,t){return t<0?W_(e):G_(e)}function W_(e){let t=e.domSelectionRange(),n=t.focusNode,r=t.focusOffset;if(!n)return;let i,a,o=!1;for(og&&H(n)&&r<Vh(n)&&H_(n.childNodes[r],-1)&&(o=!0);;)if(r>0){if(!H(n))break;let e=n.childNodes[r-1];if(H_(e,-1))i=n,a=--r;else if(Hh(e))n=e,r=n.nodeValue.length;else break}else if(K_(n))break;else{let t=n.previousSibling;for(;t&&H_(t,-1);)i=n.parentNode,a=Nh(t),t=t.previousSibling;if(t)n=t,r=Vh(n);else{if(n=n.parentNode,n==e.dom)break;r=0}}o?Y_(e,n,r):i&&Y_(e,i,a)}function G_(e){let t=e.domSelectionRange(),n=t.focusNode,r=t.focusOffset;if(!n)return;let i=Vh(n),a,o;for(;;)if(r<i){if(!H(n))break;let e=n.childNodes[r];if(H_(e,1))a=n,o=++r;else break}else if(K_(n))break;else{let t=n.nextSibling;for(;t&&H_(t,1);)a=t.parentNode,o=Nh(t)+1,t=t.nextSibling;if(t)n=t,r=0,i=Vh(n);else{if(n=n.parentNode,n==e.dom)break;r=i=0}}a&&Y_(e,a,o)}function K_(e){let t=e.pmViewDesc;return t&&t.node&&t.node.isBlock}function q_(e,t){for(;e&&t==e.childNodes.length&&!qh(e);)t=Nh(e)+1,e=e.parentNode;for(;e&&t<e.childNodes.length;){let n=e.childNodes[t];if(Hh(n))return n;if(H(n)&&n.contentEditable==`false`)break;e=n,t=0}}function J_(e,t){for(;e&&!t&&!qh(e);)t=Nh(e),e=e.parentNode;for(;e&&t;){let n=e.childNodes[t-1];if(Hh(n))return n;if(H(n)&&n.contentEditable==`false`)break;e=n,t=e.childNodes.length}}function Y_(e,t,n){if(!Hh(t)){let e,r;(r=q_(t,n))?(t=r,n=0):(e=J_(t,n))&&(t=e,n=e.nodeValue.length)}let r=e.domSelection();if(!r)return;if(Jh(r)){let e=document.createRange();e.setEnd(t,n),e.setStart(t,n),r.removeAllRanges(),r.addRange(e)}else r.extend&&r.extend(t,n);e.domObserver.setCurSelection();let{state:i}=e;setTimeout(()=>{e.state==i&&E_(e)},50)}function X_(e,t){let n=e.state.doc.resolve(t);if(!(cg||pg)&&n.parent.inlineContent){let r=e.coordsAtPos(t);if(t>n.start()){let n=e.coordsAtPos(t-1),i=(n.top+n.bottom)/2;if(i>r.top&&i<r.bottom&&Math.abs(n.left-r.left)>1)return n.left<r.left?`ltr`:`rtl`}if(t<n.end()){let n=e.coordsAtPos(t+1),i=(n.top+n.bottom)/2;if(i>r.top&&i<r.bottom&&Math.abs(n.left-r.left)>1)return n.left>r.left?`ltr`:`rtl`}}return getComputedStyle(e.dom).direction==`rtl`?`rtl`:`ltr`}function Z_(e,t,n){let r=e.state.selection;if(r instanceof R&&!r.empty||n.indexOf(`s`)>-1||fg&&n.indexOf(`m`)>-1)return!1;let{$from:i,$to:a}=r;if(!i.parent.inlineContent||e.endOfTextblock(t<0?`up`:`down`)){let n=z_(e.state,t);if(n&&n instanceof z)return B_(e,n)}if(!i.parent.inlineContent){let n=t<0?i:a,o=r instanceof Dm?L.near(n,t):L.findFrom(n,t);return o?B_(e,o):!1}return!1}function Q_(e,t){if(!(e.state.selection instanceof R))return!0;let{$head:n,$anchor:r,empty:i}=e.state.selection;if(!n.sameParent(r))return!0;if(!i)return!1;if(e.endOfTextblock(t>0?`forward`:`backward`))return!0;let a=!n.textOffset&&(t<0?n.nodeBefore:n.nodeAfter);if(a&&!a.isText){let r=e.state.tr;return t<0?r.delete(n.pos-a.nodeSize,n.pos):r.delete(n.pos,n.pos+a.nodeSize),e.dispatch(r),!0}return!1}function $_(e,t,n){e.domObserver.stop(),t.contentEditable=n,e.domObserver.start()}function ev(e){if(!ug||e.state.selection.$head.parentOffset>0)return!1;let{focusNode:t,focusOffset:n}=e.domSelectionRange();if(t&&H(t)&&n==0&&t.firstChild&&H(t.firstChild)&&t.firstChild.contentEditable==`false`){let n=t.firstChild;$_(e,n,`true`),setTimeout(()=>$_(e,n,`false`),20)}return!1}function tv(e){let t=``;return e.ctrlKey&&(t+=`c`),e.metaKey&&(t+=`m`),e.altKey&&(t+=`a`),e.shiftKey&&(t+=`s`),t}function nv(e,t){let n=t.keyCode,r=tv(t);if(n==8||fg&&n==72&&r==`c`)return Q_(e,-1)||U_(e,-1);if(n==46&&!t.shiftKey||fg&&n==68&&r==`c`)return Q_(e,1)||U_(e,1);if(n==13||n==27)return!0;if(n==37||fg&&n==66&&r==`c`){let t=n==37?X_(e,e.state.selection.from)==`ltr`?-1:1:-1;return V_(e,t,r)||U_(e,t)}if(n==39||fg&&n==70&&r==`c`){let t=n==39?X_(e,e.state.selection.from)==`ltr`?1:-1:1;return V_(e,t,r)||U_(e,t)}return n==38||fg&&n==80&&r==`c`?Z_(e,-1,r)||U_(e,-1):n==40||fg&&n==78&&r==`c`?ev(e)||Z_(e,1,r)||U_(e,1):!(r!=(fg?`m`:`c`)||n!=66&&n!=73&&n!=89&&n!=90)}function rv(e,t){e.someProp(`transformCopied`,n=>{t=n(t,e)});let n=[],{content:r,openStart:i,openEnd:a}=t;for(;i>1&&a>1&&r.childCount==1&&r.firstChild.childCount==1;){i--,a--;let e=r.firstChild;n.push(e.type.name,e.attrs==e.type.defaultAttrs?null:e.attrs),r=e.content}let o=e.someProp(`clipboardSerializer`)||ep.fromSchema(e.state.schema),s=pv(),c=s.createElement(`div`);c.appendChild(o.serializeFragment(r,{document:s}));let l=c.firstChild,u,d=0;for(;l&&H(l)&&(u=fv[l.nodeName.toLowerCase()]);){for(let e=u.length-1;e>=0;e--){let t=s.createElement(u[e]);for(;c.firstChild;)t.appendChild(c.firstChild);c.appendChild(t),d++}l=c.firstChild}return l&&H(l)&&l.setAttribute(`data-pm-slice`,`${i} ${a}${d?` -${d}`:``} ${JSON.stringify(n)}`),{dom:c,text:e.someProp(`clipboardTextSerializer`,n=>n(t,e))||t.content.textBetween(0,t.content.size,`

`),slice:t}}function iv(e,t,n,r,i){let a=i.parent.type.spec.code,o,s;if(!n&&!t)return null;let c=!!t&&(r||a||!n);if(c){if(e.someProp(`transformPastedText`,n=>{t=n(t,a||r,e)}),a)return s=new I(P.from(e.state.schema.text(t.replace(/\r\n?/g,`
`))),0,0),e.someProp(`transformPasted`,t=>{s=t(s,e,!0)}),s;let n=e.someProp(`clipboardTextParser`,n=>n(t,i,r,e));if(n)s=n;else{let n=i.marks(),{schema:r}=e.state,a=ep.fromSchema(r);o=document.createElement(`div`),t.split(/(?:\r\n?|\n)+/).forEach(e=>{let t=o.appendChild(document.createElement(`p`));e&&t.appendChild(a.serializeNode(r.text(e,n)))})}}else e.someProp(`transformPastedHTML`,t=>{n=t(n,e)}),o=gv(n),hg&&_v(o);let l=o&&o.querySelector(`[data-pm-slice]`),u=l&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute(`data-pm-slice`)||``);if(u&&u[3])for(let e=+u[3];e>0;e--){let e=o.firstChild;for(;e&&!H(e);)e=e.nextSibling;if(!e)break;o=e}if(s||=(e.someProp(`clipboardParser`)||e.someProp(`domParser`)||Bf.fromSchema(e.state.schema)).parseSlice(o,{preserveWhitespace:!!(c||u),context:i,ruleFromNode(e){return e.nodeName==`BR`&&!e.nextSibling&&e.parentNode&&!av.test(e.parentNode.nodeName)?{ignore:!0}:null}}),u)s=vv(dv(s,+u[1],+u[2]),u[4]);else if(s=I.maxOpen(ov(s.content,i),!0),s.openStart||s.openEnd){let e=0,t=0;for(let t=s.content.firstChild;e<s.openStart&&!t.type.spec.isolating;e++,t=t.firstChild);for(let e=s.content.lastChild;t<s.openEnd&&!e.type.spec.isolating;t++,e=e.lastChild);s=dv(s,e,t)}return e.someProp(`transformPasted`,t=>{s=t(s,e,c)}),s}var av=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;function ov(e,t){if(e.childCount<2)return e;for(let n=t.depth;n>=0;n--){let r=t.node(n).contentMatchAt(t.index(n)),i,a=[];if(e.forEach(e=>{if(!a)return;let t=r.findWrapping(e.type),n;if(!t)return a=null;if(n=a.length&&i.length&&cv(t,i,e,a[a.length-1],0))a[a.length-1]=n;else{a.length&&(a[a.length-1]=lv(a[a.length-1],i.length));let n=sv(e,t);a.push(n),r=r.matchType(n.type),i=t}}),a)return P.from(a)}return e}function sv(e,t,n=0){for(let r=t.length-1;r>=n;r--)e=t[r].create(null,P.from(e));return e}function cv(e,t,n,r,i){if(i<e.length&&i<t.length&&e[i]==t[i]){let a=cv(e,t,n,r.lastChild,i+1);if(a)return r.copy(r.content.replaceChild(r.childCount-1,a));if(r.contentMatchAt(r.childCount).matchType(i==e.length-1?n.type:e[i+1]))return r.copy(r.content.append(P.from(sv(n,e,i+1))))}}function lv(e,t){if(t==0)return e;let n=e.content.replaceChild(e.childCount-1,lv(e.lastChild,t-1)),r=e.contentMatchAt(e.childCount).fillBefore(P.empty,!0);return e.copy(n.append(r))}function uv(e,t,n,r,i,a){let o=t<0?e.firstChild:e.lastChild,s=o.content;return e.childCount>1&&(a=0),i<r-1&&(s=uv(s,t,n,r,i+1,a)),i>=n&&(s=t<0?o.contentMatchAt(0).fillBefore(s,a<=i).append(s):s.append(o.contentMatchAt(o.childCount).fillBefore(P.empty,!0))),e.replaceChild(t<0?0:e.childCount-1,o.copy(s))}function dv(e,t,n){return t<e.openStart&&(e=new I(uv(e.content,-1,t,e.openStart,0,e.openEnd),t,e.openEnd)),n<e.openEnd&&(e=new I(uv(e.content,1,n,e.openEnd,0,0),e.openStart,n)),e}var fv={thead:[`table`],tbody:[`table`],tfoot:[`table`],caption:[`table`],colgroup:[`table`],col:[`table`,`colgroup`],tr:[`table`,`tbody`],td:[`table`,`tbody`,`tr`],th:[`table`,`tbody`,`tr`]};function pv(){return document.implementation.createHTMLDocument(`title`)}var mv=null;function hv(e){let t=window.trustedTypes;if(!t)return e;if(!mv){if(mv=t.defaultPolicy)try{return mv.createHTML(e)}catch{}mv=t.createPolicy(`ProseMirrorClipboard`,{createHTML:e=>e})}return mv.createHTML(e)}function gv(e){let t=/^(\s*<meta [^>]*>)*/.exec(e);t&&(e=e.slice(t[0].length));let n=pv(),r=n.body,i=/<([a-z][^>\s]+)/i.exec(e),a;if((a=i&&fv[i[1].toLowerCase()])&&(e=a.map(e=>`<`+e+`>`).join(``)+e+a.map(e=>`</`+e+`>`).reverse().join(``)),r.innerHTML=hv(e),a)for(let e=0;e<a.length;e++)r=r.querySelector(a[e])||r;for(let e=0;e<n.styleSheets.length;e++){let t=n.styleSheets[e];for(let e=0;e<t.rules.length;e++){let n=t.rules[e];if(n instanceof CSSStyleRule){let e=r.querySelectorAll(n.selectorText);for(let t=0;t<e.length;t++)e[t].style.cssText+=n.style.cssText}}}return r}function _v(e){let t=e.querySelectorAll(cg?`span:not([class]):not([style])`:`span.Apple-converted-space`);for(let n=0;n<t.length;n++){let r=t[n];r.childNodes.length==1&&r.textContent==`\xA0`&&r.parentNode&&r.parentNode.replaceChild(e.ownerDocument.createTextNode(` `),r)}}function vv(e,t){if(!e.size)return e;let n=e.content.firstChild.type.schema,r;try{r=JSON.parse(t)}catch{return e}let{content:i,openStart:a,openEnd:o}=e;for(let e=r.length-2;e>=0;e-=2){let t=n.nodes[r[e]];if(!t||t.hasRequiredAttrs())break;try{i=P.from(t.create(r[e+1],i))}catch{break}a++,o++}return new I(i,a,o)}var yv={},bv={},xv={touchstart:!0,touchmove:!0},Sv=class{constructor(){this.shiftKey=!1,this.mouseDown=null,this.lastKeyCode=null,this.lastKeyCodeTime=0,this.lastClick={time:0,x:0,y:0,type:``,button:0},this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastIOSEnter=0,this.lastIOSEnterFallbackTimeout=-1,this.lastFocus=0,this.lastTouch=0,this.lastChromeDelete=0,this.composing=!1,this.compositionNode=null,this.composingTimeout=-1,this.compositionNodes=[],this.compositionEndedAt=-2e8,this.compositionID=1,this.badSafariComposition=!1,this.compositionPendingChanges=0,this.domChangeCount=0,this.eventHandlers=Object.create(null),this.hideSelectionGuard=null}};function Cv(e){for(let t in yv){let n=yv[t];e.dom.addEventListener(t,e.input.eventHandlers[t]=t=>{Ov(e,t)&&!Dv(e,t)&&(e.editable||!(t.type in bv))&&n(e,t)},xv[t]?{passive:!0}:void 0)}ug&&e.dom.addEventListener(`input`,()=>null),Ev(e)}function wv(e,t){e.input.lastSelectionOrigin=t,e.input.lastSelectionTime=Date.now()}function Tv(e){e.input.mouseDown&&e.input.mouseDown.done(),e.domObserver.stop();for(let t in e.input.eventHandlers)e.dom.removeEventListener(t,e.input.eventHandlers[t]);clearTimeout(e.input.composingTimeout),clearTimeout(e.input.lastIOSEnterFallbackTimeout)}function Ev(e){e.someProp(`handleDOMEvents`,t=>{for(let n in t)e.input.eventHandlers[n]||e.dom.addEventListener(n,e.input.eventHandlers[n]=t=>Dv(e,t))})}function Dv(e,t){return e.someProp(`handleDOMEvents`,n=>{let r=n[t.type];return r?r(e,t)||t.defaultPrevented:!1})}function Ov(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target;n!=e.dom;n=n.parentNode)if(!n||n.nodeType==11||n.pmViewDesc&&n.pmViewDesc.stopEvent(t))return!1;return!0}function kv(e,t){!Dv(e,t)&&yv[t.type]&&(e.editable||!(t.type in bv))&&yv[t.type](e,t)}bv.keydown=(e,t)=>{let n=t;if(e.input.shiftKey=n.keyCode==16||n.shiftKey,!Kv(e)&&(e.input.lastKeyCode=n.keyCode,e.input.lastKeyCodeTime=Date.now(),!(mg&&cg&&n.keyCode==13))){if(n.keyCode!=229&&e.domObserver.forceFlush(),dg&&n.keyCode==13&&!n.ctrlKey&&!n.altKey&&!n.metaKey){let t=Date.now();e.input.lastIOSEnter=t,e.input.lastIOSEnterFallbackTimeout=setTimeout(()=>{e.input.lastIOSEnter==t&&(e.someProp(`handleKeyDown`,t=>t(e,Yh(13,`Enter`))),e.input.lastIOSEnter=0)},200)}else e.someProp(`handleKeyDown`,t=>t(e,n))||nv(e,n)?n.preventDefault():wv(e,`key`)}},bv.keyup=(e,t)=>{t.keyCode==16&&(e.input.shiftKey=!1)},bv.keypress=(e,t)=>{let n=t;if(Kv(e)||!n.charCode||n.ctrlKey&&!n.altKey||fg&&n.metaKey)return;if(e.someProp(`handleKeyPress`,t=>t(e,n))){n.preventDefault();return}let r=e.state.selection;if(!(r instanceof R)||!r.$from.sameParent(r.$to)){let t=String.fromCharCode(n.charCode),i=()=>e.state.tr.insertText(t).scrollIntoView();!/[\r\n]/.test(t)&&!e.someProp(`handleTextInput`,n=>n(e,r.$from.pos,r.$to.pos,t,i))&&e.dispatch(i()),n.preventDefault()}};function Av(e){return{left:e.clientX,top:e.clientY}}function jv(e,t){let n=t.x-e.clientX,r=t.y-e.clientY;return n*n+r*r<100}function Mv(e,t,n,r,i){if(r==-1)return!1;let a=e.state.doc.resolve(r);for(let r=a.depth+1;r>0;r--)if(e.someProp(t,t=>r>a.depth?t(e,n,a.nodeAfter,a.before(r),i,!0):t(e,n,a.node(r),a.before(r),i,!1)))return!0;return!1}function Nv(e,t,n){if(e.focused||e.focus(),e.state.selection.eq(t))return;let r=e.state.tr.setSelection(t);r.setMeta(`pointer`,!0),e.dispatch(r)}function Pv(e,t){if(t==-1)return!1;let n=e.state.doc.resolve(t),r=n.nodeAfter;return r&&r.isAtom&&z.isSelectable(r)?(Nv(e,new z(n)),!0):!1}function Fv(e,t){if(t==-1)return!1;let n=e.state.selection,r,i;n instanceof z&&(r=n.node);let a=e.state.doc.resolve(t);for(let e=a.depth+1;e>0;e--){let t=e>a.depth?a.nodeAfter:a.node(e);if(z.isSelectable(t)){i=r&&n.$from.depth>0&&e>=n.$from.depth&&a.before(n.$from.depth+1)==n.$from.pos?a.before(n.$from.depth):a.before(e);break}}return i!=null&&(Nv(e,z.create(e.state.doc,i)),!0)}function Iv(e,t,n,r,i){return Mv(e,`handleClickOn`,t,n,r)||e.someProp(`handleClick`,n=>n(e,t,r))||(i?Fv(e,n):Pv(e,n))}function Lv(e,t,n,r){return Mv(e,`handleDoubleClickOn`,t,n,r)||e.someProp(`handleDoubleClick`,n=>n(e,t,r))}function Rv(e,t,n,r){return Mv(e,`handleTripleClickOn`,t,n,r)||e.someProp(`handleTripleClick`,n=>n(e,t,r))||zv(e,n,r)}function zv(e,t,n){if(n.button!=0)return!1;let r=Bv(e,t,!0),i=e.state.doc;return r?(Nv(e,r),r instanceof R&&i.eq(e.state.doc)&&(e.input.mouseDown=new Gv(e,r)),!0):!1}function Bv(e,t,n){let r=e.state.doc;if(t==-1)return r.inlineContent?R.create(r,0,r.content.size):null;let i=r.resolve(t);for(let e=i.depth+1;e>0;e--){let t=e>i.depth?i.nodeAfter:i.node(e),a=i.before(e);if(t.inlineContent)return R.create(r,a+1,a+1+t.content.size);if(n&&z.isSelectable(t))return z.create(r,a)}return null}function Vv(e){return Qv(e)}var Hv=fg?`metaKey`:`ctrlKey`;yv.mousedown=(e,t)=>{let n=t;e.input.shiftKey=n.shiftKey;let r=Vv(e),i=Date.now(),a=`singleClick`;i-e.input.lastClick.time<500&&jv(n,e.input.lastClick)&&!n[Hv]&&e.input.lastClick.button==n.button&&(e.input.lastClick.type==`singleClick`?a=`doubleClick`:e.input.lastClick.type==`doubleClick`&&(a=`tripleClick`)),e.input.lastClick={time:i,x:n.clientX,y:n.clientY,type:a,button:n.button},e.input.mouseDown&&e.input.mouseDown.done();let o=e.posAtCoords(Av(n));o&&(a==`singleClick`?e.input.mouseDown=new Wv(e,o,n,!!r):(a==`doubleClick`?Lv:Rv)(e,o.pos,o.inside,n)?n.preventDefault():wv(e,`pointer`))};var Uv=class{constructor(e){this.view=e,this.mightDrag=null,e.root.addEventListener(`mouseup`,this.up=this.up.bind(this)),e.root.addEventListener(`mousemove`,this.move=this.move.bind(this))}up(e){this.done()}move(e){e.buttons==0&&this.done()}done(){this.view.root.removeEventListener(`mouseup`,this.up),this.view.root.removeEventListener(`mousemove`,this.move),this.view.input.mouseDown==this&&(this.view.input.mouseDown=null)}delaySelUpdate(){return!1}},Wv=class extends Uv{constructor(e,t,n,r){super(e),this.pos=t,this.event=n,this.flushed=r,this.delayedSelectionSync=!1,this.startDoc=e.state.doc,this.selectNode=!!n[Hv],this.allowDefault=n.shiftKey;let i,a;if(t.inside>-1)i=e.state.doc.nodeAt(t.inside),a=t.inside;else{let n=e.state.doc.resolve(t.pos);i=n.parent,a=n.depth?n.before():0}let o=r?null:n.target,s=o?e.docView.nearestDesc(o,!0):null;this.target=s&&H(s.nodeDOM)?s.nodeDOM:null;let{selection:c}=e.state;n.button==0&&(i.type.spec.draggable&&i.type.spec.selectable!==!1||c instanceof z&&c.from<=a&&c.to>a)&&(this.mightDrag={node:i,pos:a,addAttr:!(!this.target||this.target.draggable),setUneditable:!!(this.target&&og&&!this.target.hasAttribute(`contentEditable`))}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout(()=>{this.view.input.mouseDown==this&&this.target.setAttribute(`contentEditable`,`false`)},20),this.view.domObserver.start()),wv(e,`pointer`)}done(){super.done(),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute(`draggable`),this.mightDrag.setUneditable&&this.target.removeAttribute(`contentEditable`),this.view.domObserver.start()),this.delayedSelectionSync&&setTimeout(()=>{this.view.isDestroyed||E_(this.view)})}up(e){if(this.done(),!this.view.dom.contains(e.target))return;let t=this.pos;this.view.state.doc!=this.startDoc&&(t=this.view.posAtCoords(Av(e))),this.updateAllowDefault(e),this.allowDefault||!t?wv(this.view,`pointer`):Iv(this.view,t.pos,t.inside,e,this.selectNode)?e.preventDefault():e.button==0&&(this.flushed||ug&&this.mightDrag&&!this.mightDrag.node.isAtom||cg&&!this.view.state.selection.visible&&Math.min(Math.abs(t.pos-this.view.state.selection.from),Math.abs(t.pos-this.view.state.selection.to))<=2)?(Nv(this.view,L.near(this.view.state.doc.resolve(t.pos))),e.preventDefault()):wv(this.view,`pointer`)}move(e){this.updateAllowDefault(e),wv(this.view,`pointer`),super.move(e)}updateAllowDefault(e){!this.allowDefault&&(Math.abs(this.event.x-e.clientX)>4||Math.abs(this.event.y-e.clientY)>4)&&(this.allowDefault=!0)}delaySelUpdate(){return this.allowDefault?(this.delayedSelectionSync=!0,!0):!1}},Gv=class extends Uv{constructor(e,t){super(e),this.startSelection=t,this.startDoc=e.state.doc}move(e){if(e.buttons==0||this.view.isDestroyed||!this.view.state.doc.eq(this.startDoc)){this.done();return}e.preventDefault(),wv(this.view,`pointer`);let t=this.view.posAtCoords(Av(e)),n=t&&Bv(this.view,t.inside,!1);if(!n)return;let{doc:r}=this.view.state,i=this.startSelection,[a,o]=n.from<i.from?[i.to,n.from]:[i.from,n.to];Nv(this.view,R.create(r,a,o))}};yv.touchstart=e=>{e.input.lastTouch=Date.now(),Vv(e),wv(e,`pointer`)},yv.touchmove=e=>{e.input.lastTouch=Date.now(),wv(e,`pointer`)},yv.contextmenu=e=>Vv(e);function Kv(e,t){return e.composing?!0:ug&&Math.abs(Date.now()-e.input.compositionEndedAt)<500?(e.input.compositionEndedAt=-2e8,!0):!1}var qv=mg?5e3:-1;bv.compositionstart=bv.compositionupdate=e=>{if(!e.composing){e.domObserver.flush();let{state:t}=e,n=t.selection.$to;if(t.selection instanceof R&&t.selection.empty&&(t.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some(e=>e.type.spec.inclusive===!1)||cg&&pg&&Jv(e)))e.markCursor=e.state.storedMarks||n.marks(),Qv(e,!0),e.markCursor=null;else if(Qv(e,!t.selection.empty),og&&t.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length){let t=e.domSelectionRange();for(let n=t.focusNode,r=t.focusOffset;n&&H(n)&&r!=0;){let t=r<0?n.lastChild:n.childNodes[r-1];if(!t)break;if(Hh(t)){let n=e.domSelection();n&&n.collapse(t,t.nodeValue.length);break}n=t,r=-1}}e.input.composing=!0}Yv(e,qv)};function Jv(e){let{focusNode:t,focusOffset:n}=e.domSelectionRange();if(!t||!H(t)||n>=t.childNodes.length)return!1;let r=t.childNodes[n];return H(r)&&r.contentEditable==`false`}bv.compositionend=(e,t)=>{e.composing&&(e.input.composing=!1,e.input.compositionEndedAt=Date.now(),e.input.compositionPendingChanges=e.domObserver.pendingRecords().length?e.input.compositionID:0,e.input.compositionNode=null,e.input.badSafariComposition?e.domObserver.forceFlush():e.input.compositionPendingChanges&&Promise.resolve().then(()=>e.domObserver.flush()),e.input.compositionID++,Yv(e,20))};function Yv(e,t){clearTimeout(e.input.composingTimeout),t>-1&&(e.input.composingTimeout=setTimeout(()=>Qv(e),t))}function Xv(e){for(e.composing&&(e.input.composing=!1,e.input.compositionEndedAt=Date.now());e.input.compositionNodes.length>0;)e.input.compositionNodes.pop().markParentsDirty()}function Zv(e){let t=e.domSelectionRange();if(!t.focusNode)return null;let n=Wh(t.focusNode,t.focusOffset),r=Gh(t.focusNode,t.focusOffset);if(n&&r&&n!=r){let t=r.pmViewDesc,i=e.domObserver.lastChangedTextNode;if(n==i||r==i)return i;if(!t||!t.isText(r.nodeValue))return r;if(e.input.compositionNode==r){let e=n.pmViewDesc;if(e&&e.isText(n.nodeValue))return r}}return n||r}function Qv(e,t=!1){if(!(mg&&e.domObserver.flushingSoon>=0)){if(e.domObserver.forceFlush(),Xv(e),t||e.docView&&e.docView.dirty){let n=w_(e),r=e.state.selection;return n&&!n.eq(r)?e.dispatch(e.state.tr.setSelection(n)):(e.markCursor||t)&&!r.$from.node(r.$from.sharedDepth(r.to)).inlineContent?e.dispatch(e.state.tr.deleteSelection()):e.updateState(e.state),!0}return!1}}function $v(e,t){if(!e.dom.parentNode)return;let n=e.dom.parentNode.appendChild(document.createElement(`div`));n.appendChild(t),n.style.cssText=`position: fixed; left: -10000px; top: 10px`;let r=getSelection(),i=document.createRange();i.selectNodeContents(t),e.dom.blur(),r.removeAllRanges(),r.addRange(i),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),e.focus()},50)}var ey=ig&&ag<15||dg&&gg<604;yv.copy=bv.cut=(e,t)=>{let n=t,r=e.state.selection,i=n.type==`cut`;if(r.empty)return;let a=ey?null:n.clipboardData,{dom:o,text:s}=rv(e,r.content());a?(n.preventDefault(),a.clearData(),a.setData(`text/html`,o.innerHTML),a.setData(`text/plain`,s)):$v(e,o),i&&e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta(`uiEvent`,`cut`))};function ty(e){return e.openStart==0&&e.openEnd==0&&e.content.childCount==1?e.content.firstChild:null}function ny(e,t){if(!e.dom.parentNode)return;let n=e.input.shiftKey||e.state.selection.$from.parent.type.spec.code,r=e.dom.parentNode.appendChild(document.createElement(n?`textarea`:`div`));n||(r.contentEditable=`true`),r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.focus();let i=e.input.shiftKey&&e.input.lastKeyCode!=45;setTimeout(()=>{e.focus(),r.parentNode&&r.parentNode.removeChild(r),n?ry(e,r.value,null,i,t):ry(e,r.textContent,r.innerHTML,i,t)},50)}function ry(e,t,n,r,i){let a=iv(e,t,n,r,e.state.selection.$from);if(e.someProp(`handlePaste`,t=>t(e,i,a||I.empty)))return!0;if(!a)return!1;let o=ty(a),s=o?e.state.tr.replaceSelectionWith(o,r):e.state.tr.replaceSelection(a);return e.dispatch(s.scrollIntoView().setMeta(`paste`,!0).setMeta(`uiEvent`,`paste`)),!0}function iy(e){let t=e.getData(`text/plain`)||e.getData(`Text`);if(t)return t;let n=e.getData(`text/uri-list`);return n?n.replace(/\r?\n/g,` `):``}bv.paste=(e,t)=>{let n=t;if(e.composing&&!mg)return;let r=ey?null:n.clipboardData,i=e.input.shiftKey&&e.input.lastKeyCode!=45;r&&ry(e,iy(r),r.getData(`text/html`),i,n)?n.preventDefault():ny(e,n)};var ay=class{constructor(e,t,n){this.slice=e,this.move=t,this.node=n}},oy=fg?`altKey`:`ctrlKey`;function sy(e,t){let n;return e.someProp(`dragCopies`,e=>{n||=e(t)}),n==null?!t[oy]:!n}yv.dragstart=(e,t)=>{let n=t,r=e.input.mouseDown;if(r&&r.done(),!n.dataTransfer)return;let i=e.state.selection,a=i.empty?null:e.posAtCoords(Av(n)),o;if(!(a&&a.pos>=i.from&&a.pos<=(i instanceof z?i.to-1:i.to))){if(r&&r.mightDrag)o=z.create(e.state.doc,r.mightDrag.pos);else if(n.target&&H(n.target)){let t=e.docView.nearestDesc(n.target,!0);t&&t.node.type.spec.draggable&&t!=e.docView&&(o=z.create(e.state.doc,t.posBefore))}}let{dom:s,text:c,slice:l}=rv(e,(o||e.state.selection).content());(!n.dataTransfer.files.length||!cg||lg>120)&&n.dataTransfer.clearData(),n.dataTransfer.setData(ey?`Text`:`text/html`,s.innerHTML),n.dataTransfer.effectAllowed=`copyMove`,ey||n.dataTransfer.setData(`text/plain`,c),e.dragging=new ay(l,sy(e,n),o)},yv.dragend=e=>{let t=e.dragging;window.setTimeout(()=>{e.dragging==t&&(e.dragging=null)},50)},bv.dragover=bv.dragenter=(e,t)=>t.preventDefault(),bv.drop=(e,t)=>{try{cy(e,t,e.dragging)}finally{e.dragging=null}};function cy(e,t,n){if(!t.dataTransfer)return;let r=e.posAtCoords(Av(t));if(!r)return;let i=e.state.doc.resolve(r.pos),a=n&&n.slice;a?e.someProp(`transformPasted`,t=>{a=t(a,e,!1)}):a=iv(e,iy(t.dataTransfer),ey?null:t.dataTransfer.getData(`text/html`),!1,i);let o=!!(n&&sy(e,t));if(e.someProp(`handleDrop`,n=>n(e,t,a||I.empty,o))){t.preventDefault();return}if(!a)return;t.preventDefault();let s=a?em(e.state.doc,i.pos,a):i.pos;s??=i.pos;let c=e.state.tr;if(o){let{node:e}=n;e?e.replace(c):c.deleteSelection()}let l=c.mapping.map(s),u=a.openStart==0&&a.openEnd==0&&a.content.childCount==1,d=c.doc;if(u?c.replaceRangeWith(l,l,a.content.firstChild):c.replaceRange(l,l,a),c.doc.eq(d))return;let f=c.doc.resolve(l);if(u&&z.isSelectable(a.content.firstChild)&&f.nodeAfter&&f.nodeAfter.sameMarkup(a.content.firstChild))c.setSelection(new z(f));else{let t=c.mapping.map(s);c.mapping.maps[c.mapping.maps.length-1].forEach((e,n,r,i)=>t=i),c.setSelection(F_(e,f,c.doc.resolve(t)))}e.focus(),e.dispatch(c.setMeta(`uiEvent`,`drop`))}yv.focus=e=>{e.input.lastFocus=Date.now(),e.focused||(e.domObserver.stop(),e.dom.classList.add(`ProseMirror-focused`),e.domObserver.start(),e.focused=!0,setTimeout(()=>{e.docView&&e.hasFocus()&&!e.domObserver.currentSelection.eq(e.domSelectionRange())&&E_(e)},20))},yv.blur=(e,t)=>{let n=t;e.focused&&=(e.domObserver.stop(),e.dom.classList.remove(`ProseMirror-focused`),e.domObserver.start(),n.relatedTarget&&e.dom.contains(n.relatedTarget)&&e.domObserver.currentSelection.clear(),!1)},yv.beforeinput=(e,t)=>{if(mg&&t.inputType==`deleteContentBackward`){e.domObserver.flushSoon();let{domChangeCount:t}=e.input;setTimeout(()=>{if(e.input.domChangeCount!=t||(e.dom.blur(),e.focus(),e.someProp(`handleKeyDown`,t=>t(e,Yh(8,`Backspace`)))))return;let{$cursor:n}=e.state.selection;n&&n.pos>0&&e.dispatch(e.state.tr.delete(n.pos-1,n.pos).scrollIntoView())},50)}};for(let e in bv)yv[e]=bv[e];function ly(e,t){if(e==t)return!0;for(let n in e)if(e[n]!==t[n])return!1;for(let n in t)if(!(n in e))return!1;return!0}var uy=class e{constructor(e,t){this.toDOM=e,this.spec=t||hy,this.side=this.spec.side||0}map(e,t,n,r){let{pos:i,deleted:a}=e.mapResult(t.from+r,this.side<0?-1:1);return a?null:new py(i-n,i-n,this)}valid(){return!0}eq(t){return this==t||t instanceof e&&(this.spec.key&&this.spec.key==t.spec.key||this.toDOM==t.toDOM&&ly(this.spec,t.spec))}destroy(e){this.spec.destroy&&this.spec.destroy(e)}},dy=class e{constructor(e,t){this.attrs=e,this.spec=t||hy}map(e,t,n,r){let i=e.map(t.from+r,this.spec.inclusiveStart?-1:1)-n,a=e.map(t.to+r,this.spec.inclusiveEnd?1:-1)-n;return i>=a?null:new py(i,a,this)}valid(e,t){return t.from<t.to}eq(t){return this==t||t instanceof e&&ly(this.attrs,t.attrs)&&ly(this.spec,t.spec)}static is(t){return t.type instanceof e}destroy(){}},fy=class e{constructor(e,t){this.attrs=e,this.spec=t||hy}map(e,t,n,r){let i=e.mapResult(t.from+r,1);if(i.deleted)return null;let a=e.mapResult(t.to+r,-1);return a.deleted||a.pos<=i.pos?null:new py(i.pos-n,a.pos-n,this)}valid(e,t){let{index:n,offset:r}=e.content.findIndex(t.from),i;return r==t.from&&!(i=e.child(n)).isText&&r+i.nodeSize==t.to}eq(t){return this==t||t instanceof e&&ly(this.attrs,t.attrs)&&ly(this.spec,t.spec)}destroy(){}},py=class e{constructor(e,t,n){this.from=e,this.to=t,this.type=n}copy(t,n){return new e(t,n,this.type)}eq(e,t=0){return this.type.eq(e.type)&&this.from+t==e.from&&this.to+t==e.to}map(e,t,n){return this.type.map(e,this,t,n)}static widget(t,n,r){return new e(t,t,new uy(n,r))}static inline(t,n,r,i){return new e(t,n,new dy(r,i))}static node(t,n,r,i){return new e(t,n,new fy(r,i))}get spec(){return this.type.spec}get inline(){return this.type instanceof dy}get widget(){return this.type instanceof uy}},my=[],hy={},gy=class e{constructor(e,t){this.local=e.length?e:my,this.children=t.length?t:my}static create(e,t){return t.length?wy(t,e,0,hy):_y}find(e,t,n){let r=[];return this.findInner(e??0,t??1e9,r,0,n),r}findInner(e,t,n,r,i){for(let a=0;a<this.local.length;a++){let o=this.local[a];o.from<=t&&o.to>=e&&(!i||i(o.spec))&&n.push(o.copy(o.from+r,o.to+r))}for(let a=0;a<this.children.length;a+=3)if(this.children[a]<t&&this.children[a+1]>e){let o=this.children[a]+1;this.children[a+2].findInner(e-o,t-o,n,r+o,i)}}map(e,t,n){return this==_y||e.maps.length==0?this:this.mapInner(e,t,0,0,n||hy)}mapInner(t,n,r,i,a){let o;for(let e=0;e<this.local.length;e++){let s=this.local[e].map(t,r,i);s&&s.type.valid(n,s)?(o||=[]).push(s):a.onRemove&&a.onRemove(this.local[e].spec)}return this.children.length?yy(this.children,o||[],t,n,r,i,a):o?new e(o.sort(Ty),my):_y}add(t,n){return n.length?this==_y?e.create(t,n):this.addInner(t,n,0):this}addInner(t,n,r){let i,a=0;t.forEach((e,t)=>{let o=t+r,s;if(s=Sy(n,e,o)){for(i||=this.children.slice();a<i.length&&i[a]<t;)a+=3;i[a]==t?i[a+2]=i[a+2].addInner(e,s,o+1):i.splice(a,0,t,t+e.nodeSize,wy(s,e,o+1,hy)),a+=3}});let o=by(a?Cy(n):n,-r);for(let e=0;e<o.length;e++)o[e].type.valid(t,o[e])||o.splice(e--,1);return new e(o.length?this.local.concat(o).sort(Ty):this.local,i||this.children)}remove(e){return e.length==0||this==_y?this:this.removeInner(e,0)}removeInner(t,n){let r=this.children,i=this.local;for(let e=0;e<r.length;e+=3){let i,a=r[e]+n,o=r[e+1]+n;for(let e=0,n;e<t.length;e++)(n=t[e])&&n.from>a&&n.to<o&&(t[e]=null,(i||=[]).push(n));if(!i)continue;r==this.children&&(r=this.children.slice());let s=r[e+2].removeInner(i,a+1);s==_y?(r.splice(e,3),e-=3):r[e+2]=s}if(i.length){for(let e=0,r;e<t.length;e++)if(r=t[e])for(let e=0;e<i.length;e++)i[e].eq(r,n)&&(i==this.local&&(i=this.local.slice()),i.splice(e--,1))}return r==this.children&&i==this.local?this:i.length||r.length?new e(i,r):_y}forChild(t,n){if(this==_y)return this;if(n.isLeaf)return e.empty;let r,i;for(let e=0;e<this.children.length;e+=3)if(this.children[e]>=t){this.children[e]==t&&(r=this.children[e+2]);break}let a=t+1,o=a+n.content.size;for(let e=0;e<this.local.length;e++){let t=this.local[e];if(t.from<o&&t.to>a&&t.type instanceof dy){let e=Math.max(a,t.from)-a,n=Math.min(o,t.to)-a;e<n&&(i||=[]).push(t.copy(e,n))}}if(i){let t=new e(i.sort(Ty),my);return r?new vy([t,r]):t}return r||_y}eq(t){if(this==t)return!0;if(!(t instanceof e)||this.local.length!=t.local.length||this.children.length!=t.children.length)return!1;for(let e=0;e<this.local.length;e++)if(!this.local[e].eq(t.local[e]))return!1;for(let e=0;e<this.children.length;e+=3)if(this.children[e]!=t.children[e]||this.children[e+1]!=t.children[e+1]||!this.children[e+2].eq(t.children[e+2]))return!1;return!0}locals(e){return Ey(this.localsInner(e))}localsInner(e){if(this==_y)return my;if(e.inlineContent||!this.local.some(dy.is))return this.local;let t=[];for(let e=0;e<this.local.length;e++)this.local[e].type instanceof dy||t.push(this.local[e]);return t}forEachSet(e){e(this)}};gy.empty=new gy([],[]),gy.removeOverlap=Ey;var _y=gy.empty,vy=class e{constructor(e){this.members=e}map(t,n){let r=this.members.map(e=>e.map(t,n,hy));return e.from(r)}forChild(t,n){if(n.isLeaf)return gy.empty;let r=[];for(let i=0;i<this.members.length;i++){let a=this.members[i].forChild(t,n);a!=_y&&(a instanceof e?r=r.concat(a.members):r.push(a))}return e.from(r)}eq(t){if(!(t instanceof e)||t.members.length!=this.members.length)return!1;for(let e=0;e<this.members.length;e++)if(!this.members[e].eq(t.members[e]))return!1;return!0}locals(e){let t,n=!0;for(let r=0;r<this.members.length;r++){let i=this.members[r].localsInner(e);if(i.length){if(!t)t=i;else{n&&=(t=t.slice(),!1);for(let e=0;e<i.length;e++)t.push(i[e])}}}return t?Ey(n?t:t.sort(Ty)):my}static from(t){switch(t.length){case 0:return _y;case 1:return t[0];default:return new e(t.every(e=>e instanceof gy)?t:t.reduce((e,t)=>e.concat(t instanceof gy?t:t.members),[]))}}forEachSet(e){for(let t=0;t<this.members.length;t++)this.members[t].forEachSet(e)}};function yy(e,t,n,r,i,a,o){let s=e.slice();for(let e=0,t=a;e<n.maps.length;e++){let r=0;n.maps[e].forEach((e,n,i,a)=>{let o=a-i-(n-e);for(let i=0;i<s.length;i+=3){let a=s[i+1];if(a<0||e>a+t-r)continue;let c=s[i]+t-r;n>=c?s[i+1]=e<=c?-2:-1:e>=t&&o&&(s[i]+=o,s[i+1]+=o)}r+=o}),t=n.maps[e].map(t,-1)}let c=!1;for(let t=0;t<s.length;t+=3)if(s[t+1]<0){if(s[t+1]==-2){c=!0,s[t+1]=-1;continue}let l=n.map(e[t]+a),u=l-i;if(u<0||u>=r.content.size){c=!0;continue}let d=n.map(e[t+1]+a,-1)-i,{index:f,offset:p}=r.content.findIndex(u),m=r.maybeChild(f);if(m&&p==u&&p+m.nodeSize==d){let r=s[t+2].mapInner(n,m,l+1,e[t]+a+1,o);r==_y?(s[t+1]=-2,c=!0):(s[t]=u,s[t+1]=d,s[t+2]=r)}else c=!0}if(c){let c=wy(xy(s,e,t,n,i,a,o),r,0,o);t=c.local;for(let e=0;e<s.length;e+=3)s[e+1]<0&&(s.splice(e,3),e-=3);for(let e=0,t=0;e<c.children.length;e+=3){let n=c.children[e];for(;t<s.length&&s[t]<n;)t+=3;s.splice(t,0,c.children[e],c.children[e+1],c.children[e+2])}}return new gy(t.sort(Ty),s)}function by(e,t){if(!t||!e.length)return e;let n=[];for(let r=0;r<e.length;r++){let i=e[r];n.push(new py(i.from+t,i.to+t,i.type))}return n}function xy(e,t,n,r,i,a,o){function s(e,t){for(let a=0;a<e.local.length;a++){let s=e.local[a].map(r,i,t);s?n.push(s):o.onRemove&&o.onRemove(e.local[a].spec)}for(let n=0;n<e.children.length;n+=3)s(e.children[n+2],e.children[n]+t+1)}for(let n=0;n<e.length;n+=3)e[n+1]==-1&&s(e[n+2],t[n]+a+1);return n}function Sy(e,t,n){if(t.isLeaf)return null;let r=n+t.nodeSize,i=null;for(let t=0,a;t<e.length;t++)(a=e[t])&&a.from>n&&a.to<r&&((i||=[]).push(a),e[t]=null);return i}function Cy(e){let t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(e[n]);return t}function wy(e,t,n,r){let i=[],a=!1;t.forEach((t,o)=>{let s=Sy(e,t,o+n);if(s){a=!0;let e=wy(s,t,n+o+1,r);e!=_y&&i.push(o,o+t.nodeSize,e)}});let o=by(a?Cy(e):e,-n).sort(Ty);for(let e=0;e<o.length;e++)o[e].type.valid(t,o[e])||(r.onRemove&&r.onRemove(o[e].spec),o.splice(e--,1));return o.length||i.length?new gy(o,i):_y}function Ty(e,t){return e.from-t.from||e.to-t.to}function Ey(e){let t=e;for(let n=0;n<t.length-1;n++){let r=t[n];if(r.from!=r.to)for(let i=n+1;i<t.length;i++){let a=t[i];if(a.from==r.from){a.to!=r.to&&(t==e&&(t=e.slice()),t[i]=a.copy(a.from,r.to),Dy(t,i+1,a.copy(r.to,a.to)));continue}a.from<r.to&&(t==e&&(t=e.slice()),t[n]=r.copy(r.from,a.from),Dy(t,i,r.copy(a.from,r.to)));break}}return t}function Dy(e,t,n){for(;t<e.length&&Ty(n,e[t])>0;)t++;e.splice(t,0,n)}function Oy(e){let t=[];return e.someProp(`decorations`,n=>{let r=n(e.state);r&&r!=_y&&t.push(r)}),e.cursorWrapper&&t.push(gy.create(e.state.doc,[e.cursorWrapper.deco])),vy.from(t)}var ky={childList:!0,characterData:!0,characterDataOldValue:!0,attributes:!0,attributeOldValue:!0,subtree:!0},Ay=ig&&ag<=11,jy=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}set(e){this.anchorNode=e.anchorNode,this.anchorOffset=e.anchorOffset,this.focusNode=e.focusNode,this.focusOffset=e.focusOffset}clear(){this.anchorNode=this.focusNode=null}eq(e){return e.anchorNode==this.anchorNode&&e.anchorOffset==this.anchorOffset&&e.focusNode==this.focusNode&&e.focusOffset==this.focusOffset}},My=class{constructor(e,t){this.view=e,this.handleDOMChange=t,this.queue=[],this.flushingSoon=-1,this.observer=null,this.currentSelection=new jy,this.onCharData=null,this.suppressingSelectionUpdates=!1,this.lastChangedTextNode=null,this.observer=window.MutationObserver&&new window.MutationObserver(t=>{for(let e=0;e<t.length;e++)this.queue.push(t[e]);ig&&ag<=11&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():ug&&e.composing&&t.some(e=>e.type==`childList`&&e.target.nodeName==`TR`)?(e.input.badSafariComposition=!0,this.flushSoon()):this.flush()}),Ay&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this)}flushSoon(){this.flushingSoon<0&&(this.flushingSoon=window.setTimeout(()=>{this.flushingSoon=-1,this.flush()},20))}forceFlush(){this.flushingSoon>-1&&(window.clearTimeout(this.flushingSoon),this.flushingSoon=-1,this.flush())}start(){this.observer&&(this.observer.takeRecords(),this.observer.observe(this.view.dom,ky)),this.onCharData&&this.view.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),this.connectSelection()}stop(){if(this.observer){let e=this.observer.takeRecords();if(e.length){for(let t=0;t<e.length;t++)this.queue.push(e[t]);window.setTimeout(()=>this.flush(),20)}this.observer.disconnect()}this.onCharData&&this.view.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData),this.disconnectSelection()}connectSelection(){this.view.dom.ownerDocument.addEventListener(`selectionchange`,this.onSelectionChange)}disconnectSelection(){this.view.dom.ownerDocument.removeEventListener(`selectionchange`,this.onSelectionChange)}suppressSelectionUpdates(){this.suppressingSelectionUpdates=!0,setTimeout(()=>this.suppressingSelectionUpdates=!1,50)}onSelectionChange(){if(I_(this.view)){if(this.suppressingSelectionUpdates)return E_(this.view);if(ig&&ag<=11&&!this.view.state.selection.empty){let e=this.view.domSelectionRange();if(e.focusNode&&Rh(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset))return this.flushSoon()}this.flush()}}setCurSelection(){this.currentSelection.set(this.view.domSelectionRange())}ignoreSelectionChange(e){if(!e.focusNode)return!0;let t=new Set,n;for(let n=e.focusNode;n;n=Ph(n))t.add(n);for(let r=e.anchorNode;r;r=Ph(r))if(t.has(r)){n=r;break}let r=n&&this.view.docView.nearestDesc(n);if(r&&r.ignoreMutation({type:`selection`,target:Hh(n)?n.parentNode:n}))return this.setCurSelection(),!0}pendingRecords(){if(this.observer)for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}flush(){let{view:e}=this;if(!e.docView||this.flushingSoon>-1)return;let t=this.pendingRecords();t.length&&(this.queue=[]);let n=e.domSelectionRange(),r=!this.suppressingSelectionUpdates&&!this.currentSelection.eq(n)&&I_(e)&&!this.ignoreSelectionChange(n),i=-1,a=-1,o=!1,s=[];if(e.editable)for(let e=0;e<t.length;e++){let n=this.registerMutation(t[e],s);n&&(i=i<0?n.from:Math.min(n.from,i),a=a<0?n.to:Math.max(n.to,a),n.typeOver&&(o=!0))}if(s.some(e=>e.nodeName==`BR`)&&(e.input.lastKeyCode==8||e.input.lastKeyCode==46||cg&&(e.composing||e.input.compositionEndedAt>Date.now()-50)&&t.some(e=>e.type==`childList`&&e.removedNodes.length))){for(let e of s)if(e.nodeName==`BR`&&e.parentNode){let t=e.nextSibling;for(;t&&H(t);){if(t.contentEditable==`false`){e.parentNode.removeChild(e);break}t=t.firstChild}}}else if(og&&s.length){let t=s.filter(e=>e.nodeName==`BR`);if(t.length==2){let[e,n]=t;e.parentNode&&e.parentNode.parentNode==n.parentNode?n.remove():e.remove()}else{let{focusNode:n}=this.currentSelection;for(let r of t){let t=r.parentNode;t&&t.nodeName==`LI`&&(!n||Ry(e,n)!=t)&&r.remove()}}}let c=null;i<0&&r&&e.input.lastFocus>Date.now()-200&&Math.max(e.input.lastTouch,e.input.lastClick.time)<Date.now()-300&&Jh(n)&&(c=w_(e))&&c.eq(L.near(e.state.doc.resolve(0),1))?(e.input.lastFocus=0,E_(e),this.currentSelection.set(n),e.scrollToSelection()):(i>-1||r)&&(i>-1&&(e.docView.markDirty(i,a),Fy(e)),e.input.badSafariComposition&&(e.input.badSafariComposition=!1,zy(e,s)),this.handleDOMChange(i,a,o,s),e.docView&&e.docView.dirty?e.updateState(e.state):this.currentSelection.eq(n)||E_(e),this.currentSelection.set(n))}registerMutation(e,t){if(t.indexOf(e.target)>-1)return null;let n=this.view.docView.nearestDesc(e.target);if(e.type==`attributes`&&(n==this.view.docView||e.attributeName==`contenteditable`||e.attributeName==`style`&&!e.oldValue&&!e.target.getAttribute(`style`))||!n||n.ignoreMutation(e))return null;if(e.type==`childList`){for(let n=0;n<e.addedNodes.length;n++){let r=e.addedNodes[n];t.push(r),Hh(r)&&(this.lastChangedTextNode=r)}if(n.contentDOM&&n.contentDOM!=n.dom&&!n.contentDOM.contains(e.target))return{from:n.posBefore,to:n.posAfter};let r=e.previousSibling,i=e.nextSibling;if(ig&&ag<=11&&e.addedNodes.length)for(let t=0;t<e.addedNodes.length;t++){let{previousSibling:n,nextSibling:a}=e.addedNodes[t];(!n||Array.prototype.indexOf.call(e.addedNodes,n)<0)&&(r=n),(!a||Array.prototype.indexOf.call(e.addedNodes,a)<0)&&(i=a)}let a=r&&r.parentNode==e.target?Nh(r)+1:0,o=n.localPosFromDOM(e.target,a,-1),s=i&&i.parentNode==e.target?Nh(i):e.target.childNodes.length;return{from:o,to:n.localPosFromDOM(e.target,s,1)}}return e.type==`attributes`?{from:n.posAtStart-n.border,to:n.posAtEnd+n.border}:(this.lastChangedTextNode=e.target,{from:n.posAtStart,to:n.posAtEnd,typeOver:e.target.nodeValue==e.oldValue})}},Ny=new WeakMap,Py=!1;function Fy(e){if(!Ny.has(e)&&(Ny.set(e,null),[`normal`,`nowrap`,`pre-line`].indexOf(getComputedStyle(e.dom).whiteSpace)!==-1)){if(e.requiresGeckoHackNode=og,Py)return;console.warn(`ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.`),Py=!0}}function Iy(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.domAtPos(e.state.selection.anchor);return Rh(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function Ly(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return Iy(e,n)}let n;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.dom.addEventListener(`beforeinput`,r,!0),document.execCommand(`indent`),e.dom.removeEventListener(`beforeinput`,r,!0),n?Iy(e,n):null}function Ry(e,t){for(let n=t.parentNode;n&&n!=e.dom;n=n.parentNode){let t=e.docView.nearestDesc(n,!0);if(t&&t.node.isBlock)return n}return null}function zy(e,t){let{focusNode:n,focusOffset:r}=e.domSelectionRange();for(let i of t)if(i.parentNode?.nodeName==`TR`){let t=i.nextSibling;for(;t&&t.nodeName!=`TD`&&t.nodeName!=`TH`;)t=t.nextSibling;if(t){let a=t;for(;;){let e=a.firstChild;if(!e||!H(e)||e.contentEditable==`false`||/^(BR|IMG)$/.test(e.nodeName))break;a=e}a.insertBefore(i,a.firstChild),n==i&&e.domSelection().collapse(i,r)}else i.parentNode.removeChild(i)}}function By(e,t,n,r){let{node:i,fromOffset:a,toOffset:o,from:s,to:c}=e.docView.parseRange(t,n),l=e.domSelectionRange(),u,d=l.anchorNode;if(d&&Uh(e.dom,d)&&(u=[{node:d,offset:l.anchorOffset}],Jh(l)||u.push({node:l.focusNode,offset:l.focusOffset})),cg&&e.input.lastKeyCode===8)for(let e=o;e>a;e--){let t=i.childNodes[e-1],n=t.pmViewDesc;if(t.nodeName==`BR`&&!n){o=e;break}if(!n||n.size)break}let f=e.state.doc,p=e.someProp(`domParser`)||Bf.fromSchema(e.state.schema),m=f.resolve(s),h=null,g=p.parse(i,{topNode:m.parent,topMatch:m.parent.contentMatchAt(m.index()),topOpen:!0,from:a,to:o,preserveWhitespace:m.parent.type.whitespace!=`pre`||`full`,findPositions:u,ruleFromNode:Vy(r),context:m});if(u&&u[0].pos!=null){let e=u[0].pos,t=u[1]&&u[1].pos;t??=e,h={anchor:e+s,head:t+s}}return{doc:g,sel:h,from:s,to:c}}var Vy=e=>t=>{let n=t.pmViewDesc;if(n)return n.parseRule(e);if(t.nodeName==`BR`&&t.parentNode){if(ug&&/^(ul|ol)$/i.test(t.parentNode.nodeName)){let e=document.createElement(`div`);return e.appendChild(document.createElement(`li`)),{skip:e}}if(t.parentNode.lastChild==t||ug&&/^(tr|table)$/i.test(t.parentNode.nodeName))return{ignore:!0}}else if(t.nodeName==`IMG`&&t.getAttribute(`mark-placeholder`))return{ignore:!0};return null},Hy=/^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;function Uy(e,t,n,r,i){let a=e.input.compositionPendingChanges||(e.composing?e.input.compositionID:0);if(e.input.compositionPendingChanges=0,t<0){let t=e.input.lastSelectionTime>Date.now()-50?e.input.lastSelectionOrigin:null,n=w_(e,t);if(n&&!e.state.selection.eq(n)){if(cg&&mg&&e.input.lastKeyCode===13&&Date.now()-100<e.input.lastKeyCodeTime&&e.someProp(`handleKeyDown`,t=>t(e,Yh(13,`Enter`))))return;let r=e.state.tr.setSelection(n);t==`pointer`?r.setMeta(`pointer`,!0):t==`key`&&r.scrollIntoView(),a&&r.setMeta(`composition`,a),e.dispatch(r)}return}let o=e.state.doc.resolve(t),s=o.sharedDepth(n);t=o.before(s+1),n=e.state.doc.resolve(n).after(s+1);let c=e.state.selection,l=By(e,t,n,i),u=e.state.doc,d=u.slice(l.from,l.to),f,p;e.input.lastKeyCode===8&&Date.now()-100<e.input.lastKeyCodeTime?(f=e.state.selection.to,p=`end`):(f=e.state.selection.from,p=`start`),e.input.lastKeyCode=null;let m=Yy(d.content,l.doc.content,l.from,f,p);if(m&&e.input.domChangeCount++,(dg&&e.input.lastIOSEnter>Date.now()-225||mg)&&i.some(e=>H(e)&&!Hy.test(e.nodeName))&&(!m||m.endA>=m.endB)&&e.someProp(`handleKeyDown`,t=>t(e,Yh(13,`Enter`)))){e.input.lastIOSEnter=0;return}if(!m){if(r&&c instanceof R&&!c.empty&&c.$head.sameParent(c.$anchor)&&!e.composing&&!(l.sel&&l.sel.anchor!=l.sel.head))m={start:c.from,endA:c.to,endB:c.to};else{if(l.sel){let t=Wy(e,e.state.doc,l.sel);if(t&&!t.eq(e.state.selection)){let n=e.state.tr.setSelection(t);a&&n.setMeta(`composition`,a),e.dispatch(n)}}return}}e.state.selection.from<e.state.selection.to&&m.start==m.endB&&e.state.selection instanceof R&&(m.start>e.state.selection.from&&m.start<=e.state.selection.from+2&&e.state.selection.from>=l.from?m.start=e.state.selection.from:m.endA<e.state.selection.to&&m.endA>=e.state.selection.to-2&&e.state.selection.to<=l.to&&(m.endB+=e.state.selection.to-m.endA,m.endA=e.state.selection.to)),ig&&ag<=11&&m.endB==m.start+1&&m.endA==m.start&&m.start>l.from&&l.doc.textBetween(m.start-l.from-1,m.start-l.from+1)==` \xA0`&&(m.start--,m.endA--,m.endB--);let h=l.doc.resolveNoCache(m.start-l.from),g=l.doc.resolveNoCache(m.endB-l.from),_=u.resolve(m.start),v=h.sameParent(g)&&h.parent.inlineContent&&_.end()>=m.endA;if((dg&&e.input.lastIOSEnter>Date.now()-225&&(!v||i.some(e=>e.nodeName==`DIV`||e.nodeName==`P`))||!v&&qy(l.doc,h.pos,g.pos))&&e.someProp(`handleKeyDown`,t=>t(e,Yh(13,`Enter`)))){e.input.lastIOSEnter=0;return}if(e.state.selection.anchor>m.start&&Ky(u,m.start,m.endA,h,g)&&e.someProp(`handleKeyDown`,t=>t(e,Yh(8,`Backspace`)))){mg&&cg&&e.domObserver.suppressSelectionUpdates();return}cg&&m.endB==m.start&&(e.input.lastChromeDelete=Date.now()),mg&&!v&&h.start()!=g.start()&&g.parentOffset==0&&h.depth==g.depth&&l.sel&&l.sel.anchor==l.sel.head&&l.sel.head==m.endA&&(m.endB-=2,g=l.doc.resolveNoCache(m.endB-l.from),setTimeout(()=>{e.someProp(`handleKeyDown`,function(t){return t(e,Yh(13,`Enter`))})},20));let y=m.start,b=m.endA,x=t=>{let n=t||e.state.tr.replace(y,b,l.doc.slice(m.start-l.from,m.endB-l.from));if(l.sel){let t=Wy(e,n.doc,l.sel);t&&!(cg&&e.composing&&t.empty&&(m.start!=m.endB||e.input.lastChromeDelete<Date.now()-100)&&(t.head==y||t.head==n.mapping.map(b)-1)||ig&&t.empty&&t.head==y)&&n.setSelection(t)}return a&&n.setMeta(`composition`,a),n.scrollIntoView()},ee;if(v){if(h.pos==g.pos){ig&&ag<=11&&h.parentOffset==0&&(e.domObserver.suppressSelectionUpdates(),setTimeout(()=>E_(e),20));let t=x(e.state.tr.delete(y,b)),n=u.resolve(m.start).marksAcross(u.resolve(m.endA));n&&t.ensureMarks(n),e.dispatch(t)}else if(m.endA==m.endB&&(ee=Gy(h.parent.content.cut(h.parentOffset,g.parentOffset),_.parent.content.cut(_.parentOffset,m.endA-_.start())))){let t=x(e.state.tr);ee.type==`add`?t.addMark(y,b,ee.mark):t.removeMark(y,b,ee.mark),e.dispatch(t)}else if(h.parent.child(h.index()).isText&&h.index()==g.index()-+!g.textOffset){let t=h.parent.textBetween(h.parentOffset,g.parentOffset),n=()=>x(e.state.tr.insertText(t,y,b));e.someProp(`handleTextInput`,r=>r(e,y,b,t,n))||e.dispatch(n())}else e.dispatch(x())}else e.dispatch(x())}function Wy(e,t,n){return Math.max(n.anchor,n.head)>t.content.size?null:F_(e,t.resolve(n.anchor),t.resolve(n.head))}function Gy(e,t){let n=e.firstChild.marks,r=t.firstChild.marks,i=n,a=r,o,s,c;for(let e=0;e<r.length;e++)i=r[e].removeFromSet(i);for(let e=0;e<n.length;e++)a=n[e].removeFromSet(a);if(i.length==1&&a.length==0)s=i[0],o=`add`,c=e=>e.mark(s.addToSet(e.marks));else if(i.length==0&&a.length==1)s=a[0],o=`remove`,c=e=>e.mark(s.removeFromSet(e.marks));else return null;let l=[];for(let e=0;e<t.childCount;e++)l.push(c(t.child(e)));if(P.from(l).eq(e))return{mark:s,type:o}}function Ky(e,t,n,r,i){if(n-t<=i.pos-r.pos||Jy(r,!0,!1)<i.pos)return!1;let a=e.resolve(t);if(!r.parent.isTextblock){let e=a.nodeAfter;return e!=null&&n==t+e.nodeSize}if(a.parentOffset<a.parent.content.size||!a.parent.isTextblock)return!1;let o=e.resolve(Jy(a,!0,!0));return!o.parent.isTextblock||o.pos>n||Jy(o,!0,!1)<n?!1:r.parent.content.cut(r.parentOffset).eq(o.parent.content)}function qy(e,t,n){let r=0,i=0;return e.nodesBetween(t,n,(e,a)=>{e.isTextblock&&a>=t&&a<n?r++:(e.isText?/\S/.test(e.text.slice(Math.max(0,t-a),Math.min(e.nodeSize,n-a))):e.isLeaf)&&i++}),i==0&&r==1}function Jy(e,t,n){let r=e.depth,i=t?e.end():e.pos;for(;r>0&&(t||e.indexAfter(r)==e.node(r).childCount);)r--,i++,t=!1;if(n){let t=e.node(r).maybeChild(e.indexAfter(r));for(;t&&!t.isLeaf;)t=t.firstChild,i++}return i}function Yy(e,t,n,r,i){let a=e.findDiffStart(t,n),o=n+e.size,s=n+t.size;if(a==null)return null;let{a:c,b:l}=e.findDiffEnd(t,o,s);if(i==`end`){let e=Math.max(0,a-Math.min(c,l));r-=c+e-a}if(c<a&&o<s){let e=r<=a&&r>=c?a-r:0;a-=e,l=a+(l-c),c=a}else if(l<a){let e=r<=a&&r>=l?a-r:0;a-=e,c=a+(c-l),l=a}return{start:a,endA:c,endB:l}}var Xy=class{constructor(e,t){this._root=null,this.focused=!1,this.trackWrites=null,this.mounted=!1,this.markCursor=null,this.cursorWrapper=null,this.lastSelectedViewDesc=void 0,this.input=new Sv,this.prevDirectPlugins=[],this.pluginViews=[],this.requiresGeckoHackNode=!1,this.dragging=null,this._props=t,this.state=t.state,this.directPlugins=t.plugins||[],this.directPlugins.forEach(rb),this.dispatch=this.dispatch.bind(this),this.dom=e&&e.mount||document.createElement(`div`),e&&(e.appendChild?e.appendChild(this.dom):typeof e==`function`?e(this.dom):e.mount&&(this.mounted=!0)),this.editable=$y(this),Qy(this),this.nodeViews=tb(this),this.docView=i_(this.state.doc,Zy(this),Oy(this),this.dom,this),this.domObserver=new My(this,(e,t,n,r)=>Uy(this,e,t,n,r)),this.domObserver.start(),Cv(this),this.updatePluginViews()}get composing(){return this.input.composing}get props(){if(this._props.state!=this.state){let e=this._props;this._props={};for(let t in e)this._props[t]=e[t];this._props.state=this.state}return this._props}update(e){e.handleDOMEvents!=this._props.handleDOMEvents&&Ev(this);let t=this._props;this._props=e,e.plugins&&(e.plugins.forEach(rb),this.directPlugins=e.plugins),this.updateStateInner(e.state,t)}setProps(e){let t={};for(let e in this._props)t[e]=this._props[e];t.state=this.state;for(let n in e)t[n]=e[n];this.update(t)}updateState(e){this.updateStateInner(e,this._props)}updateStateInner(e,t){let n=this.state,r=!1,i=!1;e.storedMarks&&this.composing&&(Xv(this),i=!0),this.state=e;let a=n.plugins!=e.plugins||this._props.plugins!=t.plugins;if(a||this._props.plugins!=t.plugins||this._props.nodeViews!=t.nodeViews){let e=tb(this);nb(e,this.nodeViews)&&(this.nodeViews=e,r=!0)}(a||t.handleDOMEvents!=this._props.handleDOMEvents)&&Ev(this),this.editable=$y(this),Qy(this);let o=Oy(this),s=Zy(this),c=n.plugins!=e.plugins&&!n.doc.eq(e.doc)?`reset`:e.scrollToSelection>n.scrollToSelection?`to selection`:`preserve`,l=r||!this.docView.matchesNode(e.doc,s,o);(l||!e.selection.eq(n.selection))&&(i=!0);let u=c==`preserve`&&i&&this.dom.style.overflowAnchor==null&&xg(this);if(i){this.domObserver.stop();let t=l&&(ig||cg)&&!this.composing&&!n.selection.empty&&!e.selection.empty&&eb(n.selection,e.selection);if(l){let n=cg?this.trackWrites=this.domSelectionRange().focusNode:null;this.composing&&(this.input.compositionNode=Zv(this)),(r||!this.docView.update(e.doc,s,o,this))&&(this.docView.updateOuterDeco(s),this.docView.destroy(),this.docView=i_(e.doc,s,o,this.dom,this)),n&&(!this.trackWrites||!this.dom.contains(this.trackWrites))&&(t=!0)}let i=this.input.mouseDown;t||!(i&&this.domObserver.currentSelection.eq(this.domSelectionRange())&&R_(this)&&i.delaySelUpdate())?E_(this,t):(N_(this,e.selection),this.domObserver.setCurSelection()),this.domObserver.start()}this.updatePluginViews(n),this.dragging?.node&&!n.doc.eq(e.doc)&&this.updateDraggedNode(this.dragging,n),c==`reset`?this.dom.scrollTop=0:c==`to selection`?this.scrollToSelection():u&&Cg(u)}scrollToSelection(){let e=this.domSelectionRange().focusNode;if(e&&Uh(this.dom,e)&&!this.someProp(`handleScrollToSelection`,e=>e(this))){if(this.state.selection instanceof z){let t=this.docView.domAfterPos(this.state.selection.from);H(t)&&bg(this,t.getBoundingClientRect(),e)}else bg(this,this.coordsAtPos(this.state.selection.head,1),e)}}destroyPluginViews(){let e;for(;e=this.pluginViews.pop();)e.destroy&&e.destroy()}updatePluginViews(e){if(!e||e.plugins!=this.state.plugins||this.directPlugins!=this.prevDirectPlugins){this.prevDirectPlugins=this.directPlugins,this.destroyPluginViews();for(let e=0;e<this.directPlugins.length;e++){let t=this.directPlugins[e];t.spec.view&&this.pluginViews.push(t.spec.view(this))}for(let e=0;e<this.state.plugins.length;e++){let t=this.state.plugins[e];t.spec.view&&this.pluginViews.push(t.spec.view(this))}}else for(let t=0;t<this.pluginViews.length;t++){let n=this.pluginViews[t];n.update&&n.update(this,e)}}updateDraggedNode(e,t){let n=e.node,r=-1;if(n.from<this.state.doc.content.size&&this.state.doc.nodeAt(n.from)==n.node)r=n.from;else{let e=n.from+(this.state.doc.content.size-t.doc.content.size);(e>0&&e<this.state.doc.content.size&&this.state.doc.nodeAt(e))==n.node&&(r=e)}this.dragging=new ay(e.slice,e.move,r<0?void 0:z.create(this.state.doc,r))}someProp(e,t){let n=this._props&&this._props[e],r;if(n!=null&&(r=t?t(n):n))return r;for(let n=0;n<this.directPlugins.length;n++){let i=this.directPlugins[n].props[e];if(i!=null&&(r=t?t(i):i))return r}let i=this.state.plugins;if(i)for(let n=0;n<i.length;n++){let a=i[n].props[e];if(a!=null&&(r=t?t(a):a))return r}}hasFocus(){if(ig){let e=this.root.activeElement;if(e==this.dom)return!0;if(!e||!this.dom.contains(e))return!1;for(;e&&this.dom!=e&&this.dom.contains(e);){if(e.contentEditable==`false`)return!1;e=e.parentElement}return!0}return this.root.activeElement==this.dom}focus(){this.domObserver.stop(),this.editable&&Eg(this.dom),E_(this),this.domObserver.start()}get root(){let e=this._root;if(e==null){for(let e=this.dom.parentNode;e;e=e.parentNode)if(e.nodeType==9||e.nodeType==11&&e.host)return e.getSelection||(Object.getPrototypeOf(e).getSelection=()=>e.ownerDocument.getSelection()),this._root=e}return e||document}updateRoot(){this._root=null}posAtCoords(e){return Pg(this,e)}coordsAtPos(e,t=1){return Rg(this,e,t)}domAtPos(e,t=0){return this.docView.domFromPos(e,t)}nodeDOM(e){let t=this.docView.descAt(e);return t?t.nodeDOM:null}posAtDOM(e,t,n=-1){let r=this.docView.posFromDOM(e,t,n);if(r==null)throw RangeError(`DOM position not inside the editor`);return r}endOfTextblock(e,t){return Jg(this,t||this.state,e)}pasteHTML(e,t){return ry(this,``,e,!1,t||new ClipboardEvent(`paste`))}pasteText(e,t){return ry(this,e,null,!0,t||new ClipboardEvent(`paste`))}serializeForClipboard(e){return rv(this,e)}destroy(){this.docView&&(Tv(this),this.destroyPluginViews(),this.mounted?(this.docView.update(this.state.doc,[],Oy(this),this),this.dom.textContent=``):this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom),this.docView.destroy(),this.docView=null,Lh())}get isDestroyed(){return this.docView==null}dispatchEvent(e){return kv(this,e)}domSelectionRange(){let e=this.dom.isConnected!==!1&&this.domSelection();return e?ug&&this.root.nodeType===11&&Xh(this.dom.ownerDocument)==this.dom&&Ly(this,e)||e:{focusNode:null,focusOffset:0,anchorNode:null,anchorOffset:0}}domSelection(){return this.root.getSelection()}};Xy.prototype.dispatch=function(e){let t=this._props.dispatchTransaction;t?t.call(this,e):this.updateState(this.state.apply(e))};function Zy(e){let t=Object.create(null);return t.class=`ProseMirror`,t.contenteditable=String(e.editable),e.someProp(`attributes`,n=>{if(typeof n==`function`&&(n=n(e.state)),n)for(let e in n)e==`class`?t.class+=` `+n[e]:e==`style`?t.style=(t.style?t.style+`;`:``)+n[e]:!t[e]&&e!=`contenteditable`&&e!=`nodeName`&&(t[e]=String(n[e]))}),t.translate||=`no`,[py.node(0,e.state.doc.content.size,t)]}function Qy(e){if(e.markCursor){let t=document.createElement(`img`);t.className=`ProseMirror-separator`,t.setAttribute(`mark-placeholder`,`true`),t.setAttribute(`alt`,``),e.cursorWrapper={dom:t,deco:py.widget(e.state.selection.from,t,{raw:!0,marks:e.markCursor})}}else e.cursorWrapper=null}function $y(e){return!e.someProp(`editable`,t=>t(e.state)===!1)}function eb(e,t){let n=Math.min(e.$anchor.sharedDepth(e.head),t.$anchor.sharedDepth(t.head));return e.$anchor.start(n)!=t.$anchor.start(n)}function tb(e){let t=Object.create(null);function n(e){for(let n in e)Object.prototype.hasOwnProperty.call(t,n)||(t[n]=e[n])}return e.someProp(`nodeViews`,n),e.someProp(`markViews`,n),t}function nb(e,t){let n=0,r=0;for(let r in e){if(e[r]!=t[r])return!0;n++}for(let e in t)r++;return n!=r}function rb(e){if(e.spec.state||e.spec.filterTransaction||e.spec.appendTransaction)throw RangeError(`Plugins passed directly to the view must not have a state component`)}for(var ib={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},ab={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},ob=typeof navigator<`u`&&/Mac/.test(navigator.platform),sb=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),cb=0;cb<10;cb++)ib[48+cb]=ib[96+cb]=String(cb);for(var cb=1;cb<=24;cb++)ib[cb+111]=`F`+cb;for(var cb=65;cb<=90;cb++)ib[cb]=String.fromCharCode(cb+32),ab[cb]=String.fromCharCode(cb);for(var lb in ib)ab.hasOwnProperty(lb)||(ab[lb]=ib[lb]);function ub(e){var t=!(ob&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||sb&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?ab:ib)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}var db=typeof navigator<`u`&&/Mac|iP(hone|[oa]d)/.test(navigator.platform),fb=typeof navigator<`u`&&/Win/.test(navigator.platform);function pb(e){let t=e.split(/-(?!$)/),n=t[t.length-1];n==`Space`&&(n=` `);let r,i,a,o;for(let e=0;e<t.length-1;e++){let n=t[e];if(/^(cmd|meta|m)$/i.test(n))o=!0;else if(/^a(lt)?$/i.test(n))r=!0;else if(/^(c|ctrl|control)$/i.test(n))i=!0;else if(/^s(hift)?$/i.test(n))a=!0;else if(/^mod$/i.test(n))db?o=!0:i=!0;else throw Error(`Unrecognized modifier name: `+n)}return r&&(n=`Alt-`+n),i&&(n=`Ctrl-`+n),o&&(n=`Meta-`+n),a&&(n=`Shift-`+n),n}function mb(e){let t=Object.create(null);for(let n in e)t[pb(n)]=e[n];return t}function hb(e,t,n=!0){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n&&t.shiftKey&&(e=`Shift-`+e),e}function gb(e){return new B({props:{handleKeyDown:_b(e)}})}function _b(e){let t=mb(e);return function(e,n){let r=ub(n),i,a=t[hb(r,n)];if(a&&a(e.state,e.dispatch,e))return!0;if(r.length==1&&r!=` `){if(n.shiftKey){let i=t[hb(r,n,!1)];if(i&&i(e.state,e.dispatch,e))return!0}if((n.altKey||n.metaKey||n.ctrlKey)&&!(fb&&n.ctrlKey&&n.altKey)&&(i=ib[n.keyCode])&&i!=r){let r=t[hb(i,n)];if(r&&r(e.state,e.dispatch,e))return!0}}return!1}}var vb=Object.defineProperty,yb=(e,t)=>{for(var n in t)vb(e,n,{get:t[n],enumerable:!0})};function bb(e){let{state:t,transaction:n}=e,{selection:r}=n,{doc:i}=n,{storedMarks:a}=n;return{...t,apply:t.apply.bind(t),applyTransaction:t.applyTransaction.bind(t),plugins:t.plugins,schema:t.schema,reconfigure:t.reconfigure.bind(t),toJSON:t.toJSON.bind(t),get storedMarks(){return a},get selection(){return r},get doc(){return i},get tr(){return r=n.selection,i=n.doc,a=n.storedMarks,n}}}var xb=class{constructor(e){this.editor=e.editor,this.rawCommands=this.editor.extensionManager.commands,this.customState=e.state}get hasCustomState(){return!!this.customState}get state(){return this.customState||this.editor.state}get commands(){let{rawCommands:e,editor:t,state:n}=this,{view:r}=t,{tr:i}=n,a=this.buildProps(i);return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,(...e)=>{let n=t(...e)(a);return!i.getMeta(`preventDispatch`)&&!this.hasCustomState&&r.dispatch(i),n}]))}get chain(){return()=>this.createChain()}get can(){return()=>this.createCan()}createChain(e,t=!0){let{rawCommands:n,editor:r,state:i}=this,{view:a}=r,o=[],s=!!e,c=e||i.tr,l=()=>(!s&&t&&!c.getMeta(`preventDispatch`)&&!this.hasCustomState&&a.dispatch(c),o.every(e=>e===!0)),u={...Object.fromEntries(Object.entries(n).map(([e,n])=>[e,(...e)=>{let r=this.buildProps(c,t),i=n(...e)(r);return o.push(i),u}])),run:l};return u}createCan(e){let{rawCommands:t,state:n}=this,r=e||n.tr,i=this.buildProps(r,!1);return{...Object.fromEntries(Object.entries(t).map(([e,t])=>[e,(...e)=>t(...e)({...i,dispatch:void 0})])),chain:()=>this.createChain(r,!1)}}buildProps(e,t=!0){let{rawCommands:n,editor:r,state:i}=this,{view:a}=r,o={tr:e,editor:r,view:a,state:bb({state:i,transaction:e}),dispatch:t?()=>void 0:void 0,chain:()=>this.createChain(e,t),can:()=>this.createCan(e),get commands(){return Object.fromEntries(Object.entries(n).map(([e,t])=>[e,(...e)=>t(...e)(o)]))}};return o}},Sb={};yb(Sb,{blur:()=>Cb,clearContent:()=>wb,clearNodes:()=>Tb,command:()=>Eb,createParagraphNear:()=>Db,cut:()=>Ob,deleteCurrentNode:()=>kb,deleteNode:()=>jb,deleteRange:()=>Mb,deleteSelection:()=>Nb,enter:()=>Pb,exitCode:()=>Fb,extendMarkRange:()=>Hb,first:()=>Ub,focus:()=>Xb,forEach:()=>Zb,insertContent:()=>Qb,insertContentAt:()=>ix,joinBackward:()=>sx,joinDown:()=>ox,joinForward:()=>cx,joinItemBackward:()=>lx,joinItemForward:()=>ux,joinTextblockBackward:()=>dx,joinTextblockForward:()=>fx,joinUp:()=>ax,keyboardShortcut:()=>hx,lift:()=>_x,liftEmptyBlock:()=>vx,liftListItem:()=>yx,newlineInCode:()=>bx,resetAttributes:()=>Cx,scrollIntoView:()=>wx,selectAll:()=>Tx,selectNodeBackward:()=>Ex,selectNodeForward:()=>Dx,selectParentNode:()=>Ox,selectTextblockEnd:()=>kx,selectTextblockStart:()=>Ax,setContent:()=>Mx,setMark:()=>OS,setMeta:()=>kS,setNode:()=>AS,setNodeSelection:()=>jS,setTextDirection:()=>MS,setTextSelection:()=>NS,sinkListItem:()=>PS,splitBlock:()=>IS,splitListItem:()=>LS,toggleList:()=>VS,toggleMark:()=>HS,toggleNode:()=>US,toggleWrap:()=>WS,undoInputRule:()=>GS,unsetAllMarks:()=>KS,unsetMark:()=>qS,unsetTextDirection:()=>JS,updateAttributes:()=>YS,wrapIn:()=>XS,wrapInList:()=>ZS});var Cb=()=>({editor:e,view:t})=>(requestAnimationFrame(()=>{var n;e.isDestroyed||(t.dom.blur(),(n=window==null?void 0:window.getSelection())==null||n.removeAllRanges())}),!0),wb=(e=!0)=>({commands:t})=>t.setContent(``,{emitUpdate:e}),Tb=()=>({state:e,tr:t,dispatch:n})=>{let{selection:r}=t,{ranges:i}=r;return n&&i.forEach(({$from:n,$to:r})=>{e.doc.nodesBetween(n.pos,r.pos,(e,n)=>{if(e.type.isText)return;let{doc:r,mapping:i}=t,a=r.resolve(i.map(n)),o=r.resolve(i.map(n+e.nodeSize)),s=a.blockRange(o);if(!s)return;let c=Pp(s);if(e.type.isTextblock){let{defaultType:e}=a.parent.contentMatchAt(a.index());t.setNodeMarkup(s.start,e)}(c||c===0)&&t.lift(s,c)})}),!0},Eb=e=>t=>e(t),Db=()=>({state:e,dispatch:t})=>ch(e,t),Ob=(e,t)=>({editor:n,tr:r})=>{let{state:i}=n,a=i.doc.slice(e.from,e.to);r.deleteRange(e.from,e.to);let o=r.mapping.map(t);return r.insert(o,a.content),r.setSelection(new R(r.doc.resolve(Math.max(o-1,0)))),!0},kb=()=>({tr:e,dispatch:t})=>{let{selection:n}=e,r=n.$anchor.node();if(r.content.size>0)return!1;let i=e.selection.$anchor;for(let n=i.depth;n>0;--n)if(i.node(n).type===r.type){if(t){let t=i.before(n),r=i.after(n);e.delete(t,r).scrollIntoView()}return!0}return!1};function Ab(e,t){if(typeof e==`string`){if(!t.nodes[e])throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);return t.nodes[e]}return e}var jb=e=>({tr:t,state:n,dispatch:r})=>{let i=Ab(e,n.schema),a=t.selection.$anchor;for(let e=a.depth;e>0;--e)if(a.node(e).type===i){if(r){let n=a.before(e),r=a.after(e);t.delete(n,r).scrollIntoView()}return!0}return!1},Mb=e=>({tr:t,dispatch:n})=>{let{from:r,to:i}=e;return n&&t.delete(r,i),!0},Nb=()=>({state:e,dispatch:t})=>Um(e,t),Pb=()=>({commands:e})=>e.keyboardShortcut(`Enter`),Fb=()=>({state:e,dispatch:t})=>sh(e,t);function Ib(e){return Object.prototype.toString.call(e)===`[object RegExp]`}function Lb(e,t,n={strict:!0}){let r=Object.keys(t);return!r.length||r.every(r=>n.strict?t[r]===e[r]:Ib(t[r])?t[r].test(e[r]):t[r]===e[r])}function Rb(e,t,n={}){return e.find(e=>e.type===t&&Lb(Object.fromEntries(Object.keys(n).map(t=>[t,e.attrs[t]])),n))}function zb(e,t,n={}){return!!Rb(e,t,n)}function Bb(e,t,n){if(!e||!t)return;let r=e.parent.childAfter(e.parentOffset);if((!r.node||!r.node.marks.some(e=>e.type===t))&&(r=e.parent.childBefore(e.parentOffset)),!r.node||!r.node.marks.some(e=>e.type===t))return;if(!n){let e=r.node.marks.find(e=>e.type===t);e&&(n=e.attrs)}if(!Rb([...r.node.marks],t,n))return;let i=r.index,a=e.start()+r.offset,o=i+1,s=a+r.node.nodeSize;for(;i>0&&zb([...e.parent.child(i-1).marks],t,n);)--i,a-=e.parent.child(i).nodeSize;for(;o<e.parent.childCount&&zb([...e.parent.child(o).marks],t,n);)s+=e.parent.child(o).nodeSize,o+=1;return{from:a,to:s}}function Vb(e,t){if(typeof e==`string`){if(!t.marks[e])throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);return t.marks[e]}return e}var Hb=(e,t)=>({tr:n,state:r,dispatch:i})=>{let a=Vb(e,r.schema),{doc:o,selection:s}=n,{$from:c,from:l,to:u}=s;if(i){let e=Bb(c,a,t);if(e&&e.from<=l&&e.to>=u){let t=R.create(o,e.from,e.to);n.setSelection(t)}}return!0},Ub=e=>t=>{let n=typeof e==`function`?e(t):e;for(let e=0;e<n.length;e+=1)if(n[e](t))return!0;return!1};function Wb(e){return e instanceof R}function Gb(e=0,t=0,n=0){return Math.min(Math.max(e,t),n)}function Kb(e,t=null){if(!t)return null;let n=L.atStart(e),r=L.atEnd(e);if(t===`start`||t===!0)return n;if(t===`end`)return r;let i=n.from,a=r.to;return t===`all`?R.create(e,Gb(0,i,a),Gb(e.content.size,i,a)):R.create(e,Gb(t,i,a),Gb(t,i,a))}function qb(){return navigator.platform===`Android`||/android/i.test(navigator.userAgent)}function Jb(){return[`iPad Simulator`,`iPhone Simulator`,`iPod Simulator`,`iPad`,`iPhone`,`iPod`].includes(navigator.platform)||navigator.userAgent.includes(`Mac`)&&`ontouchend`in document}function Yb(){return typeof navigator<`u`&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}var Xb=(e=null,t={})=>({editor:n,view:r,tr:i,dispatch:a})=>{t={scrollIntoView:!0,...t};let o=()=>{(Jb()||qb())&&r.dom.focus(),Yb()&&!Jb()&&!qb()&&r.dom.focus({preventScroll:!0}),requestAnimationFrame(()=>{n.isDestroyed||(r.focus(),t?.scrollIntoView&&n.commands.scrollIntoView())})};try{if(r.hasFocus()&&e===null||e===!1)return!0}catch{return!1}if(a&&e===null&&!Wb(n.state.selection))return o(),!0;let s=Kb(i.doc,e)||n.state.selection,c=n.state.selection.eq(s);return a&&(c||i.setSelection(s),c&&i.storedMarks&&i.setStoredMarks(i.storedMarks),o()),!0},Zb=(e,t)=>n=>e.every((e,r)=>t(e,{...n,index:r})),Qb=(e,t)=>({tr:n,commands:r})=>r.insertContentAt({from:n.selection.from,to:n.selection.to},e,t),$b=e=>{let t=e.childNodes;for(let n=t.length-1;n>=0;--n){let r=t[n];r.nodeType===3&&r.nodeValue&&/^(\n\s\s|\n)$/.test(r.nodeValue)?e.removeChild(r):r.nodeType===1&&$b(r)}return e};function ex(e){if(typeof window>`u`)throw Error(`[tiptap error]: there is no window object available, so this function cannot be used`);let t=`<body>${e}</body>`,n=new window.DOMParser().parseFromString(t,`text/html`).body;return $b(n)}function tx(e,t,n){if(e instanceof df||e instanceof P)return e;n={slice:!0,parseOptions:{},...n};let r=typeof e==`object`&&!!e,i=typeof e==`string`;if(r)try{if(Array.isArray(e)&&e.length>0)return P.fromArray(e.map(e=>t.nodeFromJSON(e)));let r=t.nodeFromJSON(e);return n.errorOnInvalidContent&&r.check(),r}catch(r){if(n.errorOnInvalidContent)throw Error(`[tiptap error]: Invalid JSON content`,{cause:r});return console.warn(`[tiptap warn]: Invalid content.`,`Passed value:`,e,`Error:`,r),tx(``,t,n)}if(i){if(n.errorOnInvalidContent){let r=!1,i=``,a=new If({topNode:t.spec.topNode,marks:t.spec.marks,nodes:t.spec.nodes.append({__tiptap__private__unknown__catch__all__node:{content:`inline*`,group:`block`,parseDOM:[{tag:`*`,getAttrs:e=>(r=!0,i=typeof e==`string`?e:e.outerHTML,null)}]}})});if(n.slice?Bf.fromSchema(a).parseSlice(ex(e),n.parseOptions):Bf.fromSchema(a).parse(ex(e),n.parseOptions),n.errorOnInvalidContent&&r)throw Error(`[tiptap error]: Invalid HTML content`,{cause:Error(`Invalid element found: ${i}`)})}let r=Bf.fromSchema(t);return n.slice?r.parseSlice(ex(e),n.parseOptions).content:r.parse(ex(e),n.parseOptions)}return tx(``,t,n)}function nx(e,t,n){let r=e.steps.length-1;if(r<t)return;let i=e.steps[r];if(!(i instanceof Dp||i instanceof Op))return;let a=e.mapping.maps[r],o=0;a.forEach((e,t,n,r)=>{o===0&&(o=r)}),e.setSelection(L.near(e.doc.resolve(o),n))}var rx=e=>!(`type`in e),ix=(e,t,n)=>({tr:r,dispatch:i,editor:a})=>{if(i){n={parseOptions:a.options.parseOptions,updateSelection:!0,applyInputRules:!1,applyPasteRules:!1,...n};let i,o=e=>{a.emit(`contentError`,{editor:a,error:e,disableCollaboration:()=>{`collaboration`in a.storage&&typeof a.storage.collaboration==`object`&&a.storage.collaboration&&(a.storage.collaboration.isDisabled=!0)}})},s={preserveWhitespace:`full`,...n.parseOptions};if(!n.errorOnInvalidContent&&!a.options.enableContentCheck&&a.options.emitContentError)try{tx(t,a.schema,{parseOptions:s,errorOnInvalidContent:!0})}catch(e){o(e)}try{i=tx(t,a.schema,{parseOptions:s,errorOnInvalidContent:n.errorOnInvalidContent??a.options.enableContentCheck})}catch(e){return o(e),!1}let{from:c,to:l}=typeof e==`number`?{from:e,to:e}:{from:e.from,to:e.to},u=!0,d=!0;if((rx(i)?i:[i]).forEach(e=>{e.check(),u=u?e.isText&&e.marks.length===0:!1,d=d?e.isBlock:!1}),c===l&&d){let{parent:e}=r.doc.resolve(c);e.isTextblock&&!e.type.spec.code&&!e.childCount&&(--c,l+=1)}let f;if(u){if(Array.isArray(t))f=t.map(e=>e.text||``).join(``);else if(t instanceof P){let e=``;t.forEach(t=>{t.text&&(e+=t.text)}),f=e}else f=typeof t==`object`&&t&&t.text?t.text:t;r.insertText(f,c,l)}else{f=i;let e=r.doc.resolve(c),t=e.node(),n=e.parentOffset===0,a=t.isText||t.isTextblock,o=t.content.size>0;n&&a&&o&&d&&(c=Math.max(0,c-1)),r.replaceWith(c,l,f)}n.updateSelection&&nx(r,r.steps.length-1,-1),n.applyInputRules&&r.setMeta(`applyInputRules`,{from:c,text:f}),n.applyPasteRules&&r.setMeta(`applyPasteRules`,{from:c,text:f})}return!0},ax=()=>({state:e,dispatch:t})=>nh(e,t),ox=()=>({state:e,dispatch:t})=>rh(e,t),sx=()=>({state:e,dispatch:t})=>Gm(e,t),cx=()=>({state:e,dispatch:t})=>$m(e,t),lx=()=>({state:e,dispatch:t,tr:n})=>{try{let r=Zp(e.doc,e.selection.$from.pos,-1);return r!=null&&(n.join(r,2),t&&t(n),!0)}catch{return!1}},ux=()=>({state:e,dispatch:t,tr:n})=>{try{let r=Zp(e.doc,e.selection.$from.pos,1);return r!=null&&(n.join(r,2),t&&t(n),!0)}catch{return!1}},dx=()=>({state:e,dispatch:t})=>Km(e,t),fx=()=>({state:e,dispatch:t})=>qm(e,t);function px(){return typeof navigator<`u`&&/Mac/.test(navigator.platform)}function mx(e){let t=e.split(/-(?!$)/),n=t[t.length-1];n===`Space`&&(n=` `);let r,i,a,o;for(let e=0;e<t.length-1;e+=1){let n=t[e];if(/^(cmd|meta|m)$/i.test(n))o=!0;else if(/^a(lt)?$/i.test(n))r=!0;else if(/^(c|ctrl|control)$/i.test(n))i=!0;else if(/^s(hift)?$/i.test(n))a=!0;else if(/^mod$/i.test(n))Jb()||px()?o=!0:i=!0;else throw Error(`Unrecognized modifier name: ${n}`)}return r&&(n=`Alt-${n}`),i&&(n=`Ctrl-${n}`),o&&(n=`Meta-${n}`),a&&(n=`Shift-${n}`),n}var hx=e=>({editor:t,view:n,tr:r,dispatch:i})=>{let a=mx(e).split(/-(?!$)/),o=a.find(e=>![`Alt`,`Ctrl`,`Meta`,`Shift`].includes(e)),s=new KeyboardEvent(`keydown`,{key:o===`Space`?` `:o,altKey:a.includes(`Alt`),ctrlKey:a.includes(`Ctrl`),metaKey:a.includes(`Meta`),shiftKey:a.includes(`Shift`),bubbles:!0,cancelable:!0});return t.captureTransaction(()=>{n.someProp(`handleKeyDown`,e=>e(n,s))})?.steps.forEach(e=>{let t=e.map(r.mapping);t&&i&&r.maybeStep(t)}),!0};function gx(e,t,n={}){let{from:r,to:i,empty:a}=e.selection,o=t?Ab(t,e.schema):null,s=[];e.doc.nodesBetween(r,i,(e,t)=>{if(e.isText)return;let n=Math.max(r,t),a=Math.min(i,t+e.nodeSize);s.push({node:e,from:n,to:a})});let c=i-r,l=s.filter(e=>!o||o.name===e.node.type.name).filter(e=>Lb(e.node.attrs,n,{strict:!1}));return a?!!l.length:l.reduce((e,t)=>e+t.to-t.from,0)>=c}var _x=(e,t={})=>({state:n,dispatch:r})=>gx(n,Ab(e,n.schema),t)?ih(n,r):!1,vx=()=>({state:e,dispatch:t})=>lh(e,t),yx=e=>({state:t,dispatch:n})=>kh(Ab(e,t.schema))(t,n),bx=()=>({state:e,dispatch:t})=>ah(e,t);function xx(e,t){return t.nodes[e]?`node`:t.marks[e]?`mark`:null}function Sx(e,t){let n=typeof t==`string`?[t]:t;return Object.keys(e).reduce((t,r)=>(n.includes(r)||(t[r]=e[r]),t),{})}var Cx=(e,t)=>({tr:n,state:r,dispatch:i})=>{let a=null,o=null,s=xx(typeof e==`string`?e:e.name,r.schema);if(!s)return!1;s===`node`&&(a=Ab(e,r.schema)),s===`mark`&&(o=Vb(e,r.schema));let c=!1;return n.selection.ranges.forEach(e=>{r.doc.nodesBetween(e.$from.pos,e.$to.pos,(e,r)=>{a&&a===e.type&&(c=!0,i&&n.setNodeMarkup(r,void 0,Sx(e.attrs,t))),o&&e.marks.length&&e.marks.forEach(a=>{o===a.type&&(c=!0,i&&n.addMark(r,r+e.nodeSize,o.create(Sx(a.attrs,t))))})})}),c},wx=()=>({tr:e,dispatch:t})=>(t&&e.scrollIntoView(),!0),Tx=()=>({tr:e,dispatch:t})=>{if(t){let t=new Dm(e.doc);e.setSelection(t)}return!0},Ex=()=>({state:e,dispatch:t})=>Xm(e,t),Dx=()=>({state:e,dispatch:t})=>eh(e,t),Ox=()=>({state:e,dispatch:t})=>fh(e,t),kx=()=>({state:e,dispatch:t})=>vh(e,t),Ax=()=>({state:e,dispatch:t})=>_h(e,t);function jx(e,t,n={},r={}){return tx(e,t,{slice:!1,parseOptions:n,errorOnInvalidContent:r.errorOnInvalidContent})}var Mx=(e,{errorOnInvalidContent:t,emitUpdate:n=!0,parseOptions:r={}}={})=>({editor:i,tr:a,dispatch:o,commands:s})=>{let{doc:c}=a;if(r.preserveWhitespace!==`full`){let s=jx(e,i.schema,r,{errorOnInvalidContent:t??i.options.enableContentCheck});return o&&a.replaceWith(0,c.content.size,s).setMeta(`preventUpdate`,!n),!0}return o&&a.setMeta(`preventUpdate`,!n),s.insertContentAt({from:0,to:c.content.size},e,{parseOptions:r,errorOnInvalidContent:t??i.options.enableContentCheck})};function Nx(e,t){let n=Vb(t,e.schema),{from:r,to:i,empty:a}=e.selection,o=[];a?(e.storedMarks&&o.push(...e.storedMarks),o.push(...e.selection.$head.marks())):e.doc.nodesBetween(r,i,e=>{o.push(...e.marks)});let s=o.find(e=>e.type.name===n.name);return s?{...s.attrs}:{}}function Px(e,t){let n=new bm(e);return t.forEach(e=>{e.steps.forEach(e=>{n.step(e)})}),n}function Fx(e){for(let t=0;t<e.edgeCount;t+=1){let{type:n}=e.edge(t);if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}function Ix(e,t,n){let r=[];return e.nodesBetween(t.from,t.to,(e,t)=>{n(e)&&r.push({node:e,pos:t})}),r}function Lx(e,t){for(let n=e.depth;n>0;--n){let r=e.node(n);if(t(r))return{pos:n>0?e.before(n):0,start:e.start(n),depth:n,node:r}}}function Rx(e){return t=>Lx(t.$from,e)}function U(e,t,n){return e.config[t]===void 0&&e.parent?U(e.parent,t,n):typeof e.config[t]==`function`?e.config[t].bind({...n,parent:e.parent?U(e.parent,t,n):null}):e.config[t]}function zx(e){return e.map(e=>{let t=U(e,`addExtensions`,{name:e.name,options:e.options,storage:e.storage});return t?[e,...zx(t())]:e}).flat(10)}function Bx(e,t){let n=ep.fromSchema(t).serializeFragment(e),r=document.implementation.createHTMLDocument().createElement(`div`);return r.appendChild(n),r.innerHTML}function Vx(e){return typeof e==`function`}function W(e,t=void 0,...n){return Vx(e)?t?e.bind(t)(...n):e(...n):e}function Hx(e={}){return Object.keys(e).length===0&&e.constructor===Object}function Ux(e){return{baseExtensions:e.filter(e=>e.type===`extension`),nodeExtensions:e.filter(e=>e.type===`node`),markExtensions:e.filter(e=>e.type===`mark`)}}function Wx(e){let t=[],{nodeExtensions:n,markExtensions:r}=Ux(e),i=[...n,...r],a={default:null,validate:void 0,rendered:!0,renderHTML:null,parseHTML:null,keepOnSplit:!0,isRequired:!1},o=n.filter(e=>e.name!==`text`).map(e=>e.name),s=r.map(e=>e.name),c=[...o,...s];return e.forEach(e=>{let n=U(e,`addGlobalAttributes`,{name:e.name,options:e.options,storage:e.storage,extensions:i});n&&n().forEach(e=>{let n;n=Array.isArray(e.types)?e.types:e.types===`*`?c:e.types===`nodes`?o:e.types===`marks`?s:[],n.forEach(n=>{Object.entries(e.attributes).forEach(([e,r])=>{t.push({type:n,name:e,attribute:{...a,...r}})})})})}),i.forEach(e=>{let n=U(e,`addAttributes`,{name:e.name,options:e.options,storage:e.storage});if(!n)return;let r=n();Object.entries(r).forEach(([n,r])=>{let i={...a,...r};typeof i?.default==`function`&&(i.default=i.default()),i?.isRequired&&i?.default===void 0&&delete i.default,t.push({type:e.name,name:n,attribute:i})})}),t}function Gx(e){let t=[],n=``,r=!1,i=!1,a=0,o=e.length;for(let s=0;s<o;s+=1){let o=e[s];if(o===`'`&&!i){r=!r,n+=o;continue}if(o===`"`&&!r){i=!i,n+=o;continue}if(!r&&!i){if(o===`(`){a+=1,n+=o;continue}if(o===`)`&&a>0){--a,n+=o;continue}if(o===`;`&&a===0){t.push(n),n=``;continue}}n+=o}return n&&t.push(n),t}function Kx(e){let t=[],n=Gx(e||``),r=n.length;for(let e=0;e<r;e+=1){let r=n[e],i=r.indexOf(`:`);if(i===-1)continue;let a=r.slice(0,i).trim(),o=r.slice(i+1).trim();a&&o&&t.push([a,o])}return t}function G(...e){return e.filter(e=>!!e).reduce((e,t)=>{let n={...e};return Object.entries(t).forEach(([e,t])=>{if(!n[e]){n[e]=t;return}if(e===`class`){let r=t?String(t).split(` `):[],i=n[e]?n[e].split(` `):[],a=r.filter(e=>!i.includes(e));n[e]=[...i,...a].join(` `)}else if(e===`style`){let r=new Map([...Kx(n[e]),...Kx(t)]);n[e]=Array.from(r.entries()).map(([e,t])=>`${e}: ${t}`).join(`; `)}else n[e]=t}),n},{})}function qx(e,t){return t.filter(t=>t.type===e.type.name).filter(e=>e.attribute.rendered).map(t=>t.attribute.renderHTML?t.attribute.renderHTML(e.attrs)||{}:{[t.name]:e.attrs[t.name]}).reduce((e,t)=>G(e,t),{})}function Jx(e){return typeof e==`string`?e.match(/^[+-]?(?:\d*\.)?\d+$/)?Number(e):e===`true`||e!==`false`&&e:e}function Yx(e,t){return`style`in e?e:{...e,getAttrs:n=>{let r=e.getAttrs?e.getAttrs(n):e.attrs;if(r===!1)return!1;let i=t.reduce((e,t)=>{let r=t.attribute.parseHTML?t.attribute.parseHTML(n):Jx(n.getAttribute(t.name));return r==null?e:{...e,[t.name]:r}},{});return{...r,...i}}}}function Xx(e){return Object.fromEntries(Object.entries(e).filter(([e,t])=>e===`attrs`&&Hx(t)?!1:t!=null))}function Zx(e){let t={};return!e?.attribute?.isRequired&&`default`in(e?.attribute||{})&&(t.default=e.attribute.default),e?.attribute?.validate!==void 0&&(t.validate=e.attribute.validate),[e.name,t]}function Qx(e,t){let n=Wx(e),{nodeExtensions:r,markExtensions:i}=Ux(e),a=r.find(e=>U(e,`topNode`))?.name;return new If({topNode:a,nodes:Object.fromEntries(r.map(r=>{let i=n.filter(e=>e.type===r.name),a={name:r.name,options:r.options,storage:r.storage,editor:t},o=Xx({...e.reduce((e,t)=>{let n=U(t,`extendNodeSchema`,a);return{...e,...n?n(r):{}}},{}),content:W(U(r,`content`,a)),marks:W(U(r,`marks`,a)),group:W(U(r,`group`,a)),inline:W(U(r,`inline`,a)),atom:W(U(r,`atom`,a)),selectable:W(U(r,`selectable`,a)),draggable:W(U(r,`draggable`,a)),code:W(U(r,`code`,a)),whitespace:W(U(r,`whitespace`,a)),linebreakReplacement:W(U(r,`linebreakReplacement`,a)),defining:W(U(r,`defining`,a)),isolating:W(U(r,`isolating`,a)),attrs:Object.fromEntries(i.map(Zx))}),s=W(U(r,`parseHTML`,a));s&&(o.parseDOM=s.map(e=>Yx(e,i)));let c=U(r,`renderHTML`,a);c&&(o.toDOM=e=>c({node:e,HTMLAttributes:qx(e,i)}));let l=U(r,`renderText`,a);return l&&(o.toText=l),[r.name,o]})),marks:Object.fromEntries(i.map(r=>{let i=n.filter(e=>e.type===r.name),a={name:r.name,options:r.options,storage:r.storage,editor:t},o=Xx({...e.reduce((e,t)=>{let n=U(t,`extendMarkSchema`,a);return{...e,...n?n(r):{}}},{}),inclusive:W(U(r,`inclusive`,a)),excludes:W(U(r,`excludes`,a)),group:W(U(r,`group`,a)),spanning:W(U(r,`spanning`,a)),code:W(U(r,`code`,a)),attrs:Object.fromEntries(i.map(Zx))}),s=W(U(r,`parseHTML`,a));s&&(o.parseDOM=s.map(e=>Yx(e,i)));let c=U(r,`renderHTML`,a);return c&&(o.toDOM=e=>c({mark:e,HTMLAttributes:qx(e,i)})),[r.name,o]}))})}function $x(e){let t=e.filter((t,n)=>e.indexOf(t)!==n);return Array.from(new Set(t))}function eS(e){return e.sort((e,t)=>{let n=U(e,`priority`)||100,r=U(t,`priority`)||100;return n>r?-1:+(n<r)})}function tS(e){let t=eS(zx(e)),n=$x(t.map(e=>e.name));return n.length&&console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map(e=>`'${e}'`).join(`, `)}]. This can lead to issues.`),t}function nS(e,t,n){let{from:r,to:i}=t,{blockSeparator:a=`

`,textSerializers:o={}}=n||{},s=``;return e.nodesBetween(r,i,(e,n,c,l)=>{e.isBlock&&n>r&&(s+=a);let u=o?.[e.type.name];if(u)return c&&(s+=u({node:e,pos:n,parent:c,index:l,range:t})),!1;e.isText&&(s+=(e?.text)?.slice(Math.max(r,n)-n,i-n))}),s}function rS(e,t){return nS(e,{from:0,to:e.content.size},t)}function iS(e){return Object.fromEntries(Object.entries(e.nodes).filter(([,e])=>e.spec.toText).map(([e,t])=>[e,t.spec.toText]))}function aS(e,t){let n=Ab(t,e.schema),{from:r,to:i}=e.selection,a=[];e.doc.nodesBetween(r,i,e=>{a.push(e)});let o=a.reverse().find(e=>e.type.name===n.name);return o?{...o.attrs}:{}}function oS(e,t){let n=xx(typeof t==`string`?t:t.name,e.schema);return n===`node`?aS(e,t):n===`mark`?Nx(e,t):{}}function sS(e,t=JSON.stringify){let n={};return e.filter(e=>{let r=t(e);return Object.prototype.hasOwnProperty.call(n,r)?!1:n[r]=!0})}function cS(e){let t=sS(e);return t.length===1?t:t.filter((e,n)=>!t.filter((e,t)=>t!==n).some(t=>e.oldRange.from>=t.oldRange.from&&e.oldRange.to<=t.oldRange.to&&e.newRange.from>=t.newRange.from&&e.newRange.to<=t.newRange.to))}function lS(e){let{mapping:t,steps:n}=e,r=[];return t.maps.forEach((e,i)=>{let a=[];if(e.ranges.length)e.forEach((e,t)=>{a.push({from:e,to:t})});else{let{from:e,to:t}=n[i];if(e===void 0||t===void 0)return;a.push({from:e,to:t})}a.forEach(({from:e,to:n})=>{let a=t.slice(i).map(e,-1),o=t.slice(i).map(n),s=t.invert().map(a,-1),c=t.invert().map(o);r.push({oldRange:{from:s,to:c},newRange:{from:a,to:o}})})}),cS(r)}function uS(e,t,n){let r=[];return e===t?n.resolve(e).marks().forEach(t=>{let i=Bb(n.resolve(e),t.type);i&&r.push({mark:t,...i})}):n.nodesBetween(e,t,(e,t)=>{e&&e?.nodeSize!==void 0&&r.push(...e.marks.map(n=>({from:t,to:t+e.nodeSize,mark:n})))}),r}var dS=(e,t,n,r=20)=>{let i=e.doc.resolve(n),a=r,o=null;for(;a>0&&o===null;){let e=i.node(a);e?.type.name===t?o=e:--a}return[o,a]};function fS(e,t){return t.nodes[e]||t.marks[e]||null}function pS(e,t,n){return Object.fromEntries(Object.entries(n).filter(([n])=>{let r=e.find(e=>e.type===t&&e.name===n);return r?r.attribute.keepOnSplit:!1}))}var mS=(e,t=500)=>{let n=``,r=e.parentOffset;return e.parent.nodesBetween(Math.max(0,r-t),r,(e,t,i,a)=>{var o;let s=(o=e.type.spec).toText?.call(o,{node:e,pos:t,parent:i,index:a})||e.textContent||`%leaf%`;n+=e.isAtom&&!e.isText?s:s.slice(0,Math.max(0,r-t))}),n};function hS(e,t,n={}){let{empty:r,ranges:i}=e.selection,a=t?Vb(t,e.schema):null;if(r)return!!(e.storedMarks||e.selection.$from.marks()).filter(e=>!a||a.name===e.type.name).find(e=>Lb(e.attrs,n,{strict:!1}));let o=0,s=[];if(i.forEach(({$from:t,$to:n})=>{let r=t.pos,i=n.pos;e.doc.nodesBetween(r,i,(e,t)=>{if(a&&e.inlineContent&&!e.type.allowsMarkType(a))return!1;if(!e.isText&&!e.marks.length)return;let n=Math.max(r,t),c=Math.min(i,t+e.nodeSize),l=c-n;o+=l,s.push(...e.marks.map(e=>({mark:e,from:n,to:c})))})}),o===0)return!1;let c=s.filter(e=>!a||a.name===e.mark.type.name).filter(e=>Lb(e.mark.attrs,n,{strict:!1})).reduce((e,t)=>e+t.to-t.from,0),l=s.filter(e=>!a||e.mark.type!==a&&e.mark.type.excludes(a)).reduce((e,t)=>e+t.to-t.from,0);return(c>0?c+l:c)>=o}function gS(e,t,n={}){if(!t)return gx(e,null,n)||hS(e,null,n);let r=xx(t,e.schema);return r===`node`?gx(e,t,n):r===`mark`&&hS(e,t,n)}var _S=(e,t)=>{let{$from:n,$to:r,$anchor:i}=e.selection;if(t){let n=Rx(e=>e.type.name===t)(e.selection);if(!n)return!1;let r=e.doc.resolve(n.pos+1);return i.pos+1===r.end()}return!(r.parentOffset<r.parent.nodeSize-2||n.pos!==r.pos)},vS=e=>{let{$from:t,$to:n}=e.selection;return!(t.parentOffset>0||t.pos!==n.pos)};function yS(e,t){return Array.isArray(t)?t.some(t=>(typeof t==`string`?t:t.name)===e.name):t}function bS(e,t){let{nodeExtensions:n}=Ux(t),r=n.find(t=>t.name===e);if(!r)return!1;let i=W(U(r,`group`,{name:r.name,options:r.options,storage:r.storage}));return typeof i==`string`&&i.split(` `).includes(`list`)}function xS(e,{checkChildren:t=!0,ignoreWhitespace:n=!1}={}){if(n){if(e.type.name===`hardBreak`)return!0;if(e.isText)return!/\S/.test(e.text??``)}if(e.isText)return!e.text;if(e.isAtom||e.isLeaf)return!1;if(e.content.childCount===0)return!0;if(t){let r=!0;return e.content.forEach(e=>{r!==!1&&(xS(e,{ignoreWhitespace:n,checkChildren:t})||(r=!1))}),r}return!1}function SS(e){return e instanceof z}var CS=class e{constructor(e){this.position=e}static fromJSON(t){return new e(t.position)}toJSON(){return{position:this.position}}};function wS(e,t){let n=t.mapping.mapResult(e.position);return{position:new CS(n.pos),mapResult:n}}function TS(e){return new CS(e)}function ES(e,t,n){let r=e.state.doc.content.size,i=Gb(t,0,r),a=Gb(n,0,r),o=e.coordsAtPos(i),s=e.coordsAtPos(a,-1),c=Math.min(o.top,s.top),l=Math.max(o.bottom,s.bottom),u=Math.min(o.left,s.left),d=Math.max(o.right,s.right),f={top:c,bottom:l,left:u,right:d,width:d-u,height:l-c,x:u,y:c};return{...f,toJSON:()=>f}}function DS(e,t,n){let{selection:r}=t,i=null;if(Wb(r)&&(i=r.$cursor),i){let t=e.storedMarks??i.marks();return i.parent.type.allowsMarkType(n)&&(!!n.isInSet(t)||!t.some(e=>e.type.excludes(n)))}let{ranges:a}=r;return a.some(({$from:t,$to:r})=>{let i=t.depth===0&&e.doc.inlineContent&&e.doc.type.allowsMarkType(n);return e.doc.nodesBetween(t.pos,r.pos,(e,t,r)=>{if(i)return!1;if(e.isInline){let t=!r||r.type.allowsMarkType(n),a=!!n.isInSet(e.marks)||!e.marks.some(e=>e.type.excludes(n));i=t&&a}return!i}),i})}var OS=(e,t={})=>({tr:n,state:r,dispatch:i})=>{let{selection:a}=n,{empty:o,ranges:s}=a,c=Vb(e,r.schema);if(i){if(o){let e=Nx(r,c);n.addStoredMark(c.create({...e,...t}))}else s.forEach(e=>{let i=e.$from.pos,a=e.$to.pos;r.doc.nodesBetween(i,a,(e,r)=>{let o=Math.max(r,i),s=Math.min(r+e.nodeSize,a);e.marks.find(e=>e.type===c)?e.marks.forEach(e=>{c===e.type&&n.addMark(o,s,c.create({...e.attrs,...t}))}):n.addMark(o,s,c.create(t))})})}return DS(r,n,c)},kS=(e,t)=>({tr:n})=>(n.setMeta(e,t),!0),AS=(e,t={})=>({state:n,dispatch:r,chain:i})=>{let a=Ab(e,n.schema),o;return n.selection.$anchor.sameParent(n.selection.$head)&&(o=n.selection.$anchor.parent.attrs),a.isTextblock?i().command(({commands:e})=>bh(a,{...o,...t})(n)?!0:e.clearNodes()).command(({state:e})=>bh(a,{...o,...t})(e,r)).run():(console.warn(`[tiptap warn]: Currently "setNode()" only supports text block nodes.`),!1)},jS=e=>({tr:t,dispatch:n})=>{if(n){let{doc:n}=t,r=Gb(e,0,n.content.size),i=z.create(n,r);t.setSelection(i)}return!0},MS=(e,t)=>({tr:n,state:r,dispatch:i})=>{let{selection:a}=r,o,s;return typeof t==`number`?(o=t,s=t):t&&`from`in t&&`to`in t?(o=t.from,s=t.to):(o=a.from,s=a.to),i&&n.doc.nodesBetween(o,s,(t,r)=>{t.isText||n.setNodeMarkup(r,void 0,{...t.attrs,dir:e})}),!0},NS=e=>({tr:t,dispatch:n})=>{if(n){let{doc:n}=t,{from:r,to:i}=typeof e==`number`?{from:e,to:e}:e,a=R.atStart(n).from,o=R.atEnd(n).to,s=Gb(r,a,o),c=Gb(i,a,o),l=R.create(n,s,c);t.setSelection(l)}return!0},PS=e=>({state:t,dispatch:n})=>Mh(Ab(e,t.schema))(t,n);function FS(e,t){let n=e.storedMarks||e.selection.$to.parentOffset&&e.selection.$from.marks();if(n){let r=n.filter(e=>t?.includes(e.type.name));e.tr.ensureMarks(r)}}var IS=({keepMarks:e=!0}={})=>({tr:t,state:n,dispatch:r,editor:i})=>{let{selection:a,doc:o}=t,{$from:s,$to:c}=a,l=i.extensionManager.attributes,u=pS(l,s.node().type.name,s.node().attrs);if(a instanceof z&&a.node.isBlock)return!s.parentOffset||!Kp(o,s.pos)?!1:(r&&(e&&FS(n,i.extensionManager.splittableMarks),t.split(s.pos).scrollIntoView()),!0);if(!s.parent.isBlock)return!1;let d=c.parentOffset===c.parent.content.size,f=s.depth===0?void 0:Fx(s.node(-1).contentMatchAt(s.indexAfter(-1))),p=d&&f?[{type:f,attrs:u}]:void 0,m=Kp(t.doc,t.mapping.map(s.pos),1,p);if(!p&&!m&&Kp(t.doc,t.mapping.map(s.pos),1,f?[{type:f}]:void 0)&&(m=!0,p=f?[{type:f,attrs:u}]:void 0),r){if(m&&(a instanceof R&&t.deleteSelection(),t.split(t.mapping.map(s.pos),1,p),f&&!d&&!s.parentOffset&&s.parent.type!==f)){let e=t.mapping.map(s.before()),n=t.doc.resolve(e);s.node(-1).canReplaceWith(n.index(),n.index()+1,f)&&t.setNodeMarkup(t.mapping.map(s.before()),f)}e&&FS(n,i.extensionManager.splittableMarks),t.scrollIntoView()}return m},LS=(e,t={})=>({tr:n,state:r,dispatch:i,editor:a})=>{let o=Ab(e,r.schema),{$from:s,$to:c}=r.selection,l=r.selection.node;if(l&&l.isBlock||s.depth<2||!s.sameParent(c))return!1;let u=s.node(-1);if(u.type!==o)return!1;let d=a.extensionManager.attributes;if(s.parent.content.size===0&&s.node(-1).childCount===s.indexAfter(-1)){if(s.depth===2||s.node(-3).type!==o||s.index(-2)!==s.node(-2).childCount-1)return!1;if(i){let e=P.empty,r=s.index(-1)?1:s.index(-2)?2:3;for(let t=s.depth-r;t>=s.depth-3;--t)e=P.from(s.node(t).copy(e));let i=s.indexAfter(-1)<s.node(-2).childCount?1:s.indexAfter(-2)<s.node(-3).childCount?2:3,a={...pS(d,s.node().type.name,s.node().attrs),...t},c=o.contentMatch.defaultType?.createAndFill(a)||void 0;e=e.append(P.from(o.createAndFill(null,c)||void 0));let l=s.before(s.depth-(r-1));n.replace(l,s.after(-i),new I(e,4-r,0));let u=-1;n.doc.nodesBetween(l,n.doc.content.size,(e,t)=>{if(u>-1)return!1;e.isTextblock&&e.content.size===0&&(u=t+1)}),u>-1&&n.setSelection(R.near(n.doc.resolve(u))),n.scrollIntoView()}return!0}let f=c.pos===s.end()?u.contentMatchAt(0).defaultType:null,p={...pS(d,u.type.name,u.attrs),...t},m={...pS(d,s.node().type.name,s.node().attrs),...t};n.delete(s.pos,c.pos);let h=f?[{type:o,attrs:p},{type:f,attrs:m}]:[{type:o,attrs:p}];if(!Kp(n.doc,s.pos,2))return!1;if(i){let{selection:e,storedMarks:t}=r,{splittableMarks:o}=a.extensionManager,c=t||e.$to.parentOffset&&e.$from.marks();if(n.split(s.pos,2,h).scrollIntoView(),!c||!i)return!0;let l=c.filter(e=>o.includes(e.type.name));n.ensureMarks(l)}return!0},RS=(e,t)=>{let n=Rx(e=>e.type===t)(e.selection);if(!n)return!0;let r=e.doc.resolve(Math.max(0,n.pos-1)).before(n.depth);if(r===void 0)return!0;let i=e.doc.nodeAt(r);return n.node.type===i?.type&&Jp(e.doc,n.pos)&&e.join(n.pos),!0},zS=(e,t)=>{let n=Rx(e=>e.type===t)(e.selection);if(!n)return!0;let r=e.doc.resolve(n.start).after(n.depth);if(r===void 0)return!0;let i=e.doc.nodeAt(r);return n.node.type===i?.type&&Jp(e.doc,r)&&e.join(r),!0};function BS(e){let t=e.doc,n=t.firstChild;if(!n)return null;let r=t.resolve(1),i=t.resolve(n.nodeSize-1);return R.between(r,i)}var VS=(e,t,n,r={})=>({editor:i,tr:a,state:o,dispatch:s,chain:c,commands:l,can:u})=>{let{extensions:d,splittableMarks:f}=i.extensionManager,p=Ab(e,o.schema),m=Ab(t,o.schema),{selection:h,storedMarks:g}=o,{$from:_,$to:v}=h,y=_.blockRange(v),b=g||h.$to.parentOffset&&h.$from.marks();if(!y)return!1;let x=Rx(e=>bS(e.type.name,d))(h),ee=h.from===0&&h.to===o.doc.content.size,te=o.doc.content.content,ne=te.length===1?te[0]:null,re=ee&&ne&&bS(ne.type.name,d)?{node:ne,pos:0,depth:0}:null,ie=x??re,ae=!!x&&y.depth>=1&&y.depth-x.depth<=1,oe=!!re;if((ae||oe)&&ie){if(ie.node.type===p)return ee&&oe?c().command(({tr:e,dispatch:t})=>{let n=BS(e);return n?(e.setSelection(n),t&&t(e),!0):!1}).liftListItem(m).run():l.liftListItem(m);if(bS(ie.node.type.name,d)&&p.validContent(ie.node.content))return c().command(()=>(a.setNodeMarkup(ie.pos,p),!0)).command(()=>RS(a,p)).command(()=>zS(a,p)).run()}return!n||!b||!s?c().command(()=>u().wrapInList(p,r)?!0:l.clearNodes()).wrapInList(p,r).command(()=>RS(a,p)).command(()=>zS(a,p)).run():c().command(()=>{let e=u().wrapInList(p,r),t=b.filter(e=>f.includes(e.type.name));return a.ensureMarks(t),e?!0:l.clearNodes()}).wrapInList(p,r).command(()=>RS(a,p)).command(()=>zS(a,p)).run()},HS=(e,t={},n={})=>({state:r,commands:i})=>{let{extendEmptyMarkRange:a=!1}=n,o=Vb(e,r.schema);return hS(r,o,t)?i.unsetMark(o,{extendEmptyMarkRange:a}):i.setMark(o,t)},US=(e,t,n={})=>({state:r,commands:i})=>{let a=Ab(e,r.schema),o=Ab(t,r.schema),s=gx(r,a,n),c;return r.selection.$anchor.sameParent(r.selection.$head)&&(c=r.selection.$anchor.parent.attrs),s?i.setNode(o,c):i.setNode(a,{...c,...n})},WS=(e,t={})=>({state:n,commands:r})=>{let i=Ab(e,n.schema);return gx(n,i,t)?r.lift(i):r.wrapIn(i,t)},GS=()=>({state:e,dispatch:t})=>{let n=e.plugins;for(let r=0;r<n.length;r+=1){let i=n[r],a;if(i.spec.isInputRules&&(a=i.getState(e))){if(t){let t=e.tr,n=a.transform;for(let e=n.steps.length-1;e>=0;--e)t.step(n.steps[e].invert(n.docs[e]));if(a.text){let n=t.doc.resolve(a.from).marks();t.replaceWith(a.from,a.to,e.schema.text(a.text,n))}else t.delete(a.from,a.to)}return!0}}return!1},KS=()=>({tr:e,dispatch:t})=>{let{selection:n}=e,{empty:r,ranges:i}=n;return r||t&&i.forEach(t=>{e.removeMark(t.$from.pos,t.$to.pos)}),!0},qS=(e,t={})=>({tr:n,state:r,dispatch:i})=>{let{extendEmptyMarkRange:a=!1}=t,{selection:o}=n,s=Vb(e,r.schema),{$from:c,empty:l,ranges:u}=o;if(!i)return!0;if(l&&a){let{from:e,to:t}=o,r=Bb(c,s,c.marks().find(e=>e.type===s)?.attrs);r&&(e=r.from,t=r.to),n.removeMark(e,t,s)}else u.forEach(e=>{n.removeMark(e.$from.pos,e.$to.pos,s)});return n.removeStoredMark(s),!0},JS=e=>({tr:t,state:n,dispatch:r})=>{let{selection:i}=n,a,o;return typeof e==`number`?(a=e,o=e):e&&`from`in e&&`to`in e?(a=e.from,o=e.to):(a=i.from,o=i.to),r&&t.doc.nodesBetween(a,o,(e,n)=>{if(e.isText)return;let r={...e.attrs};delete r.dir,t.setNodeMarkup(n,void 0,r)}),!0},YS=(e,t={})=>({tr:n,state:r,dispatch:i})=>{let a=null,o=null,s=xx(typeof e==`string`?e:e.name,r.schema);if(!s)return!1;s===`node`&&(a=Ab(e,r.schema)),s===`mark`&&(o=Vb(e,r.schema));let c=!1;return n.selection.ranges.forEach(e=>{let s=e.$from.pos,l=e.$to.pos,u,d,f,p;n.selection.empty?r.doc.nodesBetween(s,l,(e,t)=>{a&&a===e.type&&(c=!0,f=Math.max(t,s),p=Math.min(t+e.nodeSize,l),u=t,d=e)}):r.doc.nodesBetween(s,l,(e,r)=>{r<s&&a&&a===e.type&&(c=!0,f=Math.max(r,s),p=Math.min(r+e.nodeSize,l),u=r,d=e),r>=s&&r<=l&&(a&&a===e.type&&(c=!0,i&&n.setNodeMarkup(r,void 0,{...e.attrs,...t})),o&&e.marks.length&&e.marks.forEach(a=>{if(o===a.type&&(c=!0,i)){let i=Math.max(r,s),c=Math.min(r+e.nodeSize,l);n.addMark(i,c,o.create({...a.attrs,...t}))}}))}),d&&(u!==void 0&&i&&n.setNodeMarkup(u,void 0,{...d.attrs,...t}),o&&d.marks.length&&d.marks.forEach(e=>{o===e.type&&i&&n.addMark(f,p,o.create({...e.attrs,...t}))}))}),c},XS=(e,t={})=>({state:n,dispatch:r})=>yh(Ab(e,n.schema),t)(n,r),ZS=(e,t={})=>({state:n,dispatch:r})=>Eh(Ab(e,n.schema),t)(n,r),QS=class{constructor(){this.callbacks={}}on(e,t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(t),this}emit(e,...t){let n=this.callbacks[e];return n&&n.forEach(e=>e.apply(this,t)),this}off(e,t){let n=this.callbacks[e];return n&&(t?this.callbacks[e]=n.filter(e=>e!==t):delete this.callbacks[e]),this}once(e,t){let n=(...r)=>{this.off(e,n),t.apply(this,r)};return this.on(e,n)}removeAllListeners(){this.callbacks={}}},$S=class{constructor(e){this.find=e.find,this.handler=e.handler,this.undoable=e.undoable??!0}},eC=(e,t)=>{if(Ib(t))return t.exec(e);let n=t(e);if(!n)return null;let r=[n.text];return r.index=n.index,r.input=e,r.data=n.data,n.replaceWith&&(n.text.includes(n.replaceWith)||console.warn(`[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".`),r.push(n.replaceWith)),r};function tC(e){let{editor:t,from:n,to:r,text:i,rules:a,plugin:o}=e,{view:s}=t;if(s.composing)return!1;let c=s.state.doc.resolve(n);if(c.parent.type.spec.code||(c.nodeBefore||c.nodeAfter)?.marks.find(e=>e.type.spec.code))return!1;let l=!1,u=mS(c)+i;return a.forEach(e=>{if(l)return;let a=eC(u,e.find);if(!a)return;let c=s.state.tr,d=bb({state:s.state,transaction:c}),f={from:n-(a[0].length-i.length),to:r},{commands:p,chain:m,can:h}=new xb({editor:t,state:d});e.handler({state:d,range:f,match:a,commands:p,chain:m,can:h})!==null&&c.steps.length&&(e.undoable&&c.setMeta(o,{transform:c,from:n,to:r,text:i}),s.dispatch(c),l=!0)}),l}function nC(e){let{editor:t,rules:n}=e,r=new B({state:{init(){return null},apply(e,i,a){let o=e.getMeta(r);if(o)return o;let s=e.getMeta(`applyInputRules`);return s&&setTimeout(()=>{let{text:e}=s;e=typeof e==`string`?e:Bx(P.from(e),a.schema);let{from:i}=s,o=i+e.length;tC({editor:t,from:i,to:o,text:e,rules:n,plugin:r})}),e.selectionSet||e.docChanged?null:i}},props:{handleTextInput(e,i,a,o){return tC({editor:t,from:i,to:a,text:o,rules:n,plugin:r})},handleDOMEvents:{compositionend:e=>(setTimeout(()=>{let{$cursor:i}=e.state.selection;i&&tC({editor:t,from:i.pos,to:i.pos,text:``,rules:n,plugin:r})}),!1)},handleKeyDown(e,i){if(i.key!==`Enter`)return!1;let{$cursor:a}=e.state.selection;return a?tC({editor:t,from:a.pos,to:a.pos,text:`
`,rules:n,plugin:r}):!1}},isInputRules:!0});return r}function rC(e){return Object.prototype.toString.call(e).slice(8,-1)}function iC(e){return rC(e)===`Object`&&e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function aC(e,t){let n={...e};return iC(e)&&iC(t)&&Object.keys(t).forEach(r=>{iC(t[r])&&iC(e[r])?n[r]=aC(e[r],t[r]):n[r]=t[r]}),n}var oC=class{constructor(e={}){this.type=`extendable`,this.parent=null,this.child=null,this.name=``,this.config={name:this.name},this.config={...this.config,...e},this.name=this.config.name}get options(){return{...W(U(this,`addOptions`,{name:this.name}))||{}}}get storage(){return{...W(U(this,`addStorage`,{name:this.name,options:this.options}))||{}}}configure(e={}){let t=this.extend({...this.config,addOptions:()=>aC(this.options,e)});return t.name=this.name,t.parent=this.parent,t}extend(e={}){let t=new this.constructor({...this.config,...e});return t.parent=this,this.child=t,t.name=`name`in e?e.name:t.parent.name,t}},sC=class e extends oC{constructor(){super(...arguments),this.type=`mark`}static create(t={}){let n=typeof t==`function`?t():t;return new e(n)}static handleExit({editor:e,mark:t}){let{tr:n}=e.state,r=e.state.selection.$from;if(r.pos===r.end()){let i=r.marks();if(!i.find(e=>e?.type.name===t.name))return!1;let a=i.find(e=>e?.type.name===t.name);return a&&n.removeStoredMark(a),n.insertText(` `,r.pos),e.view.dispatch(n),!0}return!1}configure(e){return super.configure(e)}extend(e){let t=typeof e==`function`?e():e;return super.extend(t)}};function cC(e){return typeof e==`number`}var lC=class{constructor(e){this.find=e.find,this.handler=e.handler}},uC=(e,t,n)=>{if(Ib(t))return[...e.matchAll(t)];let r=t(e,n);return r?r.map(t=>{let n=[t.text];return n.index=t.index,n.input=e,n.data=t.data,t.replaceWith&&(t.text.includes(t.replaceWith)||console.warn(`[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".`),n.push(t.replaceWith)),n}):[]};function dC(e){let{editor:t,state:n,from:r,to:i,rule:a,pasteEvent:o,dropEvent:s}=e,{commands:c,chain:l,can:u}=new xb({editor:t,state:n}),d=[];return n.doc.nodesBetween(r,i,(e,t)=>{if(e.type?.spec?.code||!(e.isText||e.isTextblock||e.isInline))return;let f=e.content?.size??e.nodeSize??0,p=Math.max(r,t),m=Math.min(i,t+f);p>=m||uC(e.isText?e.text||``:e.textBetween(p-t,m-t,void 0,`￼`),a.find,o).forEach(e=>{if(e.index===void 0)return;let t=p+e.index+1,r=t+e[0].length,i={from:n.tr.mapping.map(t),to:n.tr.mapping.map(r)},f=a.handler({state:n,range:i,match:e,commands:c,chain:l,can:u,pasteEvent:o,dropEvent:s});d.push(f)})}),d.every(e=>e!==null)}var fC=null,pC=e=>{var t;let n=new ClipboardEvent(`paste`,{clipboardData:new DataTransfer});return(t=n.clipboardData)==null||t.setData(`text/html`,e),n};function mC(e){let{editor:t,rules:n}=e,r=null,i=!1,a=!1,o=typeof ClipboardEvent<`u`?new ClipboardEvent(`paste`):null,s;try{s=typeof DragEvent<`u`?new DragEvent(`drop`):null}catch{s=null}let c=({state:e,from:n,to:r,rule:i,pasteEvt:a})=>{let c=e.tr,l=bb({state:e,transaction:c});if(dC({editor:t,state:l,from:Math.max(n-1,0),to:r.b-1,rule:i,pasteEvent:a,dropEvent:s})&&c.steps.length){try{s=typeof DragEvent<`u`?new DragEvent(`drop`):null}catch{s=null}return o=typeof ClipboardEvent<`u`?new ClipboardEvent(`paste`):null,c}};return n.map(e=>new B({view(e){let n=n=>{r=e.dom.parentElement?.contains(n.target)?e.dom.parentElement:null,r&&(fC=t)},i=()=>{fC&&=null};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragend`,i),{destroy(){window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragend`,i)}}},props:{handleDOMEvents:{drop:(e,t)=>{if(a=r===e.dom.parentElement,s=t,!a){let e=fC;e?.isEditable&&setTimeout(()=>{let t=e.state.selection;t&&e.commands.deleteRange({from:t.from,to:t.to})},10)}return!1},paste:(e,t)=>{let n=t.clipboardData?.getData(`text/html`);return o=t,i=!!n?.includes(`data-pm-slice`),!1}}},appendTransaction:(t,n,r)=>{let s=t[0],l=s.getMeta(`uiEvent`)===`paste`&&!i,u=s.getMeta(`uiEvent`)===`drop`&&!a,d=s.getMeta(`applyPasteRules`),f=!!d;if(!l&&!u&&!f)return;if(f){let{text:t}=d;t=typeof t==`string`?t:Bx(P.from(t),r.schema);let{from:n}=d,i=n+t.length,a=pC(t);return c({rule:e,state:r,from:n,to:{b:i},pasteEvt:a})}let p=n.doc.content.findDiffStart(r.doc.content),m=n.doc.content.findDiffEnd(r.doc.content);if(cC(p)&&m&&p!==m.b)return c({rule:e,state:r,from:p,to:m,pasteEvt:o})}}))}var hC=class{constructor(e,t){this.splittableMarks=[],this.editor=t,this.baseExtensions=e,this.extensions=tS(e),this.schema=Qx(this.extensions,t),this.setupExtensions()}get commands(){return this.extensions.reduce((e,t)=>{let n=U(t,`addCommands`,{name:t.name,options:t.options,storage:this.editor.extensionStorage[t.name],editor:this.editor,type:fS(t.name,this.schema)});return n?{...e,...n()}:e},{})}get plugins(){let{editor:e}=this;return eS([...this.extensions].reverse()).flatMap(t=>{let n={name:t.name,options:t.options,storage:this.editor.extensionStorage[t.name],editor:e,type:fS(t.name,this.schema)},r=[],i=U(t,`addKeyboardShortcuts`,n),a={};if(t.type===`mark`&&U(t,`exitable`,n)&&(a.ArrowRight=()=>sC.handleExit({editor:e,mark:t})),i){let t=Object.fromEntries(Object.entries(i()).map(([t,n])=>[t,()=>n({editor:e})]));a={...a,...t}}let o=gb(a);r.push(o);let s=U(t,`addInputRules`,n);if(yS(t,e.options.enableInputRules)&&s){let t=s();if(t&&t.length){let n=nC({editor:e,rules:t}),i=Array.isArray(n)?n:[n];r.push(...i)}}let c=U(t,`addPasteRules`,n);if(yS(t,e.options.enablePasteRules)&&c){let t=c();if(t&&t.length){let n=mC({editor:e,rules:t});r.push(...n)}}let l=U(t,`addProseMirrorPlugins`,n);if(l){let e=l();r.push(...e)}return r})}get attributes(){return Wx(this.extensions)}get nodeViews(){let{editor:e}=this,{nodeExtensions:t}=Ux(this.extensions);return Object.fromEntries(t.filter(e=>!!U(e,`addNodeView`)).map(t=>{let n=this.attributes.filter(e=>e.type===t.name),r=U(t,`addNodeView`,{name:t.name,options:t.options,storage:this.editor.extensionStorage[t.name],editor:e,type:Ab(t.name,this.schema)});if(!r)return[];let i=r();return i?[t.name,(r,a,o,s,c)=>{let l=qx(r,n);return i({node:r,view:a,getPos:o,decorations:s,innerDecorations:c,editor:e,extension:t,HTMLAttributes:l})}]:[]}))}dispatchTransaction(e){let{editor:t}=this;return eS([...this.extensions].reverse()).reduceRight((e,n)=>{let r={name:n.name,options:n.options,storage:this.editor.extensionStorage[n.name],editor:t,type:fS(n.name,this.schema)},i=U(n,`dispatchTransaction`,r);return i?t=>{i.call(r,{transaction:t,next:e})}:e},e)}transformPastedHTML(e){let{editor:t}=this;return eS([...this.extensions]).reduce((e,n)=>{let r={name:n.name,options:n.options,storage:this.editor.extensionStorage[n.name],editor:t,type:fS(n.name,this.schema)},i=U(n,`transformPastedHTML`,r);return i?(t,n)=>{let a=e(t,n);return i.call(r,a)}:e},e||(e=>e))}get markViews(){let{editor:e}=this,{markExtensions:t}=Ux(this.extensions);return Object.fromEntries(t.filter(e=>!!U(e,`addMarkView`)).map(t=>{let n=this.attributes.filter(e=>e.type===t.name),r=U(t,`addMarkView`,{name:t.name,options:t.options,storage:this.editor.extensionStorage[t.name],editor:e,type:Vb(t.name,this.schema)});return r?[t.name,(i,a,o)=>{let s=qx(i,n);return r()({mark:i,view:a,inline:o,editor:e,extension:t,HTMLAttributes:s,updateAttributes:t=>{GC(i,e,t)}})}]:[]}))}setupExtensions(){let e=this.extensions;this.editor.extensionStorage=Object.fromEntries(e.map(e=>[e.name,e.storage])),e.forEach(e=>{let t={name:e.name,options:e.options,storage:this.editor.extensionStorage[e.name],editor:this.editor,type:fS(e.name,this.schema)};e.type===`mark`&&(W(U(e,`keepOnSplit`,t))??!0)&&this.splittableMarks.push(e.name);let n=U(e,`onBeforeCreate`,t),r=U(e,`onCreate`,t),i=U(e,`onUpdate`,t),a=U(e,`onSelectionUpdate`,t),o=U(e,`onTransaction`,t),s=U(e,`onFocus`,t),c=U(e,`onBlur`,t),l=U(e,`onDestroy`,t);n&&this.editor.on(`beforeCreate`,n),r&&this.editor.on(`create`,r),i&&this.editor.on(`update`,i),a&&this.editor.on(`selectionUpdate`,a),o&&this.editor.on(`transaction`,o),s&&this.editor.on(`focus`,s),c&&this.editor.on(`blur`,c),l&&this.editor.on(`destroy`,l)})}};hC.resolve=tS,hC.sort=eS,hC.flatten=zx,yb({},{ClipboardTextSerializer:()=>gC,Commands:()=>_C,Delete:()=>vC,Drop:()=>yC,Editable:()=>bC,FocusEvents:()=>SC,Keymap:()=>CC,Paste:()=>wC,Tabindex:()=>TC,TextDirection:()=>EC,focusEventsPluginKey:()=>xC});var K=class e extends oC{constructor(){super(...arguments),this.type=`extension`}static create(t={}){let n=typeof t==`function`?t():t;return new e(n)}configure(e){return super.configure(e)}extend(e){let t=typeof e==`function`?e():e;return super.extend(t)}},gC=K.create({name:`clipboardTextSerializer`,addOptions(){return{blockSeparator:void 0}},addProseMirrorPlugins(){return[new B({key:new V(`clipboardTextSerializer`),props:{clipboardTextSerializer:()=>{let{editor:e}=this,{state:t,schema:n}=e,{doc:r,selection:i}=t,{ranges:a}=i,o=Math.min(...a.map(e=>e.$from.pos)),s=Math.max(...a.map(e=>e.$to.pos)),c=iS(n);return nS(r,{from:o,to:s},{...this.options.blockSeparator===void 0?{}:{blockSeparator:this.options.blockSeparator},textSerializers:c})}}})]}}),_C=K.create({name:`commands`,addCommands(){return{...Sb}}}),vC=K.create({name:`delete`,onUpdate({transaction:e,appendedTransactions:t}){let n=()=>{var n;if(((n=this.editor.options.coreExtensionOptions?.delete)?.filterTransaction)?.call(n,e)??e.getMeta(`y-sync$`))return;let r=Px(e.before,[e,...t]);lS(r).forEach(t=>{r.mapping.mapResult(t.oldRange.from).deletedAfter&&r.mapping.mapResult(t.oldRange.to).deletedBefore&&r.before.nodesBetween(t.oldRange.from,t.oldRange.to,(n,i)=>{let a=i+n.nodeSize-2,o=t.oldRange.from<=i&&a<=t.oldRange.to;this.editor.emit(`delete`,{type:`node`,node:n,from:i,to:a,newFrom:r.mapping.map(i),newTo:r.mapping.map(a),deletedRange:t.oldRange,newRange:t.newRange,partial:!o,editor:this.editor,transaction:e,combinedTransform:r})})});let i=r.mapping;r.steps.forEach((t,n)=>{if(t instanceof wp){let a=i.slice(n).map(t.from,-1),o=i.slice(n).map(t.to),s=i.invert().map(a,-1),c=i.invert().map(o),l=a>0&&r.doc.nodeAt(a-1)?.marks.some(e=>e.eq(t.mark)),u=r.doc.nodeAt(o)?.marks.some(e=>e.eq(t.mark));this.editor.emit(`delete`,{type:`mark`,mark:t.mark,from:t.from,to:t.to,deletedRange:{from:s,to:c},newRange:{from:a,to:o},partial:!!(u||l),editor:this.editor,transaction:e,combinedTransform:r})}})};this.editor.options.coreExtensionOptions?.delete?.async??!0?setTimeout(n,0):n()}}),yC=K.create({name:`drop`,addProseMirrorPlugins(){return[new B({key:new V(`tiptapDrop`),props:{handleDrop:(e,t,n,r)=>{this.editor.emit(`drop`,{editor:this.editor,event:t,slice:n,moved:r})}}})]}}),bC=K.create({name:`editable`,addProseMirrorPlugins(){return[new B({key:new V(`editable`),props:{editable:()=>this.editor.options.editable}})]}}),xC=new V(`focusEvents`),SC=K.create({name:`focusEvents`,addProseMirrorPlugins(){let{editor:e}=this;return[new B({key:xC,props:{handleDOMEvents:{focus:(t,n)=>{e.isFocused=!0;let r=e.state.tr.setMeta(`focus`,{event:n}).setMeta(`addToHistory`,!1);return t.dispatch(r),!1},blur:(t,n)=>{e.isFocused=!1;let r=e.state.tr.setMeta(`blur`,{event:n}).setMeta(`addToHistory`,!1);return t.dispatch(r),!1}}}})]}}),CC=K.create({name:`keymap`,addKeyboardShortcuts(){let e=()=>this.editor.commands.first(({commands:e})=>[()=>e.undoInputRule(),()=>e.command(({tr:t})=>{let{selection:n,doc:r}=t,{empty:i,$anchor:a}=n,{pos:o,parent:s}=a,c=a.parent.isTextblock&&o>0?t.doc.resolve(o-1):a,l=c.parent.type.spec.isolating,u=a.pos-a.parentOffset,d=l&&c.parent.childCount===1?u===a.pos:L.atStart(r).from===o;return!i||!s.type.isTextblock||s.textContent.length||!d||d&&a.parent.type.name===`paragraph`?!1:e.clearNodes()}),()=>e.deleteSelection(),()=>e.joinBackward(),()=>e.selectNodeBackward()]),t=()=>this.editor.commands.first(({commands:e})=>[()=>e.deleteSelection(),()=>e.deleteCurrentNode(),()=>e.joinForward(),()=>e.selectNodeForward()]),n={Enter:()=>this.editor.commands.first(({commands:e})=>[()=>e.newlineInCode(),()=>e.createParagraphNear(),()=>e.liftEmptyBlock(),()=>e.splitBlock()]),"Mod-Enter":()=>this.editor.commands.exitCode(),Backspace:e,"Mod-Backspace":e,"Shift-Backspace":e,Delete:t,"Mod-Delete":t,"Mod-a":()=>this.editor.commands.selectAll()},r={...n},i={...n,"Ctrl-h":e,"Alt-Backspace":e,"Ctrl-d":t,"Ctrl-Alt-Backspace":t,"Alt-Delete":t,"Alt-d":t,"Ctrl-a":()=>this.editor.commands.selectTextblockStart(),"Ctrl-e":()=>this.editor.commands.selectTextblockEnd()};return Jb()||px()?i:r},addProseMirrorPlugins(){return[new B({key:new V(`clearDocument`),appendTransaction:(e,t,n)=>{if(e.some(e=>e.getMeta(`composition`)))return;let r=e.some(e=>e.docChanged)&&!t.doc.eq(n.doc),i=e.some(e=>e.getMeta(`preventClearDocument`));if(!r||i)return;let{empty:a,from:o,to:s}=t.selection,c=L.atStart(t.doc).from,l=L.atEnd(t.doc).to;if(a||o!==c||s!==l||!xS(n.doc))return;let u=n.tr,d=bb({state:n,transaction:u}),{commands:f}=new xb({editor:this.editor,state:d});if(f.clearNodes(),u.steps.length)return u}})]}}),wC=K.create({name:`paste`,addProseMirrorPlugins(){return[new B({key:new V(`tiptapPaste`),props:{handlePaste:(e,t,n)=>{this.editor.emit(`paste`,{editor:this.editor,event:t,slice:n})}}})]}}),TC=K.create({name:`tabindex`,addProseMirrorPlugins(){return[new B({key:new V(`tabindex`),props:{attributes:()=>this.editor.isEditable?{tabindex:`0`}:{}}})]}}),EC=K.create({name:`textDirection`,addOptions(){return{direction:void 0}},addGlobalAttributes(){if(!this.options.direction)return[];let{nodeExtensions:e}=Ux(this.extensions);return[{types:e.filter(e=>e.name!==`text`).map(e=>e.name),attributes:{dir:{default:this.options.direction,parseHTML:e=>{let t=e.getAttribute(`dir`);return t&&(t===`ltr`||t===`rtl`||t===`auto`)?t:this.options.direction},renderHTML:e=>e.dir?{dir:e.dir}:{}}}}]},addProseMirrorPlugins(){return[new B({key:new V(`textDirection`),props:{attributes:()=>{let e=this.options.direction;return e?{dir:e}:{}}}})]}}),DC=class e{constructor(e,t,n=!1,r=null){this.currentNode=null,this.actualDepth=null,this.isBlock=n,this.resolvedPos=e,this.editor=t,this.currentNode=r}get name(){return this.node.type.name}get node(){return this.currentNode||this.resolvedPos.node()}get element(){return this.editor.view.domAtPos(this.pos).node}get depth(){return this.actualDepth??this.resolvedPos.depth}get pos(){return this.resolvedPos.pos}get content(){return this.node.content}set content(e){let t=this.from,n=this.to;if(this.isBlock){if(this.content.size===0){console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);return}t=this.from+1,n=this.to-1}this.editor.commands.insertContentAt({from:t,to:n},e)}get attributes(){return this.node.attrs}get textContent(){return this.node.textContent}get size(){return this.node.nodeSize}get from(){return this.isBlock?this.pos:this.resolvedPos.start(this.resolvedPos.depth)}get range(){return{from:this.from,to:this.to}}get to(){return this.isBlock?this.pos+this.size:this.resolvedPos.end(this.resolvedPos.depth)+ +!this.node.isText}get parent(){if(this.depth===0)return null;let t=this.resolvedPos.start(this.resolvedPos.depth-1),n=this.resolvedPos.doc.resolve(t);return new e(n,this.editor)}get before(){let t=this.resolvedPos.doc.resolve(this.from-(this.isBlock?1:2));return t.depth!==this.depth&&(t=this.resolvedPos.doc.resolve(this.from-3)),new e(t,this.editor)}get after(){let t=this.resolvedPos.doc.resolve(this.to+(this.isBlock?2:1));return t.depth!==this.depth&&(t=this.resolvedPos.doc.resolve(this.to+3)),new e(t,this.editor)}get children(){let t=[];return this.node.content.forEach((n,r)=>{let i=n.isBlock&&!n.isTextblock,a=n.isAtom&&!n.isText,o=n.isInline,s=this.pos+r+ +!a;if(s<0||s>this.resolvedPos.doc.nodeSize-2)return;let c=this.resolvedPos.doc.resolve(s);if(!i&&!o&&c.depth<=this.depth)return;let l=new e(c,this.editor,i,i||o?n:null);i&&(l.actualDepth=this.depth+1),t.push(l)}),t}get firstChild(){return this.children[0]||null}get lastChild(){let e=this.children;return e[e.length-1]||null}closest(e,t={}){let n=null,r=this.parent;for(;r&&!n;){if(r.node.type.name===e){if(Object.keys(t).length>0){let e=r.node.attrs,n=Object.keys(t);for(let r=0;r<n.length;r+=1){let i=n[r];if(e[i]!==t[i])break}}else n=r}r=r.parent}return n}querySelector(e,t={}){return this.querySelectorAll(e,t,!0)[0]||null}querySelectorAll(e,t={},n=!1){let r=[];if(!this.children||this.children.length===0)return r;let i=Object.keys(t);return this.children.forEach(a=>{n&&r.length>0||(a.node.type.name===e&&i.every(e=>t[e]===a.node.attrs[e])&&r.push(a),!(n&&r.length>0)&&(r=r.concat(a.querySelectorAll(e,t,n))))}),r}setAttribute(e){let{tr:t}=this.editor.state;t.setNodeMarkup(this.from,void 0,{...this.node.attrs,...e}),this.editor.view.dispatch(t)}},OC=`.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;function kC(e,t,n){let r=document.querySelector(`style[data-tiptap-style${n?`-${n}`:``}]`);if(r!==null)return r;let i=document.createElement(`style`);return t&&i.setAttribute(`nonce`,t),i.setAttribute(`data-tiptap-style${n?`-${n}`:``}`,``),i.innerHTML=e,document.getElementsByTagName(`head`)[0].appendChild(i),i}var AC=class extends QS{constructor(e={}){super(),this.css=null,this.className=`tiptap`,this.editorView=null,this.isFocused=!1,this.isInitialized=!1,this.extensionStorage={},this.instanceId=Math.random().toString(36).slice(2,9),this.options={element:typeof document<`u`?document.createElement(`div`):null,content:``,injectCSS:!0,injectNonce:void 0,extensions:[],autofocus:!1,editable:!0,textDirection:void 0,editorProps:{},parseOptions:{},coreExtensionOptions:{},enableInputRules:!0,enablePasteRules:!0,enableCoreExtensions:!0,enableContentCheck:!1,emitContentError:!1,onBeforeCreate:()=>null,onCreate:()=>null,onMount:()=>null,onUnmount:()=>null,onUpdate:()=>null,onSelectionUpdate:()=>null,onTransaction:()=>null,onFocus:()=>null,onBlur:()=>null,onDestroy:()=>null,onContentError:({error:e})=>{throw e},onPaste:()=>null,onDrop:()=>null,onDelete:()=>null,enableExtensionDispatchTransaction:!0},this.isCapturingTransaction=!1,this.capturedTransaction=null,this.utils={getUpdatedPosition:wS,createMappablePosition:TS},this.setOptions(e),this.createExtensionManager(),this.createCommandManager(),this.createSchema(),this.on(`beforeCreate`,this.options.onBeforeCreate),this.emit(`beforeCreate`,{editor:this}),this.on(`mount`,this.options.onMount),this.on(`unmount`,this.options.onUnmount),this.on(`contentError`,this.options.onContentError),this.on(`create`,this.options.onCreate),this.on(`update`,this.options.onUpdate),this.on(`selectionUpdate`,this.options.onSelectionUpdate),this.on(`transaction`,this.options.onTransaction),this.on(`focus`,this.options.onFocus),this.on(`blur`,this.options.onBlur),this.on(`destroy`,this.options.onDestroy),this.on(`drop`,({event:e,slice:t,moved:n})=>this.options.onDrop(e,t,n)),this.on(`paste`,({event:e,slice:t})=>this.options.onPaste(e,t)),this.on(`delete`,this.options.onDelete);let t=this.createDoc(),n=Kb(t,this.options.autofocus);this.editorState=zm.create({doc:t,schema:this.schema,selection:n||void 0}),this.options.element&&this.mount(this.options.element)}mount(e){if(typeof document>`u`)throw Error(`[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.`);this.createView(e),this.emit(`mount`,{editor:this}),this.css&&!document.head.contains(this.css)&&document.head.appendChild(this.css),window.setTimeout(()=>{this.isDestroyed||(this.options.autofocus!==!1&&this.options.autofocus!==null&&this.commands.focus(this.options.autofocus),this.emit(`create`,{editor:this}),this.isInitialized=!0)},0)}unmount(){if(this.editorView){let e=this.editorView.dom;e?.editor&&delete e.editor,this.editorView.destroy()}if(this.editorView=null,this.isInitialized=!1,this.css&&!document.querySelectorAll(`.${this.className}`).length)try{typeof this.css.remove==`function`?this.css.remove():this.css.parentNode&&this.css.parentNode.removeChild(this.css)}catch(e){console.warn(`Failed to remove CSS element:`,e)}this.css=null,this.emit(`unmount`,{editor:this})}get storage(){return this.extensionStorage}get commands(){return this.commandManager.commands}chain(){return this.commandManager.chain()}can(){return this.commandManager.can()}injectCSS(){this.options.injectCSS&&typeof document<`u`&&(this.css=kC(OC,this.options.injectNonce))}setOptions(e={}){this.options={...this.options,...e},this.editorView&&this.state&&!this.isDestroyed&&(this.options.editorProps&&this.view.setProps(this.options.editorProps),this.view.updateState(this.state))}setEditable(e,t=!0){this.setOptions({editable:e}),t&&this.emit(`update`,{editor:this,transaction:this.state.tr,appendedTransactions:[]})}get isEditable(){return this.options.editable&&this.view&&this.view.editable}get view(){return this.editorView?this.editorView:new Proxy({state:this.editorState,updateState:e=>{this.editorState=e},dispatch:e=>{this.dispatchTransaction(e)},composing:!1,dragging:null,editable:!0,isDestroyed:!1},{get:(e,t)=>{if(this.editorView)return this.editorView[t];if(t===`state`)return this.editorState;if(t in e)return Reflect.get(e,t);throw Error(`[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`)}})}get state(){return this.editorView&&(this.editorState=this.view.state),this.editorState}registerPlugin(e,t){let n=Vx(t)?t(e,[...this.state.plugins]):[...this.state.plugins,e],r=this.state.reconfigure({plugins:n});return this.view.updateState(r),r}unregisterPlugin(e){if(this.isDestroyed)return;let t=this.state.plugins,n=t;if([].concat(e).forEach(e=>{let t=typeof e==`string`?`${e}$`:e.key;n=n.filter(e=>!e.key.startsWith(t))}),t.length===n.length)return;let r=this.state.reconfigure({plugins:n});return this.view.updateState(r),r}createExtensionManager(){let e=[...this.options.enableCoreExtensions?[bC,gC.configure({blockSeparator:this.options.coreExtensionOptions?.clipboardTextSerializer?.blockSeparator}),_C,SC,CC,TC,yC,wC,vC,EC.configure({direction:this.options.textDirection})].filter(e=>typeof this.options.enableCoreExtensions!=`object`||this.options.enableCoreExtensions[e.name]!==!1):[],...this.options.extensions].filter(e=>[`extension`,`node`,`mark`].includes(e?.type));this.extensionManager=new hC(e,this)}createCommandManager(){this.commandManager=new xb({editor:this})}createSchema(){this.schema=this.extensionManager.schema}createDoc(){let e;try{e=jx(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:this.options.enableContentCheck})}catch(t){if(!(t instanceof Error)||![`[tiptap error]: Invalid JSON content`,`[tiptap error]: Invalid HTML content`].includes(t.message))throw t;this.emit(`contentError`,{editor:this,error:t,disableCollaboration:()=>{`collaboration`in this.storage&&typeof this.storage.collaboration==`object`&&this.storage.collaboration&&(this.storage.collaboration.isDisabled=!0),this.options.extensions=this.options.extensions.filter(e=>e.name!==`collaboration`),this.createExtensionManager()}}),e=jx(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:!1})}return e}createView(e){let{editorProps:t,enableExtensionDispatchTransaction:n}=this.options,r=t.dispatchTransaction||this.dispatchTransaction.bind(this),i=n?this.extensionManager.dispatchTransaction(r):r,a=t.transformPastedHTML,o=this.extensionManager.transformPastedHTML(a);this.editorView=new Xy(e,{...t,attributes:{role:`textbox`,...t?.attributes},dispatchTransaction:i,transformPastedHTML:o,state:this.editorState,markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews});let s=this.state.reconfigure({plugins:this.extensionManager.plugins});this.view.updateState(s),this.prependClass(),this.injectCSS();let c=this.view.dom;c.editor=this}createNodeViews(){this.view.isDestroyed||this.view.setProps({markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews})}prependClass(){this.view.dom.className=`${this.className} ${this.view.dom.className}`}captureTransaction(e){this.isCapturingTransaction=!0,e(),this.isCapturingTransaction=!1;let t=this.capturedTransaction;return this.capturedTransaction=null,t}dispatchTransaction(e){if(this.view.isDestroyed)return;if(this.isCapturingTransaction){if(!this.capturedTransaction){this.capturedTransaction=e;return}e.steps.forEach(e=>this.capturedTransaction?.step(e));return}let{state:t,transactions:n}=this.state.applyTransaction(e),r=!this.state.selection.eq(t.selection),i=n.includes(e),a=this.state;if(this.emit(`beforeTransaction`,{editor:this,transaction:e,nextState:t}),!i)return;this.view.updateState(t),this.emit(`transaction`,{editor:this,transaction:e,appendedTransactions:n.slice(1)}),r&&this.emit(`selectionUpdate`,{editor:this,transaction:e});let o=n.findLast(e=>e.getMeta(`focus`)||e.getMeta(`blur`)),s=o?.getMeta(`focus`),c=o?.getMeta(`blur`);s&&this.emit(`focus`,{editor:this,event:s.event,transaction:o}),c&&this.emit(`blur`,{editor:this,event:c.event,transaction:o}),!(e.getMeta(`preventUpdate`)||!n.some(e=>e.docChanged)||a.doc.eq(t.doc))&&this.emit(`update`,{editor:this,transaction:e,appendedTransactions:n.slice(1)})}getAttributes(e){return oS(this.state,e)}isActive(e,t){let n=typeof e==`string`?e:null,r=typeof e==`string`?t:e;return gS(this.state,n,r)}getJSON(){return this.state.doc.toJSON()}getHTML(){return Bx(this.state.doc.content,this.schema)}getText(e){let{blockSeparator:t=`

`,textSerializers:n={}}=e||{};return rS(this.state.doc,{blockSeparator:t,textSerializers:{...iS(this.schema),...n}})}get isEmpty(){return xS(this.state.doc)}destroy(){this.emit(`destroy`),this.unmount(),this.removeAllListeners()}get isDestroyed(){return this.editorView?.isDestroyed??!0}$node(e,t){return this.$doc?.querySelector(e,t)||null}$nodes(e,t){return this.$doc?.querySelectorAll(e,t)||null}$pos(e){return new DC(this.state.doc.resolve(e),this)}get $doc(){return this.$pos(0)}};function jC(e){return new $S({find:e.find,handler:({state:t,range:n,match:r})=>{let i=W(e.getAttributes,void 0,r);if(i===!1||i===null)return null;let{tr:a}=t,o=r[r.length-1],s=r[0];if(o){let r=s.search(/\S/),c=n.from+s.indexOf(o),l=c+o.length;if(uS(n.from,n.to,t.doc).filter(t=>t.mark.type.excluded.find(n=>n===e.type&&n!==t.mark.type)).filter(e=>e.to>c).length)return null;l<n.to&&a.delete(l,n.to),c>n.from&&a.delete(n.from+r,c);let u=n.from+r+o.length;a.addMark(n.from+r,u,e.type.create(i||{})),a.removeStoredMark(e.type)}},undoable:e.undoable})}function MC(e){return new $S({find:e.find,handler:({state:t,range:n,match:r})=>{let i=W(e.getAttributes,void 0,r)||{},{tr:a}=t,o=n.from,s=n.to,c=e.type.create(i);if(r[1]){let e=o+r[0].lastIndexOf(r[1]);e>s?e=s:s=e+r[1].length;let t=r[0][r[0].length-1];a.insertText(t,o+r[0].length-1),a.replaceWith(e,s,c)}else if(r[0]){let t=e.type.isInline?o:o-1;a.insert(t,e.type.create(i)).delete(a.mapping.map(o),a.mapping.map(s))}a.scrollIntoView()},undoable:e.undoable})}function NC(e){return new $S({find:e.find,handler:({state:t,range:n,match:r})=>{let i=t.doc.resolve(n.from),a=W(e.getAttributes,void 0,r)||{};if(!i.node(-1).canReplaceWith(i.index(-1),i.indexAfter(-1),e.type))return null;t.tr.delete(n.from,n.to).setBlockType(n.from,n.from,e.type,a)},undoable:e.undoable})}function PC(e){return new $S({find:e.find,handler:({state:t,range:n,match:r,chain:i})=>{let a=W(e.getAttributes,void 0,r)||{},o=t.tr.delete(n.from,n.to),s=o.doc.resolve(n.from).blockRange(),c=s&&Ip(s,e.type,a);if(!c)return null;if(o.wrap(s,c),e.keepMarks&&e.editor){let{selection:n,storedMarks:r}=t,{splittableMarks:i}=e.editor.extensionManager,a=r||n.$to.parentOffset&&n.$from.marks();if(a){let e=a.filter(e=>i.includes(e.type.name));o.ensureMarks(e)}}if(e.keepAttributes){let t=e.type.name===`bulletList`||e.type.name===`orderedList`?`listItem`:`taskList`;i().updateAttributes(t,a).run()}let l=o.doc.resolve(n.from-1).nodeBefore;l&&l.type===e.type&&Jp(o.doc,n.from-1)&&(!e.joinPredicate||e.joinPredicate(r,l))&&o.join(n.from-1)},undoable:e.undoable})}function FC(e,t){let{selection:n}=e,{$from:r}=n;if(n instanceof z){let e=r.index();return r.parent.canReplaceWith(e,e+1,t)}let i=r.depth;for(;i>=0;){let e=r.index(i);if(r.node(i).contentMatchAt(e).matchType(t))return!0;--i}return!1}yb({},{createAtomBlockMarkdownSpec:()=>RC,createBlockMarkdownSpec:()=>zC,createInlineMarkdownSpec:()=>HC,parseAttributes:()=>IC,parseIndentedBlocks:()=>UC,renderNestedMarkdownContent:()=>WC,serializeAttributes:()=>LC});function IC(e){if(!e?.trim())return{};let t={},n=[],r=e.replace(/["']([^"']*)["']/g,e=>(n.push(e),`__QUOTED_${n.length-1}__`)),i=r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);i&&(t.class=i.map(e=>e.trim().slice(1)).join(` `));let a=r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);a&&(t.id=a[1]),Array.from(r.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g)).forEach(([,e,r])=>{let i=parseInt(r.match(/__QUOTED_(\d+)__/)?.[1]||`0`,10),a=n[i];a&&(t[e]=a.slice(1,-1))});let o=r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g,``).replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g,``).replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g,``).trim();return o&&o.split(/\s+/).filter(Boolean).forEach(e=>{e.match(/^[a-zA-Z][\w-]*$/)&&(t[e]=!0)}),t}function LC(e){if(!e||Object.keys(e).length===0)return``;let t=[];return e.class&&String(e.class).split(/\s+/).filter(Boolean).forEach(e=>t.push(`.${e}`)),e.id&&t.push(`#${e.id}`),Object.entries(e).forEach(([e,n])=>{e!==`class`&&e!==`id`&&(n===!0?t.push(e):n!==!1&&n!=null&&t.push(`${e}="${String(n)}"`))}),t.join(` `)}function RC(e){let{nodeName:t,name:n,parseAttributes:r=IC,serializeAttributes:i=LC,defaultAttributes:a={},requiredAttributes:o=[],allowedAttributes:s}=e,c=n||t,l=e=>{if(!s)return e;let t={};return s.forEach(n=>{n in e&&(t[n]=e[n])}),t};return{parseMarkdown:(e,n)=>{let r={...a,...e.attributes};return n.createNode(t,r,[])},markdownTokenizer:{name:t,level:`block`,start(e){let t=RegExp(`^:::${c}(?:\\s|$)`,`m`),n=e.match(t)?.index;return n===void 0?-1:n},tokenize(e,n,i){let a=RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`),s=e.match(a);if(!s)return;let l=s[1]||``,u=r(l);if(!o.find(e=>!(e in u)))return{type:t,raw:s[0],attributes:u}}},renderMarkdown:e=>{let t=l(e.attrs||{}),n=i(t),r=n?` {${n}}`:``;return`:::${c}${r} :::`}}}function zC(e){let{nodeName:t,name:n,getContent:r,parseAttributes:i=IC,serializeAttributes:a=LC,defaultAttributes:o={},content:s=`block`,allowedAttributes:c}=e,l=n||t,u=e=>{if(!c)return e;let t={};return c.forEach(n=>{n in e&&(t[n]=e[n])}),t};return{parseMarkdown:(e,n)=>{let i;if(r){let t=r(e);i=typeof t==`string`?[{type:`text`,text:t}]:t}else i=s===`block`?n.parseChildren(e.tokens||[]):n.parseInline(e.tokens||[]);let a={...o,...e.attributes};return n.createNode(t,a,i)},markdownTokenizer:{name:t,level:`block`,start(e){let t=RegExp(`^:::${l}`,`m`),n=e.match(t)?.index;return n===void 0?-1:n},tokenize(e,n,r){let a=RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*\\n`),o=e.match(a);if(!o)return;let[c,u=``]=o,d=i(u),f=1,p=c.length,m=``,h=/^:::([\w-]*)(\s.*)?/gm,g=e.slice(p);for(h.lastIndex=0;;){let n=h.exec(g);if(n===null)break;let i=n.index,a=n[1];if(!n[2]?.endsWith(`:::`)){if(a)f+=1;else if(--f,f===0){let a=g.slice(0,i);m=a.trim();let o=e.slice(0,p+i+n[0].length),c=[];if(m){if(s===`block`)for(c=r.blockTokens(a),c.forEach(e=>{e.text&&(!e.tokens||e.tokens.length===0)&&(e.tokens=r.inlineTokens(e.text))});c.length>0;){let e=c[c.length-1];if(e.type===`paragraph`&&(!e.text||e.text.trim()===``))c.pop();else break}else c=r.inlineTokens(m)}return{type:t,raw:o,attributes:d,content:m,tokens:c}}}}}},renderMarkdown:(e,t)=>{let n=u(e.attrs||{}),r=a(n),i=r?` {${r}}`:``,o=t.renderChildren(e.content||[],`

`);return`:::${l}${i}

${o}

:::`}}}function BC(e){if(!e.trim())return{};let t={},n=/(\w+)=(?:"([^"]*)"|'([^']*)')/g,r=n.exec(e);for(;r!==null;){let[,i,a,o]=r;t[i]=a||o,r=n.exec(e)}return t}function VC(e){return Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e}="${t}"`).join(` `)}function HC(e){let{nodeName:t,name:n,getContent:r,parseAttributes:i=BC,serializeAttributes:a=VC,defaultAttributes:o={},selfClosing:s=!1,allowedAttributes:c}=e,l=n||t,u=e=>{if(!c)return e;let t={};return c.forEach(n=>{let r=typeof n==`string`?n:n.name,i=typeof n==`string`?void 0:n.skipIfDefault;if(r in e){let n=e[r];if(i!==void 0&&n===i)return;t[r]=n}}),t},d=l.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return{parseMarkdown:(e,n)=>{let i={...o,...e.attributes};if(s)return n.createNode(t,i);let a=r?r(e):e.content||``;return a?n.createNode(t,i,[n.createTextNode(a)]):n.createNode(t,i,[])},markdownTokenizer:{name:t,level:`inline`,start(e){let t=RegExp(s?`\\[${d}\\s*[^\\]]*\\]`:`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`),n=e.match(t)?.index;return n===void 0?-1:n},tokenize(e,n,r){let a=RegExp(s?`^\\[${d}\\s*([^\\]]*)\\]`:`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`),o=e.match(a);if(!o)return;let c=``,l=``;if(s){let[,e]=o;l=e}else{let[,e,t]=o;l=e,c=t||``}let u=i(l.trim());return{type:t,raw:o[0],content:c.trim(),attributes:u}}},renderMarkdown:e=>{let t=``;r?t=r(e):e.content&&e.content.length>0&&(t=e.content.filter(e=>e.type===`text`).map(e=>e.text).join(``));let n=u(e.attrs||{}),i=a(n),o=i?` ${i}`:``;return s?`[${l}${o}]`:`[${l}${o}]${t}[/${l}]`}}}function UC(e,t,n){let r=e.split(`
`),i=[],a=``,o=0,s=t.baseIndentSize||2;for(;o<r.length;){let e=r[o],c=e.match(t.itemPattern);if(!c){if(i.length>0)break;if(e.trim()===``){o+=1,a=`${a}${e}
`;continue}return}let l=t.extractItemData(c),{indentLevel:u,mainContent:d}=l;a=`${a}${e}
`;let f=[d];for(o+=1;o<r.length;){let e=r[o];if(e.trim()===``){let t=r.slice(o+1).findIndex(e=>e.trim()!==``);if(t===-1)break;if((r[o+1+t].match(/^(\s*)/)?.[1]?.length||0)>u){f.push(e),a=`${a}${e}
`,o+=1;continue}break}if((e.match(/^(\s*)/)?.[1]?.length||0)>u)f.push(e),a=`${a}${e}
`,o+=1;else break}let p,m=f.slice(1);if(m.length>0){let e=m.map(e=>e.slice(u+s)).join(`
`);e.trim()&&(p=t.customNestedParser?t.customNestedParser(e):n.blockTokens(e))}let h=t.createToken(l,p);i.push(h)}if(i.length!==0)return{items:i,raw:a}}function WC(e,t,n,r){if(!e||!Array.isArray(e.content))return``;let i=typeof n==`function`?n(r):n,[a,...o]=e.content,s=`${i}${t.renderChildren([a])}`;return o&&o.length>0&&o.forEach((e,n)=>{let r=t.renderChild?.call(t,e,n+1)??t.renderChildren([e]);if(r!=null){let n=r.split(`
`).map(e=>e?t.indent(e):t.indent(``)).join(`
`);s+=e.type===`paragraph`?`

${n}`:`
${n}`}}),s}function GC(e,t,n={}){let{state:r}=t,{doc:i,tr:a}=r,o=e;i.descendants((t,r)=>{let i=a.mapping.map(r),s=a.mapping.map(r)+t.nodeSize,c=null;if(t.marks.forEach(e=>{if(e!==o)return!1;c=e}),!c)return;let l=!1;if(Object.keys(n).forEach(e=>{n[e]!==c.attrs[e]&&(l=!0)}),l){let t=e.type.create({...e.attrs,...n});a.removeMark(i,s,e.type),a.addMark(i,s,t)}}),a.docChanged&&t.view.dispatch(a)}var KC=class e extends oC{constructor(){super(...arguments),this.type=`node`}static create(t={}){let n=typeof t==`function`?t():t;return new e(n)}configure(e){return super.configure(e)}extend(e){let t=typeof e==`function`?e():e;return super.extend(t)}};function qC(e){return new lC({find:e.find,handler:({state:t,range:n,match:r,pasteEvent:i})=>{let a=W(e.getAttributes,void 0,r,i);if(a===!1||a===null)return null;let{tr:o}=t,s=r[r.length-1],c=r[0],l=n.to;if(s){let i=c.search(/\S/),u=n.from+c.indexOf(s),d=u+s.length;if(uS(n.from,n.to,t.doc).filter(t=>t.mark.type.excluded.find(n=>n===e.type&&n!==t.mark.type)).filter(e=>e.to>u).length)return null;d<n.to&&o.delete(d,n.to),u>n.from&&o.delete(n.from+i,u),l=n.from+i+s.length,o.addMark(n.from+i,l,e.type.create(a||{})),r.index!==void 0&&r.input!==void 0&&r.index+r[0].length>=r.input.length||o.removeStoredMark(e.type)}}})}var JC=`aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2`,YC=`ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2`,XC=`numeric`,ZC=`ascii`,QC=`alpha`,$C=`asciinumeric`,ew=`alphanumeric`,tw=`domain`,nw=`emoji`,rw=`scheme`,iw=`slashscheme`,aw=`whitespace`;function ow(e,t){return e in t||(t[e]=[]),t[e]}function sw(e,t,n){t[XC]&&(t[$C]=!0,t[ew]=!0),t[ZC]&&(t[$C]=!0,t[QC]=!0),t[$C]&&(t[ew]=!0),t[QC]&&(t[ew]=!0),t[ew]&&(t[tw]=!0),t[nw]&&(t[tw]=!0);for(let r in t){let t=ow(r,n);t.indexOf(e)<0&&t.push(e)}}function cw(e,t){let n={};for(let r in t)t[r].indexOf(e)>=0&&(n[r]=!0);return n}function lw(e=null){this.j={},this.jr=[],this.jd=null,this.t=e}lw.groups={},lw.prototype={accepts(){return!!this.t},go(e){let t=this,n=t.j[e];if(n)return n;for(let n=0;n<t.jr.length;n++){let r=t.jr[n][0],i=t.jr[n][1];if(i&&r.test(e))return i}return t.jd},has(e,t=!1){return t?e in this.j:!!this.go(e)},ta(e,t,n,r){for(let i=0;i<e.length;i++)this.tt(e[i],t,n,r)},tr(e,t,n,r){r||=lw.groups;let i;return t&&t.j?i=t:(i=new lw(t),n&&r&&sw(t,n,r)),this.jr.push([e,i]),i},ts(e,t,n,r){let i=this,a=e.length;if(!a)return i;for(let t=0;t<a-1;t++)i=i.tt(e[t]);return i.tt(e[a-1],t,n,r)},tt(e,t,n,r){r||=lw.groups;let i=this;if(t&&t.j)return i.j[e]=t,t;let a=t,o,s=i.go(e);return s?(o=new lw,Object.assign(o.j,s.j),o.jr.push.apply(o.jr,s.jr),o.jd=s.jd,o.t=s.t):o=new lw,a&&(r&&(o.t&&typeof o.t==`string`?sw(a,Object.assign(cw(o.t,r),n),r):n&&sw(a,n,r)),o.t=a),i.j[e]=o,o}};var q=(e,t,n,r,i)=>e.ta(t,n,r,i),J=(e,t,n,r,i)=>e.tr(t,n,r,i),uw=(e,t,n,r,i)=>e.ts(t,n,r,i),Y=(e,t,n,r,i)=>e.tt(t,n,r,i),dw=`WORD`,fw=`UWORD`,pw=`ASCIINUMERICAL`,mw=`ALPHANUMERICAL`,hw=`LOCALHOST`,gw=`TLD`,_w=`UTLD`,vw=`SCHEME`,yw=`SLASH_SCHEME`,bw=`NUM`,xw=`WS`,Sw=`NL`,Cw=`OPENBRACE`,ww=`CLOSEBRACE`,Tw=`OPENBRACKET`,Ew=`CLOSEBRACKET`,Dw=`OPENPAREN`,Ow=`CLOSEPAREN`,kw=`OPENANGLEBRACKET`,Aw=`CLOSEANGLEBRACKET`,jw=`FULLWIDTHLEFTPAREN`,Mw=`FULLWIDTHRIGHTPAREN`,Nw=`LEFTCORNERBRACKET`,Pw=`RIGHTCORNERBRACKET`,Fw=`LEFTWHITECORNERBRACKET`,Iw=`RIGHTWHITECORNERBRACKET`,Lw=`FULLWIDTHLESSTHAN`,Rw=`FULLWIDTHGREATERTHAN`,zw=`AMPERSAND`,Bw=`APOSTROPHE`,Vw=`ASTERISK`,Hw=`AT`,Uw=`BACKSLASH`,Ww=`BACKTICK`,Gw=`CARET`,Kw=`COLON`,qw=`COMMA`,Jw=`DOLLAR`,Yw=`DOT`,Xw=`EQUALS`,Zw=`EXCLAMATION`,Qw=`HYPHEN`,$w=`PERCENT`,eT=`PIPE`,tT=`PLUS`,nT=`POUND`,rT=`QUERY`,iT=`QUOTE`,aT=`FULLWIDTHMIDDLEDOT`,oT=`SEMI`,sT=`SLASH`,cT=`TILDE`,lT=`UNDERSCORE`,uT=`EMOJI`,dT=`SYM`,fT=Object.freeze({__proto__:null,ALPHANUMERICAL:mw,AMPERSAND:zw,APOSTROPHE:Bw,ASCIINUMERICAL:pw,ASTERISK:Vw,AT:Hw,BACKSLASH:Uw,BACKTICK:Ww,CARET:Gw,CLOSEANGLEBRACKET:Aw,CLOSEBRACE:ww,CLOSEBRACKET:Ew,CLOSEPAREN:Ow,COLON:Kw,COMMA:qw,DOLLAR:Jw,DOT:Yw,EMOJI:uT,EQUALS:Xw,EXCLAMATION:Zw,FULLWIDTHGREATERTHAN:Rw,FULLWIDTHLEFTPAREN:jw,FULLWIDTHLESSTHAN:Lw,FULLWIDTHMIDDLEDOT:aT,FULLWIDTHRIGHTPAREN:Mw,HYPHEN:Qw,LEFTCORNERBRACKET:Nw,LEFTWHITECORNERBRACKET:Fw,LOCALHOST:hw,NL:Sw,NUM:bw,OPENANGLEBRACKET:kw,OPENBRACE:Cw,OPENBRACKET:Tw,OPENPAREN:Dw,PERCENT:$w,PIPE:eT,PLUS:tT,POUND:nT,QUERY:rT,QUOTE:iT,RIGHTCORNERBRACKET:Pw,RIGHTWHITECORNERBRACKET:Iw,SCHEME:vw,SEMI:oT,SLASH:sT,SLASH_SCHEME:yw,SYM:dT,TILDE:cT,TLD:gw,UNDERSCORE:lT,UTLD:_w,UWORD:fw,WORD:dw,WS:xw}),pT=/[a-z]/,mT=/\p{L}/u,hT=/\p{Emoji}/u,gT=/\d/,_T=/\s/,vT=`\r`,yT=`
`,bT=`️`,xT=`‍`,ST=`￼`,CT=null,wT=null;function TT(e=[]){let t={};lw.groups=t;let n=new lw;CT??=kT(JC),wT??=kT(YC),Y(n,`'`,Bw),Y(n,`{`,Cw),Y(n,`}`,ww),Y(n,`[`,Tw),Y(n,`]`,Ew),Y(n,`(`,Dw),Y(n,`)`,Ow),Y(n,`<`,kw),Y(n,`>`,Aw),Y(n,`（`,jw),Y(n,`）`,Mw),Y(n,`「`,Nw),Y(n,`」`,Pw),Y(n,`『`,Fw),Y(n,`』`,Iw),Y(n,`＜`,Lw),Y(n,`＞`,Rw),Y(n,`&`,zw),Y(n,`*`,Vw),Y(n,`@`,Hw),Y(n,"`",Ww),Y(n,`^`,Gw),Y(n,`:`,Kw),Y(n,`,`,qw),Y(n,`$`,Jw),Y(n,`.`,Yw),Y(n,`=`,Xw),Y(n,`!`,Zw),Y(n,`-`,Qw),Y(n,`%`,$w),Y(n,`|`,eT),Y(n,`+`,tT),Y(n,`#`,nT),Y(n,`?`,rT),Y(n,`"`,iT),Y(n,`/`,sT),Y(n,`;`,oT),Y(n,`~`,cT),Y(n,`_`,lT),Y(n,`\\`,Uw),Y(n,`・`,aT);let r=J(n,gT,bw,{[XC]:!0});J(r,gT,r);let i=J(r,pT,pw,{[$C]:!0}),a=J(r,mT,mw,{[ew]:!0}),o=J(n,pT,dw,{[ZC]:!0});J(o,gT,i),J(o,pT,o),J(i,gT,i),J(i,pT,i);let s=J(n,mT,fw,{[QC]:!0});J(s,pT),J(s,gT,a),J(s,mT,s),J(a,gT,a),J(a,pT),J(a,mT,a);let c=Y(n,yT,Sw,{[aw]:!0}),l=Y(n,vT,xw,{[aw]:!0}),u=J(n,_T,xw,{[aw]:!0});Y(n,ST,u),Y(l,yT,c),Y(l,ST,u),J(l,_T,u),Y(u,vT),Y(u,yT),J(u,_T,u),Y(u,ST,u);let d=J(n,hT,uT,{[nw]:!0});Y(d,`#`),J(d,hT,d),Y(d,bT,d);let f=Y(d,xT);Y(f,`#`),J(f,hT,d);let p=[[pT,o],[gT,i]],m=[[pT,null],[mT,s],[gT,a]];for(let e=0;e<CT.length;e++)OT(n,CT[e],gw,dw,p);for(let e=0;e<wT.length;e++)OT(n,wT[e],_w,fw,m);sw(gw,{tld:!0,ascii:!0},t),sw(_w,{utld:!0,alpha:!0},t),OT(n,`file`,vw,dw,p),OT(n,`mailto`,vw,dw,p),OT(n,`http`,yw,dw,p),OT(n,`https`,yw,dw,p),OT(n,`ftp`,yw,dw,p),OT(n,`ftps`,yw,dw,p),sw(vw,{scheme:!0,ascii:!0},t),sw(yw,{slashscheme:!0,ascii:!0},t),e=e.sort((e,t)=>e[0]>t[0]?1:-1);for(let t=0;t<e.length;t++){let r=e[t][0],i=e[t][1]?{[rw]:!0}:{[iw]:!0};r.indexOf(`-`)>=0?i[tw]=!0:pT.test(r)?gT.test(r)?i[$C]=!0:i[ZC]=!0:i[XC]=!0,uw(n,r,r,i)}return uw(n,`localhost`,hw,{ascii:!0}),n.jd=new lw(dT),{start:n,tokens:Object.assign({groups:t},fT)}}function ET(e,t){let n=DT(t.replace(/[A-Z]/g,e=>e.toLowerCase())),r=n.length,i=[],a=0,o=0;for(;o<r;){let s=e,c=null,l=0,u=null,d=-1,f=-1;for(;o<r&&(c=s.go(n[o]));)s=c,s.accepts()?(d=0,f=0,u=s):d>=0&&(d+=n[o].length,f++),l+=n[o].length,a+=n[o].length,o++;a-=d,o-=f,l-=d,i.push({t:u.t,v:t.slice(a-l,a),s:a-l,e:a})}return i}function DT(e){let t=[],n=e.length,r=0;for(;r<n;){let i=e.charCodeAt(r),a,o=i<55296||i>56319||r+1===n||(a=e.charCodeAt(r+1))<56320||a>57343?e[r]:e.slice(r,r+2);t.push(o),r+=o.length}return t}function OT(e,t,n,r,i){let a,o=t.length;for(let n=0;n<o-1;n++){let o=t[n];e.j[o]?a=e.j[o]:(a=new lw(r),a.jr=i.slice(),e.j[o]=a),e=a}return a=new lw(n),a.jr=i.slice(),e.j[t[o-1]]=a,a}function kT(e){let t=[],n=[],r=0;for(;r<e.length;){let i=0;for(;`0123456789`.indexOf(e[r+i])>=0;)i++;if(i>0){t.push(n.join(``));for(let t=parseInt(e.substring(r,r+i),10);t>0;t--)n.pop();r+=i}else n.push(e[r]),r++}return t}var AT={defaultProtocol:`http`,events:null,format:MT,formatHref:MT,nl2br:!1,tagName:`a`,target:null,rel:null,validate:!0,truncate:1/0,className:null,attributes:null,ignoreTags:[],render:null};function jT(e,t=null){let n=Object.assign({},AT);e&&(n=Object.assign(n,e instanceof jT?e.o:e));let r=n.ignoreTags,i=[];for(let e=0;e<r.length;e++)i.push(r[e].toUpperCase());this.o=n,t&&(this.defaultRender=t),this.ignoreTags=i}jT.prototype={o:AT,ignoreTags:[],defaultRender(e){return e},check(e){return this.get(`validate`,e.toString(),e)},get(e,t,n){let r=t!=null,i=this.o[e];return i&&(typeof i==`object`?(i=n.t in i?i[n.t]:AT[e],typeof i==`function`&&r&&(i=i(t,n))):typeof i==`function`&&r&&(i=i(t,n.t,n)),i)},getObj(e,t,n){let r=this.o[e];return typeof r==`function`&&t!=null&&(r=r(t,n.t,n)),r},render(e){let t=e.render(this);return(this.get(`render`,null,e)||this.defaultRender)(t,e.t,e)}};function MT(e){return e}function NT(e,t){this.t=`token`,this.v=e,this.tk=t}NT.prototype={isLink:!1,toString(){return this.v},toHref(e){return this.toString()},toFormattedString(e){let t=this.toString(),n=e.get(`truncate`,t,this),r=e.get(`format`,t,this);return n&&r.length>n?r.substring(0,n)+`…`:r},toFormattedHref(e){return e.get(`formatHref`,this.toHref(e.get(`defaultProtocol`)),this)},startIndex(){return this.tk[0].s},endIndex(){return this.tk[this.tk.length-1].e},toObject(e=AT.defaultProtocol){return{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}},toFormattedObject(e){return{type:this.t,value:this.toFormattedString(e),isLink:this.isLink,href:this.toFormattedHref(e),start:this.startIndex(),end:this.endIndex()}},validate(e){return e.get(`validate`,this.toString(),this)},render(e){let t=this,n=this.toHref(e.get(`defaultProtocol`)),r=e.get(`formatHref`,n,this),i=e.get(`tagName`,n,t),a=this.toFormattedString(e),o={},s=e.get(`className`,n,t),c=e.get(`target`,n,t),l=e.get(`rel`,n,t),u=e.getObj(`attributes`,n,t),d=e.getObj(`events`,n,t);return o.href=r,s&&(o.class=s),c&&(o.target=c),l&&(o.rel=l),u&&Object.assign(o,u),{tagName:i,attributes:o,content:a,eventListeners:d}}};function PT(e,t){class n extends NT{constructor(t,n){super(t,n),this.t=e}}for(let e in t)n.prototype[e]=t[e];return n.t=e,n}var FT=PT(`email`,{isLink:!0,toHref(){return`mailto:`+this.toString()}}),IT=PT(`text`),LT=PT(`nl`),RT=PT(`url`,{isLink:!0,toHref(e=AT.defaultProtocol){return this.hasProtocol()?this.v:`${e}://${this.v}`},hasProtocol(){let e=this.tk;return e.length>=2&&e[0].t!==hw&&e[1].t===Kw}}),zT=e=>new lw(e);function BT({groups:e}){let t=e.domain.concat([zw,Vw,Hw,Uw,Ww,Gw,Jw,Xw,Qw,bw,$w,eT,tT,nT,sT,dT,cT,lT]),n=[Bw,Kw,qw,Yw,Zw,$w,rT,iT,oT,kw,Aw,Cw,ww,Ew,Tw,Dw,Ow,jw,Mw,Nw,Pw,Fw,Iw,Lw,Rw],r=[zw,Bw,Vw,Uw,Ww,Gw,Jw,Xw,Qw,Cw,ww,$w,eT,tT,nT,rT,sT,dT,cT,lT],i=zT(),a=Y(i,cT);q(a,r,a),q(a,e.domain,a);let o=zT(),s=zT(),c=zT();q(i,e.domain,o),q(i,e.scheme,s),q(i,e.slashscheme,c),q(o,r,a),q(o,e.domain,o);let l=Y(o,Hw);Y(a,Hw,l),Y(s,Hw,l),Y(c,Hw,l);let u=Y(a,Yw);q(u,r,a),q(u,e.domain,a);let d=zT();q(l,e.domain,d),q(d,e.domain,d);let f=Y(d,Yw);q(f,e.domain,d);let p=zT(FT);q(f,e.tld,p),q(f,e.utld,p),Y(l,hw,p);let m=Y(d,Qw);Y(m,Qw,m),q(m,e.domain,d),q(p,e.domain,d),Y(p,Yw,f),Y(p,Qw,m);let h=Y(o,Qw),g=Y(o,Yw);Y(h,Qw,h),q(h,e.domain,o),q(g,r,a),q(g,e.domain,o);let _=zT(RT);q(g,e.tld,_),q(g,e.utld,_),q(_,e.domain,o),q(_,r,a),Y(_,Yw,g),Y(_,Qw,h),Y(_,Hw,l);let v=Y(_,Kw),y=zT(RT);q(v,e.numeric,y);let b=zT(RT),x=zT();q(b,t,b),q(b,n,x),q(x,t,b),q(x,n,x),Y(_,sT,b),Y(y,sT,b);let ee=Y(s,Kw),te=Y(Y(Y(c,Kw),sT),sT);q(s,e.domain,o),Y(s,Yw,g),Y(s,Qw,h),q(c,e.domain,o),Y(c,Yw,g),Y(c,Qw,h),q(ee,e.domain,b),Y(ee,sT,b),Y(ee,rT,b),q(te,e.domain,b),q(te,t,b),Y(te,sT,b);let ne=[[Cw,ww],[Tw,Ew],[Dw,Ow],[kw,Aw],[jw,Mw],[Nw,Pw],[Fw,Iw],[Lw,Rw]];for(let e=0;e<ne.length;e++){let[r,i]=ne[e],a=Y(b,r);Y(x,r,a);let o=zT(RT);q(a,t,o);let s=zT();q(a,n,s),Y(a,i,b),q(o,t,o),q(o,n,s),q(s,t,o),q(s,n,s),Y(o,i,b),Y(s,i,b)}return Y(i,hw,_),Y(i,Sw,LT),{start:i,tokens:fT}}function VT(e,t,n){let r=n.length,i=0,a=[],o=[];for(;i<r;){let s=e,c=null,l=null,u=0,d=null,f=-1;for(;i<r&&!(c=s.go(n[i].t));)o.push(n[i++]);for(;i<r&&(l=c||s.go(n[i].t));)c=null,s=l,s.accepts()?(f=0,d=s):f>=0&&f++,i++,u++;if(f<0)i-=u,i<r&&(o.push(n[i]),i++);else{o.length>0&&(a.push(HT(IT,t,o)),o=[]),i-=f,u-=f;let e=d.t,r=n.slice(i-u,i);a.push(HT(e,t,r))}}return o.length>0&&a.push(HT(IT,t,o)),a}function HT(e,t,n){let r=n[0].s,i=n[n.length-1].e;return new e(t.slice(r,i),n)}var UT=typeof console<`u`&&console&&console.warn||(()=>{}),WT=`until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`,X={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:!1};function GT(){return lw.groups={},X.scanner=null,X.parser=null,X.tokenQueue=[],X.pluginQueue=[],X.customSchemes=[],X.initialized=!1,X}function KT(e,t=!1){if(X.initialized&&UT(`linkifyjs: already initialized - will not register custom scheme "${e}" ${WT}`),!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))throw Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);X.customSchemes.push([e,t])}function qT(){X.scanner=TT(X.customSchemes);for(let e=0;e<X.tokenQueue.length;e++)X.tokenQueue[e][1]({scanner:X.scanner});X.parser=BT(X.scanner.tokens);for(let e=0;e<X.pluginQueue.length;e++)X.pluginQueue[e][1]({scanner:X.scanner,parser:X.parser});return X.initialized=!0,X}function JT(e){return X.initialized||qT(),VT(X.parser.start,e,ET(X.scanner.start,e))}JT.scan=ET;function YT(e,t=null,n=null){if(t&&typeof t==`object`){if(n)throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);n=t,t=null}let r=new jT(n),i=JT(e),a=[];for(let e=0;e<i.length;e++){let n=i[e];n.isLink&&(!t||n.t===t)&&r.check(n)&&a.push(n.toFormattedObject(r))}return a}var XT=`[\0- \xA0 ᠎ -\u2029 　]`,ZT=new RegExp(XT),QT=RegExp(`${XT}$`),$T=new RegExp(XT,`g`);function eE(e){return e.length===1?e[0].isLink:e.length===3&&e[1].isLink?[`()`,`[]`].includes(e[0].value+e[2].value):!1}function tE(e){return new B({key:new V(`autolink`),appendTransaction:(t,n,r)=>{let i=t.some(e=>e.docChanged)&&!n.doc.eq(r.doc),a=t.some(e=>e.getMeta(`preventAutolink`));if(!i||a)return;let{tr:o}=r;if(lS(Px(n.doc,[...t])).forEach(({newRange:t})=>{let n=Ix(r.doc,t,e=>e.isTextblock),i,a;if(n.length>1)i=n[0],a=r.doc.textBetween(i.pos,i.pos+i.node.nodeSize,void 0,` `);else if(n.length){let e=r.doc.textBetween(t.from,t.to,` `,` `);if(!QT.test(e))return;i=n[0],a=r.doc.textBetween(i.pos,t.to,void 0,` `)}if(i&&a){let t=a.split(ZT).filter(Boolean);if(t.length<=0)return!1;let n=t[t.length-1],s=i.pos+a.lastIndexOf(n);if(!n)return!1;let c=JT(n).map(t=>t.toObject(e.defaultProtocol));if(!eE(c))return!1;c.filter(e=>e.isLink).map(e=>({...e,from:s+e.start+1,to:s+e.end+1})).filter(e=>!r.schema.marks.code||!r.doc.rangeHasMark(e.from,e.to,r.schema.marks.code)).filter(t=>e.validate(t.value)).filter(t=>e.shouldAutoLink(t.value)).forEach(t=>{uS(t.from,t.to,r.doc).some(t=>t.mark.type===e.type)||o.addMark(t.from,t.to,e.type.create({href:t.href}))})}}),o.steps.length)return o}})}function nE(e){return new B({key:new V(`handleClickLink`),props:{handleClick:(t,n,r)=>{if(r.button!==0||!t.editable)return!1;let i=null;if(r.target instanceof HTMLAnchorElement)i=r.target;else{let t=r.target;if(!t)return!1;let n=e.editor.view.dom;i=t.closest(`a`),i&&!n.contains(i)&&(i=null)}if(!i)return!1;let a=!1;if(e.enableClickSelection&&(a=e.editor.commands.extendMarkRange(e.type.name)),e.openOnClick){let n=oS(t.state,e.type.name),r=i.href??n.href,o=i.target??n.target;r&&(window.open(r,o),a=!0)}return a}}})}function rE(e){return new B({key:new V(`handlePasteLink`),props:{handlePaste:(t,n,r)=>{let{shouldAutoLink:i}=e,{state:a}=t,{selection:o}=a,{empty:s}=o;if(s)return!1;let c=``;r.content.forEach(e=>{c+=e.textContent});let l=YT(c,{defaultProtocol:e.defaultProtocol}).find(e=>e.isLink&&e.value===c);return!c||!l||i!==void 0&&!i(l.value)?!1:e.editor.commands.setMark(e.type,{href:l.href})}}})}function iE(e,t){let n=[`http`,`https`,`ftp`,`ftps`,`mailto`,`tel`,`callto`,`sms`,`cid`,`xmpp`];return t&&t.forEach(e=>{let t=typeof e==`string`?e:e.scheme;t&&n.push(t)}),!e||e.replace($T,``).match(RegExp(`^(?:(?:${n.join(`|`)}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,`i`))}var aE=sC.create({name:`link`,priority:1e3,keepOnSplit:!1,exitable:!0,onCreate(){this.options.validate&&!this.options.shouldAutoLink&&(this.options.shouldAutoLink=this.options.validate,console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")),this.options.protocols.forEach(e=>{if(typeof e==`string`){KT(e);return}KT(e.scheme,e.optionalSlashes)})},onDestroy(){GT()},inclusive(){return this.options.autolink},addOptions(){return{openOnClick:!0,enableClickSelection:!1,linkOnPaste:!0,autolink:!0,protocols:[],defaultProtocol:`http`,HTMLAttributes:{target:`_blank`,rel:`noopener noreferrer nofollow`,class:null},isAllowedUri:(e,t)=>!!iE(e,t.protocols),validate:e=>!!e,shouldAutoLink:e=>{let t=/^[a-z][a-z0-9+.-]*:\/\//i.test(e),n=/^[a-z][a-z0-9+.-]*:/i.test(e);if(t||n&&!e.includes(`@`))return!0;let r=(e.includes(`@`)?e.split(`@`).pop():e).split(/[/?#:]/)[0];return!(/^\d{1,3}(\.\d{1,3}){3}$/.test(r)||!/\./.test(r))}}},addAttributes(){return{href:{default:null,parseHTML(e){return e.getAttribute(`href`)}},target:{default:this.options.HTMLAttributes.target},rel:{default:this.options.HTMLAttributes.rel},class:{default:this.options.HTMLAttributes.class},title:{default:null}}},parseHTML(){return[{tag:`a[href]`,getAttrs:e=>{let t=e.getAttribute(`href`);return!t||!this.options.isAllowedUri(t,{defaultValidate:e=>!!iE(e,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?!1:null}}]},renderHTML({HTMLAttributes:e}){return this.options.isAllowedUri(e.href,{defaultValidate:e=>!!iE(e,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?[`a`,G(this.options.HTMLAttributes,e),0]:[`a`,G(this.options.HTMLAttributes,{...e,href:``}),0]},markdownTokenName:`link`,parseMarkdown:(e,t)=>t.applyMark(`link`,t.parseInline(e.tokens||[]),{href:e.href,title:e.title||null}),renderMarkdown:(e,t)=>{let n=e.attrs?.href??``,r=e.attrs?.title??``,i=t.renderChildren(e);return r?`[${i}](${n} "${r}")`:`[${i}](${n})`},addCommands(){return{setLink:e=>({chain:t})=>{let{href:n}=e;return this.options.isAllowedUri(n,{defaultValidate:e=>!!iE(e,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?t().setMark(this.name,e).setMeta(`preventAutolink`,!0).run():!1},toggleLink:e=>({chain:t})=>{let{href:n}=e||{};return n&&!this.options.isAllowedUri(n,{defaultValidate:e=>!!iE(e,this.options.protocols),protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol})?!1:t().toggleMark(this.name,e,{extendEmptyMarkRange:!0}).setMeta(`preventAutolink`,!0).run()},unsetLink:()=>({chain:e})=>e().unsetMark(this.name,{extendEmptyMarkRange:!0}).setMeta(`preventAutolink`,!0).run()}},addPasteRules(){return[qC({find:e=>{let t=[];if(e){let{protocols:n,defaultProtocol:r}=this.options,i=YT(e).filter(e=>e.isLink&&this.options.isAllowedUri(e.value,{defaultValidate:e=>!!iE(e,n),protocols:n,defaultProtocol:r}));i.length&&i.forEach(e=>{this.options.shouldAutoLink(e.value)&&t.push({text:e.value,data:{href:e.href},index:e.start})})}return t},type:this.type,getAttributes:e=>({href:e.data?.href})})]},addProseMirrorPlugins(){let e=[],{protocols:t,defaultProtocol:n}=this.options;return this.options.autolink&&e.push(tE({type:this.type,defaultProtocol:this.options.defaultProtocol,validate:e=>this.options.isAllowedUri(e,{defaultValidate:e=>!!iE(e,t),protocols:t,defaultProtocol:n}),shouldAutoLink:this.options.shouldAutoLink})),e.push(nE({type:this.type,editor:this.editor,openOnClick:this.options.openOnClick===`whenNotEditable`||this.options.openOnClick,enableClickSelection:this.options.enableClickSelection})),this.options.linkOnPaste&&e.push(rE({editor:this.editor,defaultProtocol:this.options.defaultProtocol,type:this.type,shouldAutoLink:this.options.shouldAutoLink})),e}});function oE(){return aE.configure({openOnClick:!1,enableClickSelection:!1,HTMLAttributes:{target:null,rel:null}})}var sE=e=>e&&e.isText&&(e.text===`​`||e.text===`⁠`);function cE({trailingCursorText:e=`​`,addNodeView:t}={}){return KC.create({name:`variableTag`,group:`inline`,inline:!0,selectable:!0,draggable:!0,atom:!0,addOptions(){return{trailingCursorText:e}},addAttributes(){return{label:{default:null},value:{default:null},openOnInsert:{default:!1},default:{default:null},transformerId:{default:null},transformerParams:{default:null},unresolved:{default:!1}}},parseHTML(){return[{tag:`variable-tag`,getAttrs:e=>{try{return JSON.parse(e.innerHTML)}catch{return{}}}}]},renderHTML({HTMLAttributes:e}){return[`variable-tag`,JSON.stringify(e)]},addCommands(){return{setVariableTag:e=>({dispatch:t,state:n})=>{if(!t)return!1;let{selection:r}=n,i=r,a=i.$cursor?i.$cursor.pos:i.$to.pos,o=this.type.create(e),s=n.tr.insert(a,o),c=a+o.nodeSize,l=this.options.trailingCursorText;return l?(s.insert(c,n.schema.text(l)),s.setSelection(R.create(s.doc,c+l.length))):s.setSelection(R.create(s.doc,c)),t(s),!0}}},addNodeView(){return t??null},addProseMirrorPlugins(){return[new B({key:new V(`variableTagProtection`),props:{handleKeyDown:(e,t)=>{let{state:n}=e,{selection:r,doc:i}=n;if(t.key===`ArrowLeft`&&r.empty){let{$from:a}=r,{pos:o}=a;if(o>0){let r=a.nodeBefore;if(sE(r)){let a=o-r.nodeSize,s=i.resolve(a).nodeBefore;if(s&&s.type.name===`variableTag`){let r=a-s.nodeSize;return t.preventDefault(),e.dispatch(n.tr.setSelection(z.create(i,r))),!0}}}}if(t.key===`ArrowRight`&&r.empty){let{$from:a}=r,{pos:o}=a,s=a.nodeAfter;if(sE(s)){let r=a.nodeBefore;if(r&&r.type.name===`variableTag`)return t.preventDefault(),e.dispatch(n.tr.setSelection(R.create(i,o+s.nodeSize))),!0}}if(t.key===`Backspace`&&r.empty){let{$from:a}=r,{pos:o}=a;if(o>0){let r=a.nodeBefore;if(sE(r)){let a=o-r.nodeSize,s=i.resolve(a).nodeBefore;if(s&&s.type.name===`variableTag`){let r=a-s.nodeSize;t.preventDefault();let i=n.tr.delete(r,o);return i.setSelection(R.create(i.doc,Math.max(0,r))),e.dispatch(i),!0}}}}if(r instanceof z&&r.node.type.name===`variableTag`){if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(t.key)||[`Delete`,`Backspace`].includes(t.key)||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)return!1;if(t.key.length===1||t.key===`Enter`)return!0}return!1},handlePaste:e=>{let{selection:t}=e.state;return t instanceof z&&t.node.type.name===`variableTag`},handleDrop:e=>{let{selection:t}=e.state;return t instanceof z&&t.node.type.name===`variableTag`&&!e.dragging}}})]}})}var lE=KC.create({name:`doc`,topNode:!0,content:`block+`,renderMarkdown:(e,t)=>e.content?t.renderChildren(e.content,`

`):``});lE.extend({content:`inline*`});var uE=K.create({name:`fontVariantCaps`,addGlobalAttributes(){return[{types:[`textStyle`],attributes:{fontVariantCaps:{default:null,parseHTML:e=>e.style.fontVariantCaps===`small-caps`?`small-caps`:null,renderHTML:e=>e.fontVariantCaps===`small-caps`?{style:`font-variant-caps: small-caps`}:{}}}}]},addCommands(){return{setSmallCaps:()=>({chain:e})=>e().setMark(`textStyle`,{fontVariantCaps:`small-caps`}).run(),unsetSmallCaps:()=>({chain:e})=>e().setMark(`textStyle`,{fontVariantCaps:null}).removeEmptyTextStyle().run(),toggleSmallCaps:()=>({editor:e,commands:t})=>e.isActive(`textStyle`,{fontVariantCaps:`small-caps`})?t.unsetSmallCaps():t.setSmallCaps()}}}),dE=new Map,fE=new Map;function pE(e,t){if(!e||typeof e!=`object`||!(`name`in e))throw Error(`Tiptap extension "${t}" factory must return an extension with a schema name.`);let{name:n}=e;if(typeof n!=`string`||!n)throw Error(`Tiptap extension "${t}" factory must return an extension with a schema name.`);return n}function mE(e){return[...dE.values()].filter(t=>t.surfaces.has(e)).map(e=>{let t=e.factory(),n=pE(t,e.id);if(n!==e.extensionName)throw Error(`Tiptap extension factory "${e.id}" changed its schema name from "${e.extensionName}" to "${n}".`);return t})}function hE(e){return fE.get(e)}function gE(e){return fE.has(e)}var _E=(e,t)=>{if(e===`slot`)return 0;if(e instanceof Function)return e(t);let{children:n,...r}=t??{};if(e===`svg`)throw Error(`SVG elements are not supported in the JSX syntax, use the array syntax instead`);return[e,r,n]},vE=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,yE=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,bE=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,xE=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,SE=sC.create({name:`bold`,addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:`strong`},{tag:`b`,getAttrs:e=>e.style.fontWeight!==`normal`&&null},{style:`font-weight=400`,clearMark:e=>e.type.name===this.name},{style:`font-weight`,getAttrs:e=>/^(bold(er)?|[5-9]\d{2,})$/.test(e)&&null}]},renderHTML({HTMLAttributes:e}){return _E(`strong`,{...G(this.options.HTMLAttributes,e),children:_E(`slot`,{})})},markdownTokenName:`strong`,parseMarkdown:(e,t)=>t.applyMark(`bold`,t.parseInline(e.tokens||[])),markdownOptions:{htmlReopen:{open:`<strong>`,close:`</strong>`}},renderMarkdown:(e,t)=>`**${t.renderChildren(e)}**`,addCommands(){return{setBold:()=>({commands:e})=>e.setMark(this.name),toggleBold:()=>({commands:e})=>e.toggleMark(this.name),unsetBold:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-b":()=>this.editor.commands.toggleBold(),"Mod-B":()=>this.editor.commands.toggleBold()}},addInputRules(){return[jC({find:vE,type:this.type}),jC({find:bE,type:this.type})]},addPasteRules(){return[qC({find:yE,type:this.type}),qC({find:xE,type:this.type})]}}),CE=/(^|[^`])`([^`]+)`(?!`)$/,wE=/(^|[^`])`([^`]+)`(?!`)/g,TE=sC.create({name:`code`,addOptions(){return{HTMLAttributes:{}}},excludes:`_`,code:!0,exitable:!0,parseHTML(){return[{tag:`code`}]},renderHTML({HTMLAttributes:e}){return[`code`,G(this.options.HTMLAttributes,e),0]},markdownTokenName:`codespan`,parseMarkdown:(e,t)=>t.applyMark(`code`,[{type:`text`,text:e.text||``}]),renderMarkdown:(e,t)=>e.content?`\`${t.renderChildren(e.content)}\``:``,addCommands(){return{setCode:()=>({commands:e})=>e.setMark(this.name),toggleCode:()=>({commands:e})=>e.toggleMark(this.name),unsetCode:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-e":()=>this.editor.commands.toggleCode()}},addInputRules(){return[jC({find:CE,type:this.type})]},addPasteRules(){return[qC({find:wE,type:this.type})]}}),EE=/(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/,DE=/(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g,OE=sC.create({name:`highlight`,addOptions(){return{multicolor:!1,HTMLAttributes:{}}},addAttributes(){return this.options.multicolor?{color:{default:null,parseHTML:e=>e.getAttribute(`data-color`)||e.style.backgroundColor,renderHTML:e=>e.color?{"data-color":e.color,style:`background-color: ${e.color}; color: inherit`}:{}}}:{}},parseHTML(){return[{tag:`mark`}]},renderHTML({HTMLAttributes:e}){return[`mark`,G(this.options.HTMLAttributes,e),0]},renderMarkdown:(e,t)=>`==${t.renderChildren(e)}==`,parseMarkdown:(e,t)=>t.applyMark(`highlight`,t.parseInline(e.tokens||[])),markdownTokenizer:{name:`highlight`,level:`inline`,start:e=>e.indexOf(`==`),tokenize(e,t,n){let r=/^(==)([^=]+)(==)/.exec(e);if(r){let e=r[2].trim(),t=n.inlineTokens(e);return{type:`highlight`,raw:r[0],text:e,tokens:t}}}},addCommands(){return{setHighlight:e=>({commands:t})=>t.setMark(this.name,e),toggleHighlight:e=>({commands:t})=>t.toggleMark(this.name,e),unsetHighlight:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-h":()=>this.editor.commands.toggleHighlight()}},addInputRules(){return[jC({find:EE,type:this.type})]},addPasteRules(){return[qC({find:DE,type:this.type})]}}),kE=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,AE=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,jE=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,ME=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,NE=sC.create({name:`italic`,addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:`em`},{tag:`i`,getAttrs:e=>e.style.fontStyle!==`normal`&&null},{style:`font-style=normal`,clearMark:e=>e.type.name===this.name},{style:`font-style=italic`}]},renderHTML({HTMLAttributes:e}){return[`em`,G(this.options.HTMLAttributes,e),0]},addCommands(){return{setItalic:()=>({commands:e})=>e.setMark(this.name),toggleItalic:()=>({commands:e})=>e.toggleMark(this.name),unsetItalic:()=>({commands:e})=>e.unsetMark(this.name)}},markdownTokenName:`em`,parseMarkdown:(e,t)=>t.applyMark(`italic`,t.parseInline(e.tokens||[])),markdownOptions:{htmlReopen:{open:`<em>`,close:`</em>`}},renderMarkdown:(e,t)=>`*${t.renderChildren(e)}*`,addKeyboardShortcuts(){return{"Mod-i":()=>this.editor.commands.toggleItalic(),"Mod-I":()=>this.editor.commands.toggleItalic()}},addInputRules(){return[jC({find:kE,type:this.type}),jC({find:jE,type:this.type})]},addPasteRules(){return[qC({find:AE,type:this.type}),qC({find:ME,type:this.type})]}}),PE=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,FE=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,IE=sC.create({name:`strike`,addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:`s`},{tag:`del`},{tag:`strike`},{style:`text-decoration`,consuming:!1,getAttrs:e=>e.includes(`line-through`)?{}:!1}]},renderHTML({HTMLAttributes:e}){return[`s`,G(this.options.HTMLAttributes,e),0]},markdownTokenName:`del`,parseMarkdown:(e,t)=>t.applyMark(`strike`,t.parseInline(e.tokens||[])),renderMarkdown:(e,t)=>`~~${t.renderChildren(e)}~~`,addCommands(){return{setStrike:()=>({commands:e})=>e.setMark(this.name),toggleStrike:()=>({commands:e})=>e.toggleMark(this.name),unsetStrike:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-s":()=>this.editor.commands.toggleStrike()}},addInputRules(){return[jC({find:PE,type:this.type})]},addPasteRules(){return[qC({find:FE,type:this.type})]}}),LE=sC.create({name:`subscript`,addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:`sub`},{style:`vertical-align`,getAttrs(e){return e===`sub`&&null}}]},renderHTML({HTMLAttributes:e}){return[`sub`,G(this.options.HTMLAttributes,e),0]},addCommands(){return{setSubscript:()=>({commands:e})=>e.setMark(this.name),toggleSubscript:()=>({commands:e})=>e.toggleMark(this.name),unsetSubscript:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-,":()=>this.editor.commands.toggleSubscript()}}}),RE=sC.create({name:`superscript`,addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:`sup`},{style:`vertical-align`,getAttrs(e){return e===`super`&&null}}]},renderHTML({HTMLAttributes:e}){return[`sup`,G(this.options.HTMLAttributes,e),0]},addCommands(){return{setSuperscript:()=>({commands:e})=>e.setMark(this.name),toggleSuperscript:()=>({commands:e})=>e.toggleMark(this.name),unsetSuperscript:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-.":()=>this.editor.commands.toggleSuperscript()}}}),zE=sC.create({name:`underline`,addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:`u`},{style:`text-decoration`,consuming:!1,getAttrs:e=>e.includes(`underline`)?{}:!1}]},renderHTML({HTMLAttributes:e}){return[`u`,G(this.options.HTMLAttributes,e),0]},parseMarkdown(e,t){return t.applyMark(this.name||`underline`,t.parseInline(e.tokens||[]))},renderMarkdown(e,t){return`++${t.renderChildren(e)}++`},markdownTokenizer:{name:`underline`,level:`inline`,start(e){return e.indexOf(`++`)},tokenize(e,t,n){let r=/^(\+\+)([\s\S]+?)(\+\+)/.exec(e);if(!r)return;let i=r[2].trim();return{type:`underline`,raw:r[0],text:i,tokens:n.inlineTokens(i)}}},addCommands(){return{setUnderline:()=>({commands:e})=>e.setMark(this.name),toggleUnderline:()=>({commands:e})=>e.toggleMark(this.name),unsetUnderline:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline(),"Mod-U":()=>this.editor.commands.toggleUnderline()}}}),BE=20,VE=(e,t=0)=>{let n=[];return!e.children.length||t>BE||Array.from(e.children).forEach(e=>{e.tagName===`SPAN`?n.push(e):e.children.length&&n.push(...VE(e,t+1))}),n},HE=e=>{if(!e.children.length)return;let t=VE(e);t&&t.forEach(e=>{let t=e.getAttribute(`style`),n=(e.parentElement?.closest(`span`))?.getAttribute(`style`);e.setAttribute(`style`,`${n};${t}`)})},UE=sC.create({name:`textStyle`,priority:101,addOptions(){return{HTMLAttributes:{},mergeNestedSpanStyles:!0}},parseHTML(){return[{tag:`span`,consuming:!1,getAttrs:e=>e.hasAttribute(`style`)?(this.options.mergeNestedSpanStyles&&HE(e),{}):!1}]},renderHTML({HTMLAttributes:e}){return[`span`,G(this.options.HTMLAttributes,e),0]},addCommands(){return{toggleTextStyle:e=>({commands:t})=>t.toggleMark(this.name,e),removeEmptyTextStyle:()=>({tr:e})=>{let{selection:t}=e;return e.doc.nodesBetween(t.from,t.to,(t,n)=>{if(t.isTextblock)return!0;t.marks.filter(e=>e.type===this.type).some(e=>Object.values(e.attrs).some(e=>!!e))||e.removeMark(n,n+t.nodeSize,this.type)}),!0}}}}),WE=K.create({name:`backgroundColor`,addOptions(){return{types:[`textStyle`]}},addGlobalAttributes(){return[{types:this.options.types,attributes:{backgroundColor:{default:null,parseHTML:e=>{let t=e.getAttribute(`style`);if(t){let e=t.split(`;`).map(e=>e.trim()).filter(Boolean);for(let t=e.length-1;t>=0;--t){let n=e[t].split(`:`);if(n.length>=2){let e=n[0].trim().toLowerCase(),t=n.slice(1).join(`:`).trim();if(e===`background-color`)return t.replace(/['"]+/g,``)}}}return e.style.backgroundColor?.replace(/['"]+/g,``)},renderHTML:e=>e.backgroundColor?{style:`background-color: ${e.backgroundColor}`}:{}}}}]},addCommands(){return{setBackgroundColor:e=>({chain:t})=>t().setMark(`textStyle`,{backgroundColor:e}).run(),unsetBackgroundColor:()=>({chain:e})=>e().setMark(`textStyle`,{backgroundColor:null}).removeEmptyTextStyle().run()}}}),GE=K.create({name:`color`,addOptions(){return{types:[`textStyle`]}},addGlobalAttributes(){return[{types:this.options.types,attributes:{color:{default:null,parseHTML:e=>{let t=e.getAttribute(`style`);if(t){let e=t.split(`;`).map(e=>e.trim()).filter(Boolean);for(let t=e.length-1;t>=0;--t){let n=e[t].split(`:`);if(n.length>=2){let e=n[0].trim().toLowerCase(),t=n.slice(1).join(`:`).trim();if(e===`color`)return t.replace(/['"]+/g,``)}}}return e.style.color?.replace(/['"]+/g,``)},renderHTML:e=>e.color?{style:`color: ${e.color}`}:{}}}}]},addCommands(){return{setColor:e=>({chain:t})=>t().setMark(`textStyle`,{color:e}).run(),unsetColor:()=>({chain:e})=>e().setMark(`textStyle`,{color:null}).removeEmptyTextStyle().run()}}}),KE=K.create({name:`fontFamily`,addOptions(){return{types:[`textStyle`]}},addGlobalAttributes(){return[{types:this.options.types,attributes:{fontFamily:{default:null,parseHTML:e=>e.style.fontFamily,renderHTML:e=>e.fontFamily?{style:`font-family: ${e.fontFamily}`}:{}}}}]},addCommands(){return{setFontFamily:e=>({chain:t})=>t().setMark(`textStyle`,{fontFamily:e}).run(),unsetFontFamily:()=>({chain:e})=>e().setMark(`textStyle`,{fontFamily:null}).removeEmptyTextStyle().run()}}}),qE=K.create({name:`fontSize`,addOptions(){return{types:[`textStyle`]}},addGlobalAttributes(){return[{types:this.options.types,attributes:{fontSize:{default:null,parseHTML:e=>e.style.fontSize,renderHTML:e=>e.fontSize?{style:`font-size: ${e.fontSize}`}:{}}}}]},addCommands(){return{setFontSize:e=>({chain:t})=>t().setMark(`textStyle`,{fontSize:e}).run(),unsetFontSize:()=>({chain:e})=>e().setMark(`textStyle`,{fontSize:null}).removeEmptyTextStyle().run()}}}),JE=K.create({name:`lineHeight`,addOptions(){return{types:[`textStyle`]}},addGlobalAttributes(){return[{types:this.options.types,attributes:{lineHeight:{default:null,parseHTML:e=>e.style.lineHeight,renderHTML:e=>e.lineHeight?{style:`line-height: ${e.lineHeight}`}:{}}}}]},addCommands(){return{setLineHeight:e=>({chain:t})=>t().setMark(`textStyle`,{lineHeight:e}).run(),unsetLineHeight:()=>({chain:e})=>e().setMark(`textStyle`,{lineHeight:null}).removeEmptyTextStyle().run()}}}),YE=K.create({name:`textStyleKit`,addExtensions(){let e=[];return this.options.backgroundColor!==!1&&e.push(WE.configure(this.options.backgroundColor)),this.options.color!==!1&&e.push(GE.configure(this.options.color)),this.options.fontFamily!==!1&&e.push(KE.configure(this.options.fontFamily)),this.options.fontSize!==!1&&e.push(qE.configure(this.options.fontSize)),this.options.lineHeight!==!1&&e.push(JE.configure(this.options.lineHeight)),this.options.textStyle!==!1&&e.push(UE.configure(this.options.textStyle)),e}}),XE=/^\s*>\s$/,ZE=KC.create({name:`blockquote`,addOptions(){return{HTMLAttributes:{}}},content:`block+`,group:`block`,defining:!0,parseHTML(){return[{tag:`blockquote`}]},renderHTML({HTMLAttributes:e}){return _E(`blockquote`,{...G(this.options.HTMLAttributes,e),children:_E(`slot`,{})})},parseMarkdown:(e,t)=>{let n=t.parseBlockChildren??t.parseChildren;return t.createNode(`blockquote`,void 0,n(e.tokens||[]))},renderMarkdown:(e,t)=>{if(!e.content)return``;let n=[];return e.content.forEach((e,r)=>{let i=(t.renderChild?.call(t,e,r)??t.renderChildren([e])).split(`
`).map(e=>e.trim()===``?`>`:`> ${e}`);n.push(i.join(`
`))}),n.join(`
>
`)},addCommands(){return{setBlockquote:()=>({commands:e})=>e.wrapIn(this.name),toggleBlockquote:()=>({commands:e})=>e.toggleWrap(this.name),unsetBlockquote:()=>({commands:e})=>e.lift(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-b":()=>this.editor.commands.toggleBlockquote()}},addInputRules(){return[PC({find:XE,type:this.type})]}}),QE=Object.defineProperty,$E=(e,t)=>{for(var n in t)QE(e,n,{get:t[n],enumerable:!0})},eD=`listItem`,tD=`textStyle`,nD=/^\s*([-+*])\s$/,rD=KC.create({name:`bulletList`,addOptions(){return{itemTypeName:`listItem`,HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:`block list`,content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:`ul`}]},renderHTML({HTMLAttributes:e}){return[`ul`,G(this.options.HTMLAttributes,e),0]},markdownTokenName:`list`,parseMarkdown:(e,t)=>e.type!==`list`||e.ordered?[]:{type:`bulletList`,content:e.items?t.parseChildren(e.items):[]},renderMarkdown:(e,t)=>e.content?t.renderChildren(e.content,`
`):``,markdownOptions:{indentsContent:!0},addCommands(){return{toggleBulletList:()=>({commands:e,chain:t})=>this.options.keepAttributes?t().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(eD,this.editor.getAttributes(tD)).run():e.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-8":()=>this.editor.commands.toggleBulletList()}},addInputRules(){let e=PC({find:nD,type:this.type});return(this.options.keepMarks||this.options.keepAttributes)&&(e=PC({find:nD,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:()=>this.editor.getAttributes(tD),editor:this.editor})),[e]}}),iD=KC.create({name:`listItem`,addOptions(){return{HTMLAttributes:{},bulletListTypeName:`bulletList`,orderedListTypeName:`orderedList`}},content:`paragraph block*`,defining:!0,parseHTML(){return[{tag:`li`}]},renderHTML({HTMLAttributes:e}){return[`li`,G(this.options.HTMLAttributes,e),0]},markdownTokenName:`list_item`,parseMarkdown:(e,t)=>{if(e.type!==`list_item`)return[];let n=t.parseBlockChildren??t.parseChildren,r=[];if(e.tokens&&e.tokens.length>0){if(e.tokens.some(e=>e.type===`paragraph`))r=n(e.tokens);else{let i=e.tokens[0];if(i&&i.type===`text`&&i.tokens&&i.tokens.length>0){if(r=[{type:`paragraph`,content:t.parseInline(i.tokens)}],e.tokens.length>1){let t=n(e.tokens.slice(1));r.push(...t)}}else r=n(e.tokens)}}return r.length===0&&(r=[{type:`paragraph`,content:[]}]),{type:`listItem`,content:r}},renderMarkdown:(e,t,n)=>WC(e,t,e=>e.parentType===`bulletList`?`- `:e.parentType===`orderedList`?`${(e.meta?.parentAttrs?.start||1)+e.index}. `:`- `,n),addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}});$E({},{findListItemPos:()=>aD,getNextListDepth:()=>oD,handleBackspace:()=>uD,handleDelete:()=>pD,hasListBefore:()=>sD,hasListItemAfter:()=>mD,hasListItemBefore:()=>cD,listItemHasSubList:()=>lD,nextListIsDeeper:()=>dD,nextListIsHigher:()=>fD});var aD=(e,t)=>{let{$from:n}=t.selection,r=Ab(e,t.schema),i=null,a=n.depth,o=n.pos,s=null;for(;a>0&&s===null;)i=n.node(a),i.type===r?s=a:(--a,--o);return s===null?null:{$pos:t.doc.resolve(o),depth:s}},oD=(e,t)=>{let n=aD(e,t);if(!n)return!1;let[,r]=dS(t,e,n.$pos.pos+4);return r},sD=(e,t,n)=>{let{$anchor:r}=e.selection,i=Math.max(0,r.pos-2),a=e.doc.resolve(i).node();return!(!a||!n.includes(a.type.name))},cD=(e,t)=>{let{$anchor:n}=t.selection,r=t.doc.resolve(n.pos-2);return r.index()!==0&&r.nodeBefore?.type.name===e},lD=(e,t,n)=>{if(!n)return!1;let r=Ab(e,t.schema),i=!1;return n.descendants(e=>{e.type===r&&(i=!0)}),i},uD=(e,t,n)=>{if(e.commands.undoInputRule())return!0;if(e.state.selection.from!==e.state.selection.to)return!1;if(!gx(e.state,t)&&sD(e.state,t,n)){let{$anchor:n}=e.state.selection,r=e.state.doc.resolve(n.before()-1),i=[];r.node().descendants((e,n)=>{e.type.name===t&&i.push({node:e,pos:n})});let a=i.at(-1);if(!a)return!1;let o=e.state.doc.resolve(r.start()+a.pos+1);return e.chain().cut({from:n.start()-1,to:n.end()+1},o.end()).joinForward().run()}if(!gx(e.state,t)||!vS(e.state))return!1;let r=aD(t,e.state);if(!r)return!1;let i=e.state.doc.resolve(r.$pos.pos-2).node(r.depth),a=lD(t,e.state,i);return cD(t,e.state)&&!a?e.commands.joinItemBackward():e.chain().liftListItem(t).run()},dD=(e,t)=>{let n=oD(e,t),r=aD(e,t);return!r||!n?!1:n>r.depth},fD=(e,t)=>{let n=oD(e,t),r=aD(e,t);return!r||!n?!1:n<r.depth},pD=(e,t)=>{if(!gx(e.state,t)||!_S(e.state,t))return!1;let{selection:n}=e.state,{$from:r,$to:i}=n;return!n.empty&&r.sameParent(i)?!1:dD(t,e.state)?e.chain().focus(e.state.selection.from+4).lift(t).joinBackward().run():fD(t,e.state)?e.chain().joinForward().joinBackward().run():e.commands.joinItemForward()},mD=(e,t)=>{let{$anchor:n}=t.selection,r=t.doc.resolve(n.pos-n.parentOffset-2);return r.index()!==r.parent.childCount-1&&r.nodeAfter?.type.name===e},hD=K.create({name:`listKeymap`,addOptions(){return{listTypes:[{itemName:`listItem`,wrapperNames:[`bulletList`,`orderedList`]},{itemName:`taskItem`,wrapperNames:[`taskList`]}]}},addKeyboardShortcuts(){return{Delete:({editor:e})=>{let t=!1;return this.options.listTypes.forEach(({itemName:n})=>{e.state.schema.nodes[n]!==void 0&&pD(e,n)&&(t=!0)}),t},"Mod-Delete":({editor:e})=>{let t=!1;return this.options.listTypes.forEach(({itemName:n})=>{e.state.schema.nodes[n]!==void 0&&pD(e,n)&&(t=!0)}),t},Backspace:({editor:e})=>{let t=!1;return this.options.listTypes.forEach(({itemName:n,wrapperNames:r})=>{e.state.schema.nodes[n]!==void 0&&uD(e,n,r)&&(t=!0)}),t},"Mod-Backspace":({editor:e})=>{let t=!1;return this.options.listTypes.forEach(({itemName:n,wrapperNames:r})=>{e.state.schema.nodes[n]!==void 0&&uD(e,n,r)&&(t=!0)}),t}}}}),gD=/^(\s*)(\d+)\.\s+(.*)$/,_D=/^\s/;function vD(e){let t=e.trimStart();return/^[-+*]\s+/.test(t)||/^\d+\.\s+/.test(t)||/^>\s?/.test(t)||/^```/.test(t)||/^~~~/.test(t)}function yD(e){let t=[],n=[],r=!1;return e.forEach(e=>{if(r){n.push(e);return}if(e.trim()===``){r=!0,n.push(e);return}if(t.length>0&&vD(e)){r=!0,n.push(e);return}t.push(e)}),{paragraphLines:t,blockLines:n}}function bD(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n],a=i.match(gD);if(!a)break;let[,o,s,c]=a,l=o.length,u=[c],d=n+1,f=[i],p=!1;for(;d<e.length;){let t=e[d];if(t.match(gD))break;if(t.trim()===``)f.push(t),u.push(``),p=!0,d+=1;else if(t.match(_D))f.push(t),u.push(t.slice(l+2)),d+=1;else{if(p)break;f.push(t),u.push(t),d+=1}}t.push({indent:l,number:parseInt(s,10),content:u.join(`
`).trim(),contentLines:u,raw:f.join(`
`)}),r=d,n=d}return[t,r]}function xD(e,t,n){let r=[],i=0;for(;i<e.length;){let a=e[i];if(a.indent===t){let{paragraphLines:o,blockLines:s}=yD(a.contentLines),c=o.join(`
`).trim(),l=[];c&&l.push({type:`paragraph`,raw:c,tokens:n.inlineTokens(c)});let u=s.join(`
`).trim();if(u){let e=n.blockTokens(u);l.push(...e)}let d=i+1,f=[];for(;d<e.length&&e[d].indent>t;)f.push(e[d]),d+=1;if(f.length>0){let e=xD(f,Math.min(...f.map(e=>e.indent)),n);l.push({type:`list`,ordered:!0,start:f[0].number,items:e,raw:f.map(e=>e.raw).join(`
`)})}r.push({type:`list_item`,raw:a.raw,tokens:l}),i=d}else i+=1}return r}function SD(e,t){return e.map(e=>{if(e.type!==`list_item`)return t.parseChildren([e])[0];let n=[];return e.tokens&&e.tokens.length>0&&e.tokens.forEach(e=>{if(e.type===`paragraph`||e.type===`list`||e.type===`blockquote`||e.type===`code`)n.push(...t.parseChildren([e]));else if(e.type===`text`&&e.tokens){let r=t.parseChildren([e]);n.push({type:`paragraph`,content:r})}else{let r=t.parseChildren([e]);r.length>0&&n.push(...r)}}),{type:`listItem`,content:n}})}var CD=`listItem`,wD=`textStyle`,TD=/^(\d+)\.\s$/,ED=KC.create({name:`orderedList`,addOptions(){return{itemTypeName:`listItem`,HTMLAttributes:{},keepMarks:!1,keepAttributes:!1}},group:`block list`,content(){return`${this.options.itemTypeName}+`},addAttributes(){return{start:{default:1,parseHTML:e=>e.hasAttribute(`start`)?parseInt(e.getAttribute(`start`)||``,10):1},type:{default:null,parseHTML:e=>e.getAttribute(`type`)}}},parseHTML(){return[{tag:`ol`}]},renderHTML({HTMLAttributes:e}){let{start:t,...n}=e;return t===1?[`ol`,G(this.options.HTMLAttributes,n),0]:[`ol`,G(this.options.HTMLAttributes,e),0]},markdownTokenName:`list`,parseMarkdown:(e,t)=>{if(e.type!==`list`||!e.ordered)return[];let n=e.start||1,r=e.items?SD(e.items,t):[];return n===1?{type:`orderedList`,content:r}:{type:`orderedList`,attrs:{start:n},content:r}},renderMarkdown:(e,t)=>e.content?t.renderChildren(e.content,`
`):``,markdownTokenizer:{name:`orderedList`,level:`block`,start:e=>{let t=e.match(/^(\s*)(\d+)\.\s+/)?.index;return t===void 0?-1:t},tokenize:(e,t,n)=>{let r=e.split(`
`),[i,a]=bD(r);if(i.length===0)return;let o=xD(i,0,n);if(o.length!==0)return{type:`list`,ordered:!0,start:i[0]?.number||1,items:o,raw:r.slice(0,a).join(`
`)}}},markdownOptions:{indentsContent:!0},addCommands(){return{toggleOrderedList:()=>({commands:e,chain:t})=>this.options.keepAttributes?t().toggleList(this.name,this.options.itemTypeName,this.options.keepMarks).updateAttributes(CD,this.editor.getAttributes(wD)).run():e.toggleList(this.name,this.options.itemTypeName,this.options.keepMarks)}},addKeyboardShortcuts(){return{"Mod-Shift-7":()=>this.editor.commands.toggleOrderedList()}},addInputRules(){let e=PC({find:TD,type:this.type,getAttributes:e=>({start:+e[1]}),joinPredicate:(e,t)=>t.childCount+t.attrs.start===+e[1]});return(this.options.keepMarks||this.options.keepAttributes)&&(e=PC({find:TD,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:e=>({start:+e[1],...this.editor.getAttributes(wD)}),joinPredicate:(e,t)=>t.childCount+t.attrs.start===+e[1],editor:this.editor})),[e]}}),DD=/^\s*(\[([( |x])?\])\s$/,OD=KC.create({name:`taskItem`,addOptions(){return{nested:!1,HTMLAttributes:{},taskListTypeName:`taskList`,a11y:void 0}},content(){return this.options.nested?`paragraph block*`:`paragraph+`},defining:!0,addAttributes(){return{checked:{default:!1,keepOnSplit:!1,parseHTML:e=>{let t=e.getAttribute(`data-checked`);return t===``||t===`true`},renderHTML:e=>({"data-checked":e.checked})}}},parseHTML(){return[{tag:`li[data-type="${this.name}"]`,priority:51}]},renderHTML({node:e,HTMLAttributes:t}){return[`li`,G(this.options.HTMLAttributes,t,{"data-type":this.name}),[`label`,[`input`,{type:`checkbox`,checked:e.attrs.checked?`checked`:null}],[`span`]],[`div`,0]]},parseMarkdown:(e,t)=>{let n=[];if(e.tokens&&e.tokens.length>0?n.push(t.createNode(`paragraph`,{},t.parseInline(e.tokens))):e.text?n.push(t.createNode(`paragraph`,{},[t.createNode(`text`,{text:e.text})])):n.push(t.createNode(`paragraph`,{},[])),e.nestedTokens&&e.nestedTokens.length>0){let r=t.parseChildren(e.nestedTokens);n.push(...r)}return t.createNode(`taskItem`,{checked:e.checked||!1},n)},renderMarkdown:(e,t)=>WC(e,t,`- [${e.attrs?.checked?`x`:` `}] `),addKeyboardShortcuts(){let e={Enter:()=>this.editor.commands.splitListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)};return this.options.nested?{...e,Tab:()=>this.editor.commands.sinkListItem(this.name)}:e},addNodeView(){return({node:e,HTMLAttributes:t,getPos:n,editor:r})=>{let i=document.createElement(`li`),a=document.createElement(`label`),o=document.createElement(`span`),s=document.createElement(`input`),c=document.createElement(`div`),l=e=>{var t;s.ariaLabel=((t=this.options.a11y)?.checkboxLabel)?.call(t,e,s.checked)||`Task item checkbox for ${e.textContent||`empty task item`}`};l(e),a.contentEditable=`false`,s.type=`checkbox`,s.addEventListener(`mousedown`,e=>e.preventDefault()),s.addEventListener(`change`,t=>{if(!r.isEditable&&!this.options.onReadOnlyChecked){s.checked=!s.checked;return}let{checked:i}=t.target;r.isEditable&&typeof n==`function`&&r.chain().focus(void 0,{scrollIntoView:!1}).command(({tr:e})=>{let t=n();if(typeof t!=`number`)return!1;let r=e.doc.nodeAt(t);return e.setNodeMarkup(t,void 0,{...r?.attrs,checked:i}),!0}).run(),!r.isEditable&&this.options.onReadOnlyChecked&&(this.options.onReadOnlyChecked(e,i)||(s.checked=!s.checked))}),Object.entries(this.options.HTMLAttributes).forEach(([e,t])=>{i.setAttribute(e,t)}),i.dataset.checked=e.attrs.checked,s.checked=e.attrs.checked,a.append(s,o),i.append(a,c),Object.entries(t).forEach(([e,t])=>{i.setAttribute(e,t)});let u=new Set(Object.keys(t));return{dom:i,contentDOM:c,update:e=>{if(e.type!==this.type)return!1;i.dataset.checked=e.attrs.checked,s.checked=e.attrs.checked,l(e);let t=r.extensionManager.attributes,n=qx(e,t),a=new Set(Object.keys(n)),o=this.options.HTMLAttributes;return u.forEach(e=>{a.has(e)||(e in o?i.setAttribute(e,o[e]):i.removeAttribute(e))}),Object.entries(n).forEach(([e,t])=>{t==null?e in o?i.setAttribute(e,o[e]):i.removeAttribute(e):i.setAttribute(e,t)}),u=a,!0}}}},addInputRules(){return[PC({find:DD,type:this.type,getAttributes:e=>({checked:e[e.length-1]===`x`})})]}}),kD=KC.create({name:`taskList`,addOptions(){return{itemTypeName:`taskItem`,HTMLAttributes:{}}},group:`block list`,content(){return`${this.options.itemTypeName}+`},parseHTML(){return[{tag:`ul[data-type="${this.name}"]`,priority:51}]},renderHTML({HTMLAttributes:e}){return[`ul`,G(this.options.HTMLAttributes,e,{"data-type":this.name}),0]},parseMarkdown:(e,t)=>t.createNode(`taskList`,{},t.parseChildren(e.items||[])),renderMarkdown:(e,t)=>e.content?t.renderChildren(e.content,`
`):``,markdownTokenizer:{name:`taskList`,level:`block`,start(e){let t=e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;return t===void 0?-1:t},tokenize(e,t,n){let r=e=>{let t=UC(e,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:e=>({indentLevel:e[1].length,mainContent:e[4],checked:e[3].toLowerCase()===`x`}),createToken:(e,t)=>({type:`taskItem`,raw:``,mainContent:e.mainContent,indentLevel:e.indentLevel,checked:e.checked,text:e.mainContent,tokens:n.inlineTokens(e.mainContent),nestedTokens:t}),customNestedParser:r},n);return t?[{type:`taskList`,raw:t.raw,items:t.items}]:n.blockTokens(e)},i=UC(e,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:e=>({indentLevel:e[1].length,mainContent:e[4],checked:e[3].toLowerCase()===`x`}),createToken:(e,t)=>({type:`taskItem`,raw:``,mainContent:e.mainContent,indentLevel:e.indentLevel,checked:e.checked,text:e.mainContent,tokens:n.inlineTokens(e.mainContent),nestedTokens:t}),customNestedParser:r},n);if(i)return{type:`taskList`,raw:i.raw,items:i.items}}},markdownOptions:{indentsContent:!0},addCommands(){return{toggleTaskList:()=>({commands:e})=>e.toggleList(this.name,this.options.itemTypeName)}},addKeyboardShortcuts(){return{"Mod-Shift-9":()=>this.editor.commands.toggleTaskList()}}});K.create({name:`listKit`,addExtensions(){let e=[];return this.options.bulletList!==!1&&e.push(rD.configure(this.options.bulletList)),this.options.listItem!==!1&&e.push(iD.configure(this.options.listItem)),this.options.listKeymap!==!1&&e.push(hD.configure(this.options.listKeymap)),this.options.orderedList!==!1&&e.push(ED.configure(this.options.orderedList)),this.options.taskItem!==!1&&e.push(OD.configure(this.options.taskItem)),this.options.taskList!==!1&&e.push(kD.configure(this.options.taskList)),e}});var AD=rD,jD=4,MD=/^```([a-z]+)?[\s\n]$/,ND=/^~~~([a-z]+)?[\s\n]$/,PD=KC.create({name:`codeBlock`,addOptions(){return{languageClassPrefix:`language-`,exitOnTripleEnter:!0,exitOnArrowDown:!0,defaultLanguage:null,enableTabIndentation:!1,tabSize:jD,HTMLAttributes:{}}},content:`text*`,marks:``,group:`block`,code:!0,defining:!0,addAttributes(){return{language:{default:this.options.defaultLanguage,parseHTML:e=>{let{languageClassPrefix:t}=this.options;return t&&[...e.firstElementChild?.classList||[]].filter(e=>e.startsWith(t)).map(e=>e.replace(t,``))[0]||null},rendered:!1}}},parseHTML(){return[{tag:`pre`,preserveWhitespace:`full`}]},renderHTML({node:e,HTMLAttributes:t}){return[`pre`,G(this.options.HTMLAttributes,t),[`code`,{class:e.attrs.language?this.options.languageClassPrefix+e.attrs.language:null},0]]},markdownTokenName:`code`,parseMarkdown:(e,t)=>e.raw?.startsWith("```")===!1&&e.raw?.startsWith(`~~~`)===!1&&e.codeBlockStyle!==`indented`?[]:t.createNode(`codeBlock`,{language:e.lang||null},e.text?[t.createTextNode(e.text)]:[]),renderMarkdown:(e,t)=>{let n=``,r=e.attrs?.language||``;return n=e.content?[`\`\`\`${r}`,t.renderChildren(e.content),"```"].join(`
`):`\`\`\`${r}

\`\`\``,n},addCommands(){return{setCodeBlock:e=>({commands:t})=>t.setNode(this.name,e),toggleCodeBlock:e=>({commands:t})=>t.toggleNode(this.name,`paragraph`,e)}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{let{empty:e,$anchor:t}=this.editor.state.selection,n=t.pos===1;return!e||t.parent.type.name!==this.name?!1:n||!t.parent.textContent.length?this.editor.commands.clearNodes():!1},Tab:({editor:e})=>{if(!this.options.enableTabIndentation)return!1;let t=this.options.tabSize??jD,{state:n}=e,{selection:r}=n,{$from:i,empty:a}=r;if(i.parent.type!==this.type)return!1;let o=` `.repeat(t);return a?e.commands.insertContent(o):e.commands.command(({tr:e})=>{let{from:t,to:i}=r,a=n.doc.textBetween(t,i,`
`,`
`).split(`
`).map(e=>o+e).join(`
`);return e.replaceWith(t,i,n.schema.text(a)),!0})},"Shift-Tab":({editor:e})=>{if(!this.options.enableTabIndentation)return!1;let t=this.options.tabSize??jD,{state:n}=e,{selection:r}=n,{$from:i,empty:a}=r;return i.parent.type===this.type?a?e.commands.command(({tr:e})=>{let{pos:r}=i,a=i.start(),o=i.end(),s=n.doc.textBetween(a,o,`
`,`
`).split(`
`),c=0,l=0,u=r-a;for(let e=0;e<s.length;e+=1){if(l+s[e].length>=u){c=e;break}l+=s[e].length+1}let d=s[c].match(/^ */)?.[0]||``,f=Math.min(d.length,t);if(f===0)return!0;let p=a;for(let e=0;e<c;e+=1)p+=s[e].length+1;return e.delete(p,p+f),r-p<=f&&e.setSelection(R.create(e.doc,p)),!0}):e.commands.command(({tr:e})=>{let{from:i,to:a}=r,o=n.doc.textBetween(i,a,`
`,`
`).split(`
`).map(e=>{let n=e.match(/^ */)?.[0]||``,r=Math.min(n.length,t);return e.slice(r)}).join(`
`);return e.replaceWith(i,a,n.schema.text(o)),!0}):!1},Enter:({editor:e})=>{if(!this.options.exitOnTripleEnter)return!1;let{state:t}=e,{selection:n}=t,{$from:r,empty:i}=n;if(!i||r.parent.type!==this.type)return!1;let a=r.parentOffset===r.parent.nodeSize-2,o=r.parent.textContent.endsWith(`

`);return!a||!o?!1:e.chain().command(({tr:e})=>(e.delete(r.pos-2,r.pos),!0)).exitCode().run()},ArrowDown:({editor:e})=>{if(!this.options.exitOnArrowDown)return!1;let{state:t}=e,{selection:n,doc:r}=t,{$from:i,empty:a}=n;if(!a||i.parent.type!==this.type||i.parentOffset!==i.parent.nodeSize-2)return!1;let o=i.after();return o===void 0?!1:r.nodeAt(o)?e.commands.command(({tr:e})=>(e.setSelection(L.near(r.resolve(o))),!0)):e.commands.exitCode()}}},addInputRules(){return[NC({find:MD,type:this.type,getAttributes:e=>({language:e[1]})}),NC({find:ND,type:this.type,getAttributes:e=>({language:e[1]})})]},addProseMirrorPlugins(){return[new B({key:new V(`codeBlockVSCodeHandler`),props:{handlePaste:(e,t)=>{if(!t.clipboardData||this.editor.isActive(this.type.name))return!1;let n=t.clipboardData.getData(`text/plain`),r=t.clipboardData.getData(`vscode-editor-data`),i=(r?JSON.parse(r):void 0)?.mode;if(!n||!i)return!1;let{tr:a,schema:o}=e.state,s=o.text(n.replace(/\r\n?/g,`
`));return a.replaceSelectionWith(this.type.create({language:i},s)),a.selection.$from.parent.type!==this.type&&a.setSelection(R.near(a.doc.resolve(Math.max(0,a.selection.from-2)))),a.setMeta(`paste`,!0),e.dispatch(a),!0}}})]}}),FD=KC.create({name:`hardBreak`,markdownTokenName:`br`,addOptions(){return{keepMarks:!0,HTMLAttributes:{}}},inline:!0,group:`inline`,selectable:!1,linebreakReplacement:!0,parseHTML(){return[{tag:`br`}]},renderHTML({HTMLAttributes:e}){return[`br`,G(this.options.HTMLAttributes,e)]},renderText(){return`
`},renderMarkdown:()=>`  
`,parseMarkdown:()=>({type:`hardBreak`}),addCommands(){return{setHardBreak:()=>({commands:e,chain:t,state:n,editor:r})=>e.first([()=>e.exitCode(),()=>e.command(()=>{let{selection:e,storedMarks:i}=n;if(e.$from.parent.type.spec.isolating)return!1;let{keepMarks:a}=this.options,{splittableMarks:o}=r.extensionManager,s=i||e.$to.parentOffset&&e.$from.marks();return t().insertContent({type:this.name}).command(({tr:e,dispatch:t})=>{if(t&&s&&a){let t=s.filter(e=>o.includes(e.type.name));e.ensureMarks(t)}return!0}).run()})])}},addKeyboardShortcuts(){return{"Mod-Enter":()=>this.editor.commands.setHardBreak(),"Shift-Enter":()=>this.editor.commands.setHardBreak()}}}),ID=KC.create({name:`heading`,addOptions(){return{levels:[1,2,3,4,5,6],HTMLAttributes:{}}},content:`inline*`,group:`block`,defining:!0,addAttributes(){return{level:{default:1,rendered:!1}}},parseHTML(){return this.options.levels.map(e=>({tag:`h${e}`,attrs:{level:e}}))},renderHTML({node:e,HTMLAttributes:t}){return[`h${this.options.levels.includes(e.attrs.level)?e.attrs.level:this.options.levels[0]}`,G(this.options.HTMLAttributes,t),0]},parseMarkdown:(e,t)=>t.createNode(`heading`,{level:e.depth||1},t.parseInline(e.tokens||[])),renderMarkdown:(e,t)=>{let n=e.attrs?.level?parseInt(e.attrs.level,10):1,r=`#`.repeat(n);return e.content?`${r} ${t.renderChildren(e.content)}`:``},addCommands(){return{setHeading:e=>({commands:t})=>this.options.levels.includes(e.level)?t.setNode(this.name,e):!1,toggleHeading:e=>({commands:t})=>this.options.levels.includes(e.level)?t.toggleNode(this.name,`paragraph`,e):!1}},addKeyboardShortcuts(){return this.options.levels.reduce((e,t)=>({...e,[`Mod-Alt-${t}`]:()=>this.editor.commands.toggleHeading({level:t})}),{})},addInputRules(){return this.options.levels.map(e=>NC({find:RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),type:this.type,getAttributes:{level:e}}))}}),LD=KC.create({name:`horizontalRule`,addOptions(){return{HTMLAttributes:{},nextNodeType:`paragraph`}},group:`block`,parseHTML(){return[{tag:`hr`}]},renderHTML({HTMLAttributes:e}){return[`hr`,G(this.options.HTMLAttributes,e)]},markdownTokenName:`hr`,parseMarkdown:(e,t)=>t.createNode(`horizontalRule`),renderMarkdown:()=>`---`,addCommands(){return{setHorizontalRule:()=>({chain:e,state:t})=>{if(!FC(t,t.schema.nodes[this.name]))return!1;let{selection:n}=t,{$to:r}=n,i=e();return SS(n)?i.insertContentAt(r.pos,{type:this.name}):i.insertContent({type:this.name}),i.command(({state:e,tr:t,dispatch:n})=>{if(n){let{$to:n}=t.selection,r=n.end();if(n.nodeAfter)n.nodeAfter.isTextblock?t.setSelection(R.create(t.doc,n.pos+1)):n.nodeAfter.isBlock?t.setSelection(z.create(t.doc,n.pos)):t.setSelection(R.create(t.doc,n.pos));else{let i=(e.schema.nodes[this.options.nextNodeType]||n.parent.type.contentMatch.defaultType)?.create();i&&(t.insert(r,i),t.setSelection(R.create(t.doc,r+1)))}t.scrollIntoView()}return!0}).run()}}},addInputRules(){return[MC({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}}),RD=iD,zD=ED,BD=`&nbsp;`,VD=`\xA0`,HD=KC.create({name:`paragraph`,priority:1e3,addOptions(){return{HTMLAttributes:{}}},group:`block`,content:`inline*`,parseHTML(){return[{tag:`p`}]},renderHTML({HTMLAttributes:e}){return[`p`,G(this.options.HTMLAttributes,e),0]},parseMarkdown:(e,t)=>{let n=e.tokens||[];if(n.length===1&&n[0].type===`image`)return t.parseChildren([n[0]]);let r=t.parseInline(n);return n.length===1&&n[0].type===`text`&&(n[0].raw===BD||n[0].text===BD||n[0].raw===VD||n[0].text===VD)&&r.length===1&&r[0].type===`text`&&(r[0].text===BD||r[0].text===VD)?t.createNode(`paragraph`,void 0,[]):t.createNode(`paragraph`,void 0,r)},renderMarkdown:(e,t,n)=>{if(!e)return``;let r=Array.isArray(e.content)?e.content:[];if(r.length===0){let e=Array.isArray(n?.previousNode?.content)?n.previousNode.content:[];return n?.previousNode?.type===`paragraph`&&e.length===0?BD:``}return t.renderChildren(r)},addCommands(){return{setParagraph:()=>({commands:e})=>e.setNode(this.name)}},addKeyboardShortcuts(){return{"Mod-Alt-0":()=>this.editor.commands.setParagraph()}}}),UD,WD;if(typeof WeakMap<`u`){let e=new WeakMap;UD=t=>e.get(t),WD=(t,n)=>(e.set(t,n),n)}else{let e=[],t=0;UD=t=>{for(let n=0;n<e.length;n+=2)if(e[n]==t)return e[n+1]},WD=(n,r)=>(t==10&&(t=0),e[t++]=n,e[t++]=r)}var Z=class{constructor(e,t,n,r){this.width=e,this.height=t,this.map=n,this.problems=r}findCell(e){for(let t=0;t<this.map.length;t++){let n=this.map[t];if(n!=e)continue;let r=t%this.width,i=t/this.width|0,a=r+1,o=i+1;for(let e=1;a<this.width&&this.map[t+e]==n;e++)a++;for(let e=1;o<this.height&&this.map[t+this.width*e]==n;e++)o++;return{left:r,top:i,right:a,bottom:o}}throw RangeError(`No cell with offset ${e} found`)}colCount(e){for(let t=0;t<this.map.length;t++)if(this.map[t]==e)return t%this.width;throw RangeError(`No cell with offset ${e} found`)}nextCell(e,t,n){let{left:r,right:i,top:a,bottom:o}=this.findCell(e);return t==`horiz`?(n<0?r==0:i==this.width)?null:this.map[a*this.width+(n<0?r-1:i)]:(n<0?a==0:o==this.height)?null:this.map[r+this.width*(n<0?a-1:o)]}rectBetween(e,t){let{left:n,right:r,top:i,bottom:a}=this.findCell(e),{left:o,right:s,top:c,bottom:l}=this.findCell(t);return{left:Math.min(n,o),top:Math.min(i,c),right:Math.max(r,s),bottom:Math.max(a,l)}}cellsInRect(e){let t=[],n={};for(let r=e.top;r<e.bottom;r++)for(let i=e.left;i<e.right;i++){let a=r*this.width+i,o=this.map[a];n[o]||(n[o]=!0,!(i==e.left&&i&&this.map[a-1]==o||r==e.top&&r&&this.map[a-this.width]==o)&&t.push(o))}return t}positionAt(e,t,n){for(let r=0,i=0;;r++){let a=i+n.child(r).nodeSize;if(r==e){let n=t+e*this.width,r=(e+1)*this.width;for(;n<r&&this.map[n]<i;)n++;return n==r?a-1:this.map[n]}i=a}}static get(e){return UD(e)||WD(e,GD(e))}};function GD(e){if(e.type.spec.tableRole!=`table`)throw RangeError(`Not a table node: `+e.type.name);let t=KD(e),n=e.childCount,r=[],i=0,a=null,o=[];for(let e=0,i=t*n;e<i;e++)r[e]=0;for(let s=0,c=0;s<n;s++){let l=e.child(s);c++;for(let e=0;;e++){for(;i<r.length&&r[i]!=0;)i++;if(e==l.childCount)break;let u=l.child(e),{colspan:d,rowspan:f,colwidth:p}=u.attrs;for(let e=0;e<f;e++){if(e+s>=n){(a||=[]).push({type:`overlong_rowspan`,pos:c,n:f-e});break}let l=i+e*t;for(let e=0;e<d;e++){r[l+e]==0?r[l+e]=c:(a||=[]).push({type:`collision`,row:s,pos:c,n:d-e});let n=p&&p[e];if(n){let r=(l+e)%t*2,i=o[r];i==null||i!=n&&o[r+1]==1?(o[r]=n,o[r+1]=1):i==n&&o[r+1]++}}}i+=d,c+=u.nodeSize}let u=(s+1)*t,d=0;for(;i<u;)r[i++]==0&&d++;d&&(a||=[]).push({type:`missing`,row:s,n:d}),c++}(t===0||n===0)&&(a||=[]).push({type:`zero_sized`});let s=new Z(t,n,r,a),c=!1;for(let e=0;!c&&e<o.length;e+=2)o[e]!=null&&o[e+1]<n&&(c=!0);return c&&qD(s,o,e),s}function KD(e){let t=-1,n=!1;for(let r=0;r<e.childCount;r++){let i=e.child(r),a=0;if(n)for(let t=0;t<r;t++){let n=e.child(t);for(let e=0;e<n.childCount;e++){let i=n.child(e);t+i.attrs.rowspan>r&&(a+=i.attrs.colspan)}}for(let e=0;e<i.childCount;e++){let t=i.child(e);a+=t.attrs.colspan,t.attrs.rowspan>1&&(n=!0)}t==-1?t=a:t!=a&&(t=Math.max(t,a))}return t}function qD(e,t,n){e.problems||=[];let r={};for(let i=0;i<e.map.length;i++){let a=e.map[i];if(r[a])continue;r[a]=!0;let o=n.nodeAt(a);if(!o)throw RangeError(`No cell with offset ${a} found`);let s=null,c=o.attrs;for(let n=0;n<c.colspan;n++){let r=t[(i+n)%e.width*2];r!=null&&(!c.colwidth||c.colwidth[n]!=r)&&((s||=JD(c))[n]=r)}s&&e.problems.unshift({type:`colwidth mismatch`,pos:a,colwidth:s})}}function JD(e){if(e.colwidth)return e.colwidth.slice();let t=[];for(let n=0;n<e.colspan;n++)t.push(0);return t}function YD(e){let t=e.cached.tableNodeTypes;if(!t){t=e.cached.tableNodeTypes={};for(let n in e.nodes){let r=e.nodes[n],i=r.spec.tableRole;i&&(t[i]=r)}}return t}var XD=new V(`selectingCells`);function ZD(e){for(let t=e.depth-1;t>0;t--)if(e.node(t).type.spec.tableRole==`row`)return e.node(0).resolve(e.before(t+1));return null}function QD(e){for(let t=e.depth;t>0;t--){let n=e.node(t).type.spec.tableRole;if(n===`cell`||n===`header_cell`)return e.node(t)}return null}function $D(e){let t=e.selection.$head;for(let e=t.depth;e>0;e--)if(t.node(e).type.spec.tableRole==`row`)return!0;return!1}function eO(e){let t=e.selection;if(`$anchorCell`in t&&t.$anchorCell)return t.$anchorCell.pos>t.$headCell.pos?t.$anchorCell:t.$headCell;if(`node`in t&&t.node&&t.node.type.spec.tableRole==`cell`)return t.$anchor;let n=ZD(t.$head)||tO(t.$head);if(n)return n;throw RangeError(`No cell found around position ${t.head}`)}function tO(e){for(let t=e.nodeAfter,n=e.pos;t;t=t.firstChild,n++){let r=t.type.spec.tableRole;if(r==`cell`||r==`header_cell`)return e.doc.resolve(n)}for(let t=e.nodeBefore,n=e.pos;t;t=t.lastChild,n--){let r=t.type.spec.tableRole;if(r==`cell`||r==`header_cell`)return e.doc.resolve(n-t.nodeSize)}}function nO(e){return e.parent.type.spec.tableRole==`row`&&!!e.nodeAfter}function rO(e){return e.node(0).resolve(e.pos+e.nodeAfter.nodeSize)}function iO(e,t){return e.depth==t.depth&&e.pos>=t.start(-1)&&e.pos<=t.end(-1)}function aO(e,t,n){let r=e.node(-1),i=Z.get(r),a=e.start(-1),o=i.nextCell(e.pos-a,t,n);return o==null?null:e.node(0).resolve(a+o)}function oO(e,t,n=1){let r={...e,colspan:e.colspan-n};return r.colwidth&&(r.colwidth=r.colwidth.slice(),r.colwidth.splice(t,n),r.colwidth.some(e=>e>0)||(r.colwidth=null)),r}function sO(e,t,n=1){let r={...e,colspan:e.colspan+n};if(r.colwidth){r.colwidth=r.colwidth.slice();for(let e=0;e<n;e++)r.colwidth.splice(t,0,0)}return r}function cO(e,t,n){let r=YD(t.type.schema).header_cell;for(let i=0;i<e.height;i++)if(t.nodeAt(e.map[n+i*e.width]).type!=r)return!1;return!0}var Q=class e extends L{constructor(e,t=e){let n=e.node(-1),r=Z.get(n),i=e.start(-1),a=r.rectBetween(e.pos-i,t.pos-i),o=e.node(0),s=r.cellsInRect(a).filter(e=>e!=t.pos-i);s.unshift(t.pos-i);let c=s.map(e=>{let t=n.nodeAt(e);if(!t)throw RangeError(`No cell with offset ${e} found`);let r=i+e+1;return new Sm(o.resolve(r),o.resolve(r+t.content.size))});super(c[0].$from,c[0].$to,c),this.$anchorCell=e,this.$headCell=t}map(t,n){let r=t.resolve(n.map(this.$anchorCell.pos)),i=t.resolve(n.map(this.$headCell.pos));if(nO(r)&&nO(i)&&iO(r,i)){let t=this.$anchorCell.node(-1)!=r.node(-1);return t&&this.isRowSelection()?e.rowSelection(r,i):t&&this.isColSelection()?e.colSelection(r,i):new e(r,i)}return R.between(r,i)}content(){let e=this.$anchorCell.node(-1),t=Z.get(e),n=this.$anchorCell.start(-1),r=t.rectBetween(this.$anchorCell.pos-n,this.$headCell.pos-n),i={},a=[];for(let n=r.top;n<r.bottom;n++){let o=[];for(let a=n*t.width+r.left,s=r.left;s<r.right;s++,a++){let n=t.map[a];if(i[n])continue;i[n]=!0;let s=t.findCell(n),c=e.nodeAt(n);if(!c)throw RangeError(`No cell with offset ${n} found`);let l=r.left-s.left,u=s.right-r.right;if(l>0||u>0){let e=c.attrs;if(l>0&&(e=oO(e,0,l)),u>0&&(e=oO(e,e.colspan-u,u)),s.left<r.left){if(c=c.type.createAndFill(e),!c)throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`)}else c=c.type.create(e,c.content)}if(s.top<r.top||s.bottom>r.bottom){let e={...c.attrs,rowspan:Math.min(s.bottom,r.bottom)-Math.max(s.top,r.top)};c=s.top<r.top?c.type.createAndFill(e):c.type.create(e,c.content)}o.push(c)}a.push(e.child(n).copy(P.from(o)))}let o=this.isColSelection()&&this.isRowSelection()?e:a;return new I(P.from(o),1,1)}replace(e,t=I.empty){let n=e.steps.length,r=this.ranges;for(let i=0;i<r.length;i++){let{$from:a,$to:o}=r[i],s=e.mapping.slice(n);e.replace(s.map(a.pos),s.map(o.pos),i?I.empty:t)}let i=L.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)),-1);i&&e.setSelection(i)}replaceWith(e,t){this.replace(e,new I(P.from(t),0,0))}forEachCell(e){let t=this.$anchorCell.node(-1),n=Z.get(t),r=this.$anchorCell.start(-1),i=n.cellsInRect(n.rectBetween(this.$anchorCell.pos-r,this.$headCell.pos-r));for(let n=0;n<i.length;n++)e(t.nodeAt(i[n]),r+i[n])}isColSelection(){let e=this.$anchorCell.index(-1),t=this.$headCell.index(-1);if(Math.min(e,t)>0)return!1;let n=e+this.$anchorCell.nodeAfter.attrs.rowspan,r=t+this.$headCell.nodeAfter.attrs.rowspan;return Math.max(n,r)==this.$headCell.node(-1).childCount}static colSelection(t,n=t){let r=t.node(-1),i=Z.get(r),a=t.start(-1),o=i.findCell(t.pos-a),s=i.findCell(n.pos-a),c=t.node(0);return o.top<=s.top?(o.top>0&&(t=c.resolve(a+i.map[o.left])),s.bottom<i.height&&(n=c.resolve(a+i.map[i.width*(i.height-1)+s.right-1]))):(s.top>0&&(n=c.resolve(a+i.map[s.left])),o.bottom<i.height&&(t=c.resolve(a+i.map[i.width*(i.height-1)+o.right-1]))),new e(t,n)}isRowSelection(){let e=this.$anchorCell.node(-1),t=Z.get(e),n=this.$anchorCell.start(-1),r=t.colCount(this.$anchorCell.pos-n),i=t.colCount(this.$headCell.pos-n);if(Math.min(r,i)>0)return!1;let a=r+this.$anchorCell.nodeAfter.attrs.colspan,o=i+this.$headCell.nodeAfter.attrs.colspan;return Math.max(a,o)==t.width}eq(t){return t instanceof e&&t.$anchorCell.pos==this.$anchorCell.pos&&t.$headCell.pos==this.$headCell.pos}static rowSelection(t,n=t){let r=t.node(-1),i=Z.get(r),a=t.start(-1),o=i.findCell(t.pos-a),s=i.findCell(n.pos-a),c=t.node(0);return o.left<=s.left?(o.left>0&&(t=c.resolve(a+i.map[o.top*i.width])),s.right<i.width&&(n=c.resolve(a+i.map[i.width*(s.top+1)-1]))):(s.left>0&&(n=c.resolve(a+i.map[s.top*i.width])),o.right<i.width&&(t=c.resolve(a+i.map[i.width*(o.top+1)-1]))),new e(t,n)}toJSON(){return{type:`cell`,anchor:this.$anchorCell.pos,head:this.$headCell.pos}}static fromJSON(t,n){return new e(t.resolve(n.anchor),t.resolve(n.head))}static create(t,n,r=n){return new e(t.resolve(n),t.resolve(r))}getBookmark(){return new lO(this.$anchorCell.pos,this.$headCell.pos)}};Q.prototype.visible=!1,L.jsonID(`cell`,Q);var lO=class e{constructor(e,t){this.anchor=e,this.head=t}map(t){return new e(t.map(this.anchor),t.map(this.head))}resolve(e){let t=e.resolve(this.anchor),n=e.resolve(this.head);return t.parent.type.spec.tableRole==`row`&&n.parent.type.spec.tableRole==`row`&&t.index()<t.parent.childCount&&n.index()<n.parent.childCount&&iO(t,n)?new Q(t,n):L.near(n,1)}};function uO(e){if(!(e.selection instanceof Q))return null;let t=[];return e.selection.forEachCell((e,n)=>{t.push(py.node(n,n+e.nodeSize,{class:`selectedCell`}))}),gy.create(e.doc,t)}function dO({$from:e,$to:t}){if(e.pos==t.pos||e.pos<t.pos-6)return!1;let n=e.pos,r=t.pos,i=e.depth;for(;i>=0&&!(e.after(i+1)<e.end(i));i--,n++);for(let e=t.depth;e>=0&&!(t.before(e+1)>t.start(e));e--,r--);return n==r&&/row|table/.test(e.node(i).type.spec.tableRole)}function fO({$from:e,$to:t}){let n,r;for(let t=e.depth;t>0;t--){let r=e.node(t);if(r.type.spec.tableRole===`cell`||r.type.spec.tableRole===`header_cell`){n=r;break}}for(let e=t.depth;e>0;e--){let n=t.node(e);if(n.type.spec.tableRole===`cell`||n.type.spec.tableRole===`header_cell`){r=n;break}}return n!==r&&t.parentOffset===0}function pO(e,t,n){let r=(t||e).selection,i=(t||e).doc,a,o;if(r instanceof z&&(o=r.node.type.spec.tableRole)){if(o==`cell`||o==`header_cell`)a=Q.create(i,r.from);else if(o==`row`){let e=i.resolve(r.from+1);a=Q.rowSelection(e,e)}else if(!n){let e=Z.get(r.node),t=r.from+1,n=t+e.map[e.width*e.height-1];a=Q.create(i,t+1,n)}}else r instanceof R&&dO(r)?a=R.create(i,r.from):r instanceof R&&fO(r)&&(a=R.create(i,r.$from.start(),r.$from.end()));return a&&(t||=e.tr).setSelection(a),t}var mO=new V(`fix-tables`);function hO(e,t,n,r){let i=e.childCount,a=t.childCount;outer:for(let o=0,s=0;o<a;o++){let a=t.child(o);for(let t=s,r=Math.min(i,o+3);t<r;t++)if(e.child(t)==a){s=t+1,n+=a.nodeSize;continue outer}r(a,n),s<i&&e.child(s).sameMarkup(a)?hO(e.child(s),a,n+1,r):a.nodesBetween(0,a.content.size,r,n+1),n+=a.nodeSize}}function gO(e,t){let n,r=(t,r)=>{t.type.spec.tableRole==`table`&&(n=_O(e,t,r,n))};return t?t.doc!=e.doc&&hO(t.doc,e.doc,0,r):e.doc.descendants(r),n}function _O(e,t,n,r){let i=Z.get(t);if(!i.problems)return r;r||=e.tr;let a=[];for(let e=0;e<i.height;e++)a.push(0);for(let e=0;e<i.problems.length;e++){let o=i.problems[e];if(o.type==`collision`){let e=t.nodeAt(o.pos);if(!e)continue;let i=e.attrs;for(let e=0;e<i.rowspan;e++)a[o.row+e]+=o.n;r.setNodeMarkup(r.mapping.map(n+1+o.pos),null,oO(i,i.colspan-o.n,o.n))}else if(o.type==`missing`)a[o.row]+=o.n;else if(o.type==`overlong_rowspan`){let e=t.nodeAt(o.pos);if(!e)continue;r.setNodeMarkup(r.mapping.map(n+1+o.pos),null,{...e.attrs,rowspan:e.attrs.rowspan-o.n})}else if(o.type==`colwidth mismatch`){let e=t.nodeAt(o.pos);if(!e)continue;r.setNodeMarkup(r.mapping.map(n+1+o.pos),null,{...e.attrs,colwidth:o.colwidth})}else if(o.type==`zero_sized`){let e=r.mapping.map(n);r.delete(e,e+t.nodeSize)}}let o,s;for(let e=0;e<a.length;e++)a[e]&&(o??=e,s=e);for(let c=0,l=n+1;c<i.height;c++){let n=t.child(c),i=l+n.nodeSize,u=a[c];if(u>0){let t=`cell`;n.firstChild&&(t=n.firstChild.type.spec.tableRole);let a=[];for(let n=0;n<u;n++){let n=YD(e.schema)[t].createAndFill();n&&a.push(n)}let d=(c==0||o==c-1)&&s==c?l+1:i-1;r.insert(r.mapping.map(d),a)}l=i}return r.setMeta(mO,{fixTables:!0})}function vO(e){let t=e.selection,n=eO(e),r=n.node(-1),i=n.start(-1),a=Z.get(r);return{...t instanceof Q?a.rectBetween(t.$anchorCell.pos-i,t.$headCell.pos-i):a.findCell(n.pos-i),tableStart:i,map:a,table:r}}function yO(e,{map:t,tableStart:n,table:r},i){let a=i>0?-1:0;cO(t,r,i+a)&&(a=i==0||i==t.width?null:0);for(let o=0;o<t.height;o++){let s=o*t.width+i;if(i>0&&i<t.width&&t.map[s-1]==t.map[s]){let a=t.map[s],c=r.nodeAt(a);e.setNodeMarkup(e.mapping.map(n+a),null,sO(c.attrs,i-t.colCount(a))),o+=c.attrs.rowspan-1}else{let c=a==null?YD(r.type.schema).cell:r.nodeAt(t.map[s+a]).type,l=t.positionAt(o,i,r);e.insert(e.mapping.map(n+l),c.createAndFill())}}return e}function bO(e,t){if(!$D(e))return!1;if(t){let n=vO(e);t(yO(e.tr,n,n.left))}return!0}function xO(e,t){if(!$D(e))return!1;if(t){let n=vO(e);t(yO(e.tr,n,n.right))}return!0}function SO(e,{map:t,table:n,tableStart:r},i){let a=e.mapping.maps.length;for(let o=0;o<t.height;){let s=o*t.width+i,c=t.map[s],l=n.nodeAt(c),u=l.attrs;if(i>0&&t.map[s-1]==c||i<t.width-1&&t.map[s+1]==c)e.setNodeMarkup(e.mapping.slice(a).map(r+c),null,oO(u,i-t.colCount(c)));else{let t=e.mapping.slice(a).map(r+c);e.delete(t,t+l.nodeSize)}o+=u.rowspan}}function CO(e,t){if(!$D(e))return!1;if(t){let n=vO(e),r=e.tr;if(n.left==0&&n.right==n.map.width)return!1;for(let e=n.right-1;SO(r,n,e),e!=n.left;e--){let e=n.tableStart?r.doc.nodeAt(n.tableStart-1):r.doc;if(!e)throw RangeError(`No table found`);n.table=e,n.map=Z.get(e)}t(r)}return!0}function wO(e,t,n){let r=YD(t.type.schema).header_cell;for(let i=0;i<e.width;i++)if(t.nodeAt(e.map[i+n*e.width])?.type!=r)return!1;return!0}function TO(e,{map:t,tableStart:n,table:r},i){let a=n;for(let e=0;e<i;e++)a+=r.child(e).nodeSize;let o=[],s=i>0?-1:0;wO(t,r,i+s)&&(s=i==0||i==t.height?null:0);for(let a=0,c=t.width*i;a<t.width;a++,c++)if(i>0&&i<t.height&&t.map[c]==t.map[c-t.width]){let i=t.map[c],o=r.nodeAt(i).attrs;e.setNodeMarkup(n+i,null,{...o,rowspan:o.rowspan+1}),a+=o.colspan-1}else{let e=(s==null?YD(r.type.schema).cell:r.nodeAt(t.map[c+s*t.width])?.type)?.createAndFill();e&&o.push(e)}return e.insert(a,YD(r.type.schema).row.create(null,o)),e}function EO(e,t){if(!$D(e))return!1;if(t){let n=vO(e);t(TO(e.tr,n,n.top))}return!0}function DO(e,t){if(!$D(e))return!1;if(t){let n=vO(e);t(TO(e.tr,n,n.bottom))}return!0}function OO(e,{map:t,table:n,tableStart:r},i){let a=0;for(let e=0;e<i;e++)a+=n.child(e).nodeSize;let o=a+n.child(i).nodeSize,s=e.mapping.maps.length;e.delete(a+r,o+r);let c=new Set;for(let a=0,o=i*t.width;a<t.width;a++,o++){let l=t.map[o];if(!c.has(l)){if(c.add(l),i>0&&l==t.map[o-t.width]){let t=n.nodeAt(l).attrs;e.setNodeMarkup(e.mapping.slice(s).map(l+r),null,{...t,rowspan:t.rowspan-1}),a+=t.colspan-1}else if(i<t.height&&l==t.map[o+t.width]){let o=n.nodeAt(l),c=o.attrs,u=o.type.create({...c,rowspan:o.attrs.rowspan-1},o.content),d=t.positionAt(i+1,a,n);e.insert(e.mapping.slice(s).map(r+d),u),a+=c.colspan-1}}}}function kO(e,t){if(!$D(e))return!1;if(t){let n=vO(e),r=e.tr;if(n.top==0&&n.bottom==n.map.height)return!1;for(let e=n.bottom-1;OO(r,n,e),e!=n.top;e--){let e=n.tableStart?r.doc.nodeAt(n.tableStart-1):r.doc;if(!e)throw RangeError(`No table found`);n.table=e,n.map=Z.get(n.table)}t(r)}return!0}function AO(e){let t=e.content;return t.childCount==1&&t.child(0).isTextblock&&t.child(0).childCount==0}function jO({width:e,height:t,map:n},r){let i=r.top*e+r.left,a=i,o=(r.bottom-1)*e+r.left,s=i+(r.right-r.left-1);for(let t=r.top;t<r.bottom;t++){if(r.left>0&&n[a]==n[a-1]||r.right<e&&n[s]==n[s+1])return!0;a+=e,s+=e}for(let a=r.left;a<r.right;a++){if(r.top>0&&n[i]==n[i-e]||r.bottom<t&&n[o]==n[o+e])return!0;i++,o++}return!1}function MO(e,t){let n=e.selection;if(!(n instanceof Q)||n.$anchorCell.pos==n.$headCell.pos)return!1;let r=vO(e),{map:i}=r;if(jO(i,r))return!1;if(t){let n=e.tr,a={},o=P.empty,s,c;for(let e=r.top;e<r.bottom;e++)for(let t=r.left;t<r.right;t++){let l=i.map[e*i.width+t],u=r.table.nodeAt(l);if(!a[l]&&u){if(a[l]=!0,s==null)s=l,c=u;else{AO(u)||(o=o.append(u.content));let e=n.mapping.map(l+r.tableStart);n.delete(e,e+u.nodeSize)}}}if(s==null||c==null)return!0;if(n.setNodeMarkup(s+r.tableStart,null,{...sO(c.attrs,c.attrs.colspan,r.right-r.left-c.attrs.colspan),rowspan:r.bottom-r.top}),o.size>0){let e=s+1+c.content.size,t=AO(c)?s+1:e;n.replaceWith(t+r.tableStart,e+r.tableStart,o)}n.setSelection(new Q(n.doc.resolve(s+r.tableStart))),t(n)}return!0}function NO(e,t){let n=YD(e.schema);return PO(({node:e})=>n[e.type.spec.tableRole])(e,t)}function PO(e){return(t,n)=>{let r=t.selection,i,a;if(r instanceof Q){if(r.$anchorCell.pos!=r.$headCell.pos)return!1;i=r.$anchorCell.nodeAfter,a=r.$anchorCell.pos}else{if(i=QD(r.$from),!i)return!1;a=ZD(r.$from)?.pos}if(i==null||a==null||i.attrs.colspan==1&&i.attrs.rowspan==1)return!1;if(n){let o=i.attrs,s=[],c=o.colwidth;o.rowspan>1&&(o={...o,rowspan:1}),o.colspan>1&&(o={...o,colspan:1});let l=vO(t),u=t.tr;for(let e=0;e<l.right-l.left;e++)s.push(c?{...o,colwidth:c&&c[e]?[c[e]]:null}:o);let d;for(let t=l.top;t<l.bottom;t++){let n=l.map.positionAt(t,l.left,l.table);t==l.top&&(n+=i.nodeSize);for(let r=l.left,a=0;r<l.right;r++,a++)(r!=l.left||t!=l.top)&&u.insert(d=u.mapping.map(n+l.tableStart,1),e({node:i,row:t,col:r}).createAndFill(s[a]))}u.setNodeMarkup(a,e({node:i,row:l.top,col:l.left}),s[0]),r instanceof Q&&u.setSelection(new Q(u.doc.resolve(r.$anchorCell.pos),d?u.doc.resolve(d):void 0)),n(u)}return!0}}function FO(e,t){return function(n,r){if(!$D(n))return!1;let i=eO(n);if(i.nodeAfter.attrs[e]===t)return!1;if(r){let a=n.tr;n.selection instanceof Q?n.selection.forEachCell((n,r)=>{n.attrs[e]!==t&&a.setNodeMarkup(r,null,{...n.attrs,[e]:t})}):a.setNodeMarkup(i.pos,null,{...i.nodeAfter.attrs,[e]:t}),r(a)}return!0}}function IO(e){return function(t,n){if(!$D(t))return!1;if(n){let r=YD(t.schema),i=vO(t),a=t.tr,o=i.map.cellsInRect(e==`column`?{left:i.left,top:0,right:i.right,bottom:i.map.height}:e==`row`?{left:0,top:i.top,right:i.map.width,bottom:i.bottom}:i),s=o.map(e=>i.table.nodeAt(e));for(let e=0;e<o.length;e++)s[e].type==r.header_cell&&a.setNodeMarkup(i.tableStart+o[e],r.cell,s[e].attrs);if(a.steps.length===0)for(let e=0;e<o.length;e++)a.setNodeMarkup(i.tableStart+o[e],r.header_cell,s[e].attrs);n(a)}return!0}}function LO(e,t,n){let r=t.map.cellsInRect({left:0,top:0,right:e==`row`?t.map.width:1,bottom:e==`column`?t.map.height:1});for(let e=0;e<r.length;e++){let i=t.table.nodeAt(r[e]);if(i&&i.type!==n.header_cell)return!1}return!0}function RO(e,t){return t||={useDeprecatedLogic:!1},t.useDeprecatedLogic?IO(e):function(t,n){if(!$D(t))return!1;if(n){let r=YD(t.schema),i=vO(t),a=t.tr,o=LO(`row`,i,r),s=LO(`column`,i,r),c=(e===`column`?o:e===`row`&&s)?1:0,l=e==`column`?{left:0,top:c,right:1,bottom:i.map.height}:e==`row`?{left:c,top:0,right:i.map.width,bottom:1}:i,u=e==`column`?s?r.cell:r.header_cell:e==`row`?o?r.cell:r.header_cell:r.cell;i.map.cellsInRect(l).forEach(e=>{let t=e+i.tableStart,n=a.doc.nodeAt(t);n&&a.setNodeMarkup(t,u,n.attrs)}),n(a)}return!0}}RO(`row`,{useDeprecatedLogic:!0}),RO(`column`,{useDeprecatedLogic:!0});var zO=RO(`cell`,{useDeprecatedLogic:!0});function BO(e,t){if(t<0){let t=e.nodeBefore;if(t)return e.pos-t.nodeSize;for(let t=e.index(-1)-1,n=e.before();t>=0;t--){let r=e.node(-1).child(t),i=r.lastChild;if(i)return n-1-i.nodeSize;n-=r.nodeSize}}else{if(e.index()<e.parent.childCount-1)return e.pos+e.nodeAfter.nodeSize;let t=e.node(-1);for(let n=e.indexAfter(-1),r=e.after();n<t.childCount;n++){let e=t.child(n);if(e.childCount)return r+1;r+=e.nodeSize}}return null}function VO(e){return function(t,n){if(!$D(t))return!1;let r=BO(eO(t),e);if(r==null)return!1;if(n){let e=t.doc.resolve(r);n(t.tr.setSelection(R.between(e,rO(e))).scrollIntoView())}return!0}}function HO(e,t){let n=e.selection.$anchor;for(let r=n.depth;r>0;r--)if(n.node(r).type.spec.tableRole==`table`)return t&&t(e.tr.delete(n.before(r),n.after(r)).scrollIntoView()),!0;return!1}function UO(e,t){let n=e.selection;if(!(n instanceof Q))return!1;if(t){let r=e.tr,i=YD(e.schema).cell.createAndFill().content;n.forEachCell((e,t)=>{e.content.eq(i)||r.replace(r.mapping.map(t+1),r.mapping.map(t+e.nodeSize-1),new I(i,0,0))}),r.docChanged&&t(r)}return!0}function WO(e){if(e.size===0)return null;let{content:t,openStart:n,openEnd:r}=e;for(;t.childCount==1&&(n>0&&r>0||t.child(0).type.spec.tableRole==`table`);)n--,r--,t=t.child(0).content;let i=t.child(0),a=i.type.spec.tableRole,o=i.type.schema,s=[];if(a==`row`)for(let e=0;e<t.childCount;e++){let i=t.child(e).content,a=e?0:Math.max(0,n-1),c=e<t.childCount-1?0:Math.max(0,r-1);(a||c)&&(i=KO(YD(o).row,new I(i,a,c)).content),s.push(i)}else if(a==`cell`||a==`header_cell`)s.push(n||r?KO(YD(o).row,new I(t,n,r)).content:t);else return null;return GO(o,s)}function GO(e,t){let n=[];for(let e=0;e<t.length;e++){let r=t[e];for(let t=r.childCount-1;t>=0;t--){let{rowspan:i,colspan:a}=r.child(t).attrs;for(let t=e;t<e+i;t++)n[t]=(n[t]||0)+a}}let r=0;for(let e=0;e<n.length;e++)r=Math.max(r,n[e]);for(let i=0;i<n.length;i++)if(i>=t.length&&t.push(P.empty),n[i]<r){let a=YD(e).cell.createAndFill(),o=[];for(let e=n[i];e<r;e++)o.push(a);t[i]=t[i].append(P.from(o))}return{height:t.length,width:r,rows:t}}function KO(e,t){let n=e.createAndFill();return new bm(n).replace(0,n.content.size,t).doc}function qO({width:e,height:t,rows:n},r,i){if(e!=r){let t=[],i=[];for(let e=0;e<n.length;e++){let a=n[e],o=[];for(let n=t[e]||0,i=0;n<r;i++){let s=a.child(i%a.childCount);n+s.attrs.colspan>r&&(s=s.type.createChecked(oO(s.attrs,s.attrs.colspan,n+s.attrs.colspan-r),s.content)),o.push(s),n+=s.attrs.colspan;for(let n=1;n<s.attrs.rowspan;n++)t[e+n]=(t[e+n]||0)+s.attrs.colspan}i.push(P.from(o))}n=i,e=r}if(t!=i){let e=[];for(let r=0,a=0;r<i;r++,a++){let o=[],s=n[a%t];for(let e=0;e<s.childCount;e++){let t=s.child(e);r+t.attrs.rowspan>i&&(t=t.type.create({...t.attrs,rowspan:Math.max(1,i-t.attrs.rowspan)},t.content)),o.push(t)}e.push(P.from(o))}n=e,t=i}return{width:e,height:t,rows:n}}function JO(e,t,n,r,i,a,o){let s=e.doc.type.schema,c=YD(s),l,u;if(i>t.width)for(let a=0,s=0;a<t.height;a++){let d=n.child(a);s+=d.nodeSize;let f=[],p;p=d.lastChild==null||d.lastChild.type==c.cell?l||=c.cell.createAndFill():u||=c.header_cell.createAndFill();for(let e=t.width;e<i;e++)f.push(p);e.insert(e.mapping.slice(o).map(s-1+r),f)}if(a>t.height){let s=[];for(let e=0,r=(t.height-1)*t.width;e<Math.max(t.width,i);e++){let i=e>=t.width?!1:n.nodeAt(t.map[r+e]).type==c.header_cell;s.push(i?u||=c.header_cell.createAndFill():l||=c.cell.createAndFill())}let d=c.row.create(null,P.from(s)),f=[];for(let e=t.height;e<a;e++)f.push(d);e.insert(e.mapping.slice(o).map(r+n.nodeSize-2),f)}return!!(l||u)}function YO(e,t,n,r,i,a,o,s){if(o==0||o==t.height)return!1;let c=!1;for(let l=i;l<a;l++){let i=o*t.width+l,a=t.map[i];if(t.map[i-t.width]==a){c=!0;let i=n.nodeAt(a),{top:u,left:d}=t.findCell(a);e.setNodeMarkup(e.mapping.slice(s).map(a+r),null,{...i.attrs,rowspan:o-u}),e.insert(e.mapping.slice(s).map(t.positionAt(o,d,n)),i.type.createAndFill({...i.attrs,rowspan:u+i.attrs.rowspan-o})),l+=i.attrs.colspan-1}}return c}function XO(e,t,n,r,i,a,o,s){if(o==0||o==t.width)return!1;let c=!1;for(let l=i;l<a;l++){let i=l*t.width+o,a=t.map[i];if(t.map[i-1]==a){c=!0;let i=n.nodeAt(a),u=t.colCount(a),d=e.mapping.slice(s).map(a+r);e.setNodeMarkup(d,null,oO(i.attrs,o-u,i.attrs.colspan-(o-u))),e.insert(d+i.nodeSize,i.type.createAndFill(oO(i.attrs,0,o-u))),l+=i.attrs.rowspan-1}}return c}function ZO(e,t,n,r,i){let a=n?e.doc.nodeAt(n-1):e.doc;if(!a)throw Error(`No table found`);let o=Z.get(a),{top:s,left:c}=r,l=c+i.width,u=s+i.height,d=e.tr,f=0;function p(){if(a=n?d.doc.nodeAt(n-1):d.doc,!a)throw Error(`No table found`);o=Z.get(a),f=d.mapping.maps.length}JO(d,o,a,n,l,u,f)&&p(),YO(d,o,a,n,c,l,s,f)&&p(),YO(d,o,a,n,c,l,u,f)&&p(),XO(d,o,a,n,s,u,c,f)&&p(),XO(d,o,a,n,s,u,l,f)&&p();for(let e=s;e<u;e++){let t=o.positionAt(e,c,a),r=o.positionAt(e,l,a);d.replace(d.mapping.slice(f).map(t+n),d.mapping.slice(f).map(r+n),new I(i.rows[e-s],0,0))}p(),d.setSelection(new Q(d.doc.resolve(n+o.positionAt(s,c,a)),d.doc.resolve(n+o.positionAt(u-1,l-1,a)))),t(d)}var QO=_b({ArrowLeft:ek(`horiz`,-1),ArrowRight:ek(`horiz`,1),ArrowUp:ek(`vert`,-1),ArrowDown:ek(`vert`,1),"Shift-ArrowLeft":tk(`horiz`,-1),"Shift-ArrowRight":tk(`horiz`,1),"Shift-ArrowUp":tk(`vert`,-1),"Shift-ArrowDown":tk(`vert`,1),Backspace:UO,"Mod-Backspace":UO,Delete:UO,"Mod-Delete":UO});function $O(e,t,n){return!n.eq(e.selection)&&(t&&t(e.tr.setSelection(n).scrollIntoView()),!0)}function ek(e,t){return(n,r,i)=>{if(!i)return!1;let a=n.selection;if(a instanceof Q)return $O(n,r,L.near(a.$headCell,t));if(e!=`horiz`&&!a.empty)return!1;let o=ak(i,e,t);if(o==null)return!1;if(e==`horiz`)return $O(n,r,L.near(n.doc.resolve(a.head+t),t));{let i=n.doc.resolve(o),a=aO(i,e,t),s;return s=a?L.near(a,1):t<0?L.near(n.doc.resolve(i.before(-1)),-1):L.near(n.doc.resolve(i.after(-1)),1),$O(n,r,s)}}}function tk(e,t){return(n,r,i)=>{if(!i)return!1;let a=n.selection,o;if(a instanceof Q)o=a;else{let r=ak(i,e,t);if(r==null)return!1;o=new Q(n.doc.resolve(r))}let s=aO(o.$headCell,e,t);return s?$O(n,r,new Q(o.$anchorCell,s)):!1}}function nk(e,t){let n=e.state.doc,r=ZD(n.resolve(t));return r?(e.dispatch(e.state.tr.setSelection(new Q(r))),!0):!1}function rk(e,t,n){if(!$D(e.state))return!1;let r=WO(n),i=e.state.selection;if(i instanceof Q){r||={width:1,height:1,rows:[P.from(KO(YD(e.state.schema).cell,n))]};let t=i.$anchorCell.node(-1),a=i.$anchorCell.start(-1),o=Z.get(t).rectBetween(i.$anchorCell.pos-a,i.$headCell.pos-a);return r=qO(r,o.right-o.left,o.bottom-o.top),ZO(e.state,e.dispatch,a,o,r),!0}if(r){let t=eO(e.state),n=t.start(-1);return ZO(e.state,e.dispatch,n,Z.get(t.node(-1)).findCell(t.pos-n),r),!0}return!1}function ik(e,t){if(t.button!=0||t.ctrlKey||t.metaKey)return;let n=ok(e,t.target),r;if(t.shiftKey&&e.state.selection instanceof Q)i(e.state.selection.$anchorCell,t),t.preventDefault();else if(t.shiftKey&&n&&(r=ZD(e.state.selection.$anchor))!=null&&sk(e,t)?.pos!=r.pos)i(r,t),t.preventDefault();else if(!n)return;function i(t,n){let r=sk(e,n),i=XD.getState(e.state)==null;if(!r||!iO(t,r)){if(i)r=t;else return}let a=new Q(t,r);if(i||!e.state.selection.eq(a)){let n=e.state.tr.setSelection(a);i&&n.setMeta(XD,t.pos),e.dispatch(n)}}function a(){e.root.removeEventListener(`mouseup`,a),e.root.removeEventListener(`dragstart`,a),e.root.removeEventListener(`mousemove`,o),XD.getState(e.state)!=null&&e.dispatch(e.state.tr.setMeta(XD,-1))}function o(r){let o=r,s=XD.getState(e.state),c;if(s!=null)c=e.state.doc.resolve(s);else if(ok(e,o.target)!=n&&(c=sk(e,t),!c))return a();c&&i(c,o)}e.root.addEventListener(`mouseup`,a),e.root.addEventListener(`dragstart`,a),e.root.addEventListener(`mousemove`,o)}function ak(e,t,n){if(!(e.state.selection instanceof R))return null;let{$head:r}=e.state.selection;for(let i=r.depth-1;i>=0;i--){let a=r.node(i);if((n<0?r.index(i):r.indexAfter(i))!=(n<0?0:a.childCount))return null;if(a.type.spec.tableRole==`cell`||a.type.spec.tableRole==`header_cell`){let a=r.before(i),o=t==`vert`?n>0?`down`:`up`:n>0?`right`:`left`;return e.endOfTextblock(o)?a:null}}return null}function ok(e,t){for(;t&&t!=e.dom;t=t.parentNode)if(t.nodeName==`TD`||t.nodeName==`TH`)return t;return null}function sk(e,t){let n=e.posAtCoords({left:t.clientX,top:t.clientY});if(!n)return null;let{inside:r,pos:i}=n;return r>=0&&ZD(e.state.doc.resolve(r))||ZD(e.state.doc.resolve(i))}var ck=class{constructor(e,t){this.node=e,this.defaultCellMinWidth=t,this.dom=document.createElement(`div`),this.dom.className=`tableWrapper`,this.table=this.dom.appendChild(document.createElement(`table`)),this.table.style.setProperty(`--default-cell-min-width`,`${t}px`),this.colgroup=this.table.appendChild(document.createElement(`colgroup`)),lk(e,this.colgroup,this.table,t),this.contentDOM=this.table.appendChild(document.createElement(`tbody`))}update(e){return e.type==this.node.type&&(this.node=e,lk(e,this.colgroup,this.table,this.defaultCellMinWidth),!0)}ignoreMutation(e){return e.type==`attributes`&&(e.target==this.table||this.colgroup.contains(e.target))}};function lk(e,t,n,r,i,a){let o=0,s=!0,c=t.firstChild,l=e.firstChild;if(l){for(let e=0,n=0;e<l.childCount;e++){let{colspan:u,colwidth:d}=l.child(e).attrs;for(let e=0;e<u;e++,n++){let l=i==n?a:d&&d[e],u=l?l+`px`:``;if(o+=l||r,l||(s=!1),c)c.style.width!=u&&(c.style.width=u),c=c.nextSibling;else{let e=document.createElement(`col`);e.style.width=u,t.appendChild(e)}}}for(;c;){var u;let e=c.nextSibling;(u=c.parentNode)==null||u.removeChild(c),c=e}s?(n.style.width=o+`px`,n.style.minWidth=``):(n.style.width=``,n.style.minWidth=o+`px`)}}var uk=new V(`tableColumnResizing`);function dk({handleWidth:e=5,cellMinWidth:t=25,defaultCellMinWidth:n=100,View:r=ck,lastColumnResizable:i=!0}={}){let a=new B({key:uk,state:{init(e,t){var i;let o=(i=a.spec)==null||(i=i.props)==null?void 0:i.nodeViews,s=YD(t.schema).table.name;return r&&o&&(o[s]=(e,t)=>new r(e,n,t)),new fk(-1,!1)},apply(e,t){return t.apply(e)}},props:{attributes:e=>{let t=uk.getState(e);return t&&t.activeHandle>-1?{class:`resize-cursor`}:{}},handleDOMEvents:{mousemove:(t,n)=>{pk(t,n,e,i)},mouseleave:e=>{mk(e)},mousedown:(e,r)=>{hk(e,r,t,n)}},decorations:e=>{let t=uk.getState(e);if(t&&t.activeHandle>-1)return wk(e,t.activeHandle)},nodeViews:{}}});return a}var fk=class e{constructor(e,t){this.activeHandle=e,this.dragging=t}apply(t){let n=this,r=t.getMeta(uk);if(r&&r.setHandle!=null)return new e(r.setHandle,!1);if(r&&r.setDragging!==void 0)return new e(n.activeHandle,r.setDragging);if(n.activeHandle>-1&&t.docChanged){let r=t.mapping.map(n.activeHandle,-1);return nO(t.doc.resolve(r))||(r=-1),new e(r,n.dragging)}return n}};function pk(e,t,n,r){if(!e.editable)return;let i=uk.getState(e.state);if(i&&!i.dragging){let a=_k(t.target),o=-1;if(a){let{left:r,right:i}=a.getBoundingClientRect();t.clientX-r<=n?o=vk(e,t,`left`,n):i-t.clientX<=n&&(o=vk(e,t,`right`,n))}if(o!=i.activeHandle){if(!r&&o!==-1){let t=e.state.doc.resolve(o),n=t.node(-1),r=Z.get(n),i=t.start(-1);if(r.colCount(t.pos-i)+t.nodeAfter.attrs.colspan-1==r.width-1)return}bk(e,o)}}}function mk(e){if(!e.editable)return;let t=uk.getState(e.state);t&&t.activeHandle>-1&&!t.dragging&&bk(e,-1)}function hk(e,t,n,r){if(!e.editable)return!1;let i=e.dom.ownerDocument.defaultView??window,a=uk.getState(e.state);if(!a||a.activeHandle==-1||a.dragging)return!1;let o=e.state.doc.nodeAt(a.activeHandle),s=gk(e,a.activeHandle,o.attrs);e.dispatch(e.state.tr.setMeta(uk,{setDragging:{startX:t.clientX,startWidth:s}}));function c(t){i.removeEventListener(`mouseup`,c),i.removeEventListener(`mousemove`,l);let r=uk.getState(e.state);r?.dragging&&(xk(e,r.activeHandle,yk(r.dragging,t,n)),e.dispatch(e.state.tr.setMeta(uk,{setDragging:null})))}function l(t){if(!t.which)return c(t);let i=uk.getState(e.state);if(i&&i.dragging){let a=yk(i.dragging,t,n);Sk(e,i.activeHandle,a,r)}}return Sk(e,a.activeHandle,s,r),i.addEventListener(`mouseup`,c),i.addEventListener(`mousemove`,l),t.preventDefault(),!0}function gk(e,t,{colspan:n,colwidth:r}){let i=r&&r[r.length-1];if(i)return i;let a=e.domAtPos(t),o=a.node.childNodes[a.offset].offsetWidth,s=n;if(r)for(let e=0;e<n;e++)r[e]&&(o-=r[e],s--);return o/s}function _k(e){for(;e&&e.nodeName!=`TD`&&e.nodeName!=`TH`;)e=e.classList&&e.classList.contains(`ProseMirror`)?null:e.parentNode;return e}function vk(e,t,n,r){let i=n==`right`?-r:r,a=e.posAtCoords({left:t.clientX+i,top:t.clientY});if(!a)return-1;let{pos:o}=a,s=ZD(e.state.doc.resolve(o));if(!s)return-1;if(n==`right`)return s.pos;let c=Z.get(s.node(-1)),l=s.start(-1),u=c.map.indexOf(s.pos-l);return u%c.width==0?-1:l+c.map[u-1]}function yk(e,t,n){let r=t.clientX-e.startX;return Math.max(n,e.startWidth+r)}function bk(e,t){e.dispatch(e.state.tr.setMeta(uk,{setHandle:t}))}function xk(e,t,n){let r=e.state.doc.resolve(t),i=r.node(-1),a=Z.get(i),o=r.start(-1),s=a.colCount(r.pos-o)+r.nodeAfter.attrs.colspan-1,c=e.state.tr;for(let e=0;e<a.height;e++){let t=e*a.width+s;if(e&&a.map[t]==a.map[t-a.width])continue;let r=a.map[t],l=i.nodeAt(r).attrs,u=l.colspan==1?0:s-a.colCount(r);if(l.colwidth&&l.colwidth[u]==n)continue;let d=l.colwidth?l.colwidth.slice():Ck(l.colspan);d[u]=n,c.setNodeMarkup(o+r,null,{...l,colwidth:d})}c.docChanged&&e.dispatch(c)}function Sk(e,t,n,r){let i=e.state.doc.resolve(t),a=i.node(-1),o=i.start(-1),s=Z.get(a).colCount(i.pos-o)+i.nodeAfter.attrs.colspan-1,c=e.domAtPos(i.start(-1)).node;for(;c&&c.nodeName!=`TABLE`;)c=c.parentNode;c&&lk(a,c.firstChild,c,r,s,n)}function Ck(e){return Array(e).fill(0)}function wk(e,t){let n=[],r=e.doc.resolve(t),i=r.node(-1);if(!i)return gy.empty;let a=Z.get(i),o=r.start(-1),s=a.colCount(r.pos-o)+r.nodeAfter.attrs.colspan-1;for(let t=0;t<a.height;t++){let r=s+t*a.width;if((s==a.width-1||a.map[r]!=a.map[r+1])&&(t==0||a.map[r]!=a.map[r-a.width])){let t=a.map[r],s=o+t+i.nodeAt(t).nodeSize-1,c=document.createElement(`div`);c.className=`column-resize-handle`,uk.getState(e)?.dragging&&n.push(py.node(o+t,o+t+i.nodeAt(t).nodeSize,{class:`column-resize-dragging`})),n.push(py.widget(s,c))}}return gy.create(e.doc,n)}function Tk({allowTableNodeSelection:e=!1}={}){return new B({key:XD,state:{init(){return null},apply(e,t){let n=e.getMeta(XD);if(n!=null)return n==-1?null:n;if(t==null||!e.docChanged)return t;let{deleted:r,pos:i}=e.mapping.mapResult(t);return r?null:i}},props:{decorations:uO,handleDOMEvents:{mousedown:ik},createSelectionBetween(e){return XD.getState(e.state)==null?null:e.state.selection},handleTripleClick:nk,handleKeyDown:QO,handlePaste:rk},appendTransaction(t,n,r){return pO(r,gO(r,n),e)}})}function Ek(e){return e===`left`||e===`right`||e===`center`?e:null}function Dk(e){let t=(e.style.textAlign||``).trim().toLowerCase(),n=(e.getAttribute(`align`)||``).trim().toLowerCase();return Ek(t||n)}function Ok(e){return Ek(e?.align)}function kk(){return{default:null,parseHTML:e=>Dk(e),renderHTML:e=>e.align?{style:`text-align: ${e.align}`}:{}}}var Ak=KC.create({name:`tableCell`,addOptions(){return{HTMLAttributes:{}}},content:`block+`,addAttributes(){return{colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:e=>{let t=e.getAttribute(`colwidth`),n=t?t.split(`,`).map(e=>parseInt(e,10)):null;if(!n){let t=e.closest(`table`)?.querySelectorAll(`colgroup > col`),n=Array.from(e.parentElement?.children||[]).indexOf(e);if(n&&n>-1&&t&&t[n]){let e=t[n].getAttribute(`width`);return e?[parseInt(e,10)]:null}}return n}},align:kk()}},tableRole:`cell`,isolating:!0,parseHTML(){return[{tag:`td`}]},renderHTML({HTMLAttributes:e}){return[`td`,G(this.options.HTMLAttributes,e),0]}}),jk=KC.create({name:`tableHeader`,addOptions(){return{HTMLAttributes:{}}},content:`block+`,addAttributes(){return{colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:e=>{let t=e.getAttribute(`colwidth`);return t?t.split(`,`).map(e=>parseInt(e,10)):null}},align:kk()}},tableRole:`header_cell`,isolating:!0,parseHTML(){return[{tag:`th`}]},renderHTML({HTMLAttributes:e}){return[`th`,G(this.options.HTMLAttributes,e),0]}}),Mk=KC.create({name:`tableRow`,addOptions(){return{HTMLAttributes:{}}},content:`(tableCell | tableHeader)*`,tableRole:`row`,parseHTML(){return[{tag:`tr`}]},renderHTML({HTMLAttributes:e}){return[`tr`,G(this.options.HTMLAttributes,e),0]}});function Nk(e,t){return t?[`width`,`${Math.max(t,e)}px`]:[`min-width`,`${e}px`]}function Pk(e,t,n,r,i,a){var o;let s=0,c=!0,l=t.firstChild,u=e.firstChild;if(u!==null)for(let e=0,n=0;e<u.childCount;e+=1){let{colspan:o,colwidth:d}=u.child(e).attrs;for(let e=0;e<o;e+=1,n+=1){let o=i===n?a:d&&d[e],u=o?`${o}px`:``;if(s+=o||r,o||(c=!1),l){if(l.style.width!==u){let[e,t]=Nk(r,o);l.style.setProperty(e,t)}l=l.nextSibling}else{let e=document.createElement(`col`),[n,i]=Nk(r,o);e.style.setProperty(n,i),t.appendChild(e)}}}for(;l;){let e=l.nextSibling;(o=l.parentNode)==null||o.removeChild(l),l=e}let d=e.attrs.style&&typeof e.attrs.style==`string`&&/\bwidth\s*:/i.test(e.attrs.style);c&&!d?(n.style.width=`${s}px`,n.style.minWidth=``):(n.style.width=``,n.style.minWidth=`${s}px`)}var Fk=class{constructor(e,t){this.node=e,this.cellMinWidth=t,this.dom=document.createElement(`div`),this.dom.className=`tableWrapper`,this.table=this.dom.appendChild(document.createElement(`table`)),e.attrs.style&&(this.table.style.cssText=e.attrs.style),this.colgroup=this.table.appendChild(document.createElement(`colgroup`)),Pk(e,this.colgroup,this.table,t),this.contentDOM=this.table.appendChild(document.createElement(`tbody`))}update(e){return e.type===this.node.type&&(this.node=e,Pk(e,this.colgroup,this.table,this.cellMinWidth),!0)}ignoreMutation(e){let t=e.target,n=this.dom.contains(t),r=this.contentDOM.contains(t);return!(!n||r||e.type!==`attributes`&&e.type!==`childList`&&e.type!==`characterData`)}};function Ik(e,t,n,r){let i=0,a=!0,o=[],s=e.firstChild;if(!s)return{};for(let e=0,c=0;e<s.childCount;e+=1){let{colspan:l,colwidth:u}=s.child(e).attrs;for(let e=0;e<l;e+=1,c+=1){let s=n===c?r:u&&u[e];i+=s||t,s||(a=!1);let[l,d]=Nk(t,s);o.push([`col`,{style:`${l}: ${d}`}])}}let c=a?`${i}px`:``,l=a?``:`${i}px`;return{colgroup:[`colgroup`,{},...o],tableWidth:c,tableMinWidth:l}}function Lk(e,t){return t?e.createChecked(null,t):e.createAndFill()}function Rk(e){if(e.cached.tableNodeTypes)return e.cached.tableNodeTypes;let t={};return Object.keys(e.nodes).forEach(n=>{let r=e.nodes[n];r.spec.tableRole&&(t[r.spec.tableRole]=r)}),e.cached.tableNodeTypes=t,t}function zk(e,t,n,r,i){let a=Rk(e),o=[],s=[];for(let e=0;e<n;e+=1){let e=Lk(a.cell,i);if(e&&s.push(e),r){let e=Lk(a.header_cell,i);e&&o.push(e)}}let c=[];for(let e=0;e<t;e+=1)c.push(a.row.createChecked(null,r&&e===0?o:s));return a.table.createChecked(null,c)}function Bk(e){return e instanceof Q}var Vk=({editor:e})=>{let{selection:t}=e.state;if(!Bk(t))return!1;let n=0;return Lx(t.ranges[0].$from,e=>e.type.name===`table`)?.node.descendants(e=>{if(e.type.name===`table`)return!1;[`tableCell`,`tableHeader`].includes(e.type.name)&&(n+=1)}),n===t.ranges.length&&(e.commands.deleteTable(),!0)};function Hk(e){return(e||``).replace(/\s+/g,` `).trim()}function Uk(e,t,n={}){let r=n.cellLineSeparator??``;if(!e||!e.content||e.content.length===0)return``;let i=[];e.content.forEach(e=>{let n=[];e.content&&e.content.forEach(e=>{let i=``;i=e.content&&Array.isArray(e.content)&&e.content.length>1?e.content.map(e=>t.renderChildren(e)).join(r):e.content?t.renderChildren(e.content):``;let a=Hk(i),o=e.type===`tableHeader`,s=Ok(e.attrs);n.push({text:a,isHeader:o,align:s})}),i.push(n)});let a=i.reduce((e,t)=>Math.max(e,t.length),0);if(a===0)return``;let o=Array(a).fill(0);i.forEach(e=>{for(let t=0;t<a;t+=1){let n=(e[t]?.text||``).length;n>o[t]&&(o[t]=n),o[t]<3&&(o[t]=3)}});let s=(e,t)=>e+` `.repeat(Math.max(0,t-e.length)),c=i[0],l=c.some(e=>e.isHeader),u=Array(a).fill(null);i.forEach(e=>{for(let t=0;t<a;t+=1)!u[t]&&e[t]?.align&&(u[t]=e[t].align)});let d=`
`,f=Array(a).fill(0).map((e,t)=>l&&c[t]&&c[t].text||``);return d+=`| ${f.map((e,t)=>s(e,o[t])).join(` | `)} |
`,d+=`| ${o.map((e,t)=>{let n=Math.max(3,e),r=u[t];return r===`left`?`:${`-`.repeat(n)}`:r===`right`?`${`-`.repeat(n)}:`:r===`center`?`:${`-`.repeat(n)}:`:`-`.repeat(n)}).join(` | `)} |
`,(l?i.slice(1):i).forEach(e=>{d+=`| ${Array(a).fill(0).map((t,n)=>s(e[n]&&e[n].text||``,o[n])).join(` | `)} |
`}),d}var Wk=Uk,Gk=KC.create({name:`table`,addOptions(){return{HTMLAttributes:{},resizable:!1,renderWrapper:!1,handleWidth:5,cellMinWidth:25,View:Fk,lastColumnResizable:!0,allowTableNodeSelection:!1}},content:`tableRow+`,tableRole:`table`,isolating:!0,group:`block`,parseHTML(){return[{tag:`table`}]},renderHTML({node:e,HTMLAttributes:t}){let{colgroup:n,tableWidth:r,tableMinWidth:i}=Ik(e,this.options.cellMinWidth),a=t.style;function o(){return a||(r?`width: ${r}`:`min-width: ${i}`)}let s=[`table`,G(this.options.HTMLAttributes,t,{style:o()}),n,[`tbody`,0]];return this.options.renderWrapper?[`div`,{class:`tableWrapper`},s]:s},parseMarkdown:(e,t)=>{let n=[],r=Array.isArray(e.align)?e.align:[];if(e.header){let i=[];e.header.forEach((e,n)=>{let a=Ek(r[n]??e.align),o=a?{align:a}:{};i.push(t.createNode(`tableHeader`,o,[{type:`paragraph`,content:t.parseInline(e.tokens)}]))}),n.push(t.createNode(`tableRow`,{},i))}return e.rows&&e.rows.forEach(e=>{let i=[];e.forEach((e,n)=>{let a=Ek(r[n]??e.align),o=a?{align:a}:{};i.push(t.createNode(`tableCell`,o,[{type:`paragraph`,content:t.parseInline(e.tokens)}]))}),n.push(t.createNode(`tableRow`,{},i))}),t.createNode(`table`,void 0,n)},renderMarkdown:(e,t)=>Wk(e,t),addCommands(){return{insertTable:({rows:e=3,cols:t=3,withHeaderRow:n=!0}={})=>({tr:r,dispatch:i,editor:a})=>{let o=zk(a.schema,e,t,n);if(i){let e=r.selection.from+1;r.replaceSelectionWith(o).scrollIntoView().setSelection(R.near(r.doc.resolve(e)))}return!0},addColumnBefore:()=>({state:e,dispatch:t})=>bO(e,t),addColumnAfter:()=>({state:e,dispatch:t})=>xO(e,t),deleteColumn:()=>({state:e,dispatch:t})=>CO(e,t),addRowBefore:()=>({state:e,dispatch:t})=>EO(e,t),addRowAfter:()=>({state:e,dispatch:t})=>DO(e,t),deleteRow:()=>({state:e,dispatch:t})=>kO(e,t),deleteTable:()=>({state:e,dispatch:t})=>HO(e,t),mergeCells:()=>({state:e,dispatch:t})=>MO(e,t),splitCell:()=>({state:e,dispatch:t})=>NO(e,t),toggleHeaderColumn:()=>({state:e,dispatch:t})=>RO(`column`)(e,t),toggleHeaderRow:()=>({state:e,dispatch:t})=>RO(`row`)(e,t),toggleHeaderCell:()=>({state:e,dispatch:t})=>zO(e,t),mergeOrSplit:()=>({state:e,dispatch:t})=>MO(e,t)?!0:NO(e,t),setCellAttribute:(e,t)=>({state:n,dispatch:r})=>FO(e,t)(n,r),goToNextCell:()=>({state:e,dispatch:t})=>VO(1)(e,t),goToPreviousCell:()=>({state:e,dispatch:t})=>VO(-1)(e,t),fixTables:()=>({state:e,dispatch:t})=>(t&&gO(e),!0),setCellSelection:e=>({tr:t,dispatch:n})=>{if(n){let n=Q.create(t.doc,e.anchorCell,e.headCell);t.setSelection(n)}return!0}}},addKeyboardShortcuts(){return{Tab:()=>this.editor.commands.goToNextCell()?!0:this.editor.can().addRowAfter()?this.editor.chain().addRowAfter().goToNextCell().run():!1,"Shift-Tab":()=>this.editor.commands.goToPreviousCell(),Backspace:Vk,"Mod-Backspace":Vk,Delete:Vk,"Mod-Delete":Vk}},addProseMirrorPlugins(){return[...this.options.resizable&&this.editor.isEditable?[dk({handleWidth:this.options.handleWidth,cellMinWidth:this.options.cellMinWidth,defaultCellMinWidth:this.options.cellMinWidth,View:this.options.View,lastColumnResizable:this.options.lastColumnResizable})]:[],Tk({allowTableNodeSelection:this.options.allowTableNodeSelection})]},extendNodeSchema(e){return{tableRole:W(U(e,`tableRole`,{name:e.name,options:e.options,storage:e.storage}))}}});K.create({name:`tableKit`,addExtensions(){let e=[];return this.options.table!==!1&&e.push(Gk.configure(this.options.table)),this.options.tableCell!==!1&&e.push(Ak.configure(this.options.tableCell)),this.options.tableHeader!==!1&&e.push(jk.configure(this.options.tableHeader)),this.options.tableRow!==!1&&e.push(Mk.configure(this.options.tableRow)),e}});var Kk=Ak,qk=jk,Jk=Mk,Yk=KC.create({name:`text`,group:`inline`,parseMarkdown:e=>({type:`text`,text:e.text||``}),renderMarkdown:e=>e.text||``});function Xk(e={}){return new B({view(t){return new Zk(t,e)}})}var Zk=class{constructor(e,t){this.editorView=e,this.cursorPos=null,this.element=null,this.timeout=-1,this.lastDragEvent=null,this.width=t.width??1,this.color=t.color===!1?void 0:t.color||`black`,this.class=t.class,this.handlers=[`dragover`,`dragend`,`drop`,`dragleave`].map(t=>{let n=e=>{this[t](e)};return e.dom.addEventListener(t,n),{name:t,handler:n}})}destroy(){this.setCursor(null),this.handlers.forEach(({name:e,handler:t})=>this.editorView.dom.removeEventListener(e,t))}update(e,t){if(this.cursorPos!=null&&t.doc!=e.state.doc){if(this.lastDragEvent){let e=this.computeTarget(this.lastDragEvent);e==this.cursorPos?this.updateOverlay():this.setCursor(e)}else this.updateOverlay()}}setCursor(e){e!=this.cursorPos&&(this.cursorPos=e,e==null?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let e=this.editorView.state.doc.resolve(this.cursorPos),t=!e.parent.inlineContent,n,r=this.editorView.dom,i=r.getBoundingClientRect(),a=i.width/r.offsetWidth,o=i.height/r.offsetHeight;if(t){let t=e.nodeBefore,r=e.nodeAfter;if(t||r){let e=this.editorView.nodeDOM(this.cursorPos-(t?t.nodeSize:0));if(e){let i=e.getBoundingClientRect(),a=t?i.bottom:i.top;t&&r&&(a=(a+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2);let s=this.width/2*o;n={left:i.left,right:i.right,top:a-s,bottom:a+s}}}}if(!n){let e=this.editorView.coordsAtPos(this.cursorPos),t=this.width/2*a;n={left:e.left-t,right:e.left+t,top:e.top,bottom:e.bottom}}let s=this.editorView.dom.offsetParent;this.element||(this.element=s.appendChild(document.createElement(`div`)),this.class&&(this.element.className=this.class),this.element.style.cssText=`position: absolute; z-index: 50; pointer-events: none;`,this.color&&(this.element.style.backgroundColor=this.color)),this.element.classList.toggle(`prosemirror-dropcursor-block`,t),this.element.classList.toggle(`prosemirror-dropcursor-inline`,!t);let c,l;if(!s||s==document.body&&getComputedStyle(s).position==`static`)c=-pageXOffset,l=-pageYOffset;else{let e=s.getBoundingClientRect(),t=e.width/s.offsetWidth,n=e.height/s.offsetHeight;c=e.left-s.scrollLeft*t,l=e.top-s.scrollTop*n}this.element.style.left=(n.left-c)/a+`px`,this.element.style.top=(n.top-l)/o+`px`,this.element.style.width=(n.right-n.left)/a+`px`,this.element.style.height=(n.bottom-n.top)/o+`px`}scheduleRemoval(e){clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setCursor(null),e)}computeTarget(e){let t=this.editorView.posAtCoords({left:e.clientX,top:e.clientY}),n=t&&t.inside>=0&&this.editorView.state.doc.nodeAt(t.inside),r=n&&n.type.spec.disableDropCursor,i=typeof r==`function`?r(this.editorView,t,e):r;if(!t||i)return null;let a=t.pos;if(this.editorView.dragging&&this.editorView.dragging.slice){let e=em(this.editorView.state.doc,a,this.editorView.dragging.slice);e!=null&&(a=e)}return a}dragover(e){if(!this.editorView.editable)return;this.lastDragEvent=e;let t=this.computeTarget(e);t!=null&&(this.setCursor(t),this.scheduleRemoval(5e3))}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(e){this.editorView.dom.contains(e.relatedTarget)||this.setCursor(null)}},Qk=class e extends L{constructor(e){super(e,e)}map(t,n){let r=t.resolve(n.map(this.head));return e.valid(r)?new e(r):L.near(r)}content(){return I.empty}eq(t){return t instanceof e&&t.head==this.head}toJSON(){return{type:`gapcursor`,pos:this.head}}static fromJSON(t,n){if(typeof n.pos!=`number`)throw RangeError(`Invalid input for GapCursor.fromJSON`);return new e(t.resolve(n.pos))}getBookmark(){return new $k(this.anchor)}static valid(e){let t=e.parent;if(t.inlineContent||!tA(e)||!nA(e))return!1;let n=t.type.spec.allowGapCursor;if(n!=null)return n;let r=t.contentMatchAt(e.index()).defaultType;return r&&r.isTextblock}static findGapCursorFrom(t,n,r=!1){search:for(;;){if(!r&&e.valid(t))return t;let i=t.pos,a=null;for(let r=t.depth;;r--){let o=t.node(r);if(n>0?t.indexAfter(r)<o.childCount:t.index(r)>0){a=o.child(n>0?t.indexAfter(r):t.index(r)-1);break}if(r==0)return null;i+=n;let s=t.doc.resolve(i);if(e.valid(s))return s}for(;;){let o=n>0?a.firstChild:a.lastChild;if(!o){if(a.isAtom&&!a.isText&&!z.isSelectable(a)){t=t.doc.resolve(i+a.nodeSize*n),r=!1;continue search}break}a=o,i+=n;let s=t.doc.resolve(i);if(e.valid(s))return s}return null}}};Qk.prototype.visible=!1,Qk.findFrom=Qk.findGapCursorFrom,L.jsonID(`gapcursor`,Qk);var $k=class e{constructor(e){this.pos=e}map(t){return new e(t.map(this.pos))}resolve(e){let t=e.resolve(this.pos);return Qk.valid(t)?new Qk(t):L.near(t)}};function eA(e){return e.isAtom||e.spec.isolating||e.spec.createGapCursor}function tA(e){for(let t=e.depth;t>=0;t--){let n=e.index(t),r=e.node(t);if(n==0){if(r.type.spec.isolating)return!0;continue}for(let e=r.child(n-1);;e=e.lastChild){if(e.childCount==0&&!e.inlineContent||eA(e.type))return!0;if(e.inlineContent)return!1}}return!0}function nA(e){for(let t=e.depth;t>=0;t--){let n=e.indexAfter(t),r=e.node(t);if(n==r.childCount){if(r.type.spec.isolating)return!0;continue}for(let e=r.child(n);;e=e.firstChild){if(e.childCount==0&&!e.inlineContent||eA(e.type))return!0;if(e.inlineContent)return!1}}return!0}function rA(){return new B({props:{decorations:cA,createSelectionBetween(e,t,n){return t.pos==n.pos&&Qk.valid(n)?new Qk(n):null},handleClick:oA,handleKeyDown:iA,handleDOMEvents:{beforeinput:sA}}})}var iA=_b({ArrowLeft:aA(`horiz`,-1),ArrowRight:aA(`horiz`,1),ArrowUp:aA(`vert`,-1),ArrowDown:aA(`vert`,1)});function aA(e,t){let n=e==`vert`?t>0?`down`:`up`:t>0?`right`:`left`;return function(e,r,i){let a=e.selection,o=t>0?a.$to:a.$from,s=a.empty;if(a instanceof R){if(!i.endOfTextblock(n)||o.depth==0)return!1;s=!1,o=e.doc.resolve(t>0?o.after():o.before())}let c=Qk.findGapCursorFrom(o,t,s);return c?(r&&r(e.tr.setSelection(new Qk(c))),!0):!1}}function oA(e,t,n){if(!e||!e.editable)return!1;let r=e.state.doc.resolve(t);if(!Qk.valid(r))return!1;let i=e.posAtCoords({left:n.clientX,top:n.clientY});return i&&i.inside>-1&&z.isSelectable(e.state.doc.nodeAt(i.inside))?!1:(e.dispatch(e.state.tr.setSelection(new Qk(r))),!0)}function sA(e,t){if(t.inputType!=`insertCompositionText`||!(e.state.selection instanceof Qk))return!1;let{$from:n}=e.state.selection,r=n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);if(!r)return!1;let i=P.empty;for(let e=r.length-1;e>=0;e--)i=P.from(r[e].createAndFill(null,i));let a=e.state.tr.replace(n.pos,n.pos,new I(i,0,0));return a.setSelection(R.near(a.doc.resolve(n.pos+1))),e.dispatch(a),!1}function cA(e){if(!(e.selection instanceof Qk))return null;let t=document.createElement(`div`);return t.className=`ProseMirror-gapcursor`,gy.create(e.doc,[py.widget(e.selection.head,t,{key:`gapcursor`})])}var lA=200,uA=function(){};uA.prototype.append=function(e){return e.length?(e=uA.from(e),!this.length&&e||e.length<lA&&this.leafAppend(e)||this.length<lA&&e.leafPrepend(this)||this.appendInner(e)):this},uA.prototype.prepend=function(e){return e.length?uA.from(e).append(this):this},uA.prototype.appendInner=function(e){return new fA(this,e)},uA.prototype.slice=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.length),e>=t?uA.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,t))},uA.prototype.get=function(e){if(!(e<0||e>=this.length))return this.getInner(e)},uA.prototype.forEach=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=this.length),t<=n?this.forEachInner(e,t,n,0):this.forEachInvertedInner(e,t,n,0)},uA.prototype.map=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=this.length);var r=[];return this.forEach(function(t,n){return r.push(e(t,n))},t,n),r},uA.from=function(e){return e instanceof uA?e:e&&e.length?new dA(e):uA.empty};var dA=function(e){function t(t){e.call(this),this.values=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={length:{configurable:!0},depth:{configurable:!0}};return t.prototype.flatten=function(){return this.values},t.prototype.sliceInner=function(e,n){return e==0&&n==this.length?this:new t(this.values.slice(e,n))},t.prototype.getInner=function(e){return this.values[e]},t.prototype.forEachInner=function(e,t,n,r){for(var i=t;i<n;i++)if(e(this.values[i],r+i)===!1)return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){for(var i=t-1;i>=n;i--)if(e(this.values[i],r+i)===!1)return!1},t.prototype.leafAppend=function(e){if(this.length+e.length<=lA)return new t(this.values.concat(e.flatten()))},t.prototype.leafPrepend=function(e){if(this.length+e.length<=lA)return new t(e.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(t.prototype,n),t}(uA);uA.empty=new dA([]);var fA=function(e){function t(t,n){e.call(this),this.left=t,this.right=n,this.length=t.length+n.length,this.depth=Math.max(t.depth,n.depth)+1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},t.prototype.getInner=function(e){return e<this.left.length?this.left.get(e):this.right.get(e-this.left.length)},t.prototype.forEachInner=function(e,t,n,r){var i=this.left.length;if(t<i&&this.left.forEachInner(e,t,Math.min(n,i),r)===!1||n>i&&this.right.forEachInner(e,Math.max(t-i,0),Math.min(this.length,n)-i,r+i)===!1)return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){var i=this.left.length;if(t>i&&this.right.forEachInvertedInner(e,t-i,Math.max(n,i)-i,r+i)===!1||n<i&&this.left.forEachInvertedInner(e,Math.min(t,i),n,r)===!1)return!1},t.prototype.sliceInner=function(e,t){if(e==0&&t==this.length)return this;var n=this.left.length;return t<=n?this.left.slice(e,t):e>=n?this.right.slice(e-n,t-n):this.left.slice(e,n).append(this.right.slice(0,t-n))},t.prototype.leafAppend=function(e){var n=this.right.leafAppend(e);if(n)return new t(this.left,n)},t.prototype.leafPrepend=function(e){var n=this.left.leafPrepend(e);if(n)return new t(n,this.right)},t.prototype.appendInner=function(e){return this.left.depth>=Math.max(this.right.depth,e.depth)+1?new t(this.left,new t(this.right,e)):new t(this,e)},t}(uA),pA=500,mA=class e{constructor(e,t){this.items=e,this.eventCount=t}popEvent(t,n){if(this.eventCount==0)return null;let r=this.items.length;for(;;r--)if(this.items.get(r-1).selection){--r;break}let i,a;n&&(i=this.remapping(r,this.items.length),a=i.maps.length);let o=t.tr,s,c,l=[],u=[];return this.items.forEach((t,n)=>{if(!t.step){i||(i=this.remapping(r,n+1),a=i.maps.length),a--,u.push(t);return}if(i){u.push(new gA(t.map));let e=t.step.map(i.slice(a)),n;e&&o.maybeStep(e).doc&&(n=o.mapping.maps[o.mapping.maps.length-1],l.push(new gA(n,void 0,void 0,l.length+u.length))),a--,n&&i.appendMap(n,a)}else o.maybeStep(t.step);if(t.selection)return s=i?t.selection.map(i.slice(a)):t.selection,c=new e(this.items.slice(0,r).append(u.reverse().concat(l)),this.eventCount-1),!1},this.items.length,0),{remaining:c,transform:o,selection:s}}addTransform(t,n,r,i){let a=[],o=this.eventCount,s=this.items,c=!i&&s.length?s.get(s.length-1):null;for(let e=0;e<t.steps.length;e++){let r=t.steps[e].invert(t.docs[e]),l=new gA(t.mapping.maps[e],r,n),u;(u=c&&c.merge(l))&&(l=u,e?a.pop():s=s.slice(0,s.length-1)),a.push(l),n&&=(o++,void 0),i||(c=l)}let l=o-r.depth;return l>vA&&(s=hA(s,l),o-=l),new e(s.append(a),o)}remapping(e,t){let n=new vp;return this.items.forEach((t,r)=>{let i=t.mirrorOffset!=null&&r-t.mirrorOffset>=e?n.maps.length-t.mirrorOffset:void 0;n.appendMap(t.map,i)},e,t),n}addMaps(t){return this.eventCount==0?this:new e(this.items.append(t.map(e=>new gA(e))),this.eventCount)}rebased(t,n){if(!this.eventCount)return this;let r=[],i=Math.max(0,this.items.length-n),a=t.mapping,o=t.steps.length,s=this.eventCount;this.items.forEach(e=>{e.selection&&s--},i);let c=n;this.items.forEach(e=>{let n=a.getMirror(--c);if(n==null)return;o=Math.min(o,n);let i=a.maps[n];if(e.step){let o=t.steps[n].invert(t.docs[n]),l=e.selection&&e.selection.map(a.slice(c+1,n));l&&s++,r.push(new gA(i,o,l))}else r.push(new gA(i))},i);let l=[];for(let e=n;e<o;e++)l.push(new gA(a.maps[e]));let u=this.items.slice(0,i).append(l).append(r),d=new e(u,s);return d.emptyItemCount()>pA&&(d=d.compress(this.items.length-r.length)),d}emptyItemCount(){let e=0;return this.items.forEach(t=>{t.step||e++}),e}compress(t=this.items.length){let n=this.remapping(0,t),r=n.maps.length,i=[],a=0;return this.items.forEach((e,o)=>{if(o>=t)i.push(e),e.selection&&a++;else if(e.step){let t=e.step.map(n.slice(r)),o=t&&t.getMap();if(r--,o&&n.appendMap(o,r),t){let s=e.selection&&e.selection.map(n.slice(r));s&&a++;let c=new gA(o.invert(),t,s),l,u=i.length-1;(l=i.length&&i[u].merge(c))?i[u]=l:i.push(c)}}else e.map&&r--},this.items.length,0),new e(uA.from(i.reverse()),a)}};mA.empty=new mA(uA.empty,0);function hA(e,t){let n;return e.forEach((e,r)=>{if(e.selection&&t--==0)return n=r,!1}),e.slice(n)}var gA=class e{constructor(e,t,n,r){this.map=e,this.step=t,this.selection=n,this.mirrorOffset=r}merge(t){if(this.step&&t.step&&!t.selection){let n=t.step.merge(this.step);if(n)return new e(n.getMap().invert(),n,this.selection)}}},_A=class{constructor(e,t,n,r,i){this.done=e,this.undone=t,this.prevRanges=n,this.prevTime=r,this.prevComposition=i}},vA=20;function yA(e,t,n,r){let i=n.getMeta(DA),a;if(i)return i.historyState;n.getMeta(OA)&&(e=new _A(e.done,e.undone,null,0,-1));let o=n.getMeta(`appendedTransaction`);if(n.steps.length==0)return e;if(o&&o.getMeta(DA))return o.getMeta(DA).redo?new _A(e.done.addTransform(n,void 0,r,EA(t)),e.undone,xA(n.mapping.maps),e.prevTime,e.prevComposition):new _A(e.done,e.undone.addTransform(n,void 0,r,EA(t)),null,e.prevTime,e.prevComposition);if(n.getMeta(`addToHistory`)!==!1&&!(o&&o.getMeta(`addToHistory`)===!1)){let i=n.getMeta(`composition`),a=e.prevTime==0||!o&&e.prevComposition!=i&&(e.prevTime<(n.time||0)-r.newGroupDelay||!bA(n,e.prevRanges)),s=o?SA(e.prevRanges,n.mapping):xA(n.mapping.maps);return new _A(e.done.addTransform(n,a?t.selection.getBookmark():void 0,r,EA(t)),mA.empty,s,n.time,i??e.prevComposition)}return(a=n.getMeta(`rebased`))?new _A(e.done.rebased(n,a),e.undone.rebased(n,a),SA(e.prevRanges,n.mapping),e.prevTime,e.prevComposition):new _A(e.done.addMaps(n.mapping.maps),e.undone.addMaps(n.mapping.maps),SA(e.prevRanges,n.mapping),e.prevTime,e.prevComposition)}function bA(e,t){if(!t)return!1;if(!e.docChanged)return!0;let n=!1;return e.mapping.maps[0].forEach((e,r)=>{for(let i=0;i<t.length;i+=2)e<=t[i+1]&&r>=t[i]&&(n=!0)}),n}function xA(e){let t=[];for(let n=e.length-1;n>=0&&t.length==0;n--)e[n].forEach((e,n,r,i)=>t.push(r,i));return t}function SA(e,t){if(!e)return null;let n=[];for(let r=0;r<e.length;r+=2){let i=t.map(e[r],1),a=t.map(e[r+1],-1);i<=a&&n.push(i,a)}return n}function CA(e,t,n){let r=EA(t),i=DA.get(t).spec.config,a=(n?e.undone:e.done).popEvent(t,r);if(!a)return null;let o=a.selection.resolve(a.transform.doc),s=(n?e.done:e.undone).addTransform(a.transform,t.selection.getBookmark(),i,r),c=new _A(n?s:a.remaining,n?a.remaining:s,null,0,-1);return a.transform.setSelection(o).setMeta(DA,{redo:n,historyState:c})}var wA=!1,TA=null;function EA(e){let t=e.plugins;if(TA!=t){wA=!1,TA=t;for(let e=0;e<t.length;e++)if(t[e].spec.historyPreserveItems){wA=!0;break}}return wA}var DA=new V(`history`),OA=new V(`closeHistory`);function kA(e={}){return e={depth:e.depth||100,newGroupDelay:e.newGroupDelay||500},new B({key:DA,state:{init(){return new _A(mA.empty,mA.empty,null,0,-1)},apply(t,n,r){return yA(n,r,t,e)}},config:e,props:{handleDOMEvents:{beforeinput(e,t){let n=t.inputType,r=n==`historyUndo`?jA:n==`historyRedo`?MA:null;return!r||!e.editable?!1:(t.preventDefault(),r(e.state,e.dispatch))}}}})}function AA(e,t){return(n,r)=>{let i=DA.getState(n);if(!i||(e?i.undone:i.done).eventCount==0)return!1;if(r){let a=CA(i,n,e);a&&r(t?a.scrollIntoView():a)}return!0}}var jA=AA(!1,!0),MA=AA(!0,!0);K.create({name:`characterCount`,addOptions(){return{limit:null,mode:`textSize`,textCounter:e=>e.length,wordCounter:e=>e.split(` `).filter(e=>e!==``).length}},addStorage(){return{characters:()=>0,words:()=>0}},onBeforeCreate(){this.storage.characters=e=>{let t=e?.node||this.editor.state.doc;if((e?.mode||this.options.mode)===`textSize`){let e=t.textBetween(0,t.content.size,void 0,` `);return this.options.textCounter(e)}return t.nodeSize},this.storage.words=e=>{let t=e?.node||this.editor.state.doc,n=t.textBetween(0,t.content.size,` `,` `);return this.options.wordCounter(n)}},addProseMirrorPlugins(){let e=!1;return[new B({key:new V(`characterCount`),appendTransaction:(t,n,r)=>{if(e)return;let i=this.options.limit;if(i==null||i===0){e=!0;return}let a=this.storage.characters({node:r.doc});if(a>i){let t=a-i;console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);let n=r.tr.deleteRange(0,t);return e=!0,n}e=!0},filterTransaction:(e,t)=>{let n=this.options.limit;if(!e.docChanged||n===0||n==null)return!0;let r=this.storage.characters({node:t.doc}),i=this.storage.characters({node:e.doc});if(i<=n||r>n&&i>n&&i<=r)return!0;if(r>n&&i>n&&i>r||!e.getMeta(`paste`))return!1;let a=e.selection.$head.pos,o=a-(i-n),s=a;return e.deleteRange(o,s),!(this.storage.characters({node:e.doc})>n)}})]}});var NA=K.create({name:`dropCursor`,addOptions(){return{color:`currentColor`,width:1,class:void 0}},addProseMirrorPlugins(){return[Xk(this.options)]}});K.create({name:`focus`,addOptions(){return{className:`has-focus`,mode:`all`}},addProseMirrorPlugins(){return[new B({key:new V(`focus`),props:{decorations:({doc:e,selection:t})=>{let{isEditable:n,isFocused:r}=this.editor,{anchor:i}=t,a=[];if(!n||!r)return gy.create(e,[]);let o=0;this.options.mode===`deepest`&&e.descendants((e,t)=>{if(!e.isText){if(!(i>=t&&i<=t+e.nodeSize-1))return!1;o+=1}});let s=0;return e.descendants((e,t)=>{if(e.isText||!(i>=t&&i<=t+e.nodeSize-1))return!1;if(s+=1,this.options.mode===`deepest`&&o-s>0||this.options.mode===`shallowest`&&s>1)return this.options.mode===`deepest`;a.push(py.node(t,t+e.nodeSize,{class:this.options.className}))}),gy.create(e,a)}}})]}});var PA=K.create({name:`gapCursor`,addProseMirrorPlugins(){return[rA()]},extendNodeSchema(e){return{allowGapCursor:W(U(e,`allowGapCursor`,{name:e.name,options:e.options,storage:e.storage}))??null}}}),FA=`placeholder`;function IA(e){return e.replace(/\s+/g,`-`).replace(/[^a-zA-Z0-9-]/g,``).replace(/^[0-9-]+/,``).replace(/^-+/,``).toLowerCase()}K.create({name:`placeholder`,addOptions(){return{emptyEditorClass:`is-editor-empty`,emptyNodeClass:`is-empty`,dataAttribute:FA,placeholder:`Write something …`,showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}},addProseMirrorPlugins(){let e=this.options.dataAttribute?`data-${IA(this.options.dataAttribute)}`:`data-${FA}`;return[new B({key:new V(`placeholder`),props:{decorations:({doc:t,selection:n})=>{let r=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:i}=n,a=[];if(!r)return null;let o=this.editor.isEmpty;return t.descendants((t,n)=>{let r=i>=n&&i<=n+t.nodeSize,s=!t.isLeaf&&xS(t);if(!t.type.isTextblock)return this.options.includeChildren;if((r||!this.options.showOnlyCurrent)&&s){let i=[this.options.emptyNodeClass];o&&i.push(this.options.emptyEditorClass);let s=py.node(n,n+t.nodeSize,{class:i.join(` `),[e]:typeof this.options.placeholder==`function`?this.options.placeholder({editor:this.editor,node:t,pos:n,hasAnchor:r}):this.options.placeholder});a.push(s)}return this.options.includeChildren}),gy.create(t,a)}}})]}}),K.create({name:`selection`,addOptions(){return{className:`selection`}},addProseMirrorPlugins(){let{editor:e,options:t}=this;return[new B({key:new V(`selection`),props:{decorations(n){return n.selection.empty||e.isFocused||!e.isEditable||SS(n.selection)||e.view.dragging?null:gy.create(n.doc,[py.inline(n.selection.from,n.selection.to,{class:t.className})])}}})]}});function LA({types:e,node:t}){return t&&Array.isArray(e)&&e.includes(t.type)||t?.type===e}K.create({name:`trailingNode`,addOptions(){return{node:void 0,notAfter:[]}},addProseMirrorPlugins(){let e=new V(this.name),t=this.options.node||this.editor.schema.topNodeType.contentMatch.defaultType?.name||`paragraph`,n=Object.entries(this.editor.schema.nodes).map(([,e])=>e).filter(e=>(this.options.notAfter||[]).concat(t).includes(e.name));return[new B({key:e,appendTransaction:(n,r,i)=>{let{doc:a,tr:o,schema:s}=i,c=e.getState(i),l=a.content.size,u=s.nodes[t];if(!n.some(e=>e.getMeta(`skipTrailingNode`))&&c)return o.insert(l,u.create())},state:{init:(e,t)=>{let r=t.tr.doc.lastChild;return!LA({node:r,types:n})},apply:(e,t)=>{if(!e.docChanged||e.getMeta(`__uniqueIDTransaction`))return t;let r=e.doc.lastChild;return!LA({node:r,types:n})}}})]}});var RA=K.create({name:`undoRedo`,addOptions(){return{depth:100,newGroupDelay:500}},addCommands(){return{undo:()=>({state:e,dispatch:t})=>jA(e,t),redo:()=>({state:e,dispatch:t})=>MA(e,t)}},addProseMirrorPlugins(){return[kA(this.options)]},addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Shift-Mod-z":()=>this.editor.commands.redo(),"Mod-y":()=>this.editor.commands.redo(),"Mod-я":()=>this.editor.commands.undo(),"Shift-Mod-я":()=>this.editor.commands.redo()}}}),zA=NA,BA=PA,VA=RA,HA=K.create({name:`textAlign`,addOptions(){return{types:[],alignments:[`left`,`center`,`right`,`justify`],defaultAlignment:null}},addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:e=>{let t=e.style.textAlign;return this.options.alignments.includes(t)?t:this.options.defaultAlignment},renderHTML:e=>e.textAlign?{style:`text-align: ${e.textAlign}`}:{}}}}]},addCommands(){return{setTextAlign:e=>({commands:t})=>this.options.alignments.includes(e)?this.options.types.map(n=>t.updateAttributes(n,{textAlign:e})).some(e=>e):!1,unsetTextAlign:()=>({commands:e})=>this.options.types.map(t=>e.resetAttributes(t,`textAlign`)).some(e=>e),toggleTextAlign:e=>({editor:t,commands:n})=>this.options.alignments.includes(e)?t.isActive({textAlign:e})?n.unsetTextAlign():n.setTextAlign(e):!1}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign(`left`),"Mod-Shift-e":()=>this.editor.commands.setTextAlign(`center`),"Mod-Shift-r":()=>this.editor.commands.setTextAlign(`right`),"Mod-Shift-j":()=>this.editor.commands.setTextAlign(`justify`)}}}),UA=({trailingCursorText:e=`​`,variableTagNodeView:t,includeVariableTag:n=!0,surface:r=`editor`}={})=>{let i=[lE,zA,BA,HD,Yk,FD,SE,TE,OE,NE,IE,LE,RE,zE,YE,uE,ZE,AD,PD,ID.configure({levels:[1,2,3,4,5,6]}),LD,RD,zD,Gk.configure({resizable:!0}),Jk,qk,Kk,VA,oE(),HA.configure({types:[`heading`,`paragraph`],defaultAlignment:`start`})];return n&&i.push(cE({trailingCursorText:e,addNodeView:t})),i.push(...mE(r)),i},WA={fontFamilies:[{label:`Default font`,value:null},{label:`Arial`,value:`Arial, sans-serif`},{label:`Georgia`,value:`Georgia, serif`},{label:`Times New Roman`,value:`"Times New Roman", serif`},{label:`Courier New`,value:`"Courier New", monospace`}],fontSizes:[{label:`Default`,value:null},...[8,9,10,11,12,14,16,18,24,30,36,48,60,72,96].map(e=>({label:String(e),value:`${e}px`}))],textColors:[{label:`Default`,value:null},{label:`Black`,value:`#1f2937`},{label:`Gray`,value:`#6b7280`},{label:`Red`,value:`#dc2626`},{label:`Orange`,value:`#ea580c`},{label:`Yellow`,value:`#ca8a04`},{label:`Green`,value:`#16a34a`},{label:`Blue`,value:`#2563eb`},{label:`Purple`,value:`#9333ea`},{label:`Pink`,value:`#db2777`}],backgroundColors:[{label:`None`,value:null},{label:`Gray`,value:`#f3f4f6`},{label:`Red`,value:`#fee2e2`},{label:`Orange`,value:`#ffedd5`},{label:`Yellow`,value:`#fef9c3`},{label:`Green`,value:`#dcfce7`},{label:`Blue`,value:`#dbeafe`},{label:`Purple`,value:`#f3e8ff`},{label:`Pink`,value:`#fce7f3`}],lineHeights:[{label:`Default`,value:null},{label:`Single (1.0)`,value:`1`},{label:`1.15`,value:`1.15`},{label:`1.5`,value:`1.5`},{label:`Double (2.0)`,value:`2`}]};function GA(e){return{...WA,...e}}var KA=e=>!!e&&typeof e==`object`,qA=(e,t)=>!t||!e.length||e[e.length-1].type!==`variableTag`?e:[...e,{type:`text`,text:t}],JA=(e,{trailingCursorText:t}={})=>Array.isArray(e)?qA(e.flatMap(e=>{if(!e)return[];if(Array.isArray(e))return JA(e,{trailingCursorText:t});if(typeof e!=`object`)return[];if(!(`type`in e))return KA(e)&&Array.isArray(e.content)?JA(e.content,{trailingCursorText:t}):[];if(KA(e)&&e.type===`text`&&typeof e.text==`string`){let t=e.text.replace(/[\u200B\u2060]/g,``);return t?[{...e,text:t}]:[]}if(KA(e)&&Array.isArray(e.content)){let n=JA(e.content,{trailingCursorText:t});return[{...e,content:n}]}return KA(e)?[e]:[]}),t):[],YA=(e,t={})=>{if(!e)return null;if(Array.isArray(e)){let n=JA(e,t);return n.length?{type:`doc`,content:n}:null}if(KA(e)){if(e.type===`doc`&&Array.isArray(e.content)){let n=JA(e.content,t);return n.length?{...e,content:n}:null}if(Array.isArray(e.content)){let n=JA(e.content,t);return n.length?{type:`doc`,content:n}:null}}if(typeof e==`string`)try{let n=JSON.parse(e);if(Array.isArray(n)){let e=JA(n,t);return e.length?{type:`doc`,content:e}:null}if(KA(n)){if(n.type===`doc`&&Array.isArray(n.content)){let e=JA(n.content,t);return e.length?{...n,content:e}:null}if(Array.isArray(n.content)){let e=JA(n.content,t);return e.length?{type:`doc`,content:e}:null}}}catch{return null}return null},XA=e=>{let t=YA(e);if(!t)return``;let n=e=>{if(!e||typeof e!=`object`)return!1;let t=e;return t.type===`text`&&typeof t.text==`string`&&t.text===``?!0:Array.isArray(t.content)?t.content.some(e=>n(e)):!1};return n(t)?`This field contains invalid rich-text content. The editor could not fully parse the stored document, so some content may not be shown until it is repaired and saved again.`:``};function ZA(e){return Array.isArray(e)&&e.length>0}function QA(e){if(!e)return[];if(ZA(e))return e;let t=[];return e.linkToEntry&&t.push({...e.linkToEntry,optionTitle:`Link to an entry`}),e.linkToAsset&&t.push({...e.linkToAsset,optionTitle:`Link to an asset`}),e.linkToCategory&&t.push({...e.linkToCategory,optionTitle:`Link to a category`}),t}function $A(e){if(e&&!ZA(e))return e.elementSiteId}function ej(e,t){return`${e.url||``}#${t}:${e.id}@${e.siteId}`}function tj(e,t){return`${e}.${t}`}function nj({config:e,elementSiteId:t,linkSelectorStorageKeyPrefix:n,getSelectedText:r,onSelect:i,host:a}){if(!n)throw Error(`Craft element links require "linkSelectorStorageKeyPrefix".`);a.openElementSelector(e.elementType,{storageKey:tj(n,e.elementType),sources:e.sources,criteria:e.criteria,defaultSiteId:t,autoFocusSearchBox:!1,onSelect:t=>{if(!t?.length)return;let[n]=t;i({url:ej(n,e.refHandle),text:r()||n.label||``})},closeOtherModals:!1})}function rj(e,t){let n={href:e};return t&&(n.target=`_blank`),n}function ij(e){let{from:t,to:n}=e.state.selection;return e.state.doc.textBetween(t,n,` `)}function aj(e){return e.isActive(`link`)&&e.getAttributes(`link`).target===`_blank`}function oj(e){let{href:t}=e.getAttributes(`link`),{state:n}=e,r=n.schema.marks.link,i=Bb(n.selection.$from,r),a=i?.from??n.selection.from,o=i?.to??n.selection.to,s=e.state.doc.textBetween(a,o,` `);return{from:a,to:o,href:t??``,text:s,openInNewTab:aj(e)}}function sj(e,t){let{url:n,text:r,openInNewTab:i,from:a,to:o}=t,s=e.chain().focus(),c=rj(n,i),l={type:`text`,text:r.trim()||n,marks:[{type:`link`,attrs:c}]};if(typeof a==`number`&&typeof o==`number`&&a!==o){s.insertContentAt({from:a,to:o},[l]).run();return}let{from:u,to:d}=e.state.selection;if(e.state.doc.textBetween(u,d,` `)){s.extendMarkRange(`link`).setLink(c).run();return}s.insertContent([l]).run()}function cj(e){e.chain().focus().extendMarkRange(`link`).unsetLink().run()}var lj=[1,2,3,4,5,6];function uj(e){return gE(e)||lj.some(t=>e===`h${t}`)?!0:`bold.italic.underline.strikethrough.subscript.superscript.small-caps.font-family.font-size.text-color.line-height.unordered-list.ordered-list.blockquote.highlight.code.code-block.hr.line-break.align-left.align-center.align-right.align-justify.clear-format.undo.redo.link.table.variableTag`.split(`.`).includes(e)}function dj(e,t){let n=hE(t);if(n)return n.isActive?.(e)??!1;if(!uj(t))return!1;let r=t.match(/^h([1-6])$/);if(r){let t=Number(r[1]);return e.isActive(`heading`,{level:t})}switch(t){case`bold`:return e.isActive(`bold`);case`italic`:return e.isActive(`italic`);case`underline`:return e.isActive(`underline`);case`strikethrough`:return e.isActive(`strike`);case`subscript`:return e.isActive(`subscript`);case`superscript`:return e.isActive(`superscript`);case`small-caps`:return e.isActive(`textStyle`,{fontVariantCaps:`small-caps`});case`unordered-list`:return e.isActive(`bulletList`);case`ordered-list`:return e.isActive(`orderedList`);case`blockquote`:return e.isActive(`blockquote`);case`highlight`:return e.isActive(`highlight`);case`code`:return e.isActive(`code`);case`code-block`:return e.isActive(`codeBlock`);case`align-left`:return e.isActive({textAlign:`left`});case`align-center`:return e.isActive({textAlign:`center`});case`align-right`:return e.isActive({textAlign:`right`});case`align-justify`:return e.isActive({textAlign:`justify`});case`link`:return e.isActive(`link`);case`variableTag`:return e.isActive(`variableTag`);default:return!1}}function fj(e,t,n={}){let r=hE(t);if(r)return r.run(e)!==!1;if(!uj(t))return!1;let i=e.chain().focus(),a=t.match(/^h([1-6])$/);if(a){let e=Number(a[1]);return i.toggleHeading({level:e}).run()}switch(t){case`bold`:return i.toggleBold().run();case`italic`:return i.toggleItalic().run();case`underline`:return i.toggleUnderline().run();case`strikethrough`:return i.toggleStrike().run();case`subscript`:return i.toggleSubscript().run();case`superscript`:return i.toggleSuperscript().run();case`small-caps`:return i.toggleSmallCaps().run();case`unordered-list`:return i.toggleBulletList().run();case`ordered-list`:return i.toggleOrderedList().run();case`blockquote`:return i.toggleBlockquote().run();case`highlight`:return i.toggleHighlight().run();case`code`:return i.toggleCode().run();case`code-block`:return i.toggleCodeBlock().run();case`hr`:return i.setHorizontalRule().run();case`line-break`:return i.setHardBreak().run();case`align-left`:return i.setTextAlign(`left`).run();case`align-center`:return i.setTextAlign(`center`).run();case`align-right`:return i.setTextAlign(`right`).run();case`align-justify`:return i.setTextAlign(`justify`).run();case`clear-format`:return i.clearNodes().unsetAllMarks().run();case`undo`:return i.undo().run();case`redo`:return i.redo().run();case`table`:{let e=n.tableOptions??{};return i.insertTable({rows:e.rows??3,cols:e.cols??3,withHeaderRow:e.withHeaderRow??!0}).run()}case`link`:case`variableTag`:return!1;default:return!1}}var pj=[1,2,3,4],mj={formatting:`paragraph`,headings:`heading`,lists:`unordered-list`,align:`align-left`},hj=new Set([`formatting`,`headings`,`lists`,`align`]);function gj(e){return e===`formatting`}function _j(e){return e===`headings`}function vj(e){return e.preset?mj[e.preset]:Sj(e)[0]??`bold`}var yj=new Set([`|`,`separator`]);function bj(e){return yj.has(e)}function xj(e){if(e.items?.length)return e.items.filter(e=>typeof e==`string`&&uj(e));switch(e.preset){case`formatting`:return[...(e.headingLevels??pj).map(e=>`h${e}`),`blockquote`,`code-block`];case`headings`:return(e.headingLevels??pj).map(e=>`h${e}`);case`lists`:return[`unordered-list`,`ordered-list`];case`align`:return[`align-left`,`align-center`,`align-right`,`align-justify`];default:return[]}}function Sj(e){return xj(e)}function Cj(e){let t=[];return e.forEach(e=>{if(e.type===`button`){t.push(e.name);return}e.type===`group`&&t.push(...Sj(e.group))}),t}function wj(e,t){return Cj(e).includes(t)}function Tj(e){if(typeof e==`string`){let t=e.trim();return t?bj(t)?t:t===`paragraph`?`paragraph`:jj(t):null}if(!e||typeof e!=`object`)return null;let t=e;return t.type===`separator`?{type:`separator`}:t.type===`item`&&typeof t.name==`string`?t.name===`paragraph`?`paragraph`:jj(t.name):null}function Ej(e){return e.map(e=>Tj(e)).filter(e=>e!==null)}function Dj(e){return e===`|`||e===`separator`||typeof e==`object`&&e.type===`separator`}function Oj(e){return!Dj(e)}function kj(e){return e.flatMap(e=>Dj(e)?[{type:`separator`}]:Oj(e)?[{type:`item`,name:e}]:[])}function Aj(e){return Uj(e).filter(e=>e.type===`item`).map(e=>e.name)}function jj(e){return uj(e)?e:null}function Mj(e){if(!Array.isArray(e))return;let t=e.map(e=>Number(e)).filter(e=>[1,2,3,4,5,6].includes(e));return t.length>0?t:void 0}function Nj(e){let t=typeof e.group==`object`&&e.group!==null?e.group:e,n=typeof t.preset==`string`?t.preset:void 0,r=typeof t.label==`string`?t.label:void 0,i=typeof t.icon==`string`?t.icon:void 0,a=i?jj(i)??void 0:void 0,o=Mj(t.headingLevels),s=Array.isArray(t.items)?Ej(t.items):void 0;return!n&&!s?.length||n&&!hj.has(n)?null:{type:`group`,group:{...r?{label:r}:{},...a?{icon:a}:{},...n?{preset:n}:{},...s?.length?{items:s}:{},...o?{headingLevels:o}:{}}}}function Pj(e){if(typeof e==`string`){let t=e.trim();if(!t)return null;if(bj(t))return{type:`separator`};let n=jj(t);return n?{type:`button`,name:n}:null}if(!e||typeof e!=`object`)return null;let t=e;if(t.type===`separator`)return{type:`separator`};if(t.type===`button`&&typeof t.name==`string`){let e=jj(t.name);return e?{type:`button`,name:e}:null}if(t.type===`group`||t.preset||t.items||t.group)return Nj(t);if(typeof t.button==`string`){let e=jj(t.button);return e?{type:`button`,name:e}:null}return null}function Fj(e){return e.map(e=>Pj(e)).filter(e=>e!==null)}function Ij(e){if(e==null||e===``)return[{type:`button`,name:`bold`},{type:`button`,name:`italic`}];if(Array.isArray(e)){let t=Fj(e);return t.length>0?t:[{type:`button`,name:`bold`},{type:`button`,name:`italic`}]}if(typeof e==`string`){let t=e.trim();if(!t)return[{type:`button`,name:`bold`},{type:`button`,name:`italic`}];if(t.startsWith(`[`))try{let e=JSON.parse(t);return Ij(Array.isArray(e)?e:null)}catch{return Ij(null)}return Ij(t.split(`,`).map(e=>e.trim()).filter(Boolean))}return Ij(null)}function Lj(e,t,n={}){return t===`paragraph`?e.chain().focus().setParagraph().run():fj(e,t,n)}function Rj(e,t){return t===`paragraph`?e.isActive(`paragraph`)&&!e.isActive(`heading`):dj(e,t)}function zj(e){for(let t of[1,2,3,4,5,6])if(e.isActive(`heading`,{level:t}))return t;return null}function Bj(e,t){let n=t.icon??vj(t),r=Aj(t);if(_j(t.preset)){let t=zj(e);if(t){let e=`h${t}`;return{activeName:e,label:`H${t}`,isActive:!0,icon:e}}return{activeName:null,label:``,isActive:!1,icon:`heading`}}if(gj(t.preset)){let t=zj(e);if(t){let e=`h${t}`;return{activeName:e,label:`H${t}`,isActive:!0,icon:e}}return Rj(e,`blockquote`)?{activeName:`blockquote`,label:``,isActive:!0,icon:`blockquote`}:Rj(e,`code-block`)?{activeName:`code-block`,label:``,isActive:!0,icon:`code-block`}:{activeName:`paragraph`,label:`Text`,isActive:Rj(e,`paragraph`),icon:`paragraph`}}let i=r.find(t=>Rj(e,t))??null;if(i){let e=i===`paragraph`?`paragraph`:uj(i)?i:n;return{activeName:i===`paragraph`?`paragraph`:i,label:i===`paragraph`?`Text`:t.label??i,isActive:!0,icon:e}}return{activeName:null,label:t.label??``,isActive:!1,icon:n}}function Vj(e){return e.headingLevels??pj}function Hj(e){return[{type:`item`,name:`paragraph`},{type:`separator`},...Vj(e).map(e=>({type:`item`,name:`h${e}`})),{type:`separator`},{type:`item`,name:`blockquote`},{type:`item`,name:`code-block`}]}function Uj(e){return e.items?.length?kj(e.items):gj(e.preset)?Hj(e):Sj(e).map(e=>({type:`item`,name:e}))}function Wj(e){return JSON.stringify(JA(e))}function Gj(e){return e==null?`[]`:typeof e==`string`?e:Array.isArray(e)?JSON.stringify(e):`[]`}function Kj(e){if(e==null||e===``)return[];if(Array.isArray(e))return e;if(typeof e!=`string`)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}var qj=class{constructor(){this.editor=null,this.lastEmitted=null,this.suppressUpdateEmission=!1}mount({element:e,extensions:t,content:n,editable:r,trailingCursorText:i=`⁠`,minHeight:a,onUpdate:o}){let s=YA(n,{trailingCursorText:i});this.editor=new AC({element:e,extensions:t??UA({trailingCursorText:i}),content:s,editable:r,onUpdate:({editor:e})=>{let t=JA(e.getJSON().content),n=JSON.stringify(t);this.lastEmitted=n,!this.suppressUpdateEmission&&o?.(t)}}),a&&(this.editor.view.dom.style.minHeight=a)}setContent(e,t={}){if(!this.editor)return;let{trailingCursorText:n=`⁠`,respectFocus:r=!0}=t;if(r&&this.editor.isFocused)return;let i=YA(e,{trailingCursorText:n}),a=JSON.stringify(i?.content??[]);if(a!==JSON.stringify(this.editor.getJSON().content??[])&&a!==this.lastEmitted){this.suppressUpdateEmission=!0;try{this.editor.commands.setContent(i??{type:`doc`,content:[]})}finally{this.suppressUpdateEmission=!1}}}destroy(){this.editor?.destroy(),this.editor=null,this.lastEmitted=null,this.suppressUpdateEmission=!1}};function Jj(){return{openElementSelector:(e,t)=>{let n=window.Craft?.createElementSelectorModal;if(!n)throw Error(`Craft element selector is not available in this environment.`);n(e,t)}}}function Yj(e){if(e)try{return JSON.parse(e)}catch{return}}function Xj(e,t){return Array.isArray(e)||typeof e==`string`&&e.trim()?Ij(e):Ij(Array.isArray(t)?t.join(`,`):t??`bold,italic`)}var Zj=k(A.chevronDown),Qj={bold:k(A.bold),italic:k(A.italic),underline:k(A.underline),strikethrough:k(A.strikethrough),subscript:k(A.subscript),superscript:k(A.superscript),"small-caps":k(A.smallCaps),code:k(A.bracketsCurly),"code-block":k(A.code),highlight:k(A.highlighter),h1:k(A.h1),h2:k(A.h2),h3:k(A.h3),h4:k(A.h4),h5:k(A.h5),h6:k(A.h6),heading:k(A.heading),paragraph:k(A.paragraph),"unordered-list":k(A.listUl),"ordered-list":k(A.listOl),blockquote:k(A.quoteRight),"align-left":k(A.alignLeft),"align-center":k(A.alignCenter),"align-right":k(A.alignRight),"align-justify":k(A.alignJustify),"clear-format":k(A.textSlash),hr:k(A.minus),"line-break":k(A.fileDashedLine),link:k(A.link),table:k(A.table),undo:k(A.arrowRotateLeft),redo:k(A.arrowRotateRight)},$j={bold:`Bold`,italic:`Italic`,underline:`Underline`,strikethrough:`Strikethrough`,subscript:`Subscript`,superscript:`Superscript`,"small-caps":`Small caps`,"font-family":`Font family`,"font-size":`Font size`,"text-color":`Text and background color`,"line-height":`Line height`,code:`Inline code`,"code-block":`Code block`,highlight:`Highlight`,h1:`Heading 1`,h2:`Heading 2`,h3:`Heading 3`,h4:`Heading 4`,h5:`Heading 5`,h6:`Heading 6`,paragraph:`Paragraph`,"unordered-list":`Bullet list`,"ordered-list":`Numbered list`,blockquote:`Blockquote`,"align-left":`Align left`,"align-center":`Align center`,"align-right":`Align right`,"align-justify":`Justify`,"clear-format":`Clear format`,hr:`Horizontal rule`,"line-break":`Line break`,link:`Link`,table:`Table`,undo:`Undo`,redo:`Redo`};function eM(e){return $j[e]??hE(e)?.label??e}function tM(e){let t=hE(e)?.icon;return Qj[e]??(t?k(t):void 0)}function nM(e){let t=tM(e);if(!t)return null;let n=document.createElement(`template`);n.innerHTML=t.trim();let r=n.content.firstElementChild;return r instanceof SVGSVGElement?(r.setAttribute(`slot`,`prefix`),r.setAttribute(`aria-hidden`,`true`),r.setAttribute(`width`,`12`),r.setAttribute(`height`,`12`),r.classList.add(`pk-dropdown-item__prefix-icon`),r):null}var rM=c`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
        }

        .shell {
            overflow: hidden;
            border: var(--pk-input-border);
            border-radius: var(--pk-radius-md);
            background: #fff;
        }

        :host([invalid]) .shell,
        :host(:state(user-invalid)) .shell {
            border-color: var(--pk-color-rose-600);
        }

        .toolbar {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
            padding: 0.25rem 0.5rem;
            border-bottom: 1px solid rgba(96, 125, 159, 0.4);
            background: #fff;
            box-shadow: 0 2px 3px rgba(49, 49, 93, 0.07);
        }

        .toolbar-item {
            display: inline-flex;
        }

        .toolbar-item pk-tooltip {
            display: contents;
        }

        .toolbar-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: transparent;
            color: #1c2e36;
            cursor: pointer;
        }

        .toolbar-btn:hover:not(:disabled) {
            background: rgb(241, 245, 249);
        }

        .toolbar-btn[data-state='active'] {
            background: rgb(226, 232, 240);
        }

        .toolbar-btn:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .toolbar-btn svg {
            display: block;
            width: 1rem;
            height: 1rem;
            pointer-events: none;
        }

        .toolbar-btn--menu {
            width: auto;
            min-width: 2rem;
            gap: 0.125rem;
            padding: 0 0.375rem;
        }

        .toolbar-btn__trigger-label {
            font-size: 0.625rem;
            font-weight: 700;
            line-height: 1;
            letter-spacing: 0.02em;
            text-transform: uppercase;
        }

        .toolbar-btn__chevron {
            display: inline-flex;
            flex-shrink: 0;
            opacity: 0.7;
        }

        .toolbar-btn__chevron svg {
            width: 0.5rem;
            height: 0.5rem;
        }

        .toolbar-separator {
            align-self: center;
            flex-shrink: 0;
            width: 1px;
            height: 1.25rem;
            margin: 0 0.125rem;
            background: rgba(96, 125, 159, 0.35);
        }

        .toolbar-btn__label {
            font-size: 0.625rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 0.02em;
        }

        .toolbar-btn--text-style {
            max-width: 9rem;
            padding-inline: 0.5rem;
        }

        .toolbar-btn__text-style-value {
            overflow: hidden;
            font-size: var(--pk-font-size-xs);
            line-height: 1;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .toolbar-btn--color .toolbar-btn__text-style-value {
            min-width: 1rem;
            border-bottom: 2px solid var(--text-style-trigger-color, currentColor);
            color: var(--text-style-trigger-color, currentColor);
            font-weight: 700;
            text-align: center;
        }

        pk-dropdown-menu.text-style-palette::part(panel) {
            display: grid;
            grid-template-columns: repeat(5, 2rem);
            gap: 0.625rem 0.75rem;
            width: max-content;
            min-width: 0;
            padding: 1rem;
        }

        .text-style-palette__label {
            grid-column: 1 / -1;
            color: var(--pk-color-gray-900);
        }

        .text-style-palette__label::part(label) {
            padding: 0 0 0.125rem;
            font-size: var(--pk-font-size-base);
            font-weight: 600;
        }

        .text-style-palette__label--highlight {
            margin-top: 0.375rem;
        }

        .text-style-palette__option {
            width: 2rem;
            height: 2rem;
            --pk-dropdown-item-gap: 0;
            --pk-dropdown-item-icon-size: 1.625rem;
        }

        .text-style-palette__option::part(item) {
            justify-content: center;
            width: 2rem;
            height: 2rem;
            min-height: 0;
            padding: 0;
            border-radius: 50%;
            background: transparent;
        }

        .text-style-palette__option:hover::part(item),
        .text-style-palette__option:focus-within::part(item),
        .text-style-palette__option[data-highlighted]::part(item),
        .text-style-palette__option[checked]::part(item) {
            background: transparent;
        }

        .text-style-palette__option::part(prefix) {
            width: 1.625rem;
            height: 1.625rem;
        }

        .text-style-palette__option::part(label) {
            position: absolute;
        }

        .text-style-palette__option::part(check) {
            display: none;
        }

        .text-style-palette__swatch {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.625rem;
            height: 1.625rem;
            box-sizing: border-box;
            border: 1px solid rgba(15, 23, 42, 0.16);
            border-radius: 50%;
        }

        /* Keep the state treatment concentric with the slotted swatch. The
           dropdown item's shadow button is wider than its prefix in some hosts. */
        .text-style-palette__option:hover .text-style-palette__swatch,
        .text-style-palette__option:focus-within .text-style-palette__swatch,
        .text-style-palette__option[data-highlighted] .text-style-palette__swatch,
        .text-style-palette__option[checked] .text-style-palette__swatch {
            box-shadow: 0 0 0 0.25rem var(--pk-color-slate-100);
        }

        .text-style-palette__swatch--text {
            border-color: var(--text-style-swatch, rgba(15, 23, 42, 0.35));
            color: var(--text-style-swatch, #1f2937);
            font-size: var(--pk-font-size-base);
            font-weight: 500;
            line-height: 1;
        }

        .text-style-palette__swatch--highlight {
            background: var(--text-style-swatch, #fff);
        }

        .text-style-palette__accessible-label {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .text-style-palette pk-tooltip {
            display: contents;
        }

        /* Full toolbar replace (slot=toolbar on host when hasCustomToolbar). */
        .toolbar ::slotted([slot='toolbar']) {
            display: contents;
        }

        /* Append lane inside the stock toolbar — one flex item per slotted root (same gap). */
        .toolbar ::slotted([slot='toolbar-end']) {
            display: inline-flex;
            align-items: center;
        }

        .editor-mount {
            position: relative;
        }

        .content-error {
            display: flex;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-bottom: 1px solid var(--pk-color-rose-200);
            background: var(--pk-color-rose-50);
            color: var(--pk-color-rose-800);
            font-size: var(--pk-font-size-sm);
        }

        .mirror-input {
            display: none;
        }

        /* No trigger slot — collapse the host so it does not reserve shell space.
           Toolbar refresh while open is still gated by linkDialogBusy / open. */
        .link-dialog {
            display: contents;
        }

        .link-dialog__fields {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .link-bubble {
            position: absolute;
            z-index: 250;
            display: flex;
            align-items: center;
            gap: 0;
            width: max-content;
            max-width: calc(100% - 1rem);
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: #1c2e36;
            color: #fff;
            font-size: 12px;
            line-height: 1.5;
            overflow: visible;
            pointer-events: auto;
            white-space: nowrap;
        }

        .link-bubble__arrow {
            position: absolute;
            left: 50%;
            bottom: -0.25rem;
            width: 0.5rem;
            height: 0.5rem;
            background: #1c2e36;
            transform: translateX(-50%) rotate(45deg);
            pointer-events: none;
        }

        .link-bubble__url,
        .link-bubble__action {
            box-sizing: border-box;
            padding: 6px 8px;
            font-size: 12px;
            line-height: 1.5;
        }

        .link-bubble__url {
            display: inline-flex;
            align-items: center;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .link-bubble__divider {
            flex-shrink: 0;
            align-self: center;
            width: 1px;
            height: 12px;
            background: #616d73;
        }

        .link-bubble__action {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: #fff;
            font-family: inherit;
            font-weight: inherit;
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            min-height: 0;
            transition: color 0.15s ease;
        }

        .link-bubble__action:hover {
            color: rgb(255 255 255 / 0.7);
        }
    }
`,$=class extends mr{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.linkUrlInputId=So(`pk-tiptap-link-url`),this.linkTextInputId=So(`pk-tiptap-link-text`),this.host=new qj,this._value=null,this.buttons=`bold,italic`,this.toolbar=null,this.textStyleOptions=null,this.linkOptions=null,this.rows=4,this.placeholder=``,this.readonly=!1,this.invalid=!1,this.variableTagConfigure=null,this.invalidContentMessage=``,this.toolbarTooltips=!0,this.linkDialogBusy=!1,this.linkDialogSeed={},this.linkDialogTitle=`Insert Link`,this.linkDialogSubmitLabel=`Insert`,this.linkDialogMounted=!1,this.linkBubbleVisible=!1,this.linkBubbleHref=``,this.linkBubbleTop=0,this.linkBubbleLeft=0,this.hasCustomToolbar=!1,this.linkButtonId=So(`pk-tiptap-link-btn`),this.toolbarButtonIds=new Map,this.toolbarGroupIds=new Map,this.selectionListenerAttached=!1,this.defaultValue=`[]`,this.handleLinkBubbleEdit=e=>{e.preventDefault();let t=this.host.editor;if(!t)return;let n=oj(t);this.linkBubbleVisible=!1,this.openLinkDialog({url:n.href,text:n.text,openInNewTab:n.openInNewTab,from:n.from,to:n.to})},this.handleLinkBubbleUnlink=e=>{e.preventDefault();let t=this.host.editor;t&&(cj(t),this.linkBubbleVisible=!1)},this.handleLinkDialogAfterHide=()=>{this.linkDialogBusy=!1,queueMicrotask(()=>{this.isConnected&&!this.linkDialog?.open&&this.requestUpdate()})},this.handleLinkUrlInput=()=>{this.updateLinkDialogSubmitState()},this.handleLinkDialogKeyDown=e=>{if(e.key!==`Enter`)return;let t=e.composedPath();t.some(e=>e instanceof HTMLElement&&e.localName===`pk-checkbox`)||t.some(e=>e instanceof HTMLElement&&e.localName===`pk-button`)||t.some(e=>e instanceof HTMLButtonElement)||(e.preventDefault(),e.stopPropagation(),this.submitLinkDialog())},this.handleLinkDialogSubmit=()=>{this.submitLinkDialog()}}static{this.styles=[bo,rM,Id]}static get validators(){return[...super.validators,qu()]}get value(){return this.valueHasChanged?this._value??`[]`:this._value??this.defaultValue??`[]`}set value(e){let t=Gj(e);this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get editor(){return this.host.editor}get toolbarNodes(){let e=Array.isArray(this.buttons)?this.buttons.join(`,`):this.buttons;return Xj(this.toolbar,e).filter(e=>e.type!==`button`||e.name!==`variableTag`)}get buttonNames(){return this.toolbarNodes.filter(e=>e.type===`button`).map(e=>e.name)}toolbarHasLink(){return wj(this.toolbarNodes,`link`)}resolveLinkOptions(){return Yj(this.linkOptions)}get contentError(){return this.resolveContentError()}syncFormValue(){this.setValue(this.value||`[]`),this.input&&(this.input.value=this.value||`[]`)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null,this.syncEditorContent()}restoreFormState(e){typeof e==`string`&&(this.value=e,this.syncEditorContent())}connectedCallback(){super.connectedCallback(),this.hasCustomToolbar=!!this.querySelector(`[slot="toolbar"]`)}disconnectedCallback(){this.linkDialog?.forceOverlayReset(),this.linkDialogBusy=!1,this.host.destroy(),this.selectionListenerAttached=!1,super.disconnectedCallback()}updated(e){e.has(`value`)&&!e.has(`defaultValue`)&&this.syncEditorContent(),e.has(`defaultValue`)&&!this.valueHasChanged&&this.syncEditorContent(),(e.has(`disabled`)||e.has(`readonly`))&&this.host.editor?.setEditable(!this.disabled&&!this.readonly),super.updated(e)}firstUpdated(){queueMicrotask(()=>{this.mountEditor(),this.syncFormValue()})}resolveContentError(){let e=XA(this.value);return e?this.invalidContentMessage||e:``}mountEditor(){let e=this.contentError?null:Kj(this.value),t=`${Math.max(1,Number(this.rows||0))*24+32}px`;this.host.mount({element:this.editorMount,extensions:UA({trailingCursorText:`⁠`,variableTagNodeView:Pd()}),content:e,editable:!this.disabled&&!this.readonly&&!this.contentError,trailingCursorText:`⁠`,minHeight:t,onUpdate:e=>{let t=Wj(e);this.value=t,this.input&&(this.input.value=t),this.syncFormValue(),this.emitValueChange(t)}}),queueMicrotask(()=>{this.attachSelectionListeners(),this.requestUpdate()})}attachSelectionListeners(){let e=this.host.editor;if(!e||this.selectionListenerAttached)return;let t=()=>{if(this.linkDialogBusy||this.linkDialog?.open){this.linkBubbleVisible=!1;return}this.updateLinkBubble(),queueMicrotask(()=>{this.isConnected&&!this.linkDialogBusy&&!this.linkDialog?.open&&this.requestUpdate()})};e.on(`selectionUpdate`,t),e.on(`transaction`,t),e.on(`focus`,t),e.on(`blur`,()=>{this.linkBubbleVisible=!1,this.requestUpdate()}),this.selectionListenerAttached=!0}updateLinkBubble(){let e=this.host.editor;if(!e||this.disabled||this.readonly||this.linkDialogBusy||this.linkDialog?.open||!e.isFocused||!e.isActive(`link`)){this.linkBubbleVisible=!1;return}let t=e.state.schema.marks.link,n=Bb(e.state.selection.$from,t);if(!n){this.linkBubbleVisible=!1;return}let r=ES(e.view,n.from,n.to),i=this.editorMount.getBoundingClientRect();this.linkBubbleHref=String(e.getAttributes(`link`).href??``),this.linkBubbleTop=r.top-i.top-8,this.linkBubbleLeft=r.left-i.left+r.width/2,this.linkBubbleVisible=!0}renderLinkBubble(){return S`
            <div
                class="link-bubble"
                role="toolbar"
                aria-label="Link actions"
                tabindex="0"
                style=${`top:${this.linkBubbleTop}px;left:${this.linkBubbleLeft}px;transform:translate(-50%, -100%);`}
            >
                <span class="link-bubble__arrow" aria-hidden="true"></span>
                <span class="link-bubble__url">${this.linkBubbleHref}</span>
                <span class="link-bubble__divider" aria-hidden="true"></span>
                <button
                    type="button"
                    class="link-bubble__action"
                    @mousedown=${e=>e.preventDefault()}
                    @click=${this.handleLinkBubbleEdit}
                >Edit</button>
                <span class="link-bubble__divider" aria-hidden="true"></span>
                <button
                    type="button"
                    class="link-bubble__action"
                    @mousedown=${e=>e.preventDefault()}
                    @click=${this.handleLinkBubbleUnlink}
                >Unlink</button>
            </div>
        `}syncEditorContent(){let e=this.contentError?null:Kj(this.value);this.host.setContent(e,{trailingCursorText:`⁠`}),this.input&&(this.input.value=this.value||`[]`)}emitValueChange(e){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleToolbarCommand(e){let t=this.host.editor;t&&Lj(t,e)}openLinkMenu(){let e=this.host.editor;if(!e)return;let t=ij(e),{from:n,to:r}=e.state.selection,i=this.shadowRoot?.querySelector(`pk-dropdown-menu[for="${this.linkButtonId}"]`);(async()=>{await i?.whenClosed(),this.openLinkDialog(n===r?void 0:{text:t,from:n,to:r})})()}openLinkDialog(e){let t=this.host.editor,n=e?.url??``;this.linkDialogBusy=!0,this.linkBubbleVisible=!1,this.linkDialogSeed={url:n,text:e?.text??``,openInNewTab:e?.openInNewTab??(t?aj(t):!1),from:e?.from,to:e?.to},this.linkDialogTitle=n.trim()?`Update Link`:`Insert Link`,this.linkDialogSubmitLabel=n.trim()?`Update`:`Insert`,this.linkDialogMounted||=!0,queueMicrotask(async()=>{await this.updateComplete,await this.linkDialog?.updateComplete,this.syncLinkDialogFields(),await this.linkDialog?.show()})}closeLinkDialog(){this.linkDialog?.hide(`close-button`)}syncLinkDialogFields(){let e=this.linkDialogSeed;this.linkUrlInput&&(this.linkUrlInput.value=e.url??``),this.linkTextInput&&(this.linkTextInput.value=e.text??``),this.linkNewTabCheckbox&&(this.linkNewTabCheckbox.checked=!!e.openInNewTab),this.updateLinkDialogSubmitState()}updateLinkDialogSubmitState(){let e=!!this.linkUrlInput?.value.trim();this.linkSubmitButton&&(this.linkSubmitButton.disabled=!e)}submitLinkDialog(){let e=this.host.editor,t=this.linkUrlInput?.value.trim()??``;e&&t&&(sj(e,{url:t,text:this.linkTextInput?.value??``,openInNewTab:!!this.linkNewTabCheckbox?.checked,from:this.linkDialogSeed.from,to:this.linkDialogSeed.to}),this.closeLinkDialog())}isLinkActive(){let e=this.host.editor;return e?dj(e,`link`):!1}renderLinkDialog(){return S`
            <pk-dialog
                class="link-dialog"
                size="wide"
                label=${this.linkDialogTitle}
                @pk-after-hide=${this.handleLinkDialogAfterHide}
                @keydown=${this.handleLinkDialogKeyDown}
            >
                <div class="link-dialog__fields">
                    <pk-field label="URL" required .for=${this.linkUrlInputId}>
                        <pk-input
                            id=${this.linkUrlInputId}
                            class="link-dialog__url-input"
                            type="url"
                            placeholder="https://"
                            autofocus
                            @input=${this.handleLinkUrlInput}
                        ></pk-input>
                    </pk-field>
                    <pk-field label="Text" .for=${this.linkTextInputId}>
                        <pk-input
                            id=${this.linkTextInputId}
                            class="link-dialog__text-input"
                            type="text"
                        ></pk-input>
                    </pk-field>
                    <pk-checkbox>Open link in new tab</pk-checkbox>
                </div>
                <pk-button slot="footer" data-dialog-close>Cancel</pk-button>
                <pk-button
                    slot="footer"
                    class="link-dialog__submit"
                    variant="primary"
                    disabled
                    @click=${this.handleLinkDialogSubmit}
                >
                    ${this.linkDialogSubmitLabel}
                </pk-button>
            </pk-dialog>
        `}getToolbarButtonId(e){let t=this.toolbarButtonIds.get(e);return t||(t=So(`pk-tiptap-toolbar-${e}`),this.toolbarButtonIds.set(e,t)),t}getToolbarButtonLabel(e){return $j[e]??hE(e)?.label??e}renderToolbarTooltip(e,t){return this.toolbarTooltips?S`
            <pk-tooltip for=${e} content=${t} placement="top"></pk-tooltip>
        `:C}renderToolbarButton(e){let t=this.host.editor,n=hE(e);if(n?.isVisible&&(!t||!n.isVisible(t)))return C;let r=tM(e),i=this.getToolbarButtonLabel(e),a=this.getToolbarButtonId(e),o=t?dj(t,e):!1;return S`
            <div class="toolbar-item">
                <button
                    id=${a}
                    type="button"
                    class="toolbar-btn"
                    aria-label=${i}
                    ?disabled=${this.disabled||this.readonly}
                    data-state=${o?`active`:C}
                    @click=${()=>this.handleToolbarCommand(e)}
                >
                    ${r?gt(r):S`<span class="toolbar-btn__label">${i}</span>`}
                </button>
                ${this.renderToolbarTooltip(a,i)}
            </div>
        `}get textStyleToolbarConfig(){return GA(this.textStyleOptions)}getTextStyleValue(e){let t=this.host.editor?.getAttributes(`textStyle`)[e];return typeof t==`string`&&t?t:null}setTextStyleValue(e,t){let n=this.host.editor;if(!n)return;let r=n.chain().focus();switch(e){case`fontFamily`:t?r.setFontFamily(t).run():r.unsetFontFamily().run();break;case`fontSize`:t?r.setFontSize(t).run():r.unsetFontSize().run();break;case`color`:t?r.setColor(t).run():r.unsetColor().run();break;case`backgroundColor`:t?r.setBackgroundColor(t).run():r.unsetBackgroundColor().run();break;case`lineHeight`:t?r.setLineHeight(t).run():r.unsetLineHeight().run()}}getTextStyleOptionLabel(e,t){return e.find(e=>e.value===t)?.label??e.find(e=>e.value===null)?.label??`Default`}renderTextStyleOptions(e,t){let n=this.getTextStyleValue(e);return t.map(t=>S`
            <pk-dropdown-item
                type="radio"
                radio-group=${e}
                value=${t.value??``}
                ?checked=${t.value===n}
                @click=${()=>this.setTextStyleValue(e,t.value)}
            >
                ${t.label}
            </pk-dropdown-item>
        `)}renderTextStylePaletteOptions(e,t,n){let r=this.getTextStyleValue(e),i=e===`color`;return t.map((t,a)=>{let o=`${n}-${e}-${a}`,s=t.value?`${t.label} ${i?`text`:`highlight`}`:i?`Default text color`:`No highlight`;return S`
                <pk-dropdown-item
                    id=${o}
                    class="text-style-palette__option"
                    type="radio"
                    radio-group=${e}
                    value=${t.value??``}
                    ?checked=${t.value===r}
                    @click=${()=>this.setTextStyleValue(e,t.value)}
                >
                    <span
                        slot="start"
                        class="text-style-palette__swatch ${i?`text-style-palette__swatch--text`:`text-style-palette__swatch--highlight`}"
                        style=${t.value?`--text-style-swatch:${t.value}`:``}
                        data-empty=${t.value===null?``:C}
                        aria-hidden="true"
                    >${i?`A`:C}</span>
                    <span class="text-style-palette__accessible-label">${s}</span>
                </pk-dropdown-item>
                ${this.toolbarTooltips?S`
                    <pk-tooltip for=${o} content=${s} placement="top"></pk-tooltip>
                `:C}
            `})}handleTextStylePaletteKeyDown(e){let t={ArrowLeft:-1,ArrowRight:1,ArrowUp:-5,ArrowDown:5}[e.key];if(!t)return;let n=e.currentTarget,r=e.composedPath().find(e=>e instanceof HTMLElement&&e.localName===`pk-dropdown-item`&&e.classList.contains(`text-style-palette__option`)),i=n.getItems().filter(e=>e.classList.contains(`text-style-palette__option`)),a=r?i.indexOf(r):-1;if(a===-1)return;let o=i[Math.max(0,Math.min(a+t,i.length-1))];e.preventDefault(),e.stopPropagation(),o?.focusControl()}renderTextStyleToolbar(e){let t=this.textStyleToolbarConfig,n=this.getToolbarButtonId(e),r=e===`text-color`?this.getTextStyleValue(`color`):null,i=``,a=C;e===`font-family`?(i=this.getTextStyleOptionLabel(t.fontFamilies,this.getTextStyleValue(`fontFamily`)),a=S`${this.renderTextStyleOptions(`fontFamily`,t.fontFamilies)}`):e===`font-size`?(i=this.getTextStyleOptionLabel(t.fontSizes,this.getTextStyleValue(`fontSize`)),a=S`${this.renderTextStyleOptions(`fontSize`,t.fontSizes)}`):e===`line-height`?(i=this.getTextStyleOptionLabel(t.lineHeights,this.getTextStyleValue(`lineHeight`)),a=S`${this.renderTextStyleOptions(`lineHeight`,t.lineHeights)}`):(i=`A`,a=S`
                <pk-dropdown-label class="text-style-palette__label">Text color</pk-dropdown-label>
                ${this.renderTextStylePaletteOptions(`color`,t.textColors,n)}
                <pk-dropdown-label class="text-style-palette__label text-style-palette__label--highlight">Highlight color</pk-dropdown-label>
                ${this.renderTextStylePaletteOptions(`backgroundColor`,t.backgroundColors,n)}
            `);let o=this.getToolbarButtonLabel(e);return S`
            <div class="toolbar-item">
                <button
                    id=${n}
                    type="button"
                    class="toolbar-btn toolbar-btn--menu toolbar-btn--text-style ${e===`text-color`?`toolbar-btn--color`:``}"
                    aria-label=${o}
                    aria-haspopup="menu"
                    ?disabled=${this.disabled||this.readonly}
                    style=${r?`--text-style-trigger-color:${r}`:``}
                >
                    <span class="toolbar-btn__text-style-value">${i}</span>
                    <span class="toolbar-btn__chevron">${gt(Zj)}</span>
                </button>
                ${this.renderToolbarTooltip(n,o)}
                <pk-dropdown-menu
                    for=${n}
                    placement="bottom-start"
                    class=${e===`text-color`?`text-style-palette`:``}
                    @keydown=${e===`text-color`?this.handleTextStylePaletteKeyDown:C}
                >
                    ${a}
                </pk-dropdown-menu>
            </div>
        `}handleCraftLink(e){let t=this.host.editor;t&&nj({config:e,elementSiteId:$A(this.resolveLinkOptions()),linkSelectorStorageKeyPrefix:this.linkSelectorStorageKeyPrefix,getSelectedText:()=>ij(t),onSelect:({url:e,text:t})=>{this.openLinkDialog({url:e,text:t})},host:Jj()})}getToolbarGroupId(e){let t=this.toolbarGroupIds.get(e);return t||(t=So(`pk-tiptap-toolbar-group`),this.toolbarGroupIds.set(e,t)),t}renderToolbarSeparator(){return S`<span class="toolbar-separator" aria-hidden="true"></span>`}renderGroupTriggerContent(e,t,n){let r=tM(n);return e.label&&t?S`
                <span class="toolbar-btn__trigger-label">${t}</span>
                <span class="toolbar-btn__chevron">${gt(Zj)}</span>
            `:S`
            ${r?gt(r):S`<span class="toolbar-btn__trigger-label">${t}</span>`}
            <span class="toolbar-btn__chevron">${gt(Zj)}</span>
        `}renderToolbarGroup(e,t){let n=this.host.editor,r=this.getToolbarGroupId(t),i=n?Bj(n,e):{activeName:null,label:e.label??``,isActive:!1,icon:e.icon??vj(e)},a=Uj(e).filter(e=>{if(e.type===`separator`)return!0;let t=hE(e.name);return!t?.isVisible||!!(n&&t.isVisible(n))});if(!a.some(e=>e.type===`item`))return C;let o=e.label??(_j(e.preset)?`Headings`:gj(e.preset)?`Formatting`:e.preset===`lists`?`Lists`:e.preset===`align`?`Alignment`:`More`);return S`
            <div class="toolbar-item">
                <button
                    id=${r}
                    type="button"
                    class="toolbar-btn toolbar-btn--menu"
                    aria-label=${o}
                    aria-haspopup="menu"
                    ?disabled=${this.disabled||this.readonly}
                    data-state=${i.isActive?`active`:C}
                >
                    ${this.renderGroupTriggerContent(e,i.label,i.icon)}
                </button>
                ${this.renderToolbarTooltip(r,o)}
                <pk-dropdown-menu for=${r} placement="bottom-start">
                    ${a.map((e,r)=>{if(e.type===`separator`)return S`<pk-dropdown-separator key=${`${t}-sep-${r}`}></pk-dropdown-separator>`;let i=e.name,a=n?Rj(n,i):!1,o=nM(i),s=eM(i);return S`
                            <pk-dropdown-item
                                key=${`${t}-${i}-${r}`}
                                ?data-active=${a||C}
                                @click=${()=>this.handleToolbarCommand(i)}
                            >
                                ${o??C}
                                ${s}
                            </pk-dropdown-item>
                        `})}
                </pk-dropdown-menu>
            </div>
        `}renderToolbarNode(e,t){return e.type===`separator`?this.renderToolbarSeparator():e.type===`group`?this.renderToolbarGroup(e.group,`group-${t}`):e.name===`link`?this.renderLinkToolbarButton():[`font-family`,`font-size`,`text-color`,`line-height`].includes(e.name)?this.renderTextStyleToolbar(e.name):this.renderToolbarButton(e.name)}renderDefaultToolbar(){return S`
            <div class="toolbar" part="toolbar">
                ${this.toolbarNodes.map((e,t)=>this.renderToolbarNode(e,t))}
                <slot name="toolbar-end"></slot>
            </div>
        `}renderLinkToolbarButton(){let e=this.host.editor,t=QA(this.resolveLinkOptions()),n=this.getToolbarButtonLabel(`link`),r=this.isLinkActive();return S`
            <div class="toolbar-item">
                <button
                    id=${this.linkButtonId}
                    type="button"
                    class="toolbar-btn"
                    aria-label=${n}
                    aria-haspopup="menu"
                    ?disabled=${this.disabled||this.readonly}
                    data-state=${r?`active`:C}
                >
                    ${gt(Qj.link)}
                </button>
                ${this.renderToolbarTooltip(this.linkButtonId,n)}
                <pk-dropdown-menu for=${this.linkButtonId} placement="bottom-start">
                    ${t.map(e=>S`
                        <pk-dropdown-item @click=${()=>this.handleCraftLink(e)}>
                            ${e.optionTitle}
                        </pk-dropdown-item>
                    `)}
                    ${t.length>0?S`<pk-dropdown-separator></pk-dropdown-separator>`:C}
                    <pk-dropdown-item @click=${()=>this.openLinkMenu()}>Insert Link</pk-dropdown-item>
                    <pk-dropdown-item
                        ?disabled=${!r}
                        @click=${()=>e&&cj(e)}
                    >Unlink</pk-dropdown-item>
                </pk-dropdown-menu>
            </div>
        `}render(){return S`
            <div class="shell" part="shell">
                ${this.hasCustomToolbar?S`<slot name="toolbar"></slot>`:this.renderDefaultToolbar()}

                <div class="editor-mount" part="editor">
                    ${this.contentError?S`
                        <div class="content-error">
                            <span>${gt(k(A.triangleExclamation))}</span>
                            <span>${this.contentError}</span>
                        </div>
                    `:C}
                    ${this.toolbarHasLink()&&this.linkBubbleVisible?this.renderLinkBubble():C}
                </div>

                <input class="mirror-input" type="text" .value=${this.value} readonly tabindex="-1" aria-hidden="true" />
                ${this.toolbarHasLink()&&this.linkDialogMounted?this.renderLinkDialog():C}
            </div>
        `}};D([E(`.editor-mount`)],$.prototype,`editorMount`,void 0),D([E(`.mirror-input`)],$.prototype,`input`,void 0),D([E(`.link-dialog`)],$.prototype,`linkDialog`,void 0),D([E(`pk-input.link-dialog__url-input`)],$.prototype,`linkUrlInput`,void 0),D([E(`pk-input.link-dialog__text-input`)],$.prototype,`linkTextInput`,void 0),D([E(`pk-checkbox`)],$.prototype,`linkNewTabCheckbox`,void 0),D([E(`pk-button.link-dialog__submit`)],$.prototype,`linkSubmitButton`,void 0),D([w({attribute:`buttons`,converter:{fromAttribute:e=>e??`bold,italic`,toAttribute:e=>e==null?`bold,italic`:Array.isArray(e)?e.join(`,`):e}})],$.prototype,`buttons`,void 0),D([w({attribute:`toolbar`,converter:{fromAttribute:e=>e,toAttribute:e=>e==null?null:typeof e==`string`?e:JSON.stringify(e)}})],$.prototype,`toolbar`,void 0),D([w({attribute:`text-style-options`,converter:{fromAttribute:e=>{if(!e)return null;try{return JSON.parse(e)}catch{return null}},toAttribute:e=>e?JSON.stringify(e):null}})],$.prototype,`textStyleOptions`,void 0),D([w({attribute:`link-options`})],$.prototype,`linkOptions`,void 0),D([w({attribute:`link-selector-storage-key-prefix`})],$.prototype,`linkSelectorStorageKeyPrefix`,void 0),D([w({type:Number})],$.prototype,`rows`,void 0),D([w()],$.prototype,`placeholder`,void 0),D([w({type:Boolean,reflect:!0})],$.prototype,`readonly`,void 0),D([w({type:Boolean,reflect:!0})],$.prototype,`invalid`,void 0),D([w({attribute:!1})],$.prototype,`variableTagConfigure`,void 0),D([w({attribute:`invalid-content-message`})],$.prototype,`invalidContentMessage`,void 0),D([w({type:Boolean,attribute:`toolbar-tooltips`})],$.prototype,`toolbarTooltips`,void 0),D([T()],$.prototype,`linkDialogTitle`,void 0),D([T()],$.prototype,`linkDialogSubmitLabel`,void 0),D([T()],$.prototype,`linkDialogMounted`,void 0),D([T()],$.prototype,`linkBubbleVisible`,void 0),D([T()],$.prototype,`linkBubbleHref`,void 0),D([T()],$.prototype,`linkBubbleTop`,void 0),D([T()],$.prototype,`linkBubbleLeft`,void 0),D([T()],$.prototype,`value`,null),D([w({attribute:`value`,reflect:!0})],$.prototype,`defaultValue`,void 0),$=D([Je(`pk-tiptap-editor`)],$);var iM=()=>window.Craft;function aM(e,t){return iM().t(`mailer`,e,t)}function oM(e){iM().cp.displaySuccess(e)}function sM(e){iM().cp.displayError(e)}function cM(e,t,n={}){return iM().sendActionRequest(`POST`,e,{data:t,...n})}function lM(e,t){let n=e?.response?.data;if(n?.errors&&typeof n.errors==`object`){let e=Object.values(n.errors).flat()[0];if(typeof e==`string`)return n.message?`${n.message} ${e}`:e}return n?.message||n?.error||t}function uM(e){let t=e.querySelector(`pk-tiptap-editor[data-mailer-body]`),n=e.querySelector(`[data-mailer-subject]`),r=e.querySelector(`[data-mailer-confirmed]`),i=document.querySelector(`[data-mailer-confirm-dialog]`),a=document.querySelector(`[data-mailer-preview-dialog]`),o=`body`,s=null,c=!1;n?.addEventListener(`focusin`,()=>o=`subject`),t?.addEventListener(`focusin`,()=>o=`body`);let l=async(e,r=o)=>{let i=`{{ ${e} }}`;if(r===`subject`&&n){fM(n,i);return}if(!t)return;await customElements.whenDefined(`pk-tiptap-editor`),await t.updateComplete;let a=t.editor;a&&a.chain().focus().insertContent({type:`text`,text:i}).run()};e.querySelector(`[data-mailer-variables-menu]`)?.addEventListener(`pk-select`,e=>{let t=e.detail?.value;t&&l(t,`body`)}),e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-mailer-insert]`);t?.dataset.mailerInsert&&(e.preventDefault(),l(t.dataset.mailerInsert))});let u=e.querySelector(`[data-mailer-count-badge]`),d=e.querySelector(`[data-mailer-summary-text]`),f,p=0,m=async()=>{let t=++p;try{let n=await cM(`mailer/compose/count-recipients`,dM(e,!1));return t===p?n.data:null}catch{return t===p&&d&&(d.textContent=aM(`Couldn’t count recipients.`)),null}},h=async()=>{d&&(d.textContent=aM(`Counting…`));let e=await m();e&&(s=e,pM(e,d,u))},g=()=>{window.clearTimeout(f),f=window.setTimeout(h,400)};e.querySelectorAll(`[data-mailer-mode-toggle]`).forEach(t=>{t.addEventListener(`change`,()=>{let n=e.querySelector(`[data-mailer-mode-body="${t.dataset.mailerModeToggle}"]`);n&&(n.hidden=!t.checked),g()})}),e.querySelector(`[data-mailer-recipients]`)?.addEventListener(`change`,e=>{e.target.closest(`[data-mailer-count-input]`)&&g()}),e.querySelector(`[data-mailer-recipients]`)?.addEventListener(`input`,e=>{e.target.closest(`[data-mailer-count-input]`)&&g()});let _=e.querySelector(`#mailer-users`);_&&new MutationObserver(g).observe(_,{childList:!0,subtree:!0}),h();let v=async()=>{if(!i)return;let e=await m();if(!e){sM(aM(`Couldn’t count recipients.`));return}s=e,mM(i,e,n?.value??``),await i.show()};e.addEventListener(`submit`,e=>{c||(e.preventDefault(),e.stopImmediatePropagation(),v())},{capture:!0}),document.addEventListener(`keydown`,e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`s`&&(e.preventDefault(),v())}),i?.querySelector(`[data-mailer-confirm-submit]`)?.addEventListener(`click`,()=>{!c&&s&&s.sendable!==0&&(c=!0,r&&(r.value=`1`),i.querySelector(`[data-mailer-confirm-submit]`)?.setAttribute(`loading`,``),e.querySelector(`[data-mailer-send]`)?.classList.add(`loading`),e.submit())}),e.querySelector(`[data-mailer-preview]`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;n.setAttribute(`loading`,``);try{let t=await cM(`mailer/compose/preview`,dM(e,!1));hM(a,t.data),await a?.show()}catch(e){sM(lM(e,aM(`The message can’t be previewed.`)))}finally{n.removeAttribute(`loading`)}}),e.querySelector(`[data-mailer-test]`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;n.setAttribute(`loading`,``);try{oM((await cM(`mailer/compose/test-send`,dM(e,!0))).data?.message??aM(`Test email sent.`))}catch(e){sM(lM(e,aM(`The test email couldn’t be sent.`)))}finally{n.removeAttribute(`loading`)}}),e.querySelector(`[data-mailer-export]`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;n.setAttribute(`loading`,``);try{let t=await cM(`mailer/export/users`,dM(e,!1),{responseType:`blob`}),n=t.headers?.[`content-disposition`]??``,r=/filename="?([^";]+)"?/.exec(n)?.[1]??`mailer-users.csv`;gM(t.data,r)}catch(e){let t=aM(`Export failed.`),n=e?.response?.data;if(n instanceof Blob)try{t=JSON.parse(await n.text()).message??t}catch{}sM(t)}finally{n.removeAttribute(`loading`)}})}function dM(e,t){let n=new FormData(e);return n.delete(`action`),n.delete(`confirmed`),t||n.delete(`uploads[]`),n}function fM(e,t){let n=e.shadowRoot?.querySelector(`input`),r=e.value??``;if(n&&n.selectionStart!==null){let i=n.selectionStart,a=n.selectionEnd??i;e.value=r.slice(0,i)+t+r.slice(a),e.focus(),requestAnimationFrame(()=>n.setSelectionRange(i+t.length,i+t.length))}else e.value=r+(r&&!r.endsWith(` `)?` `:``)+t;e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}function pM(e,t,n){if(n&&(n.textContent=String(e.emails),n.hidden=e.emails===0),!t)return;if(e.total===0){t.textContent=aM(`No recipients selected`);return}let r=[aM(`{num} {num, plural, =1{email} other{emails}}`,{num:e.sendable})];e.skipped&&r.push(aM(`{num} skipped`,{num:e.skipped})),t.textContent=r.join(` · `),t.title=Object.entries(e.reasons).map(([e,t])=>`${e}: ${t}`).join(`
`)}function mM(e,t,n){let r=e.querySelector(`[data-mailer-confirm-title]`),i=e.querySelector(`[data-mailer-confirm-message]`),a=e.querySelector(`[data-mailer-confirm-breakdown]`),o=e.querySelector(`[data-mailer-confirm-test]`),s=e.querySelector(`[data-mailer-confirm-test-text]`),c=e.querySelector(`[data-mailer-confirm-submit]`);if(r&&(r.textContent=aM(`Send “{subject}”?`,{subject:n||`…`})),i&&(i.textContent=t.sendable===0?aM(`No recipients selected`):aM(`Send the message to {num} {num, plural, =1{email address} other{email addresses}}?`,{num:t.emails})),a){a.replaceChildren();let e=[];t.custom&&e.push(aM(`{num} custom email with {addresses} {addresses, plural, =1{address} other{addresses}}`,{num:t.custom,addresses:t.emails-t.users})),t.users&&e.push(aM(`{num} {num, plural, =1{user} other{users}}`,{num:t.users}));for(let[n,r]of Object.entries(t.reasons))e.push(`${aM(`{num} skipped`,{num:r})}: ${n}`);for(let t of e){let e=document.createElement(`li`);e.textContent=t,a.append(e)}}o&&s&&(o.hidden=!t.testToEmailAddress,s.textContent=t.testToEmailAddress?aM(`Test mode is on: every email will go to {address} instead, without CC or BCC.`,{address:t.testToEmailAddress}):``),t.sendable===0?c?.setAttribute(`disabled`,``):c?.removeAttribute(`disabled`)}function hM(e,t){if(!e)return;let n=e.querySelector(`[data-mailer-preview-subject]`),r=e.querySelector(`[data-mailer-preview-html]`),i=e.querySelector(`[data-mailer-preview-text]`);n&&(n.textContent=t.subject),r&&(r.srcdoc=t.html),i&&(i.textContent=t.text)}function gM(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.append(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function _M(e=document){e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-mailer-dialog-close]`);t&&t.closest(`pk-dialog`)?.hide()})}function vM(e,t=aM(`Delete`)){return new Promise(n=>{let r=document.createElement(`pk-dialog`);r.label=aM(`Are you sure?`),r.setAttribute(`disable-pointer-dismissal`,``);let i=document.createElement(`p`);i.textContent=e,r.append(i);let a=document.createElement(`div`);a.slot=`footer`,a.className=`mailer-dialog-footer`;let o=document.createElement(`pk-button`);o.textContent=aM(`Cancel`);let s=document.createElement(`pk-button`);s.setAttribute(`variant`,`primary`),s.textContent=t,a.append(o,s),r.append(a),document.body.append(r);let c=!1,l=e=>{c=e,r.hide()};o.addEventListener(`click`,()=>l(!1)),s.addEventListener(`click`,()=>l(!0)),r.addEventListener(`pk-open-change`,e=>{e.target===r&&!e.detail?.open&&(n(c),window.setTimeout(()=>r.remove(),300))}),customElements.whenDefined(`pk-dialog`).then(()=>r.show())})}function yM(e=document){e.querySelectorAll(`form[data-mailer-confirm]`).forEach(e=>{let t=!1;e.addEventListener(`submit`,async n=>{if(t)return;n.preventDefault();let r=e.querySelector(`button[type="submit"]`)?.textContent?.trim()||aM(`Delete`);await vM(e.dataset.mailerConfirm??``,r)&&(t=!0,e.submit())})})}function bM(){document.addEventListener(`change`,e=>{let t=e.composedPath()[0],n=t?.getRootNode(),r=n instanceof ShadowRoot?n.host:t;r&&(r.localName===`pk-checkbox`||r.localName===`pk-lightswitch`)&&r.syncFormValue?.()},!0)}function xM(){bM(),_M(),yM();let e=document.querySelector(`form[data-mailer-compose]`);e&&uM(e);let t=document.querySelector(`[data-mailer-autorefresh]`);if(t){let e=Math.max(5,Number(t.dataset.mailerAutorefresh)||10);window.setTimeout(function t(){if(document.querySelector(`pk-dialog[open]`)){window.setTimeout(t,e*1e3);return}window.location.reload()},e*1e3)}}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,xM):xM();