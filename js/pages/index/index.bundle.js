!function r(a,c,u){function l(e,n){if(!c[e]){if(!a[e]){var o="function"==typeof require&&require;if(!n&&o)return o(e,!0);if(f)return f(e,!0);var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var i=c[e]={exports:{}};a[e][0].call(i.exports,function(n){return l(a[e][1][n]||n)},i,i.exports,r,a,c,u)}return c[e].exports}for(var f="function"==typeof require&&require,n=0;n<u.length;n++)l(u[n]);return l}({1:[function(n,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=function(){function t(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();o.ActionsIndex=function(){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.executor=n,this.Validation1=new window.validation,this.Validation2=new window.validation,this.formGetcher=new window.formGetcher,this.autoload()}return t(e,[{key:"autoload",value:function(){this.bindButtons(),this.bindValidations()}},{key:"bindButtons",value:function(){$("#scroll").on("click",function(n){$("html, body").animate({scrollTop:$("footer").offset().top},2e3)})}},{key:"bindValidations",value:function(){var n=this;this.Validation1.setAction(function(){console.log(n.formGetcher.getData("form1")),n.executor.execSendForm1()},"button1","form1"),this.Validation2.setAction(function(){console.log(n.formGetcher.getData("form2")),n.executor.execSendForm2()},"button2","form2")}}]),e}()},{}],2:[function(n,e,o){"use strict";var t=function(){function t(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),i=n("./actions/actions-index");var r=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.Util=window.util,this.autoload()}return t(n,[{key:"autoload",value:function(){this.execJoker(),this.execJokerAxios()}},{key:"execJoker",value:function(){var e=this;this.Util.fetch("http://api.icndb.com/jokes/random").then(function(n){e.Util.$(".load-joke").innerHTML=n.value.joke})}},{key:"execJokerAxios",value:function(){var e=this;axios.get("http://api.icndb.com/jokes/random").then(function(n){e.Util.$(".load-joke-axios").innerHTML=n.data.value.joke})}},{key:"execSendForm1",value:function(){console.log("Form 1 Sent")}},{key:"execSendForm2",value:function(){console.log("Form 2 Sent")}}]),n}();$(document).ready(function(){window.index=new r,window.actionsIndex=new i.ActionsIndex(window.index)})},{"./actions/actions-index":1}]},{},[2]);