// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
var faqQuestionTopBoxes = document.querySelectorAll('.faq-question-box-top');
faqQuestionTopBoxes.forEach(function (box) {
  return box.addEventListener('click', function (event) {
    var questionBox = event.target.closest('.faq-question-box');
    if (!questionBox) return;
    var answerMarginTop = Number.parseFloat(window.getComputedStyle(questionBox.querySelector('.faq-answer')).marginTop);
    var questionMarginTop = Number.parseFloat(window.getComputedStyle(questionBox.querySelector('.faq-question-box-top')).marginTop);
    var answerHeight = questionBox.querySelector('.faq-answer').offsetHeight;
    var questionHeight = questionBox.querySelector('.faq-question-box-top').offsetHeight;
    var newheight = answerHeight + questionHeight + answerMarginTop * 2 + questionMarginTop * 2;

    if (questionBox.dataset.hidden === 'true') {
      questionBox.style.height = newheight + 'px';
      questionBox.dataset.hidden = 'false';
    } else {
      questionBox.style.height = '';
      questionBox.dataset.hidden = 'true';
    }
  });
});
document.querySelector('#contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var email = event.target["email-input"].value;

  if (validateEmail(email)) {
    console.log('good email');
    event.target.dataset.error = 'false';
    return;
  }

  event.target.dataset.error = 'true';
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

document.querySelector('.features-box ul').addEventListener('click', switchFeature);

function switchFeature(event) {
  if (event.target.tagName !== 'BUTTON') return;
  var currentFeatureNumber = this.dataset.currentFeatureNumber;
  var nextFeatureNumber = event.target.dataset.featureNumber;
  if (currentFeatureNumber === nextFeatureNumber) return;
  var featuresMark = document.querySelector('.mark');
  this.dataset.currentFeatureNumber = nextFeatureNumber;
  featuresMark.style.left = "".concat((nextFeatureNumber - 1) * 33.3, "%");
  var image = document.querySelector('.features-box-bottom img');
  var header = document.querySelector('.features-box-bottom-side h2');
  var paragraph = document.querySelector('.features-box-bottom-side p');
  image.style.transform = 'translateX(-10rem)';
  image.style.opacity = '0';
  header.style.transform = 'translateY(-5rem)';
  header.style.opacity = '0';
  paragraph.style.transform = 'translateY(-5rem)';
  paragraph.style.opacity = '0';
  image.addEventListener('transitionend', switchImages);

  function switchImages() {
    this.removeEventListener('transitionend', switchImages);
    image.src = featuresArray[nextFeatureNumber - 1].imageUrl;
    header.textContent = featuresArray[nextFeatureNumber - 1].header;
    paragraph.textContent = featuresArray[nextFeatureNumber - 1].paragraph;
    image.style.opacity = '';
    image.style.transform = '';
    header.style.opacity = '';
    header.style.transform = '';
    paragraph.style.opacity = '';
    paragraph.style.transform = '';
  }
}

var featuresArray = [{
  "imageUrl": "./resources/illustration-features-tab-1.svg",
  "header": "Bookmark in one click",
  "paragraph": "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
}, {
  "imageUrl": "./resources/illustration-features-tab-2.svg",
  "header": "Intelligent search",
  "paragraph": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
}, {
  "imageUrl": "./resources/illustration-features-tab-3.svg",
  "header": "Share your bookmarks",
  "paragraph": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}];
var mobileNav = document.querySelector('.mobile-nav-box');
var mobileNavToggleButtons = document.querySelectorAll('.hamburger-menu, .mobile-nav-close');
mobileNavToggleButtons.forEach(function (button) {
  return button.addEventListener('click', toggleMobileMenu);
});

function toggleMobileMenu() {
  if (mobileNav.dataset.mobileNav === "open") {
    hideMobileNav();
  } else {
    showMobileNav();
  }
}

function hideMobileNav() {
  mobileNav.dataset.mobileNav = "hidden";
  document.querySelector('.hamburger-menu').style.opacity = '';
  document.querySelector('nav > .logo').style.opacity = '';
  document.body.style.overflow = "";
}

function showMobileNav() {
  mobileNav.dataset.mobileNav = "open";
  document.querySelector('.hamburger-menu').style.opacity = '0';
  document.querySelector('nav > .logo').style.opacity = '0';
  document.body.style.overflow = "hidden";
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth > 633) {
    hideMobileNav();
  }
});
document.querySelectorAll('.mobile-nav-box li, .mobile-nav-box .socials-box > i').forEach(function (button) {
  return button.addEventListener('click', function () {
    hideMobileNav();
  });
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59086" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map