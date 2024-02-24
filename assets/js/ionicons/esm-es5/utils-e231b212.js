import{g as getAssetPath}from"./index-5514a13d.js";var CACHED_MAP;var getIconMap=function(){if(typeof window==="undefined"){return new Map}else{if(!CACHED_MAP){var r=window;r.Ionicons=r.Ionicons||{};CACHED_MAP=r.Ionicons.map=r.Ionicons.map||new Map}return CACHED_MAP}};var addIcons=function(r){var t=getIconMap();Object.keys(r).forEach((function(e){return t.set(e,r[e])}))};var getUrl=function(r){var t=getSrc(r.src);if(t){return t}t=getName(r.name,r.icon,r.mode,r.ios,r.md);if(t){return getNamedUrl(t)}if(r.icon){t=getSrc(r.icon);if(t){return t}t=getSrc(r.icon[r.mode]);if(t){return t}}return null};var getNamedUrl=function(r){var t=getIconMap().get(r);if(t){return t}return getAssetPath("svg/".concat(r,".svg"))};var getName=function(r,t,e,n,i){e=(e&&toLower(e))==="ios"?"ios":"md";if(n&&e==="ios"){r=toLower(n)}else if(i&&e==="md"){r=toLower(i)}else{if(!r&&t&&!isSrc(t)){r=t}if(isStr(r)){r=toLower(r)}}if(!isStr(r)||r.trim()===""){return null}var o=r.replace(/[a-z]|-|\d/gi,"");if(o!==""){return null}return r};var getSrc=function(r){if(isStr(r)){r=r.trim();if(isSrc(r)){return r}}return null};var isSrc=function(r){return r.length>0&&/(\/|\.)/.test(r)};var isStr=function(r){return typeof r==="string"};var toLower=function(r){return r.toLowerCase()};var inheritAttributes=function(r,t){if(t===void 0){t=[]}var e={};t.forEach((function(t){if(r.hasAttribute(t)){var n=r.getAttribute(t);if(n!==null){e[t]=r.getAttribute(t)}r.removeAttribute(t)}}));return e};var isRTL=function(r){if(r){if(r.dir!==""){return r.dir.toLowerCase()==="rtl"}}return(document===null||document===void 0?void 0:document.dir.toLowerCase())==="rtl"};export{addIcons as a,inheritAttributes as b,getName as c,isRTL as d,getUrl as g,isStr as i};