(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+DWa":function(t,e,r){"use strict";r.r(e),r.d(e,"listingQuery",(function(){return d}));r("pJf4"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q8oJ"),r("8npG"),r("nWfQ"),r("LagC");var n=r("q1tI"),a=r.n(n),o=r("TJpk"),i=r.n(o),c=r("Wbzz"),u=r("hpys"),p=r("1wty"),l=r("okzv"),s=r("IpnI"),f=r.n(s);r("zfG9");function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=function(t){var e,r;r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n;n=o;function o(){return t.apply(this,arguments)||this}var s=o.prototype;return s.renderPaging=function(){var t=this.props.pageContext,e=t.currentPageNum,r=t.pageCount,n=e-1==1?"/":"/"+(e-1)+"/",o="/"+(e+1)+"/",i=1===e,u=e===r;return a.a.createElement("div",{className:"paging-container"},!i&&a.a.createElement(c.Link,{to:n},"Previous"),m(Array(r)).map((function(t,e){var r=e+1;return a.a.createElement(c.Link,{key:"listing-page-"+r,to:1===r?"/":"/"+r+"/"},r)})),!u&&a.a.createElement(c.Link,{to:o},"Next"))},s.render=function(){var t=this.props.data.allMarkdownRemark.edges;return a.a.createElement(u.a,null,a.a.createElement(i.a,{title:f.a.siteTitle}),a.a.createElement(l.a,null),a.a.createElement("main",{className:"listing-container"},a.a.createElement(p.a,{postEdges:t}),this.renderPaging()))},o}(a.a.Component);e.default=g;var d="4165795685"},zfG9:function(t,e,r){}}]);
//# sourceMappingURL=component---src-templates-listing-jsx-545da42f584f8cb4ca7c.js.map