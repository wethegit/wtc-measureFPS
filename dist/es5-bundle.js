var WTCGL=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.start()}var e,r,i;return e=t,(r=[{key:"start",value:function(){!0!==this.running&&(this.elapsedTime=0,this.lastTime=0,this.current=0,this.low=60,this.averageOverall=60,this.average60=60,this.ticks=0,this.running=!0,requestAnimationFrame(this.run.bind(this)))}},{key:"stop",value:function(){this.running=!1}},{key:"run",value:function(t){var e;this.elapsedTime=(t-(this.lastTime||t))/1e3,this.lastTime=t,this.ticks+=1,this.current=1/this.elapsedTime,this.current<this.low&&(this.low=this.current),isNaN(parseInt(this.current))||(this.averageOverall=(this.ticks*this.averageOverall+this.current)/(this.ticks+1),this.ticks%60==0&&(this.average60=60),e=this.ticks%60+1,this.average60=(e*this.average60+this.current)/(e+1)),!0===this.running&&requestAnimationFrame(this.run.bind(this))}}])&&n(e.prototype,r),i&&n(e,i),t}(),s=null;getFPSMeasure=function(){return null===s&&(s=new i),s},e.default=getFPSMeasure}]);