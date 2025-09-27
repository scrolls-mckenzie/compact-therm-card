function t(t,e,i,o){var r,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(s<3?r(a):s>3?r(e,i,a):r(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:l}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!n(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=l(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const s=r.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,r=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,g?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,$=w.trustedTypes,A=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+E,C=`<${k}>`,T=document,z=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,M="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,H=/>/g,j=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,F=/"/g,N=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,q=T.createTreeWalker(T,129);function V(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":3===e?"<math>":"",a=O;for(let e=0;e<i;e++){const i=t[e];let n,c,d=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===O?"!--"===c[1]?a=P:void 0!==c[1]?a=H:void 0!==c[2]?(N.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=j):void 0!==c[3]&&(a=j):a===j?">"===c[0]?(a=r??O,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?j:'"'===c[3]?F:D):a===F||a===D?a=j:a===P||a===H?a=O:(a=j,r=void 0);const p=a===j&&t[e+1].startsWith("/>")?" ":"";s+=a===O?i+C:d>=0?(o.push(n),i.slice(0,d)+S+i.slice(d)+E+p):i+E+(-2===d?e:p)}return[V(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const a=t.length-1,n=this.parts,[c,d]=K(t,e);if(this.el=G.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=d[s++],i=o.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?Q:"?"===a[1]?tt:"@"===a[1]?et:Z}),o.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:r}),o.removeAttribute(t));if(N.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],z()),q.nextNode(),n.push({type:2,index:++r});o.append(t[e],z())}}}else if(8===o.nodeType)if(o.data===k)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)n.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,o){if(e===I)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const s=U(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,o)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);q.currentNode=o;let r=q.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new J(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new it(r,this,t)),this._$AV.push(e),n=i[++a]}s!==n?.index&&(r=q.nextNode(),s++)}return q.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Y(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new J(this.O(z()),this.O(z()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=X(this,t,e,0),s=!U(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const o=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=X(this,o[i+a],e,a),n===I&&(n=this._$AH[a]),s||=!U(n)||n!==this._$AH[a],n===W?t=W:t!==W&&(t+=(n??"")+r[a+1]),this._$AH[a]=n}s&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Z{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===I)return;const i=this._$AH,o=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(G,J),(w.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;class st extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new J(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}st._$litElement$=!0,st.finalized=!0,rt.litElementHydrateSupport?.({LitElement:st});const at=rt.litElementPolyfillSupport;at?.({LitElement:st}),(rt.litElementVersions??=[]).push("4.2.1");const nt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ct=(t=nt,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function dt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return dt({...t,state:!0,attribute:!1})}var pt,lt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));const ut=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(i,t,o)})`
  :host {
    display: block;
  }

  ha-card {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    min-height: 80px;
    max-height: 120px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  /* Two-row compact layout */
  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 32px;
  }

  .bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 40px;
  }

  /* Mode section */
  .mode-section {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }

  .mode-button {
    background: none;
    border: 1px solid var(--divider-color);
    border-radius: 16px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 12px;
    color: var(--primary-text-color);
    min-width: 60px;
  }

  .mode-button:hover {
    background-color: var(--secondary-background-color);
    border-color: var(--primary-color);
  }

  .mode-button:active {
    transform: scale(0.95);
  }

  .mode-icon {
    font-size: 14px;
    line-height: 1;
  }

  .mode-text {
    font-weight: 500;
    text-transform: capitalize;
  }

  .activity-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
    animation: activityPulse 1.5s ease-in-out infinite;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  .activity-indicator::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    opacity: 0.3;
    animation: activityRipple 1.5s ease-in-out infinite;
  }

  .activity-indicator.heating {
    background-color: var(--error-color, #ff5722);
    box-shadow: 0 0 8px rgba(255, 87, 34, 0.4);
  }

  .activity-indicator.heating::before {
    background-color: var(--error-color, #ff5722);
  }

  .activity-indicator.cooling {
    background-color: var(--info-color, #2196f3);
    box-shadow: 0 0 8px rgba(33, 150, 243, 0.4);
  }

  .activity-indicator.cooling::before {
    background-color: var(--info-color, #2196f3);
  }

  /* Temperature section */
  .temperature-section {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    justify-content: flex-end;
    font-size: 14px;
  }

  .current-temp {
    display: flex;
    align-items: baseline;
    gap: 2px;
    color: var(--secondary-text-color);
  }

  .target-temp {
    display: flex;
    align-items: baseline;
    gap: 2px;
    color: var(--primary-text-color);
    font-weight: 500;
  }

  .temp-label {
    font-size: 11px;
    color: var(--secondary-text-color);
    margin-right: 2px;
  }

  .temp-value {
    font-weight: 600;
  }

  .temp-unit {
    font-size: 11px;
    color: var(--secondary-text-color);
  }

  /* Temperature controls */
  .temp-button {
    background: none;
    border: 1px solid var(--divider-color);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--primary-text-color);
    touch-action: manipulation;
  }

  .temp-button:hover:not(:disabled) {
    background-color: var(--secondary-background-color);
    border-color: var(--primary-color);
    transform: scale(1.05);
  }

  .temp-button:active:not(:disabled) {
    transform: scale(0.95);
  }

  .temp-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .temp-button.feedback-active {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
    transform: scale(1.1);
  }

  .button-icon {
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
  }

  .temp-display {
    display: flex;
    align-items: baseline;
    gap: 4px;
    flex: 1;
    justify-content: center;
    position: relative;
  }

  .temp-feedback {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 8px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    animation: tempFeedback 0.6s ease-out;
    pointer-events: none;
  }

  .temp-feedback.increase {
    color: var(--success-color, #4caf50);
  }

  .temp-feedback.decrease {
    color: var(--info-color, #2196f3);
  }

  .temp-display.feedback-increase .target-temp-large {
    animation: tempBounce 0.3s ease-out;
    color: var(--success-color, #4caf50);
  }

  .temp-display.feedback-decrease .target-temp-large {
    animation: tempBounce 0.3s ease-out;
    color: var(--info-color, #2196f3);
  }

  .target-temp-large {
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-text-color);
    line-height: 1;
  }

  .temp-unit-large {
    font-size: 16px;
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  /* Mode-specific styling - Enhanced with dynamic colors */
  .mode-button {
    position: relative;
    overflow: hidden;
  }

  .mode-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0.1;
    border-radius: inherit;
    transition: opacity 0.2s ease;
  }

  .mode-button:hover::before {
    opacity: 0.2;
  }

  .mode-button:active::before {
    opacity: 0.3;
  }

  /* Enhanced visual feedback for active heating/cooling */
  .compact-thermostat.mode-heat .mode-section:has(.activity-indicator.heating) .mode-button {
    box-shadow: 0 0 12px rgba(255, 87, 34, 0.3);
    animation: modeGlow 2s ease-in-out infinite;
  }

  .compact-thermostat.mode-cool .mode-section:has(.activity-indicator.cooling) .mode-button {
    box-shadow: 0 0 12px rgba(33, 150, 243, 0.3);
    animation: modeGlow 2s ease-in-out infinite;
  }

  /* Fallback for browsers that don't support :has() */
  .compact-thermostat.mode-heat.activity-heating .mode-button {
    box-shadow: 0 0 12px rgba(255, 87, 34, 0.3);
    animation: modeGlow 2s ease-in-out infinite;
  }

  .compact-thermostat.mode-cool.activity-cooling .mode-button {
    box-shadow: 0 0 12px rgba(33, 150, 243, 0.3);
    animation: modeGlow 2s ease-in-out infinite;
  }

  /* Temperature display color coding based on mode */
  .compact-thermostat.mode-heat .target-temp-large {
    color: var(--error-color, #ff5722);
  }

  .compact-thermostat.mode-cool .target-temp-large {
    color: var(--info-color, #2196f3);
  }

  .compact-thermostat.mode-auto .target-temp-large {
    color: var(--success-color, #4caf50);
  }

  .compact-thermostat.mode-off .target-temp-large {
    color: var(--disabled-text-color);
  }

  /* Enhanced mode button states */
  .compact-thermostat.mode-heat .mode-button {
    background-color: rgba(255, 87, 34, 0.1);
  }

  .compact-thermostat.mode-cool .mode-button {
    background-color: rgba(33, 150, 243, 0.1);
  }

  .compact-thermostat.mode-auto .mode-button {
    background-color: rgba(76, 175, 80, 0.1);
  }

  .compact-thermostat.mode-off .mode-button {
    background-color: rgba(128, 128, 128, 0.1);
  }

  .compact-thermostat.mode-heat_cool .mode-button {
    background-color: rgba(255, 152, 0, 0.1);
  }

  .compact-thermostat.mode-fan_only .mode-button {
    background-color: rgba(var(--rgb-primary-color), 0.1);
  }

  .compact-thermostat.mode-dry .mode-button {
    background-color: rgba(103, 58, 183, 0.1);
  }

  /* Enhanced activity indicator for different actions */
  .activity-indicator.drying {
    background-color: var(--deep-purple-color, #673ab7);
    box-shadow: 0 0 8px rgba(103, 58, 183, 0.4);
  }

  .activity-indicator.drying::before {
    background-color: var(--deep-purple-color, #673ab7);
  }

  .activity-indicator.fan {
    background-color: var(--primary-color);
    box-shadow: 0 0 8px rgba(var(--rgb-primary-color), 0.4);
  }

  .activity-indicator.fan::before {
    background-color: var(--primary-color);
  }

  /* Connection status indicator */
  .connection-status {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    z-index: 10;
  }

  .connection-status.connected {
    background-color: var(--success-color, #4caf50);
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.4);
  }

  .connection-status.disconnected {
    background-color: var(--error-color, #ff5722);
    animation: disconnectedBlink 2s ease-in-out infinite;
    box-shadow: 0 0 4px rgba(255, 87, 34, 0.4);
  }

  .connection-status.unavailable {
    background-color: var(--warning-color, #ff9800);
    animation: unavailablePulse 3s ease-in-out infinite;
    box-shadow: 0 0 4px rgba(255, 152, 0, 0.4);
  }

  /* Updating state */
  .updating-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(var(--rgb-card-background-color), 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--ha-card-border-radius);
  }

  .updating-spinner {
    font-size: 24px;
    color: var(--primary-color);
    animation: spin 1s linear infinite;
  }

  ha-card.updating {
    opacity: 0.9;
  }

  /* Error and warning states */
  .warning {
    color: var(--warning-color);
    padding: 16px;
    text-align: center;
    font-size: 14px;
  }

  .error {
    color: var(--error-color);
    padding: 16px;
    text-align: center;
    font-size: 14px;
  }

  .updating {
    opacity: 0.7;
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Responsive design - Mobile First Approach */
  
  /* Base styles ensure minimum touch targets (44px) */
  .temp-button {
    min-width: 44px;
    min-height: 44px;
    width: 44px;
    height: 44px;
  }

  .mode-button {
    min-height: 44px;
    min-width: 60px;
    padding: 8px 12px;
  }

  /* Small mobile devices (320px - 480px) */
  @media (max-width: 480px) {
    ha-card {
      padding: 8px 12px;
      min-height: 88px; /* Ensure adequate height for touch targets */
    }

    .card-content {
      gap: 6px;
    }

    .top-row {
      min-height: 36px;
    }

    .bottom-row {
      min-height: 44px; /* Ensure touch target height */
    }

    .temperature-section {
      gap: 8px;
      font-size: 13px; /* Slightly larger for mobile readability */
    }

    .current-temp,
    .target-temp {
      font-size: 13px;
    }

    .target-temp-large {
      font-size: 26px; /* Larger for better mobile visibility */
    }

    .temp-unit-large {
      font-size: 15px;
    }

    .mode-button {
      font-size: 13px;
      min-width: 70px; /* Wider for better touch target */
    }

    .mode-icon {
      font-size: 16px; /* Larger icons for mobile */
    }

    .button-icon {
      font-size: 20px; /* Larger for better visibility */
    }

    /* Ensure adequate spacing between interactive elements */
    .bottom-row {
      gap: 8px;
    }
  }

  /* Very small mobile devices (max 360px) */
  @media (max-width: 360px) {
    ha-card {
      padding: 6px 10px;
    }

    .temperature-section {
      gap: 6px;
      font-size: 12px;
    }

    .current-temp,
    .target-temp {
      font-size: 12px;
    }

    .target-temp-large {
      font-size: 24px;
    }

    .temp-unit-large {
      font-size: 14px;
    }

    .mode-button {
      min-width: 65px;
      font-size: 12px;
    }

    .temp-label {
      font-size: 10px;
    }
  }

  /* Large screens - optimize for desktop */
  @media (min-width: 768px) {
    ha-card {
      padding: 14px 18px;
    }

    .temperature-section {
      gap: 16px;
      font-size: 15px;
    }

    .current-temp,
    .target-temp {
      font-size: 15px;
    }

    .target-temp-large {
      font-size: 32px;
    }

    .temp-unit-large {
      font-size: 18px;
    }

    .mode-button {
      min-width: 80px;
      padding: 6px 12px;
      font-size: 14px;
    }

    .temp-button {
      width: 48px;
      height: 48px;
    }

    .button-icon {
      font-size: 22px;
    }
  }

  /* Container queries for card width constraints */
  @container (max-width: 280px) {
    .temperature-section {
      flex-direction: column;
      gap: 4px;
      align-items: flex-end;
    }

    .current-temp,
    .target-temp {
      font-size: 11px;
    }

    .mode-button {
      min-width: 50px;
      padding: 6px 8px;
      font-size: 11px;
    }

    .mode-text {
      display: none; /* Hide text to save space */
    }

    .mode-icon {
      font-size: 14px;
    }
  }

  /* Very narrow card width - vertical stacking */
  @container (max-width: 200px) {
    .card-content {
      gap: 6px;
    }

    .top-row {
      flex-direction: column;
      gap: 6px;
      align-items: stretch;
    }

    .temperature-section {
      justify-content: center;
      flex-direction: row;
      gap: 8px;
    }

    .bottom-row {
      min-height: 44px; /* Maintain touch target size */
      gap: 4px;
    }

    .temp-button {
      width: 44px; /* Maintain minimum touch target */
      height: 44px;
    }

    .target-temp-large {
      font-size: 22px;
    }

    .temp-unit-large {
      font-size: 13px;
    }

    .mode-button {
      min-width: 44px; /* Minimum touch target */
      justify-content: center;
    }
  }

  /* Extremely narrow - minimal layout */
  @container (max-width: 150px) {
    ha-card {
      padding: 6px 8px;
    }

    .card-content {
      gap: 4px;
    }

    .top-row {
      min-height: 32px;
    }

    .temperature-section {
      font-size: 10px;
      gap: 4px;
    }

    .current-temp,
    .target-temp {
      font-size: 10px;
    }

    .target-temp-large {
      font-size: 18px;
    }

    .temp-unit-large {
      font-size: 11px;
    }

    .temp-button {
      width: 40px;
      height: 40px;
    }

    .button-icon {
      font-size: 16px;
    }

    .mode-button {
      min-width: 40px;
      padding: 4px 6px;
      font-size: 10px;
    }

    .mode-icon {
      font-size: 12px;
    }

    /* Hide less critical information in extremely narrow layouts */
    .temp-label {
      display: none;
    }

    .current-temp {
      display: none; /* Hide current temp to save space */
    }
  }

  /* High DPI displays - enhance visual clarity */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .activity-indicator {
      border: 0.5px solid rgba(255, 255, 255, 0.2);
    }

    .mode-button,
    .temp-button {
      border-width: 1px;
    }
  }

  /* Landscape orientation on mobile - optimize layout */
  @media (max-height: 500px) and (orientation: landscape) {
    ha-card {
      padding: 6px 12px;
      min-height: 70px;
      max-height: 90px;
    }

    .card-content {
      gap: 4px;
    }

    .top-row {
      min-height: 28px;
    }

    .bottom-row {
      min-height: 40px;
    }

    .target-temp-large {
      font-size: 22px;
    }

    .temp-unit-large {
      font-size: 13px;
    }

    .temp-button {
      width: 40px;
      height: 40px;
    }

    .button-icon {
      font-size: 18px;
    }
  }

  /* Screen size specific optimizations */
  .screen-mobile .temperature-section {
    font-size: 13px;
  }

  .screen-mobile .target-temp-large {
    font-size: 26px;
  }

  .screen-tablet .temperature-section {
    font-size: 14px;
  }

  .screen-tablet .target-temp-large {
    font-size: 28px;
  }

  .screen-desktop .temperature-section {
    font-size: 15px;
  }

  .screen-desktop .target-temp-large {
    font-size: 32px;
  }

  /* Width-based responsive classes */
  .width-xs .mode-text,
  .width-xs .temp-label,
  .width-xs .current-temp {
    display: none;
  }

  .width-sm .mode-text {
    display: none;
  }

  .width-sm .temperature-section {
    flex-direction: column;
    gap: 4px;
  }

  .width-md .temperature-section {
    gap: 8px;
  }

  .width-lg .temperature-section {
    gap: 12px;
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .temp-button,
    .mode-button {
      /* Ensure touch targets are large enough */
      min-width: 44px;
      min-height: 44px;
    }

    .temp-button:hover {
      /* Remove hover effects on touch devices */
      transform: none;
      background-color: transparent;
    }

    .mode-button:hover {
      transform: none;
      background-color: var(--secondary-background-color);
    }

    /* Add active states for touch feedback */
    .temp-button:active {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
      transform: scale(0.95);
    }

    .mode-button:active {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
      transform: scale(0.95);
    }
  }

  /* Accessibility - Ensure adequate contrast and sizing */
  @media (prefers-reduced-motion: reduce) {
    .activity-indicator,
    .mode-button,
    .temp-button,
    .target-temp-large {
      animation: none !important;
      transition: none !important;
    }
  }

  /* Enhanced motion for devices that support it */
  @media (prefers-reduced-motion: no-preference) {
    .temp-button:hover:not(:disabled) {
      transform: scale(1.05);
    }

    .temp-button:active:not(:disabled) {
      transform: scale(0.95);
    }

    .mode-button:active {
      transform: scale(0.95);
    }
  }

  /* Print styles - ensure card is readable when printed */
  @media print {
    ha-card {
      border: 1px solid #000;
      box-shadow: none;
      background: white !important;
      color: black !important;
    }

    .activity-indicator {
      display: none;
    }

    .temp-button,
    .mode-button {
      border: 1px solid #000;
      background: white;
      color: black;
    }

    .connection-status {
      display: none;
    }
  }

  /* Animations */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes activityPulse {
    0%, 100% { 
      opacity: 1; 
      transform: scale(1);
    }
    50% { 
      opacity: 0.7; 
      transform: scale(1.2);
    }
  }

  @keyframes activityRipple {
    0% { 
      transform: scale(0.8); 
      opacity: 0.8;
    }
    50% { 
      transform: scale(1.4); 
      opacity: 0.2;
    }
    100% { 
      transform: scale(2); 
      opacity: 0;
    }
  }

  @keyframes disconnectedBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
  }

  @keyframes unavailablePulse {
    0%, 100% { 
      opacity: 1; 
      transform: scale(1);
    }
    50% { 
      opacity: 0.6; 
      transform: scale(1.1);
    }
  }

  @keyframes modeGlow {
    0%, 100% { 
      box-shadow: 0 0 8px currentColor;
      opacity: 1;
    }
    50% { 
      box-shadow: 0 0 16px currentColor;
      opacity: 0.9;
    }
  }

  @keyframes tempFeedback {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px) scale(0.8);
    }
    50% {
      opacity: 1;
      transform: translateX(-50%) translateY(-5px) scale(1.1);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-15px) scale(0.9);
    }
  }

  @keyframes tempBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  /* Focus styles for accessibility */
  .mode-button:focus,
  .temp-button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .mode-button,
    .temp-button {
      border-width: 2px;
    }

    .activity-indicator {
      border: 1px solid var(--primary-text-color);
    }
  }
`;let mt=class extends st{constructor(){super(...arguments),this.cardState={isUpdating:!1,lastUpdate:new Date,config:{}},this.tempAdjustmentFeedback=null,this.screenSize="desktop",this.cardWidth=0}static async getConfigElement(){return document.createElement("div")}static getStubConfig(){return{type:"custom:compact-thermostat-card",entity:"climate.thermostat"}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You need to define an entity");if(!t.entity.startsWith("climate."))throw new Error("Entity must be a climate entity");const e={type:"custom:compact-thermostat-card",entity:t.entity,name:t.name,show_current:!1!==t.show_current,show_target:!1!==t.show_target,step:t.step||1,min_temp:t.min_temp,max_temp:t.max_temp};this.config=e,this.cardState={...this.cardState,config:e}}getCardSize(){return 1}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._handleHassUpdate(t),t.has("config")&&this.config&&this._handleConfigUpdate()}connectedCallback(){super.connectedCallback(),this._subscribeToEntityUpdates().catch(t=>{console.warn("Failed to subscribe to entity updates on connect:",t)}),this._setupResponsiveObserver(),this._detectScreenSize()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeFromEntityUpdates(),this._clearRetryTimeout(),this._cleanupResponsiveObserver()}get entityState(){if(!this.hass||!this.config.entity)return;const t=this.hass.states[this.config.entity];return t?{current_temperature:t.attributes.current_temperature||0,target_temperature:t.attributes.temperature||0,hvac_mode:t.state,hvac_action:t.attributes.hvac_action||"idle",min_temp:this.config.min_temp||t.attributes.min_temp||0,max_temp:this.config.max_temp||t.attributes.max_temp||100,temperature_unit:t.attributes.unit_of_measurement||"°C",supported_features:t.attributes.supported_features||0}:void 0}validateEntity(){if(!this.hass)return"Home Assistant not available";if(!this.config.entity)return"No entity configured";const t=this.hass.states[this.config.entity];return t?t.attributes.supported_features?null:"Entity does not support thermostat features":`Entity "${this.config.entity}" not found`}_handleHassUpdate(t){const e=t.get("hass");if(e&&this.config?.entity){const t=e.states[this.config.entity],i=this.hass.states[this.config.entity];t!==i&&this._handleEntityStateChange(t,i)}this.cardState={...this.cardState,lastUpdate:new Date,error:this.validateEntity()||void 0}}_handleConfigUpdate(){this._unsubscribeFromEntityUpdates(),this._subscribeToEntityUpdates().catch(t=>{console.warn("Failed to resubscribe to entity updates:",t)})}_handleEntityStateChange(t,e){e&&!t&&(this.cardState={...this.cardState,error:void 0}),!e&&t&&(this.cardState={...this.cardState,error:`Entity "${this.config.entity}" is unavailable`},this._scheduleRetry())}async _subscribeToEntityUpdates(){if(this.hass&&this.config?.entity)try{this._unsubscribeEntity=await this.hass.connection.subscribeEvents(t=>{t.data.entity_id===this.config.entity&&this.requestUpdate()},"state_changed")}catch(t){console.warn("Failed to subscribe to entity updates:",t)}}_unsubscribeFromEntityUpdates(){this._unsubscribeEntity&&(this._unsubscribeEntity(),this._unsubscribeEntity=void 0)}_scheduleRetry(){this._clearRetryTimeout(),this._retryTimeout=window.setTimeout(()=>{if(this.hass&&this.config?.entity){this.hass.states[this.config.entity]?(this.cardState={...this.cardState,error:void 0},this.requestUpdate()):this._scheduleRetry()}},5e3)}_clearRetryTimeout(){this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=void 0)}async setTargetTemperature(t){if(!this.hass||!this.config?.entity)throw new Error("Home Assistant or entity not available");const e=this.entityState;if(!e)throw new Error("Entity state not available");const i=Math.max(e.min_temp,Math.min(e.max_temp,t));this.cardState={...this.cardState,isUpdating:!0};try{await this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,temperature:i}),this.cardState={...this.cardState,error:void 0}}catch(e){const i=e instanceof Error?e.message:"Unknown error";throw this.cardState={...this.cardState,error:`Failed to set temperature: ${i}`},this._scheduleServiceRetry(()=>this.setTargetTemperature(t)),e}finally{this.cardState={...this.cardState,isUpdating:!1}}}async setHvacMode(t){if(!this.hass||!this.config?.entity)throw new Error("Home Assistant or entity not available");this.cardState={...this.cardState,isUpdating:!0};try{await this.hass.callService("climate","set_hvac_mode",{entity_id:this.config.entity,hvac_mode:t}),this.cardState={...this.cardState,error:void 0}}catch(e){const i=e instanceof Error?e.message:"Unknown error";throw this.cardState={...this.cardState,error:`Failed to set HVAC mode: ${i}`},this._scheduleServiceRetry(()=>this.setHvacMode(t)),e}finally{this.cardState={...this.cardState,isUpdating:!1}}}async adjustTemperature(t){const e=this.entityState;if(!e)throw new Error("Entity state not available");const i=this.config.step||1,o=e.target_temperature+t*i;await this.setTargetTemperature(o)}async cycleHvacMode(){const t=this.entityState;if(!t)throw new Error("Entity state not available");const e=this._getAvailableHvacModes(),i=(e.indexOf(t.hvac_mode)+1)%e.length;await this.setHvacMode(e[i])}_getAvailableHvacModes(){if(!this.hass||!this.config?.entity)return["off","heat","cool","auto"];const t=this.hass.states[this.config.entity];if(!t||!t.attributes.hvac_modes)return["off","heat","cool","auto"];const e=t.attributes.hvac_modes,i=[];e.includes("off")&&i.push("off");const o=["heat","cool","auto"];for(const t of o)e.includes(t)&&!i.includes(t)&&i.push(t);for(const t of e)i.includes(t)||i.push(t);return i.length>0?i:["off","heat","cool","auto"]}_scheduleServiceRetry(t){setTimeout(async()=>{try{await t()}catch(t){console.warn("Service call retry failed:",t)}},2e3)}_getModeIcon(t){return{heat:"🔥",cool:"❄️",auto:"🔄",off:"⏸️",heat_cool:"🌡️",fan_only:"💨",dry:"💧"}[t]||"❓"}_getModeDisplayName(t){return{heat:"Heat",cool:"Cool",auto:"Auto",off:"Off",heat_cool:"Heat/Cool",fan_only:"Fan",dry:"Dry"}[t]||t.replace("_"," ").toUpperCase()}_getModeColor(t){return{heat:"var(--error-color, #ff5722)",cool:"var(--info-color, #2196f3)",auto:"var(--success-color, #4caf50)",off:"var(--disabled-text-color)",heat_cool:"var(--warning-color, #ff9800)",fan_only:"var(--primary-color)",dry:"var(--deep-purple-color, #673ab7)"}[t]||"var(--primary-text-color)"}_formatTemperature(t){return Math.round(t).toString()}_getConnectionStatus(){if(!this.hass)return"disconnected";if(!this.config?.entity)return"disconnected";const t=this.hass.states[this.config.entity];return t?"unavailable"===t.state||"unknown"===t.state?"unavailable":"connected":"unavailable"}_getActivityClass(t){return"idle"===t.hvac_action||"off"===t.hvac_action?"":`activity-${t.hvac_action}`}_renderActivityIndicator(t){if("idle"===t.hvac_action||"off"===t.hvac_action)return W;let e=t.hvac_action;return"drying"===t.hvac_action?e="drying":"fan"===t.hvac_action&&(e="fan"),L`
      <div class="activity-indicator ${e}" title="Currently ${t.hvac_action}"></div>
    `}async _handleModeClick(t){t.preventDefault();try{await this.cycleHvacMode()}catch(t){console.error("Failed to change HVAC mode:",t)}}async _handleTempIncrease(t){t.preventDefault();try{this._showTempAdjustmentFeedback("increase"),await this.adjustTemperature(1)}catch(t){console.error("Failed to increase temperature:",t),this._clearTempAdjustmentFeedback()}}async _handleTempDecrease(t){t.preventDefault();try{this._showTempAdjustmentFeedback("decrease"),await this.adjustTemperature(-1)}catch(t){console.error("Failed to decrease temperature:",t),this._clearTempAdjustmentFeedback()}}_handleTouchStart(t){"vibrate"in navigator&&navigator.vibrate(10)}_handleKeyDown(t,e){if("Enter"===t.key||" "===t.key)switch(t.preventDefault(),e){case"mode":this._handleModeClick(t);break;case"increase":this._handleTempIncrease(t);break;case"decrease":this._handleTempDecrease(t)}}_showTempAdjustmentFeedback(t){this.tempAdjustmentFeedback=t,setTimeout(()=>{this._clearTempAdjustmentFeedback()},600)}_clearTempAdjustmentFeedback(){this.tempAdjustmentFeedback=null}_setupResponsiveObserver(){"ResizeObserver"in window&&(this._resizeObserver=new ResizeObserver(t=>{for(const e of t)this.cardWidth=e.contentRect.width,this._updateResponsiveState()}),this.updateComplete.then(()=>{const t=this.shadowRoot?.querySelector("ha-card");t&&this._resizeObserver&&this._resizeObserver.observe(t)})),window.addEventListener("orientationchange",this._handleOrientationChange.bind(this)),window.addEventListener("resize",this._handleWindowResize.bind(this))}_cleanupResponsiveObserver(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),window.removeEventListener("orientationchange",this._handleOrientationChange.bind(this)),window.removeEventListener("resize",this._handleWindowResize.bind(this))}_detectScreenSize(){const t=window.innerWidth;this.screenSize=t<=480?"mobile":t<=768?"tablet":"desktop"}_updateResponsiveState(){this._detectScreenSize(),this.requestUpdate()}_handleOrientationChange(){setTimeout(()=>{this._updateResponsiveState()},100)}_handleWindowResize(){clearTimeout(this._retryTimeout),this._retryTimeout=window.setTimeout(()=>{this._updateResponsiveState()},150)}_getResponsiveClasses(){const t=["compact-thermostat"];this.cardState.isUpdating&&t.push("updating");const e=this.entityState;return e&&(t.push(`mode-${e.hvac_mode}`),t.push(this._getActivityClass(e))),t.push(`screen-${this.screenSize}`),this.cardWidth>0&&(this.cardWidth<=150?t.push("width-xs"):this.cardWidth<=200?t.push("width-sm"):this.cardWidth<=280?t.push("width-md"):t.push("width-lg")),t.join(" ")}render(){if(!this.config||!this.hass)return L`
        <ha-card>
          <div class="warning">Configuration required</div>
        </ha-card>
      `;if(this.cardState.error)return L`
        <ha-card>
          <div class="error">
            ${this.cardState.error}
            ${this.cardState.isUpdating?L`<div class="updating">Retrying...</div>`:""}
          </div>
        </ha-card>
      `;const t=this.validateEntity();if(t)return L`
        <ha-card>
          <div class="error">${t}</div>
        </ha-card>
      `;const e=this.entityState;return e?L`
      <ha-card class="${this._getResponsiveClasses()}">
        <!-- Connection status indicator -->
        <div class="connection-status ${this._getConnectionStatus()}"></div>
        
        <div class="card-content">
          <!-- First row: Mode button, temperatures, and activity indicator -->
          <div class="top-row">
            <div class="mode-section">
              <button 
                class="mode-button" 
                @click=${this._handleModeClick}
                @touchstart=${this._handleTouchStart}
                @keydown=${t=>this._handleKeyDown(t,"mode")}
                style="border-color: ${this._getModeColor(e.hvac_mode)}; color: ${this._getModeColor(e.hvac_mode)};"
                aria-label="Change HVAC mode. Current mode: ${this._getModeDisplayName(e.hvac_mode)}"
                title="Tap to cycle through available HVAC modes"
              >
                <span class="mode-icon" aria-hidden="true">${this._getModeIcon(e.hvac_mode)}</span>
                <span class="mode-text">${this._getModeDisplayName(e.hvac_mode)}</span>
              </button>
              ${this._renderActivityIndicator(e)}
            </div>
            
            <div class="temperature-section">
              ${!1!==this.config.show_current?L`
                <div class="current-temp">
                  <span class="temp-value">${this._formatTemperature(e.current_temperature)}</span>
                  <span class="temp-unit">${e.temperature_unit}</span>
                </div>
              `:""}
              
              ${!1!==this.config.show_target?L`
                <div class="target-temp">
                  <span class="temp-label">Target:</span>
                  <span class="temp-value">${this._formatTemperature(e.target_temperature)}</span>
                  <span class="temp-unit">${e.temperature_unit}</span>
                </div>
              `:""}
            </div>
          </div>

          <!-- Second row: Temperature controls -->
          <div class="bottom-row">
            <button 
              class="temp-button decrease ${"decrease"===this.tempAdjustmentFeedback?"feedback-active":""}" 
              @click=${this._handleTempDecrease}
              @touchstart=${this._handleTouchStart}
              @keydown=${t=>this._handleKeyDown(t,"decrease")}
              ?disabled=${this.cardState.isUpdating||e.target_temperature<=e.min_temp}
              aria-label="Decrease temperature by ${this.config.step||1} degree${1!==(this.config.step||1)?"s":""}. Current target: ${this._formatTemperature(e.target_temperature)}${e.temperature_unit}"
              title="Decrease target temperature"
            >
              <span class="button-icon" aria-hidden="true">−</span>
            </button>
            
            <div class="temp-display ${this.tempAdjustmentFeedback?`feedback-${this.tempAdjustmentFeedback}`:""}">
              <span class="target-temp-large">${this._formatTemperature(e.target_temperature)}</span>
              <span class="temp-unit-large">${e.temperature_unit}</span>
              ${this.tempAdjustmentFeedback?L`
                <div class="temp-feedback ${this.tempAdjustmentFeedback}">
                  ${"increase"===this.tempAdjustmentFeedback?"+":"−"}${this.config.step||1}
                </div>
              `:""}
            </div>
            
            <button 
              class="temp-button increase ${"increase"===this.tempAdjustmentFeedback?"feedback-active":""}" 
              @click=${this._handleTempIncrease}
              @touchstart=${this._handleTouchStart}
              @keydown=${t=>this._handleKeyDown(t,"increase")}
              ?disabled=${this.cardState.isUpdating||e.target_temperature>=e.max_temp}
              aria-label="Increase temperature by ${this.config.step||1} degree${1!==(this.config.step||1)?"s":""}. Current target: ${this._formatTemperature(e.target_temperature)}${e.temperature_unit}"
              title="Increase target temperature"
            >
              <span class="button-icon" aria-hidden="true">+</span>
            </button>
          </div>

          ${this.cardState.isUpdating?L`
            <div class="updating-overlay">
              <span class="updating-spinner">⟳</span>
            </div>
          `:""}
        </div>
      </ha-card>
    `:L`
        <ha-card>
          <div class="warning">Entity unavailable</div>
        </ha-card>
      `}static get styles(){return ut}};t([dt({attribute:!1})],mt.prototype,"hass",void 0),t([ht()],mt.prototype,"config",void 0),t([ht()],mt.prototype,"cardState",void 0),t([ht()],mt.prototype,"tempAdjustmentFeedback",void 0),t([ht()],mt.prototype,"screenSize",void 0),t([ht()],mt.prototype,"cardWidth",void 0),mt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("compact-thermostat-card")],mt),window.customCards=window.customCards||[],window.customCards.push({type:"compact-thermostat-card",name:"Compact Thermostat Card",description:"A compact thermostat card for Home Assistant dashboards",preview:!1,documentationURL:"https://github.com/your-repo/compact-thermostat-card"}),console.info("%c  COMPACT-THERMOSTAT-CARD  %c  Version 1.0.0  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");export{mt as CompactThermostatCard};
