(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},242:function(e,t,r){"use strict";r.r(t);var a=r(12),i=r(10),l=(r(230),r(231),r(233));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}class c extends l.a{constructor(e,...t){let{defaultValue:r=!1}=e;super(s(s({},Object(i.a)(e,["defaultValue"])),{},{defaultValue:r}),...t),Object(a.a)(this,"serialize",e=>e[this.path]),Object(a.a)(this,"deserialize",e=>e[this.path]),Object(a.a)(this,"getFilterGraphQL",({type:e,value:t})=>({["is"===e?""+this.path:`${this.path}_${e}`]:t})),Object(a.a)(this,"getFilterLabel",({label:e})=>`${this.label} ${e.toLowerCase()}`),Object(a.a)(this,"formatFilter",({label:e,value:t})=>`${this.getFilterLabel({label:e})}: ${t}`),Object(a.a)(this,"getFilterTypes",()=>[{type:"is",label:"Is",getInitialValue:()=>!0},{type:"not",label:"Is not",getInitialValue:()=>!0}])}}t.default=c}}]);