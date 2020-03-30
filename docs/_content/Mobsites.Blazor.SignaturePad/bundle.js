!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";n.r(e),e.default=n.p+"bundle.css"},function(t,e,n){"use strict";function i(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a,r=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}
/*!
 * Signature Pad v3.0.0-beta.3 | https://github.com/szimek/signature_pad
 * (c) 2018 Szymon Nowak | Released under the MIT license
 */n.r(e);var u=function(){function t(e,n,i){a(this,t),this.x=e,this.y=n,this.time=i||Date.now()}return s(t,[{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}},{key:"velocityFrom",value:function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}]),t}(),c=function(){function t(e,n,i,o,r,s){a(this,t),this.startPoint=e,this.control2=n,this.control1=i,this.endPoint=o,this.startWidth=r,this.endWidth=s}return s(t,[{key:"length",value:function(){for(var t,e,n=0,i=0;i<=10;i+=1){var o=i/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),r=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=a-t,u=r-e;n+=Math.sqrt(s*s+u*u)}t=a,e=r}return n}},{key:"point",value:function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t}}],[{key:"fromPoints",value:function(e,n){var i=this.calculateControlPoints(e[0],e[1],e[2]).c2,o=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new t(e[1],i,o,e[2],n.start,n.end)}},{key:"calculateControlPoints",value:function(t,e,n){var i=t.x-e.x,o=t.y-e.y,a=e.x-n.x,r=e.y-n.y,s=(t.x+e.x)/2,c=(t.y+e.y)/2,l=(e.x+n.x)/2,h=(e.y+n.y)/2,d=Math.sqrt(i*i+o*o),v=Math.sqrt(a*a+r*r),f=v/(d+v),g=l+(s-l)*f,m=h+(c-h)*f,y=e.x-g,p=e.y-m;return{c1:new u(s+y,c+p),c2:new u(l+y,h+p)}}}]),t}();function l(t){var e,n,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=0,r=null,s=function(){a=Date.now(),r=null,e=t.apply(n,i),r||(n=null,i=[])};return function(){var u=Date.now(),c=o-(u-a);n=this;for(var l=arguments.length,h=new Array(l),d=0;d<l;d++)h[d]=arguments[d];return i=h,c<=0||c>o?(r&&(clearTimeout(r),r=null),a=u,e=t.apply(n,i),r||(n=null,i=[])):r||(r=window.setTimeout(s,c)),e}}var h=function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this.canvas=e,this.options=i,this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(t.preventDefault(),1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){if(t.target===n.canvas){t.preventDefault();var e=t.changedTouches[0];n._strokeEnd(e)}},this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.throttle?this._strokeMoveUpdate=l(t.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=t.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._ctx=e.getContext("2d"),this.clear(),this.on()}return s(t,[{key:"clear",value:function(){var t=this._ctx,e=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}},{key:"fromDataURL",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,o=new Image,a=n.ratio||window.devicePixelRatio||1,r=n.width||this.canvas.width/a,s=n.height||this.canvas.height/a;this._reset(),o.onload=function(){e._ctx.drawImage(o,0,0,r,s),i&&i()},o.onerror=function(t){i&&i(t)},o.src=t,this._isEmpty=!1}},{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/png",e=arguments.length>1?arguments[1]:void 0;switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}},{key:"on",value:function(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}},{key:"off",value:function(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}},{key:"isEmpty",value:function(){return this._isEmpty}},{key:"fromData",value:function(t){var e=this;this.clear(),this._fromData(t,(function(t){var n=t.color,i=t.curve;return e._drawCurve({color:n,curve:i})}),(function(t){var n=t.color,i=t.point;return e._drawDot({color:n,point:i})})),this._data=t}},{key:"toData",value:function(){return this._data}},{key:"_strokeBegin",value:function(t){var e={color:this.penColor,points:[]};this._data.push(e),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)}},{key:"_strokeUpdate",value:function(t){var e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],a=o.points,r=a.length>0&&a[a.length-1],s=!!r&&i.distanceTo(r)<=this.minDistance,u=o.color;if(!r||!r||!s){var c=this._addPoint(i);r?c&&this._drawCurve({color:u,curve:c}):this._drawDot({color:u,point:i}),a.push({time:i.time,x:i.x,y:i.y})}}},{key:"_strokeEnd",value:function(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}},{key:"_handlePointerEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}},{key:"_handleMouseEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}},{key:"_handleTouchEvents",value:function(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}},{key:"_reset",value:function(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}},{key:"_createPoint",value:function(t,e){var n=this.canvas.getBoundingClientRect();return new u(t-n.left,e-n.top,(new Date).getTime())}},{key:"_addPoint",value:function(t){var e=this._lastPoints;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveWidths(e[1],e[2]),i=c.fromPoints(e,n);return e.shift(),i}return null}},{key:"_calculateCurveWidths",value:function(t,e){var n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n),o={end:i,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=i,o}},{key:"_strokeWidth",value:function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}},{key:"_drawCurveSegment",value:function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}},{key:"_drawCurve",value:function(t){var e=t.color,n=t.curve,i=this._ctx,o=n.endWidth-n.startWidth,a=2*Math.floor(n.length());i.beginPath(),i.fillStyle=e;for(var r=0;r<a;r+=1){var s=r/a,u=s*s,c=u*s,l=1-s,h=l*l,d=h*l,v=d*n.startPoint.x;v+=3*h*s*n.control1.x,v+=3*l*u*n.control2.x,v+=c*n.endPoint.x;var f=d*n.startPoint.y;f+=3*h*s*n.control1.y,f+=3*l*u*n.control2.y,f+=c*n.endPoint.y;var g=n.startWidth+c*o;this._drawCurveSegment(v,f,g)}i.closePath(),i.fill()}},{key:"_drawDot",value:function(t){var e=t.color,n=t.point,i=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(n.x,n.y,o),i.closePath(),i.fillStyle=e,i.fill()}},{key:"_fromData",value:function(t,e,n){var o,a=i(t);try{for(a.s();!(o=a.n()).done;){var r=o.value,s=r.color,c=r.points;if(c.length>1)for(var l=0;l<c.length;l+=1){var h=c[l],d=new u(h.x,h.y,h.time);this.penColor=s,0===l&&this._reset();var v=this._addPoint(d);v&&e({color:s,curve:v})}else this._reset(),n({color:s,point:c[0]})}}catch(t){a.e(t)}finally{a.f()}}},{key:"_toSVG",value:function(){var t=this,e=this._data,n=Math.max(window.devicePixelRatio||1,1),i=this.canvas.width/n,o=this.canvas.height/n,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",this.canvas.width.toString()),a.setAttribute("height",this.canvas.height.toString()),this._fromData(e,(function(t){var e=t.color,n=t.curve,i=document.createElement("path");if(!(isNaN(n.control1.x)||isNaN(n.control1.y)||isNaN(n.control2.x)||isNaN(n.control2.y))){var o="M ".concat(n.startPoint.x.toFixed(3),",").concat(n.startPoint.y.toFixed(3)," ")+"C ".concat(n.control1.x.toFixed(3),",").concat(n.control1.y.toFixed(3)," ")+"".concat(n.control2.x.toFixed(3),",").concat(n.control2.y.toFixed(3)," ")+"".concat(n.endPoint.x.toFixed(3),",").concat(n.endPoint.y.toFixed(3));i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*n.endWidth).toFixed(3)),i.setAttribute("stroke",e),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),a.appendChild(i)}}),(function(e){var n=e.color,i=e.point,o=document.createElement("circle"),r="function"==typeof t.dotSize?t.dotSize():t.dotSize;o.setAttribute("r",r.toString()),o.setAttribute("cx",i.x.toString()),o.setAttribute("cy",i.y.toString()),o.setAttribute("fill",n),a.appendChild(o)}));var r='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+' viewBox="'.concat(0," ").concat(0," ").concat(i," ").concat(o,'"')+' width="'.concat(i,'"')+' height="'.concat(o,'"')+">",s=a.innerHTML;if(void 0===s){var u=document.createElement("dummy"),c=a.childNodes;u.innerHTML="";for(var l=0;l<c.length;l+=1)u.appendChild(c[l].cloneNode(!0));s=u.innerHTML}return"data:image/svg+xml;base64,"+btoa(r+s+"</svg>")}}]),t}();window.Blazor.SignaturePad={init:function(t){window.Blazor.SignaturePad.instance=t,window.Blazor.SignaturePad.self=new h(document.getElementById("signature-pad--canvas")),window.Blazor.SignaturePad.self.onEnd=d,v(),x()},toDataURL:function(t){var e=null;switch(t){case"png":e=f("image/png");break;case"svg":e=f("image/svg+xml");break;case"jpg":e=g()}return e}};var d=function(){window.Blazor.SignaturePad.instance.invokeMethodAsync("OnEnd")},v=function(){m(),y(),p(),w(),_()},f=function(t){return window.Blazor.SignaturePad.self.isEmpty()?null:window.Blazor.SignaturePad.self.toDataURL(t)},g=function(){if(window.Blazor.SignaturePad.self.isEmpty())return null;var t=window.Blazor.SignaturePad.self.toData();window.Blazor.SignaturePad.self.backgroundColor="rgb(255, 255, 255)",window.Blazor.SignaturePad.self.fromData(t);var e=f("image/jpeg");return window.Blazor.SignaturePad.self.backgroundColor="rgba(0,0,0,0)",window.Blazor.SignaturePad.self.fromData(t),e},m=function(){window.onresize=x},y=function(){var t=document.getElementById("signature-pad--pen-color");t&&t.addEventListener("change",(function(e){window.Blazor.SignaturePad.self.penColor=t.value}))},p=function(){var t=document.getElementById("signature-pad--clear");t&&t.addEventListener("click",(function(t){window.Blazor.SignaturePad.self.clear(),d()}))},w=function(){var t=document.getElementById("signature-pad--undo");t&&t.addEventListener("click",(function(t){var e=window.Blazor.SignaturePad.self.toData();e&&(e.pop(),window.Blazor.SignaturePad.self.fromData(e),d())}))},_=function(){var t=document.querySelector(".signature-pad--save");t&&t.addEventListener("click",(function(t){switch(this.id){case"signature-pad--save-png":(e=f())&&k(e,"signature.png");break;case"signature-pad--save-jpg":(e=g())&&k(e,"signature.jpg");break;case"signature-pad--save-svg":var e;(e=f("image/svg+xml"))&&k(e,"signature.svg")}}))};function x(){var t=document.getElementById("signature-pad--canvas");if(t){var e=window.Blazor.SignaturePad.self.toData(),n=Math.max(window.devicePixelRatio||1,1);t.width=t.offsetWidth*n,t.height=t.offsetHeight*n,t.getContext("2d").scale(n,n),window.Blazor.SignaturePad.self.clear(),window.Blazor.SignaturePad.self.fromData(e)}}function k(t,e){var n=document.createElement("a");n.style="display: none",n.href=t,n.download=e,n.target="_blank",document.body.appendChild(n),n.click()}}]);