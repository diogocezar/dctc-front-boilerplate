!function r(a,l,u){function s(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var o=l[n]={exports:{}};a[n][0].call(o.exports,function(e){return s(a[n][1][e]||e)},o,o.exports,r,a,l,u)}return l[n].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(e,n,t){"use strict";var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}(),o=e("../modules/binds/shared-binds"),r=e("../modules/helpers/cookies"),a=e("../modules/helpers/mobile"),l=e("../modules/helpers/util"),u=e("../modules/helpers/validation"),s=e("../modules/loader/loader"),c=e("../modules/menu/menu"),f=e("../modules/plugins/plugin-input-mask"),d=e("../modules/plugins/plugin-nice-scroll"),m=e("../modules/plugins/plugin-owl-carousel"),p=e("../modules/plugins/plugin-scroll-reveal"),h=e("../modules/plugins/plugin-select2");window.cookies=new r.Cookies,window.mobile=new a.Mobile,window.util=new l.Util,window.validation=new u.Validation,window.loader=new s.Loader,window.loaded=!1;var v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=new c.Menu,this.sharedBinds=new o.SharedBinds,this.pluginInputMask=new f.PluginInputMask,this.pluginNiceScroll=new d.PluginNiceScroll,this.pluginOwlCarousel=new m.PluginOwlCarousel,this.pluginScrollReveal=new p.PluginScrollReveal,this.pluginSelect2=new h.PluginSelect2,this.execSample()}return i(e,[{key:"execSample",value:function(){console.log("Started Common.")}}]),e}();$(window).on("load",function(){window.loaded=!0,window.common=new v})},{"../modules/binds/shared-binds":2,"../modules/helpers/cookies":3,"../modules/helpers/mobile":4,"../modules/helpers/util":5,"../modules/helpers/validation":6,"../modules/loader/loader":7,"../modules/menu/menu":8,"../modules/plugins/plugin-input-mask":9,"../modules/plugins/plugin-nice-scroll":10,"../modules/plugins/plugin-owl-carousel":11,"../modules/plugins/plugin-scroll-reveal":12,"../modules/plugins/plugin-select2":13}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.SharedBinds=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}return i(e,[{key:"init",value:function(){}}]),e}()},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.Cookies=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,[{key:"get",value:function(e){e=e.toLowerCase();for(var n=document.cookie.split(";"),t=0;t<n.length;t++){var i=n[t].split("="),o=decodeURIComponent(i[0].trim().toLowerCase()),r=1<i.length?i[1]:"";if(o==e)return decodeURIComponent(r)}return null}},{key:"set",value:function(e,n){var t=new Date;t.setYear(t.getFullYear()+1);var i=encodeURIComponent(e)+"="+encodeURIComponent(n)+";expires="+t.toGMTString()+";path=/";document.cookie=i}},{key:"clear",value:function(e){this.set(e,"")}},{key:"remove",value:function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"}}]),e}()},{}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();i=navigator.userAgent||navigator.vendor||window.opera,(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4));t.Mobile=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.isMobile=null,this.mobileType=null,this.init()}return o(e,[{key:"init",value:function(){$.browser.mobile||$(document).width()<991?(this.isMobile=!0,this.mobileType=this.getType()):this.isMobile=!1}},{key:"getType",value:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return e.match(/iPad/i)||e.match(/iPhone/i)||e.match(/iPod/i)?"iOS":e.match(/Android/i)?"Android":void 0}}]),e}()},{}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.Util=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,[{key:"isEmpty",value:function(e){return""==e||null==e||null==e}},{key:"fetch",value:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(t){return new Promise(function(n,e){fetch(t).then(function(e){return e.json()}).then(function(e){n(e)})})})},{key:"$",value:function(e){if(!this.isEmpty(document.querySelector(e)))return document.querySelector(e)}}]),e}()},{}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t.Validation=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.util=window.util,this.error=null,this.focus=null,this.callBack=null,this.formId=null}return i(e,[{key:"setAction",value:function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;this.callBack=e,this.setButton(n,t)}},{key:"setButton",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,t=this,i='[data-bind="send"]';null!=e&&(i="#"+e+i),document.querySelector(i).addEventListener("click",function(e){e.preventDefault(),t.check(n)})}},{key:"check",value:function(){var o=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;this.error=!1;var n='[data-validate="true"]';null!=e&&(n="#"+e+n),[].concat(r(document.querySelectorAll(n))).map(function(e){o.focus=null;var n=[].concat(r(e.querySelectorAll('[data-check="required"]'))),t=[].concat(r(e.querySelectorAll('[data-check="email"]'))),i=[].concat(r(e.querySelectorAll('[data-check="select"]')));n.map(function(e){o.validate(e,"required")}),t.map(function(e){o.validate(e,"email")}),i.map(function(e){o.validate(e,"select")})}),this.error?this.focus.focus():null!=this.callBack&&this.callBack()}},{key:"resetError",value:function(e){e.classList.remove("error")}},{key:"setError",value:function(e){null==this.focus&&(this.focus=e),e.classList.add("error"),this.error=!0}},{key:"validate",value:function(e,n){switch(this.resetError(e),n){case"required":this.util.isEmpty(e.value)&&this.setError(e);break;case"email":/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim.test(e.value)&&!this.util.isEmpty(e.value)||this.setError(e);break;case"select":"0"==e.options[e.selectedIndex].value&&this.setError(e)}}}]),e}()},{}],7:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.Loader=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={delay:500,recheck:2e3,velocity:"slow",element:"#loader"},this.init()}return i(e,[{key:"init",value:function(){if(window.loaded)this.pageLoaded();else{var e=this;setTimeout(function(){console.log("Still Loading..."),e.init()},this.configs.recheck)}}},{key:"pageLoaded",value:function(){console.log("Okay, page is loaded!"),$(this.configs.element).delay(this.configs.delay).fadeOut(this.configs.velocity)}}]),e}()},{}],8:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.Menu=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={senseSpeed:5,previusScroll:0,imediate:10,openMenu:!1},this.init()}return i(e,[{key:"init",value:function(){this.setDebounce(),this.setHamburguer(),this.setLinks()}},{key:"debounce",value:function(i,o,r){var a=void 0;return function(){var e=this,n=arguments,t=r&&!a;clearTimeout(a),a=setTimeout(function(){a=null,r||i.apply(e,n)},o),t&&i.apply(e,n)}}},{key:"setHamburguer",value:function(){$(".hamburguer").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(".menu-mobile").toggleClass("active"),setTimeout(function(){$(".menu-mobile").toggleClass("end")},500),$(".menu-translate").hasClass("active")&&$(".menu-translate").toggleClass("active")})}},{key:"setDebounce",value:function(){var e=this;$(document).scroll(e.debounce(function(){e.go()},e.configs.imediate))}},{key:"go",value:function(){var e=$(document).scrollTop(),n=1*$(window).height()/6;e-this.configs.senseSpeed>this.configs.previousScroll&&n<e?($("#header-menu").addClass("off"),$("#header-menu").removeClass("on"),$(".menu-mobile").hasClass("active")&&($(".hamburguer").toggleClass("active"),$(".menu-mobile").toggleClass("active"),setTimeout(function(){$(".menu-mobile").toggleClass("end")},500))):e+this.configs.senseSpeed<this.configs.previousScroll&&n<e&&($("#header-menu").addClass("on"),$("#header-menu").removeClass("off")),this.configs.previousScroll=e}},{key:"setLinks",value:function(){$(".go-menu").on("click",function(e){e.preventDefault(),$(".menu-mobile").hasClass("active")&&($(".hamburguer").toggleClass("active"),$(".menu-mobile").toggleClass("active"),setTimeout(function(){$(".menu-mobile").toggleClass("end")},500));var n=$(this),t=30;"#trabalhe-conosco"===n.attr("href")&&(t=0),$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top-t},1e3,"easeOutQuart",function(){"#seja-um-franqueado"!==n.attr("href")&&($("#header-menu").addClass("off"),$("#header-menu").removeClass("on"))})})}}]),e}()},{}],9:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.PluginInputMask=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}return i(e,[{key:"init",value:function(){$(".mask").inputmask()}}]),e}()},{}],10:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.PluginNiceScroll=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={cursorwidth:"8px",zindex:1e3,scrollspeed:100,mousescrollstep:60,cursoropacitymax:.8,cursorcolor:"#F94615",horizrailenabled:!1,cursorborder:"none",cursorborderradius:"0px"},this.init()}return i(e,[{key:"init",value:function(){$("html").niceScroll(this.configs)}}]),e}()},{}],11:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.PluginOwlCarousel=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={loop:!0,nav:!1,pagination:!0,items:1,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,singleItem:!0,smartSpeed:700},this.init()}return i(e,[{key:"init",value:function(){$(".carousel-default").owlCarousel(this.configs),$(".carousel-default").on("mouseout",function(){$(".carousel-default").trigger("stop.owl.autoplay"),$(".carousel-default").trigger("play.owl.autoplay",[3e3])})}}]),e}()},{}],12:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.PluginScrollReveal=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={animationSet1:{duration:1200,origin:"left",reset:!0,delay:100,scale:.9},animationSet2:{duration:1200,origin:"top",reset:!0,delay:100,scale:.9},animationSet3:{duration:1200,origin:"bottom",reset:!0,delay:800,scale:.9},animationSet4:{duration:1200,origin:"right",reset:!0,delay:100,scale:.9}},this.init()}return i(e,[{key:"init",value:function(){window.sr=ScrollReveal(),sr.reveal(".animation-1",this.configs.animationSet1),sr.reveal(".animation-2",this.configs.animationSet2,50),sr.reveal(".animation-3",this.configs.animationSet3),sr.reveal(".animation-4",this.configs.animationSet4)}}]),e}()},{}],13:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();t.PluginSelect2=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.selects=["#exampleSelect1","#exampleSelect2"],this.configs={minimumResultsForSearch:-1,width:"100%"},this.init()}return i(e,[{key:"init",value:function(){var n=this;this.selects.map(function(e){$(e).select2(n.configs)})}}]),e}()},{}]},{},[1]);