(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{39:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),i=n(22);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title,r=e.description;return o.a.createElement(a.g,{item:!0,md:4},o.a.createElement("div",{className:t.container},o.a.createElement(a.q,{variant:"title",color:"inherit",className:t.title},n),o.a.createElement(a.q,{variant:"paragraph",color:"inherit",className:t.description},r)))}}])&&u(n.prototype,r),i&&u(n,i),t}();t.a=Object(i.withStyles)({container:{padding:"0.5em 1em",border:"1px dotted #AAA"},title:{color:"#333",marginBottom:"10px",fontWeight:"bold"},description:{margin:0,color:"#666"}})(p)},551:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(552),{page:e.exports.default}})},552:function(e,t,n){"use strict";n.r(t);var r=n(23),o=n.n(r),a=n(0),i=n.n(a),c=n(14),u=n(2),l=n(49),s=n(121),f=n(50),p=n(64),m=n(65),y=n(39);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,g(t).apply(this,arguments))}var n,r,a,p,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,i.a.Component),n=t,r=[{key:"render",value:function(){var e=this.props.projects;return i.a.createElement(m.a,null,i.a.createElement(u.g,{container:!0,spacing:16},e.map(this.renderProject)))}},{key:"renderProject",value:function(e){var t=e.balance/e.goal*100;return i.a.createElement(u.g,{item:!0,md:6,key:e.address},i.a.createElement(u.c,null,i.a.createElement(u.e,null,i.a.createElement(u.q,{gutterBottom:!0,variant:"headline",component:"h2"},e.description),i.a.createElement(u.h,{style:{margin:"10px 0"},color:"primary",variant:"determinate",value:t}),i.a.createElement(u.g,{container:!0,spacing:16},i.a.createElement(y.a,{title:"".concat(c.a.utils.fromWei(e.goal,"ether")," ETH"),description:"募资上限"}),i.a.createElement(y.a,{title:"".concat(c.a.utils.fromWei(e.minInvest,"ether")," ETH"),description:"最小投资金额"}),i.a.createElement(y.a,{title:"".concat(c.a.utils.fromWei(e.maxInvest,"ether")," ETH"),description:"最大投资金额"}),i.a.createElement(y.a,{title:"".concat(e.investorCount,"人"),description:"参投人数"}),i.a.createElement(y.a,{title:"".concat(c.a.utils.fromWei(e.balance,"ether")," ETH"),description:"已募资金额"}))),i.a.createElement(u.d,null,i.a.createElement(l.Link,{route:"/projects/".concat(e.address)},i.a.createElement(u.b,{size:"small",color:"primary"},"立即投资")),i.a.createElement(l.Link,{route:"/projects/".concat(e.address)},i.a.createElement(u.b,{size:"small",color:"secondary"},"查看详情")))))}}],a=[{key:"getInitialProps",value:(p=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,e.next=3,s.a.methods.getProjects().call();case 3:return n=e.sent,e.next=6,Promise.all(n.map(function(e){return Object(f.a)(e).methods.getSummary().call()}));case 6:return r=e.sent,console.log({summaryList:r}),a=n.map(function(e,t){var n=d(Object.values(r[t]),8);return{address:e,description:n[0],minInvest:n[1],maxInvest:n[2],goal:n[3],balance:n[4],investorCount:n[5],paymentCount:n[6],owner:n[7]}}),console.log(a),e.abrupt("return",{projects:a});case 11:case"end":return e.stop()}},e,this)}),b=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=p.apply(e,t);function a(e){h(o,n,r,a,i,"next",e)}function i(e){h(o,n,r,a,i,"throw",e)}a(void 0)})},function(e){return b.apply(this,arguments)})}],r&&v(n.prototype,r),a&&v(n,a),t}();t.default=Object(p.a)(j)}},[[551,1,0]]]);