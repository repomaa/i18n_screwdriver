var n,t=(n=require("md5"))&&"object"==typeof n&&"default"in n?n.default:n;module.exports=function(n){n.screw=function(r,e){var l,o,u=t(r),i=null===(l=n.translations[n.locale])||void 0===l?void 0:l[u];void 0===i&&(i=function(n,t,r){return"translation missing: "+n.locale+"."+r}(n,0,r));var a=i.split("|"),c=a[1];return function(n,t){return n.replace(/%{([^{}]*)}/g,function(n,r){return t[r]})}(null!=(o=null!=c?c:a[0])?o:"",e)}};
//# sourceMappingURL=index.js.map
