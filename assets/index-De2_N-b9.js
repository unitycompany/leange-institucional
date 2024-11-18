function ew(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var tw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W0={exports:{}},al={},G0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),nw=Symbol.for("react.portal"),rw=Symbol.for("react.fragment"),iw=Symbol.for("react.strict_mode"),ow=Symbol.for("react.profiler"),aw=Symbol.for("react.provider"),sw=Symbol.for("react.context"),lw=Symbol.for("react.forward_ref"),cw=Symbol.for("react.suspense"),uw=Symbol.for("react.memo"),dw=Symbol.for("react.lazy"),gf=Symbol.iterator;function pw(e){return e===null||typeof e!="object"?null:(e=gf&&e[gf]||e["@@iterator"],typeof e=="function"?e:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,X0={};function Di(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||Y0}Di.prototype.isReactComponent={};Di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q0(){}Q0.prototype=Di.prototype;function yd(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||Y0}var wd=yd.prototype=new Q0;wd.constructor=yd;K0(wd,Di.prototype);wd.isPureReactComponent=!0;var vf=Array.isArray,Z0=Object.prototype.hasOwnProperty,bd={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Z0.call(t,r)&&!J0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:oa,type:e,key:o,ref:a,props:i,_owner:bd.current}}function fw(e,t){return{$$typeof:oa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sd(e){return typeof e=="object"&&e!==null&&e.$$typeof===oa}function hw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xf=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hw(""+e.key):t.toString(36)}function Ha(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case oa:case nw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ql(a,0):r,vf(i)?(n="",e!=null&&(n=e.replace(xf,"$&/")+"/"),Ha(i,t,n,"",function(u){return u})):i!=null&&(Sd(i)&&(i=fw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",vf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ql(o,s);a+=Ha(o,t,n,l,i)}else if(l=pw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ql(o,s++),a+=Ha(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function va(e,t,n){if(e==null)return e;var r=[],i=0;return Ha(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},Ua={transition:null},gw={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:bd};function tg(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:va,forEach:function(e,t,n){va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return va(e,function(){t++}),t},toArray:function(e){return va(e,function(t){return t})||[]},only:function(e){if(!Sd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=Di;ee.Fragment=rw;ee.Profiler=ow;ee.PureComponent=yd;ee.StrictMode=iw;ee.Suspense=cw;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;ee.act=tg;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=K0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=bd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Z0.call(t,l)&&!J0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:oa,type:e.type,key:i,ref:o,props:r,_owner:a}};ee.createContext=function(e){return e={$$typeof:sw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:aw,_context:e},e.Consumer=e};ee.createElement=eg;ee.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:lw,render:e}};ee.isValidElement=Sd;ee.lazy=function(e){return{$$typeof:dw,_payload:{_status:-1,_result:e},_init:mw}};ee.memo=function(e,t){return{$$typeof:uw,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};ee.unstable_act=tg;ee.useCallback=function(e,t){return at.current.useCallback(e,t)};ee.useContext=function(e){return at.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return at.current.useDeferredValue(e)};ee.useEffect=function(e,t){return at.current.useEffect(e,t)};ee.useId=function(){return at.current.useId()};ee.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return at.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};ee.useRef=function(e){return at.current.useRef(e)};ee.useState=function(e){return at.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return at.current.useTransition()};ee.version="18.3.1";G0.exports=ee;var T=G0.exports;const K=Vi(T),vw=ew({__proto__:null,default:K},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=T,yw=Symbol.for("react.element"),ww=Symbol.for("react.fragment"),bw=Object.prototype.hasOwnProperty,Sw=xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jw={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)bw.call(t,r)&&!jw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:yw,type:e,key:o,ref:a,props:i,_owner:Sw.current}}al.Fragment=ww;al.jsx=ng;al.jsxs=ng;W0.exports=al;var c=W0.exports,rg={exports:{}},Ct={},ig={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,D){var N=A.length;A.push(D);e:for(;0<N;){var Q=N-1>>>1,ne=A[Q];if(0<i(ne,D))A[Q]=D,A[N]=ne,N=Q;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var D=A[0],N=A.pop();if(N!==D){A[0]=N;e:for(var Q=0,ne=A.length,gt=ne>>>1;Q<gt;){var vt=2*(Q+1)-1,Pt=A[vt],Ue=vt+1,zt=A[Ue];if(0>i(Pt,N))Ue<ne&&0>i(zt,Pt)?(A[Q]=zt,A[Ue]=N,Q=Ue):(A[Q]=Pt,A[vt]=N,Q=vt);else if(Ue<ne&&0>i(zt,N))A[Q]=zt,A[Ue]=N,Q=Ue;else break e}}return D}function i(A,D){var N=A.sortIndex-D.sortIndex;return N!==0?N:A.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,p=null,f=3,v=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=A)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function w(A){if(y=!1,m(A),!x)if(n(l)!==null)x=!0,ae(S);else{var D=n(u);D!==null&&te(w,D.startTime-A)}}function S(A,D){x=!1,y&&(y=!1,g(k),k=-1),v=!0;var N=f;try{for(m(D),p=n(l);p!==null&&(!(p.expirationTime>D)||A&&!O());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,f=p.priorityLevel;var ne=Q(p.expirationTime<=D);D=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(l)&&r(l),m(D)}else r(l);p=n(l)}if(p!==null)var gt=!0;else{var vt=n(u);vt!==null&&te(w,vt.startTime-D),gt=!1}return gt}finally{p=null,f=N,v=!1}}var j=!1,C=null,k=-1,P=5,E=-1;function O(){return!(e.unstable_now()-E<P)}function F(){if(C!==null){var A=e.unstable_now();E=A;var D=!0;try{D=C(!0,A)}finally{D?V():(j=!1,C=null)}}else j=!1}var V;if(typeof h=="function")V=function(){h(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,U=q.port2;q.port1.onmessage=F,V=function(){U.postMessage(null)}}else V=function(){b(F,0)};function ae(A){C=A,j||(j=!0,V())}function te(A,D){k=b(function(){A(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ae(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var N=f;f=D;try{return A()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var N=f;f=A;try{return D()}finally{f=N}},e.unstable_scheduleCallback=function(A,D,N){var Q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?Q+N:Q):N=Q,A){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=N+ne,A={id:d++,callback:D,priorityLevel:A,startTime:N,expirationTime:ne,sortIndex:-1},N>Q?(A.sortIndex=N,t(u,A),n(l)===null&&A===n(u)&&(y?(g(k),k=-1):y=!0,te(w,N-Q))):(A.sortIndex=ne,t(l,A),x||v||(x=!0,ae(S))),A},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(A){var D=f;return function(){var N=f;f=D;try{return A.apply(this,arguments)}finally{f=N}}}})(og);ig.exports=og;var Tw=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w=T,Tt=Tw;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Oo={};function Nr(e,t){Si(e,t),Si(e+"Capture",t)}function Si(e,t){for(Oo[e]=t,e=0;e<t.length;e++)ag.add(t[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,Cw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},wf={};function kw(e){return Uc.call(wf,e)?!0:Uc.call(yf,e)?!1:Cw.test(e)?wf[e]=!0:(yf[e]=!0,!1)}function Ew(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pw(e,t,n,r){if(t===null||typeof t>"u"||Ew(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Td(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jd,Td);Ke[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jd,Td);Ke[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jd,Td);Ke[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function _d(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pw(t,n,i,r)&&(n=null),r||i===null?kw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var On=_w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),Kr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),lg=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Hl;function uo(e){if(Hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hl=t&&t[1]||""}return`
`+Hl+e}var Ul=!1;function Wl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?uo(e):""}function zw(e){switch(e.tag){case 5:return uo(e.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xr:return"Fragment";case Kr:return"Portal";case Wc:return"Profiler";case Cd:return"StrictMode";case Gc:return"Suspense";case Yc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case sg:return(e._context.displayName||"Context")+".Provider";case kd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ed:return t=e.displayName||null,t!==null?t:Kc(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return Kc(e(t))}catch{}}return null}function Aw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(t);case 8:return t===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ug(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mw(e){var t=ug(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ya(e){e._valueTracker||(e._valueTracker=Mw(e))}function dg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ug(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xc(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ar(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pg(e,t){t=t.checked,t!=null&&_d(e,"checked",t,!1)}function Qc(e,t){pg(e,t);var n=ar(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zc(e,t.type,ar(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zc(e,t,n){(t!=="number"||hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var po=Array.isArray;function fi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ar(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(po(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ar(n)}}function fg(e,t){var n=ar(t.value),r=ar(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,mg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lw=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(e){Lw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xo[t]=xo[e]})});function gg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xo.hasOwnProperty(e)&&xo[e]?(""+t).trim():t+"px"}function vg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ow=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(Ow[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function Pd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,hi=null,mi=null;function Cf(e){if(e=la(e)){if(typeof iu!="function")throw Error(I(280));var t=e.stateNode;t&&(t=dl(t),iu(e.stateNode,e.type,t))}}function xg(e){hi?mi?mi.push(e):mi=[e]:hi=e}function yg(){if(hi){var e=hi,t=mi;if(mi=hi=null,Cf(e),t)for(e=0;e<t.length;e++)Cf(t[e])}}function wg(e,t){return e(t)}function bg(){}var Gl=!1;function Sg(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return wg(e,t,n)}finally{Gl=!1,(hi!==null||mi!==null)&&(bg(),yg())}}function Ro(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var ou=!1;if(zn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ou=!1}function Iw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yo=!1,ms=null,gs=!1,au=null,Rw={onError:function(e){yo=!0,ms=e}};function Vw(e,t,n,r,i,o,a,s,l){yo=!1,ms=null,Iw.apply(Rw,arguments)}function Dw(e,t,n,r,i,o,a,s,l){if(Vw.apply(this,arguments),yo){if(yo){var u=ms;yo=!1,ms=null}else throw Error(I(198));gs||(gs=!0,au=u)}}function Fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kf(e){if(Fr(e)!==e)throw Error(I(188))}function Nw(e){var t=e.alternate;if(!t){if(t=Fr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kf(i),e;if(o===r)return kf(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Tg(e){return e=Nw(e),e!==null?_g(e):null}function _g(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_g(e);if(t!==null)return t;e=e.sibling}return null}var Cg=Tt.unstable_scheduleCallback,Ef=Tt.unstable_cancelCallback,Fw=Tt.unstable_shouldYield,Bw=Tt.unstable_requestPaint,Ee=Tt.unstable_now,$w=Tt.unstable_getCurrentPriorityLevel,zd=Tt.unstable_ImmediatePriority,kg=Tt.unstable_UserBlockingPriority,vs=Tt.unstable_NormalPriority,qw=Tt.unstable_LowPriority,Eg=Tt.unstable_IdlePriority,sl=null,cn=null;function Hw(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Gw,Uw=Math.log,Ww=Math.LN2;function Gw(e){return e>>>=0,e===0?32:31-(Uw(e)/Ww|0)|0}var ba=64,Sa=4194304;function fo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=fo(s):(o&=a,o!==0&&(r=fo(o)))}else a=n&~i,a!==0?r=fo(a):o!==0&&(r=fo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Yt(t),i=1<<n,r|=e[n],t&=~i;return r}function Yw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Yt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Yw(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pg(){var e=ba;return ba<<=1,!(ba&4194240)&&(ba=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function aa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yt(t),e[t]=n}function Xw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ad(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ag,Md,Mg,Lg,Og,lu=!1,ja=[],Xn=null,Qn=null,Zn=null,Vo=new Map,Do=new Map,Hn=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(t.pointerId)}}function Zi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=la(t),t!==null&&Md(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zw(e,t,n,r,i){switch(t){case"focusin":return Xn=Zi(Xn,e,t,n,r,i),!0;case"dragenter":return Qn=Zi(Qn,e,t,n,r,i),!0;case"mouseover":return Zn=Zi(Zn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vo.set(o,Zi(Vo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Do.set(o,Zi(Do.get(o)||null,e,t,n,r,i)),!0}return!1}function Ig(e){var t=br(e.target);if(t!==null){var n=Fr(t);if(n!==null){if(t=n.tag,t===13){if(t=jg(n),t!==null){e.blockedOn=t,Og(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=la(n),t!==null&&Md(t),e.blockedOn=n,!1;t.shift()}return!0}function zf(e,t,n){Wa(e)&&n.delete(t)}function Jw(){lu=!1,Xn!==null&&Wa(Xn)&&(Xn=null),Qn!==null&&Wa(Qn)&&(Qn=null),Zn!==null&&Wa(Zn)&&(Zn=null),Vo.forEach(zf),Do.forEach(zf)}function Ji(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,Jw)))}function No(e){function t(i){return Ji(i,e)}if(0<ja.length){Ji(ja[0],e);for(var n=1;n<ja.length;n++){var r=ja[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&Ji(Xn,e),Qn!==null&&Ji(Qn,e),Zn!==null&&Ji(Zn,e),Vo.forEach(t),Do.forEach(t),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&Hn.shift()}var gi=On.ReactCurrentBatchConfig,ys=!0;function e2(e,t,n,r){var i=le,o=gi.transition;gi.transition=null;try{le=1,Ld(e,t,n,r)}finally{le=i,gi.transition=o}}function t2(e,t,n,r){var i=le,o=gi.transition;gi.transition=null;try{le=4,Ld(e,t,n,r)}finally{le=i,gi.transition=o}}function Ld(e,t,n,r){if(ys){var i=cu(e,t,n,r);if(i===null)ic(e,t,r,ws,n),Pf(e,r);else if(Zw(i,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<Qw.indexOf(e)){for(;i!==null;){var o=la(i);if(o!==null&&Ag(o),o=cu(e,t,n,r),o===null&&ic(e,t,r,ws,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ic(e,t,r,null,n)}}var ws=null;function cu(e,t,n,r){if(ws=null,e=Pd(r),e=br(e),e!==null)if(t=Fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ws=e,null}function Rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($w()){case zd:return 1;case kg:return 4;case vs:case qw:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var Wn=null,Od=null,Ga=null;function Vg(){if(Ga)return Ga;var e,t=Od,n=t.length,r,i="value"in Wn?Wn.value:Wn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ga=i.slice(e,1<r?1-r:void 0)}function Ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ta(){return!0}function Af(){return!1}function kt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ta:Af,this.isPropagationStopped=Af,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=kt(Ni),sa=je({},Ni,{view:0,detail:0}),n2=kt(sa),Kl,Xl,eo,ll=je({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Kl=e.screenX-eo.screenX,Xl=e.screenY-eo.screenY):Xl=Kl=0,eo=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Mf=kt(ll),r2=je({},ll,{dataTransfer:0}),i2=kt(r2),o2=je({},sa,{relatedTarget:0}),Ql=kt(o2),a2=je({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),s2=kt(a2),l2=je({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c2=kt(l2),u2=je({},Ni,{data:0}),Lf=kt(u2),d2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=f2[e])?!!t[e]:!1}function Rd(){return h2}var m2=je({},sa,{key:function(e){if(e.key){var t=d2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g2=kt(m2),v2=je({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=kt(v2),x2=je({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),y2=kt(x2),w2=je({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),b2=kt(w2),S2=je({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j2=kt(S2),T2=[9,13,27,32],Vd=zn&&"CompositionEvent"in window,wo=null;zn&&"documentMode"in document&&(wo=document.documentMode);var _2=zn&&"TextEvent"in window&&!wo,Dg=zn&&(!Vd||wo&&8<wo&&11>=wo),If=" ",Rf=!1;function Ng(e,t){switch(e){case"keyup":return T2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function C2(e,t){switch(e){case"compositionend":return Fg(t);case"keypress":return t.which!==32?null:(Rf=!0,If);case"textInput":return e=t.data,e===If&&Rf?null:e;default:return null}}function k2(e,t){if(Qr)return e==="compositionend"||!Vd&&Ng(e,t)?(e=Vg(),Ga=Od=Wn=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dg&&t.locale!=="ko"?null:t.data;default:return null}}var E2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E2[e.type]:t==="textarea"}function Bg(e,t,n,r){xg(r),t=bs(t,"onChange"),0<t.length&&(n=new Id("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bo=null,Fo=null;function P2(e){Zg(e,0)}function cl(e){var t=ei(e);if(dg(t))return e}function z2(e,t){if(e==="change")return t}var $g=!1;if(zn){var Zl;if(zn){var Jl="oninput"in document;if(!Jl){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Jl=typeof Df.oninput=="function"}Zl=Jl}else Zl=!1;$g=Zl&&(!document.documentMode||9<document.documentMode)}function Nf(){bo&&(bo.detachEvent("onpropertychange",qg),Fo=bo=null)}function qg(e){if(e.propertyName==="value"&&cl(Fo)){var t=[];Bg(t,Fo,e,Pd(e)),Sg(P2,t)}}function A2(e,t,n){e==="focusin"?(Nf(),bo=t,Fo=n,bo.attachEvent("onpropertychange",qg)):e==="focusout"&&Nf()}function M2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Fo)}function L2(e,t){if(e==="click")return cl(t)}function O2(e,t){if(e==="input"||e==="change")return cl(t)}function I2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:I2;function Bo(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uc.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bf(e,t){var n=Ff(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ff(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ug(){for(var e=window,t=hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hs(e.document)}return t}function Dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R2(e){var t=Ug(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Bf(n,o);var a=Bf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var V2=zn&&"documentMode"in document&&11>=document.documentMode,Zr=null,uu=null,So=null,du=!1;function $f(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Zr==null||Zr!==hs(r)||(r=Zr,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Bo(So,r)||(So=r,r=bs(uu,"onSelect"),0<r.length&&(t=new Id("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jr={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},ec={},Wg={};zn&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function ul(e){if(ec[e])return ec[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wg)return ec[e]=t[n];return e}var Gg=ul("animationend"),Yg=ul("animationiteration"),Kg=ul("animationstart"),Xg=ul("transitionend"),Qg=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Qg.set(e,t),Nr(t,[e])}for(var tc=0;tc<qf.length;tc++){var nc=qf[tc],D2=nc.toLowerCase(),N2=nc[0].toUpperCase()+nc.slice(1);ur(D2,"on"+N2)}ur(Gg,"onAnimationEnd");ur(Yg,"onAnimationIteration");ur(Kg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Xg,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Hf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dw(r,t,void 0,e),e.currentTarget=null}function Zg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Hf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Hf(i,s,u),o=l}}}if(gs)throw e=au,gs=!1,au=null,e}function fe(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(Jg(t,e,2,!1),n.add(r))}function rc(e,t,n){var r=0;t&&(r|=4),Jg(n,e,r,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[Ca]){e[Ca]=!0,ag.forEach(function(n){n!=="selectionchange"&&(F2.has(n)||rc(n,!1,e),rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,rc("selectionchange",!1,t))}}function Jg(e,t,n,r){switch(Rg(t)){case 1:var i=e2;break;case 4:i=t2;break;default:i=Ld}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ic(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=br(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Sg(function(){var u=o,d=Pd(n),p=[];e:{var f=Qg.get(e);if(f!==void 0){var v=Id,x=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":v=g2;break;case"focusin":x="focus",v=Ql;break;case"focusout":x="blur",v=Ql;break;case"beforeblur":case"afterblur":v=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=i2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=y2;break;case Gg:case Yg:case Kg:v=s2;break;case Xg:v=b2;break;case"scroll":v=n2;break;case"wheel":v=j2;break;case"copy":case"cut":case"paste":v=c2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Of}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Ro(h,g),w!=null&&y.push(qo(h,w,m)))),b)break;h=h.return}0<y.length&&(f=new v(f,x,null,n,d),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ru&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[An]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?br(x):null,x!==null&&(b=Fr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=Mf,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Of,w="onPointerLeave",g="onPointerEnter",h="pointer"),b=v==null?f:ei(v),m=x==null?f:ei(x),f=new y(w,h+"leave",v,n,d),f.target=b,f.relatedTarget=m,w=null,br(d)===u&&(y=new y(g,h+"enter",x,n,d),y.target=m,y.relatedTarget=b,w=y),b=w,v&&x)t:{for(y=v,g=x,h=0,m=y;m;m=Wr(m))h++;for(m=0,w=g;w;w=Wr(w))m++;for(;0<h-m;)y=Wr(y),h--;for(;0<m-h;)g=Wr(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=Wr(y),g=Wr(g)}y=null}else y=null;v!==null&&Uf(p,f,v,y,!1),x!==null&&b!==null&&Uf(p,b,x,y,!0)}}e:{if(f=u?ei(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=z2;else if(Vf(f))if($g)S=O2;else{S=M2;var j=A2}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=L2);if(S&&(S=S(e,u))){Bg(p,S,n,d);break e}j&&j(e,f,u),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&Zc(f,"number",f.value)}switch(j=u?ei(u):window,e){case"focusin":(Vf(j)||j.contentEditable==="true")&&(Zr=j,uu=u,So=null);break;case"focusout":So=uu=Zr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,$f(p,n,d);break;case"selectionchange":if(V2)break;case"keydown":case"keyup":$f(p,n,d)}var C;if(Vd)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Qr?Ng(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Dg&&n.locale!=="ko"&&(Qr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Qr&&(C=Vg()):(Wn=d,Od="value"in Wn?Wn.value:Wn.textContent,Qr=!0)),j=bs(u,k),0<j.length&&(k=new Lf(k,e,null,n,d),p.push({event:k,listeners:j}),C?k.data=C:(C=Fg(n),C!==null&&(k.data=C)))),(C=_2?C2(e,n):k2(e,n))&&(u=bs(u,"onBeforeInput"),0<u.length&&(d=new Lf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Zg(p,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ro(e,n),o!=null&&r.unshift(qo(e,o,i)),o=Ro(e,t),o!=null&&r.push(qo(e,o,i))),e=e.return}return r}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Ro(n,o),l!=null&&a.unshift(qo(n,l,s))):i||(l=Ro(n,o),l!=null&&a.push(qo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var B2=/\r\n?/g,$2=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(B2,`
`).replace($2,"")}function ka(e,t,n){if(t=Wf(t),Wf(e)!==t&&n)throw Error(I(425))}function Ss(){}var pu=null,fu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,q2=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,H2=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(e){return Gf.resolve(null).then(e).catch(U2)}:mu;function U2(e){setTimeout(function(){throw e})}function oc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),No(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(t)}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),an="__reactFiber$"+Fi,Ho="__reactProps$"+Fi,An="__reactContainer$"+Fi,gu="__reactEvents$"+Fi,W2="__reactListeners$"+Fi,G2="__reactHandles$"+Fi;function br(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[An]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yf(e);e!==null;){if(n=e[an])return n;e=Yf(e)}return t}e=n,n=e.parentNode}return null}function la(e){return e=e[an]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function dl(e){return e[Ho]||null}var vu=[],ti=-1;function dr(e){return{current:e}}function me(e){0>ti||(e.current=vu[ti],vu[ti]=null,ti--)}function ue(e,t){ti++,vu[ti]=e.current,e.current=t}var sr={},nt=dr(sr),ft=dr(!1),Ar=sr;function ji(e,t){var n=e.type.contextTypes;if(!n)return sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function js(){me(ft),me(nt)}function Kf(e,t,n){if(nt.current!==sr)throw Error(I(168));ue(nt,t),ue(ft,n)}function e1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Aw(e)||"Unknown",i));return je({},n,r)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sr,Ar=nt.current,ue(nt,e),ue(ft,ft.current),!0}function Xf(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=e1(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,me(ft),me(nt),ue(nt,e)):me(ft),ue(ft,n)}var yn=null,pl=!1,ac=!1;function t1(e){yn===null?yn=[e]:yn.push(e)}function Y2(e){pl=!0,t1(e)}function pr(){if(!ac&&yn!==null){ac=!0;var e=0,t=le;try{var n=yn;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yn=null,pl=!1}catch(i){throw yn!==null&&(yn=yn.slice(e+1)),Cg(zd,pr),i}finally{le=t,ac=!1}}return null}var ni=[],ri=0,_s=null,Cs=0,Ot=[],It=0,Mr=null,wn=1,bn="";function vr(e,t){ni[ri++]=Cs,ni[ri++]=_s,_s=e,Cs=t}function n1(e,t,n){Ot[It++]=wn,Ot[It++]=bn,Ot[It++]=Mr,Mr=e;var r=wn;e=bn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var o=32-Yt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,wn=1<<32-Yt(t)+i|n<<i|r,bn=o+e}else wn=1<<o|n<<i|r,bn=e}function Nd(e){e.return!==null&&(vr(e,1),n1(e,1,0))}function Fd(e){for(;e===_s;)_s=ni[--ri],ni[ri]=null,Cs=ni[--ri],ni[ri]=null;for(;e===Mr;)Mr=Ot[--It],Ot[It]=null,bn=Ot[--It],Ot[It]=null,wn=Ot[--It],Ot[It]=null}var jt=null,St=null,xe=!1,Wt=null;function r1(e,t){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,St=Jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mr!==null?{id:wn,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,St=null,!0):!1;default:return!1}}function xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yu(e){if(xe){var t=St;if(t){var n=t;if(!Qf(e,t)){if(xu(e))throw Error(I(418));t=Jn(n.nextSibling);var r=jt;t&&Qf(e,t)?r1(r,n):(e.flags=e.flags&-4097|2,xe=!1,jt=e)}}else{if(xu(e))throw Error(I(418));e.flags=e.flags&-4097|2,xe=!1,jt=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Ea(e){if(e!==jt)return!1;if(!xe)return Zf(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=St)){if(xu(e))throw i1(),Error(I(418));for(;t;)r1(e,t),t=Jn(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){St=Jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}St=null}}else St=jt?Jn(e.stateNode.nextSibling):null;return!0}function i1(){for(var e=St;e;)e=Jn(e.nextSibling)}function Ti(){St=jt=null,xe=!1}function Bd(e){Wt===null?Wt=[e]:Wt.push(e)}var K2=On.ReactCurrentBatchConfig;function to(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jf(e){var t=e._init;return t(e._payload)}function o1(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=rr(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,m,w){return h===null||h.tag!==6?(h=fc(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var S=m.type;return S===Xr?d(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$n&&Jf(S)===h.type)?(w=i(h,m.props),w.ref=to(g,h,m),w.return=g,w):(w=ts(m.type,m.key,m.props,null,g.mode,w),w.ref=to(g,h,m),w.return=g,w)}function u(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=hc(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,w,S){return h===null||h.tag!==7?(h=kr(m,g.mode,w,S),h.return=g,h):(h=i(h,m),h.return=g,h)}function p(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=fc(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xa:return m=ts(h.type,h.key,h.props,null,g.mode,m),m.ref=to(g,null,h),m.return=g,m;case Kr:return h=hc(h,g.mode,m),h.return=g,h;case $n:var w=h._init;return p(g,w(h._payload),m)}if(po(h)||Xi(h))return h=kr(h,g.mode,m,null),h.return=g,h;Pa(g,h)}return null}function f(g,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xa:return m.key===S?l(g,h,m,w):null;case Kr:return m.key===S?u(g,h,m,w):null;case $n:return S=m._init,f(g,h,S(m._payload),w)}if(po(m)||Xi(m))return S!==null?null:d(g,h,m,w,null);Pa(g,m)}return null}function v(g,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,s(h,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xa:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,S);case Kr:return g=g.get(w.key===null?m:w.key)||null,u(h,g,w,S);case $n:var j=w._init;return v(g,h,m,j(w._payload),S)}if(po(w)||Xi(w))return g=g.get(m)||null,d(h,g,w,S,null);Pa(h,w)}return null}function x(g,h,m,w){for(var S=null,j=null,C=h,k=h=0,P=null;C!==null&&k<m.length;k++){C.index>k?(P=C,C=null):P=C.sibling;var E=f(g,C,m[k],w);if(E===null){C===null&&(C=P);break}e&&C&&E.alternate===null&&t(g,C),h=o(E,h,k),j===null?S=E:j.sibling=E,j=E,C=P}if(k===m.length)return n(g,C),xe&&vr(g,k),S;if(C===null){for(;k<m.length;k++)C=p(g,m[k],w),C!==null&&(h=o(C,h,k),j===null?S=C:j.sibling=C,j=C);return xe&&vr(g,k),S}for(C=r(g,C);k<m.length;k++)P=v(C,g,k,m[k],w),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?k:P.key),h=o(P,h,k),j===null?S=P:j.sibling=P,j=P);return e&&C.forEach(function(O){return t(g,O)}),xe&&vr(g,k),S}function y(g,h,m,w){var S=Xi(m);if(typeof S!="function")throw Error(I(150));if(m=S.call(m),m==null)throw Error(I(151));for(var j=S=null,C=h,k=h=0,P=null,E=m.next();C!==null&&!E.done;k++,E=m.next()){C.index>k?(P=C,C=null):P=C.sibling;var O=f(g,C,E.value,w);if(O===null){C===null&&(C=P);break}e&&C&&O.alternate===null&&t(g,C),h=o(O,h,k),j===null?S=O:j.sibling=O,j=O,C=P}if(E.done)return n(g,C),xe&&vr(g,k),S;if(C===null){for(;!E.done;k++,E=m.next())E=p(g,E.value,w),E!==null&&(h=o(E,h,k),j===null?S=E:j.sibling=E,j=E);return xe&&vr(g,k),S}for(C=r(g,C);!E.done;k++,E=m.next())E=v(C,g,k,E.value,w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?k:E.key),h=o(E,h,k),j===null?S=E:j.sibling=E,j=E);return e&&C.forEach(function(F){return t(g,F)}),xe&&vr(g,k),S}function b(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Xr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xa:e:{for(var S=m.key,j=h;j!==null;){if(j.key===S){if(S=m.type,S===Xr){if(j.tag===7){n(g,j.sibling),h=i(j,m.props.children),h.return=g,g=h;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$n&&Jf(S)===j.type){n(g,j.sibling),h=i(j,m.props),h.ref=to(g,j,m),h.return=g,g=h;break e}n(g,j);break}else t(g,j);j=j.sibling}m.type===Xr?(h=kr(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=ts(m.type,m.key,m.props,null,g.mode,w),w.ref=to(g,h,m),w.return=g,g=w)}return a(g);case Kr:e:{for(j=m.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=hc(m,g.mode,w),h.return=g,g=h}return a(g);case $n:return j=m._init,b(g,h,j(m._payload),w)}if(po(m))return x(g,h,m,w);if(Xi(m))return y(g,h,m,w);Pa(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=fc(m,g.mode,w),h.return=g,g=h),a(g)):n(g,h)}return b}var _i=o1(!0),a1=o1(!1),ks=dr(null),Es=null,ii=null,$d=null;function qd(){$d=ii=Es=null}function Hd(e){var t=ks.current;me(ks),e._currentValue=t}function wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vi(e,t){Es=e,$d=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if($d!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(Es===null)throw Error(I(308));ii=e,Es.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var Sr=null;function Ud(e){Sr===null?Sr=[e]:Sr.push(e)}function s1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ud(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mn(e,r)}function Mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function Wd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function er(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ud(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mn(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ad(e,n)}}function eh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ps(e,t,n,r){var i=e.updateQueue;qn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,v=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(f=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(v,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(v,p,f):x,f==null)break e;p=je({},p,f);break e;case 2:qn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Or|=a,e.lanes=a,e.memoizedState=p}}function th(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var ca={},un=dr(ca),Uo=dr(ca),Wo=dr(ca);function jr(e){if(e===ca)throw Error(I(174));return e}function Gd(e,t){switch(ue(Wo,t),ue(Uo,e),ue(un,ca),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}me(un),ue(un,t)}function Ci(){me(un),me(Uo),me(Wo)}function c1(e){jr(Wo.current);var t=jr(un.current),n=eu(t,e.type);t!==n&&(ue(Uo,e),ue(un,n))}function Yd(e){Uo.current===e&&(me(un),me(Uo))}var ye=dr(0);function zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sc=[];function Kd(){for(var e=0;e<sc.length;e++)sc[e]._workInProgressVersionPrimary=null;sc.length=0}var Xa=On.ReactCurrentDispatcher,lc=On.ReactCurrentBatchConfig,Lr=0,Se=null,Le=null,Ne=null,As=!1,jo=!1,Go=0,X2=0;function Xe(){throw Error(I(321))}function Xd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function Qd(e,t,n,r,i,o){if(Lr=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?e3:t3,e=n(r,i),jo){o=0;do{if(jo=!1,Go=0,25<=o)throw Error(I(301));o+=1,Ne=Le=null,t.updateQueue=null,Xa.current=n3,e=n(r,i)}while(jo)}if(Xa.current=Ms,t=Le!==null&&Le.next!==null,Lr=0,Ne=Le=Se=null,As=!1,t)throw Error(I(300));return e}function Zd(){var e=Go!==0;return Go=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Se.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Nt(){if(Le===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ne===null?Se.memoizedState:Ne.next;if(t!==null)Ne=t,Le=e;else{if(e===null)throw Error(I(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ne===null?Se.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Yo(e,t){return typeof t=="function"?t(e):t}function cc(e){var t=Nt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Lr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,Se.lanes|=d,Or|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Qt(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,Or|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uc(e){var t=Nt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Qt(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function u1(){}function d1(e,t){var n=Se,r=Nt(),i=t(),o=!Qt(r.memoizedState,i);if(o&&(r.memoizedState=i,dt=!0),r=r.queue,Jd(h1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Ko(9,f1.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(I(349));Lr&30||p1(n,t,i)}return i}function p1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f1(e,t,n,r){t.value=n,t.getSnapshot=r,m1(t)&&g1(e)}function h1(e,t,n){return n(function(){m1(t)&&g1(e)})}function m1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function g1(e){var t=Mn(e,1);t!==null&&Kt(t,e,1,-1)}function nh(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e},t.queue=e,e=e.dispatch=J2.bind(null,Se,e),[t.memoizedState,e]}function Ko(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function v1(){return Nt().memoizedState}function Qa(e,t,n,r){var i=rn();Se.flags|=e,i.memoizedState=Ko(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var i=Nt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&Xd(r,a.deps)){i.memoizedState=Ko(t,n,o,r);return}}Se.flags|=e,i.memoizedState=Ko(1|t,n,o,r)}function rh(e,t){return Qa(8390656,8,e,t)}function Jd(e,t){return fl(2048,8,e,t)}function x1(e,t){return fl(4,2,e,t)}function y1(e,t){return fl(4,4,e,t)}function w1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function b1(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,w1.bind(null,t,e),n)}function ep(){}function S1(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function j1(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function T1(e,t,n){return Lr&21?(Qt(n,t)||(n=Pg(),Se.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function Q2(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=lc.transition;lc.transition={};try{e(!1),t()}finally{le=n,lc.transition=r}}function _1(){return Nt().memoizedState}function Z2(e,t,n){var r=nr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C1(e))k1(t,n);else if(n=s1(e,t,n,r),n!==null){var i=ot();Kt(n,e,r,i),E1(n,t,r)}}function J2(e,t,n){var r=nr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C1(e))k1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Qt(s,a)){var l=t.interleaved;l===null?(i.next=i,Ud(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=s1(e,t,i,r),n!==null&&(i=ot(),Kt(n,e,r,i),E1(n,t,r))}}function C1(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function k1(e,t){jo=As=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ad(e,n)}}var Ms={readContext:Dt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},e3={readContext:Dt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:rh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,w1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=rn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z2.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:nh,useDebugValue:ep,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=nh(!1),t=e[0];return e=Q2.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=rn();if(xe){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),$e===null)throw Error(I(349));Lr&30||p1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rh(h1.bind(null,r,o,e),[e]),r.flags|=2048,Ko(9,f1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=rn(),t=$e.identifierPrefix;if(xe){var n=bn,r=wn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t3={readContext:Dt,useCallback:S1,useContext:Dt,useEffect:Jd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:j1,useReducer:cc,useRef:v1,useState:function(){return cc(Yo)},useDebugValue:ep,useDeferredValue:function(e){var t=Nt();return T1(t,Le.memoizedState,e)},useTransition:function(){var e=cc(Yo)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:d1,useId:_1,unstable_isNewReconciler:!1},n3={readContext:Dt,useCallback:S1,useContext:Dt,useEffect:Jd,useImperativeHandle:b1,useInsertionEffect:x1,useLayoutEffect:y1,useMemo:j1,useReducer:uc,useRef:v1,useState:function(){return uc(Yo)},useDebugValue:ep,useDeferredValue:function(e){var t=Nt();return Le===null?t.memoizedState=e:T1(t,Le.memoizedState,e)},useTransition:function(){var e=uc(Yo)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:d1,useId:_1,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),i=nr(e),o=jn(r,i);o.payload=t,n!=null&&(o.callback=n),t=er(e,o,i),t!==null&&(Kt(t,e,i,r),Ka(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),i=nr(e),o=jn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=er(e,o,i),t!==null&&(Kt(t,e,i,r),Ka(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=nr(e),i=jn(n,r);i.tag=2,t!=null&&(i.callback=t),t=er(e,i,r),t!==null&&(Kt(t,e,r,n),Ka(t,e,r))}};function ih(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,o):!0}function P1(e,t,n){var r=!1,i=sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Dt(o):(i=ht(t)?Ar:nt.current,r=t.contextTypes,o=(r=r!=null)?ji(e,i):sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function oh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Wd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Dt(o):(o=ht(t)?Ar:nt.current,i.context=ji(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hl.enqueueReplaceState(i,i.state,null),Ps(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,t){try{var n="",r=t;do n+=zw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r3=typeof WeakMap=="function"?WeakMap:Map;function z1(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Os||(Os=!0,Lu=r),ju(e,t)},n}function A1(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ju(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ju(e,t),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ah(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=v3.bind(null,e,t,n),t.then(e,e))}function sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,er(n,t,1))),n.lanes|=1),e)}var i3=On.ReactCurrentOwner,dt=!1;function it(e,t,n,r){t.child=e===null?a1(t,null,n,r):_i(t,e.child,n,r)}function ch(e,t,n,r,i){n=n.render;var o=t.ref;return vi(t,i),r=Qd(e,t,n,r,o,i),n=Zd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(xe&&n&&Nd(t),t.flags|=1,it(e,t,r,i),t.child)}function uh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!lp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,M1(e,t,o,r,i)):(e=ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(a,r)&&e.ref===t.ref)return Ln(e,t,i)}return t.flags|=1,e=rr(o,r),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Bo(o,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,Ln(e,t,i)}return Tu(e,t,n,r,i)}function L1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(ai,yt),yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(ai,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(ai,yt),yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(ai,yt),yt|=r;return it(e,t,i,n),t.child}function O1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tu(e,t,n,r,i){var o=ht(n)?Ar:nt.current;return o=ji(t,o),vi(t,i),n=Qd(e,t,n,r,o,i),r=Zd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(xe&&r&&Nd(t),t.flags|=1,it(e,t,n,i),t.child)}function dh(e,t,n,r,i){if(ht(n)){var o=!0;Ts(t)}else o=!1;if(vi(t,i),t.stateNode===null)Za(e,t),P1(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ht(n)?Ar:nt.current,u=ji(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&oh(t,a,r,u),qn=!1;var f=t.memoizedState;a.state=f,Ps(t,r,a,i),l=t.memoizedState,s!==r||f!==l||ft.current||qn?(typeof d=="function"&&(bu(t,n,d,r),l=t.memoizedState),(s=qn||ih(t,n,s,r,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,l1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ht(t.type,s),a.props=u,p=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ht(n)?Ar:nt.current,l=ji(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==l)&&oh(t,a,r,l),qn=!1,f=t.memoizedState,a.state=f,Ps(t,r,a,i);var x=t.memoizedState;s!==p||f!==x||ft.current||qn?(typeof v=="function"&&(bu(t,n,v,r),x=t.memoizedState),(u=qn||ih(t,n,u,r,f,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return _u(e,t,n,r,o,i)}function _u(e,t,n,r,i,o){O1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Xf(t,n,!1),Ln(e,t,o);r=t.stateNode,i3.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=_i(t,e.child,null,o),t.child=_i(t,null,s,o)):it(e,t,s,o),t.memoizedState=r.state,i&&Xf(t,n,!0),t.child}function I1(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),Gd(e,t.containerInfo)}function ph(e,t,n,r,i){return Ti(),Bd(i),t.flags|=256,it(e,t,n,r),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function R1(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ye,i&1),e===null)return yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=vl(a,r,0,null),e=kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ku(n),t.memoizedState=Cu,e):tp(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return o3(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=rr(s,o):(o=kr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Cu,r}return o=e.child,e=o.sibling,r=rr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tp(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function za(e,t,n,r){return r!==null&&Bd(r),_i(t,e.child,null,n),e=tp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o3(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=dc(Error(I(422))),za(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vl({mode:"visible",children:r.children},i,0,null),o=kr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_i(t,e.child,null,a),t.child.memoizedState=ku(a),t.memoizedState=Cu,o);if(!(t.mode&1))return za(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(I(419)),r=dc(o,r,void 0),za(e,t,a,r)}if(s=(a&e.childLanes)!==0,dt||s){if(r=$e,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mn(e,i),Kt(r,e,i,-1))}return sp(),r=dc(Error(I(421))),za(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=x3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,St=Jn(i.nextSibling),jt=t,xe=!0,Wt=null,e!==null&&(Ot[It++]=wn,Ot[It++]=bn,Ot[It++]=Mr,wn=e.id,bn=e.overflow,Mr=t),t=tp(t,r.children),t.flags|=4096,t)}function fh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wu(e.return,t,n)}function pc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function V1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(it(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,n,t);else if(e.tag===19)fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pc(t,!0,n,null,o);break;case"together":pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a3(e,t,n){switch(t.tag){case 3:I1(t),Ti();break;case 5:c1(t);break;case 1:ht(t.type)&&Ts(t);break;case 4:Gd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(ks,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?R1(e,t,n):(ue(ye,ye.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return V1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,L1(e,t,n)}return Ln(e,t,n)}var D1,Eu,N1,F1;D1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};N1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jr(un.current);var o=null;switch(n){case"input":i=Xc(e,i),r=Xc(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=Jc(e,i),r=Jc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ss)}tu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};F1=function(e,t,n,r){n!==r&&(t.flags|=4)};function no(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s3(e,t,n){var r=t.pendingProps;switch(Fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ht(t.type)&&js(),Qe(t),null;case 3:return r=t.stateNode,Ci(),me(ft),me(nt),Kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(Ru(Wt),Wt=null))),Eu(e,t),Qe(t),null;case 5:Yd(t);var i=jr(Wo.current);if(n=t.type,e!==null&&t.stateNode!=null)N1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Qe(t),null}if(e=jr(un.current),Ea(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[an]=t,r[Ho]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<ho.length;i++)fe(ho[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Sf(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":Tf(r,o),fe("invalid",r)}tu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,s,e),i=["children",""+s]):Oo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ya(r),jf(r,o,!0);break;case"textarea":ya(r),_f(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ss)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[an]=t,e[Ho]=r,D1(e,t,!1,!1),t.stateNode=e;e:{switch(a=nu(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ho.length;i++)fe(ho[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":Sf(e,r),i=Xc(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Tf(e,r),i=Jc(e,r),fe("invalid",e);break;default:i=r}tu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?vg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(e,l):typeof l=="number"&&Io(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&fe("scroll",e):l!=null&&_d(e,o,l,a))}switch(n){case"input":ya(e),jf(e,r,!1);break;case"textarea":ya(e),_f(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ar(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fi(e,!!r.multiple,o,!1):r.defaultValue!=null&&fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)F1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=jr(Wo.current),jr(un.current),Ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[an]=t,(o=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=t,t.stateNode=r}return Qe(t),null;case 13:if(me(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&St!==null&&t.mode&1&&!(t.flags&128))i1(),Ti(),t.flags|=98560,o=!1;else if(o=Ea(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[an]=t}else Ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),o=!1}else Wt!==null&&(Ru(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Ie===0&&(Ie=3):sp())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Ci(),Eu(e,t),e===null&&$o(t.stateNode.containerInfo),Qe(t),null;case 10:return Hd(t.type._context),Qe(t),null;case 17:return ht(t.type)&&js(),Qe(t),null;case 19:if(me(ye),o=t.memoizedState,o===null)return Qe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)no(o,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=zs(e),a!==null){for(t.flags|=128,no(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Ei&&(t.flags|=128,r=!0,no(o,!1),t.lanes=4194304)}else{if(!r)if(e=zs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),no(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!xe)return Qe(t),null}else 2*Ee()-o.renderingStartTime>Ei&&n!==1073741824&&(t.flags|=128,r=!0,no(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return ap(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function l3(e,t){switch(Fd(t),t.tag){case 1:return ht(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),me(ft),me(nt),Kd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yd(t),null;case 13:if(me(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ye),null;case 4:return Ci(),null;case 10:return Hd(t.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var Aa=!1,Je=!1,c3=typeof WeakSet=="function"?WeakSet:Set,B=null;function oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Pu(e,t,n){try{n()}catch(r){_e(e,t,r)}}var hh=!1;function u3(e,t){if(pu=ys,e=Ug(),Dd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)f=p,p=v;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(v=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:e,selectionRange:n},ys=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ht(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){_e(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return x=hh,hh=!1,x}function To(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pu(t,n,o)}i=i.next}while(i!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function B1(e){var t=e.alternate;t!==null&&(e.alternate=null,B1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[Ho],delete t[gu],delete t[W2],delete t[G2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $1(e){return e.tag===5||e.tag===3||e.tag===4}function mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var We=null,Ut=!1;function Vn(e,t,n){for(n=n.child;n!==null;)q1(e,t,n),n=n.sibling}function q1(e,t,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Je||oi(n,t);case 6:var r=We,i=Ut;We=null,Vn(e,t,n),We=r,Ut=i,We!==null&&(Ut?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Ut?(e=We,n=n.stateNode,e.nodeType===8?oc(e.parentNode,n):e.nodeType===1&&oc(e,n),No(e)):oc(We,n.stateNode));break;case 4:r=We,i=Ut,We=n.stateNode.containerInfo,Ut=!0,Vn(e,t,n),We=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pu(n,t,a),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!Je&&(oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_e(n,t,s)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(e,t,n),Je=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function gh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new c3),t.forEach(function(r){var i=y3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:We=s.stateNode,Ut=!1;break e;case 3:We=s.stateNode.containerInfo,Ut=!0;break e;case 4:We=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(We===null)throw Error(I(160));q1(o,a,i),We=null,Ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)H1(t,e),t=t.sibling}function H1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),tn(e),r&4){try{To(3,e,e.return),ml(3,e)}catch(y){_e(e,e.return,y)}try{To(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:qt(t,e),tn(e),r&512&&n!==null&&oi(n,n.return);break;case 5:if(qt(t,e),tn(e),r&512&&n!==null&&oi(n,n.return),e.flags&32){var i=e.stateNode;try{Io(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&pg(i,o),nu(s,a);var u=nu(s,o);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?vg(i,p):d==="dangerouslySetInnerHTML"?mg(i,p):d==="children"?Io(i,p):_d(i,d,p,u)}switch(s){case"input":Qc(i,o);break;case"textarea":fg(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?fi(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?fi(i,!!o.multiple,o.defaultValue,!0):fi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ho]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(qt(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(qt(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:qt(t,e),tn(e);break;case 13:qt(t,e),tn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ip=Ee())),r&4&&gh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(u=Je)||d,qt(t,e),Je=u):qt(t,e),tn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(p=B=d;B!==null;){switch(f=B,v=f.child,f.tag){case 0:case 11:case 14:case 15:To(4,f,f.return);break;case 1:oi(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:oi(f,f.return);break;case 22:if(f.memoizedState!==null){xh(p);continue}}v!==null?(v.return=f,B=v):xh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=gg("display",a))}catch(y){_e(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){_e(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(t,e),tn(e),r&4&&gh(e);break;case 21:break;default:qt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($1(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var o=mh(e);Mu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=mh(e);Au(e,s,a);break;default:throw Error(I(161))}}catch(l){_e(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d3(e,t,n){B=e,U1(e)}function U1(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Aa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Je;s=Aa;var u=Je;if(Aa=a,(Je=l)&&!u)for(B=i;B!==null;)a=B,l=a.child,a.tag===22&&a.memoizedState!==null?yh(i):l!==null?(l.return=a,B=l):yh(i);for(;o!==null;)B=o,U1(o),o=o.sibling;B=i,Aa=s,Je=u}vh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):vh(e)}}function vh(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&th(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}th(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&No(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Je||t.flags&512&&zu(t)}catch(f){_e(t,t.return,f)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function xh(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function yh(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(l){_e(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){_e(t,i,l)}}var o=t.return;try{zu(t)}catch(l){_e(t,o,l)}break;case 5:var a=t.return;try{zu(t)}catch(l){_e(t,a,l)}}}catch(l){_e(t,t.return,l)}if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}var p3=Math.ceil,Ls=On.ReactCurrentDispatcher,np=On.ReactCurrentOwner,Vt=On.ReactCurrentBatchConfig,oe=0,$e=null,Ae=null,Ge=0,yt=0,ai=dr(0),Ie=0,Xo=null,Or=0,gl=0,rp=0,_o=null,ut=null,ip=0,Ei=1/0,vn=null,Os=!1,Lu=null,tr=null,Ma=!1,Gn=null,Is=0,Co=0,Ou=null,Ja=-1,es=0;function ot(){return oe&6?Ee():Ja!==-1?Ja:Ja=Ee()}function nr(e){return e.mode&1?oe&2&&Ge!==0?Ge&-Ge:K2.transition!==null?(es===0&&(es=Pg()),es):(e=le,e!==0||(e=window.event,e=e===void 0?16:Rg(e.type)),e):1}function Kt(e,t,n,r){if(50<Co)throw Co=0,Ou=null,Error(I(185));aa(e,n,r),(!(oe&2)||e!==$e)&&(e===$e&&(!(oe&2)&&(gl|=n),Ie===4&&Un(e,Ge)),mt(e,r),n===1&&oe===0&&!(t.mode&1)&&(Ei=Ee()+500,pl&&pr()))}function mt(e,t){var n=e.callbackNode;Kw(e,t);var r=xs(e,e===$e?Ge:0);if(r===0)n!==null&&Ef(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ef(n),t===1)e.tag===0?Y2(wh.bind(null,e)):t1(wh.bind(null,e)),H2(function(){!(oe&6)&&pr()}),n=null;else{switch(zg(r)){case 1:n=zd;break;case 4:n=kg;break;case 16:n=vs;break;case 536870912:n=Eg;break;default:n=vs}n=J1(n,W1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W1(e,t){if(Ja=-1,es=0,oe&6)throw Error(I(327));var n=e.callbackNode;if(xi()&&e.callbackNode!==n)return null;var r=xs(e,e===$e?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rs(e,r);else{t=r;var i=oe;oe|=2;var o=Y1();($e!==e||Ge!==t)&&(vn=null,Ei=Ee()+500,Cr(e,t));do try{m3();break}catch(s){G1(e,s)}while(!0);qd(),Ls.current=o,oe=i,Ae!==null?t=0:($e=null,Ge=0,t=Ie)}if(t!==0){if(t===2&&(i=su(e),i!==0&&(r=i,t=Iu(e,i))),t===1)throw n=Xo,Cr(e,0),Un(e,r),mt(e,Ee()),n;if(t===6)Un(e,r);else{if(i=e.current.alternate,!(r&30)&&!f3(i)&&(t=Rs(e,r),t===2&&(o=su(e),o!==0&&(r=o,t=Iu(e,o))),t===1))throw n=Xo,Cr(e,0),Un(e,r),mt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:xr(e,ut,vn);break;case 3:if(Un(e,r),(r&130023424)===r&&(t=ip+500-Ee(),10<t)){if(xs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mu(xr.bind(null,e,ut,vn),t);break}xr(e,ut,vn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Yt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p3(r/1960))-r,10<r){e.timeoutHandle=mu(xr.bind(null,e,ut,vn),r);break}xr(e,ut,vn);break;case 5:xr(e,ut,vn);break;default:throw Error(I(329))}}}return mt(e,Ee()),e.callbackNode===n?W1.bind(null,e):null}function Iu(e,t){var n=_o;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=ut,ut=n,t!==null&&Ru(t)),e}function Ru(e){ut===null?ut=e:ut.push.apply(ut,e)}function f3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~rp,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n;e[n]=-1,t&=~r}}function wh(e){if(oe&6)throw Error(I(327));xi();var t=xs(e,0);if(!(t&1))return mt(e,Ee()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=Iu(e,r))}if(n===1)throw n=Xo,Cr(e,0),Un(e,t),mt(e,Ee()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xr(e,ut,vn),mt(e,Ee()),null}function op(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Ei=Ee()+500,pl&&pr())}}function Ir(e){Gn!==null&&Gn.tag===0&&!(oe&6)&&xi();var t=oe;oe|=1;var n=Vt.transition,r=le;try{if(Vt.transition=null,le=1,e)return e()}finally{le=r,Vt.transition=n,oe=t,!(oe&6)&&pr()}}function ap(){yt=ai.current,me(ai)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,q2(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:Ci(),me(ft),me(nt),Kd();break;case 5:Yd(r);break;case 4:Ci();break;case 13:me(ye);break;case 19:me(ye);break;case 10:Hd(r.type._context);break;case 22:case 23:ap()}n=n.return}if($e=e,Ae=e=rr(e.current,null),Ge=yt=t,Ie=0,Xo=null,rp=gl=Or=0,ut=_o=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Sr=null}return e}function G1(e,t){do{var n=Ae;try{if(qd(),Xa.current=Ms,As){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}As=!1}if(Lr=0,Ne=Le=Se=null,jo=!1,Go=0,np.current=null,n===null||n.return===null){Ie=1,Xo=t,Ae=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ge,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=sh(a);if(v!==null){v.flags&=-257,lh(v,a,s,o,t),v.mode&1&&ah(o,u,t),t=v,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){ah(o,u,t),sp();break e}l=Error(I(426))}}else if(xe&&s.mode&1){var b=sh(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),lh(b,a,s,o,t),Bd(ki(l,s));break e}}o=l=ki(l,s),Ie!==4&&(Ie=2),_o===null?_o=[o]:_o.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=z1(o,l,t);eh(o,g);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tr===null||!tr.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=A1(o,s,t);eh(o,w);break e}}o=o.return}while(o!==null)}X1(n)}catch(S){t=S,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Y1(){var e=Ls.current;return Ls.current=Ms,e===null?Ms:e}function sp(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),$e===null||!(Or&268435455)&&!(gl&268435455)||Un($e,Ge)}function Rs(e,t){var n=oe;oe|=2;var r=Y1();($e!==e||Ge!==t)&&(vn=null,Cr(e,t));do try{h3();break}catch(i){G1(e,i)}while(!0);if(qd(),oe=n,Ls.current=r,Ae!==null)throw Error(I(261));return $e=null,Ge=0,Ie}function h3(){for(;Ae!==null;)K1(Ae)}function m3(){for(;Ae!==null&&!Fw();)K1(Ae)}function K1(e){var t=Z1(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?X1(e):Ae=t,np.current=null}function X1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l3(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ae=null;return}}else if(n=s3(n,t,yt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ie===0&&(Ie=5)}function xr(e,t,n){var r=le,i=Vt.transition;try{Vt.transition=null,le=1,g3(e,t,n,r)}finally{Vt.transition=i,le=r}return null}function g3(e,t,n,r){do xi();while(Gn!==null);if(oe&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Xw(e,o),e===$e&&(Ae=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,J1(vs,function(){return xi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Vt.transition,Vt.transition=null;var a=le;le=1;var s=oe;oe|=4,np.current=null,u3(e,n),H1(n,e),R2(fu),ys=!!pu,fu=pu=null,e.current=n,d3(n),Bw(),oe=s,le=a,Vt.transition=o}else e.current=n;if(Ma&&(Ma=!1,Gn=e,Is=i),o=e.pendingLanes,o===0&&(tr=null),Hw(n.stateNode),mt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Os)throw Os=!1,e=Lu,Lu=null,e;return Is&1&&e.tag!==0&&xi(),o=e.pendingLanes,o&1?e===Ou?Co++:(Co=0,Ou=e):Co=0,pr(),null}function xi(){if(Gn!==null){var e=zg(Is),t=Vt.transition,n=le;try{if(Vt.transition=null,le=16>e?16:e,Gn===null)var r=!1;else{if(e=Gn,Gn=null,Is=0,oe&6)throw Error(I(331));var i=oe;for(oe|=4,B=e.current;B!==null;){var o=B,a=o.child;if(B.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:To(8,d,o)}var p=d.child;if(p!==null)p.return=d,B=p;else for(;B!==null;){d=B;var f=d.sibling,v=d.return;if(B1(d),d===u){B=null;break}if(f!==null){f.return=v,B=f;break}B=v}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}B=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,B=a;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:To(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,B=g;break e}B=o.return}}var h=e.current;for(B=h;B!==null;){a=B;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,B=m;else e:for(a=h;B!==null;){if(s=B,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(S){_e(s,s.return,S)}if(s===a){B=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}if(oe=i,pr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{le=n,Vt.transition=t}}return!1}function bh(e,t,n){t=ki(n,t),t=z1(e,t,1),e=er(e,t,1),t=ot(),e!==null&&(aa(e,1,t),mt(e,t))}function _e(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){e=ki(n,e),e=A1(t,e,1),t=er(t,e,1),e=ot(),t!==null&&(aa(t,1,e),mt(t,e));break}}t=t.return}}function v3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Ge&n)===n&&(Ie===4||Ie===3&&(Ge&130023424)===Ge&&500>Ee()-ip?Cr(e,0):rp|=n),mt(e,t)}function Q1(e,t){t===0&&(e.mode&1?(t=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):t=1);var n=ot();e=Mn(e,t),e!==null&&(aa(e,t,n),mt(e,n))}function x3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q1(e,n)}function y3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Q1(e,n)}var Z1;Z1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,a3(e,t,n);dt=!!(e.flags&131072)}else dt=!1,xe&&t.flags&1048576&&n1(t,Cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Za(e,t),e=t.pendingProps;var i=ji(t,nt.current);vi(t,n),i=Qd(null,t,r,e,i,n);var o=Zd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)?(o=!0,Ts(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wd(t),i.updater=hl,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=_u(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Nd(t),it(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Za(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=b3(r),e=Ht(r,e),i){case 0:t=Tu(null,t,r,e,n);break e;case 1:t=dh(null,t,r,e,n);break e;case 11:t=ch(null,t,r,e,n);break e;case 14:t=uh(null,t,r,Ht(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),dh(e,t,r,i,n);case 3:e:{if(I1(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,l1(e,t),Ps(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ki(Error(I(423)),t),t=ph(e,t,r,n,i);break e}else if(r!==i){i=ki(Error(I(424)),t),t=ph(e,t,r,n,i);break e}else for(St=Jn(t.stateNode.containerInfo.firstChild),jt=t,xe=!0,Wt=null,n=a1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){t=Ln(e,t,n);break e}it(e,t,r,n)}t=t.child}return t;case 5:return c1(t),e===null&&yu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,hu(r,i)?a=null:o!==null&&hu(r,o)&&(t.flags|=32),O1(e,t),it(e,t,a,n),t.child;case 6:return e===null&&yu(t),null;case 13:return R1(e,t,n);case 4:return Gd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_i(t,null,r,n):it(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),ch(e,t,r,i,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ue(ks,r._currentValue),r._currentValue=a,o!==null)if(Qt(o.value,a)){if(o.children===i.children&&!ft.current){t=Ln(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=jn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(I(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),wu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}it(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vi(t,n),i=Dt(i),r=r(i),t.flags|=1,it(e,t,r,n),t.child;case 14:return r=t.type,i=Ht(r,t.pendingProps),i=Ht(r.type,i),uh(e,t,r,i,n);case 15:return M1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Za(e,t),t.tag=1,ht(r)?(e=!0,Ts(t)):e=!1,vi(t,n),P1(t,r,i),Su(t,r,i,n),_u(null,t,r,!0,e,n);case 19:return V1(e,t,n);case 22:return L1(e,t,n)}throw Error(I(156,t.tag))};function J1(e,t){return Cg(e,t)}function w3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,r){return new w3(e,t,n,r)}function lp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b3(e){if(typeof e=="function")return lp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kd)return 11;if(e===Ed)return 14}return 2}function rr(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")lp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xr:return kr(n.children,i,o,t);case Cd:a=8,i|=8;break;case Wc:return e=Rt(12,n,t,i|2),e.elementType=Wc,e.lanes=o,e;case Gc:return e=Rt(13,n,t,i),e.elementType=Gc,e.lanes=o,e;case Yc:return e=Rt(19,n,t,i),e.elementType=Yc,e.lanes=o,e;case cg:return vl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sg:a=10;break e;case lg:a=9;break e;case kd:a=11;break e;case Ed:a=14;break e;case $n:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kr(e,t,n,r){return e=Rt(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Rt(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function fc(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function hc(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cp(e,t,n,r,i,o,a,s,l){return e=new S3(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(o),e}function j3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ev(e){if(!e)return sr;e=e._reactInternals;e:{if(Fr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(ht(n))return e1(e,n,t)}return t}function tv(e,t,n,r,i,o,a,s,l){return e=cp(n,r,!0,e,i,o,a,s,l),e.context=ev(null),n=e.current,r=ot(),i=nr(n),o=jn(r,i),o.callback=t??null,er(n,o,i),e.current.lanes=i,aa(e,i,r),mt(e,r),e}function xl(e,t,n,r){var i=t.current,o=ot(),a=nr(i);return n=ev(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=er(i,t,a),e!==null&&(Kt(e,i,a,o),Ka(e,i,a)),a}function Vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function up(e,t){Sh(e,t),(e=e.alternate)&&Sh(e,t)}function T3(){return null}var nv=typeof reportError=="function"?reportError:function(e){console.error(e)};function dp(e){this._internalRoot=e}yl.prototype.render=dp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));xl(e,t,null,null)};yl.prototype.unmount=dp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){xl(null,e,null,null)}),t[An]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&Ig(e)}};function pp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jh(){}function _3(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Vs(a);o.call(u)}}var a=tv(t,r,e,0,null,!1,!1,"",jh);return e._reactRootContainer=a,e[An]=a.current,$o(e.nodeType===8?e.parentNode:e),Ir(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Vs(l);s.call(u)}}var l=cp(e,0,!1,null,null,!1,!1,"",jh);return e._reactRootContainer=l,e[An]=l.current,$o(e.nodeType===8?e.parentNode:e),Ir(function(){xl(t,l,n,r)}),l}function bl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Vs(a);s.call(l)}}xl(t,a,e,i)}else a=_3(n,t,e,i,r);return Vs(a)}Ag=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fo(t.pendingLanes);n!==0&&(Ad(t,n|1),mt(t,Ee()),!(oe&6)&&(Ei=Ee()+500,pr()))}break;case 13:Ir(function(){var r=Mn(e,1);if(r!==null){var i=ot();Kt(r,e,1,i)}}),up(e,1)}};Md=function(e){if(e.tag===13){var t=Mn(e,134217728);if(t!==null){var n=ot();Kt(t,e,134217728,n)}up(e,134217728)}};Mg=function(e){if(e.tag===13){var t=nr(e),n=Mn(e,t);if(n!==null){var r=ot();Kt(n,e,t,r)}up(e,t)}};Lg=function(){return le};Og=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};iu=function(e,t,n){switch(t){case"input":if(Qc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=dl(r);if(!i)throw Error(I(90));dg(r),Qc(r,i)}}}break;case"textarea":fg(e,n);break;case"select":t=n.value,t!=null&&fi(e,!!n.multiple,t,!1)}};wg=op;bg=Ir;var C3={usingClientEntryPoint:!1,Events:[la,ei,dl,xg,yg,op]},ro={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k3={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tg(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||T3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{sl=La.inject(k3),cn=La}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C3;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(t))throw Error(I(200));return j3(e,t,null,n)};Ct.createRoot=function(e,t){if(!pp(e))throw Error(I(299));var n=!1,r="",i=nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cp(e,1,!1,null,null,n,!1,r,i),e[An]=t.current,$o(e.nodeType===8?e.parentNode:e),new dp(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Tg(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return Ir(e)};Ct.hydrate=function(e,t,n){if(!wl(t))throw Error(I(200));return bl(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!pp(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=nv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tv(t,null,e,1,n??null,i,!1,o,a),e[An]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yl(t)};Ct.render=function(e,t,n){if(!wl(t))throw Error(I(200));return bl(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!wl(e))throw Error(I(40));return e._reactRootContainer?(Ir(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};Ct.unstable_batchedUpdates=op;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return bl(e,t,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv)}catch(e){console.error(e)}}rv(),rg.exports=Ct;var E3=rg.exports,iv,Th=E3;iv=Th.createRoot,Th.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}var Yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yn||(Yn={}));const _h="popstate";function P3(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=Br(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Vu("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Ds(o))}function r(i,o){fp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return A3(t,n,r,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z3(){return Math.random().toString(36).substr(2,8)}function Ch(e,t){return{usr:e.state,key:e.key,idx:t}}function Vu(e,t,n,r){return n===void 0&&(n=null),Qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||z3()})}function Ds(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function A3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Yn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Qo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=Yn.Pop;let b=d(),g=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:g})}function f(b,g){s=Yn.Push;let h=Vu(y.location,b,g);n&&n(h,b),u=d()+1;let m=Ch(h,u),w=y.createHref(h);try{a.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function v(b,g){s=Yn.Replace;let h=Vu(y.location,b,g);n&&n(h,b),u=d();let m=Ch(h,u),w=y.createHref(h);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function x(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Ds(b);return h=h.replace(/ $/,"%20"),Me(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return s},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_h,p),l=b,()=>{i.removeEventListener(_h,p),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(b){return a.go(b)}};return y}var kh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kh||(kh={}));function M3(e,t,n){return n===void 0&&(n="/"),L3(e,t,n,!1)}function L3(e,t,n,r){let i=typeof t=="string"?Br(t):t,o=hp(i.pathname||"/",n);if(o==null)return null;let a=ov(e);O3(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=U3(o);s=q3(a[l],u,r)}return s}function ov(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ir([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ov(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:B3(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of av(o.path))i(o,a,l)}),t}function av(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=av(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function O3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I3=/^:[\w-]+$/,R3=3,V3=2,D3=1,N3=10,F3=-2,Eh=e=>e==="*";function B3(e,t){let n=e.split("/"),r=n.length;return n.some(Eh)&&(r+=F3),t&&(r+=V3),n.filter(i=>!Eh(i)).reduce((i,o)=>i+(I3.test(o)?R3:o===""?D3:N3),r)}function $3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function q3(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:ir([o,p.pathname]),pathnameBase:K3(ir([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=ir([o,p.pathnameBase]))}return a}function Ph(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let y=s[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[p];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function H3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function U3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function W3(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:G3(n,t):t,search:X3(r),hash:Q3(i)}}function G3(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y3(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sv(e,t){let n=Y3(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Qo({},e),Me(!i.pathname||!i.pathname.includes("?"),mc("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),mc("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),mc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let l=W3(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const ir=e=>e.join("/").replace(/\/\/+/g,"/"),K3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Q3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Z3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cv=["post","put","patch","delete"];new Set(cv);const J3=["get",...cv];new Set(J3);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}const mp=T.createContext(null),e5=T.createContext(null),$r=T.createContext(null),Sl=T.createContext(null),qr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),uv=T.createContext(null);function t5(e,t){let{relative:n}=t===void 0?{}:t;ua()||Me(!1);let{basename:r,navigator:i}=T.useContext($r),{hash:o,pathname:a,search:s}=pv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:ir([r,a])),i.createHref({pathname:l,search:s,hash:o})}function ua(){return T.useContext(Sl)!=null}function Hr(){return ua()||Me(!1),T.useContext(Sl).location}function dv(e){T.useContext($r).static||T.useLayoutEffect(e)}function da(){let{isDataRoute:e}=T.useContext(qr);return e?h5():n5()}function n5(){ua()||Me(!1);let e=T.useContext(mp),{basename:t,future:n,navigator:r}=T.useContext($r),{matches:i}=T.useContext(qr),{pathname:o}=Hr(),a=JSON.stringify(sv(i,n.v7_relativeSplatPath)),s=T.useRef(!1);return dv(()=>{s.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=lv(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ir([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function pv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext($r),{matches:i}=T.useContext(qr),{pathname:o}=Hr(),a=JSON.stringify(sv(i,r.v7_relativeSplatPath));return T.useMemo(()=>lv(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function r5(e,t){return i5(e,t)}function i5(e,t,n,r){ua()||Me(!1);let{navigator:i}=T.useContext($r),{matches:o}=T.useContext(qr),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Hr(),d;if(t){var p;let b=typeof t=="string"?Br(t):t;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||Me(!1),d=b}else d=u;let f=d.pathname||"/",v=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=M3(e,{pathname:v}),y=c5(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:ir([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ir([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&y?T.createElement(Sl.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yn.Pop}},y):y}function o5(){let e=f5(),t=Z3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const a5=T.createElement(o5,null);class s5 extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(qr.Provider,{value:this.props.routeContext},T.createElement(uv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l5(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(mp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(qr.Provider,{value:t},r)}function c5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Me(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:v}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let v,x=!1,y=null,b=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||a5,l&&(u<0&&f===0?(x=!0,b=null):u===f&&(x=!0,b=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),h=()=>{let m;return v?m=y:x?m=b:p.route.Component?m=T.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,T.createElement(l5,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?T.createElement(s5,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var fv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fv||{}),Ns=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ns||{});function u5(e){let t=T.useContext(mp);return t||Me(!1),t}function d5(e){let t=T.useContext(e5);return t||Me(!1),t}function p5(e){let t=T.useContext(qr);return t||Me(!1),t}function hv(e){let t=p5(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function f5(){var e;let t=T.useContext(uv),n=d5(Ns.UseRouteError),r=hv(Ns.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function h5(){let{router:e}=u5(fv.UseNavigateStable),t=hv(Ns.UseNavigateStable),n=T.useRef(!1);return dv(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zo({fromRouteId:t},o)))},[e,t])}function Dn(e){Me(!1)}function m5(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yn.Pop,navigator:o,static:a=!1,future:s}=e;ua()&&Me(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:o,static:a,future:Zo({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Br(r));let{pathname:d="/",search:p="",hash:f="",state:v=null,key:x="default"}=r,y=T.useMemo(()=>{let b=hp(d,l);return b==null?null:{location:{pathname:b,search:p,hash:f,state:v,key:x},navigationType:i}},[l,d,p,f,v,x,i]);return y==null?null:T.createElement($r.Provider,{value:u},T.createElement(Sl.Provider,{children:n,value:y}))}function g5(e){let{children:t,location:n}=e;return r5(Du(t),n)}new Promise(()=>{});function Du(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Du(r.props.children,o));return}r.type!==Dn&&Me(!1),!r.props.index||!r.props.children||Me(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Du(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nu(){return Nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nu.apply(this,arguments)}function v5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function x5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function y5(e,t){return e.button===0&&(!t||t==="_self")&&!x5(e)}const w5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],b5="6";try{window.__reactRouterVersion=b5}catch{}const S5="startTransition",zh=vw[S5];function j5(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=P3({window:i,v5Compat:!0}));let a=o.current,[s,l]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=T.useCallback(p=>{u&&zh?zh(()=>l(p)):l(p)},[l,u]);return T.useLayoutEffect(()=>a.listen(d),[a,d]),T.createElement(m5,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const T5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mv=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d,viewTransition:p}=t,f=v5(t,w5),{basename:v}=T.useContext($r),x,y=!1;if(typeof u=="string"&&_5.test(u)&&(x=u,T5))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=hp(w.pathname,v);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:y=!0}catch{}let b=t5(u,{relative:i}),g=C5(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i,viewTransition:p});function h(m){r&&r(m),m.defaultPrevented||g(m)}return T.createElement("a",Nu({},f,{href:x||b,onClick:y||o?r:h,ref:n,target:l}))});var Ah;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ah||(Ah={}));var Mh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mh||(Mh={}));function C5(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=da(),u=Hr(),d=pv(e,{relative:a});return T.useCallback(p=>{if(y5(p,n)){p.preventDefault();let f=r!==void 0?r:Ds(u)===Ds(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,l,d,r,i,n,e,o,a,s])}function k5(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function jl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Fu=e=>Array.isArray(e);function gv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Jo(e){return typeof e=="string"||Array.isArray(e)}function Lh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function gp(e,t,n,r){if(typeof t=="function"){const[i,o]=Lh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Lh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Tl(e,t,n){const r=e.getProps();return gp(r,t,n!==void 0?n:r.custom,e)}const vp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xp=["initial",...vp],pa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ur=new Set(pa),Tn=e=>e*1e3,_n=e=>e/1e3,E5={type:"spring",stiffness:500,damping:25,restSpeed:10},P5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),z5={type:"keyframes",duration:.8},A5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},M5=(e,{keyframes:t})=>t.length>2?z5:Ur.has(e)?e.startsWith("scale")?P5(t[1]):E5:A5;function yp(e,t){return e?e[t]||e.default||e:void 0}const L5={skipAnimations:!1,useManualTiming:!1},O5=e=>e!==null;function _l(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(O5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Ye=e=>e;function I5(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,p=!1)=>{const v=p&&r?t:n;return d&&o.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(u))}};return l}const Oa=["read","resolveKeyframes","update","preRender","render","postRender"],R5=40;function vv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Oa.reduce((g,h)=>(g[h]=I5(o),g),{}),{read:s,resolveKeyframes:l,update:u,preRender:d,render:p,postRender:f}=a,v=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,R5),1),i.timestamp=g,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Oa.reduce((g,h)=>{const m=a[h];return g[h]=(w,S=!1,j=!1)=>(n||x(),m.schedule(w,S,j)),g},{}),cancel:g=>{for(let h=0;h<Oa.length;h++)a[Oa[h]].cancel(g)},state:i,steps:a}}const{schedule:ie,cancel:Zt,state:Re,steps:gc}=vv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0),xv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,V5=1e-7,D5=12;function N5(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=xv(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>V5&&++s<D5);return a}function fa(e,t,n,r){if(e===t&&n===r)return Ye;const i=o=>N5(o,0,1,e,n);return o=>o===0||o===1?o:xv(i(o),t,r)}const yv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,wv=e=>t=>1-e(1-t),bv=fa(.33,1.53,.69,.99),wp=wv(bv),Sv=yv(wp),jv=e=>(e*=2)<1?.5*wp(e):.5*(2-Math.pow(2,-10*(e-1))),bp=e=>1-Math.sin(Math.acos(e)),Tv=wv(bp),_v=yv(bp),Cv=e=>/^0[^.\s]+$/u.test(e);function F5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Cv(e):!0}let B5=Ye,Bu=Ye;const kv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ev=e=>t=>typeof t=="string"&&t.startsWith(e),Pv=Ev("--"),$5=Ev("var(--"),Sp=e=>$5(e)?q5.test(e.split("/*")[0].trim()):!1,q5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,H5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function U5(e){const t=H5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function zv(e,t,n=1){const[r,i]=U5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return kv(a)?parseFloat(a):a}return Sp(i)?zv(i,t,n+1):i}const lr=(e,t,n)=>n>t?t:n<e?e:n,Bi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ea={...Bi,transform:e=>lr(0,1,e)},Ia={...Bi,default:1},ha=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nn=ha("deg"),dn=ha("%"),H=ha("px"),W5=ha("vh"),G5=ha("vw"),Oh={...dn,parse:e=>dn.parse(e)/100,transform:e=>dn.transform(e*100)},Y5=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ih=e=>e===Bi||e===H,Rh=(e,t)=>parseFloat(e.split(", ")[t]),Vh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Rh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Rh(o[1],e):0}},K5=new Set(["x","y","z"]),X5=pa.filter(e=>!K5.has(e));function Q5(e){const t=[];return X5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Pi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Vh(4,13),y:Vh(5,14)};Pi.translateX=Pi.x;Pi.translateY=Pi.y;const Av=e=>t=>t.test(e),Z5={test:e=>e==="auto",parse:e=>e},Mv=[Bi,H,dn,Nn,G5,W5,Z5],Dh=e=>Mv.find(Av(e)),Er=new Set;let $u=!1,qu=!1;function Lv(){if(qu){const e=Array.from(Er).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Q5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}qu=!1,$u=!1,Er.forEach(e=>e.complete()),Er.clear()}function Ov(){Er.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(qu=!0)})}function J5(){Ov(),Lv()}class jp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Er.add(this),$u||($u=!0,ie.read(Ov),ie.resolveKeyframes(Lv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Er.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Er.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ko=e=>Math.round(e*1e5)/1e5,Tp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eb(e){return e==null}const tb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_p=(e,t)=>n=>!!(typeof n=="string"&&tb.test(n)&&n.startsWith(e)||t&&!eb(n)&&Object.prototype.hasOwnProperty.call(n,t)),Iv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(Tp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},nb=e=>lr(0,255,e),vc={...Bi,transform:e=>Math.round(nb(e))},Tr={test:_p("rgb","red"),parse:Iv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+vc.transform(e)+", "+vc.transform(t)+", "+vc.transform(n)+", "+ko(ea.transform(r))+")"};function rb(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Hu={test:_p("#"),parse:rb,transform:Tr.transform},si={test:_p("hsl","hue"),parse:Iv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+dn.transform(ko(t))+", "+dn.transform(ko(n))+", "+ko(ea.transform(r))+")"},Ze={test:e=>Tr.test(e)||Hu.test(e)||si.test(e),parse:e=>Tr.test(e)?Tr.parse(e):si.test(e)?si.parse(e):Hu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Tr.transform(e):si.transform(e)},ib=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ob(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Tp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(ib))===null||n===void 0?void 0:n.length)||0)>0}const Rv="number",Vv="color",ab="var",sb="var(",Nh="${}",lb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ta(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(lb,l=>(Ze.test(l)?(r.color.push(o),i.push(Vv),n.push(Ze.parse(l))):l.startsWith(sb)?(r.var.push(o),i.push(ab),n.push(l)):(r.number.push(o),i.push(Rv),n.push(parseFloat(l))),++o,Nh)).split(Nh);return{values:n,split:s,indexes:r,types:i}}function Dv(e){return ta(e).values}function Nv(e){const{split:t,types:n}=ta(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===Rv?o+=ko(i[a]):s===Vv?o+=Ze.transform(i[a]):o+=i[a]}return o}}const cb=e=>typeof e=="number"?0:e;function ub(e){const t=Dv(e);return Nv(e)(t.map(cb))}const cr={test:ob,parse:Dv,createTransformer:Nv,getAnimatableNone:ub},db=new Set(["brightness","contrast","saturate","opacity"]);function pb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Tp)||[];if(!r)return e;const i=n.replace(r,"");let o=db.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const fb=/\b([a-z-]*)\(.*?\)/gu,Uu={...cr,getAnimatableNone:e=>{const t=e.match(fb);return t?t.map(pb).join(" "):e}},hb={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,backgroundPositionX:H,backgroundPositionY:H},mb={rotate:Nn,rotateX:Nn,rotateY:Nn,rotateZ:Nn,scale:Ia,scaleX:Ia,scaleY:Ia,scaleZ:Ia,skew:Nn,skewX:Nn,skewY:Nn,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:ea,originX:Oh,originY:Oh,originZ:H},Fh={...Bi,transform:Math.round},Cp={...hb,...mb,zIndex:Fh,size:H,fillOpacity:ea,strokeOpacity:ea,numOctaves:Fh},gb={...Cp,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Uu,WebkitFilter:Uu},kp=e=>gb[e];function Fv(e,t){let n=kp(e);return n!==Uu&&(n=cr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const vb=new Set(["auto","none","0"]);function xb(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!vb.has(o)&&ta(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Fv(n,i)}class Bv extends jp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Sp(u))){const d=zv(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Y5.has(r)||t.length!==2)return;const[i,o]=t,a=Dh(i),s=Dh(o);if(a!==s)if(Ih(a)&&Ih(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)F5(t[i])&&r.push(i);r.length&&xb(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Pi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=Pi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Ep(e){return typeof e=="function"}let ns;function yb(){ns=void 0}const pn={now:()=>(ns===void 0&&pn.set(Re.isProcessing||L5.useManualTiming?Re.timestamp:performance.now()),ns),set:e=>{ns=e,queueMicrotask(yb)}},Bh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(cr.test(e)||e==="0")&&!e.startsWith("url("));function wb(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function bb(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Bh(i,t),s=Bh(o,t);return!a||!s?!1:wb(e)||(n==="spring"||Ep(n))&&r}const Sb=40;class $v{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=pn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Sb?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&J5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=pn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!bb(t,r,i,o))if(a)this.options.duration=0;else{l==null||l(_l(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Pp(e,t){return t?e*(1e3/t):0}const jb=5;function qv(e,t,n){const r=Math.max(t-jb,0);return Pp(n-e(r),t-r)}const xc=.001,Tb=.01,_b=10,Cb=.05,kb=1;function Eb({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=lr(Cb,kb,a),e=lr(Tb,_b,_n(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,v=Wu(u,a),x=Math.exp(-p);return xc-f/v*x},o=u=>{const p=u*a*e,f=p*n+n,v=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-p),y=Wu(Math.pow(u,2),a);return(-i(u)+xc>0?-1:1)*((f-v)*x)/y}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-xc+d*p},o=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const s=5/e,l=zb(i,o,s);if(e=Tn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const Pb=12;function zb(e,t,n){let r=n;for(let i=1;i<Pb;i++)r=r-e(r)/t(r);return r}function Wu(e,t){return e*Math.sqrt(1-t*t)}const Ab=["duration","bounce"],Mb=["stiffness","damping","mass"];function $h(e,t){return t.some(n=>e[n]!==void 0)}function Lb(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!$h(e,Mb)&&$h(e,Ab)){const n=Eb(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Hv({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=Lb({...r,velocity:-_n(r.velocity||0)}),v=p||0,x=l/(2*Math.sqrt(s*u)),y=o-i,b=_n(Math.sqrt(s/u)),g=Math.abs(y)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(x<1){const m=Wu(b,x);h=w=>{const S=Math.exp(-x*b*w);return o-S*((v+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>o-Math.exp(-b*m)*(y+(v+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),j=Math.min(m*w,300);return o-S*((v+x*b*y)*Math.sinh(j)+m*y*Math.cosh(j))/m}}return{calculatedDuration:f&&d||null,next:m=>{const w=h(m);if(f)a.done=m>=d;else{let S=0;x<1&&(S=m===0?Tn(v):qv(h,m,w));const j=Math.abs(S)<=n,C=Math.abs(o-w)<=t;a.done=j&&C}return a.value=a.done?o:w,a}}}function qh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},v=k=>s!==void 0&&k<s||l!==void 0&&k>l,x=k=>s===void 0?l:l===void 0||Math.abs(s-k)<Math.abs(l-k)?s:l;let y=n*t;const b=p+y,g=a===void 0?b:a(b);g!==b&&(y=g-p);const h=k=>-y*Math.exp(-k/r),m=k=>g+h(k),w=k=>{const P=h(k),E=m(k);f.done=Math.abs(P)<=u,f.value=f.done?g:E};let S,j;const C=k=>{v(f.value)&&(S=k,j=Hv({keyframes:[f.value,x(f.value)],velocity:qv(m,k,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:k=>{let P=!1;return!j&&S===void 0&&(P=!0,w(k),C(k)),S!==void 0&&k>=S?j.next(k-S):(!P&&w(k),f)}}}const Ob=fa(.42,0,1,1),Ib=fa(0,0,.58,1),Uv=fa(.42,0,.58,1),Rb=e=>Array.isArray(e)&&typeof e[0]!="number",zp=e=>Array.isArray(e)&&typeof e[0]=="number",Hh={linear:Ye,easeIn:Ob,easeInOut:Uv,easeOut:Ib,circIn:bp,circInOut:_v,circOut:Tv,backIn:wp,backInOut:Sv,backOut:bv,anticipate:jv},Uh=e=>{if(zp(e)){Bu(e.length===4);const[t,n,r,i]=e;return fa(t,n,r,i)}else if(typeof e=="string")return Bu(Hh[e]!==void 0),Hh[e];return e},Vb=(e,t)=>n=>t(e(n)),Cn=(...e)=>e.reduce(Vb),Rr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},we=(e,t,n)=>e+(t-e)*n;function yc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Db({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=yc(l,s,e+1/3),o=yc(l,s,e),a=yc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function Fs(e,t){return n=>n>0?t:e}const wc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Nb=[Hu,Tr,si],Fb=e=>Nb.find(t=>t.test(e));function Wh(e){const t=Fb(e);if(!t)return!1;let n=t.parse(e);return t===si&&(n=Db(n)),n}const Gh=(e,t)=>{const n=Wh(e),r=Wh(t);if(!n||!r)return Fs(e,t);const i={...n};return o=>(i.red=wc(n.red,r.red,o),i.green=wc(n.green,r.green,o),i.blue=wc(n.blue,r.blue,o),i.alpha=we(n.alpha,r.alpha,o),Tr.transform(i))},Gu=new Set(["none","hidden"]);function Bb(e,t){return Gu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function $b(e,t){return n=>we(e,t,n)}function Ap(e){return typeof e=="number"?$b:typeof e=="string"?Sp(e)?Fs:Ze.test(e)?Gh:Ub:Array.isArray(e)?Wv:typeof e=="object"?Ze.test(e)?Gh:qb:Fs}function Wv(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>Ap(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function qb(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ap(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Hb(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=l,i[a]++}return r}const Ub=(e,t)=>{const n=cr.createTransformer(t),r=ta(e),i=ta(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Gu.has(e)&&!i.values.length||Gu.has(t)&&!r.values.length?Bb(e,t):Cn(Wv(Hb(r,i),i.values),n):Fs(e,t)};function Gv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?we(e,t,n):Ap(e)(e,t)}function Wb(e,t,n){const r=[],i=n||Gv,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Ye:t;s=Cn(l,s)}r.push(s)}return r}function Mp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Bu(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Wb(t,r,i),s=a.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=Rr(e[d],e[d+1],u);return a[d](p)};return n?u=>l(lr(e[0],e[o-1],u)):l}function Gb(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Rr(0,t,r);e.push(we(n,1,i))}}function Yv(e){const t=[0];return Gb(t,e.length-1),t}function Yb(e,t){return e.map(n=>n*t)}function Kb(e,t){return e.map(()=>t||Uv).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Rb(r)?r.map(Uh):Uh(r),o={done:!1,value:t[0]},a=Yb(n&&n.length===t.length?n:Yv(t),e),s=Mp(a,t,{ease:Array.isArray(i)?i:Kb(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const Yh=2e4;function Xb(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Yh;)t+=n,r=e.next(t);return t>=Yh?1/0:t}const Qb=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ie.update(t,!0),stop:()=>Zt(t),now:()=>Re.isProcessing?Re.timestamp:pn.now()}},Zb={decay:qh,inertia:qh,tween:Bs,keyframes:Bs,spring:Hv},Jb=e=>e/100;class Lp extends $v{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||jp,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=Ep(n)?n:Zb[n]||Bs;let l,u;s!==Bs&&typeof t[0]!="number"&&(l=Cn(Jb,Gv(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Xb(d));const{calculatedDuration:p}=d,f=p+i,v=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:f,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:v,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let m=this.currentTime,w=o;if(v){const k=Math.min(this.currentTime,d)/p;let P=Math.floor(k),E=k%1;!E&&k>=1&&(E=1),E===1&&P--,P=Math.min(P,v+1),!!(P%2)&&(x==="reverse"?(E=1-E,y&&(E-=y/p)):x==="mirror"&&(w=a)),m=lr(0,1,E)*p}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:j}=S;!h&&u!==null&&(j=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return C&&i!==void 0&&(S.value=_l(l,this.options,i)),b&&b(S.value),C&&this.finish(),S}get duration(){const{resolved:t}=this;return t?_n(t.calculatedDuration):0}get time(){return _n(this.currentTime)}set time(t){t=Tn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=_n(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Qb,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const eS=new Set(["opacity","clipPath","filter","transform"]),tS=10,nS=(e,t)=>{let n="";const r=Math.max(Math.round(t/tS),2);for(let i=0;i<r;i++)n+=e(Rr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Op(e){let t;return()=>(t===void 0&&(t=e()),t)}const rS={linearEasing:void 0};function iS(e,t){const n=Op(e);return()=>{var r;return(r=rS[t])!==null&&r!==void 0?r:n()}}const $s=iS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Kv(e){return!!(typeof e=="function"&&$s()||!e||typeof e=="string"&&(e in Yu||$s())||zp(e)||Array.isArray(e)&&e.every(Kv))}const mo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Yu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mo([0,.65,.55,1]),circOut:mo([.55,0,1,.45]),backIn:mo([.31,.01,.66,-.59]),backOut:mo([.33,1.53,.69,.99])};function Xv(e,t){if(e)return typeof e=="function"&&$s()?nS(e,t):zp(e)?mo(e):Array.isArray(e)?e.map(n=>Xv(n,t)||Yu.easeOut):Yu[e]}function oS(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Xv(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function Kh(e,t){e.timeline=t,e.onfinish=null}const aS=Op(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),qs=10,sS=2e4;function lS(e){return Ep(e.type)||e.type==="spring"||!Kv(e.ease)}function cS(e,t){const n=new Lp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<sS;)r=n.sample(o),i.push(r.value),o+=qs;return{times:void 0,keyframes:i,duration:o-qs,ease:"linear"}}const Qv={anticipate:jv,backInOut:Sv,circInOut:_v};function uS(e){return e in Qv}class Xh extends $v{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Bv(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:a,type:s,motionValue:l,name:u,startTime:d}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof a=="string"&&$s()&&uS(a)&&(a=Qv[a]),lS(this.options)){const{onComplete:f,onUpdate:v,motionValue:x,element:y,...b}=this.options,g=cS(t,b);t=g.keyframes,t.length===1&&(t[1]=t[0]),i=g.duration,o=g.times,a=g.ease,s="keyframes"}const p=oS(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:a});return p.startTime=d??this.calcStartTime(),this.pendingTimeline?(Kh(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:f}=this.options;l.set(_l(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:s,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return _n(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return _n(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Tn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ye;const{animation:r}=n;Kh(r,t)}return Ye}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...v}=this.options,x=new Lp({...v,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),y=Tn(this.time);u.setWithVelocity(x.sample(y-qs).value,x.sample(y).value,qs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;return aS()&&r&&eS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const Zv=Op(()=>window.ScrollTimeline!==void 0);class dS{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>Zv()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function pS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Ip=(e,t,n,r={},i,o)=>a=>{const s=yp(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Tn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};pS(s)||(d={...d,...M5(e,d)}),d.duration&&(d.duration=Tn(d.duration)),d.repeatDelay&&(d.repeatDelay=Tn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!o&&t.get()!==void 0){const f=_l(d.keyframes,s);if(f!==void 0)return ie.update(()=>{d.onUpdate(f),d.onComplete()}),new dS([])}return!o&&Xh.supports(d)?new Xh(d):new Lp(d)},fS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),hS=e=>Fu(e)?e[e.length-1]||0:e;function Rp(e,t){e.indexOf(t)===-1&&e.push(t)}function Vp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Dp{constructor(){this.subscriptions=[]}add(t){return Rp(this.subscriptions,t),()=>Vp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Qh=30,mS=e=>!isNaN(parseFloat(e)),Eo={current:void 0};class gS{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=pn.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=pn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=mS(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Dp);const r=this.events[t].add(n);return t==="change"?()=>{r(),ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Eo.current&&Eo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=pn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Qh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Qh);return Pp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function sn(e,t){return new gS(e,t)}function vS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,sn(n))}function xS(e,t){const n=Tl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=hS(o[a]);vS(e,a,s)}}const Np=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yS="framerAppearId",Jv="data-"+Np(yS);function ex(e){return e.props[Jv]}const et=e=>!!(e&&e.getVelocity);function wS(e){return!!(et(e)&&e.add)}function Ku(e,t){const n=e.getValue("willChange");if(wS(n))return n.add(t)}function bS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function tx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const f=e.getValue(p,(o=e.latestValues[p])!==null&&o!==void 0?o:null),v=l[p];if(v===void 0||d&&bS(d,p))continue;const x={delay:n,...yp(a||{},p)};let y=!1;if(window.MotionHandoffAnimation){const g=ex(e);if(g){const h=window.MotionHandoffAnimation(g,p,ie);h!==null&&(x.startTime=h,y=!0)}}Ku(e,p),f.start(Ip(p,f,v,e.shouldReduceMotion&&Ur.has(p)?{type:!1}:x,e,y));const b=f.animation;b&&u.push(b)}return s&&Promise.all(u).then(()=>{ie.update(()=>{s&&xS(e,s)})}),u}function Xu(e,t,n={}){var r;const i=Tl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(tx(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=o;return SS(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,d]=l==="beforeChildren"?[a,s]:[s,a];return u().then(()=>d())}else return Promise.all([a(),s(n.delay)])}function SS(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(jS).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Xu(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function jS(e,t){return e.sortNodePosition(t)}function TS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Xu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Xu(e,t,n);else{const i=typeof t=="function"?Tl(e,t,n.custom):t;r=Promise.all(tx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const _S=xp.length;function nx(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?nx(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<_S;n++){const r=xp[n],i=e.props[r];(Jo(i)||i===!1)&&(t[r]=i)}return t}const CS=[...vp].reverse(),kS=vp.length;function ES(e){return t=>Promise.all(t.map(({animation:n,options:r})=>TS(e,n,r)))}function PS(e){let t=ES(e),n=Zh(),r=!0;const i=l=>(u,d)=>{var p;const f=Tl(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:v,transitionEnd:x,...y}=f;u={...u,...y,...x}}return u};function o(l){t=l(e)}function a(l){const{props:u}=e,d=nx(e.parent)||{},p=[],f=new Set;let v={},x=1/0;for(let b=0;b<kS;b++){const g=CS[b],h=n[g],m=u[g]!==void 0?u[g]:d[g],w=Jo(m),S=g===l?h.isActive:null;S===!1&&(x=b);let j=m===d[g]&&m!==u[g]&&w;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),h.protectedKeys={...v},!h.isActive&&S===null||!m&&!h.prevProp||jl(m)||typeof m=="boolean")continue;const C=zS(h.prevProp,m);let k=C||g===l&&h.isActive&&!j&&w||b>x&&w,P=!1;const E=Array.isArray(m)?m:[m];let O=E.reduce(i(g),{});S===!1&&(O={});const{prevResolvedValues:F={}}=h,V={...F,...O},q=te=>{k=!0,f.has(te)&&(P=!0,f.delete(te)),h.needsAnimating[te]=!0;const A=e.getValue(te);A&&(A.liveStyle=!1)};for(const te in V){const A=O[te],D=F[te];if(v.hasOwnProperty(te))continue;let N=!1;Fu(A)&&Fu(D)?N=!gv(A,D):N=A!==D,N?A!=null?q(te):f.add(te):A!==void 0&&f.has(te)?q(te):h.protectedKeys[te]=!0}h.prevProp=m,h.prevResolvedValues=O,h.isActive&&(v={...v,...O}),r&&e.blockInitialAnimation&&(k=!1),k&&(!(j&&C)||P)&&p.push(...E.map(te=>({animation:te,options:{type:g}})))}if(f.size){const b={};f.forEach(g=>{const h=e.getBaseTarget(g),m=e.getValue(g);m&&(m.liveStyle=!0),b[g]=h??null}),p.push({animation:b})}let y=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(p):Promise.resolve()}function s(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var v;return(v=f.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const p=a(l);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Zh(),r=!0}}}function zS(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!gv(t,e):!1}function gr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zh(){return{animate:gr(!0),whileInView:gr(),whileHover:gr(),whileTap:gr(),whileDrag:gr(),whileFocus:gr(),exit:gr()}}class fr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class AS extends fr{constructor(t){super(t),t.animationState||(t.animationState=PS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();jl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let MS=0;class LS extends fr{constructor(){super(...arguments),this.id=MS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const OS={animation:{Feature:AS},exit:{Feature:LS}},rx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Cl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const IS=e=>t=>rx(t)&&e(t,Cl(t));function Sn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function kn(e,t,n,r){return Sn(e,t,IS(n),r)}const Jh=(e,t)=>Math.abs(e-t);function RS(e,t){const n=Jh(e.x,t.x),r=Jh(e.y,t.y);return Math.sqrt(n**2+r**2)}class ix{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Sc(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,v=RS(p.offset,{x:0,y:0})>=3;if(!f&&!v)return;const{point:x}=p,{timestamp:y}=Re;this.history.push({...x,timestamp:y});const{onStart:b,onMove:g}=this.handlers;f||(b&&b(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=bc(f,this.transformPagePoint),ie.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Sc(p.type==="pointercancel"?this.lastMoveEventInfo:bc(f,this.transformPagePoint),this.history);this.startEvent&&v&&v(p,b),x&&x(p,b)},!rx(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Cl(t),s=bc(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Re;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Sc(s,this.history)),this.removeListeners=Cn(kn(this.contextWindow,"pointermove",this.handlePointerMove),kn(this.contextWindow,"pointerup",this.handlePointerUp),kn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt(this.updatePoint)}}function bc(e,t){return t?{point:t(e.point)}:e}function em(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sc({point:e},t){return{point:e,delta:em(e,ox(t)),offset:em(e,VS(t)),velocity:DS(t,.1)}}function VS(e){return e[0]}function ox(e){return e[e.length-1]}function DS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=ox(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Tn(t)));)n--;if(!r)return{x:0,y:0};const o=_n(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function ax(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const tm=ax("dragHorizontal"),nm=ax("dragVertical");function sx(e){let t=!1;if(e==="y")t=nm();else if(e==="x")t=tm();else{const n=tm(),r=nm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function lx(){const e=sx(!0);return e?(e(),!1):!0}function li(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const cx=1e-4,NS=1-cx,FS=1+cx,ux=.01,BS=0-ux,$S=0+ux;function _t(e){return e.max-e.min}function qS(e,t,n){return Math.abs(e-t)<=n}function rm(e,t,n,r=.5){e.origin=r,e.originPoint=we(t.min,t.max,e.origin),e.scale=_t(n)/_t(t),e.translate=we(n.min,n.max,e.origin)-e.originPoint,(e.scale>=NS&&e.scale<=FS||isNaN(e.scale))&&(e.scale=1),(e.translate>=BS&&e.translate<=$S||isNaN(e.translate))&&(e.translate=0)}function Po(e,t,n,r){rm(e.x,t.x,n.x,r?r.originX:void 0),rm(e.y,t.y,n.y,r?r.originY:void 0)}function im(e,t,n){e.min=n.min+t.min,e.max=e.min+_t(t)}function HS(e,t,n){im(e.x,t.x,n.x),im(e.y,t.y,n.y)}function om(e,t,n){e.min=t.min-n.min,e.max=e.min+_t(t)}function zo(e,t,n){om(e.x,t.x,n.x),om(e.y,t.y,n.y)}function US(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?we(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?we(n,e,r.max):Math.min(e,n)),e}function am(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function WS(e,{top:t,left:n,bottom:r,right:i}){return{x:am(e.x,n,i),y:am(e.y,t,r)}}function sm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function GS(e,t){return{x:sm(e.x,t.x),y:sm(e.y,t.y)}}function YS(e,t){let n=.5;const r=_t(e),i=_t(t);return i>r?n=Rr(t.min,t.max-r,e.min):r>i&&(n=Rr(e.min,e.max-i,t.min)),lr(0,1,n)}function KS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qu=.35;function XS(e=Qu){return e===!1?e=0:e===!0&&(e=Qu),{x:lm(e,"left","right"),y:lm(e,"top","bottom")}}function lm(e,t,n){return{min:cm(e,t),max:cm(e,n)}}function cm(e,t){return typeof e=="number"?e:e[t]||0}const um=()=>({translate:0,scale:1,origin:0,originPoint:0}),ci=()=>({x:um(),y:um()}),dm=()=>({min:0,max:0}),ke=()=>({x:dm(),y:dm()});function Lt(e){return[e("x"),e("y")]}function dx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function QS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ZS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jc(e){return e===void 0||e===1}function Zu({scale:e,scaleX:t,scaleY:n}){return!jc(e)||!jc(t)||!jc(n)}function yr(e){return Zu(e)||px(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function px(e){return pm(e.x)||pm(e.y)}function pm(e){return e&&e!=="0%"}function Hs(e,t,n){const r=e-n,i=t*r;return n+i}function fm(e,t,n,r,i){return i!==void 0&&(e=Hs(e,i,r)),Hs(e,n,r)+t}function Ju(e,t=0,n=1,r,i){e.min=fm(e.min,t,n,r,i),e.max=fm(e.max,t,n,r,i)}function fx(e,{x:t,y:n}){Ju(e.x,t.translate,t.scale,t.originPoint),Ju(e.y,n.translate,n.scale,n.originPoint)}const hm=.999999999999,mm=1.0000000000001;function JS(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&di(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,fx(e,a)),r&&yr(o.latestValues)&&di(e,o.latestValues))}t.x<mm&&t.x>hm&&(t.x=1),t.y<mm&&t.y>hm&&(t.y=1)}function ui(e,t){e.min=e.min+t,e.max=e.max+t}function gm(e,t,n,r,i=.5){const o=we(e.min,e.max,i);Ju(e,t,n,o,r)}function di(e,t){gm(e.x,t.x,t.scaleX,t.scale,t.originX),gm(e.y,t.y,t.scaleY,t.scale,t.originY)}function hx(e,t){return dx(ZS(e.getBoundingClientRect(),t))}function e4(e,t,n){const r=hx(e,n),{scroll:i}=t;return i&&(ui(r.x,i.offset.x),ui(r.y,i.offset.y)),r}const mx=({current:e})=>e?e.ownerDocument.defaultView:null,t4=new WeakMap;class n4{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ke(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Cl(d,"page").point)},o=(d,p)=>{const{drag:f,dragPropagation:v,onDragStart:x}=this.getProps();if(f&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=sx(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Lt(b=>{let g=this.getAxisMotionValue(b).get()||0;if(dn.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(g=_t(m)*(parseFloat(g)/100))}}this.originPoint[b]=g}),x&&ie.postRender(()=>x(d,p)),Ku(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,p)=>{const{dragPropagation:f,dragDirectionLock:v,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=p;if(v&&this.currentDirection===null){this.currentDirection=r4(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),y&&y(d,p)},s=(d,p)=>this.stop(d,p),l=()=>Lt(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ix(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:mx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ie.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ra(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=US(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&li(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=WS(i.layoutBox,n):this.constraints=!1,this.elastic=XS(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Lt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=KS(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!li(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=e4(r,i.root,this.visualElement.getTransformPagePoint());let a=GS(i.layout.layoutBox,o);if(n){const s=n(QS(a));this.hasMutatedConstraints=!!s,s&&(a=dx(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Lt(d=>{if(!Ra(d,n,this.currentDirection))return;let p=l&&l[d]||{};a&&(p={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ku(this.visualElement,t),r.start(Ip(t,r,0,n,this.visualElement,!1))}stopAnimation(){Lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Lt(n=>{const{drag:r}=this.getProps();if(!Ra(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-we(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!li(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Lt(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=YS({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Lt(a=>{if(!Ra(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(we(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;t4.set(this.visualElement,this);const t=this.visualElement.current,n=kn(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();li(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ie.read(r);const a=Sn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Lt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Qu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Ra(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function r4(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class i4 extends fr{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new n4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}unmount(){this.removeGroupControls(),this.removeListeners()}}const vm=e=>(t,n)=>{e&&ie.postRender(()=>e(t,n))};class o4 extends fr{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new ix(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:mx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:vm(t),onStart:vm(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&ie.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=kn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const kl=T.createContext(null);function a4(){const e=T.useContext(kl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=T.useId();T.useEffect(()=>r(i),[]);const o=T.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const Fp=T.createContext({}),gx=T.createContext({}),rs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const io={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=xm(e,t.target.x),r=xm(e,t.target.y);return`${n}% ${r}%`}},s4={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=cr.parse(e);if(i.length>5)return r;const o=cr.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=we(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}},Us={};function l4(e){Object.assign(Us,e)}const{schedule:Bp,cancel:LP}=vv(queueMicrotask,!1);class c4 extends T.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;l4(u4),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),rs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||ie.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Bp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function vx(e){const[t,n]=a4(),r=T.useContext(Fp);return c.jsx(c4,{...e,layoutGroup:r,switchLayoutGroup:T.useContext(gx),isPresent:t,safeToRemove:n})}const u4={borderRadius:{...io,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:io,borderTopRightRadius:io,borderBottomLeftRadius:io,borderBottomRightRadius:io,boxShadow:s4},xx=["TopLeft","TopRight","BottomLeft","BottomRight"],d4=xx.length,ym=e=>typeof e=="string"?parseFloat(e):e,wm=e=>typeof e=="number"||H.test(e);function p4(e,t,n,r,i,o){i?(e.opacity=we(0,n.opacity!==void 0?n.opacity:1,f4(r)),e.opacityExit=we(t.opacity!==void 0?t.opacity:1,0,h4(r))):o&&(e.opacity=we(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<d4;a++){const s=`border${xx[a]}Radius`;let l=bm(t,s),u=bm(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||wm(l)===wm(u)?(e[s]=Math.max(we(ym(l),ym(u),r),0),(dn.test(u)||dn.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=we(t.rotate||0,n.rotate||0,r))}function bm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const f4=yx(0,.5,Tv),h4=yx(.5,.95,Ye);function yx(e,t,n){return r=>r<e?0:r>t?1:n(Rr(e,t,r))}function Sm(e,t){e.min=t.min,e.max=t.max}function At(e,t){Sm(e.x,t.x),Sm(e.y,t.y)}function jm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Tm(e,t,n,r,i){return e-=t,e=Hs(e,1/n,r),i!==void 0&&(e=Hs(e,1/i,r)),e}function m4(e,t=0,n=1,r=.5,i,o=e,a=e){if(dn.test(t)&&(t=parseFloat(t),t=we(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=we(o.min,o.max,r);e===o&&(s-=t),e.min=Tm(e.min,t,n,s,i),e.max=Tm(e.max,t,n,s,i)}function _m(e,t,[n,r,i],o,a){m4(e,t[n],t[r],t[i],t.scale,o,a)}const g4=["x","scaleX","originX"],v4=["y","scaleY","originY"];function Cm(e,t,n,r){_m(e.x,t,g4,n?n.x:void 0,r?r.x:void 0),_m(e.y,t,v4,n?n.y:void 0,r?r.y:void 0)}function km(e){return e.translate===0&&e.scale===1}function wx(e){return km(e.x)&&km(e.y)}function Em(e,t){return e.min===t.min&&e.max===t.max}function x4(e,t){return Em(e.x,t.x)&&Em(e.y,t.y)}function Pm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function bx(e,t){return Pm(e.x,t.x)&&Pm(e.y,t.y)}function zm(e){return _t(e.x)/_t(e.y)}function Am(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class y4{constructor(){this.members=[]}add(t){Rp(this.members,t),t.scheduleRender()}remove(t){if(Vp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function w4(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:v,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const b4=(e,t)=>e.depth-t.depth;class S4{constructor(){this.children=[],this.isDirty=!1}add(t){Rp(this.children,t),this.isDirty=!0}remove(t){Vp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(b4),this.isDirty=!1,this.children.forEach(t)}}function is(e){const t=et(e)?e.get():e;return fS(t)?t.toValue():t}function j4(e,t){const n=pn.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Zt(r),e(o-t))};return ie.read(r,!0),()=>Zt(r)}function T4(e){return e instanceof SVGElement&&e.tagName!=="svg"}function _4(e,t,n){const r=et(e)?e:sn(e);return r.start(Ip("",r,t,n)),r.animation}const wr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},go=typeof window<"u"&&window.MotionDebug!==void 0,Tc=["","X","Y","Z"],C4={visibility:"hidden"},Mm=1e3;let k4=0;function _c(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Sx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ex(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ie,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Sx(r)}function jx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=k4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,go&&(wr.totalNodes=wr.resolvedTargetDeltas=wr.recalculatedProjection=0),this.nodes.forEach(z4),this.nodes.forEach(I4),this.nodes.forEach(R4),this.nodes.forEach(A4),go&&window.MotionDebug.record(wr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new S4)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Dp),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=T4(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=j4(f,250),rs.hasAnimatedSinceResize&&(rs.hasAnimatedSinceResize=!1,this.nodes.forEach(Om))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||B4,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!bx(this.targetLayout,x)||v,m=!f&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,m);const w={...yp(y,"layout"),onPlay:b,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Om(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(V4),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Sx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lm);return}this.isUpdating||this.nodes.forEach(L4),this.isUpdating=!1,this.nodes.forEach(O4),this.nodes.forEach(E4),this.nodes.forEach(P4),this.clearAllSnapshots();const s=pn.now();Re.delta=lr(0,1e3/60,s-Re.timestamp),Re.timestamp=s,Re.isProcessing=!0,gc.update.process(Re),gc.preRender.process(Re),gc.render.process(Re),Re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Bp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(M4),this.sharedNodes.forEach(D4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!wx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||yr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),$4(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return ke();const l=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(q4))){const{scroll:d}=this.root;d&&(ui(l.x,d.offset.x),ui(l.y,d.offset.y))}return l}removeElementScroll(a){var s;const l=ke();if(At(l,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&At(l,a),ui(l.x,p.offset.x),ui(l.y,p.offset.y))}return l}applyTransform(a,s=!1){const l=ke();At(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&di(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),yr(d.latestValues)&&di(l,d.latestValues)}return yr(this.latestValues)&&di(l,this.latestValues),l}removeTransform(a){const s=ke();At(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!yr(u.latestValues))continue;Zu(u.latestValues)&&u.updateSnapshot();const d=ke(),p=u.measurePageBox();At(d,p),Cm(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return yr(this.latestValues)&&Cm(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=Re.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),zo(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ke(),this.targetWithTransforms=ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),fx(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),zo(this.relativeTargetOrigin,this.target,v.target),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}go&&wr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zu(this.parent.latestValues)||px(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Re.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;At(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,v=this.treeScale.y;JS(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=ke());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jm(this.prevProjectionDelta.x,this.projectionDelta.x),jm(this.prevProjectionDelta.y,this.projectionDelta.y)),Po(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==v||!Am(this.projectionDelta.x,this.prevProjectionDelta.x)||!Am(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),go&&wr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ci(),this.projectionDelta=ci(),this.projectionDeltaWithTransform=ci()}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},p=ci();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const f=ke(),v=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=v!==x,b=this.getStack(),g=!b||b.members.length<=1,h=!!(y&&!g&&this.options.crossfade===!0&&!this.path.some(F4));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;Im(p.x,a.x,S),Im(p.y,a.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),N4(this.relativeTarget,this.relativeTargetOrigin,f,S),m&&x4(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=ke()),At(m,this.relativeTarget)),y&&(this.animationValues=d,p4(d,u,this.latestValues,S,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ie.update(()=>{rs.hasAnimatedSinceResize=!0,this.currentAnimation=_4(0,Mm,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&Tx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ke();const p=_t(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+p;const f=_t(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}At(s,l),di(s,d),Po(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new y4),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&_c("z",a,u,this.animationValues);for(let d=0;d<Tc.length;d++)_c(`rotate${Tc[d]}`,a,u,this.animationValues),_c(`skew${Tc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return C4;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=is(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=is(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!yr(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=w4(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(l=(s=f.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Us){if(f[y]===void 0)continue;const{correct:b,applyTo:g}=Us[y],h=u.transform==="none"?f[y]:b(f[y],p);if(g){const m=g.length;for(let w=0;w<m;w++)u[g[w]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=p===this?is(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Lm),this.root.sharedNodes.clear()}}}function E4(e){e.updateLayout()}function P4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?Lt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],v=_t(f);f.min=r[p].min,f.max=f.min+v}):Tx(o,n.layoutBox,r)&&Lt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],v=_t(r[p]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+v)});const s=ci();Po(s,r,n.layoutBox);const l=ci();a?Po(l,e.applyTransform(i,!0),n.measuredBox):Po(l,r,n.layoutBox);const u=!wx(s);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:v}=p;if(f&&v){const x=ke();zo(x,n.layoutBox,f.layoutBox);const y=ke();zo(y,r,v.layoutBox),bx(x,y)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function z4(e){go&&wr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function A4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function M4(e){e.clearSnapshot()}function Lm(e){e.clearMeasurements()}function L4(e){e.isLayoutDirty=!1}function O4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Om(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function I4(e){e.resolveTargetDelta()}function R4(e){e.calcProjection()}function V4(e){e.resetSkewAndRotation()}function D4(e){e.removeLeadSnapshot()}function Im(e,t,n){e.translate=we(t.translate,0,n),e.scale=we(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Rm(e,t,n,r){e.min=we(t.min,n.min,r),e.max=we(t.max,n.max,r)}function N4(e,t,n,r){Rm(e.x,t.x,n.x,r),Rm(e.y,t.y,n.y,r)}function F4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const B4={duration:.45,ease:[.4,0,.1,1]},Vm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Dm=Vm("applewebkit/")&&!Vm("chrome/")?Math.round:Ye;function Nm(e){e.min=Dm(e.min),e.max=Dm(e.max)}function $4(e){Nm(e.x),Nm(e.y)}function Tx(e,t,n){return e==="position"||e==="preserve-aspect"&&!qS(zm(t),zm(n),.2)}function q4(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const H4=jx({attachResizeListener:(e,t)=>Sn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cc={current:void 0},_x=jx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cc.current){const e=new H4({});e.mount(window),e.setOptions({layoutScroll:!0}),Cc.current=e}return Cc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),U4={pan:{Feature:o4},drag:{Feature:i4,ProjectionNode:_x,MeasureLayout:vx}};function Fm(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,a)=>{if(o.pointerType==="touch"||lx())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&ie.postRender(()=>l(o,a))};return kn(e.current,n,i,{passive:!e.getProps()[r]})}class W4 extends fr{mount(){this.unmount=Cn(Fm(this.node,!0),Fm(this.node,!1))}unmount(){}}class G4 extends fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Cn(Sn(this.node.current,"focus",()=>this.onFocus()),Sn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Cx=(e,t)=>t?e===t?!0:Cx(e,t.parentElement):!1;function kc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Cl(n))}class Y4 extends fr{constructor(){super(...arguments),this.removeStartListeners=Ye,this.removeEndListeners=Ye,this.removeAccessibleListeners=Ye,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=kn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:p}=this.node.getProps(),f=!p&&!Cx(this.node.current,s.target)?d:u;f&&ie.update(()=>f(s,l))},{passive:!(r.onTap||r.onPointerUp)}),a=kn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Cn(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||kc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&ie.postRender(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=Sn(this.node.current,"keyup",a),kc("down",(s,l)=>{this.startPress(s,l)})},n=Sn(this.node.current,"keydown",t),r=()=>{this.isPressing&&kc("cancel",(o,a)=>this.cancelPress(o,a))},i=Sn(this.node.current,"blur",r);this.removeAccessibleListeners=Cn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ie.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!lx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ie.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=kn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Sn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Cn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ed=new WeakMap,Ec=new WeakMap,K4=e=>{const t=ed.get(e.target);t&&t(e)},X4=e=>{e.forEach(K4)};function Q4({root:e,...t}){const n=e||document;Ec.has(n)||Ec.set(n,{});const r=Ec.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(X4,{root:e,...t})),r[i]}function Z4(e,t,n){const r=Q4(t);return ed.set(e,n),r.observe(e),()=>{ed.delete(e),r.unobserve(e)}}const J4={some:0,all:1};class e7 extends fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:J4[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(l)};return Z4(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(t7(t,n))&&this.startObserver()}unmount(){}}function t7({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const n7={inView:{Feature:e7},tap:{Feature:Y4},focus:{Feature:G4},hover:{Feature:W4}},r7={layout:{ProjectionNode:_x,MeasureLayout:vx}},El=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Pl=T.createContext({}),$p=typeof window<"u",zl=$p?T.useLayoutEffect:T.useEffect,kx=T.createContext({strict:!1});function i7(e,t,n,r,i){var o,a;const{visualElement:s}=T.useContext(Pl),l=T.useContext(kx),u=T.useContext(kl),d=T.useContext(El).reducedMotion,p=T.useRef();r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,v=T.useContext(gx);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&o7(p.current,n,i,v);const x=T.useRef(!1);T.useInsertionEffect(()=>{f&&x.current&&f.update(n,u)});const y=n[Jv],b=T.useRef(!!y&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,y))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,y)));return zl(()=>{f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Bp.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),T.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,y)}),b.current=!1))}),f}function o7(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ex(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&li(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Ex(e){if(e)return e.options.allowProjection!==!1?e.projection:Ex(e.parent)}function a7(e,t,n){return T.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):li(n)&&(n.current=r))},[t])}function Al(e){return jl(e.animate)||xp.some(t=>Jo(e[t]))}function Px(e){return!!(Al(e)||e.variants)}function s7(e,t){if(Al(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Jo(n)?n:void 0,animate:Jo(r)?r:void 0}}return e.inherit!==!1?t:{}}function l7(e){const{initial:t,animate:n}=s7(e,T.useContext(Pl));return T.useMemo(()=>({initial:t,animate:n}),[Bm(t),Bm(n)])}function Bm(e){return Array.isArray(e)?e.join(" "):e}const $m={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zi={};for(const e in $m)zi[e]={isEnabled:t=>$m[e].some(n=>!!t[n])};function c7(e){for(const t in e)zi[t]={...zi[t],...e[t]}}const u7=Symbol.for("motionComponentSymbol");function d7({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&c7(e);function o(s,l){let u;const d={...T.useContext(El),...s,layoutId:p7(s)},{isStatic:p}=d,f=l7(s),v=r(s,p);if(!p&&$p){f7();const x=h7(d);u=x.MeasureLayout,f.visualElement=i7(i,v,d,t,x.ProjectionNode)}return c.jsxs(Pl.Provider,{value:f,children:[u&&f.visualElement?c.jsx(u,{visualElement:f.visualElement,...d}):null,n(i,s,a7(v,f.visualElement,l),v,p,f.visualElement)]})}const a=T.forwardRef(o);return a[u7]=i,a}function p7({layoutId:e}){const t=T.useContext(Fp).id;return t&&e!==void 0?t+"-"+e:e}function f7(e,t){T.useContext(kx).strict}function h7(e){const{drag:t,layout:n}=zi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const m7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function qp(e){return typeof e!="string"||e.includes("-")?!1:!!(m7.indexOf(e)>-1||/[A-Z]/u.test(e))}function zx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Ax=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Mx(e,t,n,r){zx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ax.has(i)?i:Np(i),t.attrs[i])}function Lx(e,{layout:t,layoutId:n}){return Ur.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Us[e]||e==="opacity")}function Hp(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(et(i[a])||t.style&&et(t.style[a])||Lx(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function Ox(e,t,n){const r=Hp(e,t,n);for(const i in e)if(et(e[i])||et(t[i])){const o=pa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function $i(e){const t=T.useRef(null);return t.current===null&&(t.current=e()),t.current}function g7({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:v7(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const Ix=e=>(t,n)=>{const r=T.useContext(Pl),i=T.useContext(kl),o=()=>g7(e,t,r,i);return n?o():$i(o)};function v7(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=is(o[f]);let{initial:a,animate:s}=e;const l=Al(e),u=Px(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const p=d?s:a;if(p&&typeof p!="boolean"&&!jl(p)){const f=Array.isArray(p)?p:[p];for(let v=0;v<f.length;v++){const x=gp(e,f[v]);if(x){const{transitionEnd:y,transition:b,...g}=x;for(const h in g){let m=g[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Up=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Rx=()=>({...Up(),attrs:{}}),Vx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,x7={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},y7=pa.length;function w7(e,t,n){let r="",i=!0;for(let o=0;o<y7;o++){const a=pa[o],s=e[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=Vx(s,Cp[a]);if(!l){i=!1;const d=x7[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Wp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const u=t[l];if(Ur.has(l)){a=!0;continue}else if(Pv(l)){i[l]=u;continue}else{const d=Vx(u,Cp[l]);l.startsWith("origin")?(s=!0,o[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=w7(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${u} ${d}`}}function qm(e,t,n){return typeof e=="string"?e:H.transform(t+n*e)}function b7(e,t,n){const r=qm(t,e.x,e.width),i=qm(n,e.y,e.height);return`${r} ${i}`}const S7={offset:"stroke-dashoffset",array:"stroke-dasharray"},j7={offset:"strokeDashoffset",array:"strokeDasharray"};function T7(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?S7:j7;e[o.offset]=H.transform(-r);const a=H.transform(t),s=H.transform(n);e[o.array]=`${a} ${s}`}function Gp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},d,p){if(Wp(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:v,dimensions:x}=e;f.transform&&(x&&(v.transform=f.transform),delete f.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=b7(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&T7(f,a,s,l,!1)}const Yp=e=>typeof e=="string"&&e.toLowerCase()==="svg",_7={useVisualState:Ix({scrapeMotionValuesFromProps:Ox,createRenderState:Rx,onMount:(e,t,{renderState:n,latestValues:r})=>{ie.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ie.render(()=>{Gp(n,r,Yp(t.tagName),e.transformTemplate),Mx(t,n)})}})},C7={useVisualState:Ix({scrapeMotionValuesFromProps:Hp,createRenderState:Up})};function Dx(e,t,n){for(const r in t)!et(t[r])&&!Lx(r,n)&&(e[r]=t[r])}function k7({transformTemplate:e},t){return T.useMemo(()=>{const n=Up();return Wp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function E7(e,t){const n=e.style||{},r={};return Dx(r,n,e),Object.assign(r,k7(e,t)),r}function P7(e,t){const n={},r=E7(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const z7=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ws(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||z7.has(e)}let Nx=e=>!Ws(e);function A7(e){e&&(Nx=t=>t.startsWith("on")?!Ws(t):e(t))}try{A7(require("@emotion/is-prop-valid").default)}catch{}function M7(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Nx(i)||n===!0&&Ws(i)||!t&&!Ws(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function L7(e,t,n,r){const i=T.useMemo(()=>{const o=Rx();return Gp(o,t,Yp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Dx(o,e.style,e),i.style={...o,...i.style}}return i}function O7(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(qp(n)?L7:P7)(r,o,a,n),u=M7(r,typeof n=="string",e),d=n!==T.Fragment?{...u,...l,ref:i}:{},{children:p}=r,f=T.useMemo(()=>et(p)?p.get():p,[p]);return T.createElement(n,{...d,children:f})}}function I7(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...qp(r)?_7:C7,preloadedFeatures:e,useRender:O7(i),createVisualElement:t,Component:r};return d7(a)}}const td={current:null},Fx={current:!1};function R7(){if(Fx.current=!0,!!$p)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>td.current=e.matches;e.addListener(t),t()}else td.current=!1}function V7(e,t,n){for(const r in t){const i=t[r],o=n[r];if(et(i))e.addValue(r,i);else if(et(o))e.addValue(r,sn(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,sn(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Hm=new WeakMap,D7=[...Mv,Ze,cr],N7=e=>D7.find(Av(e)),Um=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class F7{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=pn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,ie.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Al(n),this.isVariantNode=Px(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const v=p[f];l[f]!==void 0&&et(v)&&v.set(l[f],!1)}}mount(t){this.current=t,Hm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Fx.current||R7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:td.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Hm.delete(this.current),this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Ur.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in zi){const n=zi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Um.length;r++){const i=Um[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=V7(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=sn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(kv(i)||Cv(i))?i=parseFloat(i):!N7(i)&&cr.test(n)&&(i=Fv(t,n)),this.setBaseTarget(t,et(i)?i.get():i)),et(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=gp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!et(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Dp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Bx extends F7{constructor(){super(...arguments),this.KeyframeResolver=Bv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function B7(e){return window.getComputedStyle(e)}class $7 extends Bx{constructor(){super(...arguments),this.type="html",this.renderInstance=zx}readValueFromInstance(t,n){if(Ur.has(n)){const r=kp(n);return r&&r.default||0}else{const r=B7(t),i=(Pv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return hx(t,n)}build(t,n,r){Wp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Hp(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;et(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class q7 extends Bx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ke}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Ur.has(n)){const r=kp(n);return r&&r.default||0}return n=Ax.has(n)?n:Np(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Ox(t,n,r)}build(t,n,r){Gp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Mx(t,n,r,i)}mount(t){this.isSVGTag=Yp(t.tagName),super.mount(t)}}const H7=(e,t)=>qp(e)?new q7(t):new $7(t,{allowProjection:e!==T.Fragment}),U7=I7({...OS,...n7,...U4,...r7},H7),W=k5(U7);class W7 extends T.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function G7({children:e,isPresent:t}){const n=T.useId(),r=T.useRef(null),i=T.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=T.useContext(El);return T.useInsertionEffect(()=>{const{width:a,height:s,top:l,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(W7,{isPresent:t,childRef:r,sizeRef:i,children:T.cloneElement(e,{ref:r})})}const Y7=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=$i(K7),l=T.useId(),u=T.useCallback(p=>{s.set(p,!0);for(const f of s.values())if(!f)return;r&&r()},[s,r]),d=T.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(s.set(p,!1),()=>s.delete(p))}),o?[Math.random(),u]:[n,u]);return T.useMemo(()=>{s.forEach((p,f)=>s.set(f,!1))},[n]),T.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=c.jsx(G7,{isPresent:n,children:e})),c.jsx(kl.Provider,{value:d,children:e})};function K7(){return new Map}const Va=e=>e.key||"";function Wm(e){const t=[];return T.Children.forEach(e,n=>{T.isValidElement(n)&&t.push(n)}),t}const X7=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=T.useMemo(()=>Wm(e),[e]),l=s.map(Va),u=T.useRef(!0),d=T.useRef(s),p=$i(()=>new Map),[f,v]=T.useState(s),[x,y]=T.useState(s);zl(()=>{u.current=!1,d.current=s;for(let h=0;h<x.length;h++){const m=Va(x[h]);l.includes(m)?p.delete(m):p.get(m)!==!0&&p.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==f){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=Va(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}a==="wait"&&b.length&&(h=b),y(Wm(h)),v(s);return}const{forceRender:g}=T.useContext(Fp);return c.jsx(c.Fragment,{children:x.map(h=>{const m=Va(h),w=s===x||l.includes(m),S=()=>{if(p.has(m))p.set(m,!0);else return;let j=!0;p.forEach(C=>{C||(j=!1)}),j&&(g==null||g(),y(d.current),i&&i())};return c.jsx(Y7,{isPresent:w,initial:!u.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:o,mode:a,onExitComplete:w?void 0:S,children:h},m)})})};function Q7(e){const t=$i(()=>sn(e)),{isStatic:n}=T.useContext(El);if(n){const[,r]=T.useState(e);T.useEffect(()=>t.on("change",r),[])}return t}function $x(e,t){const n=Q7(t()),r=()=>n.set(t());return r(),zl(()=>{const i=()=>ie.preRender(r,!1,!0),o=e.map(a=>a.on("change",i));return()=>{o.forEach(a=>a()),Zt(r)}}),n}const Z7=e=>e&&typeof e=="object"&&e.mix,J7=e=>Z7(e)?e.mix:void 0;function e6(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=Mp(i,o,{mixer:J7(o[0]),...a});return t?s(r):s}function t6(e){Eo.current=[],e();const t=$x(Eo.current,e);return Eo.current=void 0,t}function Da(e,t,n,r){if(typeof e=="function")return t6(e);const i=typeof t=="function"?t:e6(t,n,r);return Array.isArray(e)?Gm(e,i):Gm([e],([o])=>i(o))}function Gm(e,t){const n=$i(()=>[]);return $x(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function qx(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const os=new WeakMap;let Fn;function n6(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function r6({target:e,contentRect:t,borderBoxSize:n}){var r;(r=os.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return n6(e,n)}})})}function i6(e){e.forEach(r6)}function o6(){typeof ResizeObserver>"u"||(Fn=new ResizeObserver(i6))}function a6(e,t){Fn||o6();const n=qx(e);return n.forEach(r=>{let i=os.get(r);i||(i=new Set,os.set(r,i)),i.add(t),Fn==null||Fn.observe(r)}),()=>{n.forEach(r=>{const i=os.get(r);i==null||i.delete(t),i!=null&&i.size||Fn==null||Fn.unobserve(r)})}}const as=new Set;let Ao;function s6(){Ao=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};as.forEach(n=>n(t))},window.addEventListener("resize",Ao)}function l6(e){return as.add(e),Ao||s6(),()=>{as.delete(e),!as.size&&Ao&&(Ao=void 0)}}function c6(e,t){return typeof e=="function"?l6(e):a6(e,t)}const u6=50,Ym=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),d6=()=>({time:0,x:Ym(),y:Ym()}),p6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Km(e,t,n,r){const i=n[t],{length:o,position:a}=p6[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Rr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>u6?0:Pp(i.current-s,u)}function f6(e,t,n){Km(e,"x",t,n),Km(e,"y",t,n),t.time=n}function h6(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let a=null,s=r.parentNode;for(;!a;)s.tagName==="svg"&&(a=s),s=r.parentNode;r=a}else break;return n}const m6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},nd={start:0,center:.5,end:1};function Xm(e,t,n=0){let r=0;if(e in nd&&(e=nd[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const g6=[0,0];function v6(e,t,n,r){let i=Array.isArray(e)?e:g6,o=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,nd[e]?e:"0"]),o=Xm(i[0],n,r),a=Xm(i[1],t),o-a}const x6={x:0,y:0};function y6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function w6(e,t,n){const{offset:r=m6.All}=n,{target:i=e,axis:o="y"}=n,a=o==="y"?"height":"width",s=i!==e?h6(i,e):x6,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:y6(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const p=r.length;for(let f=0;f<p;f++){const v=v6(r[f],u[a],l[a],s[o]);!d&&v!==t[o].interpolatorOffsets[f]&&(d=!0),t[o].offset[f]=v}d&&(t[o].interpolate=Mp(t[o].offset,Yv(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function b6(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function S6(e,t,n,r={}){return{measure:()=>b6(e,r.target,n),update:i=>{f6(e,n,i),(r.offset||r.target)&&w6(e,n,r)},notify:()=>t(n)}}const oo=new WeakMap,Qm=new WeakMap,Pc=new WeakMap,Zm=e=>e===document.documentElement?window:e;function Kp(e,{container:t=document.documentElement,...n}={}){let r=Pc.get(t);r||(r=new Set,Pc.set(t,r));const i=d6(),o=S6(t,e,i,n);if(r.add(o),!oo.has(t)){const s=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(Re.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{ie.read(s,!1,!0),ie.read(l,!1,!0),ie.update(u,!1,!0)};oo.set(t,d);const p=Zm(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Qm.set(t,c6(t,d)),p.addEventListener("scroll",d,{passive:!0})}const a=oo.get(t);return ie.read(a,!1,!0),()=>{var s;Zt(a);const l=Pc.get(t);if(!l||(l.delete(o),l.size))return;const u=oo.get(t);oo.delete(t),u&&(Zm(t).removeEventListener("scroll",u),(s=Qm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",u))}}function Hx(e,t){let n;const r=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;n!==a&&e(a),n=a};return ie.update(r,!0),()=>Zt(r)}function j6({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Kp(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const zc=new Map;function Ux({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),zc.has(t)||zc.set(t,{});const r=zc.get(t);return r[n]||(r[n]=Zv()?new ScrollTimeline({source:t,axis:n}):j6({source:t,axis:n})),r[n]}function T6(e){return e.length===2}function Wx(e){return e&&(e.target||e.offset)}function _6(e,t){return T6(e)||Wx(t)?Kp(n=>{e(n[t.axis].progress,n)},t):Hx(e,Ux(t))}function C6(e,t){if(Wx(t))return e.pause(),Kp(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Ux(t);return e.attachTimeline(n,r=>(r.pause(),Hx(i=>{r.time=r.duration*i},n)))}}function k6(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?_6(e,r):C6(e,r)}function Jm(e,t){B5(!!(!t||t.current))}const E6=()=>({scrollX:sn(0),scrollY:sn(0),scrollXProgress:sn(0),scrollYProgress:sn(0)});function P6({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=$i(E6);return(n?zl:T.useEffect)(()=>(Jm("target",t),Jm("container",e),k6((a,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const z6={some:0,all:1};function A6(e,t,{root:n,margin:r,amount:i="some"}={}){const o=qx(e),a=new WeakMap,s=u=>{u.forEach(d=>{const p=a.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?a.set(d.target,f):l.unobserve(d.target)}else p&&(p(d),a.delete(d.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:z6[i]});return o.forEach(u=>l.observe(u)),()=>l.disconnect()}function M6(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,a]=T.useState(!1);return T.useEffect(()=>{if(!e.current||i&&o)return;const s=()=>(a(!0),i?void 0:()=>a(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return A6(e.current,s,l)},[t,e,n,i,r]),o}var Gx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},e0=K.createContext&&K.createContext(Gx),L6=["attr","size","title"];function O6(e,t){if(e==null)return{};var n=I6(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function I6(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(this,arguments)}function t0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ys(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?t0(Object(n),!0).forEach(function(r){R6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R6(e,t,n){return t=V6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V6(e){var t=D6(e,"string");return typeof t=="symbol"?t:t+""}function D6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yx(e){return e&&e.map((t,n)=>K.createElement(t.tag,Ys({key:n},t.attr),Yx(t.child)))}function Y(e){return t=>K.createElement(N6,Gs({attr:Ys({},e.attr)},t),Yx(e.child))}function N6(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=O6(e,L6),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),K.createElement("svg",Gs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Ys(Ys({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&K.createElement("title",null,o),e.children)};return e0!==void 0?K.createElement(e0.Consumer,null,n=>t(n)):t(Gx)}function F6(e){return Y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function n0(e){return Y({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function Xp(e){return Y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Ce(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function Oe(e){return Y({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function r0(e){return Y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function i0(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function re(e){return Y({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function pt(e){return Y({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function o0(e){return Y({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function a0(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function B6(e){return Y({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function En(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function Be(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function be(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function ao(e){return Y({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function Pe(e){return Y({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function ce(e){return Y({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Kx={exports:{}},$6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q6=$6,H6=q6;function Xx(){}function Qx(){}Qx.resetWarningCache=Xx;var U6=function(){function e(r,i,o,a,s,l){if(l!==H6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Qx,resetWarningCache:Xx};return n.PropTypes=n,n};Kx.exports=U6();var W6=Kx.exports;const ge=Vi(W6);function G6(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Zx=T,Y6=G6(Zx);function s0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var X6=!!(typeof window<"u"&&window.document&&window.document.createElement);function Q6(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(d){return d.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(d){K6(p,d);function p(){return d.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,a=[],x};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var x=a.indexOf(this);a.splice(x,1),l()},f.render=function(){return Y6.createElement(o,this.props)},p}(Zx.PureComponent);return s0(u,"displayName","SideEffect("+r(o)+")"),s0(u,"canUseDOM",X6),u}}var Z6=Q6;const J6=Vi(Z6);var e8=typeof Element<"u",t8=typeof Map=="function",n8=typeof Set=="function",r8=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ss(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ss(e[r],t[r]))return!1;return!0}var o;if(t8&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!ss(r.value[1],t.get(r.value[0])))return!1;return!0}if(n8&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(r8&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(e8&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ss(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var i8=function(t,n){try{return ss(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const o8=Vi(i8);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l0=Object.getOwnPropertySymbols,a8=Object.prototype.hasOwnProperty,s8=Object.prototype.propertyIsEnumerable;function l8(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function c8(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var u8=c8()?Object.assign:function(e,t){for(var n,r=l8(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)a8.call(n,a)&&(r[a]=n[a]);if(l0){i=l0(n);for(var s=0;s<i.length;s++)s8.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const d8=Vi(u8);var Pr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},G={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(G).map(function(e){return G[e]});var ve={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Ks={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},na={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},p8=Object.keys(Ks).reduce(function(e,t){return e[Ks[t]]=t,e},{}),f8=[G.NOSCRIPT,G.SCRIPT,G.STYLE],Gt="data-react-helmet",h8=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m8=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},g8=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v8=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c0=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},x8=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},rd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},y8=function(t){var n=yi(t,G.TITLE),r=yi(t,na.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=yi(t,na.DEFAULT_TITLE);return n||i||void 0},w8=function(t){return yi(t,na.ON_CHANGE_CLIENT_STATE)||function(){}},Ac=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return ct({},r,i)},{})},b8=function(t,n){return n.filter(function(r){return typeof r[G.BASE]<"u"}).map(function(r){return r[G.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},so=function(t,n,r){var i={};return r.filter(function(o){return Array.isArray(o[t])?!0:(typeof o[t]<"u"&&_8("Helmet: "+t+' should be of type "Array". Instead found type "'+h8(o[t])+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,a){var s={};a.filter(function(f){for(var v=void 0,x=Object.keys(f),y=0;y<x.length;y++){var b=x[y],g=b.toLowerCase();n.indexOf(g)!==-1&&!(v===ve.REL&&f[v].toLowerCase()==="canonical")&&!(g===ve.REL&&f[g].toLowerCase()==="stylesheet")&&(v=g),n.indexOf(b)!==-1&&(b===ve.INNER_HTML||b===ve.CSS_TEXT||b===ve.ITEM_PROP)&&(v=b)}if(!v||!f[v])return!1;var h=f[v].toLowerCase();return i[v]||(i[v]={}),s[v]||(s[v]={}),i[v][h]?!1:(s[v][h]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var l=Object.keys(s),u=0;u<l.length;u++){var d=l[u],p=d8({},i[d],s[d]);i[d]=p}return o},[]).reverse()},yi=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},S8=function(t){return{baseTag:b8([ve.HREF,ve.TARGET],t),bodyAttributes:Ac(Pr.BODY,t),defer:yi(t,na.DEFER),encode:yi(t,na.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ac(Pr.HTML,t),linkTags:so(G.LINK,[ve.REL,ve.HREF],t),metaTags:so(G.META,[ve.NAME,ve.CHARSET,ve.HTTPEQUIV,ve.PROPERTY,ve.ITEM_PROP],t),noscriptTags:so(G.NOSCRIPT,[ve.INNER_HTML],t),onChangeClientState:w8(t),scriptTags:so(G.SCRIPT,[ve.SRC,ve.INNER_HTML],t),styleTags:so(G.STYLE,[ve.CSS_TEXT],t),title:y8(t),titleAttributes:Ac(Pr.TITLE,t)}},id=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){id(t)},0)}}(),u0=function(t){return clearTimeout(t)},j8=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||id:global.requestAnimationFrame||id,T8=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||u0:global.cancelAnimationFrame||u0,_8=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},lo=null,C8=function(t){lo&&T8(lo),t.defer?lo=j8(function(){d0(t,function(){lo=null})}):(d0(t),lo=null)},d0=function(t,n){var r=t.baseTag,i=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,p=t.styleTags,f=t.title,v=t.titleAttributes;od(G.BODY,i),od(G.HTML,o),k8(f,v);var x={baseTag:Gr(G.BASE,r),linkTags:Gr(G.LINK,a),metaTags:Gr(G.META,s),noscriptTags:Gr(G.NOSCRIPT,l),scriptTags:Gr(G.SCRIPT,d),styleTags:Gr(G.STYLE,p)},y={},b={};Object.keys(x).forEach(function(g){var h=x[g],m=h.newTags,w=h.oldTags;m.length&&(y[g]=m),w.length&&(b[g]=x[g].oldTags)}),n&&n(),u(t,y,b)},Jx=function(t){return Array.isArray(t)?t.join(""):t},k8=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Jx(t)),od(G.TITLE,n)},od=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Gt),o=i?i.split(","):[],a=[].concat(o),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),o.indexOf(u)===-1&&o.push(u);var p=a.indexOf(u);p!==-1&&a.splice(p,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(Gt):r.getAttribute(Gt)!==s.join(",")&&r.setAttribute(Gt,s.join(","))}},Gr=function(t,n){var r=document.head||document.querySelector(G.HEAD),i=r.querySelectorAll(t+"["+Gt+"]"),o=Array.prototype.slice.call(i),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var d in l)if(l.hasOwnProperty(d))if(d===ve.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===ve.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[d]>"u"?"":l[d];u.setAttribute(d,p)}u.setAttribute(Gt,"true"),o.some(function(f,v){return s=v,u.isEqualNode(f)})?o.splice(s,1):a.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:a}},ey=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},E8=function(t,n,r,i){var o=ey(r),a=Jx(n);return o?"<"+t+" "+Gt+'="true" '+o+">"+rd(a,i)+"</"+t+">":"<"+t+" "+Gt+'="true">'+rd(a,i)+"</"+t+">"},P8=function(t,n,r){return n.reduce(function(i,o){var a=Object.keys(o).filter(function(u){return!(u===ve.INNER_HTML||u===ve.CSS_TEXT)}).reduce(function(u,d){var p=typeof o[d]>"u"?d:d+'="'+rd(o[d],r)+'"';return u?u+" "+p:p},""),s=o.innerHTML||o.cssText||"",l=f8.indexOf(t)===-1;return i+"<"+t+" "+Gt+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},ty=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Ks[i]||i]=t[i],r},n)},z8=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[p8[i]||i]=t[i],r},n)},A8=function(t,n,r){var i,o=(i={key:n},i[Gt]=!0,i),a=ty(r,o);return[K.createElement(G.TITLE,a,n)]},M8=function(t,n){return n.map(function(r,i){var o,a=(o={key:i},o[Gt]=!0,o);return Object.keys(r).forEach(function(s){var l=Ks[s]||s;if(l===ve.INNER_HTML||l===ve.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),K.createElement(t,a)})},hn=function(t,n,r){switch(t){case G.TITLE:return{toComponent:function(){return A8(t,n.title,n.titleAttributes)},toString:function(){return E8(t,n.title,n.titleAttributes,r)}};case Pr.BODY:case Pr.HTML:return{toComponent:function(){return ty(n)},toString:function(){return ey(n)}};default:return{toComponent:function(){return M8(t,n)},toString:function(){return P8(t,n,r)}}}},ny=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,d=t.styleTags,p=t.title,f=p===void 0?"":p,v=t.titleAttributes;return{base:hn(G.BASE,n,i),bodyAttributes:hn(Pr.BODY,r,i),htmlAttributes:hn(Pr.HTML,o,i),link:hn(G.LINK,a,i),meta:hn(G.META,s,i),noscript:hn(G.NOSCRIPT,l,i),script:hn(G.SCRIPT,u,i),style:hn(G.STYLE,d,i),title:hn(G.TITLE,{title:f,titleAttributes:v},i)}},L8=function(t){var n,r;return r=n=function(i){v8(o,i);function o(){return m8(this,o),x8(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(s){return!o8(this.props,s)},o.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case G.SCRIPT:case G.NOSCRIPT:return{innerHTML:l};case G.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,d=s.arrayTypeChildren,p=s.newChildProps,f=s.nestedChildren;return ct({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[ct({},p,this.mapNestedChildrenToProps(u,f))]),l))},o.prototype.mapObjectTypeChildren=function(s){var l,u,d=s.child,p=s.newProps,f=s.newChildProps,v=s.nestedChildren;switch(d.type){case G.TITLE:return ct({},p,(l={},l[d.type]=v,l.titleAttributes=ct({},f),l));case G.BODY:return ct({},p,{bodyAttributes:ct({},f)});case G.HTML:return ct({},p,{htmlAttributes:ct({},f)})}return ct({},p,(u={},u[d.type]=ct({},f),u))},o.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=ct({},l);return Object.keys(s).forEach(function(d){var p;u=ct({},u,(p={},p[d]=s[d],p))}),u},o.prototype.warnOnInvalidChildren=function(s,l){return!0},o.prototype.mapChildrenToProps=function(s,l){var u=this,d={};return K.Children.forEach(s,function(p){if(!(!p||!p.props)){var f=p.props,v=f.children,x=c0(f,["children"]),y=z8(x);switch(u.warnOnInvalidChildren(p,v),p.type){case G.LINK:case G.META:case G.NOSCRIPT:case G.SCRIPT:case G.STYLE:d=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:d,newChildProps:y,nestedChildren:v});break;default:l=u.mapObjectTypeChildren({child:p,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},o.prototype.render=function(){var s=this.props,l=s.children,u=c0(s,["children"]),d=ct({},u);return l&&(d=this.mapChildrenToProps(l,d)),K.createElement(t,d)},g8(o,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),o}(K.Component),n.propTypes={base:ge.object,bodyAttributes:ge.object,children:ge.oneOfType([ge.arrayOf(ge.node),ge.node]),defaultTitle:ge.string,defer:ge.bool,encodeSpecialCharacters:ge.bool,htmlAttributes:ge.object,link:ge.arrayOf(ge.object),meta:ge.arrayOf(ge.object),noscript:ge.arrayOf(ge.object),onChangeClientState:ge.func,script:ge.arrayOf(ge.object),style:ge.arrayOf(ge.object),title:ge.string,titleAttributes:ge.object,titleTemplate:ge.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=ny({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},O8=function(){return null},I8=J6(S8,C8,ny)(O8),Vr=L8(I8);Vr.renderStatic=Vr.rewind;var tt=function(){return tt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},tt.apply(this,arguments)};function Ai(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var he="-ms-",Mo="-moz-",se="-webkit-",ry="comm",Ml="rule",Qp="decl",R8="@import",iy="@keyframes",V8="@layer",oy=Math.abs,Zp=String.fromCharCode,ad=Object.assign;function D8(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function ay(e){return e.trim()}function xn(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function ls(e,t,n){return e.indexOf(t,n)}function Fe(e,t){return e.charCodeAt(t)|0}function Mi(e,t,n){return e.slice(t,n)}function on(e){return e.length}function sy(e){return e.length}function vo(e,t){return t.push(e),e}function N8(e,t){return e.map(t).join("")}function p0(e,t){return e.filter(function(n){return!xn(n,t)})}var Ll=1,Li=1,ly=0,Ft=0,ze=0,qi="";function Ol(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ll,column:Li,length:a,return:"",siblings:s}}function Bn(e,t){return ad(Ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yr(e){for(;e.root;)e=Bn(e.root,{children:[e]});vo(e,e.siblings)}function F8(){return ze}function B8(){return ze=Ft>0?Fe(qi,--Ft):0,Li--,ze===10&&(Li=1,Ll--),ze}function Xt(){return ze=Ft<ly?Fe(qi,Ft++):0,Li++,ze===10&&(Li=1,Ll++),ze}function zr(){return Fe(qi,Ft)}function cs(){return Ft}function Il(e,t){return Mi(qi,e,t)}function sd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $8(e){return Ll=Li=1,ly=on(qi=e),Ft=0,[]}function q8(e){return qi="",e}function Mc(e){return ay(Il(Ft-1,ld(e===91?e+2:e===40?e+1:e)))}function H8(e){for(;(ze=zr())&&ze<33;)Xt();return sd(e)>2||sd(ze)>3?"":" "}function U8(e,t){for(;--t&&Xt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Il(e,cs()+(t<6&&zr()==32&&Xt()==32))}function ld(e){for(;Xt();)switch(ze){case e:return Ft;case 34:case 39:e!==34&&e!==39&&ld(ze);break;case 40:e===41&&ld(e);break;case 92:Xt();break}return Ft}function W8(e,t){for(;Xt()&&e+ze!==57;)if(e+ze===84&&zr()===47)break;return"/*"+Il(t,Ft-1)+"*"+Zp(e===47?e:Xt())}function G8(e){for(;!sd(zr());)Xt();return Il(e,Ft)}function Y8(e){return q8(us("",null,null,null,[""],e=$8(e),0,[0],e))}function us(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,p=a,f=0,v=0,x=0,y=1,b=1,g=1,h=0,m="",w=i,S=o,j=r,C=m;b;)switch(x=h,h=Xt()){case 40:if(x!=108&&Fe(C,p-1)==58){ls(C+=X(Mc(h),"&","&\f"),"&\f",oy(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Mc(h);break;case 9:case 10:case 13:case 32:C+=H8(x);break;case 92:C+=U8(cs()-1,7);continue;case 47:switch(zr()){case 42:case 47:vo(K8(W8(Xt(),cs()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[u++]=on(C)*g;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:g==-1&&(C=X(C,/\f/g,"")),v>0&&on(C)-p&&vo(v>32?h0(C+";",r,n,p-1,l):h0(X(C," ","")+";",r,n,p-2,l),l);break;case 59:C+=";";default:if(vo(j=f0(C,t,n,u,d,i,s,m,w=[],S=[],p,o),o),h===123)if(d===0)us(C,t,j,j,w,o,p,s,S);else switch(f===99&&Fe(C,3)===110?100:f){case 100:case 108:case 109:case 115:us(e,j,j,r&&vo(f0(e,j,j,0,0,i,s,m,i,w=[],p,S),S),i,S,p,s,r?w:S);break;default:us(C,j,j,j,[""],S,0,s,S)}}u=d=v=0,y=g=1,m=C="",p=a;break;case 58:p=1+on(C),v=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&B8()==125)continue}switch(C+=Zp(h),h*y){case 38:g=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(on(C)-1)*g,g=1;break;case 64:zr()===45&&(C+=Mc(Xt())),f=zr(),d=p=on(m=C+=G8(cs())),h++;break;case 45:x===45&&on(C)==2&&(y=0)}}return o}function f0(e,t,n,r,i,o,a,s,l,u,d,p){for(var f=i-1,v=i===0?o:[""],x=sy(v),y=0,b=0,g=0;y<r;++y)for(var h=0,m=Mi(e,f+1,f=oy(b=a[y])),w=e;h<x;++h)(w=ay(b>0?v[h]+" "+m:X(m,/&\f/g,v[h])))&&(l[g++]=w);return Ol(e,t,n,i===0?Ml:s,l,u,d,p)}function K8(e,t,n,r){return Ol(e,t,n,ry,Zp(F8()),Mi(e,2,-2),0,r)}function h0(e,t,n,r,i){return Ol(e,t,n,Qp,Mi(e,0,r),Mi(e,r+1,-1),r,i)}function cy(e,t,n){switch(D8(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return Mo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Mo+e+he+e+e;case 5936:switch(Fe(e,t+11)){case 114:return se+e+he+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+he+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+he+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+he+e+e;case 6165:return se+e+he+"flex-"+e+e;case 5187:return se+e+X(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return se+e+he+"flex-item-"+X(e,/flex-|-self/g,"")+(xn(e,/flex-|baseline/)?"":he+"grid-row-"+X(e,/flex-|-self/g,""))+e;case 4675:return se+e+he+"flex-line-pack"+X(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+he+X(e,"shrink","negative")+e;case 5292:return se+e+he+X(e,"basis","preferred-size")+e;case 6060:return se+"box-"+X(e,"-grow","")+se+e+he+X(e,"grow","positive")+e;case 4554:return se+X(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!xn(e,/flex-|baseline/))return he+"grid-column-align"+Mi(e,t)+e;break;case 2592:case 3360:return he+X(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,xn(r.props,/grid-\w+-end/)})?~ls(e+(n=n[t].value),"span",0)?e:he+X(e,"-start","")+e+he+"grid-row-span:"+(~ls(n,"span",0)?xn(n,/\d+/):+xn(n,/\d+/)-+xn(e,/\d+/))+";":he+X(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xn(r.props,/grid-\w+-start/)})?e:he+X(X(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Mo+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ls(e,"stretch",0)?cy(X(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return he+i+":"+o+u+(a?he+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return X(e,":",":"+se)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Fe(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+he+"$2box$3")+e;case 100:return X(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,"scroll-","scroll-snap-")+e}return e}function Xs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X8(e,t,n,r){switch(e.type){case V8:if(e.children.length)break;case R8:case Qp:return e.return=e.return||e.value;case ry:return"";case iy:return e.return=e.value+"{"+Xs(e.children,r)+"}";case Ml:if(!on(e.value=e.props.join(",")))return""}return on(n=Xs(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q8(e){var t=sy(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Z8(e){return function(t){t.root||(t=t.return)&&e(t)}}function J8(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qp:e.return=cy(e.value,e.length,n);return;case iy:return Xs([Bn(e,{value:X(e.value,"@","@"+se)})],r);case Ml:if(e.length)return N8(n=e.props,function(i){switch(xn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yr(Bn(e,{props:[X(i,/:(read-\w+)/,":"+Mo+"$1")]})),Yr(Bn(e,{props:[i]})),ad(e,{props:p0(n,r)});break;case"::placeholder":Yr(Bn(e,{props:[X(i,/:(plac\w+)/,":"+se+"input-$1")]})),Yr(Bn(e,{props:[X(i,/:(plac\w+)/,":"+Mo+"$1")]})),Yr(Bn(e,{props:[X(i,/:(plac\w+)/,he+"input-$1")]})),Yr(Bn(e,{props:[i]})),ad(e,{props:p0(n,r)});break}return""})}}var ej={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},Oi=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",uy="active",dy="data-styled-version",Rl="6.1.13",Jp=`/*!sc*/
`,Qs=typeof window<"u"&&"HTMLElement"in window,tj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),nj={},Vl=Object.freeze([]),Ii=Object.freeze({});function py(e,t,n){return n===void 0&&(n=Ii),e.theme!==n.theme&&e.theme||t||n.theme}var fy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ij=/(^-|-$)/g;function m0(e){return e.replace(rj,"-").replace(ij,"")}var oj=/(a)(d)/gi,Na=52,g0=function(e){return String.fromCharCode(e+(e>25?39:97))};function cd(e){var t,n="";for(t=Math.abs(e);t>Na;t=t/Na|0)n=g0(t%Na)+n;return(g0(t%Na)+n).replace(oj,"$1-$2")}var Lc,hy=5381,pi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},my=function(e){return pi(hy,e)};function ef(e){return cd(my(e)>>>0)}function aj(e){return e.displayName||e.name||"Component"}function Oc(e){return typeof e=="string"&&!0}var gy=typeof Symbol=="function"&&Symbol.for,vy=gy?Symbol.for("react.memo"):60115,sj=gy?Symbol.for("react.forward_ref"):60112,lj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uj=((Lc={})[sj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[vy]=xy,Lc);function v0(e){return("type"in(t=e)&&t.type.$$typeof)===vy?xy:"$$typeof"in e?uj[e.$$typeof]:lj;var t}var dj=Object.defineProperty,pj=Object.getOwnPropertyNames,x0=Object.getOwnPropertySymbols,fj=Object.getOwnPropertyDescriptor,hj=Object.getPrototypeOf,y0=Object.prototype;function yy(e,t,n){if(typeof t!="string"){if(y0){var r=hj(t);r&&r!==y0&&yy(e,r,n)}var i=pj(t);x0&&(i=i.concat(x0(t)));for(var o=v0(e),a=v0(t),s=0;s<i.length;++s){var l=i[s];if(!(l in cj||n&&n[l]||a&&l in a||o&&l in o)){var u=fj(t,l);try{dj(e,l,u)}catch{}}}}return e}function Ri(e){return typeof e=="function"}function tf(e){return typeof e=="object"&&"styledComponentId"in e}function _r(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ra(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ud(e,t,n){if(n===void 0&&(n=!1),!n&&!ra(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ud(e[r],t[r]);else if(ra(t))for(var r in t)e[r]=ud(e[r],t[r]);return e}function nf(e,t){Object.defineProperty(e,"toString",{value:t})}function ma(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ma(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Jp);return n},e}(),ds=new Map,Js=new Map,ps=1,Fa=function(e){if(ds.has(e))return ds.get(e);for(;Js.has(ps);)ps++;var t=ps++;return ds.set(e,t),Js.set(t,e),t},gj=function(e,t){ps=t+1,ds.set(e,t),Js.set(t,e)},vj="style[".concat(Oi,"][").concat(dy,'="').concat(Rl,'"]'),xj=new RegExp("^".concat(Oi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yj=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},wj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Jp),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(xj);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(gj(d,u),yj(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},w0=function(e){for(var t=document.querySelectorAll(vj),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Oi)!==uy&&(wj(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function bj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Oi,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Oi,uy),r.setAttribute(dy,Rl);var a=bj();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Sj=function(){function e(t){this.element=wy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ma(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jj=function(){function e(t){this.element=wy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Tj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),b0=Qs,_j={isServer:!Qs,useCSSOMInjection:!tj},el=function(){function e(t,n,r){t===void 0&&(t=Ii),n===void 0&&(n={});var i=this;this.options=tt(tt({},_j),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qs&&b0&&(b0=!1,w0(this)),nf(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var f=function(g){return Js.get(g)}(p);if(f===void 0)return"continue";var v=o.names.get(f),x=a.getGroup(p);if(v===void 0||!v.size||x.length===0)return"continue";var y="".concat(Oi,".g").concat(p,'[id="').concat(f,'"]'),b="";v!==void 0&&v.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(Jp)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return Fa(t)},e.prototype.rehydrate=function(){!this.server&&Qs&&w0(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(tt(tt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Tj(i):r?new Sj(i):new jj(i)}(this.options),new mj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cj=/&/g,kj=/^\s*\/\/.*$/gm;function by(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=by(n.children,t)),n})}function Ej(e){var t,n,r,i=Ii,o=i.options,a=o===void 0?Ii:o,s=i.plugins,l=s===void 0?Vl:s,u=function(f,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Ml&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Cj,n).replace(r,u))}),a.prefix&&d.push(J8),d.push(X8);var p=function(f,v,x,y){v===void 0&&(v=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(kj,""),g=Y8(x||v?"".concat(x," ").concat(v," { ").concat(b," }"):b);a.namespace&&(g=by(g,a.namespace));var h=[];return Xs(g,Q8(d.concat(Z8(function(m){return h.push(m)})))),h};return p.hash=l.length?l.reduce(function(f,v){return v.name||ma(15),pi(f,v.name)},hy).toString():"",p}var Pj=new el,dd=Ej(),Sy=K.createContext({shouldForwardProp:void 0,styleSheet:Pj,stylis:dd});Sy.Consumer;K.createContext(void 0);function pd(){return T.useContext(Sy)}var jy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=dd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,nf(this,function(){throw ma(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=dd),this.name+t.hash},e}(),zj=function(e){return e>="A"&&e<="Z"};function S0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;zj(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ty=function(e){return e==null||e===!1||e===""},_y=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ty(o)&&(Array.isArray(o)&&o.isCss||Ri(o)?r.push("".concat(S0(i),":"),o,";"):ra(o)?r.push.apply(r,Ai(Ai(["".concat(i," {")],_y(o),!1),["}"],!1)):r.push("".concat(S0(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ej||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function or(e,t,n,r){if(Ty(e))return[];if(tf(e))return[".".concat(e.styledComponentId)];if(Ri(e)){if(!Ri(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return or(i,t,n,r)}var o;return e instanceof jy?n?(e.inject(n,r),[e.getName(r)]):[e]:ra(e)?_y(e):Array.isArray(e)?Array.prototype.concat.apply(Vl,e.map(function(a){return or(a,t,n,r)})):[e.toString()]}function Cy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ri(n)&&!tf(n))return!1}return!0}var Aj=my(Rl),Mj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cy(t),this.componentId=n,this.baseHash=pi(Aj,n),this.baseStyle=r,el.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_r(i,this.staticRulesId);else{var o=Zs(or(this.rules,t,n,r)),a=cd(pi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=_r(i,a),this.staticRulesId=a}else{for(var l=pi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var f=Zs(or(p,t,n,r));l=pi(l,f+d),u+=f}}if(u){var v=cd(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=_r(i,v)}}return i},e}(),rf=K.createContext(void 0);rf.Consumer;var Ic={};function Lj(e,t,n){var r=tf(e),i=e,o=!Oc(e),a=t.attrs,s=a===void 0?Vl:a,l=t.componentId,u=l===void 0?function(w,S){var j=typeof w!="string"?"sc":m0(w);Ic[j]=(Ic[j]||0)+1;var C="".concat(j,"-").concat(ef(Rl+j+Ic[j]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(w){return Oc(w)?"styled.".concat(w):"Styled(".concat(aj(w),")")}(e):d,f=t.displayName&&t.componentId?"".concat(m0(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var g=new Mj(n,f,r?i.componentStyle:void 0);function h(w,S){return function(j,C,k){var P=j.attrs,E=j.componentStyle,O=j.defaultProps,F=j.foldedComponentIds,V=j.styledComponentId,q=j.target,U=K.useContext(rf),ae=pd(),te=j.shouldForwardProp||ae.shouldForwardProp,A=py(C,U,O)||Ii,D=function(Pt,Ue,zt){for(var z,L=tt(tt({},Ue),{className:void 0,theme:zt}),R=0;R<Pt.length;R+=1){var M=Ri(z=Pt[R])?z(L):z;for(var Z in M)L[Z]=Z==="className"?_r(L[Z],M[Z]):Z==="style"?tt(tt({},L[Z]),M[Z]):M[Z]}return Ue.className&&(L.className=_r(L.className,Ue.className)),L}(P,C,A),N=D.as||q,Q={};for(var ne in D)D[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&D.theme===A||(ne==="forwardedAs"?Q.as=D.forwardedAs:te&&!te(ne,N)||(Q[ne]=D[ne]));var gt=function(Pt,Ue){var zt=pd(),z=Pt.generateAndInjectStyles(Ue,zt.styleSheet,zt.stylis);return z}(E,D),vt=_r(F,V);return gt&&(vt+=" "+gt),D.className&&(vt+=" "+D.className),Q[Oc(N)&&!fy.has(N)?"class":"className"]=vt,Q.ref=k,T.createElement(N,Q)}(m,w,S)}h.displayName=p;var m=K.forwardRef(h);return m.attrs=v,m.componentStyle=g,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?_r(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];for(var k=0,P=j;k<P.length;k++)ud(S,P[k],!0);return S}({},i.defaultProps,w):w}}),nf(m,function(){return".".concat(m.styledComponentId)}),o&&yy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function j0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var T0=function(e){return Object.assign(e,{isCss:!0})};function of(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ri(e)||ra(e))return T0(or(j0(Vl,Ai([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?or(r):T0(or(j0(r,t)))}function fd(e,t,n){if(n===void 0&&(n=Ii),!t)throw ma(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,of.apply(void 0,Ai([i],o,!1)))};return r.attrs=function(i){return fd(e,t,tt(tt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fd(e,t,tt(tt({},n),i))},r}var ky=function(e){return fd(Lj,e)},_=ky;fy.forEach(function(e){_[e]=ky(e)});var Oj=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cy(t),el.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Zs(or(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&el.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Hi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=of.apply(void 0,Ai([e],t,!1)),i="sc-global-".concat(ef(JSON.stringify(r))),o=new Oj(r,i),a=function(l){var u=pd(),d=K.useContext(rf),p=K.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,d,u.stylis),K.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,p,f){if(o.isStatic)o.renderStyles(l,nj,d,f);else{var v=tt(tt({},u),{theme:py(u,p,a.defaultProps)});o.renderStyles(l,v,d,f)}}return K.memo(a)}function In(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zs(of.apply(void 0,Ai([e],t,!1))),i=ef(r);return new jy(i,r)}const Ij=_(W.video)`
  width: 100%;
  object-fit: cover;
  height: 95vh;
  position: relative;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: 0 0 1000px 1000px / 100px 100px;
  clip-path: circle(0% at 50% 50%);

  @media (max-width: 768px) {
    height: 95dvh;
    border-radius: 0 0 500px 500px / 50px 50px;
  }
`,Rj=()=>{const e=T.useRef(null);return T.useEffect(()=>{const t=e.current;t==null||t.play().catch(n=>console.error("Falha ao iniciar o vídeo:",n))},[]),c.jsxs(Ij,{ref:e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:{clipPath:"circle(0% at 50% 50%)"},animate:{clipPath:"circle(100% at 50% 50%)"},transition:{duration:1,ease:"easeInOut"},children:[c.jsx("source",{src:"https://res.cloudinary.com/dupg7clzc/video/upload/v1730836205/V%C3%8DDEO_SITE_xvpltm.mp4",type:"video/mp4"}),"Seu navegador não suporta o elemento de vídeo."]})};function _0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function af(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:_0(t[n])&&_0(e[n])&&Object.keys(t[n]).length>0&&af(e[n],t[n])})}const Ey={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Pn(){const e=typeof document<"u"?document:{};return af(e,Ey),e}const Vj={document:Ey,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Et(){const e=typeof window<"u"?window:{};return af(e,Vj),e}function Dj(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Nj(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function hd(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function tl(){return Date.now()}function Fj(e){const t=Et();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Bj(e,t){t===void 0&&(t="x");const n=Et();let r,i,o;const a=Fj(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ba(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function $j(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function wt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!$j(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const s=i[o],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Ba(e[s])&&Ba(r[s])?r[s].__swiper__?e[s]=r[s]:wt(e[s],r[s]):!Ba(e[s])&&Ba(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:wt(e[s],r[s])):e[s]=r[s])}}}return e}function $a(e,t,n){e.style.setProperty(t,n)}function Py(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Et(),o=-t.translate;let a=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",d=(f,v)=>u==="next"&&f>=v||u==="prev"&&f<=v,p=()=>{s=new Date().getTime(),a===null&&(a=s);const f=Math.max(Math.min((s-a)/l,1),0),v=.5-Math.cos(f*Math.PI)/2;let x=o+v*(n-o);if(d(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),d(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function sf(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ln(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function qj(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function nl(e){try{console.warn(e);return}catch{}}function ia(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Dj(t)),n}function Hj(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Uj(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Kn(e,t){return Et().getComputedStyle(e,null).getPropertyValue(t)}function rl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function zy(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function md(e,t,n){const r=Et();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function De(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Wj(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let Rc;function Gj(){const e=Et(),t=Pn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ay(){return Rc||(Rc=Gj()),Rc}let Vc;function Yj(e){let{userAgent:t}=e===void 0?{}:e;const n=Ay(),r=Et(),i=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),x=!1),u&&!v&&(a.os="android",a.android=!0),(d||f||p)&&(a.os="ios",a.ios=!0),a}function My(e){return e===void 0&&(e={}),Vc||(Vc=Yj(e)),Vc}let Dc;function Kj(){const e=Et(),t=My();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,u]=s.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Xj(){return Dc||(Dc=Kj()),Dc}function Qj(e){let{swiper:t,on:n,emit:r}=e;const i=Et();let o=null,a=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{a=i.requestAnimationFrame(()=>{const{width:f,height:v}=t;let x=f,y=v;p.forEach(b=>{let{contentBoxSize:g,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(g[0]||g).inlineSize,y=h?h.height:(g[0]||g).blockSize)}),(x!==f||y!==v)&&s()})}),o.observe(t.el))},u=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",d)})}function Zj(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],a=Et(),s=function(d,p){p===void 0&&(p={});const f=a.MutationObserver||a.WebkitMutationObserver,v=new f(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});v.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:t.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=zy(t.hostEl);for(let p=0;p<d.length;p+=1)s(d[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var Jj={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function eT(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Kn(r,"padding-left")||0,10)-parseInt(Kn(r,"padding-right")||0,10),n=n-parseInt(Kn(r,"padding-top")||0,10)-parseInt(Kn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function tT(){const e=this;function t(E,O){return parseFloat(E.getPropertyValue(e.getDirectionLabel(O))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:a,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,d=ln(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:d.length;let f=[];const v=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const g=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,j=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(E=>{a?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&($a(r,"--swiper-centered-offset-before",""),$a(r,"--swiper-centered-offset-after",""));const C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let k;const P=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<p;E+=1){k=0;let O;if(d[E]&&(O=d[E]),C&&e.grid.updateSlide(E,O,d),!(d[E]&&Kn(O,"display")==="none")){if(n.slidesPerView==="auto"){P&&(d[E].style[e.getDirectionLabel("width")]="");const F=getComputedStyle(O),V=O.style.transform,q=O.style.webkitTransform;if(V&&(O.style.transform="none"),q&&(O.style.webkitTransform="none"),n.roundLengths)k=e.isHorizontal()?md(O,"width"):md(O,"height");else{const U=t(F,"width"),ae=t(F,"padding-left"),te=t(F,"padding-right"),A=t(F,"margin-left"),D=t(F,"margin-right"),N=F.getPropertyValue("box-sizing");if(N&&N==="border-box")k=U+A+D;else{const{clientWidth:Q,offsetWidth:ne}=O;k=U+ae+te+A+D+(ne-Q)}}V&&(O.style.transform=V),q&&(O.style.webkitTransform=q),n.roundLengths&&(k=Math.floor(k))}else k=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),d[E]&&(d[E].style[e.getDirectionLabel("width")]=`${k}px`);d[E]&&(d[E].swiperSlideSize=k),x.push(k),n.centeredSlides?(w=w+k/2+S/2+m,S===0&&E!==0&&(w=w-o/2-m),E===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),j%n.slidesPerGroup===0&&f.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup===0&&f.push(w),v.push(w),w=w+k+m),e.virtualSize+=k+m,S=k,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,a&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),C&&e.grid.updateWrapperSize(k,f),!n.centeredSlides){const E=[];for(let O=0;O<f.length;O+=1){let F=f[O];n.roundLengths&&(F=Math.floor(F)),f[O]<=e.virtualSize-o&&E.push(F)}f=E,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(l&&n.loop){const E=x[0]+m;if(n.slidesPerGroup>1){const O=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),F=E*n.slidesPerGroup;for(let V=0;V<O;V+=1)f.push(f[f.length-1]+F)}for(let O=0;O<e.virtual.slidesBefore+e.virtual.slidesAfter;O+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+E),v.push(v[v.length-1]+E),e.virtualSize+=E}if(f.length===0&&(f=[0]),m!==0){const E=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter((O,F)=>!n.cssMode||n.loop?!0:F!==d.length-1).forEach(O=>{O.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;x.forEach(F=>{E+=F+(m||0)}),E-=m;const O=E>o?E-o:0;f=f.map(F=>F<=0?-y:F>O?O+b:F)}if(n.centerInsufficientSlides){let E=0;x.forEach(F=>{E+=F+(m||0)}),E-=m;const O=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+O<o){const F=(o-E-O)/2;f.forEach((V,q)=>{f[q]=V-F}),v.forEach((V,q)=>{v[q]=V+F})}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:v,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){$a(r,"--swiper-centered-offset-before",`${-f[0]}px`),$a(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const E=-e.snapGrid[0],O=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(F=>F+E),e.slidesGrid=e.slidesGrid.map(F=>F+O)}if(p!==u&&e.emit("slidesLengthChange"),f.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,O=e.el.classList.contains(E);p<=n.maxBackfaceHiddenSlides?O||e.el.classList.add(E):O&&e.el.classList.remove(E)}}function nT(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const s=t.activeIndex+o;if(s>t.slides.length&&!r)break;n.push(a(s))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const s=n[o].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function rT(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const C0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function iT(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const u=r[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),f=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),v=-(a-d),x=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],b=v>=0&&v<t.size-1||x>1&&x<=t.size||v<=0&&x>=t.size;b&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l)),C0(u,b,n.slideVisibleClass),C0(u,y,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-f:f}}function oT(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:s}=t;const l=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[d],v=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=f?s=(y-f)/x:s=(y+x-v)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(l&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Nc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function aT(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,s=p=>ln(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,d;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else a?(l=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(a||(d=Uj(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=Hj(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Nc(p,p===l,n.slideActiveClass),Nc(p,p===d,n.slideNextClass),Nc(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}const fs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Fc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gd=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,s=[a-t];s.push(...Array.from({length:t}).map((l,u)=>a+r+u)),e.slides.forEach((l,u)=>{s.includes(l.column)&&Fc(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const s=(a%n+n)%n;(s<i||s>o)&&Fc(e,s)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Fc(e,a)};function sT(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function lT(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:s}=t;let l=e,u;const d=v=>{let x=v-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=sT(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);u=v+Math.floor((l-v)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===o&&!t.params.loop){u!==s&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled&&i.loop)f=d(l);else if(p){const v=t.slides.filter(y=>y.column===l)[0];let x=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(v),0)),f=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?f=parseInt(v,10):f=l}else f=l;Object.assign(t,{previousSnapIndex:s,snapIndex:u,previousRealIndex:a,realIndex:f,previousIndex:o,activeIndex:l}),t.initialized&&gd(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function cT(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let o=!1,a;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,a=s;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var uT={updateSize:eT,updateSlides:tT,updateAutoHeight:nT,updateSlidesOffset:rT,updateSlidesProgress:iT,updateProgress:oT,updateSlidesClasses:aT,updateActiveIndex:lT,updateClickedSlide:cT};function dT(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=Bj(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function pT(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let s=0,l=0;const u=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${s}px, ${l}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function fT(){return-this.snapGrid[0]}function hT(){return-this.snapGrid[this.snapGrid.length-1]}function mT(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:a,wrapperEl:s}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>l?d=l:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const p=o.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return Py({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var gT={getTranslate:dT,setTranslate:pT,minTranslate:fT,maxTranslate:hT,translateTo:mT};function vT(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ly(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let s=r;if(s||(o>a?s="next":o<a?s="prev":s="reset"),t.emit(`transition${i}`),n&&o!==a){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function xT(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ly({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function yT(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ly({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var wT={setTransition:vT,transitionStart:xT,transitionEnd:yT};function bT(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:f,wrapperEl:v,enabled:x}=o;if(!x&&!r&&!i||o.destroyed||o.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let b=y+Math.floor((a-y)/o.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const g=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const j=-Math.floor(g*100),C=Math.floor(u[S]*100),k=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?j>=C&&j<k-(k-C)/2?a=S:j>=C&&j<k&&(a=S+1):j>=C&&(a=S)}if(o.initialized&&a!==p&&(!o.allowSlideNext&&(f?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(p||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let h;a>p?h="next":a<p?h="prev":h="reset";const m=o.virtual&&o.params.virtual.enabled;if(!(m&&i)&&(f&&-g===o.translate||!f&&g===o.translate))return o.updateActiveIndex(a),s.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),s.effect!=="slide"&&o.setTranslate(g),h!=="reset"&&(o.transitionStart(n,h),o.transitionEnd(n,h)),!1;if(s.cssMode){const S=o.isHorizontal(),j=f?g:-g;if(t===0)m&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),m&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=j})):v[S?"scrollLeft":"scrollTop"]=j,m&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Py({swiper:o,targetPosition:j,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:j,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,h),t===0?o.transitionEnd(n,h):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(j){!o||o.destroyed||j.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,h))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function ST(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let s;if(o){const f=a*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===f)[0].column}else s=i.getSlideIndexByData(a);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=l-s<d;if(u&&(p=p||s<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const f=u?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?s+1:s-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(o){const f=a*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function jT(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:s,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function TT(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:s,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function f(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=f(p),x=o.map(g=>f(g));let y=o[x.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let g;o.forEach((h,m)=>{v>=h&&(g=m)}),typeof g<"u"&&(y=o[g>0?g-1:g])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function _T(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function CT(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),s=a+Math.floor((o-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const u=i.snapGrid[s],d=i.snapGrid[s+1];l-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[s-1],d=i.snapGrid[s];l-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function kT(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(ln(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),hd(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(ln(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),hd(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var ET={slideTo:bT,slideToLoop:ST,slideNext:jT,slidePrev:TT,slideReset:_T,slideToClosest:CT,slideToClickedSlide:kT};function PT(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{ln(r,`.${n.slideClass}, swiper-slide`).forEach((p,f)=>{p.setAttribute("data-swiper-slide-index",f)})},o=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(o?n.grid.rows:1),s=t.slides.length%a!==0,l=o&&t.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const f=t.isElement?ia("swiper-slide",[n.slideBlankClass]):ia("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(f)}};if(s){if(n.loopAddBlankSlides){const d=a-t.slides.length%a;u(d),t.recalcSlides(),t.updateSlides()}else nl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else nl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function zT(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:f,params:v}=l,{centeredSlides:x}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=p,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=v.slidesPerGroupAuto?y:v.slidesPerGroup;let g=b;g%b!==0&&(g+=b-g%b),g+=v.loopAdditionalSlides,l.loopedSlides=g;const h=l.grid&&v.grid&&v.grid.rows>1;u.length<y+g?nl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&nl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(u.filter(V=>V.classList.contains(v.slideActiveClass))[0]):S=o;const j=r==="next"||!r,C=r==="prev"||!r;let k=0,P=0;const E=h?Math.ceil(u.length/v.grid.rows):u.length,F=(h?u[o].column:o)+(x&&typeof i>"u"?-y/2+.5:0);if(F<g){k=Math.max(g-F,b);for(let V=0;V<g-F;V+=1){const q=V-Math.floor(V/E)*E;if(h){const U=E-q-1;for(let ae=u.length-1;ae>=0;ae-=1)u[ae].column===U&&m.push(ae)}else m.push(E-q-1)}}else if(F+y>E-g){P=Math.max(F-(E-g*2),b);for(let V=0;V<P;V+=1){const q=V-Math.floor(V/E)*E;h?u.forEach((U,ae)=>{U.column===q&&w.push(ae)}):w.push(q)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),C&&m.forEach(V=>{u[V].swiperLoopMoveDOM=!0,f.prepend(u[V]),u[V].swiperLoopMoveDOM=!1}),j&&w.forEach(V=>{u[V].swiperLoopMoveDOM=!0,f.append(u[V]),u[V].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&C||w.length>0&&j)&&l.slides.forEach((V,q)=>{l.grid.updateSlide(q,V,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&C){if(typeof t>"u"){const V=l.slidesGrid[S],U=l.slidesGrid[S+k]-V;s?l.setTranslate(l.translate-U):(l.slideTo(S+Math.ceil(k),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(i){const V=h?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+V,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&j)if(typeof t>"u"){const V=l.slidesGrid[S],U=l.slidesGrid[S-P]-V;s?l.setTranslate(l.translate-U):(l.slideTo(S-P,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{const V=h?w.length/v.grid.rows:w.length;l.slideTo(l.activeIndex-V,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const V={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...V,slideTo:q.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...V,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function AT(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var MT={loopCreate:PT,loopFix:zT,loopDestroy:AT};function LT(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function OT(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var IT={setGrabCursor:LT,unsetGrabCursor:OT};function RT(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Pn()||r===Et())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function k0(e,t,n){const r=Et(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function VT(e){const t=this,n=Pn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){k0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:s}=t;if(!s||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!qj(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(f?RT(p,l):l.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const v=a.currentX,x=a.currentY;if(!k0(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=v,a.startY=x,i.touchStartTime=tl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function DT(e){const t=Pn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(j=>j.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){o.startX=d,o.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=tl());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=p;const f=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let j;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+v*v>=25&&(j=Math.atan2(Math.abs(v),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?j>i.touchAngle:90-j>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?f:v,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(x=Math.abs(x)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=x,x*=i.touchRatio,a&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const g=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&g&&h&&Math.abs(x)>=1){Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function NT(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:s,rtlTranslate:l,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=tl(),f=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),f<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=tl(),hd(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(a.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const x=v>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const j=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[S+j]<"u"?(x||v>=u[S]&&v<u[S+j])&&(y=S,b=u[S+j]-u[S]):(x||v>=u[S])&&(y=S,b=u[u.length-1]-u[u.length-2])}let g=null,h=null;a.rewind&&(t.isBeginning?h=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const m=(v-u[y])/b,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-a.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>a.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function E0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function FT(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function BT(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function $T(e){const t=this;fs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function qT(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Oy=(e,t)=>{const n=Pn(),{params:r,el:i,wrapperEl:o,device:a}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",E0,!0):e[u]("observerUpdate",E0,!0),i[l]("load",e.onLoad,{capture:!0}))};function HT(){const e=this,{params:t}=e;e.onTouchStart=VT.bind(e),e.onTouchMove=DT.bind(e),e.onTouchEnd=NT.bind(e),e.onDocumentTouchStart=qT.bind(e),t.cssMode&&(e.onScroll=BT.bind(e)),e.onClick=FT.bind(e),e.onLoad=$T.bind(e),Oy(e,"on")}function UT(){Oy(this,"off")}var WT={attachEvents:HT,detachEvents:UT};const P0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function GT(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,u=P0(e,r),d=P0(e,l),p=e.params.grabCursor,f=l.grabCursor,v=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!f?e.unsetGrabCursor():!p&&f&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||x),b=r.loop;x&&n&&e.changeDirection(),wt(e.params,l);const g=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!g?e.disable():!v&&g&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function YT(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Et(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:o*l,point:s}}return{value:s,point:s}});a.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<a.length;s+=1){const{point:l,value:u}=a[s];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var KT={setBreakpoint:GT,getBreakpoint:YT};function XT(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function QT(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=XT(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function ZT(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var JT={addClasses:QT,removeClasses:ZT};function e_(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var t_={checkOverflow:e_},vd={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function n_(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){wt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){wt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),wt(t,r)}}const Bc={eventsEmitter:Jj,update:uT,translate:gT,transition:wT,slide:ET,loop:MT,grabCursor:IT,events:WT,breakpoints:KT,checkOverflow:t_,classes:JT},$c={};let lf=class mn{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=wt({},n),t&&!n.el&&(n.el=t);const a=Pn();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const d=[];return a.querySelectorAll(n.el).forEach(p=>{const f=wt({},n,{el:p});d.push(new mn(f))}),d}const s=this;s.__swiper__=!0,s.support=Ay(),s.device=My({userAgent:n.userAgent}),s.browser=Xj(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(d=>{d({params:n,swiper:s,extendParams:n_(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const u=wt({},vd,l);return s.params=wt({},u,$c,n),s.originalParams=wt({},s.params),s.passedParams=wt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(d=>{s.on(d,s.params.on[d])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ln(n,`.${r.slideClass}, swiper-slide`),o=rl(i[0]);return rl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ln(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:s,size:l,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[u]?Math.ceil(o[u].swiperSlideSize):0,f;for(let v=u+1;v<o.length;v+=1)o[v]&&!f&&(p+=Math.ceil(o[v].swiperSlideSize),d+=1,p>l&&(f=!0));for(let v=u-1;v>=0;v-=1)o[v]&&!f&&(p+=o[v].swiperSlideSize,d+=1,p>l&&(f=!0))}else if(t==="current")for(let p=u+1;p<o.length;p+=1)(n?a[p]+s[p]-a[u]<l:a[p]-a[u]<l)&&(d+=1);else for(let p=u-1;p>=0;p-=1)a[u]-a[p]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&fs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ln(r,i())[0];return!a&&n.params.createElements&&(a=ia("div",n.params.wrapperClass),r.append(a),ln(r,`.${n.params.slideClass}`).forEach(s=>{a.append(s)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Kn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Kn(r,"direction")==="rtl"),wrongRTL:Kn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?fs(n,o):o.addEventListener("load",a=>{fs(n,a.target)})}),gd(n),n.initialized=!0,gd(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:a,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Nj(r)),r.destroyed=!0),null}static extendDefaults(t){wt($c,t)}static get extendedDefaults(){return $c}static get defaults(){return vd}static installModule(t){mn.prototype.__modules__||(mn.prototype.__modules__=[]);const n=mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>mn.installModule(n)),mn):(mn.installModule(t),mn)}};Object.keys(Bc).forEach(e=>{Object.keys(Bc[e]).forEach(t=>{lf.prototype[t]=Bc[e][t]})});lf.use([Qj,Zj]);const Iy=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Dr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function wi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Dr(t[r])&&Dr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:wi(e[r],t[r]):e[r]=t[r]})}function Ry(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Vy(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Dy(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Ny(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function r_(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function i_(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const u=i.filter(P=>P!=="children"&&P!=="direction"&&P!=="wrapperClass"),{params:d,pagination:p,navigation:f,scrollbar:v,virtual:x,thumbs:y}=t;let b,g,h,m,w,S,j,C;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(g=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(d.scrollbar||d.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const k=P=>{t[P]&&(t[P].destroy(),P==="navigation"?(t.isElement&&(t[P].prevEl.remove(),t[P].nextEl.remove()),d[P].prevEl=void 0,d[P].nextEl=void 0,t[P].prevEl=void 0,t[P].nextEl=void 0):(t.isElement&&t[P].el.remove(),d[P].el=void 0,t[P].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?j=!0:C=!0),u.forEach(P=>{if(Dr(d[P])&&Dr(r[P]))Object.assign(d[P],r[P]),(P==="navigation"||P==="pagination"||P==="scrollbar")&&"enabled"in r[P]&&!r[P].enabled&&k(P);else{const E=r[P];(E===!0||E===!1)&&(P==="navigation"||P==="pagination"||P==="scrollbar")?E===!1&&k(P):d[P]=r[P]}}),u.includes("controller")&&!g&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&x&&d.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&d.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&d.loop&&(C=!0),b&&y.init()&&y.update(!0),g&&(t.controller.control=d.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(d.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(d.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),o&&(d.navigation.nextEl=o),a&&(d.navigation.prevEl=a),f.init(),f.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||C)&&t.loopDestroy(),(j||C)&&t.loopCreate(),t.update()}function o_(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};wi(n,vd),n._emitClasses=!0,n.init=!1;const o={},a=Iy.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?Dr(e[l])?(n[l]={},i[l]={},wi(n[l],e[l]),wi(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function a_(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:s}=e;Ry(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),Vy(t)&&o&&(s.params.pagination.el=o,s.originalParams.pagination.el=o),Dy(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(n)}function s_(e,t,n,r,i){const o=[];if(!t)return o;const a=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Iy.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Dr(e[l])&&Dr(t[l])){const u=Object.keys(e[l]),d=Object.keys(t[l]);u.length!==d.length?a(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}),d.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}))}else e[l]!==t[l]&&a(l)}),o}const l_=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(this,arguments)}function Fy(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function By(e){const t=[];return K.Children.toArray(e).forEach(n=>{Fy(n)?t.push(n):n.props&&n.props.children&&By(n.props.children).forEach(r=>t.push(r))}),t}function c_(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(Fy(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=By(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function u_(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let d=s;d<l;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,p)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function Lo(e,t){return typeof window>"u"?T.useEffect(e,t):T.useLayoutEffect(e,t)}const z0=T.createContext(null),d_=T.createContext(null),Jt=T.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:a,...s}=e===void 0?{}:e,l=!1;const[u,d]=T.useState("swiper"),[p,f]=T.useState(null),[v,x]=T.useState(!1),y=T.useRef(!1),b=T.useRef(null),g=T.useRef(null),h=T.useRef(null),m=T.useRef(null),w=T.useRef(null),S=T.useRef(null),j=T.useRef(null),C=T.useRef(null),{params:k,passedParams:P,rest:E,events:O}=o_(s),{slides:F,slots:V}=c_(o),q=()=>{x(!v)};Object.assign(k.on,{_containerClasses(D,N){d(N)}});const U=()=>{Object.assign(k.on,O),l=!0;const D={...k};if(delete D.wrapperClass,g.current=new lf(D),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=F;const N={cache:!1,slides:F,renderExternal:f,renderExternalUpdate:!1};wi(g.current.params.virtual,N),wi(g.current.originalParams.virtual,N)}};b.current||U(),g.current&&g.current.on("_beforeBreakpoint",q);const ae=()=>{l||!O||!g.current||Object.keys(O).forEach(D=>{g.current.on(D,O[D])})},te=()=>{!O||!g.current||Object.keys(O).forEach(D=>{g.current.off(D,O[D])})};T.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",q)}),T.useEffect(()=>{!y.current&&g.current&&(g.current.emitSlidesClasses(),y.current=!0)}),Lo(()=>{if(t&&(t.current=b.current),!!b.current)return g.current.destroyed&&U(),a_({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:j.current,scrollbarEl:C.current,swiper:g.current},k),a&&!g.current.destroyed&&a(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),Lo(()=>{ae();const D=s_(P,h.current,F,m.current,N=>N.key);return h.current=P,m.current=F,D.length&&g.current&&!g.current.destroyed&&i_({swiper:g.current,slides:F,passedParams:P,changedParams:D,nextEl:w.current,prevEl:S.current,scrollbarEl:C.current,paginationEl:j.current}),()=>{te()}}),Lo(()=>{l_(g.current)},[p]);function A(){return k.virtual?u_(g.current,F,p):F.map((D,N)=>K.cloneElement(D,{swiper:g.current,swiperSlideIndex:N}))}return K.createElement(r,il({ref:b,className:Ny(`${u}${n?` ${n}`:""}`)},E),K.createElement(d_.Provider,{value:g.current},V["container-start"],K.createElement(i,{className:r_(k.wrapperClass)},V["wrapper-start"],A(),V["wrapper-end"]),Ry(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:w,className:"swiper-button-next"})),Dy(k)&&K.createElement("div",{ref:C,className:"swiper-scrollbar"}),Vy(k)&&K.createElement("div",{ref:j,className:"swiper-pagination"}),V["container-end"]))});Jt.displayName="Swiper";const en=T.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=T.useRef(null),[f,v]=T.useState("swiper-slide"),[x,y]=T.useState(!1);function b(w,S,j){S===p.current&&v(j)}Lo(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){f!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Lo(()=>{o&&p.current&&!o.destroyed&&v(o.getSlideClasses(p.current))},[o]);const g={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(g):r,m=()=>{y(!0)};return K.createElement(n,il({ref:p,className:Ny(`${f}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},d),a&&K.createElement(z0.Provider,{value:g},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},h(),s&&!x&&K.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&K.createElement(z0.Provider,{value:g},h(),s&&!x&&K.createElement("div",{className:"swiper-lazy-preloader"})))});en.displayName="SwiperSlide";function $y(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=ln(e.el,`.${r[i]}`)[0];o||(o=ia("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function hr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function a(x,y){const b=t.params.navigation;x=De(x),x.forEach(g=>{g&&(g.classList[y?"add":"remove"](...b.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=y),t.params.watchOverflow&&t.enabled&&g.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){a(y,!1),a(x,!1);return}a(y,t.isBeginning&&!t.params.rewind),a(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const x=t.params.navigation;if(t.params.navigation=$y(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=o(x.nextEl),b=o(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=De(y),b=De(b);const g=(h,m)=>{h&&h.addEventListener("click",m==="next"?u:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>g(h,"next")),b.forEach(h=>g(h,"prev"))}function p(){let{nextEl:x,prevEl:y}=t.navigation;x=De(x),y=De(y);const b=(g,h)=>{g.removeEventListener("click",h==="next"?u:l),g.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(g=>b(g,"next")),y.forEach(g=>b(g,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(d(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=De(x),y=De(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(x,y)=>{let{nextEl:b,prevEl:g}=t.navigation;b=De(b),g=De(g);const h=y.target;let m=g.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||g.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):g.length&&(w=g[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...g].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:f,disable:v,update:s,init:d,destroy:p})}function co(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function mr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function d(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function p(h){const m=h.target.closest(co(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=rl(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=d(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function f(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=De(w);let S,j;const C=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,k=t.params.loop?Math.ceil(C/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(j=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,j=t.previousSnapIndex):(j=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const P=t.pagination.bullets;let E,O,F;if(m.dynamicBullets&&(a=md(P[0],t.isHorizontal()?"width":"height"),w.forEach(V=>{V.style[t.isHorizontal()?"width":"height"]=`${a*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&j!==void 0&&(s+=S-(j||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),O=E+(Math.min(P.length,m.dynamicMainBullets)-1),F=(O+E)/2),P.forEach(V=>{const q=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${m.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();V.classList.remove(...q)}),w.length>1)P.forEach(V=>{const q=rl(V);q===S?V.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&V.setAttribute("part","bullet"),m.dynamicBullets&&(q>=E&&q<=O&&V.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),q===E&&u(V,"prev"),q===O&&u(V,"next"))});else{const V=P[S];if(V&&V.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&P.forEach((q,U)=>{q.setAttribute("part",U===S?"bullet-active":"bullet")}),m.dynamicBullets){const q=P[E],U=P[O];for(let ae=E;ae<=O;ae+=1)P[ae]&&P[ae].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(q,"prev"),u(U,"next")}}if(m.dynamicBullets){const V=Math.min(P.length,m.dynamicMainBullets+4),q=(a*V-a)/2-F*a,U=h?"right":"left";P.forEach(ae=>{ae.style[t.isHorizontal()?U:"top"]=`${q}px`})}}w.forEach((P,E)=>{if(m.type==="fraction"&&(P.querySelectorAll(co(m.currentClass)).forEach(O=>{O.textContent=m.formatFractionCurrent(S+1)}),P.querySelectorAll(co(m.totalClass)).forEach(O=>{O.textContent=m.formatFractionTotal(k)})),m.type==="progressbar"){let O;m.progressbarOpposite?O=t.isHorizontal()?"vertical":"horizontal":O=t.isHorizontal()?"horizontal":"vertical";const F=(S+1)/k;let V=1,q=1;O==="horizontal"?V=F:q=F,P.querySelectorAll(co(m.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${V}) scaleY(${q})`,U.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(P.innerHTML=m.renderCustom(t,S+1,k),E===0&&i("paginationRender",P)):(E===0&&i("paginationRender",P),i("paginationUpdate",P)),t.params.watchOverflow&&t.enabled&&P.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=De(w);let S="";if(h.type==="bullets"){let j=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&j>m&&(j=m);for(let C=0;C<j;C+=1)h.renderBullet?S+=h.renderBullet.call(t,C,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(j=>{h.type!=="custom"&&(j.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...j.querySelectorAll(co(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function x(){t.params.pagination=$y(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>zy(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=De(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",p),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=De(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",p))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=De(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(x(),v(),f())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{v(),f()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=De(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{f()}),r("click",(h,m)=>{const w=m.target,S=De(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const j=S[0].classList.contains(t.params.pagination.hiddenClass);i(j===!0?"paginationShow":"paginationHide"),S.forEach(C=>C.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=De(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),v(),f()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=De(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:g,render:v,update:f,init:x,destroy:y})}function Rn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:o}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,s,l=o&&o.autoplay?o.autoplay.delay:3e3,u=o&&o.autoplay?o.autoplay.delay:3e3,d,p=new Date().getTime(),f,v,x,y,b,g,h;function m(A){!t||t.destroyed||!t.wrapperEl||A.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||A.detail&&A.detail.bySwiperTouchMove)&&E())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?f=!0:f&&(u=d,f=!1);const A=t.autoplay.paused?d:p+u-new Date().getTime();t.autoplay.timeLeft=A,i("autoplayTimeLeft",A,A/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let A;return t.virtual&&t.params.virtual.enabled?A=t.slides.filter(N=>N.classList.contains("swiper-slide-active"))[0]:A=t.slides[t.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},j=A=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let D=typeof A>"u"?t.params.autoplay.delay:A;l=t.params.autoplay.delay,u=t.params.autoplay.delay;const N=S();!Number.isNaN(N)&&N>0&&typeof A>"u"&&(D=N,l=N,u=N),d=D;const Q=t.params.speed,ne=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Q,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Q,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Q,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Q,!0,!0),i("autoplay")),t.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{j()})))};return D>0?(clearTimeout(a),a=setTimeout(()=>{ne()},D)):requestAnimationFrame(()=>{ne()}),D},C=()=>{p=new Date().getTime(),t.autoplay.running=!0,j(),i("autoplayStart")},k=()=>{t.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(s),i("autoplayStop")},P=(A,D)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(a),A||(g=!0);const N=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,D){b&&(d=t.params.autoplay.delay),b=!1,N();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-p),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),N())},E=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(p=new Date().getTime(),g?(g=!1,j(d)):j(),t.autoplay.paused=!1,i("autoplayResume"))},O=()=>{if(t.destroyed||!t.autoplay.running)return;const A=Pn();A.visibilityState==="hidden"&&(g=!0,P(!0)),A.visibilityState==="visible"&&E()},F=A=>{A.pointerType==="mouse"&&(g=!0,h=!0,!(t.animating||t.autoplay.paused)&&P(!0))},V=A=>{A.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},q=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",F),t.el.addEventListener("pointerleave",V))},U=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",F),t.el.removeEventListener("pointerleave",V))},ae=()=>{Pn().addEventListener("visibilitychange",O)},te=()=>{Pn().removeEventListener("visibilitychange",O)};r("init",()=>{t.params.autoplay.enabled&&(q(),ae(),C())}),r("destroy",()=>{U(),te(),t.autoplay.running&&k()}),r("_freeModeStaticRelease",()=>{(x||g)&&E()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?k():P(!0,!0)}),r("beforeTransitionStart",(A,D,N)=>{t.destroyed||!t.autoplay.running||(N||!t.params.autoplay.disableOnInteraction?P(!0,!0):k())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){k();return}v=!0,x=!1,g=!1,y=setTimeout(()=>{g=!0,x=!0,P(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(y),clearTimeout(a),t.params.autoplay.disableOnInteraction){x=!1,v=!1;return}x&&t.params.cssMode&&E(),x=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:C,stop:k,pause:P,resume:E})}function p_(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:a,perspective:s,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=a?a():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,f)=>{n.params.effect===t&&o(f)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function f_(e,t){const n=sf(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function A0(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=sf(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=ia("div",r.split(" ")),i.append(o)),o}function h_(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),p_({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:a,height:s,slides:l,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),f=t.translate,v=p?-f+a/2:-f+s/2,x=p?d.rotate:-d.rotate,y=d.depth,b=Wj(t);for(let g=0,h=l.length;g<h;g+=1){const m=l[g],w=u[g],S=m.swiperSlideOffset,j=(v-S-w/2)/w,C=typeof d.modifier=="function"?d.modifier(j):j*d.modifier;let k=p?x*C:0,P=p?0:x*C,E=-y*Math.abs(C),O=d.stretch;typeof O=="string"&&O.indexOf("%")!==-1&&(O=parseFloat(d.stretch)/100*w);let F=p?0:O*C,V=p?O*C:0,q=1-(1-d.scale)*Math.abs(C);Math.abs(V)<.001&&(V=0),Math.abs(F)<.001&&(F=0),Math.abs(E)<.001&&(E=0),Math.abs(k)<.001&&(k=0),Math.abs(P)<.001&&(P=0),Math.abs(q)<.001&&(q=0);const U=`translate3d(${V}px,${F}px,${E}px)  rotateX(${b(P)}deg) rotateY(${b(k)}deg) scale(${q})`,ae=f_(d,m);if(ae.style.transform=U,m.style.zIndex=-Math.abs(Math.round(C))+1,d.slideShadows){let te=p?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),A=p?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");te||(te=A0("coverflow",m,p?"left":"top")),A||(A=A0("coverflow",m,p?"right":"bottom")),te&&(te.style.opacity=C>0?C:0),A&&(A.style.opacity=-C>0?-C:0)}}},setTransition:a=>{t.slides.map(l=>sf(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const m_=_.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; 
  padding: 0px 20px;
  font-size: 12px;
  background-color: ${({backDefine:e})=>e||"var(--color--white)"};
  border-radius: 10px;
  color: ${({colorDefine:e})=>e||"var(--color--black)"};
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  font-family: var(--font--comfortaa);
  font-weight: 600;
  left: 0;
  bottom: 0;

  .icon {
    font-size: 18px;
    color: var(--color--black);
    margin-left: 8px;
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); 
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`,cf=({text:e,suiteId:t,backDefine:n,colorDefine:r})=>{const i=da(),o=()=>{const a=`/acomoda#${t}`;console.log("Navegando para:",a),i(a)};return c.jsxs(m_,{backDefine:n,colorDefine:r,onClick:o,children:[e,c.jsx(Xp,{className:"icon"})]})},g_=Hi`
.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,v_=In`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,x_=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,y_=_.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${v_} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,w_=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`,b_=_.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,S_=_.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,j_=_.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,T_=_.div`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,__=_.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,M0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>c.jsxs(__,{children:[c.jsx(g_,{}),c.jsx(Jt,{modules:[hr,mr,Rn],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,u)=>c.jsx(en,{children:t==="image"?c.jsx(x_,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${u+1}`}):c.jsxs(y_,{backgroundImage:l.backgroundImage,children:[c.jsx(w_,{}),c.jsxs(b_,{children:[c.jsx(S_,{children:l.title}),c.jsx(j_,{children:l.subtitle}),c.jsx(T_,{children:l.features.map((d,p)=>c.jsxs("span",{children:[d.icon," ",d.text]},p))}),c.jsx(cf,{text:"Conhecer todas as acomodações"})]})]})},u))})]}),bi=_.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 36px;
    font-size: 12px;
    font-weight: 600;
    color: ${({color:e})=>e||"var(--color--black)"};
    background-color: ${({background:e})=>e||"inherit"};
    border: 2px solid ${({borderColor:e})=>e||"transparent"};
    border-radius: 100px;
    box-shadow: 0 0 0 2px var(--color--black);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: var(--font--comfortaa);

    @media(max-width: 768px){
        font-size: 10px;    
    }

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: ${({hoverColor:e})=>e||"var(--color--black)"};
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }
`,L0=_.svg`
    position: absolute;
    width: 24px;
    fill: var(--color--black);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    &.arr-1 {
        right: 16px;
    }

    &.arr-2 {
        left: -25%;
    }

    ${bi}:hover &.arr-1 {
        right: -25%;
    }

    ${bi}:hover &.arr-2 {
        left: 16px;
    }

    ${bi}:hover & {
        fill: var(--color--white);
    }
`,C_=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color--black);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${bi}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,k_=_.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${bi}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,bt=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:o})=>c.jsxs(bi,{onClick:t,color:n,background:r,borderColor:i,hoverColor:o,children:[c.jsx(L0,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(k_,{children:e}),c.jsx(C_,{}),c.jsx(L0,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),E_=In`
  0% {
    border-radius: 80px 20px 50px 80px;
  }
  25% {
    border-radius: 50px 80px 30px 60px;
  }
  50% {
    border-radius: 100px 50px 80px 30px;
  }
  75% {
    border-radius: 60px 30px 100px 50px;
  }
  100% {
    border-radius: 80px 20px 50px 80px;
  }
`,P_=_.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 40%;
  height: 60vh;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    top: 25%;
    height: auto;
    padding: 5% 5%;
    gap: 30px;
    position: relative;
    z-index: 10;
    top: -80px;
    margin-bottom: -80px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    left: 0;
    top: 0;
    background-image: url('../../public/background/background_black.webp');
    background-position: center;
    background-size: contain;
    animation: ${E_} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,z_=_.h1`
  width: 100%;
  text-align: left;
  font-family: var(--font--comfortaa);
  font-weight: 100;
  font-size: 1.3rem;
  line-height: 100%;

  @media (max-width: 768px) {
    text-align: center;
    color: var(--color--black);
    width: auto;
    padding: 7px 15px;
    border-radius: 0px 10px 0px 10px;
    font-size: .9rem;
    font-weight: 800;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(40px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
  }
`,A_=_.p`
  width: 100%;
  font-size: .90rem;
  color: var(--color--black);
  font-family: var(--font--comfortaa);

  @media (max-width: 768px) {
    text-align: justify;
    color: var(--color--black);
    width: 100%;
    margin-top: 5px;
    font-weight: 200;
    font-size: .8rem;
    line-height: 130%;
  }
`,M_=_.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,O0=({text:e,title:t,borderColor:n,buttonColor:r,buttonHover:i,buttonBorder:o,targetPage:a})=>{const s=da(),l=()=>{s(a)},u=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(P_,{borderColor:n,children:[c.jsx(z_,{children:t}),c.jsx(A_,{children:e}),c.jsxs(M_,{children:[c.jsx(bt,{onClick:l,text:"Saber mais",backgroundColor:r,borderColor:o,hoverColor:i,border:"1px solid",color:"var(--color--black)"}),c.jsx(bt,{onClick:u,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:o,hoverColor:i,border:"1px solid",color:"var(--color--black)"})]})]})};function L_(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function uf(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function qe(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function O_(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function Mt(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function I_(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function R_(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const V_=_.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px ${({borderColor:e})=>e||"var(--color--black)"};
  color: ${({textColor:e})=>e||"var(--color--black)"};
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`,qy=_.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-family: var(--font--comfortaa);
  gap: 10px;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 7px 30px;
    font-size: 12px;
  }
`,D_=_(qy)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,N_=_.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,F_=_.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,Ui=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:o})=>{const a=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(V_,{borderColor:n,textColor:r,onClick:a,children:[c.jsxs(qy,{className:"default-btn",children:[c.jsx(L_,{size:15,color:r||"var(--color--black)"}),c.jsx(N_,{textColor:r,children:e})]}),c.jsxs(D_,{className:"hover-btn",hoverColor:i,children:[c.jsx(R_,{size:15,color:o||"var(--color--white)"}),c.jsx(F_,{hoverTextColor:o,children:t})]})]})},B_=Hi`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,$_=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 25px 0 25px 0;
    overflow: hidden;
    background-image: ${({backgroundImage:e})=>`url(${e})`};
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        width: 90%;
        margin-left: 5%;
        border-radius: 20px 0px 20px 0px;
    }
`,q_=_.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); 
    pointer-events: none; 
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
    }
`,H_=_.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    z-index: 2;

    @media (max-width: 768px){
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`,U_=_.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 15px;
    color: white;
    z-index: 3;
    font-family: var(--font--comfortaa);
    font-weight: 800;
    background-color: var(--color--white);
    border-radius: 10px 0 10px 0;
    backdrop-filter: blur(10px);
    color: var(--color--black);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);

    @media (max-width: 768px){
        left: 0;
        top: 10px;
        padding: 7px 10px;
        width: 50%;
        transform: translateX(50%);
        font-weight: 200;
        font-size: .7rem;
        background-color: var(--color--white);
        border-radius: 10px 0 10px 0;
        backdrop-filter: blur(10px);
        color: var(--color--black);
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        text-align: center;
    }
`,W_=_.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;
    font-weight: 100;

    @media (max-width: 768px){
        font-weight: 100;
        font-size: 26px;
        margin-bottom: 0px;
    }
`,G_=_.p`
    font-size: 13px;
    width: 80%;
    margin-bottom: 15px;
    font-family: var(--font--comfortaa)!important;
    text-align: left!important;

    @media (max-width: 768px){
        width: 100%;
        text-align: left!important;
        font-size: 13px!important;
        margin-bottom: 0px;
    }
`,Y_=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=1500,showPagination:i=!0,showNavigation:o=!0})=>c.jsxs(c.Fragment,{children:[c.jsx(B_,{}),c.jsx(Jt,{modules:[hr,mr,Rn,h_],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:o,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((a,s)=>c.jsx(en,{style:{width:"60%"},children:c.jsxs($_,{backgroundImage:a.backgroundImage,children:[c.jsx(U_,{children:a.topLeftText}),c.jsx(q_,{}),c.jsxs(H_,{children:[c.jsx(W_,{children:a.title}),c.jsx(G_,{children:a.description}),c.jsx(Ui,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},s))})]}),K_=_(W.div)`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 25vh;
    }
`,X_=_(W.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,Q_=_(W.div)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: var(--color--black);
    padding: 3px 10px;
    font-family: var(--font--comfortaa);
    background-color: var(--color--white);
    cursor: default;
    font-size: 8px;
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); // Sombra para destacar o texto
`,ol=({images:e=[],reverse:t=!1})=>c.jsx(Jt,{modules:[Rn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(en,{children:c.jsxs(K_,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(X_,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(Q_,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),Z_=In`
  0% {
    border-radius: 0 20px 20px 0;
  }
  25% {
    border-radius: 20px 0 20px 20px;
  }
  50% {
    border-radius: 20px 20px 0 20px;
  }
  75% {
    border-radius: 20px 20px 20px 0;
  }
  100% {
    border-radius: 0 20px 20px 0;
  }
`,J_=_.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${Z_} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,eC=_.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,tC=_.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,nC=_.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,rC=_.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,iC=_.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--color--black);

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        font-family: var(--font--comfortaa);
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 10px;

        @media (max-width: 768px){
            background-color: var(--color--white);
        }
    }
`,oC=_.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,aC=_.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,df=({events:e=[]})=>c.jsx(Jt,{modules:[hr,mr,Rn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(en,{children:c.jsxs(J_,{children:[c.jsx(eC,{src:t.image,alt:t.title}),c.jsxs(tC,{children:[c.jsx(nC,{children:t.title}),c.jsx(rC,{children:t.dateRange}),c.jsx(iC,{children:t.features.map((r,i)=>c.jsxs("span",{children:[r.icon," ",r.text]},i))}),c.jsx(oC,{children:c.jsxs(aC,{children:["A partir de: ",c.jsx("span",{children:"10x"}),"R$",t.price]})}),c.jsx(Ui,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function sC(e){return Y({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function lC(e){return Y({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function cC(e){return Y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function uC(e){return Y({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function dC(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}const pC=_(W.button)`
    font-family: inherit;
    width: 80%;
    border-radius: 20px 0 20px 0;
    font-size: 20px;
    background: #212121;
    color: white;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    font-weight: 1000;

    @media (max-width: 768px){
        width: 100%;
        font-size: 10px;
        padding: 1em;
    }

    & > span {
        margin-left: 20px;
        transition: opacity 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        font-size: 15px;
    }

    & > svg {
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        max-width: 100%;
    }

    &:hover {
        background: var(--color--blue);
    }

    &:hover > svg {
        transform: translateX(5px) scale(1.2);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }
`,fC=_(W.footer)`
    height: auto;
    margin-top: 5vh;
    padding: 5% 5%;
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color--black);
    border-radius: 70px 70px 0 0;
    gap: 60px;

    @media (max-width: 768px){
        margin-top: 5vh;
        border-radius: 25px 25px 0 0;
        padding: 10% 5%;
    }
`,hC=_.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-family: var(--font--comfortaa);
        width: 70%;
        font-size: 28px;
        line-height: 100%;
        color: var(--color--white);
        font-weight: 400;

        @media (max-width: 768px){
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 20px;
        }
    }

    & > p {
        width: 80%;
        line-height: 110%;
        color: var(--color--white);
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            width: 90%;
            text-align: center;
            font-size: 12px;
        }
    }

    & > p > a{
        margin-left: 1ch;
        color: var(--color--blue);
    }

    & > hr{
        width: 85%;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div{
        width: 85%;
        display: flex;
        justify-content: space-between;
        margin-top: -25px;
        color: var(--color--white);

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div > div{
        display: flex;
        gap: 10px;
    }

    & > div > div > a {
        color: var(--color--white);
    }
`,mC=_.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    & > form > input{
        width: 80%;
        height: 30px;
        border-radius: 0 20px 0 20px;
        border: none;
        padding: 20px;
        background-color: var(--color--white);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,gC=_.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,vC=_.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 30vh;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 50px;
    }

    & > div {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;

        @media (max-width: 768px){
         width: 100%;
        }
    }

    & > div p{
        color: var(--color--white);
        width: 80%;
        line-height: 100%;
        font-family: var(--font--avenir);
        margin-top: 10px;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & > div h2{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;

        @media (max-width: 768px){
            font-size: 20px;
        }
    }

    & > div a{
        color: var(--color--white);
        text-decoration: none;
        font-family: var(--font--avenir);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2px;
        transition: all .2s ease;
        border-radius: 5px;
        width: 80%;
    }

    & > div a:hover{
        background-color: var(--color--white);
        transform: translateX(20px);
        color: var(--color--black);
        width: 80%;
    }

    & > div > img {
        width: 40%;
        object-fit: contain;
    }
`,xC=_.section`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > h1{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        width: 30%;
        line-height: 100%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
        }
    }
`,yC=_.hr`
    width: 100%;
    margin-bottom: -50px;
`,wC=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2vh;
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 15px;
    }

    & > p{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 12px;
    }

    & > a{
        color: var(--color--blue);
        font-size: 12px;
    }

    & > p > b > a{
        color: var(--color--blue);
    }
`,Wi=()=>{const e=T.useRef(null),t=M6(e,{once:!0}),[n,r]=T.useState(""),[i,o]=T.useState(""),[a,s]=T.useState(""),l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},u=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,d=()=>{const f=new URLSearchParams(window.location.search);return{utm_source:f.get("utm_source")||"organico",utm_medium:f.get("utm_medium")||"",utm_campaign:f.get("utm_campaign")||"",utm_term:f.get("utm_term")||"",utm_content:f.get("utm_content")||""}},p=async f=>{if(f.preventDefault(),!n||!i||!a){alert("Por favor, preencha todos os campos.");return}const x={id:u(),name:String(n).trim(),email:String(i).trim(),tel:String(a).trim(),conversion_url:window.location.href,...d()};try{const y=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}),b=await y.text();y.ok?(alert("Dados enviados com sucesso!"),r(""),o(""),s("")):(console.error("Erro de resposta:",b),alert("Erro ao enviar os dados: "+b))}catch(y){console.error("Erro:",y),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsx(c.Fragment,{children:c.jsxs(fC,{ref:e,initial:"hidden",animate:t?"visible":"hidden",children:[c.jsxs(gC,{as:W.div,children:[c.jsxs(hC,{children:[c.jsx(W.h1,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.2},children:"Fale agora com a nossa central de reservas"}),c.jsxs(W.p,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.3},children:["Todas as informações são usadas apenas para entrar em contato. Entenda melhor sobre o uso das suas informações pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx(W.hr,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.4}}),c.jsxs("div",{children:[c.jsx(W.h4,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.5},children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx(W.a,{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.6},children:c.jsx(I_,{})}),c.jsx(W.a,{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.7},children:c.jsx(lC,{})}),c.jsx(W.a,{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.8},children:c.jsx(sC,{})})]})]})]}),c.jsx(mC,{children:c.jsxs("form",{id:"contactForm",onSubmit:p,children:[c.jsx(W.input,{type:"text",id:"name",placeholder:"Me diga seu nome",value:n,onChange:f=>r(f.target.value),variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.9}}),c.jsx(W.input,{type:"email",id:"email",placeholder:"Preciso saber seu e-mail também!",value:i,onChange:f=>o(f.target.value),variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1}}),c.jsx(W.input,{type:"tel",id:"tel",placeholder:"Me diga seu número de WhatsApp",value:a,onChange:f=>s(f.target.value),variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.1}}),c.jsxs(pC,{type:"submit",whileHover:{scale:1.05,backgroundColor:"var(--color--blue)"},whileTap:{scale:.95},children:[c.jsx(cC,{size:20}),c.jsx("span",{children:"Enviar meus dados para contato"})]})]})})]}),c.jsxs(vC,{as:W.div,children:[c.jsxs(W.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.2},children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1729513421/white_sevdgn.png",alt:"Descrição da imagem",loading:"lazy"}),c.jsx("p",{children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs(W.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.3},children:[c.jsx("h2",{children:"Âncoras"}),c.jsxs("a",{href:"#",children:[" ",c.jsx(Mt,{})," Início "]}),c.jsxs("a",{href:"#/sobre",children:[" ",c.jsx(Mt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra",children:[" ",c.jsx(Mt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar",children:[" ",c.jsx(Mt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/eventos",children:[" ",c.jsx(Mt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomoda",children:[" ",c.jsx(Mt,{})," Acomodações "]})]}),c.jsxs(W.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.4},children:[c.jsx("h2",{children:"Ajuda"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank",children:[" ",c.jsx(Mt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank",children:[" ",c.jsx(Mt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank",children:[" ",c.jsx(Mt,{})," pousadaleange@gmail.com "]})]}),c.jsxs(W.div,{variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.5},children:[c.jsx("h2",{children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank",children:[" ",c.jsx(Mt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank",children:[" ",c.jsx(Mt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank",children:[" ",c.jsx(Mt,{})," Pinterest "]})]})]}),c.jsxs(xC,{as:W.div,variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.6},children:[c.jsx("h1",{children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar"})})]}),c.jsx(yC,{as:W.hr,variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.7}}),c.jsxs(wC,{as:W.div,variants:l,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.8},children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(dC,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]})})};function xd(e){return Y({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function Hy(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const bC=Hi`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      background-color: black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      
      &:hover {
          background-color: white;
          color: black;
          transform: scale(1.05);
      }
  }
  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`,Uy=In`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,SC=_.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${Uy} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`,jC=_.div`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${Uy} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`,TC=_.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  z-index: 10;
`,_C=_.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,CC=_.p`
  font-size: 13px;
  margin: 0px 0;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-size: 13px;
    font-weight: 200;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
    margin: 0;
  }
`,kC=_.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px){
    gap: 6px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 8px;
      border-radius: 5px 0 5px 0;
      font-size: 10px;
      font-family: var(--font--comfortaa);

      @media (max-width: 768px){
        font-size: 10px;
        padding: 5px 8px;
        border-radius: 6px;
      }

      &:hover {
          color: black;
          background-color: white;
      }
  }

  svg {
      font-size: 12px;

      @media (max-width: 768px){
        font-size: 12px;
      }
  }
`,EC=_.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,PC=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>{const o=da(),a=s=>{o("/acomoda",{state:{suiteId:s}})};return c.jsxs(EC,{children:[c.jsx(bC,{}),c.jsx(Jt,{modules:[hr,mr,Rn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((s,l)=>c.jsxs(en,{children:[c.jsx(SC,{}),c.jsx(jC,{style:{backgroundImage:`url(${s.backgroundImage})`},children:c.jsxs(TC,{children:[c.jsx(_C,{children:s.title}),c.jsx(CC,{children:s.subtitle}),c.jsx(kC,{children:s.features.map((u,d)=>c.jsxs("span",{children:[u.icon," ",u.text]},d))}),c.jsx(cf,{onClick:()=>a(s.id),text:"Conhecer acomodações",suiteId:s.id})]})})]},l))})]})};_(W.div)` 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;_(W.div)`
  background: white;
  border-radius: 60px 20px 35px 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.9);
  width: 50%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 5px;
  font-family: var(--font--comfortaa);
  background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731008398/Untitled-31_gkzipm.png');
  background-size: cover;
  background-position: center;
  filter: contrast(120%);

  @media (max-width: 768px) {
    width: 85%;
    gap: 40px;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1731008479/celular-1_02_ahubmo.png');
  }

  & > p {
    width: 60%;
    font-weight: 100;
    font-size: .9rem;
    line-height: 110%;
    color: var(--color--white);

    @media(max-width: 768px){
      line-height: 120%;
      width: 100%;
      margin-bottom: -25px;
    }
  }
`;_(W.button)` 
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 35px;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  color: var(--color--white);
  font-family: var(--font--comfortaa);
  font-weight: 100;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 1);
  width: 40px;
  height: 40px;
  transition: all .2s ease;

  @media(max-width: 768px){
    width: 35px;
    height: 35px;
    font-size: 35px;
  }

  &:hover{
    background-color: var(--color--white);
    color: var(--color--black);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    border: 1px solid var(--color--white);
  }
`;_(W.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 20px;
  background-color: var(--color--white);
  border: 1px dashed #ff0a0a;
  font-weight: 600;
  color: var(--color--black);
  font-size: .9rem;
  border-radius: 10px 0 10px 0;
  text-decoration: none;
  font-weight: 100;
  margin-top: 15px;
  transition: all .2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  @media(max-width: 768px){
    font-size: .7rem;
  }

  &:hover {
    padding: 8px 25px;
    background-color: var(--color--black);
    color: var(--color--white);
  }
`;_(W.div)` 
  position: absolute;
  top: -25px;
  left: -25px;
  background-color: rgba(173, 1, 1, 0.9);
  border: 1px solid var(--color--white);
  color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: .8rem;
  line-height: 100%;
  font-family: var(--font--comfortaa);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media(max-width: 768px){
    width: 70px;
    height: 70px;
    font-size: .6rem;
    left: -10px;
    top: -10px;
  }
`;const zC=In`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Wy=_.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  left: 15px;
  overflow: hidden;
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: #00d757;
  z-index: 1000;
  animation: ${zC} .5s infinite;

  &:hover {
    width: 325px;
    border-radius: 40px;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`,AC=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;  
  transition: width 0.3s ease-in-out;
`,MC=_.div`
  position: absolute;
  left: 0;  
  width: 0;
  opacity: 0;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;
  padding-left: 125px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font--comfortaa)!important;
  white-space: nowrap;

  ${Wy}:hover & {
    width: 70%;
    opacity: 1;
  }
`,ga=()=>{const e="https://wa.link/dojlwi";return c.jsxs(Wy,{onClick:()=>window.open(e,"_blank"),children:[c.jsx(AC,{children:c.jsx(F6,{color:"white",size:"30px"})}),c.jsx(MC,{children:"Fale com a central de reservas"})]})},LC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/mulher-na-rede_bj91d1.webp",alt:"Mulher na rede",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/pousada-de-cima_hum4rw.webp",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-piscina_mnkqrv.webp",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_da_serra_lefdif.webp",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],OC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/foto_da_pousada_e3djry.webp",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/casal_na_rede_watzjg.webp",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/churrasqueira_w7akaf.webp",alt:"Foto de churrasco",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/cachorro-olhando-para-camera_wpovwv.webp",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/sala-de-estar_blaa0x.webp",alt:"Sala de estar na le ange mar",loading:"lazy"}],IC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/mulher-na-rede_bj91d1.webp",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-piscina_mnkqrv.webp",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/casal_comendo_no_mar_nkkwkl.webp",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_d2asun.webp",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/sala-de-estar_blaa0x.webp",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327606/por_do_sol_wmwzur.webp",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],RC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328215/suite_ajrwh0.webp",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328215/churrasqueira_feg3jy.webp",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/mulher_e_cachorro_na_piscina_wwgxkq.webp",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/2_ta%C3%A7as_ocgwdi.webp",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/quadro_de_cachorro_s1mnbq.webp",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],I0=_.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;

    &:nth-child(2){
        @media (max-width: 768px){
            flex-direction: column;
            position: relative!important;
            z-index: -100!important;
        
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        position: relative;
        z-index: -100!important;
    
        height: auto;

        .slider{
            width: 100%;    
        }
    }


`,VC=_.div`
    width: 100%;
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
        position: relative!important;
        z-index: 10!important; /* Isso aqui resolve o erro do botão e o carrossel não funcionar */
    
    }
`,DC=_.aside`
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);

        @media (max-width: 768px){
            font-size: 22px;
            width: 100%;
            margin-top: 0vh;
            height: auto;

        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`,NC=[{id:"suite-1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328712/suiteSerra1_wm28o4.webp",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(ao,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(Pe,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"suite-master-6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328713/suiteSerra2_aksiu9.webp",features:[{icon:c.jsx(be,{}),text:"77m²"},{icon:c.jsx(ao,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(xd,{}),text:"Couch lounge"},{icon:c.jsx(Hy,{}),text:"Bay window"}]},{id:"suite2-6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar2_qlgel2.webp",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(ao,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(Pe,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"suite2-2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar1_zu3lmc.webp",features:[{icon:c.jsx(be,{}),text:"30m²"},{icon:c.jsx(ao,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira"},{icon:c.jsx(Pe,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"suite-10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/1_e6cnxy.webp",features:[{icon:c.jsx(be,{}),text:"77m²"},{icon:c.jsx(ao,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(uf,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(xd,{}),text:"Couch lounge"},{icon:c.jsx(pt,{}),text:"Lareira"}]}],FC=_.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 2.5% 5%;
    position: relative;
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        clip-path: polygon(1% 1%, 99% 1%, 99% 85%, 1% 85%);
    }

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`,BC=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/cachorro_na_piscina_sjs7ft.webp",title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/cachorro_na_praia_pmqyi4.webp",title:"Praia",description:"Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp",title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp",title:"Piscinas",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/ofuros_kyjddp.webp",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp",title:"Divercão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet, correr, pular e nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/bar_xl6dvc.webp",title:"Bar",description:"Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/adega_uje7gn.webp",title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/suites_pzghlo.webp",title:"Suítes",description:"São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],$C=_.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
    }

    &::before {
        background-image: url('../../../public/background/background_white.webp');
        background-position: center;
        background-size: contain;
        opacity: 0.1;
        width: 100%;
        margin-top: 10vh;
        border-radius: 0 0 100px 100px / 100px 100px;
        height: 90%;
        content: '';
        top: 0;
        left: 0;
        position: absolute;
    }

`,qC=_.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }
`,qc=_.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-size: 1.5rem;

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 100%;
        margin-left: 0%;
    }

`,qa=_.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--avenir);
    color: var(--color--black);
    opacity: 0.7;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`,HC=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(En,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(ce,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(En,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(En,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],UC=_.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,WC=_.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5%;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`,R0=_.b`
    color: var(--color--green);
`,Hc=_.b`
    color: var(--color--blue);
`,GC=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-top: -10vh;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        margin-bottom: 5vh;
        margin-top: -5vh;
        height: 10vh;
    }
`,YC=()=>c.jsxs(c.Fragment,{children:[c.jsxs(Vr,{children:[c.jsx("title",{children:"Início - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429553/1_zzajkn.svg"})]}),c.jsx(Rj,{}),c.jsx(ga,{}),c.jsxs(VC,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(DC,{children:[c.jsxs("h1",{children:["Conheça o ",c.jsx(Hc,{children:"melhor de cada cantinho nosso"})]}),c.jsx("p",{children:"Pousada mais Pet Friendly"})]}),c.jsxs(I0,{children:[c.jsx(M0,{content:LC,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(O0,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra"})]}),c.jsxs(I0,{children:[c.jsx(O0,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da propriedade e o seu pet é calorosamente recebido para momentos especiais.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar"}),c.jsx(M0,{content:OC,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsxs(FC,{children:[c.jsxs("div",{children:[c.jsxs(qC,{children:["Nossos quartos ",c.jsx(R0,{children:"mais procurados"})," "]}),c.jsx(qa,{children:"Já consegue se imaginar dormindo aqui?"})]}),c.jsx(PC,{content:NC})]}),c.jsxs($C,{children:[c.jsxs("div",{children:[c.jsxs(qc,{children:["Carinho em cada ",c.jsx(Hc,{children:"detalhe"})]}),c.jsx(qa,{children:"Venha ter essa experiência"})]}),c.jsx(Y_,{content:BC,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(qc,{children:[" ",c.jsx(R0,{children:"Viva"})," essa experiência "]}),c.jsx(qa,{children:"Alguns dos nossos momentos"})]}),c.jsxs(UC,{children:[c.jsx(ol,{images:IC}),c.jsx(ol,{images:RC,reverse:!0})]}),c.jsx(GC,{children:c.jsx(bt,{text:"Fazer minha reserva!"})}),c.jsxs("div",{children:[c.jsxs(qc,{children:["Conheça nossos pacotes e ",c.jsx(Hc,{children:"noites especiais"})," "]}),c.jsx(qa,{children:"Estamos te esperando!"})]}),c.jsx(WC,{children:c.jsx(df,{events:HC})}),c.jsx(Wi,{})]});function V0(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"},child:[]},{tag:"path",attr:{d:"M9 13h2v5H9zm4 0h2v5h-2z"},child:[]}]})(e)}function KC(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.895 6.519 2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812A8.473 8.473 0 0 0 5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58a6.515 6.515 0 0 0 3.237.001 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9h-3.756a8.494 8.494 0 0 0-1.349-2.481zM8.681 7.748c.445-.558.96-.993 1.528-1.294a3.773 3.773 0 0 1 3.581 0 4.894 4.894 0 0 1 1.53 1.295c.299.373.54.8.753 1.251H7.927c.214-.451.454-.879.754-1.252zM17.8 12.5c0 .522-.042 1.044-.126 1.553-.079.49-.199.973-.355 1.436a8.28 8.28 0 0 1-.559 1.288 7.59 7.59 0 0 1-.733 1.11c-.267.333-.56.636-.869.898-.31.261-.639.484-.979.664s-.695.317-1.057.41c-.04.01-.082.014-.122.023V14h-2v5.881c-.04-.009-.082-.013-.122-.023-.361-.093-.717-.23-1.057-.41s-.669-.403-.978-.664a6.462 6.462 0 0 1-.871-.899 7.402 7.402 0 0 1-.731-1.108 8.337 8.337 0 0 1-.56-1.289 9.075 9.075 0 0 1-.356-1.438A9.61 9.61 0 0 1 6.319 11H17.68c.079.491.12.995.12 1.5z"},child:[]}]})(e)}function D0(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.004 7.975V6c0-2.206-1.794-4-4-4h-10c-2.206 0-4 1.794-4 4v1.998l-.076.004A1 1 0 0 0 2 9v2a1 1 0 0 0 1 1h.004v6c0 .735.403 1.372.996 1.72V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.276A1.994 1.994 0 0 0 21.004 18v-6a1 1 0 0 0 1-1V9.062a1.006 1.006 0 0 0-.072-.455c-.203-.487-.635-.604-.928-.632zM19.006 18H5.004v-5h14.001l.001 5zM11.004 7v4h-6V7h6zm8 0v4h-6V7h6zm-12-3h10c.736 0 1.375.405 1.722 1H5.282c.347-.595.986-1 1.722-1z"},child:[]},{tag:"circle",attr:{cx:"7.5",cy:"15.5",r:"1.5"},child:[]},{tag:"circle",attr:{cx:"16.5",cy:"15.5",r:"1.5"},child:[]}]})(e)}function XC(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function QC(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function ZC(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function N0(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function He(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function F0(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const JC=Hi`
.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,ek=In`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,tk=_(W.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,nk=_(W.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${ek} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,rk=_(W.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`,ik=_(W.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,ok=_(W.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,ak=_(W.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,sk=_(W.div)`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,lk=_.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,B0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>{const{scrollY:l}=P6(),u=Da(l,[0,300],[0,-30]),d=Da(l,[0,300],[0,-20]),p=Da(l,[0,300],[0,-10]),f=Da(l,[0,300],[0,-5]);return c.jsxs(lk,{children:[c.jsx(JC,{}),c.jsx(Jt,{modules:[hr,mr,Rn],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((v,x)=>c.jsx(en,{children:t==="image"?c.jsx(tk,{src:v.src,alt:v.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(nk,{backgroundImage:v.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(rk,{}),c.jsxs(ik,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(ok,{style:{y:u},children:v.title}),c.jsx(ak,{style:{y:d},children:v.subtitle}),c.jsx(sk,{style:{y:p},children:v.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(cf,{text:"Conhecer todas as acomodações",style:{y:f}})]})]})},x))})]})},ck=_.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,uk=_.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
    }

    & > div:nth-child(1){
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        @media (max-width: 768px){
            width: 100%;
            gap: 30px;
            align-items: center;
            height: auto;
            position: relative;
        }

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 100%;
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1.8rem;
                text-align: center;
                margin-top: 55vh;
            }

            & > b{
                font-weight: 100;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
                border: 1px solid;
                padding: 0 5px;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(n + 2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--comfortaa);
            font-size: 1rem;
            color: var(--color--black);
            width: 80%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1rem;
                text-align: center;
                width: 90%;
            }
        }
    }

    & > div:nth-child(2){
        width: 55%;
        height: 90%;

        @media (max-width: 768px){
            width: 100%;
            position: absolute;
            top: 0;
            height: 50vh;
            z-index: -1;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;

            @media (max-width: 768px){
                border-radius: 0 0 50px 50px;
                border-image: fill 0 linear-gradient(#0001, #ffffff);
            }
        }
    }
`,$0=_.section`
    width: 90%;
    margin-left: 5%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 768px){
        height: auto;
        padding: 7% 2.5%;
        margin-left: 0;
        width: 100%;
    }
`,dk=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
    align-items: center;
    justify-content: center;
    display: none;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){

        }

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;

            @media (max-width: 768px){
                font-size: 1.6rem;
            }
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        @media (max-width: 768px){

            flex-direction: column;
            height: auto;   
        }

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            @media (max-width: 768px){
                width: 100%;
                align-items: center;
                padding: 40px;
                gap: 20px;
                border-radius: 25px 0 25px 0!important;
                border-image: fill 0 linear-gradient(#0001, #ffffff80);
            }

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);

                @media (max-width: 768px){
                    font-size: 1.3rem;
                    text-align: center;
                    width: 100%;
    
                }
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                @media (max-width: 768px){
                    align-items: center;
    
                }

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--comfortaa);
                    line-height: 100%;

                    @media (max-width: 768px){
                        text-align: justify;
                        font-size: .9rem;
                    }
                }
            }

        }

        & > div:nth-child(1){
            border-radius: 0px 50px 0px 40px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp');
            background-size: cover;
            background-position: center;
            
        }

        & > div:nth-child(2){
            border-radius: 40px 0px 50px 0px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg');
            background-size: cover;
            background-position: center;
        }
    }
`,pk=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343406/espaco10_zbobfs_kgmqz5.jpg",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343109/espaco6_dfprnt-compressed_zrduvr.jpg",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343120/espaco1_e9bneq-compressed_ch0xzx.jpg",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343114/espaco4_wmcp95-compressed_yv3qly.jpg",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343116/espaco3_awfzgo-compressed_evyhwv.jpg",alt:"Champagne na pousada le ange",loading:"lazy"}],fk=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343404/espaco9_ldc1oy_uqmmwu.jpg",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343403/espaco8_pzjgiz_gittbv.jpg",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343118/espaco2_twf5e1-compressed_itpmkk.jpg",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343112/espaco5_gzy5ng-compressed_gjqaig.jpg",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343107/espaco7_nlscx5-compressed_horerr.jpg",alt:"Casamento fotos pousada le ange",loading:"lazy"}],hk=_.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 70px 20px 40px 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        

            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px 0 20px 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(2){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px 30px 20px 0px;
        background-color: var(--color--white);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -20px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
                background-color: var(--color--white);
                margin-top: 12px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
            
            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }
        
    }
`,lt=_.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: inline-flex;
    padding: 4px 8px;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    gap: 10px;
    border-radius: 0 10px 0 10px;
    font-size: .75rem;
    transition: all .2s ease;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    font-family: var(--font--comfortaa);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px){
        font-size: .8rem;
        padding: 7px 10px;
        gap: 10px;
    }

    &:hover{
        padding: 5px 9px;
        background-color: var(--color--black);
        color: var(--color--white);
        cursor: default;
    }
`,mk=_.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: var(--color--white);


    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px 80px 40px 60px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(1){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 30px 10px 40px 0px;
        width: 55%;
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -25px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
    
                background-color: var(--color--white);
                margin-top: 20px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1.1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 100%;
        
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;

            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }

        
    }
`,gk=()=>c.jsxs(c.Fragment,{children:[c.jsxs(Vr,{children:[c.jsx("title",{children:"Eventos - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429565/5_qchldm.svg"})]}),c.jsx(ck,{}),c.jsx(ga,{}),c.jsxs(uk,{children:[c.jsxs("div",{children:[c.jsxs("h1",{children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{children:"Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos."}),c.jsx(bt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342456/home_df8ub0_rqju2u.webp",alt:"foto da home da página de eventos"})})]}),c.jsx($0,{children:c.jsx(B0,{content:pk,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(dk,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(bt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(bt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(hk,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342454/11_gzr6ei_ikd2hm.webp",alt:"foto do casamento"})}),c.jsxs("div",{children:[c.jsx("h1",{children:"Pré-Wedding"}),c.jsx("p",{children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(lt,{children:[c.jsx(N0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(lt,{children:[c.jsx(F0,{}),"Noite Especial no Sábado"]}),c.jsxs(lt,{children:[c.jsx(XC,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(lt,{children:[c.jsx(QC,{}),"Decoração Romântica na Suíte"]}),c.jsxs(lt,{children:[c.jsx(D0,{}),"Massagem Relaxante"]}),c.jsxs(lt,{children:[c.jsx(KC,{}),"Passeio de Bugre"]}),c.jsxs(lt,{children:[c.jsx(V0,{}),"Piquenique para os Noivos"]}),c.jsxs(lt,{children:[c.jsx(i0,{}),"Late Checkout no Domingo"]})]}),c.jsx(bt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342448/7_sgewp5_rx9vfw.webp",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342452/10_deybdj_khogtb.webp",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342450/9_eavaty_zcw9bc.webp",alt:"foto do casamento"})]})]})]}),c.jsxs(mk,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Aniversário"}),c.jsx("p",{children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(lt,{children:[c.jsx(N0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(lt,{children:[c.jsx(F0,{}),"Noite Especial no Sábado"]}),c.jsxs(lt,{children:[c.jsx(ZC,{}),"Massagem Relaxante"]}),c.jsxs(lt,{children:[c.jsx(D0,{}),"Passeio de Bugre"]}),c.jsxs(lt,{children:[c.jsx(V0,{}),"Piquenique"]}),c.jsxs(lt,{children:[c.jsx(i0,{}),"Late Checkout no Domingo"]})]}),c.jsx(bt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342464/niver5_vqhh94_pitqka.webp",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342462/niver3_katslf_fapku3.webp",alt:"foto do casamento"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342460/niver2_rb3hvs_nofpdf.webp",alt:"foto do casamento"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342458/niver1_zyq8zi_gandzx.webp",alt:"foto de aniversário"})})]}),c.jsx($0,{children:c.jsx(B0,{content:fk,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(Wi,{})]}),Gy=_.button`
  background: ${e=>e.backgroundColor||"transparent"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: var(--font--comfortaa);
  padding: 2px 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: ${e=>e.textColor||"#000"};
  border: 1px solid ${e=>e.borderColor||"#000"};
  transition: color 0.3s 0.1s ease-out;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: ${({hoverColor:e})=>e||""};
    border: 1px solid ${e=>e.hoverBorderColor||e.borderColor||"#000"};
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em ${e=>e.hoverBackgroundColor||e.borderColor||"#000"};
  }
`,vk=_(O_)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Gy}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,xk=_.span`
  margin: 10px;
`,Gi=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:o,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,onClick:u})=>c.jsxs(Gy,{onClick:u,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,children:[c.jsx(vk,{iconColor:i,hoverIconColor:o}),c.jsx(xk,{children:e})]}),yk=_.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 0 0 5%;


        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;

        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
    
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
                font-size: 1.6rem;
                margin-top: 12vh;
            }
        }

        & > h4 {
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                margin-top: -50px;
                font-size: 12px;
                text-align: center;
                width: 100%;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 120%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
                margin-top: -25px;
                font-size: 14px;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;


        @media (max-width: 768px){
            width: 100%;
            height: auto;

            display: none;
        }

        &::before {
            width: 100%;
            height: 40%;
            content: '';
            bottom: 0;
            right: 0;
            position: absolute;
            background-color: var(--color--blue);
            border-radius: 100px 0 0 50px;
            z-index: -1;
    

            @media (max-width: 768px){
                border-radius: 70px 0 0 25px;
                width: 95%;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;
    

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`,wk=_.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,bk=_.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding: 0% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
        padding: 0 5%;
        margin-top: 5vh;
    }

    & > div:nth-child(1){
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;


        @media (max-width: 768px){
            max-width: 100%;
            height: 30vh;
            gap: 10px;
        }

        & > img:nth-child(1){
            width: 60%;
            height: 100%;
            border-radius: 20px 0 20px 0;
            object-fit: cover;
    

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
                border-radius: 10px 0 10px 0;
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 0px 20px 0px 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%!important;
                object-fit: cover;
                border-radius: 0px 10px 0 10px;
    
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;


        @media (max-width: 768px){
            width: 100%;
            height: 50%;
            gap: 40px;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
    
            font-weight: 100;

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--comfortaa);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: -40px;
                font-size: 14px;
                text-align: center;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
    
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`,Sk=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 35px;
        padding: 0% 5%;
    }

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;


        @media (max-width: 768px){
            width: 100%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

            @media (max-width: 768px){
                font-size: 28px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 80%;
        flex-wrap: wrap;
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;


        @media (max-width: 768px){
            width: 100%;
            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 20px 0 20px 0; 
        height: 50%;
        object-fit: cover;

        &:nth-child(2){
            border-radius: 0 20px 0 20px;
        }

        &:nth-child(4){
            border-radius: 20px 0px 20px 0px!important;
        }

        @media (max-width: 768px){
            width: 49%;
            height: 20vh;

        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 20px 0 20px;
       }

    }
`,jk=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;

        
        @media (max-width: 768px){
            width: 100%;
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
    
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
            
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                height: 35vh;
                margin-top: -20px;
                margin-bottom: 50px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 40px;
                right: 20px;
                border-radius: 0 20px 0 20px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;


        @media (max-width: 768px){
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: 15px;
                height: 35vh;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;
        


                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 20px 0 20px;
            }
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            line-height: 100%;
            text-align: right;
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
        
                    margin-top: 0px;
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 90%;
            font-family: var(--font--comfortaa);
            text-align: right;
            font-weight: 100;
            font-size: .9rem;
            line-height: 130%;

                @media (max-width: 768px){

                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`,Tk=_.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

        @media (max-width: 768px){
            height: auto;
            flex-direction: column;
        }

    & > div:nth-child(1){
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;


        @media (max-width: 768px){
            width: 100%;
            height: auto;
            gap: 10px;
        }

        & > div:nth-child(1){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 20px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;
            margin-bottom: 20px;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }

            }
        }

        & > div:nth-child(2){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 5px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }
    }
    
    & > div:nth-child(2){
        width: 50%;
        height: 80%;

        @media (max-width: 768px){

            width: 100%;
            height: auto;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px 0 30px 0;
        }
    }
`,_k=_.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    gap: 25px;

    & h1 {
        font-family: var(--font--comfortaa);
        color: var(--color--white);
        width: 35%;
        text-align: center;
        line-height: 100%;
        font-weight: 100;

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`,Ck=()=>c.jsxs(c.Fragment,{children:[c.jsxs(Vr,{children:[c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429555/2_mvzbuj.svg"})]}),c.jsx(wk,{}),c.jsx(ga,{}),c.jsxs(yk,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Pousada Le Ange"}),c.jsx("h4",{children:"A pousada mais Pet Friendly do Brasil"}),c.jsx("p",{children:"Um empreendimento familiar fundado em 2018, a Pousada LeAnge Serra surgiu da paixão dos fundadores pelo amor por quatro patas, bem-estar e hospitalidade, situando-se em Miguel Pereira, Rio de Janeiro. Com o sucesso da primeira unidade, expandimos para Búzios em 2023, criando a Pousada LeAnge Mar. A filosofia por trás das nossas pousadas é oferecer um refúgio acolhedor e luxuoso, em que cada detalhe é cuidadosamente pensado para proporcionar conforto e satisfação."})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331472/cachorro_kcfx8n.webp",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy"})})]}),c.jsxs(bk,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_do_mar_d9fx7r.webp",alt:"foto da le ande da mar",loading:"lazy"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_da_serra_lefdif.webp",alt:"foto da le ande da serra",loading:"lazy"})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Duas unidades,"}),c.jsx("h4",{children:"dois cenários incomparáveis"}),c.jsx("p",{children:"A Pousada LeAnge Serra oferece 10 suítes deslumbrantes em meio à natureza exuberante de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(Sk,{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Diferenciais"}),c.jsx("p",{children:"Somos Pet Lovers, aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Nos tornando assim ÚNICOS com este tipo de experiência."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331473/rede_no_mar_ajtwwv.webp",loading:"lazy",alt:"rede na le ange mar"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp",loading:"lazy",alt:"hot tube na le ange serra"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/divers%C3%A3o_na_serra_fzhl7y.webp",loading:"lazy",alt:"casal se divertindo na le ange serra"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331479/natal_jwdzzh.webp",loading:"lazy",alt:"foto da le ange com tema de natal"})]})]}),c.jsxs(jk,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Gastronomias"}),c.jsx("p",{children:"Oferecemos um serviço all inclusive que abrange todas as refeições, atendendo todas as restrições alimentares de nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",loading:"lazy",alt:"foto da noite de risotos na pousada le ange"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331477/cachorro_olhando_pra_camera_ndannw.webp",loading:"lazy",alt:"foto do cachorro sorrindo para camera"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange"})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Espaços compartilhados"}),c.jsx("p",{children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, spa e acesso às cachoeiras, enquanto em Búzios, nossos hóspedes desfrutam de piscinas e ofurôs com vistas incríveis do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(Tk,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Suítes"}),c.jsx("p",{children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios; na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{children:"Público de alto padrão"}),c.jsx("p",{children:"Nosso público é de classe A, buscando experiências de alto padrão e exclusividade. Para manter a tranquilidade e a exclusividade, a idade mínima para hospedagem é de 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/quadro_de_cachorro_s1mnbq.webp",alt:"foto do quadro de cachorro na pousada le ange mar"})})]}),c.jsxs(_k,{children:[c.jsx("h1",{children:"Venha viver essa experiência com a gente!"}),c.jsx(Gi,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),kk=Hi`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,Ek=_.div`
  display: flex;
  padding: 20px;
  align-items: center;
  height: 90vh;
  gap: 20px;
  padding: 5vh 5%;
  flex-direction: ${({imagePosition:e})=>e==="right"?"row-reverse":"row"};

  @media (max-width: 768px){
    border: 1px solid var(--color--black);
    border-radius: 15px 0 15px 0;
    height: 75vh;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 15px;
    background: none;
  
  }
`,Pk=_.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  border-radius: 0px 40px 0px 40px;
  background-color: var(--color--white);
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px){
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    height: 40vh;
  
  }
`,zk=_.h2`
  font-size: 2.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({$colorDefined:e})=>e||"var(--color--green)"}; 
  font-weight: 100;

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
    height: auto;
  }
`,Ak=_.p`
  margin-bottom: 1.2em;
  font-size: 1rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);
  font-weight: 100;

  @media (max-width: 768px){
    width: 100%;
    font-size: .9rem;
    height: auto;
  }
`,Mk=_.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,Lk=_.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,Ok=_(Jt)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({$bgColor:e})=>e||"var(--color--green)"};
    box-shadow: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    bottom: 20px!important;
    top: 95% !important;

    @media (max-width: 768px){
      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-top: -80px!important;
    margin-right: 5px; 

    @media (max-width: 768px){
      left: 40px!important;
      margin-top: -50px!important;
    }
  }

  .swiper-button-next {
    left: 150px;
    margin-top: -80px!important;

    @media (max-width: 768px){
      left: 90px!important;
      margin-top: -50px!important;
    }
  }
`,Yy=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(kk,{}),c.jsx(Ok,{navigation:!0,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[hr,mr,Rn],className:"mySwiper",$bgColor:n,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((i,o)=>c.jsx(en,{children:c.jsxs(Ek,{imagePosition:r,children:[c.jsxs(Pk,{children:[c.jsx(zk,{$colorDefined:t,children:i.title}),c.jsx(Ak,{children:i.description}),c.jsx(Ui,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]}),c.jsx(Mk,{children:c.jsx(Lk,{src:i.imageUrl,alt:i.title})})]})},o))})]}),Ik=In`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,Rk=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334823/serraFoto_k1rwb0.webp');
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
        margin-bottom: 0;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 18%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s ease-in-out;
        animation: ${Ik} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.5s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;
        
        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`,Vk=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 15px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-weight: 100;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`,Dk=({images:e})=>{const[t,n]=T.useState(null);return c.jsxs(Rk,{children:[c.jsxs(Vk,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Conheça as nossas suítes"})}),c.jsx("div",{children:c.jsx(Ui,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href="#/acomoda",children:[t===i?"Conhecer Suíte":r.text,t===i&&c.jsx(Xp,{})]})]},i))})]})},Nk=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 50px;
    background-color: var(--color--white);

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
        padding: 10% 2.5%;
        margin-bottom: 50px;
    }
`,Fk=_.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,Bk=_.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    @media (max-width: 768px){
    }

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        @media (max-width: 768px){
            width: 100%!important;

            text-align: center;
        }

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px 0 20px 0;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 0px 20px 0 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px 0 20px 0;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px 0 0 20px;
    }
`,$k=_.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        margin-top: -10px;
    }
`,qk=_.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: 1.6rem;
    }

    & > b {
        font-weight: 100;
        color: ${({colorDefinedBold:e})=>e||"var(--color--green)"};
    }
`,Hk=_.p`
    color: var(--color--black);
    font-size: 1rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
`;_(Gi)`
    margin-top: auto; 
`;const Ky=({colorDefinedBold:e})=>c.jsxs(Nk,{children:[c.jsx(Fk,{children:c.jsxs(Bk,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335113/churrasco_l0chmi.jpg",alt:"Homem fazendo churrasco na le ange",loading:"lazy"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335110/risoto-compressed_xqyhqx.jpg",alt:"Risoto no prato na le ange",loading:"lazy"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335111/hamburguer-compressed_dhh0dx.jpg",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335108/risoto1-compressed_m583dd.jpg",alt:"Risoto no prato na le ange",loading:"lazy"})]})]})}),c.jsxs($k,{children:[c.jsxs(qk,{colorDefinedBold:e,children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(Hk,{children:["Sabe aquela comida com sabor, tempero e afeto que te abraça? ",c.jsx("br",{})," ",c.jsx("br",{}),"Essa é a gastronomia registrada da LeAnge! ",c.jsx("br",{}),c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia – café da manhã, almoço, chá da tarde e jantar, incluindo nossas deliciosas sobremesas."]}),c.jsx(Ui,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]});_.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const Uk=_.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;
    margin-top: 5vh;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: -5vh;
        margin-bottom: 20px;
        height: 15vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.6rem;
            color: var(--color--black);
            background-color: rgba(255, 255, 255, 0.4);
            padding: 10px 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    }
`,Wk=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335871/1_sxf4fc_a9uljb.webp",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335872/2_cldel9_wnqquw.webp",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335873/3_i0ctxp_megfsi.webp",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/cachorro-olhando-para-camera_wpovwv.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335875/5_flrzdf_wyxn6v.webp",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335890/16_mwucoo_qw5inq.webp",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335889/15_epymcf_vqg5qs.webp",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335877/6_b6jtbs_dfnbyu.webp",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335880/8_zr7p3o_czbag1.webp",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}],Gk=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335878/7_gutmna_mncfkn.webp",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335881/10_olepft_mfx8nm.webp",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335883/11_wlyxbh_wxtele.webp",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335884/12_epl2gw_oc9uc0.webp",alt:"Cachorro brincando na grama",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335885/13_hhitda_hfolhl.webp",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335887/14_ybyv7y_wt3zn2.webp",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731335892/17_awkinq_ommg1k.webp",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],Xy=()=>c.jsxs(c.Fragment,{children:[c.jsxs(Uk,{children:[c.jsx("h1",{children:"Pet Friendly"}),c.jsx(Gi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),c.jsx(ol,{images:Wk}),c.jsx(ol,{images:Gk,reverse:!0})]}),q0=_.section`
    width: 100%;
    margin-top: 5vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
    height: 12vh;
    
    @media (max-width: 768px){
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;
        text-align: center;
        width: 100%;
        
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
    }
`,Yk=_.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,Kk=_.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 15px 0 15px 0; 
    position: relative; 
    overflow: hidden; 

    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        height: 65vh;
        border: 1px solid transparent;
    }
`,Xk=_.p`
    font-size: .6rem;
    border-radius: 0 10px 0 10px;
    position: absolute;
    bottom: 72%;
    left: -60px;
    transform: rotate(270deg);
    padding: 5px 25px;
    margin: 10px 0; 
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; 
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: .7rem;
        text-align: center;
        width: 60%;
        display: inline-block;
        left: -75px;
        bottom: 72.5%;
        width: 55%;
    }
`,Qk=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341041/3_nxmzvb_uqceix.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341041/4_zkfafk_oftuer.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341043/5_tb7gyj_m9gzdd.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341046/6_y0fjmz_u19wod.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341046/2_kck8ru_pps4we.webp"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341240/1_ph73ii.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341241/2_v8reyz_vm3ce1.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341241/3_ji6uzq_daetsl.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341242/5_ty6zqr_q1l2mc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341242/6_dovfum_tswv2e.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341242/4_u1pvbr_zcx4gk.webp"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341441/1_fddk63_gm2m6g.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341442/2_eomyvd_nnnec7.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341444/3_islkto_wkjaco.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341446/4_tds2ap_sarfwc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341448/5_cvbsbp_vbx4jm.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341450/6_cs2odp_vpnkmq.webp"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341580/1_vw8gku_jdpu1m.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341581/2_u9soep_axzzap.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341582/3_aryhje_lmyuui.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341584/4_g2prnk_ejavci.webp"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341717/1_urlgor_pasdht.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341718/2_ij3lu8.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341720/3_scnvzz_z55ake.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341722/4_j7wxsn_d4icoi.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341724/5_jn3xrs_bx73kp.webp"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341840/1_zt1frt_tozga2.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341841/2_m6a7pn_dljjpo.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341842/3_f1nazk_rjbcys.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341845/4_al1kde_fctxov.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341847/5_fz3g46_f4bfjz.webp"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342013/1_adshm2_k64nfp.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342015/2_gvo2bk_z3cakr.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342017/3_eqkktf_gldizg.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342019/4_pw8xsl_suk6of.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342021/5_abwhg7_odyfrq.webp"]}],Qy=()=>c.jsxs(c.Fragment,{children:[c.jsx(q0,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(Yk,{children:c.jsx(Jt,{slidesPerView:1,spaceBetween:10,modules:[hr,mr,Rn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:Qk.map(e=>c.jsx(en,{children:c.jsxs(Kk,{children:[c.jsx(Jt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(en,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(Xk,{children:e.text})]})},e.id))})}),c.jsx(q0,{children:c.jsx(Gi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),Zk=_.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,Jk=_.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0vh;
        position: absolute;
        z-index: -1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
        background-position: center;
        background-size: cover;

        @media (max-width:768px){
            display: none;
        }
    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,eE=_.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100px 10px 50px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none;
        height: 80%;
        top: 0;
        z-index: -1;
    }
`,tE=_.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);
        font-weight: 100;

        @media (max-width: 768px){
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        margin-left: -5px;
        width: 100%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
        font-weight: 100;

        @media (max-width: 768px){
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-left: 0;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--green);
        font-weight: 100;
        
        @media(max-width: 768px){
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        font-size: 18px;
        line-height: 120%;
        width: 80%;
        font-weight: 100;

        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 0px;
        }
    }
`,nE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/cachorro_na_piscina_sjs7ft.webp"},{title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731332405/aventura_odmky4.webp"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731332405/cachorro_pulando_na_piscina_lrhxpp.webp"},{title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp"},{title:"Aconchego",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp"},{title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp"},{title:"Diversão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet correr, pular e nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp"},{title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/adega_uje7gn.webp"},{title:"Suítes",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833076/suites_hsgvxw.webp"},{title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para a mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/v1730833077/slide04_li94ks.webp"}],rE=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,iE=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
    background-color: var(--color--green);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1{
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,oE=_.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 2.5% 0 2.5%;
        margin-top: 0;
    }
`,aE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(En,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(ce,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(En,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(En,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],sE=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,lE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133147/suiteSuperior1_gpjls0.jpg",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133146/suiteSuperior2_cqduas.jpg",text:"Suíte Superior 2",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133142/suiteSuperior3_pgr53r.jpg",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133142/suiteStandard4_mrtwhq.jpg",text:"Suíte Standard 4",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133138/suiteStandard5_j9oyln.jpg",text:"Suíte Standard 5",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133137/suiteMaster6_id3iqs.jpg",text:"Suíte Master 6",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133133/suiteMaster7_bqdek7.jpg",text:"Suíte Master 7",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133111/suiteStandard8_lpyi22.jpg",text:"Suíte Standard 8",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133110/suiteSuperior9_v1mxwb.jpg",text:"Suíte Superior 9",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730133110/suiteMaster10_gqoxfm.jpg",text:"Suíte Superior 10",loading:"lazy"}],cE=()=>c.jsxs(c.Fragment,{children:[c.jsxs(Vr,{children:[c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429558/3_gkl82v.svg"})]}),c.jsx(Zk,{}),c.jsx(ga,{}),c.jsxs(Jk,{children:[c.jsx(eE,{}),c.jsxs(tE,{children:[c.jsx("h4",{children:"LeAnge Serra, a pousada mais"}),c.jsxs("h1",{children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx(Gi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),c.jsx(iE,{children:c.jsx("h1",{children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(rE,{children:c.jsx(Yy,{slides:nE})}),c.jsx(Dk,{images:lE}),c.jsx(Ky,{}),c.jsx(Xy,{}),c.jsx(sE,{children:c.jsx(bt,{text:"Fazer minha reserva!"})}),c.jsx(oE,{children:c.jsx(df,{events:aE})}),c.jsx(Qy,{}),c.jsx(Wi,{})]}),uE=In`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,dE=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    position: relative;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334824/marFoto_oxc2py.webp');
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 23%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s ease-in-out;
        animation: ${uE} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.5s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;

        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`,pE=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 35px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`,fE=({images:e})=>{const[t,n]=T.useState(null);return c.jsxs(dE,{children:[c.jsxs(pE,{children:[c.jsx("div",{children:c.jsx("h1",{children:"Conheça as nossas suítes"})}),c.jsx("div",{children:c.jsx(Ui,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href="#/acomoda",children:[t===i?"Conhecer Suíte":r.text,t===i&&c.jsx(Xp,{})]})]},i))})]})},hE=_.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,mE=_.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0vh;
        position: absolute;
        z-index: -1;
        opacity: 0.05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/casal_na_rede_watzjg.webp');
        background-position: center;
        background-size: cover;

        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,gE=_.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/casal_na_rede_watzjg.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50px 10px 100px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none;
        position: absolute;
        height: 80%;
        top: 0;
        z-index: -1;
    }
`,vE=_.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px) {
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 100%;
        line-height: 100%;
        font-weight: 100;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px) {
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--blue);
        font-weight: 100;

        @media (max-width: 768px) {
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
        font-weight: 100;

        @media (max-width: 768px) {
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`,xE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730832504/petfriendly-scaled_vsev2s.webp"},{title:"Praia",description:"Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/cachorro_na_praia_pmqyi4.webp"},{title:"Piscinas",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/ofuros_kyjddp.webp"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir uma televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730832504/saladeestar_yakcqy.webp"},{title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp"},{title:"Bar",description:"Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1730832503/bar_qgdbog.webp"},{title:"Suítes",description:"São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/suites_pzghlo.webp"}],yE=_.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px) {
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`,wE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594862/IMG_0140-compressed_q2fn5t.webp",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594863/IMG_0142-compressed_lfijwu.webp",text:"Suíte Standard 2",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594863/IMG_0141-compressed_pl7ep8.webp",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594863/IMG_0139-compressed_nqmqdj.webp",text:"Suíte Superior 4",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594862/IMG_0144-compressed_kqrioa.webp",text:"Suíte Superior 5",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594870/mar_master_8_m1x38m.jpg",text:"Suíte Standard 6",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594863/IMG_0143-compressed_fk4kgv.webp",text:"Suíte Master 7",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731594870/mar_master_8_m1x38m.jpg",text:"Suíte Master 8",loading:"lazy"}],bE=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px) {
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1 {
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,SE=_.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px) {
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
    }
`,jE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(En,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(ce,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(ce,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(En,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(ce,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(En,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Be,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],TE=_.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,_E=()=>c.jsxs(c.Fragment,{children:[c.jsxs(Vr,{children:[c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429562/4_bbtihr.svg"})]}),c.jsx(hE,{}),c.jsx(ga,{}),c.jsxs(mE,{children:[c.jsxs(vE,{children:[c.jsx("h4",{children:"Le Ange Mar, a pousada mais"}),c.jsxs("h1",{children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(Gi,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(gE,{})]}),c.jsx(bE,{children:c.jsx("h1",{children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(yE,{children:c.jsx(Yy,{slides:xE,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(fE,{images:wE}),c.jsx(Ky,{colorDefinedBold:"var(--color--blue)"}),c.jsx(Xy,{}),c.jsx(TE,{children:c.jsx(bt,{text:"Fazer minha reserva!"})}),c.jsx(SE,{children:c.jsx(df,{events:jE})}),c.jsx(Qy,{}),c.jsx(Wi,{})]});function CE(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var Zy={exports:{}};(function(e,t){(function(n,r){e.exports=r(T)})(typeof self<"u"?self:tw,function(n){return function(r){var i={};function o(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return r[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=r,o.c=i,o.d=function(a,s,l){o.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:l})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,s){if(1&s&&(a=o(a)),8&s||4&s&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&s&&typeof a!="string")for(var u in a)o.d(l,u,(function(d){return a[d]}).bind(null,u));return l},o.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(s,"a",s),s},o.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},o.p="",o(o.s=2)}([function(r,i){r.exports=n},function(r,i,o){var a={linear:function(s,l,u,d){return(u-l)*s/d+l},easeInQuad:function(s,l,u,d){return(u-l)*(s/=d)*s+l},easeOutQuad:function(s,l,u,d){return-(u-l)*(s/=d)*(s-2)+l},easeInOutQuad:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s+l:-p/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,u,d){return(u-l)*(s/=d)*s*s+l},easeOutCubic:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s+1)+l},easeInOutCubic:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s+l:p/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s+l},easeOutQuart:function(s,l,u,d){return-(u-l)*((s=s/d-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s+l:-p/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s*s+l},easeOutQuint:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s*s+l:p/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,u,d){var p=u-l;return-p*Math.cos(s/d*(Math.PI/2))+p+l},easeOutSine:function(s,l,u,d){return(u-l)*Math.sin(s/d*(Math.PI/2))+l},easeInOutSine:function(s,l,u,d){return-(u-l)/2*(Math.cos(Math.PI*s/d)-1)+l},easeInExpo:function(s,l,u,d){return s==0?l:(u-l)*Math.pow(2,10*(s/d-1))+l},easeOutExpo:function(s,l,u,d){var p=u-l;return s==d?l+p:p*(1-Math.pow(2,-10*s/d))+l},easeInOutExpo:function(s,l,u,d){var p=u-l;return s===0?l:s===d?l+p:(s/=d/2)<1?p/2*Math.pow(2,10*(s-1))+l:p/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,u,d){return-(u-l)*(Math.sqrt(1-(s/=d)*s)-1)+l},easeOutCirc:function(s,l,u,d){return(u-l)*Math.sqrt(1-(s=s/d-1)*s)+l},easeInOutCirc:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?-p/2*(Math.sqrt(1-s*s)-1)+l:p/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),-p*Math.pow(2,10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)+l)},easeOutElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),p*Math.pow(2,-10*s)*Math.sin((s*d-v)*(2*Math.PI)/f)+x+l)},easeInOutElastic:function(s,l,u,d){var p,f,v,x=u-l;return v=1.70158,s===0?l:(s/=d/2)==2?l+x:((f=0)||(f=d*.44999999999999996),(p=x)<Math.abs(x)?(p=x,v=f/4):v=f/(2*Math.PI)*Math.asin(x/p),s<1?p*Math.pow(2,10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)*-.5+l:p*Math.pow(2,-10*(s-=1))*Math.sin((s*d-v)*(2*Math.PI)/f)*.5+x+l)},easeInBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*(s/=d)*s*((p+1)*s-p)+l},easeOutBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*((s=s/d-1)*s*((p+1)*s+p)+1)+l},easeInOutBack:function(s,l,u,d,p){var f=u-l;return p===void 0&&(p=1.70158),(s/=d/2)<1?f/2*(s*s*((1+(p*=1.525))*s-p))+l:f/2*((s-=2)*s*((1+(p*=1.525))*s+p)+2)+l},easeInBounce:function(s,l,u,d){var p=u-l;return p-a.easeOutBounce(d-s,0,p,d)+l},easeOutBounce:function(s,l,u,d){var p=u-l;return(s/=d)<.36363636363636365?p*(7.5625*s*s)+l:s<.7272727272727273?p*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?p*(7.5625*(s-=.8181818181818182)*s+.9375)+l:p*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,u,d){var p=u-l;return s<d/2?.5*a.easeInBounce(2*s,0,p,d)+l:.5*a.easeOutBounce(2*s-d,0,p,d)+.5*p+l}};r.exports=a},function(r,i,o){r.exports=o(3)},function(r,i,o){o.r(i),o.d(i,"ReactConfetti",function(){return zt});var a,s,l=o(0),u=o.n(l),d=o(1),p=o.n(d);function f(z,L){return z+Math.random()*(L-z)}function v(z,L){for(var R=0;R<L.length;R++){var M=L[R];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(z,M.key,M)}}function x(z,L,R){return L in z?Object.defineProperty(z,L,{value:R,enumerable:!0,configurable:!0,writable:!0}):z[L]=R,z}(function(z){z[z.Circle=0]="Circle",z[z.Square=1]="Square",z[z.Strip=2]="Strip"})(a||(a={})),function(z){z[z.Positive=1]="Positive",z[z.Negative=-1]="Negative"}(s||(s={}));var y=function(){function z(M,Z,$,J){(function(Dl,Nl){if(!(Dl instanceof Nl))throw new TypeError("Cannot call a class as a function")})(this,z),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=Z;var de,Te,pe=this.getOptions(),fn=pe.colors,Bt=pe.initialVelocityX,$t=pe.initialVelocityY;this.context=M,this.x=$,this.y=J,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx=typeof Bt=="number"?f(-Bt,Bt):f(Bt.min,Bt.max),this.vy=typeof $t=="number"?f(-$t,0):f($t.min,$t.max),this.shape=(de=0,Te=2,Math.floor(de+Math.random()*(Te-de+1))),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=fn[Math.floor(Math.random()*fn.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?s.Positive:s.Negative}var L,R;return L=z,(R=[{key:"update",value:function(){var M=this.getOptions(),Z=M.gravity,$=M.wind,J=M.friction,de=M.opacity,Te=M.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=Z,this.vx+=$,this.vx*=J,this.vy*=J,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var pe=.1*this.rotationDirection;if(this.rotateY+=pe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=de,this.context.lineCap="round",this.context.lineWidth=2,Te&&typeof Te=="function")Te.call(this,this.context);else switch(this.shape){case a.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case a.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case a.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(L.prototype,R),z}();function b(z,L,R){return L in z?Object.defineProperty(z,L,{value:R,enumerable:!0,configurable:!0,writable:!0}):z[L]=R,z}var g=function z(L,R){var M=this;(function($,J){if(!($ instanceof J))throw new TypeError("Cannot call a class as a function")})(this,z),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function($){M.particles.splice($,1)}),b(this,"getParticle",function(){var $=f(M.x,M.w+M.x),J=f(M.y,M.h+M.y);return new y(M.context,M.getOptions,$,J)}),b(this,"animate",function(){var $=M.canvas,J=M.context,de=M.particlesGenerated,Te=M.lastNumberOfPieces,pe=M.getOptions(),fn=pe.run,Bt=pe.recycle,$t=pe.numberOfPieces,Dl=pe.debug,Nl=pe.tweenFunction,Fl=pe.tweenDuration;if(!fn)return!1;var Bl=M.particles.length,Yi=Bt?Bl:de,$l=Date.now();if(Yi<$t){Te!==$t&&(M.tweenInitTime=$l,M.lastNumberOfPieces=$t);for(var pf=M.tweenInitTime,Jy=Nl($l-pf>Fl?Fl:Math.max(0,$l-pf),Yi,$t,Fl),ff=Math.round(Jy-Yi),hf=0;hf<ff;hf++)M.particles.push(M.getParticle());M.particlesGenerated+=ff}return Dl&&(J.font="12px sans-serif",J.fillStyle="#333",J.textAlign="right",J.fillText("Particles: ".concat(Bl),$.width-10,$.height-20)),M.particles.forEach(function(Ki,mf){Ki.update(),(Ki.y>$.height||Ki.y<-100||Ki.x>$.width+100||Ki.x<-100)&&(Bt&&Yi<=$t?M.particles[mf]=M.getParticle():M.removeParticleAt(mf))}),Bl>0||Yi<$t}),this.canvas=L;var Z=this.canvas.getContext("2d");if(!Z)throw new Error("Could not get canvas context");this.context=Z,this.getOptions=R};function h(z,L){var R=Object.keys(z);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(z);L&&(M=M.filter(function(Z){return Object.getOwnPropertyDescriptor(z,Z).enumerable})),R.push.apply(R,M)}return R}function m(z){for(var L=1;L<arguments.length;L++){var R=arguments[L]!=null?arguments[L]:{};L%2?h(Object(R),!0).forEach(function(M){S(z,M,R[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(R)):h(Object(R)).forEach(function(M){Object.defineProperty(z,M,Object.getOwnPropertyDescriptor(R,M))})}return z}function w(z,L){for(var R=0;R<L.length;R++){var M=L[R];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(z,M.key,M)}}function S(z,L,R){return L in z?Object.defineProperty(z,L,{value:R,enumerable:!0,configurable:!0,writable:!0}):z[L]=R,z}var j={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:p.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},C=function(){function z(M,Z){var $=this;(function(de,Te){if(!(de instanceof Te))throw new TypeError("Cannot call a class as a function")})(this,z),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(de){var Te={confettiSource:{x:0,y:0,w:$.canvas.width,h:0}};$._options=m(m(m({},Te),j),de),Object.assign($,de.confettiSource)}),S(this,"update",function(){var de=$.options,Te=de.run,pe=de.onConfettiComplete,fn=$.canvas,Bt=$.context;Te&&(Bt.fillStyle="white",Bt.clearRect(0,0,fn.width,fn.height)),$.generator.animate()?$.rafId=requestAnimationFrame($.update):(pe&&typeof pe=="function"&&$.generator.particlesGenerated>0&&pe.call($,$),$._options.run=!1)}),S(this,"reset",function(){$.generator&&$.generator.particlesGenerated>0&&($.generator.particlesGenerated=0,$.generator.particles=[],$.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){$.options={run:!1},$.rafId&&(cancelAnimationFrame($.rafId),$.rafId=void 0)}),this.canvas=M;var J=this.canvas.getContext("2d");if(!J)throw new Error("Could not get canvas context");this.context=J,this.generator=new g(this.canvas,function(){return $.options}),this.options=Z,this.update()}var L,R;return L=z,(R=[{key:"options",get:function(){return this._options},set:function(M){var Z=this._options&&this._options.run,$=this._options&&this._options.recycle;this.setOptionsWithDefaults(M),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof M.recycle=="boolean"&&M.recycle&&$===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof M.run=="boolean"&&M.run&&Z===!1&&this.update()}}])&&w(L.prototype,R),z}();function k(z){return function(L){if(Array.isArray(L))return U(L)}(z)||function(L){if(typeof Symbol<"u"&&Symbol.iterator in Object(L))return Array.from(L)}(z)||q(z)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function P(z){return(P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L})(z)}function E(){return(E=Object.assign||function(z){for(var L=1;L<arguments.length;L++){var R=arguments[L];for(var M in R)Object.prototype.hasOwnProperty.call(R,M)&&(z[M]=R[M])}return z}).apply(this,arguments)}function O(z,L){var R=Object.keys(z);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(z);L&&(M=M.filter(function(Z){return Object.getOwnPropertyDescriptor(z,Z).enumerable})),R.push.apply(R,M)}return R}function F(z){for(var L=1;L<arguments.length;L++){var R=arguments[L]!=null?arguments[L]:{};L%2?O(Object(R),!0).forEach(function(M){gt(z,M,R[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(R)):O(Object(R)).forEach(function(M){Object.defineProperty(z,M,Object.getOwnPropertyDescriptor(R,M))})}return z}function V(z,L){return function(R){if(Array.isArray(R))return R}(z)||function(R,M){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(R)))){var Z=[],$=!0,J=!1,de=void 0;try{for(var Te,pe=R[Symbol.iterator]();!($=(Te=pe.next()).done)&&(Z.push(Te.value),!M||Z.length!==M);$=!0);}catch(fn){J=!0,de=fn}finally{try{$||pe.return==null||pe.return()}finally{if(J)throw de}}return Z}}(z,L)||q(z,L)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function q(z,L){if(z){if(typeof z=="string")return U(z,L);var R=Object.prototype.toString.call(z).slice(8,-1);return R==="Object"&&z.constructor&&(R=z.constructor.name),R==="Map"||R==="Set"?Array.from(z):R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)?U(z,L):void 0}}function U(z,L){(L==null||L>z.length)&&(L=z.length);for(var R=0,M=new Array(L);R<L;R++)M[R]=z[R];return M}function ae(z,L){if(!(z instanceof L))throw new TypeError("Cannot call a class as a function")}function te(z,L){for(var R=0;R<L.length;R++){var M=L[R];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(z,M.key,M)}}function A(z,L){return(A=Object.setPrototypeOf||function(R,M){return R.__proto__=M,R})(z,L)}function D(z){var L=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var R,M=ne(z);if(L){var Z=ne(this).constructor;R=Reflect.construct(M,arguments,Z)}else R=M.apply(this,arguments);return N(this,R)}}function N(z,L){return!L||P(L)!=="object"&&typeof L!="function"?Q(z):L}function Q(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function ne(z){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(L){return L.__proto__||Object.getPrototypeOf(L)})(z)}function gt(z,L,R){return L in z?Object.defineProperty(z,L,{value:R,enumerable:!0,configurable:!0,writable:!0}):z[L]=R,z}var vt=u.a.createRef(),Pt=function(z){(function($,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(J&&J.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),J&&A($,J)})(Z,z);var L,R,M=D(Z);function Z($){var J;ae(this,Z);for(var de=arguments.length,Te=new Array(de>1?de-1:0),pe=1;pe<de;pe++)Te[pe-1]=arguments[pe];return gt(Q(J=M.call.apply(M,[this,$].concat(Te))),"canvas",u.a.createRef()),gt(Q(J),"confetti",void 0),J.canvas=$.canvasRef||vt,J}return L=Z,(R=[{key:"componentDidMount",value:function(){if(this.canvas.current){var $=Ue(this.props)[0];this.confetti=new C(this.canvas.current,$)}}},{key:"componentDidUpdate",value:function(){var $=Ue(this.props)[0];this.confetti&&(this.confetti.options=$)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var $=V(Ue(this.props),2),J=$[0],de=$[1],Te=F({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},de.style);return u.a.createElement("canvas",E({width:J.width,height:J.height,ref:this.canvas},de,{style:Te}))}}])&&te(L.prototype,R),Z}(l.Component);function Ue(z){var L={},R={},M=[].concat(k(Object.keys(j)),["confettiSource","drawShape","onConfettiComplete"]),Z=["canvasRef"];for(var $ in z){var J=z[$];M.includes($)?L[$]=J:Z.includes($)?Z[$]=J:R[$]=J}return[L,R,{}]}gt(Pt,"defaultProps",F({},j)),gt(Pt,"displayName","ReactConfetti");var zt=u.a.forwardRef(function(z,L){return u.a.createElement(Pt,E({canvasRef:L},z))});i.default=zt}]).default})})(Zy);var kE=Zy.exports;const EE=Vi(kE);In`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const H0=_.select`
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: none;
  font-size: 16px;
  color: #333;
  appearance: none;
  cursor: pointer;
  font-family: var(--font--comfortaa);
  font-size: .8rem;
  color: var(--color--black);
  border-radius: 0;

  &:focus {
    outline: none;
  }

  option:hover {
    background-color: var(--color--white)!important;
  }

  option:nth-child(2) {
    color: var(--color--green);
    font-weight: 800;
  }

  option:nth-child(3) {
    color: var(--color--blue);
    font-weight: 800;
  }
`,PE=_.div`
  display: ${({isLoading:e})=>e?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Garantir que fique acima de outros elementos */

  & img {
    width: 350px; /* Ajuste o tamanho do GIF aqui */
    height: auto;
  }
`,zE=_.div`
    display: none;

    @media (min-width: 1080px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.5)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        max-width: 1440px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        padding: 0 2.5%;
        height: 10vh;
        box-shadow: 0 0 5px #4d4d4d50;
        border-radius: 16px 8px 16px 8px;
        z-index: 999;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    }
`,AE=_.header`
    display: flex;
    gap: 5px;
`,gn=_(({isActive:e,...t})=>c.jsx(mv,{...t}))`
    position: relative;
    color: var(--color--black);
    text-decoration: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 5px 15px;
    transition: all 0.3s ease;
    border-radius: 10px 10px 0 10px;
    background-color: ${({isActive:e,variant:t})=>e?t==="serra"?"var(--color--green)":t==="mar"?"var(--color--blue)":"var(--color--black)":"transparent"};
    color: ${({isActive:e})=>e?"var(--color--white)":"var(--color--black)"};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        left: 0;
        background: rgb(20, 20, 20);
        opacity: 0;
        z-index: -1;
        transition: all 0.5s;
        border-radius: 10px 10px 0 10px;
    }

    &:hover {
        color: var(--color--white);
        background-color: ${({variant:e})=>e==="serra"?"var(--color--green)":e==="mar"?"var(--color--blue)":"var(--color--black)"};
    }

    &:hover::before {
        left: 0;
        right: 0;
        opacity: 1;
    }
`,nn=_.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
    overflow: hidden;

    ${({isVisible:e})=>e&&` 
        width: 13px;
        height: 13px;
        opacity: 1;
        transform: scale(1);
        margin-right: 7.5px;
    `}
`,ME=_.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,U0=_(gn)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,LE=_.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.4)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        z-index: 999;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin-left: 7.5%;
        margin-top: 10px;
        padding: 0 5%;
        height: 8vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 10px 0 10px 0;

        & > img {
            width: 25%;
            height: 100%;
            object-fit: contain;
        }

        & > button {
            display: flex;
            width: 30%;
            border-radius: 5px 0 5px 0;
            font-family: var(--font--comfortaa);
            border: none;
            font-size: 12px;
            padding: 7.5px;
            gap: 2.5px;
            background-color: transparent;
            color: var(--color--black);
            align-items: center;
            justify-content: space-evenly;
            transition: all 0.2s ease;
            border: 1px solid var(--color--black);
            background-color: ${({isClicked:e})=>e?"var(--color--black)":"transparent"};
            color: ${({isClicked:e})=>e?"var(--color--white)":"var(--color--black)"};

            &:hover {
                background-color: var(--color--black);
                color: var(--color--white);
                border: 1px solid var(--color--black);
                transform: scale(0.95);
            }
        }
    }
`,OE=_.div`
    display: flex;
    position: fixed;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 20px 20px 0;
    padding: 20px;
    width: 250px;
    height: 95dvh;
    margin-top: 2.5vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    transform: translateX(-100%);
    transition: transform 0.3s ease;

    ${({isOpen:e})=>e&&` 
        transform: translateX(0);
    `}

    & > button:nth-child(1) {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--color--black);
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover{
            transform: rotate(180deg) scale(0.95);
            border: 2px solid var(--color--black);
            background-color: red;
        }
    }

    & > img {
        width: 65%;
        margin-top: 50px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`,IE=()=>{const e=Hr(),[t,n]=T.useState(!1),[r,i]=T.useState(!1),[o,a]=T.useState(!1),[s,l]=T.useState(!1),[u,d]=T.useState(!1),[p,f]=T.useState(!1);let v;const x=()=>{l(m=>!m),d(m=>!m)},y=()=>{l(!1),d(!1)},b=()=>{a(!0),clearTimeout(v),v=setTimeout(()=>{a(!1)},3e3)},g=da(),h=m=>{const w=m.target.value;w&&g(w)};return T.useEffect(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b),clearTimeout(v)}),[]),T.useEffect(()=>{if(e.pathname!=="/"){f(!0);const m=setTimeout(()=>{f(!1)},1e3);return()=>clearTimeout(m)}else f(!1)},[e.pathname]),T.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const m=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},5e3);return()=>clearTimeout(m)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(PE,{isLoading:p,children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731007469/V1_kdjdkc.gif",alt:"Loading..."})}),c.jsxs(zE,{isScrolled:o,children:[t&&c.jsx(ME,{isVisible:r,children:c.jsx(EE,{})}),c.jsx(mv,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(AE,{children:[c.jsxs(gn,{to:"/",isActive:e.pathname==="/",children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(o0,{})}),"Início"]}),c.jsxs(gn,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(a0,{})}),"Sobre nós"]}),c.jsxs(gn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(n0,{})}),"Le Ange Mar"]}),c.jsxs(gn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(uC,{})}),"Le Ange Serra"]}),c.jsxs(U0,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(r0,{})}),"Eventos"]}),c.jsxs(H0,{onChange:h,defaultValue:"",children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(bt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(LE,{isScrolled:o,children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png",alt:"logo da le ange"}),c.jsxs("button",{onClick:x,isClicked:u,children:["Menu",c.jsx(CE,{})]})]}),c.jsxs(OE,{isOpen:s,children:[c.jsx("button",{onClick:y,children:"X"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(gn,{to:"/",isActive:e.pathname==="/",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/",children:c.jsx(o0,{})}),"Início"]}),c.jsxs(gn,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/sobre",children:c.jsx(a0,{})}),"Sobre nós"]}),c.jsxs(gn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/mar",children:c.jsx(n0,{})}),"Le Ange Mar"]}),c.jsxs(gn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/serra",children:c.jsx(B6,{})}),"Le Ange Serra"]}),c.jsxs(U0,{to:"/event",isActive:e.pathname==="/event",onClick:y,children:[c.jsx(nn,{isVisible:e.pathname==="/event",children:c.jsx(r0,{})}),"Eventos"]}),c.jsxs(H0,{onChange:h,defaultValue:"",children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(bt,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},RE=Hi`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      border-radius: 50%;
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)!important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease;

      &:hover {
          background-color: rgba(255, 255, 255, .7);
          color: black;
          transform: scale(1.05);
      }

      &::after {
          font-size: 25px; /* Ajuste aqui o tamanho do ícone */
      }
  }

  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`,VE=_.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding: 0 5%;
    gap: 15px;
    flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        padding: 5% 2.5%;
    }
`,DE=_.div`
    width: 50%;
    height: 95%;
    border-radius: 35px 0 35px 0;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,NE=_.div`
    width: 50%;
    height: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: ${({background:e})=>e||"rgba(0, 0, 0, 0.1)"};
    border-radius: 0px 30px 0px 10px;

    @media (max-width: 768px){
        width: 100%;
        height: 55vh;
        padding: 15px;
        gap: 50px;
    }

    & > div{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > section{
            width: 100%;
            display: flex;

            & > div{
                width: 100%;
                display: flex;
                justify-content: space-between;

                & > p{
                    font-size: 1.5rem;
                    font-weight: 300;
                    font-family: var(--font--comfortaa);
                    color: var(--color--black);

                    @media (max-width: 768px){
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`,FE=_.h2`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 3px 12px;
    border-radius: 0 10px 0 10px;
    background-color: transparent;
    cursor: default;


    @media (max-width: 768px){
        font-size: .7rem;
        padding: 5px 15px;
        display: inline;
        white-space: nowrap;
    }
`,BE=_.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,$E=_.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px 0 12px 0;
        font-size: 10px;
        transition: all .2s ease;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 5px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 14px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`,qE=_.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 35px 0 35px 0;

    @media (max-width: 768px){
        height: 50vh;
    }
`,Ve=({images:e=[],suites:t=[],reverse:n=!1,background:r="rgba(0, 0, 0, 0.1)"})=>c.jsxs(VE,{reverse:n,children:[c.jsxs(DE,{children:[c.jsx(RE,{}),c.jsx(Jt,{modules:[Rn,mr,hr],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((i,o)=>c.jsx(en,{children:c.jsx(qE,{src:i,alt:`Slide ${o+1}`})},o))})]}),c.jsx(NE,{background:r,children:t.map((i,o)=>{var a;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{children:i.NomedaSuite}),c.jsx(FE,{children:i.NomedaPousada})]})}),c.jsx($E,{children:(a=i.features)==null?void 0:a.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(BE,{children:i.Description}),c.jsx(bt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},o)})})]});function rt(e){return Y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const HE=_.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--green);
        font-weight: 400;
    }

`,UE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731344205/suiteSuperior1_gpjls0_l6yhv9.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344197/1_o5yez9_vrlet1.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344198/3_aiyrqa_btekxc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344200/4_ywuuuc_b8t7x3.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344203/5_onjzk1_ysyao3.webp"],WE=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², com cama King Size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas, garantindo total conforto e sofisticação."}],GE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731344820/1_x3uulk_dj8iz3.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344821/2_o7w1df_rfa8ao.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344824/3_u2ikyj_bbap70.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344826/4_wte9h1_nbgckn.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344829/5_olm5xn_up47by.webp"],YE=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"Desfrute de 52m² de exclusividade: cama King Size, ar-condicionado e lareira para momentos de descanso. A varanda privativa oferece vista para a mata, e o banheiro com banheira e aquecedor de toalhas garante total conforto. A suíte ainda conta com frigobar, chaleira elétrica e Smart TV com canais a cabo."}],KE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345105/1_ylximp_j7rlx6.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345099/3_drrdp6_jeadzb.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345108/2_naq3yx_r415zb.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345101/4_lpovtm_pybn3y.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345103/5_tsqexf_xy8tbc.webp"],XE=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"Viva 52m² de conforto, com cama King Size e a calorosa presença de uma lareira. A varanda privativa oferece vista para a mata, e o banheiro conta com banheira relaxante e aquecedor de toalhas. A suíte ainda tem frigobar, chaleira elétrica e Smart TV com canais a cabo, criando o ambiente perfeito para o descanso."}],QE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345365/1_s9b5nq_bkdxnp.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345367/2_hyhg8t_a7ameu.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345369/3_s0ig5c_vrsvhv.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345371/4_oppeg3_o41fdi.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345374/5_kb5ean_xhm0vu.webp"],ZE=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"Desfrute de 52m² de conforto com cama King Size, ar-condicionado e lareira para momentos de descanso. Relaxe na banheira com vista para a mata, enquanto o banheiro oferece chuveiro e aquecedor de toalhas. Com frigobar, Smart TV a cabo e varanda com vista compartilhada."}],JE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345603/1_rnbhj2_kghiue.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345605/2_msj4wh_rrl3zt.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345608/3_b8v99f_aiaxqa.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345617/4_rdcxvu_sjgtje.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345621/5_cwrlxp_pjsznc.webp"],eP=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"Viva a experiência de 52m² de puro conforto com cama King Size, ar-condicionado e lareira para momentos acolhedores. A banheira, com vista para a mata, e o banheiro com chuveiro e aquecedor de toalhas garantem seu relaxamento."}],tP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345889/1_ytelar_a4gkq4.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345890/2_y07hp1_gxkw0f.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345893/3_ennrfl_tsrdpf.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345900/4_nmnmdm_pb6suc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345903/5_zjbujo_ojixkc.webp"],nP=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"77m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(uf,{}),text:"Chaise lounge"},{icon:c.jsx(Hy,{}),text:"Bay window"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 77m² de luxo com cama King Size, ar-condicionado e lareira. Relaxe na chaise lounge ao lado da Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata."}],rP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146635/1_r9brij.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/2_lp3nwj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/3_hahgqj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146631/4_hstjdq.jpg"],iP=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda NÃO privativa"}],Description:"Relaxe em uma suíte de 52m², com cama King Size, ar-condicionado e lareira para total conforto. Aproveite a banheira com vista para a mata e desfrute do frigobar e Smart TV com canais a cabo. O banheiro conta com chuveiro e aquecedor de toalhas."}],oP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731346391/1_deflqw_o0h5op.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346395/3_apyt83_m5wg8y.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346393/2_vtsru4_j58fi3.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346398/4_a4uhie_akrdkl.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346401/5_s3imtf_jey5us.webp"],aP=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda NÃO privativa"}],Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo."}],sP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731346629/1_ougeas_aj0kkp.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346631/2_qiphp1_zbes5m.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346636/4_ams1oh_mxicwx.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346633/3_x7jhml_auko3f.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346640/5_texuuu_e0gps2.webp"],lP=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"52m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"Desfrute de uma suíte de 52m² com cama King Size, ar-condicionado e lareira, criando o ambiente ideal para relaxar. A banheira com vista para a mata proporciona momentos únicos, enquanto o frigobar e a Smart TV com canais a cabo garantem seu entretenimento."}],cP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731347011/1_lj4tav_i26aev.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347012/2_rwd1oh_clvvnj.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347015/3_hybfzc_rsrbwj.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347018/4_p052an_rslqub.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347020/5_aqbze0_ae2782.webp"],uP=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(be,{}),text:"77m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(xd,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(uf,{}),text:"Couch lounge"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Ampla varanda privativa"}],Description:"Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer."}],dP=()=>c.jsxs(c.Fragment,{children:[c.jsxs(HE,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx(Ve,{images:UE,suites:WE,reverse:!0,background:"#CAD76680"}),c.jsx(Ve,{images:GE,suites:YE,reverse:!1,background:"#CAD76680"}),c.jsx(Ve,{images:KE,suites:XE,reverse:!0,background:"#CAD76680"}),c.jsx(Ve,{images:QE,suites:ZE,reverse:!1,background:"#CAD76680"}),c.jsx(Ve,{images:JE,suites:eP,reverse:!0,background:"#CAD76680"}),c.jsx(Ve,{images:tP,suites:nP,reverse:!1,background:"#CAD76680"}),c.jsx(Ve,{images:rP,suites:iP,reverse:!0,background:"#CAD76680"}),c.jsx(Ve,{images:oP,suites:aP,reverse:!1,background:"#CAD76680"}),c.jsx(Ve,{images:sP,suites:lP,reverse:!0,background:"#CAD76680"}),c.jsx(Ve,{images:cP,suites:uP,reverse:!1,background:"#CAD76680"}),c.jsx(Wi,{})]}),pP=_.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--blue);
        font-weight: 400;
    }

`,fP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731347671/1_jbfcfw-compressed_fowhdw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347679/2_avh1mm-compressed_jmpbxs.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347674/5_bw0qou-compressed_au8uhx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347677/4_j3c1yo-compressed_fmuvak.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347669/3_kplwmw-compressed_ctw3wb.jpg"],hP=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"28m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 1 no Le Ange Mar oferece 28m² de conforto e sofisticação para até 3 adultos. Com uma cama King Size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],mP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731348252/2_uonrhf-compressed_vtj5ay.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348249/3_ysfzuk-compressed_drqyfp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348244/5_dub0pj-compressed_nycmvi.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348255/1_ofu5mj-compressed_ele8hy.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348246/4_ulr721-compressed_njwzhs.jpg"],gP=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"30m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Standard 2 no Le Ange Mar oferece 30m² de conforto e tranquilidade, ideal para até 4 adultos. Com cama King Size, ar-condicionado e lareira, é o ambiente perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV para seu entretenimento."}],vP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731348602/1_mkvfcp-compressed_gr43kj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348599/2_ciuk0m-compressed_cehbai.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348597/3_njizit-compressed_na7v2c.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348592/5_mjfm3k-compressed_tfneqy.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348594/4_d5kp62-compressed_lcocv8.jpg"],xP=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 3 no Le Ange Mar oferece 32m² de sofisticação e conforto, ideal para até 2 adultos. A cama King Size, ar-condicionado e lareira criam um ambiente acolhedor, enquanto o frigobar, chaleira elétrica e Smart TV."}],yP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731349318/1_znboil-compressed_yri6qq.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349281/3_srrc1g-compressed_sxde4s.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349273/5_lxdgp4-compressed_qaobnt.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349314/2_edqaq4-compressed_hggyrj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349275/4_k1afap-compressed_do1fjk.jpg"],wP=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 4 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],bP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731349664/1_ztjmyc-compressed_qvus4l.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349653/5_dkyssi-compressed_prm4wc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349655/4_rg0jvi-compressed_pknmhg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349661/2_djdgbx-compressed_zscwrg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349658/3_hkxuyr-compressed_fpwsiy.jpg"],SP=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 5 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],jP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731350736/1_usupcb-compressed_z7nnww.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/5_v3dnrs-compressed_svhspj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350720/2_egxqmp-compressed_hnybrg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/3_pjp0sr-compressed_hnudyo.jpg"],TP=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 6 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],_P=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731350736/1_usupcb-compressed_z7nnww.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/5_v3dnrs-compressed_svhspj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350720/2_egxqmp-compressed_hnybrg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/3_pjp0sr-compressed_hnudyo.jpg"],CP=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Master 7 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],kP=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731350404/1_pcudqj-compressed_sbpmpu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350402/2-compressed_rudncg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350399/3-compressed_tjw0xv.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350396/4-compressed_x5k7tn.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350394/5-compressed_rxetai.jpg"],EP=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(be,{}),text:"32m²"},{icon:c.jsx(re,{}),text:"Ar condicionado"},{icon:c.jsx(He,{}),text:"Frigobar"},{icon:c.jsx(rt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Smart TV"},{icon:c.jsx(Oe,{}),text:"Cama king size"},{icon:c.jsx(Ce,{}),text:"Banheira relaxante"},{icon:c.jsx(re,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(qe,{}),text:"Varanda privativa"}],Description:"A Suíte Master 8 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],PP=()=>c.jsxs(c.Fragment,{children:[c.jsxs(pP,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx(Ve,{images:fP,suites:hP,reverse:!0,background:"#7AC4F350"}),c.jsx(Ve,{images:mP,suites:gP,reverse:!1,background:"#7AC4F350"}),c.jsx(Ve,{images:vP,suites:xP,reverse:!0,background:"#7AC4F350"}),c.jsx(Ve,{images:yP,suites:wP,reverse:!1,background:"#7AC4F350"}),c.jsx(Ve,{images:bP,suites:SP,reverse:!0,background:"#7AC4F350"}),c.jsx(Ve,{images:jP,suites:TP,reverse:!1,background:"#7AC4F350"}),c.jsx(Ve,{images:_P,suites:CP,reverse:!0,background:"#7AC4F350"}),c.jsx(Ve,{images:kP,suites:EP,reverse:!1,background:"#7AC4F350"}),c.jsx(Wi,{})]});function zP(){const{pathname:e}=Hr();return T.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function AP(){const e=Hr();return c.jsxs(c.Fragment,{children:[c.jsx(zP,{}),c.jsx(X7,{children:c.jsxs(g5,{location:e,children:[c.jsx(Dn,{path:"/",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(YC,{})})}),c.jsx(Dn,{path:"/sobre",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(Ck,{})})}),c.jsx(Dn,{path:"/mar",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(_E,{})})}),c.jsx(Dn,{path:"/serra",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(cE,{})})}),c.jsx(Dn,{path:"/event",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(gk,{})})}),c.jsx(Dn,{path:"/acomodaMar",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(PP,{})})}),c.jsx(Dn,{path:"/acomodaSerra",element:c.jsx(W.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(dP,{})})})]},e.pathname)})]})}function MP(){return c.jsxs(j5,{children:[c.jsx(IE,{}),c.jsx(AP,{})]})}iv(document.getElementById("root")).render(c.jsx(T.StrictMode,{children:c.jsx(MP,{})}));
