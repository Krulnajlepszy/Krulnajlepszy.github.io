"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3626],{4029:function(a,b,c){c.d(b,{oL:function(){return h},sY:function(){return i}});var d=c(6),e=c(2094),f=function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},g=function(){for(var a=0,b=0,c=arguments.length;b<c;b++)a+=arguments[b].length;for(var d=Array(a),e=0,b=0;b<c;b++)for(var f=arguments[b],g=0,h=f.length;g<h;g++,e++)d[e]=f[g];return d},h=function(a){var b=a.meta,c={};return b.forEach(function(a){["target","title","rel"].includes(a.id)&&(c[a.id]=a.value)}),c};function i(a,b){var c,i,j=b.metaTransformer||h;return(0,d.sY)(b.adapter,a,g(b.customNodeRules||[],[(0,d.SZ)(e.C_,function(a){var b=a.adapter.renderFragment,c=a.key,d=a.children;return b(d,c)}),(0,d.SZ)(e.RF,function(a){var b=a.adapter.renderNode,c=a.key,d=a.children;return b("p",{key:c},d)}),(0,d.SZ)(e.nq,function(a){var b=a.adapter.renderNode,c=a.node,d=a.key,e=a.children;return b("bulleted"===c.style?"ul":"ol",{key:d},e)}),(0,d.SZ)(e.OD,function(a){var b=a.adapter.renderNode,c=a.key,d=a.children;return b("li",{key:c},d)}),(0,d.SZ)(e.b2,function(a){var b=a.adapter.renderNode,c=a.key,d=a.node,e=a.children,f=d.attribution?g(e||[],[b("footer",{key:"footer"},d.attribution),]):e;return b("blockquote",{key:c},f)}),(0,d.SZ)(e.J$,function(a){var b=a.adapter,c=b.renderNode,d=b.renderText,e=a.key,f=a.node;return c("pre",{key:e,"data-language":f.language},c("code",null,d(f.code)))}),(0,d.SZ)(e.u$,function(a){var b=a.adapter.renderNode,c=a.key,d=a.children,e=a.node,g=e.meta?j({node:e,meta:e.meta}):{};return b("a",f(f({},g||{}),{key:c,href:e.url}),d)}),(0,d.SZ)(e.UZ,function(a){var b=a.adapter.renderNode,c=a.key;return b("hr",{key:c})}),(0,d.SZ)(e.Xy,function(a){var b=a.node,c=a.adapter.renderNode,d=a.children,e=a.key;return c("h"+b.level,{key:e},d)}),(i=(c={customMarkRules:b.customMarkRules||[]}).customMarkRules,(0,d.SZ)(e.dn,function(a){var b,c,d,e,f,g,h,j,k=a.adapter,l=a.key;return(a.node.marks||[]).reduce(function(a,b){if(a){var c=i.find(function(a){return a.appliable(b)});return c?c.apply({adapter:k,key:l,mark:b,children:a}):k.renderNode(function(a){switch(a){case"emphasis":return"em";case"underline":return"u";case"strikethrough":return"del";case"highlight":return"mark";default:return a}}(b),{key:l},a)}},(c=(b=a).node,d=b.key,e=b.adapter,f=e.renderNode,g=e.renderText,h=e.renderFragment,j=c.value.split(/\n/),0===j.length?g(c.value,d):h(j.slice(1).reduce(function(a,b,c){return a.concat([f("br",{key:d+"-br-"+c}),g(b,d+"-line-"+c),])},[g(j[0],d+"-line-first")]),d)))})),]))}},2094:function(a,b,c){c.d(b,{g8:function(){return s},Lq:function(){return A},b2:function(){return z},"J$":function(){return B},qk:function(){return H},Xy:function(){return t},HJ:function(){return E},"C$":function(){return D},"u$":function(){return C},nq:function(){return x},OD:function(){return y},RF:function(){return w},C_:function(){return v},dn:function(){return u},L9:function(){return G},UZ:function(){return F}});var d,e,f="blockquote",g="block",h="code",i="heading",j="inlineItem",k="itemLink",l="link",m="listItem",n="list",o="paragraph",p="root",q="span",r="thematicBreak";function s(a){return"children"in a}function t(a){return a.type===i}function u(a){return a.type===q}function v(a){return a.type===p}function w(a){return a.type===o}function x(a){return a.type===n}function y(a){return a.type===m}function z(a){return a.type===f}function A(a){return a.type===g}function B(a){return a.type===h}function C(a){return a.type===l}function D(a){return a.type===k}function E(a){return a.type===j}function F(a){return a.type===r}function G(a){return a&&"value"in a&&H(a.value)}function H(a){return a&&"schema"in a&&"document"in a}(d={})[f]=[o],d[g]=[],d[h]=[],d[i]="inlineNodes",d[j]=[],d[k]="inlineNodes",d[l]="inlineNodes",d[m]=[o,n],d[n]=[m],d[o]="inlineNodes",d[p]=[f,h,n,o,i,g,r,],d[q]=[],d[r]=[],(e={})[f]=["children","attribution"],e[g]=["item"],e[h]=["language","highlight","code"],e[i]=["level","children","style"],e[j]=["item"],e[k]=["item","children","meta"],e[l]=["url","children","meta"],e[m]=["children"],e[n]=["style","children"],e[o]=["children","style"],e[p]=["children"],e[q]=["value","marks"],e[r]=[]},6:function(a,b,c){c.d(b,{su:function(){return i},sY:function(){return l},SZ:function(){return j}});var d=c(2094);function e(a,b){for(var c=0;c<a.length;c++){var d=a[c];Array.isArray(d)?e(d,b):b.push(d)}}var f,g=(f=function(a,b){return(f=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},function(a,b){function c(){this.constructor=a}f(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),h=function(){for(var a=0,b=0,c=arguments.length;b<c;b++)a+=arguments[b].length;for(var d=Array(a),e=0,b=0;b<c;b++)for(var f=arguments[b],g=0,h=f.length;g<h;g++,e++)d[e]=f[g];return d},i=function(a){function b(c,d){var e=a.call(this,c)||this;return e.node=d,Object.setPrototypeOf(e,b.prototype),e}return g(b,a),b}(Error),j=function(a,b){return{appliable:a,apply:function(a){return b(a)}}};function k(a,b,c,f,g){var j,l,m=(0,d.g8)(b)?(j=b.children.map(function(c,d){return k(a,c,"t-"+d,h([b],f),g)}).filter(function(a){return!!a}),e(j,l=[]),l):void 0,n=g.find(function(a){return a.appliable(b)});if(n)return n.apply({adapter:a,node:b,children:m,key:c,ancestors:f});throw new i("Don't know how to render a node with type \""+b.type+'". Please specify a custom renderRule for it!',b)}function l(a,b,c){return b?k(a,(0,d.L9)(b)?b.value.document:(0,d.qk)(b)?b.document:b,"t-0",[],c):null}},4493:function(a,b,c){c.d(b,{rZ:function(){return k}});var d=c(4029),e=c(6),f=c(2094),g=c(6168),h=function(a,b,c){if(c||2===arguments.length)for(var d,e=0,f=b.length;e<f;e++)!d&&e in b||(d||(d=Array.prototype.slice.call(b,0,e)),d[e]=b[e]);return a.concat(d||Array.prototype.slice.call(b))},i={renderNode:g.createElement,renderFragment:function(a,b){return g.createElement(g.Fragment,{key:b},a)},renderText:function(a,b){return a}};function j(a,b){return(0,g.isValidElement)(a)&&null===a.key?(0,g.cloneElement)(a,{key:b}):a}function k(a){var b=a.data,c=a.renderInlineRecord,k=a.renderLinkToRecord,l=a.renderBlock,m=a.renderText,n=a.renderNode,o=a.renderFragment,p=a.customMarkRules,q=a.customRules,r=a.customNodeRules,s=a.metaTransformer,t=(0,d.sY)(b,{adapter:{renderText:m||i.renderText,renderNode:n||i.renderNode,renderFragment:o||i.renderFragment},metaTransformer:s,customMarkRules:p,customNodeRules:h([(0,e.SZ)(f.HJ,function(a){var d=a.node,g=a.key;if(!c)throw new e.su("The Structured Text document contains an 'inlineItem' node, but no 'renderInlineRecord' prop is specified!",d);if(!(0,f.L9)(b)||!b.links)throw new e.su("The document contains an 'itemLink' node, but the passed data prop is not a Structured Text GraphQL response, or data.links is not present!",d);var h=b.links.find(function(a){return a.id===d.item});if(!h)throw new e.su("The Structured Text document contains an 'inlineItem' node, but cannot find a record with ID ".concat(d.item," inside data.links!"),d);return j(c({record:h}),g)}),(0,e.SZ)(f.C$,function(a){var c=a.node,g=a.key,h=a.children;if(!k)throw new e.su("The Structured Text document contains an 'itemLink' node, but no 'renderLinkToRecord' prop is specified!",c);if(!(0,f.L9)(b)||!b.links)throw new e.su("The document contains an 'itemLink' node, but the passed data prop is not a Structured Text GraphQL response, or data.links is not present!",c);var i=b.links.find(function(a){return a.id===c.item});if(!i)throw new e.su("The Structured Text document contains an 'itemLink' node, but cannot find a record with ID ".concat(c.item," inside data.links!"),c);return j(k({record:i,children:h,transformedMeta:c.meta?(s||d.oL)({node:c,meta:c.meta}):null}),g)}),(0,e.SZ)(f.Lq,function(a){var c=a.node,d=a.key;if(!l)throw new e.su("The Structured Text document contains a 'block' node, but no 'renderBlock' prop is specified!",c);if(!(0,f.L9)(b)||!b.blocks)throw new e.su("The document contains an 'block' node, but the passed data prop is not a Structured Text GraphQL response, or data.blocks is not present!",c);var g=b.blocks.find(function(a){return a.id===c.item});if(!g)throw new e.su("The Structured Text document contains a 'block' node, but cannot find a record with ID ".concat(c.item," inside data.blocks!"),c);return j(l({record:g}),d)})],r||q||[],!0)});return"string"==typeof t?g.createElement(g.Fragment,null,t):t||null}},6315:function(a,b,c){function d(){return(d=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function e(){return d.apply(this,arguments)}c.d(b,{Z:function(){return e}})}}])