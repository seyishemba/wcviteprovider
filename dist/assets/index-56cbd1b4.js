import{_ as pe}from"./index-2bd6409d.js";const me=Symbol(),ee=Object.getPrototypeOf,F=new WeakMap,ge=e=>e&&(F.has(e)?F.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),he=e=>ge(e)&&e[me]||null,te=(e,t=!0)=>{F.set(e,t)},H=e=>typeof e=="object"&&e!==null,S=new WeakMap,x=new WeakSet,be=(e=Object.is,t=(n,W)=>new Proxy(n,W),s=n=>H(n)&&!x.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>n.configurable&&n.enumerable&&n.writable,c=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},d=new WeakMap,g=(n,W,A=c)=>{const b=d.get(n);if((b==null?void 0:b[0])===W)return b[1];const y=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return te(y,!0),d.set(n,[W,y]),Reflect.ownKeys(n).forEach(k=>{if(Object.getOwnPropertyDescriptor(y,k))return;const C=Reflect.get(n,k),M={value:C,enumerable:!0,configurable:!0};if(x.has(C))te(C,!1);else if(C instanceof Promise)delete M.value,M.get=()=>A(C);else if(S.has(C)){const[v,z]=S.get(C);M.value=g(v,z(),A)}Object.defineProperty(y,k,M)}),Object.preventExtensions(y)},m=new WeakMap,h=[1,1],j=n=>{if(!H(n))throw new Error("object required");const W=m.get(n);if(W)return W;let A=h[0];const b=new Set,y=(i,o=++h[0])=>{A!==o&&(A=o,b.forEach(l=>l(i,o)))};let k=h[1];const C=(i=++h[1])=>(k!==i&&!b.size&&(k=i,v.forEach(([o])=>{const l=o[1](i);l>A&&(A=l)})),A),M=i=>(o,l)=>{const r=[...o];r[1]=[i,...r[1]],y(r,l)},v=new Map,z=(i,o)=>{if(b.size){const l=o[3](M(i));v.set(i,[o,l])}else v.set(i,[o])},Y=i=>{var o;const l=v.get(i);l&&(v.delete(i),(o=l[1])==null||o.call(l))},ue=i=>(b.add(i),b.size===1&&v.forEach(([l,r],w)=>{const D=l[3](M(w));v.set(w,[l,D])}),()=>{b.delete(i),b.size===0&&v.forEach(([l,r],w)=>{r&&(r(),v.set(w,[l]))})}),J=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),Z=(i,o,l,r,w)=>{if(i&&(e(o,r)||m.has(r)&&e(o,m.get(r))))return;Y(l),H(r)&&(r=he(r)||r);let D=r;if(r instanceof Promise)r.then(E=>{r.status="fulfilled",r.value=E,y(["resolve",[l],E])}).catch(E=>{r.status="rejected",r.reason=E,y(["reject",[l],E])});else{!S.has(r)&&s(r)&&(D=j(r));const E=!x.has(D)&&S.get(D);E&&z(l,E)}w(D),y(["set",[l],r,o])},$=t(J,{deleteProperty(i,o){const l=Reflect.get(i,o);Y(o);const r=Reflect.deleteProperty(i,o);return r&&y(["delete",[o],l]),r},set(i,o,l,r){const w=Reflect.has(i,o),D=Reflect.get(i,o,r);return Z(w,D,o,l,E=>{Reflect.set(i,o,E,r)}),!0},defineProperty(i,o,l){if(a(l)){const r=Reflect.getOwnPropertyDescriptor(i,o);if(!r||a(r))return Z(!!r&&"value"in r,r==null?void 0:r.value,o,l.value,w=>{Reflect.defineProperty(i,o,{...l,value:w})}),!0}return Reflect.defineProperty(i,o,l)}});m.set(n,$);const fe=[J,C,g,ue];return S.set($,fe),Reflect.ownKeys(n).forEach(i=>{const o=Object.getOwnPropertyDescriptor(n,i);"value"in o&&($[i]=n[i],delete o.value,delete o.writable),Object.defineProperty(J,i,o)}),$})=>[j,S,x,e,t,s,a,c,d,g,m,h],[ye]=be();function P(e={}){return ye(e)}function _(e,t,s){const a=S.get(e);let c;const d=[],g=a[3];let m=!1;const j=g(n=>{if(d.push(n),s){t(d.splice(0));return}c||(c=Promise.resolve().then(()=>{c=void 0,m&&t(d.splice(0))}))});return m=!0,()=>{m=!1,j()}}function ve(e,t){const s=S.get(e),[a,c,d]=s;return d(a,c(),t)}const u=P({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:u,subscribe(e){return _(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const c=encodeURIComponent(t);return`${a}wc?uri=${c}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const c=encodeURIComponent(t);return`${a}wc?uri=${c}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.1")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},Ie=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),f=P({enabled:Ie,userSessionId:"",events:[],connectedWalletId:void 0}),we={state:f,subscribe(e){return _(f.events,()=>e(ve(f.events[f.events.length-1])))},initialize(){f.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(f.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){f.connectedWalletId=e},click(e){if(f.enabled){const t={type:"CLICK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},track(e){if(f.enabled){const t={type:"TRACK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},view(e){if(f.enabled){const t={type:"VIEW",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}}},O=P({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:O,subscribe(e){return _(O,()=>e(O))},setChains(e){O.chains=e},setWalletConnectUri(e){O.walletConnectUri=e},setIsCustomDesktop(e){O.isCustomDesktop=e},setIsCustomMobile(e){O.isCustomMobile=e},setIsDataLoaded(e){O.isDataLoaded=e},setIsUiLoaded(e){O.isUiLoaded=e},setIsAuth(e){O.isAuth=e}},B=P({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:B,subscribe(e){return _(B,()=>e(B))},setConfig(e){var t,s;we.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),I.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(B,e)}};var Ee=Object.defineProperty,se=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Le.call(t,s)&&ne(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.6.1";async function K(e,t){const s=We({sdkType:Q,sdkVersion:X},t),a=new URL(e,G);return a.searchParams.append("projectId",N.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&a.searchParams.append(c,String(d))}),(await fetch(a)).json()}const U={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var Ce=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))De.call(t,s)&&re(e,s,t[s]);return e};const ae=p.isMobile(),L=P({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ne={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await U.getAllListings(s),c=Object.values(a);c.sort((d,g)=>{const m=e.indexOf(d.id),h=e.indexOf(g.id);return m-h}),L.recomendedWallets=c}else{const{chains:s,isAuth:a}=I.state,c=s==null?void 0:s.join(","),d=p.isArray(t),g={page:1,sdks:a?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:c,version:2,excludedIds:d?t.join(","):void 0},{listings:m}=ae?await U.getMobileListings(g):await U.getDesktopListings(g);L.recomendedWallets=Object.values(m)}return L.recomendedWallets},async getWallets(e){const t=Se({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=N.state,{recomendedWallets:c}=L;if(a==="ALL")return L.wallets;c.length?t.excludedIds=c.map(W=>W.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:d,search:g}=e,{listings:m,total:h}=ae?await U.getMobileListings(t):await U.getDesktopListings(t),j=Object.values(m),n=g?"search":"wallets";return L[n]={listings:[...L[n].listings,...j],total:h,page:d??1},{listings:j,total:h}},getWalletImageUrl(e){return U.getWalletImageUrl(e)},getAssetImageUrl(e){return U.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},T=P({open:!1}),q={state:T,subscribe(e){return _(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:a}=I.state;if(p.removeWalletConnectDeepLink(),I.setWalletConnectUri(e==null?void 0:e.uri),I.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&a)T.open=!0,t();else{const c=setInterval(()=>{const d=I.state;d.isUiLoaded&&d.isDataLoaded&&(clearInterval(c),T.open=!0,t())},200)}})},close(){T.open=!1}};var Pe=Object.defineProperty,ie=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ue=(e,t)=>{for(var s in t||(t={}))je.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))Me.call(t,s)&&le(e,s,t[s]);return e};function Re(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const V=P({themeMode:Re()?"dark":"light"}),ce={state:V,subscribe(e){return _(V,()=>e(V))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(V.themeMode=t),s&&(V.themeVariables=Ue({},s))}},R=P({open:!1,message:"",variant:"success"}),Ve={state:R,subscribe(e){return _(R,()=>e(R))},openToast(e,t){R.open=!0,R.message=e,R.variant=t},closeToast(){R.open=!1}};class _e{constructor(t){this.openModal=q.open,this.closeModal=q.close,this.subscribeModal=q.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-9a9933ac.js"),["assets/index-9a9933ac.js","assets/index-2bd6409d.js"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),I.setIsUiLoaded(!0)}}}const $e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:_e},Symbol.toStringTag,{value:"Module"}));export{we as R,de as T,p as a,$e as i,ce as n,Ve as o,I as p,q as s,Ne as t,N as y};