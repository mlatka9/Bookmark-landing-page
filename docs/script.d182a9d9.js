parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var e=document.querySelectorAll(".faq-question-box-top");function t(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function r(e){if("BUTTON"===e.target.tagName){var t=this.dataset.currentFeatureNumber,r=e.target.dataset.featureNumber;if(t!==r){var a=document.querySelector(".mark");this.dataset.currentFeatureNumber=r,a.style.left="".concat(33.3*(r-1),"%");var n=document.querySelector(".features-box-bottom img"),s=document.querySelector(".features-box-bottom-side h2"),i=document.querySelector(".features-box-bottom-side p");n.style.transform="translateX(-10rem)",n.style.opacity="0",s.style.transform="translateY(-5rem)",s.style.opacity="0",i.style.transform="translateY(-5rem)",i.style.opacity="0",n.addEventListener("transitionend",function e(){this.removeEventListener("transitionend",e);n.src=o[r-1].imageUrl;s.textContent=o[r-1].header;i.textContent=o[r-1].paragraph;n.style.opacity="";n.style.transform="";s.style.opacity="";s.style.transform="";i.style.opacity="";i.style.transform=""})}}}e.forEach(function(e){return e.addEventListener("click",function(e){var t=e.target.closest(".faq-question-box");if(t){var r=Number.parseFloat(window.getComputedStyle(t.querySelector(".faq-answer")).marginTop),o=Number.parseFloat(window.getComputedStyle(t.querySelector(".faq-question-box-top")).marginTop),a=t.querySelector(".faq-answer").offsetHeight+t.querySelector(".faq-question-box-top").offsetHeight+2*r+2*o;"true"===t.dataset.hidden?(t.style.height=a+"px",t.dataset.hidden="false"):(t.style.height="",t.dataset.hidden="true")}})}),document.querySelector("#contact-form").addEventListener("submit",function(e){if(e.preventDefault(),t(e.target["email-input"].value))return console.log("good email"),void(e.target.dataset.error="false");e.target.dataset.error="true"}),document.querySelector(".features-box ul").addEventListener("click",r);var o=[{imageUrl:"./resources/illustration-features-tab-1.svg",header:"Bookmark in one click",paragraph:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."},{imageUrl:"./resources/illustration-features-tab-2.svg",header:"Intelligent search",paragraph:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."},{imageUrl:"./resources/illustration-features-tab-3.svg",header:"Share your bookmarks",paragraph:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."}],a=document.querySelector(".mobile-nav-box"),n=document.querySelectorAll(".hamburger-menu, .mobile-nav-close");function s(){"open"===a.dataset.mobileNav?i():l()}function i(){a.dataset.mobileNav="hidden",document.querySelector(".hamburger-menu").style.opacity="",document.querySelector("nav > .logo").style.opacity="",document.body.style.overflow=""}function l(){a.dataset.mobileNav="open",document.querySelector(".hamburger-menu").style.opacity="0",document.querySelector("nav > .logo").style.opacity="0",document.body.style.overflow="hidden"}n.forEach(function(e){return e.addEventListener("click",s)}),window.addEventListener("resize",function(){document.documentElement.clientWidth>633&&i()}),document.querySelectorAll(".mobile-nav-box li, .mobile-nav-box .socials-box > i").forEach(function(e){return e.addEventListener("click",function(){i()})});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.d182a9d9.js.map