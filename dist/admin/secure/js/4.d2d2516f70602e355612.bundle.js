(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(t,e){t.exports=function(t,e){if(null==t)return{};var i,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)i=l[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}},230:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},232:function(t,e,i){var a=i(229);t.exports=function(t,e){if(null==t)return{};var i,n,l=a(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(l[i]=t[i])}return l}},240:function(t,e,i){"use strict";i.r(e);var a=i(12),n=(i(232),i(230),i(231),i(233));class l extends n.a{constructor(...t){super(...t),Object(a.a)(this,"getFilterGraphQL",({type:t,value:e})=>({["is_i"===t?this.path+"_i":`${this.path}_${t}`]:e})),Object(a.a)(this,"getFilterLabel",({label:t})=>`${this.label} ${t.toLowerCase()}`),Object(a.a)(this,"formatFilter",({label:t,value:e})=>`${this.getFilterLabel({label:t})}: "${e}"`),Object(a.a)(this,"getFilterTypes",()=>[{type:"contains_i",label:"Contains",getInitialValue:()=>""},{type:"not_contains_i",label:"Does not contain",getInitialValue:()=>""},{type:"is_i",label:"Is exactly",getInitialValue:()=>""},{type:"not_i",label:"Is not exactly",getInitialValue:()=>""},{type:"starts_with_i",label:"Starts with",getInitialValue:()=>""},{type:"not_starts_with_i",label:"Does not start with",getInitialValue:()=>""},{type:"ends_with_i",label:"Ends with",getInitialValue:()=>""},{type:"not_ends_with_i",label:"Does not end with",getInitialValue:()=>""}])}}e.default=l}}]);