(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{13:function(e,n,t){e.exports=t(22)},18:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(9),u=t.n(r),i=t(5),l=(t(18),t(24)),s=(t(19),t(20),function(e){var n=e.children,t=e.value,a=e.classProp,r=e.mainFunc;return c.a.createElement("button",{className:a,onClick:function(){return r(t)}},n)}),o=function(e){var n=e.upperDisplay,t=e.lowerDisplay,a=e.displayValue,r=e.displayResult,u=e.resetDisplay,i=function(e,n,t,a){return c.a.createElement(s,{classProp:n,value:e,mainFunc:a},t)};return c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"upper-display"},n),c.a.createElement("p",{className:"lower-display"},t),c.a.createElement("div",{className:"sub-container"},i("AC","reset red","AC",u),i("/","divide light","/",a),i("*","multiply light","X",a),i("7","seven dark","7",a),i("8","eight dark","8",a),i("9","nine dark","9",a),i("-","minus light","-",a),i("4","four dark","4",a),i("5","five dark","5",a),i("6","six dark","6",a),i("+","plus light","+",a),i("1","one dark","1",a),i("2","two dark","2",a),i("3","three dark","3",a),i("=","equals blue","=",r),i("0","zero dark","0",a),i(".","dot dark",".",a)))},d=function(e){var n=e.name;return c.a.createElement("p",{className:"ref"},"Coded by ".concat(n))},p=function(){var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)("0"),s=Object(i.a)(u,2),p=s[0],f=s[1],m=Object(a.useState)(!1),b=Object(i.a)(m,2),v=b[0],k=b[1],y=Object(a.useState)(""),E=Object(i.a)(y,2),g=E[0],h=E[1];return c.a.createElement("div",{className:"page-wrapper"},c.a.createElement(o,{upperDisplay:t,lowerDisplay:p,displayValue:function(e){var n=["+","-","/","*"],t=["0","1","2","3","4","5","6","7","8","9"];return f((function(a){if(v){if(t.includes(e))return r(e),k(!1),e;if(n.includes(e))return r("".concat(g).concat(e)),k(!1),e;if("."===e)return r("0."),k(!1),"0."}return t.includes(e)&&a.length>=20?(r((function(e){return e})),k(!1),a):(t.includes(e)||n.includes(e))&&"0"===a?(r(e),k(!1),e):t.includes(e)&&"0"!==a?(r((function(n){return"".concat(n).concat(e)})),k(!1),n.includes(a)?e:"".concat(a).concat(e)):n.includes(e)&&"0"!==a?n.includes(a)?(r((function(e){return e})),k(!1),a):(r((function(n){return"".concat(n).concat(e)})),k(!1),e):"."===e&&"0"===a?(r("0."),k(!1),"0."):"."===e&&"0"!==a?(k(!1),n.includes(a)?(r((function(n){return"".concat(n,"0").concat(e)})),"0".concat(e)):"0."===a||a.includes(".")?(r((function(e){return e})),a):(r((function(n){return"".concat(n).concat(e)})),"".concat(a).concat(e))):void 0}))},displayResult:function(){var e=["+","-","/","*"];return r((function(n){var t;t=e.includes(n[n.length-1])?n.substring(0,n.length-1):n.substring(0);var a=Object(l.a)(t);return f(a),k(!0),h(a),"".concat(t,"=").concat(a)}))},resetDisplay:function(){r(""),f("0"),k(!1),h("")}}),c.a.createElement(d,{name:"Egbedokun Olayinka"}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bf93d5ca.chunk.js.map