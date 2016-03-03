(function(S, X, u) {
  'use strict';
  function G(a) {
    return function() {
      var b = arguments[0], d;
      d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.4.8/" + (a ? a + "/" : "") + b;
      for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
        var c = encodeURIComponent, e;
        e = arguments[b];
        e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
        d += c(e)
      }
      return Error(d)
    }
  }

  function za(a) {
    if (null == a || Xa(a)) {
      return !1;
    }
    if (I(a) || E(a) || B && a instanceof B) {
      return !0;
    }
    var b = "length" in Object(a) && a.length;
    return Q(b) && (0 <= b && b - 1 in a || "function" == typeof a.item)
  }

  function n(a, b, d) {
    var c, e;
    if (a) {
      if (z(a)) {
        for (c in a) {
          "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
        }
      } else if (I(a) || za(a)) {
        var f = "object" !== typeof a;
        c = 0;
        for (e = a.length; c < e; c++) {
          (f || c in a) && b.call(d, a[c], c, a)
        }
      } else if (a.forEach && a.forEach !== n) {
        a.forEach(b, d, a);
      } else if (nc(a)) {
        for (c in a) {
          b.call(d, a[c], c, a);
        }
      } else if ("function" === typeof a.hasOwnProperty) {
        for (c in a) {
          a.hasOwnProperty(c) &&
          b.call(d, a[c], c, a);
        }
      } else {
        for (c in a) {
          qa.call(a, c) && b.call(d, a[c], c, a);
        }
      }
    }
    return a
  }

  function oc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
      b.call(d, a[c[e]], c[e]);
    }
    return c
  }

  function pc(a) {
    return function(b, d) {
      a(d, b)
    }
  }

  function Td() {
    return ++nb
  }

  function Mb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];
      if (H(g) || z(g)) {
        for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
          var m = h[k], r = g[m];
          d && H(r) ? da(r) ? a[m] = new Date(r.valueOf()) : Ma(r) ? a[m] = new RegExp(r) : r.nodeName ? a[m] = r.cloneNode(!0) :
            Nb(r) ? a[m] = r.clone() : (H(a[m]) || (a[m] = I(r) ? [] : {}), Mb(a[m], [r], !0)) : a[m] = r
        }
      }
    }
    c ? a.$$hashKey = c : delete a.$$hashKey;
    return a
  }

  function M(a) {
    return Mb(a, ra.call(arguments, 1), !1)
  }

  function Ud(a) {
    return Mb(a, ra.call(arguments, 1), !0)
  }

  function ea(a) {
    return parseInt(a, 10)
  }

  function Ob(a, b) {
    return M(Object.create(a), b)
  }

  function x() {
  }

  function Ya(a) {
    return a
  }

  function na(a) {
    return function() {
      return a
    }
  }

  function qc(a) {
    return z(a.toString) && a.toString !== sa
  }

  function q(a) {
    return "undefined" === typeof a
  }

  function y(a) {
    return "undefined" !== typeof a
  }

  function H(a) {
    return null !== a && "object" === typeof a
  }

  function nc(a) {
    return null !== a && "object" === typeof a && !rc(a)
  }

  function E(a) {
    return "string" === typeof a
  }

  function Q(a) {
    return "number" === typeof a
  }

  function da(a) {
    return "[object Date]" === sa.call(a)
  }

  function z(a) {
    return "function" === typeof a
  }

  function Ma(a) {
    return "[object RegExp]" === sa.call(a)
  }

  function Xa(a) {
    return a && a.window === a
  }

  function Za(a) {
    return a && a.$evalAsync && a.$watch
  }

  function $a(a) {
    return "boolean" === typeof a
  }

  function sc(a) {
    return a && Q(a.length) &&
      Vd.test(sa.call(a))
  }

  function Nb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
  }

  function Wd(a) {
    var b = {};
    a = a.split(",");
    var d;
    for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }
    return b
  }

  function ta(a) {
    return F(a.nodeName || a[0] && a[0].nodeName)
  }

  function ab(a, b) {
    var d = a.indexOf(b);
    0 <= d && a.splice(d, 1);
    return d
  }

  function bb(a, b) {
    function d(a, b) {
      var d = b.$$hashKey, e;
      if (I(a)) {
        e = 0;
        for (var f = a.length; e < f; e++) {
          b.push(c(a[e]))
        }
      } else if (nc(a)) {
        for (e in a) {
          b[e] = c(a[e]);
        }
      } else if (a && "function" === typeof a.hasOwnProperty) {
        for (e in a) {
          a.hasOwnProperty(e) &&
          (b[e] = c(a[e]));
        }
      } else {
        for (e in a) {
          qa.call(a, e) && (b[e] = c(a[e]));
        }
      }
      d ? b.$$hashKey = d : delete b.$$hashKey;
      return b
    }

    function c(a) {
      if (!H(a)) {
        return a;
      }
      var b = e.indexOf(a);
      if (-1 !== b) {
        return f[b];
      }
      if (Xa(a) || Za(a)) {
        throw Aa("cpws");
      }
      var b = !1, c;
      I(a) ? (c = [], b = !0) : sc(a) ? c = new a.constructor(a) : da(a) ? c = new Date(a.getTime()) : Ma(a) ? (c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), c.lastIndex = a.lastIndex) : z(a.cloneNode) ? c = a.cloneNode(!0) : (c = Object.create(rc(a)), b = !0);
      e.push(a);
      f.push(c);
      return b ? d(a, c) : c
    }

    var e = [], f = [];
    if (b) {
      if (sc(b)) {
        throw Aa("cpta");
      }
      if (a === b) {
        throw Aa("cpi");
      }
      I(b) ? b.length = 0 : n(b, function(a, c) {
        "$$hashKey" !== c && delete b[c]
      });
      e.push(a);
      f.push(b);
      return d(a, b)
    }
    return c(a)
  }

  function ia(a, b) {
    if (I(a)) {
      b = b || [];
      for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d]
      }
    } else if (H(a)) {
      for (d in b = b || {}, a) {
        if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) {
          b[d] = a[d];
        }
      }
    }
    return b || a
  }

  function ma(a, b) {
    if (a === b) {
      return !0;
    }
    if (null === a || null === b) {
      return !1;
    }
    if (a !== a && b !== b) {
      return !0;
    }
    var d = typeof a, c;
    if (d == typeof b && "object" == d) {
      if (I(a)) {
        if (!I(b)) {
          return !1;
        }
        if ((d = a.length) == b.length) {
          for (c =
                 0; c < d; c++) {
            if (!ma(a[c], b[c])) {
              return !1;
            }
          }
          return !0
        }
      } else {
        if (da(a)) {
          return da(b) ? ma(a.getTime(), b.getTime()) : !1;
        }
        if (Ma(a)) {
          return Ma(b) ? a.toString() == b.toString() : !1;
        }
        if (Za(a) || Za(b) || Xa(a) || Xa(b) || I(b) || da(b) || Ma(b)) {
          return !1;
        }
        d = $();
        for (c in a) {
          if ("$" !== c.charAt(0) && !z(a[c])) {
            if (!ma(a[c], b[c])) {
              return !1;
            }
            d[c] = !0
          }
        }
        for (c in b) {
          if (!(c in d) && "$" !== c.charAt(0) && y(b[c]) && !z(b[c])) {
            return !1;
          }
        }
        return !0
      }
    }
    return !1
  }

  function cb(a, b, d) {
    return a.concat(ra.call(b, d))
  }

  function tc(a, b) {
    var d = 2 < arguments.length ? ra.call(arguments, 2) :
      [];
    return !z(b) || b instanceof RegExp ? b : d.length ? function() {
      return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d)
    } : function() {
      return arguments.length ? b.apply(a, arguments) : b.call(a)
    }
  }

  function Xd(a, b) {
    var d = b;
    "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Xa(b) ? d = "$WINDOW" : b && X === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
    return d
  }

  function db(a, b) {
    if ("undefined" === typeof a) {
      return u;
    }
    Q(b) || (b = b ? 2 : null);
    return JSON.stringify(a, Xd, b)
  }

  function uc(a) {
    return E(a) ? JSON.parse(a) : a
  }

  function vc(a,
              b) {
    var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
    return isNaN(d) ? b : d
  }

  function Pb(a, b, d) {
    d = d ? -1 : 1;
    var c = vc(b, a.getTimezoneOffset());
    b = a;
    a = d * (c - a.getTimezoneOffset());
    b = new Date(b.getTime());
    b.setMinutes(b.getMinutes() + a);
    return b
  }

  function ua(a) {
    a = B(a).clone();
    try {
      a.empty()
    } catch (b) {
    }
    var d = B("<div>").append(a).html();
    try {
      return a[0].nodeType === Na ? F(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
        return "<" + F(b)
      })
    } catch (c) {
      return F(d)
    }
  }

  function wc(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {
    }
  }

  function xc(a) {
    var b = {};
    n((a || "").split("&"), function(a) {
      var c, e, f;
      a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = wc(e), y(e) && (f = y(f) ? wc(f) : !0, qa.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
    });
    return b
  }

  function Qb(a) {
    var b = [];
    n(a, function(a, c) {
      I(a) ? n(a, function(a) {
        b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)))
      }) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)))
    });
    return b.length ? b.join("&") : ""
  }

  function ob(a) {
    return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi,
      "=").replace(/%2B/gi, "+")
  }

  function ja(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
  }

  function Yd(a, b) {
    var d, c, e = Oa.length;
    for (c = 0; c < e; ++c) {
      if (d = Oa[c] + b, E(d = a.getAttribute(d))) {
        return d;
      }
    }
    return null
  }

  function Zd(a, b) {
    var d, c, e = {};
    n(Oa, function(b) {
      b += "app";
      !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
    });
    n(Oa, function(b) {
      b += "app";
      var e;
      !d && (e = a.querySelector("[" + b.replace(":",
          "\\:") + "]")) && (d = e, c = e.getAttribute(b))
    });
    d && (e.strictDi = null !== Yd(d, "strict-di"), b(d, c ? [c] : [], e))
  }

  function yc(a, b, d) {
    H(d) || (d = {});
    d = M({strictDi: !1}, d);
    var c = function() {
      a = B(a);
      if (a.injector()) {
        var c = a[0] === X ? "document" : ua(a);
        throw Aa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }
      b = b || [];
      b.unshift([
        "$provide", function(b) {
          b.value("$rootElement", a)
        }
      ]);
      d.debugInfoEnabled && b.push([
        "$compileProvider", function(a) {
          a.debugInfoEnabled(!0)
        }
      ]);
      b.unshift("ng");
      c = eb(b, d.strictDi);
      c.invoke([
        "$rootScope",
        "$rootElement", "$compile", "$injector", function(a, b, c, d) {
          a.$apply(function() {
            b.data("$injector", d);
            c(b)(a)
          })
        }
      ]);
      return c
    }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
    S && e.test(S.name) && (d.debugInfoEnabled = !0, S.name = S.name.replace(e, ""));
    if (S && !f.test(S.name)) {
      return c();
    }
    S.name = S.name.replace(f, "");
    fa.resumeBootstrap = function(a) {
      n(a, function(a) {
        b.push(a)
      });
      return c()
    };
    z(fa.resumeDeferredBootstrap) && fa.resumeDeferredBootstrap()
  }

  function $d() {
    S.name = "NG_ENABLE_DEBUG_INFO!" + S.name;
    S.location.reload()
  }

  function ae(a) {
    a = fa.element(a).injector();
    if (!a) {
      throw Aa("test");
    }
    return a.get("$$testability")
  }

  function zc(a, b) {
    b = b || "_";
    return a.replace(be, function(a, c) {
      return (c ? b : "") + a.toLowerCase()
    })
  }

  function ce() {
    var a;
    if (!Ac) {
      var b = pb();
      (oa = q(b) ? S.jQuery : b ? S[b] : u) && oa.fn.on ? (B = oa, M(oa.fn, {scope: Pa.scope, isolateScope: Pa.isolateScope, controller: Pa.controller, injector: Pa.injector, inheritedData: Pa.inheritedData}), a = oa.cleanData, oa.cleanData = function(b) {
        var c;
        if (Rb) {
          Rb = !1;
        } else {
          for (var e = 0, f; null != (f = b[e]); e++) {
            (c =
              oa._data(f, "events")) && c.$destroy && oa(f).triggerHandler("$destroy");
          }
        }
        a(b)
      }) : B = N;
      fa.element = B;
      Ac = !0
    }
  }

  function qb(a, b, d) {
    if (!a) {
      throw Aa("areq", b || "?", d || "required");
    }
    return a
  }

  function Qa(a, b, d) {
    d && I(a) && (a = a[a.length - 1]);
    qb(z(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
    return a
  }

  function Ra(a, b) {
    if ("hasOwnProperty" === a) {
      throw Aa("badname", b);
    }
  }

  function Bc(a, b, d) {
    if (!b) {
      return a;
    }
    b = b.split(".");
    for (var c, e = a, f = b.length, g = 0; g < f; g++) {
      c = b[g], a && (a = (e = a)[c]);
    }
    return !d &&
    z(a) ? tc(e, a) : a
  }

  function rb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
      if (c || a[e] !== b) {
        c || (c = B(ra.call(a, 0, e))), c.push(b);
      }
    }
    return c || a
  }

  function $() {
    return Object.create(null)
  }

  function de(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c())
    }

    var d = G("$injector"), c = G("ng");
    a = b(a, "angular", Object);
    a.$$minErr = a.$$minErr || G;
    return b(a, "module", function() {
      var a = {};
      return function(f, g, h) {
        if ("hasOwnProperty" === f) {
          throw c("badname", "module");
        }
        g && a.hasOwnProperty(f) && (a[f] = null);
        return b(a, f, function() {
          function a(b,
                     d, e, f) {
            f || (f = c);
            return function() {
              f[e || "push"]([b, d, arguments]);
              return v
            }
          }

          function b(a, d) {
            return function(b, e) {
              e && z(e) && (e.$$moduleName = f);
              c.push([a, d, arguments]);
              return v
            }
          }

          if (!g) {
            throw d("nomod", f);
          }
          var c = [], e = [], t = [], A = a("$injector", "invoke", "push", e), v = {
            _invokeQueue: c, _configBlocks: e, _runBlocks: t, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide",
              "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), config: A, run: function(a) {
              t.push(a);
              return this
            }
          };
          h && A(h);
          return v
        })
      }
    })
  }

  function ee(a) {
    M(a, {
      bootstrap: yc, copy: bb, extend: M, merge: Ud, equals: ma, element: B, forEach: n, injector: eb, noop: x, bind: tc, toJson: db, fromJson: uc, identity: Ya, isUndefined: q, isDefined: y, isString: E, isFunction: z, isObject: H, isNumber: Q, isElement: Nb, isArray: I,
      version: fe, isDate: da, lowercase: F, uppercase: sb, callbacks: {counter: 0}, getTestability: ae, $$minErr: G, $$csp: Ba, reloadWithDebugInfo: $d
    });
    Sb = de(S);
    Sb("ng", ["ngLocale"], [
      "$provide", function(a) {
        a.provider({$$sanitizeUri: ge});
        a.provider("$compile", Cc).directive({
          a: he, input: Dc, textarea: Dc, form: ie, script: je, select: ke, style: le, option: me, ngBind: ne, ngBindHtml: oe, ngBindTemplate: pe, ngClass: qe, ngClassEven: re, ngClassOdd: se, ngCloak: te, ngController: ue, ngForm: ve, ngHide: we, ngIf: xe, ngInclude: ye, ngInit: ze, ngNonBindable: Ae,
          ngPluralize: Be, ngRepeat: Ce, ngShow: De, ngStyle: Ee, ngSwitch: Fe, ngSwitchWhen: Ge, ngSwitchDefault: He, ngOptions: Ie, ngTransclude: Je, ngModel: Ke, ngList: Le, ngChange: Me, pattern: Ec, ngPattern: Ec, required: Fc, ngRequired: Fc, minlength: Gc, ngMinlength: Gc, maxlength: Hc, ngMaxlength: Hc, ngValue: Ne, ngModelOptions: Oe
        }).directive({ngInclude: Pe}).directive(tb).directive(Ic);
        a.provider({
          $anchorScroll: Qe, $animate: Re, $animateCss: Se, $$animateQueue: Te, $$AnimateRunner: Ue, $browser: Ve, $cacheFactory: We, $controller: Xe, $document: Ye, $exceptionHandler: Ze,
          $filter: Jc, $$forceReflow: $e, $interpolate: af, $interval: bf, $http: cf, $httpParamSerializer: df, $httpParamSerializerJQLike: ef, $httpBackend: ff, $xhrFactory: gf, $location: hf, $log: jf, $parse: kf, $rootScope: lf, $q: mf, $$q: nf, $sce: of, $sceDelegate: pf, $sniffer: qf, $templateCache: rf, $templateRequest: sf, $$testability: tf, $timeout: uf, $window: vf, $$rAF: wf, $$jqLite: xf, $$HashMap: yf, $$cookieReader: zf
        })
      }
    ])
  }

  function fb(a) {
    return a.replace(Af, function(a, d, c, e) {
      return e ? c.toUpperCase() : c
    }).replace(Bf, "Moz$1")
  }

  function Kc(a) {
    a = a.nodeType;
    return 1 === a || !a || 9 === a
  }

  function Lc(a, b) {
    var d, c, e = b.createDocumentFragment(), f = [];
    if (Tb.test(a)) {
      d = d || e.appendChild(b.createElement("div"));
      c = (Cf.exec(a) || ["", ""])[1].toLowerCase();
      c = ka[c] || ka._default;
      d.innerHTML = c[1] + a.replace(Df, "<$1></$2>") + c[2];
      for (c = c[0]; c--;) {
        d = d.lastChild;
      }
      f = cb(f, d.childNodes);
      d = e.firstChild;
      d.textContent = ""
    } else {
      f.push(b.createTextNode(a));
    }
    e.textContent = "";
    e.innerHTML = "";
    n(f, function(a) {
      e.appendChild(a)
    });
    return e
  }

  function N(a) {
    if (a instanceof N) {
      return a;
    }
    var b;
    E(a) && (a = U(a),
      b = !0);
    if (!(this instanceof N)) {
      if (b && "<" != a.charAt(0)) {
        throw Ub("nosel");
      }
      return new N(a)
    }
    if (b) {
      b = X;
      var d;
      a = (d = Ef.exec(a)) ? [b.createElement(d[1])] : (d = Lc(a, b)) ? d.childNodes : []
    }
    Mc(this, a)
  }

  function Vb(a) {
    return a.cloneNode(!0)
  }

  function ub(a, b) {
    b || vb(a);
    if (a.querySelectorAll) {
      for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) {
        vb(d[c])
      }
    }
  }

  function Nc(a, b, d, c) {
    if (y(c)) {
      throw Ub("offargs");
    }
    var e = (c = wb(a)) && c.events, f = c && c.handle;
    if (f) {
      if (b) {
        var g = function(b) {
          var c = e[b];
          y(d) && ab(c || [], d);
          y(d) && c && 0 < c.length ||
          (a.removeEventListener(b, f, !1), delete e[b])
        };
        n(b.split(" "), function(a) {
          g(a);
          xb[a] && g(xb[a])
        })
      } else {
        for (b in e) {
          "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
        }
      }
    }
  }

  function vb(a, b) {
    var d = a.ng339, c = d && gb[d];
    c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Nc(a)), delete gb[d], a.ng339 = u))
  }

  function wb(a, b) {
    var d = a.ng339, d = d && gb[d];
    b && !d && (a.ng339 = d = ++Ff, d = gb[d] = {events: {}, data: {}, handle: u});
    return d
  }

  function Wb(a, b, d) {
    if (Kc(a)) {
      var c = y(d), e = !c && b && !H(b), f = !b;
      a = (a = wb(a,
          !e)) && a.data;
      if (c) {
        a[b] = d;
      } else {
        if (f) {
          return a;
        }
        if (e) {
          return a && a[b];
        }
        M(a, b)
      }
    }
  }

  function yb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
  }

  function zb(a, b) {
    b && a.setAttribute && n(b.split(" "), function(b) {
      a.setAttribute("class", U((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(b) + " ", " ")))
    })
  }

  function Ab(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      n(b.split(" "),
        function(a) {
          a = U(a);
          -1 === d.indexOf(" " + a + " ") && (d += a + " ")
        });
      a.setAttribute("class", U(d))
    }
  }

  function Mc(a, b) {
    if (b) {
      if (b.nodeType) {
        a[a.length++] = b;
      } else {
        var d = b.length;
        if ("number" === typeof d && b.window !== b) {
          if (d) {
            for (var c = 0; c < d; c++) {
              a[a.length++] = b[c]
            }
          }
        } else {
          a[a.length++] = b
        }
      }
    }
  }

  function Oc(a, b) {
    return Bb(a, "$" + (b || "ngController") + "Controller")
  }

  function Bb(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);
    for (b = I(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) {
        if (y(d = B.data(a, b[c]))) {
          return d;
        }
      }
      a = a.parentNode || 11 === a.nodeType &&
        a.host
    }
  }

  function Pc(a) {
    for (ub(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild)
    }
  }

  function Xb(a, b) {
    b || ub(a);
    var d = a.parentNode;
    d && d.removeChild(a)
  }

  function Gf(a, b) {
    b = b || S;
    if ("complete" === b.document.readyState) {
      b.setTimeout(a);
    } else {
      B(b).on("load", a)
    }
  }

  function Qc(a, b) {
    var d = Cb[b.toLowerCase()];
    return d && Rc[ta(a)] && d
  }

  function Hf(a, b) {
    var d = function(c, d) {
      c.isDefaultPrevented = function() {
        return c.defaultPrevented
      };
      var f = b[d || c.type], g = f ? f.length : 0;
      if (g) {
        if (q(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function() {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c)
          }
        }
        c.isImmediatePropagationStopped = function() {
          return !0 === c.immediatePropagationStopped
        };
        var k = f.specialHandlerWrapper || If;
        1 < g && (f = ia(f));
        for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || k(a, c, f[l])
        }
      }
    };
    d.elem = a;
    return d
  }

  function If(a, b, d) {
    d.call(a, b)
  }

  function Jf(a, b, d) {
    var c = b.relatedTarget;
    c && (c === a || Kf.call(a, c)) || d.call(a, b)
  }

  function xf() {
    this.$get = function() {
      return M(N,
        {
          hasClass: function(a, b) {
            a.attr && (a = a[0]);
            return yb(a, b)
          }, addClass: function(a, b) {
          a.attr && (a = a[0]);
          return Ab(a, b)
        }, removeClass: function(a, b) {
          a.attr && (a = a[0]);
          return zb(a, b)
        }
        })
    }
  }

  function Ca(a, b) {
    var d = a && a.$$hashKey;
    if (d) {
      return "function" === typeof d && (d = a.$$hashKey()), d;
    }
    d = typeof a;
    return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Td)() : d + ":" + a
  }

  function Sa(a, b) {
    if (b) {
      var d = 0;
      this.nextUid = function() {
        return ++d
      }
    }
    n(a, this.put, this)
  }

  function Lf(a) {
    return (a = a.toString().replace(Sc, "").match(Tc)) ?
    "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
  }

  function eb(a, b) {
    function d(a) {
      return function(b, c) {
        if (H(b)) {
          n(b, pc(a));
        } else {
          return a(b, c)
        }
      }
    }

    function c(a, b) {
      Ra(a, "service");
      if (z(b) || I(b)) {
        b = t.instantiate(b);
      }
      if (!b.$get) {
        throw Da("pget", a);
      }
      return r[a + "Provider"] = b
    }

    function e(a, b) {
      return function() {
        var c = v.invoke(b, this);
        if (q(c)) {
          throw Da("undef", a);
        }
        return c
      }
    }

    function f(a, b, d) {
      return c(a, {$get: !1 !== d ? e(a, b) : b})
    }

    function g(a) {
      qb(q(a) || I(a), "modulesToLoad", "not an array");
      var b = [], c;
      n(a, function(a) {
        function d(a) {
          var b,
            c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b], f = t.get(e[0]);
            f[e[1]].apply(f, e[2])
          }
        }

        if (!m.get(a)) {
          m.put(a, !0);
          try {
            E(a) ? (c = Sb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(t.invoke(a)) : I(a) ? b.push(t.invoke(a)) : Qa(a, "module")
          } catch (e) {
            throw I(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Da("modulerr", a, e.stack || e.message || e);
          }
        }
      });
      return b
    }

    function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] ===
            k) {
            throw Da("cdep", b + " <- " + l.join(" <- "));
          }
          return a[b]
        }
        try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e)
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift()
        }
      }

      function e(a, c, f, g) {
        "string" === typeof f && (g = f, f = null);
        var h = [], k = eb.$$annotate(a, b, g), l, m, t;
        m = 0;
        for (l = k.length; m < l; m++) {
          t = k[m];
          if ("string" !== typeof t) {
            throw Da("itkn", t);
          }
          h.push(f && f.hasOwnProperty(t) ? f[t] : d(t, g))
        }
        I(a) && (a = a[l]);
        return a.apply(c, h)
      }

      return {
        invoke: e, instantiate: function(a, b, c) {
          var d = Object.create((I(a) ? a[a.length - 1] : a).prototype ||
            null);
          a = e(a, d, b, c);
          return H(a) || z(a) ? a : d
        }, get: d, annotate: eb.$$annotate, has: function(b) {
          return r.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
        }
      }
    }

    b = !0 === b;
    var k = {}, l = [], m = new Sa([], !0), r = {
      $provide: {
        provider: d(c), factory: d(f), service: d(function(a, b) {
          return f(a, [
            "$injector", function(a) {
              return a.instantiate(b)
            }
          ])
        }), value: d(function(a, b) {
          return f(a, na(b), !1)
        }), constant: d(function(a, b) {
          Ra(a, "constant");
          r[a] = b;
          A[a] = b
        }), decorator: function(a, b) {
          var c = t.get(a + "Provider"), d = c.$get;
          c.$get = function() {
            var a =
              v.invoke(d, c);
            return v.invoke(b, null, {$delegate: a})
          }
        }
      }
    }, t = r.$injector = h(r, function(a, b) {
      fa.isString(b) && l.push(b);
      throw Da("unpr", l.join(" <- "));
    }), A = {}, v = A.$injector = h(A, function(a, b) {
      var c = t.get(a + "Provider", b);
      return v.invoke(c.$get, c, u, a)
    });
    n(g(a), function(a) {
      a && v.invoke(a)
    });
    return v
  }

  function Qe() {
    var a = !0;
    this.disableAutoScrolling = function() {
      a = !1
    };
    this.$get = [
      "$window", "$location", "$rootScope", function(b, d, c) {
        function e(a) {
          var b = null;
          Array.prototype.some.call(a, function(a) {
            if ("a" === ta(a)) {
              return b =
                a, !0
            }
          });
          return b
        }

        function f(a) {
          if (a) {
            a.scrollIntoView();
            var c;
            c = g.yOffset;
            z(c) ? c = c() : Nb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);
            c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
          } else {
            b.scrollTo(0, 0)
          }
        }

        function g(a) {
          a = E(a) ? a : d.hash();
          var b;
          a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
        }

        var h = b.document;
        a && c.$watch(function() {
          return d.hash()
        }, function(a, b) {
          a === b && "" === a || Gf(function() {
            c.$evalAsync(g)
          })
        });
        return g
      }
    ]
  }

  function hb(a, b) {
    if (!a && !b) {
      return "";
    }
    if (!a) {
      return b;
    }
    if (!b) {
      return a;
    }
    I(a) && (a = a.join(" "));
    I(b) && (b = b.join(" "));
    return a + " " + b
  }

  function Mf(a) {
    E(a) && (a = a.split(" "));
    var b = $();
    n(a, function(a) {
      a.length && (b[a] = !0)
    });
    return b
  }

  function Ea(a) {
    return H(a) ? a : {}
  }

  function Nf(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, ra.call(arguments, 1))
      } finally {
        if (v--, 0 === v) {
          for (; T.length;) {
            try {
              T.pop()()
            } catch (b) {
              d.error(b)
            }
          }
        }
      }
    }

    function f() {
      L = null;
      g();
      h()
    }

    function g() {
      a:{
        try {
          p = m.state;
          break a
        } catch (a) {
        }
        p = void 0
      }
      p = q(p) ?
        null : p;
      ma(p, J) && (p = J);
      J = p
    }

    function h() {
      if (w !== k.url() || C !== p) {
        w = k.url(), C = p, n(aa, function(a) {
          a(k.url(), p)
        })
      }
    }

    var k = this, l = a.location, m = a.history, r = a.setTimeout, t = a.clearTimeout, A = {};
    k.isMock = !1;
    var v = 0, T = [];
    k.$$completeOutstandingRequest = e;
    k.$$incOutstandingRequestCount = function() {
      v++
    };
    k.notifyWhenNoOutstandingRequests = function(a) {
      0 === v ? a() : T.push(a)
    };
    var p, C, w = l.href, ga = b.find("base"), L = null;
    g();
    C = p;
    k.url = function(b, d, e) {
      q(e) && (e = null);
      l !== a.location && (l = a.location);
      m !== a.history && (m = a.history);
      if (b) {
        var f =
          C === e;
        if (w === b && (!c.history || f)) {
          return k;
        }
        var h = w && Fa(w) === Fa(b);
        w = b;
        C = e;
        if (!c.history || h && f) {
          if (!h || L) {
            L = b;
          }
          d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;
          l.href !== b && (L = b)
        } else {
          m[d ? "replaceState" : "pushState"](e, "", b), g(), C = p;
        }
        return k
      }
      return L || l.href.replace(/%27/g, "'")
    };
    k.state = function() {
      return p
    };
    var aa = [], D = !1, J = null;
    k.onUrlChange = function(b) {
      if (!D) {
        if (c.history) {
          B(a).on("popstate", f);
        }
        B(a).on("hashchange", f);
        D = !0
      }
      aa.push(b);
      return b
    };
    k.$$applicationDestroyed = function() {
      B(a).off("hashchange popstate",
        f)
    };
    k.$$checkUrlChange = h;
    k.baseHref = function() {
      var a = ga.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    };
    k.defer = function(a, b) {
      var c;
      v++;
      c = r(function() {
        delete A[c];
        e(a)
      }, b || 0);
      A[c] = !0;
      return c
    };
    k.defer.cancel = function(a) {
      return A[a] ? (delete A[a], t(a), e(x), !0) : !1
    }
  }

  function Ve() {
    this.$get = [
      "$window", "$log", "$sniffer", "$document", function(a, b, d, c) {
        return new Nf(a, c, b, d)
      }
    ]
  }

  function We() {
    this.$get = function() {
      function a(a, c) {
        function e(a) {
          a != r && (t ? t == a && (t = a.n) : t = a, f(a.n, a.p), f(a, r), r = a,
            r.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }

        if (a in b) {
          throw G("$cacheFactory")("iid", a);
        }
        var g = 0, h = M({}, c, {id: a}), k = $(), l = c && c.capacity || Number.MAX_VALUE, m = $(), r = null, t = null;
        return b[a] = {
          put: function(a, b) {
            if (!q(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = {key: a});
                e(c)
              }
              a in k || g++;
              k[a] = b;
              g > l && this.remove(t.key);
              return b
            }
          }, get: function(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) {
                return;
              }
              e(b)
            }
            return k[a]
          }, remove: function(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) {
                return;
              }
              b == r && (r = b.p);
              b == t &&
              (t = b.n);
              f(b.n, b.p);
              delete m[a]
            }
            a in k && (delete k[a], g--)
          }, removeAll: function() {
            k = $();
            g = 0;
            m = $();
            r = t = null
          }, destroy: function() {
            m = h = k = null;
            delete b[a]
          }, info: function() {
            return M({}, h, {size: g})
          }
        }
      }

      var b = {};
      a.info = function() {
        var a = {};
        n(b, function(b, e) {
          a[e] = b.info()
        });
        return a
      };
      a.get = function(a) {
        return b[a]
      };
      return a
    }
  }

  function rf() {
    this.$get = [
      "$cacheFactory", function(a) {
        return a("templates")
      }
    ]
  }

  function Cc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
      n(a, function(a, f) {
        var g = a.match(d);
        if (!g) {
          throw ha("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
        }
        e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f}
      });
      return e
    }

    function c(a) {
      var b = a.charAt(0);
      if (!b || b !== F(b)) {
        throw ha("baddir", a);
      }
      if (a !== a.trim()) {
        throw ha("baddir", a);
      }
    }

    var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = Wd("ngSrc,ngSrcset,src,srcset"), k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
    this.directive = function t(b, f) {
      Ra(b, "directive");
      E(b) ? (c(b), qb(f, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", [
        "$injector", "$exceptionHandler", function(a, c) {
          var f = [];
          n(e[b], function(e, g) {
            try {
              var h = a.invoke(e);
              z(h) ? h = {compile: na(h)} : !h.compile && h.link && (h.compile = na(h.link));
              h.priority = h.priority || 0;
              h.index = g;
              h.name = h.name || b;
              h.require = h.require || h.controller && h.name;
              h.restrict = h.restrict || "EA";
              var k = h, l = h, m = h.name, t = {isolateScope: null, bindToController: null};
              H(l.scope) && (!0 === l.bindToController ? (t.bindToController = d(l.scope,
                m, !0), t.isolateScope = {}) : t.isolateScope = d(l.scope, m, !1));
              H(l.bindToController) && (t.bindToController = d(l.bindToController, m, !0));
              if (H(t.bindToController)) {
                var v = l.controller, R = l.controllerAs;
                if (!v) {
                  throw ha("noctrl", m);
                }
                var V;
                a:if (R && E(R)) {
                  V = R;
                } else {
                  if (E(v)) {
                    var n = Uc.exec(v);
                    if (n) {
                      V = n[3];
                      break a
                    }
                  }
                  V = void 0
                }
                if (!V) {
                  throw ha("noident", m);
                }
              }
              var s = k.$$bindings = t;
              H(s.isolateScope) && (h.$$isolateBindings = s.isolateScope);
              h.$$moduleName = e.$$moduleName;
              f.push(h)
            } catch (u) {
              c(u)
            }
          });
          return f
        }
      ])), e[b].push(f)) : n(b, pc(t));
      return this
    };
    this.aHrefSanitizationWhitelist = function(a) {
      return y(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
    };
    this.imgSrcSanitizationWhitelist = function(a) {
      return y(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
    };
    var m = !0;
    this.debugInfoEnabled = function(a) {
      return y(a) ? (m = a, this) : m
    };
    this.$get = [
      "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a,
                                                                                                                                                                              b, c, d, p, C, w, ga, L, aa, D) {
        function J(a, b) {
          try {
            a.addClass(b)
          } catch (c) {
          }
        }

        function K(a, b, c, d, e) {
          a instanceof B || (a = B(a));
          n(a, function(b, c) {
            b.nodeType == Na && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0])
          });
          var f = O(a, b, a, c, d, e);
          K.$$addScopeClass(a);
          var g = null;
          return function(b, c, d) {
            qb(b, "scope");
            e && e.needsNewScope && (b = b.$parent.$new());
            d = d || {};
            var h = d.parentBoundTranscludeFn, k = d.transcludeControllers;
            d = d.futureParentElement;
            h && h.$$boundTransclude && (h = h.$$boundTransclude);
            g || (g = (d =
              d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
            d = "html" !== g ? B(Yb(g, B("<div>").append(a).html())) : c ? Pa.clone.call(a) : a;
            if (k) {
              for (var l in k) {
                d.data("$" + l + "Controller", k[l].instance);
              }
            }
            K.$$addScopeInfo(d, b);
            c && c(d, b);
            f && f(b, d, d, h);
            return d
          }
        }

        function O(a, b, c, d, e, f) {
          function g(a, c, d, e) {
            var f, k, l, m, t, w, D;
            if (p) {
              for (D = Array(c.length), m = 0; m < h.length; m += 3) {
                f = h[m], D[f] = c[f];
              }
            } else {
              D = c;
            }
            m = 0;
            for (t = h.length; m < t;) {
              k = D[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), K.$$addScopeInfo(B(k),
                l)) : l = a, w = c.transcludeOnThisElement ? R(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? R(a, b) : null, c(f, l, k, d, w)) : f && f(a, k.childNodes, u, e)
            }
          }

          for (var h = [], k, l, m, t, p, w = 0; w < a.length; w++) {
            k = new fa;
            l = V(a[w], [], k, 0 === w ? d : u, e);
            (f = l.length ? Z(l, a[w], k, b, c, null, [], [], f) : null) && f.scope && K.$$addScopeClass(k.$$element);
            k = f && f.terminal || !(m = a[w].childNodes) || !m.length ? null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
            if (f || k) {
              h.push(w, f, k), t = !0, p = p || f;
            }
            f = null
          }
          return t ? g : null
        }

        function R(a,
                   b, c) {
          return function(d, e, f, g, h) {
            d || (d = a.$new(!1, h), d.$$transcluded = !0);
            return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
          }
        }

        function V(a, b, c, d, e) {
          var h = c.$attr, k;
          switch (a.nodeType) {
            case 1:
              P(b, va(ta(a)), "E", d, e);
              for (var l, m, t, p = a.attributes, w = 0, D = p && p.length; w < D; w++) {
                var K = !1, A = !1;
                l = p[w];
                k = l.name;
                m = U(l.value);
                l = va(k);
                if (t = ka.test(l)) {
                  k = k.replace(Vc, "").substr(8).replace(/_(.)/g, function(a, b) {
                    return b.toUpperCase()
                  });
                }
                (l = l.match(la)) && G(l[1]) && (K = k, A = k.substr(0, k.length -
                    5) + "end", k = k.substr(0, k.length - 6));
                l = va(k.toLowerCase());
                h[l] = k;
                if (t || !c.hasOwnProperty(l)) {
                  c[l] = m, Qc(a, l) && (c[l] = !0);
                }
                W(a, b, m, l, t);
                P(b, l, "A", d, e, K, A)
              }
              a = a.className;
              H(a) && (a = a.animVal);
              if (E(a) && "" !== a) {
                for (; k = g.exec(a);) {
                  l = va(k[2]), P(b, l, "C", d, e) && (c[l] = U(k[3])), a = a.substr(k.index + k[0].length);
                }
              }
              break;
            case Na:
              if (11 === Ha)for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na;) {
                a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
              }
              N(b, a.nodeValue);
              break;
            case 8:
              try {
                if (k = f.exec(a.nodeValue))l =
                  va(k[1]), P(b, l, "M", d, e) && (c[l] = U(k[2]))
              } catch (R) {
              }
          }
          b.sort(Ia);
          return b
        }

        function Ta(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)throw ha("uterdir", b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling
            } while (0 < e)
          } else d.push(a);
          return B(d)
        }

        function s(a, b, c) {
          return function(d, e, f, g, h) {
            e = Ta(e[0], b, c);
            return a(d, e, f, g, h)
          }
        }

        function Z(a, b, d, e, f, g, h, l, m) {
          function t(a, b, c, d) {
            if (a) {
              c && (a = s(a, c, d));
              a.require = q.require;
              a.directiveName = x;
              if (O ===
                q || q.$$isolateScope)a = ca(a, {isolateScope: !0});
              h.push(a)
            }
            if (b) {
              c && (b = s(b, c, d));
              b.require = q.require;
              b.directiveName = x;
              if (O === q || q.$$isolateScope)b = ca(b, {isolateScope: !0});
              l.push(b)
            }
          }

          function p(a, b, c, d) {
            var e;
            if (E(b)) {
              var f = b.match(k);
              b = b.substring(f[0].length);
              var g = f[1] || f[3], f = "?" === f[2];
              "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
              e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));
              if (!e && !f)throw ha("ctreq", b, a);
            } else if (I(b))for (e = [], g = 0, f = b.length; g < f; g++)e[g] = p(a, b[g], c, d);
            return e ||
              null
          }

          function w(a, b, c, d, e, f) {
            var g = $(), h;
            for (h in d) {
              var k = d[h], l = {$scope: k === O || k.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c}, m = k.controller;
              "@" == m && (m = b[k.name]);
              l = C(m, l, !0, k.controllerAs);
              g[k.name] = l;
              aa || a.data("$" + k.name + "Controller", l.instance)
            }
            return g
          }

          function D(a, c, e, f, g) {
            function k(a, b, c) {
              var d;
              Za(a) || (c = b, b = a, a = u);
              aa && (d = v);
              c || (c = aa ? V.parent() : V);
              return g(a, b, d, c, Ta)
            }

            var m, t, A, v, C, V, Ga;
            b === e ? (f = d, V = d.$$element) : (V = B(e), f = new fa(V, d));
            A = c;
            O ? t = c.$new(!0) : R && (A = c.$parent);
            g && (C = k,
              C.$$boundTransclude = g);
            T && (v = w(V, f, C, T, t, c));
            O && (K.$$addScopeInfo(V, t, !0, !(J && (J === O || J === O.$$originalDirective))), K.$$addScopeClass(V, !0), t.$$isolateBindings = O.$$isolateBindings, (Ga = ba(c, f, t, t.$$isolateBindings, O)) && t.$on("$destroy", Ga));
            for (var n in v) {
              Ga = T[n];
              var ga = v[n], L = Ga.$$bindings.bindToController;
              ga.identifier && L && (m = ba(A, f, ga.instance, L, Ga));
              var q = ga();
              q !== ga.instance && (ga.instance = q, V.data("$" + Ga.name + "Controller", q), m && m(), m = ba(A, f, ga.instance, L, Ga))
            }
            F = 0;
            for (M = h.length; F < M; F++)m = h[F],
              ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C);
            var Ta = c;
            O && (O.template || null === O.templateUrl) && (Ta = t);
            a && a(Ta, e.childNodes, u, g);
            for (F = l.length - 1; 0 <= F; F--)m = l[F], ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C)
          }

          m = m || {};
          for (var A = -Number.MAX_VALUE, R = m.newScopeDirective, T = m.controllerDirectives, O = m.newIsolateScopeDirective, J = m.templateDirective, n = m.nonTlbTranscludeDirective, ga = !1, L = !1, aa = m.hasElementTranscludeDirective, Z = d.$$element = B(b), q, x, P, Ia =
            e, G, F = 0, M = a.length; F < M; F++) {
            q = a[F];
            var N = q.$$start, Q = q.$$end;
            N && (Z = Ta(b, N, Q));
            P = u;
            if (A > q.priority)break;
            if (P = q.scope)q.templateUrl || (H(P) ? (Ua("new/isolated scope", O || R, q, Z), O = q) : Ua("new/isolated scope", O, q, Z)), R = R || q;
            x = q.name;
            !q.templateUrl && q.controller && (P = q.controller, T = T || $(), Ua("'" + x + "' controller", T[x], q, Z), T[x] = q);
            if (P = q.transclude)ga = !0, q.$$tlb || (Ua("transclusion", n, q, Z), n = q), "element" == P ? (aa = !0, A = q.priority, P = Z, Z = d.$$element = B(X.createComment(" " + x + ": " + d[x] + " ")), b = Z[0], Y(f, ra.call(P, 0),
              b), Ia = K(P, e, A, g && g.name, {nonTlbTranscludeDirective: n})) : (P = B(Vb(b)).contents(), Z.empty(), Ia = K(P, e, u, u, {needsNewScope: q.$$isolateScope || q.$$newScope}));
            if (q.template)if (L = !0, Ua("template", J, q, Z), J = q, P = z(q.template) ? q.template(Z, d) : q.template, P = ja(P), q.replace) {
              g = q;
              P = Tb.test(P) ? Xc(Yb(q.templateNamespace, U(P))) : [];
              b = P[0];
              if (1 != P.length || 1 !== b.nodeType)throw ha("tplrt", x, "");
              Y(f, Z, b);
              P = {$attr: {}};
              var Wc = V(b, [], P), W = a.splice(F + 1, a.length - (F + 1));
              (O || R) && y(Wc, O, R);
              a = a.concat(Wc).concat(W);
              S(d, P);
              M = a.length
            } else Z.html(P);
            if (q.templateUrl)L = !0, Ua("template", J, q, Z), J = q, q.replace && (g = q), D = Of(a.splice(F, a.length - F), Z, d, f, ga && Ia, h, l, {controllerDirectives: T, newScopeDirective: R !== q && R, newIsolateScopeDirective: O, templateDirective: J, nonTlbTranscludeDirective: n}), M = a.length; else if (q.compile)try {
              G = q.compile(Z, d, Ia), z(G) ? t(null, G, N, Q) : G && t(G.pre, G.post, N, Q)
            } catch (da) {
              c(da, ua(Z))
            }
            q.terminal && (D.terminal = !0, A = Math.max(A, q.priority))
          }
          D.scope = R && !0 === R.scope;
          D.transcludeOnThisElement = ga;
          D.templateOnThisElement = L;
          D.transclude = Ia;
          m.hasElementTranscludeDirective = aa;
          return D
        }

        function y(a, b, c) {
          for (var d = 0, e = a.length; d < e; d++)a[d] = Ob(a[d], {$$isolateScope: b, $$newScope: c})
        }

        function P(b, d, f, g, h, k, l) {
          if (d === h)return null;
          h = null;
          if (e.hasOwnProperty(d)) {
            var m;
            d = a.get(d + "Directive");
            for (var p = 0, w = d.length; p < w; p++)try {
              m = d[p], (q(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Ob(m, {$$start: k, $$end: l})), b.push(m), h = m)
            } catch (D) {
              c(D)
            }
          }
          return h
        }

        function G(b) {
          if (e.hasOwnProperty(b))for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)if (b =
              c[d], b.multiElement)return !0;
          return !1
        }

        function S(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          n(a, function(d, e) {
            "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
          });
          n(b, function(b, f) {
            "class" == f ? (J(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
          })
        }

        function Of(a, b, c, e, f, g, h, k) {
          var l = [], m, t, p = b[0], w = a.shift(), D = Ob(w, {
            templateUrl: null,
            transclude: null, replace: null, $$originalDirective: w
          }), A = z(w.templateUrl) ? w.templateUrl(b, c) : w.templateUrl, K = w.templateNamespace;
          b.empty();
          d(A).then(function(d) {
            var T, v;
            d = ja(d);
            if (w.replace) {
              d = Tb.test(d) ? Xc(Yb(K, U(d))) : [];
              T = d[0];
              if (1 != d.length || 1 !== T.nodeType)throw ha("tplrt", w.name, A);
              d = {$attr: {}};
              Y(e, b, T);
              var C = V(T, [], d);
              H(w.scope) && y(C, !0);
              a = C.concat(a);
              S(c, d)
            } else T = p, b.html(d);
            a.unshift(D);
            m = Z(a, T, c, f, b, w, g, h, k);
            n(e, function(a, c) {
              a == T && (e[c] = b[0])
            });
            for (t = O(b[0].childNodes, f); l.length;) {
              d = l.shift();
              v = l.shift();
              var ga = l.shift(), L = l.shift(), C = b[0];
              if (!d.$$destroyed) {
                if (v !== p) {
                  var q = v.className;
                  k.hasElementTranscludeDirective && w.replace || (C = Vb(T));
                  Y(ga, B(v), C);
                  J(B(C), q)
                }
                v = m.transcludeOnThisElement ? R(d, m.transclude, L) : L;
                m(t, d, C, e, v)
              }
            }
            l = null
          });
          return function(a, b, c, d, e) {
            a = e;
            b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = R(b, m.transclude, e)), m(t, b, c, d, a)))
          }
        }

        function Ia(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
        }

        function Ua(a,
                    b, c, d) {
          function e(a) {
            return a ? " (module: " + a + ")" : ""
          }

          if (b)throw ha("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
        }

        function N(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0, compile: function(a) {
              a = a.parent();
              var b = !!a.length;
              b && K.$$addBindingClass(a);
              return function(a, c) {
                var e = c.parent();
                b || K.$$addBindingClass(e);
                K.$$addBindingInfo(e, d.expressions);
                a.$watch(d, function(a) {
                  c[0].nodeValue = a
                })
              }
            }
          })
        }

        function Yb(a, b) {
          a = F(a || "html");
          switch (a) {
            case "svg":
            case "math":
              var c = X.createElement("div");
              c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
              return c.childNodes[0].childNodes;
            default:
              return b
          }
        }

        function Q(a, b) {
          if ("srcdoc" == b)return L.HTML;
          var c = ta(a);
          if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return L.RESOURCE_URL
        }

        function W(a, c, d, e, f) {
          var g = Q(a, e);
          f = h[e] || f;
          var k = b(d, !0, g, f);
          if (k) {
            if ("multiple" === e && "select" === ta(a))throw ha("selmulti", ua(a));
            c.push({
              priority: 100, compile: function() {
                return {
                  pre: function(a, c, h) {
                    c = h.$$observers || (h.$$observers = $());
                    if (l.test(e))throw ha("nodomevents");
                    var m = h[e];
                    m !== d && (k = m && b(m, !0, g, f), d = m);
                    k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                      "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                    }))
                  }
                }
              }
            })
          }
        }

        function Y(a, b, c) {
          var d = b[0], e = b.length, f = d.parentNode, g, h;
          if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
            a[g++] = c;
            h = g + e - 1;
            for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
            a.length -= e - 1;
            a.context === d && (a.context = c);
            break
          }
          f && f.replaceChild(c, d);
          a = X.createDocumentFragment();
          a.appendChild(d);
          B.hasData(d) && (B.data(c, B.data(d)), oa ? (Rb = !0, oa.cleanData([d])) : delete B.cache[d[B.expando]]);
          d = 1;
          for (e = b.length; d < e; d++)f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
          b[0] = c;
          b.length = 1
        }

        function ca(a, b) {
          return M(function() {
            return a.apply(null, arguments)
          }, a, b)
        }

        function ea(a, b, d, e, f, g) {
          try {
            a(b, d, e, f, g)
          } catch (h) {
            c(h, ua(d))
          }
        }

        function ba(a, c, d, e, f) {
          var g = [];
          n(e, function(e, h) {
            var k = e.attrName, l = e.optional, m, t, w, D;
            switch (e.mode) {
              case "@":
                l || qa.call(c, k) || (d[h] = c[k] = void 0);
                c.$observe(k, function(a) {
                  E(a) &&
                  (d[h] = a)
                });
                c.$$observers[k].$$scope = a;
                E(c[k]) && (d[h] = b(c[k])(a));
                break;
              case "=":
                if (!qa.call(c, k)) {
                  if (l)break;
                  c[k] = void 0
                }
                if (l && !c[k])break;
                t = p(c[k]);
                D = t.literal ? ma : function(a, b) {
                  return a === b || a !== a && b !== b
                };
                w = t.assign || function() {
                    m = d[h] = t(a);
                    throw ha("nonassign", c[k], f.name);
                  };
                m = d[h] = t(a);
                l = function(b) {
                  D(b, d[h]) || (D(b, m) ? w(a, b = d[h]) : d[h] = b);
                  return m = b
                };
                l.$stateful = !0;
                l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, t.literal);
                g.push(l);
                break;
              case "&":
                t = c.hasOwnProperty(k) ? p(c[k]) :
                  x;
                if (t === x && l)break;
                d[h] = function(b) {
                  return t(a, b)
                }
            }
          });
          return g.length && function() {
              for (var a = 0, b = g.length; a < b; ++a)g[a]()
            }
        }

        var fa = function(a, b) {
          if (b) {
            var c = Object.keys(b), d, e, f;
            d = 0;
            for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
          } else this.$attr = {};
          this.$$element = a
        };
        fa.prototype = {
          $normalize: va, $addClass: function(a) {
            a && 0 < a.length && aa.addClass(this.$$element, a)
          }, $removeClass: function(a) {
            a && 0 < a.length && aa.removeClass(this.$$element, a)
          }, $updateClass: function(a, b) {
            var c = Yc(a, b);
            c && c.length && aa.addClass(this.$$element,
              c);
            (c = Yc(b, a)) && c.length && aa.removeClass(this.$$element, c)
          }, $set: function(a, b, d, e) {
            var f = Qc(this.$$element[0], a), g = Zc[a], h = a;
            f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
            this[a] = b;
            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));
            f = ta(this.$$element);
            if ("a" === f && "href" === a || "img" === f && "src" === a)this[a] = b = D(b, "src" === a); else if ("img" === f && "srcset" === a) {
              for (var f = "", g = U(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l <
              k; l++)var m = 2 * l, f = f + D(U(g[m]), !0), f = f + (" " + U(g[m + 1]));
              g = U(g[2 * l]).split(/\s/);
              f += D(U(g[0]), !0);
              2 === g.length && (f += " " + U(g[1]));
              this[a] = b = f
            }
            !1 !== d && (null === b || q(b) ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
            (a = this.$$observers) && n(a[h], function(a) {
              try {
                a(b)
              } catch (d) {
                c(d)
              }
            })
          }, $observe: function(a, b) {
            var c = this, d = c.$$observers || (c.$$observers = $()), e = d[a] || (d[a] = []);
            e.push(b);
            w.$evalAsync(function() {
              e.$$inter || !c.hasOwnProperty(a) || q(c[a]) || b(c[a])
            });
            return function() {
              ab(e, b)
            }
          }
        };
        var da = b.startSymbol(),
          ia = b.endSymbol(), ja = "{{" == da || "}}" == ia ? Ya : function(a) {
            return a.replace(/\{\{/g, da).replace(/}}/g, ia)
          }, ka = /^ngAttr[A-Z]/, la = /^(.+)Start$/;
        K.$$addBindingInfo = m ? function(a, b) {
          var c = a.data("$binding") || [];
          I(b) ? c = c.concat(b) : c.push(b);
          a.data("$binding", c)
        } : x;
        K.$$addBindingClass = m ? function(a) {
          J(a, "ng-binding")
        } : x;
        K.$$addScopeInfo = m ? function(a, b, c, d) {
          a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
        } : x;
        K.$$addScopeClass = m ? function(a, b) {
          J(a, b ? "ng-isolate-scope" : "ng-scope")
        } : x;
        return K
      }
    ]
  }

  function va(a) {
    return fb(a.replace(Vc,
      ""))
  }

  function Yc(a, b) {
    var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
    a:for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
      d += (0 < d.length ? " " : "") + g
    }
    return d
  }

  function Xc(a) {
    a = B(a);
    var b = a.length;
    if (1 >= b)return a;
    for (; b--;)8 === a[b].nodeType && Pf.call(a, b, 1);
    return a
  }

  function Xe() {
    var a = {}, b = !1;
    this.register = function(b, c) {
      Ra(b, "controller");
      H(b) ? M(a, b) : a[b] = c
    };
    this.allowGlobals = function() {
      b = !0
    };
    this.$get = [
      "$injector", "$window", function(d, c) {
        function e(a, b, c, d) {
          if (!a || !H(a.$scope))throw G("$controller")("noscp",
            d, b);
          a.$scope[b] = c
        }

        return function(f, g, h, k) {
          var l, m, r;
          h = !0 === h;
          k && E(k) && (r = k);
          if (E(f)) {
            k = f.match(Uc);
            if (!k)throw Qf("ctrlfmt", f);
            m = k[1];
            r = r || k[3];
            f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);
            Qa(f, m, !0)
          }
          if (h)return h = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), r && e(g, r, l, m || f.name), M(function() {
            var a = d.invoke(f, l, g, m);
            a !== l && (H(a) || z(a)) && (l = a, r && e(g, r, l, m || f.name));
            return l
          }, {instance: l, identifier: r});
          l = d.instantiate(f, g, m);
          r && e(g, r, l, m || f.name);
          return l
        }
      }
    ]
  }

  function Ye() {
    this.$get =
      [
        "$window", function(a) {
        return B(a.document)
      }
      ]
  }

  function Ze() {
    this.$get = [
      "$log", function(a) {
        return function(b, d) {
          a.error.apply(a, arguments)
        }
      }
    ]
  }

  function Zb(a) {
    return H(a) ? da(a) ? a.toISOString() : db(a) : a
  }

  function df() {
    this.$get = function() {
      return function(a) {
        if (!a)return "";
        var b = [];
        oc(a, function(a, c) {
          null === a || q(a) || (I(a) ? n(a, function(a, d) {
            b.push(ja(c) + "=" + ja(Zb(a)))
          }) : b.push(ja(c) + "=" + ja(Zb(a))))
        });
        return b.join("&")
      }
    }
  }

  function ef() {
    this.$get = function() {
      return function(a) {
        function b(a, e, f) {
          null === a || q(a) ||
          (I(a) ? n(a, function(a, c) {
            b(a, e + "[" + (H(a) ? c : "") + "]")
          }) : H(a) && !da(a) ? oc(a, function(a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
          }) : d.push(ja(e) + "=" + ja(Zb(a))))
        }

        if (!a)return "";
        var d = [];
        b(a, "", !0);
        return d.join("&")
      }
    }
  }

  function $b(a, b) {
    if (E(a)) {
      var d = a.replace(Rf, "").trim();
      if (d) {
        var c = b("Content-Type");
        (c = c && 0 === c.indexOf($c)) || (c = (c = d.match(Sf)) && Tf[c[0]].test(d));
        c && (a = uc(d))
      }
    }
    return a
  }

  function ad(a) {
    var b = $(), d;
    E(a) ? n(a.split("\n"), function(a) {
      d = a.indexOf(":");
      var e = F(U(a.substr(0, d)));
      a = U(a.substr(d + 1));
      e &&
      (b[e] = b[e] ? b[e] + ", " + a : a)
    }) : H(a) && n(a, function(a, d) {
      var f = F(d), g = U(a);
      f && (b[f] = b[f] ? b[f] + ", " + g : g)
    });
    return b
  }

  function bd(a) {
    var b;
    return function(d) {
      b || (b = ad(a));
      return d ? (d = b[F(d)], void 0 === d && (d = null), d) : b
    }
  }

  function cd(a, b, d, c) {
    if (z(c))return c(a, b, d);
    n(c, function(c) {
      a = c(a, b, d)
    });
    return a
  }

  function cf() {
    var a = this.defaults = {
      transformResponse: [$b], transformRequest: [
        function(a) {
          return H(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? db(a) : a
        }
      ], headers: {
        common: {Accept: "application/json, text/plain, */*"},
        post: ia(ac), put: ia(ac), patch: ia(ac)
      }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer"
    }, b = !1;
    this.useApplyAsync = function(a) {
      return y(a) ? (b = !!a, this) : b
    };
    var d = !0;
    this.useLegacyPromiseExtensions = function(a) {
      return y(a) ? (d = !!a, this) : d
    };
    var c = this.interceptors = [];
    this.$get = [
      "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, f, g, h, k, l) {
        function m(b) {
          function c(a) {
            var b = M({}, a);
            b.data = cd(a.data, a.headers, a.status, f.transformResponse);
            a = a.status;
            return 200 <= a && 300 > a ? b : k.reject(b)
          }

          function e(a, b) {
            var c, d = {};
            n(a, function(a, e) {
              z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
            });
            return d
          }

          if (!fa.isObject(b))throw G("$http")("badreq", b);
          var f = M({method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer}, b);
          f.headers = function(b) {
            var c = a.headers, d = M({}, b.headers), f, g, h, c = M({}, c.common, c[F(b.method)]);
            a:for (f in c) {
              g = F(f);
              for (h in d)if (F(h) === g)continue a;
              d[f] = c[f]
            }
            return e(d, ia(b))
          }(b);
          f.method = sb(f.method);
          f.paramSerializer = E(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
          var g = [
            function(b) {
              var d = b.headers, e = cd(b.data, bd(d), u, b.transformRequest);
              q(e) && n(d, function(a, b) {
                "content-type" === F(b) && delete d[b]
              });
              q(b.withCredentials) && !q(a.withCredentials) && (b.withCredentials = a.withCredentials);
              return r(b, e).then(c, c)
            }, u
          ], h = k.when(f);
          for (n(v, function(a) {
            (a.request || a.requestError) && g.unshift(a.request, a.requestError);
            (a.response || a.responseError) && g.push(a.response, a.responseError)
          }); g.length;) {
            b =
              g.shift();
            var m = g.shift(), h = h.then(b, m)
          }
          d ? (h.success = function(a) {
            Qa(a, "fn");
            h.then(function(b) {
              a(b.data, b.status, b.headers, f)
            });
            return h
          }, h.error = function(a) {
            Qa(a, "fn");
            h.then(null, function(b) {
              a(b.data, b.status, b.headers, f)
            });
            return h
          }) : (h.success = dd("success"), h.error = dd("error"));
          return h
        }

        function r(c, d) {
          function g(a, c, d, e) {
            function f() {
              l(c, a, d, e)
            }

            J && (200 <= a && 300 > a ? J.put(R, [a, c, ad(d), e]) : J.remove(R));
            b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
          }

          function l(a, b, d, e) {
            b = -1 <= b ? b : 0;
            (200 <= b && 300 > b ? n.resolve :
              n.reject)({data: a, status: b, headers: bd(d), config: c, statusText: e})
          }

          function r(a) {
            l(a.data, a.status, ia(a.headers()), a.statusText)
          }

          function v() {
            var a = m.pendingRequests.indexOf(c);
            -1 !== a && m.pendingRequests.splice(a, 1)
          }

          var n = k.defer(), D = n.promise, J, K, O = c.headers, R = t(c.url, c.paramSerializer(c.params));
          m.pendingRequests.push(c);
          D.then(v, v);
          !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (J = H(c.cache) ? c.cache : H(a.cache) ? a.cache : A);
          J && (K = J.get(R), y(K) ? K && z(K.then) ? K.then(r, r) : I(K) ? l(K[1],
            K[0], ia(K[2]), K[3]) : l(K, 200, {}, "OK") : J.put(R, D));
          q(K) && ((K = ed(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (O[c.xsrfHeaderName || a.xsrfHeaderName] = K), e(c.method, R, d, g, O, c.timeout, c.withCredentials, c.responseType));
          return D
        }

        function t(a, b) {
          0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
          return a
        }

        var A = g("$http");
        a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
        var v = [];
        n(c, function(a) {
          v.unshift(E(a) ? l.get(a) : l.invoke(a))
        });
        m.pendingRequests = [];
        (function(a) {
          n(arguments,
            function(a) {
              m[a] = function(b, c) {
                return m(M({}, c || {}, {method: a, url: b}))
              }
            })
        })("get", "delete", "head", "jsonp");
        (function(a) {
          n(arguments, function(a) {
            m[a] = function(b, c, d) {
              return m(M({}, d || {}, {method: a, url: b, data: c}))
            }
          })
        })("post", "put", "patch");
        m.defaults = a;
        return m
      }
    ]
  }

  function gf() {
    this.$get = function() {
      return function() {
        return new S.XMLHttpRequest
      }
    }
  }

  function ff() {
    this.$get = [
      "$browser", "$window", "$document", "$xhrFactory", function(a, b, d, c) {
        return Uf(a, c, a.defer, b.angular.callbacks, d[0])
      }
    ]
  }

  function Uf(a, b, d,
              c, e) {
    function f(a, b, d) {
      var f = e.createElement("script"), m = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;
      m = function(a) {
        f.removeEventListener("load", m, !1);
        f.removeEventListener("error", m, !1);
        e.body.removeChild(f);
        f = null;
        var g = -1, A = "unknown";
        a && ("load" !== a.type || c[b].called || (a = {type: "error"}), A = a.type, g = "error" === a.type ? 404 : 200);
        d && d(g, A)
      };
      f.addEventListener("load", m, !1);
      f.addEventListener("error", m, !1);
      e.body.appendChild(f);
      return m
    }

    return function(e, h, k, l, m, r, t, A) {
      function v() {
        C && C();
        w && w.abort()
      }

      function T(b, c, e, f, g) {
        y(L) && d.cancel(L);
        C = w = null;
        b(c, e, f, g);
        a.$$completeOutstandingRequest(x)
      }

      a.$$incOutstandingRequestCount();
      h = h || a.url();
      if ("jsonp" == F(e)) {
        var p = "_" + (c.counter++).toString(36);
        c[p] = function(a) {
          c[p].data = a;
          c[p].called = !0
        };
        var C = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function(a, b) {
          T(l, a, c[p].data, "", b);
          c[p] = x
        })
      } else {
        var w = b(e, h);
        w.open(e, h, !0);
        n(m, function(a, b) {
          y(a) && w.setRequestHeader(b, a)
        });
        w.onload = function() {
          var a = w.statusText || "", b = "response" in w ? w.response : w.responseText,
            c = 1223 === w.status ? 204 : w.status;
          0 === c && (c = b ? 200 : "file" == wa(h).protocol ? 404 : 0);
          T(l, c, b, w.getAllResponseHeaders(), a)
        };
        e = function() {
          T(l, -1, null, null, "")
        };
        w.onerror = e;
        w.onabort = e;
        t && (w.withCredentials = !0);
        if (A)try {
          w.responseType = A
        } catch (ga) {
          if ("json" !== A)throw ga;
        }
        w.send(q(k) ? null : k)
      }
      if (0 < r)var L = d(v, r); else r && z(r.then) && r.then(v)
    }
  }

  function af() {
    var a = "{{", b = "}}";
    this.startSymbol = function(b) {
      return b ? (a = b, this) : a
    };
    this.endSymbol = function(a) {
      return a ? (b = a, this) : b
    };
    this.$get = [
      "$parse", "$exceptionHandler",
      "$sce", function(d, c, e) {
        function f(a) {
          return "\\\\\\" + a
        }

        function g(c) {
          return c.replace(m, a).replace(r, b)
        }

        function h(f, h, m, r) {
          function p(a) {
            try {
              var b = a;
              a = m ? e.getTrusted(m, b) : e.valueOf(b);
              var d;
              if (r && !y(a))d = a; else if (null == a)d = ""; else {
                switch (typeof a) {
                  case "string":
                    break;
                  case "number":
                    a = "" + a;
                    break;
                  default:
                    a = db(a)
                }
                d = a
              }
              return d
            } catch (g) {
              c(Ja.interr(f, g))
            }
          }

          r = !!r;
          for (var C, w, n = 0, L = [], s = [], D = f.length, J = [], K = []; n < D;)if (-1 != (C = f.indexOf(a, n)) && -1 != (w = f.indexOf(b, C + k)))n !== C && J.push(g(f.substring(n, C))), n = f.substring(C +
            k, w), L.push(n), s.push(d(n, p)), n = w + l, K.push(J.length), J.push(""); else {
            n !== D && J.push(g(f.substring(n)));
            break
          }
          m && 1 < J.length && Ja.throwNoconcat(f);
          if (!h || L.length) {
            var O = function(a) {
              for (var b = 0, c = L.length; b < c; b++) {
                if (r && q(a[b]))return;
                J[K[b]] = a[b]
              }
              return J.join("")
            };
            return M(function(a) {
              var b = 0, d = L.length, e = Array(d);
              try {
                for (; b < d; b++)e[b] = s[b](a);
                return O(e)
              } catch (g) {
                c(Ja.interr(f, g))
              }
            }, {
              exp: f, expressions: L, $$watchDelegate: function(a, b) {
                var c;
                return a.$watchGroup(s, function(d, e) {
                  var f = O(d);
                  z(b) && b.call(this,
                    f, d !== e ? c : f, a);
                  c = f
                })
              }
            })
          }
        }

        var k = a.length, l = b.length, m = new RegExp(a.replace(/./g, f), "g"), r = new RegExp(b.replace(/./g, f), "g");
        h.startSymbol = function() {
          return a
        };
        h.endSymbol = function() {
          return b
        };
        return h
      }
    ]
  }

  function bf() {
    this.$get = [
      "$rootScope", "$window", "$q", "$$q", function(a, b, d, c) {
        function e(e, h, k, l) {
          var m = 4 < arguments.length, r = m ? ra.call(arguments, 4) : [], t = b.setInterval, A = b.clearInterval, v = 0, n = y(l) && !l, p = (n ? c : d).defer(), C = p.promise;
          k = y(k) ? k : 0;
          C.then(null, null, m ? function() {
            e.apply(null, r)
          } : e);
          C.$$intervalId =
            t(function() {
              p.notify(v++);
              0 < k && v >= k && (p.resolve(v), A(C.$$intervalId), delete f[C.$$intervalId]);
              n || a.$apply()
            }, h);
          f[C.$$intervalId] = p;
          return C
        }

        var f = {};
        e.cancel = function(a) {
          return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
        };
        return e
      }
    ]
  }

  function bc(a) {
    a = a.split("/");
    for (var b = a.length; b--;)a[b] = ob(a[b]);
    return a.join("/")
  }

  function fd(a, b) {
    var d = wa(a);
    b.$$protocol = d.protocol;
    b.$$host = d.hostname;
    b.$$port = ea(d.port) || Vf[d.protocol] ||
      null
  }

  function gd(a, b) {
    var d = "/" !== a.charAt(0);
    d && (a = "/" + a);
    var c = wa(a);
    b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
    b.$$search = xc(c.search);
    b.$$hash = decodeURIComponent(c.hash);
    b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
  }

  function pa(a, b) {
    if (0 === b.indexOf(a))return b.substr(a.length)
  }

  function Fa(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substr(0, b)
  }

  function ib(a) {
    return a.replace(/(#.+)|#$/, "$1")
  }

  function cc(a, b, d) {
    this.$$html5 = !0;
    d = d || "";
    fd(a, this);
    this.$$parse = function(a) {
      var d = pa(b, a);
      if (!E(d))throw Db("ipthprfx", a, b);
      gd(d, this);
      this.$$path || (this.$$path = "/");
      this.$$compose()
    };
    this.$$compose = function() {
      var a = Qb(this.$$search), d = this.$$hash ? "#" + ob(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (a ? "?" + a : "") + d;
      this.$$absUrl = b + this.$$url.substr(1)
    };
    this.$$parseLinkUrl = function(c, e) {
      if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
      var f, g;
      y(f = pa(a, c)) ? (g = f, g = y(f = pa(d, f)) ? b + (pa("/", f) || f) : a + g) : y(f = pa(b, c)) ? g = b + f : b == c + "/" && (g = b);
      g && this.$$parse(g);
      return !!g
    }
  }

  function dc(a, b, d) {
    fd(a, this);
    this.$$parse = function(c) {
      var e = pa(a, c) || pa(b, c), f;
      q(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", q(e) && (a = c, this.replace())) : (f = pa(d, e), q(f) && (f = e));
      gd(f, this);
      c = this.$$path;
      var e = a, g = /^\/[A-Z]:(\/.*)/;
      0 === f.indexOf(e) && (f = f.replace(e, ""));
      g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
      this.$$path = c;
      this.$$compose()
    };
    this.$$compose = function() {
      var b = Qb(this.$$search), e = this.$$hash ? "#" + ob(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + (this.$$url ?
        d + this.$$url : "")
    };
    this.$$parseLinkUrl = function(b, d) {
      return Fa(a) == Fa(b) ? (this.$$parse(b), !0) : !1
    }
  }

  function hd(a, b, d) {
    this.$$html5 = !0;
    dc.apply(this, arguments);
    this.$$parseLinkUrl = function(c, e) {
      if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
      var f, g;
      a == Fa(c) ? f = c : (g = pa(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
      f && this.$$parse(f);
      return !!f
    };
    this.$$compose = function() {
      var b = Qb(this.$$search), e = this.$$hash ? "#" + ob(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;
      this.$$absUrl = a + d + this.$$url
    }
  }

  function Eb(a) {
    return function() {
      return this[a]
    }
  }

  function id(a, b) {
    return function(d) {
      if (q(d))return this[a];
      this[a] = b(d);
      this.$$compose();
      return this
    }
  }

  function hf() {
    var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
    this.hashPrefix = function(b) {
      return y(b) ? (a = b, this) : a
    };
    this.html5Mode = function(a) {
      return $a(a) ? (b.enabled = a, this) : H(a) ? ($a(a.enabled) && (b.enabled = a.enabled), $a(a.requireBase) && (b.requireBase = a.requireBase), $a(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
    };
    this.$get = [
      "$rootScope", "$browser", "$sniffer", "$rootElement", "$window",
      function(d, c, e, f, g) {
        function h(a, b, d) {
          var e = l.url(), f = l.$$state;
          try {
            c.url(a, b, d), l.$$state = c.state()
          } catch (g) {
            throw l.url(e), l.$$state = f, g;
          }
        }

        function k(a, b) {
          d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
        }

        var l, m;
        m = c.baseHref();
        var r = c.url(), t;
        if (b.enabled) {
          if (!m && b.requireBase)throw Db("nobase");
          t = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");
          m = e.history ? cc : hd
        } else t = Fa(r), m = dc;
        var A = t.substr(0, Fa(t).lastIndexOf("/") + 1);
        l = new m(t, A, "#" + a);
        l.$$parseLinkUrl(r, r);
        l.$$state =
          c.state();
        var v = /^\s*(javascript|mailto):/i;
        f.on("click", function(a) {
          if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
            for (var e = B(a.target); "a" !== ta(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
            var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
            H(h) && "[object SVGAnimatedString]" === h.toString() && (h = wa(h.animVal).href);
            v.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
          }
        });
        ib(l.absUrl()) != ib(r) && c.url(l.absUrl(), !0);
        var n = !0;
        c.onUrlChange(function(a, b) {
          q(pa(A, a)) ? g.location.href = a : (d.$evalAsync(function() {
            var c = l.absUrl(), e = l.$$state, f;
            a = ib(a);
            l.$$parse(a);
            l.$$state = b;
            f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
            l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (n = !1, k(c, e)))
          }), d.$$phase || d.$digest())
        });
        d.$watch(function() {
          var a = ib(c.url()), b = ib(l.absUrl()), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
          if (n ||
            m)n = !1, d.$evalAsync(function() {
            var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
            l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
          });
          l.$$replace = !1
        });
        return l
      }
    ]
  }

  function jf() {
    var a = !0, b = this;
    this.debugEnabled = function(b) {
      return y(b) ? (a = b, this) : a
    };
    this.$get = [
      "$window", function(d) {
        function c(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL &&
          (a = a.message + "\n" + a.sourceURL + ":" + a.line));
          return a
        }

        function e(a) {
          var b = d.console || {}, e = b[a] || b.log || x;
          a = !1;
          try {
            a = !!e.apply
          } catch (k) {
          }
          return a ? function() {
            var a = [];
            n(arguments, function(b) {
              a.push(c(b))
            });
            return e.apply(b, a)
          } : function(a, b) {
            e(a, null == b ? "" : b)
          }
        }

        return {
          log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function() {
            var c = e("debug");
            return function() {
              a && c.apply(b, arguments)
            }
          }()
        }
      }
    ]
  }

  function Va(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" ===
      a || "__proto__" === a)throw ba("isecfld", b);
    return a
  }

  function jd(a, b) {
    a += "";
    if (!E(a))throw ba("iseccst", b);
    return a
  }

  function xa(a, b) {
    if (a) {
      if (a.constructor === a)throw ba("isecfn", b);
      if (a.window === a)throw ba("isecwindow", b);
      if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw ba("isecdom", b);
      if (a === Object)throw ba("isecobj", b);
    }
    return a
  }

  function kd(a, b) {
    if (a) {
      if (a.constructor === a)throw ba("isecfn", b);
      if (a === Wf || a === Xf || a === Yf)throw ba("isecff", b);
    }
  }

  function ld(a, b) {
    if (a && (a === (0).constructor || a ===
      (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor))throw ba("isecaf", b);
  }

  function Zf(a, b) {
    return "undefined" !== typeof a ? a : b
  }

  function md(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
  }

  function W(a, b) {
    var d, c;
    switch (a.type) {
      case s.Program:
        d = !0;
        n(a.body, function(a) {
          W(a.expression, b);
          d = d && a.expression.constant
        });
        a.constant = d;
        break;
      case s.Literal:
        a.constant = !0;
        a.toWatch = [];
        break;
      case s.UnaryExpression:
        W(a.argument, b);
        a.constant = a.argument.constant;
        a.toWatch = a.argument.toWatch;
        break;
      case s.BinaryExpression:
        W(a.left, b);
        W(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.left.toWatch.concat(a.right.toWatch);
        break;
      case s.LogicalExpression:
        W(a.left, b);
        W(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = a.constant ? [] : [a];
        break;
      case s.ConditionalExpression:
        W(a.test, b);
        W(a.alternate, b);
        W(a.consequent, b);
        a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
        a.toWatch = a.constant ? [] : [a];
        break;
      case s.Identifier:
        a.constant = !1;
        a.toWatch = [a];
        break;
      case s.MemberExpression:
        W(a.object, b);
        a.computed && W(a.property, b);
        a.constant = a.object.constant && (!a.computed || a.property.constant);
        a.toWatch = [a];
        break;
      case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : !1;
        c = [];
        n(a.arguments, function(a) {
          W(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch)
        });
        a.constant = d;
        a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
        break;
      case s.AssignmentExpression:
        W(a.left, b);
        W(a.right, b);
        a.constant = a.left.constant && a.right.constant;
        a.toWatch = [a];
        break;
      case s.ArrayExpression:
        d = !0;
        c = [];
        n(a.elements, function(a) {
          W(a, b);
          d = d && a.constant;
          a.constant || c.push.apply(c, a.toWatch)
        });
        a.constant = d;
        a.toWatch = c;
        break;
      case s.ObjectExpression:
        d = !0;
        c = [];
        n(a.properties, function(a) {
          W(a.value, b);
          d = d && a.value.constant;
          a.value.constant || c.push.apply(c, a.value.toWatch)
        });
        a.constant = d;
        a.toWatch = c;
        break;
      case s.ThisExpression:
        a.constant = !1, a.toWatch = []
    }
  }

  function nd(a) {
    if (1 == a.length) {
      a = a[0].expression;
      var b = a.toWatch;
      return 1 !== b.length ? b : b[0] !== a ? b : u
    }
  }

  function od(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression
  }

  function pd(a) {
    if (1 === a.body.length && od(a.body[0].expression))return {type: s.AssignmentExpression, left: a.body[0].expression, right: {type: s.NGValueParameter}, operator: "="}
  }

  function qd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
  }

  function rd(a, b) {
    this.astBuilder = a;
    this.$filter = b
  }

  function sd(a,
              b) {
    this.astBuilder = a;
    this.$filter = b
  }

  function Fb(a) {
    return "constructor" == a
  }

  function ec(a) {
    return z(a.valueOf) ? a.valueOf() : $f.call(a)
  }

  function kf() {
    var a = $(), b = $();
    this.$get = [
      "$filter", function(d) {
        function c(a, b) {
          return null == a || null == b ? a === b : "object" === typeof a && (a = ec(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
        }

        function e(a, b, d, e, f) {
          var g = e.inputs, h;
          if (1 === g.length) {
            var k = c, g = g[0];
            return a.$watch(function(a) {
              var b = g(a);
              c(b, k) || (h = e(a, u, u, [b]), k = b && ec(b));
              return h
            }, b, d, f)
          }
          for (var l = [], m = [], r = 0, n =
            g.length; r < n; r++)l[r] = c, m[r] = null;
          return a.$watch(function(a) {
            for (var b = !1, d = 0, f = g.length; d < f; d++) {
              var k = g[d](a);
              if (b || (b = !c(k, l[d])))m[d] = k, l[d] = k && ec(k)
            }
            b && (h = e(a, u, u, m));
            return h
          }, b, d, f)
        }

        function f(a, b, c, d) {
          var e, f;
          return e = a.$watch(function(a) {
            return d(a)
          }, function(a, c, d) {
            f = a;
            z(b) && b.apply(this, arguments);
            y(a) && d.$$postDigest(function() {
              y(f) && e()
            })
          }, c)
        }

        function g(a, b, c, d) {
          function e(a) {
            var b = !0;
            n(a, function(a) {
              y(a) || (b = !1)
            });
            return b
          }

          var f, g;
          return f = a.$watch(function(a) {
            return d(a)
          }, function(a,
                      c, d) {
            g = a;
            z(b) && b.call(this, a, c, d);
            e(a) && d.$$postDigest(function() {
              e(g) && f()
            })
          }, c)
        }

        function h(a, b, c, d) {
          var e;
          return e = a.$watch(function(a) {
            return d(a)
          }, function(a, c, d) {
            z(b) && b.apply(this, arguments);
            e()
          }, c)
        }

        function k(a, b) {
          if (!b)return a;
          var c = a.$$watchDelegate, d = !1, c = c !== g && c !== f ? function(c, e, f, g) {
            f = d && g ? g[0] : a(c, e, f, g);
            return b(f, c, e)
          } : function(c, d, e, f) {
            e = a(c, d, e, f);
            c = b(e, c, d);
            return y(e) ? c : e
          };
          a.$$watchDelegate && a.$$watchDelegate !== e ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate =
            e, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
          return c
        }

        var l = Ba().noUnsafeEval, m = {csp: l, expensiveChecks: !1}, r = {csp: l, expensiveChecks: !0};
        return function(c, l, v) {
          var n, p, q;
          switch (typeof c) {
            case "string":
              q = c = c.trim();
              var w = v ? b : a;
              n = w[q];
              n || (":" === c.charAt(0) && ":" === c.charAt(1) && (p = !0, c = c.substring(2)), v = v ? r : m, n = new fc(v), n = (new gc(n, d, v)).parse(c), n.constant ? n.$$watchDelegate = h : p ? n.$$watchDelegate = n.literal ? g : f : n.inputs && (n.$$watchDelegate = e), w[q] = n);
              return k(n, l);
            case "function":
              return k(c, l);
            default:
              return x
          }
        }
      }
    ]
  }

  function mf() {
    this.$get = [
      "$rootScope", "$exceptionHandler", function(a, b) {
        return td(function(b) {
          a.$evalAsync(b)
        }, b)
      }
    ]
  }

  function nf() {
    this.$get = [
      "$browser", "$exceptionHandler", function(a, b) {
        return td(function(b) {
          a.defer(b)
        }, b)
      }
    ]
  }

  function td(a, b) {
    function d(a, b, c) {
      function d(b) {
        return function(c) {
          e || (e = !0, b.call(a, c))
        }
      }

      var e = !1;
      return [d(b), d(c)]
    }

    function c() {
      this.$$state = {status: 0}
    }

    function e(a, b) {
      return function(c) {
        b.call(a, c)
      }
    }

    function f(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function() {
        var a,
          d, e;
        e = c.pending;
        c.processScheduled = !1;
        c.pending = u;
        for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];
          a = e[f][c.status];
          try {
            z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
          } catch (h) {
            d.reject(h), b(h)
          }
        }
      }))
    }

    function g() {
      this.promise = new c;
      this.resolve = e(this, this.resolve);
      this.reject = e(this, this.reject);
      this.notify = e(this, this.notify)
    }

    var h = G("$q", TypeError);
    M(c.prototype, {
      then: function(a, b, c) {
        if (q(a) && q(b) && q(c))return this;
        var d = new g;
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([d, a, b, c]);
        0 < this.$$state.status && f(this.$$state);
        return d.promise
      }, "catch": function(a) {
        return this.then(null, a)
      }, "finally": function(a, b) {
        return this.then(function(b) {
          return l(b, !0, a)
        }, function(b) {
          return l(b, !1, a)
        }, b)
      }
    });
    M(g.prototype, {
      resolve: function(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
      }, $$resolve: function(a) {
        var c, e;
        e = d(this, this.$$resolve, this.$$reject);
        try {
          if (H(a) || z(a))c = a && a.then;
          z(c) ? (this.promise.$$state.status = -1, c.call(a, e[0], e[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, f(this.promise.$$state))
        } catch (g) {
          e[1](g), b(g)
        }
      }, reject: function(a) {
        this.promise.$$state.status || this.$$reject(a)
      }, $$reject: function(a) {
        this.promise.$$state.value = a;
        this.promise.$$state.status = 2;
        f(this.promise.$$state)
      }, notify: function(c) {
        var d = this.promise.$$state.pending;
        0 >= this.promise.$$state.status && d && d.length && a(function() {
          for (var a, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];
            a = d[f][3];
            try {
              e.notify(z(a) ?
                a(c) : c)
            } catch (h) {
              b(h)
            }
          }
        })
      }
    });
    var k = function(a, b) {
      var c = new g;
      b ? c.resolve(a) : c.reject(a);
      return c.promise
    }, l = function(a, b, c) {
      var d = null;
      try {
        z(c) && (d = c())
      } catch (e) {
        return k(e, !1)
      }
      return d && z(d.then) ? d.then(function() {
        return k(a, b)
      }, function(a) {
        return k(a, !1)
      }) : k(a, b)
    }, m = function(a, b, c, d) {
      var e = new g;
      e.resolve(a);
      return e.promise.then(b, c, d)
    }, r = function A(a) {
      if (!z(a))throw h("norslvr", a);
      if (!(this instanceof A))return new A(a);
      var b = new g;
      a(function(a) {
        b.resolve(a)
      }, function(a) {
        b.reject(a)
      });
      return b.promise
    };
    r.defer = function() {
      return new g
    };
    r.reject = function(a) {
      var b = new g;
      b.reject(a);
      return b.promise
    };
    r.when = m;
    r.resolve = m;
    r.all = function(a) {
      var b = new g, c = 0, d = I(a) ? [] : {};
      n(a, function(a, e) {
        c++;
        m(a).then(function(a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
        }, function(a) {
          d.hasOwnProperty(e) || b.reject(a)
        })
      });
      0 === c && b.resolve(d);
      return b.promise
    };
    return r
  }

  function wf() {
    this.$get = [
      "$window", "$timeout", function(a, b) {
        var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame ||
          a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function(a) {
          var b = d(a);
          return function() {
            c(b)
          }
        } : function(a) {
          var c = b(a, 16.66, !1);
          return function() {
            b.cancel(c)
          }
        };
        f.supported = e;
        return f
      }
    ]
  }

  function lf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++nb;
        this.$$ChildScope = null
      }

      b.prototype = a;
      return b
    }

    var b = 10, d = G("$rootScope"), c = null, e = null;
    this.digestTtl = function(a) {
      arguments.length &&
      (b = a);
      return b
    };
    this.$get = [
      "$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, k) {
        function l(a) {
          a.currentScope.$$destroyed = !0
        }

        function m(a) {
          9 === Ha && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling));
          a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
        }

        function r() {
          this.$id = ++nb;
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this.$root = this;
          this.$$destroyed = !1;
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$watchersCount = 0;
          this.$$isolateBindings = null
        }

        function t(a) {
          if (w.$$phase)throw d("inprog", w.$$phase);
          w.$$phase = a
        }

        function A(a, b) {
          do a.$$watchersCount += b; while (a = a.$parent)
        }

        function v(a, b, c) {
          do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
        }

        function s() {
        }

        function p() {
          for (; aa.length;)try {
            aa.shift()()
          } catch (a) {
            g(a)
          }
          e = null
        }

        function C() {
          null === e && (e = k.defer(function() {
            w.$apply(p)
          }))
        }

        r.prototype = {
          constructor: r,
          $new: function(b, c) {
            var d;
            c = c || this;
            b ? (d = new r, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
            d.$parent = c;
            d.$$prevSibling = c.$$childTail;
            c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
            (b || c != this) && d.$on("$destroy", l);
            return d
          }, $watch: function(a, b, d, e) {
            var f = h(a);
            if (f.$$watchDelegate)return f.$$watchDelegate(this, b, d, f, a);
            var g = this, k = g.$$watchers, l = {fn: b, last: s, get: f, exp: e || a, eq: !!d};
            c = null;
            z(b) || (l.fn = x);
            k ||
            (k = g.$$watchers = []);
            k.unshift(l);
            A(this, 1);
            return function() {
              0 <= ab(k, l) && A(g, -1);
              c = null
            }
          }, $watchGroup: function(a, b) {
            function c() {
              h = !1;
              k ? (k = !1, b(e, e, g)) : b(e, d, g)
            }

            var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
            if (!a.length) {
              var l = !0;
              g.$evalAsync(function() {
                l && b(e, e, g)
              });
              return function() {
                l = !1
              }
            }
            if (1 === a.length)return this.$watch(a[0], function(a, c, f) {
              e[0] = a;
              d[0] = c;
              b(e, a === c ? e : d, f)
            });
            n(a, function(a, b) {
              var k = g.$watch(a, function(a, f) {
                e[b] = a;
                d[b] = f;
                h || (h = !0, g.$evalAsync(c))
              });
              f.push(k)
            });
            return function() {
              for (; f.length;)f.shift()()
            }
          },
          $watchCollection: function(a, b) {
            function c(a) {
              e = a;
              var b, d, g, h;
              if (!q(e)) {
                if (H(e))if (za(e))for (f !== r && (f = r, n = f.length = 0, l++), a = e.length, n !== a && (l++, f.length = n = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                  f !== t && (f = t = {}, n = 0, l++);
                  a = 0;
                  for (b in e)qa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));
                  if (n > a)for (b in l++, f)qa.call(e, b) || (n--, delete f[b])
                } else f !== e && (f = e, l++);
                return l
              }
            }

            c.$stateful = !0;
            var d = this, e, f, g, k = 1 < b.length, l = 0, m =
              h(a, c), r = [], t = {}, p = !0, n = 0;
            return this.$watch(m, function() {
              p ? (p = !1, b(e, e, d)) : b(e, g, d);
              if (k)if (H(e))if (za(e)) {
                g = Array(e.length);
                for (var a = 0; a < e.length; a++)g[a] = e[a]
              } else for (a in g = {}, e)qa.call(e, a) && (g[a] = e[a]); else g = e
            })
          }, $digest: function() {
            var a, f, h, l, m, r, n = b, A, q = [], v, C;
            t("$digest");
            k.$$checkUrlChange();
            this === w && null !== e && (k.defer.cancel(e), p());
            c = null;
            do {
              r = !1;
              for (A = this; u.length;) {
                try {
                  C = u.shift(), C.scope.$eval(C.expression, C.locals)
                } catch (aa) {
                  g(aa)
                }
                c = null
              }
              a:do {
                if (l = A.$$watchers)for (m = l.length; m--;)try {
                  if (a =
                      l[m])if ((f = a.get(A)) !== (h = a.last) && !(a.eq ? ma(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h)))r = !0, c = a, a.last = a.eq ? bb(f, null) : f, a.fn(f, h === s ? f : h, A), 5 > n && (v = 4 - n, q[v] || (q[v] = []), q[v].push({msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: f, oldVal: h})); else if (a === c) {
                    r = !1;
                    break a
                  }
                } catch (y) {
                  g(y)
                }
                if (!(l = A.$$watchersCount && A.$$childHead || A !== this && A.$$nextSibling))for (; A !== this && !(l = A.$$nextSibling);)A = A.$parent
              } while (A = l);
              if ((r || u.length) && !n--)throw w.$$phase = null, d("infdig",
                b, q);
            } while (r || u.length);
            for (w.$$phase = null; L.length;)try {
              L.shift()()
            } catch (x) {
              g(x)
            }
          }, $destroy: function() {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast("$destroy");
              this.$$destroyed = !0;
              this === w && k.$$applicationDestroyed();
              A(this, -this.$$watchersCount);
              for (var b in this.$$listenerCount)v(this, this.$$listenerCount[b], b);
              a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
              a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
              this.$$prevSibling && (this.$$prevSibling.$$nextSibling =
                this.$$nextSibling);
              this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = x;
              this.$on = this.$watch = this.$watchGroup = function() {
                return x
              };
              this.$$listeners = {};
              this.$$nextSibling = null;
              m(this)
            }
          }, $eval: function(a, b) {
            return h(a)(this, b)
          }, $evalAsync: function(a, b) {
            w.$$phase || u.length || k.defer(function() {
              u.length && w.$digest()
            });
            u.push({scope: this, expression: a, locals: b})
          }, $$postDigest: function(a) {
            L.push(a)
          }, $apply: function(a) {
            try {
              t("$apply");
              try {
                return this.$eval(a)
              } finally {
                w.$$phase = null
              }
            } catch (b) {
              g(b)
            } finally {
              try {
                w.$digest()
              } catch (c) {
                throw g(c), c;
              }
            }
          }, $applyAsync: function(a) {
            function b() {
              c.$eval(a)
            }

            var c = this;
            a && aa.push(b);
            C()
          }, $on: function(a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
            var e = this;
            return function() {
              var d = c.indexOf(b);
              -1 !== d && (c[d] = null, v(e, 1, a))
            }
          }, $emit: function(a, b) {
            var c = [], d, e = this, f = !1, h =
            {
              name: a, targetScope: e, stopPropagation: function() {
              f = !0
            }, preventDefault: function() {
              h.defaultPrevented = !0
            }, defaultPrevented: !1
            }, k = cb([h], arguments, 1), l, m;
            do {
              d = e.$$listeners[a] || c;
              h.currentScope = e;
              l = 0;
              for (m = d.length; l < m; l++)if (d[l])try {
                d[l].apply(null, k)
              } catch (r) {
                g(r)
              } else d.splice(l, 1), l--, m--;
              if (f)return h.currentScope = null, h;
              e = e.$parent
            } while (e);
            h.currentScope = null;
            return h
          }, $broadcast: function(a, b) {
            var c = this, d = this, e = {
              name: a, targetScope: this, preventDefault: function() {
                e.defaultPrevented = !0
              }, defaultPrevented: !1
            };
            if (!this.$$listenerCount[a])return e;
            for (var f = cb([e], arguments, 1), h, k; c = d;) {
              e.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)if (d[h])try {
                d[h].apply(null, f)
              } catch (l) {
                g(l)
              } else d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
            }
            e.currentScope = null;
            return e
          }
        };
        var w = new r, u = w.$$asyncQueue = [], L = w.$$postDigestQueue = [], aa = w.$$applyAsyncQueue = [];
        return w
      }
    ]
  }

  function ge() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
      b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function(b) {
      return y(b) ? (a = b, this) : a
    };
    this.imgSrcSanitizationWhitelist = function(a) {
      return y(a) ? (b = a, this) : b
    };
    this.$get = function() {
      return function(d, c) {
        var e = c ? b : a, f;
        f = wa(d).href;
        return "" === f || f.match(e) ? d : "unsafe:" + f
      }
    }
  }

  function ag(a) {
    if ("self" === a)return a;
    if (E(a)) {
      if (-1 < a.indexOf("***"))throw ya("iwcard", a);
      a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
      return new RegExp("^" + a + "$")
    }
    if (Ma(a))return new RegExp("^" +
      a.source + "$");
    throw ya("imatcher");
  }

  function vd(a) {
    var b = [];
    y(a) && n(a, function(a) {
      b.push(ag(a))
    });
    return b
  }

  function pf() {
    this.SCE_CONTEXTS = la;
    var a = ["self"], b = [];
    this.resourceUrlWhitelist = function(b) {
      arguments.length && (a = vd(b));
      return a
    };
    this.resourceUrlBlacklist = function(a) {
      arguments.length && (b = vd(a));
      return b
    };
    this.$get = [
      "$injector", function(d) {
        function c(a, b) {
          return "self" === a ? ed(b) : !!a.exec(b.href)
        }

        function e(a) {
          var b = function(a) {
            this.$$unwrapTrustedValue = function() {
              return a
            }
          };
          a && (b.prototype =
            new a);
          b.prototype.valueOf = function() {
            return this.$$unwrapTrustedValue()
          };
          b.prototype.toString = function() {
            return this.$$unwrapTrustedValue().toString()
          };
          return b
        }

        var f = function(a) {
          throw ya("unsafe");
        };
        d.has("$sanitize") && (f = d.get("$sanitize"));
        var g = e(), h = {};
        h[la.HTML] = e(g);
        h[la.CSS] = e(g);
        h[la.URL] = e(g);
        h[la.JS] = e(g);
        h[la.RESOURCE_URL] = e(h[la.URL]);
        return {
          trustAs: function(a, b) {
            var c = h.hasOwnProperty(a) ? h[a] : null;
            if (!c)throw ya("icontext", a, b);
            if (null === b || q(b) || "" === b)return b;
            if ("string" !== typeof b)throw ya("itype",
              a);
            return new c(b)
          }, getTrusted: function(d, e) {
            if (null === e || q(e) || "" === e)return e;
            var g = h.hasOwnProperty(d) ? h[d] : null;
            if (g && e instanceof g)return e.$$unwrapTrustedValue();
            if (d === la.RESOURCE_URL) {
              var g = wa(e.toString()), r, t, n = !1;
              r = 0;
              for (t = a.length; r < t; r++)if (c(a[r], g)) {
                n = !0;
                break
              }
              if (n)for (r = 0, t = b.length; r < t; r++)if (c(b[r], g)) {
                n = !1;
                break
              }
              if (n)return e;
              throw ya("insecurl", e.toString());
            }
            if (d === la.HTML)return f(e);
            throw ya("unsafe");
          }, valueOf: function(a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a
          }
        }
      }
    ]
  }

  function of() {
    var a = !0;
    this.enabled = function(b) {
      arguments.length && (a = !!b);
      return a
    };
    this.$get = [
      "$parse", "$sceDelegate", function(b, d) {
        if (a && 8 > Ha)throw ya("iequirks");
        var c = ia(la);
        c.isEnabled = function() {
          return a
        };
        c.trustAs = d.trustAs;
        c.getTrusted = d.getTrusted;
        c.valueOf = d.valueOf;
        a || (c.trustAs = c.getTrusted = function(a, b) {
          return b
        }, c.valueOf = Ya);
        c.parseAs = function(a, d) {
          var e = b(d);
          return e.literal && e.constant ? e : b(d, function(b) {
            return c.getTrusted(a, b)
          })
        };
        var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
        n(la, function(a,
                       b) {
          var d = F(b);
          c[fb("parse_as_" + d)] = function(b) {
            return e(a, b)
          };
          c[fb("get_trusted_" + d)] = function(b) {
            return f(a, b)
          };
          c[fb("trust_as_" + d)] = function(b) {
            return g(a, b)
          }
        });
        return c
      }
    ]
  }

  function qf() {
    this.$get = [
      "$window", "$document", function(a, b) {
        var d = {}, c = ea((/android (\d+)/.exec(F((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator || {}).userAgent), f = b[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
        if (k) {
          for (var r in k)if (l = h.exec(r)) {
            g = l[0];
            g = g.substr(0, 1).toUpperCase() +
              g.substr(1);
            break
          }
          g || (g = "WebkitOpacity" in k && "webkit");
          l = !!("transition" in k || g + "Transition" in k);
          m = !!("animation" in k || g + "Animation" in k);
          !c || l && m || (l = E(k.webkitTransition), m = E(k.webkitAnimation))
        }
        return {
          history: !(!a.history || !a.history.pushState || 4 > c || e), hasEvent: function(a) {
            if ("input" === a && 11 >= Ha)return !1;
            if (q(d[a])) {
              var b = f.createElement("div");
              d[a] = "on" + a in b
            }
            return d[a]
          }, csp: Ba(), vendorPrefix: g, transitions: l, animations: m, android: c
        }
      }
    ]
  }

  function sf() {
    this.$get = [
      "$templateCache", "$http", "$q", "$sce",
      function(a, b, d, c) {
        function e(f, g) {
          e.totalPendingRequests++;
          E(f) && a.get(f) || (f = c.getTrustedResourceUrl(f));
          var h = b.defaults && b.defaults.transformResponse;
          I(h) ? h = h.filter(function(a) {
            return a !== $b
          }) : h === $b && (h = null);
          return b.get(f, {cache: a, transformResponse: h})["finally"](function() {
            e.totalPendingRequests--
          }).then(function(b) {
            a.put(f, b.data);
            return b.data
          }, function(a) {
            if (!g)throw ha("tpload", f, a.status, a.statusText);
            return d.reject(a)
          })
        }

        e.totalPendingRequests = 0;
        return e
      }
    ]
  }

  function tf() {
    this.$get = [
      "$rootScope",
      "$browser", "$location", function(a, b, d) {
        return {
          findBindings: function(a, b, d) {
            a = a.getElementsByClassName("ng-binding");
            var g = [];
            n(a, function(a) {
              var c = fa.element(a).data("$binding");
              c && n(c, function(c) {
                d ? (new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
              })
            });
            return g
          }, findModels: function(a, b, d) {
            for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
              var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
              if (k.length)return k
            }
          }, getLocation: function() {
            return d.url()
          },
          setLocation: function(b) {
            b !== d.url() && (d.url(b), a.$digest())
          }, whenStable: function(a) {
            b.notifyWhenNoOutstandingRequests(a)
          }
        }
      }
    ]
  }

  function uf() {
    this.$get = [
      "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, d, c, e) {
        function f(f, k, l) {
          z(f) || (l = k, k = f, f = x);
          var m = ra.call(arguments, 3), r = y(l) && !l, t = (r ? c : d).defer(), n = t.promise, q;
          q = b.defer(function() {
            try {
              t.resolve(f.apply(null, m))
            } catch (b) {
              t.reject(b), e(b)
            } finally {
              delete g[n.$$timeoutId]
            }
            r || a.$apply()
          }, k);
          n.$$timeoutId = q;
          g[q] = t;
          return n
        }

        var g = {};
        f.cancel = function(a) {
          return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
        };
        return f
      }
    ]
  }

  function wa(a) {
    Ha && (Y.setAttribute("href", a), a = Y.href);
    Y.setAttribute("href", a);
    return {href: Y.href, protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "", host: Y.host, search: Y.search ? Y.search.replace(/^\?/, "") : "", hash: Y.hash ? Y.hash.replace(/^#/, "") : "", hostname: Y.hostname, port: Y.port, pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname}
  }

  function ed(a) {
    a =
      E(a) ? wa(a) : a;
    return a.protocol === wd.protocol && a.host === wd.host
  }

  function vf() {
    this.$get = na(S)
  }

  function xd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {
        return a
      }
    }

    var d = a[0] || {}, c = {}, e = "";
    return function() {
      var a, g, h, k, l;
      a = d.cookie || "";
      if (a !== e)for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++)g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), q(c[l]) && (c[l] = b(g.substring(k + 1))));
      return c
    }
  }

  function zf() {
    this.$get = xd
  }

  function Jc(a) {
    function b(d, c) {
      if (H(d)) {
        var e = {};
        n(d, function(a, c) {
          e[c] =
            b(c, a)
        });
        return e
      }
      return a.factory(d + "Filter", c)
    }

    this.register = b;
    this.$get = [
      "$injector", function(a) {
        return function(b) {
          return a.get(b + "Filter")
        }
      }
    ];
    b("currency", yd);
    b("date", zd);
    b("filter", bg);
    b("json", cg);
    b("limitTo", dg);
    b("lowercase", eg);
    b("number", Ad);
    b("orderBy", Bd);
    b("uppercase", fg)
  }

  function bg() {
    return function(a, b, d) {
      if (!za(a)) {
        if (null == a)return a;
        throw G("filter")("notarray", a);
      }
      var c;
      switch (hc(b)) {
        case "function":
          break;
        case "boolean":
        case "null":
        case "number":
        case "string":
          c = !0;
        case "object":
          b =
            gg(b, d, c);
          break;
        default:
          return a
      }
      return Array.prototype.filter.call(a, b)
    }
  }

  function gg(a, b, d) {
    var c = H(a) && "$" in a;
    !0 === b ? b = ma : z(b) || (b = function(a, b) {
      if (q(a))return !1;
      if (null === a || null === b)return a === b;
      if (H(b) || H(a) && !qc(a))return !1;
      a = F("" + a);
      b = F("" + b);
      return -1 !== a.indexOf(b)
    });
    return function(e) {
      return c && !H(e) ? Ka(e, a.$, b, !1) : Ka(e, a, b, d)
    }
  }

  function Ka(a, b, d, c, e) {
    var f = hc(a), g = hc(b);
    if ("string" === g && "!" === b.charAt(0))return !Ka(a, b.substring(1), d, c);
    if (I(a))return a.some(function(a) {
      return Ka(a, b, d, c)
    });
    switch (f) {
      case "object":
        var h;
        if (c) {
          for (h in a)if ("$" !== h.charAt(0) && Ka(a[h], b, d, !0))return !0;
          return e ? !1 : Ka(a, b, d, !1)
        }
        if ("object" === g) {
          for (h in b)if (e = b[h], !z(e) && !q(e) && (f = "$" === h, !Ka(f ? a : a[h], e, d, f, f)))return !1;
          return !0
        }
        return d(a, b);
      case "function":
        return !1;
      default:
        return d(a, b)
    }
  }

  function hc(a) {
    return null === a ? "null" : typeof a
  }

  function yd(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c, e) {
      q(c) && (c = b.CURRENCY_SYM);
      q(e) && (e = b.PATTERNS[1].maxFrac);
      return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP,
        e).replace(/\u00A4/g, c)
    }
  }

  function Ad(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c) {
      return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
    }
  }

  function Cd(a, b, d, c, e) {
    if (H(a))return "";
    var f = 0 > a;
    a = Math.abs(a);
    var g = Infinity === a;
    if (!g && !isFinite(a))return "";
    var h = a + "", k = "", l = !1, m = [];
    g && (k = "\u221e");
    if (!g && -1 !== h.indexOf("e")) {
      var r = h.match(/([\d\.]+)e(-?)(\d+)/);
      r && "-" == r[2] && r[3] > e + 1 ? a = 0 : (k = h, l = !0)
    }
    if (g || l)0 < e && 1 > a && (k = a.toFixed(e), a = parseFloat(k), k = k.replace(ic, c)); else {
      g = (h.split(ic)[1] || "").length;
      q(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac));
      a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
      var g = ("" + a).split(ic), h = g[0], g = g[1] || "", r = 0, t = b.lgSize, n = b.gSize;
      if (h.length >= t + n)for (r = h.length - t, l = 0; l < r; l++)0 === (r - l) % n && 0 !== l && (k += d), k += h.charAt(l);
      for (l = r; l < h.length; l++)0 === (h.length - l) % t && 0 !== l && (k += d), k += h.charAt(l);
      for (; g.length < e;)g += "0";
      e && "0" !== e && (k += c + g.substr(0, e))
    }
    0 === a && (f = !1);
    m.push(f ? b.negPre : b.posPre, k, f ? b.negSuf : b.posSuf);
    return m.join("")
  }

  function Gb(a, b, d) {
    var c = "";
    0 > a && (c = "-", a = -a);
    for (a = "" + a; a.length < b;)a = "0" + a;
    d && (a = a.substr(a.length - b));
    return c + a
  }

  function ca(a, b, d, c) {
    d = d || 0;
    return function(e) {
      e = e["get" + a]();
      if (0 < d || e > -d)e += d;
      0 === e && -12 == d && (e = 12);
      return Gb(e, b, c)
    }
  }

  function Hb(a, b) {
    return function(d, c) {
      var e = d["get" + a](), f = sb(b ? "SHORT" + a : a);
      return c[f][e]
    }
  }

  function Dd(a) {
    var b = (new Date(a, 0, 1)).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b)
  }

  function Ed(a) {
    return function(b) {
      var d = Dd(b.getFullYear());
      b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
      b = 1 + Math.round(b / 6048E5);
      return Gb(b, a)
    }
  }

  function jc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
  }

  function zd(a) {
    function b(a) {
      var b;
      if (b = a.match(d)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = ea(b[9] + b[10]), g = ea(b[9] + b[11]));
        h.call(a, ea(b[1]), ea(b[2]) - 1, ea(b[3]));
        f = ea(b[4] || 0) - f;
        g = ea(b[5] || 0) - g;
        h = ea(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        k.call(a, f, g, h, b)
      }
      return a
    }

    var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function(c, d, f) {
      var g = "", h = [], k, l;
      d = d || "mediumDate";
      d = a.DATETIME_FORMATS[d] || d;
      E(c) && (c = hg.test(c) ? ea(c) : b(c));
      Q(c) && (c = new Date(c));
      if (!da(c) || !isFinite(c.getTime()))return c;
      for (; d;)(l = ig.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      var m = c.getTimezoneOffset();
      f && (m = vc(f, c.getTimezoneOffset()), c = Pb(c, f, !0));
      n(h, function(b) {
        k = jg[b];
        g += k ? k(c, a.DATETIME_FORMATS, m) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      });
      return g
    }
  }

  function cg() {
    return function(a, b) {
      q(b) && (b = 2);
      return db(a, b)
    }
  }

  function dg() {
    return function(a,
                    b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : ea(b);
      if (isNaN(b))return a;
      Q(a) && (a = a.toString());
      if (!I(a) && !E(a))return a;
      d = !d || isNaN(d) ? 0 : ea(d);
      d = 0 > d ? Math.max(0, a.length + d) : d;
      return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d)
    }
  }

  function Bd(a) {
    function b(b, d) {
      d = d ? -1 : 1;
      return b.map(function(b) {
        var c = 1, h = Ya;
        if (z(b))h = b; else if (E(b)) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0))c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
          if ("" !== b && (h = a(b), h.constant))var k = h(), h = function(a) {
            return a[k]
          }
        }
        return {
          get: h,
          descending: c * d
        }
      })
    }

    function d(a) {
      switch (typeof a) {
        case "number":
        case "boolean":
        case "string":
          return !0;
        default:
          return !1
      }
    }

    return function(a, e, f) {
      if (!za(a))return a;
      I(e) || (e = [e]);
      0 === e.length && (e = ["+"]);
      var g = b(e, f);
      g.push({
        get: function() {
          return {}
        }, descending: f ? -1 : 1
      });
      a = Array.prototype.map.call(a, function(a, b) {
        return {
          value: a, predicateValues: g.map(function(c) {
            var e = c.get(a);
            c = typeof e;
            if (null === e)c = "string", e = "null"; else if ("string" === c)e = e.toLowerCase(); else if ("object" === c)a:{
              if ("function" === typeof e.valueOf &&
                (e = e.valueOf(), d(e)))break a;
              if (qc(e) && (e = e.toString(), d(e)))break a;
              e = b
            }
            return {value: e, type: c}
          })
        }
      });
      a.sort(function(a, b) {
        for (var c = 0, d = 0, e = g.length; d < e; ++d) {
          var c = a.predicateValues[d], f = b.predicateValues[d], n = 0;
          c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ? -1 : 1;
          if (c = n * g[d].descending)break
        }
        return c
      });
      return a = a.map(function(a) {
        return a.value
      })
    }
  }

  function La(a) {
    z(a) && (a = {link: a});
    a.restrict = a.restrict || "AC";
    return na(a)
  }

  function Fd(a, b, d, c, e) {
    var f = this, g = [];
    f.$error =
    {};
    f.$$success = {};
    f.$pending = u;
    f.$name = e(b.name || b.ngForm || "")(d);
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    f.$submitted = !1;
    f.$$parentForm = Ib;
    f.$rollbackViewValue = function() {
      n(g, function(a) {
        a.$rollbackViewValue()
      })
    };
    f.$commitViewValue = function() {
      n(g, function(a) {
        a.$commitViewValue()
      })
    };
    f.$addControl = function(a) {
      Ra(a.$name, "input");
      g.push(a);
      a.$name && (f[a.$name] = a);
      a.$$parentForm = f
    };
    f.$$renameControl = function(a, b) {
      var c = a.$name;
      f[c] === a && delete f[c];
      f[b] = a;
      a.$name = b
    };
    f.$removeControl = function(a) {
      a.$name &&
      f[a.$name] === a && delete f[a.$name];
      n(f.$pending, function(b, c) {
        f.$setValidity(c, null, a)
      });
      n(f.$error, function(b, c) {
        f.$setValidity(c, null, a)
      });
      n(f.$$success, function(b, c) {
        f.$setValidity(c, null, a)
      });
      ab(g, a);
      a.$$parentForm = Ib
    };
    Gd({
      ctrl: this, $element: a, set: function(a, b, c) {
        var d = a[b];
        d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
      }, unset: function(a, b, c) {
        var d = a[b];
        d && (ab(d, c), 0 === d.length && delete a[b])
      }, $animate: c
    });
    f.$setDirty = function() {
      c.removeClass(a, Wa);
      c.addClass(a, Jb);
      f.$dirty = !0;
      f.$pristine = !1;
      f.$$parentForm.$setDirty()
    };
    f.$setPristine = function() {
      c.setClass(a, Wa, Jb + " ng-submitted");
      f.$dirty = !1;
      f.$pristine = !0;
      f.$submitted = !1;
      n(g, function(a) {
        a.$setPristine()
      })
    };
    f.$setUntouched = function() {
      n(g, function(a) {
        a.$setUntouched()
      })
    };
    f.$setSubmitted = function() {
      c.addClass(a, "ng-submitted");
      f.$submitted = !0;
      f.$$parentForm.$setSubmitted()
    }
  }

  function kc(a) {
    a.$formatters.push(function(b) {
      return a.$isEmpty(b) ? b : b.toString()
    })
  }

  function jb(a, b, d, c, e, f) {
    var g = F(b[0].type);
    if (!e.android) {
      var h = !1;
      b.on("compositionstart", function(a) {
        h = !0
      });
      b.on("compositionend", function() {
        h = !1;
        k()
      })
    }
    var k = function(a) {
      l && (f.defer.cancel(l), l = null);
      if (!h) {
        var e = b.val();
        a = a && a.type;
        "password" === g || d.ngTrim && "false" === d.ngTrim || (e = U(e));
        (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
      }
    };
    if (e.hasEvent("input"))b.on("input", k); else {
      var l, m = function(a, b, c) {
        l || (l = f.defer(function() {
          l = null;
          b && b.value === c || k(a)
        }))
      };
      b.on("keydown", function(a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
      });
      if (e.hasEvent("paste"))b.on("paste cut",
        m)
    }
    b.on("change", k);
    c.$render = function() {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
      b.val() !== a && b.val(a)
    }
  }

  function Kb(a, b) {
    return function(d, c) {
      var e, f;
      if (da(d))return d;
      if (E(d)) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (kg.test(d))return new Date(d);
        a.lastIndex = 0;
        if (e = a.exec(d))return e.shift(), f = c ? {yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3} : {
          yyyy: 1970, MM: 1, dd: 1, HH: 0,
          mm: 0, ss: 0, sss: 0
        }, n(e, function(a, c) {
          c < b.length && (f[b[c]] = +a)
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
      }
      return NaN
    }
  }

  function kb(a, b, d, c) {
    return function(e, f, g, h, k, l, m) {
      function r(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime())
      }

      function n(a) {
        return y(a) && !da(a) ? d(a) || u : a
      }

      Hd(e, f, g, h);
      jb(e, f, g, h, k, l);
      var A = h && h.$options && h.$options.timezone, v;
      h.$$parserName = a;
      h.$parsers.push(function(a) {
        return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, v), A && (a = Pb(a, A)), a) : u
      });
      h.$formatters.push(function(a) {
        if (a && !da(a))throw lb("datefmt", a);
        if (r(a))return (v = a) && A && (v = Pb(v, A, !0)), m("date")(a, c, A);
        v = null;
        return ""
      });
      if (y(g.min) || g.ngMin) {
        var s;
        h.$validators.min = function(a) {
          return !r(a) || q(s) || d(a) >= s
        };
        g.$observe("min", function(a) {
          s = n(a);
          h.$validate()
        })
      }
      if (y(g.max) || g.ngMax) {
        var p;
        h.$validators.max = function(a) {
          return !r(a) || q(p) || d(a) <= p
        };
        g.$observe("max", function(a) {
          p = n(a);
          h.$validate()
        })
      }
    }
  }

  function Hd(a, b, d, c) {
    (c.$$hasNativeValidators = H(b[0].validity)) && c.$parsers.push(function(a) {
      var c = b.prop("validity") || {};
      return c.badInput && !c.typeMismatch ? u : a
    })
  }

  function Id(a, b, d, c, e) {
    if (y(c)) {
      a = a(c);
      if (!a.constant)throw lb("constexpr", d, c);
      return a(b)
    }
    return e
  }

  function lc(a, b) {
    a = "ngClass" + a;
    return [
      "$animate", function(d) {
        function c(a, b) {
          var c = [], d = 0;
          a:for (; d < a.length; d++) {
            for (var e = a[d], m = 0; m < b.length; m++)if (e == b[m])continue a;
            c.push(e)
          }
          return c
        }

        function e(a) {
          var b = [];
          return I(a) ? (n(a, function(a) {
            b = b.concat(e(a))
          }), b) : E(a) ? a.split(" ") : H(a) ? (n(a, function(a, c) {
            a && (b = b.concat(c.split(" ")))
          }), b) : a
        }

        return {
          restrict: "AC",
          link: function(f, g, h) {
            function k(a, b) {
              var c = g.data("$classCounts") || $(), d = [];
              n(a, function(a) {
                if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
              });
              g.data("$classCounts", c);
              return d.join(" ")
            }

            function l(a) {
              if (!0 === b || f.$index % 2 === b) {
                var l = e(a || []);
                if (!m) {
                  var n = k(l, 1);
                  h.$addClass(n)
                } else if (!ma(a, m)) {
                  var q = e(m), n = c(l, q), l = c(q, l), n = k(n, 1), l = k(l, -1);
                  n && n.length && d.addClass(g, n);
                  l && l.length && d.removeClass(g, l)
                }
              }
              m = ia(a)
            }

            var m;
            f.$watch(h[a], l, !0);
            h.$observe("class", function(b) {
              l(f.$eval(h[a]))
            });
            "ngClass" !==
            a && f.$watch("$index", function(c, d) {
              var g = c & 1;
              if (g !== (d & 1)) {
                var l = e(f.$eval(h[a]));
                g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
              }
            })
          }
        }
      }
    ]
  }

  function Gd(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
    }

    function d(a, c) {
      a = a ? "-" + zc(a, "-") : "";
      b(mb + a, !0 === c);
      b(Jd + a, !1 === c)
    }

    var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
    f[Jd] = !(f[mb] = e.hasClass(mb));
    c.$setValidity = function(a, e, f) {
      q(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending &&
      h(c.$pending, a, f), Kd(c.$pending) && (c.$pending = u));
      $a(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
      c.$pending ? (b(Ld, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Ld, !1), c.$valid = Kd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));
      e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
      d(a, e);
      c.$$parentForm.$setValidity(a, e, c)
    }
  }

  function Kd(a) {
    if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
    return !0
  }

  var lg = /^\/(.+)\/([a-z]*)$/,
    F = function(a) {
      return E(a) ? a.toLowerCase() : a
    }, qa = Object.prototype.hasOwnProperty, sb = function(a) {
      return E(a) ? a.toUpperCase() : a
    }, Ha, B, oa, ra = [].slice, Pf = [].splice, mg = [].push, sa = Object.prototype.toString, rc = Object.getPrototypeOf, Aa = G("ng"), fa = S.angular || (S.angular = {}), Sb, nb = 0;
  Ha = X.documentMode;
  x.$inject = [];
  Ya.$inject = [];
  var I = Array.isArray, Vd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, U = function(a) {
    return E(a) ? a.trim() : a
  }, ud = function(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
      "\\$1").replace(/\x08/g, "\\x08")
  }, Ba = function() {
    if (!y(Ba.rules)) {
      var a = X.querySelector("[ng-csp]") || X.querySelector("[data-ng-csp]");
      if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
        Ba.rules = {noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")}
      } else {
        a = Ba;
        try {
          new Function(""), b = !1
        } catch (d) {
          b = !0
        }
        a.rules = {noUnsafeEval: b, noInlineStyle: !1}
      }
    }
    return Ba.rules
  }, pb = function() {
    if (y(pb.name_))return pb.name_;
    var a, b, d = Oa.length, c, e;
    for (b = 0; b <
    d; ++b)if (c = Oa[b], a = X.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
      e = a.getAttribute(c + "jq");
      break
    }
    return pb.name_ = e
  }, Oa = ["ng-", "data-ng-", "ng:", "x-ng-"], be = /[A-Z]/g, Ac = !1, Rb, Na = 3, fe = {full: "1.4.8", major: 1, minor: 4, dot: 8, codeName: "ice-manipulation"};
  N.expando = "ng339";
  var gb = N.cache = {}, Ff = 1;
  N._data = function(a) {
    return this.cache[a[this.expando]] || {}
  };
  var Af = /([\:\-\_]+(.))/g, Bf = /^moz([A-Z])/, xb = {mouseleave: "mouseout", mouseenter: "mouseover"}, Ub = G("jqLite"), Ef = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/,
    Cf = /<([\w:-]+)/, Df = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ka = {option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
  ka.optgroup = ka.option;
  ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
  ka.th = ka.td;
  var Kf = Node.prototype.contains || function(a) {
      return !!(this.compareDocumentPosition(a) &
      16)
    }, Pa = N.prototype = {
    ready: function(a) {
      function b() {
        d || (d = !0, a())
      }

      var d = !1;
      "complete" === X.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), N(S).on("load", b))
    }, toString: function() {
      var a = [];
      n(this, function(b) {
        a.push("" + b)
      });
      return "[" + a.join(", ") + "]"
    }, eq: function(a) {
      return 0 <= a ? B(this[a]) : B(this[this.length + a])
    }, length: 0, push: mg, sort: [].sort, splice: [].splice
  }, Cb = {};
  n("multiple selected checked disabled readOnly required open".split(" "), function(a) {
    Cb[F(a)] = a
  });
  var Rc = {};
  n("input select option textarea button form details".split(" "),
    function(a) {
      Rc[a] = !0
    });
  var Zc = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
  n({
    data: Wb, removeData: vb, hasData: function(a) {
      for (var b in gb[a.ng339])return !0;
      return !1
    }
  }, function(a, b) {
    N[b] = a
  });
  n({
    data: Wb, inheritedData: Bb, scope: function(a) {
      return B.data(a, "$scope") || Bb(a.parentNode || a, ["$isolateScope", "$scope"])
    }, isolateScope: function(a) {
      return B.data(a, "$isolateScope") || B.data(a, "$isolateScopeNoTemplate")
    }, controller: Oc, injector: function(a) {
      return Bb(a,
        "$injector")
    }, removeAttr: function(a, b) {
      a.removeAttribute(b)
    }, hasClass: yb, css: function(a, b, d) {
      b = fb(b);
      if (y(d))a.style[b] = d; else return a.style[b]
    }, attr: function(a, b, d) {
      var c = a.nodeType;
      if (c !== Na && 2 !== c && 8 !== c)if (c = F(b), Cb[c])if (y(d))d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c)); else return a[b] || (a.attributes.getNamedItem(b) || x).specified ? c : u; else if (y(d))a.setAttribute(b, d); else if (a.getAttribute)return a = a.getAttribute(b, 2), null === a ? u : a
    }, prop: function(a, b, d) {
      if (y(d))a[b] = d; else return a[b]
    },
    text: function() {
      function a(a, d) {
        if (q(d)) {
          var c = a.nodeType;
          return 1 === c || c === Na ? a.textContent : ""
        }
        a.textContent = d
      }

      a.$dv = "";
      return a
    }(), val: function(a, b) {
      if (q(b)) {
        if (a.multiple && "select" === ta(a)) {
          var d = [];
          n(a.options, function(a) {
            a.selected && d.push(a.value || a.text)
          });
          return 0 === d.length ? null : d
        }
        return a.value
      }
      a.value = b
    }, html: function(a, b) {
      if (q(b))return a.innerHTML;
      ub(a, !0);
      a.innerHTML = b
    }, empty: Pc
  }, function(a, b) {
    N.prototype[b] = function(b, c) {
      var e, f, g = this.length;
      if (a !== Pc && q(2 == a.length && a !== yb && a !== Oc ?
          b : c)) {
        if (H(b)) {
          for (e = 0; e < g; e++)if (a === Wb)a(this[e], b); else for (f in b)a(this[e], f, b[f]);
          return this
        }
        e = a.$dv;
        g = q(e) ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);
          e = e ? e + h : h
        }
        return e
      }
      for (e = 0; e < g; e++)a(this[e], b, c);
      return this
    }
  });
  n({
    removeData: vb, on: function(a, b, d, c) {
      if (y(c))throw Ub("onargs");
      if (Kc(a)) {
        c = wb(a, !0);
        var e = c.events, f = c.handle;
        f || (f = c.handle = Hf(a, e));
        c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
        for (var g = c.length, h = function(b, c, g) {
          var h = e[b];
          h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" ===
          b || g || a.addEventListener(b, f, !1));
          h.push(d)
        }; g--;)b = c[g], xb[b] ? (h(xb[b], Jf), h(b, u, !0)) : h(b)
      }
    }, off: Nc, one: function(a, b, d) {
      a = B(a);
      a.on(b, function e() {
        a.off(b, d);
        a.off(b, e)
      });
      a.on(b, d)
    }, replaceWith: function(a, b) {
      var d, c = a.parentNode;
      ub(a);
      n(new N(b), function(b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
        d = b
      })
    }, children: function(a) {
      var b = [];
      n(a.childNodes, function(a) {
        1 === a.nodeType && b.push(a)
      });
      return b
    }, contents: function(a) {
      return a.contentDocument || a.childNodes || []
    }, append: function(a, b) {
      var d =
        a.nodeType;
      if (1 === d || 11 === d) {
        b = new N(b);
        for (var d = 0, c = b.length; d < c; d++)a.appendChild(b[d])
      }
    }, prepend: function(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        n(new N(b), function(b) {
          a.insertBefore(b, d)
        })
      }
    }, wrap: function(a, b) {
      b = B(b).eq(0).clone()[0];
      var d = a.parentNode;
      d && d.replaceChild(b, a);
      b.appendChild(a)
    }, remove: Xb, detach: function(a) {
      Xb(a, !0)
    }, after: function(a, b) {
      var d = a, c = a.parentNode;
      b = new N(b);
      for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];
        c.insertBefore(g, d.nextSibling);
        d = g
      }
    }, addClass: Ab, removeClass: zb,
    toggleClass: function(a, b, d) {
      b && n(b.split(" "), function(b) {
        var e = d;
        q(e) && (e = !yb(a, b));
        (e ? Ab : zb)(a, b)
      })
    }, parent: function(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, next: function(a) {
      return a.nextElementSibling
    }, find: function(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : []
    }, clone: Vb, triggerHandler: function(a, b, d) {
      var c, e, f = b.type || b, g = wb(a);
      if (g = (g = g && g.events) && g[f])c = {
        preventDefault: function() {
          this.defaultPrevented = !0
        }, isDefaultPrevented: function() {
          return !0 === this.defaultPrevented
        },
        stopImmediatePropagation: function() {
          this.immediatePropagationStopped = !0
        }, isImmediatePropagationStopped: function() {
          return !0 === this.immediatePropagationStopped
        }, stopPropagation: x, type: f, target: a
      }, b.type && (c = M(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], n(b, function(b) {
        c.isImmediatePropagationStopped() || b.apply(a, e)
      })
    }
  }, function(a, b) {
    N.prototype[b] = function(b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++)q(f) ? (f = a(this[g], b, c, e), y(f) && (f = B(f))) : Mc(f, a(this[g], b, c, e));
      return y(f) ? f : this
    };
    N.prototype.bind = N.prototype.on;
    N.prototype.unbind = N.prototype.off
  });
  Sa.prototype = {
    put: function(a, b) {
      this[Ca(a, this.nextUid)] = b
    }, get: function(a) {
      return this[Ca(a, this.nextUid)]
    }, remove: function(a) {
      var b = this[a = Ca(a, this.nextUid)];
      delete this[a];
      return b
    }
  };
  var yf = [
    function() {
      this.$get = [
        function() {
          return Sa
        }
      ]
    }
  ], Tc = /^[^\(]*\(\s*([^\)]*)\)/m, ng = /,/, og = /^\s*(_?)(\S+?)\1\s*$/, Sc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Da = G("$injector");
  eb.$$annotate = function(a, b, d) {
    var c;
    if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];
        if (a.length) {
          if (b)throw E(d) &&
          d || (d = a.name || Lf(a)), Da("strictdi", d);
          b = a.toString().replace(Sc, "");
          b = b.match(Tc);
          n(b[1].split(ng), function(a) {
            a.replace(og, function(a, b, d) {
              c.push(d)
            })
          })
        }
        a.$inject = c
      }
    } else I(a) ? (b = a.length - 1, Qa(a[b], "fn"), c = a.slice(0, b)) : Qa(a, "fn", !0);
    return c
  };
  var Md = G("$animate"), Ue = function() {
    this.$get = [
      "$q", "$$rAF", function(a, b) {
        function d() {
        }

        d.all = x;
        d.chain = x;
        d.prototype = {
          end: x, cancel: x, resume: x, pause: x, complete: x, then: function(c, d) {
            return a(function(a) {
              b(function() {
                a()
              })
            }).then(c, d)
          }
        };
        return d
      }
    ]
  }, Te = function() {
    var a =
      new Sa, b = [];
    this.$get = [
      "$$AnimateRunner", "$rootScope", function(d, c) {
        function e(a, b, c) {
          var d = !1;
          b && (b = E(b) ? b.split(" ") : I(b) ? b : [], n(b, function(b) {
            b && (d = !0, a[b] = c)
          }));
          return d
        }

        function f() {
          n(b, function(b) {
            var c = a.get(b);
            if (c) {
              var d = Mf(b.attr("class")), e = "", f = "";
              n(c, function(a, b) {
                a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
              });
              n(b, function(a) {
                e && Ab(a, e);
                f && zb(a, f)
              });
              a.remove(b)
            }
          });
          b.length = 0
        }

        return {
          enabled: x, on: x, off: x, pin: x, push: function(g, h, k, l) {
            l && l();
            k = k || {};
            k.from && g.css(k.from);
            k.to && g.css(k.to);
            if (k.addClass || k.removeClass)if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
            return new d
          }
        }
      }
    ]
  }, Re = [
    "$provide", function(a) {
      var b = this;
      this.$$registeredAnimations = Object.create(null);
      this.register = function(d, c) {
        if (d && "." !== d.charAt(0))throw Md("notcsel", d);
        var e = d + "-animation";
        b.$$registeredAnimations[d.substr(1)] = e;
        a.factory(e, c)
      };
      this.classNameFilter = function(a) {
        if (1 === arguments.length && (this.$$classNameFilter =
            a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls", "ng-animate");
        return this.$$classNameFilter
      };
      this.$get = [
        "$$animateQueue", function(a) {
          function b(a, c, d) {
            if (d) {
              var h;
              a:{
                for (h = 0; h < d.length; h++) {
                  var k = d[h];
                  if (1 === k.nodeType) {
                    h = k;
                    break a
                  }
                }
                h = void 0
              }
              !h || h.parentNode || h.previousElementSibling || (d = null)
            }
            d ? d.after(a) : c.prepend(a)
          }

          return {
            on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function(a) {
              a.end && a.end()
            }, enter: function(e, f, g, h) {
              f =
                f && B(f);
              g = g && B(g);
              f = f || g.parent();
              b(e, f, g);
              return a.push(e, "enter", Ea(h))
            }, move: function(e, f, g, h) {
              f = f && B(f);
              g = g && B(g);
              f = f || g.parent();
              b(e, f, g);
              return a.push(e, "move", Ea(h))
            }, leave: function(b, c) {
              return a.push(b, "leave", Ea(c), function() {
                b.remove()
              })
            }, addClass: function(b, c, g) {
              g = Ea(g);
              g.addClass = hb(g.addclass, c);
              return a.push(b, "addClass", g)
            }, removeClass: function(b, c, g) {
              g = Ea(g);
              g.removeClass = hb(g.removeClass, c);
              return a.push(b, "removeClass", g)
            }, setClass: function(b, c, g, h) {
              h = Ea(h);
              h.addClass = hb(h.addClass,
                c);
              h.removeClass = hb(h.removeClass, g);
              return a.push(b, "setClass", h)
            }, animate: function(b, c, g, h, k) {
              k = Ea(k);
              k.from = k.from ? M(k.from, c) : c;
              k.to = k.to ? M(k.to, g) : g;
              k.tempClasses = hb(k.tempClasses, h || "ng-inline-animate");
              return a.push(b, "animate", k)
            }
          }
        }
      ]
    }
  ], Se = function() {
    this.$get = [
      "$$rAF", "$q", function(a, b) {
        var d = function() {
        };
        d.prototype = {
          done: function(a) {
            this.defer && this.defer[!0 === a ? "reject" : "resolve"]()
          }, end: function() {
            this.done()
          }, cancel: function() {
            this.done(!0)
          }, getPromise: function() {
            this.defer || (this.defer =
              b.defer());
            return this.defer.promise
          }, then: function(a, b) {
            return this.getPromise().then(a, b)
          }, "catch": function(a) {
            return this.getPromise()["catch"](a)
          }, "finally": function(a) {
            return this.getPromise()["finally"](a)
          }
        };
        return function(b, e) {
          function f() {
            a(function() {
              e.addClass && (b.addClass(e.addClass), e.addClass = null);
              e.removeClass && (b.removeClass(e.removeClass), e.removeClass = null);
              e.to && (b.css(e.to), e.to = null);
              g || h.done();
              g = !0
            });
            return h
          }

          e.cleanupStyles && (e.from = e.to = null);
          e.from && (b.css(e.from), e.from =
            null);
          var g, h = new d;
          return {start: f, end: f}
        }
      }
    ]
  }, ha = G("$compile");
  Cc.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Vc = /^((?:x|data)[\:\-_])/i, Qf = G("$controller"), Uc = /^(\S+)(\s+as\s+(\w+))?$/, $e = function() {
    this.$get = [
      "$document", function(a) {
        return function(b) {
          b ? !b.nodeType && b instanceof B && (b = b[0]) : b = a[0].body;
          return b.offsetWidth + 1
        }
      }
    ]
  }, $c = "application/json", ac = {"Content-Type": $c + ";charset=utf-8"}, Sf = /^\[|^\{(?!\{)/, Tf = {"[": /]$/, "{": /}$/}, Rf = /^\)\]\}',?\n/, pg = G("$http"), dd = function(a) {
    return function() {
      throw pg("legacy",
        a);
    }
  }, Ja = fa.$interpolateMinErr = G("$interpolate");
  Ja.throwNoconcat = function(a) {
    throw Ja("noconcat", a);
  };
  Ja.interr = function(a, b) {
    return Ja("interr", a, b.toString())
  };
  var qg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Vf = {http: 80, https: 443, ftp: 21}, Db = G("$location"), rg = {
    $$html5: !1, $$replace: !1, absUrl: Eb("$$absUrl"), url: function(a) {
      if (q(a))return this.$$url;
      var b = qg.exec(a);
      (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
      (b[2] || b[1] || "" === a) && this.search(b[3] || "");
      this.hash(b[5] || "");
      return this
    }, protocol: Eb("$$protocol"),
    host: Eb("$$host"), port: Eb("$$port"), path: id("$$path", function(a) {
      a = null !== a ? a.toString() : "";
      return "/" == a.charAt(0) ? a : "/" + a
    }), search: function(a, b) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (E(a) || Q(a))a = a.toString(), this.$$search = xc(a); else if (H(a))a = bb(a, {}), n(a, function(b, c) {
            null == b && delete a[c]
          }), this.$$search = a; else throw Db("isrcharg");
          break;
        default:
          q(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
      }
      this.$$compose();
      return this
    }, hash: id("$$hash", function(a) {
      return null !==
      a ? a.toString() : ""
    }), replace: function() {
      this.$$replace = !0;
      return this
    }
  };
  n([hd, dc, cc], function(a) {
    a.prototype = Object.create(rg);
    a.prototype.state = function(b) {
      if (!arguments.length)return this.$$state;
      if (a !== cc || !this.$$html5)throw Db("nostate");
      this.$$state = q(b) ? null : b;
      return this
    }
  });
  var ba = G("$parse"), Wf = Function.prototype.call, Xf = Function.prototype.apply, Yf = Function.prototype.bind, Lb = $();
  n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
    Lb[a] = !0
  });
  var sg = {
    n: "\n", f: "\f", r: "\r",
    t: "\t", v: "\v", "'": "'", '"': '"'
  }, fc = function(a) {
    this.options = a
  };
  fc.prototype = {
    constructor: fc, lex: function(a) {
      this.text = a;
      this.index = 0;
      for (this.tokens = []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({index: this.index, text: a}), this.index++; else if (this.isWhitespace(a))this.index++;
      else {
        var b = a + this.peek(), d = b + this.peek(2), c = Lb[b], e = Lb[d];
        Lb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({index: this.index, text: a, operator: !0}), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
      }
      return this.tokens
    }, is: function(a, b) {
      return -1 !== b.indexOf(a)
    }, peek: function(a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    }, isNumber: function(a) {
      return "0" <= a && "9" >= a && "string" === typeof a
    }, isWhitespace: function(a) {
      return " " === a || "\r" === a ||
        "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    }, isIdent: function(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function(a) {
      return "-" === a || "+" === a || this.isNumber(a)
    }, throwError: function(a, b, d) {
      d = d || this.index;
      b = y(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
      throw ba("lexerr", a, b, this.text);
    }, readNumber: function() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = F(this.text.charAt(this.index));
        if ("." == d || this.isNumber(d))a += d; else {
          var c = this.peek();
          if ("e" == d && this.isExpOperator(c))a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
        }
        this.index++
      }
      this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
    }, readIdent: function() {
      for (var a = this.index; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);
        if (!this.isIdent(b) && !this.isNumber(b))break;
        this.index++
      }
      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index), identifier: !0
      })
    }, readString: function(a) {
      var b = this.index;
      this.index++;
      for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index), c = c + f;
        if (e)"u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += sg[f] || f, e = !1; else if ("\\" === f)e = !0; else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: b, text: c, constant: !0,
              value: d
            });
            return
          }
          d += f
        }
        this.index++
      }
      this.throwError("Unterminated quote", b)
    }
  };
  var s = function(a, b) {
    this.lexer = a;
    this.options = b
  };
  s.Program = "Program";
  s.ExpressionStatement = "ExpressionStatement";
  s.AssignmentExpression = "AssignmentExpression";
  s.ConditionalExpression = "ConditionalExpression";
  s.LogicalExpression = "LogicalExpression";
  s.BinaryExpression = "BinaryExpression";
  s.UnaryExpression = "UnaryExpression";
  s.CallExpression = "CallExpression";
  s.MemberExpression = "MemberExpression";
  s.Identifier = "Identifier";
  s.Literal =
    "Literal";
  s.ArrayExpression = "ArrayExpression";
  s.Property = "Property";
  s.ObjectExpression = "ObjectExpression";
  s.ThisExpression = "ThisExpression";
  s.NGValueParameter = "NGValueParameter";
  s.prototype = {
    ast: function(a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.program();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      return a
    }, program: function() {
      for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
        type: s.Program,
        body: a
      }
    }, expressionStatement: function() {
      return {type: s.ExpressionStatement, expression: this.filterChain()}
    }, filterChain: function() {
      for (var a = this.expression(); this.expect("|");)a = this.filter(a);
      return a
    }, expression: function() {
      return this.assignment()
    }, assignment: function() {
      var a = this.ternary();
      this.expect("=") && (a = {type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "="});
      return a
    }, ternary: function() {
      var a = this.logicalOR(), b, d;
      return this.expect("?") && (b = this.expression(), this.consume(":")) ?
        (d = this.expression(), {type: s.ConditionalExpression, test: a, alternate: b, consequent: d}) : a
    }, logicalOR: function() {
      for (var a = this.logicalAND(); this.expect("||");)a = {type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND()};
      return a
    }, logicalAND: function() {
      for (var a = this.equality(); this.expect("&&");)a = {type: s.LogicalExpression, operator: "&&", left: a, right: this.equality()};
      return a
    }, equality: function() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");)a = {
        type: s.BinaryExpression,
        operator: b.text, left: a, right: this.relational()
      };
      return a
    }, relational: function() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");)a = {type: s.BinaryExpression, operator: b.text, left: a, right: this.additive()};
      return a
    }, additive: function() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");)a = {type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative()};
      return a
    }, multiplicative: function() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");)a = {
        type: s.BinaryExpression, operator: b.text,
        left: a, right: this.unary()
      };
      return a
    }, unary: function() {
      var a;
      return (a = this.expect("+", "-", "!")) ? {type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary()} : this.primary()
    }, primary: function() {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = bb(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() :
        this.throwError("not a primary expression", this.peek());
      for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {type: s.CallExpression, callee: a, arguments: this.parseArguments()}, this.consume(")")) : "[" === b.text ? (a = {type: s.MemberExpression, object: a, property: this.expression(), computed: !0}, this.consume("]")) : "." === b.text ? a = {type: s.MemberExpression, object: a, property: this.identifier(), computed: !1} : this.throwError("IMPOSSIBLE");
      return a
    }, filter: function(a) {
      a = [a];
      for (var b = {
        type: s.CallExpression, callee: this.identifier(),
        arguments: a, filter: !0
      }; this.expect(":");)a.push(this.expression());
      return b
    }, parseArguments: function() {
      var a = [];
      if (")" !== this.peekToken().text) {
        do a.push(this.expression()); while (this.expect(","))
      }
      return a
    }, identifier: function() {
      var a = this.consume();
      a.identifier || this.throwError("is not a valid identifier", a);
      return {type: s.Identifier, name: a.text}
    }, constant: function() {
      return {type: s.Literal, value: this.consume().value}
    }, arrayDeclaration: function() {
      var a = [];
      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]"))break;
          a.push(this.expression())
        } while (this.expect(","))
      }
      this.consume("]");
      return {type: s.ArrayExpression, elements: a}
    }, object: function() {
      var a = [], b;
      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}"))break;
          b = {type: s.Property, kind: "init"};
          this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());
          this.consume(":");
          b.value = this.expression();
          a.push(b)
        } while (this.expect(","))
      }
      this.consume("}");
      return {type: s.ObjectExpression, properties: a}
    },
    throwError: function(a, b) {
      throw ba("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function(a) {
      if (0 === this.tokens.length)throw ba("ueoe", this.text);
      var b = this.expect(a);
      b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
      return b
    }, peekToken: function() {
      if (0 === this.tokens.length)throw ba("ueoe", this.text);
      return this.tokens[0]
    }, peek: function(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c)
    }, peekAhead: function(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var f = a.text;
        if (f === b || f === d || f === c || f === e || !(b || d || c || e))return a
      }
      return !1
    }, expect: function(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
    }, constants: {"true": {type: s.Literal, value: !0}, "false": {type: s.Literal, value: !1}, "null": {type: s.Literal, value: null}, undefined: {type: s.Literal, value: u}, "this": {type: s.ThisExpression}}
  };
  rd.prototype = {
    compile: function(a, b) {
      var d = this, c = this.astBuilder.ast(a);
      this.state = {
        nextId: 0, filters: {}, expensiveChecks: b, fn: {vars: [], body: [], own: {}}, assign: {
          vars: [],
          body: [], own: {}
        }, inputs: []
      };
      W(c, d.$filter);
      var e = "", f;
      this.stage = "assign";
      if (f = pd(c))this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
      f = nd(c.body);
      d.stage = "inputs";
      n(f, function(a, b) {
        var c = "fn" + b;
        d.state[c] = {vars: [], body: [], own: {}};
        d.state.computing = c;
        var e = d.nextId();
        d.recurse(a, e);
        d.return_(e);
        d.state.inputs.push(c);
        a.watchId = b
      });
      this.state.computing = "fn";
      this.stage = "main";
      this.recurse(c);
      e = '"' + this.USE + " " + this.STRICT +
        '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
      e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e))(this.$filter, Va, xa, kd, jd, ld, Zf, md, a);
      this.state = this.stage = u;
      e.literal = qd(c);
      e.constant = c.constant;
      return e
    }, USE: "use", STRICT: "strict", watchFns: function() {
      var a = [], b = this.state.inputs, d = this;
      n(b, function(b) {
        a.push("var " + b + "=" + d.generateFunction(b,
            "s"))
      });
      b.length && a.push("fn.inputs=[" + b.join(",") + "];");
      return a.join("")
    }, generateFunction: function(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
    }, filterPrefix: function() {
      var a = [], b = this;
      n(this.state.filters, function(d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")")
      });
      return a.length ? "var " + a.join(",") + ";" : ""
    }, varsPrefix: function(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
    }, body: function(a) {
      return this.state[a].body.join("")
    }, recurse: function(a, b,
                         d, c, e, f) {
      var g, h, k = this, l, m;
      c = c || x;
      if (!f && y(a.watchId))b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0)); else switch (a.type) {
        case s.Program:
          n(a.body, function(b, c) {
            k.recurse(b.expression, u, u, function(a) {
              h = a
            });
            c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
          });
          break;
        case s.Literal:
          m = this.escape(a.value);
          this.assign(b, m);
          c(m);
          break;
        case s.UnaryExpression:
          this.recurse(a.argument, u, u, function(a) {
            h = a
          });
          m = a.operator + "(" + this.ifDefined(h,
              0) + ")";
          this.assign(b, m);
          c(m);
          break;
        case s.BinaryExpression:
          this.recurse(a.left, u, u, function(a) {
            g = a
          });
          this.recurse(a.right, u, u, function(a) {
            h = a
          });
          m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
          this.assign(b, m);
          c(m);
          break;
        case s.LogicalExpression:
          b = b || this.nextId();
          k.recurse(a.left, b);
          k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
          c(b);
          break;
        case s.ConditionalExpression:
          b = b || this.nextId();
          k.recurse(a.test,
            b);
          k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
          c(b);
          break;
        case s.Identifier:
          b = b || this.nextId();
          d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
          Va(a.name);
          k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
            k.if_("inputs" === k.stage || "s", function() {
              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
              k.assign(b, k.nonComputedMember("s",
                a.name))
            })
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
          (k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(b);
          c(b);
          break;
        case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();
          b = b || this.nextId();
          k.recurse(a.object, g, u, function() {
            k.if_(k.notNull(g), function() {
              if (a.computed)h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g,
                h)), k.assign(b, m), d && (d.computed = !0, d.name = h); else {
                Va(a.property.name);
                e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                m = k.nonComputedMember(g, a.property.name);
                if (k.state.expensiveChecks || Fb(a.property.name))m = k.ensureSafeObject(m);
                k.assign(b, m);
                d && (d.computed = !1, d.name = a.property.name)
              }
            }, function() {
              k.assign(b, "undefined")
            });
            c(b)
          }, !!e);
          break;
        case s.CallExpression:
          b = b || this.nextId();
          a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments,
            function(a) {
              var b = k.nextId();
              k.recurse(a, b);
              l.push(b)
            }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function() {
            k.if_(k.notNull(h), function() {
                k.addEnsureSafeFunction(h);
                n(a.arguments, function(a) {
                  k.recurse(a, k.nextId(), u, function(a) {
                    l.push(k.ensureSafeObject(a))
                  })
                });
                g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                m = k.ensureSafeObject(m);
                k.assign(b, m)
              },
              function() {
                k.assign(b, "undefined")
              });
            c(b)
          }));
          break;
        case s.AssignmentExpression:
          h = this.nextId();
          g = {};
          if (!od(a.left))throw ba("lval");
          this.recurse(a.left, u, g, function() {
            k.if_(k.notNull(g.context), function() {
              k.recurse(a.right, h);
              k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
              k.addEnsureSafeAssignContext(g.context);
              m = k.member(g.context, g.name, g.computed) + a.operator + h;
              k.assign(b, m);
              c(b || m)
            })
          }, 1);
          break;
        case s.ArrayExpression:
          l = [];
          n(a.elements, function(a) {
            k.recurse(a, k.nextId(), u, function(a) {
              l.push(a)
            })
          });
          m = "[" + l.join(",") + "]";
          this.assign(b, m);
          c(m);
          break;
        case s.ObjectExpression:
          l = [];
          n(a.properties, function(a) {
            k.recurse(a.value, k.nextId(), u, function(b) {
              l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
            })
          });
          m = "{" + l.join(",") + "}";
          this.assign(b, m);
          c(m);
          break;
        case s.ThisExpression:
          this.assign(b, "s");
          c("s");
          break;
        case s.NGValueParameter:
          this.assign(b, "v"), c("v")
      }
    }, getHasOwnProperty: function(a, b) {
      var d = a + "." + b, c = this.current().own;
      c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" +
        this.escape(b) + " in " + a + ")"));
      return c[d]
    }, assign: function(a, b) {
      if (a)return this.current().body.push(a, "=", b, ";"), a
    }, filter: function(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
      return this.state.filters[a]
    }, ifDefined: function(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")"
    }, plus: function(a, b) {
      return "plus(" + a + "," + b + ")"
    }, return_: function(a) {
      this.current().body.push("return ", a, ";")
    }, if_: function(a, b, d) {
      if (!0 === a)b(); else {
        var c = this.current().body;
        c.push("if(", a,
          "){");
        b();
        c.push("}");
        d && (c.push("else{"), d(), c.push("}"))
      }
    }, not: function(a) {
      return "!(" + a + ")"
    }, notNull: function(a) {
      return a + "!=null"
    }, nonComputedMember: function(a, b) {
      return a + "." + b
    }, computedMember: function(a, b) {
      return a + "[" + b + "]"
    }, member: function(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
    }, addEnsureSafeObject: function(a) {
      this.current().body.push(this.ensureSafeObject(a), ";")
    }, addEnsureSafeMemberName: function(a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";")
    },
    addEnsureSafeFunction: function(a) {
      this.current().body.push(this.ensureSafeFunction(a), ";")
    }, addEnsureSafeAssignContext: function(a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";")
    }, ensureSafeObject: function(a) {
      return "ensureSafeObject(" + a + ",text)"
    }, ensureSafeMemberName: function(a) {
      return "ensureSafeMemberName(" + a + ",text)"
    }, ensureSafeFunction: function(a) {
      return "ensureSafeFunction(" + a + ",text)"
    }, getStringValue: function(a) {
      this.assign(a, "getStringValue(" + a + ",text)")
    }, ensureSafeAssignContext: function(a) {
      return "ensureSafeAssignContext(" +
        a + ",text)"
    }, lazyRecurse: function(a, b, d, c, e, f) {
      var g = this;
      return function() {
        g.recurse(a, b, d, c, e, f)
      }
    }, lazyAssign: function(a, b) {
      var d = this;
      return function() {
        d.assign(a, b)
      }
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }, escape: function(a) {
      if (E(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (Q(a))return a.toString();
      if (!0 === a)return "true";
      if (!1 === a)return "false";
      if (null === a)return "null";
      if ("undefined" === typeof a)return "undefined";
      throw ba("esc");
    }, nextId: function(a, b) {
      var d = "v" + this.state.nextId++;
      a || this.current().vars.push(d + (b ? "=" + b : ""));
      return d
    }, current: function() {
      return this.state[this.state.computing]
    }
  };
  sd.prototype = {
    compile: function(a, b) {
      var d = this, c = this.astBuilder.ast(a);
      this.expression = a;
      this.expensiveChecks = b;
      W(c, d.$filter);
      var e, f;
      if (e = pd(c))f = this.recurse(e);
      e = nd(c.body);
      var g;
      e && (g = [], n(e, function(a, b) {
        var c = d.recurse(a);
        a.input = c;
        g.push(c);
        a.watchId = b
      }));
      var h = [];
      n(c.body, function(a) {
        h.push(d.recurse(a.expression))
      });
      e = 0 === c.body.length ? function() {
      } : 1 === c.body.length ? h[0] : function(a, b) {
        var c;
        n(h, function(d) {
          c = d(a, b)
        });
        return c
      };
      f && (e.assign = function(a, b, c) {
        return f(a, c, b)
      });
      g && (e.inputs = g);
      e.literal = qd(c);
      e.constant = c.constant;
      return e
    }, recurse: function(a, b, d) {
      var c, e, f = this, g;
      if (a.input)return this.inputs(a.input, a.watchId);
      switch (a.type) {
        case s.Literal:
          return this.value(a.value, b);
        case s.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
        case s.BinaryExpression:
          return c = this.recurse(a.left),
            e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
        case s.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
        case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
        case s.Identifier:
          return Va(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Fb(a.name), b, d, f.expression);
        case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (Va(a.property.name,
            f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
        case s.CallExpression:
          return g = [], n(a.arguments, function(a) {
            g.push(f.recurse(a))
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function(a, c, d, f) {
            for (var r = [], n = 0; n < g.length; ++n)r.push(g[n](a, c, d, f));
            a = e.apply(u, r, f);
            return b ? {context: u, name: u, value: a} : a
          } : function(a,
                       c, d, m) {
            var r = e(a, c, d, m), n;
            if (null != r.value) {
              xa(r.context, f.expression);
              kd(r.value, f.expression);
              n = [];
              for (var q = 0; q < g.length; ++q)n.push(xa(g[q](a, c, d, m), f.expression));
              n = xa(r.value.apply(r.context, n), f.expression)
            }
            return b ? {value: n} : n
          };
        case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function(a, d, g, m) {
            var n = c(a, d, g, m);
            a = e(a, d, g, m);
            xa(n.value, f.expression);
            ld(n.context);
            n.context[n.name] = a;
            return b ? {value: a} : a
          };
        case s.ArrayExpression:
          return g = [], n(a.elements, function(a) {
            g.push(f.recurse(a))
          }),
            function(a, c, d, e) {
              for (var f = [], n = 0; n < g.length; ++n)f.push(g[n](a, c, d, e));
              return b ? {value: f} : f
            };
        case s.ObjectExpression:
          return g = [], n(a.properties, function(a) {
            g.push({key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, value: f.recurse(a.value)})
          }), function(a, c, d, e) {
            for (var f = {}, n = 0; n < g.length; ++n)f[g[n].key] = g[n].value(a, c, d, e);
            return b ? {value: f} : f
          };
        case s.ThisExpression:
          return function(a) {
            return b ? {value: a} : a
          };
        case s.NGValueParameter:
          return function(a, c, d, e) {
            return b ? {value: d} : d
          }
      }
    }, "unary+": function(a,
                          b) {
      return function(d, c, e, f) {
        d = a(d, c, e, f);
        d = y(d) ? +d : 0;
        return b ? {value: d} : d
      }
    }, "unary-": function(a, b) {
      return function(d, c, e, f) {
        d = a(d, c, e, f);
        d = y(d) ? -d : 0;
        return b ? {value: d} : d
      }
    }, "unary!": function(a, b) {
      return function(d, c, e, f) {
        d = !a(d, c, e, f);
        return b ? {value: d} : d
      }
    }, "binary+": function(a, b, d) {
      return function(c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = md(h, c);
        return d ? {value: h} : h
      }
    }, "binary-": function(a, b, d) {
      return function(c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = (y(h) ? h : 0) - (y(c) ? c : 0);
        return d ? {value: h} : h
      }
    }, "binary*": function(a,
                           b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary/": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary%": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary===": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary!==": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary==": function(a, b,
                            d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary!=": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary<": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary>": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary<=": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary>=": function(a, b, d) {
      return function(c,
                      e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary&&": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "binary||": function(a, b, d) {
      return function(c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);
        return d ? {value: c} : c
      }
    }, "ternary?:": function(a, b, d, c) {
      return function(e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
        return c ? {value: e} : e
      }
    }, value: function(a, b) {
      return function() {
        return b ? {context: u, name: u, value: a} : a
      }
    }, identifier: function(a, b, d, c, e) {
      return function(f, g, h, k) {
        f =
          g && a in g ? g : f;
        c && 1 !== c && f && !f[a] && (f[a] = {});
        g = f ? f[a] : u;
        b && xa(g, e);
        return d ? {context: f, name: a, value: g} : g
      }
    }, computedMember: function(a, b, d, c, e) {
      return function(f, g, h, k) {
        var l = a(f, g, h, k), m, n;
        null != l && (m = b(f, g, h, k), m = jd(m), Va(m, e), c && 1 !== c && l && !l[m] && (l[m] = {}), n = l[m], xa(n, e));
        return d ? {context: l, name: m, value: n} : n
      }
    }, nonComputedMember: function(a, b, d, c, e, f) {
      return function(g, h, k, l) {
        g = a(g, h, k, l);
        e && 1 !== e && g && !g[b] && (g[b] = {});
        h = null != g ? g[b] : u;
        (d || Fb(b)) && xa(h, f);
        return c ? {context: g, name: b, value: h} : h
      }
    }, inputs: function(a,
                        b) {
      return function(d, c, e, f) {
        return f ? f[b] : a(d, c, e)
      }
    }
  };
  var gc = function(a, b, d) {
    this.lexer = a;
    this.$filter = b;
    this.options = d;
    this.ast = new s(this.lexer);
    this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b)
  };
  gc.prototype = {
    constructor: gc, parse: function(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks)
    }
  };
  $();
  $();
  var $f = Object.prototype.valueOf, ya = G("$sce"), la = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, ha = G("$compile"), Y = X.createElement("a"), wd = wa(S.location.href);
  xd.$inject = ["$document"];
  Jc.$inject = ["$provide"];
  yd.$inject = ["$locale"];
  Ad.$inject = ["$locale"];
  var ic = ".", jg = {
    yyyy: ca("FullYear", 4), yy: ca("FullYear", 2, 0, !0), y: ca("FullYear", 1), MMMM: Hb("Month"), MMM: Hb("Month", !0), MM: ca("Month", 2, 1), M: ca("Month", 1, 1), dd: ca("Date", 2), d: ca("Date", 1), HH: ca("Hours", 2), H: ca("Hours", 1), hh: ca("Hours", 2, -12), h: ca("Hours", 1, -12), mm: ca("Minutes", 2), m: ca("Minutes", 1), ss: ca("Seconds", 2), s: ca("Seconds", 1), sss: ca("Milliseconds", 3), EEEE: Hb("Day"), EEE: Hb("Day", !0), a: function(a, b) {
      return 12 >
      a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
    }, Z: function(a, b, d) {
      a = -1 * d;
      return a = (0 <= a ? "+" : "") + (Gb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2))
    }, ww: Ed(2), w: Ed(1), G: jc, GG: jc, GGG: jc, GGGG: function(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
    }
  }, ig = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, hg = /^\-?\d+$/;
  zd.$inject = ["$locale"];
  var eg = na(F), fg = na(sb);
  Bd.$inject = ["$parse"];
  var he = na({
    restrict: "E", compile: function(a, b) {
      if (!b.href && !b.xlinkHref)return function(a,
                                                  b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === sa.call(b.prop("href")) ? "xlink:href" : "href";
          b.on("click", function(a) {
            b.attr(e) || a.preventDefault()
          })
        }
      }
    }
  }), tb = {};
  n(Cb, function(a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function(a) {
        e.$set(b, !!a)
      })
    }

    if ("multiple" != a) {
      var c = va("ng-" + b), e = d;
      "checked" === a && (e = function(a, b, e) {
        e.ngModel !== e[c] && d(a, b, e)
      });
      tb[c] = function() {
        return {restrict: "A", priority: 100, link: e}
      }
    }
  });
  n(Zc, function(a, b) {
    tb[b] = function() {
      return {
        priority: 100, link: function(a,
                                      c, e) {
          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(lg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));
            return
          }
          a.$watch(e[b], function(a) {
            e.$set(b, a)
          })
        }
      }
    }
  });
  n(["src", "srcset", "href"], function(a) {
    var b = va("ng-" + a);
    tb[b] = function() {
      return {
        priority: 99, link: function(d, c, e) {
          var f = a, g = a;
          "href" === a && "[object SVGAnimatedString]" === sa.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
          e.$observe(b, function(b) {
            b ? (e.$set(g, b), Ha && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
          })
        }
      }
    }
  });
  var Ib = {
    $addControl: x, $$renameControl: function(a, b) {
      a.$name = b
    }, $removeControl: x, $setValidity: x, $setDirty: x, $setPristine: x, $setSubmitted: x
  };
  Fd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var Nd = function(a) {
      return [
        "$timeout", "$parse", function(b, d) {
          function c(a) {
            return "" === a ? d('this[""]').assign : d(a).assign || x
          }

          return {
            name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Fd, compile: function(d, f) {
              d.addClass(Wa).addClass(mb);
              var g = f.name ? "name" : a && f.ngForm ? "ngForm" :
                !1;
              return {
                pre: function(a, d, e, f) {
                  var n = f[0];
                  if (!("action" in e)) {
                    var q = function(b) {
                      a.$apply(function() {
                        n.$commitViewValue();
                        n.$setSubmitted()
                      });
                      b.preventDefault()
                    };
                    d[0].addEventListener("submit", q, !1);
                    d.on("$destroy", function() {
                      b(function() {
                        d[0].removeEventListener("submit", q, !1)
                      }, 0, !1)
                    })
                  }
                  (f[1] || n.$$parentForm).$addControl(n);
                  var s = g ? c(n.$name) : x;
                  g && (s(a, n), e.$observe(g, function(b) {
                    n.$name !== b && (s(a, u), n.$$parentForm.$$renameControl(n, b), s = c(n.$name), s(a, n))
                  }));
                  d.on("$destroy", function() {
                    n.$$parentForm.$removeControl(n);
                    s(a, u);
                    M(n, Ib)
                  })
                }
              }
            }
          }
        }
      ]
    }, ie = Nd(), ve = Nd(!0), kg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, tg = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/, ug = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, vg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Od = /^(\d{4})-(\d{2})-(\d{2})$/, Pd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, mc = /^(\d{4})-W(\d\d)$/, Qd = /^(\d{4})-(\d\d)$/,
    Rd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Sd = {
      text: function(a, b, d, c, e, f) {
        jb(a, b, d, c, e, f);
        kc(c)
      }, date: kb("date", Od, Kb(Od, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": kb("datetimelocal", Pd, Kb(Pd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: kb("time", Rd, Kb(Rd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: kb("week", mc, function(a, b) {
        if (da(a))return a;
        if (E(a)) {
          mc.lastIndex = 0;
          var d = mc.exec(a);
          if (d) {
            var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Dd(c), e = 7 * (e - 1);
            b && (d = b.getHours(), f =
              b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
            return new Date(c, 0, k.getDate() + e, d, f, g, h)
          }
        }
        return NaN
      }, "yyyy-Www"), month: kb("month", Qd, Kb(Qd, ["yyyy", "MM"]), "yyyy-MM"), number: function(a, b, d, c, e, f) {
        Hd(a, b, d, c);
        jb(a, b, d, c, e, f);
        c.$$parserName = "number";
        c.$parsers.push(function(a) {
          return c.$isEmpty(a) ? null : vg.test(a) ? parseFloat(a) : u
        });
        c.$formatters.push(function(a) {
          if (!c.$isEmpty(a)) {
            if (!Q(a))throw lb("numfmt", a);
            a = a.toString()
          }
          return a
        });
        if (y(d.min) || d.ngMin) {
          var g;
          c.$validators.min = function(a) {
            return c.$isEmpty(a) ||
              q(g) || a >= g
          };
          d.$observe("min", function(a) {
            y(a) && !Q(a) && (a = parseFloat(a, 10));
            g = Q(a) && !isNaN(a) ? a : u;
            c.$validate()
          })
        }
        if (y(d.max) || d.ngMax) {
          var h;
          c.$validators.max = function(a) {
            return c.$isEmpty(a) || q(h) || a <= h
          };
          d.$observe("max", function(a) {
            y(a) && !Q(a) && (a = parseFloat(a, 10));
            h = Q(a) && !isNaN(a) ? a : u;
            c.$validate()
          })
        }
      }, url: function(a, b, d, c, e, f) {
        jb(a, b, d, c, e, f);
        kc(c);
        c.$$parserName = "url";
        c.$validators.url = function(a, b) {
          var d = a || b;
          return c.$isEmpty(d) || tg.test(d)
        }
      }, email: function(a, b, d, c, e, f) {
        jb(a, b, d, c, e, f);
        kc(c);
        c.$$parserName = "email";
        c.$validators.email = function(a, b) {
          var d = a || b;
          return c.$isEmpty(d) || ug.test(d)
        }
      }, radio: function(a, b, d, c) {
        q(d.name) && b.attr("name", ++nb);
        b.on("click", function(a) {
          b[0].checked && c.$setViewValue(d.value, a && a.type)
        });
        c.$render = function() {
          b[0].checked = d.value == c.$viewValue
        };
        d.$observe("value", c.$render)
      }, checkbox: function(a, b, d, c, e, f, g, h) {
        var k = Id(h, a, "ngTrueValue", d.ngTrueValue, !0), l = Id(h, a, "ngFalseValue", d.ngFalseValue, !1);
        b.on("click", function(a) {
          c.$setViewValue(b[0].checked, a &&
            a.type)
        });
        c.$render = function() {
          b[0].checked = c.$viewValue
        };
        c.$isEmpty = function(a) {
          return !1 === a
        };
        c.$formatters.push(function(a) {
          return ma(a, k)
        });
        c.$parsers.push(function(a) {
          return a ? k : l
        })
      }, hidden: x, button: x, submit: x, reset: x, file: x
    }, Dc = [
      "$browser", "$sniffer", "$filter", "$parse", function(a, b, d, c) {
        return {
          restrict: "E", require: ["?ngModel"], link: {
            pre: function(e, f, g, h) {
              h[0] && (Sd[F(g.type)] || Sd.text)(e, f, g, h[0], b, a, d, c)
            }
          }
        }
      }
    ], wg = /^(true|false|\d+)$/, Ne = function() {
      return {
        restrict: "A", priority: 100, compile: function(a,
                                                        b) {
          return wg.test(b.ngValue) ? function(a, b, e) {
            e.$set("value", a.$eval(e.ngValue))
          } : function(a, b, e) {
            a.$watch(e.ngValue, function(a) {
              e.$set("value", a)
            })
          }
        }
      }
    }, ne = [
      "$compile", function(a) {
        return {
          restrict: "AC", compile: function(b) {
            a.$$addBindingClass(b);
            return function(b, c, e) {
              a.$$addBindingInfo(c, e.ngBind);
              c = c[0];
              b.$watch(e.ngBind, function(a) {
                c.textContent = q(a) ? "" : a
              })
            }
          }
        }
      }
    ], pe = [
      "$interpolate", "$compile", function(a, b) {
        return {
          compile: function(d) {
            b.$$addBindingClass(d);
            return function(c, d, f) {
              c = a(d.attr(f.$attr.ngBindTemplate));
              b.$$addBindingInfo(d, c.expressions);
              d = d[0];
              f.$observe("ngBindTemplate", function(a) {
                d.textContent = q(a) ? "" : a
              })
            }
          }
        }
      }
    ], oe = [
      "$sce", "$parse", "$compile", function(a, b, d) {
        return {
          restrict: "A", compile: function(c, e) {
            var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(a) {
              return (a || "").toString()
            });
            d.$$addBindingClass(c);
            return function(b, c, e) {
              d.$$addBindingInfo(c, e.ngBindHtml);
              b.$watch(g, function() {
                c.html(a.getTrustedHtml(f(b)) || "")
              })
            }
          }
        }
      }
    ], Me = na({
      restrict: "A", require: "ngModel", link: function(a, b, d, c) {
        c.$viewChangeListeners.push(function() {
          a.$eval(d.ngChange)
        })
      }
    }),
    qe = lc("", !0), se = lc("Odd", 0), re = lc("Even", 1), te = La({
      compile: function(a, b) {
        b.$set("ngCloak", u);
        a.removeClass("ng-cloak")
      }
    }), ue = [
      function() {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
      }
    ], Ic = {}, xg = {blur: !0, focus: !0};
  n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
    var b = va("ng-" + a);
    Ic[b] = [
      "$parse", "$rootScope", function(d, c) {
        return {
          restrict: "A", compile: function(e, f) {
            var g =
              d(f[b], null, !0);
            return function(b, d) {
              d.on(a, function(d) {
                var e = function() {
                  g(b, {$event: d})
                };
                xg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
              })
            }
          }
        }
      }
    ]
  });
  var xe = [
      "$animate", function(a) {
        return {
          multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function(b, d, c, e, f) {
            var g, h, k;
            b.$watch(c.ngIf, function(b) {
              b ? h || f(function(b, e) {
                h = e;
                b[b.length++] = X.createComment(" end ngIf: " + c.ngIf + " ");
                g = {clone: b};
                a.enter(b, d.parent(), d)
              }) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k =
                rb(g.clone), a.leave(k).then(function() {
                k = null
              }), g = null))
            })
          }
        }
      }
    ], ye = [
      "$templateRequest", "$anchorScroll", "$animate", function(a, b, d) {
        return {
          restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: fa.noop, compile: function(c, e) {
            var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
            return function(c, e, m, n, q) {
              var s = 0, v, u, p, C = function() {
                u && (u.remove(), u = null);
                v && (v.$destroy(), v = null);
                p && (d.leave(p).then(function() {
                  u = null
                }), u = p, p = null)
              };
              c.$watch(f, function(f) {
                var m = function() {
                  !y(h) || h && !c.$eval(h) ||
                  b()
                }, u = ++s;
                f ? (a(f, !0).then(function(a) {
                  if (u === s) {
                    var b = c.$new();
                    n.template = a;
                    a = q(b, function(a) {
                      C();
                      d.enter(a, null, e).then(m)
                    });
                    v = b;
                    p = a;
                    v.$emit("$includeContentLoaded", f);
                    c.$eval(g)
                  }
                }, function() {
                  u === s && (C(), c.$emit("$includeContentError", f))
                }), c.$emit("$includeContentRequested", f)) : (C(), n.template = null)
              })
            }
          }
        }
      }
    ], Pe = [
      "$compile", function(a) {
        return {
          restrict: "ECA", priority: -400, require: "ngInclude", link: function(b, d, c, e) {
            /SVG/.test(d[0].toString()) ? (d.empty(), a(Lc(e.template, X).childNodes)(b, function(a) {
                d.append(a)
              },
              {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b))
          }
        }
      }
    ], ze = La({
      priority: 450, compile: function() {
        return {
          pre: function(a, b, d) {
            a.$eval(d.ngInit)
          }
        }
      }
    }), Le = function() {
      return {
        restrict: "A", priority: 100, require: "ngModel", link: function(a, b, d, c) {
          var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? U(e) : e;
          c.$parsers.push(function(a) {
            if (!q(a)) {
              var b = [];
              a && n(a.split(g), function(a) {
                a && b.push(f ? U(a) : a)
              });
              return b
            }
          });
          c.$formatters.push(function(a) {
            return I(a) ? a.join(e) : u
          });
          c.$isEmpty = function(a) {
            return !a || !a.length
          }
        }
      }
    }, mb = "ng-valid", Jd = "ng-invalid", Wa = "ng-pristine", Jb = "ng-dirty", Ld = "ng-pending", lb = G("ngModel"), yg = [
      "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, c, e, f, g, h, k, l) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = u;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = u;
        this.$name = l(d.name || "", !1)(a);
        this.$$parentForm = Ib;
        var m = e(d.ngModel), r = m.assign, t = m, s = r, v = null, B, p = this;
        this.$$setOptions = function(a) {
          if ((p.$options = a) && a.getterSetter) {
            var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
            t = function(a) {
              var c = m(a);
              z(c) && (c = b(a));
              return c
            };
            s = function(a, b) {
              z(m(a)) ? f(a, {$$$p: p.$modelValue}) : r(a, p.$modelValue)
            }
          } else if (!m.assign)throw lb("nonassign", d.ngModel, ua(c));
        };
        this.$render = x;
        this.$isEmpty =
          function(a) {
            return q(a) || "" === a || null === a || a !== a
          };
        var C = 0;
        Gd({
          ctrl: this, $element: c, set: function(a, b) {
            a[b] = !0
          }, unset: function(a, b) {
            delete a[b]
          }, $animate: f
        });
        this.$setPristine = function() {
          p.$dirty = !1;
          p.$pristine = !0;
          f.removeClass(c, Jb);
          f.addClass(c, Wa)
        };
        this.$setDirty = function() {
          p.$dirty = !0;
          p.$pristine = !1;
          f.removeClass(c, Wa);
          f.addClass(c, Jb);
          p.$$parentForm.$setDirty()
        };
        this.$setUntouched = function() {
          p.$touched = !1;
          p.$untouched = !0;
          f.setClass(c, "ng-untouched", "ng-touched")
        };
        this.$setTouched = function() {
          p.$touched = !0;
          p.$untouched = !1;
          f.setClass(c, "ng-touched", "ng-untouched")
        };
        this.$rollbackViewValue = function() {
          g.cancel(v);
          p.$viewValue = p.$$lastCommittedViewValue;
          p.$render()
        };
        this.$validate = function() {
          if (!Q(p.$modelValue) || !isNaN(p.$modelValue)) {
            var a = p.$$rawModelValue, b = p.$valid, c = p.$modelValue, d = p.$options && p.$options.allowInvalid;
            p.$$runValidators(a, p.$$lastCommittedViewValue, function(e) {
              d || b === e || (p.$modelValue = e ? a : u, p.$modelValue !== c && p.$$writeModelToScope())
            })
          }
        };
        this.$$runValidators = function(a, b, c) {
          function d() {
            var c =
              !0;
            n(p.$validators, function(d, e) {
              var g = d(a, b);
              c = c && g;
              f(e, g)
            });
            return c ? !0 : (n(p.$asyncValidators, function(a, b) {
              f(b, null)
            }), !1)
          }

          function e() {
            var c = [], d = !0;
            n(p.$asyncValidators, function(e, g) {
              var h = e(a, b);
              if (!h || !z(h.then))throw lb("$asyncValidators", h);
              f(g, u);
              c.push(h.then(function() {
                f(g, !0)
              }, function(a) {
                d = !1;
                f(g, !1)
              }))
            });
            c.length ? k.all(c).then(function() {
              g(d)
            }, x) : g(!0)
          }

          function f(a, b) {
            h === C && p.$setValidity(a, b)
          }

          function g(a) {
            h === C && c(a)
          }

          C++;
          var h = C;
          (function() {
            var a = p.$$parserName || "parse";
            if (q(B))f(a,
              null); else return B || (n(p.$validators, function(a, b) {
              f(b, null)
            }), n(p.$asyncValidators, function(a, b) {
              f(b, null)
            })), f(a, B), B;
            return !0
          })() ? d() ? e() : g(!1) : g(!1)
        };
        this.$commitViewValue = function() {
          var a = p.$viewValue;
          g.cancel(v);
          if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators)p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
        };
        this.$$parseAndValidate = function() {
          var b = p.$$lastCommittedViewValue;
          if (B = q(b) ? u : !0)for (var c = 0; c < p.$parsers.length; c++)if (b = p.$parsers[c](b),
              q(b)) {
            B = !1;
            break
          }
          Q(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = t(a));
          var d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
          p.$$rawModelValue = b;
          e && (p.$modelValue = b, p.$modelValue !== d && p.$$writeModelToScope());
          p.$$runValidators(b, p.$$lastCommittedViewValue, function(a) {
            e || (p.$modelValue = a ? b : u, p.$modelValue !== d && p.$$writeModelToScope())
          })
        };
        this.$$writeModelToScope = function() {
          s(a, p.$modelValue);
          n(p.$viewChangeListeners, function(a) {
            try {
              a()
            } catch (c) {
              b(c)
            }
          })
        };
        this.$setViewValue = function(a, b) {
          p.$viewValue =
            a;
          p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b)
        };
        this.$$debounceViewValueCommit = function(b) {
          var c = 0, d = p.$options;
          d && y(d.debounce) && (d = d.debounce, Q(d) ? c = d : Q(d[b]) ? c = d[b] : Q(d["default"]) && (c = d["default"]));
          g.cancel(v);
          c ? v = g(function() {
            p.$commitViewValue()
          }, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function() {
            p.$commitViewValue()
          })
        };
        a.$watch(function() {
          var b = t(a);
          if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
            p.$modelValue = p.$$rawModelValue = b;
            B = u;
            for (var c = p.$formatters,
                   d = c.length, e = b; d--;)e = c[d](e);
            p.$viewValue !== e && (p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), p.$$runValidators(b, e, x))
          }
          return b
        })
      }
    ], Ke = [
      "$rootScope", function(a) {
        return {
          restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: yg, priority: 1, compile: function(b) {
            b.addClass(Wa).addClass("ng-untouched").addClass(mb);
            return {
              pre: function(a, b, e, f) {
                var g = f[0];
                b = f[1] || g.$$parentForm;
                g.$$setOptions(f[2] && f[2].$options);
                b.$addControl(g);
                e.$observe("name", function(a) {
                  g.$name !== a && g.$$parentForm.$$renameControl(g,
                    a)
                });
                a.$on("$destroy", function() {
                  g.$$parentForm.$removeControl(g)
                })
              }, post: function(b, c, e, f) {
                var g = f[0];
                if (g.$options && g.$options.updateOn)c.on(g.$options.updateOn, function(a) {
                  g.$$debounceViewValueCommit(a && a.type)
                });
                c.on("blur", function(c) {
                  g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                })
              }
            }
          }
        }
      }
    ], zg = /(\s+|^)default(\s+|$)/, Oe = function() {
      return {
        restrict: "A", controller: [
          "$scope", "$attrs", function(a, b) {
            var d = this;
            this.$options = bb(a.$eval(b.ngModelOptions));
            y(this.$options.updateOn) ?
              (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(zg, function() {
                d.$options.updateOnDefault = !0;
                return " "
              }))) : this.$options.updateOnDefault = !0
          }
        ]
      }
    }, Ae = La({terminal: !0, priority: 1E3}), Ag = G("ngOptions"), Bg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Ie = [
      "$compile", "$parse", function(a,
                                     b) {
        function d(a, c, d) {
          function e(a, b, c, d, f) {
            this.selectValue = a;
            this.viewValue = b;
            this.label = c;
            this.group = d;
            this.disabled = f
          }

          function l(a) {
            var b;
            if (!q && za(a))b = a; else {
              b = [];
              for (var c in a)a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
            }
            return b
          }

          var m = a.match(Bg);
          if (!m)throw Ag("iexp", a, ua(c));
          var n = m[5] || m[7], q = m[6];
          a = / as /.test(m[0]) && m[1];
          var s = m[9];
          c = b(m[2] ? m[1] : n);
          var v = a && b(a) || c, u = s && b(s), p = s ? function(a, b) {
            return u(d, b)
          } : function(a) {
            return Ca(a)
          }, C = function(a, b) {
            return p(a, z(a, b))
          }, w = b(m[2] ||
            m[1]), y = b(m[3] || ""), B = b(m[4] || ""), x = b(m[8]), D = {}, z = q ? function(a, b) {
            D[q] = b;
            D[n] = a;
            return D
          } : function(a) {
            D[n] = a;
            return D
          };
          return {
            trackBy: s, getTrackByValue: C, getWatchables: b(x, function(a) {
              var b = [];
              a = a || [];
              for (var c = l(a), e = c.length, f = 0; f < e; f++) {
                var g = a === c ? f : c[f], k = z(a[g], g), g = p(a[g], k);
                b.push(g);
                if (m[2] || m[1])g = w(d, k), b.push(g);
                m[4] && (k = B(d, k), b.push(k))
              }
              return b
            }), getOptions: function() {
              for (var a = [], b = {}, c = x(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
                var n = c === f ? m : f[m], r = z(c[n], n), q = v(d, r), n = p(q, r), t = w(d,
                  r), u = y(d, r), r = B(d, r), q = new e(n, q, t, u, r);
                a.push(q);
                b[n] = q
              }
              return {
                items: a, selectValueMap: b, getOptionFromViewValue: function(a) {
                  return b[C(a)]
                }, getViewValueFromOption: function(a) {
                  return s ? fa.copy(a.viewValue) : a.viewValue
                }
              }
            }
          }
        }

        var c = X.createElement("option"), e = X.createElement("optgroup");
        return {
          restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: {
            pre: function(a, b, c, d) {
              d[0].registerOption = x
            }, post: function(b, g, h, k) {
              function l(a, b) {
                a.element = b;
                b.disabled = a.disabled;
                a.label !== b.label && (b.label = a.label,
                  b.textContent = a.label);
                a.value !== b.value && (b.value = a.selectValue)
              }

              function m(a, b, c, d) {
                b && F(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));
                return c
              }

              function r(a) {
                for (var b; a;)b = a.nextSibling, Xb(a), a = b
              }

              function q(a) {
                var b = p && p[0], c = z && z[0];
                if (b || c)for (; a && (a === b || a === c || 8 === a.nodeType || "" === a.value);)a = a.nextSibling;
                return a
              }

              function s() {
                var a = D && u.readValue();
                D = E.getOptions();
                var b = {}, d = g[0].firstChild;
                x && g.prepend(p);
                d = q(d);
                D.items.forEach(function(a) {
                  var f, h;
                  a.group ?
                    (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = {groupElement: f, currentOptionElement: f.firstChild}), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling)
                });
                Object.keys(b).forEach(function(a) {
                  r(b[a].currentOptionElement)
                });
                r(d);
                v.$render();
                if (!v.$isEmpty(a)) {
                  var f = u.readValue();
                  (E.trackBy ? ma(a, f) : a === f) || (v.$setViewValue(f), v.$render())
                }
              }

              var v = k[1];
              if (v) {
                var u = k[0];
                k =
                  h.multiple;
                for (var p, C = 0, w = g.children(), y = w.length; C < y; C++)if ("" === w[C].value) {
                  p = w.eq(C);
                  break
                }
                var x = !!p, z = B(c.cloneNode(!1));
                z.val("?");
                var D, E = d(h.ngOptions, g, b);
                k ? (v.$isEmpty = function(a) {
                  return !a || 0 === a.length
                }, u.writeValue = function(a) {
                  D.items.forEach(function(a) {
                    a.element.selected = !1
                  });
                  a && a.forEach(function(a) {
                    (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                  })
                }, u.readValue = function() {
                  var a = g.val() || [], b = [];
                  n(a, function(a) {
                    (a = D.selectValueMap[a]) && !a.disabled && b.push(D.getViewValueFromOption(a))
                  });
                  return b
                }, E.trackBy && b.$watchCollection(function() {
                  if (I(v.$viewValue))return v.$viewValue.map(function(a) {
                    return E.getTrackByValue(a)
                  })
                }, function() {
                  v.$render()
                })) : (u.writeValue = function(a) {
                  var b = D.getOptionFromViewValue(a);
                  b && !b.disabled ? g[0].value !== b.selectValue && (z.remove(), x || p.remove(), g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || x ? (z.remove(), x || g.prepend(p), g.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (x || p.remove(), g.prepend(z),
                    g.val("?"), z.prop("selected", !0), z.attr("selected", !0))
                }, u.readValue = function() {
                  var a = D.selectValueMap[g.val()];
                  return a && !a.disabled ? (x || p.remove(), z.remove(), D.getViewValueFromOption(a)) : null
                }, E.trackBy && b.$watch(function() {
                  return E.getTrackByValue(v.$viewValue)
                }, function() {
                  v.$render()
                }));
                x ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = B(c.cloneNode(!1));
                s();
                b.$watchCollection(E.getWatchables, s)
              }
            }
          }
        }
      }
    ], Be = [
      "$locale", "$interpolate", "$log", function(a, b, d) {
        var c = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
          link: function(f,
                         g, h) {
            function k(a) {
              g.text(a || "")
            }

            var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), r = h.offset || 0, s = f.$eval(m) || {}, u = {}, v = b.startSymbol(), y = b.endSymbol(), p = v + l + "-" + r + y, C = fa.noop, w;
            n(h, function(a, b) {
              var c = e.exec(b);
              c && (c = (c[1] ? "-" : "") + F(c[2]), s[c] = g.attr(h.$attr[b]))
            });
            n(s, function(a, d) {
              u[d] = b(a.replace(c, p))
            });
            f.$watch(l, function(b) {
              var c = parseFloat(b), e = isNaN(c);
              e || c in s || (c = a.pluralCat(c - r));
              c === w || e && Q(w) && isNaN(w) || (C(), e = u[c], q(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " +
                m), C = x, k()) : C = f.$watch(e, k), w = c)
            })
          }
        }
      }
    ], Ce = [
      "$parse", "$animate", function(a, b) {
        var d = G("ngRepeat"), c = function(a, b, c, d, k, l, m) {
          a[c] = d;
          k && (a[k] = l);
          a.$index = b;
          a.$first = 0 === b;
          a.$last = b === m - 1;
          a.$middle = !(a.$first || a.$last);
          a.$odd = !(a.$even = 0 === (b & 1))
        };
        return {
          restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function(e, f) {
            var g = f.ngRepeat, h = X.createComment(" end ngRepeat: " + g + " "), k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!k)throw d("iexp", g);
            var l = k[1], m = k[2], r = k[3], q = k[4], k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
            if (!k)throw d("iidexp", l);
            var s = k[3] || k[1], v = k[2];
            if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident", r);
            var x, p, y, w, z = {$id: Ca};
            q ? x = a(q) : (y = function(a, b) {
              return Ca(b)
            }, w = function(a) {
              return a
            });
            return function(a, e, f, k, l) {
              x && (p = function(b, c, d) {
                v && (z[v] = b);
                z[s] = c;
                z.$index =
                  d;
                return x(a, z)
              });
              var q = $();
              a.$watchCollection(m, function(f) {
                var k, m, t = e[0], x, z = $(), D, E, H, F, I, G, J;
                r && (a[r] = f);
                if (za(f))I = f, m = p || y; else for (J in m = p || w, I = [], f)qa.call(f, J) && "$" !== J.charAt(0) && I.push(J);
                D = I.length;
                J = Array(D);
                for (k = 0; k < D; k++)if (E = f === I ? k : I[k], H = f[E], F = m(E, H, k), q[F])G = q[F], delete q[F], z[F] = G, J[k] = G; else {
                  if (z[F])throw n(J, function(a) {
                    a && a.scope && (q[a.id] = a)
                  }), d("dupes", g, F, H);
                  J[k] = {id: F, scope: u, clone: u};
                  z[F] = !0
                }
                for (x in q) {
                  G = q[x];
                  F = rb(G.clone);
                  b.leave(F);
                  if (F[0].parentNode)for (k = 0, m = F.length; k <
                  m; k++)F[k].$$NG_REMOVED = !0;
                  G.scope.$destroy()
                }
                for (k = 0; k < D; k++)if (E = f === I ? k : I[k], H = f[E], G = J[k], G.scope) {
                  x = t;
                  do x = x.nextSibling; while (x && x.$$NG_REMOVED);
                  G.clone[0] != x && b.move(rb(G.clone), null, B(t));
                  t = G.clone[G.clone.length - 1];
                  c(G.scope, k, s, H, v, E, D)
                } else l(function(a, d) {
                  G.scope = d;
                  var e = h.cloneNode(!1);
                  a[a.length++] = e;
                  b.enter(a, null, B(t));
                  t = e;
                  G.clone = a;
                  z[G.id] = G;
                  c(G.scope, k, s, H, v, E, D)
                });
                q = z
              })
            }
          }
        }
      }
    ], De = [
      "$animate", function(a) {
        return {
          restrict: "A", multiElement: !0, link: function(b, d, c) {
            b.$watch(c.ngShow, function(b) {
              a[b ?
                "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
            })
          }
        }
      }
    ], we = [
      "$animate", function(a) {
        return {
          restrict: "A", multiElement: !0, link: function(b, d, c) {
            b.$watch(c.ngHide, function(b) {
              a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
            })
          }
        }
      }
    ], Ee = La(function(a, b, d) {
      a.$watch(d.ngStyle, function(a, d) {
        d && a !== d && n(d, function(a, c) {
          b.css(c, "")
        });
        a && b.css(a)
      }, !0)
    }), Fe = [
      "$animate", function(a) {
        return {
          require: "ngSwitch", controller: [
            "$scope", function() {
              this.cases = {}
            }
          ], link: function(b,
                            d, c, e) {
            var f = [], g = [], h = [], k = [], l = function(a, b) {
              return function() {
                a.splice(b, 1)
              }
            };
            b.$watch(c.ngSwitch || c.on, function(b) {
              var c, d;
              c = 0;
              for (d = h.length; c < d; ++c)a.cancel(h[c]);
              c = h.length = 0;
              for (d = k.length; c < d; ++c) {
                var q = rb(g[c].clone);
                k[c].$destroy();
                (h[c] = a.leave(q)).then(l(h, c))
              }
              g.length = 0;
              k.length = 0;
              (f = e.cases["!" + b] || e.cases["?"]) && n(f, function(b) {
                b.transclude(function(c, d) {
                  k.push(d);
                  var e = b.element;
                  c[c.length++] = X.createComment(" end ngSwitchWhen: ");
                  g.push({clone: c});
                  a.enter(c, e.parent(), e)
                })
              })
            })
          }
        }
      }
    ],
    Ge = La({
      transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function(a, b, d, c, e) {
        c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
        c.cases["!" + d.ngSwitchWhen].push({transclude: e, element: b})
      }
    }), He = La({
      transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function(a, b, d, c, e) {
        c.cases["?"] = c.cases["?"] || [];
        c.cases["?"].push({transclude: e, element: b})
      }
    }), Je = La({
      restrict: "EAC", link: function(a, b, d, c, e) {
        if (!e)throw G("ngTransclude")("orphan", ua(b));
        e(function(a) {
          b.empty();
          b.append(a)
        })
      }
    }), je = [
      "$templateCache", function(a) {
        return {
          restrict: "E", terminal: !0, compile: function(b, d) {
            "text/ng-template" == d.type && a.put(d.id, b[0].text)
          }
        }
      }
    ], Cg = {$setViewValue: x, $render: x}, Dg = [
      "$element", "$scope", "$attrs", function(a, b, d) {
        var c = this, e = new Sa;
        c.ngModelCtrl = Cg;
        c.unknownOption = B(X.createElement("option"));
        c.renderUnknownOption = function(b) {
          b = "? " + Ca(b) + " ?";
          c.unknownOption.val(b);
          a.prepend(c.unknownOption);
          a.val(b)
        };
        b.$on("$destroy", function() {
          c.renderUnknownOption = x
        });
        c.removeUnknownOption =
          function() {
            c.unknownOption.parent() && c.unknownOption.remove()
          };
        c.readValue = function() {
          c.removeUnknownOption();
          return a.val()
        };
        c.writeValue = function(b) {
          c.hasOption(b) ? (c.removeUnknownOption(), a.val(b), "" === b && c.emptyOption.prop("selected", !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), a.val("")) : c.renderUnknownOption(b)
        };
        c.addOption = function(a, b) {
          Ra(a, '"option value"');
          "" === a && (c.emptyOption = b);
          var d = e.get(a) || 0;
          e.put(a, d + 1);
          c.ngModelCtrl.$render();
          b[0].hasAttribute("selected") && (b[0].selected = !0)
        };
        c.removeOption = function(a) {
          var b = e.get(a);
          b && (1 === b ? (e.remove(a), "" === a && (c.emptyOption = u)) : e.put(a, b - 1))
        };
        c.hasOption = function(a) {
          return !!e.get(a)
        };
        c.registerOption = function(a, b, d, e, l) {
          if (e) {
            var m;
            d.$observe("value", function(a) {
              y(m) && c.removeOption(m);
              m = a;
              c.addOption(a, b)
            })
          } else l ? a.$watch(l, function(a, e) {
            d.$set("value", a);
            e !== a && c.removeOption(e);
            c.addOption(a, b)
          }) : c.addOption(d.value, b);
          b.on("$destroy", function() {
            c.removeOption(d.value);
            c.ngModelCtrl.$render()
          })
        }
      }
    ], ke = function() {
      return {
        restrict: "E",
        require: ["select", "?ngModel"], controller: Dg, priority: 1, link: {
          pre: function(a, b, d, c) {
            var e = c[1];
            if (e) {
              var f = c[0];
              f.ngModelCtrl = e;
              e.$render = function() {
                f.writeValue(e.$viewValue)
              };
              b.on("change", function() {
                a.$apply(function() {
                  e.$setViewValue(f.readValue())
                })
              });
              if (d.multiple) {
                f.readValue = function() {
                  var a = [];
                  n(b.find("option"), function(b) {
                    b.selected && a.push(b.value)
                  });
                  return a
                };
                f.writeValue = function(a) {
                  var c = new Sa(a);
                  n(b.find("option"), function(a) {
                    a.selected = y(c.get(a.value))
                  })
                };
                var g, h = NaN;
                a.$watch(function() {
                  h !==
                  e.$viewValue || ma(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());
                  h = e.$viewValue
                });
                e.$isEmpty = function(a) {
                  return !a || 0 === a.length
                }
              }
            }
          }
        }
      }
    }, me = [
      "$interpolate", function(a) {
        return {
          restrict: "E", priority: 100, compile: function(b, d) {
            if (y(d.value))var c = a(d.value, !0); else {
              var e = a(b.text(), !0);
              e || d.$set("value", b.text())
            }
            return function(a, b, d) {
              var k = b.parent();
              (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
            }
          }
        }
      }
    ], le = na({restrict: "E", terminal: !1}), Fc = function() {
      return {
        restrict: "A",
        require: "?ngModel", link: function(a, b, d, c) {
          c && (d.required = !0, c.$validators.required = function(a, b) {
            return !d.required || !c.$isEmpty(b)
          }, d.$observe("required", function() {
            c.$validate()
          }))
        }
      }
    }, Ec = function() {
      return {
        restrict: "A", require: "?ngModel", link: function(a, b, d, c) {
          if (c) {
            var e, f = d.ngPattern || d.pattern;
            d.$observe("pattern", function(a) {
              E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
              if (a && !a.test)throw G("ngPattern")("noregexp", f, a, ua(b));
              e = a || u;
              c.$validate()
            });
            c.$validators.pattern = function(a, b) {
              return c.$isEmpty(b) ||
                q(e) || e.test(b)
            }
          }
        }
      }
    }, Hc = function() {
      return {
        restrict: "A", require: "?ngModel", link: function(a, b, d, c) {
          if (c) {
            var e = -1;
            d.$observe("maxlength", function(a) {
              a = ea(a);
              e = isNaN(a) ? -1 : a;
              c.$validate()
            });
            c.$validators.maxlength = function(a, b) {
              return 0 > e || c.$isEmpty(b) || b.length <= e
            }
          }
        }
      }
    }, Gc = function() {
      return {
        restrict: "A", require: "?ngModel", link: function(a, b, d, c) {
          if (c) {
            var e = 0;
            d.$observe("minlength", function(a) {
              e = ea(a) || 0;
              c.$validate()
            });
            c.$validators.minlength = function(a, b) {
              return c.$isEmpty(b) || b.length >= e
            }
          }
        }
      }
    };
  S.angular.bootstrap ?
    console.log("WARNING: Tried to load angular more than once.") : (ce(), ee(fa), fa.module("ngLocale", [], [
    "$provide", function(a) {
      function b(a) {
        a += "";
        var b = a.indexOf(".");
        return -1 == b ? 0 : a.length - b - 1
      }

      a.value("$locale", {
        DATETIME_FORMATS: {
          AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a"
        }, NUMBER_FORMATS: {
          CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
            {gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: ""}, {
              gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\u00a4",
              negSuf: "", posPre: "\u00a4", posSuf: ""
            }
          ]
        }, id: "en-us", pluralCat: function(a, c) {
          var e = a | 0, f = c;
          u === f && (f = Math.min(b(a), 3));
          Math.pow(10, f);
          return 1 == e && 0 == f ? "one" : "other"
        }
      })
    }
  ]), B(X).ready(function() {
    Zd(X, yc)
  }))
})(window, document);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

(function(p, c, C) {
  'use strict';
  function v(r, h, g) {
    return {
      restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function(a, f, b, d, y) {
        function z() {
          k && (g.cancel(k), k = null);
          l && (l.$destroy(), l = null);
          m && (k = g.leave(m), k.then(function() {
            k = null
          }), m = null)
        }

        function x() {
          var b = r.current && r.current.locals;
          if (c.isDefined(b && b.$template)) {
            var b = a.$new(), d = r.current;
            m = y(b, function(b) {
              g.enter(b, null, m || f).then(function() {
                !c.isDefined(t) || t && !a.$eval(t) || h()
              });
              z()
            });
            l = d.scope = b;
            l.$emit("$viewContentLoaded");
            l.$eval(w)
          } else z()
        }

        var l, m, k, t = b.autoscroll, w = b.onload || "";
        a.$on("$routeChangeSuccess", x);
        x()
      }
    }
  }

  function A(c, h, g) {
    return {
      restrict: "ECA", priority: -400, link: function(a, f) {
        var b = g.current, d = b.locals;
        f.html(d.$template);
        var y = c(f.contents());
        b.controller && (d.$scope = a, d = h(b.controller, d), b.controllerAs && (a[b.controllerAs] = d), f.data("$ngControllerController", d), f.children().data("$ngControllerController", d));
        y(a)
      }
    }
  }

  p = c.module("ngRoute", ["ng"]).provider("$route", function() {
    function r(a, f) {
      return c.extend(Object.create(a),
        f)
    }

    function h(a, c) {
      var b = c.caseInsensitiveMatch, d = {originalPath: a, regexp: a}, g = d.keys = [];
      a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, c, b, d) {
        a = "?" === d ? d : null;
        d = "*" === d ? d : null;
        g.push({name: b, optional: !!a});
        c = c || "";
        return "" + (a ? "" : c) + "(?:" + (a ? c : "") + (d && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
      }).replace(/([\/$\*])/g, "\\$1");
      d.regexp = new RegExp("^" + a + "$", b ? "i" : "");
      return d
    }

    var g = {};
    this.when = function(a, f) {
      var b = c.copy(f);
      c.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
      c.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
      g[a] = c.extend(b, a && h(a, b));
      if (a) {
        var d = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
        g[d] = c.extend({redirectTo: a}, h(d, b))
      }
      return this
    };
    this.caseInsensitiveMatch = !1;
    this.otherwise = function(a) {
      "string" === typeof a && (a = {redirectTo: a});
      this.when(null, a);
      return this
    };
    this.$get = [
      "$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(a, f, b, d, h, p, x) {
        function l(b) {
          var e = s.current;
          (v = (n = k()) && e && n.$$route === e.$$route && c.equals(n.pathParams, e.pathParams) && !n.reloadOnSearch && !w) || !e && !n || a.$broadcast("$routeChangeStart", n, e).defaultPrevented && b && b.preventDefault()
        }

        function m() {
          var u = s.current, e = n;
          if (v)u.params = e.params, c.copy(u.params, b), a.$broadcast("$routeUpdate", u); else if (e || u)w = !1, (s.current = e) && e.redirectTo && (c.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), d.when(e).then(function() {
            if (e) {
              var a =
                c.extend({}, e.resolve), b, f;
              c.forEach(a, function(b, e) {
                a[e] = c.isString(b) ? h.get(b) : h.invoke(b, null, null, e)
              });
              c.isDefined(b = e.template) ? c.isFunction(b) && (b = b(e.params)) : c.isDefined(f = e.templateUrl) && (c.isFunction(f) && (f = f(e.params)), c.isDefined(f) && (e.loadedTemplateUrl = x.valueOf(f), b = p(f)));
              c.isDefined(b) && (a.$template = b);
              return d.all(a)
            }
          }).then(function(f) {
            e == s.current && (e && (e.locals = f, c.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u))
          }, function(b) {
            e == s.current && a.$broadcast("$routeChangeError",
              e, u, b)
          })
        }

        function k() {
          var a, b;
          c.forEach(g, function(d, g) {
            var q;
            if (q = !b) {
              var h = f.path();
              q = d.keys;
              var l = {};
              if (d.regexp)if (h = d.regexp.exec(h)) {
                for (var k = 1, m = h.length; k < m; ++k) {
                  var n = q[k - 1], p = h[k];
                  n && p && (l[n.name] = p)
                }
                q = l
              } else q = null; else q = null;
              q = a = q
            }
            q && (b = r(d, {params: c.extend({}, f.search(), a), pathParams: a}), b.$$route = d)
          });
          return b || g[null] && r(g[null], {params: {}, pathParams: {}})
        }

        function t(a, b) {
          var d = [];
          c.forEach((a || "").split(":"), function(a, c) {
            if (0 === c)d.push(a); else {
              var f = a.match(/(\w+)(?:[?*])?(.*)/),
                g = f[1];
              d.push(b[g]);
              d.push(f[2] || "");
              delete b[g]
            }
          });
          return d.join("")
        }

        var w = !1, n, v, s = {
          routes: g, reload: function() {
            w = !0;
            a.$evalAsync(function() {
              l();
              m()
            })
          }, updateParams: function(a) {
            if (this.current && this.current.$$route)a = c.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), f.search(a); else throw B("norout");
          }
        };
        a.$on("$locationChangeStart", l);
        a.$on("$locationChangeSuccess", m);
        return s
      }
    ]
  });
  var B = c.$$minErr("ngRoute");
  p.provider("$routeParams", function() {
    this.$get = function() {
      return {}
    }
  });
  p.directive("ngView", v);
  p.directive("ngView", A);
  v.$inject = ["$route", "$anchorScroll", "$animate"];
  A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map

(function(E, l, Va) {
  'use strict';
  function xa(a, b, c) {
    if (!a)throw Ka("areq", b || "?", c || "required");
    return a
  }

  function ya(a, b) {
    if (!a && !b)return "";
    if (!a)return b;
    if (!b)return a;
    aa(a) && (a = a.join(" "));
    aa(b) && (b = b.join(" "));
    return a + " " + b
  }

  function La(a) {
    var b = {};
    a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
    return b
  }

  function W(a, b, c) {
    var d = "";
    a = aa(a) ? a : a && R(a) && a.length ? a.split(/\s+/) : [];
    u(a, function(a, m) {
      a && 0 < a.length && (d += 0 < m ? " " : "", d += c ? b + a : a + b)
    });
    return d
  }

  function Ma(a) {
    if (a instanceof I)switch (a.length) {
      case 0:
        return [];
      case 1:
        if (1 === a[0].nodeType)return a;
        break;
      default:
        return I(oa(a))
    }
    if (1 === a.nodeType)return I(a)
  }

  function oa(a) {
    if (!a[0])return a;
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (1 == c.nodeType)return c
    }
  }

  function Na(a, b, c) {
    u(b, function(b) {
      a.addClass(b, c)
    })
  }

  function Oa(a, b, c) {
    u(b, function(b) {
      a.removeClass(b, c)
    })
  }

  function T(a) {
    return function(b, c) {
      c.addClass && (Na(a, b, c.addClass), c.addClass = null);
      c.removeClass && (Oa(a, b, c.removeClass), c.removeClass = null)
    }
  }

  function la(a) {
    a = a || {};
    if (!a.$$prepared) {
      var b = a.domOperation ||
        P;
      a.domOperation = function() {
        a.$$domOperationFired = !0;
        b();
        b = P
      };
      a.$$prepared = !0
    }
    return a
  }

  function ea(a, b) {
    za(a, b);
    Aa(a, b)
  }

  function za(a, b) {
    b.from && (a.css(b.from), b.from = null)
  }

  function Aa(a, b) {
    b.to && (a.css(b.to), b.to = null)
  }

  function U(a, b, c) {
    var d = (b.addClass || "") + " " + (c.addClass || ""), f = (b.removeClass || "") + " " + (c.removeClass || "");
    a = Pa(a.attr("class"), d, f);
    c.preparationClasses && (b.preparationClasses = ba(c.preparationClasses, b.preparationClasses), delete c.preparationClasses);
    d = b.domOperation !== P ? b.domOperation :
      null;
    Ba(b, c);
    d && (b.domOperation = d);
    b.addClass = a.addClass ? a.addClass : null;
    b.removeClass = a.removeClass ? a.removeClass : null;
    return b
  }

  function Pa(a, b, c) {
    function d(a) {
      R(a) && (a = a.split(" "));
      var b = {};
      u(a, function(a) {
        a.length && (b[a] = !0)
      });
      return b
    }

    var f = {};
    a = d(a);
    b = d(b);
    u(b, function(a, b) {
      f[b] = 1
    });
    c = d(c);
    u(c, function(a, b) {
      f[b] = 1 === f[b] ? null : -1
    });
    var m = {addClass: "", removeClass: ""};
    u(f, function(b, c) {
      var d, f;
      1 === b ? (d = "addClass", f = !a[c]) : -1 === b && (d = "removeClass", f = a[c]);
      f && (m[d].length && (m[d] += " "), m[d] += c)
    });
    return m
  }

  function F(a) {
    return a instanceof l.element ? a[0] : a
  }

  function Qa(a, b, c) {
    var d = "";
    b && (d = W(b, "ng-", !0));
    c.addClass && (d = ba(d, W(c.addClass, "-add")));
    c.removeClass && (d = ba(d, W(c.removeClass, "-remove")));
    d.length && (c.preparationClasses = d, a.addClass(d))
  }

  function ma(a, b) {
    var c = b ? "-" + b + "s" : "";
    ia(a, [ja, c]);
    return [ja, c]
  }

  function pa(a, b) {
    var c = b ? "paused" : "", d = X + "PlayState";
    ia(a, [d, c]);
    return [d, c]
  }

  function ia(a, b) {
    a.style[b[0]] = b[1]
  }

  function ba(a, b) {
    return a ? b ? a + " " + b : a : b
  }

  function Ca(a, b, c) {
    var d = Object.create(null),
      f = a.getComputedStyle(b) || {};
    u(c, function(a, b) {
      var c = f[a];
      if (c) {
        var D = c.charAt(0);
        if ("-" === D || "+" === D || 0 <= D)c = Ra(c);
        0 === c && (c = null);
        d[b] = c
      }
    });
    return d
  }

  function Ra(a) {
    var b = 0;
    a = a.split(/\s*,\s*/);
    u(a, function(a) {
      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
      a = parseFloat(a) || 0;
      b = b ? Math.max(a, b) : a
    });
    return b
  }

  function qa(a) {
    return 0 === a || null != a
  }

  function Da(a, b) {
    var c = S, d = a + "s";
    b ? c += "Duration" : d += " linear all";
    return [c, d]
  }

  function Ea() {
    var a = Object.create(null);
    return {
      flush: function() {
        a = Object.create(null)
      },
      count: function(b) {
        return (b = a[b]) ? b.total : 0
      }, get: function(b) {
        return (b = a[b]) && b.value
      }, put: function(b, c) {
        a[b] ? a[b].total++ : a[b] = {total: 1, value: c}
      }
    }
  }

  function Fa(a, b, c) {
    u(c, function(c) {
      a[c] = Y(a[c]) ? a[c] : b.style.getPropertyValue(c)
    })
  }

  var P = l.noop, Ga = l.copy, Ba = l.extend, I = l.element, u = l.forEach, aa = l.isArray, R = l.isString, ra = l.isObject, O = l.isUndefined, Y = l.isDefined, Ha = l.isFunction, sa = l.isElement, S, ta, X, ua;
  O(E.ontransitionend) && Y(E.onwebkittransitionend) ? (S = "WebkitTransition", ta = "webkitTransitionEnd transitionend") :
    (S = "transition", ta = "transitionend");
  O(E.onanimationend) && Y(E.onwebkitanimationend) ? (X = "WebkitAnimation", ua = "webkitAnimationEnd animationend") : (X = "animation", ua = "animationend");
  var na = X + "Delay", va = X + "Duration", ja = S + "Delay";
  E = S + "Duration";
  var Ka = l.$$minErr("ng"), Sa = {transitionDuration: E, transitionDelay: ja, transitionProperty: S + "Property", animationDuration: va, animationDelay: na, animationIterationCount: X + "IterationCount"}, Ta = {transitionDuration: E, transitionDelay: ja, animationDuration: va, animationDelay: na};
  l.module("ngAnimate", []).directive("ngAnimateChildren", [
    function() {
      return function(a, b, c) {
        a = c.ngAnimateChildren;
        l.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function(a) {
          b.data("$$ngAnimateChildren", "on" === a || "true" === a)
        })
      }
    }
  ]).factory("$$rAFScheduler", [
    "$$rAF", function(a) {
      function b(a) {
        d = d.concat(a);
        c()
      }

      function c() {
        if (d.length) {
          for (var b = d.shift(), J = 0; J < b.length; J++)b[J]();
          f || a(function() {
            f || c()
          })
        }
      }

      var d, f;
      d = b.queue = [];
      b.waitUntilQuiet = function(b) {
        f &&
        f();
        f = a(function() {
          f = null;
          b();
          c()
        })
      };
      return b
    }
  ]).provider("$$animateQueue", [
    "$animateProvider", function(a) {
      function b(a) {
        if (!a)return null;
        a = a.split(" ");
        var b = Object.create(null);
        u(a, function(a) {
          b[a] = !0
        });
        return b
      }

      function c(a, c) {
        if (a && c) {
          var d = b(c);
          return a.split(" ").some(function(a) {
            return d[a]
          })
        }
      }

      function d(a, b, c, d) {
        return m[a].some(function(a) {
          return a(b, c, d)
        })
      }

      function f(a, b) {
        a = a || {};
        var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length;
        return b ? c && d : c || d
      }

      var m = this.rules = {
        skip: [],
        cancel: [], join: []
      };
      m.join.push(function(a, b, c) {
        return !b.structural && f(b.options)
      });
      m.skip.push(function(a, b, c) {
        return !b.structural && !f(b.options)
      });
      m.skip.push(function(a, b, c) {
        return "leave" == c.event && b.structural
      });
      m.skip.push(function(a, b, c) {
        return c.structural && 2 === c.state && !b.structural
      });
      m.cancel.push(function(a, b, c) {
        return c.structural && b.structural
      });
      m.cancel.push(function(a, b, c) {
        return 2 === c.state && b.structural
      });
      m.cancel.push(function(a, b, d) {
        a = b.options.addClass;
        b = b.options.removeClass;
        var f =
          d.options.addClass;
        d = d.options.removeClass;
        return O(a) && O(b) || O(f) && O(d) ? !1 : c(a, d) || c(b, f)
      });
      this.$get = [
        "$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(b, c, D, m, h, l, x, z, v, k) {
          function N() {
            var a = !1;
            return function(b) {
              a ? b() : c.$$postDigest(function() {
                a = !0;
                b()
              })
            }
          }

          function y(a, b, c) {
            var e = F(b), d = F(a), g = [];
            (a = G[c]) && u(a, function(a) {
              s.call(a.node, e) ? g.push(a.callback) : "leave" === c && s.call(a.node, d) && g.push(a.callback)
            });
            return g
          }

          function w(a, e, g) {
            function w(c, e, g, d) {
              D(function() {
                var c = y(q, a, e);
                c.length && b(function() {
                  u(c, function(b) {
                    b(a, g, d)
                  })
                })
              });
              c.progress(e, g, d)
            }

            function k(b) {
              var c = a, e = n;
              e.preparationClasses && (c.removeClass(e.preparationClasses), e.preparationClasses = null);
              e.activeClasses && (c.removeClass(e.activeClasses), e.activeClasses = null);
              Ja(a, n);
              ea(a, n);
              n.domOperation();
              s.complete(!b)
            }

            var n = Ga(g), G, q;
            if (a = Ma(a))G = F(a), q = a.parent();
            var n = la(n), s = new x, D = N();
            aa(n.addClass) && (n.addClass = n.addClass.join(" "));
            n.addClass && !R(n.addClass) && (n.addClass = null);
            aa(n.removeClass) && (n.removeClass = n.removeClass.join(" "));
            n.removeClass && !R(n.removeClass) && (n.removeClass = null);
            n.from && !ra(n.from) && (n.from = null);
            n.to && !ra(n.to) && (n.to = null);
            if (!G)return k(), s;
            g = [G.className, n.addClass, n.removeClass].join(" ");
            if (!Ua(g))return k(), s;
            var v = 0 <= ["enter", "move", "leave"].indexOf(e), h = !H || m[0].hidden || B.get(G);
            g = !h && t.get(G) || {};
            var z = !!g.state;
            h || z && 1 == g.state || (h = !r(a, q, e));
            if (h)return k(), s;
            v && wa(a);
            h = {
              structural: v, element: a,
              event: e, close: k, options: n, runner: s
            };
            if (z) {
              if (d("skip", a, h, g)) {
                if (2 === g.state)return k(), s;
                U(a, g.options, n);
                return g.runner
              }
              if (d("cancel", a, h, g))if (2 === g.state)g.runner.end(); else if (g.structural)g.close(); else return U(a, g.options, h.options), g.runner; else if (d("join", a, h, g))if (2 === g.state)U(a, n, {}); else return Qa(a, v ? e : null, n), e = h.event = g.event, n = U(a, g.options, h.options), g.runner
            } else U(a, n, {});
            (z = h.structural) || (z = "animate" === h.event && 0 < Object.keys(h.options.to || {}).length || f(h.options));
            if (!z)return k(),
              L(a), s;
            var M = (g.counter || 0) + 1;
            h.counter = M;
            A(a, 1, h);
            c.$$postDigest(function() {
              var b = t.get(G), c = !b, b = b || {}, g = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || f(b.options));
              if (c || b.counter !== M || !g) {
                c && (Ja(a, n), ea(a, n));
                if (c || v && b.event !== e)n.domOperation(), s.end();
                g || L(a)
              } else e = !b.structural && f(b.options, !0) ? "setClass" : b.event, A(a, 2), b = l(a, e, b.options), b.done(function(b) {
                k(!b);
                (b = t.get(G)) && b.counter === M && L(F(a));
                w(s, e, "close", {})
              }), s.setHost(b), w(s, e, "start", {})
            });
            return s
          }

          function wa(a) {
            a =
              F(a).querySelectorAll("[data-ng-animate]");
            u(a, function(a) {
              var b = parseInt(a.getAttribute("data-ng-animate")), c = t.get(a);
              if (c)switch (b) {
                case 2:
                  c.runner.end();
                case 1:
                  t.remove(a)
              }
            })
          }

          function L(a) {
            a = F(a);
            a.removeAttribute("data-ng-animate");
            t.remove(a)
          }

          function q(a, b) {
            return F(a) === F(b)
          }

          function r(a, b, c) {
            c = I(m[0].body);
            var e = q(a, c) || "HTML" === a[0].nodeName, g = q(a, D), d = !1, H, w = B.get(F(a));
            for ((a = a.data("$ngAnimatePin")) && (b = a); b && b.length;) {
              g || (g = q(b, D));
              var k = b[0];
              if (1 !== k.nodeType)break;
              a = t.get(k) || {};
              if (!d) {
                k = B.get(k);
                if (!0 === k && !1 !== w) {
                  w = !0;
                  break
                } else!1 === k && (w = !1);
                d = a.structural
              }
              if (O(H) || !0 === H)a = b.data("$$ngAnimateChildren"), Y(a) && (H = a);
              if (d && !1 === H)break;
              e || (e = q(b, c));
              if (e && g)break;
              if (!g && (a = b.data("$ngAnimatePin"))) {
                b = a;
                continue
              }
              b = b.parent()
            }
            return (!d || H) && !0 !== w && g && e
          }

          function A(a, b, c) {
            c = c || {};
            c.state = b;
            a = F(a);
            a.setAttribute("data-ng-animate", b);
            c = (b = t.get(a)) ? Ba(b, c) : c;
            t.put(a, c)
          }

          var t = new h, B = new h, H = null, e = c.$watch(function() {
            return 0 === z.totalPendingRequests
          }, function(a) {
            a && (e(), c.$$postDigest(function() {
              c.$$postDigest(function() {
                null ===
                H && (H = !0)
              })
            }))
          }), G = {}, g = a.classNameFilter(), Ua = g ? function(a) {
            return g.test(a)
          } : function() {
            return !0
          }, Ja = T(v), s = Node.prototype.contains || function(a) {
              return this === a || !!(this.compareDocumentPosition(a) & 16)
            };
          return {
            on: function(a, b, c) {
              b = oa(b);
              G[a] = G[a] || [];
              G[a].push({node: b, callback: c})
            }, off: function(a, b, c) {
              function e(a, b, c) {
                var g = oa(b);
                return a.filter(function(a) {
                  return !(a.node === g && (!c || a.callback === c))
                })
              }

              var g = G[a];
              g && (G[a] = 1 === arguments.length ? null : e(g, b, c))
            }, pin: function(a, b) {
              xa(sa(a), "element", "not an element");
              xa(sa(b), "parentElement", "not an element");
              a.data("$ngAnimatePin", b)
            }, push: function(a, b, c, e) {
              c = c || {};
              c.domOperation = e;
              return w(a, b, c)
            }, enabled: function(a, b) {
              var c = arguments.length;
              if (0 === c)b = !!H; else if (sa(a)) {
                var e = F(a), g = B.get(e);
                1 === c ? b = !g : B.put(e, !b)
              } else b = H = !!a;
              return b
            }
          }
        }
      ]
    }
  ]).provider("$$animation", [
    "$animateProvider", function(a) {
      function b(a) {
        return a.data("$$animationRunner")
      }

      var c = this.drivers = [];
      this.$get = [
        "$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler",
        function(a, f, m, J, ha, D) {
          function Q(a) {
            function b(a) {
              if (a.processed)return a;
              a.processed = !0;
              var d = a.domNode, k = d.parentNode;
              f.put(d, a);
              for (var q; k;) {
                if (q = f.get(k)) {
                  q.processed || (q = b(q));
                  break
                }
                k = k.parentNode
              }
              (q || c).children.push(a);
              return a
            }

            var c = {children: []}, d, f = new ha;
            for (d = 0; d < a.length; d++) {
              var h = a[d];
              f.put(h.domNode, a[d] = {domNode: h.domNode, fn: h.fn, children: []})
            }
            for (d = 0; d < a.length; d++)b(a[d]);
            return function(a) {
              var b = [], c = [], d;
              for (d = 0; d < a.children.length; d++)c.push(a.children[d]);
              a = c.length;
              var k =
                0, f = [];
              for (d = 0; d < c.length; d++) {
                var t = c[d];
                0 >= a && (a = k, k = 0, b.push(f), f = []);
                f.push(t.fn);
                t.children.forEach(function(a) {
                  k++;
                  c.push(a)
                });
                a--
              }
              f.length && b.push(f);
              return b
            }(c)
          }

          var h = [], l = T(a);
          return function(x, z, v) {
            function k(a) {
              a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
              var b = [];
              u(a, function(a) {
                var c = a.getAttribute("ng-animate-ref");
                c && c.length && b.push(a)
              });
              return b
            }

            function N(a) {
              var b = [], c = {};
              u(a, function(a, g) {
                var d = F(a.element), H = 0 <= ["enter", "move"].indexOf(a.event),
                  d = a.structural ? k(d) : [];
                if (d.length) {
                  var f = H ? "to" : "from";
                  u(d, function(a) {
                    var b = a.getAttribute("ng-animate-ref");
                    c[b] = c[b] || {};
                    c[b][f] = {animationID: g, element: I(a)}
                  })
                } else b.push(a)
              });
              var g = {}, d = {};
              u(c, function(c, f) {
                var k = c.from, w = c.to;
                if (k && w) {
                  var B = a[k.animationID], t = a[w.animationID], A = k.animationID.toString();
                  if (!d[A]) {
                    var h = d[A] = {
                      structural: !0, beforeStart: function() {
                        B.beforeStart();
                        t.beforeStart()
                      }, close: function() {
                        B.close();
                        t.close()
                      }, classes: y(B.classes, t.classes), from: B, to: t, anchors: []
                    };
                    h.classes.length ?
                      b.push(h) : (b.push(B), b.push(t))
                  }
                  d[A].anchors.push({out: k.element, "in": w.element})
                } else k = k ? k.animationID : w.animationID, w = k.toString(), g[w] || (g[w] = !0, b.push(a[k]))
              });
              return b
            }

            function y(a, b) {
              a = a.split(" ");
              b = b.split(" ");
              for (var c = [], d = 0; d < a.length; d++) {
                var k = a[d];
                if ("ng-" !== k.substring(0, 3))for (var w = 0; w < b.length; w++)if (k === b[w]) {
                  c.push(k);
                  break
                }
              }
              return c.join(" ")
            }

            function w(a) {
              for (var b = c.length - 1; 0 <= b; b--) {
                var d = c[b];
                if (m.has(d) && (d = m.get(d)(a)))return d
              }
            }

            function wa(a, c) {
              a.from && a.to ? (b(a.from.element).setHost(c),
                b(a.to.element).setHost(c)) : b(a.element).setHost(c)
            }

            function L() {
              var a = b(x);
              !a || "leave" === z && v.$$domOperationFired || a.end()
            }

            function q(b) {
              x.off("$destroy", L);
              x.removeData("$$animationRunner");
              l(x, v);
              ea(x, v);
              v.domOperation();
              B && a.removeClass(x, B);
              x.removeClass("ng-animate");
              A.complete(!b)
            }

            v = la(v);
            var r = 0 <= ["enter", "move", "leave"].indexOf(z), A = new J({
              end: function() {
                q()
              }, cancel: function() {
                q(!0)
              }
            });
            if (!c.length)return q(), A;
            x.data("$$animationRunner", A);
            var t = ya(x.attr("class"), ya(v.addClass, v.removeClass)),
              B = v.tempClasses;
            B && (t += " " + B, v.tempClasses = null);
            h.push({
              element: x, classes: t, event: z, structural: r, options: v, beforeStart: function() {
                x.addClass("ng-animate");
                B && a.addClass(x, B)
              }, close: q
            });
            x.on("$destroy", L);
            if (1 < h.length)return A;
            f.$$postDigest(function() {
              var a = [];
              u(h, function(c) {
                b(c.element) ? a.push(c) : c.close()
              });
              h.length = 0;
              var c = N(a), d = [];
              u(c, function(a) {
                d.push({
                  domNode: F(a.from ? a.from.element : a.element), fn: function() {
                    a.beforeStart();
                    var c, d = a.close;
                    if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
                      var e =
                        w(a);
                      e && (c = e.start)
                    }
                    c ? (c = c(), c.done(function(a) {
                      d(!a)
                    }), wa(a, c)) : d()
                  }
                })
              });
              D(Q(d))
            });
            return A
          }
        }
      ]
    }
  ]).provider("$animateCss", [
    "$animateProvider", function(a) {
      var b = Ea(), c = Ea();
      this.$get = [
        "$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(a, f, m, J, l, D, Q, h) {
          function Ia(a, b) {
            var c = a.parentNode;
            return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++N)) + "-" + a.getAttribute("class") + "-" + b
          }

          function x(k, h, L, q) {
            var r;
            0 < b.count(L) && (r = c.get(L),
            r || (h = W(h, "-stagger"), f.addClass(k, h), r = Ca(a, k, q), r.animationDuration = Math.max(r.animationDuration, 0), r.transitionDuration = Math.max(r.transitionDuration, 0), f.removeClass(k, h), c.put(L, r)));
            return r || {}
          }

          function z(a) {
            y.push(a);
            Q.waitUntilQuiet(function() {
              b.flush();
              c.flush();
              for (var a = l(), d = 0; d < y.length; d++)y[d](a);
              y.length = 0
            })
          }

          function v(c, k, f) {
            k = b.get(f);
            k || (k = Ca(a, c, Sa), "infinite" === k.animationIterationCount && (k.animationIterationCount = 1));
            b.put(f, k);
            c = k;
            f = c.animationDelay;
            k = c.transitionDelay;
            c.maxDelay =
              f && k ? Math.max(f, k) : f || k;
            c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
            return c
          }

          var k = T(f), N = 0, y = [];
          return function(a, c) {
            function d() {
              r()
            }

            function q() {
              r(!0)
            }

            function r(b) {
              if (!(l || ha && N)) {
                l = !0;
                N = !1;
                e.$$skipPreparationClasses || f.removeClass(a, ca);
                f.removeClass(a, ba);
                pa(g, !1);
                ma(g, !1);
                u(y, function(a) {
                  g.style[a[0]] = ""
                });
                k(a, e);
                ea(a, e);
                Object.keys(G).length && u(G, function(a, b) {
                  a ? g.style.setProperty(b, a) : g.style.removeProperty(b)
                });
                if (e.onDone)e.onDone();
                da && da.length &&
                a.off(da.join(" "), B);
                E && E.complete(!b)
              }
            }

            function A(a) {
              p.blockTransition && ma(g, a);
              p.blockKeyframeAnimation && pa(g, !!a)
            }

            function t() {
              E = new m({end: d, cancel: q});
              z(P);
              r();
              return {
                $$willAnimate: !1, start: function() {
                  return E
                }, end: d
              }
            }

            function B(a) {
              a.stopPropagation();
              var b = a.originalEvent || a;
              a = b.$manualTimeStamp || Date.now();
              b = parseFloat(b.elapsedTime.toFixed(3));
              Math.max(a - T, 0) >= O && b >= K && (ha = !0, r())
            }

            function H() {
              function b() {
                if (!l) {
                  A(!1);
                  u(y, function(a) {
                    g.style[a[0]] = a[1]
                  });
                  k(a, e);
                  f.addClass(a, ba);
                  if (p.recalculateTimingStyles) {
                    ka =
                      g.className + " " + ca;
                    fa = Ia(g, ka);
                    C = v(g, ka, fa);
                    Z = C.maxDelay;
                    n = Math.max(Z, 0);
                    K = C.maxDuration;
                    if (0 === K) {
                      r();
                      return
                    }
                    p.hasTransitions = 0 < C.transitionDuration;
                    p.hasAnimations = 0 < C.animationDuration
                  }
                  p.applyAnimationDelay && (Z = "boolean" !== typeof e.delay && qa(e.delay) ? parseFloat(e.delay) : Z, n = Math.max(Z, 0), C.animationDelay = Z, $ = [na, Z + "s"], y.push($), g.style[$[0]] = $[1]);
                  O = 1E3 * n;
                  R = 1E3 * K;
                  if (e.easing) {
                    var d, h = e.easing;
                    p.hasTransitions && (d = S + "TimingFunction", y.push([d, h]), g.style[d] = h);
                    p.hasAnimations && (d = X + "TimingFunction",
                      y.push([d, h]), g.style[d] = h)
                  }
                  C.transitionDuration && da.push(ta);
                  C.animationDuration && da.push(ua);
                  T = Date.now();
                  var t = O + 1.5 * R;
                  d = T + t;
                  var h = a.data("$$animateCss") || [], H = !0;
                  if (h.length) {
                    var s = h[0];
                    (H = d > s.expectedEndTime) ? J.cancel(s.timer) : h.push(r)
                  }
                  H && (t = J(c, t, !1), h[0] = {timer: t, expectedEndTime: d}, h.push(r), a.data("$$animateCss", h));
                  if (da.length)a.on(da.join(" "), B);
                  e.to && (e.cleanupStyles && Fa(G, g, Object.keys(e.to)), Aa(a, e))
                }
              }

              function c() {
                var b = a.data("$$animateCss");
                if (b) {
                  for (var d = 1; d < b.length; d++)b[d]();
                  a.removeData("$$animateCss")
                }
              }

              if (!l)if (g.parentNode) {
                var d = function(a) {
                  if (ha)N && a && (N = !1, r()); else if (N = !a, C.animationDuration)if (a = pa(g, N), N)y.push(a); else {
                    var b = y, c = b.indexOf(a);
                    0 <= a && b.splice(c, 1)
                  }
                }, h = 0 < Y && (C.transitionDuration && 0 === V.transitionDuration || C.animationDuration && 0 === V.animationDuration) && Math.max(V.animationDelay, V.transitionDelay);
                h ? J(b, Math.floor(h * Y * 1E3), !1) : b();
                I.resume = function() {
                  d(!0)
                };
                I.pause = function() {
                  d(!1)
                }
              } else r()
            }

            var e = c || {};
            e.$$prepared || (e = la(Ga(e)));
            var G = {}, g = F(a);
            if (!g || !g.parentNode || !h.enabled())return t();
            var y = [], Q = a.attr("class"), s = La(e), l, N, ha, E, I, n, O, K, R, T, da = [];
            if (0 === e.duration || !D.animations && !D.transitions)return t();
            var ga = e.event && aa(e.event) ? e.event.join(" ") : e.event, U = "", M = "";
            ga && e.structural ? U = W(ga, "ng-", !0) : ga && (U = ga);
            e.addClass && (M += W(e.addClass, "-add"));
            e.removeClass && (M.length && (M += " "), M += W(e.removeClass, "-remove"));
            e.applyClassesEarly && M.length && k(a, e);
            var ca = [U, M].join(" ").trim(), ka = Q + " " + ca, ba = W(ca, "-active"), Q = s.to && 0 < Object.keys(s.to).length;
            if (!(0 < (e.keyframeStyle || "").length || Q || ca))return t();
            var fa, V;
            0 < e.stagger ? (s = parseFloat(e.stagger), V = {transitionDelay: s, animationDelay: s, transitionDuration: 0, animationDuration: 0}) : (fa = Ia(g, ka), V = x(g, ca, fa, Ta));
            e.$$skipPreparationClasses || f.addClass(a, ca);
            e.transitionStyle && (s = [S, e.transitionStyle], ia(g, s), y.push(s));
            0 <= e.duration && (s = 0 < g.style[S].length, s = Da(e.duration, s), ia(g, s), y.push(s));
            e.keyframeStyle && (s = [X, e.keyframeStyle], ia(g, s), y.push(s));
            var Y = V ? 0 <= e.staggerIndex ? e.staggerIndex : b.count(fa) :
              0;
            (ga = 0 === Y) && !e.skipBlocking && ma(g, 9999);
            var C = v(g, ka, fa), Z = C.maxDelay;
            n = Math.max(Z, 0);
            K = C.maxDuration;
            var p = {};
            p.hasTransitions = 0 < C.transitionDuration;
            p.hasAnimations = 0 < C.animationDuration;
            p.hasTransitionAll = p.hasTransitions && "all" == C.transitionProperty;
            p.applyTransitionDuration = Q && (p.hasTransitions && !p.hasTransitionAll || p.hasAnimations && !p.hasTransitions);
            p.applyAnimationDuration = e.duration && p.hasAnimations;
            p.applyTransitionDelay = qa(e.delay) && (p.applyTransitionDuration || p.hasTransitions);
            p.applyAnimationDelay =
              qa(e.delay) && p.hasAnimations;
            p.recalculateTimingStyles = 0 < M.length;
            if (p.applyTransitionDuration || p.applyAnimationDuration)K = e.duration ? parseFloat(e.duration) : K, p.applyTransitionDuration && (p.hasTransitions = !0, C.transitionDuration = K, s = 0 < g.style[S + "Property"].length, y.push(Da(K, s))), p.applyAnimationDuration && (p.hasAnimations = !0, C.animationDuration = K, y.push([va, K + "s"]));
            if (0 === K && !p.recalculateTimingStyles)return t();
            if (null != e.delay) {
              var $;
              "boolean" !== typeof e.delay && ($ = parseFloat(e.delay), n = Math.max($,
                0));
              p.applyTransitionDelay && y.push([ja, $ + "s"]);
              p.applyAnimationDelay && y.push([na, $ + "s"])
            }
            null == e.duration && 0 < C.transitionDuration && (p.recalculateTimingStyles = p.recalculateTimingStyles || ga);
            O = 1E3 * n;
            R = 1E3 * K;
            e.skipBlocking || (p.blockTransition = 0 < C.transitionDuration, p.blockKeyframeAnimation = 0 < C.animationDuration && 0 < V.animationDelay && 0 === V.animationDuration);
            e.from && (e.cleanupStyles && Fa(G, g, Object.keys(e.from)), za(a, e));
            p.blockTransition || p.blockKeyframeAnimation ? A(K) : e.skipBlocking || ma(g, !1);
            return {
              $$willAnimate: !0,
              end: d, start: function() {
                if (!l)return I = {end: d, cancel: q, resume: null, pause: null}, E = new m(I), z(H), E
              }
            }
          }
        }
      ]
    }
  ]).provider("$$animateCssDriver", [
    "$$animationProvider", function(a) {
      a.drivers.push("$$animateCssDriver");
      this.$get = [
        "$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(a, c, d, f, m, J, l) {
          function D(a) {
            return a.replace(/\bng-\S+\b/g, "")
          }

          function Q(a, b) {
            R(a) && (a = a.split(" "));
            R(b) && (b = b.split(" "));
            return a.filter(function(a) {
              return -1 === b.indexOf(a)
            }).join(" ")
          }

          function h(c, f, h) {
            function m(a) {
              var b = {}, c = F(a).getBoundingClientRect();
              u(["width", "height", "top", "left"], function(a) {
                var d = c[a];
                switch (a) {
                  case "top":
                    d += z.scrollTop;
                    break;
                  case "left":
                    d += z.scrollLeft
                }
                b[a] = Math.floor(d) + "px"
              });
              return b
            }

            function l() {
              var c = D(h.attr("class") || ""), d = Q(c, r), c = Q(r, c), d = a(q, {to: m(h), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0});
              return d.$$willAnimate ? d : null
            }

            function J() {
              q.remove();
              f.removeClass("ng-animate-shim");
              h.removeClass("ng-animate-shim")
            }

            var q =
              I(F(f).cloneNode(!0)), r = D(q.attr("class") || "");
            f.addClass("ng-animate-shim");
            h.addClass("ng-animate-shim");
            q.addClass("ng-anchor");
            v.append(q);
            var A;
            c = function() {
              var c = a(q, {addClass: "ng-anchor-out", delay: !0, from: m(f)});
              return c.$$willAnimate ? c : null
            }();
            if (!c && (A = l(), !A))return J();
            var t = c || A;
            return {
              start: function() {
                function a() {
                  c && c.end()
                }

                var b, c = t.start();
                c.done(function() {
                  c = null;
                  if (!A && (A = l()))return c = A.start(), c.done(function() {
                    c = null;
                    J();
                    b.complete()
                  }), c;
                  J();
                  b.complete()
                });
                return b = new d({
                  end: a,
                  cancel: a
                })
              }
            }
          }

          function E(a, b, c, f) {
            var m = x(a, P), D = x(b, P), q = [];
            u(f, function(a) {
              (a = h(c, a.out, a["in"])) && q.push(a)
            });
            if (m || D || 0 !== q.length)return {
              start: function() {
                function a() {
                  u(b, function(a) {
                    a.end()
                  })
                }

                var b = [];
                m && b.push(m.start());
                D && b.push(D.start());
                u(q, function(a) {
                  b.push(a.start())
                });
                var c = new d({end: a, cancel: a});
                d.all(b, function(a) {
                  c.complete(a)
                });
                return c
              }
            }
          }

          function x(c) {
            var d = c.element, f = c.options || {};
            c.structural && (f.event = c.event, f.structural = !0, f.applyClassesEarly = !0, "leave" === c.event && (f.onDone =
              f.domOperation));
            f.preparationClasses && (f.event = ba(f.event, f.preparationClasses));
            c = a(d, f);
            return c.$$willAnimate ? c : null
          }

          if (!m.animations && !m.transitions)return P;
          var z = l[0].body;
          c = F(f);
          var v = I(c.parentNode && 11 === c.parentNode.nodeType || z.contains(c) ? c : z);
          T(J);
          return function(a) {
            return a.from && a.to ? E(a.from, a.to, a.classes, a.anchors) : x(a)
          }
        }
      ]
    }
  ]).provider("$$animateJs", [
    "$animateProvider", function(a) {
      this.$get = [
        "$injector", "$$AnimateRunner", "$$jqLite", function(b, c, d) {
          function f(c) {
            c = aa(c) ? c : c.split(" ");
            for (var d = [], f = {}, m = 0; m < c.length; m++) {
              var h = c[m], l = a.$$registeredAnimations[h];
              l && !f[h] && (d.push(b.get(l)), f[h] = !0)
            }
            return d
          }

          var m = T(d);
          return function(a, b, d, l) {
            function h() {
              l.domOperation();
              m(a, l)
            }

            function F(a, b, d, f, e) {
              switch (d) {
                case "animate":
                  b = [b, f.from, f.to, e];
                  break;
                case "setClass":
                  b = [b, k, E, e];
                  break;
                case "addClass":
                  b = [b, k, e];
                  break;
                case "removeClass":
                  b = [b, E, e];
                  break;
                default:
                  b = [b, e]
              }
              b.push(f);
              if (a = a.apply(a, b))if (Ha(a.start) && (a = a.start()), a instanceof c)a.done(e); else if (Ha(a))return a;
              return P
            }

            function x(a, b, d, f, e) {
              var h = [];
              u(f, function(f) {
                var k = f[e];
                k && h.push(function() {
                  var e, f, g = !1, h = function(a) {
                    g || (g = !0, (f || P)(a), e.complete(!a))
                  };
                  e = new c({
                    end: function() {
                      h()
                    }, cancel: function() {
                      h(!0)
                    }
                  });
                  f = F(k, a, b, d, function(a) {
                    h(!1 === a)
                  });
                  return e
                })
              });
              return h
            }

            function z(a, b, d, f, e) {
              var h = x(a, b, d, f, e);
              if (0 === h.length) {
                var g, k;
                "beforeSetClass" === e ? (g = x(a, "removeClass", d, f, "beforeRemoveClass"), k = x(a, "addClass", d, f, "beforeAddClass")) : "setClass" === e && (g = x(a, "removeClass", d, f, "removeClass"), k = x(a, "addClass",
                  d, f, "addClass"));
                g && (h = h.concat(g));
                k && (h = h.concat(k))
              }
              if (0 !== h.length)return function(a) {
                var b = [];
                h.length && u(h, function(a) {
                  b.push(a())
                });
                b.length ? c.all(b, a) : a();
                return function(a) {
                  u(b, function(b) {
                    a ? b.cancel() : b.end()
                  })
                }
              }
            }

            var v = !1;
            3 === arguments.length && ra(d) && (l = d, d = null);
            l = la(l);
            d || (d = a.attr("class") || "", l.addClass && (d += " " + l.addClass), l.removeClass && (d += " " + l.removeClass));
            var k = l.addClass, E = l.removeClass, y = f(d), w, I;
            if (y.length) {
              var L, q;
              "leave" == b ? (q = "leave", L = "afterLeave") : (q = "before" + b.charAt(0).toUpperCase() +
                b.substr(1), L = b);
              "enter" !== b && "move" !== b && (w = z(a, b, l, y, q));
              I = z(a, b, l, y, L)
            }
            if (w || I) {
              var r;
              return {
                $$willAnimate: !0, end: function() {
                  r ? r.end() : (v = !0, h(), ea(a, l), r = new c, r.complete(!0));
                  return r
                }, start: function() {
                  function b(c) {
                    v = !0;
                    h();
                    ea(a, l);
                    r.complete(c)
                  }

                  if (r)return r;
                  r = new c;
                  var d, f = [];
                  w && f.push(function(a) {
                    d = w(a)
                  });
                  f.length ? f.push(function(a) {
                    h();
                    a(!0)
                  }) : h();
                  I && f.push(function(a) {
                    d = I(a)
                  });
                  r.setHost({
                    end: function() {
                      v || ((d || P)(void 0), b(void 0))
                    }, cancel: function() {
                      v || ((d || P)(!0), b(!0))
                    }
                  });
                  c.chain(f,
                    b);
                  return r
                }
              }
            }
          }
        }
      ]
    }
  ]).provider("$$animateJsDriver", [
    "$$animationProvider", function(a) {
      a.drivers.push("$$animateJsDriver");
      this.$get = [
        "$$animateJs", "$$AnimateRunner", function(a, c) {
          function d(c) {
            return a(c.element, c.event, c.classes, c.options)
          }

          return function(a) {
            if (a.from && a.to) {
              var b = d(a.from), l = d(a.to);
              if (b || l)return {
                start: function() {
                  function a() {
                    return function() {
                      u(d, function(a) {
                        a.end()
                      })
                    }
                  }

                  var d = [];
                  b && d.push(b.start());
                  l && d.push(l.start());
                  c.all(d, function(a) {
                    f.complete(a)
                  });
                  var f = new c({end: a(), cancel: a()});
                  return f
                }
              }
            } else return d(a)
          }
        }
      ]
    }
  ])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

(function(n, h, p) {
  'use strict';
  function E(a) {
    var f = [];
    r(f, h.noop).chars(a);
    return f.join("")
  }

  function g(a, f) {
    var d = {}, c = a.split(","), b;
    for (b = 0; b < c.length; b++)d[f ? h.lowercase(c[b]) : c[b]] = !0;
    return d
  }

  function F(a, f) {
    function d(a, b, d, l) {
      b = h.lowercase(b);
      if (s[b])for (; e.last() && t[e.last()];)c("", e.last());
      u[b] && e.last() == b && c("", b);
      (l = v[b] || !!l) || e.push(b);
      var m = {};
      d.replace(G, function(b, a, f, c, d) {
        m[a] = q(f || c || d || "")
      });
      f.start && f.start(b, m, l)
    }

    function c(b, a) {
      var c = 0, d;
      if (a = h.lowercase(a))for (c = e.length -
        1; 0 <= c && e[c] != a; c--);
      if (0 <= c) {
        for (d = e.length - 1; d >= c; d--)f.end && f.end(e[d]);
        e.length = c
      }
    }

    "string" !== typeof a && (a = null === a || "undefined" === typeof a ? "" : "" + a);
    var b, k, e = [], m = a, l;
    for (e.last = function() {
      return e[e.length - 1]
    }; a;) {
      l = "";
      k = !0;
      if (e.last() && w[e.last()])a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + e.last() + "[^>]*>", "i"), function(a, b) {
        b = b.replace(H, "$1").replace(I, "$1");
        f.chars && f.chars(q(b));
        return ""
      }), c("", e.last()); else {
        if (0 === a.indexOf("\x3c!--"))b = a.indexOf("--", 4), 0 <= b && a.lastIndexOf("--\x3e",
          b) === b && (f.comment && f.comment(a.substring(4, b)), a = a.substring(b + 3), k = !1); else if (x.test(a)) {
          if (b = a.match(x))a = a.replace(b[0], ""), k = !1
        } else if (J.test(a)) {
          if (b = a.match(y))a = a.substring(b[0].length), b[0].replace(y, c), k = !1
        } else K.test(a) && ((b = a.match(z)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(z, d)), k = !1) : (l += "<", a = a.substring(1)));
        k && (b = a.indexOf("<"), l += 0 > b ? a : a.substring(0, b), a = 0 > b ? "" : a.substring(b), f.chars && f.chars(q(l)))
      }
      if (a == m)throw L("badparse", a);
      m = a
    }
    c()
  }

  function q(a) {
    if (!a)return "";
    A.innerHTML =
      a.replace(/</g, "&lt;");
    return A.textContent
  }

  function B(a) {
    return a.replace(/&/g, "&amp;").replace(M, function(a) {
      var d = a.charCodeAt(0);
      a = a.charCodeAt(1);
      return "&#" + (1024 * (d - 55296) + (a - 56320) + 65536) + ";"
    }).replace(N, function(a) {
      return "&#" + a.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function r(a, f) {
    var d = !1, c = h.bind(a, a.push);
    return {
      start: function(a, k, e) {
        a = h.lowercase(a);
        !d && w[a] && (d = a);
        d || !0 !== C[a] || (c("<"), c(a), h.forEach(k, function(d, e) {
          var k = h.lowercase(e), g = "img" === a && "src" === k ||
            "background" === k;
          !0 !== O[k] || !0 === D[k] && !f(d, g) || (c(" "), c(e), c('="'), c(B(d)), c('"'))
        }), c(e ? "/>" : ">"))
      }, end: function(a) {
        a = h.lowercase(a);
        d || !0 !== C[a] || (c("</"), c(a), c(">"));
        a == d && (d = !1)
      }, chars: function(a) {
        d || c(B(a))
      }
    }
  }

  var L = h.$$minErr("$sanitize"), z = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, y = /^<\/\s*([\w:-]+)[^>]*>/, G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, K = /^</, J = /^<\//, H = /\x3c!--(.*?)--\x3e/g, x = /<!DOCTYPE([^>]*?)>/i,
    I = /<!\[CDATA\[(.*?)]]\x3e/g, M = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, N = /([^\#-~| |!])/g, v = g("area,br,col,hr,img,wbr");
  n = g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
  p = g("rp,rt");
  var u = h.extend({}, p, n), s = h.extend({}, n, g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), t = h.extend({}, p, g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
  n = g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");
  var w = g("script,style"), C = h.extend({}, v, s, t, u, n), D = g("background,cite,href,longdesc,src,usemap,xlink:href");
  n = g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
  p = g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
    !0);
  var O = h.extend({}, D, p, n), A = document.createElement("pre");
  h.module("ngSanitize", []).provider("$sanitize", function() {
    this.$get = [
      "$$sanitizeUri", function(a) {
        return function(f) {
          var d = [];
          F(f, r(d, function(c, b) {
            return !/^unsafe/.test(a(c, b))
          }));
          return d.join("")
        }
      }
    ]
  });
  h.module("ngSanitize").filter("linky", [
    "$sanitize", function(a) {
      var f = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i, d = /^mailto:/i;
      return function(c, b) {
        function k(a) {
          a && g.push(E(a))
        }

        function e(a,
                   c) {
          g.push("<a ");
          h.isDefined(b) && g.push('target="', b, '" ');
          g.push('href="', a.replace(/"/g, "&quot;"), '">');
          k(c);
          g.push("</a>")
        }

        if (!c)return c;
        for (var m, l = c, g = [], n, p; m = l.match(f);)n = m[0], m[2] || m[4] || (n = (m[3] ? "http://" : "mailto:") + n), p = m.index, k(l.substr(0, p)), e(n, m[0].replace(d, "")), l = l.substring(p + m[0].length);
        k(l);
        return a(g.join(""))
      }
    }
  ])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

!function() {
  function n(n) {
    return n && (n.ownerDocument || n.document || n).documentElement
  }

  function t(n) {
    return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView)
  }

  function e(n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
  }

  function r(n) {
    return null === n ? NaN : +n
  }

  function u(n) {
    return !isNaN(n)
  }

  function i(n) {
    return {
      left: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          n(t[i], e) < 0 ? r = i + 1 : u = i
        }
        return r
      }, right: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          n(t[i], e) > 0 ? u = i : r = i + 1
        }
        return r
      }
    }
  }

  function a(n) {
    return n.length
  }

  function o(n) {
    for (var t = 1; n * t % 1;)t *= 10;
    return t
  }

  function l(n, t) {
    for (var e in t)Object.defineProperty(n.prototype, e, {value: t[e], enumerable: !1})
  }

  function c() {
    this._ = Object.create(null)
  }

  function s(n) {
    return (n += "") === xa || n[0] === ba ? ba + n : n
  }

  function f(n) {
    return (n += "")[0] === ba ? n.slice(1) : n
  }

  function h(n) {
    return s(n) in this._
  }

  function g(n) {
    return (n = s(n)) in this._ && delete this._[n]
  }

  function p() {
    var n = [];
    for (var t in this._)n.push(f(t));
    return n
  }

  function v() {
    var n = 0;
    for (var t in this._)++n;
    return n
  }

  function d() {
    for (var n in this._)return !1;
    return !0
  }

  function m() {
    this._ = Object.create(null)
  }

  function y(n) {
    return n
  }

  function M(n, t, e) {
    return function() {
      var r = e.apply(t, arguments);
      return r === t ? n : r
    }
  }

  function x(n, t) {
    if (t in n)return t;
    t = t.charAt(0).toUpperCase() + t.slice(1);
    for (var e = 0, r = _a.length; r > e; ++e) {
      var u = _a[e] + t;
      if (u in n)return u
    }
  }

  function b() {
  }

  function _() {
  }

  function w(n) {
    function t() {
      for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
      return n
    }

    var e = [], r = new c;
    return t.on = function(t, u) {
      var i, a = r.get(t);
      return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, i = e.indexOf(a)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {on: u})), n)
    }, t
  }

  function S() {
    oa.event.preventDefault()
  }

  function k() {
    for (var n, t = oa.event; n = t.sourceEvent;)t = n;
    return t
  }

  function N(n) {
    for (var t = new _, e = 0, r = arguments.length; ++e < r;)t[arguments[e]] = w(t);
    return t.of = function(e, r) {
      return function(u) {
        try {
          var i = u.sourceEvent = oa.event;
          u.target = n, oa.event = u, t[u.type].apply(e, r)
        } finally {
          oa.event = i
        }
      }
    }, t
  }

  function E(n) {
    return Sa(n, Aa), n
  }

  function A(n) {
    return "function" == typeof n ? n : function() {
      return ka(n, this)
    }
  }

  function C(n) {
    return "function" == typeof n ? n : function() {
      return Na(n, this)
    }
  }

  function z(n, t) {
    function e() {
      this.removeAttribute(n)
    }

    function r() {
      this.removeAttributeNS(n.space, n.local)
    }

    function u() {
      this.setAttribute(n, t)
    }

    function i() {
      this.setAttributeNS(n.space, n.local, t)
    }

    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
    }

    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
    }

    return n = oa.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? o : a : n.local ? i : u
  }

  function L(n) {
    return n.trim().replace(/\s+/g, " ")
  }

  function q(n) {
    return new RegExp("(?:^|\\s+)" + oa.requote(n) + "(?:\\s+|$)", "g")
  }

  function T(n) {
    return (n + "").trim().split(/^|\s+/)
  }

  function R(n, t) {
    function e() {
      for (var e = -1; ++e < u;)n[e](this, t)
    }

    function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < u;)n[e](this, r)
    }

    n = T(n).map(D);
    var u = n.length;
    return "function" == typeof t ? r : e
  }

  function D(n) {
    var t = q(n);
    return function(e, r) {
      if (u = e.classList)return r ? u.add(n) : u.remove(n);
      var u = e.getAttribute("class") || "";
      r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", L(u + " " + n))) : e.setAttribute("class", L(u.replace(t, " ")))
    }
  }

  function P(n, t, e) {
    function r() {
      this.style.removeProperty(n)
    }

    function u() {
      this.style.setProperty(n, t, e)
    }

    function i() {
      var r = t.apply(this, arguments);
      null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
    }

    return null == t ? r : "function" == typeof t ? i : u
  }

  function U(n, t) {
    function e() {
      delete this[n]
    }

    function r() {
      this[n] = t
    }

    function u() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : this[n] = e
    }

    return null == t ? e : "function" == typeof t ? u : r
  }

  function j(n) {
    function t() {
      var t = this.ownerDocument, e = this.namespaceURI;
      return e === Ca && t.documentElement.namespaceURI === Ca ? t.createElement(n) : t.createElementNS(e, n)
    }

    function e() {
      return this.ownerDocument.createElementNS(n.space, n.local)
    }

    return "function" == typeof n ? n : (n = oa.ns.qualify(n)).local ? e : t
  }

  function F() {
    var n = this.parentNode;
    n && n.removeChild(this)
  }

  function H(n) {
    return {__data__: n}
  }

  function O(n) {
    return function() {
      return Ea(this, n)
    }
  }

  function I(n) {
    return arguments.length || (n = e), function(t, e) {
      return t && e ? n(t.__data__, e.__data__) : !t - !e
    }
  }

  function Y(n, t) {
    for (var e = 0, r = n.length; r > e; e++)for (var u, i = n[e], a = 0, o = i.length; o > a; a++)(u = i[a]) && t(u, a, e);
    return n
  }

  function Z(n) {
    return Sa(n, La), n
  }

  function V(n) {
    var t, e;
    return function(r, u, i) {
      var a, o = n[i].update, l = o.length;
      for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(a = o[t]) && ++t < l;);
      return a
    }
  }

  function X(n, t, e) {
    function r() {
      var t = this[a];
      t && (this.removeEventListener(n, t, t.$), delete this[a])
    }

    function u() {
      var u = l(t, ca(arguments));
      r.call(this), this.addEventListener(n, this[a] = u, u.$ = e), u._ = t
    }

    function i() {
      var t, e = new RegExp("^__on([^.]+)" + oa.requote(n) + "$");
      for (var r in this)if (t = r.match(e)) {
        var u = this[r];
        this.removeEventListener(t[1], u, u.$), delete this[r]
      }
    }

    var a = "__on" + n, o = n.indexOf("."), l = $;
    o > 0 && (n = n.slice(0, o));
    var c = qa.get(n);
    return c && (n = c, l = B), o ? t ? u : r : t ? b : i
  }

  function $(n, t) {
    return function(e) {
      var r = oa.event;
      oa.event = e, t[0] = this.__data__;
      try {
        n.apply(this, t)
      } finally {
        oa.event = r
      }
    }
  }

  function B(n, t) {
    var e = $(n, t);
    return function(n) {
      var t = this, r = n.relatedTarget;
      r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
    }
  }

  function W(e) {
    var r = ".dragsuppress-" + ++Ra, u = "click" + r, i = oa.select(t(e)).on("touchmove" + r, S).on("dragstart" + r, S).on("selectstart" + r, S);
    if (null == Ta && (Ta = "onselectstart" in e ? !1 : x(e.style, "userSelect")), Ta) {
      var a = n(e).style, o = a[Ta];
      a[Ta] = "none"
    }
    return function(n) {
      if (i.on(r, null), Ta && (a[Ta] = o), n) {
        var t = function() {
          i.on(u, null)
        };
        i.on(u, function() {
          S(), t()
        }, !0), setTimeout(t, 0)
      }
    }
  }

  function J(n, e) {
    e.changedTouches && (e = e.changedTouches[0]);
    var r = n.ownerSVGElement || n;
    if (r.createSVGPoint) {
      var u = r.createSVGPoint();
      if (0 > Da) {
        var i = t(n);
        if (i.scrollX || i.scrollY) {
          r = oa.select("body").append("svg").style({position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none"}, "important");
          var a = r[0][0].getScreenCTM();
          Da = !(a.f || a.e), r.remove()
        }
      }
      return Da ? (u.x = e.pageX, u.y = e.pageY) : (u.x = e.clientX, u.y = e.clientY), u = u.matrixTransform(n.getScreenCTM().inverse()), [u.x, u.y]
    }
    var o = n.getBoundingClientRect();
    return [e.clientX - o.left - n.clientLeft, e.clientY - o.top - n.clientTop]
  }

  function G() {
    return oa.event.changedTouches[0].identifier
  }

  function K(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0
  }

  function Q(n, t, e) {
    return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
  }

  function nn(n) {
    return n > 1 ? 0 : -1 > n ? ja : Math.acos(n)
  }

  function tn(n) {
    return n > 1 ? Oa : -1 > n ? -Oa : Math.asin(n)
  }

  function en(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2
  }

  function rn(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2
  }

  function un(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1)
  }

  function an(n) {
    return (n = Math.sin(n / 2)) * n
  }

  function on() {
  }

  function ln(n, t, e) {
    return this instanceof ln ? (this.h = +n, this.s = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof ln ? new ln(n.h, n.s, n.l) : _n("" + n, wn, ln) : new ln(n, t, e)
  }

  function cn(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (a - i) * n / 60 : 180 > n ? a : 240 > n ? i + (a - i) * (240 - n) / 60 : i
    }

    function u(n) {
      return Math.round(255 * r(n))
    }

    var i, a;
    return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, a = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - a, new yn(u(n + 120), u(n), u(n - 120))
  }

  function sn(n, t, e) {
    return this instanceof sn ? (this.h = +n, this.c = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof sn ? new sn(n.h, n.c, n.l) : n instanceof hn ? pn(n.l, n.a, n.b) : pn((n = Sn((n = oa.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new sn(n, t, e)
  }

  function fn(n, t, e) {
    return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new hn(e, Math.cos(n *= Ia) * t, Math.sin(n) * t)
  }

  function hn(n, t, e) {
    return this instanceof hn ? (this.l = +n, this.a = +t, void(this.b = +e)) : arguments.length < 2 ? n instanceof hn ? new hn(n.l, n.a, n.b) : n instanceof sn ? fn(n.h, n.c, n.l) : Sn((n = yn(n)).r, n.g, n.b) : new hn(n, t, e)
  }

  function gn(n, t, e) {
    var r = (n + 16) / 116, u = r + t / 500, i = r - e / 200;
    return u = vn(u) * Qa, r = vn(r) * no, i = vn(i) * to, new yn(mn(3.2404542 * u - 1.5371385 * r - .4985314 * i), mn(-.969266 * u + 1.8760108 * r + .041556 * i), mn(.0556434 * u - .2040259 * r + 1.0572252 * i))
  }

  function pn(n, t, e) {
    return n > 0 ? new sn(Math.atan2(e, t) * Ya, Math.sqrt(t * t + e * e), n) : new sn(NaN, NaN, n)
  }

  function vn(n) {
    return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
  }

  function dn(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
  }

  function mn(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
  }

  function yn(n, t, e) {
    return this instanceof yn ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~e)) : arguments.length < 2 ? n instanceof yn ? new yn(n.r, n.g, n.b) : _n("" + n, yn, cn) : new yn(n, t, e)
  }

  function Mn(n) {
    return new yn(n >> 16, n >> 8 & 255, 255 & n)
  }

  function xn(n) {
    return Mn(n) + ""
  }

  function bn(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
  }

  function _n(n, t, e) {
    var r, u, i, a = 0, o = 0, l = 0;
    if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase()))switch (u = r[2].split(","), r[1]) {
      case"hsl":
        return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
      case"rgb":
        return t(Nn(u[0]), Nn(u[1]), Nn(u[2]))
    }
    return (i = uo.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (a = (3840 & i) >> 4, a = a >> 4 | a, o = 240 & i, o = o >> 4 | o, l = 15 & i, l = l << 4 | l) : 7 === n.length && (a = (16711680 & i) >> 16, o = (65280 & i) >> 8, l = 255 & i)), t(a, o, l))
  }

  function wn(n, t, e) {
    var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), a = Math.max(n, t, e), o = a - i, l = (a + i) / 2;
    return o ? (u = .5 > l ? o / (a + i) : o / (2 - a - i), r = n == a ? (t - e) / o + (e > t ? 6 : 0) : t == a ? (e - n) / o + 2 : (n - t) / o + 4, r *= 60) : (r = NaN, u = l > 0 && 1 > l ? 0 : r), new ln(r, u, l)
  }

  function Sn(n, t, e) {
    n = kn(n), t = kn(t), e = kn(e);
    var r = dn((.4124564 * n + .3575761 * t + .1804375 * e) / Qa), u = dn((.2126729 * n + .7151522 * t + .072175 * e) / no), i = dn((.0193339 * n + .119192 * t + .9503041 * e) / to);
    return hn(116 * u - 16, 500 * (r - u), 200 * (u - i))
  }

  function kn(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
  }

  function Nn(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
  }

  function En(n) {
    return "function" == typeof n ? n : function() {
      return n
    }
  }

  function An(n) {
    return function(t, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Cn(t, e, n, r)
    }
  }

  function Cn(n, t, e, r) {
    function u() {
      var n, t = l.status;
      if (!t && Ln(l) || t >= 200 && 300 > t || 304 === t) {
        try {
          n = e.call(i, l)
        } catch (r) {
          return void a.error.call(i, r)
        }
        a.load.call(i, n)
      } else a.error.call(i, l)
    }

    var i = {}, a = oa.dispatch("beforesend", "progress", "load", "error"), o = {}, l = new XMLHttpRequest, c = null;
    return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(n) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = u : l.onreadystatechange = function() {
      l.readyState > 3 && u()
    }, l.onprogress = function(n) {
      var t = oa.event;
      oa.event = n;
      try {
        a.progress.call(i, l)
      } finally {
        oa.event = t
      }
    }, i.header = function(n, t) {
      return n = (n + "").toLowerCase(), arguments.length < 2 ? o[n] : (null == t ? delete o[n] : o[n] = t + "", i)
    }, i.mimeType = function(n) {
      return arguments.length ? (t = null == n ? null : n + "", i) : t
    }, i.responseType = function(n) {
      return arguments.length ? (c = n, i) : c
    }, i.response = function(n) {
      return e = n, i
    }, ["get", "post"].forEach(function(n) {
      i[n] = function() {
        return i.send.apply(i, [n].concat(ca(arguments)))
      }
    }), i.send = function(e, r, u) {
      if (2 === arguments.length && "function" == typeof r && (u = r, r = null), l.open(e, n, !0), null == t || "accept" in o || (o.accept = t + ",*/*"), l.setRequestHeader)for (var s in o)l.setRequestHeader(s, o[s]);
      return null != t && l.overrideMimeType && l.overrideMimeType(t), null != c && (l.responseType = c), null != u && i.on("error", u).on("load", function(n) {
        u(null, n)
      }), a.beforesend.call(i, l), l.send(null == r ? null : r), i
    }, i.abort = function() {
      return l.abort(), i
    }, oa.rebind(i, a, "on"), null == r ? i : i.get(zn(r))
  }

  function zn(n) {
    return 1 === n.length ? function(t, e) {
      n(null == t ? e : null)
    } : n
  }

  function Ln(n) {
    var t = n.responseType;
    return t && "text" !== t ? n.response : n.responseText
  }

  function qn(n, t, e) {
    var r = arguments.length;
    2 > r && (t = 0), 3 > r && (e = Date.now());
    var u = e + t, i = {c: n, t: u, n: null};
    return ao ? ao.n = i : io = i, ao = i, oo || (lo = clearTimeout(lo), oo = 1, co(Tn)), i
  }

  function Tn() {
    var n = Rn(), t = Dn() - n;
    t > 24 ? (isFinite(t) && (clearTimeout(lo), lo = setTimeout(Tn, t)), oo = 0) : (oo = 1, co(Tn))
  }

  function Rn() {
    for (var n = Date.now(), t = io; t;)n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n;
    return n
  }

  function Dn() {
    for (var n, t = io, e = 1 / 0; t;)t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : io = t.n;
    return ao = n, e
  }

  function Pn(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
  }

  function Un(n, t) {
    var e = Math.pow(10, 3 * Ma(8 - t));
    return {
      scale: t > 8 ? function(n) {
        return n / e
      } : function(n) {
        return n * e
      }, symbol: n
    }
  }

  function jn(n) {
    var t = n.decimal, e = n.thousands, r = n.grouping, u = n.currency, i = r && e ? function(n, t) {
      for (var u = n.length, i = [], a = 0, o = r[0], l = 0; u > 0 && o > 0 && (l + o + 1 > t && (o = Math.max(1, t - l)), i.push(n.substring(u -= o, u + o)), !((l += o + 1) > t));)o = r[a = (a + 1) % r.length];
      return i.reverse().join(e)
    } : y;
    return function(n) {
      var e = fo.exec(n), r = e[1] || " ", a = e[2] || ">", o = e[3] || "-", l = e[4] || "", c = e[5], s = +e[6], f = e[7], h = e[8], g = e[9], p = 1, v = "", d = "", m = !1, y = !0;
      switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === a) && (c = r = "0", a = "="), g) {
        case"n":
          f = !0, g = "g";
          break;
        case"%":
          p = 100, d = "%", g = "f";
          break;
        case"p":
          p = 100, d = "%", g = "r";
          break;
        case"b":
        case"o":
        case"x":
        case"X":
          "#" === l && (v = "0" + g.toLowerCase());
        case"c":
          y = !1;
        case"d":
          m = !0, h = 0;
          break;
        case"s":
          p = -1, g = "r"
      }
      "$" === l && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = ho.get(g) || Fn;
      var M = c && f;
      return function(n) {
        var e = d;
        if (m && n % 1)return "";
        var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === o ? "" : o;
        if (0 > p) {
          var l = oa.formatPrefix(n, h);
          n = l.scale(n), e = l.symbol + d
        } else n *= p;
        n = g(n, h);
        var x, b, _ = n.lastIndexOf(".");
        if (0 > _) {
          var w = y ? n.lastIndexOf("e") : -1;
          0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w))
        } else x = n.substring(0, _), b = t + n.substring(_ + 1);
        !c && f && (x = i(x, 1 / 0));
        var S = v.length + x.length + b.length + (M ? 0 : u.length), k = s > S ? new Array(S = s - S + 1).join(r) : "";
        return M && (x = i(k + x, k.length ? s - b.length : 1 / 0)), u += v, n = x + b, ("<" === a ? u + n + k : ">" === a ? k + u + n : "^" === a ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (M ? n : k + n)) + e
      }
    }
  }

  function Fn(n) {
    return n + ""
  }

  function Hn() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
  }

  function On(n, t, e) {
    function r(t) {
      var e = n(t), r = i(e, 1);
      return r - t > t - e ? e : r
    }

    function u(e) {
      return t(e = n(new po(e - 1)), 1), e
    }

    function i(n, e) {
      return t(n = new po(+n), e), n
    }

    function a(n, r, i) {
      var a = u(n), o = [];
      if (i > 1)for (; r > a;)e(a) % i || o.push(new Date(+a)), t(a, 1); else for (; r > a;)o.push(new Date(+a)), t(a, 1);
      return o
    }

    function o(n, t, e) {
      try {
        po = Hn;
        var r = new Hn;
        return r._ = n, a(r, t, e)
      } finally {
        po = Date
      }
    }

    n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = a;
    var l = n.utc = In(n);
    return l.floor = l, l.round = In(r), l.ceil = In(u), l.offset = In(i), l.range = o, n
  }

  function In(n) {
    return function(t, e) {
      try {
        po = Hn;
        var r = new Hn;
        return r._ = t, n(r, e)._
      } finally {
        po = Date
      }
    }
  }

  function Yn(n) {
    function t(n) {
      function t(t) {
        for (var e, u, i, a = [], o = -1, l = 0; ++o < r;)37 === n.charCodeAt(o) && (a.push(n.slice(l, o)), null != (u = mo[e = n.charAt(++o)]) && (e = n.charAt(++o)), (i = A[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), a.push(e), l = o + 1);
        return a.push(n.slice(l, o)), a.join("")
      }

      var r = n.length;
      return t.parse = function(t) {
        var r = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, u = e(r, n, t, 0);
        if (u != t.length)return null;
        "p" in r && (r.H = r.H % 12 + 12 * r.p);
        var i = null != r.Z && po !== Hn, a = new (i ? Hn : po);
        return "j" in r ? a.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), i ? a._ : a
      }, t.toString = function() {
        return n
      }, t
    }

    function e(n, t, e, r) {
      for (var u, i, a, o = 0, l = t.length, c = e.length; l > o;) {
        if (r >= c)return -1;
        if (u = t.charCodeAt(o++), 37 === u) {
          if (a = t.charAt(o++), i = C[a in mo ? t.charAt(o++) : a], !i || (r = i(n, e, r)) < 0)return -1
        } else if (u != e.charCodeAt(r++))return -1
      }
      return r
    }

    function r(n, t, e) {
      _.lastIndex = 0;
      var r = _.exec(t.slice(e));
      return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function u(n, t, e) {
      x.lastIndex = 0;
      var r = x.exec(t.slice(e));
      return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function i(n, t, e) {
      N.lastIndex = 0;
      var r = N.exec(t.slice(e));
      return r ? (n.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function a(n, t, e) {
      S.lastIndex = 0;
      var r = S.exec(t.slice(e));
      return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function o(n, t, r) {
      return e(n, A.c.toString(), t, r)
    }

    function l(n, t, r) {
      return e(n, A.x.toString(), t, r)
    }

    function c(n, t, r) {
      return e(n, A.X.toString(), t, r)
    }

    function s(n, t, e) {
      var r = M.get(t.slice(e, e += 2).toLowerCase());
      return null == r ? -1 : (n.p = r, e)
    }

    var f = n.dateTime, h = n.date, g = n.time, p = n.periods, v = n.days, d = n.shortDays, m = n.months, y = n.shortMonths;
    t.utc = function(n) {
      function e(n) {
        try {
          po = Hn;
          var t = new po;
          return t._ = n, r(t)
        } finally {
          po = Date
        }
      }

      var r = t(n);
      return e.parse = function(n) {
        try {
          po = Hn;
          var t = r.parse(n);
          return t && t._
        } finally {
          po = Date
        }
      }, e.toString = r.toString, e
    }, t.multi = t.utc.multi = ct;
    var M = oa.map(), x = Vn(v), b = Xn(v), _ = Vn(d), w = Xn(d), S = Vn(m), k = Xn(m), N = Vn(y), E = Xn(y);
    p.forEach(function(n, t) {
      M.set(n.toLowerCase(), t)
    });
    var A = {
      a: function(n) {
        return d[n.getDay()]
      }, A: function(n) {
        return v[n.getDay()]
      }, b: function(n) {
        return y[n.getMonth()]
      }, B: function(n) {
        return m[n.getMonth()]
      }, c: t(f), d: function(n, t) {
        return Zn(n.getDate(), t, 2)
      }, e: function(n, t) {
        return Zn(n.getDate(), t, 2)
      }, H: function(n, t) {
        return Zn(n.getHours(), t, 2)
      }, I: function(n, t) {
        return Zn(n.getHours() % 12 || 12, t, 2)
      }, j: function(n, t) {
        return Zn(1 + go.dayOfYear(n), t, 3)
      }, L: function(n, t) {
        return Zn(n.getMilliseconds(), t, 3)
      }, m: function(n, t) {
        return Zn(n.getMonth() + 1, t, 2)
      }, M: function(n, t) {
        return Zn(n.getMinutes(), t, 2)
      }, p: function(n) {
        return p[+(n.getHours() >= 12)]
      }, S: function(n, t) {
        return Zn(n.getSeconds(), t, 2)
      }, U: function(n, t) {
        return Zn(go.sundayOfYear(n), t, 2)
      }, w: function(n) {
        return n.getDay()
      }, W: function(n, t) {
        return Zn(go.mondayOfYear(n), t, 2)
      }, x: t(h), X: t(g), y: function(n, t) {
        return Zn(n.getFullYear() % 100, t, 2)
      }, Y: function(n, t) {
        return Zn(n.getFullYear() % 1e4, t, 4)
      }, Z: ot, "%": function() {
        return "%"
      }
    }, C = {a: r, A: u, b: i, B: a, c: o, d: tt, e: tt, H: rt, I: rt, j: et, L: at, m: nt, M: ut, p: s, S: it, U: Bn, w: $n, W: Wn, x: l, X: c, y: Gn, Y: Jn, Z: Kn, "%": lt};
    return t
  }

  function Zn(n, t, e) {
    var r = 0 > n ? "-" : "", u = (r ? -n : n) + "", i = u.length;
    return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
  }

  function Vn(n) {
    return new RegExp("^(?:" + n.map(oa.requote).join("|") + ")", "i")
  }

  function Xn(n) {
    for (var t = new c, e = -1, r = n.length; ++e < r;)t.set(n[e].toLowerCase(), e);
    return t
  }

  function $n(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 1));
    return r ? (n.w = +r[0], e + r[0].length) : -1
  }

  function Bn(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e));
    return r ? (n.U = +r[0], e + r[0].length) : -1
  }

  function Wn(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e));
    return r ? (n.W = +r[0], e + r[0].length) : -1
  }

  function Jn(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 4));
    return r ? (n.y = +r[0], e + r[0].length) : -1
  }

  function Gn(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 2));
    return r ? (n.y = Qn(+r[0]), e + r[0].length) : -1
  }

  function Kn(n, t, e) {
    return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1
  }

  function Qn(n) {
    return n + (n > 68 ? 1900 : 2e3)
  }

  function nt(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 2));
    return r ? (n.m = r[0] - 1, e + r[0].length) : -1
  }

  function tt(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 2));
    return r ? (n.d = +r[0], e + r[0].length) : -1
  }

  function et(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 3));
    return r ? (n.j = +r[0], e + r[0].length) : -1
  }

  function rt(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 2));
    return r ? (n.H = +r[0], e + r[0].length) : -1
  }

  function ut(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 2));
    return r ? (n.M = +r[0], e + r[0].length) : -1
  }

  function it(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 2));
    return r ? (n.S = +r[0], e + r[0].length) : -1
  }

  function at(n, t, e) {
    yo.lastIndex = 0;
    var r = yo.exec(t.slice(e, e + 3));
    return r ? (n.L = +r[0], e + r[0].length) : -1
  }

  function ot(n) {
    var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = Ma(t) / 60 | 0, u = Ma(t) % 60;
    return e + Zn(r, "0", 2) + Zn(u, "0", 2)
  }

  function lt(n, t, e) {
    Mo.lastIndex = 0;
    var r = Mo.exec(t.slice(e, e + 1));
    return r ? e + r[0].length : -1
  }

  function ct(n) {
    for (var t = n.length, e = -1; ++e < t;)n[e][0] = this(n[e][0]);
    return function(t) {
      for (var e = 0, r = n[e]; !r[1](t);)r = n[++e];
      return r[0](t)
    }
  }

  function st() {
  }

  function ft(n, t, e) {
    var r = e.s = n + t, u = r - n, i = r - u;
    e.t = n - i + (t - u)
  }

  function ht(n, t) {
    n && wo.hasOwnProperty(n.type) && wo[n.type](n, t)
  }

  function gt(n, t, e) {
    var r, u = -1, i = n.length - e;
    for (t.lineStart(); ++u < i;)r = n[u], t.point(r[0], r[1], r[2]);
    t.lineEnd()
  }

  function pt(n, t) {
    var e = -1, r = n.length;
    for (t.polygonStart(); ++e < r;)gt(n[e], t, 1);
    t.polygonEnd()
  }

  function vt() {
    function n(n, t) {
      n *= Ia, t = t * Ia / 2 + ja / 4;
      var e = n - r, a = e >= 0 ? 1 : -1, o = a * e, l = Math.cos(t), c = Math.sin(t), s = i * c, f = u * l + s * Math.cos(o), h = s * a * Math.sin(o);
      ko.add(Math.atan2(h, f)), r = n, u = l, i = c
    }

    var t, e, r, u, i;
    No.point = function(a, o) {
      No.point = n, r = (t = a) * Ia, u = Math.cos(o = (e = o) * Ia / 2 + ja / 4), i = Math.sin(o)
    }, No.lineEnd = function() {
      n(t, e)
    }
  }

  function dt(n) {
    var t = n[0], e = n[1], r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
  }

  function mt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
  }

  function yt(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
  }

  function Mt(n, t) {
    n[0] += t[0], n[1] += t[1], n[2] += t[2]
  }

  function xt(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t]
  }

  function bt(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    n[0] /= t, n[1] /= t, n[2] /= t
  }

  function _t(n) {
    return [Math.atan2(n[1], n[0]), tn(n[2])]
  }

  function wt(n, t) {
    return Ma(n[0] - t[0]) < Pa && Ma(n[1] - t[1]) < Pa
  }

  function St(n, t) {
    n *= Ia;
    var e = Math.cos(t *= Ia);
    kt(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
  }

  function kt(n, t, e) {
    ++Eo, Co += (n - Co) / Eo, zo += (t - zo) / Eo, Lo += (e - Lo) / Eo
  }

  function Nt() {
    function n(n, u) {
      n *= Ia;
      var i = Math.cos(u *= Ia), a = i * Math.cos(n), o = i * Math.sin(n), l = Math.sin(u), c = Math.atan2(Math.sqrt((c = e * l - r * o) * c + (c = r * a - t * l) * c + (c = t * o - e * a) * c), t * a + e * o + r * l);
      Ao += c, qo += c * (t + (t = a)), To += c * (e + (e = o)), Ro += c * (r + (r = l)), kt(t, e, r)
    }

    var t, e, r;
    jo.point = function(u, i) {
      u *= Ia;
      var a = Math.cos(i *= Ia);
      t = a * Math.cos(u), e = a * Math.sin(u), r = Math.sin(i), jo.point = n, kt(t, e, r)
    }
  }

  function Et() {
    jo.point = St
  }

  function At() {
    function n(n, t) {
      n *= Ia;
      var e = Math.cos(t *= Ia), a = e * Math.cos(n), o = e * Math.sin(n), l = Math.sin(t), c = u * l - i * o, s = i * a - r * l, f = r * o - u * a, h = Math.sqrt(c * c + s * s + f * f), g = r * a + u * o + i * l, p = h && -nn(g) / h, v = Math.atan2(h, g);
      Do += p * c, Po += p * s, Uo += p * f, Ao += v, qo += v * (r + (r = a)), To += v * (u + (u = o)), Ro += v * (i + (i = l)), kt(r, u, i)
    }

    var t, e, r, u, i;
    jo.point = function(a, o) {
      t = a, e = o, jo.point = n, a *= Ia;
      var l = Math.cos(o *= Ia);
      r = l * Math.cos(a), u = l * Math.sin(a), i = Math.sin(o), kt(r, u, i)
    }, jo.lineEnd = function() {
      n(t, e), jo.lineEnd = Et, jo.point = St
    }
  }

  function Ct(n, t) {
    function e(e, r) {
      return e = n(e, r), t(e[0], e[1])
    }

    return n.invert && t.invert && (e.invert = function(e, r) {
      return e = t.invert(e, r), e && n.invert(e[0], e[1])
    }), e
  }

  function zt() {
    return !0
  }

  function Lt(n, t, e, r, u) {
    var i = [], a = [];
    if (n.forEach(function(n) {
        if (!((t = n.length - 1) <= 0)) {
          var t, e = n[0], r = n[t];
          if (wt(e, r)) {
            u.lineStart();
            for (var o = 0; t > o; ++o)u.point((e = n[o])[0], e[1]);
            return void u.lineEnd()
          }
          var l = new Tt(e, n, null, !0), c = new Tt(e, null, l, !1);
          l.o = c, i.push(l), a.push(c), l = new Tt(r, n, null, !1), c = new Tt(r, null, l, !0), l.o = c, i.push(l), a.push(c)
        }
      }), a.sort(t), qt(i), qt(a), i.length) {
      for (var o = 0, l = e, c = a.length; c > o; ++o)a[o].e = l = !l;
      for (var s, f, h = i[0]; ;) {
        for (var g = h, p = !0; g.v;)if ((g = g.n) === h)return;
        s = g.z, u.lineStart();
        do {
          if (g.v = g.o.v = !0, g.e) {
            if (p)for (var o = 0, c = s.length; c > o; ++o)u.point((f = s[o])[0], f[1]); else r(g.x, g.n.x, 1, u);
            g = g.n
          } else {
            if (p) {
              s = g.p.z;
              for (var o = s.length - 1; o >= 0; --o)u.point((f = s[o])[0], f[1])
            } else r(g.x, g.p.x, -1, u);
            g = g.p
          }
          g = g.o, s = g.z, p = !p
        } while (!g.v);
        u.lineEnd()
      }
    }
  }

  function qt(n) {
    if (t = n.length) {
      for (var t, e, r = 0, u = n[0]; ++r < t;)u.n = e = n[r], e.p = u, u = e;
      u.n = e = n[0], e.p = u
    }
  }

  function Tt(n, t, e, r) {
    this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
  }

  function Rt(n, t, e, r) {
    return function(u, i) {
      function a(t, e) {
        var r = u(t, e);
        n(t = r[0], e = r[1]) && i.point(t, e)
      }

      function o(n, t) {
        var e = u(n, t);
        d.point(e[0], e[1])
      }

      function l() {
        y.point = o, d.lineStart()
      }

      function c() {
        y.point = a, d.lineEnd()
      }

      function s(n, t) {
        v.push([n, t]);
        var e = u(n, t);
        x.point(e[0], e[1])
      }

      function f() {
        x.lineStart(), v = []
      }

      function h() {
        s(v[0][0], v[0][1]), x.lineEnd();
        var n, t = x.clean(), e = M.buffer(), r = e.length;
        if (v.pop(), p.push(v), v = null, r)if (1 & t) {
          n = e[0];
          var u, r = n.length - 1, a = -1;
          if (r > 0) {
            for (b || (i.polygonStart(), b = !0), i.lineStart(); ++a < r;)i.point((u = n[a])[0], u[1]);
            i.lineEnd()
          }
        } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Dt))
      }

      var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = {
        point: a, lineStart: l, lineEnd: c, polygonStart: function() {
          y.point = s, y.lineStart = f, y.lineEnd = h, g = [], p = []
        }, polygonEnd: function() {
          y.point = a, y.lineStart = l, y.lineEnd = c, g = oa.merge(g);
          var n = Ot(m, p);
          g.length ? (b || (i.polygonStart(), b = !0), Lt(g, Ut, n, e, i)) : n && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), b && (i.polygonEnd(), b = !1), g = p = null
        }, sphere: function() {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
        }
      }, M = Pt(), x = t(M), b = !1;
      return y
    }
  }

  function Dt(n) {
    return n.length > 1
  }

  function Pt() {
    var n, t = [];
    return {
      lineStart: function() {
        t.push(n = [])
      }, point: function(t, e) {
        n.push([t, e])
      }, lineEnd: b, buffer: function() {
        var e = t;
        return t = [], n = null, e
      }, rejoin: function() {
        t.length > 1 && t.push(t.pop().concat(t.shift()))
      }
    }
  }

  function Ut(n, t) {
    return ((n = n.x)[0] < 0 ? n[1] - Oa - Pa : Oa - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Oa - Pa : Oa - t[1])
  }

  function jt(n) {
    var t, e = NaN, r = NaN, u = NaN;
    return {
      lineStart: function() {
        n.lineStart(), t = 1
      }, point: function(i, a) {
        var o = i > 0 ? ja : -ja, l = Ma(i - e);
        Ma(l - ja) < Pa ? (n.point(e, r = (r + a) / 2 > 0 ? Oa : -Oa), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(o, r), n.point(i, r), t = 0) : u !== o && l >= ja && (Ma(e - u) < Pa && (e -= u * Pa), Ma(i - o) < Pa && (i -= o * Pa), r = Ft(e, r, i, a), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(o, r), t = 0), n.point(e = i, r = a), u = o
      }, lineEnd: function() {
        n.lineEnd(), e = r = NaN
      }, clean: function() {
        return 2 - t
      }
    }
  }

  function Ft(n, t, e, r) {
    var u, i, a = Math.sin(n - e);
    return Ma(a) > Pa ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * a)) : (t + r) / 2
  }

  function Ht(n, t, e, r) {
    var u;
    if (null == n)u = e * Oa, r.point(-ja, u), r.point(0, u), r.point(ja, u), r.point(ja, 0), r.point(ja, -u), r.point(0, -u), r.point(-ja, -u), r.point(-ja, 0), r.point(-ja, u); else if (Ma(n[0] - t[0]) > Pa) {
      var i = n[0] < t[0] ? ja : -ja;
      u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
    } else r.point(t[0], t[1])
  }

  function Ot(n, t) {
    var e = n[0], r = n[1], u = [Math.sin(e), -Math.cos(e), 0], i = 0, a = 0;
    ko.reset();
    for (var o = 0, l = t.length; l > o; ++o) {
      var c = t[o], s = c.length;
      if (s)for (var f = c[0], h = f[0], g = f[1] / 2 + ja / 4, p = Math.sin(g), v = Math.cos(g), d = 1; ;) {
        d === s && (d = 0), n = c[d];
        var m = n[0], y = n[1] / 2 + ja / 4, M = Math.sin(y), x = Math.cos(y), b = m - h, _ = b >= 0 ? 1 : -1, w = _ * b, S = w > ja, k = p * M;
        if (ko.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), i += S ? b + _ * Fa : b, S ^ h >= e ^ m >= e) {
          var N = yt(dt(f), dt(n));
          bt(N);
          var E = yt(u, N);
          bt(E);
          var A = (S ^ b >= 0 ? -1 : 1) * tn(E[2]);
          (r > A || r === A && (N[0] || N[1])) && (a += S ^ b >= 0 ? 1 : -1)
        }
        if (!d++)break;
        h = m, p = M, v = x, f = n
      }
    }
    return (-Pa > i || Pa > i && 0 > ko) ^ 1 & a
  }

  function It(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > i
    }

    function e(n) {
      var e, i, l, c, s;
      return {
        lineStart: function() {
          c = l = !1, s = 1
        }, point: function(f, h) {
          var g, p = [f, h], v = t(f, h), d = a ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? ja : -ja), h) : 0;
          if (!e && (c = l = v) && n.lineStart(), v !== l && (g = r(e, p), (wt(e, g) || wt(p, g)) && (p[0] += Pa, p[1] += Pa, v = t(p[0], p[1]))), v !== l)s = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g; else if (o && e && a ^ v) {
            var m;
            d & i || !(m = r(p, e, !0)) || (s = 0, a ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
          }
          !v || e && wt(e, p) || n.point(p[0], p[1]), e = p, l = v, i = d
        }, lineEnd: function() {
          l && n.lineEnd(), e = null
        }, clean: function() {
          return s | (c && l) << 1
        }
      }
    }

    function r(n, t, e) {
      var r = dt(n), u = dt(t), a = [1, 0, 0], o = yt(r, u), l = mt(o, o), c = o[0], s = l - c * c;
      if (!s)return !e && n;
      var f = i * l / s, h = -i * c / s, g = yt(a, o), p = xt(a, f), v = xt(o, h);
      Mt(p, v);
      var d = g, m = mt(p, d), y = mt(d, d), M = m * m - y * (mt(p, p) - 1);
      if (!(0 > M)) {
        var x = Math.sqrt(M), b = xt(d, (-m - x) / y);
        if (Mt(b, p), b = _t(b), !e)return b;
        var _, w = n[0], S = t[0], k = n[1], N = t[1];
        w > S && (_ = w, w = S, S = _);
        var E = S - w, A = Ma(E - ja) < Pa, C = A || Pa > E;
        if (!A && k > N && (_ = k, k = N, N = _), C ? A ? k + N > 0 ^ b[1] < (Ma(b[0] - w) < Pa ? k : N) : k <= b[1] && b[1] <= N : E > ja ^ (w <= b[0] && b[0] <= S)) {
          var z = xt(d, (-m + x) / y);
          return Mt(z, p), [b, _t(z)]
        }
      }
    }

    function u(t, e) {
      var r = a ? n : ja - n, u = 0;
      return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
    }

    var i = Math.cos(n), a = i > 0, o = Ma(i) > Pa, l = ve(n, 6 * Ia);
    return Rt(t, e, l, a ? [0, -n] : [-ja, n - ja])
  }

  function Yt(n, t, e, r) {
    return function(u) {
      var i, a = u.a, o = u.b, l = a.x, c = a.y, s = o.x, f = o.y, h = 0, g = 1, p = s - l, v = f - c;
      if (i = n - l, p || !(i > 0)) {
        if (i /= p, 0 > p) {
          if (h > i)return;
          g > i && (g = i)
        } else if (p > 0) {
          if (i > g)return;
          i > h && (h = i)
        }
        if (i = e - l, p || !(0 > i)) {
          if (i /= p, 0 > p) {
            if (i > g)return;
            i > h && (h = i)
          } else if (p > 0) {
            if (h > i)return;
            g > i && (g = i)
          }
          if (i = t - c, v || !(i > 0)) {
            if (i /= v, 0 > v) {
              if (h > i)return;
              g > i && (g = i)
            } else if (v > 0) {
              if (i > g)return;
              i > h && (h = i)
            }
            if (i = r - c, v || !(0 > i)) {
              if (i /= v, 0 > v) {
                if (i > g)return;
                i > h && (h = i)
              } else if (v > 0) {
                if (h > i)return;
                g > i && (g = i)
              }
              return h > 0 && (u.a = {x: l + h * p, y: c + h * v}), 1 > g && (u.b = {x: l + g * p, y: c + g * v}), u
            }
          }
        }
      }
    }
  }

  function Zt(n, t, e, r) {
    function u(r, u) {
      return Ma(r[0] - n) < Pa ? u > 0 ? 0 : 3 : Ma(r[0] - e) < Pa ? u > 0 ? 2 : 1 : Ma(r[1] - t) < Pa ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
    }

    function i(n, t) {
      return a(n.x, t.x)
    }

    function a(n, t) {
      var e = u(n, 1), r = u(t, 1);
      return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
    }

    return function(o) {
      function l(n) {
        for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)for (var i, a = 1, o = d[u], l = o.length, c = o[0]; l > a; ++a)i = o[a], c[1] <= r ? i[1] > r && Q(c, i, n) > 0 && ++t : i[1] <= r && Q(c, i, n) < 0 && --t, c = i;
        return 0 !== t
      }

      function c(i, o, l, c) {
        var s = 0, f = 0;
        if (null == i || (s = u(i, l)) !== (f = u(o, l)) || a(i, o) < 0 ^ l > 0) {
          do c.point(0 === s || 3 === s ? n : e, s > 1 ? r : t); while ((s = (s + l + 4) % 4) !== f)
        } else c.point(o[0], o[1])
      }

      function s(u, i) {
        return u >= n && e >= u && i >= t && r >= i
      }

      function f(n, t) {
        s(n, t) && o.point(n, t)
      }

      function h() {
        C.point = p, d && d.push(m = []), S = !0, w = !1, b = _ = NaN
      }

      function g() {
        v && (p(y, M), x && w && E.rejoin(), v.push(E.buffer())), C.point = f, w && o.lineEnd()
      }

      function p(n, t) {
        n = Math.max(-Ho, Math.min(Ho, n)), t = Math.max(-Ho, Math.min(Ho, t));
        var e = s(n, t);
        if (d && m.push([n, t]), S)y = n, M = t, x = e, S = !1, e && (o.lineStart(), o.point(n, t)); else if (e && w)o.point(n, t); else {
          var r = {a: {x: b, y: _}, b: {x: n, y: t}};
          A(r) ? (w || (o.lineStart(), o.point(r.a.x, r.a.y)), o.point(r.b.x, r.b.y), e || o.lineEnd(), k = !1) : e && (o.lineStart(), o.point(n, t), k = !1)
        }
        b = n, _ = t, w = e
      }

      var v, d, m, y, M, x, b, _, w, S, k, N = o, E = Pt(), A = Yt(n, t, e, r), C = {
        point: f, lineStart: h, lineEnd: g, polygonStart: function() {
          o = E, v = [], d = [], k = !0
        }, polygonEnd: function() {
          o = N, v = oa.merge(v);
          var t = l([n, r]), e = k && t, u = v.length;
          (e || u) && (o.polygonStart(), e && (o.lineStart(), c(null, null, 1, o), o.lineEnd()), u && Lt(v, i, t, c, o), o.polygonEnd()), v = d = m = null
        }
      };
      return C
    }
  }

  function Vt(n) {
    var t = 0, e = ja / 3, r = oe(n), u = r(t, e);
    return u.parallels = function(n) {
      return arguments.length ? r(t = n[0] * ja / 180, e = n[1] * ja / 180) : [t / ja * 180, e / ja * 180]
    }, u
  }

  function Xt(n, t) {
    function e(n, t) {
      var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
      return [e * Math.sin(n *= u), a - e * Math.cos(n)]
    }

    var r = Math.sin(n), u = (r + Math.sin(t)) / 2, i = 1 + r * (2 * u - r), a = Math.sqrt(i) / u;
    return e.invert = function(n, t) {
      var e = a - t;
      return [Math.atan2(n, e) / u, tn((i - (n * n + e * e) * u * u) / (2 * u))]
    }, e
  }

  function $t() {
    function n(n, t) {
      Io += u * n - r * t, r = n, u = t
    }

    var t, e, r, u;
    $o.point = function(i, a) {
      $o.point = n, t = r = i, e = u = a
    }, $o.lineEnd = function() {
      n(t, e)
    }
  }

  function Bt(n, t) {
    Yo > n && (Yo = n), n > Vo && (Vo = n), Zo > t && (Zo = t), t > Xo && (Xo = t)
  }

  function Wt() {
    function n(n, t) {
      a.push("M", n, ",", t, i)
    }

    function t(n, t) {
      a.push("M", n, ",", t), o.point = e
    }

    function e(n, t) {
      a.push("L", n, ",", t)
    }

    function r() {
      o.point = n
    }

    function u() {
      a.push("Z")
    }

    var i = Jt(4.5), a = [], o = {
      point: n, lineStart: function() {
        o.point = t
      }, lineEnd: r, polygonStart: function() {
        o.lineEnd = u
      }, polygonEnd: function() {
        o.lineEnd = r, o.point = n
      }, pointRadius: function(n) {
        return i = Jt(n), o
      }, result: function() {
        if (a.length) {
          var n = a.join("");
          return a = [], n
        }
      }
    };
    return o
  }

  function Jt(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
  }

  function Gt(n, t) {
    Co += n, zo += t, ++Lo
  }

  function Kt() {
    function n(n, r) {
      var u = n - t, i = r - e, a = Math.sqrt(u * u + i * i);
      qo += a * (t + n) / 2, To += a * (e + r) / 2, Ro += a, Gt(t = n, e = r)
    }

    var t, e;
    Wo.point = function(r, u) {
      Wo.point = n, Gt(t = r, e = u)
    }
  }

  function Qt() {
    Wo.point = Gt
  }

  function ne() {
    function n(n, t) {
      var e = n - r, i = t - u, a = Math.sqrt(e * e + i * i);
      qo += a * (r + n) / 2, To += a * (u + t) / 2, Ro += a, a = u * n - r * t, Do += a * (r + n), Po += a * (u + t), Uo += 3 * a, Gt(r = n, u = t)
    }

    var t, e, r, u;
    Wo.point = function(i, a) {
      Wo.point = n, Gt(t = r = i, e = u = a)
    }, Wo.lineEnd = function() {
      n(t, e)
    }
  }

  function te(n) {
    function t(t, e) {
      n.moveTo(t + a, e), n.arc(t, e, a, 0, Fa)
    }

    function e(t, e) {
      n.moveTo(t, e), o.point = r
    }

    function r(t, e) {
      n.lineTo(t, e)
    }

    function u() {
      o.point = t
    }

    function i() {
      n.closePath()
    }

    var a = 4.5, o = {
      point: t, lineStart: function() {
        o.point = e
      }, lineEnd: u, polygonStart: function() {
        o.lineEnd = i
      }, polygonEnd: function() {
        o.lineEnd = u, o.point = t
      }, pointRadius: function(n) {
        return a = n, o
      }, result: b
    };
    return o
  }

  function ee(n) {
    function t(n) {
      return (o ? r : e)(n)
    }

    function e(t) {
      return ie(t, function(e, r) {
        e = n(e, r), t.point(e[0], e[1])
      })
    }

    function r(t) {
      function e(e, r) {
        e = n(e, r), t.point(e[0], e[1])
      }

      function r() {
        M = NaN, S.point = i, t.lineStart()
      }

      function i(e, r) {
        var i = dt([e, r]), a = n(e, r);
        u(M, x, y, b, _, w, M = a[0], x = a[1], y = e, b = i[0], _ = i[1], w = i[2], o, t), t.point(M, x)
      }

      function a() {
        S.point = e, t.lineEnd()
      }

      function l() {
        r(), S.point = c, S.lineEnd = s
      }

      function c(n, t) {
        i(f = n, h = t), g = M, p = x, v = b, d = _, m = w, S.point = i
      }

      function s() {
        u(M, x, y, b, _, w, g, p, f, v, d, m, o, t), S.lineEnd = a, a()
      }

      var f, h, g, p, v, d, m, y, M, x, b, _, w, S = {
        point: e, lineStart: r, lineEnd: a, polygonStart: function() {
          t.polygonStart(), S.lineStart = l
        }, polygonEnd: function() {
          t.polygonEnd(), S.lineStart = r
        }
      };
      return S
    }

    function u(t, e, r, o, l, c, s, f, h, g, p, v, d, m) {
      var y = s - t, M = f - e, x = y * y + M * M;
      if (x > 4 * i && d--) {
        var b = o + g, _ = l + p, w = c + v, S = Math.sqrt(b * b + _ * _ + w * w), k = Math.asin(w /= S), N = Ma(Ma(w) - 1) < Pa || Ma(r - h) < Pa ? (r + h) / 2 : Math.atan2(_, b), E = n(N, k), A = E[0], C = E[1], z = A - t, L = C - e, q = M * z - y * L;
        (q * q / x > i || Ma((y * z + M * L) / x - .5) > .3 || a > o * g + l * p + c * v) && (u(t, e, r, o, l, c, A, C, N, b /= S, _ /= S, w, d, m), m.point(A, C), u(A, C, N, b, _, w, s, f, h, g, p, v, d, m))
      }
    }

    var i = .5, a = Math.cos(30 * Ia), o = 16;
    return t.precision = function(n) {
      return arguments.length ? (o = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
    }, t
  }

  function re(n) {
    var t = ee(function(t, e) {
      return n([t * Ya, e * Ya])
    });
    return function(n) {
      return le(t(n))
    }
  }

  function ue(n) {
    this.stream = n
  }

  function ie(n, t) {
    return {
      point: t, sphere: function() {
        n.sphere()
      }, lineStart: function() {
        n.lineStart()
      }, lineEnd: function() {
        n.lineEnd()
      }, polygonStart: function() {
        n.polygonStart()
      }, polygonEnd: function() {
        n.polygonEnd()
      }
    }
  }

  function ae(n) {
    return oe(function() {
      return n
    })()
  }

  function oe(n) {
    function t(n) {
      return n = o(n[0] * Ia, n[1] * Ia), [n[0] * h + l, c - n[1] * h]
    }

    function e(n) {
      return n = o.invert((n[0] - l) / h, (c - n[1]) / h), n && [n[0] * Ya, n[1] * Ya]
    }

    function r() {
      o = Ct(a = fe(m, M, x), i);
      var n = i(v, d);
      return l = g - n[0] * h, c = p + n[1] * h, u()
    }

    function u() {
      return s && (s.valid = !1, s = null), t
    }

    var i, a, o, l, c, s, f = ee(function(n, t) {
      return n = i(n, t), [n[0] * h + l, c - n[1] * h]
    }), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, M = 0, x = 0, b = Fo, _ = y, w = null, S = null;
    return t.stream = function(n) {
      return s && (s.valid = !1), s = le(b(a, f(_(n)))), s.valid = !0, s
    }, t.clipAngle = function(n) {
      return arguments.length ? (b = null == n ? (w = n, Fo) : It((w = +n) * Ia), u()) : w
    }, t.clipExtent = function(n) {
      return arguments.length ? (S = n, _ = n ? Zt(n[0][0], n[0][1], n[1][0], n[1][1]) : y, u()) : S
    }, t.scale = function(n) {
      return arguments.length ? (h = +n, r()) : h
    }, t.translate = function(n) {
      return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
    }, t.center = function(n) {
      return arguments.length ? (v = n[0] % 360 * Ia, d = n[1] % 360 * Ia, r()) : [v * Ya, d * Ya]
    }, t.rotate = function(n) {
      return arguments.length ? (m = n[0] % 360 * Ia, M = n[1] % 360 * Ia, x = n.length > 2 ? n[2] % 360 * Ia : 0, r()) : [m * Ya, M * Ya, x * Ya]
    }, oa.rebind(t, f, "precision"), function() {
      return i = n.apply(this, arguments), t.invert = i.invert && e, r()
    }
  }

  function le(n) {
    return ie(n, function(t, e) {
      n.point(t * Ia, e * Ia)
    })
  }

  function ce(n, t) {
    return [n, t]
  }

  function se(n, t) {
    return [n > ja ? n - Fa : -ja > n ? n + Fa : n, t]
  }

  function fe(n, t, e) {
    return n ? t || e ? Ct(ge(n), pe(t, e)) : ge(n) : t || e ? pe(t, e) : se
  }

  function he(n) {
    return function(t, e) {
      return t += n, [t > ja ? t - Fa : -ja > t ? t + Fa : t, e]
    }
  }

  function ge(n) {
    var t = he(n);
    return t.invert = he(-n), t
  }

  function pe(n, t) {
    function e(n, t) {
      var e = Math.cos(t), o = Math.cos(n) * e, l = Math.sin(n) * e, c = Math.sin(t), s = c * r + o * u;
      return [Math.atan2(l * i - s * a, o * r - c * u), tn(s * i + l * a)]
    }

    var r = Math.cos(n), u = Math.sin(n), i = Math.cos(t), a = Math.sin(t);
    return e.invert = function(n, t) {
      var e = Math.cos(t), o = Math.cos(n) * e, l = Math.sin(n) * e, c = Math.sin(t), s = c * i - l * a;
      return [Math.atan2(l * i + c * a, o * r + s * u), tn(s * r - o * u)]
    }, e
  }

  function ve(n, t) {
    var e = Math.cos(n), r = Math.sin(n);
    return function(u, i, a, o) {
      var l = a * t;
      null != u ? (u = de(e, u), i = de(e, i), (a > 0 ? i > u : u > i) && (u += a * Fa)) : (u = n + a * Fa, i = n - .5 * l);
      for (var c, s = u; a > 0 ? s > i : i > s; s -= l)o.point((c = _t([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
    }
  }

  function de(n, t) {
    var e = dt(t);
    e[0] -= n, bt(e);
    var r = nn(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Pa) % (2 * Math.PI)
  }

  function me(n, t, e) {
    var r = oa.range(n, t - Pa, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [n, t]
      })
    }
  }

  function ye(n, t, e) {
    var r = oa.range(n, t - Pa, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [t, n]
      })
    }
  }

  function Me(n) {
    return n.source
  }

  function xe(n) {
    return n.target
  }

  function be(n, t, e, r) {
    var u = Math.cos(t), i = Math.sin(t), a = Math.cos(r), o = Math.sin(r), l = u * Math.cos(n), c = u * Math.sin(n), s = a * Math.cos(e), f = a * Math.sin(e), h = 2 * Math.asin(Math.sqrt(an(r - t) + u * a * an(e - n))), g = 1 / Math.sin(h), p = h ? function(n) {
      var t = Math.sin(n *= h) * g, e = Math.sin(h - n) * g, r = e * l + t * s, u = e * c + t * f, a = e * i + t * o;
      return [Math.atan2(u, r) * Ya, Math.atan2(a, Math.sqrt(r * r + u * u)) * Ya]
    } : function() {
      return [n * Ya, t * Ya]
    };
    return p.distance = h, p
  }

  function _e() {
    function n(n, u) {
      var i = Math.sin(u *= Ia), a = Math.cos(u), o = Ma((n *= Ia) - t), l = Math.cos(o);
      Jo += Math.atan2(Math.sqrt((o = a * Math.sin(o)) * o + (o = r * i - e * a * l) * o), e * i + r * a * l), t = n, e = i, r = a
    }

    var t, e, r;
    Go.point = function(u, i) {
      t = u * Ia, e = Math.sin(i *= Ia), r = Math.cos(i), Go.point = n
    }, Go.lineEnd = function() {
      Go.point = Go.lineEnd = b
    }
  }

  function we(n, t) {
    function e(t, e) {
      var r = Math.cos(t), u = Math.cos(e), i = n(r * u);
      return [i * u * Math.sin(t), i * Math.sin(e)]
    }

    return e.invert = function(n, e) {
      var r = Math.sqrt(n * n + e * e), u = t(r), i = Math.sin(u), a = Math.cos(u);
      return [Math.atan2(n * i, r * a), Math.asin(r && e * i / r)]
    }, e
  }

  function Se(n, t) {
    function e(n, t) {
      a > 0 ? -Oa + Pa > t && (t = -Oa + Pa) : t > Oa - Pa && (t = Oa - Pa);
      var e = a / Math.pow(u(t), i);
      return [e * Math.sin(i * n), a - e * Math.cos(i * n)]
    }

    var r = Math.cos(n), u = function(n) {
      return Math.tan(ja / 4 + n / 2)
    }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)), a = r * Math.pow(u(n), i) / i;
    return i ? (e.invert = function(n, t) {
      var e = a - t, r = K(i) * Math.sqrt(n * n + e * e);
      return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(a / r, 1 / i)) - Oa]
    }, e) : Ne
  }

  function ke(n, t) {
    function e(n, t) {
      var e = i - t;
      return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
    }

    var r = Math.cos(n), u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), i = r / u + n;
    return Ma(u) < Pa ? ce : (e.invert = function(n, t) {
      var e = i - t;
      return [Math.atan2(n, e) / u, i - K(u) * Math.sqrt(n * n + e * e)]
    }, e)
  }

  function Ne(n, t) {
    return [n, Math.log(Math.tan(ja / 4 + t / 2))]
  }

  function Ee(n) {
    var t, e = ae(n), r = e.scale, u = e.translate, i = e.clipExtent;
    return e.scale = function() {
      var n = r.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n
    }, e.translate = function() {
      var n = u.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n
    }, e.clipExtent = function(n) {
      var a = i.apply(e, arguments);
      if (a === e) {
        if (t = null == n) {
          var o = ja * r(), l = u();
          i([[l[0] - o, l[1] - o], [l[0] + o, l[1] + o]])
        }
      } else t && (a = null);
      return a
    }, e.clipExtent(null)
  }

  function Ae(n, t) {
    return [Math.log(Math.tan(ja / 4 + t / 2)), -n]
  }

  function Ce(n) {
    return n[0]
  }

  function ze(n) {
    return n[1]
  }

  function Le(n) {
    for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
      for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)--r;
      e[r++] = u
    }
    return e.slice(0, r)
  }

  function qe(n, t) {
    return n[0] - t[0] || n[1] - t[1]
  }

  function Te(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
  }

  function Re(n, t, e, r) {
    var u = n[0], i = e[0], a = t[0] - u, o = r[0] - i, l = n[1], c = e[1], s = t[1] - l, f = r[1] - c, h = (o * (l - c) - f * (u - i)) / (f * a - o * s);
    return [u + h * a, l + h * s]
  }

  function De(n) {
    var t = n[0], e = n[n.length - 1];
    return !(t[0] - e[0] || t[1] - e[1])
  }

  function Pe() {
    rr(this), this.edge = this.site = this.circle = null
  }

  function Ue(n) {
    var t = cl.pop() || new Pe;
    return t.site = n, t
  }

  function je(n) {
    Be(n), al.remove(n), cl.push(n), rr(n)
  }

  function Fe(n) {
    var t = n.circle, e = t.x, r = t.cy, u = {x: e, y: r}, i = n.P, a = n.N, o = [n];
    je(n);
    for (var l = i; l.circle && Ma(e - l.circle.x) < Pa && Ma(r - l.circle.cy) < Pa;)i = l.P, o.unshift(l), je(l), l = i;
    o.unshift(l), Be(l);
    for (var c = a; c.circle && Ma(e - c.circle.x) < Pa && Ma(r - c.circle.cy) < Pa;)a = c.N, o.push(c), je(c), c = a;
    o.push(c), Be(c);
    var s, f = o.length;
    for (s = 1; f > s; ++s)c = o[s], l = o[s - 1], nr(c.edge, l.site, c.site, u);
    l = o[0], c = o[f - 1], c.edge = Ke(l.site, c.site, null, u), $e(l), $e(c)
  }

  function He(n) {
    for (var t, e, r, u, i = n.x, a = n.y, o = al._; o;)if (r = Oe(o, a) - i, r > Pa)o = o.L; else {
      if (u = i - Ie(o, a), !(u > Pa)) {
        r > -Pa ? (t = o.P, e = o) : u > -Pa ? (t = o, e = o.N) : t = e = o;
        break
      }
      if (!o.R) {
        t = o;
        break
      }
      o = o.R
    }
    var l = Ue(n);
    if (al.insert(t, l), t || e) {
      if (t === e)return Be(t), e = Ue(t.site), al.insert(l, e), l.edge = e.edge = Ke(t.site, l.site), $e(t), void $e(e);
      if (!e)return void(l.edge = Ke(t.site, l.site));
      Be(t), Be(e);
      var c = t.site, s = c.x, f = c.y, h = n.x - s, g = n.y - f, p = e.site, v = p.x - s, d = p.y - f, m = 2 * (h * d - g * v), y = h * h + g * g, M = v * v + d * d, x = {x: (d * y - g * M) / m + s, y: (h * M - v * y) / m + f};
      nr(e.edge, c, p, x), l.edge = Ke(c, n, null, x), e.edge = Ke(n, p, null, x), $e(t), $e(e)
    }
  }

  function Oe(n, t) {
    var e = n.site, r = e.x, u = e.y, i = u - t;
    if (!i)return r;
    var a = n.P;
    if (!a)return -(1 / 0);
    e = a.site;
    var o = e.x, l = e.y, c = l - t;
    if (!c)return o;
    var s = o - r, f = 1 / i - 1 / c, h = s / c;
    return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * c) - l + c / 2 + u - i / 2))) / f + r : (r + o) / 2
  }

  function Ie(n, t) {
    var e = n.N;
    if (e)return Oe(e, t);
    var r = n.site;
    return r.y === t ? r.x : 1 / 0
  }

  function Ye(n) {
    this.site = n, this.edges = []
  }

  function Ze(n) {
    for (var t, e, r, u, i, a, o, l, c, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = il, d = v.length; d--;)if (i = v[d], i && i.prepare())for (o = i.edges, l = o.length, a = 0; l > a;)s = o[a].end(), r = s.x, u = s.y, c = o[++a % l].start(), t = c.x, e = c.y, (Ma(r - t) > Pa || Ma(u - e) > Pa) && (o.splice(a, 0, new tr(Qe(i.site, s, Ma(r - f) < Pa && p - u > Pa ? {x: f, y: Ma(t - f) < Pa ? e : p} : Ma(u - p) < Pa && h - r > Pa ? {x: Ma(e - p) < Pa ? t : h, y: p} : Ma(r - h) < Pa && u - g > Pa ? {x: h, y: Ma(t - h) < Pa ? e : g} : Ma(u - g) < Pa && r - f > Pa ? {x: Ma(e - g) < Pa ? t : f, y: g} : null), i.site, null)), ++l)
  }

  function Ve(n, t) {
    return t.angle - n.angle
  }

  function Xe() {
    rr(this), this.x = this.y = this.arc = this.site = this.cy = null
  }

  function $e(n) {
    var t = n.P, e = n.N;
    if (t && e) {
      var r = t.site, u = n.site, i = e.site;
      if (r !== i) {
        var a = u.x, o = u.y, l = r.x - a, c = r.y - o, s = i.x - a, f = i.y - o, h = 2 * (l * f - c * s);
        if (!(h >= -Ua)) {
          var g = l * l + c * c, p = s * s + f * f, v = (f * g - c * p) / h, d = (l * p - s * g) / h, f = d + o, m = sl.pop() || new Xe;
          m.arc = n, m.site = u, m.x = v + a, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
          for (var y = null, M = ll._; M;)if (m.y < M.y || m.y === M.y && m.x <= M.x) {
            if (!M.L) {
              y = M.P;
              break
            }
            M = M.L
          } else {
            if (!M.R) {
              y = M;
              break
            }
            M = M.R
          }
          ll.insert(y, m), y || (ol = m)
        }
      }
    }
  }

  function Be(n) {
    var t = n.circle;
    t && (t.P || (ol = t.N), ll.remove(t), sl.push(t), rr(t), n.circle = null)
  }

  function We(n) {
    for (var t, e = ul, r = Yt(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;)t = e[u], (!Je(t, n) || !r(t) || Ma(t.a.x - t.b.x) < Pa && Ma(t.a.y - t.b.y) < Pa) && (t.a = t.b = null, e.splice(u, 1))
  }

  function Je(n, t) {
    var e = n.b;
    if (e)return !0;
    var r, u, i = n.a, a = t[0][0], o = t[1][0], l = t[0][1], c = t[1][1], s = n.l, f = n.r, h = s.x, g = s.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2;
    if (v === g) {
      if (a > d || d >= o)return;
      if (h > p) {
        if (i) {
          if (i.y >= c)return
        } else i = {x: d, y: l};
        e = {x: d, y: c}
      } else {
        if (i) {
          if (i.y < l)return
        } else i = {x: d, y: c};
        e = {x: d, y: l}
      }
    } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)if (h > p) {
      if (i) {
        if (i.y >= c)return
      } else i = {x: (l - u) / r, y: l};
      e = {x: (c - u) / r, y: c}
    } else {
      if (i) {
        if (i.y < l)return
      } else i = {x: (c - u) / r, y: c};
      e = {x: (l - u) / r, y: l}
    } else if (v > g) {
      if (i) {
        if (i.x >= o)return
      } else i = {x: a, y: r * a + u};
      e = {x: o, y: r * o + u}
    } else {
      if (i) {
        if (i.x < a)return
      } else i = {x: o, y: r * o + u};
      e = {x: a, y: r * a + u}
    }
    return n.a = i, n.b = e, !0
  }

  function Ge(n, t) {
    this.l = n, this.r = t, this.a = this.b = null
  }

  function Ke(n, t, e, r) {
    var u = new Ge(n, t);
    return ul.push(u), e && nr(u, n, t, e), r && nr(u, t, n, r), il[n.i].edges.push(new tr(u, n, t)), il[t.i].edges.push(new tr(u, t, n)), u
  }

  function Qe(n, t, e) {
    var r = new Ge(n, null);
    return r.a = t, r.b = e, ul.push(r), r
  }

  function nr(n, t, e, r) {
    n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
  }

  function tr(n, t, e) {
    var r = n.a, u = n.b;
    this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
  }

  function er() {
    this._ = null
  }

  function rr(n) {
    n.U = n.C = n.L = n.R = n.P = n.N = null
  }

  function ur(n, t) {
    var e = t, r = t.R, u = e.U;
    u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
  }

  function ir(n, t) {
    var e = t, r = t.L, u = e.U;
    u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
  }

  function ar(n) {
    for (; n.L;)n = n.L;
    return n
  }

  function or(n, t) {
    var e, r, u, i = n.sort(lr).pop();
    for (ul = [], il = new Array(n.length), al = new er, ll = new er; ;)if (u = ol, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (il[i.i] = new Ye(i), He(i), e = i.x, r = i.y), i = n.pop(); else {
      if (!u)break;
      Fe(u.arc)
    }
    t && (We(t), Ze(t));
    var a = {cells: il, edges: ul};
    return al = ll = ul = il = null, a
  }

  function lr(n, t) {
    return t.y - n.y || t.x - n.x
  }

  function cr(n, t, e) {
    return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
  }

  function sr(n) {
    return n.x
  }

  function fr(n) {
    return n.y
  }

  function hr() {
    return {leaf: !0, nodes: [], point: null, x: null, y: null}
  }

  function gr(n, t, e, r, u, i) {
    if (!n(t, e, r, u, i)) {
      var a = .5 * (e + u), o = .5 * (r + i), l = t.nodes;
      l[0] && gr(n, l[0], e, r, a, o), l[1] && gr(n, l[1], a, r, u, o), l[2] && gr(n, l[2], e, o, a, i), l[3] && gr(n, l[3], a, o, u, i)
    }
  }

  function pr(n, t, e, r, u, i, a) {
    var o, l = 1 / 0;
    return function c(n, s, f, h, g) {
      if (!(s > i || f > a || r > h || u > g)) {
        if (p = n.point) {
          var p, v = t - n.x, d = e - n.y, m = v * v + d * d;
          if (l > m) {
            var y = Math.sqrt(l = m);
            r = t - y, u = e - y, i = t + y, a = e + y, o = p
          }
        }
        for (var M = n.nodes, x = .5 * (s + h), b = .5 * (f + g), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S)if (n = M[3 & S])switch (3 & S) {
          case 0:
            c(n, s, f, x, b);
            break;
          case 1:
            c(n, x, f, h, b);
            break;
          case 2:
            c(n, s, b, x, g);
            break;
          case 3:
            c(n, x, b, h, g)
        }
      }
    }(n, r, u, i, a), o
  }

  function vr(n, t) {
    n = oa.rgb(n), t = oa.rgb(t);
    var e = n.r, r = n.g, u = n.b, i = t.r - e, a = t.g - r, o = t.b - u;
    return function(n) {
      return "#" + bn(Math.round(e + i * n)) + bn(Math.round(r + a * n)) + bn(Math.round(u + o * n))
    }
  }

  function dr(n, t) {
    var e, r = {}, u = {};
    for (e in n)e in t ? r[e] = Mr(n[e], t[e]) : u[e] = n[e];
    for (e in t)e in n || (u[e] = t[e]);
    return function(n) {
      for (e in r)u[e] = r[e](n);
      return u
    }
  }

  function mr(n, t) {
    return n = +n, t = +t, function(e) {
      return n * (1 - e) + t * e
    }
  }

  function yr(n, t) {
    var e, r, u, i = hl.lastIndex = gl.lastIndex = 0, a = -1, o = [], l = [];
    for (n += "", t += ""; (e = hl.exec(n)) && (r = gl.exec(t));)(u = r.index) > i && (u = t.slice(i, u), o[a] ? o[a] += u : o[++a] = u), (e = e[0]) === (r = r[0]) ? o[a] ? o[a] += r : o[++a] = r : (o[++a] = null, l.push({i: a, x: mr(e, r)})), i = gl.lastIndex;
    return i < t.length && (u = t.slice(i), o[a] ? o[a] += u : o[++a] = u), o.length < 2 ? l[0] ? (t = l[0].x, function(n) {
      return t(n) + ""
    }) : function() {
      return t
    } : (t = l.length, function(n) {
      for (var e, r = 0; t > r; ++r)o[(e = l[r]).i] = e.x(n);
      return o.join("")
    })
  }

  function Mr(n, t) {
    for (var e, r = oa.interpolators.length; --r >= 0 && !(e = oa.interpolators[r](n, t)););
    return e
  }

  function xr(n, t) {
    var e, r = [], u = [], i = n.length, a = t.length, o = Math.min(n.length, t.length);
    for (e = 0; o > e; ++e)r.push(Mr(n[e], t[e]));
    for (; i > e; ++e)u[e] = n[e];
    for (; a > e; ++e)u[e] = t[e];
    return function(n) {
      for (e = 0; o > e; ++e)u[e] = r[e](n);
      return u
    }
  }

  function br(n) {
    return function(t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
    }
  }

  function _r(n) {
    return function(t) {
      return 1 - n(1 - t)
    }
  }

  function wr(n) {
    return function(t) {
      return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
    }
  }

  function Sr(n) {
    return n * n
  }

  function kr(n) {
    return n * n * n
  }

  function Nr(n) {
    if (0 >= n)return 0;
    if (n >= 1)return 1;
    var t = n * n, e = t * n;
    return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
  }

  function Er(n) {
    return function(t) {
      return Math.pow(t, n)
    }
  }

  function Ar(n) {
    return 1 - Math.cos(n * Oa)
  }

  function Cr(n) {
    return Math.pow(2, 10 * (n - 1))
  }

  function zr(n) {
    return 1 - Math.sqrt(1 - n * n)
  }

  function Lr(n, t) {
    var e;
    return arguments.length < 2 && (t = .45), arguments.length ? e = t / Fa * Math.asin(1 / n) : (n = 1, e = t / 4), function(r) {
      return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Fa / t)
    }
  }

  function qr(n) {
    return n || (n = 1.70158), function(t) {
      return t * t * ((n + 1) * t - n)
    }
  }

  function Tr(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
  }

  function Rr(n, t) {
    n = oa.hcl(n), t = oa.hcl(t);
    var e = n.h, r = n.c, u = n.l, i = t.h - e, a = t.c - r, o = t.l - u;
    return isNaN(a) && (a = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
      return fn(e + i * n, r + a * n, u + o * n) + ""
    }
  }

  function Dr(n, t) {
    n = oa.hsl(n), t = oa.hsl(t);
    var e = n.h, r = n.s, u = n.l, i = t.h - e, a = t.s - r, o = t.l - u;
    return isNaN(a) && (a = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
      return cn(e + i * n, r + a * n, u + o * n) + ""
    }
  }

  function Pr(n, t) {
    n = oa.lab(n), t = oa.lab(t);
    var e = n.l, r = n.a, u = n.b, i = t.l - e, a = t.a - r, o = t.b - u;
    return function(n) {
      return gn(e + i * n, r + a * n, u + o * n) + ""
    }
  }

  function Ur(n, t) {
    return t -= n, function(e) {
      return Math.round(n + t * e)
    }
  }

  function jr(n) {
    var t = [n.a, n.b], e = [n.c, n.d], r = Hr(t), u = Fr(t, e), i = Hr(Or(e, t, -u)) || 0;
    t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ya, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ya : 0
  }

  function Fr(n, t) {
    return n[0] * t[0] + n[1] * t[1]
  }

  function Hr(n) {
    var t = Math.sqrt(Fr(n, n));
    return t && (n[0] /= t, n[1] /= t), t
  }

  function Or(n, t, e) {
    return n[0] += e * t[0], n[1] += e * t[1], n
  }

  function Ir(n) {
    return n.length ? n.pop() + "," : ""
  }

  function Yr(n, t, e, r) {
    if (n[0] !== t[0] || n[1] !== t[1]) {
      var u = e.push("translate(", null, ",", null, ")");
      r.push({i: u - 4, x: mr(n[0], t[0])}, {i: u - 2, x: mr(n[1], t[1])})
    } else(t[0] || t[1]) && e.push("translate(" + t + ")")
  }

  function Zr(n, t, e, r) {
    n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({i: e.push(Ir(e) + "rotate(", null, ")") - 2, x: mr(n, t)})) : t && e.push(Ir(e) + "rotate(" + t + ")")
  }

  function Vr(n, t, e, r) {
    n !== t ? r.push({i: e.push(Ir(e) + "skewX(", null, ")") - 2, x: mr(n, t)}) : t && e.push(Ir(e) + "skewX(" + t + ")")
  }

  function Xr(n, t, e, r) {
    if (n[0] !== t[0] || n[1] !== t[1]) {
      var u = e.push(Ir(e) + "scale(", null, ",", null, ")");
      r.push({i: u - 4, x: mr(n[0], t[0])}, {i: u - 2, x: mr(n[1], t[1])})
    } else(1 !== t[0] || 1 !== t[1]) && e.push(Ir(e) + "scale(" + t + ")")
  }

  function $r(n, t) {
    var e = [], r = [];
    return n = oa.transform(n), t = oa.transform(t), Yr(n.translate, t.translate, e, r), Zr(n.rotate, t.rotate, e, r), Vr(n.skew, t.skew, e, r), Xr(n.scale, t.scale, e, r), n = t = null, function(n) {
      for (var t, u = -1, i = r.length; ++u < i;)e[(t = r[u]).i] = t.x(n);
      return e.join("")
    }
  }

  function Br(n, t) {
    return t = (t -= n = +n) || 1 / t, function(e) {
      return (e - n) / t
    }
  }

  function Wr(n, t) {
    return t = (t -= n = +n) || 1 / t, function(e) {
      return Math.max(0, Math.min(1, (e - n) / t))
    }
  }

  function Jr(n) {
    for (var t = n.source, e = n.target, r = Kr(t, e), u = [t]; t !== r;)t = t.parent, u.push(t);
    for (var i = u.length; e !== r;)u.splice(i, 0, e), e = e.parent;
    return u
  }

  function Gr(n) {
    for (var t = [], e = n.parent; null != e;)t.push(n), n = e, e = e.parent;
    return t.push(n), t
  }

  function Kr(n, t) {
    if (n === t)return n;
    for (var e = Gr(n), r = Gr(t), u = e.pop(), i = r.pop(), a = null; u === i;)a = u, u = e.pop(), i = r.pop();
    return a
  }

  function Qr(n) {
    n.fixed |= 2
  }

  function nu(n) {
    n.fixed &= -7
  }

  function tu(n) {
    n.fixed |= 4, n.px = n.x, n.py = n.y
  }

  function eu(n) {
    n.fixed &= -5
  }

  function ru(n, t, e) {
    var r = 0, u = 0;
    if (n.charge = 0, !n.leaf)for (var i, a = n.nodes, o = a.length, l = -1; ++l < o;)i = a[l], null != i && (ru(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
    if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
      var c = t * e[n.point.index];
      n.charge += n.pointCharge = c, r += c * n.point.x, u += c * n.point.y
    }
    n.cx = r / n.charge, n.cy = u / n.charge
  }

  function uu(n, t) {
    return oa.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = su, n
  }

  function iu(n, t) {
    for (var e = [n]; null != (n = e.pop());)if (t(n), (u = n.children) && (r = u.length))for (var r, u; --r >= 0;)e.push(u[r])
  }

  function au(n, t) {
    for (var e = [n], r = []; null != (n = e.pop());)if (r.push(n), (i = n.children) && (u = i.length))for (var u, i, a = -1; ++a < u;)e.push(i[a]);
    for (; null != (n = r.pop());)t(n)
  }

  function ou(n) {
    return n.children
  }

  function lu(n) {
    return n.value
  }

  function cu(n, t) {
    return t.value - n.value
  }

  function su(n) {
    return oa.merge(n.map(function(n) {
      return (n.children || []).map(function(t) {
        return {source: n, target: t}
      })
    }))
  }

  function fu(n) {
    return n.x
  }

  function hu(n) {
    return n.y
  }

  function gu(n, t, e) {
    n.y0 = t, n.y = e
  }

  function pu(n) {
    return oa.range(n.length)
  }

  function vu(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e;)r[t] = 0;
    return r
  }

  function du(n) {
    for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
    return r
  }

  function mu(n) {
    return n.reduce(yu, 0)
  }

  function yu(n, t) {
    return n + t[1]
  }

  function Mu(n, t) {
    return xu(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
  }

  function xu(n, t) {
    for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;)i[e] = u * e + r;
    return i
  }

  function bu(n) {
    return [oa.min(n), oa.max(n)]
  }

  function _u(n, t) {
    return n.value - t.value
  }

  function wu(n, t) {
    var e = n._pack_next;
    n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
  }

  function Su(n, t) {
    n._pack_next = t, t._pack_prev = n
  }

  function ku(n, t) {
    var e = t.x - n.x, r = t.y - n.y, u = n.r + t.r;
    return .999 * u * u > e * e + r * r
  }

  function Nu(n) {
    function t(n) {
      s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
    }

    if ((e = n.children) && (c = e.length)) {
      var e, r, u, i, a, o, l, c, s = 1 / 0, f = -(1 / 0), h = 1 / 0, g = -(1 / 0);
      if (e.forEach(Eu), r = e[0], r.x = -r.r, r.y = 0, t(r), c > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), c > 2))for (i = e[2], zu(r, u, i), t(i), wu(r, i), r._pack_prev = i, wu(i, u), u = r._pack_next, a = 3; c > a; a++) {
        zu(r, u, i = e[a]);
        var p = 0, v = 1, d = 1;
        for (o = u._pack_next; o !== u; o = o._pack_next, v++)if (ku(o, i)) {
          p = 1;
          break
        }
        if (1 == p)for (l = r._pack_prev; l !== o._pack_prev && !ku(l, i); l = l._pack_prev, d++);
        p ? (d > v || v == d && u.r < r.r ? Su(r, u = o) : Su(r = l, u), a--) : (wu(r, i), u = i, t(i))
      }
      var m = (s + f) / 2, y = (h + g) / 2, M = 0;
      for (a = 0; c > a; a++)i = e[a], i.x -= m, i.y -= y, M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
      n.r = M, e.forEach(Au)
    }
  }

  function Eu(n) {
    n._pack_next = n._pack_prev = n
  }

  function Au(n) {
    delete n._pack_next, delete n._pack_prev
  }

  function Cu(n, t, e, r) {
    var u = n.children;
    if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)for (var i = -1, a = u.length; ++i < a;)Cu(u[i], t, e, r)
  }

  function zu(n, t, e) {
    var r = n.r + e.r, u = t.x - n.x, i = t.y - n.y;
    if (r && (u || i)) {
      var a = t.r + e.r, o = u * u + i * i;
      a *= a, r *= r;
      var l = .5 + (r - a) / (2 * o), c = Math.sqrt(Math.max(0, 2 * a * (r + o) - (r -= o) * r - a * a)) / (2 * o);
      e.x = n.x + l * u + c * i, e.y = n.y + l * i - c * u
    } else e.x = n.x + r, e.y = n.y
  }

  function Lu(n, t) {
    return n.parent == t.parent ? 1 : 2
  }

  function qu(n) {
    var t = n.children;
    return t.length ? t[0] : n.t
  }

  function Tu(n) {
    var t, e = n.children;
    return (t = e.length) ? e[t - 1] : n.t
  }

  function Ru(n, t, e) {
    var r = e / (t.i - n.i);
    t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e
  }

  function Du(n) {
    for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;)t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c)
  }

  function Pu(n, t, e) {
    return n.a.parent === t.parent ? n.a : e
  }

  function Uu(n) {
    return 1 + oa.max(n, function(n) {
        return n.y
      })
  }

  function ju(n) {
    return n.reduce(function(n, t) {
        return n + t.x
      }, 0) / n.length
  }

  function Fu(n) {
    var t = n.children;
    return t && t.length ? Fu(t[0]) : n
  }

  function Hu(n) {
    var t, e = n.children;
    return e && (t = e.length) ? Hu(e[t - 1]) : n
  }

  function Ou(n) {
    return {x: n.x, y: n.y, dx: n.dx, dy: n.dy}
  }

  function Iu(n, t) {
    var e = n.x + t[3], r = n.y + t[0], u = n.dx - t[1] - t[3], i = n.dy - t[0] - t[2];
    return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {x: e, y: r, dx: u, dy: i}
  }

  function Yu(n) {
    var t = n[0], e = n[n.length - 1];
    return e > t ? [t, e] : [e, t]
  }

  function Zu(n) {
    return n.rangeExtent ? n.rangeExtent() : Yu(n.range())
  }

  function Vu(n, t, e, r) {
    var u = e(n[0], n[1]), i = r(t[0], t[1]);
    return function(n) {
      return i(u(n))
    }
  }

  function Xu(n, t) {
    var e, r = 0, u = n.length - 1, i = n[r], a = n[u];
    return i > a && (e = r, r = u, u = e, e = i, i = a, a = e), n[r] = t.floor(i), n[u] = t.ceil(a), n
  }

  function $u(n) {
    return n ? {
      floor: function(t) {
        return Math.floor(t / n) * n
      }, ceil: function(t) {
        return Math.ceil(t / n) * n
      }
    } : Sl
  }

  function Bu(n, t, e, r) {
    var u = [], i = [], a = 0, o = Math.min(n.length, t.length) - 1;
    for (n[o] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a <= o;)u.push(e(n[a - 1], n[a])), i.push(r(t[a - 1], t[a]));
    return function(t) {
      var e = oa.bisect(n, t, 1, o) - 1;
      return i[e](u[e](t))
    }
  }

  function Wu(n, t, e, r) {
    function u() {
      var u = Math.min(n.length, t.length) > 2 ? Bu : Vu, l = r ? Wr : Br;
      return a = u(n, t, l, e), o = u(t, n, l, Mr), i
    }

    function i(n) {
      return a(n)
    }

    var a, o;
    return i.invert = function(n) {
      return o(n)
    }, i.domain = function(t) {
      return arguments.length ? (n = t.map(Number), u()) : n
    }, i.range = function(n) {
      return arguments.length ? (t = n, u()) : t
    }, i.rangeRound = function(n) {
      return i.range(n).interpolate(Ur)
    }, i.clamp = function(n) {
      return arguments.length ? (r = n, u()) : r
    }, i.interpolate = function(n) {
      return arguments.length ? (e = n, u()) : e
    }, i.ticks = function(t) {
      return Qu(n, t)
    }, i.tickFormat = function(t, e) {
      return ni(n, t, e)
    }, i.nice = function(t) {
      return Gu(n, t), u()
    }, i.copy = function() {
      return Wu(n, t, e, r)
    }, u()
  }

  function Ju(n, t) {
    return oa.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
  }

  function Gu(n, t) {
    return Xu(n, $u(Ku(n, t)[2])), Xu(n, $u(Ku(n, t)[2])), n
  }

  function Ku(n, t) {
    null == t && (t = 10);
    var e = Yu(n), r = e[1] - e[0], u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), i = t / r * u;
    return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
  }

  function Qu(n, t) {
    return oa.range.apply(oa, Ku(n, t))
  }

  function ni(n, t, e) {
    var r = Ku(n, t);
    if (e) {
      var u = fo.exec(e);
      if (u.shift(), "s" === u[8]) {
        var i = oa.formatPrefix(Math.max(Ma(r[0]), Ma(r[1])));
        return u[7] || (u[7] = "." + ti(i.scale(r[2]))), u[8] = "f", e = oa.format(u.join("")), function(n) {
          return e(i.scale(n)) + i.symbol
        }
      }
      u[7] || (u[7] = "." + ei(u[8], r)), e = u.join("")
    } else e = ",." + ti(r[2]) + "f";
    return oa.format(e)
  }

  function ti(n) {
    return -Math.floor(Math.log(n) / Math.LN10 + .01)
  }

  function ei(n, t) {
    var e = ti(t[2]);
    return n in kl ? Math.abs(e - ti(Math.max(Ma(t[0]), Ma(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
  }

  function ri(n, t, e, r) {
    function u(n) {
      return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
    }

    function i(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n)
    }

    function a(t) {
      return n(u(t))
    }

    return a.invert = function(t) {
      return i(n.invert(t))
    }, a.domain = function(t) {
      return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), a) : r
    }, a.base = function(e) {
      return arguments.length ? (t = +e, n.domain(r.map(u)), a) : t
    }, a.nice = function() {
      var t = Xu(r.map(u), e ? Math : El);
      return n.domain(t), r = t.map(i), a
    }, a.ticks = function() {
      var n = Yu(r), a = [], o = n[0], l = n[1], c = Math.floor(u(o)), s = Math.ceil(u(l)), f = t % 1 ? 2 : t;
      if (isFinite(s - c)) {
        if (e) {
          for (; s > c; c++)for (var h = 1; f > h; h++)a.push(i(c) * h);
          a.push(i(c))
        } else for (a.push(i(c)); c++ < s;)for (var h = f - 1; h > 0; h--)a.push(i(c) * h);
        for (c = 0; a[c] < o; c++);
        for (s = a.length; a[s - 1] > l; s--);
        a = a.slice(c, s)
      }
      return a
    }, a.tickFormat = function(n, e) {
      if (!arguments.length)return Nl;
      arguments.length < 2 ? e = Nl : "function" != typeof e && (e = oa.format(e));
      var r = Math.max(1, t * n / a.ticks().length);
      return function(n) {
        var a = n / i(Math.round(u(n)));
        return t - .5 > a * t && (a *= t), r >= a ? e(n) : ""
      }
    }, a.copy = function() {
      return ri(n.copy(), t, e, r)
    }, Ju(a, n)
  }

  function ui(n, t, e) {
    function r(t) {
      return n(u(t))
    }

    var u = ii(t), i = ii(1 / t);
    return r.invert = function(t) {
      return i(n.invert(t))
    }, r.domain = function(t) {
      return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
    }, r.ticks = function(n) {
      return Qu(e, n)
    }, r.tickFormat = function(n, t) {
      return ni(e, n, t)
    }, r.nice = function(n) {
      return r.domain(Gu(e, n))
    }, r.exponent = function(a) {
      return arguments.length ? (u = ii(t = a), i = ii(1 / t), n.domain(e.map(u)), r) : t
    }, r.copy = function() {
      return ui(n.copy(), t, e)
    }, Ju(r, n)
  }

  function ii(n) {
    return function(t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
    }
  }

  function ai(n, t) {
    function e(e) {
      return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : NaN)) - 1) % i.length]
    }

    function r(t, e) {
      return oa.range(n.length).map(function(n) {
        return t + e * n
      })
    }

    var u, i, a;
    return e.domain = function(r) {
      if (!arguments.length)return n;
      n = [], u = new c;
      for (var i, a = -1, o = r.length; ++a < o;)u.has(i = r[a]) || u.set(i, n.push(i));
      return e[t.t].apply(e, t.a)
    }, e.range = function(n) {
      return arguments.length ? (i = n, a = 0, t = {t: "range", a: arguments}, e) : i
    }, e.rangePoints = function(u, o) {
      arguments.length < 2 && (o = 0);
      var l = u[0], c = u[1], s = n.length < 2 ? (l = (l + c) / 2, 0) : (c - l) / (n.length - 1 + o);
      return i = r(l + s * o / 2, s), a = 0, t = {t: "rangePoints", a: arguments}, e
    }, e.rangeRoundPoints = function(u, o) {
      arguments.length < 2 && (o = 0);
      var l = u[0], c = u[1], s = n.length < 2 ? (l = c = Math.round((l + c) / 2), 0) : (c - l) / (n.length - 1 + o) | 0;
      return i = r(l + Math.round(s * o / 2 + (c - l - (n.length - 1 + o) * s) / 2), s), a = 0, t = {t: "rangeRoundPoints", a: arguments}, e
    }, e.rangeBands = function(u, o, l) {
      arguments.length < 2 && (o = 0), arguments.length < 3 && (l = o);
      var c = u[1] < u[0], s = u[c - 0], f = u[1 - c], h = (f - s) / (n.length - o + 2 * l);
      return i = r(s + h * l, h), c && i.reverse(), a = h * (1 - o), t = {t: "rangeBands", a: arguments}, e
    }, e.rangeRoundBands = function(u, o, l) {
      arguments.length < 2 && (o = 0), arguments.length < 3 && (l = o);
      var c = u[1] < u[0], s = u[c - 0], f = u[1 - c], h = Math.floor((f - s) / (n.length - o + 2 * l));
      return i = r(s + Math.round((f - s - (n.length - o) * h) / 2), h), c && i.reverse(), a = Math.round(h * (1 - o)), t = {t: "rangeRoundBands", a: arguments}, e
    }, e.rangeBand = function() {
      return a
    }, e.rangeExtent = function() {
      return Yu(t.a[0])
    }, e.copy = function() {
      return ai(n, t)
    }, e.domain(n)
  }

  function oi(n, t) {
    function i() {
      var e = 0, r = t.length;
      for (o = []; ++e < r;)o[e - 1] = oa.quantile(n, e / r);
      return a
    }

    function a(n) {
      return isNaN(n = +n) ? void 0 : t[oa.bisect(o, n)]
    }

    var o;
    return a.domain = function(t) {
      return arguments.length ? (n = t.map(r).filter(u).sort(e), i()) : n
    }, a.range = function(n) {
      return arguments.length ? (t = n, i()) : t
    }, a.quantiles = function() {
      return o
    }, a.invertExtent = function(e) {
      return e = t.indexOf(e), 0 > e ? [NaN, NaN] : [e > 0 ? o[e - 1] : n[0], e < o.length ? o[e] : n[n.length - 1]]
    }, a.copy = function() {
      return oi(n, t)
    }, i()
  }

  function li(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(a, Math.floor(i * (t - n))))]
    }

    function u() {
      return i = e.length / (t - n), a = e.length - 1, r
    }

    var i, a;
    return r.domain = function(e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
    }, r.range = function(n) {
      return arguments.length ? (e = n, u()) : e
    }, r.invertExtent = function(t) {
      return t = e.indexOf(t), t = 0 > t ? NaN : t / i + n, [t, t + 1 / i]
    }, r.copy = function() {
      return li(n, t, e)
    }, u()
  }

  function ci(n, t) {
    function e(e) {
      return e >= e ? t[oa.bisect(n, e)] : void 0
    }

    return e.domain = function(t) {
      return arguments.length ? (n = t, e) : n
    }, e.range = function(n) {
      return arguments.length ? (t = n, e) : t
    }, e.invertExtent = function(e) {
      return e = t.indexOf(e), [n[e - 1], n[e]]
    }, e.copy = function() {
      return ci(n, t)
    }, e
  }

  function si(n) {
    function t(n) {
      return +n
    }

    return t.invert = t, t.domain = t.range = function(e) {
      return arguments.length ? (n = e.map(t), t) : n
    }, t.ticks = function(t) {
      return Qu(n, t)
    }, t.tickFormat = function(t, e) {
      return ni(n, t, e)
    }, t.copy = function() {
      return si(n)
    }, t
  }

  function fi() {
    return 0
  }

  function hi(n) {
    return n.innerRadius
  }

  function gi(n) {
    return n.outerRadius
  }

  function pi(n) {
    return n.startAngle
  }

  function vi(n) {
    return n.endAngle
  }

  function di(n) {
    return n && n.padAngle
  }

  function mi(n, t, e, r) {
    return (n - e) * t - (t - r) * n > 0 ? 0 : 1
  }

  function yi(n, t, e, r, u) {
    var i = n[0] - t[0], a = n[1] - t[1], o = (u ? r : -r) / Math.sqrt(i * i + a * a), l = o * a, c = -o * i, s = n[0] + l, f = n[1] + c, h = t[0] + l, g = t[1] + c, p = (s + h) / 2, v = (f + g) / 2, d = h - s, m = g - f, y = d * d + m * m, M = e - r, x = s * g - h * f, b = (0 > m ? -1 : 1) * Math.sqrt(Math.max(0, M * M * y - x * x)), _ = (x * m - d * b) / y, w = (-x * d - m * b) / y, S = (x * m + d * b) / y, k = (-x * d + m * b) / y, N = _ - p, E = w - v, A = S - p, C = k - v;
    return N * N + E * E > A * A + C * C && (_ = S, w = k), [[_ - l, w - c], [_ * e / M, w * e / M]]
  }

  function Mi(n) {
    function t(t) {
      function a() {
        c.push("M", i(n(s), o))
      }

      for (var l, c = [], s = [], f = -1, h = t.length, g = En(e), p = En(r); ++f < h;)u.call(this, l = t[f], f) ? s.push([+g.call(this, l, f), +p.call(this, l, f)]) : s.length && (a(), s = []);
      return s.length && a(), c.length ? c.join("") : null
    }

    var e = Ce, r = ze, u = zt, i = xi, a = i.key, o = .7;
    return t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t.defined = function(n) {
      return arguments.length ? (u = n, t) : u
    }, t.interpolate = function(n) {
      return arguments.length ? (a = "function" == typeof n ? i = n : (i = Tl.get(n) || xi).key, t) : a
    }, t.tension = function(n) {
      return arguments.length ? (o = n, t) : o
    }, t
  }

  function xi(n) {
    return n.length > 1 ? n.join("L") : n + "Z"
  }

  function bi(n) {
    return n.join("L") + "Z"
  }

  function _i(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    return e > 1 && u.push("H", r[0]), u.join("")
  }

  function wi(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)u.push("V", (r = n[t])[1], "H", r[0]);
    return u.join("")
  }

  function Si(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)u.push("H", (r = n[t])[0], "V", r[1]);
    return u.join("")
  }

  function ki(n, t) {
    return n.length < 4 ? xi(n) : n[1] + Ai(n.slice(1, -1), Ci(n, t))
  }

  function Ni(n, t) {
    return n.length < 3 ? bi(n) : n[0] + Ai((n.push(n[0]), n), Ci([n[n.length - 2]].concat(n, [n[1]]), t))
  }

  function Ei(n, t) {
    return n.length < 3 ? xi(n) : n[0] + Ai(n, Ci(n, t))
  }

  function Ai(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2)return xi(n);
    var e = n.length != t.length, r = "", u = n[0], i = n[1], a = t[0], o = a, l = 1;
    if (e && (r += "Q" + (i[0] - 2 * a[0] / 3) + "," + (i[1] - 2 * a[1] / 3) + "," + i[0] + "," + i[1], u = n[1], l = 2), t.length > 1) {
      o = t[1], i = n[l], l++, r += "C" + (u[0] + a[0]) + "," + (u[1] + a[1]) + "," + (i[0] - o[0]) + "," + (i[1] - o[1]) + "," + i[0] + "," + i[1];
      for (var c = 2; c < t.length; c++, l++)i = n[l], o = t[c], r += "S" + (i[0] - o[0]) + "," + (i[1] - o[1]) + "," + i[0] + "," + i[1]
    }
    if (e) {
      var s = n[l];
      r += "Q" + (i[0] + 2 * o[0] / 3) + "," + (i[1] + 2 * o[1] / 3) + "," + s[0] + "," + s[1]
    }
    return r
  }

  function Ci(n, t) {
    for (var e, r = [], u = (1 - t) / 2, i = n[0], a = n[1], o = 1, l = n.length; ++o < l;)e = i, i = a, a = n[o], r.push([u * (a[0] - e[0]), u * (a[1] - e[1])]);
    return r
  }

  function zi(n) {
    if (n.length < 3)return xi(n);
    var t = 1, e = n.length, r = n[0], u = r[0], i = r[1], a = [u, u, u, (r = n[1])[0]], o = [i, i, i, r[1]], l = [u, ",", i, "L", Ri(Pl, a), ",", Ri(Pl, o)];
    for (n.push(n[e - 1]); ++t <= e;)r = n[t], a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), Di(l, a, o);
    return n.pop(), l.push("L", r), l.join("")
  }

  function Li(n) {
    if (n.length < 4)return xi(n);
    for (var t, e = [], r = -1, u = n.length, i = [0], a = [0]; ++r < 3;)t = n[r], i.push(t[0]), a.push(t[1]);
    for (e.push(Ri(Pl, i) + "," + Ri(Pl, a)), --r; ++r < u;)t = n[r], i.shift(), i.push(t[0]), a.shift(), a.push(t[1]), Di(e, i, a);
    return e.join("")
  }

  function qi(n) {
    for (var t, e, r = -1, u = n.length, i = u + 4, a = [], o = []; ++r < 4;)e = n[r % u], a.push(e[0]), o.push(e[1]);
    for (t = [Ri(Pl, a), ",", Ri(Pl, o)], --r; ++r < i;)e = n[r % u], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), Di(t, a, o);
    return t.join("")
  }

  function Ti(n, t) {
    var e = n.length - 1;
    if (e)for (var r, u, i = n[0][0], a = n[0][1], o = n[e][0] - i, l = n[e][1] - a, c = -1; ++c <= e;)r = n[c], u = c / e, r[0] = t * r[0] + (1 - t) * (i + u * o), r[1] = t * r[1] + (1 - t) * (a + u * l);
    return zi(n)
  }

  function Ri(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
  }

  function Di(n, t, e) {
    n.push("C", Ri(Rl, t), ",", Ri(Rl, e), ",", Ri(Dl, t), ",", Ri(Dl, e), ",", Ri(Pl, t), ",", Ri(Pl, e))
  }

  function Pi(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0])
  }

  function Ui(n) {
    for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], a = r[0] = Pi(u, i); ++t < e;)r[t] = (a + (a = Pi(u = i, i = n[t + 1]))) / 2;
    return r[t] = a, r
  }

  function ji(n) {
    for (var t, e, r, u, i = [], a = Ui(n), o = -1, l = n.length - 1; ++o < l;)t = Pi(n[o], n[o + 1]), Ma(t) < Pa ? a[o] = a[o + 1] = 0 : (e = a[o] / t, r = a[o + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), a[o] = u * e, a[o + 1] = u * r));
    for (o = -1; ++o <= l;)u = (n[Math.min(l, o + 1)][0] - n[Math.max(0, o - 1)][0]) / (6 * (1 + a[o] * a[o])), i.push([u || 0, a[o] * u || 0]);
    return i
  }

  function Fi(n) {
    return n.length < 3 ? xi(n) : n[0] + Ai(n, ji(n))
  }

  function Hi(n) {
    for (var t, e, r, u = -1, i = n.length; ++u < i;)t = n[u], e = t[0], r = t[1] - Oa, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
    return n
  }

  function Oi(n) {
    function t(t) {
      function l() {
        v.push("M", o(n(m), f), s, c(n(d.reverse()), f), "Z")
      }

      for (var h, g, p, v = [], d = [], m = [], y = -1, M = t.length, x = En(e), b = En(u), _ = e === r ? function() {
        return g
      } : En(r), w = u === i ? function() {
        return p
      } : En(i); ++y < M;)a.call(this, h = t[y], y) ? (d.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), m.push([+_.call(this, h, y), +w.call(this, h, y)])) : d.length && (l(), d = [], m = []);
      return d.length && l(), v.length ? v.join("") : null
    }

    var e = Ce, r = Ce, u = 0, i = ze, a = zt, o = xi, l = o.key, c = o, s = "L", f = .7;
    return t.x = function(n) {
      return arguments.length ? (e = r = n, t) : r
    }, t.x0 = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.x1 = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t.y = function(n) {
      return arguments.length ? (u = i = n, t) : i
    }, t.y0 = function(n) {
      return arguments.length ? (u = n, t) : u
    }, t.y1 = function(n) {
      return arguments.length ? (i = n, t) : i
    }, t.defined = function(n) {
      return arguments.length ? (a = n, t) : a
    }, t.interpolate = function(n) {
      return arguments.length ? (l = "function" == typeof n ? o = n : (o = Tl.get(n) || xi).key, c = o.reverse || o, s = o.closed ? "M" : "L", t) : l
    }, t.tension = function(n) {
      return arguments.length ? (f = n, t) : f
    }, t
  }

  function Ii(n) {
    return n.radius
  }

  function Yi(n) {
    return [n.x, n.y]
  }

  function Zi(n) {
    return function() {
      var t = n.apply(this, arguments), e = t[0], r = t[1] - Oa;
      return [e * Math.cos(r), e * Math.sin(r)]
    }
  }

  function Vi() {
    return 64
  }

  function Xi() {
    return "circle"
  }

  function $i(n) {
    var t = Math.sqrt(n / ja);
    return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
  }

  function Bi(n) {
    return function() {
      var t, e, r;
      (t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index))
    }
  }

  function Wi(n, t, e) {
    return Sa(n, Yl), n.namespace = t, n.id = e, n
  }

  function Ji(n, t, e, r) {
    var u = n.id, i = n.namespace;
    return Y(n, "function" == typeof e ? function(n, a, o) {
      n[i][u].tween.set(t, r(e.call(n, n.__data__, a, o)))
    } : (e = r(e), function(n) {
      n[i][u].tween.set(t, e)
    }))
  }

  function Gi(n) {
    return null == n && (n = ""), function() {
      this.textContent = n
    }
  }

  function Ki(n) {
    return null == n ? "__transition__" : "__transition_" + n + "__"
  }

  function Qi(n, t, e, r, u) {
    function i(n) {
      var t = v.delay;
      return s.t = t + l, n >= t ? a(n - t) : void(s.c = a)
    }

    function a(e) {
      var u = p.active, i = p[u];
      i && (i.timer.c = null, i.timer.t = NaN, --p.count, delete p[u], i.event && i.event.interrupt.call(n, n.__data__, i.index));
      for (var a in p)if (r > +a) {
        var c = p[a];
        c.timer.c = null, c.timer.t = NaN, --p.count, delete p[a]
      }
      s.c = o, qn(function() {
        return s.c && o(e || 1) && (s.c = null, s.t = NaN), 1
      }, 0, l), p.active = r, v.event && v.event.start.call(n, n.__data__, t), g = [], v.tween.forEach(function(e, r) {
        (r = r.call(n, n.__data__, t)) && g.push(r)
      }), h = v.ease, f = v.duration
    }

    function o(u) {
      for (var i = u / f, a = h(i), o = g.length; o > 0;)g[--o].call(n, a);
      return i >= 1 ? (v.event && v.event.end.call(n, n.__data__, t), --p.count ? delete p[r] : delete n[e], 1) : void 0
    }

    var l, s, f, h, g, p = n[e] || (n[e] = {active: 0, count: 0}), v = p[r];
    v || (l = u.time, s = qn(i, 0, l), v = p[r] = {tween: new c, time: l, timer: s, delay: u.delay, duration: u.duration, ease: u.ease, index: t}, u = null, ++p.count)
  }

  function na(n, t, e) {
    n.attr("transform", function(n) {
      var r = t(n);
      return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
    })
  }

  function ta(n, t, e) {
    n.attr("transform", function(n) {
      var r = t(n);
      return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
    })
  }

  function ea(n) {
    return n.toISOString()
  }

  function ra(n, t, e) {
    function r(t) {
      return n(t)
    }

    function u(n, e) {
      var r = n[1] - n[0], u = r / e, i = oa.bisect(Kl, u);
      return i == Kl.length ? [
        t.year, Ku(n.map(function(n) {
          return n / 31536e6
        }), e)[2]
      ] : i ? t[u / Kl[i - 1] < Kl[i] / u ? i - 1 : i] : [tc, Ku(n, e)[2]]
    }

    return r.invert = function(t) {
      return ua(n.invert(t))
    }, r.domain = function(t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(ua)
    }, r.nice = function(n, t) {
      function e(e) {
        return !isNaN(e) && !n.range(e, ua(+e + 1), t).length
      }

      var i = r.domain(), a = Yu(i), o = null == n ? u(a, 10) : "number" == typeof n && u(a, n);
      return o && (n = o[0], t = o[1]), r.domain(Xu(i, t > 1 ? {
        floor: function(t) {
          for (; e(t = n.floor(t));)t = ua(t - 1);
          return t
        }, ceil: function(t) {
          for (; e(t = n.ceil(t));)t = ua(+t + 1);
          return t
        }
      } : n))
    }, r.ticks = function(n, t) {
      var e = Yu(r.domain()), i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{range: n}, t];
      return i && (n = i[0], t = i[1]), n.range(e[0], ua(+e[1] + 1), 1 > t ? 1 : t)
    }, r.tickFormat = function() {
      return e
    }, r.copy = function() {
      return ra(n.copy(), t, e)
    }, Ju(r, n)
  }

  function ua(n) {
    return new Date(n)
  }

  function ia(n) {
    return JSON.parse(n.responseText)
  }

  function aa(n) {
    var t = sa.createRange();
    return t.selectNode(sa.body), t.createContextualFragment(n.responseText)
  }

  var oa = {version: "3.5.16"}, la = [].slice, ca = function(n) {
    return la.call(n)
  }, sa = this.document;
  if (sa)try {
    ca(sa.documentElement.childNodes)[0].nodeType
  } catch (fa) {
    ca = function(n) {
      for (var t = n.length, e = new Array(t); t--;)e[t] = n[t];
      return e
    }
  }
  if (Date.now || (Date.now = function() {
      return +new Date
    }), sa)try {
    sa.createElement("DIV").style.setProperty("opacity", 0, "")
  } catch (ha) {
    var ga = this.Element.prototype, pa = ga.setAttribute, va = ga.setAttributeNS, da = this.CSSStyleDeclaration.prototype, ma = da.setProperty;
    ga.setAttribute = function(n, t) {
      pa.call(this, n, t + "")
    }, ga.setAttributeNS = function(n, t, e) {
      va.call(this, n, t, e + "")
    }, da.setProperty = function(n, t, e) {
      ma.call(this, n, t + "", e)
    }
  }
  oa.ascending = e, oa.descending = function(n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
  }, oa.min = function(n, t) {
    var e, r, u = -1, i = n.length;
    if (1 === arguments.length) {
      for (; ++u < i;)if (null != (r = n[u]) && r >= r) {
        e = r;
        break
      }
      for (; ++u < i;)null != (r = n[u]) && e > r && (e = r)
    } else {
      for (; ++u < i;)if (null != (r = t.call(n, n[u], u)) && r >= r) {
        e = r;
        break
      }
      for (; ++u < i;)null != (r = t.call(n, n[u], u)) && e > r && (e = r)
    }
    return e
  }, oa.max = function(n, t) {
    var e, r, u = -1, i = n.length;
    if (1 === arguments.length) {
      for (; ++u < i;)if (null != (r = n[u]) && r >= r) {
        e = r;
        break
      }
      for (; ++u < i;)null != (r = n[u]) && r > e && (e = r)
    } else {
      for (; ++u < i;)if (null != (r = t.call(n, n[u], u)) && r >= r) {
        e = r;
        break
      }
      for (; ++u < i;)null != (r = t.call(n, n[u], u)) && r > e && (e = r)
    }
    return e
  }, oa.extent = function(n, t) {
    var e, r, u, i = -1, a = n.length;
    if (1 === arguments.length) {
      for (; ++i < a;)if (null != (r = n[i]) && r >= r) {
        e = u = r;
        break
      }
      for (; ++i < a;)null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
    } else {
      for (; ++i < a;)if (null != (r = t.call(n, n[i], i)) && r >= r) {
        e = u = r;
        break
      }
      for (; ++i < a;)null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
    }
    return [e, u]
  }, oa.sum = function(n, t) {
    var e, r = 0, i = n.length, a = -1;
    if (1 === arguments.length)for (; ++a < i;)u(e = +n[a]) && (r += e); else for (; ++a < i;)u(e = +t.call(n, n[a], a)) && (r += e);
    return r
  }, oa.mean = function(n, t) {
    var e, i = 0, a = n.length, o = -1, l = a;
    if (1 === arguments.length)for (; ++o < a;)u(e = r(n[o])) ? i += e : --l; else for (; ++o < a;)u(e = r(t.call(n, n[o], o))) ? i += e : --l;
    return l ? i / l : void 0
  }, oa.quantile = function(n, t) {
    var e = (n.length - 1) * t + 1, r = Math.floor(e), u = +n[r - 1], i = e - r;
    return i ? u + i * (n[r] - u) : u
  }, oa.median = function(n, t) {
    var i, a = [], o = n.length, l = -1;
    if (1 === arguments.length)for (; ++l < o;)u(i = r(n[l])) && a.push(i); else for (; ++l < o;)u(i = r(t.call(n, n[l], l))) && a.push(i);
    return a.length ? oa.quantile(a.sort(e), .5) : void 0
  }, oa.variance = function(n, t) {
    var e, i, a = n.length, o = 0, l = 0, c = -1, s = 0;
    if (1 === arguments.length)for (; ++c < a;)u(e = r(n[c])) && (i = e - o, o += i / ++s, l += i * (e - o)); else for (; ++c < a;)u(e = r(t.call(n, n[c], c))) && (i = e - o, o += i / ++s, l += i * (e - o));
    return s > 1 ? l / (s - 1) : void 0
  }, oa.deviation = function() {
    var n = oa.variance.apply(this, arguments);
    return n ? Math.sqrt(n) : n
  };
  var ya = i(e);
  oa.bisectLeft = ya.left, oa.bisect = oa.bisectRight = ya.right, oa.bisector = function(n) {
    return i(1 === n.length ? function(t, r) {
      return e(n(t), r)
    } : n)
  }, oa.shuffle = function(n, t, e) {
    (i = arguments.length) < 3 && (e = n.length, 2 > i && (t = 0));
    for (var r, u, i = e - t; i;)u = Math.random() * i-- | 0, r = n[i + t], n[i + t] = n[u + t], n[u + t] = r;
    return n
  }, oa.permute = function(n, t) {
    for (var e = t.length, r = new Array(e); e--;)r[e] = n[t[e]];
    return r
  }, oa.pairs = function(n) {
    for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;)i[e] = [t = u, u = n[++e]];
    return i
  }, oa.transpose = function(n) {
    if (!(u = n.length))return [];
    for (var t = -1, e = oa.min(n, a), r = new Array(e); ++t < e;)for (var u, i = -1, o = r[t] = new Array(u); ++i < u;)o[i] = n[i][t];
    return r
  }, oa.zip = function() {
    return oa.transpose(arguments)
  }, oa.keys = function(n) {
    var t = [];
    for (var e in n)t.push(e);
    return t
  }, oa.values = function(n) {
    var t = [];
    for (var e in n)t.push(n[e]);
    return t
  }, oa.entries = function(n) {
    var t = [];
    for (var e in n)t.push({key: e, value: n[e]});
    return t
  }, oa.merge = function(n) {
    for (var t, e, r, u = n.length, i = -1, a = 0; ++i < u;)a += n[i].length;
    for (e = new Array(a); --u >= 0;)for (r = n[u], t = r.length; --t >= 0;)e[--a] = r[t];
    return e
  };
  var Ma = Math.abs;
  oa.range = function(n, t, e) {
    if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e === 1 / 0)throw new Error("infinite range");
    var r, u = [], i = o(Ma(e)), a = -1;
    if (n *= i, t *= i, e *= i, 0 > e)for (; (r = n + e * ++a) > t;)u.push(r / i); else for (; (r = n + e * ++a) < t;)u.push(r / i);
    return u
  }, oa.map = function(n, t) {
    var e = new c;
    if (n instanceof c)n.forEach(function(n, t) {
      e.set(n, t)
    }); else if (Array.isArray(n)) {
      var r, u = -1, i = n.length;
      if (1 === arguments.length)for (; ++u < i;)e.set(u, n[u]); else for (; ++u < i;)e.set(t.call(n, r = n[u], u), r)
    } else for (var a in n)e.set(a, n[a]);
    return e
  };
  var xa = "__proto__", ba = "\x00";
  l(c, {
    has: h, get: function(n) {
      return this._[s(n)]
    }, set: function(n, t) {
      return this._[s(n)] = t
    }, remove: g, keys: p, values: function() {
      var n = [];
      for (var t in this._)n.push(this._[t]);
      return n
    }, entries: function() {
      var n = [];
      for (var t in this._)n.push({key: f(t), value: this._[t]});
      return n
    }, size: v, empty: d, forEach: function(n) {
      for (var t in this._)n.call(this, f(t), this._[t])
    }
  }), oa.nest = function() {
    function n(t, a, o) {
      if (o >= i.length)return r ? r.call(u, a) : e ? a.sort(e) : a;
      for (var l, s, f, h, g = -1, p = a.length, v = i[o++], d = new c; ++g < p;)(h = d.get(l = v(s = a[g]))) ? h.push(s) : d.set(l, [s]);
      return t ? (s = t(), f = function(e, r) {
        s.set(e, n(t, r, o))
      }) : (s = {}, f = function(e, r) {
        s[e] = n(t, r, o)
      }), d.forEach(f), s
    }

    function t(n, e) {
      if (e >= i.length)return n;
      var r = [], u = a[e++];
      return n.forEach(function(n, u) {
        r.push({key: n, values: t(u, e)})
      }), u ? r.sort(function(n, t) {
        return u(n.key, t.key)
      }) : r
    }

    var e, r, u = {}, i = [], a = [];
    return u.map = function(t, e) {
      return n(e, t, 0)
    }, u.entries = function(e) {
      return t(n(oa.map, e, 0), 0)
    }, u.key = function(n) {
      return i.push(n), u
    }, u.sortKeys = function(n) {
      return a[i.length - 1] = n, u
    }, u.sortValues = function(n) {
      return e = n, u
    }, u.rollup = function(n) {
      return r = n, u
    }, u
  }, oa.set = function(n) {
    var t = new m;
    if (n)for (var e = 0, r = n.length; r > e; ++e)t.add(n[e]);
    return t
  }, l(m, {
    has: h, add: function(n) {
      return this._[s(n += "")] = !0, n
    }, remove: g, values: p, size: v, empty: d, forEach: function(n) {
      for (var t in this._)n.call(this, f(t))
    }
  }), oa.behavior = {}, oa.rebind = function(n, t) {
    for (var e, r = 1, u = arguments.length; ++r < u;)n[e = arguments[r]] = M(n, t, t[e]);
    return n
  };
  var _a = ["webkit", "ms", "moz", "Moz", "o", "O"];
  oa.dispatch = function() {
    for (var n = new _, t = -1, e = arguments.length; ++t < e;)n[arguments[t]] = w(n);
    return n
  }, _.prototype.on = function(n, t) {
    var e = n.indexOf("."), r = "";
    if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n)return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
    if (2 === arguments.length) {
      if (null == t)for (n in this)this.hasOwnProperty(n) && this[n].on(r, null);
      return this
    }
  }, oa.event = null, oa.requote = function(n) {
    return n.replace(wa, "\\$&")
  };
  var wa = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, Sa = {}.__proto__ ? function(n, t) {
    n.__proto__ = t
  } : function(n, t) {
    for (var e in t)n[e] = t[e]
  }, ka = function(n, t) {
    return t.querySelector(n)
  }, Na = function(n, t) {
    return t.querySelectorAll(n)
  }, Ea = function(n, t) {
    var e = n.matches || n[x(n, "matchesSelector")];
    return (Ea = function(n, t) {
      return e.call(n, t)
    })(n, t)
  };
  "function" == typeof Sizzle && (ka = function(n, t) {
    return Sizzle(n, t)[0] || null
  }, Na = Sizzle, Ea = Sizzle.matchesSelector), oa.selection = function() {
    return oa.select(sa.documentElement)
  };
  var Aa = oa.selection.prototype = [];
  Aa.select = function(n) {
    var t, e, r, u, i = [];
    n = A(n);
    for (var a = -1, o = this.length; ++a < o;) {
      i.push(t = []), t.parentNode = (r = this[a]).parentNode;
      for (var l = -1, c = r.length; ++l < c;)(u = r[l]) ? (t.push(e = n.call(u, u.__data__, l, a)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
    }
    return E(i)
  }, Aa.selectAll = function(n) {
    var t, e, r = [];
    n = C(n);
    for (var u = -1, i = this.length; ++u < i;)for (var a = this[u], o = -1, l = a.length; ++o < l;)(e = a[o]) && (r.push(t = ca(n.call(e, e.__data__, o, u))), t.parentNode = e);
    return E(r)
  };
  var Ca = "http://www.w3.org/1999/xhtml", za = {svg: "http://www.w3.org/2000/svg", xhtml: Ca, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"};
  oa.ns = {
    prefix: za, qualify: function(n) {
      var t = n.indexOf(":"), e = n;
      return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), za.hasOwnProperty(e) ? {space: za[e], local: n} : n
    }
  }, Aa.attr = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();
        return n = oa.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
      }
      for (t in n)this.each(z(t, n[t]));
      return this
    }
    return this.each(z(n, t))
  }, Aa.classed = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(), r = (n = T(n)).length, u = -1;
        if (t = e.classList) {
          for (; ++u < r;)if (!t.contains(n[u]))return !1
        } else for (t = e.getAttribute("class"); ++u < r;)if (!q(n[u]).test(t))return !1;
        return !0
      }
      for (t in n)this.each(R(t, n[t]));
      return this
    }
    return this.each(R(n, t))
  }, Aa.style = function(n, e, r) {
    var u = arguments.length;
    if (3 > u) {
      if ("string" != typeof n) {
        2 > u && (e = "");
        for (r in n)this.each(P(r, n[r], e));
        return this
      }
      if (2 > u) {
        var i = this.node();
        return t(i).getComputedStyle(i, null).getPropertyValue(n)
      }
      r = ""
    }
    return this.each(P(n, e, r))
  }, Aa.property = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n)return this.node()[n];
      for (t in n)this.each(U(t, n[t]));
      return this
    }
    return this.each(U(n, t))
  }, Aa.text = function(n) {
    return arguments.length ? this.each("function" == typeof n ? function() {
      var t = n.apply(this, arguments);
      this.textContent = null == t ? "" : t
    } : null == n ? function() {
      this.textContent = ""
    } : function() {
      this.textContent = n
    }) : this.node().textContent
  }, Aa.html = function(n) {
    return arguments.length ? this.each("function" == typeof n ? function() {
      var t = n.apply(this, arguments);
      this.innerHTML = null == t ? "" : t
    } : null == n ? function() {
      this.innerHTML = ""
    } : function() {
      this.innerHTML = n
    }) : this.node().innerHTML
  }, Aa.append = function(n) {
    return n = j(n), this.select(function() {
      return this.appendChild(n.apply(this, arguments))
    })
  }, Aa.insert = function(n, t) {
    return n = j(n), t = A(t), this.select(function() {
      return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
    })
  }, Aa.remove = function() {
    return this.each(F)
  }, Aa.data = function(n, t) {
    function e(n, e) {
      var r, u, i, a = n.length, f = e.length, h = Math.min(a, f), g = new Array(f), p = new Array(f), v = new Array(a);
      if (t) {
        var d, m = new c, y = new Array(a);
        for (r = -1; ++r < a;)(u = n[r]) && (m.has(d = t.call(u, u.__data__, r)) ? v[r] = u : m.set(d, u), y[r] = d);
        for (r = -1; ++r < f;)(u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (g[r] = u, u.__data__ = i) : p[r] = H(i), m.set(d, !0);
        for (r = -1; ++r < a;)r in y && m.get(y[r]) !== !0 && (v[r] = n[r])
      } else {
        for (r = -1; ++r < h;)u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = H(i);
        for (; f > r; ++r)p[r] = H(e[r]);
        for (; a > r; ++r)v[r] = n[r]
      }
      p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, o.push(p), l.push(g), s.push(v)
    }

    var r, u, i = -1, a = this.length;
    if (!arguments.length) {
      for (n = new Array(a = (r = this[0]).length); ++i < a;)(u = r[i]) && (n[i] = u.__data__);
      return n
    }
    var o = Z([]), l = E([]), s = E([]);
    if ("function" == typeof n)for (; ++i < a;)e(r = this[i], n.call(r, r.parentNode.__data__, i)); else for (; ++i < a;)e(r = this[i], n);
    return l.enter = function() {
      return o
    }, l.exit = function() {
      return s
    }, l
  }, Aa.datum = function(n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__")
  }, Aa.filter = function(n) {
    var t, e, r, u = [];
    "function" != typeof n && (n = O(n));
    for (var i = 0, a = this.length; a > i; i++) {
      u.push(t = []), t.parentNode = (e = this[i]).parentNode;
      for (var o = 0, l = e.length; l > o; o++)(r = e[o]) && n.call(r, r.__data__, o, i) && t.push(r)
    }
    return E(u)
  }, Aa.order = function() {
    for (var n = -1, t = this.length; ++n < t;)for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
    return this
  }, Aa.sort = function(n) {
    n = I.apply(this, arguments);
    for (var t = -1, e = this.length; ++t < e;)this[t].sort(n);
    return this.order()
  }, Aa.each = function(n) {
    return Y(this, function(t, e, r) {
      n.call(t, t.__data__, e, r)
    })
  }, Aa.call = function(n) {
    var t = ca(arguments);
    return n.apply(t[0] = this, t), this
  }, Aa.empty = function() {
    return !this.node()
  }, Aa.node = function() {
    for (var n = 0, t = this.length; t > n; n++)for (var e = this[n], r = 0, u = e.length; u > r; r++) {
      var i = e[r];
      if (i)return i
    }
    return null
  }, Aa.size = function() {
    var n = 0;
    return Y(this, function() {
      ++n
    }), n
  };
  var La = [];
  oa.selection.enter = Z, oa.selection.enter.prototype = La, La.append = Aa.append, La.empty = Aa.empty, La.node = Aa.node, La.call = Aa.call, La.size = Aa.size, La.select = function(n) {
    for (var t, e, r, u, i, a = [], o = -1, l = this.length; ++o < l;) {
      r = (u = this[o]).update, a.push(t = []), t.parentNode = u.parentNode;
      for (var c = -1, s = u.length; ++c < s;)(i = u[c]) ? (t.push(r[c] = e = n.call(u.parentNode, i.__data__, c, o)), e.__data__ = i.__data__) : t.push(null)
    }
    return E(a)
  }, La.insert = function(n, t) {
    return arguments.length < 2 && (t = V(this)), Aa.insert.call(this, n, t)
  }, oa.select = function(t) {
    var e;
    return "string" == typeof t ? (e = [ka(t, sa)], e.parentNode = sa.documentElement) : (e = [t], e.parentNode = n(t)), E([e])
  }, oa.selectAll = function(n) {
    var t;
    return "string" == typeof n ? (t = ca(Na(n, sa)), t.parentNode = sa.documentElement) : (t = ca(n), t.parentNode = null), E([t])
  }, Aa.on = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);
        for (e in n)this.each(X(e, n[e], t));
        return this
      }
      if (2 > r)return (r = this.node()["__on" + n]) && r._;
      e = !1
    }
    return this.each(X(n, t, e))
  };
  var qa = oa.map({mouseenter: "mouseover", mouseleave: "mouseout"});
  sa && qa.forEach(function(n) {
    "on" + n in sa && qa.remove(n)
  });
  var Ta, Ra = 0;
  oa.mouse = function(n) {
    return J(n, k())
  };
  var Da = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  oa.touch = function(n, t, e) {
    if (arguments.length < 3 && (e = t, t = k().changedTouches), t)for (var r, u = 0, i = t.length; i > u; ++u)if ((r = t[u]).identifier === e)return J(n, r)
  }, oa.behavior.drag = function() {
    function n() {
      this.on("mousedown.drag", i).on("touchstart.drag", a)
    }

    function e(n, t, e, i, a) {
      return function() {
        function o() {
          var n, e, r = t(h, v);
          r && (n = r[0] - M[0], e = r[1] - M[1], p |= n | e, M = r, g({type: "drag", x: r[0] + c[0], y: r[1] + c[1], dx: n, dy: e}))
        }

        function l() {
          t(h, v) && (m.on(i + d, null).on(a + d, null), y(p), g({type: "dragend"}))
        }

        var c, s = this, f = oa.event.target.correspondingElement || oa.event.target, h = s.parentNode, g = r.of(s, arguments), p = 0, v = n(), d = ".drag" + (null == v ? "" : "-" + v), m = oa.select(e(f)).on(i + d, o).on(a + d, l), y = W(f), M = t(h, v);
        u ? (c = u.apply(s, arguments), c = [c.x - M[0], c.y - M[1]]) : c = [0, 0], g({type: "dragstart"})
      }
    }

    var r = N(n, "drag", "dragstart", "dragend"), u = null, i = e(b, oa.mouse, t, "mousemove", "mouseup"), a = e(G, oa.touch, y, "touchmove", "touchend");
    return n.origin = function(t) {
      return arguments.length ? (u = t, n) : u
    }, oa.rebind(n, r, "on")
  }, oa.touches = function(n, t) {
    return arguments.length < 2 && (t = k().touches), t ? ca(t).map(function(t) {
      var e = J(n, t);
      return e.identifier = t.identifier, e
    }) : []
  };
  var Pa = 1e-6, Ua = Pa * Pa, ja = Math.PI, Fa = 2 * ja, Ha = Fa - Pa, Oa = ja / 2, Ia = ja / 180, Ya = 180 / ja, Za = Math.SQRT2, Va = 2, Xa = 4;
  oa.interpolateZoom = function(n, t) {
    var e, r, u = n[0], i = n[1], a = n[2], o = t[0], l = t[1], c = t[2], s = o - u, f = l - i, h = s * s + f * f;
    if (Ua > h)r = Math.log(c / a) / Za, e = function(n) {
      return [u + n * s, i + n * f, a * Math.exp(Za * n * r)]
    }; else {
      var g = Math.sqrt(h), p = (c * c - a * a + Xa * h) / (2 * a * Va * g), v = (c * c - a * a - Xa * h) / (2 * c * Va * g), d = Math.log(Math.sqrt(p * p + 1) - p), m = Math.log(Math.sqrt(v * v + 1) - v);
      r = (m - d) / Za, e = function(n) {
        var t = n * r, e = rn(d), o = a / (Va * g) * (e * un(Za * t + d) - en(d));
        return [u + o * s, i + o * f, a * e / rn(Za * t + d)]
      }
    }
    return e.duration = 1e3 * r, e
  }, oa.behavior.zoom = function() {
    function n(n) {
      n.on(L, f).on(Ba + ".zoom", g).on("dblclick.zoom", p).on(R, h)
    }

    function e(n) {
      return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k]
    }

    function r(n) {
      return [n[0] * k.k + k.x, n[1] * k.k + k.y]
    }

    function u(n) {
      k.k = Math.max(A[0], Math.min(A[1], n))
    }

    function i(n, t) {
      t = r(t), k.x += n[0] - t[0], k.y += n[1] - t[1]
    }

    function a(t, e, r, a) {
      t.__chart__ = {x: k.x, y: k.y, k: k.k}, u(Math.pow(2, a)), i(d = e, r), t = oa.select(t), C > 0 && (t = t.transition().duration(C)), t.call(n.event)
    }

    function o() {
      b && b.domain(x.range().map(function(n) {
        return (n - k.x) / k.k
      }).map(x.invert)), w && w.domain(_.range().map(function(n) {
        return (n - k.y) / k.k
      }).map(_.invert))
    }

    function l(n) {
      z++ || n({type: "zoomstart"})
    }

    function c(n) {
      o(), n({type: "zoom", scale: k.k, translate: [k.x, k.y]})
    }

    function s(n) {
      --z || (n({type: "zoomend"}), d = null)
    }

    function f() {
      function n() {
        o = 1, i(oa.mouse(u), h), c(a)
      }

      function r() {
        f.on(q, null).on(T, null), g(o), s(a)
      }

      var u = this, a = D.of(u, arguments), o = 0, f = oa.select(t(u)).on(q, n).on(T, r), h = e(oa.mouse(u)), g = W(u);
      Il.call(u), l(a)
    }

    function h() {
      function n() {
        var n = oa.touches(p);
        return g = k.k, n.forEach(function(n) {
          n.identifier in d && (d[n.identifier] = e(n))
        }), n
      }

      function t() {
        var t = oa.event.target;
        oa.select(t).on(x, r).on(b, o), _.push(t);
        for (var e = oa.event.changedTouches, u = 0, i = e.length; i > u; ++u)d[e[u].identifier] = null;
        var l = n(), c = Date.now();
        if (1 === l.length) {
          if (500 > c - M) {
            var s = l[0];
            a(p, s, d[s.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), S()
          }
          M = c
        } else if (l.length > 1) {
          var s = l[0], f = l[1], h = s[0] - f[0], g = s[1] - f[1];
          m = h * h + g * g
        }
      }

      function r() {
        var n, t, e, r, a = oa.touches(p);
        Il.call(p);
        for (var o = 0, l = a.length; l > o; ++o, r = null)if (e = a[o], r = d[e.identifier]) {
          if (t)break;
          n = e, t = r
        }
        if (r) {
          var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s, f = m && Math.sqrt(s / m);
          n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2], u(f * g)
        }
        M = null, i(n, t), c(v)
      }

      function o() {
        if (oa.event.touches.length) {
          for (var t = oa.event.changedTouches, e = 0, r = t.length; r > e; ++e)delete d[t[e].identifier];
          for (var u in d)return void n()
        }
        oa.selectAll(_).on(y, null), w.on(L, f).on(R, h), N(), s(v)
      }

      var g, p = this, v = D.of(p, arguments), d = {}, m = 0, y = ".zoom-" + oa.event.changedTouches[0].identifier, x = "touchmove" + y, b = "touchend" + y, _ = [], w = oa.select(p), N = W(p);
      t(), l(v), w.on(L, null).on(R, t)
    }

    function g() {
      var n = D.of(this, arguments);
      y ? clearTimeout(y) : (Il.call(this), v = e(d = m || oa.mouse(this)), l(n)), y = setTimeout(function() {
        y = null, s(n)
      }, 50), S(), u(Math.pow(2, .002 * $a()) * k.k), i(d, v), c(n)
    }

    function p() {
      var n = oa.mouse(this), t = Math.log(k.k) / Math.LN2;
      a(this, n, e(n), oa.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1)
    }

    var v, d, m, y, M, x, b, _, w, k = {x: 0, y: 0, k: 1}, E = [960, 500], A = Wa, C = 250, z = 0, L = "mousedown.zoom", q = "mousemove.zoom", T = "mouseup.zoom", R = "touchstart.zoom", D = N(n, "zoomstart", "zoom", "zoomend");
    return Ba || (Ba = "onwheel" in sa ? ($a = function() {
      return -oa.event.deltaY * (oa.event.deltaMode ? 120 : 1)
    }, "wheel") : "onmousewheel" in sa ? ($a = function() {
      return oa.event.wheelDelta
    }, "mousewheel") : ($a = function() {
      return -oa.event.detail
    }, "MozMousePixelScroll")), n.event = function(n) {
      n.each(function() {
        var n = D.of(this, arguments), t = k;
        Hl ? oa.select(this).transition().each("start.zoom", function() {
          k = this.__chart__ || {x: 0, y: 0, k: 1}, l(n)
        }).tween("zoom:zoom", function() {
          var e = E[0], r = E[1], u = d ? d[0] : e / 2, i = d ? d[1] : r / 2, a = oa.interpolateZoom([(u - k.x) / k.k, (i - k.y) / k.k, e / k.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
          return function(t) {
            var r = a(t), o = e / r[2];
            this.__chart__ = k = {x: u - r[0] * o, y: i - r[1] * o, k: o}, c(n)
          }
        }).each("interrupt.zoom", function() {
          s(n)
        }).each("end.zoom", function() {
          s(n)
        }) : (this.__chart__ = k, l(n), c(n), s(n))
      })
    }, n.translate = function(t) {
      return arguments.length ? (k = {x: +t[0], y: +t[1], k: k.k}, o(), n) : [k.x, k.y]
    }, n.scale = function(t) {
      return arguments.length ? (k = {x: k.x, y: k.y, k: null}, u(+t), o(), n) : k.k
    }, n.scaleExtent = function(t) {
      return arguments.length ? (A = null == t ? Wa : [+t[0], +t[1]], n) : A
    }, n.center = function(t) {
      return arguments.length ? (m = t && [+t[0], +t[1]], n) : m
    }, n.size = function(t) {
      return arguments.length ? (E = t && [+t[0], +t[1]], n) : E
    }, n.duration = function(t) {
      return arguments.length ? (C = +t, n) : C
    }, n.x = function(t) {
      return arguments.length ? (b = t, x = t.copy(), k = {x: 0, y: 0, k: 1}, n) : b
    }, n.y = function(t) {
      return arguments.length ? (w = t, _ = t.copy(), k = {x: 0, y: 0, k: 1}, n) : w
    }, oa.rebind(n, D, "on")
  };
  var $a, Ba, Wa = [0, 1 / 0];
  oa.color = on, on.prototype.toString = function() {
    return this.rgb() + ""
  }, oa.hsl = ln;
  var Ja = ln.prototype = new on;
  Ja.brighter = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, this.l / n)
  }, Ja.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, n * this.l)
  }, Ja.rgb = function() {
    return cn(this.h, this.s, this.l)
  }, oa.hcl = sn;
  var Ga = sn.prototype = new on;
  Ga.brighter = function(n) {
    return new sn(this.h, this.c, Math.min(100, this.l + Ka * (arguments.length ? n : 1)))
  }, Ga.darker = function(n) {
    return new sn(this.h, this.c, Math.max(0, this.l - Ka * (arguments.length ? n : 1)))
  }, Ga.rgb = function() {
    return fn(this.h, this.c, this.l).rgb()
  }, oa.lab = hn;
  var Ka = 18, Qa = .95047, no = 1, to = 1.08883, eo = hn.prototype = new on;
  eo.brighter = function(n) {
    return new hn(Math.min(100, this.l + Ka * (arguments.length ? n : 1)), this.a, this.b)
  }, eo.darker = function(n) {
    return new hn(Math.max(0, this.l - Ka * (arguments.length ? n : 1)), this.a, this.b)
  }, eo.rgb = function() {
    return gn(this.l, this.a, this.b)
  }, oa.rgb = yn;
  var ro = yn.prototype = new on;
  ro.brighter = function(n) {
    n = Math.pow(.7, arguments.length ? n : 1);
    var t = this.r, e = this.g, r = this.b, u = 30;
    return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new yn(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new yn(u, u, u)
  }, ro.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new yn(n * this.r, n * this.g, n * this.b)
  }, ro.hsl = function() {
    return wn(this.r, this.g, this.b)
  }, ro.toString = function() {
    return "#" + bn(this.r) + bn(this.g) + bn(this.b)
  };
  var uo = oa.map({aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074});
  uo.forEach(function(n, t) {
    uo.set(n, Mn(t))
  }), oa.functor = En, oa.xhr = An(y), oa.dsv = function(n, t) {
    function e(n, e, i) {
      arguments.length < 3 && (i = e, e = null);
      var a = Cn(n, t, null == e ? r : u(e), i);
      return a.row = function(n) {
        return arguments.length ? a.response(null == (e = n) ? r : u(n)) : e
      }, a
    }

    function r(n) {
      return e.parse(n.responseText)
    }

    function u(n) {
      return function(t) {
        return e.parse(t.responseText, n)
      }
    }

    function i(t) {
      return t.map(a).join(n)
    }

    function a(n) {
      return o.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
    }

    var o = new RegExp('["' + n + "\n]"), l = n.charCodeAt(0);
    return e.parse = function(n, t) {
      var r;
      return e.parseRows(n, function(n, e) {
        if (r)return r(n, e - 1);
        var u = new Function("d", "return {" + n.map(function(n, t) {
            return JSON.stringify(n) + ": d[" + t + "]"
          }).join(",") + "}");
        r = t ? function(n, e) {
          return t(u(n), e)
        } : u
      })
    }, e.parseRows = function(n, t) {
      function e() {
        if (s >= c)return a;
        if (u)return u = !1, i;
        var t = s;
        if (34 === n.charCodeAt(t)) {
          for (var e = t; e++ < c;)if (34 === n.charCodeAt(e)) {
            if (34 !== n.charCodeAt(e + 1))break;
            ++e
          }
          s = e + 2;
          var r = n.charCodeAt(e + 1);
          return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.slice(t + 1, e).replace(/""/g, '"')
        }
        for (; c > s;) {
          var r = n.charCodeAt(s++), o = 1;
          if (10 === r)u = !0; else if (13 === r)u = !0, 10 === n.charCodeAt(s) && (++s, ++o); else if (r !== l)continue;
          return n.slice(t, s - o)
        }
        return n.slice(t)
      }

      for (var r, u, i = {}, a = {}, o = [], c = n.length, s = 0, f = 0; (r = e()) !== a;) {
        for (var h = []; r !== i && r !== a;)h.push(r), r = e();
        t && null == (h = t(h, f++)) || o.push(h)
      }
      return o
    }, e.format = function(t) {
      if (Array.isArray(t[0]))return e.formatRows(t);
      var r = new m, u = [];
      return t.forEach(function(n) {
        for (var t in n)r.has(t) || u.push(r.add(t))
      }), [u.map(a).join(n)].concat(t.map(function(t) {
        return u.map(function(n) {
          return a(t[n])
        }).join(n)
      })).join("\n")
    }, e.formatRows = function(n) {
      return n.map(i).join("\n")
    }, e
  }, oa.csv = oa.dsv(",", "text/csv"), oa.tsv = oa.dsv("	", "text/tab-separated-values");
  var io, ao, oo, lo, co = this[x(this, "requestAnimationFrame")] || function(n) {
      setTimeout(n, 17)
    };
  oa.timer = function() {
    qn.apply(this, arguments)
  }, oa.timer.flush = function() {
    Rn(), Dn()
  }, oa.round = function(n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
  };
  var so = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Un);
  oa.formatPrefix = function(n, t) {
    var e = 0;
    return (n = +n) && (0 > n && (n *= -1), t && (n = oa.round(n, Pn(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), so[8 + e / 3]
  };
  var fo = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, ho = oa.map({
    b: function(n) {
      return n.toString(2)
    }, c: function(n) {
      return String.fromCharCode(n)
    }, o: function(n) {
      return n.toString(8)
    }, x: function(n) {
      return n.toString(16)
    }, X: function(n) {
      return n.toString(16).toUpperCase()
    }, g: function(n, t) {
      return n.toPrecision(t)
    }, e: function(n, t) {
      return n.toExponential(t)
    }, f: function(n, t) {
      return n.toFixed(t)
    }, r: function(n, t) {
      return (n = oa.round(n, Pn(n, t))).toFixed(Math.max(0, Math.min(20, Pn(n * (1 + 1e-15), t))))
    }
  }), go = oa.time = {}, po = Date;
  Hn.prototype = {
    getDate: function() {
      return this._.getUTCDate()
    }, getDay: function() {
      return this._.getUTCDay()
    }, getFullYear: function() {
      return this._.getUTCFullYear()
    }, getHours: function() {
      return this._.getUTCHours()
    }, getMilliseconds: function() {
      return this._.getUTCMilliseconds()
    }, getMinutes: function() {
      return this._.getUTCMinutes()
    }, getMonth: function() {
      return this._.getUTCMonth()
    }, getSeconds: function() {
      return this._.getUTCSeconds()
    }, getTime: function() {
      return this._.getTime()
    }, getTimezoneOffset: function() {
      return 0
    }, valueOf: function() {
      return this._.valueOf()
    }, setDate: function() {
      vo.setUTCDate.apply(this._, arguments)
    }, setDay: function() {
      vo.setUTCDay.apply(this._, arguments)
    }, setFullYear: function() {
      vo.setUTCFullYear.apply(this._, arguments)
    }, setHours: function() {
      vo.setUTCHours.apply(this._, arguments)
    }, setMilliseconds: function() {
      vo.setUTCMilliseconds.apply(this._, arguments)
    }, setMinutes: function() {
      vo.setUTCMinutes.apply(this._, arguments)
    }, setMonth: function() {
      vo.setUTCMonth.apply(this._, arguments)
    }, setSeconds: function() {
      vo.setUTCSeconds.apply(this._, arguments)
    }, setTime: function() {
      vo.setTime.apply(this._, arguments)
    }
  };
  var vo = Date.prototype;
  go.year = On(function(n) {
    return n = go.day(n), n.setMonth(0, 1), n
  }, function(n, t) {
    n.setFullYear(n.getFullYear() + t)
  }, function(n) {
    return n.getFullYear()
  }), go.years = go.year.range, go.years.utc = go.year.utc.range, go.day = On(function(n) {
    var t = new po(2e3, 0);
    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
  }, function(n, t) {
    n.setDate(n.getDate() + t)
  }, function(n) {
    return n.getDate() - 1
  }), go.days = go.day.range, go.days.utc = go.day.utc.range, go.dayOfYear = function(n) {
    var t = go.year(n);
    return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
  }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
    t = 7 - t;
    var e = go[n] = On(function(n) {
      return (n = go.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
    }, function(n, t) {
      n.setDate(n.getDate() + 7 * Math.floor(t))
    }, function(n) {
      var e = go.year(n).getDay();
      return Math.floor((go.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
    });
    go[n + "s"] = e.range, go[n + "s"].utc = e.utc.range, go[n + "OfYear"] = function(n) {
      var e = go.year(n).getDay();
      return Math.floor((go.dayOfYear(n) + (e + t) % 7) / 7)
    }
  }), go.week = go.sunday, go.weeks = go.sunday.range, go.weeks.utc = go.sunday.utc.range, go.weekOfYear = go.sundayOfYear;
  var mo = {"-": "", _: " ", 0: "0"}, yo = /^\s*\d+/, Mo = /^%/;
  oa.locale = function(n) {
    return {numberFormat: jn(n), timeFormat: Yn(n)}
  };
  var xo = oa.locale({
    decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  oa.format = xo.numberFormat, oa.geo = {}, st.prototype = {
    s: 0, t: 0, add: function(n) {
      ft(n, this.t, bo), ft(bo.s, this.s, this), this.s ? this.t += bo.t : this.s = bo.t
    }, reset: function() {
      this.s = this.t = 0
    }, valueOf: function() {
      return this.s
    }
  };
  var bo = new st;
  oa.geo.stream = function(n, t) {
    n && _o.hasOwnProperty(n.type) ? _o[n.type](n, t) : ht(n, t)
  };
  var _o = {
    Feature: function(n, t) {
      ht(n.geometry, t)
    }, FeatureCollection: function(n, t) {
      for (var e = n.features, r = -1, u = e.length; ++r < u;)ht(e[r].geometry, t)
    }
  }, wo = {
    Sphere: function(n, t) {
      t.sphere()
    }, Point: function(n, t) {
      n = n.coordinates, t.point(n[0], n[1], n[2])
    }, MultiPoint: function(n, t) {
      for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)n = e[r], t.point(n[0], n[1], n[2])
    }, LineString: function(n, t) {
      gt(n.coordinates, t, 0)
    }, MultiLineString: function(n, t) {
      for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)gt(e[r], t, 0)
    }, Polygon: function(n, t) {
      pt(n.coordinates, t)
    }, MultiPolygon: function(n, t) {
      for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)pt(e[r], t)
    }, GeometryCollection: function(n, t) {
      for (var e = n.geometries, r = -1, u = e.length; ++r < u;)ht(e[r], t)
    }
  };
  oa.geo.area = function(n) {
    return So = 0, oa.geo.stream(n, No), So
  };
  var So, ko = new st, No = {
    sphere: function() {
      So += 4 * ja
    }, point: b, lineStart: b, lineEnd: b, polygonStart: function() {
      ko.reset(), No.lineStart = vt
    }, polygonEnd: function() {
      var n = 2 * ko;
      So += 0 > n ? 4 * ja + n : n, No.lineStart = No.lineEnd = No.point = b
    }
  };
  oa.geo.bounds = function() {
    function n(n, t) {
      M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
    }

    function t(t, e) {
      var r = dt([t * Ia, e * Ia]);
      if (m) {
        var u = yt(m, r), i = [u[1], -u[0], 0], a = yt(i, u);
        bt(a), a = _t(a);
        var l = t - p, c = l > 0 ? 1 : -1, v = a[0] * Ya * c, d = Ma(l) > 180;
        if (d ^ (v > c * p && c * t > v)) {
          var y = a[1] * Ya;
          y > g && (g = y)
        } else if (v = (v + 360) % 360 - 180, d ^ (v > c * p && c * t > v)) {
          var y = -a[1] * Ya;
          f > y && (f = y)
        } else f > e && (f = e), e > g && (g = e);
        d ? p > t ? o(s, t) > o(s, h) && (h = t) : o(t, h) > o(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? o(s, t) > o(s, h) && (h = t) : o(t, h) > o(s, h) && (s = t)
      } else n(t, e);
      m = r, p = t
    }

    function e() {
      b.point = t
    }

    function r() {
      x[0] = s, x[1] = h, b.point = n, m = null
    }

    function u(n, e) {
      if (m) {
        var r = n - p;
        y += Ma(r) > 180 ? r + (r > 0 ? 360 : -360) : r
      } else v = n, d = e;
      No.point(n, e), t(n, e)
    }

    function i() {
      No.lineStart()
    }

    function a() {
      u(v, d), No.lineEnd(), Ma(y) > Pa && (s = -(h = 180)), x[0] = s, x[1] = h, m = null
    }

    function o(n, t) {
      return (t -= n) < 0 ? t + 360 : t
    }

    function l(n, t) {
      return n[0] - t[0]
    }

    function c(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }

    var s, f, h, g, p, v, d, m, y, M, x, b = {
      point: n, lineStart: e, lineEnd: r, polygonStart: function() {
        b.point = u, b.lineStart = i, b.lineEnd = a, y = 0, No.polygonStart()
      }, polygonEnd: function() {
        No.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > ko ? (s = -(h = 180), f = -(g = 90)) : y > Pa ? g = 90 : -Pa > y && (f = -90), x[0] = s, x[1] = h
      }
    };
    return function(n) {
      g = h = -(s = f = 1 / 0), M = [], oa.geo.stream(n, b);
      var t = M.length;
      if (t) {
        M.sort(l);
        for (var e, r = 1, u = M[0], i = [u]; t > r; ++r)e = M[r], c(e[0], u) || c(e[1], u) ? (o(u[0], e[1]) > o(u[0], u[1]) && (u[1] = e[1]), o(e[0], u[1]) > o(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
        for (var a, e, p = -(1 / 0), t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r)e = i[r], (a = o(u[1], e[0])) > p && (p = a, s = e[0], h = u[1])
      }
      return M = x = null, s === 1 / 0 || f === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[s, f], [h, g]]
    }
  }(), oa.geo.centroid = function(n) {
    Eo = Ao = Co = zo = Lo = qo = To = Ro = Do = Po = Uo = 0, oa.geo.stream(n, jo);
    var t = Do, e = Po, r = Uo, u = t * t + e * e + r * r;
    return Ua > u && (t = qo, e = To, r = Ro, Pa > Ao && (t = Co, e = zo, r = Lo), u = t * t + e * e + r * r, Ua > u) ? [NaN, NaN] : [Math.atan2(e, t) * Ya, tn(r / Math.sqrt(u)) * Ya]
  };
  var Eo, Ao, Co, zo, Lo, qo, To, Ro, Do, Po, Uo, jo = {
    sphere: b, point: St, lineStart: Nt, lineEnd: Et, polygonStart: function() {
      jo.lineStart = At
    }, polygonEnd: function() {
      jo.lineStart = Nt
    }
  }, Fo = Rt(zt, jt, Ht, [-ja, -ja / 2]), Ho = 1e9;
  oa.geo.clipExtent = function() {
    var n, t, e, r, u, i, a = {
      stream: function(n) {
        return u && (u.valid = !1), u = i(n), u.valid = !0, u
      }, extent: function(o) {
        return arguments.length ? (i = Zt(n = +o[0][0], t = +o[0][1], e = +o[1][0], r = +o[1][1]), u && (u.valid = !1, u = null), a) : [[n, t], [e, r]]
      }
    };
    return a.extent([[0, 0], [960, 500]])
  }, (oa.geo.conicEqualArea = function() {
    return Vt(Xt)
  }).raw = Xt, oa.geo.albers = function() {
    return oa.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
  }, oa.geo.albersUsa = function() {
    function n(n) {
      var i = n[0], a = n[1];
      return t = null, e(i, a), t || (r(i, a), t) || u(i, a), t
    }

    var t, e, r, u, i = oa.geo.albers(), a = oa.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o = oa.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
      point: function(n, e) {
        t = [n, e]
      }
    };
    return n.invert = function(n) {
      var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t;
      return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? a : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? o : i).invert(n)
    }, n.stream = function(n) {
      var t = i.stream(n), e = a.stream(n), r = o.stream(n);
      return {
        point: function(n, u) {
          t.point(n, u), e.point(n, u), r.point(n, u)
        }, sphere: function() {
          t.sphere(), e.sphere(), r.sphere()
        }, lineStart: function() {
          t.lineStart(), e.lineStart(), r.lineStart()
        }, lineEnd: function() {
          t.lineEnd(), e.lineEnd(), r.lineEnd()
        }, polygonStart: function() {
          t.polygonStart(), e.polygonStart(), r.polygonStart()
        }, polygonEnd: function() {
          t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
        }
      }
    }, n.precision = function(t) {
      return arguments.length ? (i.precision(t), a.precision(t), o.precision(t), n) : i.precision()
    }, n.scale = function(t) {
      return arguments.length ? (i.scale(t), a.scale(.35 * t), o.scale(t), n.translate(i.translate())) : i.scale()
    }, n.translate = function(t) {
      if (!arguments.length)return i.translate();
      var c = i.scale(), s = +t[0], f = +t[1];
      return e = i.translate(t).clipExtent([[s - .455 * c, f - .238 * c], [s + .455 * c, f + .238 * c]]).stream(l).point, r = a.translate([s - .307 * c, f + .201 * c]).clipExtent([[s - .425 * c + Pa, f + .12 * c + Pa], [s - .214 * c - Pa, f + .234 * c - Pa]]).stream(l).point, u = o.translate([s - .205 * c, f + .212 * c]).clipExtent([[s - .214 * c + Pa, f + .166 * c + Pa], [s - .115 * c - Pa, f + .234 * c - Pa]]).stream(l).point, n
    }, n.scale(1070)
  };
  var Oo, Io, Yo, Zo, Vo, Xo, $o = {
    point: b, lineStart: b, lineEnd: b, polygonStart: function() {
      Io = 0, $o.lineStart = $t
    }, polygonEnd: function() {
      $o.lineStart = $o.lineEnd = $o.point = b, Oo += Ma(Io / 2)
    }
  }, Bo = {point: Bt, lineStart: b, lineEnd: b, polygonStart: b, polygonEnd: b}, Wo = {
    point: Gt, lineStart: Kt, lineEnd: Qt, polygonStart: function() {
      Wo.lineStart = ne
    }, polygonEnd: function() {
      Wo.point = Gt, Wo.lineStart = Kt, Wo.lineEnd = Qt
    }
  };
  oa.geo.path = function() {
    function n(n) {
      return n && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), a && a.valid || (a = u(i)), oa.geo.stream(n, a)), i.result()
    }

    function t() {
      return a = null, n
    }

    var e, r, u, i, a, o = 4.5;
    return n.area = function(n) {
      return Oo = 0, oa.geo.stream(n, u($o)), Oo
    }, n.centroid = function(n) {
      return Co = zo = Lo = qo = To = Ro = Do = Po = Uo = 0, oa.geo.stream(n, u(Wo)), Uo ? [Do / Uo, Po / Uo] : Ro ? [qo / Ro, To / Ro] : Lo ? [Co / Lo, zo / Lo] : [NaN, NaN]
    }, n.bounds = function(n) {
      return Vo = Xo = -(Yo = Zo = 1 / 0), oa.geo.stream(n, u(Bo)), [[Yo, Zo], [Vo, Xo]]
    }, n.projection = function(n) {
      return arguments.length ? (u = (e = n) ? n.stream || re(n) : y, t()) : e
    }, n.context = function(n) {
      return arguments.length ? (i = null == (r = n) ? new Wt : new te(n), "function" != typeof o && i.pointRadius(o), t()) : r
    }, n.pointRadius = function(t) {
      return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : o
    }, n.projection(oa.geo.albersUsa()).context(null)
  }, oa.geo.transform = function(n) {
    return {
      stream: function(t) {
        var e = new ue(t);
        for (var r in n)e[r] = n[r];
        return e
      }
    }
  }, ue.prototype = {
    point: function(n, t) {
      this.stream.point(n, t)
    }, sphere: function() {
      this.stream.sphere()
    }, lineStart: function() {
      this.stream.lineStart()
    }, lineEnd: function() {
      this.stream.lineEnd()
    }, polygonStart: function() {
      this.stream.polygonStart()
    }, polygonEnd: function() {
      this.stream.polygonEnd()
    }
  }, oa.geo.projection = ae, oa.geo.projectionMutator = oe, (oa.geo.equirectangular = function() {
    return ae(ce)
  }).raw = ce.invert = ce, oa.geo.rotation = function(n) {
    function t(t) {
      return t = n(t[0] * Ia, t[1] * Ia), t[0] *= Ya, t[1] *= Ya, t
    }

    return n = fe(n[0] % 360 * Ia, n[1] * Ia, n.length > 2 ? n[2] * Ia : 0), t.invert = function(t) {
      return t = n.invert(t[0] * Ia, t[1] * Ia), t[0] *= Ya, t[1] *= Ya, t
    }, t
  }, se.invert = ce, oa.geo.circle = function() {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r, t = fe(-n[0] * Ia, -n[1] * Ia, 0).invert, u = [];
      return e(null, null, 1, {
        point: function(n, e) {
          u.push(n = t(n, e)), n[0] *= Ya, n[1] *= Ya
        }
      }), {type: "Polygon", coordinates: [u]}
    }

    var t, e, r = [0, 0], u = 6;
    return n.origin = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n.angle = function(r) {
      return arguments.length ? (e = ve((t = +r) * Ia, u * Ia), n) : t
    }, n.precision = function(r) {
      return arguments.length ? (e = ve(t * Ia, (u = +r) * Ia), n) : u
    }, n.angle(90)
  }, oa.geo.distance = function(n, t) {
    var e, r = (t[0] - n[0]) * Ia, u = n[1] * Ia, i = t[1] * Ia, a = Math.sin(r), o = Math.cos(r), l = Math.sin(u), c = Math.cos(u), s = Math.sin(i), f = Math.cos(i);
    return Math.atan2(Math.sqrt((e = f * a) * e + (e = c * s - l * f * o) * e), l * s + c * f * o)
  }, oa.geo.graticule = function() {
    function n() {
      return {type: "MultiLineString", coordinates: t()}
    }

    function t() {
      return oa.range(Math.ceil(i / d) * d, u, d).map(h).concat(oa.range(Math.ceil(c / m) * m, l, m).map(g)).concat(oa.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
        return Ma(n % d) > Pa
      }).map(s)).concat(oa.range(Math.ceil(o / v) * v, a, v).filter(function(n) {
        return Ma(n % m) > Pa
      }).map(f))
    }

    var e, r, u, i, a, o, l, c, s, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5;
    return n.lines = function() {
      return t().map(function(n) {
        return {type: "LineString", coordinates: n}
      })
    }, n.outline = function() {
      return {type: "Polygon", coordinates: [h(i).concat(g(l).slice(1), h(u).reverse().slice(1), g(c).reverse().slice(1))]}
    }, n.extent = function(t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
    }, n.majorExtent = function(t) {
      return arguments.length ? (i = +t[0][0], u = +t[1][0], c = +t[0][1], l = +t[1][1], i > u && (t = i, i = u, u = t), c > l && (t = c, c = l, l = t), n.precision(y)) : [[i, c], [u, l]]
    }, n.minorExtent = function(t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], o = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), o > a && (t = o, o = a, a = t), n.precision(y)) : [[r, o], [e, a]]
    }, n.step = function(t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
    }, n.majorStep = function(t) {
      return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
    }, n.minorStep = function(t) {
      return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
    }, n.precision = function(t) {
      return arguments.length ? (y = +t, s = me(o, a, 90), f = ye(r, e, y), h = me(c, l, 90), g = ye(i, u, y), n) : y
    }, n.majorExtent([[-180, -90 + Pa], [180, 90 - Pa]]).minorExtent([[-180, -80 - Pa], [180, 80 + Pa]])
  }, oa.geo.greatArc = function() {
    function n() {
      return {type: "LineString", coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]}
    }

    var t, e, r = Me, u = xe;
    return n.distance = function() {
      return oa.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
    }, n.source = function(e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
    }, n.target = function(t) {
      return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
    }, n.precision = function() {
      return arguments.length ? n : 0
    }, n
  }, oa.geo.interpolate = function(n, t) {
    return be(n[0] * Ia, n[1] * Ia, t[0] * Ia, t[1] * Ia)
  }, oa.geo.length = function(n) {
    return Jo = 0, oa.geo.stream(n, Go), Jo
  };
  var Jo, Go = {sphere: b, point: b, lineStart: _e, lineEnd: b, polygonStart: b, polygonEnd: b}, Ko = we(function(n) {
    return Math.sqrt(2 / (1 + n))
  }, function(n) {
    return 2 * Math.asin(n / 2)
  });
  (oa.geo.azimuthalEqualArea = function() {
    return ae(Ko)
  }).raw = Ko;
  var Qo = we(function(n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t)
  }, y);
  (oa.geo.azimuthalEquidistant = function() {
    return ae(Qo)
  }).raw = Qo, (oa.geo.conicConformal = function() {
    return Vt(Se)
  }).raw = Se, (oa.geo.conicEquidistant = function() {
    return Vt(ke)
  }).raw = ke;
  var nl = we(function(n) {
    return 1 / n
  }, Math.atan);
  (oa.geo.gnomonic = function() {
    return ae(nl)
  }).raw = nl, Ne.invert = function(n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - Oa]
  }, (oa.geo.mercator = function() {
    return Ee(Ne)
  }).raw = Ne;
  var tl = we(function() {
    return 1
  }, Math.asin);
  (oa.geo.orthographic = function() {
    return ae(tl)
  }).raw = tl;
  var el = we(function(n) {
    return 1 / (1 + n)
  }, function(n) {
    return 2 * Math.atan(n)
  });
  (oa.geo.stereographic = function() {
    return ae(el)
  }).raw = el, Ae.invert = function(n, t) {
    return [-t, 2 * Math.atan(Math.exp(n)) - Oa]
  }, (oa.geo.transverseMercator = function() {
    var n = Ee(Ae), t = n.center, e = n.rotate;
    return n.center = function(n) {
      return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]])
    }, n.rotate = function(n) {
      return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
    }, e([0, 0, 90])
  }).raw = Ae, oa.geom = {}, oa.geom.hull = function(n) {
    function t(n) {
      if (n.length < 3)return [];
      var t, u = En(e), i = En(r), a = n.length, o = [], l = [];
      for (t = 0; a > t; t++)o.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
      for (o.sort(qe), t = 0; a > t; t++)l.push([o[t][0], -o[t][1]]);
      var c = Le(o), s = Le(l), f = s[0] === c[0], h = s[s.length - 1] === c[c.length - 1], g = [];
      for (t = c.length - 1; t >= 0; --t)g.push(n[o[c[t]][2]]);
      for (t = +f; t < s.length - h; ++t)g.push(n[o[s[t]][2]]);
      return g
    }

    var e = Ce, r = ze;
    return arguments.length ? t(n) : (t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    }, t)
  }, oa.geom.polygon = function(n) {
    return Sa(n, rl), n
  };
  var rl = oa.geom.polygon.prototype = [];
  rl.area = function() {
    for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;)n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
    return .5 * u
  }, rl.centroid = function(n) {
    var t, e, r = -1, u = this.length, i = 0, a = 0, o = this[u - 1];
    for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;)t = o, o = this[r], e = t[0] * o[1] - o[0] * t[1], i += (t[0] + o[0]) * e, a += (t[1] + o[1]) * e;
    return [i * n, a * n]
  }, rl.clip = function(n) {
    for (var t, e, r, u, i, a, o = De(n), l = -1, c = this.length - De(this), s = this[c - 1]; ++l < c;) {
      for (t = n.slice(), n.length = 0, u = this[l], i = t[(r = t.length - o) - 1], e = -1; ++e < r;)a = t[e], Te(a, s, u) ? (Te(i, s, u) || n.push(Re(i, a, s, u)), n.push(a)) : Te(i, s, u) && n.push(Re(i, a, s, u)), i = a;
      o && n.push(n[0]), s = u
    }
    return n
  };
  var ul, il, al, ol, ll, cl = [], sl = [];
  Ye.prototype.prepare = function() {
    for (var n, t = this.edges, e = t.length; e--;)n = t[e].edge, n.b && n.a || t.splice(e, 1);
    return t.sort(Ve), t.length
  }, tr.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b
    }, end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a
    }
  }, er.prototype = {
    insert: function(n, t) {
      var e, r, u;
      if (n) {
        if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
          for (n = n.R; n.L;)n = n.L;
          n.L = t
        } else n.R = t;
        e = n
      } else this._ ? (n = ar(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
      for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;)r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (ur(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ir(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ir(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ur(this, r))), e = n.U;
      this._.C = !1
    }, remove: function(n) {
      n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
      var t, e, r, u = n.U, i = n.L, a = n.R;
      if (e = i ? a ? ar(a) : i : a, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && a ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== a ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = a, a.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
        if (n && n.C)return void(n.C = !1);
        do {
          if (n === this._)break;
          if (n === u.L) {
            if (t = u.R, t.C && (t.C = !1, u.C = !0, ur(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
              t.R && t.R.C || (t.L.C = !1, t.C = !0, ir(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, ur(this, u), n = this._;
              break
            }
          } else if (t = u.L, t.C && (t.C = !1, u.C = !0, ir(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
            t.L && t.L.C || (t.R.C = !1, t.C = !0, ur(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ir(this, u), n = this._;
            break
          }
          t.C = !0, n = u, u = u.U
        } while (!n.C);
        n && (n.C = !1)
      }
    }
  }, oa.geom.voronoi = function(n) {
    function t(n) {
      var t = new Array(n.length), r = o[0][0], u = o[0][1], i = o[1][0], a = o[1][1];
      return or(e(n), o).cells.forEach(function(e, o) {
        var l = e.edges, c = e.site, s = t[o] = l.length ? l.map(function(n) {
          var t = n.start();
          return [t.x, t.y]
        }) : c.x >= r && c.x <= i && c.y >= u && c.y <= a ? [[r, a], [i, a], [i, u], [r, u]] : [];
        s.point = n[o]
      }), t
    }

    function e(n) {
      return n.map(function(n, t) {
        return {x: Math.round(i(n, t) / Pa) * Pa, y: Math.round(a(n, t) / Pa) * Pa, i: t}
      })
    }

    var r = Ce, u = ze, i = r, a = u, o = fl;
    return n ? t(n) : (t.links = function(n) {
      return or(e(n)).edges.filter(function(n) {
        return n.l && n.r
      }).map(function(t) {
        return {source: n[t.l.i], target: n[t.r.i]}
      })
    }, t.triangles = function(n) {
      var t = [];
      return or(e(n)).cells.forEach(function(e, r) {
        for (var u, i, a = e.site, o = e.edges.sort(Ve), l = -1, c = o.length, s = o[c - 1].edge, f = s.l === a ? s.r : s.l; ++l < c;)u = s, i = f, s = o[l].edge, f = s.l === a ? s.r : s.l, r < i.i && r < f.i && cr(a, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
      }), t
    }, t.x = function(n) {
      return arguments.length ? (i = En(r = n), t) : r
    }, t.y = function(n) {
      return arguments.length ? (a = En(u = n), t) : u
    }, t.clipExtent = function(n) {
      return arguments.length ? (o = null == n ? fl : n, t) : o === fl ? null : o
    }, t.size = function(n) {
      return arguments.length ? t.clipExtent(n && [[0, 0], n]) : o === fl ? null : o && o[1]
    }, t)
  };
  var fl = [[-1e6, -1e6], [1e6, 1e6]];
  oa.geom.delaunay = function(n) {
    return oa.geom.voronoi().triangles(n)
  }, oa.geom.quadtree = function(n, t, e, r, u) {
    function i(n) {
      function i(n, t, e, r, u, i, a, o) {
        if (!isNaN(e) && !isNaN(r))if (n.leaf) {
          var l = n.x, s = n.y;
          if (null != l)if (Ma(l - e) + Ma(s - r) < .01)c(n, t, e, r, u, i, a, o); else {
            var f = n.point;
            n.x = n.y = n.point = null, c(n, f, l, s, u, i, a, o), c(n, t, e, r, u, i, a, o)
          } else n.x = e, n.y = r, n.point = t
        } else c(n, t, e, r, u, i, a, o)
      }

      function c(n, t, e, r, u, a, o, l) {
        var c = .5 * (u + o), s = .5 * (a + l), f = e >= c, h = r >= s, g = h << 1 | f;
        n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = hr()), f ? u = c : o = c, h ? a = s : l = s, i(n, t, e, r, u, a, o, l)
      }

      var s, f, h, g, p, v, d, m, y, M = En(o), x = En(l);
      if (null != t)v = t, d = e, m = r, y = u; else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, a)for (g = 0; p > g; ++g)s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y); else for (g = 0; p > g; ++g) {
        var b = +M(s = n[g], g), _ = +x(s, g);
        v > b && (v = b), d > _ && (d = _), b > m && (m = b), _ > y && (y = _), f.push(b), h.push(_)
      }
      var w = m - v, S = y - d;
      w > S ? y = d + w : m = v + S;
      var k = hr();
      if (k.add = function(n) {
          i(k, n, +M(n, ++g), +x(n, g), v, d, m, y)
        }, k.visit = function(n) {
          gr(n, k, v, d, m, y)
        }, k.find = function(n) {
          return pr(k, n[0], n[1], v, d, m, y)
        }, g = -1, null == t) {
        for (; ++g < p;)i(k, n[g], f[g], h[g], v, d, m, y);
        --g
      } else n.forEach(k.add);
      return f = h = n = s = null, k
    }

    var a, o = Ce, l = ze;
    return (a = arguments.length) ? (o = sr, l = fr, 3 === a && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
      return arguments.length ? (o = n, i) : o
    }, i.y = function(n) {
      return arguments.length ? (l = n, i) : l
    }, i.extent = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [[t, e], [r, u]]
    }, i.size = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
    }, i)
  }, oa.interpolateRgb = vr, oa.interpolateObject = dr, oa.interpolateNumber = mr, oa.interpolateString = yr;
  var hl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gl = new RegExp(hl.source, "g");
  oa.interpolate = Mr, oa.interpolators = [
    function(n, t) {
      var e = typeof t;
      return ("string" === e ? uo.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? vr : yr : t instanceof on ? vr : Array.isArray(t) ? xr : "object" === e && isNaN(t) ? dr : mr)(n, t)
    }
  ], oa.interpolateArray = xr;
  var pl = function() {
    return y
  }, vl = oa.map({
    linear: pl, poly: Er, quad: function() {
      return Sr
    }, cubic: function() {
      return kr
    }, sin: function() {
      return Ar
    }, exp: function() {
      return Cr
    }, circle: function() {
      return zr
    }, elastic: Lr, back: qr, bounce: function() {
      return Tr
    }
  }), dl = oa.map({
    "in": y, out: _r, "in-out": wr, "out-in": function(n) {
      return wr(_r(n))
    }
  });
  oa.ease = function(n) {
    var t = n.indexOf("-"), e = t >= 0 ? n.slice(0, t) : n, r = t >= 0 ? n.slice(t + 1) : "in";
    return e = vl.get(e) || pl, r = dl.get(r) || y, br(r(e.apply(null, la.call(arguments, 1))))
  }, oa.interpolateHcl = Rr, oa.interpolateHsl = Dr, oa.interpolateLab = Pr, oa.interpolateRound = Ur, oa.transform = function(n) {
    var t = sa.createElementNS(oa.ns.prefix.svg, "g");
    return (oa.transform = function(n) {
      if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate()
      }
      return new jr(e ? e.matrix : ml)
    })(n)
  }, jr.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
  };
  var ml = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
  oa.interpolateTransform = $r, oa.layout = {}, oa.layout.bundle = function() {
    return function(n) {
      for (var t = [], e = -1, r = n.length; ++e < r;)t.push(Jr(n[e]));
      return t
    }
  }, oa.layout.chord = function() {
    function n() {
      var n, c, f, h, g, p = {}, v = [], d = oa.range(i), m = [];
      for (e = [], r = [], n = 0, h = -1; ++h < i;) {
        for (c = 0, g = -1; ++g < i;)c += u[h][g];
        v.push(c), m.push(oa.range(i)), n += c
      }
      for (a && d.sort(function(n, t) {
        return a(v[n], v[t])
      }), o && m.forEach(function(n, t) {
        n.sort(function(n, e) {
          return o(u[t][n], u[t][e])
        })
      }), n = (Fa - s * i) / n, c = 0, h = -1; ++h < i;) {
        for (f = c, g = -1; ++g < i;) {
          var y = d[h], M = m[y][g], x = u[y][M], b = c, _ = c += x * n;
          p[y + "-" + M] = {index: y, subindex: M, startAngle: b, endAngle: _, value: x}
        }
        r[y] = {index: y, startAngle: f, endAngle: c, value: v[y]}, c += s
      }
      for (h = -1; ++h < i;)for (g = h - 1; ++g < i;) {
        var w = p[h + "-" + g], S = p[g + "-" + h];
        (w.value || S.value) && e.push(w.value < S.value ? {source: S, target: w} : {source: w, target: S})
      }
      l && t()
    }

    function t() {
      e.sort(function(n, t) {
        return l((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
      })
    }

    var e, r, u, i, a, o, l, c = {}, s = 0;
    return c.matrix = function(n) {
      return arguments.length ? (i = (u = n) && u.length, e = r = null, c) : u
    }, c.padding = function(n) {
      return arguments.length ? (s = n, e = r = null, c) : s
    }, c.sortGroups = function(n) {
      return arguments.length ? (a = n, e = r = null, c) : a
    }, c.sortSubgroups = function(n) {
      return arguments.length ? (o = n, e = null, c) : o
    }, c.sortChords = function(n) {
      return arguments.length ? (l = n, e && t(), c) : l
    }, c.chords = function() {
      return e || n(), e
    }, c.groups = function() {
      return r || n(), r
    }, c
  }, oa.layout.force = function() {
    function n(n) {
      return function(t, e, r, u) {
        if (t.point !== n) {
          var i = t.cx - n.x, a = t.cy - n.y, o = u - e, l = i * i + a * a;
          if (l > o * o / m) {
            if (v > l) {
              var c = t.charge / l;
              n.px -= i * c, n.py -= a * c
            }
            return !0
          }
          if (t.point && l && v > l) {
            var c = t.pointCharge / l;
            n.px -= i * c, n.py -= a * c
          }
        }
        return !t.charge
      }
    }

    function t(n) {
      n.px = oa.event.x, n.py = oa.event.y, l.resume()
    }

    var e, r, u, i, a, o, l = {}, c = oa.dispatch("start", "tick", "end"), s = [1, 1], f = .9, h = yl, g = Ml, p = -30, v = xl, d = .1, m = .64, M = [], x = [];
    return l.tick = function() {
      if ((u *= .99) < .005)return e = null, c.end({type: "end", alpha: u = 0}), !0;
      var t, r, l, h, g, v, m, y, b, _ = M.length, w = x.length;
      for (r = 0; w > r; ++r)l = x[r], h = l.source, g = l.target, y = g.x - h.x, b = g.y - h.y, (v = y * y + b * b) && (v = u * a[r] * ((v = Math.sqrt(v)) - i[r]) / v, y *= v, b *= v, g.x -= y * (m = h.weight + g.weight ? h.weight / (h.weight + g.weight) : .5), g.y -= b * m, h.x += y * (m = 1 - m), h.y += b * m);
      if ((m = u * d) && (y = s[0] / 2, b = s[1] / 2, r = -1, m))for (; ++r < _;)l = M[r], l.x += (y - l.x) * m, l.y += (b - l.y) * m;
      if (p)for (ru(t = oa.geom.quadtree(M), u, o), r = -1; ++r < _;)(l = M[r]).fixed || t.visit(n(l));
      for (r = -1; ++r < _;)l = M[r], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * f, l.y -= (l.py - (l.py = l.y)) * f);
      c.tick({type: "tick", alpha: u})
    }, l.nodes = function(n) {
      return arguments.length ? (M = n, l) : M
    }, l.links = function(n) {
      return arguments.length ? (x = n, l) : x
    }, l.size = function(n) {
      return arguments.length ? (s = n, l) : s
    }, l.linkDistance = function(n) {
      return arguments.length ? (h = "function" == typeof n ? n : +n, l) : h
    }, l.distance = l.linkDistance, l.linkStrength = function(n) {
      return arguments.length ? (g = "function" == typeof n ? n : +n, l) : g
    }, l.friction = function(n) {
      return arguments.length ? (f = +n, l) : f
    }, l.charge = function(n) {
      return arguments.length ? (p = "function" == typeof n ? n : +n, l) : p
    }, l.chargeDistance = function(n) {
      return arguments.length ? (v = n * n, l) : Math.sqrt(v)
    }, l.gravity = function(n) {
      return arguments.length ? (d = +n, l) : d
    }, l.theta = function(n) {
      return arguments.length ? (m = n * n, l) : Math.sqrt(m)
    }, l.alpha = function(n) {
      return arguments.length ? (n = +n, u ? n > 0 ? u = n : (e.c = null, e.t = NaN, e = null, c.end({type: "end", alpha: u = 0})) : n > 0 && (c.start({type: "start", alpha: u = n}), e = qn(l.tick)), l) : u
    }, l.start = function() {
      function n(n, r) {
        if (!e) {
          for (e = new Array(u), l = 0; u > l; ++l)e[l] = [];
          for (l = 0; c > l; ++l) {
            var i = x[l];
            e[i.source.index].push(i.target), e[i.target.index].push(i.source)
          }
        }
        for (var a, o = e[t], l = -1, s = o.length; ++l < s;)if (!isNaN(a = o[l][n]))return a;
        return Math.random() * r
      }

      var t, e, r, u = M.length, c = x.length, f = s[0], v = s[1];
      for (t = 0; u > t; ++t)(r = M[t]).index = t, r.weight = 0;
      for (t = 0; c > t; ++t)r = x[t], "number" == typeof r.source && (r.source = M[r.source]), "number" == typeof r.target && (r.target = M[r.target]), ++r.source.weight, ++r.target.weight;
      for (t = 0; u > t; ++t)r = M[t], isNaN(r.x) && (r.x = n("x", f)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
      if (i = [], "function" == typeof h)for (t = 0; c > t; ++t)i[t] = +h.call(this, x[t], t); else for (t = 0; c > t; ++t)i[t] = h;
      if (a = [], "function" == typeof g)for (t = 0; c > t; ++t)a[t] = +g.call(this, x[t], t); else for (t = 0; c > t; ++t)a[t] = g;
      if (o = [], "function" == typeof p)for (t = 0; u > t; ++t)o[t] = +p.call(this, M[t], t); else for (t = 0; u > t; ++t)o[t] = p;
      return l.resume()
    }, l.resume = function() {
      return l.alpha(.1)
    }, l.stop = function() {
      return l.alpha(0)
    }, l.drag = function() {
      return r || (r = oa.behavior.drag().origin(y).on("dragstart.force", Qr).on("drag.force", t).on("dragend.force", nu)), arguments.length ? void this.on("mouseover.force", tu).on("mouseout.force", eu).call(r) : r
    }, oa.rebind(l, c, "on")
  };
  var yl = 20, Ml = 1, xl = 1 / 0;
  oa.layout.hierarchy = function() {
    function n(u) {
      var i, a = [u], o = [];
      for (u.depth = 0; null != (i = a.pop());)if (o.push(i), (c = e.call(n, i, i.depth)) && (l = c.length)) {
        for (var l, c, s; --l >= 0;)a.push(s = c[l]), s.parent = i, s.depth = i.depth + 1;
        r && (i.value = 0), i.children = c
      } else r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
      return au(u, function(n) {
        var e, u;
        t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value)
      }), o
    }

    var t = cu, e = ou, r = lu;
    return n.sort = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.children = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.value = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n.revalue = function(t) {
      return r && (iu(t, function(n) {
        n.children && (n.value = 0)
      }), au(t, function(t) {
        var e;
        t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
      })), t
    }, n
  }, oa.layout.partition = function() {
    function n(t, e, r, u) {
      var i = t.children;
      if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (a = i.length)) {
        var a, o, l, c = -1;
        for (r = t.value ? r / t.value : 0; ++c < a;)n(o = i[c], e, l = o.value * r, u), e += l
      }
    }

    function t(n) {
      var e = n.children, r = 0;
      if (e && (u = e.length))for (var u, i = -1; ++i < u;)r = Math.max(r, t(e[i]));
      return 1 + r
    }

    function e(e, i) {
      var a = r.call(this, e, i);
      return n(a[0], 0, u[0], u[1] / t(a[0])), a
    }

    var r = oa.layout.hierarchy(), u = [1, 1];
    return e.size = function(n) {
      return arguments.length ? (u = n, e) : u
    }, uu(e, r)
  }, oa.layout.pie = function() {
    function n(a) {
      var o, l = a.length, c = a.map(function(e, r) {
        return +t.call(n, e, r)
      }), s = +("function" == typeof r ? r.apply(this, arguments) : r), f = ("function" == typeof u ? u.apply(this, arguments) : u) - s, h = Math.min(Math.abs(f) / l, +("function" == typeof i ? i.apply(this, arguments) : i)), g = h * (0 > f ? -1 : 1), p = oa.sum(c), v = p ? (f - l * g) / p : 0, d = oa.range(l), m = [];
      return null != e && d.sort(e === bl ? function(n, t) {
        return c[t] - c[n]
      } : function(n, t) {
        return e(a[n], a[t])
      }), d.forEach(function(n) {
        m[n] = {data: a[n], value: o = c[n], startAngle: s, endAngle: s += o * v + g, padAngle: h}
      }), m
    }

    var t = Number, e = bl, r = 0, u = Fa, i = 0;
    return n.value = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.sort = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.startAngle = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n.endAngle = function(t) {
      return arguments.length ? (u = t, n) : u
    }, n.padAngle = function(t) {
      return arguments.length ? (i = t, n) : i
    }, n
  };
  var bl = {};
  oa.layout.stack = function() {
    function n(o, l) {
      if (!(h = o.length))return o;
      var c = o.map(function(e, r) {
        return t.call(n, e, r)
      }), s = c.map(function(t) {
        return t.map(function(t, e) {
          return [i.call(n, t, e), a.call(n, t, e)]
        })
      }), f = e.call(n, s, l);
      c = oa.permute(c, f), s = oa.permute(s, f);
      var h, g, p, v, d = r.call(n, s, l), m = c[0].length;
      for (p = 0; m > p; ++p)for (u.call(n, c[0][p], v = d[p], s[0][p][1]), g = 1; h > g; ++g)u.call(n, c[g][p], v += s[g - 1][p][1], s[g][p][1]);
      return o
    }

    var t = y, e = pu, r = vu, u = gu, i = fu, a = hu;
    return n.values = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.order = function(t) {
      return arguments.length ? (e = "function" == typeof t ? t : _l.get(t) || pu, n) : e
    }, n.offset = function(t) {
      return arguments.length ? (r = "function" == typeof t ? t : wl.get(t) || vu, n) : r
    }, n.x = function(t) {
      return arguments.length ? (i = t, n) : i
    }, n.y = function(t) {
      return arguments.length ? (a = t, n) : a
    }, n.out = function(t) {
      return arguments.length ? (u = t, n) : u
    }, n
  };
  var _l = oa.map({
    "inside-out": function(n) {
      var t, e, r = n.length, u = n.map(du), i = n.map(mu), a = oa.range(r).sort(function(n, t) {
        return u[n] - u[t]
      }), o = 0, l = 0, c = [], s = [];
      for (t = 0; r > t; ++t)e = a[t], l > o ? (o += i[e], c.push(e)) : (l += i[e], s.push(e));
      return s.reverse().concat(c)
    }, reverse: function(n) {
      return oa.range(n.length).reverse()
    }, "default": pu
  }), wl = oa.map({
    silhouette: function(n) {
      var t, e, r, u = n.length, i = n[0].length, a = [], o = 0, l = [];
      for (e = 0; i > e; ++e) {
        for (t = 0, r = 0; u > t; t++)r += n[t][e][1];
        r > o && (o = r), a.push(r)
      }
      for (e = 0; i > e; ++e)l[e] = (o - a[e]) / 2;
      return l
    }, wiggle: function(n) {
      var t, e, r, u, i, a, o, l, c, s = n.length, f = n[0], h = f.length, g = [];
      for (g[0] = l = c = 0, e = 1; h > e; ++e) {
        for (t = 0, u = 0; s > t; ++t)u += n[t][e][1];
        for (t = 0, i = 0, o = f[e][0] - f[e - 1][0]; s > t; ++t) {
          for (r = 0, a = (n[t][e][1] - n[t][e - 1][1]) / (2 * o); t > r; ++r)a += (n[r][e][1] - n[r][e - 1][1]) / o;
          i += a * n[t][e][1]
        }
        g[e] = l -= u ? i / u * o : 0, c > l && (c = l)
      }
      for (e = 0; h > e; ++e)g[e] -= c;
      return g
    }, expand: function(n) {
      var t, e, r, u = n.length, i = n[0].length, a = 1 / u, o = [];
      for (e = 0; i > e; ++e) {
        for (t = 0, r = 0; u > t; t++)r += n[t][e][1];
        if (r)for (t = 0; u > t; t++)n[t][e][1] /= r; else for (t = 0; u > t; t++)n[t][e][1] = a
      }
      for (e = 0; i > e; ++e)o[e] = 0;
      return o
    }, zero: vu
  });
  oa.layout.histogram = function() {
    function n(n, i) {
      for (var a, o, l = [], c = n.map(e, this), s = r.call(this, c, i), f = u.call(this, s, c, i), i = -1, h = c.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;)a = l[i] = [], a.dx = f[i + 1] - (a.x = f[i]), a.y = 0;
      if (g > 0)for (i = -1; ++i < h;)o = c[i], o >= s[0] && o <= s[1] && (a = l[oa.bisect(f, o, 1, g) - 1], a.y += p, a.push(n[i]));
      return l
    }

    var t = !0, e = Number, r = bu, u = Mu;
    return n.value = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.range = function(t) {
      return arguments.length ? (r = En(t), n) : r
    }, n.bins = function(t) {
      return arguments.length ? (u = "number" == typeof t ? function(n) {
        return xu(n, t)
      } : En(t), n) : u
    }, n.frequency = function(e) {
      return arguments.length ? (t = !!e, n) : t
    }, n
  }, oa.layout.pack = function() {
    function n(n, i) {
      var a = e.call(this, n, i), o = a[0], l = u[0], c = u[1], s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
        return t
      };
      if (o.x = o.y = 0, au(o, function(n) {
          n.r = +s(n.value)
        }), au(o, Nu), r) {
        var f = r * (t ? 1 : Math.max(2 * o.r / l, 2 * o.r / c)) / 2;
        au(o, function(n) {
          n.r += f
        }), au(o, Nu), au(o, function(n) {
          n.r -= f
        })
      }
      return Cu(o, l / 2, c / 2, t ? 1 : 1 / Math.max(2 * o.r / l, 2 * o.r / c)), a
    }

    var t, e = oa.layout.hierarchy().sort(_u), r = 0, u = [1, 1];
    return n.size = function(t) {
      return arguments.length ? (u = t, n) : u
    }, n.radius = function(e) {
      return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
    }, n.padding = function(t) {
      return arguments.length ? (r = +t, n) : r
    }, uu(n, e)
  }, oa.layout.tree = function() {
    function n(n, u) {
      var s = a.call(this, n, u), f = s[0], h = t(f);
      if (au(h, e), h.parent.m = -h.z, iu(h, r), c)iu(f, i); else {
        var g = f, p = f, v = f;
        iu(f, function(n) {
          n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n)
        });
        var d = o(g, p) / 2 - g.x, m = l[0] / (p.x + o(p, g) / 2 + d), y = l[1] / (v.depth || 1);
        iu(f, function(n) {
          n.x = (n.x + d) * m, n.y = n.depth * y
        })
      }
      return s
    }

    function t(n) {
      for (var t, e = {A: null, children: [n]}, r = [e]; null != (t = r.pop());)for (var u, i = t.children, a = 0, o = i.length; o > a; ++a)r.push((i[a] = u = {_: i[a], parent: t, children: (u = i[a].children) && u.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: a}).a = u);
      return e.children[0]
    }

    function e(n) {
      var t = n.children, e = n.parent.children, r = n.i ? e[n.i - 1] : null;
      if (t.length) {
        Du(n);
        var i = (t[0].z + t[t.length - 1].z) / 2;
        r ? (n.z = r.z + o(n._, r._), n.m = n.z - i) : n.z = i
      } else r && (n.z = r.z + o(n._, r._));
      n.parent.A = u(n, r, n.parent.A || e[0])
    }

    function r(n) {
      n._.x = n.z + n.parent.m, n.m += n.parent.m
    }

    function u(n, t, e) {
      if (t) {
        for (var r, u = n, i = n, a = t, l = u.parent.children[0], c = u.m, s = i.m, f = a.m, h = l.m; a = Tu(a), u = qu(u), a && u;)l = qu(l), i = Tu(i), i.a = n, r = a.z + f - u.z - c + o(a._, u._), r > 0 && (Ru(Pu(a, n, e), n, r), c += r, s += r), f += a.m, c += u.m, h += l.m, s += i.m;
        a && !Tu(i) && (i.t = a, i.m += f - s), u && !qu(l) && (l.t = u, l.m += c - h, e = n)
      }
      return e
    }

    function i(n) {
      n.x *= l[0], n.y = n.depth * l[1]
    }

    var a = oa.layout.hierarchy().sort(null).value(null), o = Lu, l = [1, 1], c = null;
    return n.separation = function(t) {
      return arguments.length ? (o = t, n) : o
    }, n.size = function(t) {
      return arguments.length ? (c = null == (l = t) ? i : null, n) : c ? null : l
    }, n.nodeSize = function(t) {
      return arguments.length ? (c = null == (l = t) ? null : i, n) : c ? l : null
    }, uu(n, a)
  }, oa.layout.cluster = function() {
    function n(n, i) {
      var a, o = t.call(this, n, i), l = o[0], c = 0;
      au(l, function(n) {
        var t = n.children;
        t && t.length ? (n.x = ju(t), n.y = Uu(t)) : (n.x = a ? c += e(n, a) : 0, n.y = 0, a = n)
      });
      var s = Fu(l), f = Hu(l), h = s.x - e(s, f) / 2, g = f.x + e(f, s) / 2;
      return au(l, u ? function(n) {
        n.x = (n.x - l.x) * r[0], n.y = (l.y - n.y) * r[1]
      } : function(n) {
        n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (l.y ? n.y / l.y : 1)) * r[1]
      }), o
    }

    var t = oa.layout.hierarchy().sort(null).value(null), e = Lu, r = [1, 1], u = !1;
    return n.separation = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.size = function(t) {
      return arguments.length ? (u = null == (r = t), n) : u ? null : r
    }, n.nodeSize = function(t) {
      return arguments.length ? (u = null != (r = t), n) : u ? r : null
    }, uu(n, t)
  }, oa.layout.treemap = function() {
    function n(n, t) {
      for (var e, r, u = -1, i = n.length; ++u < i;)r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
    }

    function t(e) {
      var i = e.children;
      if (i && i.length) {
        var a, o, l, c = f(e), s = [], h = i.slice(), p = 1 / 0, v = "slice" === g ? c.dx : "dice" === g ? c.dy : "slice-dice" === g ? 1 & e.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);
        for (n(h, c.dx * c.dy / e.value), s.area = 0; (l = h.length) > 0;)s.push(a = h[l - 1]), s.area += a.area, "squarify" !== g || (o = r(s, v)) <= p ? (h.pop(), p = o) : (s.area -= s.pop().area, u(s, v, c, !1), v = Math.min(c.dx, c.dy), s.length = s.area = 0, p = 1 / 0);
        s.length && (u(s, v, c, !0), s.length = s.area = 0), i.forEach(t)
      }
    }

    function e(t) {
      var r = t.children;
      if (r && r.length) {
        var i, a = f(t), o = r.slice(), l = [];
        for (n(o, a.dx * a.dy / t.value), l.area = 0; i = o.pop();)l.push(i), l.area += i.area, null != i.z && (u(l, i.z ? a.dx : a.dy, a, !o.length), l.length = l.area = 0);
        r.forEach(e)
      }
    }

    function r(n, t) {
      for (var e, r = n.area, u = 0, i = 1 / 0, a = -1, o = n.length; ++a < o;)(e = n[a].area) && (i > e && (i = e), e > u && (u = e));
      return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
    }

    function u(n, t, e, r) {
      var u, i = -1, a = n.length, o = e.x, c = e.y, s = t ? l(n.area / t) : 0;
      if (t == e.dx) {
        for ((r || s > e.dy) && (s = e.dy); ++i < a;)u = n[i], u.x = o, u.y = c, u.dy = s, o += u.dx = Math.min(e.x + e.dx - o, s ? l(u.area / s) : 0);
        u.z = !0, u.dx += e.x + e.dx - o, e.y += s, e.dy -= s
      } else {
        for ((r || s > e.dx) && (s = e.dx); ++i < a;)u = n[i], u.x = o, u.y = c, u.dx = s, c += u.dy = Math.min(e.y + e.dy - c, s ? l(u.area / s) : 0);
        u.z = !1, u.dy += e.y + e.dy - c, e.x += s, e.dx -= s
      }
    }

    function i(r) {
      var u = a || o(r), i = u[0];
      return i.x = i.y = 0, i.value ? (i.dx = c[0], i.dy = c[1]) : i.dx = i.dy = 0, a && o.revalue(i), n([i], i.dx * i.dy / i.value), (a ? e : t)(i), h && (a = u), u
    }

    var a, o = oa.layout.hierarchy(), l = Math.round, c = [1, 1], s = null, f = Ou, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
    return i.size = function(n) {
      return arguments.length ? (c = n, i) : c
    }, i.padding = function(n) {
      function t(t) {
        var e = n.call(i, t, t.depth);
        return null == e ? Ou(t) : Iu(t, "number" == typeof e ? [e, e, e, e] : e)
      }

      function e(t) {
        return Iu(t, n)
      }

      if (!arguments.length)return s;
      var r;
      return f = null == (s = n) ? Ou : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
    }, i.round = function(n) {
      return arguments.length ? (l = n ? Math.round : Number, i) : l != Number
    }, i.sticky = function(n) {
      return arguments.length ? (h = n, a = null, i) : h
    }, i.ratio = function(n) {
      return arguments.length ? (p = n, i) : p
    }, i.mode = function(n) {
      return arguments.length ? (g = n + "", i) : g
    }, uu(i, o)
  }, oa.random = {
    normal: function(n, t) {
      var e = arguments.length;
      return 2 > e && (t = 1), 1 > e && (n = 0), function() {
        var e, r, u;
        do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
        return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
      }
    }, logNormal: function() {
      var n = oa.random.normal.apply(oa, arguments);
      return function() {
        return Math.exp(n())
      }
    }, bates: function(n) {
      var t = oa.random.irwinHall(n);
      return function() {
        return t() / n
      }
    }, irwinHall: function(n) {
      return function() {
        for (var t = 0, e = 0; n > e; e++)t += Math.random();
        return t
      }
    }
  }, oa.scale = {};
  var Sl = {floor: y, ceil: y};
  oa.scale.linear = function() {
    return Wu([0, 1], [0, 1], Mr, !1)
  };
  var kl = {s: 1, g: 1, p: 1, r: 1, e: 1};
  oa.scale.log = function() {
    return ri(oa.scale.linear().domain([0, 1]), 10, !0, [1, 10])
  };
  var Nl = oa.format(".0e"), El = {
    floor: function(n) {
      return -Math.ceil(-n)
    }, ceil: function(n) {
      return -Math.floor(-n)
    }
  };
  oa.scale.pow = function() {
    return ui(oa.scale.linear(), 1, [0, 1])
  }, oa.scale.sqrt = function() {
    return oa.scale.pow().exponent(.5)
  }, oa.scale.ordinal = function() {
    return ai([], {t: "range", a: [[]]})
  }, oa.scale.category10 = function() {
    return oa.scale.ordinal().range(Al)
  }, oa.scale.category20 = function() {
    return oa.scale.ordinal().range(Cl)
  }, oa.scale.category20b = function() {
    return oa.scale.ordinal().range(zl)
  }, oa.scale.category20c = function() {
    return oa.scale.ordinal().range(Ll)
  };
  var Al = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(xn), Cl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(xn), zl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(xn), Ll = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(xn);
  oa.scale.quantile = function() {
    return oi([], [])
  }, oa.scale.quantize = function() {
    return li(0, 1, [0, 1])
  }, oa.scale.threshold = function() {
    return ci([.5], [0, 1])
  }, oa.scale.identity = function() {
    return si([0, 1])
  }, oa.svg = {}, oa.svg.arc = function() {
    function n() {
      var n = Math.max(0, +e.apply(this, arguments)), c = Math.max(0, +r.apply(this, arguments)), s = a.apply(this, arguments) - Oa, f = o.apply(this, arguments) - Oa, h = Math.abs(f - s), g = s > f ? 0 : 1;
      if (n > c && (p = c, c = n, n = p), h >= Ha)return t(c, g) + (n ? t(n, 1 - g) : "") + "Z";
      var p, v, d, m, y, M, x, b, _, w, S, k, N = 0, E = 0, A = [];
      if ((m = (+l.apply(this, arguments) || 0) / 2) && (d = i === ql ? Math.sqrt(n * n + c * c) : +i.apply(this, arguments), g || (E *= -1), c && (E = tn(d / c * Math.sin(m))), n && (N = tn(d / n * Math.sin(m)))), c) {
        y = c * Math.cos(s + E), M = c * Math.sin(s + E), x = c * Math.cos(f - E), b = c * Math.sin(f - E);
        var C = Math.abs(f - s - 2 * E) <= ja ? 0 : 1;
        if (E && mi(y, M, x, b) === g ^ C) {
          var z = (s + f) / 2;
          y = c * Math.cos(z), M = c * Math.sin(z), x = b = null
        }
      } else y = M = 0;
      if (n) {
        _ = n * Math.cos(f - N), w = n * Math.sin(f - N), S = n * Math.cos(s + N), k = n * Math.sin(s + N);
        var L = Math.abs(s - f + 2 * N) <= ja ? 0 : 1;
        if (N && mi(_, w, S, k) === 1 - g ^ L) {
          var q = (s + f) / 2;
          _ = n * Math.cos(q), w = n * Math.sin(q), S = k = null
        }
      } else _ = w = 0;
      if (h > Pa && (p = Math.min(Math.abs(c - n) / 2, +u.apply(this, arguments))) > .001) {
        v = c > n ^ g ? 0 : 1;
        var T = p, R = p;
        if (ja > h) {
          var D = null == S ? [_, w] : null == x ? [y, M] : Re([y, M], [S, k], [x, b], [_, w]), P = y - D[0], U = M - D[1], j = x - D[0], F = b - D[1], H = 1 / Math.sin(Math.acos((P * j + U * F) / (Math.sqrt(P * P + U * U) * Math.sqrt(j * j + F * F))) / 2), O = Math.sqrt(D[0] * D[0] + D[1] * D[1]);
          R = Math.min(p, (n - O) / (H - 1)), T = Math.min(p, (c - O) / (H + 1))
        }
        if (null != x) {
          var I = yi(null == S ? [_, w] : [S, k], [y, M], c, T, g), Y = yi([x, b], [_, w], c, T, g);
          p === T ? A.push("M", I[0], "A", T, ",", T, " 0 0,", v, " ", I[1], "A", c, ",", c, " 0 ", 1 - g ^ mi(I[1][0], I[1][1], Y[1][0], Y[1][1]), ",", g, " ", Y[1], "A", T, ",", T, " 0 0,", v, " ", Y[0]) : A.push("M", I[0], "A", T, ",", T, " 0 1,", v, " ", Y[0])
        } else A.push("M", y, ",", M);
        if (null != S) {
          var Z = yi([y, M], [S, k], n, -R, g), V = yi([_, w], null == x ? [y, M] : [x, b], n, -R, g);
          p === R ? A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", g ^ mi(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - g, " ", Z[1], "A", R, ",", R, " 0 0,", v, " ", Z[0]) : A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", Z[0])
        } else A.push("L", _, ",", w)
      } else A.push("M", y, ",", M), null != x && A.push("A", c, ",", c, " 0 ", C, ",", g, " ", x, ",", b), A.push("L", _, ",", w), null != S && A.push("A", n, ",", n, " 0 ", L, ",", 1 - g, " ", S, ",", k);
      return A.push("Z"), A.join("")
    }

    function t(n, t) {
      return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
    }

    var e = hi, r = gi, u = fi, i = ql, a = pi, o = vi, l = di;
    return n.innerRadius = function(t) {
      return arguments.length ? (e = En(t), n) : e
    }, n.outerRadius = function(t) {
      return arguments.length ? (r = En(t), n) : r
    }, n.cornerRadius = function(t) {
      return arguments.length ? (u = En(t), n) : u
    }, n.padRadius = function(t) {
      return arguments.length ? (i = t == ql ? ql : En(t), n) : i
    }, n.startAngle = function(t) {
      return arguments.length ? (a = En(t), n) : a
    }, n.endAngle = function(t) {
      return arguments.length ? (o = En(t), n) : o
    }, n.padAngle = function(t) {
      return arguments.length ? (l = En(t), n) : l
    }, n.centroid = function() {
      var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2, t = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Oa;
      return [Math.cos(t) * n, Math.sin(t) * n]
    }, n
  };
  var ql = "auto";
  oa.svg.line = function() {
    return Mi(y)
  };
  var Tl = oa.map({linear: xi, "linear-closed": bi, step: _i, "step-before": wi, "step-after": Si, basis: zi, "basis-open": Li, "basis-closed": qi, bundle: Ti, cardinal: Ei, "cardinal-open": ki, "cardinal-closed": Ni, monotone: Fi});
  Tl.forEach(function(n, t) {
    t.key = n, t.closed = /-closed$/.test(n)
  });
  var Rl = [0, 2 / 3, 1 / 3, 0], Dl = [0, 1 / 3, 2 / 3, 0], Pl = [0, 1 / 6, 2 / 3, 1 / 6];
  oa.svg.line.radial = function() {
    var n = Mi(Hi);
    return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
  }, wi.reverse = Si, Si.reverse = wi, oa.svg.area = function() {
    return Oi(y)
  }, oa.svg.area.radial = function() {
    var n = Oi(Hi);
    return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
  }, oa.svg.chord = function() {
    function n(n, o) {
      var l = t(this, i, n, o), c = t(this, a, n, o);
      return "M" + l.p0 + r(l.r, l.p1, l.a1 - l.a0) + (e(l, c) ? u(l.r, l.p1, l.r, l.p0) : u(l.r, l.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + u(c.r, c.p1, l.r, l.p0)) + "Z"
    }

    function t(n, t, e, r) {
      var u = t.call(n, e, r), i = o.call(n, u, r), a = l.call(n, u, r) - Oa, s = c.call(n, u, r) - Oa;
      return {r: i, a0: a, a1: s, p0: [i * Math.cos(a), i * Math.sin(a)], p1: [i * Math.cos(s), i * Math.sin(s)]}
    }

    function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1
    }

    function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > ja) + ",1 " + t
    }

    function u(n, t, e, r) {
      return "Q 0,0 " + r
    }

    var i = Me, a = xe, o = Ii, l = pi, c = vi;
    return n.radius = function(t) {
      return arguments.length ? (o = En(t), n) : o
    }, n.source = function(t) {
      return arguments.length ? (i = En(t), n) : i
    }, n.target = function(t) {
      return arguments.length ? (a = En(t), n) : a
    }, n.startAngle = function(t) {
      return arguments.length ? (l = En(t), n) : l
    }, n.endAngle = function(t) {
      return arguments.length ? (c = En(t), n) : c
    }, n
  }, oa.svg.diagonal = function() {
    function n(n, u) {
      var i = t.call(this, n, u), a = e.call(this, n, u), o = (i.y + a.y) / 2, l = [i, {x: i.x, y: o}, {x: a.x, y: o}, a];
      return l = l.map(r), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3]
    }

    var t = Me, e = xe, r = Yi;
    return n.source = function(e) {
      return arguments.length ? (t = En(e), n) : t
    }, n.target = function(t) {
      return arguments.length ? (e = En(t), n) : e
    }, n.projection = function(t) {
      return arguments.length ? (r = t, n) : r
    }, n
  }, oa.svg.diagonal.radial = function() {
    var n = oa.svg.diagonal(), t = Yi, e = n.projection;
    return n.projection = function(n) {
      return arguments.length ? e(Zi(t = n)) : t
    }, n
  }, oa.svg.symbol = function() {
    function n(n, r) {
      return (Ul.get(t.call(this, n, r)) || $i)(e.call(this, n, r))
    }

    var t = Xi, e = Vi;
    return n.type = function(e) {
      return arguments.length ? (t = En(e), n) : t
    }, n.size = function(t) {
      return arguments.length ? (e = En(t), n) : e
    }, n
  };
  var Ul = oa.map({
    circle: $i, cross: function(n) {
      var t = Math.sqrt(n / 5) / 2;
      return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
    }, diamond: function(n) {
      var t = Math.sqrt(n / (2 * Fl)), e = t * Fl;
      return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"
    }, square: function(n) {
      var t = Math.sqrt(n) / 2;
      return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
    }, "triangle-down": function(n) {
      var t = Math.sqrt(n / jl), e = t * jl / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
    }, "triangle-up": function(n) {
      var t = Math.sqrt(n / jl), e = t * jl / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
    }
  });
  oa.svg.symbolTypes = Ul.keys();
  var jl = Math.sqrt(3), Fl = Math.tan(30 * Ia);
  Aa.transition = function(n) {
    for (var t, e, r = Hl || ++Zl, u = Ki(n), i = [], a = Ol || {time: Date.now(), ease: Nr, delay: 0, duration: 250}, o = -1, l = this.length; ++o < l;) {
      i.push(t = []);
      for (var c = this[o], s = -1, f = c.length; ++s < f;)(e = c[s]) && Qi(e, s, u, r, a), t.push(e)
    }
    return Wi(i, u, r)
  }, Aa.interrupt = function(n) {
    return this.each(null == n ? Il : Bi(Ki(n)))
  };
  var Hl, Ol, Il = Bi(Ki()), Yl = [], Zl = 0;
  Yl.call = Aa.call, Yl.empty = Aa.empty, Yl.node = Aa.node, Yl.size = Aa.size, oa.transition = function(n, t) {
    return n && n.transition ? Hl ? n.transition(t) : n : oa.selection().transition(n)
  }, oa.transition.prototype = Yl, Yl.select = function(n) {
    var t, e, r, u = this.id, i = this.namespace, a = [];
    n = A(n);
    for (var o = -1, l = this.length; ++o < l;) {
      a.push(t = []);
      for (var c = this[o], s = -1, f = c.length; ++s < f;)(r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Qi(e, s, i, u, r[i][u]), t.push(e)) : t.push(null)
    }
    return Wi(a, i, u)
  }, Yl.selectAll = function(n) {
    var t, e, r, u, i, a = this.id, o = this.namespace, l = [];
    n = C(n);
    for (var c = -1, s = this.length; ++c < s;)for (var f = this[c], h = -1, g = f.length; ++h < g;)if (r = f[h]) {
      i = r[o][a], e = n.call(r, r.__data__, h, c), l.push(t = []);
      for (var p = -1, v = e.length; ++p < v;)(u = e[p]) && Qi(u, p, o, a, i), t.push(u)
    }
    return Wi(l, o, a)
  }, Yl.filter = function(n) {
    var t, e, r, u = [];
    "function" != typeof n && (n = O(n));
    for (var i = 0, a = this.length; a > i; i++) {
      u.push(t = []);
      for (var e = this[i], o = 0, l = e.length; l > o; o++)(r = e[o]) && n.call(r, r.__data__, o, i) && t.push(r)
    }
    return Wi(u, this.namespace, this.id)
  }, Yl.tween = function(n, t) {
    var e = this.id, r = this.namespace;
    return arguments.length < 2 ? this.node()[r][e].tween.get(n) : Y(this, null == t ? function(t) {
      t[r][e].tween.remove(n)
    } : function(u) {
      u[r][e].tween.set(n, t)
    })
  }, Yl.attr = function(n, t) {
    function e() {
      this.removeAttribute(o)
    }

    function r() {
      this.removeAttributeNS(o.space, o.local)
    }

    function u(n) {
      return null == n ? e : (n += "", function() {
        var t, e = this.getAttribute(o);
        return e !== n && (t = a(e, n), function(n) {
            this.setAttribute(o, t(n))
          })
      })
    }

    function i(n) {
      return null == n ? r : (n += "", function() {
        var t, e = this.getAttributeNS(o.space, o.local);
        return e !== n && (t = a(e, n), function(n) {
            this.setAttributeNS(o.space, o.local, t(n))
          })
      })
    }

    if (arguments.length < 2) {
      for (t in n)this.attr(t, n[t]);
      return this
    }
    var a = "transform" == n ? $r : Mr, o = oa.ns.qualify(n);
    return Ji(this, "attr." + n, t, o.local ? i : u)
  }, Yl.attrTween = function(n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(u));
      return r && function(n) {
          this.setAttribute(u, r(n))
        }
    }

    function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
      return r && function(n) {
          this.setAttributeNS(u.space, u.local, r(n))
        }
    }

    var u = oa.ns.qualify(n);
    return this.tween("attr." + n, u.local ? r : e)
  }, Yl.style = function(n, e, r) {
    function u() {
      this.style.removeProperty(n)
    }

    function i(e) {
      return null == e ? u : (e += "", function() {
        var u, i = t(this).getComputedStyle(this, null).getPropertyValue(n);
        return i !== e && (u = Mr(i, e), function(t) {
            this.style.setProperty(n, u(t), r)
          })
      })
    }

    var a = arguments.length;
    if (3 > a) {
      if ("string" != typeof n) {
        2 > a && (e = "");
        for (r in n)this.style(r, n[r], e);
        return this
      }
      r = ""
    }
    return Ji(this, "style." + n, e, i)
  }, Yl.styleTween = function(n, e, r) {
    function u(u, i) {
      var a = e.call(this, u, i, t(this).getComputedStyle(this, null).getPropertyValue(n));
      return a && function(t) {
          this.style.setProperty(n, a(t), r)
        }
    }

    return arguments.length < 3 && (r = ""), this.tween("style." + n, u)
  }, Yl.text = function(n) {
    return Ji(this, "text", n, Gi)
  }, Yl.remove = function() {
    var n = this.namespace;
    return this.each("end.transition", function() {
      var t;
      this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
    })
  }, Yl.ease = function(n) {
    var t = this.id, e = this.namespace;
    return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = oa.ease.apply(oa, arguments)), Y(this, function(r) {
      r[e][t].ease = n
    }))
  }, Yl.delay = function(n) {
    var t = this.id, e = this.namespace;
    return arguments.length < 1 ? this.node()[e][t].delay : Y(this, "function" == typeof n ? function(r, u, i) {
      r[e][t].delay = +n.call(r, r.__data__, u, i)
    } : (n = +n, function(r) {
      r[e][t].delay = n
    }))
  }, Yl.duration = function(n) {
    var t = this.id, e = this.namespace;
    return arguments.length < 1 ? this.node()[e][t].duration : Y(this, "function" == typeof n ? function(r, u, i) {
      r[e][t].duration = Math.max(1, n.call(r, r.__data__, u, i))
    } : (n = Math.max(1, n), function(r) {
      r[e][t].duration = n
    }))
  }, Yl.each = function(n, t) {
    var e = this.id, r = this.namespace;
    if (arguments.length < 2) {
      var u = Ol, i = Hl;
      try {
        Hl = e, Y(this, function(t, u, i) {
          Ol = t[r][e], n.call(t, t.__data__, u, i)
        })
      } finally {
        Ol = u, Hl = i
      }
    } else Y(this, function(u) {
      var i = u[r][e];
      (i.event || (i.event = oa.dispatch("start", "end", "interrupt"))).on(n, t)
    });
    return this
  }, Yl.transition = function() {
    for (var n, t, e, r, u = this.id, i = ++Zl, a = this.namespace, o = [], l = 0, c = this.length; c > l; l++) {
      o.push(n = []);
      for (var t = this[l], s = 0, f = t.length; f > s; s++)(e = t[s]) && (r = e[a][u], Qi(e, s, a, i, {time: r.time, ease: r.ease, delay: r.delay + r.duration, duration: r.duration})), n.push(e)
    }
    return Wi(o, a, i)
  }, oa.svg.axis = function() {
    function n(n) {
      n.each(function() {
        var n, c = oa.select(this), s = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null == l ? f.ticks ? f.ticks.apply(f, o) : f.domain() : l, g = null == t ? f.tickFormat ? f.tickFormat.apply(f, o) : y : t, p = c.selectAll(".tick").data(h, f), v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Pa), d = oa.transition(p.exit()).style("opacity", Pa).remove(), m = oa.transition(p.order()).style("opacity", 1), M = Math.max(u, 0) + a, x = Zu(f), b = c.selectAll(".domain").data([0]), _ = (b.enter().append("path").attr("class", "domain"), oa.transition(b));
        v.append("line"), v.append("text");
        var w, S, k, N, E = v.select("line"), A = m.select("line"), C = p.select("text").text(g), z = v.select("text"), L = m.select("text"), q = "top" === r || "left" === r ? -1 : 1;
        if ("bottom" === r || "top" === r ? (n = na, w = "x", k = "y", S = "x2", N = "y2", C.attr("dy", 0 > q ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + q * i + "V0H" + x[1] + "V" + q * i)) : (n = ta, w = "y", k = "x", S = "y2", N = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > q ? "end" : "start"), _.attr("d", "M" + q * i + "," + x[0] + "H0V" + x[1] + "H" + q * i)), E.attr(N, q * u), z.attr(k, q * M), A.attr(S, 0).attr(N, q * u), L.attr(w, 0).attr(k, q * M), f.rangeBand) {
          var T = f, R = T.rangeBand() / 2;
          s = f = function(n) {
            return T(n) + R
          }
        } else s.rangeBand ? s = f : d.call(n, f, s);
        v.call(n, s, f), m.call(n, f, f)
      })
    }

    var t, e = oa.scale.linear(), r = Vl, u = 6, i = 6, a = 3, o = [10], l = null;
    return n.scale = function(t) {
      return arguments.length ? (e = t, n) : e
    }, n.orient = function(t) {
      return arguments.length ? (r = t in Xl ? t + "" : Vl, n) : r
    }, n.ticks = function() {
      return arguments.length ? (o = ca(arguments), n) : o
    }, n.tickValues = function(t) {
      return arguments.length ? (l = t, n) : l
    }, n.tickFormat = function(e) {
      return arguments.length ? (t = e, n) : t
    }, n.tickSize = function(t) {
      var e = arguments.length;
      return e ? (u = +t, i = +arguments[e - 1], n) : u
    }, n.innerTickSize = function(t) {
      return arguments.length ? (u = +t, n) : u
    }, n.outerTickSize = function(t) {
      return arguments.length ? (i = +t, n) : i
    }, n.tickPadding = function(t) {
      return arguments.length ? (a = +t, n) : a
    }, n.tickSubdivide = function() {
      return arguments.length && n
    }, n
  };
  var Vl = "bottom", Xl = {top: 1, right: 1, bottom: 1, left: 1};
  oa.svg.brush = function() {
    function n(t) {
      t.each(function() {
        var t = oa.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i), a = t.selectAll(".background").data([0]);
        a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var o = t.selectAll(".resize").data(v, y);
        o.exit().remove(), o.enter().append("g").attr("class", function(n) {
          return "resize " + n
        }).style("cursor", function(n) {
          return $l[n]
        }).append("rect").attr("x", function(n) {
          return /[ew]$/.test(n) ? -3 : null
        }).attr("y", function(n) {
          return /^[ns]/.test(n) ? -3 : null
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), o.style("display", n.empty() ? "none" : null);
        var l, f = oa.transition(t), h = oa.transition(a);
        c && (l = Zu(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), r(f)), s && (l = Zu(s), h.attr("y", l[0]).attr("height", l[1] - l[0]), u(f)), e(f)
      })
    }

    function e(n) {
      n.selectAll(".resize").attr("transform", function(n) {
        return "translate(" + f[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"
      })
    }

    function r(n) {
      n.select(".extent").attr("x", f[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
    }

    function u(n) {
      n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
    }

    function i() {
      function i() {
        32 == oa.event.keyCode && (C || (M = null, L[0] -= f[1], L[1] -= h[1], C = 2), S())
      }

      function v() {
        32 == oa.event.keyCode && 2 == C && (L[0] += f[1], L[1] += h[1], C = 0, S())
      }

      function d() {
        var n = oa.mouse(b), t = !1;
        x && (n[0] += x[0], n[1] += x[1]), C || (oa.event.altKey ? (M || (M = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), L[0] = f[+(n[0] < M[0])], L[1] = h[+(n[1] < M[1])]) : M = null), E && m(n, c, 0) && (r(k), t = !0), A && m(n, s, 1) && (u(k), t = !0), t && (e(k), w({type: "brush", mode: C ? "move" : "resize"}))
      }

      function m(n, t, e) {
        var r, u, i = Zu(t), l = i[0], c = i[1], s = L[e], v = e ? h : f, d = v[1] - v[0];
        return C && (l -= s, c -= d + s), r = (e ? p : g) ? Math.max(l, Math.min(c, n[e])) : n[e], C ? u = (r += s) + d : (M && (s = Math.max(l, Math.min(c, 2 * M[e] - r))), r > s ? (u = r, r = s) : u = s), v[0] != r || v[1] != u ? (e ? o = null : a = null, v[0] = r, v[1] = u, !0) : void 0
      }

      function y() {
        d(), k.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), oa.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), z(), w({type: "brushend"})
      }

      var M, x, b = this, _ = oa.select(oa.event.target), w = l.of(b, arguments), k = oa.select(b), N = _.datum(), E = !/^(n|s)$/.test(N) && c, A = !/^(e|w)$/.test(N) && s, C = _.classed("extent"), z = W(b), L = oa.mouse(b), q = oa.select(t(b)).on("keydown.brush", i).on("keyup.brush", v);
      if (oa.event.changedTouches ? q.on("touchmove.brush", d).on("touchend.brush", y) : q.on("mousemove.brush", d).on("mouseup.brush", y), k.interrupt().selectAll("*").interrupt(), C)L[0] = f[0] - L[0], L[1] = h[0] - L[1]; else if (N) {
        var T = +/w$/.test(N), R = +/^n/.test(N);
        x = [f[1 - T] - L[0], h[1 - R] - L[1]], L[0] = f[T], L[1] = h[R]
      } else oa.event.altKey && (M = L.slice());
      k.style("pointer-events", "none").selectAll(".resize").style("display", null), oa.select("body").style("cursor", _.style("cursor")), w({type: "brushstart"}), d()
    }

    var a, o, l = N(n, "brushstart", "brush", "brushend"), c = null, s = null, f = [0, 0], h = [0, 0], g = !0, p = !0, v = Bl[0];
    return n.event = function(n) {
      n.each(function() {
        var n = l.of(this, arguments), t = {x: f, y: h, i: a, j: o}, e = this.__chart__ || t;
        this.__chart__ = t, Hl ? oa.select(this).transition().each("start.brush", function() {
          a = e.i, o = e.j, f = e.x, h = e.y, n({type: "brushstart"})
        }).tween("brush:brush", function() {
          var e = xr(f, t.x), r = xr(h, t.y);
          return a = o = null, function(u) {
            f = t.x = e(u), h = t.y = r(u), n({type: "brush", mode: "resize"})
          }
        }).each("end.brush", function() {
          a = t.i, o = t.j, n({type: "brush", mode: "resize"}), n({type: "brushend"})
        }) : (n({type: "brushstart"}), n({type: "brush", mode: "resize"}), n({type: "brushend"}))
      })
    }, n.x = function(t) {
      return arguments.length ? (c = t, v = Bl[!c << 1 | !s], n) : c
    }, n.y = function(t) {
      return arguments.length ? (s = t, v = Bl[!c << 1 | !s], n) : s
    }, n.clamp = function(t) {
      return arguments.length ? (c && s ? (g = !!t[0], p = !!t[1]) : c ? g = !!t : s && (p = !!t), n) : c && s ? [g, p] : c ? g : s ? p : null
    }, n.extent = function(t) {
      var e, r, u, i, l;
      return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), a = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (l = e, e = r, r = l), (e != f[0] || r != f[1]) && (f = [e, r])), s && (u = t[0], i = t[1], c && (u = u[1], i = i[1]), o = [u, i], s.invert && (u = s(u), i = s(i)), u > i && (l = u, u = i, i = l), (u != h[0] || i != h[1]) && (h = [u, i])), n) : (c && (a ? (e = a[0], r = a[1]) : (e = f[0], r = f[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (l = e, e = r, r = l))), s && (o ? (u = o[0], i = o[1]) : (u = h[0], i = h[1], s.invert && (u = s.invert(u), i = s.invert(i)), u > i && (l = u, u = i, i = l))), c && s ? [[e, u], [r, i]] : c ? [e, r] : s && [u, i])
    }, n.clear = function() {
      return n.empty() || (f = [0, 0], h = [0, 0], a = o = null), n
    }, n.empty = function() {
      return !!c && f[0] == f[1] || !!s && h[0] == h[1]
    }, oa.rebind(n, l, "on")
  };
  var $l = {n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize"}, Bl = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], Wl = go.format = xo.timeFormat, Jl = Wl.utc, Gl = Jl("%Y-%m-%dT%H:%M:%S.%LZ");
  Wl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? ea : Gl, ea.parse = function(n) {
    var t = new Date(n);
    return isNaN(t) ? null : t
  }, ea.toString = Gl.toString, go.second = On(function(n) {
    return new po(1e3 * Math.floor(n / 1e3))
  }, function(n, t) {
    n.setTime(n.getTime() + 1e3 * Math.floor(t))
  }, function(n) {
    return n.getSeconds()
  }), go.seconds = go.second.range, go.seconds.utc = go.second.utc.range, go.minute = On(function(n) {
    return new po(6e4 * Math.floor(n / 6e4))
  }, function(n, t) {
    n.setTime(n.getTime() + 6e4 * Math.floor(t))
  }, function(n) {
    return n.getMinutes()
  }), go.minutes = go.minute.range, go.minutes.utc = go.minute.utc.range, go.hour = On(function(n) {
    var t = n.getTimezoneOffset() / 60;
    return new po(36e5 * (Math.floor(n / 36e5 - t) + t))
  }, function(n, t) {
    n.setTime(n.getTime() + 36e5 * Math.floor(t))
  }, function(n) {
    return n.getHours()
  }), go.hours = go.hour.range, go.hours.utc = go.hour.utc.range, go.month = On(function(n) {
    return n = go.day(n), n.setDate(1), n
  }, function(n, t) {
    n.setMonth(n.getMonth() + t)
  }, function(n) {
    return n.getMonth()
  }), go.months = go.month.range, go.months.utc = go.month.utc.range;
  var Kl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], Ql = [[go.second, 1], [go.second, 5], [go.second, 15], [go.second, 30], [go.minute, 1], [go.minute, 5], [go.minute, 15], [go.minute, 30], [go.hour, 1], [go.hour, 3], [go.hour, 6], [go.hour, 12], [go.day, 1], [go.day, 2], [go.week, 1], [go.month, 1], [go.month, 3], [go.year, 1]], nc = Wl.multi([
    [
      ".%L", function(n) {
      return n.getMilliseconds()
    }
    ], [
      ":%S", function(n) {
        return n.getSeconds()
      }
    ], [
      "%I:%M", function(n) {
        return n.getMinutes()
      }
    ], [
      "%I %p", function(n) {
        return n.getHours()
      }
    ], [
      "%a %d", function(n) {
        return n.getDay() && 1 != n.getDate()
      }
    ], [
      "%b %d", function(n) {
        return 1 != n.getDate()
      }
    ], [
      "%B", function(n) {
        return n.getMonth()
      }
    ], ["%Y", zt]
  ]), tc = {
    range: function(n, t, e) {
      return oa.range(Math.ceil(n / e) * e, +t, e).map(ua)
    }, floor: y, ceil: y
  };
  Ql.year = go.year, go.scale = function() {
    return ra(oa.scale.linear(), Ql, nc)
  };
  var ec = Ql.map(function(n) {
    return [n[0].utc, n[1]]
  }), rc = Jl.multi([
    [
      ".%L", function(n) {
      return n.getUTCMilliseconds()
    }
    ], [
      ":%S", function(n) {
        return n.getUTCSeconds()
      }
    ], [
      "%I:%M", function(n) {
        return n.getUTCMinutes()
      }
    ], [
      "%I %p", function(n) {
        return n.getUTCHours()
      }
    ], [
      "%a %d", function(n) {
        return n.getUTCDay() && 1 != n.getUTCDate()
      }
    ], [
      "%b %d", function(n) {
        return 1 != n.getUTCDate()
      }
    ], [
      "%B", function(n) {
        return n.getUTCMonth()
      }
    ], ["%Y", zt]
  ]);
  ec.year = go.year.utc, go.scale.utc = function() {
    return ra(oa.scale.linear(), ec, rc)
  }, oa.text = An(function(n) {
    return n.responseText
  }), oa.json = function(n, t) {
    return Cn(n, "application/json", ia, t)
  }, oa.html = function(n, t) {
    return Cn(n, "text/html", aa, t)
  }, oa.xml = An(function(n) {
    return n.responseXML
  }), "function" == typeof define && define.amd ? (this.d3 = oa, define(oa)) : "object" == typeof module && module.exports ? module.exports = oa : this.d3 = oa
}();
!function() {
  var a = {};
  a.dev = !1, a.tooltip = a.tooltip || {}, a.utils = a.utils || {}, a.models = a.models || {}, a.charts = {}, a.logs = {}, a.dom = {}, a.dispatch = d3.dispatch("render_start", "render_end"), Function.prototype.bind || (Function.prototype.bind = function(a) {
    if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var b = Array.prototype.slice.call(arguments, 1), c = this, d = function() {
    }, e = function() {
      return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
    };
    return d.prototype = this.prototype, e.prototype = new d, e
  }), a.dev && (a.dispatch.on("render_start", function(b) {
    a.logs.startTime = +new Date
  }), a.dispatch.on("render_end", function(b) {
    a.logs.endTime = +new Date, a.logs.totalTime = a.logs.endTime - a.logs.startTime, a.log("total", a.logs.totalTime)
  })), a.log = function() {
    if (a.dev && window.console && console.log && console.log.apply)console.log.apply(console, arguments); else if (a.dev && window.console && "function" == typeof console.log && Function.prototype.bind) {
      var b = Function.prototype.bind.call(console.log, console);
      b.apply(console, arguments)
    }
    return arguments[arguments.length - 1]
  }, a.deprecated = function(a, b) {
    console && console.warn && console.warn("nvd3 warning: `" + a + "` has been deprecated. ", b || "")
  }, a.render = function(b) {
    b = b || 1, a.render.active = !0, a.dispatch.render_start();
    var c = function() {
      for (var d, e, f = 0; b > f && (e = a.render.queue[f]); f++)d = e.generate(), typeof e.callback == typeof Function && e.callback(d);
      a.render.queue.splice(0, f), a.render.queue.length ? setTimeout(c) : (a.dispatch.render_end(), a.render.active = !1)
    };
    setTimeout(c)
  }, a.render.active = !1, a.render.queue = [], a.addGraph = function(b) {
    typeof arguments[0] == typeof Function && (b = {generate: arguments[0], callback: arguments[1]}), a.render.queue.push(b), a.render.active || a.render()
  }, "undefined" != typeof module && "undefined" != typeof exports && (module.exports = a), "undefined" != typeof window && (window.nv = a), a.dom.write = function(a) {
    return void 0 !== window.fastdom ? fastdom.write(a) : a()
  }, a.dom.read = function(a) {
    return void 0 !== window.fastdom ? fastdom.read(a) : a()
  }, a.interactiveGuideline = function() {
    "use strict";
    function b(l) {
      l.each(function(l) {
        function m() {
          var a = d3.mouse(this), d = a[0], e = a[1], h = !0, i = !1;
          if (k && (d = d3.event.offsetX, e = d3.event.offsetY, "svg" !== d3.event.target.tagName && (h = !1), d3.event.target.className.baseVal.match("nv-legend") && (i = !0)), h && (d -= c.left, e -= c.top), 0 > d || 0 > e || d > o || e > p || d3.event.relatedTarget && void 0 === d3.event.relatedTarget.ownerSVGElement || i) {
            if (k && d3.event.relatedTarget && void 0 === d3.event.relatedTarget.ownerSVGElement && (void 0 === d3.event.relatedTarget.className || d3.event.relatedTarget.className.match(j.nvPointerEventsClass)))return;
            return g.elementMouseout({mouseX: d, mouseY: e}), b.renderGuideLine(null), void j.hidden(!0)
          }
          j.hidden(!1);
          var l = "function" == typeof f.rangeBands, m = void 0;
          if (l) {
            var n = d3.bisect(f.range(), d) - 1;
            if (!(f.range()[n] + f.rangeBand() >= d))return g.elementMouseout({mouseX: d, mouseY: e}), b.renderGuideLine(null), void j.hidden(!0);
            m = f.domain()[d3.bisect(f.range(), d) - 1]
          } else m = f.invert(d);
          g.elementMousemove({mouseX: d, mouseY: e, pointXValue: m}), "dblclick" === d3.event.type && g.elementDblclick({mouseX: d, mouseY: e, pointXValue: m}), "click" === d3.event.type && g.elementClick({mouseX: d, mouseY: e, pointXValue: m}), "mousedown" === d3.event.type && g.elementMouseDown({mouseX: d, mouseY: e, pointXValue: m}), "mouseup" === d3.event.type && g.elementMouseUp({mouseX: d, mouseY: e, pointXValue: m})
        }

        var n = d3.select(this), o = d || 960, p = e || 400, q = n.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([l]), r = q.enter().append("g").attr("class", " nv-wrap nv-interactiveLineLayer");
        r.append("g").attr("class", "nv-interactiveGuideLine"), i && (i.on("touchmove", m).on("mousemove", m, !0).on("mouseout", m, !0).on("mousedown", m, !0).on("mouseup", m, !0).on("dblclick", m).on("click", m), b.guideLine = null, b.renderGuideLine = function(c) {
          h && (b.guideLine && b.guideLine.attr("x1") === c || a.dom.write(function() {
            var b = q.select(".nv-interactiveGuideLine").selectAll("line").data(null != c ? [a.utils.NaNtoZero(c)] : [], String);
            b.enter().append("line").attr("class", "nv-guideline").attr("x1", function(a) {
              return a
            }).attr("x2", function(a) {
              return a
            }).attr("y1", p).attr("y2", 0), b.exit().remove()
          }))
        })
      })
    }

    var c = {left: 0, top: 0}, d = null, e = null, f = d3.scale.linear(), g = d3.dispatch("elementMousemove", "elementMouseout", "elementClick", "elementDblclick", "elementMouseDown", "elementMouseUp"), h = !0, i = null, j = a.models.tooltip(), k = "ActiveXObject" in window;
    return j.duration(0).hideDelay(0).hidden(!1), b.dispatch = g, b.tooltip = j, b.margin = function(a) {
      return arguments.length ? (c.top = "undefined" != typeof a.top ? a.top : c.top, c.left = "undefined" != typeof a.left ? a.left : c.left, b) : c
    }, b.width = function(a) {
      return arguments.length ? (d = a, b) : d
    }, b.height = function(a) {
      return arguments.length ? (e = a, b) : e
    }, b.xScale = function(a) {
      return arguments.length ? (f = a, b) : f
    }, b.showGuideLine = function(a) {
      return arguments.length ? (h = a, b) : h
    }, b.svgContainer = function(a) {
      return arguments.length ? (i = a, b) : i
    }, b
  }, a.interactiveBisect = function(a, b, c) {
    "use strict";
    if (!(a instanceof Array))return null;
    var d;
    d = "function" != typeof c ? function(a) {
      return a.x
    } : c;
    var e = function(a, b) {
      return d(a) - b
    }, f = d3.bisector(e).left, g = d3.max([0, f(a, b) - 1]), h = d(a[g]);
    if ("undefined" == typeof h && (h = g), h === b)return g;
    var i = d3.min([g + 1, a.length - 1]), j = d(a[i]);
    return "undefined" == typeof j && (j = i), Math.abs(j - b) >= Math.abs(h - b) ? g : i
  }, a.nearestValueIndex = function(a, b, c) {
    "use strict";
    var d = 1 / 0, e = null;
    return a.forEach(function(a, f) {
      var g = Math.abs(b - a);
      null != a && d >= g && c > g && (d = g, e = f)
    }), e
  }, a.models.tooltip = function() {
    "use strict";
    function b() {
      if (!m) {
        var a = j ? j : document.body;
        m = d3.select(a).append("div").attr("class", "nvtooltip " + (i ? i : "xy-tooltip")).attr("id", d), m.style("top", 0).style("left", 0), m.style("opacity", 0), m.style("position", "fixed"), m.selectAll("div, table, td, tr").classed(r, !0), m.classed(r, !0)
      }
    }

    function c() {
      return o && x(e) ? (a.dom.write(function() {
        b();
        var a = w(e);
        a && (m.node().innerHTML = a), z()
      }), c) : void 0
    }

    var d = "nvtooltip-" + Math.floor(1e5 * Math.random()), e = null, f = "w", g = 25, h = 0, i = null, j = null, k = !0, l = 200, m = null, n = {left: null, top: null}, o = !0, p = 100, q = !0, r = "nv-pointer-events-none", s = function() {
      return {left: null !== d3.event ? d3.event.clientX : 0, top: null !== d3.event ? d3.event.clientY : 0}
    }, t = function(a, b) {
      return a
    }, u = function(a) {
      return a
    }, v = function(a, b) {
      return a
    }, w = function(a) {
      if (null === a)return "";
      var b = d3.select(document.createElement("table"));
      if (q) {
        var c = b.selectAll("thead").data([a]).enter().append("thead");
        c.append("tr").append("td").attr("colspan", 3).append("strong").classed("x-value", !0).html(u(a.value))
      }
      var d = b.selectAll("tbody").data([a]).enter().append("tbody"), e = d.selectAll("tr").data(function(a) {
        return a.series
      }).enter().append("tr").classed("highlight", function(a) {
        return a.highlight
      });
      e.append("td").classed("legend-color-guide", !0).append("div").style("background-color", function(a) {
        return a.color
      }), e.append("td").classed("key", !0).classed("total", function(a) {
        return !!a.total
      }).html(function(a, b) {
        return v(a.key, b)
      }), e.append("td").classed("value", !0).html(function(a, b) {
        return t(a.value, b)
      }), e.selectAll("td").each(function(a) {
        if (a.highlight) {
          var b = d3.scale.linear().domain([0, 1]).range(["#fff", a.color]), c = .6;
          d3.select(this).style("border-bottom-color", b(c)).style("border-top-color", b(c))
        }
      });
      var f = b.node().outerHTML;
      return void 0 !== a.footer && (f += "<div class='footer'>" + a.footer + "</div>"), f
    }, x = function(a) {
      if (a && a.series) {
        if (a.series instanceof Array)return !!a.series.length;
        if (a.series instanceof Object)return a.series = [a.series], !0
      }
      return !1
    }, y = function(a) {
      var b, c, d, e = m.node().offsetHeight, h = m.node().offsetWidth, i = document.documentElement.clientWidth, j = document.documentElement.clientHeight;
      switch (f) {
        case"e":
          b = -h - g, c = -(e / 2), a.left + b < 0 && (b = g), (d = a.top + c) < 0 && (c -= d), (d = a.top + c + e) > j && (c -= d - j);
          break;
        case"w":
          b = g, c = -(e / 2), a.left + b + h > i && (b = -h - g), (d = a.top + c) < 0 && (c -= d), (d = a.top + c + e) > j && (c -= d - j);
          break;
        case"n":
          b = -(h / 2) - 5, c = g, a.top + c + e > j && (c = -e - g), (d = a.left + b) < 0 && (b -= d), (d = a.left + b + h) > i && (b -= d - i);
          break;
        case"s":
          b = -(h / 2), c = -e - g, a.top + c < 0 && (c = g), (d = a.left + b) < 0 && (b -= d), (d = a.left + b + h) > i && (b -= d - i);
          break;
        case"center":
          b = -(h / 2), c = -(e / 2);
          break;
        default:
          b = 0, c = 0
      }
      return {left: b, top: c}
    }, z = function() {
      a.dom.read(function() {
        var a = s(), b = y(a), c = a.left + b.left, d = a.top + b.top;
        if (k)m.interrupt().transition().delay(l).duration(0).style("opacity", 0); else {
          var e = "translate(" + n.left + "px, " + n.top + "px)", f = "translate(" + c + "px, " + d + "px)", g = d3.interpolateString(e, f), h = m.style("opacity") < .1;
          m.interrupt().transition().duration(h ? 0 : p).styleTween("transform", function(a) {
            return g
          }, "important").styleTween("-webkit-transform", function(a) {
            return g
          }).style("-ms-transform", f).style("opacity", 1)
        }
        n.left = c, n.top = d
      })
    };
    return c.nvPointerEventsClass = r, c.options = a.utils.optionsFunc.bind(c), c._options = Object.create({}, {
      duration: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, gravity: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, distance: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, snapDistance: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, classes: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, chartContainer: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, enabled: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, hideDelay: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, contentGenerator: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, valueFormatter: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, headerFormatter: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, keyFormatter: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, headerEnabled: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, position: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, fixedTop: {
        get: function() {
          return null
        }, set: function(b) {
          a.deprecated("fixedTop", "feature removed after 1.8.1")
        }
      }, offset: {
        get: function() {
          return {left: 0, top: 0}
        }, set: function(b) {
          a.deprecated("offset", "use chart.tooltip.distance() instead")
        }
      }, hidden: {
        get: function() {
          return k
        }, set: function(a) {
          k != a && (k = !!a, c())
        }
      }, data: {
        get: function() {
          return e
        }, set: function(a) {
          a.point && (a.value = a.point.x, a.series = a.series || {}, a.series.value = a.point.y, a.series.color = a.point.color || a.series.color), e = a
        }
      }, node: {
        get: function() {
          return m.node()
        }, set: function(a) {
        }
      }, id: {
        get: function() {
          return d
        }, set: function(a) {
        }
      }
    }), a.utils.initOptions(c), c
  }, a.utils.windowSize = function() {
    var a = {width: 640, height: 480};
    return window.innerWidth && window.innerHeight ? (a.width = window.innerWidth, a.height = window.innerHeight, a) : "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth ? (a.width = document.documentElement.offsetWidth, a.height = document.documentElement.offsetHeight, a) : document.body && document.body.offsetWidth ? (a.width = document.body.offsetWidth, a.height = document.body.offsetHeight, a) : a
  }, a.utils.windowResize = function(b) {
    return window.addEventListener ? window.addEventListener("resize", b) : a.log("ERROR: Failed to bind to window.resize with: ", b), {
      callback: b, clear: function() {
        window.removeEventListener("resize", b)
      }
    }
  }, a.utils.getColor = function(b) {
    if (void 0 === b)return a.utils.defaultColor();
    if (Array.isArray(b)) {
      var c = d3.scale.ordinal().range(b);
      return function(a, b) {
        var d = void 0 === b ? a : b;
        return a.color || c(d)
      }
    }
    return b
  }, a.utils.defaultColor = function() {
    return a.utils.getColor(d3.scale.category20().range())
  }, a.utils.customTheme = function(a, b, c) {
    b = b || function(a) {
        return a.key
      }, c = c || d3.scale.category20().range();
    var d = c.length;
    return function(e, f) {
      var g = b(e);
      return "function" == typeof a[g] ? a[g]() : void 0 !== a[g] ? a[g] : (d || (d = c.length), d -= 1, c[d])
    }
  }, a.utils.pjax = function(b, c) {
    var d = function(d) {
      d3.html(d, function(d) {
        var e = d3.select(c).node();
        e.parentNode.replaceChild(d3.select(d).select(c).node(), e), a.utils.pjax(b, c)
      })
    };
    d3.selectAll(b).on("click", function() {
      history.pushState(this.href, this.textContent, this.href), d(this.href), d3.event.preventDefault()
    }), d3.select(window).on("popstate", function() {
      d3.event.state && d(d3.event.state)
    })
  }, a.utils.calcApproxTextWidth = function(a) {
    if ("function" == typeof a.style && "function" == typeof a.text) {
      var b = parseInt(a.style("font-size").replace("px", ""), 10), c = a.text().length;
      return c * b * .5
    }
    return 0
  }, a.utils.NaNtoZero = function(a) {
    return "number" != typeof a || isNaN(a) || null === a || a === 1 / 0 || a === -(1 / 0) ? 0 : a
  }, d3.selection.prototype.watchTransition = function(a) {
    var b = [this].concat([].slice.call(arguments, 1));
    return a.transition.apply(a, b)
  }, a.utils.renderWatch = function(b, c) {
    if (!(this instanceof a.utils.renderWatch))return new a.utils.renderWatch(b, c);
    var d = void 0 !== c ? c : 250, e = [], f = this;
    this.models = function(a) {
      return a = [].slice.call(arguments, 0), a.forEach(function(a) {
        a.__rendered = !1, function(a) {
          a.dispatch.on("renderEnd", function(b) {
            a.__rendered = !0, f.renderEnd("model")
          })
        }(a), e.indexOf(a) < 0 && e.push(a)
      }), this
    }, this.reset = function(a) {
      void 0 !== a && (d = a), e = []
    }, this.transition = function(a, b, c) {
      if (b = arguments.length > 1 ? [].slice.call(arguments, 1) : [], c = b.length > 1 ? b.pop() : void 0 !== d ? d : 250, a.__rendered = !1, e.indexOf(a) < 0 && e.push(a), 0 === c)return a.__rendered = !0, a.delay = function() {
        return this
      }, a.duration = function() {
        return this
      }, a;
      0 === a.length ? a.__rendered = !0 : a.every(function(a) {
        return !a.length
      }) ? a.__rendered = !0 : a.__rendered = !1;
      var g = 0;
      return a.transition().duration(c).each(function() {
        ++g
      }).each("end", function(c, d) {
        0 === --g && (a.__rendered = !0, f.renderEnd.apply(this, b))
      })
    }, this.renderEnd = function() {
      e.every(function(a) {
        return a.__rendered
      }) && (e.forEach(function(a) {
        a.__rendered = !1
      }), b.renderEnd.apply(this, arguments))
    }
  }, a.utils.deepExtend = function(b) {
    var c = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
    c.forEach(function(c) {
      for (var d in c) {
        var e = b[d] instanceof Array, f = "object" == typeof b[d], g = "object" == typeof c[d];
        f && !e && g ? a.utils.deepExtend(b[d], c[d]) : b[d] = c[d]
      }
    })
  }, a.utils.state = function() {
    if (!(this instanceof a.utils.state))return new a.utils.state;
    var b = {}, c = function() {
    }, d = function() {
      return {}
    }, e = null, f = null;
    this.dispatch = d3.dispatch("change", "set"), this.dispatch.on("set", function(a) {
      c(a, !0)
    }), this.getter = function(a) {
      return d = a, this
    }, this.setter = function(a, b) {
      return b || (b = function() {
      }), c = function(c, d) {
        a(c), d && b()
      }, this
    }, this.init = function(b) {
      e = e || {}, a.utils.deepExtend(e, b)
    };
    var g = function() {
      var a = d();
      if (JSON.stringify(a) === JSON.stringify(b))return !1;
      for (var c in a)void 0 === b[c] && (b[c] = {}), b[c] = a[c], f = !0;
      return !0
    };
    this.update = function() {
      e && (c(e, !1), e = null), g.call(this) && this.dispatch.change(b)
    }
  }, a.utils.optionsFunc = function(a) {
    return a && d3.map(a).forEach(function(a, b) {
      "function" == typeof this[a] && this[a](b)
    }.bind(this)), this
  }, a.utils.calcTicksX = function(b, c) {
    var d = 1, e = 0;
    for (e; e < c.length; e += 1) {
      var f = c[e] && c[e].values ? c[e].values.length : 0;
      d = f > d ? f : d
    }
    return a.log("Requested number of ticks: ", b), a.log("Calculated max values to be: ", d), b = b > d ? b = d - 1 : b, b = 1 > b ? 1 : b, b = Math.floor(b), a.log("Calculating tick count as: ", b), b
  }, a.utils.calcTicksY = function(b, c) {
    return a.utils.calcTicksX(b, c)
  }, a.utils.initOption = function(a, b) {
    a._calls && a._calls[b] ? a[b] = a._calls[b] : (a[b] = function(c) {
      return arguments.length ? (a._overrides[b] = !0, a._options[b] = c, a) : a._options[b]
    }, a["_" + b] = function(c) {
      return arguments.length ? (a._overrides[b] || (a._options[b] = c), a) : a._options[b]
    })
  }, a.utils.initOptions = function(b) {
    b._overrides = b._overrides || {};
    var c = Object.getOwnPropertyNames(b._options || {}), d = Object.getOwnPropertyNames(b._calls || {});
    c = c.concat(d);
    for (var e in c)a.utils.initOption(b, c[e])
  }, a.utils.inheritOptionsD3 = function(a, b, c) {
    a._d3options = c.concat(a._d3options || []), c.unshift(b), c.unshift(a), d3.rebind.apply(this, c)
  }, a.utils.arrayUnique = function(a) {
    return a.sort().filter(function(b, c) {
      return !c || b != a[c - 1]
    })
  }, a.utils.symbolMap = d3.map(), a.utils.symbol = function() {
    function b(b, e) {
      var f = c.call(this, b, e), g = d.call(this, b, e);
      return -1 !== d3.svg.symbolTypes.indexOf(f) ? d3.svg.symbol().type(f).size(g)() : a.utils.symbolMap.get(f)(g)
    }

    var c, d = 64;
    return b.type = function(a) {
      return arguments.length ? (c = d3.functor(a), b) : c
    }, b.size = function(a) {
      return arguments.length ? (d = d3.functor(a), b) : d
    }, b
  }, a.utils.inheritOptions = function(b, c) {
    var d = Object.getOwnPropertyNames(c._options || {}), e = Object.getOwnPropertyNames(c._calls || {}), f = c._inherited || [], g = c._d3options || [], h = d.concat(e).concat(f).concat(g);
    h.unshift(c), h.unshift(b), d3.rebind.apply(this, h), b._inherited = a.utils.arrayUnique(d.concat(e).concat(f).concat(d).concat(b._inherited || [])), b._d3options = a.utils.arrayUnique(g.concat(b._d3options || []))
  }, a.utils.initSVG = function(a) {
    a.classed({"nvd3-svg": !0})
  }, a.utils.sanitizeHeight = function(a, b) {
    return a || parseInt(b.style("height"), 10) || 400
  }, a.utils.sanitizeWidth = function(a, b) {
    return a || parseInt(b.style("width"), 10) || 960
  }, a.utils.availableHeight = function(b, c, d) {
    return Math.max(0, a.utils.sanitizeHeight(b, c) - d.top - d.bottom)
  }, a.utils.availableWidth = function(b, c, d) {
    return Math.max(0, a.utils.sanitizeWidth(b, c) - d.left - d.right)
  }, a.utils.noData = function(b, c) {
    var d = b.options(), e = d.margin(), f = d.noData(), g = null == f ? ["No Data Available."] : [f], h = a.utils.availableHeight(null, c, e), i = a.utils.availableWidth(null, c, e), j = e.left + i / 2, k = e.top + h / 2;
    c.selectAll("g").remove();
    var l = c.selectAll(".nv-noData").data(g);
    l.enter().append("text").attr("class", "nvd3 nv-noData").attr("dy", "-.7em").style("text-anchor", "middle"), l.attr("x", j).attr("y", k).text(function(a) {
      return a
    })
  }, a.utils.wrapTicks = function(a, b) {
    a.each(function() {
      for (var a, c = d3.select(this), d = c.text().split(/\s+/).reverse(), e = [], f = 0, g = 1.1, h = c.attr("y"), i = parseFloat(c.attr("dy")), j = c.text(null).append("tspan").attr("x", 0).attr("y", h).attr("dy", i + "em"); a = d.pop();)e.push(a), j.text(e.join(" ")), j.node().getComputedTextLength() > b && (e.pop(), j.text(e.join(" ")), e = [a], j = c.append("tspan").attr("x", 0).attr("y", h).attr("dy", ++f * g + i + "em").text(a))
    })
  }, a.utils.arrayEquals = function(b, c) {
    if (b === c)return !0;
    if (!b || !c)return !1;
    if (b.length != c.length)return !1;
    for (var d = 0, e = b.length; e > d; d++)if (b[d] instanceof Array && c[d] instanceof Array) {
      if (!a.arrayEquals(b[d], c[d]))return !1
    } else if (b[d] != c[d])return !1;
    return !0
  }, a.models.axis = function() {
    "use strict";
    function b(g) {
      return s.reset(), g.each(function(b) {
        var g = d3.select(this);
        a.utils.initSVG(g);
        var p = g.selectAll("g.nv-wrap.nv-axis").data([b]), q = p.enter().append("g").attr("class", "nvd3 nv-wrap nv-axis"), t = (q.append("g"), p.select("g"));
        null !== n ? c.ticks(n) : ("top" == c.orient() || "bottom" == c.orient()) && c.ticks(Math.abs(d.range()[1] - d.range()[0]) / 100), t.watchTransition(s, "axis").call(c), r = r || c.scale();
        var u = c.tickFormat();
        null == u && (u = r.tickFormat());
        var v = t.selectAll("text.nv-axislabel").data([h || null]);
        v.exit().remove();
        var w, x, y;
        switch (c.orient()) {
          case"top":
            v.enter().append("text").attr("class", "nv-axislabel"), y = 0, 1 === d.range().length ? y = m ? 2 * d.range()[0] + d.rangeBand() : 0 : 2 === d.range().length ? y = m ? d.range()[0] + d.range()[1] + d.rangeBand() : d.range()[1] : d.range().length > 2 && (y = d.range()[d.range().length - 1] + (d.range()[1] - d.range()[0])), v.attr("text-anchor", "middle").attr("y", 0).attr("x", y / 2), i && (x = p.selectAll("g.nv-axisMaxMin").data(d.domain()), x.enter().append("g").attr("class", function(a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-x", 0 == b ? "nv-axisMin-x" : "nv-axisMax-x"].join(" ")
            }).append("text"), x.exit().remove(), x.attr("transform", function(b, c) {
              return "translate(" + a.utils.NaNtoZero(d(b)) + ",0)"
            }).select("text").attr("dy", "-0.5em").attr("y", -c.tickPadding()).attr("text-anchor", "middle").text(function(a, b) {
              var c = u(a);
              return ("" + c).match("NaN") ? "" : c
            }), x.watchTransition(s, "min-max top").attr("transform", function(b, c) {
              return "translate(" + a.utils.NaNtoZero(d.range()[c]) + ",0)"
            }));
            break;
          case"bottom":
            w = o + 36;
            var z = 30, A = 0, B = t.selectAll("g").select("text"), C = "";
            if (j % 360) {
              B.each(function(a, b) {
                var c = this.getBoundingClientRect(), d = c.width;
                A = c.height, d > z && (z = d)
              }), C = "rotate(" + j + " 0," + (A / 2 + c.tickPadding()) + ")";
              var D = Math.abs(Math.sin(j * Math.PI / 180));
              w = (D ? D * z : z) + 30, B.attr("transform", C).style("text-anchor", j % 360 > 0 ? "start" : "end")
            } else l ? B.attr("transform", function(a, b) {
              return "translate(0," + (b % 2 == 0 ? "0" : "12") + ")"
            }) : B.attr("transform", "translate(0,0)");
            v.enter().append("text").attr("class", "nv-axislabel"), y = 0, 1 === d.range().length ? y = m ? 2 * d.range()[0] + d.rangeBand() : 0 : 2 === d.range().length ? y = m ? d.range()[0] + d.range()[1] + d.rangeBand() : d.range()[1] : d.range().length > 2 && (y = d.range()[d.range().length - 1] + (d.range()[1] - d.range()[0])), v.attr("text-anchor", "middle").attr("y", w).attr("x", y / 2), i && (x = p.selectAll("g.nv-axisMaxMin").data([d.domain()[0], d.domain()[d.domain().length - 1]]), x.enter().append("g").attr("class", function(a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-x", 0 == b ? "nv-axisMin-x" : "nv-axisMax-x"].join(" ")
            }).append("text"), x.exit().remove(), x.attr("transform", function(b, c) {
              return "translate(" + a.utils.NaNtoZero(d(b) + (m ? d.rangeBand() / 2 : 0)) + ",0)"
            }).select("text").attr("dy", ".71em").attr("y", c.tickPadding()).attr("transform", C).style("text-anchor", j ? j % 360 > 0 ? "start" : "end" : "middle").text(function(a, b) {
              var c = u(a);
              return ("" + c).match("NaN") ? "" : c
            }), x.watchTransition(s, "min-max bottom").attr("transform", function(b, c) {
              return "translate(" + a.utils.NaNtoZero(d(b) + (m ? d.rangeBand() / 2 : 0)) + ",0)"
            }));
            break;
          case"right":
            v.enter().append("text").attr("class", "nv-axislabel"), v.style("text-anchor", k ? "middle" : "begin").attr("transform", k ? "rotate(90)" : "").attr("y", k ? -Math.max(e.right, f) + 12 : -10).attr("x", k ? d3.max(d.range()) / 2 : c.tickPadding()), i && (x = p.selectAll("g.nv-axisMaxMin").data(d.domain()), x.enter().append("g").attr("class", function(a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-y", 0 == b ? "nv-axisMin-y" : "nv-axisMax-y"].join(" ")
            }).append("text").style("opacity", 0), x.exit().remove(), x.attr("transform", function(b, c) {
              return "translate(0," + a.utils.NaNtoZero(d(b)) + ")"
            }).select("text").attr("dy", ".32em").attr("y", 0).attr("x", c.tickPadding()).style("text-anchor", "start").text(function(a, b) {
              var c = u(a);
              return ("" + c).match("NaN") ? "" : c
            }), x.watchTransition(s, "min-max right").attr("transform", function(b, c) {
              return "translate(0," + a.utils.NaNtoZero(d.range()[c]) + ")"
            }).select("text").style("opacity", 1));
            break;
          case"left":
            v.enter().append("text").attr("class", "nv-axislabel"), v.style("text-anchor", k ? "middle" : "end").attr("transform", k ? "rotate(-90)" : "").attr("y", k ? -Math.max(e.left, f) + 25 - (o || 0) : -10).attr("x", k ? -d3.max(d.range()) / 2 : -c.tickPadding()), i && (x = p.selectAll("g.nv-axisMaxMin").data(d.domain()), x.enter().append("g").attr("class", function(a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-y", 0 == b ? "nv-axisMin-y" : "nv-axisMax-y"].join(" ")
            }).append("text").style("opacity", 0), x.exit().remove(), x.attr("transform", function(b, c) {
              return "translate(0," + a.utils.NaNtoZero(r(b)) + ")"
            }).select("text").attr("dy", ".32em").attr("y", 0).attr("x", -c.tickPadding()).attr("text-anchor", "end").text(function(a, b) {
              var c = u(a);
              return ("" + c).match("NaN") ? "" : c
            }), x.watchTransition(s, "min-max right").attr("transform", function(b, c) {
              return "translate(0," + a.utils.NaNtoZero(d.range()[c]) + ")"
            }).select("text").style("opacity", 1))
        }
        if (v.text(function(a) {
            return a
          }), !i || "left" !== c.orient() && "right" !== c.orient() || (t.selectAll("g").each(function(a, b) {
            d3.select(this).select("text").attr("opacity", 1), (d(a) < d.range()[1] + 10 || d(a) > d.range()[0] - 10) && ((a > 1e-10 || -1e-10 > a) && d3.select(this).attr("opacity", 0), d3.select(this).select("text").attr("opacity", 0))
          }), d.domain()[0] == d.domain()[1] && 0 == d.domain()[0] && p.selectAll("g.nv-axisMaxMin").style("opacity", function(a, b) {
            return b ? 0 : 1
          })), i && ("top" === c.orient() || "bottom" === c.orient())) {
          var E = [];
          p.selectAll("g.nv-axisMaxMin").each(function(a, b) {
            try {
              b ? E.push(d(a) - this.getBoundingClientRect().width - 4) : E.push(d(a) + this.getBoundingClientRect().width + 4)
            } catch (c) {
              b ? E.push(d(a) - 4) : E.push(d(a) + 4)
            }
          }), t.selectAll("g").each(function(a, b) {
            (d(a) < E[0] || d(a) > E[1]) && (a > 1e-10 || -1e-10 > a ? d3.select(this).remove() : d3.select(this).select("text").remove())
          })
        }
        t.selectAll(".tick").filter(function(a) {
          return !parseFloat(Math.round(1e5 * a) / 1e6) && void 0 !== a
        }).classed("zero", !0), r = d.copy()
      }), s.renderEnd("axis immediate"), b
    }

    var c = d3.svg.axis(), d = d3.scale.linear(), e = {top: 0, right: 0, bottom: 0, left: 0}, f = 75, g = 60, h = null, i = !0, j = 0, k = !0, l = !1, m = !1, n = null, o = 0, p = 250, q = d3.dispatch("renderEnd");
    c.scale(d).orient("bottom").tickFormat(function(a) {
      return a
    });
    var r, s = a.utils.renderWatch(q, p);
    return b.axis = c, b.dispatch = q, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      axisLabelDistance: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, staggerLabels: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, rotateLabels: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, rotateYLabel: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, showMaxMin: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, axisLabel: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, height: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, ticks: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, width: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, margin: {
        get: function() {
          return e
        }, set: function(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left
        }
      }, duration: {
        get: function() {
          return p
        }, set: function(a) {
          p = a, s.reset(p)
        }
      }, scale: {
        get: function() {
          return d
        }, set: function(e) {
          d = e, c.scale(d), m = "function" == typeof d.rangeBands, a.utils.inheritOptionsD3(b, d, ["domain", "range", "rangeBand", "rangeBands"])
        }
      }
    }), a.utils.initOptions(b), a.utils.inheritOptionsD3(b, c, ["orient", "tickValues", "tickSubdivide", "tickSize", "tickPadding", "tickFormat"]), a.utils.inheritOptionsD3(b, d, ["domain", "range", "rangeBand", "rangeBands"]), b
  }, a.models.boxPlot = function() {
    "use strict";
    function b(l) {
      return v.reset(), l.each(function(b) {
        var l = j - i.left - i.right, p = k - i.top - i.bottom;
        r = d3.select(this), a.utils.initSVG(r), m.domain(c || b.map(function(a, b) {
            return o(a, b)
          })).rangeBands(e || [0, l], .1);
        var w = [];
        if (!d) {
          var x = d3.min(b.map(function(a) {
            var b = [];
            return b.push(a.values.Q1), a.values.hasOwnProperty("whisker_low") && null !== a.values.whisker_low && b.push(a.values.whisker_low), a.values.hasOwnProperty("outliers") && null !== a.values.outliers && (b = b.concat(a.values.outliers)), d3.min(b)
          })), y = d3.max(b.map(function(a) {
            var b = [];
            return b.push(a.values.Q3), a.values.hasOwnProperty("whisker_high") && null !== a.values.whisker_high && b.push(a.values.whisker_high), a.values.hasOwnProperty("outliers") && null !== a.values.outliers && (b = b.concat(a.values.outliers)), d3.max(b)
          }));
          w = [x, y]
        }
        n.domain(d || w), n.range(f || [p, 0]), g = g || m, h = h || n.copy().range([n(0), n(0)]);
        var z = r.selectAll("g.nv-wrap").data([b]);
        z.enter().append("g").attr("class", "nvd3 nv-wrap");
        z.attr("transform", "translate(" + i.left + "," + i.top + ")");
        var A = z.selectAll(".nv-boxplot").data(function(a) {
          return a
        }), B = A.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6);
        A.attr("class", "nv-boxplot").attr("transform", function(a, b, c) {
          return "translate(" + (m(o(a, b)) + .05 * m.rangeBand()) + ", 0)"
        }).classed("hover", function(a) {
          return a.hover
        }), A.watchTransition(v, "nv-boxplot: boxplots").style("stroke-opacity", 1).style("fill-opacity", .75).delay(function(a, c) {
          return c * t / b.length
        }).attr("transform", function(a, b) {
          return "translate(" + (m(o(a, b)) + .05 * m.rangeBand()) + ", 0)"
        }), A.exit().remove(), B.each(function(a, b) {
          var c = d3.select(this);
          ["low", "high"].forEach(function(d) {
            a.values.hasOwnProperty("whisker_" + d) && null !== a.values["whisker_" + d] && (c.append("line").style("stroke", a.color ? a.color : q(a, b)).attr("class", "nv-boxplot-whisker nv-boxplot-" + d), c.append("line").style("stroke", a.color ? a.color : q(a, b)).attr("class", "nv-boxplot-tick nv-boxplot-" + d))
          })
        });
        var C = A.selectAll(".nv-boxplot-outlier").data(function(a) {
          return a.values.hasOwnProperty("outliers") && null !== a.values.outliers ? a.values.outliers : []
        });
        C.enter().append("circle").style("fill", function(a, b, c) {
          return q(a, c)
        }).style("stroke", function(a, b, c) {
          return q(a, c)
        }).on("mouseover", function(a, b, c) {
          d3.select(this).classed("hover", !0), s.elementMouseover({series: {key: a, color: q(a, c)}, e: d3.event})
        }).on("mouseout", function(a, b, c) {
          d3.select(this).classed("hover", !1), s.elementMouseout({series: {key: a, color: q(a, c)}, e: d3.event})
        }).on("mousemove", function(a, b) {
          s.elementMousemove({e: d3.event})
        }), C.attr("class", "nv-boxplot-outlier"), C.watchTransition(v, "nv-boxplot: nv-boxplot-outlier").attr("cx", .45 * m.rangeBand()).attr("cy", function(a, b, c) {
          return n(a)
        }).attr("r", "3"), C.exit().remove();
        var D = function() {
          return null === u ? .9 * m.rangeBand() : Math.min(75, .9 * m.rangeBand())
        }, E = function() {
          return .45 * m.rangeBand() - D() / 2
        }, F = function() {
          return .45 * m.rangeBand() + D() / 2
        };
        ["low", "high"].forEach(function(a) {
          var b = "low" === a ? "Q1" : "Q3";
          A.select("line.nv-boxplot-whisker.nv-boxplot-" + a).watchTransition(v, "nv-boxplot: boxplots").attr("x1", .45 * m.rangeBand()).attr("y1", function(b, c) {
            return n(b.values["whisker_" + a])
          }).attr("x2", .45 * m.rangeBand()).attr("y2", function(a, c) {
            return n(a.values[b])
          }), A.select("line.nv-boxplot-tick.nv-boxplot-" + a).watchTransition(v, "nv-boxplot: boxplots").attr("x1", E).attr("y1", function(b, c) {
            return n(b.values["whisker_" + a])
          }).attr("x2", F).attr("y2", function(b, c) {
            return n(b.values["whisker_" + a])
          })
        }), ["low", "high"].forEach(function(a) {
          B.selectAll(".nv-boxplot-" + a).on("mouseover", function(b, c, d) {
            d3.select(this).classed("hover", !0), s.elementMouseover({series: {key: b.values["whisker_" + a], color: q(b, d)}, e: d3.event})
          }).on("mouseout", function(b, c, d) {
            d3.select(this).classed("hover", !1), s.elementMouseout({series: {key: b.values["whisker_" + a], color: q(b, d)}, e: d3.event})
          }).on("mousemove", function(a, b) {
            s.elementMousemove({e: d3.event})
          })
        }), B.append("rect").attr("class", "nv-boxplot-box").on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0), s.elementMouseover({key: a.label, value: a.label, series: [{key: "Q3", value: a.values.Q3, color: a.color || q(a, b)}, {key: "Q2", value: a.values.Q2, color: a.color || q(a, b)}, {key: "Q1", value: a.values.Q1, color: a.color || q(a, b)}], data: a, index: b, e: d3.event})
        }).on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1), s.elementMouseout({key: a.label, value: a.label, series: [{key: "Q3", value: a.values.Q3, color: a.color || q(a, b)}, {key: "Q2", value: a.values.Q2, color: a.color || q(a, b)}, {key: "Q1", value: a.values.Q1, color: a.color || q(a, b)}], data: a, index: b, e: d3.event})
        }).on("mousemove", function(a, b) {
          s.elementMousemove({e: d3.event})
        }), A.select("rect.nv-boxplot-box").watchTransition(v, "nv-boxplot: boxes").attr("y", function(a, b) {
          return n(a.values.Q3)
        }).attr("width", D).attr("x", E).attr("height", function(a, b) {
          return Math.abs(n(a.values.Q3) - n(a.values.Q1)) || 1
        }).style("fill", function(a, b) {
          return a.color || q(a, b)
        }).style("stroke", function(a, b) {
          return a.color || q(a, b)
        }), B.append("line").attr("class", "nv-boxplot-median"), A.select("line.nv-boxplot-median").watchTransition(v, "nv-boxplot: boxplots line").attr("x1", E).attr("y1", function(a, b) {
          return n(a.values.Q2)
        }).attr("x2", F).attr("y2", function(a, b) {
          return n(a.values.Q2)
        }), g = m.copy(), h = n.copy()
      }), v.renderEnd("nv-boxplot immediate"), b
    }

    var c, d, e, f, g, h, i = {top: 0, right: 0, bottom: 0, left: 0}, j = 960, k = 500, l = Math.floor(1e4 * Math.random()), m = d3.scale.ordinal(), n = d3.scale.linear(), o = function(a) {
      return a.x
    }, p = function(a) {
      return a.y
    }, q = a.utils.defaultColor(), r = null, s = d3.dispatch("elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"), t = 250, u = null, v = a.utils.renderWatch(s, t);
    return b.dispatch = s, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, height: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, maxBoxWidth: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, x: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, y: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, xScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, yScale: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, xDomain: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, yDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, xRange: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, yRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, id: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, margin: {
        get: function() {
          return i
        }, set: function(a) {
          i.top = void 0 !== a.top ? a.top : i.top, i.right = void 0 !== a.right ? a.right : i.right, i.bottom = void 0 !== a.bottom ? a.bottom : i.bottom, i.left = void 0 !== a.left ? a.left : i.left
        }
      }, color: {
        get: function() {
          return q
        }, set: function(b) {
          q = a.utils.getColor(b)
        }
      }, duration: {
        get: function() {
          return t
        }, set: function(a) {
          t = a, v.reset(t)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.boxPlotChart = function() {
    "use strict";
    function b(k) {
      return t.reset(), t.models(e), l && t.models(f), m && t.models(g), k.each(function(k) {
        var p = d3.select(this);
        a.utils.initSVG(p);
        var t = (i || parseInt(p.style("width")) || 960) - h.left - h.right, u = (j || parseInt(p.style("height")) || 400) - h.top - h.bottom;
        if (b.update = function() {
            r.beforeUpdate(),
              p.transition().duration(s).call(b)
          }, b.container = this, !(k && k.length && k.filter(function(a) {
            return a.values.hasOwnProperty("Q1") && a.values.hasOwnProperty("Q2") && a.values.hasOwnProperty("Q3")
          }).length)) {
          var v = p.selectAll(".nv-noData").data([q]);
          return v.enter().append("text").attr("class", "nvd3 nv-noData").attr("dy", "-.7em").style("text-anchor", "middle"), v.attr("x", h.left + t / 2).attr("y", h.top + u / 2).text(function(a) {
            return a
          }), b
        }
        p.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale().clamp(!0);
        var w = p.selectAll("g.nv-wrap.nv-boxPlotWithAxes").data([k]), x = w.enter().append("g").attr("class", "nvd3 nv-wrap nv-boxPlotWithAxes").append("g"), y = x.append("defs"), z = w.select("g");
        x.append("g").attr("class", "nv-x nv-axis"), x.append("g").attr("class", "nv-y nv-axis").append("g").attr("class", "nv-zeroLine").append("line"), x.append("g").attr("class", "nv-barsWrap"), z.attr("transform", "translate(" + h.left + "," + h.top + ")"), n && z.select(".nv-y.nv-axis").attr("transform", "translate(" + t + ",0)"), e.width(t).height(u);
        var A = z.select(".nv-barsWrap").datum(k.filter(function(a) {
          return !a.disabled
        }));
        if (A.transition().call(e), y.append("clipPath").attr("id", "nv-x-label-clip-" + e.id()).append("rect"), z.select("#nv-x-label-clip-" + e.id() + " rect").attr("width", c.rangeBand() * (o ? 2 : 1)).attr("height", 16).attr("x", -c.rangeBand() / (o ? 1 : 2)), l) {
          f.scale(c).ticks(a.utils.calcTicksX(t / 100, k)).tickSize(-u, 0), z.select(".nv-x.nv-axis").attr("transform", "translate(0," + d.range()[0] + ")"), z.select(".nv-x.nv-axis").call(f);
          var B = z.select(".nv-x.nv-axis").selectAll("g");
          o && B.selectAll("text").attr("transform", function(a, b, c) {
            return "translate(0," + (c % 2 == 0 ? "5" : "17") + ")"
          })
        }
        m && (g.scale(d).ticks(Math.floor(u / 36)).tickSize(-t, 0), z.select(".nv-y.nv-axis").call(g)), z.select(".nv-zeroLine line").attr("x1", 0).attr("x2", t).attr("y1", d(0)).attr("y2", d(0))
      }), t.renderEnd("nv-boxplot chart immediate"), b
    }

    var c, d, e = a.models.boxPlot(), f = a.models.axis(), g = a.models.axis(), h = {top: 15, right: 10, bottom: 50, left: 60}, i = null, j = null, k = a.utils.getColor(), l = !0, m = !0, n = !1, o = !1, p = a.models.tooltip(), q = "No Data Available.", r = d3.dispatch("beforeUpdate", "renderEnd"), s = 250;
    f.orient("bottom").showMaxMin(!1).tickFormat(function(a) {
      return a
    }), g.orient(n ? "right" : "left").tickFormat(d3.format(",.1f")), p.duration(0);
    var t = a.utils.renderWatch(r, s);
    return e.dispatch.on("elementMouseover.tooltip", function(a) {
      p.data(a).hidden(!1)
    }), e.dispatch.on("elementMouseout.tooltip", function(a) {
      p.data(a).hidden(!0)
    }), e.dispatch.on("elementMousemove.tooltip", function(a) {
      p()
    }), b.dispatch = r, b.boxplot = e, b.xAxis = f, b.yAxis = g, b.tooltip = p, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, height: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, staggerLabels: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, showXAxis: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, showYAxis: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, tooltipContent: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, noData: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, margin: {
        get: function() {
          return h
        }, set: function(a) {
          h.top = void 0 !== a.top ? a.top : h.top, h.right = void 0 !== a.right ? a.right : h.right, h.bottom = void 0 !== a.bottom ? a.bottom : h.bottom, h.left = void 0 !== a.left ? a.left : h.left
        }
      }, duration: {
        get: function() {
          return s
        }, set: function(a) {
          s = a, t.reset(s), e.duration(s), f.duration(s), g.duration(s)
        }
      }, color: {
        get: function() {
          return k
        }, set: function(b) {
          k = a.utils.getColor(b), e.color(k)
        }
      }, rightAlignYAxis: {
        get: function() {
          return n
        }, set: function(a) {
          n = a, g.orient(a ? "right" : "left")
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.bullet = function() {
    "use strict";
    function b(d) {
      return d.each(function(b, d) {
        var p = m - c.left - c.right, s = n - c.top - c.bottom;
        o = d3.select(this), a.utils.initSVG(o);
        var t = f.call(this, b, d).slice().sort(d3.descending), u = g.call(this, b, d).slice().sort(d3.descending), v = h.call(this, b, d).slice().sort(d3.descending), w = i.call(this, b, d).slice(), x = j.call(this, b, d).slice(), y = k.call(this, b, d).slice(), z = d3.scale.linear().domain(d3.extent(d3.merge([l, t]))).range(e ? [p, 0] : [0, p]);
        this.__chart__ || d3.scale.linear().domain([0, 1 / 0]).range(z.range());
        this.__chart__ = z;
        var A = d3.min(t), B = d3.max(t), C = t[1], D = o.selectAll("g.nv-wrap.nv-bullet").data([b]), E = D.enter().append("g").attr("class", "nvd3 nv-wrap nv-bullet"), F = E.append("g"), G = D.select("g");
        F.append("rect").attr("class", "nv-range nv-rangeMax"), F.append("rect").attr("class", "nv-range nv-rangeAvg"), F.append("rect").attr("class", "nv-range nv-rangeMin"), F.append("rect").attr("class", "nv-measure"), D.attr("transform", "translate(" + c.left + "," + c.top + ")");
        var H = function(a) {
          return Math.abs(z(a) - z(0))
        }, I = function(a) {
          return z(0 > a ? a : 0)
        };
        G.select("rect.nv-rangeMax").attr("height", s).attr("width", H(B > 0 ? B : A)).attr("x", I(B > 0 ? B : A)).datum(B > 0 ? B : A), G.select("rect.nv-rangeAvg").attr("height", s).attr("width", H(C)).attr("x", I(C)).datum(C), G.select("rect.nv-rangeMin").attr("height", s).attr("width", H(B)).attr("x", I(B)).attr("width", H(B > 0 ? A : B)).attr("x", I(B > 0 ? A : B)).datum(B > 0 ? A : B), G.select("rect.nv-measure").style("fill", q).attr("height", s / 3).attr("y", s / 3).attr("width", 0 > v ? z(0) - z(v[0]) : z(v[0]) - z(0)).attr("x", I(v)).on("mouseover", function() {
          r.elementMouseover({value: v[0], label: y[0] || "Current", color: d3.select(this).style("fill")})
        }).on("mousemove", function() {
          r.elementMousemove({value: v[0], label: y[0] || "Current", color: d3.select(this).style("fill")})
        }).on("mouseout", function() {
          r.elementMouseout({value: v[0], label: y[0] || "Current", color: d3.select(this).style("fill")})
        });
        var J = s / 6, K = u.map(function(a, b) {
          return {value: a, label: x[b]}
        });
        F.selectAll("path.nv-markerTriangle").data(K).enter().append("path").attr("class", "nv-markerTriangle").attr("d", "M0," + J + "L" + J + "," + -J + " " + -J + "," + -J + "Z").on("mouseover", function(a) {
          r.elementMouseover({value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill"), pos: [z(a.value), s / 2]})
        }).on("mousemove", function(a) {
          r.elementMousemove({value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          r.elementMouseout({value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill")})
        }), G.selectAll("path.nv-markerTriangle").data(K).attr("transform", function(a) {
          return "translate(" + z(a.value) + "," + s / 2 + ")"
        }), D.selectAll(".nv-range").on("mouseover", function(a, b) {
          var c = w[b] || (b ? 1 == b ? "Mean" : "Minimum" : "Maximum");
          r.elementMouseover({value: a, label: c, color: d3.select(this).style("fill")})
        }).on("mousemove", function() {
          r.elementMousemove({value: v[0], label: y[0] || "Previous", color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          var c = w[b] || (b ? 1 == b ? "Mean" : "Minimum" : "Maximum");
          r.elementMouseout({value: a, label: c, color: d3.select(this).style("fill")})
        })
      }), b
    }

    var c = {top: 0, right: 0, bottom: 0, left: 0}, d = "left", e = !1, f = function(a) {
      return a.ranges
    }, g = function(a) {
      return a.markers ? a.markers : []
    }, h = function(a) {
      return a.measures
    }, i = function(a) {
      return a.rangeLabels ? a.rangeLabels : []
    }, j = function(a) {
      return a.markerLabels ? a.markerLabels : []
    }, k = function(a) {
      return a.measureLabels ? a.measureLabels : []
    }, l = [0], m = 380, n = 30, o = null, p = null, q = a.utils.getColor(["#1f77b4"]), r = d3.dispatch("elementMouseover", "elementMouseout", "elementMousemove");
    return b.dispatch = r, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      ranges: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, markers: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, measures: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, forceX: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, width: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, height: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, tickFormat: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, margin: {
        get: function() {
          return c
        }, set: function(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left
        }
      }, orient: {
        get: function() {
          return d
        }, set: function(a) {
          d = a, e = "right" == d || "bottom" == d
        }
      }, color: {
        get: function() {
          return q
        }, set: function(b) {
          q = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.bulletChart = function() {
    "use strict";
    function b(d) {
      return d.each(function(e, o) {
        var p = d3.select(this);
        a.utils.initSVG(p);
        var q = a.utils.availableWidth(k, p, g), r = l - g.top - g.bottom;
        if (b.update = function() {
            b(d)
          }, b.container = this, !e || !h.call(this, e, o))return a.utils.noData(b, p), b;
        p.selectAll(".nv-noData").remove();
        var s = h.call(this, e, o).slice().sort(d3.descending), t = i.call(this, e, o).slice().sort(d3.descending), u = j.call(this, e, o).slice().sort(d3.descending), v = p.selectAll("g.nv-wrap.nv-bulletChart").data([e]), w = v.enter().append("g").attr("class", "nvd3 nv-wrap nv-bulletChart"), x = w.append("g"), y = v.select("g");
        x.append("g").attr("class", "nv-bulletWrap"), x.append("g").attr("class", "nv-titles"), v.attr("transform", "translate(" + g.left + "," + g.top + ")");
        var z = d3.scale.linear().domain([0, Math.max(s[0], t[0] || 0, u[0])]).range(f ? [q, 0] : [0, q]), A = this.__chart__ || d3.scale.linear().domain([0, 1 / 0]).range(z.range());
        this.__chart__ = z;
        var B = x.select(".nv-titles").append("g").attr("text-anchor", "end").attr("transform", "translate(-6," + (l - g.top - g.bottom) / 2 + ")");
        B.append("text").attr("class", "nv-title").text(function(a) {
          return a.title
        }), B.append("text").attr("class", "nv-subtitle").attr("dy", "1em").text(function(a) {
          return a.subtitle
        }), c.width(q).height(r);
        var C = y.select(".nv-bulletWrap");
        d3.transition(C).call(c);
        var D = m || z.tickFormat(q / 100), E = y.selectAll("g.nv-tick").data(z.ticks(n ? n : q / 50), function(a) {
          return this.textContent || D(a)
        }), F = E.enter().append("g").attr("class", "nv-tick").attr("transform", function(a) {
          return "translate(" + A(a) + ",0)"
        }).style("opacity", 1e-6);
        F.append("line").attr("y1", r).attr("y2", 7 * r / 6), F.append("text").attr("text-anchor", "middle").attr("dy", "1em").attr("y", 7 * r / 6).text(D);
        var G = d3.transition(E).attr("transform", function(a) {
          return "translate(" + z(a) + ",0)"
        }).style("opacity", 1);
        G.select("line").attr("y1", r).attr("y2", 7 * r / 6), G.select("text").attr("y", 7 * r / 6), d3.transition(E.exit()).attr("transform", function(a) {
          return "translate(" + z(a) + ",0)"
        }).style("opacity", 1e-6).remove()
      }), d3.timer.flush(), b
    }

    var c = a.models.bullet(), d = a.models.tooltip(), e = "left", f = !1, g = {top: 5, right: 40, bottom: 20, left: 120}, h = function(a) {
      return a.ranges
    }, i = function(a) {
      return a.markers ? a.markers : []
    }, j = function(a) {
      return a.measures
    }, k = null, l = 55, m = null, n = null, o = null, p = d3.dispatch();
    return d.duration(0).headerEnabled(!1), c.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series = {key: a.label, value: a.value, color: a.color}, d.data(a).hidden(!1)
    }), c.dispatch.on("elementMouseout.tooltip", function(a) {
      d.hidden(!0)
    }), c.dispatch.on("elementMousemove.tooltip", function(a) {
      d()
    }), b.bullet = c, b.dispatch = p, b.tooltip = d, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      ranges: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, markers: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, measures: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, width: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, height: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, tickFormat: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, ticks: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, noData: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, margin: {
        get: function() {
          return g
        }, set: function(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left
        }
      }, orient: {
        get: function() {
          return e
        }, set: function(a) {
          e = a, f = "right" == e || "bottom" == e
        }
      }
    }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b
  }, a.models.candlestickBar = function() {
    "use strict";
    function b(x) {
      return x.each(function(b) {
        c = d3.select(this);
        var x = a.utils.availableWidth(i, c, h), y = a.utils.availableHeight(j, c, h);
        a.utils.initSVG(c);
        var A = x / b[0].values.length * .45;
        l.domain(d || d3.extent(b[0].values.map(n).concat(t))), v ? l.range(f || [.5 * x / b[0].values.length, x * (b[0].values.length - .5) / b[0].values.length]) : l.range(f || [5 + A / 2, x - A / 2 - 5]), m.domain(e || [d3.min(b[0].values.map(s).concat(u)), d3.max(b[0].values.map(r).concat(u))]).range(g || [y, 0]), l.domain()[0] === l.domain()[1] && (l.domain()[0] ? l.domain([l.domain()[0] - .01 * l.domain()[0], l.domain()[1] + .01 * l.domain()[1]]) : l.domain([-1, 1])), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] + .01 * m.domain()[0], m.domain()[1] - .01 * m.domain()[1]]) : m.domain([-1, 1]));
        var B = d3.select(this).selectAll("g.nv-wrap.nv-candlestickBar").data([b[0].values]), C = B.enter().append("g").attr("class", "nvd3 nv-wrap nv-candlestickBar"), D = C.append("defs"), E = C.append("g"), F = B.select("g");
        E.append("g").attr("class", "nv-ticks"), B.attr("transform", "translate(" + h.left + "," + h.top + ")"), c.on("click", function(a, b) {
          z.chartClick({data: a, index: b, pos: d3.event, id: k})
        }), D.append("clipPath").attr("id", "nv-chart-clip-path-" + k).append("rect"), B.select("#nv-chart-clip-path-" + k + " rect").attr("width", x).attr("height", y), F.attr("clip-path", w ? "url(#nv-chart-clip-path-" + k + ")" : "");
        var G = B.select(".nv-ticks").selectAll(".nv-tick").data(function(a) {
          return a
        });
        G.exit().remove();
        var H = G.enter().append("g");
        G.attr("class", function(a, b, c) {
          return (p(a, b) > q(a, b) ? "nv-tick negative" : "nv-tick positive") + " nv-tick-" + c + "-" + b
        });
        H.append("line").attr("class", "nv-candlestick-lines").attr("transform", function(a, b) {
          return "translate(" + l(n(a, b)) + ",0)"
        }).attr("x1", 0).attr("y1", function(a, b) {
          return m(r(a, b))
        }).attr("x2", 0).attr("y2", function(a, b) {
          return m(s(a, b))
        }), H.append("rect").attr("class", "nv-candlestick-rects nv-bars").attr("transform", function(a, b) {
          return "translate(" + (l(n(a, b)) - A / 2) + "," + (m(o(a, b)) - (p(a, b) > q(a, b) ? m(q(a, b)) - m(p(a, b)) : 0)) + ")"
        }).attr("x", 0).attr("y", 0).attr("width", A).attr("height", function(a, b) {
          var c = p(a, b), d = q(a, b);
          return c > d ? m(d) - m(c) : m(c) - m(d)
        });
        G.select(".nv-candlestick-lines").transition().attr("transform", function(a, b) {
          return "translate(" + l(n(a, b)) + ",0)"
        }).attr("x1", 0).attr("y1", function(a, b) {
          return m(r(a, b))
        }).attr("x2", 0).attr("y2", function(a, b) {
          return m(s(a, b))
        }), G.select(".nv-candlestick-rects").transition().attr("transform", function(a, b) {
          return "translate(" + (l(n(a, b)) - A / 2) + "," + (m(o(a, b)) - (p(a, b) > q(a, b) ? m(q(a, b)) - m(p(a, b)) : 0)) + ")"
        }).attr("x", 0).attr("y", 0).attr("width", A).attr("height", function(a, b) {
          var c = p(a, b), d = q(a, b);
          return c > d ? m(d) - m(c) : m(c) - m(d)
        })
      }), b
    }

    var c, d, e, f, g, h = {top: 0, right: 0, bottom: 0, left: 0}, i = null, j = null, k = Math.floor(1e4 * Math.random()), l = d3.scale.linear(), m = d3.scale.linear(), n = function(a) {
      return a.x
    }, o = function(a) {
      return a.y
    }, p = function(a) {
      return a.open
    }, q = function(a) {
      return a.close
    }, r = function(a) {
      return a.high
    }, s = function(a) {
      return a.low
    }, t = [], u = [], v = !1, w = !0, x = a.utils.defaultColor(), y = !1, z = d3.dispatch("stateChange", "changeState", "renderEnd", "chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove");
    return b.highlightPoint = function(a, d) {
      b.clearHighlights(), c.select(".nv-candlestickBar .nv-tick-0-" + a).classed("hover", d)
    }, b.clearHighlights = function() {
      c.select(".nv-candlestickBar .nv-tick.hover").classed("hover", !1)
    }, b.dispatch = z, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, height: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, xScale: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, yScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, xDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, yDomain: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, xRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, yRange: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, forceX: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, forceY: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, padData: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, clipEdge: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, id: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, interactive: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, x: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, y: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, open: {
        get: function() {
          return p()
        }, set: function(a) {
          p = a
        }
      }, close: {
        get: function() {
          return q()
        }, set: function(a) {
          q = a
        }
      }, high: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, low: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, margin: {
        get: function() {
          return h
        }, set: function(a) {
          h.top = void 0 != a.top ? a.top : h.top, h.right = void 0 != a.right ? a.right : h.right, h.bottom = void 0 != a.bottom ? a.bottom : h.bottom, h.left = void 0 != a.left ? a.left : h.left
        }
      }, color: {
        get: function() {
          return x
        }, set: function(b) {
          x = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.cumulativeLineChart = function() {
    "use strict";
    function b(l) {
      return H.reset(), H.models(f), r && H.models(g), s && H.models(h), l.each(function(l) {
        function A(a, c) {
          d3.select(b.container).style("cursor", "ew-resize")
        }

        function E(a, b) {
          G.x = d3.event.x, G.i = Math.round(F.invert(G.x)), K()
        }

        function H(a, c) {
          d3.select(b.container).style("cursor", "auto"), y.index = G.i, C.stateChange(y)
        }

        function K() {
          ba.data([G]);
          var a = b.duration();
          b.duration(0), b.update(), b.duration(a)
        }

        var L = d3.select(this);
        a.utils.initSVG(L), L.classed("nv-chart-" + x, !0);
        var M = this, N = a.utils.availableWidth(o, L, m), O = a.utils.availableHeight(p, L, m);
        if (b.update = function() {
            0 === D ? L.call(b) : L.transition().duration(D).call(b)
          }, b.container = this, y.setter(J(l), b.update).getter(I(l)).update(), y.disabled = l.map(function(a) {
            return !!a.disabled
          }), !z) {
          var P;
          z = {};
          for (P in y)y[P] instanceof Array ? z[P] = y[P].slice(0) : z[P] = y[P]
        }
        var Q = d3.behavior.drag().on("dragstart", A).on("drag", E).on("dragend", H);
        if (!(l && l.length && l.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, L), b;
        if (L.selectAll(".nv-noData").remove(), d = f.xScale(), e = f.yScale(), w)f.yDomain(null); else {
          var R = l.filter(function(a) {
            return !a.disabled
          }).map(function(a, b) {
            var c = d3.extent(a.values, f.y());
            return c[0] < -.95 && (c[0] = -.95), [(c[0] - c[1]) / (1 + c[1]), (c[1] - c[0]) / (1 + c[0])]
          }), S = [
            d3.min(R, function(a) {
              return a[0]
            }), d3.max(R, function(a) {
              return a[1]
            })
          ];
          f.yDomain(S)
        }
        F.domain([0, l[0].values.length - 1]).range([0, N]).clamp(!0);
        var l = c(G.i, l), T = v ? "none" : "all", U = L.selectAll("g.nv-wrap.nv-cumulativeLine").data([l]), V = U.enter().append("g").attr("class", "nvd3 nv-wrap nv-cumulativeLine").append("g"), W = U.select("g");
        if (V.append("g").attr("class", "nv-interactive"), V.append("g").attr("class", "nv-x nv-axis").style("pointer-events", "none"), V.append("g").attr("class", "nv-y nv-axis"), V.append("g").attr("class", "nv-background"), V.append("g").attr("class", "nv-linesWrap").style("pointer-events", T), V.append("g").attr("class", "nv-avgLinesWrap").style("pointer-events", "none"), V.append("g").attr("class", "nv-legendWrap"), V.append("g").attr("class", "nv-controlsWrap"), q && (i.width(N), W.select(".nv-legendWrap").datum(l).call(i), m.top != i.height() && (m.top = i.height(), O = a.utils.availableHeight(p, L, m)), W.select(".nv-legendWrap").attr("transform", "translate(0," + -m.top + ")")), u) {
          var X = [{key: "Re-scale y-axis", disabled: !w}];
          j.width(140).color(["#444", "#444", "#444"]).rightAlign(!1).margin({top: 5, right: 0, bottom: 5, left: 20}), W.select(".nv-controlsWrap").datum(X).attr("transform", "translate(0," + -m.top + ")").call(j)
        }
        U.attr("transform", "translate(" + m.left + "," + m.top + ")"), t && W.select(".nv-y.nv-axis").attr("transform", "translate(" + N + ",0)");
        var Y = l.filter(function(a) {
          return a.tempDisabled
        });
        U.select(".tempDisabled").remove(), Y.length && U.append("text").attr("class", "tempDisabled").attr("x", N / 2).attr("y", "-.71em").style("text-anchor", "end").text(Y.map(function(a) {
            return a.key
          }).join(", ") + " values cannot be calculated for this time period."), v && (k.width(N).height(O).margin({left: m.left, top: m.top}).svgContainer(L).xScale(d), U.select(".nv-interactive").call(k)), V.select(".nv-background").append("rect"), W.select(".nv-background rect").attr("width", N).attr("height", O), f.y(function(a) {
          return a.display.y
        }).width(N).height(O).color(l.map(function(a, b) {
          return a.color || n(a, b)
        }).filter(function(a, b) {
          return !l[b].disabled && !l[b].tempDisabled
        }));
        var Z = W.select(".nv-linesWrap").datum(l.filter(function(a) {
          return !a.disabled && !a.tempDisabled
        }));
        Z.call(f), l.forEach(function(a, b) {
          a.seriesIndex = b
        });
        var $ = l.filter(function(a) {
          return !a.disabled && !!B(a)
        }), _ = W.select(".nv-avgLinesWrap").selectAll("line").data($, function(a) {
          return a.key
        }), aa = function(a) {
          var b = e(B(a));
          return 0 > b ? 0 : b > O ? O : b
        };
        _.enter().append("line").style("stroke-width", 2).style("stroke-dasharray", "10,10").style("stroke", function(a, b) {
          return f.color()(a, a.seriesIndex)
        }).attr("x1", 0).attr("x2", N).attr("y1", aa).attr("y2", aa), _.style("stroke-opacity", function(a) {
          var b = e(B(a));
          return 0 > b || b > O ? 0 : 1
        }).attr("x1", 0).attr("x2", N).attr("y1", aa).attr("y2", aa), _.exit().remove();
        var ba = Z.selectAll(".nv-indexLine").data([G]);
        ba.enter().append("rect").attr("class", "nv-indexLine").attr("width", 3).attr("x", -2).attr("fill", "red").attr("fill-opacity", .5).style("pointer-events", "all").call(Q), ba.attr("transform", function(a) {
          return "translate(" + F(a.i) + ",0)"
        }).attr("height", O), r && (g.scale(d)._ticks(a.utils.calcTicksX(N / 70, l)).tickSize(-O, 0), W.select(".nv-x.nv-axis").attr("transform", "translate(0," + e.range()[0] + ")"), W.select(".nv-x.nv-axis").call(g)), s && (h.scale(e)._ticks(a.utils.calcTicksY(O / 36, l)).tickSize(-N, 0), W.select(".nv-y.nv-axis").call(h)), W.select(".nv-background rect").on("click", function() {
          G.x = d3.mouse(this)[0], G.i = Math.round(F.invert(G.x)), y.index = G.i, C.stateChange(y), K()
        }), f.dispatch.on("elementClick", function(a) {
          G.i = a.pointIndex, G.x = F(G.i), y.index = G.i, C.stateChange(y), K()
        }), j.dispatch.on("legendClick", function(a, c) {
          a.disabled = !a.disabled, w = !a.disabled, y.rescaleY = w, C.stateChange(y), b.update()
        }), i.dispatch.on("stateChange", function(a) {
          for (var c in a)y[c] = a[c];
          C.stateChange(y), b.update()
        }), k.dispatch.on("elementMousemove", function(c) {
          f.clearHighlights();
          var d, e, i, j = [];
          if (l.filter(function(a, b) {
              return a.seriesIndex = b, !a.disabled
            }).forEach(function(g, h) {
              e = a.interactiveBisect(g.values, c.pointXValue, b.x()), f.highlightPoint(h, e, !0);
              var k = g.values[e];
              "undefined" != typeof k && ("undefined" == typeof d && (d = k), "undefined" == typeof i && (i = b.xScale()(b.x()(k, e))), j.push({key: g.key, value: b.y()(k, e), color: n(g, g.seriesIndex)}))
            }), j.length > 2) {
            var m = b.yScale().invert(c.mouseY), o = Math.abs(b.yScale().domain()[0] - b.yScale().domain()[1]), p = .03 * o, q = a.nearestValueIndex(j.map(function(a) {
              return a.value
            }), m, p);
            null !== q && (j[q].highlight = !0)
          }
          var r = g.tickFormat()(b.x()(d, e), e);
          k.tooltip.chartContainer(M.parentNode).valueFormatter(function(a, b) {
            return h.tickFormat()(a)
          }).data({value: r, series: j})(), k.renderGuideLine(i)
        }), k.dispatch.on("elementMouseout", function(a) {
          f.clearHighlights()
        }), C.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (l.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), y.disabled = a.disabled), "undefined" != typeof a.index && (G.i = a.index, G.x = F(G.i), y.index = a.index, ba.data([G])), "undefined" != typeof a.rescaleY && (w = a.rescaleY), b.update()
        })
      }), H.renderEnd("cumulativeLineChart immediate"), b
    }

    function c(a, b) {
      return K || (K = f.y()), b.map(function(b, c) {
        if (!b.values)return b;
        var d = b.values[a];
        if (null == d)return b;
        var e = K(d, a);
        return -.95 > e && !E ? (b.tempDisabled = !0, b) : (b.tempDisabled = !1, b.values = b.values.map(function(a, b) {
          return a.display = {y: (K(a, b) - e) / (1 + e)}, a
        }), b)
      })
    }

    var d, e, f = a.models.line(), g = a.models.axis(), h = a.models.axis(), i = a.models.legend(), j = a.models.legend(), k = a.interactiveGuideline(), l = a.models.tooltip(), m = {top: 30, right: 30, bottom: 50, left: 60}, n = a.utils.defaultColor(), o = null, p = null, q = !0, r = !0, s = !0, t = !1, u = !0, v = !1, w = !0, x = f.id(), y = a.utils.state(), z = null, A = null, B = function(a) {
      return a.average
    }, C = d3.dispatch("stateChange", "changeState", "renderEnd"), D = 250, E = !1;
    y.index = 0, y.rescaleY = w, g.orient("bottom").tickPadding(7), h.orient(t ? "right" : "left"), l.valueFormatter(function(a, b) {
      return h.tickFormat()(a, b)
    }).headerFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    }), j.updateState(!1);
    var F = d3.scale.linear(), G = {i: 0, x: 0}, H = a.utils.renderWatch(C, D), I = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          }), index: G.i, rescaleY: w
        }
      }
    }, J = function(a) {
      return function(b) {
        void 0 !== b.index && (G.i = b.index), void 0 !== b.rescaleY && (w = b.rescaleY), void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    };
    f.dispatch.on("elementMouseover.tooltip", function(a) {
      var c = {x: b.x()(a.point), y: b.y()(a.point), color: a.point.color};
      a.point = c, l.data(a).hidden(!1)
    }), f.dispatch.on("elementMouseout.tooltip", function(a) {
      l.hidden(!0)
    });
    var K = null;
    return b.dispatch = C, b.lines = f, b.legend = i, b.controls = j, b.xAxis = g, b.yAxis = h, b.interactiveLayer = k, b.state = y, b.tooltip = l, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, height: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, rescaleY: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, showControls: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, showLegend: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, average: {
        get: function() {
          return B
        }, set: function(a) {
          B = a
        }
      }, defaultState: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, noData: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, showXAxis: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, showYAxis: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, noErrorCheck: {
        get: function() {
          return E
        }, set: function(a) {
          E = a
        }
      }, margin: {
        get: function() {
          return m
        }, set: function(a) {
          m.top = void 0 !== a.top ? a.top : m.top, m.right = void 0 !== a.right ? a.right : m.right, m.bottom = void 0 !== a.bottom ? a.bottom : m.bottom, m.left = void 0 !== a.left ? a.left : m.left
        }
      }, color: {
        get: function() {
          return n
        }, set: function(b) {
          n = a.utils.getColor(b), i.color(n)
        }
      }, useInteractiveGuideline: {
        get: function() {
          return v
        }, set: function(a) {
          v = a, a === !0 && (b.interactive(!1), b.useVoronoi(!1))
        }
      }, rightAlignYAxis: {
        get: function() {
          return t
        }, set: function(a) {
          t = a, h.orient(a ? "right" : "left")
        }
      }, duration: {
        get: function() {
          return D
        }, set: function(a) {
          D = a, f.duration(D), g.duration(D), h.duration(D), H.reset(D)
        }
      }
    }), a.utils.inheritOptions(b, f), a.utils.initOptions(b), b
  }, a.models.discreteBar = function() {
    "use strict";
    function b(m) {
      return y.reset(), m.each(function(b) {
        var m = k - j.left - j.right, x = l - j.top - j.bottom;
        c = d3.select(this), a.utils.initSVG(c), b.forEach(function(a, b) {
          a.values.forEach(function(a) {
            a.series = b
          })
        });
        var z = d && e ? [] : b.map(function(a) {
          return a.values.map(function(a, b) {
            return {x: p(a, b), y: q(a, b), y0: a.y0}
          })
        });
        n.domain(d || d3.merge(z).map(function(a) {
            return a.x
          })).rangeBands(f || [0, m], .1), o.domain(e || d3.extent(d3.merge(z).map(function(a) {
            return a.y
          }).concat(r))), t ? o.range(g || [x - (o.domain()[0] < 0 ? 12 : 0), o.domain()[1] > 0 ? 12 : 0]) : o.range(g || [x, 0]), h = h || n, i = i || o.copy().range([o(0), o(0)]);
        var A = c.selectAll("g.nv-wrap.nv-discretebar").data([b]), B = A.enter().append("g").attr("class", "nvd3 nv-wrap nv-discretebar"), C = B.append("g");
        A.select("g");
        C.append("g").attr("class", "nv-groups"), A.attr("transform", "translate(" + j.left + "," + j.top + ")");
        var D = A.select(".nv-groups").selectAll(".nv-group").data(function(a) {
          return a
        }, function(a) {
          return a.key
        });
        D.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6), D.exit().watchTransition(y, "discreteBar: exit groups").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6).remove(), D.attr("class", function(a, b) {
          return "nv-group nv-series-" + b
        }).classed("hover", function(a) {
          return a.hover
        }), D.watchTransition(y, "discreteBar: groups").style("stroke-opacity", 1).style("fill-opacity", .75);
        var E = D.selectAll("g.nv-bar").data(function(a) {
          return a.values
        });
        E.exit().remove();
        var F = E.enter().append("g").attr("transform", function(a, b, c) {
          return "translate(" + (n(p(a, b)) + .05 * n.rangeBand()) + ", " + o(0) + ")"
        }).on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0), v.elementMouseover({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1), v.elementMouseout({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mousemove", function(a, b) {
          v.elementMousemove({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("click", function(a, b) {
          var c = this;
          v.elementClick({data: a, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c}), d3.event.stopPropagation()
        }).on("dblclick", function(a, b) {
          v.elementDblClick({data: a, index: b, color: d3.select(this).style("fill")}), d3.event.stopPropagation()
        });
        F.append("rect").attr("height", 0).attr("width", .9 * n.rangeBand() / b.length), t ? (F.append("text").attr("text-anchor", "middle"), E.select("text").text(function(a, b) {
          return u(q(a, b))
        }).watchTransition(y, "discreteBar: bars text").attr("x", .9 * n.rangeBand() / 2).attr("y", function(a, b) {
          return q(a, b) < 0 ? o(q(a, b)) - o(0) + 12 : -4
        })) : E.selectAll("text").remove(), E.attr("class", function(a, b) {
          return q(a, b) < 0 ? "nv-bar negative" : "nv-bar positive"
        }).style("fill", function(a, b) {
          return a.color || s(a, b)
        }).style("stroke", function(a, b) {
          return a.color || s(a, b)
        }).select("rect").attr("class", w).watchTransition(y, "discreteBar: bars rect").attr("width", .9 * n.rangeBand() / b.length), E.watchTransition(y, "discreteBar: bars").attr("transform", function(a, b) {
          var c = n(p(a, b)) + .05 * n.rangeBand(), d = q(a, b) < 0 ? o(0) : o(0) - o(q(a, b)) < 1 ? o(0) - 1 : o(q(a, b));
          return "translate(" + c + ", " + d + ")"
        }).select("rect").attr("height", function(a, b) {
          return Math.max(Math.abs(o(q(a, b)) - o(0)), 1)
        }), h = n.copy(), i = o.copy()
      }), y.renderEnd("discreteBar immediate"), b
    }

    var c, d, e, f, g, h, i, j = {top: 0, right: 0, bottom: 0, left: 0}, k = 960, l = 500, m = Math.floor(1e4 * Math.random()), n = d3.scale.ordinal(), o = d3.scale.linear(), p = function(a) {
      return a.x
    }, q = function(a) {
      return a.y
    }, r = [0], s = a.utils.defaultColor(), t = !1, u = d3.format(",.2f"), v = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"), w = "discreteBar", x = 250, y = a.utils.renderWatch(v, x);
    return b.dispatch = v, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, height: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, forceY: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, showValues: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, x: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, y: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, xScale: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, yScale: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, xDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, yDomain: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, xRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, yRange: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, valueFormat: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, id: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, rectClass: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, margin: {
        get: function() {
          return j
        }, set: function(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left
        }
      }, color: {
        get: function() {
          return s
        }, set: function(b) {
          s = a.utils.getColor(b)
        }
      }, duration: {
        get: function() {
          return x
        }, set: function(a) {
          x = a, y.reset(x)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.discreteBarChart = function() {
    "use strict";
    function b(i) {
      return x.reset(), x.models(e), o && x.models(f), p && x.models(g), i.each(function(i) {
        var m = d3.select(this);
        a.utils.initSVG(m);
        var u = a.utils.availableWidth(k, m, j), x = a.utils.availableHeight(l, m, j);
        if (b.update = function() {
            v.beforeUpdate(), m.transition().duration(w).call(b)
          }, b.container = this, !(i && i.length && i.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, m), b;
        m.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale().clamp(!0);
        var y = m.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([i]), z = y.enter().append("g").attr("class", "nvd3 nv-wrap nv-discreteBarWithAxes").append("g"), A = z.append("defs"), B = y.select("g");
        z.append("g").attr("class", "nv-x nv-axis"), z.append("g").attr("class", "nv-y nv-axis").append("g").attr("class", "nv-zeroLine").append("line"), z.append("g").attr("class", "nv-barsWrap"), z.append("g").attr("class", "nv-legendWrap"), B.attr("transform", "translate(" + j.left + "," + j.top + ")"), n && (h.width(u), B.select(".nv-legendWrap").datum(i).call(h), j.top != h.height() && (j.top = h.height(), x = a.utils.availableHeight(l, m, j)), y.select(".nv-legendWrap").attr("transform", "translate(0," + -j.top + ")")), q && B.select(".nv-y.nv-axis").attr("transform", "translate(" + u + ",0)"), q && B.select(".nv-y.nv-axis").attr("transform", "translate(" + u + ",0)"), e.width(u).height(x);
        var C = B.select(".nv-barsWrap").datum(i.filter(function(a) {
          return !a.disabled
        }));
        if (C.transition().call(e), A.append("clipPath").attr("id", "nv-x-label-clip-" + e.id()).append("rect"), B.select("#nv-x-label-clip-" + e.id() + " rect").attr("width", c.rangeBand() * (r ? 2 : 1)).attr("height", 16).attr("x", -c.rangeBand() / (r ? 1 : 2)),
            o) {
          f.scale(c)._ticks(a.utils.calcTicksX(u / 100, i)).tickSize(-x, 0), B.select(".nv-x.nv-axis").attr("transform", "translate(0," + (d.range()[0] + (e.showValues() && d.domain()[0] < 0 ? 16 : 0)) + ")"), B.select(".nv-x.nv-axis").call(f);
          var D = B.select(".nv-x.nv-axis").selectAll("g");
          r && D.selectAll("text").attr("transform", function(a, b, c) {
            return "translate(0," + (c % 2 == 0 ? "5" : "17") + ")"
          }), t && D.selectAll(".tick text").attr("transform", "rotate(" + t + " 0,0)").style("text-anchor", t > 0 ? "start" : "end"), s && B.selectAll(".tick text").call(a.utils.wrapTicks, b.xAxis.rangeBand())
        }
        p && (g.scale(d)._ticks(a.utils.calcTicksY(x / 36, i)).tickSize(-u, 0), B.select(".nv-y.nv-axis").call(g)), B.select(".nv-zeroLine line").attr("x1", 0).attr("x2", q ? -u : u).attr("y1", d(0)).attr("y2", d(0))
      }), x.renderEnd("discreteBar chart immediate"), b
    }

    var c, d, e = a.models.discreteBar(), f = a.models.axis(), g = a.models.axis(), h = a.models.legend(), i = a.models.tooltip(), j = {top: 15, right: 10, bottom: 50, left: 60}, k = null, l = null, m = a.utils.getColor(), n = !1, o = !0, p = !0, q = !1, r = !1, s = !1, t = 0, u = null, v = d3.dispatch("beforeUpdate", "renderEnd"), w = 250;
    f.orient("bottom").showMaxMin(!1).tickFormat(function(a) {
      return a
    }), g.orient(q ? "right" : "left").tickFormat(d3.format(",.1f")), i.duration(0).headerEnabled(!1).valueFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    }).keyFormatter(function(a, b) {
      return f.tickFormat()(a, b)
    });
    var x = a.utils.renderWatch(v, w);
    return e.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series = {key: b.x()(a.data), value: b.y()(a.data), color: a.color}, i.data(a).hidden(!1)
    }), e.dispatch.on("elementMouseout.tooltip", function(a) {
      i.hidden(!0)
    }), e.dispatch.on("elementMousemove.tooltip", function(a) {
      i()
    }), b.dispatch = v, b.discretebar = e, b.legend = h, b.xAxis = f, b.yAxis = g, b.tooltip = i, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, height: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, showLegend: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, staggerLabels: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, rotateLabels: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, wrapLabels: {
        get: function() {
          return s
        }, set: function(a) {
          s = !!a
        }
      }, showXAxis: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, showYAxis: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, noData: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, margin: {
        get: function() {
          return j
        }, set: function(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left
        }
      }, duration: {
        get: function() {
          return w
        }, set: function(a) {
          w = a, x.reset(w), e.duration(w), f.duration(w), g.duration(w)
        }
      }, color: {
        get: function() {
          return m
        }, set: function(b) {
          m = a.utils.getColor(b), e.color(m), h.color(m)
        }
      }, rightAlignYAxis: {
        get: function() {
          return q
        }, set: function(a) {
          q = a, g.orient(a ? "right" : "left")
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.distribution = function() {
    "use strict";
    function b(k) {
      return m.reset(), k.each(function(b) {
        var k = (e - ("x" === g ? d.left + d.right : d.top + d.bottom), "x" == g ? "y" : "x"), l = d3.select(this);
        a.utils.initSVG(l), c = c || j;
        var n = l.selectAll("g.nv-distribution").data([b]), o = n.enter().append("g").attr("class", "nvd3 nv-distribution"), p = (o.append("g"), n.select("g"));
        n.attr("transform", "translate(" + d.left + "," + d.top + ")");
        var q = p.selectAll("g.nv-dist").data(function(a) {
          return a
        }, function(a) {
          return a.key
        });
        q.enter().append("g"), q.attr("class", function(a, b) {
          return "nv-dist nv-series-" + b
        }).style("stroke", function(a, b) {
          return i(a, b)
        });
        var r = q.selectAll("line.nv-dist" + g).data(function(a) {
          return a.values
        });
        r.enter().append("line").attr(g + "1", function(a, b) {
          return c(h(a, b))
        }).attr(g + "2", function(a, b) {
          return c(h(a, b))
        }), m.transition(q.exit().selectAll("line.nv-dist" + g), "dist exit").attr(g + "1", function(a, b) {
          return j(h(a, b))
        }).attr(g + "2", function(a, b) {
          return j(h(a, b))
        }).style("stroke-opacity", 0).remove(), r.attr("class", function(a, b) {
          return "nv-dist" + g + " nv-dist" + g + "-" + b
        }).attr(k + "1", 0).attr(k + "2", f), m.transition(r, "dist").attr(g + "1", function(a, b) {
          return j(h(a, b))
        }).attr(g + "2", function(a, b) {
          return j(h(a, b))
        }), c = j.copy()
      }), m.renderEnd("distribution immediate"), b
    }

    var c, d = {top: 0, right: 0, bottom: 0, left: 0}, e = 400, f = 8, g = "x", h = function(a) {
      return a[g]
    }, i = a.utils.defaultColor(), j = d3.scale.linear(), k = 250, l = d3.dispatch("renderEnd"), m = a.utils.renderWatch(l, k);
    return b.options = a.utils.optionsFunc.bind(b), b.dispatch = l, b.margin = function(a) {
      return arguments.length ? (d.top = "undefined" != typeof a.top ? a.top : d.top, d.right = "undefined" != typeof a.right ? a.right : d.right, d.bottom = "undefined" != typeof a.bottom ? a.bottom : d.bottom, d.left = "undefined" != typeof a.left ? a.left : d.left, b) : d
    }, b.width = function(a) {
      return arguments.length ? (e = a, b) : e
    }, b.axis = function(a) {
      return arguments.length ? (g = a, b) : g
    }, b.size = function(a) {
      return arguments.length ? (f = a, b) : f
    }, b.getData = function(a) {
      return arguments.length ? (h = d3.functor(a), b) : h
    }, b.scale = function(a) {
      return arguments.length ? (j = a, b) : j
    }, b.color = function(c) {
      return arguments.length ? (i = a.utils.getColor(c), b) : i
    }, b.duration = function(a) {
      return arguments.length ? (k = a, m.reset(k), b) : k
    }, b
  }, a.models.furiousLegend = function() {
    "use strict";
    function b(q) {
      function r(a, b) {
        return "furious" != p ? "#000" : n ? a.disengaged ? g(a, b) : "#fff" : n ? void 0 : a.disabled ? g(a, b) : "#fff"
      }

      function s(a, b) {
        return n && "furious" == p ? a.disengaged ? "#fff" : g(a, b) : a.disabled ? "#fff" : g(a, b)
      }

      return q.each(function(b) {
        var q = d - c.left - c.right, t = d3.select(this);
        a.utils.initSVG(t);
        var u = t.selectAll("g.nv-legend").data([b]), v = (u.enter().append("g").attr("class", "nvd3 nv-legend").append("g"), u.select("g"));
        u.attr("transform", "translate(" + c.left + "," + c.top + ")");
        var w, x = v.selectAll(".nv-series").data(function(a) {
          return "furious" != p ? a : a.filter(function(a) {
            return n ? !0 : !a.disengaged
          })
        }), y = x.enter().append("g").attr("class", "nv-series");
        if ("classic" == p)y.append("circle").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("r", 5), w = x.select("circle"); else if ("furious" == p) {
          y.append("rect").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("rx", 3).attr("ry", 3), w = x.select("rect"), y.append("g").attr("class", "nv-check-box").property("innerHTML", '<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>').attr("transform", "translate(-10,-8)scale(0.5)");
          var z = x.select(".nv-check-box");
          z.each(function(a, b) {
            d3.select(this).selectAll("path").attr("stroke", r(a, b))
          })
        }
        y.append("text").attr("text-anchor", "start").attr("class", "nv-legend-text").attr("dy", ".32em").attr("dx", "8");
        var A = x.select("text.nv-legend-text");
        x.on("mouseover", function(a, b) {
          o.legendMouseover(a, b)
        }).on("mouseout", function(a, b) {
          o.legendMouseout(a, b)
        }).on("click", function(a, b) {
          o.legendClick(a, b);
          var c = x.data();
          if (l) {
            if ("classic" == p)m ? (c.forEach(function(a) {
              a.disabled = !0
            }), a.disabled = !1) : (a.disabled = !a.disabled, c.every(function(a) {
              return a.disabled
            }) && c.forEach(function(a) {
              a.disabled = !1
            })); else if ("furious" == p)if (n)a.disengaged = !a.disengaged, a.userDisabled = void 0 == a.userDisabled ? !!a.disabled : a.userDisabled, a.disabled = a.disengaged || a.userDisabled; else if (!n) {
              a.disabled = !a.disabled, a.userDisabled = a.disabled;
              var d = c.filter(function(a) {
                return !a.disengaged
              });
              d.every(function(a) {
                return a.userDisabled
              }) && c.forEach(function(a) {
                a.disabled = a.userDisabled = !1
              })
            }
            o.stateChange({
              disabled: c.map(function(a) {
                return !!a.disabled
              }), disengaged: c.map(function(a) {
                return !!a.disengaged
              })
            })
          }
        }).on("dblclick", function(a, b) {
          if (("furious" != p || !n) && (o.legendDblclick(a, b), l)) {
            var c = x.data();
            c.forEach(function(a) {
              a.disabled = !0, "furious" == p && (a.userDisabled = a.disabled)
            }), a.disabled = !1, "furious" == p && (a.userDisabled = a.disabled), o.stateChange({
              disabled: c.map(function(a) {
                return !!a.disabled
              })
            })
          }
        }), x.classed("nv-disabled", function(a) {
          return a.userDisabled
        }), x.exit().remove(), A.attr("fill", r).text(f);
        var B;
        switch (p) {
          case"furious":
            B = 23;
            break;
          case"classic":
            B = 20
        }
        if (i) {
          var C = [];
          x.each(function(b, c) {
            var d;
            if (f(b).length > h) {
              var e = f(b).substring(0, h);
              d = d3.select(this).select("text").text(e + "..."), d3.select(this).append("svg:title").text(f(b))
            } else d = d3.select(this).select("text");
            var g;
            try {
              if (g = d.node().getComputedTextLength(), 0 >= g)throw Error()
            } catch (i) {
              g = a.utils.calcApproxTextWidth(d)
            }
            C.push(g + j)
          });
          for (var D = 0, E = 0, F = []; q > E && D < C.length;)F[D] = C[D], E += C[D++];
          for (0 === D && (D = 1); E > q && D > 1;) {
            F = [], D--;
            for (var G = 0; G < C.length; G++)C[G] > (F[G % D] || 0) && (F[G % D] = C[G]);
            E = F.reduce(function(a, b, c, d) {
              return a + b
            })
          }
          for (var H = [], I = 0, J = 0; D > I; I++)H[I] = J, J += F[I];
          x.attr("transform", function(a, b) {
            return "translate(" + H[b % D] + "," + (5 + Math.floor(b / D) * B) + ")"
          }), k ? v.attr("transform", "translate(" + (d - c.right - E) + "," + c.top + ")") : v.attr("transform", "translate(0," + c.top + ")"), e = c.top + c.bottom + Math.ceil(C.length / D) * B
        } else {
          var K, L = 5, M = 5, N = 0;
          x.attr("transform", function(a, b) {
            var e = d3.select(this).select("text").node().getComputedTextLength() + j;
            return K = M, d < c.left + c.right + K + e && (M = K = 5, L += B), M += e, M > N && (N = M), "translate(" + K + "," + L + ")"
          }), v.attr("transform", "translate(" + (d - c.right - N) + "," + c.top + ")"), e = c.top + c.bottom + L + 15
        }
        "furious" == p && w.attr("width", function(a, b) {
          return A[0][b].getComputedTextLength() + 27
        }).attr("height", 18).attr("y", -9).attr("x", -15), w.style("fill", s).style("stroke", function(a, b) {
          return a.color || g(a, b)
        })
      }), b
    }

    var c = {top: 5, right: 0, bottom: 5, left: 0}, d = 400, e = 20, f = function(a) {
      return a.key
    }, g = a.utils.getColor(), h = 20, i = !0, j = 28, k = !0, l = !0, m = !1, n = !1, o = d3.dispatch("legendClick", "legendDblclick", "legendMouseover", "legendMouseout", "stateChange"), p = "classic";
    return b.dispatch = o, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, height: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, key: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, align: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, rightAlign: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, maxKeyLength: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, padding: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, updateState: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, radioButtonMode: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, expanded: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, vers: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, margin: {
        get: function() {
          return c
        }, set: function(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left
        }
      }, color: {
        get: function() {
          return g
        }, set: function(b) {
          g = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.historicalBar = function() {
    "use strict";
    function b(x) {
      return x.each(function(b) {
        w.reset(), k = d3.select(this);
        var x = a.utils.availableWidth(h, k, g), y = a.utils.availableHeight(i, k, g);
        a.utils.initSVG(k), l.domain(c || d3.extent(b[0].values.map(n).concat(p))), r ? l.range(e || [.5 * x / b[0].values.length, x * (b[0].values.length - .5) / b[0].values.length]) : l.range(e || [0, x]), m.domain(d || d3.extent(b[0].values.map(o).concat(q))).range(f || [y, 0]), l.domain()[0] === l.domain()[1] && (l.domain()[0] ? l.domain([l.domain()[0] - .01 * l.domain()[0], l.domain()[1] + .01 * l.domain()[1]]) : l.domain([-1, 1])), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] + .01 * m.domain()[0], m.domain()[1] - .01 * m.domain()[1]]) : m.domain([-1, 1]));
        var z = k.selectAll("g.nv-wrap.nv-historicalBar-" + j).data([b[0].values]), A = z.enter().append("g").attr("class", "nvd3 nv-wrap nv-historicalBar-" + j), B = A.append("defs"), C = A.append("g"), D = z.select("g");
        C.append("g").attr("class", "nv-bars"), z.attr("transform", "translate(" + g.left + "," + g.top + ")"), k.on("click", function(a, b) {
          u.chartClick({data: a, index: b, pos: d3.event, id: j})
        }), B.append("clipPath").attr("id", "nv-chart-clip-path-" + j).append("rect"), z.select("#nv-chart-clip-path-" + j + " rect").attr("width", x).attr("height", y), D.attr("clip-path", s ? "url(#nv-chart-clip-path-" + j + ")" : "");
        var E = z.select(".nv-bars").selectAll(".nv-bar").data(function(a) {
          return a
        }, function(a, b) {
          return n(a, b)
        });
        E.exit().remove(), E.enter().append("rect").attr("x", 0).attr("y", function(b, c) {
          return a.utils.NaNtoZero(m(Math.max(0, o(b, c))))
        }).attr("height", function(b, c) {
          return a.utils.NaNtoZero(Math.abs(m(o(b, c)) - m(0)))
        }).attr("transform", function(a, c) {
          return "translate(" + (l(n(a, c)) - x / b[0].values.length * .45) + ",0)"
        }).on("mouseover", function(a, b) {
          v && (d3.select(this).classed("hover", !0), u.elementMouseover({data: a, index: b, color: d3.select(this).style("fill")}))
        }).on("mouseout", function(a, b) {
          v && (d3.select(this).classed("hover", !1), u.elementMouseout({data: a, index: b, color: d3.select(this).style("fill")}))
        }).on("mousemove", function(a, b) {
          v && u.elementMousemove({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("click", function(a, b) {
          v && (u.elementClick({data: a, index: b, color: d3.select(this).style("fill")}), d3.event.stopPropagation())
        }).on("dblclick", function(a, b) {
          v && (u.elementDblClick({data: a, index: b, color: d3.select(this).style("fill")}), d3.event.stopPropagation())
        }), E.attr("fill", function(a, b) {
          return t(a, b)
        }).attr("class", function(a, b, c) {
          return (o(a, b) < 0 ? "nv-bar negative" : "nv-bar positive") + " nv-bar-" + c + "-" + b
        }).watchTransition(w, "bars").attr("transform", function(a, c) {
          return "translate(" + (l(n(a, c)) - x / b[0].values.length * .45) + ",0)"
        }).attr("width", x / b[0].values.length * .9), E.watchTransition(w, "bars").attr("y", function(b, c) {
          var d = o(b, c) < 0 ? m(0) : m(0) - m(o(b, c)) < 1 ? m(0) - 1 : m(o(b, c));
          return a.utils.NaNtoZero(d)
        }).attr("height", function(b, c) {
          return a.utils.NaNtoZero(Math.max(Math.abs(m(o(b, c)) - m(0)), 1))
        })
      }), w.renderEnd("historicalBar immediate"), b
    }

    var c, d, e, f, g = {top: 0, right: 0, bottom: 0, left: 0}, h = null, i = null, j = Math.floor(1e4 * Math.random()), k = null, l = d3.scale.linear(), m = d3.scale.linear(), n = function(a) {
      return a.x
    }, o = function(a) {
      return a.y
    }, p = [], q = [0], r = !1, s = !0, t = a.utils.defaultColor(), u = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"), v = !0, w = a.utils.renderWatch(u, 0);
    return b.highlightPoint = function(a, b) {
      k.select(".nv-bars .nv-bar-0-" + a).classed("hover", b)
    }, b.clearHighlights = function() {
      k.select(".nv-bars .nv-bar.hover").classed("hover", !1)
    }, b.dispatch = u, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, height: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, forceX: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, forceY: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, padData: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, x: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, y: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, xScale: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, yScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, xDomain: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, yDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, xRange: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, yRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, clipEdge: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, id: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, interactive: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, margin: {
        get: function() {
          return g
        }, set: function(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left
        }
      }, color: {
        get: function() {
          return t
        }, set: function(b) {
          t = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.historicalBarChart = function(b) {
    "use strict";
    function c(b) {
      return b.each(function(k) {
        z.reset(), z.models(f), q && z.models(g), r && z.models(h);
        var w = d3.select(this), A = this;
        a.utils.initSVG(w);
        var B = a.utils.availableWidth(n, w, l), C = a.utils.availableHeight(o, w, l);
        if (c.update = function() {
            w.transition().duration(y).call(c)
          }, c.container = this, u.disabled = k.map(function(a) {
            return !!a.disabled
          }), !v) {
          var D;
          v = {};
          for (D in u)u[D] instanceof Array ? v[D] = u[D].slice(0) : v[D] = u[D]
        }
        if (!(k && k.length && k.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(c, w), c;
        w.selectAll(".nv-noData").remove(), d = f.xScale(), e = f.yScale();
        var E = w.selectAll("g.nv-wrap.nv-historicalBarChart").data([k]), F = E.enter().append("g").attr("class", "nvd3 nv-wrap nv-historicalBarChart").append("g"), G = E.select("g");
        F.append("g").attr("class", "nv-x nv-axis"), F.append("g").attr("class", "nv-y nv-axis"), F.append("g").attr("class", "nv-barsWrap"), F.append("g").attr("class", "nv-legendWrap"), F.append("g").attr("class", "nv-interactive"), p && (i.width(B), G.select(".nv-legendWrap").datum(k).call(i), l.top != i.height() && (l.top = i.height(), C = a.utils.availableHeight(o, w, l)), E.select(".nv-legendWrap").attr("transform", "translate(0," + -l.top + ")")), E.attr("transform", "translate(" + l.left + "," + l.top + ")"), s && G.select(".nv-y.nv-axis").attr("transform", "translate(" + B + ",0)"), t && (j.width(B).height(C).margin({left: l.left, top: l.top}).svgContainer(w).xScale(d), E.select(".nv-interactive").call(j)), f.width(B).height(C).color(k.map(function(a, b) {
          return a.color || m(a, b)
        }).filter(function(a, b) {
          return !k[b].disabled
        }));
        var H = G.select(".nv-barsWrap").datum(k.filter(function(a) {
          return !a.disabled
        }));
        H.transition().call(f), q && (g.scale(d)._ticks(a.utils.calcTicksX(B / 100, k)).tickSize(-C, 0), G.select(".nv-x.nv-axis").attr("transform", "translate(0," + e.range()[0] + ")"), G.select(".nv-x.nv-axis").transition().call(g)), r && (h.scale(e)._ticks(a.utils.calcTicksY(C / 36, k)).tickSize(-B, 0), G.select(".nv-y.nv-axis").transition().call(h)), j.dispatch.on("elementMousemove", function(b) {
          f.clearHighlights();
          var d, e, i, l = [];
          k.filter(function(a, b) {
            return a.seriesIndex = b, !a.disabled
          }).forEach(function(g, h) {
            e = a.interactiveBisect(g.values, b.pointXValue, c.x()), f.highlightPoint(e, !0);
            var j = g.values[e];
            void 0 !== j && (void 0 === d && (d = j), void 0 === i && (i = c.xScale()(c.x()(j, e))), l.push({key: g.key, value: c.y()(j, e), color: m(g, g.seriesIndex), data: g.values[e]}))
          });
          var n = g.tickFormat()(c.x()(d, e));
          j.tooltip.chartContainer(A.parentNode).valueFormatter(function(a, b) {
            return h.tickFormat()(a)
          }).data({value: n, index: e, series: l})(), j.renderGuideLine(i)
        }), j.dispatch.on("elementMouseout", function(a) {
          x.tooltipHide(), f.clearHighlights()
        }), i.dispatch.on("legendClick", function(a, d) {
          a.disabled = !a.disabled, k.filter(function(a) {
            return !a.disabled
          }).length || k.map(function(a) {
            return a.disabled = !1, E.selectAll(".nv-series").classed("disabled", !1), a
          }), u.disabled = k.map(function(a) {
            return !!a.disabled
          }), x.stateChange(u), b.transition().call(c)
        }), i.dispatch.on("legendDblclick", function(a) {
          k.forEach(function(a) {
            a.disabled = !0
          }), a.disabled = !1, u.disabled = k.map(function(a) {
            return !!a.disabled
          }), x.stateChange(u), c.update()
        }), x.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (k.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), u.disabled = a.disabled), c.update()
        })
      }), z.renderEnd("historicalBarChart immediate"), c
    }

    var d, e, f = b || a.models.historicalBar(), g = a.models.axis(), h = a.models.axis(), i = a.models.legend(), j = a.interactiveGuideline(), k = a.models.tooltip(), l = {top: 30, right: 90, bottom: 50, left: 90}, m = a.utils.defaultColor(), n = null, o = null, p = !1, q = !0, r = !0, s = !1, t = !1, u = {}, v = null, w = null, x = d3.dispatch("tooltipHide", "stateChange", "changeState", "renderEnd"), y = 250;
    g.orient("bottom").tickPadding(7), h.orient(s ? "right" : "left"), k.duration(0).headerEnabled(!1).valueFormatter(function(a, b) {
      return h.tickFormat()(a, b)
    }).headerFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    });
    var z = a.utils.renderWatch(x, 0);
    return f.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series = {key: c.x()(a.data), value: c.y()(a.data), color: a.color}, k.data(a).hidden(!1)
    }), f.dispatch.on("elementMouseout.tooltip", function(a) {
      k.hidden(!0)
    }), f.dispatch.on("elementMousemove.tooltip", function(a) {
      k()
    }), c.dispatch = x, c.bars = f, c.legend = i, c.xAxis = g, c.yAxis = h, c.interactiveLayer = j, c.tooltip = k, c.options = a.utils.optionsFunc.bind(c), c._options = Object.create({}, {
      width: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, height: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, showLegend: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, showXAxis: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, showYAxis: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, defaultState: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, noData: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, margin: {
        get: function() {
          return l
        }, set: function(a) {
          l.top = void 0 !== a.top ? a.top : l.top, l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left
        }
      }, color: {
        get: function() {
          return m
        }, set: function(b) {
          m = a.utils.getColor(b), i.color(m), f.color(m)
        }
      }, duration: {
        get: function() {
          return y
        }, set: function(a) {
          y = a, z.reset(y), h.duration(y), g.duration(y)
        }
      }, rightAlignYAxis: {
        get: function() {
          return s
        }, set: function(a) {
          s = a, h.orient(a ? "right" : "left")
        }
      }, useInteractiveGuideline: {
        get: function() {
          return t
        }, set: function(a) {
          t = a, a === !0 && c.interactive(!1)
        }
      }
    }), a.utils.inheritOptions(c, f), a.utils.initOptions(c), c
  }, a.models.ohlcBarChart = function() {
    var b = a.models.historicalBarChart(a.models.ohlcBar());
    return b.useInteractiveGuideline(!0), b.interactiveLayer.tooltip.contentGenerator(function(a) {
      var c = a.series[0].data, d = c.open < c.close ? "2ca02c" : "d62728";
      return '<h3 style="color: #' + d + '">' + a.value + "</h3><table><tr><td>open:</td><td>" + b.yAxis.tickFormat()(c.open) + "</td></tr><tr><td>close:</td><td>" + b.yAxis.tickFormat()(c.close) + "</td></tr><tr><td>high</td><td>" + b.yAxis.tickFormat()(c.high) + "</td></tr><tr><td>low:</td><td>" + b.yAxis.tickFormat()(c.low) + "</td></tr></table>"
    }), b
  }, a.models.candlestickBarChart = function() {
    var b = a.models.historicalBarChart(a.models.candlestickBar());
    return b.useInteractiveGuideline(!0), b.interactiveLayer.tooltip.contentGenerator(function(a) {
      var c = a.series[0].data, d = c.open < c.close ? "2ca02c" : "d62728";
      return '<h3 style="color: #' + d + '">' + a.value + "</h3><table><tr><td>open:</td><td>" + b.yAxis.tickFormat()(c.open) + "</td></tr><tr><td>close:</td><td>" + b.yAxis.tickFormat()(c.close) + "</td></tr><tr><td>high</td><td>" + b.yAxis.tickFormat()(c.high) + "</td></tr><tr><td>low:</td><td>" + b.yAxis.tickFormat()(c.low) + "</td></tr></table>"
    }), b
  }, a.models.legend = function() {
    "use strict";
    function b(q) {
      function r(a, b) {
        return "furious" != p ? "#000" : n ? a.disengaged ? "#000" : "#fff" : n ? void 0 : (a.color || (a.color = g(a, b)), a.disabled ? a.color : "#fff")
      }

      function s(a, b) {
        return n && "furious" == p && a.disengaged ? "#eee" : a.color || g(a, b)
      }

      function t(a, b) {
        return n && "furious" == p ? 1 : a.disabled ? 0 : 1
      }

      return q.each(function(b) {
        var g = d - c.left - c.right, q = d3.select(this);
        a.utils.initSVG(q);
        var u = q.selectAll("g.nv-legend").data([b]), v = u.enter().append("g").attr("class", "nvd3 nv-legend").append("g"), w = u.select("g");
        u.attr("transform", "translate(" + c.left + "," + c.top + ")");
        var x, y, z = w.selectAll(".nv-series").data(function(a) {
          return "furious" != p ? a : a.filter(function(a) {
            return n ? !0 : !a.disengaged
          })
        }), A = z.enter().append("g").attr("class", "nv-series");
        switch (p) {
          case"furious":
            y = 23;
            break;
          case"classic":
            y = 20
        }
        if ("classic" == p)A.append("circle").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("r", 5), x = z.select("circle"); else if ("furious" == p) {
          A.append("rect").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("rx", 3).attr("ry", 3), x = z.select(".nv-legend-symbol"), A.append("g").attr("class", "nv-check-box").property("innerHTML", '<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>').attr("transform", "translate(-10,-8)scale(0.5)");
          var B = z.select(".nv-check-box");
          B.each(function(a, b) {
            d3.select(this).selectAll("path").attr("stroke", r(a, b))
          })
        }
        A.append("text").attr("text-anchor", "start").attr("class", "nv-legend-text").attr("dy", ".32em").attr("dx", "8");
        var C = z.select("text.nv-legend-text");
        z.on("mouseover", function(a, b) {
          o.legendMouseover(a, b)
        }).on("mouseout", function(a, b) {
          o.legendMouseout(a, b)
        }).on("click", function(a, b) {
          o.legendClick(a, b);
          var c = z.data();
          if (l) {
            if ("classic" == p)m ? (c.forEach(function(a) {
              a.disabled = !0
            }), a.disabled = !1) : (a.disabled = !a.disabled, c.every(function(a) {
              return a.disabled
            }) && c.forEach(function(a) {
              a.disabled = !1
            })); else if ("furious" == p)if (n)a.disengaged = !a.disengaged, a.userDisabled = void 0 == a.userDisabled ? !!a.disabled : a.userDisabled, a.disabled = a.disengaged || a.userDisabled; else if (!n) {
              a.disabled = !a.disabled, a.userDisabled = a.disabled;
              var d = c.filter(function(a) {
                return !a.disengaged
              });
              d.every(function(a) {
                return a.userDisabled
              }) && c.forEach(function(a) {
                a.disabled = a.userDisabled = !1
              })
            }
            o.stateChange({
              disabled: c.map(function(a) {
                return !!a.disabled
              }), disengaged: c.map(function(a) {
                return !!a.disengaged
              })
            })
          }
        }).on("dblclick", function(a, b) {
          if (("furious" != p || !n) && (o.legendDblclick(a, b), l)) {
            var c = z.data();
            c.forEach(function(a) {
              a.disabled = !0, "furious" == p && (a.userDisabled = a.disabled)
            }), a.disabled = !1, "furious" == p && (a.userDisabled = a.disabled), o.stateChange({
              disabled: c.map(function(a) {
                return !!a.disabled
              })
            })
          }
        }), z.classed("nv-disabled", function(a) {
          return a.userDisabled
        }), z.exit().remove(), C.attr("fill", r).text(f);
        var D = 0;
        if (i) {
          var E = [];
          z.each(function(b, c) {
            var d;
            if (f(b).length > h) {
              var e = f(b).substring(0, h);
              d = d3.select(this).select("text").text(e + "..."), d3.select(this).append("svg:title").text(f(b))
            } else d = d3.select(this).select("text");
            var g;
            try {
              if (g = d.node().getComputedTextLength(), 0 >= g)throw Error()
            } catch (i) {
              g = a.utils.calcApproxTextWidth(d)
            }
            E.push(g + j)
          });
          var F = 0, G = [];
          for (D = 0; g > D && F < E.length;)G[F] = E[F], D += E[F++];
          for (0 === F && (F = 1); D > g && F > 1;) {
            G = [], F--;
            for (var H = 0; H < E.length; H++)E[H] > (G[H % F] || 0) && (G[H % F] = E[H]);
            D = G.reduce(function(a, b, c, d) {
              return a + b
            })
          }
          for (var I = [], J = 0, K = 0; F > J; J++)I[J] = K, K += G[J];
          z.attr("transform", function(a, b) {
            return "translate(" + I[b % F] + "," + (5 + Math.floor(b / F) * y) + ")"
          }), k ? w.attr("transform", "translate(" + (d - c.right - D) + "," + c.top + ")") : w.attr("transform", "translate(0," + c.top + ")"), e = c.top + c.bottom + Math.ceil(E.length / F) * y
        } else {
          var L, M = 5, N = 5, O = 0;
          z.attr("transform", function(a, b) {
            var e = d3.select(this).select("text").node().getComputedTextLength() + j;
            return L = N, d < c.left + c.right + L + e && (N = L = 5, M += y), N += e, N > O && (O = N), L + O > D && (D = L + O), "translate(" + L + "," + M + ")"
          }), w.attr("transform", "translate(" + (d - c.right - O) + "," + c.top + ")"), e = c.top + c.bottom + M + 15
        }
        if ("furious" == p) {
          x.attr("width", function(a, b) {
            return C[0][b].getComputedTextLength() + 27
          }).attr("height", 18).attr("y", -9).attr("x", -15), v.insert("rect", ":first-child").attr("class", "nv-legend-bg").attr("fill", "#eee").attr("opacity", 0);
          var P = w.select(".nv-legend-bg");
          P.transition().duration(300).attr("x", -y).attr("width", D + y - 12).attr("height", e + 10).attr("y", -c.top - 10).attr("opacity", n ? 1 : 0)
        }
        x.style("fill", s).style("fill-opacity", t).style("stroke", s)
      }), b
    }

    var c = {top: 5, right: 0, bottom: 5, left: 0}, d = 400, e = 20, f = function(a) {
      return a.key
    }, g = a.utils.getColor(), h = 20, i = !0, j = 32, k = !0, l = !0, m = !1, n = !1, o = d3.dispatch("legendClick", "legendDblclick", "legendMouseover", "legendMouseout", "stateChange"), p = "classic";
    return b.dispatch = o, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, height: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, key: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, align: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, maxKeyLength: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, rightAlign: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, padding: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, updateState: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, radioButtonMode: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, expanded: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, vers: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, margin: {
        get: function() {
          return c
        }, set: function(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left
        }
      }, color: {
        get: function() {
          return g
        }, set: function(b) {
          g = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.line = function() {
    "use strict";
    function b(r) {
      return v.reset(), v.models(e), r.each(function(b) {
        i = d3.select(this);
        var r = a.utils.availableWidth(g, i, f), s = a.utils.availableHeight(h, i, f);
        a.utils.initSVG(i), c = e.xScale(), d = e.yScale(), t = t || c, u = u || d;
        var w = i.selectAll("g.nv-wrap.nv-line").data([b]), x = w.enter().append("g").attr("class", "nvd3 nv-wrap nv-line"), y = x.append("defs"), z = x.append("g"), A = w.select("g");
        z.append("g").attr("class", "nv-groups"), z.append("g").attr("class", "nv-scatterWrap"), w.attr("transform", "translate(" + f.left + "," + f.top + ")"), e.width(r).height(s);
        var B = w.select(".nv-scatterWrap");
        B.call(e), y.append("clipPath").attr("id", "nv-edge-clip-" + e.id()).append("rect"), w.select("#nv-edge-clip-" + e.id() + " rect").attr("width", r).attr("height", s > 0 ? s : 0), A.attr("clip-path", p ? "url(#nv-edge-clip-" + e.id() + ")" : ""), B.attr("clip-path", p ? "url(#nv-edge-clip-" + e.id() + ")" : "");
        var C = w.select(".nv-groups").selectAll(".nv-group").data(function(a) {
          return a
        }, function(a) {
          return a.key
        });
        C.enter().append("g").style("stroke-opacity", 1e-6).style("stroke-width", function(a) {
          return a.strokeWidth || j
        }).style("fill-opacity", 1e-6), C.exit().remove(), C.attr("class", function(a, b) {
          return (a.classed || "") + " nv-group nv-series-" + b
        }).classed("hover", function(a) {
          return a.hover
        }).style("fill", function(a, b) {
          return k(a, b)
        }).style("stroke", function(a, b) {
          return k(a, b)
        }), C.watchTransition(v, "line: groups").style("stroke-opacity", 1).style("fill-opacity", function(a) {
          return a.fillOpacity || .5
        });
        var D = C.selectAll("path.nv-area").data(function(a) {
          return o(a) ? [a] : []
        });
        D.enter().append("path").attr("class", "nv-area").attr("d", function(b) {
          return d3.svg.area().interpolate(q).defined(n).x(function(b, c) {
            return a.utils.NaNtoZero(t(l(b, c)))
          }).y0(function(b, c) {
            return a.utils.NaNtoZero(u(m(b, c)))
          }).y1(function(a, b) {
            return u(d.domain()[0] <= 0 ? d.domain()[1] >= 0 ? 0 : d.domain()[1] : d.domain()[0])
          }).apply(this, [b.values])
        }), C.exit().selectAll("path.nv-area").remove(), D.watchTransition(v, "line: areaPaths").attr("d", function(b) {
          return d3.svg.area().interpolate(q).defined(n).x(function(b, d) {
            return a.utils.NaNtoZero(c(l(b, d)))
          }).y0(function(b, c) {
            return a.utils.NaNtoZero(d(m(b, c)))
          }).y1(function(a, b) {
            return d(d.domain()[0] <= 0 ? d.domain()[1] >= 0 ? 0 : d.domain()[1] : d.domain()[0])
          }).apply(this, [b.values])
        });
        var E = C.selectAll("path.nv-line").data(function(a) {
          return [a.values]
        });
        E.enter().append("path").attr("class", "nv-line").attr("d", d3.svg.line().interpolate(q).defined(n).x(function(b, c) {
          return a.utils.NaNtoZero(t(l(b, c)))
        }).y(function(b, c) {
          return a.utils.NaNtoZero(u(m(b, c)))
        })), E.watchTransition(v, "line: linePaths").attr("d", d3.svg.line().interpolate(q).defined(n).x(function(b, d) {
          return a.utils.NaNtoZero(c(l(b, d)))
        }).y(function(b, c) {
          return a.utils.NaNtoZero(d(m(b, c)))
        })), t = c.copy(), u = d.copy()
      }), v.renderEnd("line immediate"), b
    }

    var c, d, e = a.models.scatter(), f = {top: 0, right: 0, bottom: 0, left: 0}, g = 960, h = 500, i = null, j = 1.5, k = a.utils.defaultColor(), l = function(a) {
      return a.x
    }, m = function(a) {
      return a.y
    }, n = function(a, b) {
      return !isNaN(m(a, b)) && null !== m(a, b)
    }, o = function(a) {
      return a.area
    }, p = !1, q = "linear", r = 250, s = d3.dispatch("elementClick", "elementMouseover", "elementMouseout", "renderEnd");
    e.pointSize(16).pointDomain([16, 256]);
    var t, u, v = a.utils.renderWatch(s, r);
    return b.dispatch = s, b.scatter = e, e.dispatch.on("elementClick", function() {
      s.elementClick.apply(this, arguments)
    }), e.dispatch.on("elementMouseover", function() {
      s.elementMouseover.apply(this, arguments)
    }), e.dispatch.on("elementMouseout", function() {
      s.elementMouseout.apply(this, arguments)
    }), b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, height: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, defined: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, interpolate: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, clipEdge: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, margin: {
        get: function() {
          return f
        }, set: function(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left
        }
      }, duration: {
        get: function() {
          return r
        }, set: function(a) {
          r = a, v.reset(r), e.duration(r)
        }
      }, isArea: {
        get: function() {
          return o
        }, set: function(a) {
          o = d3.functor(a)
        }
      }, x: {
        get: function() {
          return l
        }, set: function(a) {
          l = a, e.x(a)
        }
      }, y: {
        get: function() {
          return m
        }, set: function(a) {
          m = a, e.y(a)
        }
      }, color: {
        get: function() {
          return k
        }, set: function(b) {
          k = a.utils.getColor(b), e.color(k)
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.lineChart = function() {
    "use strict";
    function b(l) {
      return K.reset(), K.models(g), K.models(m), w && K.models(h), x && K.models(i), C && K.models(n),
      B && K.models(o), l.each(function(l) {
        function H() {
          w && X.select(".nv-focus .nv-x.nv-axis").transition().duration(J).call(h)
        }

        function K() {
          x && X.select(".nv-focus .nv-y.nv-axis").transition().duration(J).call(i)
        }

        function N(a) {
          var b = +("e" == a), c = b ? 1 : -1, d = T / 3;
          return "M" + .5 * c + "," + d + "A6,6 0 0 " + b + " " + 6.5 * c + "," + (d + 6) + "V" + (2 * d - 6) + "A6,6 0 0 " + b + " " + .5 * c + "," + 2 * d + "ZM" + 2.5 * c + "," + (d + 8) + "V" + (2 * d - 8) + "M" + 4.5 * c + "," + (d + 8) + "V" + (2 * d - 8)
        }

        function O() {
          p.empty() || p.extent(E), aa.data([p.empty() ? e.domain() : E]).each(function(a, b) {
            var d = e(a[0]) - c.range()[0], f = R - e(a[1]);
            d3.select(this).select(".left").attr("width", 0 > d ? 0 : d), d3.select(this).select(".right").attr("x", e(a[1])).attr("width", 0 > f ? 0 : f)
          })
        }

        function P() {
          E = p.empty() ? null : p.extent();
          var a = p.empty() ? e.domain() : p.extent();
          if (!(Math.abs(a[0] - a[1]) <= 1)) {
            I.brush({extent: a, brush: p}), O();
            var b = X.select(".nv-focus .nv-linesWrap").datum(l.filter(function(a) {
              return !a.disabled
            }).map(function(b, c) {
              return {
                key: b.key, area: b.area, classed: b.classed, values: b.values.filter(function(b, c) {
                  return g.x()(b, c) >= a[0] && g.x()(b, c) <= a[1]
                }), disableTooltip: b.disableTooltip
              }
            }));
            b.transition().duration(J).call(g), H(), K()
          }
        }

        var Q = d3.select(this);
        a.utils.initSVG(Q);
        var R = a.utils.availableWidth(t, Q, q), S = a.utils.availableHeight(u, Q, q) - (A ? D : 0), T = D - r.top - r.bottom;
        if (b.update = function() {
            0 === J ? Q.call(b) : Q.transition().duration(J).call(b)
          }, b.container = this, F.setter(M(l), b.update).getter(L(l)).update(), F.disabled = l.map(function(a) {
            return !!a.disabled
          }), !G) {
          var U;
          G = {};
          for (U in F)F[U] instanceof Array ? G[U] = F[U].slice(0) : G[U] = F[U]
        }
        if (!(l && l.length && l.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, Q), b;
        Q.selectAll(".nv-noData").remove(), c = g.xScale(), d = g.yScale(), e = m.xScale(), f = m.yScale();
        var V = Q.selectAll("g.nv-wrap.nv-lineChart").data([l]), W = V.enter().append("g").attr("class", "nvd3 nv-wrap nv-lineChart").append("g"), X = V.select("g");
        W.append("g").attr("class", "nv-legendWrap");
        var Y = W.append("g").attr("class", "nv-focus");
        Y.append("g").attr("class", "nv-background").append("rect"), Y.append("g").attr("class", "nv-x nv-axis"), Y.append("g").attr("class", "nv-y nv-axis"), Y.append("g").attr("class", "nv-linesWrap"), Y.append("g").attr("class", "nv-interactive");
        var Z = W.append("g").attr("class", "nv-context");
        Z.append("g").attr("class", "nv-background").append("rect"), Z.append("g").attr("class", "nv-x nv-axis"), Z.append("g").attr("class", "nv-y nv-axis"), Z.append("g").attr("class", "nv-linesWrap"), Z.append("g").attr("class", "nv-brushBackground"), Z.append("g").attr("class", "nv-x nv-brush"), v && (j.width(R), X.select(".nv-legendWrap").datum(l).call(j), q.top != j.height() && (q.top = j.height(), S = a.utils.availableHeight(u, Q, q) - (A ? D : 0)), V.select(".nv-legendWrap").attr("transform", "translate(0," + -q.top + ")")), V.attr("transform", "translate(" + q.left + "," + q.top + ")"), y && X.select(".nv-y.nv-axis").attr("transform", "translate(" + R + ",0)"), z && (k.width(R).height(S).margin({left: q.left, top: q.top}).svgContainer(Q).xScale(c), V.select(".nv-interactive").call(k)), X.select(".nv-focus .nv-background rect").attr("width", R).attr("height", S), g.width(R).height(S).color(l.map(function(a, b) {
          return a.color || s(a, b)
        }).filter(function(a, b) {
          return !l[b].disabled
        }));
        var $ = X.select(".nv-linesWrap").datum(l.filter(function(a) {
          return !a.disabled
        }));
        if (w && h.scale(c)._ticks(a.utils.calcTicksX(R / 100, l)).tickSize(-S, 0), x && i.scale(d)._ticks(a.utils.calcTicksY(S / 36, l)).tickSize(-R, 0), X.select(".nv-focus .nv-x.nv-axis").attr("transform", "translate(0," + S + ")"), A) {
          m.defined(g.defined()).width(R).height(T).color(l.map(function(a, b) {
            return a.color || s(a, b)
          }).filter(function(a, b) {
            return !l[b].disabled
          })), X.select(".nv-context").attr("transform", "translate(0," + (S + q.bottom + r.top) + ")").style("display", A ? "initial" : "none");
          var _ = X.select(".nv-context .nv-linesWrap").datum(l.filter(function(a) {
            return !a.disabled
          }));
          d3.transition(_).call(m), p.x(e).on("brush", function() {
            P()
          }), E && p.extent(E);
          var aa = X.select(".nv-brushBackground").selectAll("g").data([E || p.extent()]), ba = aa.enter().append("g");
          ba.append("rect").attr("class", "left").attr("x", 0).attr("y", 0).attr("height", T), ba.append("rect").attr("class", "right").attr("x", 0).attr("y", 0).attr("height", T);
          var ca = X.select(".nv-x.nv-brush").call(p);
          ca.selectAll("rect").attr("height", T), ca.selectAll(".resize").append("path").attr("d", N), P(), X.select(".nv-context .nv-background rect").attr("width", R).attr("height", T), C && (n.scale(e)._ticks(a.utils.calcTicksX(R / 100, l)).tickSize(-T, 0), X.select(".nv-context .nv-x.nv-axis").attr("transform", "translate(0," + f.range()[0] + ")"), d3.transition(X.select(".nv-context .nv-x.nv-axis")).call(n)), B && (o.scale(f)._ticks(a.utils.calcTicksY(T / 36, l)).tickSize(-R, 0), d3.transition(X.select(".nv-context .nv-y.nv-axis")).call(o)), X.select(".nv-context .nv-x.nv-axis").attr("transform", "translate(0," + f.range()[0] + ")")
        } else $.call(g), H(), K();
        j.dispatch.on("stateChange", function(a) {
          for (var c in a)F[c] = a[c];
          I.stateChange(F), b.update()
        }), k.dispatch.on("elementMousemove", function(d) {
          g.clearHighlights();
          var f, h, j, m = [];
          if (l.filter(function(a, b) {
              return a.seriesIndex = b, !a.disabled && !a.disableTooltip
            }).forEach(function(i, k) {
              var l = A ? p.empty() ? e.domain() : p.extent() : c.domain(), n = i.values.filter(function(a, b) {
                return g.x()(a, b) >= l[0] && g.x()(a, b) <= l[1]
              });
              h = a.interactiveBisect(n, d.pointXValue, g.x());
              var o = n[h], q = b.y()(o, h);
              null !== q && g.highlightPoint(i.seriesIndex, h, !0), void 0 !== o && (void 0 === f && (f = o), void 0 === j && (j = b.xScale()(b.x()(o, h))), m.push({key: i.key, value: q, color: s(i, i.seriesIndex), data: o}))
            }), m.length > 2) {
            var n = b.yScale().invert(d.mouseY), o = Math.abs(b.yScale().domain()[0] - b.yScale().domain()[1]), q = .03 * o, r = a.nearestValueIndex(m.map(function(a) {
              return a.value
            }), n, q);
            null !== r && (m[r].highlight = !0)
          }
          k.tooltip.chartContainer(b.container.parentNode).valueFormatter(function(a, b) {
            return null === a ? "N/A" : i.tickFormat()(a)
          }).data({value: b.x()(f, h), index: h, series: m})(), k.renderGuideLine(j)
        }), k.dispatch.on("elementClick", function(c) {
          var d, e = [];
          l.filter(function(a, b) {
            return a.seriesIndex = b, !a.disabled
          }).forEach(function(f) {
            var g = a.interactiveBisect(f.values, c.pointXValue, b.x()), h = f.values[g];
            if ("undefined" != typeof h) {
              "undefined" == typeof d && (d = b.xScale()(b.x()(h, g)));
              var i = b.yScale()(b.y()(h, g));
              e.push({point: h, pointIndex: g, pos: [d, i], seriesIndex: f.seriesIndex, series: f})
            }
          }), g.dispatch.elementClick(e)
        }), k.dispatch.on("elementMouseout", function(a) {
          g.clearHighlights()
        }), I.on("changeState", function(a) {
          "undefined" != typeof a.disabled && l.length === a.disabled.length && (l.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), F.disabled = a.disabled), b.update()
        })
      }), K.renderEnd("lineChart immediate"), b
    }

    var c, d, e, f, g = a.models.line(), h = a.models.axis(), i = a.models.axis(), j = a.models.legend(), k = a.interactiveGuideline(), l = a.models.tooltip(), m = a.models.line(), n = a.models.axis(), o = a.models.axis(), p = d3.svg.brush(), q = {top: 30, right: 20, bottom: 50, left: 60}, r = {top: 0, right: 20, bottom: 20, left: 60}, s = a.utils.defaultColor(), t = null, u = null, v = !0, w = !0, x = !0, y = !1, z = !1, A = !1, B = !1, C = !0, D = 50, E = null, F = a.utils.state(), G = null, H = null, I = d3.dispatch("tooltipShow", "tooltipHide", "brush", "stateChange", "changeState", "renderEnd"), J = 250;
    h.orient("bottom").tickPadding(7), i.orient(y ? "right" : "left"), g.clipEdge(!0).duration(0), m.interactive(!1), m.pointActive(function(a) {
      return !1
    }), n.orient("bottom").tickPadding(5), o.orient(y ? "right" : "left"), l.valueFormatter(function(a, b) {
      return i.tickFormat()(a, b)
    }).headerFormatter(function(a, b) {
      return h.tickFormat()(a, b)
    }), k.tooltip.valueFormatter(function(a, b) {
      return i.tickFormat()(a, b)
    }).headerFormatter(function(a, b) {
      return h.tickFormat()(a, b)
    });
    var K = a.utils.renderWatch(I, J), L = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          })
        }
      }
    }, M = function(a) {
      return function(b) {
        void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    };
    return g.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series.disableTooltip || l.data(a).hidden(!1)
    }), g.dispatch.on("elementMouseout.tooltip", function(a) {
      l.hidden(!0)
    }), b.dispatch = I, b.lines = g, b.lines2 = m, b.legend = j, b.xAxis = h, b.x2Axis = n, b.yAxis = i, b.y2Axis = o, b.interactiveLayer = k, b.tooltip = l, b.state = F, b.dispatch = I, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, height: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, showLegend: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, showXAxis: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, showYAxis: {
        get: function() {
          return x
        }, set: function(a) {
          x = a
        }
      }, focusEnable: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, focusHeight: {
        get: function() {
          return height2
        }, set: function(a) {
          D = a
        }
      }, focusShowAxisX: {
        get: function() {
          return C
        }, set: function(a) {
          C = a
        }
      }, focusShowAxisY: {
        get: function() {
          return B
        }, set: function(a) {
          B = a
        }
      }, brushExtent: {
        get: function() {
          return E
        }, set: function(a) {
          E = a
        }
      }, defaultState: {
        get: function() {
          return G
        }, set: function(a) {
          G = a
        }
      }, noData: {
        get: function() {
          return H
        }, set: function(a) {
          H = a
        }
      }, margin: {
        get: function() {
          return q
        }, set: function(a) {
          q.top = void 0 !== a.top ? a.top : q.top, q.right = void 0 !== a.right ? a.right : q.right, q.bottom = void 0 !== a.bottom ? a.bottom : q.bottom, q.left = void 0 !== a.left ? a.left : q.left
        }
      }, duration: {
        get: function() {
          return J
        }, set: function(a) {
          J = a, K.reset(J), g.duration(J), h.duration(J), n.duration(J), i.duration(J), o.duration(J)
        }
      }, focusMargin: {
        get: function() {
          return r
        }, set: function(a) {
          r.top = void 0 !== a.top ? a.top : r.top, r.right = void 0 !== a.right ? a.right : r.right, r.bottom = void 0 !== a.bottom ? a.bottom : r.bottom, r.left = void 0 !== a.left ? a.left : r.left
        }
      }, color: {
        get: function() {
          return s
        }, set: function(b) {
          s = a.utils.getColor(b), j.color(s), g.color(s)
        }
      }, interpolate: {
        get: function() {
          return g.interpolate()
        }, set: function(a) {
          g.interpolate(a), m.interpolate(a)
        }
      }, xTickFormat: {
        get: function() {
          return h.tickFormat()
        }, set: function(a) {
          h.tickFormat(a), n.tickFormat(a)
        }
      }, yTickFormat: {
        get: function() {
          return i.tickFormat()
        }, set: function(a) {
          i.tickFormat(a), o.tickFormat(a)
        }
      }, x: {
        get: function() {
          return g.x()
        }, set: function(a) {
          g.x(a), m.x(a)
        }
      }, y: {
        get: function() {
          return g.y()
        }, set: function(a) {
          g.y(a), m.y(a)
        }
      }, rightAlignYAxis: {
        get: function() {
          return y
        }, set: function(a) {
          y = a, i.orient(y ? "right" : "left")
        }
      }, useInteractiveGuideline: {
        get: function() {
          return z
        }, set: function(a) {
          z = a, z && (g.interactive(!1), g.useVoronoi(!1))
        }
      }
    }), a.utils.inheritOptions(b, g), a.utils.initOptions(b), b
  }, a.models.lineWithFocusChart = function() {
    return a.models.lineChart().margin({bottom: 30}).focusEnable(!0)
  }, a.models.linePlusBarChart = function() {
    "use strict";
    function b(v) {
      return v.each(function(v) {
        function J(a) {
          var b = +("e" == a), c = b ? 1 : -1, d = Z / 3;
          return "M" + .5 * c + "," + d + "A6,6 0 0 " + b + " " + 6.5 * c + "," + (d + 6) + "V" + (2 * d - 6) + "A6,6 0 0 " + b + " " + .5 * c + "," + 2 * d + "ZM" + 2.5 * c + "," + (d + 8) + "V" + (2 * d - 8) + "M" + 4.5 * c + "," + (d + 8) + "V" + (2 * d - 8)
        }

        function R() {
          u.empty() || u.extent(I), ma.data([u.empty() ? e.domain() : I]).each(function(a, b) {
            var c = e(a[0]) - e.range()[0], d = e.range()[1] - e(a[1]);
            d3.select(this).select(".left").attr("width", 0 > c ? 0 : c), d3.select(this).select(".right").attr("x", e(a[1])).attr("width", 0 > d ? 0 : d)
          })
        }

        function S() {
          I = u.empty() ? null : u.extent(), c = u.empty() ? e.domain() : u.extent(), K.brush({extent: c, brush: u}), R(), l.width(X).height(Y).color(v.map(function(a, b) {
            return a.color || C(a, b)
          }).filter(function(a, b) {
            return !v[b].disabled && v[b].bar
          })), j.width(X).height(Y).color(v.map(function(a, b) {
            return a.color || C(a, b)
          }).filter(function(a, b) {
            return !v[b].disabled && !v[b].bar
          }));
          var b = fa.select(".nv-focus .nv-barsWrap").datum(_.length ? _.map(function(a, b) {
            return {
              key: a.key, values: a.values.filter(function(a, b) {
                return l.x()(a, b) >= c[0] && l.x()(a, b) <= c[1]
              })
            }
          }) : [{values: []}]), h = fa.select(".nv-focus .nv-linesWrap").datum(V(aa) ? [{values: []}] : aa.filter(function(a) {
            return !a.disabled
          }).map(function(a, b) {
            return {
              area: a.area, fillOpacity: a.fillOpacity, key: a.key, values: a.values.filter(function(a, b) {
                return j.x()(a, b) >= c[0] && j.x()(a, b) <= c[1]
              })
            }
          }));
          d = _.length && !Q ? l.xScale() : j.xScale(), n.scale(d)._ticks(a.utils.calcTicksX(X / 100, v)).tickSize(-Y, 0), n.domain([Math.ceil(c[0]), Math.floor(c[1])]), fa.select(".nv-x.nv-axis").transition().duration(L).call(n), b.transition().duration(L).call(l), h.transition().duration(L).call(j), fa.select(".nv-focus .nv-x.nv-axis").attr("transform", "translate(0," + f.range()[0] + ")"), p.scale(f)._ticks(a.utils.calcTicksY(Y / 36, v)).tickSize(-X, 0), q.scale(g)._ticks(a.utils.calcTicksY(Y / 36, v)).tickSize(_.length ? 0 : -X, 0);
          var i = _.length ? 1 : 0, k = aa.length && !V(aa) ? 1 : 0, m = Q ? k : i, o = Q ? i : k;
          fa.select(".nv-focus .nv-y1.nv-axis").style("opacity", m), fa.select(".nv-focus .nv-y2.nv-axis").style("opacity", o).attr("transform", "translate(" + d.range()[1] + ",0)"), fa.select(".nv-focus .nv-y1.nv-axis").transition().duration(L).call(p), fa.select(".nv-focus .nv-y2.nv-axis").transition().duration(L).call(q)
        }

        var W = d3.select(this);
        a.utils.initSVG(W);
        var X = a.utils.availableWidth(y, W, w), Y = a.utils.availableHeight(z, W, w) - (E ? H : 0), Z = H - x.top - x.bottom;
        if (b.update = function() {
            W.transition().duration(L).call(b)
          }, b.container = this, M.setter(U(v), b.update).getter(T(v)).update(), M.disabled = v.map(function(a) {
            return !!a.disabled
          }), !N) {
          var $;
          N = {};
          for ($ in M)M[$] instanceof Array ? N[$] = M[$].slice(0) : N[$] = M[$]
        }
        if (!(v && v.length && v.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, W), b;
        W.selectAll(".nv-noData").remove();
        var _ = v.filter(function(a) {
          return !a.disabled && a.bar
        }), aa = v.filter(function(a) {
          return !a.bar
        });
        d = l.xScale(), e = o.scale(), f = Q ? j.yScale() : l.yScale(), g = Q ? l.yScale() : j.yScale(), h = Q ? k.yScale() : m.yScale(), i = Q ? m.yScale() : k.yScale();
        var ba = v.filter(function(a) {
          return !a.disabled && (Q ? !a.bar : a.bar)
        }).map(function(a) {
          return a.values.map(function(a, b) {
            return {x: A(a, b), y: B(a, b)}
          })
        }), ca = v.filter(function(a) {
          return !a.disabled && (Q ? a.bar : !a.bar)
        }).map(function(a) {
          return a.values.map(function(a, b) {
            return {x: A(a, b), y: B(a, b)}
          })
        });
        d.range([0, X]), e.domain(d3.extent(d3.merge(ba.concat(ca)), function(a) {
          return a.x
        })).range([0, X]);
        var da = W.selectAll("g.nv-wrap.nv-linePlusBar").data([v]), ea = da.enter().append("g").attr("class", "nvd3 nv-wrap nv-linePlusBar").append("g"), fa = da.select("g");
        ea.append("g").attr("class", "nv-legendWrap");
        var ga = ea.append("g").attr("class", "nv-focus");
        ga.append("g").attr("class", "nv-x nv-axis"), ga.append("g").attr("class", "nv-y1 nv-axis"), ga.append("g").attr("class", "nv-y2 nv-axis"), ga.append("g").attr("class", "nv-barsWrap"), ga.append("g").attr("class", "nv-linesWrap");
        var ha = ea.append("g").attr("class", "nv-context");
        if (ha.append("g").attr("class", "nv-x nv-axis"), ha.append("g").attr("class", "nv-y1 nv-axis"), ha.append("g").attr("class", "nv-y2 nv-axis"), ha.append("g").attr("class", "nv-barsWrap"), ha.append("g").attr("class", "nv-linesWrap"), ha.append("g").attr("class", "nv-brushBackground"), ha.append("g").attr("class", "nv-x nv-brush"), D) {
          var ia = t.align() ? X / 2 : X, ja = t.align() ? ia : 0;
          t.width(ia), fa.select(".nv-legendWrap").datum(v.map(function(a) {
            return a.originalKey = void 0 === a.originalKey ? a.key : a.originalKey, Q ? a.key = a.originalKey + (a.bar ? P : O) : a.key = a.originalKey + (a.bar ? O : P), a
          })).call(t), w.top != t.height() && (w.top = t.height(), Y = a.utils.availableHeight(z, W, w) - H), fa.select(".nv-legendWrap").attr("transform", "translate(" + ja + "," + -w.top + ")")
        }
        da.attr("transform", "translate(" + w.left + "," + w.top + ")"), fa.select(".nv-context").style("display", E ? "initial" : "none"), m.width(X).height(Z).color(v.map(function(a, b) {
          return a.color || C(a, b)
        }).filter(function(a, b) {
          return !v[b].disabled && v[b].bar
        })), k.width(X).height(Z).color(v.map(function(a, b) {
          return a.color || C(a, b)
        }).filter(function(a, b) {
          return !v[b].disabled && !v[b].bar
        }));
        var ka = fa.select(".nv-context .nv-barsWrap").datum(_.length ? _ : [{values: []}]), la = fa.select(".nv-context .nv-linesWrap").datum(V(aa) ? [{values: []}] : aa.filter(function(a) {
          return !a.disabled
        }));
        fa.select(".nv-context").attr("transform", "translate(0," + (Y + w.bottom + x.top) + ")"), ka.transition().call(m), la.transition().call(k), G && (o._ticks(a.utils.calcTicksX(X / 100, v)).tickSize(-Z, 0), fa.select(".nv-context .nv-x.nv-axis").attr("transform", "translate(0," + h.range()[0] + ")"), fa.select(".nv-context .nv-x.nv-axis").transition().call(o)), F && (r.scale(h)._ticks(Z / 36).tickSize(-X, 0), s.scale(i)._ticks(Z / 36).tickSize(_.length ? 0 : -X, 0), fa.select(".nv-context .nv-y3.nv-axis").style("opacity", _.length ? 1 : 0).attr("transform", "translate(0," + e.range()[0] + ")"), fa.select(".nv-context .nv-y2.nv-axis").style("opacity", aa.length ? 1 : 0).attr("transform", "translate(" + e.range()[1] + ",0)"), fa.select(".nv-context .nv-y1.nv-axis").transition().call(r), fa.select(".nv-context .nv-y2.nv-axis").transition().call(s)), u.x(e).on("brush", S), I && u.extent(I);
        var ma = fa.select(".nv-brushBackground").selectAll("g").data([I || u.extent()]), na = ma.enter().append("g");
        na.append("rect").attr("class", "left").attr("x", 0).attr("y", 0).attr("height", Z), na.append("rect").attr("class", "right").attr("x", 0).attr("y", 0).attr("height", Z);
        var oa = fa.select(".nv-x.nv-brush").call(u);
        oa.selectAll("rect").attr("height", Z), oa.selectAll(".resize").append("path").attr("d", J), t.dispatch.on("stateChange", function(a) {
          for (var c in a)M[c] = a[c];
          K.stateChange(M), b.update()
        }), K.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (v.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), M.disabled = a.disabled), b.update()
        }), S()
      }), b
    }

    var c, d, e, f, g, h, i, j = a.models.line(), k = a.models.line(), l = a.models.historicalBar(), m = a.models.historicalBar(), n = a.models.axis(), o = a.models.axis(), p = a.models.axis(), q = a.models.axis(), r = a.models.axis(), s = a.models.axis(), t = a.models.legend(), u = d3.svg.brush(), v = a.models.tooltip(), w = {top: 30, right: 30, bottom: 30, left: 60}, x = {top: 0, right: 30, bottom: 20, left: 60}, y = null, z = null, A = function(a) {
      return a.x
    }, B = function(a) {
      return a.y
    }, C = a.utils.defaultColor(), D = !0, E = !0, F = !1, G = !0, H = 50, I = null, J = null, K = d3.dispatch("brush", "stateChange", "changeState"), L = 0, M = a.utils.state(), N = null, O = " (left axis)", P = " (right axis)", Q = !1;
    j.clipEdge(!0), k.interactive(!1), k.pointActive(function(a) {
      return !1
    }), n.orient("bottom").tickPadding(5), p.orient("left"), q.orient("right"), o.orient("bottom").tickPadding(5), r.orient("left"), s.orient("right"), v.headerEnabled(!0).headerFormatter(function(a, b) {
      return n.tickFormat()(a, b)
    });
    var R = function() {
      return Q ? {main: p, focus: r} : {main: q, focus: s}
    }, S = function() {
      return Q ? {main: q, focus: s} : {main: p, focus: r}
    }, T = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          })
        }
      }
    }, U = function(a) {
      return function(b) {
        void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    }, V = function(a) {
      return a.every(function(a) {
        return a.disabled
      })
    };
    return j.dispatch.on("elementMouseover.tooltip", function(a) {
      v.duration(100).valueFormatter(function(a, b) {
        return S().main.tickFormat()(a, b)
      }).data(a).hidden(!1)
    }), j.dispatch.on("elementMouseout.tooltip", function(a) {
      v.hidden(!0)
    }), l.dispatch.on("elementMouseover.tooltip", function(a) {
      a.value = b.x()(a.data), a.series = {value: b.y()(a.data), color: a.color}, v.duration(0).valueFormatter(function(a, b) {
        return R().main.tickFormat()(a, b)
      }).data(a).hidden(!1)
    }), l.dispatch.on("elementMouseout.tooltip", function(a) {
      v.hidden(!0)
    }), l.dispatch.on("elementMousemove.tooltip", function(a) {
      v()
    }), b.dispatch = K, b.legend = t, b.lines = j, b.lines2 = k, b.bars = l, b.bars2 = m, b.xAxis = n, b.x2Axis = o, b.y1Axis = p, b.y2Axis = q, b.y3Axis = r, b.y4Axis = s, b.tooltip = v, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, height: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, showLegend: {
        get: function() {
          return D
        }, set: function(a) {
          D = a
        }
      }, brushExtent: {
        get: function() {
          return I
        }, set: function(a) {
          I = a
        }
      }, noData: {
        get: function() {
          return J
        }, set: function(a) {
          J = a
        }
      }, focusEnable: {
        get: function() {
          return E
        }, set: function(a) {
          E = a
        }
      }, focusHeight: {
        get: function() {
          return H
        }, set: function(a) {
          H = a
        }
      }, focusShowAxisX: {
        get: function() {
          return G
        }, set: function(a) {
          G = a
        }
      }, focusShowAxisY: {
        get: function() {
          return F
        }, set: function(a) {
          F = a
        }
      }, legendLeftAxisHint: {
        get: function() {
          return O
        }, set: function(a) {
          O = a
        }
      }, legendRightAxisHint: {
        get: function() {
          return P
        }, set: function(a) {
          P = a
        }
      }, margin: {
        get: function() {
          return w
        }, set: function(a) {
          w.top = void 0 !== a.top ? a.top : w.top, w.right = void 0 !== a.right ? a.right : w.right, w.bottom = void 0 !== a.bottom ? a.bottom : w.bottom, w.left = void 0 !== a.left ? a.left : w.left
        }
      }, focusMargin: {
        get: function() {
          return x
        }, set: function(a) {
          x.top = void 0 !== a.top ? a.top : x.top, x.right = void 0 !== a.right ? a.right : x.right, x.bottom = void 0 !== a.bottom ? a.bottom : x.bottom, x.left = void 0 !== a.left ? a.left : x.left
        }
      }, duration: {
        get: function() {
          return L
        }, set: function(a) {
          L = a
        }
      }, color: {
        get: function() {
          return C
        }, set: function(b) {
          C = a.utils.getColor(b), t.color(C)
        }
      }, x: {
        get: function() {
          return A
        }, set: function(a) {
          A = a, j.x(a), k.x(a), l.x(a), m.x(a)
        }
      }, y: {
        get: function() {
          return B
        }, set: function(a) {
          B = a, j.y(a), k.y(a), l.y(a), m.y(a)
        }
      }, switchYAxisOrder: {
        get: function() {
          return Q
        }, set: function(a) {
          if (Q !== a) {
            var b = p.tickFormat();
            p.tickFormat(q.tickFormat()), q.tickFormat(b)
          }
          Q = a
        }
      }
    }), a.utils.inheritOptions(b, j), a.utils.initOptions(b), b
  }, a.models.multiBar = function() {
    "use strict";
    function b(E) {
      return C.reset(), E.each(function(b) {
        var E = k - j.left - j.right, F = l - j.top - j.bottom;
        p = d3.select(this), a.utils.initSVG(p);
        var G = 0;
        if (x && b.length && (x = [
            {
              values: b[0].values.map(function(a) {
                return {x: a.x, y: 0, series: a.series, size: .01}
              })
            }
          ]), u) {
          var H = d3.layout.stack().offset(v).values(function(a) {
            return a.values
          }).y(r)(!b.length && x ? x : b);
          H.forEach(function(a, c) {
            a.nonStackable ? (b[c].nonStackableSeries = G++, H[c] = b[c]) : c > 0 && H[c - 1].nonStackable && H[c].values.map(function(a, b) {
              a.y0 -= H[c - 1].values[b].y, a.y1 = a.y0 + a.y
            })
          }), b = H
        }
        b.forEach(function(a, b) {
          a.values.forEach(function(c) {
            c.series = b, c.key = a.key
          })
        }), u && b[0].values.map(function(a, c) {
          var d = 0, e = 0;
          b.map(function(a, f) {
            if (!b[f].nonStackable) {
              var g = a.values[c];
              g.size = Math.abs(g.y), g.y < 0 ? (g.y1 = e, e -= g.size) : (g.y1 = g.size + d, d += g.size)
            }
          })
        });
        var I = d && e ? [] : b.map(function(a, b) {
          return a.values.map(function(a, c) {
            return {x: q(a, c), y: r(a, c), y0: a.y0, y1: a.y1, idx: b}
          })
        });
        m.domain(d || d3.merge(I).map(function(a) {
            return a.x
          })).rangeBands(f || [0, E], A), n.domain(e || d3.extent(d3.merge(I).map(function(a) {
            var c = a.y;
            return u && !b[a.idx].nonStackable && (c = a.y > 0 ? a.y1 : a.y1 + a.y), c
          }).concat(s))).range(g || [F, 0]), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] - .01 * m.domain()[0], m.domain()[1] + .01 * m.domain()[1]]) : m.domain([-1, 1])), n.domain()[0] === n.domain()[1] && (n.domain()[0] ? n.domain([n.domain()[0] + .01 * n.domain()[0], n.domain()[1] - .01 * n.domain()[1]]) : n.domain([-1, 1])), h = h || m, i = i || n;
        var J = p.selectAll("g.nv-wrap.nv-multibar").data([b]), K = J.enter().append("g").attr("class", "nvd3 nv-wrap nv-multibar"), L = K.append("defs"), M = K.append("g"), N = J.select("g");
        M.append("g").attr("class", "nv-groups"), J.attr("transform", "translate(" + j.left + "," + j.top + ")"), L.append("clipPath").attr("id", "nv-edge-clip-" + o).append("rect"), J.select("#nv-edge-clip-" + o + " rect").attr("width", E).attr("height", F), N.attr("clip-path", t ? "url(#nv-edge-clip-" + o + ")" : "");
        var O = J.select(".nv-groups").selectAll(".nv-group").data(function(a) {
          return a
        }, function(a, b) {
          return b
        });
        O.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6);
        var P = C.transition(O.exit().selectAll("rect.nv-bar"), "multibarExit", Math.min(100, z)).attr("y", function(a, c, d) {
          var e = i(0) || 0;
          return u && b[a.series] && !b[a.series].nonStackable && (e = i(a.y0)), e
        }).attr("height", 0).remove();
        P.delay && P.delay(function(a, b) {
          var c = b * (z / (D + 1)) - b;
          return c
        }), O.attr("class", function(a, b) {
          return "nv-group nv-series-" + b
        }).classed("hover", function(a) {
          return a.hover
        }).style("fill", function(a, b) {
          return w(a, b)
        }).style("stroke", function(a, b) {
          return w(a, b)
        }), O.style("stroke-opacity", 1).style("fill-opacity", .75);
        var Q = O.selectAll("rect.nv-bar").data(function(a) {
          return x && !b.length ? x.values : a.values
        });
        Q.exit().remove();
        Q.enter().append("rect").attr("class", function(a, b) {
          return r(a, b) < 0 ? "nv-bar negative" : "nv-bar positive"
        }).attr("x", function(a, c, d) {
          return u && !b[d].nonStackable ? 0 : d * m.rangeBand() / b.length
        }).attr("y", function(a, c, d) {
          return i(u && !b[d].nonStackable ? a.y0 : 0) || 0
        }).attr("height", 0).attr("width", function(a, c, d) {
          return m.rangeBand() / (u && !b[d].nonStackable ? 1 : b.length)
        }).attr("transform", function(a, b) {
          return "translate(" + m(q(a, b)) + ",0)"
        });
        Q.style("fill", function(a, b, c) {
          return w(a, c, b)
        }).style("stroke", function(a, b, c) {
          return w(a, c, b)
        }).on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0), B.elementMouseover({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1), B.elementMouseout({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mousemove", function(a, b) {
          B.elementMousemove({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("click", function(a, b) {
          var c = this;
          B.elementClick({data: a, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c}), d3.event.stopPropagation()
        }).on("dblclick", function(a, b) {
          B.elementDblClick({data: a, index: b, color: d3.select(this).style("fill")}), d3.event.stopPropagation()
        }), Q.attr("class", function(a, b) {
          return r(a, b) < 0 ? "nv-bar negative" : "nv-bar positive"
        }).attr("transform", function(a, b) {
          return "translate(" + m(q(a, b)) + ",0)"
        }), y && (c || (c = b.map(function() {
          return !0
        })), Q.style("fill", function(a, b, d) {
          return d3.rgb(y(a, b)).darker(c.map(function(a, b) {
            return b
          }).filter(function(a, b) {
            return !c[b]
          })[d]).toString()
        }).style("stroke", function(a, b, d) {
          return d3.rgb(y(a, b)).darker(c.map(function(a, b) {
            return b
          }).filter(function(a, b) {
            return !c[b]
          })[d]).toString()
        }));
        var R = Q.watchTransition(C, "multibar", Math.min(250, z)).delay(function(a, c) {
          return c * z / b[0].values.length
        });
        u ? R.attr("y", function(a, c, d) {
          var e = 0;
          return e = b[d].nonStackable ? r(a, c) < 0 ? n(0) : n(0) - n(r(a, c)) < -1 ? n(0) - 1 : n(r(a, c)) || 0 : n(a.y1)
        }).attr("height", function(a, c, d) {
          return b[d].nonStackable ? Math.max(Math.abs(n(r(a, c)) - n(0)), 0) || 0 : Math.max(Math.abs(n(a.y + a.y0) - n(a.y0)), 0)
        }).attr("x", function(a, c, d) {
          var e = 0;
          return b[d].nonStackable && (e = a.series * m.rangeBand() / b.length, b.length !== G && (e = b[d].nonStackableSeries * m.rangeBand() / (2 * G))), e
        }).attr("width", function(a, c, d) {
          if (b[d].nonStackable) {
            var e = m.rangeBand() / G;
            return b.length !== G && (e = m.rangeBand() / (2 * G)), e
          }
          return m.rangeBand()
        }) : R.attr("x", function(a, c) {
          return a.series * m.rangeBand() / b.length
        }).attr("width", m.rangeBand() / b.length).attr("y", function(a, b) {
          return r(a, b) < 0 ? n(0) : n(0) - n(r(a, b)) < 1 ? n(0) - 1 : n(r(a, b)) || 0
        }).attr("height", function(a, b) {
          return Math.max(Math.abs(n(r(a, b)) - n(0)), 1) || 0
        }), h = m.copy(), i = n.copy(), b[0] && b[0].values && (D = b[0].values.length)
      }), C.renderEnd("multibar immediate"), b
    }

    var c, d, e, f, g, h, i, j = {top: 0, right: 0, bottom: 0, left: 0}, k = 960, l = 500, m = d3.scale.ordinal(), n = d3.scale.linear(), o = Math.floor(1e4 * Math.random()), p = null, q = function(a) {
      return a.x
    }, r = function(a) {
      return a.y
    }, s = [0], t = !0, u = !1, v = "zero", w = a.utils.defaultColor(), x = !1, y = null, z = 500, A = .1, B = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"), C = a.utils.renderWatch(B, z), D = 0;
    return b.dispatch = B, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, height: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, x: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, y: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, xScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, yScale: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, xDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, yDomain: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, xRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, yRange: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, forceY: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, stacked: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, stackOffset: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, clipEdge: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, disabled: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, id: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, hideable: {
        get: function() {
          return x
        }, set: function(a) {
          x = a
        }
      }, groupSpacing: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, margin: {
        get: function() {
          return j
        }, set: function(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left
        }
      }, duration: {
        get: function() {
          return z
        }, set: function(a) {
          z = a, C.reset(z)
        }
      }, color: {
        get: function() {
          return w
        }, set: function(b) {
          w = a.utils.getColor(b)
        }
      }, barColor: {
        get: function() {
          return y
        }, set: function(b) {
          y = b ? a.utils.getColor(b) : null
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.multiBarChart = function() {
    "use strict";
    function b(B) {
      return G.reset(), G.models(e), s && G.models(f), t && G.models(g), B.each(function(B) {
        var G = d3.select(this), K = this;
        a.utils.initSVG(G);
        var L = a.utils.availableWidth(m, G, l), M = a.utils.availableHeight(n, G, l);
        if (b.update = function() {
            0 === E ? G.call(b) : G.transition().duration(E).call(b)
          }, b.container = this, z.setter(J(B), b.update).getter(I(B)).update(), z.disabled = B.map(function(a) {
            return !!a.disabled
          }), !A) {
          var N;
          A = {};
          for (N in z)z[N] instanceof Array ? A[N] = z[N].slice(0) : A[N] = z[N]
        }
        if (!(B && B.length && B.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, G), b;
        G.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale();
        var O = G.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([B]), P = O.enter().append("g").attr("class", "nvd3 nv-wrap nv-multiBarWithLegend").append("g"), Q = O.select("g");
        if (P.append("g").attr("class", "nv-x nv-axis"), P.append("g").attr("class", "nv-y nv-axis"), P.append("g").attr("class", "nv-barsWrap"), P.append("g").attr("class", "nv-legendWrap"), P.append("g").attr("class", "nv-controlsWrap"), P.append("g").attr("class", "nv-interactive"), r && (i.width(L - D()), Q.select(".nv-legendWrap").datum(B).call(i), l.top != i.height() && (l.top = i.height(), M = a.utils.availableHeight(n, G, l)), Q.select(".nv-legendWrap").attr("transform", "translate(" + D() + "," + -l.top + ")")), p) {
          var R = [{key: q.grouped || "Grouped", disabled: e.stacked()}, {key: q.stacked || "Stacked", disabled: !e.stacked()}];
          j.width(D()).color(["#444", "#444", "#444"]), Q.select(".nv-controlsWrap").datum(R).attr("transform", "translate(0," + -l.top + ")").call(j)
        }
        O.attr("transform", "translate(" + l.left + "," + l.top + ")"), u && Q.select(".nv-y.nv-axis").attr("transform", "translate(" + L + ",0)"), e.disabled(B.map(function(a) {
          return a.disabled
        })).width(L).height(M).color(B.map(function(a, b) {
          return a.color || o(a, b)
        }).filter(function(a, b) {
          return !B[b].disabled
        }));
        var S = Q.select(".nv-barsWrap").datum(B.filter(function(a) {
          return !a.disabled
        }));
        if (S.call(e), s) {
          f.scale(c)._ticks(a.utils.calcTicksX(L / 100, B)).tickSize(-M, 0), Q.select(".nv-x.nv-axis").attr("transform", "translate(0," + d.range()[0] + ")"), Q.select(".nv-x.nv-axis").call(f);
          var T = Q.select(".nv-x.nv-axis > g").selectAll("g");
          if (T.selectAll("line, text").style("opacity", 1), w) {
            var U = function(a, b) {
              return "translate(" + a + "," + b + ")"
            }, V = 5, W = 17;
            T.selectAll("text").attr("transform", function(a, b, c) {
              return U(0, c % 2 == 0 ? V : W)
            });
            var X = d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;
            Q.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform", function(a, b) {
              return U(0, 0 === b || X % 2 !== 0 ? W : V)
            })
          }
          x && Q.selectAll(".tick text").call(a.utils.wrapTicks, b.xAxis.rangeBand()), v && T.filter(function(a, b) {
            return b % Math.ceil(B[0].values.length / (L / 100)) !== 0
          }).selectAll("text, line").style("opacity", 0), y && T.selectAll(".tick text").attr("transform", "rotate(" + y + " 0,0)").style("text-anchor", y > 0 ? "start" : "end"), Q.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity", 1)
        }
        t && (g.scale(d)._ticks(a.utils.calcTicksY(M / 36, B)).tickSize(-L, 0), Q.select(".nv-y.nv-axis").call(g)), F && (h.width(L).height(M).margin({left: l.left, top: l.top}).svgContainer(G).xScale(c), O.select(".nv-interactive").call(h)), i.dispatch.on("stateChange", function(a) {
          for (var c in a)z[c] = a[c];
          C.stateChange(z), b.update()
        }), j.dispatch.on("legendClick", function(a, c) {
          if (a.disabled) {
            switch (R = R.map(function(a) {
              return a.disabled = !0, a
            }), a.disabled = !1, a.key) {
              case"Grouped":
              case q.grouped:
                e.stacked(!1);
                break;
              case"Stacked":
              case q.stacked:
                e.stacked(!0)
            }
            z.stacked = e.stacked(), C.stateChange(z), b.update()
          }
        }), C.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (B.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), z.disabled = a.disabled), "undefined" != typeof a.stacked && (e.stacked(a.stacked), z.stacked = a.stacked, H = a.stacked), b.update()
        }), F ? (h.dispatch.on("elementMousemove", function(a) {
          if (void 0 != a.pointXValue) {
            var d, e, f, g, i = [];
            B.filter(function(a, b) {
              return a.seriesIndex = b, !a.disabled
            }).forEach(function(h, j) {
              e = c.domain().indexOf(a.pointXValue);
              var k = h.values[e];
              void 0 !== k && (g = k.x, void 0 === d && (d = k), void 0 === f && (f = a.mouseX), i.push({
                key: h.key, value: b.y()(k, e),
                color: o(h, h.seriesIndex), data: h.values[e]
              }))
            }), h.tooltip.chartContainer(K.parentNode).data({value: g, index: e, series: i})(), h.renderGuideLine(f)
          }
        }), h.dispatch.on("elementMouseout", function(a) {
          h.tooltip.hidden(!0)
        })) : (e.dispatch.on("elementMouseover.tooltip", function(a) {
          a.value = b.x()(a.data), a.series = {key: a.data.key, value: b.y()(a.data), color: a.color}, k.data(a).hidden(!1)
        }), e.dispatch.on("elementMouseout.tooltip", function(a) {
          k.hidden(!0)
        }), e.dispatch.on("elementMousemove.tooltip", function(a) {
          k()
        }))
      }), G.renderEnd("multibarchart immediate"), b
    }

    var c, d, e = a.models.multiBar(), f = a.models.axis(), g = a.models.axis(), h = a.interactiveGuideline(), i = a.models.legend(), j = a.models.legend(), k = a.models.tooltip(), l = {top: 30, right: 20, bottom: 50, left: 60}, m = null, n = null, o = a.utils.defaultColor(), p = !0, q = {}, r = !0, s = !0, t = !0, u = !1, v = !0, w = !1, x = !1, y = 0, z = a.utils.state(), A = null, B = null, C = d3.dispatch("stateChange", "changeState", "renderEnd"), D = function() {
      return p ? 180 : 0
    }, E = 250, F = !1;
    z.stacked = !1, e.stacked(!1), f.orient("bottom").tickPadding(7).showMaxMin(!1).tickFormat(function(a) {
      return a
    }), g.orient(u ? "right" : "left").tickFormat(d3.format(",.1f")), k.duration(0).valueFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    }).headerFormatter(function(a, b) {
      return f.tickFormat()(a, b)
    }), j.updateState(!1);
    var G = a.utils.renderWatch(C), H = !1, I = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          }), stacked: H
        }
      }
    }, J = function(a) {
      return function(b) {
        void 0 !== b.stacked && (H = b.stacked), void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    };
    return b.dispatch = C, b.multibar = e, b.legend = i, b.controls = j, b.xAxis = f, b.yAxis = g, b.state = z, b.tooltip = k, b.interactiveLayer = h, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, height: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, showLegend: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, showControls: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, controlLabels: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, showXAxis: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, showYAxis: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, defaultState: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, noData: {
        get: function() {
          return B
        }, set: function(a) {
          B = a
        }
      }, reduceXTicks: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, rotateLabels: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, staggerLabels: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, wrapLabels: {
        get: function() {
          return x
        }, set: function(a) {
          x = !!a
        }
      }, margin: {
        get: function() {
          return l
        }, set: function(a) {
          l.top = void 0 !== a.top ? a.top : l.top, l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left
        }
      }, duration: {
        get: function() {
          return E
        }, set: function(a) {
          E = a, e.duration(E), f.duration(E), g.duration(E), G.reset(E)
        }
      }, color: {
        get: function() {
          return o
        }, set: function(b) {
          o = a.utils.getColor(b), i.color(o)
        }
      }, rightAlignYAxis: {
        get: function() {
          return u
        }, set: function(a) {
          u = a, g.orient(u ? "right" : "left")
        }
      }, useInteractiveGuideline: {
        get: function() {
          return F
        }, set: function(a) {
          F = a
        }
      }, barColor: {
        get: function() {
          return e.barColor
        }, set: function(a) {
          e.barColor(a), i.color(function(a, b) {
            return d3.rgb("#ccc").darker(1.5 * b).toString()
          })
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.multiBarHorizontal = function() {
    "use strict";
    function b(m) {
      return E.reset(), m.each(function(b) {
        var m = k - j.left - j.right, C = l - j.top - j.bottom;
        n = d3.select(this), a.utils.initSVG(n), w && (b = d3.layout.stack().offset("zero").values(function(a) {
          return a.values
        }).y(r)(b)), b.forEach(function(a, b) {
          a.values.forEach(function(c) {
            c.series = b, c.key = a.key
          })
        }), w && b[0].values.map(function(a, c) {
          var d = 0, e = 0;
          b.map(function(a) {
            var b = a.values[c];
            b.size = Math.abs(b.y), b.y < 0 ? (b.y1 = e - b.size, e -= b.size) : (b.y1 = d, d += b.size)
          })
        });
        var F = d && e ? [] : b.map(function(a) {
          return a.values.map(function(a, b) {
            return {x: q(a, b), y: r(a, b), y0: a.y0, y1: a.y1}
          })
        });
        o.domain(d || d3.merge(F).map(function(a) {
            return a.x
          })).rangeBands(f || [0, C], A), p.domain(e || d3.extent(d3.merge(F).map(function(a) {
            return w ? a.y > 0 ? a.y1 + a.y : a.y1 : a.y
          }).concat(t))), x && !w ? p.range(g || [p.domain()[0] < 0 ? z : 0, m - (p.domain()[1] > 0 ? z : 0)]) : p.range(g || [0, m]), h = h || o, i = i || d3.scale.linear().domain(p.domain()).range([p(0), p(0)]);
        var G = d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([b]), H = G.enter().append("g").attr("class", "nvd3 nv-wrap nv-multibarHorizontal"), I = (H.append("defs"), H.append("g"));
        G.select("g");
        I.append("g").attr("class", "nv-groups"), G.attr("transform", "translate(" + j.left + "," + j.top + ")");
        var J = G.select(".nv-groups").selectAll(".nv-group").data(function(a) {
          return a
        }, function(a, b) {
          return b
        });
        J.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6), J.exit().watchTransition(E, "multibarhorizontal: exit groups").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6).remove(), J.attr("class", function(a, b) {
          return "nv-group nv-series-" + b
        }).classed("hover", function(a) {
          return a.hover
        }).style("fill", function(a, b) {
          return u(a, b)
        }).style("stroke", function(a, b) {
          return u(a, b)
        }), J.watchTransition(E, "multibarhorizontal: groups").style("stroke-opacity", 1).style("fill-opacity", .75);
        var K = J.selectAll("g.nv-bar").data(function(a) {
          return a.values
        });
        K.exit().remove();
        var L = K.enter().append("g").attr("transform", function(a, c, d) {
          return "translate(" + i(w ? a.y0 : 0) + "," + (w ? 0 : d * o.rangeBand() / b.length + o(q(a, c))) + ")"
        });
        L.append("rect").attr("width", 0).attr("height", o.rangeBand() / (w ? 1 : b.length)), K.on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0), D.elementMouseover({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1), D.elementMouseout({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          D.elementMouseout({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("mousemove", function(a, b) {
          D.elementMousemove({data: a, index: b, color: d3.select(this).style("fill")})
        }).on("click", function(a, b) {
          D.elementClick({data: a, index: b, color: d3.select(this).style("fill")}), d3.event.stopPropagation()
        }).on("dblclick", function(a, b) {
          D.elementDblClick({data: a, index: b, color: d3.select(this).style("fill")}), d3.event.stopPropagation()
        }), s(b[0], 0) && (L.append("polyline"), K.select("polyline").attr("fill", "none").attr("points", function(a, c) {
          var d = s(a, c), e = .8 * o.rangeBand() / (2 * (w ? 1 : b.length));
          d = d.length ? d : [-Math.abs(d), Math.abs(d)], d = d.map(function(a) {
            return p(a) - p(0)
          });
          var f = [[d[0], -e], [d[0], e], [d[0], 0], [d[1], 0], [d[1], -e], [d[1], e]];
          return f.map(function(a) {
            return a.join(",")
          }).join(" ")
        }).attr("transform", function(a, c) {
          var d = o.rangeBand() / (2 * (w ? 1 : b.length));
          return "translate(" + (r(a, c) < 0 ? 0 : p(r(a, c)) - p(0)) + ", " + d + ")"
        })), L.append("text"), x && !w ? (K.select("text").attr("text-anchor", function(a, b) {
          return r(a, b) < 0 ? "end" : "start"
        }).attr("y", o.rangeBand() / (2 * b.length)).attr("dy", ".32em").text(function(a, b) {
          var c = B(r(a, b)), d = s(a, b);
          return void 0 === d ? c : d.length ? c + "+" + B(Math.abs(d[1])) + "-" + B(Math.abs(d[0])) : c + "±" + B(Math.abs(d))
        }), K.watchTransition(E, "multibarhorizontal: bars").select("text").attr("x", function(a, b) {
          return r(a, b) < 0 ? -4 : p(r(a, b)) - p(0) + 4
        })) : K.selectAll("text").text(""), y && !w ? (L.append("text").classed("nv-bar-label", !0), K.select("text.nv-bar-label").attr("text-anchor", function(a, b) {
          return r(a, b) < 0 ? "start" : "end"
        }).attr("y", o.rangeBand() / (2 * b.length)).attr("dy", ".32em").text(function(a, b) {
          return q(a, b)
        }), K.watchTransition(E, "multibarhorizontal: bars").select("text.nv-bar-label").attr("x", function(a, b) {
          return r(a, b) < 0 ? p(0) - p(r(a, b)) + 4 : -4
        })) : K.selectAll("text.nv-bar-label").text(""), K.attr("class", function(a, b) {
          return r(a, b) < 0 ? "nv-bar negative" : "nv-bar positive"
        }), v && (c || (c = b.map(function() {
          return !0
        })), K.style("fill", function(a, b, d) {
          return d3.rgb(v(a, b)).darker(c.map(function(a, b) {
            return b
          }).filter(function(a, b) {
            return !c[b]
          })[d]).toString()
        }).style("stroke", function(a, b, d) {
          return d3.rgb(v(a, b)).darker(c.map(function(a, b) {
            return b
          }).filter(function(a, b) {
            return !c[b]
          })[d]).toString()
        })), w ? K.watchTransition(E, "multibarhorizontal: bars").attr("transform", function(a, b) {
          return "translate(" + p(a.y1) + "," + o(q(a, b)) + ")"
        }).select("rect").attr("width", function(a, b) {
          return Math.abs(p(r(a, b) + a.y0) - p(a.y0)) || 0
        }).attr("height", o.rangeBand()) : K.watchTransition(E, "multibarhorizontal: bars").attr("transform", function(a, c) {
          return "translate(" + p(r(a, c) < 0 ? r(a, c) : 0) + "," + (a.series * o.rangeBand() / b.length + o(q(a, c))) + ")"
        }).select("rect").attr("height", o.rangeBand() / b.length).attr("width", function(a, b) {
          return Math.max(Math.abs(p(r(a, b)) - p(0)), 1) || 0
        }), h = o.copy(), i = p.copy()
      }), E.renderEnd("multibarHorizontal immediate"), b
    }

    var c, d, e, f, g, h, i, j = {top: 0, right: 0, bottom: 0, left: 0}, k = 960, l = 500, m = Math.floor(1e4 * Math.random()), n = null, o = d3.scale.ordinal(), p = d3.scale.linear(), q = function(a) {
      return a.x
    }, r = function(a) {
      return a.y
    }, s = function(a) {
      return a.yErr
    }, t = [0], u = a.utils.defaultColor(), v = null, w = !1, x = !1, y = !1, z = 60, A = .1, B = d3.format(",.2f"), C = 250, D = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"), E = a.utils.renderWatch(D, C);
    return b.dispatch = D, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, height: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, x: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, y: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, yErr: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, xScale: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, yScale: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, xDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, yDomain: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, xRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, yRange: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, forceY: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, stacked: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, showValues: {
        get: function() {
          return x
        }, set: function(a) {
          x = a
        }
      }, disabled: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, id: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, valueFormat: {
        get: function() {
          return B
        }, set: function(a) {
          B = a
        }
      }, valuePadding: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, groupSpacing: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, margin: {
        get: function() {
          return j
        }, set: function(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left
        }
      }, duration: {
        get: function() {
          return C
        }, set: function(a) {
          C = a, E.reset(C)
        }
      }, color: {
        get: function() {
          return u
        }, set: function(b) {
          u = a.utils.getColor(b)
        }
      }, barColor: {
        get: function() {
          return v
        }, set: function(b) {
          v = b ? a.utils.getColor(b) : null
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.multiBarHorizontalChart = function() {
    "use strict";
    function b(j) {
      return C.reset(), C.models(e), r && C.models(f), s && C.models(g), j.each(function(j) {
        var w = d3.select(this);
        a.utils.initSVG(w);
        var C = a.utils.availableWidth(l, w, k), D = a.utils.availableHeight(m, w, k);
        if (b.update = function() {
            w.transition().duration(z).call(b)
          }, b.container = this, t = e.stacked(), u.setter(B(j), b.update).getter(A(j)).update(), u.disabled = j.map(function(a) {
            return !!a.disabled
          }), !v) {
          var E;
          v = {};
          for (E in u)u[E] instanceof Array ? v[E] = u[E].slice(0) : v[E] = u[E]
        }
        if (!(j && j.length && j.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, w), b;
        w.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale().clamp(!0);
        var F = w.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([j]), G = F.enter().append("g").attr("class", "nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"), H = F.select("g");
        if (G.append("g").attr("class", "nv-x nv-axis"), G.append("g").attr("class", "nv-y nv-axis").append("g").attr("class", "nv-zeroLine").append("line"), G.append("g").attr("class", "nv-barsWrap"), G.append("g").attr("class", "nv-legendWrap"), G.append("g").attr("class", "nv-controlsWrap"), q && (h.width(C - y()), H.select(".nv-legendWrap").datum(j).call(h), k.top != h.height() && (k.top = h.height(), D = a.utils.availableHeight(m, w, k)), H.select(".nv-legendWrap").attr("transform", "translate(" + y() + "," + -k.top + ")")), o) {
          var I = [{key: p.grouped || "Grouped", disabled: e.stacked()}, {key: p.stacked || "Stacked", disabled: !e.stacked()}];
          i.width(y()).color(["#444", "#444", "#444"]), H.select(".nv-controlsWrap").datum(I).attr("transform", "translate(0," + -k.top + ")").call(i)
        }
        F.attr("transform", "translate(" + k.left + "," + k.top + ")"), e.disabled(j.map(function(a) {
          return a.disabled
        })).width(C).height(D).color(j.map(function(a, b) {
          return a.color || n(a, b)
        }).filter(function(a, b) {
          return !j[b].disabled
        }));
        var J = H.select(".nv-barsWrap").datum(j.filter(function(a) {
          return !a.disabled
        }));
        if (J.transition().call(e), r) {
          f.scale(c)._ticks(a.utils.calcTicksY(D / 24, j)).tickSize(-C, 0), H.select(".nv-x.nv-axis").call(f);
          var K = H.select(".nv-x.nv-axis").selectAll("g");
          K.selectAll("line, text")
        }
        s && (g.scale(d)._ticks(a.utils.calcTicksX(C / 100, j)).tickSize(-D, 0), H.select(".nv-y.nv-axis").attr("transform", "translate(0," + D + ")"), H.select(".nv-y.nv-axis").call(g)), H.select(".nv-zeroLine line").attr("x1", d(0)).attr("x2", d(0)).attr("y1", 0).attr("y2", -D), h.dispatch.on("stateChange", function(a) {
          for (var c in a)u[c] = a[c];
          x.stateChange(u), b.update()
        }), i.dispatch.on("legendClick", function(a, c) {
          if (a.disabled) {
            switch (I = I.map(function(a) {
              return a.disabled = !0, a
            }), a.disabled = !1, a.key) {
              case"Grouped":
              case p.grouped:
                e.stacked(!1);
                break;
              case"Stacked":
              case p.stacked:
                e.stacked(!0)
            }
            u.stacked = e.stacked(), x.stateChange(u), t = e.stacked(), b.update()
          }
        }), x.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (j.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), u.disabled = a.disabled), "undefined" != typeof a.stacked && (e.stacked(a.stacked), u.stacked = a.stacked, t = a.stacked), b.update()
        })
      }), C.renderEnd("multibar horizontal chart immediate"), b
    }

    var c, d, e = a.models.multiBarHorizontal(), f = a.models.axis(), g = a.models.axis(), h = a.models.legend().height(30), i = a.models.legend().height(30), j = a.models.tooltip(), k = {top: 30, right: 20, bottom: 50, left: 60}, l = null, m = null, n = a.utils.defaultColor(), o = !0, p = {}, q = !0, r = !0, s = !0, t = !1, u = a.utils.state(), v = null, w = null, x = d3.dispatch("stateChange", "changeState", "renderEnd"), y = function() {
      return o ? 180 : 0
    }, z = 250;
    u.stacked = !1, e.stacked(t), f.orient("left").tickPadding(5).showMaxMin(!1).tickFormat(function(a) {
      return a
    }), g.orient("bottom").tickFormat(d3.format(",.1f")), j.duration(0).valueFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    }).headerFormatter(function(a, b) {
      return f.tickFormat()(a, b)
    }), i.updateState(!1);
    var A = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          }), stacked: t
        }
      }
    }, B = function(a) {
      return function(b) {
        void 0 !== b.stacked && (t = b.stacked), void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    }, C = a.utils.renderWatch(x, z);
    return e.dispatch.on("elementMouseover.tooltip", function(a) {
      a.value = b.x()(a.data), a.series = {key: a.data.key, value: b.y()(a.data), color: a.color}, j.data(a).hidden(!1)
    }), e.dispatch.on("elementMouseout.tooltip", function(a) {
      j.hidden(!0)
    }), e.dispatch.on("elementMousemove.tooltip", function(a) {
      j()
    }), b.dispatch = x, b.multibar = e, b.legend = h, b.controls = i, b.xAxis = f, b.yAxis = g, b.state = u, b.tooltip = j, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, height: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, showLegend: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, showControls: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, controlLabels: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, showXAxis: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, showYAxis: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, defaultState: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, noData: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, margin: {
        get: function() {
          return k
        }, set: function(a) {
          k.top = void 0 !== a.top ? a.top : k.top, k.right = void 0 !== a.right ? a.right : k.right, k.bottom = void 0 !== a.bottom ? a.bottom : k.bottom, k.left = void 0 !== a.left ? a.left : k.left
        }
      }, duration: {
        get: function() {
          return z
        }, set: function(a) {
          z = a, C.reset(z), e.duration(z), f.duration(z), g.duration(z)
        }
      }, color: {
        get: function() {
          return n
        }, set: function(b) {
          n = a.utils.getColor(b), h.color(n)
        }
      }, barColor: {
        get: function() {
          return e.barColor
        }, set: function(a) {
          e.barColor(a), h.color(function(a, b) {
            return d3.rgb("#ccc").darker(1.5 * b).toString()
          })
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.multiChart = function() {
    "use strict";
    function b(j) {
      return j.each(function(j) {
        function n(a) {
          var b = 2 === j[a.seriesIndex].yAxis ? E : D;
          a.value = a.point.x, a.series = {value: a.point.y, color: a.point.color, key: a.series.key}, G.duration(0).valueFormatter(function(a, c) {
            return b.tickFormat()(a, c)
          }).data(a).hidden(!1)
        }

        function H(a) {
          var b = 2 === j[a.seriesIndex].yAxis ? E : D;
          a.value = a.point.x, a.series = {value: a.point.y, color: a.point.color, key: a.series.key}, G.duration(100).valueFormatter(function(a, c) {
            return b.tickFormat()(a, c)
          }).data(a).hidden(!1)
        }

        function J(a) {
          var b = 2 === j[a.seriesIndex].yAxis ? E : D;
          a.point.x = A.x()(a.point), a.point.y = A.y()(a.point), G.duration(0).valueFormatter(function(a, c) {
            return b.tickFormat()(a, c)
          }).data(a).hidden(!1)
        }

        function K(a) {
          var b = 2 === j[a.data.series].yAxis ? E : D;
          a.value = y.x()(a.data), a.series = {value: y.y()(a.data), color: a.color, key: a.data.key}, G.duration(0).valueFormatter(function(a, c) {
            return b.tickFormat()(a, c)
          }).data(a).hidden(!1)
        }

        function L() {
          for (var a = 0, b = I.length; b > a; a++) {
            var c = I[a];
            try {
              c.clearHighlights()
            } catch (d) {
            }
          }
        }

        function M(a, b, c) {
          for (var d = 0, e = I.length; e > d; d++) {
            var f = I[d];
            try {
              f.highlightPoint(a, b, c)
            } catch (g) {
            }
          }
        }

        var N = d3.select(this);
        a.utils.initSVG(N), b.update = function() {
          N.transition().call(b)
        }, b.container = this;
        var O = a.utils.availableWidth(g, N, e), P = a.utils.availableHeight(h, N, e), Q = j.filter(function(a) {
          return "line" == a.type && 1 == a.yAxis
        }), R = j.filter(function(a) {
          return "line" == a.type && 2 == a.yAxis
        }), S = j.filter(function(a) {
          return "scatter" == a.type && 1 == a.yAxis
        }), T = j.filter(function(a) {
          return "scatter" == a.type && 2 == a.yAxis
        }), U = j.filter(function(a) {
          return "bar" == a.type && 1 == a.yAxis
        }), V = j.filter(function(a) {
          return "bar" == a.type && 2 == a.yAxis
        }), W = j.filter(function(a) {
          return "area" == a.type && 1 == a.yAxis
        }), X = j.filter(function(a) {
          return "area" == a.type && 2 == a.yAxis
        });
        if (!(j && j.length && j.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, N), b;
        N.selectAll(".nv-noData").remove();
        var Y = j.filter(function(a) {
          return !a.disabled && 1 == a.yAxis
        }).map(function(a) {
          return a.values.map(function(a, b) {
            return {x: k(a), y: l(a)}
          })
        }), Z = j.filter(function(a) {
          return !a.disabled && 2 == a.yAxis
        }).map(function(a) {
          return a.values.map(function(a, b) {
            return {x: k(a), y: l(a)}
          })
        });
        r.domain(d3.extent(d3.merge(Y.concat(Z)), function(a) {
          return k(a)
        })).range([0, O]);
        var $ = N.selectAll("g.wrap.multiChart").data([j]), _ = $.enter().append("g").attr("class", "wrap nvd3 multiChart").append("g");
        _.append("g").attr("class", "nv-x nv-axis"), _.append("g").attr("class", "nv-y1 nv-axis"), _.append("g").attr("class", "nv-y2 nv-axis"), _.append("g").attr("class", "stack1Wrap"), _.append("g").attr("class", "stack2Wrap"), _.append("g").attr("class", "bars1Wrap"), _.append("g").attr("class", "bars2Wrap"), _.append("g").attr("class", "scatters1Wrap"), _.append("g").attr("class", "scatters2Wrap"), _.append("g").attr("class", "lines1Wrap"), _.append("g").attr("class", "lines2Wrap"), _.append("g").attr("class", "legendWrap"), _.append("g").attr("class", "nv-interactive");
        var aa = $.select("g"), ba = j.map(function(a, b) {
          return j[b].color || f(a, b)
        });
        if (i) {
          var ca = F.align() ? O / 2 : O, da = F.align() ? ca : 0;
          F.width(ca), F.color(ba), aa.select(".legendWrap").datum(j.map(function(a) {
            return a.originalKey = void 0 === a.originalKey ? a.key : a.originalKey, a.key = a.originalKey + (1 == a.yAxis ? "" : q), a
          })).call(F), e.top != F.height() && (e.top = F.height(), P = a.utils.availableHeight(h, N, e)), aa.select(".legendWrap").attr("transform", "translate(" + da + "," + -e.top + ")")
        }
        u.width(O).height(P).interpolate(m).color(ba.filter(function(a, b) {
          return !j[b].disabled && 1 == j[b].yAxis && "line" == j[b].type
        })), v.width(O).height(P).interpolate(m).color(ba.filter(function(a, b) {
          return !j[b].disabled && 2 == j[b].yAxis && "line" == j[b].type
        })), w.width(O).height(P).color(ba.filter(function(a, b) {
          return !j[b].disabled && 1 == j[b].yAxis && "scatter" == j[b].type
        })), x.width(O).height(P).color(ba.filter(function(a, b) {
          return !j[b].disabled && 2 == j[b].yAxis && "scatter" == j[b].type
        })), y.width(O).height(P).color(ba.filter(function(a, b) {
          return !j[b].disabled && 1 == j[b].yAxis && "bar" == j[b].type
        })), z.width(O).height(P).color(ba.filter(function(a, b) {
          return !j[b].disabled && 2 == j[b].yAxis && "bar" == j[b].type
        })), A.width(O).height(P).color(ba.filter(function(a, b) {
          return !j[b].disabled && 1 == j[b].yAxis && "area" == j[b].type
        })), B.width(O).height(P).color(ba.filter(function(a, b) {
          return !j[b].disabled && 2 == j[b].yAxis && "area" == j[b].type
        })), aa.attr("transform", "translate(" + e.left + "," + e.top + ")");
        var ea = aa.select(".lines1Wrap").datum(Q.filter(function(a) {
          return !a.disabled
        })), fa = aa.select(".scatters1Wrap").datum(S.filter(function(a) {
          return !a.disabled
        })), ga = aa.select(".bars1Wrap").datum(U.filter(function(a) {
          return !a.disabled
        })), ha = aa.select(".stack1Wrap").datum(W.filter(function(a) {
          return !a.disabled
        })), ia = aa.select(".lines2Wrap").datum(R.filter(function(a) {
          return !a.disabled
        })), ja = aa.select(".scatters2Wrap").datum(T.filter(function(a) {
          return !a.disabled
        })), ka = aa.select(".bars2Wrap").datum(V.filter(function(a) {
          return !a.disabled
        })), la = aa.select(".stack2Wrap").datum(X.filter(function(a) {
          return !a.disabled
        })), ma = W.length ? W.map(function(a) {
          return a.values
        }).reduce(function(a, b) {
          return a.map(function(a, c) {
            return {x: a.x, y: a.y + b[c].y}
          })
        }).concat([{x: 0, y: 0}]) : [], na = X.length ? X.map(function(a) {
          return a.values
        }).reduce(function(a, b) {
          return a.map(function(a, c) {
            return {x: a.x, y: a.y + b[c].y}
          })
        }).concat([{x: 0, y: 0}]) : [];
        s.domain(c || d3.extent(d3.merge(Y).concat(ma), function(a) {
            return a.y
          })).range([0, P]), t.domain(d || d3.extent(d3.merge(Z).concat(na), function(a) {
            return a.y
          })).range([0, P]), u.yDomain(s.domain()), w.yDomain(s.domain()), y.yDomain(s.domain()), A.yDomain(s.domain()), v.yDomain(t.domain()), x.yDomain(t.domain()), z.yDomain(t.domain()), B.yDomain(t.domain()), W.length && d3.transition(ha).call(A), X.length && d3.transition(la).call(B), U.length && d3.transition(ga).call(y), V.length && d3.transition(ka).call(z), Q.length && d3.transition(ea).call(u), R.length && d3.transition(ia).call(v), S.length && d3.transition(fa).call(w), T.length && d3.transition(ja).call(x), C._ticks(a.utils.calcTicksX(O / 100, j)).tickSize(-P, 0), aa.select(".nv-x.nv-axis").attr("transform", "translate(0," + P + ")"), d3.transition(aa.select(".nv-x.nv-axis")).call(C), D._ticks(a.utils.calcTicksY(P / 36, j)).tickSize(-O, 0), d3.transition(aa.select(".nv-y1.nv-axis")).call(D), E._ticks(a.utils.calcTicksY(P / 36, j)).tickSize(-O, 0), d3.transition(aa.select(".nv-y2.nv-axis")).call(E), aa.select(".nv-y1.nv-axis").classed("nv-disabled", Y.length ? !1 : !0).attr("transform", "translate(" + r.range()[0] + ",0)"), aa.select(".nv-y2.nv-axis").classed("nv-disabled", Z.length ? !1 : !0).attr("transform", "translate(" + r.range()[1] + ",0)"), F.dispatch.on("stateChange", function(a) {
          b.update()
        }), p && (o.width(O).height(P).margin({left: e.left, top: e.top}).svgContainer(N).xScale(r), $.select(".nv-interactive").call(o)), p ? (o.dispatch.on("elementMousemove", function(c) {
          L();
          var d, e, g, h = [];
          j.filter(function(a, b) {
            return a.seriesIndex = b, !a.disabled
          }).forEach(function(i, j) {
            var k = r.domain(), l = i.values.filter(function(a, c) {
              return b.x()(a, c) >= k[0] && b.x()(a, c) <= k[1]
            });
            e = a.interactiveBisect(l, c.pointXValue, b.x());
            var m = l[e], n = b.y()(m, e);
            null !== n && M(j, e, !0), void 0 !== m && (void 0 === d && (d = m), void 0 === g && (g = r(b.x()(m, e))), h.push({key: i.key, value: n, color: f(i, i.seriesIndex), data: m, yAxis: 2 == i.yAxis ? E : D}))
          }), o.tooltip.chartContainer(b.container.parentNode).valueFormatter(function(a, b) {
            var c = h[b].yAxis;
            return null === a ? "N/A" : c.tickFormat()(a)
          }).data({value: b.x()(d, e), index: e, series: h})(), o.renderGuideLine(g)
        }), o.dispatch.on("elementMouseout", function(a) {
          L()
        })) : (u.dispatch.on("elementMouseover.tooltip", n), v.dispatch.on("elementMouseover.tooltip", n), u.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), v.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), w.dispatch.on("elementMouseover.tooltip", H), x.dispatch.on("elementMouseover.tooltip", H), w.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), x.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), A.dispatch.on("elementMouseover.tooltip", J), B.dispatch.on("elementMouseover.tooltip", J), A.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), B.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), y.dispatch.on("elementMouseover.tooltip", K), z.dispatch.on("elementMouseover.tooltip", K), y.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), z.dispatch.on("elementMouseout.tooltip", function(a) {
          G.hidden(!0)
        }), y.dispatch.on("elementMousemove.tooltip", function(a) {
          G()
        }), z.dispatch.on("elementMousemove.tooltip", function(a) {
          G()
        }))
      }), b
    }

    var c, d, e = {top: 30, right: 20, bottom: 50, left: 60}, f = a.utils.defaultColor(), g = null, h = null, i = !0, j = null, k = function(a) {
      return a.x
    }, l = function(a) {
      return a.y
    }, m = "monotone", n = !0, o = a.interactiveGuideline(), p = !1, q = " (right axis)", r = d3.scale.linear(), s = d3.scale.linear(), t = d3.scale.linear(), u = a.models.line().yScale(s), v = a.models.line().yScale(t), w = a.models.scatter().yScale(s), x = a.models.scatter().yScale(t), y = a.models.multiBar().stacked(!1).yScale(s), z = a.models.multiBar().stacked(!1).yScale(t), A = a.models.stackedArea().yScale(s), B = a.models.stackedArea().yScale(t), C = a.models.axis().scale(r).orient("bottom").tickPadding(5), D = a.models.axis().scale(s).orient("left"), E = a.models.axis().scale(t).orient("right"), F = a.models.legend().height(30), G = a.models.tooltip(), H = d3.dispatch(), I = [u, v, w, x, y, z, A, B];
    return b.dispatch = H, b.legend = F, b.lines1 = u, b.lines2 = v, b.scatters1 = w, b.scatters2 = x, b.bars1 = y, b.bars2 = z, b.stack1 = A, b.stack2 = B, b.xAxis = C, b.yAxis1 = D, b.yAxis2 = E, b.tooltip = G, b.interactiveLayer = o, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, height: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, showLegend: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, yDomain1: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, yDomain2: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, noData: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, interpolate: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, legendRightAxisHint: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, margin: {
        get: function() {
          return e
        }, set: function(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left
        }
      }, color: {
        get: function() {
          return f
        }, set: function(b) {
          f = a.utils.getColor(b)
        }
      }, x: {
        get: function() {
          return k
        }, set: function(a) {
          k = a, u.x(a), v.x(a), w.x(a), x.x(a), y.x(a), z.x(a), A.x(a), B.x(a)
        }
      }, y: {
        get: function() {
          return l
        }, set: function(a) {
          l = a, u.y(a), v.y(a), w.y(a), x.y(a), A.y(a), B.y(a), y.y(a), z.y(a)
        }
      }, useVoronoi: {
        get: function() {
          return n
        }, set: function(a) {
          n = a, u.useVoronoi(a), v.useVoronoi(a), A.useVoronoi(a), B.useVoronoi(a)
        }
      }, useInteractiveGuideline: {
        get: function() {
          return p
        }, set: function(a) {
          p = a, p && (u.interactive(!1), u.useVoronoi(!1), v.interactive(!1), v.useVoronoi(!1), A.interactive(!1), A.useVoronoi(!1), B.interactive(!1), B.useVoronoi(!1), w.interactive(!1), x.interactive(!1))
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.ohlcBar = function() {
    "use strict";
    function b(y) {
      return y.each(function(b) {
        k = d3.select(this);
        var y = a.utils.availableWidth(h, k, g), A = a.utils.availableHeight(i, k, g);
        a.utils.initSVG(k);
        var B = y / b[0].values.length * .9;
        l.domain(c || d3.extent(b[0].values.map(n).concat(t))), v ? l.range(e || [.5 * y / b[0].values.length, y * (b[0].values.length - .5) / b[0].values.length]) : l.range(e || [5 + B / 2, y - B / 2 - 5]), m.domain(d || [d3.min(b[0].values.map(s).concat(u)), d3.max(b[0].values.map(r).concat(u))]).range(f || [A, 0]), l.domain()[0] === l.domain()[1] && (l.domain()[0] ? l.domain([l.domain()[0] - .01 * l.domain()[0], l.domain()[1] + .01 * l.domain()[1]]) : l.domain([-1, 1])), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] + .01 * m.domain()[0], m.domain()[1] - .01 * m.domain()[1]]) : m.domain([-1, 1]));
        var C = d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([b[0].values]), D = C.enter().append("g").attr("class", "nvd3 nv-wrap nv-ohlcBar"), E = D.append("defs"), F = D.append("g"), G = C.select("g");
        F.append("g").attr("class", "nv-ticks"), C.attr("transform", "translate(" + g.left + "," + g.top + ")"), k.on("click", function(a, b) {
          z.chartClick({data: a, index: b, pos: d3.event, id: j})
        }), E.append("clipPath").attr("id", "nv-chart-clip-path-" + j).append("rect"), C.select("#nv-chart-clip-path-" + j + " rect").attr("width", y).attr("height", A), G.attr("clip-path", w ? "url(#nv-chart-clip-path-" + j + ")" : "");
        var H = C.select(".nv-ticks").selectAll(".nv-tick").data(function(a) {
          return a
        });
        H.exit().remove(), H.enter().append("path").attr("class", function(a, b, c) {
          return (p(a, b) > q(a, b) ? "nv-tick negative" : "nv-tick positive") + " nv-tick-" + c + "-" + b
        }).attr("d", function(a, b) {
          return "m0,0l0," + (m(p(a, b)) - m(r(a, b))) + "l" + -B / 2 + ",0l" + B / 2 + ",0l0," + (m(s(a, b)) - m(p(a, b))) + "l0," + (m(q(a, b)) - m(s(a, b))) + "l" + B / 2 + ",0l" + -B / 2 + ",0z"
        }).attr("transform", function(a, b) {
          return "translate(" + l(n(a, b)) + "," + m(r(a, b)) + ")"
        }).attr("fill", function(a, b) {
          return x[0]
        }).attr("stroke", function(a, b) {
          return x[0]
        }).attr("x", 0).attr("y", function(a, b) {
          return m(Math.max(0, o(a, b)))
        }).attr("height", function(a, b) {
          return Math.abs(m(o(a, b)) - m(0))
        }), H.attr("class", function(a, b, c) {
          return (p(a, b) > q(a, b) ? "nv-tick negative" : "nv-tick positive") + " nv-tick-" + c + "-" + b
        }), d3.transition(H).attr("transform", function(a, b) {
          return "translate(" + l(n(a, b)) + "," + m(r(a, b)) + ")"
        }).attr("d", function(a, c) {
          var d = y / b[0].values.length * .9;
          return "m0,0l0," + (m(p(a, c)) - m(r(a, c))) + "l" + -d / 2 + ",0l" + d / 2 + ",0l0," + (m(s(a, c)) - m(p(a, c))) + "l0," + (m(q(a, c)) - m(s(a, c))) + "l" + d / 2 + ",0l" + -d / 2 + ",0z"
        })
      }), b
    }

    var c, d, e, f, g = {top: 0, right: 0, bottom: 0, left: 0}, h = null, i = null, j = Math.floor(1e4 * Math.random()), k = null, l = d3.scale.linear(), m = d3.scale.linear(), n = function(a) {
      return a.x
    }, o = function(a) {
      return a.y
    }, p = function(a) {
      return a.open
    }, q = function(a) {
      return a.close
    }, r = function(a) {
      return a.high
    }, s = function(a) {
      return a.low
    }, t = [], u = [], v = !1, w = !0, x = a.utils.defaultColor(), y = !1, z = d3.dispatch("stateChange", "changeState", "renderEnd", "chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove");
    return b.highlightPoint = function(a, c) {
      b.clearHighlights(), k.select(".nv-ohlcBar .nv-tick-0-" + a).classed("hover", c)
    }, b.clearHighlights = function() {
      k.select(".nv-ohlcBar .nv-tick.hover").classed("hover", !1)
    }, b.dispatch = z, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, height: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, xScale: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, yScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, xDomain: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, yDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, xRange: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, yRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, forceX: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, forceY: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, padData: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, clipEdge: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, id: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, interactive: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, x: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, y: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, open: {
        get: function() {
          return p()
        }, set: function(a) {
          p = a
        }
      }, close: {
        get: function() {
          return q()
        }, set: function(a) {
          q = a
        }
      }, high: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, low: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, margin: {
        get: function() {
          return g
        }, set: function(a) {
          g.top = void 0 != a.top ? a.top : g.top, g.right = void 0 != a.right ? a.right : g.right, g.bottom = void 0 != a.bottom ? a.bottom : g.bottom, g.left = void 0 != a.left ? a.left : g.left
        }
      }, color: {
        get: function() {
          return x
        }, set: function(b) {
          x = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.parallelCoordinates = function() {
    "use strict";
    function b(y) {
      return x.reset(), y.each(function(b) {
        function x(a) {
          return u(l.map(function(b) {
            if (isNaN(a.values[b.key]) || isNaN(parseFloat(a.values[b.key])) || M) {
              var c = j[b.key].domain(), d = j[b.key].range(), e = c[0] - (c[1] - c[0]) / 9;
              if (s.indexOf(b.key) < 0) {
                var f = d3.scale.linear().domain([e, c[1]]).range([I - 12, d[1]]);
                j[b.key].brush.y(f), s.push(b.key)
              }
              if (isNaN(a.values[b.key]) || isNaN(parseFloat(a.values[b.key])))return [i(b.key), j[b.key](e)];
            }
            return void 0 !== R && (s.length > 0 || M ? (R.style("display", "inline"), S.style("display", "inline")) : (R.style("display", "none"), S.style("display", "none"))), [i(b.key), j[b.key](a.values[b.key])]
          }))
        }

        function y(a) {
          p.forEach(function(b) {
            var c = j[b.dimension].brush.y().domain();
            b.hasOnlyNaN && (b.extent[1] = (j[b.dimension].domain()[1] - c[0]) * (b.extent[1] - b.extent[0]) / (L[b.dimension] - b.extent[0]) + c[0]), b.hasNaN && (b.extent[0] = c[0]), a && j[b.dimension].brush.extent(b.extent)
          }), e.select(".nv-brushBackground").each(function(a) {
            d3.select(this).call(j[a.key].brush)
          }).selectAll("rect").attr("x", -8).attr("width", 16)
        }

        function z() {
          n === !1 && y(!0)
        }

        function A() {
          X = m.filter(function(a) {
            return !j[a].brush.empty()
          }), Y = X.map(function(a) {
            return j[a].brush.extent()
          }), p = [], X.forEach(function(a, b) {
            p[b] = {dimension: a, extent: Y[b], hasNaN: !1, hasOnlyNaN: !1}
          }), q = [], c.style("display", function(a) {
            var b = X.every(function(b, c) {
              return (isNaN(a.values[b]) || isNaN(parseFloat(a.values[b]))) && Y[c][0] == j[b].brush.y().domain()[0] ? !0 : Y[c][0] <= a.values[b] && a.values[b] <= Y[c][1] && !isNaN(parseFloat(a.values[b]))
            });
            return b && q.push(a), b ? null : "none"
          }), w.brush({filters: p, active: q})
        }

        function B() {
          var a = X.length > 0 ? !0 : !1;
          p.forEach(function(a) {
            a.extent[0] === j[a.dimension].brush.y().domain()[0] && s.indexOf(a.dimension) >= 0 && (a.hasNaN = !0), a.extent[1] < j[a.dimension].domain()[0] && (a.hasOnlyNaN = !0)
          }), w.brushEnd(q, a)
        }

        function C(a) {
          r[a.key] = this.parentNode.__origin__ = i(a.key), d.attr("visibility", "hidden")
        }

        function D(a) {
          r[a.key] = Math.min(H, Math.max(0, this.parentNode.__origin__ += d3.event.x)), c.attr("d", x), l.sort(function(a, b) {
            return F(a.key) - F(b.key)
          }), l.forEach(function(a, b) {
            return a.currentPosition = b
          }), i.domain(l.map(function(a) {
            return a.key
          })), e.attr("transform", function(a) {
            return "translate(" + F(a.key) + ")"
          })
        }

        function E(a, b) {
          delete this.parentNode.__origin__, delete r[a.key], d3.select(this.parentNode).attr("transform", "translate(" + i(a.key) + ")"), c.attr("d", x), d.attr("d", x).attr("visibility", null), w.dimensionsOrder(l)
        }

        function F(a) {
          var b = r[a];
          return null == b ? i(a) : b
        }

        var G = d3.select(this), H = a.utils.availableWidth(g, G, f), I = a.utils.availableHeight(h, G, f);
        if (a.utils.initSVG(G), void 0 === b[0].values) {
          var J = [];
          b.forEach(function(a) {
            var b = {}, c = Object.keys(a);
            c.forEach(function(c) {
              "name" !== c && (b[c] = a[c])
            }), J.push({key: a.name, values: b})
          }), b = J
        }
        var K = b.map(function(a) {
          return a.values
        });
        0 === q.length && (q = b), m = k.sort(function(a, b) {
          return a.currentPosition - b.currentPosition
        }).map(function(a) {
          return a.key
        }), l = k.filter(function(a) {
          return !a.disabled
        }), i.rangePoints([0, H], 1).domain(l.map(function(a) {
          return a.key
        }));
        var L = {}, M = !1;
        m.forEach(function(a) {
          var b = d3.extent(K, function(b) {
            return +b[a]
          }), c = b[0], d = b[1], e = !1;
          (isNaN(c) || isNaN(d)) && (e = !0, c = 0, d = 0), c === d && (c -= 1, d += 1);
          var f = p.filter(function(b) {
            return b.dimension == a
          });
          0 !== f.length && (e ? (c = j[a].domain()[0], d = j[a].domain()[1]) : !f[0].hasOnlyNaN && n ? (c = c > f[0].extent[0] ? f[0].extent[0] : c, d = d < f[0].extent[1] ? f[0].extent[1] : d) : f[0].hasNaN && (d = d < f[0].extent[1] ? f[0].extent[1] : d, L[a] = j[a].domain()[1], M = !0)), j[a] = d3.scale.linear().domain([c, d]).range([.9 * (I - 12), 0]), s = [], j[a].brush = d3.svg.brush().y(j[a]).on("brushstart", z).on("brush", A).on("brushend", B)
        });
        var N = G.selectAll("g.nv-wrap.nv-parallelCoordinates").data([b]), O = N.enter().append("g").attr("class", "nvd3 nv-wrap nv-parallelCoordinates"), P = O.append("g"), Q = N.select("g");
        P.append("g").attr("class", "nv-parallelCoordinates background"), P.append("g").attr("class", "nv-parallelCoordinates foreground"), P.append("g").attr("class", "nv-parallelCoordinates missingValuesline"), N.attr("transform", "translate(" + f.left + "," + f.top + ")"), u.interpolate("cardinal").tension(t), v.orient("left");
        var R, S, T = d3.behavior.drag().on("dragstart", C).on("drag", D).on("dragend", E), U = i.range()[1] - i.range()[0];
        if (!isNaN(U)) {
          var V = [0 + U / 2, I - 12, H - U / 2, I - 12];
          R = N.select(".missingValuesline").selectAll("line").data([V]), R.enter().append("line"), R.exit().remove(), R.attr("x1", function(a) {
            return a[0]
          }).attr("y1", function(a) {
            return a[1]
          }).attr("x2", function(a) {
            return a[2]
          }).attr("y2", function(a) {
            return a[3]
          }), S = N.select(".missingValuesline").selectAll("text").data(["undefined values"]), S.append("text").data(["undefined values"]), S.enter().append("text"), S.exit().remove(), S.attr("y", I).attr("x", H - 92 - U / 2).text(function(a) {
            return a
          })
        }
        d = N.select(".background").selectAll("path").data(b), d.enter().append("path"), d.exit().remove(), d.attr("d", x), c = N.select(".foreground").selectAll("path").data(b), c.enter().append("path"), c.exit().remove(), c.attr("d", x).style("stroke-width", function(a, b) {
          return isNaN(a.strokeWidth) && (a.strokeWidth = 1), a.strokeWidth
        }).attr("stroke", function(a, b) {
          return a.color || o(a, b)
        }), c.on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0).style("stroke-width", a.strokeWidth + 2 + "px").style("stroke-opacity", 1), w.elementMouseover({label: a.name, color: a.color || o(a, b)})
        }), c.on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1).style("stroke-width", a.strokeWidth + "px").style("stroke-opacity", .7), w.elementMouseout({label: a.name, index: b})
        }), c.on("mousemove", function(a, b) {
          w.elementMousemove()
        }), c.on("click", function(a) {
          w.elementClick({id: a.id})
        }), e = Q.selectAll(".dimension").data(l);
        var W = e.enter().append("g").attr("class", "nv-parallelCoordinates dimension");
        e.attr("transform", function(a) {
          return "translate(" + i(a.key) + ",0)"
        }), W.append("g").attr("class", "nv-axis"), W.append("text").attr("class", "nv-label").style("cursor", "move").attr("dy", "-1em").attr("text-anchor", "middle").on("mouseover", function(a, b) {
          w.elementMouseover({label: a.tooltip || a.key})
        }).on("mouseout", function(a, b) {
          w.elementMouseout({label: a.tooltip})
        }).on("mousemove", function(a, b) {
          w.elementMousemove()
        }).call(T), W.append("g").attr("class", "nv-brushBackground"), e.exit().remove(), e.select(".nv-label").text(function(a) {
          return a.key
        }), e.select(".nv-axis").each(function(a, b) {
          d3.select(this).call(v.scale(j[a.key]).tickFormat(d3.format(a.format)))
        }), y(n);
        var X = m.filter(function(a) {
          return !j[a].brush.empty()
        }), Y = X.map(function(a) {
          return j[a].brush.extent()
        }), Z = q.slice(0);
        q = [], c.style("display", function(a) {
          var b = X.every(function(b, c) {
            return (isNaN(a.values[b]) || isNaN(parseFloat(a.values[b]))) && Y[c][0] == j[b].brush.y().domain()[0] ? !0 : Y[c][0] <= a.values[b] && a.values[b] <= Y[c][1] && !isNaN(parseFloat(a.values[b]))
          });
          return b && q.push(a), b ? null : "none"
        }), (p.length > 0 || !a.utils.arrayEquals(q, Z)) && w.activeChanged(q)
      }), b
    }

    var c, d, e, f = {top: 30, right: 0, bottom: 10, left: 0}, g = null, h = null, i = d3.scale.ordinal(), j = {}, k = [], l = [], m = [], n = !0, o = a.utils.defaultColor(), p = [], q = [], r = [], s = [], t = 1, u = d3.svg.line(), v = d3.svg.axis(), w = d3.dispatch("brushstart", "brush", "brushEnd", "dimensionsOrder", "stateChange", "elementClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd", "activeChanged"), x = a.utils.renderWatch(w);
    return b.dispatch = w, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, height: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, dimensionData: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, displayBrush: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, filters: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, active: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, lineTension: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, dimensions: {
        get: function() {
          return k.map(function(a) {
            return a.key
          })
        }, set: function(b) {
          a.deprecated("dimensions", "use dimensionData instead"), 0 === k.length ? b.forEach(function(a) {
            k.push({key: a})
          }) : b.forEach(function(a, b) {
            k[b].key = a
          })
        }
      }, dimensionNames: {
        get: function() {
          return k.map(function(a) {
            return a.key
          })
        }, set: function(b) {
          a.deprecated("dimensionNames", "use dimensionData instead"), m = [], 0 === k.length ? b.forEach(function(a) {
            k.push({key: a})
          }) : b.forEach(function(a, b) {
            k[b].key = a
          })
        }
      }, dimensionFormats: {
        get: function() {
          return k.map(function(a) {
            return a.format
          })
        }, set: function(b) {
          a.deprecated("dimensionFormats", "use dimensionData instead"), 0 === k.length ? b.forEach(function(a) {
            k.push({format: a})
          }) : b.forEach(function(a, b) {
            k[b].format = a
          })
        }
      }, margin: {
        get: function() {
          return f
        }, set: function(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left
        }
      }, color: {
        get: function() {
          return o
        }, set: function(b) {
          o = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.parallelCoordinatesChart = function() {
    "use strict";
    function b(e) {
      return r.reset(), r.models(c), e.each(function(e) {
        var j = d3.select(this);
        a.utils.initSVG(j);
        var p = a.utils.availableWidth(g, j, f), r = a.utils.availableHeight(h, j, f);
        b.update = function() {
          j.call(b)
        }, b.container = this, k.setter(t(l), b.update).getter(s(l)).update(), k.disabled = l.map(function(a) {
          return !!a.disabled
        }), l = l.map(function(a) {
          return a.disabled = !!a.disabled, a
        }), l.forEach(function(a, b) {
          a.originalPosition = isNaN(a.originalPosition) ? b : a.originalPosition, a.currentPosition = isNaN(a.currentPosition) ? b : a.currentPosition
        });
        var u = m.map(function(a) {
          return a.key
        }), v = l.map(function(a) {
          return a.key
        });
        if (l.forEach(function(a, b) {
            var c = u.indexOf(a.key);
            if (0 > c)m.splice(b, 0, a); else {
              var d = m[c].currentPosition - m[c].originalPosition;
              m[c].originalPosition = a.originalPosition, m[c].currentPosition = a.originalPosition + d
            }
          }), m = m.filter(function(a) {
            return v.indexOf(a.key) >= 0
          }), !o) {
          var w;
          o = {};
          for (w in k)k[w] instanceof Array ? o[w] = k[w].slice(0) : o[w] = k[w]
        }
        if (!e || !e.length)return a.utils.noData(b, j), b;
        j.selectAll(".nv-noData").remove();
        var x = j.selectAll("g.nv-wrap.nv-parallelCoordinatesChart").data([e]), y = x.enter().append("g").attr("class", "nvd3 nv-wrap nv-parallelCoordinatesChart").append("g"), z = x.select("g");
        y.append("g").attr("class", "nv-parallelCoordinatesWrap"), y.append("g").attr("class", "nv-legendWrap"), z.select("rect").attr("width", p).attr("height", r > 0 ? r : 0), i && (d.width(p).color(function(a) {
          return "rgb(188,190,192)"
        }), z.select(".nv-legendWrap").datum(m.sort(function(a, b) {
          return a.originalPosition - b.originalPosition
        })).call(d), f.top != d.height() && (f.top = d.height(), r = a.utils.availableHeight(h, j, f)), x.select(".nv-legendWrap").attr("transform", "translate( 0 ," + -f.top + ")")), x.attr("transform", "translate(" + f.left + "," + f.top + ")"), c.width(p).height(r).dimensionData(m).displayBrush(n);
        var A = z.select(".nv-parallelCoordinatesWrap ").datum(e);
        A.transition().call(c), c.dispatch.on("brushEnd", function(a, b) {
          b ? (n = !0, q.brushEnd(a)) : n = !1
        }), d.dispatch.on("stateChange", function(a) {
          for (var c in a)k[c] = a[c];
          q.stateChange(k), b.update()
        }), c.dispatch.on("dimensionsOrder", function(a) {
          m.sort(function(a, b) {
            return a.currentPosition - b.currentPosition
          });
          var b = !1;
          m.forEach(function(a, c) {
            a.currentPosition = c, a.currentPosition !== a.originalPosition && (b = !0)
          }), q.dimensionsOrder(m, b)
        }), q.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (m.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), k.disabled = a.disabled), b.update()
        })
      }), r.renderEnd("parraleleCoordinateChart immediate"), b
    }

    var c = a.models.parallelCoordinates(), d = a.models.legend(), e = a.models.tooltip(), f = (a.models.tooltip(), {top: 0, right: 0, bottom: 0, left: 0}), g = null, h = null, i = !0, j = a.utils.defaultColor(), k = a.utils.state(), l = [], m = [], n = !0, o = null, p = null, q = d3.dispatch("dimensionsOrder", "brushEnd", "stateChange", "changeState", "renderEnd"), r = a.utils.renderWatch(q), s = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          })
        }
      }
    }, t = function(a) {
      return function(b) {
        void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    };
    return c.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series = {key: a.label, color: a.color}, e.data(a).hidden(!1)
    }), c.dispatch.on("elementMouseout.tooltip", function(a) {
      e.hidden(!0)
    }), c.dispatch.on("elementMousemove.tooltip", function() {
      e()
    }), b.dispatch = q, b.parallelCoordinates = c, b.legend = d, b.tooltip = e, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, height: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, showLegend: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, defaultState: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, dimensionData: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, displayBrush: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, noData: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, margin: {
        get: function() {
          return f
        }, set: function(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left
        }
      }, color: {
        get: function() {
          return j
        }, set: function(b) {
          j = a.utils.getColor(b), d.color(j), c.color(j)
        }
      }
    }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b
  }, a.models.pie = function() {
    "use strict";
    function b(E) {
      return D.reset(), E.each(function(b) {
        function E(a, b) {
          a.endAngle = isNaN(a.endAngle) ? 0 : a.endAngle, a.startAngle = isNaN(a.startAngle) ? 0 : a.startAngle, p || (a.innerRadius = 0);
          var c = d3.interpolate(this._current, a);
          return this._current = c(0), function(a) {
            return B[b](c(a))
          }
        }

        var F = d - c.left - c.right, G = e - c.top - c.bottom, H = Math.min(F, G) / 2, I = [], J = [];
        if (i = d3.select(this), 0 === z.length)for (var K = H - H / 5, L = y * H, M = 0; M < b[0].length; M++)I.push(K), J.push(L); else I = z.map(function(a) {
          return (a.outer - a.outer / 5) * H
        }), J = z.map(function(a) {
          return (a.inner - a.inner / 5) * H
        }), y = d3.min(z.map(function(a) {
          return a.inner - a.inner / 5
        }));
        a.utils.initSVG(i);
        var N = i.selectAll(".nv-wrap.nv-pie").data(b), O = N.enter().append("g").attr("class", "nvd3 nv-wrap nv-pie nv-chart-" + h), P = O.append("g"), Q = N.select("g"), R = P.append("g").attr("class", "nv-pie");
        P.append("g").attr("class", "nv-pieLabels"), N.attr("transform", "translate(" + c.left + "," + c.top + ")"), Q.select(".nv-pie").attr("transform", "translate(" + F / 2 + "," + G / 2 + ")"), Q.select(".nv-pieLabels").attr("transform", "translate(" + F / 2 + "," + G / 2 + ")"), i.on("click", function(a, b) {
          A.chartClick({data: a, index: b, pos: d3.event, id: h})
        }), B = [], C = [];
        for (var M = 0; M < b[0].length; M++) {
          var S = d3.svg.arc().outerRadius(I[M]), T = d3.svg.arc().outerRadius(I[M] + 5);
          u !== !1 && (S.startAngle(u), T.startAngle(u)), w !== !1 && (S.endAngle(w), T.endAngle(w)), p && (S.innerRadius(J[M]), T.innerRadius(J[M])), S.cornerRadius && x && (S.cornerRadius(x), T.cornerRadius(x)), B.push(S), C.push(T)
        }
        var U = d3.layout.pie().sort(null).value(function(a) {
          return a.disabled ? 0 : g(a)
        });
        U.padAngle && v && U.padAngle(v), p && q && (R.append("text").attr("class", "nv-pie-title"), N.select(".nv-pie-title").style("text-anchor", "middle").text(function(a) {
          return q
        }).style("font-size", Math.min(F, G) * y * 2 / (q.length + 2) + "px").attr("dy", "0.35em").attr("transform", function(a, b) {
          return "translate(0, " + s + ")"
        }));
        var V = N.select(".nv-pie").selectAll(".nv-slice").data(U), W = N.select(".nv-pieLabels").selectAll(".nv-label").data(U);
        V.exit().remove(), W.exit().remove();
        var X = V.enter().append("g");
        X.attr("class", "nv-slice"), X.on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0), r && d3.select(this).select("path").transition().duration(70).attr("d", C[b]), A.elementMouseover({data: a.data, index: b, color: d3.select(this).style("fill")})
        }), X.on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1), r && d3.select(this).select("path").transition().duration(50).attr("d", B[b]), A.elementMouseout({data: a.data, index: b})
        }), X.on("mousemove", function(a, b) {
          A.elementMousemove({data: a.data, index: b})
        }), X.on("click", function(a, b) {
          var c = this;
          A.elementClick({data: a.data, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c})
        }), X.on("dblclick", function(a, b) {
          A.elementDblClick({data: a.data, index: b, color: d3.select(this).style("fill")})
        }), V.attr("fill", function(a, b) {
          return j(a.data, b)
        }), V.attr("stroke", function(a, b) {
          return j(a.data, b)
        });
        X.append("path").each(function(a) {
          this._current = a
        });
        if (V.select("path").transition().attr("d", function(a, b) {
            return B[b](a)
          }).attrTween("d", E), l) {
          for (var Y = [], M = 0; M < b[0].length; M++)Y.push(B[M]), m ? p && (Y[M] = d3.svg.arc().outerRadius(B[M].outerRadius()), u !== !1 && Y[M].startAngle(u), w !== !1 && Y[M].endAngle(w)) : p || Y[M].innerRadius(0);
          W.enter().append("g").classed("nv-label", !0).each(function(a, b) {
            var c = d3.select(this);
            c.attr("transform", function(a, b) {
              if (t) {
                a.outerRadius = I[b] + 10, a.innerRadius = I[b] + 15;
                var c = (a.startAngle + a.endAngle) / 2 * (180 / Math.PI);
                return (a.startAngle + a.endAngle) / 2 < Math.PI ? c -= 90 : c += 90, "translate(" + Y[b].centroid(a) + ") rotate(" + c + ")"
              }
              return a.outerRadius = H + 10, a.innerRadius = H + 15, "translate(" + Y[b].centroid(a) + ")"
            }), c.append("rect").style("stroke", "#fff").style("fill", "#fff").attr("rx", 3).attr("ry", 3), c.append("text").style("text-anchor", t ? (a.startAngle + a.endAngle) / 2 < Math.PI ? "start" : "end" : "middle").style("fill", "#000")
          });
          var Z = {}, $ = 14, _ = 140, aa = function(a) {
            return Math.floor(a[0] / _) * _ + "," + Math.floor(a[1] / $) * $
          }, ba = function(a) {
            return (a.endAngle - a.startAngle) / (2 * Math.PI)
          };
          W.watchTransition(D, "pie labels").attr("transform", function(a, b) {
            if (t) {
              a.outerRadius = I[b] + 10, a.innerRadius = I[b] + 15;
              var c = (a.startAngle + a.endAngle) / 2 * (180 / Math.PI);
              return (a.startAngle + a.endAngle) / 2 < Math.PI ? c -= 90 : c += 90, "translate(" + Y[b].centroid(a) + ") rotate(" + c + ")"
            }
            a.outerRadius = H + 10, a.innerRadius = H + 15;
            var d = Y[b].centroid(a), e = ba(a);
            if (a.value && e >= o) {
              var f = aa(d);
              Z[f] && (d[1] -= $), Z[aa(d)] = !0
            }
            return "translate(" + d + ")"
          }), W.select(".nv-label text").style("text-anchor", function(a, b) {
            return t ? (a.startAngle + a.endAngle) / 2 < Math.PI ? "start" : "end" : "middle"
          }).text(function(a, b) {
            var c = ba(a), d = "";
            if (!a.value || o > c)return "";
            if ("function" == typeof n)d = n(a, b, {key: f(a.data), value: g(a.data), percent: k(c)}); else switch (n) {
              case"key":
                d = f(a.data);
                break;
              case"value":
                d = k(g(a.data));
                break;
              case"percent":
                d = d3.format("%")(c)
            }
            return d
          })
        }
      }), D.renderEnd("pie immediate"), b
    }

    var c = {top: 0, right: 0, bottom: 0, left: 0}, d = 500, e = 500, f = function(a) {
      return a.x
    }, g = function(a) {
      return a.y
    }, h = Math.floor(1e4 * Math.random()), i = null, j = a.utils.defaultColor(), k = d3.format(",.2f"), l = !0, m = !1, n = "key", o = .02, p = !1, q = !1, r = !0, s = 0, t = !1, u = !1, v = !1, w = !1, x = 0, y = .5, z = [], A = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"), B = [], C = [], D = a.utils.renderWatch(A);
    return b.dispatch = A, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      arcsRadius: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, width: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, height: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, showLabels: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, title: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, titleOffset: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, labelThreshold: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, valueFormat: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, x: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, id: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, endAngle: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, startAngle: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, padAngle: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, cornerRadius: {
        get: function() {
          return x
        }, set: function(a) {
          x = a
        }
      }, donutRatio: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, labelsOutside: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, labelSunbeamLayout: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, donut: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, growOnHover: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, pieLabelsOutside: {
        get: function() {
          return m
        }, set: function(b) {
          m = b, a.deprecated("pieLabelsOutside", "use labelsOutside instead")
        }
      }, donutLabelsOutside: {
        get: function() {
          return m
        }, set: function(b) {
          m = b, a.deprecated("donutLabelsOutside", "use labelsOutside instead")
        }
      }, labelFormat: {
        get: function() {
          return k
        }, set: function(b) {
          k = b, a.deprecated("labelFormat", "use valueFormat instead")
        }
      }, margin: {
        get: function() {
          return c
        }, set: function(a) {
          c.top = "undefined" != typeof a.top ? a.top : c.top, c.right = "undefined" != typeof a.right ? a.right : c.right, c.bottom = "undefined" != typeof a.bottom ? a.bottom : c.bottom, c.left = "undefined" != typeof a.left ? a.left : c.left
        }
      }, y: {
        get: function() {
          return g
        }, set: function(a) {
          g = d3.functor(a)
        }
      }, color: {
        get: function() {
          return j
        }, set: function(b) {
          j = a.utils.getColor(b)
        }
      }, labelType: {
        get: function() {
          return n
        }, set: function(a) {
          n = a || "key"
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.pieChart = function() {
    "use strict";
    function b(e) {
      return q.reset(), q.models(c), e.each(function(e) {
        var k = d3.select(this);
        a.utils.initSVG(k);
        var n = a.utils.availableWidth(g, k, f), o = a.utils.availableHeight(h, k, f);
        if (b.update = function() {
            k.transition().call(b)
          }, b.container = this, l.setter(s(e), b.update).getter(r(e)).update(), l.disabled = e.map(function(a) {
            return !!a.disabled
          }), !m) {
          var q;
          m = {};
          for (q in l)l[q] instanceof Array ? m[q] = l[q].slice(0) : m[q] = l[q]
        }
        if (!e || !e.length)return a.utils.noData(b, k), b;
        k.selectAll(".nv-noData").remove();
        var t = k.selectAll("g.nv-wrap.nv-pieChart").data([e]), u = t.enter().append("g").attr("class", "nvd3 nv-wrap nv-pieChart").append("g"), v = t.select("g");
        if (u.append("g").attr("class", "nv-pieWrap"), u.append("g").attr("class", "nv-legendWrap"), i)if ("top" === j)d.width(n).key(c.x()), t.select(".nv-legendWrap").datum(e).call(d), f.top != d.height() && (f.top = d.height(), o = a.utils.availableHeight(h, k, f)), t.select(".nv-legendWrap").attr("transform", "translate(0," + -f.top + ")"); else if ("right" === j) {
          var w = a.models.legend().width();
          w > n / 2 && (w = n / 2), d.height(o).key(c.x()), d.width(w), n -= d.width(), t.select(".nv-legendWrap").datum(e).call(d).attr("transform", "translate(" + n + ",0)")
        }
        t.attr("transform", "translate(" + f.left + "," + f.top + ")"), c.width(n).height(o);
        var x = v.select(".nv-pieWrap").datum([e]);
        d3.transition(x).call(c), d.dispatch.on("stateChange", function(a) {
          for (var c in a)l[c] = a[c];
          p.stateChange(l), b.update()
        }), p.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (e.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), l.disabled = a.disabled), b.update()
        })
      }), q.renderEnd("pieChart immediate"), b
    }

    var c = a.models.pie(), d = a.models.legend(), e = a.models.tooltip(), f = {top: 30, right: 20, bottom: 20, left: 20}, g = null, h = null, i = !0, j = "top", k = a.utils.defaultColor(), l = a.utils.state(), m = null, n = null, o = 250, p = d3.dispatch("stateChange", "changeState", "renderEnd");
    e.duration(0).headerEnabled(!1).valueFormatter(function(a, b) {
      return c.valueFormat()(a, b)
    });
    var q = a.utils.renderWatch(p), r = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          })
        }
      }
    }, s = function(a) {
      return function(b) {
        void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    };
    return c.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series = {key: b.x()(a.data), value: b.y()(a.data), color: a.color}, e.data(a).hidden(!1)
    }), c.dispatch.on("elementMouseout.tooltip", function(a) {
      e.hidden(!0)
    }), c.dispatch.on("elementMousemove.tooltip", function(a) {
      e()
    }), b.legend = d, b.dispatch = p, b.pie = c, b.tooltip = e, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      noData: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, showLegend: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, legendPosition: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, defaultState: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, color: {
        get: function() {
          return k
        }, set: function(a) {
          k = a, d.color(k), c.color(k)
        }
      }, duration: {
        get: function() {
          return o
        }, set: function(a) {
          o = a, q.reset(o)
        }
      }, margin: {
        get: function() {
          return f
        }, set: function(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left
        }
      }
    }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b
  }, a.models.scatter = function() {
    "use strict";
    function b(N) {
      return Q.reset(), N.each(function(N) {
        function S() {
          if (P = !1, !w)return !1;
          if (M === !0) {
            var a = d3.merge(N.map(function(a, b) {
              return a.values.map(function(a, c) {
                var d = p(a, c), e = q(a, c);
                return [m(d) + 1e-4 * Math.random(), n(e) + 1e-4 * Math.random(), b, c, a]
              }).filter(function(a, b) {
                return x(a[4], b)
              })
            }));
            if (0 == a.length)return !1;
            a.length < 3 && (a.push([m.range()[0] - 20, n.range()[0] - 20, null, null]), a.push([m.range()[1] + 20, n.range()[1] + 20, null, null]), a.push([m.range()[0] - 20, n.range()[0] + 20, null, null]), a.push([m.range()[1] + 20, n.range()[1] - 20, null, null]));
            var b = d3.geom.polygon([[-10, -10], [-10, i + 10], [h + 10, i + 10], [h + 10, -10]]), c = d3.geom.voronoi(a).map(function(c, d) {
              return {data: b.clip(c), series: a[d][2], point: a[d][3]}
            });
            X.select(".nv-point-paths").selectAll("path").remove();
            var d = X.select(".nv-point-paths").selectAll("path").data(c), e = d.enter().append("svg:path").attr("d", function(a) {
              return a && a.data && 0 !== a.data.length ? "M" + a.data.join(",") + "Z" : "M 0 0"
            }).attr("id", function(a, b) {
              return "nv-path-" + b
            }).attr("clip-path", function(a, b) {
              return "url(#nv-clip-" + k + "-" + b + ")"
            });
            if (C && e.style("fill", d3.rgb(230, 230, 230)).style("fill-opacity", .4).style("stroke-opacity", 1).style("stroke", d3.rgb(200, 200, 200)), B) {
              X.select(".nv-point-clips").selectAll("*").remove();
              var f = X.select(".nv-point-clips").selectAll("clipPath").data(a);
              f.enter().append("svg:clipPath").attr("id", function(a, b) {
                return "nv-clip-" + k + "-" + b
              }).append("svg:circle").attr("cx", function(a) {
                return a[0]
              }).attr("cy", function(a) {
                return a[1]
              }).attr("r", D)
            }
            var o = function(a, b) {
              if (P)return 0;
              var c = N[a.series];
              if (void 0 !== c) {
                var d = c.values[a.point];
                d.color = j(c, a.series), d.x = p(d), d.y = q(d);
                var e = l.node().getBoundingClientRect(), f = window.pageYOffset || document.documentElement.scrollTop, h = window.pageXOffset || document.documentElement.scrollLeft, i = {left: m(p(d, a.point)) + e.left + h + g.left + 10, top: n(q(d, a.point)) + e.top + f + g.top + 10};
                b({point: d, series: c, pos: i, relativePos: [m(p(d, a.point)) + g.left, n(q(d, a.point)) + g.top], seriesIndex: a.series, pointIndex: a.point})
              }
            };
            d.on("click", function(a) {
              o(a, L.elementClick)
            }).on("dblclick", function(a) {
              o(a, L.elementDblClick)
            }).on("mouseover", function(a) {
              o(a, L.elementMouseover)
            }).on("mouseout", function(a, b) {
              o(a, L.elementMouseout)
            })
          } else X.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click", function(a, b) {
            if (P || !N[a.series])return 0;
            var c = N[a.series], d = c.values[b];
            L.elementClick({point: d, series: c, pos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], relativePos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], seriesIndex: a.series, pointIndex: b})
          }).on("dblclick", function(a, b) {
            if (P || !N[a.series])return 0;
            var c = N[a.series], d = c.values[b];
            L.elementDblClick({point: d, series: c, pos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], relativePos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], seriesIndex: a.series, pointIndex: b})
          }).on("mouseover", function(a, b) {
            if (P || !N[a.series])return 0;
            var c = N[a.series], d = c.values[b];
            L.elementMouseover({point: d, series: c, pos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], relativePos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], seriesIndex: a.series, pointIndex: b, color: j(a, b)})
          }).on("mouseout", function(a, b) {
            if (P || !N[a.series])return 0;
            var c = N[a.series], d = c.values[b];
            L.elementMouseout({point: d, series: c, pos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], relativePos: [m(p(d, b)) + g.left, n(q(d, b)) + g.top], seriesIndex: a.series, pointIndex: b, color: j(a, b)})
          })
        }

        l = d3.select(this);
        var T = a.utils.availableWidth(h, l, g), U = a.utils.availableHeight(i, l, g);
        a.utils.initSVG(l), N.forEach(function(a, b) {
          a.values.forEach(function(a) {
            a.series = b
          })
        });
        var V = E && F && I ? [] : d3.merge(N.map(function(a) {
          return a.values.map(function(a, b) {
            return {x: p(a, b), y: q(a, b), size: r(a, b)}
          })
        }));
        if (m.domain(E || d3.extent(V.map(function(a) {
              return a.x
            }).concat(t))), y && N[0] ? m.range(G || [(T * z + T) / (2 * N[0].values.length), T - T * (1 + z) / (2 * N[0].values.length)]) : m.range(G || [0, T]), "o" === b.yScale().name) {
          var W = d3.min(V.map(function(a) {
            return 0 !== a.y ? a.y : void 0
          }));
          n.clamp(!0).domain(F || d3.extent(V.map(function(a) {
              return 0 !== a.y ? a.y : .1 * W
            }).concat(u))).range(H || [U, 0])
        } else n.domain(F || d3.extent(V.map(function(a) {
            return a.y
          }).concat(u))).range(H || [U, 0]);
        o.domain(I || d3.extent(V.map(function(a) {
            return a.size
          }).concat(v))).range(J || R), K = m.domain()[0] === m.domain()[1] || n.domain()[0] === n.domain()[1], m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] - .01 * m.domain()[0], m.domain()[1] + .01 * m.domain()[1]]) : m.domain([-1, 1])), n.domain()[0] === n.domain()[1] && (n.domain()[0] ? n.domain([n.domain()[0] - .01 * n.domain()[0], n.domain()[1] + .01 * n.domain()[1]]) : n.domain([-1, 1])), isNaN(m.domain()[0]) && m.domain([-1, 1]), isNaN(n.domain()[0]) && n.domain([-1, 1]), c = c || m, d = d || n, e = e || o;
        var X = l.selectAll("g.nv-wrap.nv-scatter").data([N]), Y = X.enter().append("g").attr("class", "nvd3 nv-wrap nv-scatter nv-chart-" + k), Z = Y.append("defs"), $ = Y.append("g"), _ = X.select("g");
        X.classed("nv-single-point", K), $.append("g").attr("class", "nv-groups"), $.append("g").attr("class", "nv-point-paths"), Y.append("g").attr("class", "nv-point-clips"), X.attr("transform", "translate(" + g.left + "," + g.top + ")"), Z.append("clipPath").attr("id", "nv-edge-clip-" + k).append("rect"), X.select("#nv-edge-clip-" + k + " rect").attr("width", T).attr("height", U > 0 ? U : 0), _.attr("clip-path", A ? "url(#nv-edge-clip-" + k + ")" : ""), P = !0;
        var aa = X.select(".nv-groups").selectAll(".nv-group").data(function(a) {
          return a
        }, function(a) {
          return a.key
        });
        aa.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6), aa.exit().remove(), aa.attr("class", function(a, b) {
          return (a.classed || "") + " nv-group nv-series-" + b
        }).classed("hover", function(a) {
          return a.hover
        }), aa.watchTransition(Q, "scatter: groups").style("fill", function(a, b) {
          return j(a, b)
        }).style("stroke", function(a, b) {
          return j(a, b)
        }).style("stroke-opacity", 1).style("fill-opacity", .5);
        var ba = aa.selectAll("path.nv-point").data(function(a) {
          return a.values.map(function(a, b) {
            return [a, b]
          }).filter(function(a, b) {
            return x(a[0], b)
          })
        });
        ba.enter().append("path").style("fill", function(a) {
          return a.color
        }).style("stroke", function(a) {
          return a.color
        }).attr("transform", function(b) {
          return "translate(" + a.utils.NaNtoZero(c(p(b[0], b[1]))) + "," + a.utils.NaNtoZero(d(q(b[0], b[1]))) + ")"
        }).attr("d", a.utils.symbol().type(function(a) {
          return s(a[0])
        }).size(function(a) {
          return o(r(a[0], a[1]))
        })), ba.exit().remove(), aa.exit().selectAll("path.nv-point").watchTransition(Q, "scatter exit").attr("transform", function(b) {
          return "translate(" + a.utils.NaNtoZero(m(p(b[0], b[1]))) + "," + a.utils.NaNtoZero(n(q(b[0], b[1]))) + ")"
        }).remove(), ba.each(function(a) {
          d3.select(this).classed("nv-point", !0).classed("nv-point-" + a[1], !0).classed("nv-noninteractive", !w).classed("hover", !1)
        }), ba.watchTransition(Q, "scatter points").attr("transform", function(b) {
          return "translate(" + a.utils.NaNtoZero(m(p(b[0], b[1]))) + "," + a.utils.NaNtoZero(n(q(b[0], b[1]))) + ")"
        }).attr("d", a.utils.symbol().type(function(a) {
          return s(a[0])
        }).size(function(a) {
          return o(r(a[0], a[1]))
        })), O ? (clearTimeout(f), f = setTimeout(S, O)) : S(), c = m.copy(), d = n.copy(), e = o.copy()
      }), Q.renderEnd("scatter immediate"), b
    }

    var c, d, e, f, g = {top: 0, right: 0, bottom: 0, left: 0}, h = null, i = null, j = a.utils.defaultColor(), k = Math.floor(1e5 * Math.random()), l = null, m = d3.scale.linear(), n = d3.scale.linear(), o = d3.scale.linear(), p = function(a) {
      return a.x
    }, q = function(a) {
      return a.y
    }, r = function(a) {
      return a.size || 1
    }, s = function(a) {
      return a.shape || "circle"
    }, t = [], u = [], v = [], w = !0, x = function(a) {
      return !a.notActive
    }, y = !1, z = .1, A = !1, B = !0, C = !1, D = function() {
      return 25
    }, E = null, F = null, G = null, H = null, I = null, J = null, K = !1, L = d3.dispatch("elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "renderEnd"), M = !0, N = 250, O = 300, P = !1, Q = a.utils.renderWatch(L, N), R = [16, 256];
    return b.dispatch = L, b.options = a.utils.optionsFunc.bind(b), b._calls = new function() {
      this.clearHighlights = function() {
        return a.dom.write(function() {
          l.selectAll(".nv-point.hover").classed("hover", !1)
        }), null
      }, this.highlightPoint = function(b, c, d) {
        a.dom.write(function() {
          l.select(".nv-groups").selectAll(".nv-series-" + b).selectAll(".nv-point-" + c).classed("hover", d)
        })
      }
    }, L.on("elementMouseover.point", function(a) {
      w && b._calls.highlightPoint(a.seriesIndex, a.pointIndex, !0)
    }), L.on("elementMouseout.point", function(a) {
      w && b._calls.highlightPoint(a.seriesIndex, a.pointIndex, !1)
    }), b._options = Object.create({}, {
      width: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, height: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, xScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, yScale: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, pointScale: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, xDomain: {
        get: function() {
          return E
        }, set: function(a) {
          E = a
        }
      }, yDomain: {
        get: function() {
          return F
        }, set: function(a) {
          F = a
        }
      }, pointDomain: {
        get: function() {
          return I
        }, set: function(a) {
          I = a
        }
      }, xRange: {
        get: function() {
          return G
        }, set: function(a) {
          G = a
        }
      }, yRange: {
        get: function() {
          return H
        }, set: function(a) {
          H = a
        }
      }, pointRange: {
        get: function() {
          return J
        }, set: function(a) {
          J = a
        }
      }, forceX: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, forceY: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, forcePoint: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, interactive: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, pointActive: {
        get: function() {
          return x
        }, set: function(a) {
          x = a
        }
      }, padDataOuter: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, padData: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, clipEdge: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, clipVoronoi: {
        get: function() {
          return B
        }, set: function(a) {
          B = a
        }
      }, clipRadius: {
        get: function() {
          return D
        }, set: function(a) {
          D = a
        }
      }, showVoronoi: {
        get: function() {
          return C
        }, set: function(a) {
          C = a
        }
      }, id: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, interactiveUpdateDelay: {
        get: function() {
          return O
        }, set: function(a) {
          O = a
        }
      }, x: {
        get: function() {
          return p
        }, set: function(a) {
          p = d3.functor(a)
        }
      }, y: {
        get: function() {
          return q
        }, set: function(a) {
          q = d3.functor(a)
        }
      }, pointSize: {
        get: function() {
          return r
        }, set: function(a) {
          r = d3.functor(a)
        }
      }, pointShape: {
        get: function() {
          return s
        }, set: function(a) {
          s = d3.functor(a)
        }
      }, margin: {
        get: function() {
          return g
        }, set: function(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left
        }
      }, duration: {
        get: function() {
          return N
        }, set: function(a) {
          N = a, Q.reset(N)
        }
      }, color: {
        get: function() {
          return j
        }, set: function(b) {
          j = a.utils.getColor(b)
        }
      }, useVoronoi: {
        get: function() {
          return M
        }, set: function(a) {
          M = a, M === !1 && (B = !1)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.scatterChart = function() {
    "use strict";
    function b(z) {
      return D.reset(), D.models(c), t && D.models(d), u && D.models(e), q && D.models(g), r && D.models(h), z.each(function(z) {
        m = d3.select(this), a.utils.initSVG(m);
        var G = a.utils.availableWidth(k, m, j), H = a.utils.availableHeight(l, m, j);
        if (b.update = function() {
            0 === A ? m.call(b) : m.transition().duration(A).call(b)
          }, b.container = this, w.setter(F(z), b.update).getter(E(z)).update(), w.disabled = z.map(function(a) {
            return !!a.disabled
          }), !x) {
          var I;
          x = {};
          for (I in w)w[I] instanceof Array ? x[I] = w[I].slice(0) : x[I] = w[I]
        }
        if (!(z && z.length && z.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, m), D.renderEnd("scatter immediate"), b;
        m.selectAll(".nv-noData").remove(), o = c.xScale(), p = c.yScale();
        var J = m.selectAll("g.nv-wrap.nv-scatterChart").data([z]), K = J.enter().append("g").attr("class", "nvd3 nv-wrap nv-scatterChart nv-chart-" + c.id()), L = K.append("g"), M = J.select("g");
        if (L.append("rect").attr("class", "nvd3 nv-background").style("pointer-events", "none"), L.append("g").attr("class", "nv-x nv-axis"), L.append("g").attr("class", "nv-y nv-axis"), L.append("g").attr("class", "nv-scatterWrap"), L.append("g").attr("class", "nv-regressionLinesWrap"), L.append("g").attr("class", "nv-distWrap"), L.append("g").attr("class", "nv-legendWrap"), v && M.select(".nv-y.nv-axis").attr("transform", "translate(" + G + ",0)"), s) {
          var N = G;
          f.width(N), J.select(".nv-legendWrap").datum(z).call(f), j.top != f.height() && (j.top = f.height(), H = a.utils.availableHeight(l, m, j)), J.select(".nv-legendWrap").attr("transform", "translate(0," + -j.top + ")")
        }
        J.attr("transform", "translate(" + j.left + "," + j.top + ")"), c.width(G).height(H).color(z.map(function(a, b) {
          return a.color = a.color || n(a, b), a.color
        }).filter(function(a, b) {
          return !z[b].disabled
        })), J.select(".nv-scatterWrap").datum(z.filter(function(a) {
          return !a.disabled
        })).call(c), J.select(".nv-regressionLinesWrap").attr("clip-path", "url(#nv-edge-clip-" + c.id() + ")");
        var O = J.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(a) {
          return a
        });
        O.enter().append("g").attr("class", "nv-regLines");
        var P = O.selectAll(".nv-regLine").data(function(a) {
          return [a]
        });
        P.enter().append("line").attr("class", "nv-regLine").style("stroke-opacity", 0), P.filter(function(a) {
          return a.intercept && a.slope
        }).watchTransition(D, "scatterPlusLineChart: regline").attr("x1", o.range()[0]).attr("x2", o.range()[1]).attr("y1", function(a, b) {
          return p(o.domain()[0] * a.slope + a.intercept)
        }).attr("y2", function(a, b) {
          return p(o.domain()[1] * a.slope + a.intercept)
        }).style("stroke", function(a, b, c) {
          return n(a, c)
        }).style("stroke-opacity", function(a, b) {
          return a.disabled || "undefined" == typeof a.slope || "undefined" == typeof a.intercept ? 0 : 1
        }), t && (d.scale(o)._ticks(a.utils.calcTicksX(G / 100, z)).tickSize(-H, 0), M.select(".nv-x.nv-axis").attr("transform", "translate(0," + p.range()[0] + ")").call(d)), u && (e.scale(p)._ticks(a.utils.calcTicksY(H / 36, z)).tickSize(-G, 0), M.select(".nv-y.nv-axis").call(e)), q && (g.getData(c.x()).scale(o).width(G).color(z.map(function(a, b) {
          return a.color || n(a, b)
        }).filter(function(a, b) {
          return !z[b].disabled
        })), L.select(".nv-distWrap").append("g").attr("class", "nv-distributionX"), M.select(".nv-distributionX").attr("transform", "translate(0," + p.range()[0] + ")").datum(z.filter(function(a) {
          return !a.disabled
        })).call(g)), r && (h.getData(c.y()).scale(p).width(H).color(z.map(function(a, b) {
          return a.color || n(a, b)
        }).filter(function(a, b) {
          return !z[b].disabled
        })), L.select(".nv-distWrap").append("g").attr("class", "nv-distributionY"), M.select(".nv-distributionY").attr("transform", "translate(" + (v ? G : -h.size()) + ",0)").datum(z.filter(function(a) {
          return !a.disabled
        })).call(h)), f.dispatch.on("stateChange", function(a) {
          for (var c in a)w[c] = a[c];
          y.stateChange(w), b.update()
        }), y.on("changeState", function(a) {
          "undefined" != typeof a.disabled && (z.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), w.disabled = a.disabled), b.update()
        }), c.dispatch.on("elementMouseout.tooltip", function(a) {
          i.hidden(!0), m.select(".nv-chart-" + c.id() + " .nv-series-" + a.seriesIndex + " .nv-distx-" + a.pointIndex).attr("y1", 0), m.select(".nv-chart-" + c.id() + " .nv-series-" + a.seriesIndex + " .nv-disty-" + a.pointIndex).attr("x2", h.size())
        }), c.dispatch.on("elementMouseover.tooltip", function(a) {
          m.select(".nv-series-" + a.seriesIndex + " .nv-distx-" + a.pointIndex).attr("y1", a.relativePos[1] - H), m.select(".nv-series-" + a.seriesIndex + " .nv-disty-" + a.pointIndex).attr("x2", a.relativePos[0] + g.size()), i.data(a).hidden(!1)
        }), B = o.copy(), C = p.copy()
      }), D.renderEnd("scatter with line immediate"), b
    }

    var c = a.models.scatter(), d = a.models.axis(), e = a.models.axis(), f = a.models.legend(), g = a.models.distribution(), h = a.models.distribution(), i = a.models.tooltip(), j = {top: 30, right: 20, bottom: 50, left: 75}, k = null, l = null, m = null, n = a.utils.defaultColor(), o = c.xScale(), p = c.yScale(), q = !1, r = !1, s = !0, t = !0, u = !0, v = !1, w = a.utils.state(), x = null, y = d3.dispatch("stateChange", "changeState", "renderEnd"), z = null, A = 250;
    c.xScale(o).yScale(p), d.orient("bottom").tickPadding(10), e.orient(v ? "right" : "left").tickPadding(10), g.axis("x"), h.axis("y"), i.headerFormatter(function(a, b) {
      return d.tickFormat()(a, b)
    }).valueFormatter(function(a, b) {
      return e.tickFormat()(a, b)
    });
    var B, C, D = a.utils.renderWatch(y, A), E = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          })
        }
      }
    }, F = function(a) {
      return function(b) {
        void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    };
    return b.dispatch = y, b.scatter = c, b.legend = f, b.xAxis = d, b.yAxis = e, b.distX = g, b.distY = h, b.tooltip = i, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, height: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, container: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, showDistX: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, showDistY: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, showLegend: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, showXAxis: {
        get: function() {
          return t
        }, set: function(a) {
          t = a
        }
      }, showYAxis: {
        get: function() {
          return u
        }, set: function(a) {
          u = a
        }
      }, defaultState: {
        get: function() {
          return x
        }, set: function(a) {
          x = a
        }
      }, noData: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, duration: {
        get: function() {
          return A
        }, set: function(a) {
          A = a
        }
      }, margin: {
        get: function() {
          return j
        }, set: function(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left
        }
      }, rightAlignYAxis: {
        get: function() {
          return v
        }, set: function(a) {
          v = a, e.orient(a ? "right" : "left")
        }
      }, color: {
        get: function() {
          return n
        }, set: function(b) {
          n = a.utils.getColor(b), f.color(n), g.color(n), h.color(n)
        }
      }
    }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b
  }, a.models.sparkline = function() {
    "use strict";
    function b(k) {
      return r.reset(), k.each(function(b) {
        var k = h - g.left - g.right, q = i - g.top - g.bottom;
        j = d3.select(this), a.utils.initSVG(j), l.domain(c || d3.extent(b, n)).range(e || [0, k]), m.domain(d || d3.extent(b, o)).range(f || [q, 0]);
        var r = j.selectAll("g.nv-wrap.nv-sparkline").data([b]), s = r.enter().append("g").attr("class", "nvd3 nv-wrap nv-sparkline");
        s.append("g"), r.select("g");
        r.attr("transform", "translate(" + g.left + "," + g.top + ")");
        var t = r.selectAll("path").data(function(a) {
          return [a]
        });
        t.enter().append("path"), t.exit().remove(), t.style("stroke", function(a, b) {
          return a.color || p(a, b)
        }).attr("d", d3.svg.line().x(function(a, b) {
          return l(n(a, b))
        }).y(function(a, b) {
          return m(o(a, b))
        }));
        var u = r.selectAll("circle.nv-point").data(function(a) {
          function b(b) {
            if (-1 != b) {
              var c = a[b];
              return c.pointIndex = b, c
            }
            return null
          }

          var c = a.map(function(a, b) {
            return o(a, b)
          }), d = b(c.lastIndexOf(m.domain()[1])), e = b(c.indexOf(m.domain()[0])), f = b(c.length - 1);
          return [e, d, f].filter(function(a) {
            return null != a
          })
        });
        u.enter().append("circle"), u.exit().remove(), u.attr("cx", function(a, b) {
          return l(n(a, a.pointIndex))
        }).attr("cy", function(a, b) {
          return m(o(a, a.pointIndex))
        }).attr("r", 2).attr("class", function(a, b) {
          return n(a, a.pointIndex) == l.domain()[1] ? "nv-point nv-currentValue" : o(a, a.pointIndex) == m.domain()[0] ? "nv-point nv-minValue" : "nv-point nv-maxValue"
        })
      }), r.renderEnd("sparkline immediate"), b
    }

    var c, d, e, f, g = {top: 2, right: 0, bottom: 2, left: 0}, h = 400, i = 32, j = null, k = !0, l = d3.scale.linear(), m = d3.scale.linear(), n = function(a) {
      return a.x
    }, o = function(a) {
      return a.y
    }, p = a.utils.getColor(["#000"]), q = d3.dispatch("renderEnd"), r = a.utils.renderWatch(q);
    return b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, height: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, xDomain: {
        get: function() {
          return c
        }, set: function(a) {
          c = a
        }
      }, yDomain: {
        get: function() {
          return d
        }, set: function(a) {
          d = a
        }
      }, xRange: {
        get: function() {
          return e
        }, set: function(a) {
          e = a
        }
      }, yRange: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, xScale: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, yScale: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, animate: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, x: {
        get: function() {
          return n
        }, set: function(a) {
          n = d3.functor(a)
        }
      }, y: {
        get: function() {
          return o
        }, set: function(a) {
          o = d3.functor(a)
        }
      }, margin: {
        get: function() {
          return g
        }, set: function(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left
        }
      }, color: {
        get: function() {
          return p
        }, set: function(b) {
          p = a.utils.getColor(b)
        }
      }
    }), b.dispatch = q, a.utils.initOptions(b), b
  }, a.models.sparklinePlus = function() {
    "use strict";
    function b(p) {
      return r.reset(), r.models(e), p.each(function(p) {
        function q() {
          if (!j) {
            var a = z.selectAll(".nv-hoverValue").data(i), b = a.enter().append("g").attr("class", "nv-hoverValue").style("stroke-opacity", 0).style("fill-opacity", 0);
            a.exit().transition().duration(250).style("stroke-opacity", 0).style("fill-opacity", 0).remove(), a.attr("transform", function(a) {
              return "translate(" + c(e.x()(p[a], a)) + ",0)"
            }).transition().duration(250).style("stroke-opacity", 1).style("fill-opacity", 1), i.length && (b.append("line").attr("x1", 0).attr("y1", -f.top).attr("x2", 0).attr("y2", u), b.append("text").attr("class", "nv-xValue").attr("x", -6).attr("y", -f.top).attr("text-anchor", "end").attr("dy", ".9em"), z.select(".nv-hoverValue .nv-xValue").text(k(e.x()(p[i[0]], i[0]))), b.append("text").attr("class", "nv-yValue").attr("x", 6).attr("y", -f.top).attr("text-anchor", "start").attr("dy", ".9em"), z.select(".nv-hoverValue .nv-yValue").text(l(e.y()(p[i[0]], i[0]))))
          }
        }

        function r() {
          function a(a, b) {
            for (var c = Math.abs(e.x()(a[0], 0) - b), d = 0, f = 0; f < a.length; f++)Math.abs(e.x()(a[f], f) - b) < c && (c = Math.abs(e.x()(a[f], f) - b), d = f);
            return d
          }

          if (!j) {
            var b = d3.mouse(this)[0] - f.left;
            i = [a(p, Math.round(c.invert(b)))], q()
          }
        }

        var s = d3.select(this);
        a.utils.initSVG(s);
        var t = a.utils.availableWidth(g, s, f), u = a.utils.availableHeight(h, s, f);
        if (b.update = function() {
            s.call(b)
          }, b.container = this, !p || !p.length)return a.utils.noData(b, s), b;
        s.selectAll(".nv-noData").remove();
        var v = e.y()(p[p.length - 1], p.length - 1);
        c = e.xScale(), d = e.yScale();
        var w = s.selectAll("g.nv-wrap.nv-sparklineplus").data([p]), x = w.enter().append("g").attr("class", "nvd3 nv-wrap nv-sparklineplus"), y = x.append("g"), z = w.select("g");
        y.append("g").attr("class", "nv-sparklineWrap"), y.append("g").attr("class", "nv-valueWrap"), y.append("g").attr("class", "nv-hoverArea"), w.attr("transform", "translate(" + f.left + "," + f.top + ")");
        var A = z.select(".nv-sparklineWrap");
        if (e.width(t).height(u), A.call(e), m) {
          var B = z.select(".nv-valueWrap"), C = B.selectAll(".nv-currentValue").data([v]);
          C.enter().append("text").attr("class", "nv-currentValue").attr("dx", o ? -8 : 8).attr("dy", ".9em").style("text-anchor", o ? "end" : "start"), C.attr("x", t + (o ? f.right : 0)).attr("y", n ? function(a) {
            return d(a)
          } : 0).style("fill", e.color()(p[p.length - 1], p.length - 1)).text(l(v))
        }
        y.select(".nv-hoverArea").append("rect").on("mousemove", r).on("click", function() {
          j = !j
        }).on("mouseout", function() {
          i = [], q()
        }), z.select(".nv-hoverArea rect").attr("transform", function(a) {
          return "translate(" + -f.left + "," + -f.top + ")"
        }).attr("width", t + f.left + f.right).attr("height", u + f.top)
      }), r.renderEnd("sparklinePlus immediate"), b
    }

    var c, d, e = a.models.sparkline(), f = {top: 15, right: 100, bottom: 10, left: 50}, g = null, h = null, i = [], j = !1, k = d3.format(",r"), l = d3.format(",.2f"), m = !0, n = !0, o = !1, p = null, q = d3.dispatch("renderEnd"), r = a.utils.renderWatch(q);
    return b.dispatch = q, b.sparkline = e, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, height: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, xTickFormat: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, yTickFormat: {
        get: function() {
          return l
        }, set: function(a) {
          l = a
        }
      }, showLastValue: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, alignValue: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, rightAlignValue: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, noData: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, margin: {
        get: function() {
          return f
        }, set: function(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.stackedArea = function() {
    "use strict";
    function b(n) {
      return v.reset(), v.models(s), n.each(function(n) {
        var t = f - e.left - e.right, w = g - e.top - e.bottom;
        j = d3.select(this), a.utils.initSVG(j), c = s.xScale(), d = s.yScale();
        var x = n;
        n.forEach(function(a, b) {
          a.seriesIndex = b, a.values = a.values.map(function(a, c) {
            return a.index = c, a.seriesIndex = b, a
          })
        });
        var y = n.filter(function(a) {
          return !a.disabled
        });
        n = d3.layout.stack().order(p).offset(o).values(function(a) {
          return a.values
        }).x(k).y(l).out(function(a, b, c) {
          a.display = {y: c, y0: b}
        })(y);
        var z = j.selectAll("g.nv-wrap.nv-stackedarea").data([n]), A = z.enter().append("g").attr("class", "nvd3 nv-wrap nv-stackedarea"), B = A.append("defs"), C = A.append("g"), D = z.select("g");
        C.append("g").attr("class", "nv-areaWrap"), C.append("g").attr("class", "nv-scatterWrap"), z.attr("transform", "translate(" + e.left + "," + e.top + ")"), 0 == s.forceY().length && s.forceY().push(0), s.width(t).height(w).x(k).y(function(a) {
          return void 0 !== a.display ? a.display.y + a.display.y0 : void 0
        }).forceY([0]).color(n.map(function(a, b) {
          return a.color = a.color || h(a, a.seriesIndex), a.color
        }));
        var E = D.select(".nv-scatterWrap").datum(n);
        E.call(s), B.append("clipPath").attr("id", "nv-edge-clip-" + i).append("rect"), z.select("#nv-edge-clip-" + i + " rect").attr("width", t).attr("height", w), D.attr("clip-path", r ? "url(#nv-edge-clip-" + i + ")" : "");
        var F = d3.svg.area().defined(m).x(function(a, b) {
          return c(k(a, b))
        }).y0(function(a) {
          return d(a.display.y0)
        }).y1(function(a) {
          return d(a.display.y + a.display.y0)
        }).interpolate(q), G = d3.svg.area().defined(m).x(function(a, b) {
          return c(k(a, b))
        }).y0(function(a) {
          return d(a.display.y0)
        }).y1(function(a) {
          return d(a.display.y0)
        }), H = D.select(".nv-areaWrap").selectAll("path.nv-area").data(function(a) {
          return a
        });
        H.enter().append("path").attr("class", function(a, b) {
          return "nv-area nv-area-" + b
        }).attr("d", function(a, b) {
          return G(a.values, a.seriesIndex)
        }).on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0), u.areaMouseover({point: a, series: a.key, pos: [d3.event.pageX, d3.event.pageY], seriesIndex: a.seriesIndex})
        }).on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1), u.areaMouseout({point: a, series: a.key, pos: [d3.event.pageX, d3.event.pageY], seriesIndex: a.seriesIndex})
        }).on("click", function(a, b) {
          d3.select(this).classed("hover", !1), u.areaClick({point: a, series: a.key, pos: [d3.event.pageX, d3.event.pageY], seriesIndex: a.seriesIndex})
        }), H.exit().remove(), H.style("fill", function(a, b) {
          return a.color || h(a, a.seriesIndex)
        }).style("stroke", function(a, b) {
          return a.color || h(a, a.seriesIndex)
        }), H.watchTransition(v, "stackedArea path").attr("d", function(a, b) {
          return F(a.values, b)
        }), s.dispatch.on("elementMouseover.area", function(a) {
          D.select(".nv-chart-" + i + " .nv-area-" + a.seriesIndex).classed("hover", !0)
        }), s.dispatch.on("elementMouseout.area", function(a) {
          D.select(".nv-chart-" + i + " .nv-area-" + a.seriesIndex).classed("hover", !1)
        }), b.d3_stackedOffset_stackPercent = function(a) {
          var b, c, d, e = a.length, f = a[0].length, g = [];
          for (c = 0; f > c; ++c) {
            for (b = 0, d = 0; b < x.length; b++)d += l(x[b].values[c]);
            if (d)for (b = 0; e > b; b++)a[b][c][1] /= d; else for (b = 0; e > b; b++)a[b][c][1] = 0
          }
          for (c = 0; f > c; ++c)g[c] = 0;
          return g
        }
      }), v.renderEnd("stackedArea immediate"), b
    }

    var c, d, e = {top: 0, right: 0, bottom: 0, left: 0}, f = 960, g = 500, h = a.utils.defaultColor(), i = Math.floor(1e5 * Math.random()), j = null, k = function(a) {
      return a.x
    }, l = function(a) {
      return a.y
    }, m = function(a, b) {
      return !isNaN(l(a, b)) && null !== l(a, b)
    }, n = "stack", o = "zero", p = "default", q = "linear", r = !1, s = a.models.scatter(), t = 250, u = d3.dispatch("areaClick", "areaMouseover", "areaMouseout", "renderEnd", "elementClick", "elementMouseover", "elementMouseout");
    s.pointSize(2.2).pointDomain([2.2, 2.2]);
    var v = a.utils.renderWatch(u, t);
    return b.dispatch = u, b.scatter = s, s.dispatch.on("elementClick", function() {
      u.elementClick.apply(this, arguments)
    }), s.dispatch.on("elementMouseover", function() {
      u.elementMouseover.apply(this, arguments)
    }), s.dispatch.on("elementMouseout", function() {
      u.elementMouseout.apply(this, arguments)
    }), b.interpolate = function(a) {
      return arguments.length ? (q = a, b) : q
    }, b.duration = function(a) {
      return arguments.length ? (t = a, v.reset(t), s.duration(t), b) : t
    }, b.dispatch = u, b.scatter = s, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return f
        }, set: function(a) {
          f = a
        }
      }, height: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, defined: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, clipEdge: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, offset: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, order: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, interpolate: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, x: {
        get: function() {
          return k
        }, set: function(a) {
          k = d3.functor(a)
        }
      }, y: {
        get: function() {
          return l
        }, set: function(a) {
          l = d3.functor(a)
        }
      }, margin: {
        get: function() {
          return e
        }, set: function(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left
        }
      }, color: {
        get: function() {
          return h
        }, set: function(b) {
          h = a.utils.getColor(b)
        }
      }, style: {
        get: function() {
          return n
        }, set: function(a) {
          switch (n = a) {
            case"stack":
              b.offset("zero"), b.order("default");
              break;
            case"stream":
              b.offset("wiggle"), b.order("inside-out");
              break;
            case"stream-center":
              b.offset("silhouette"), b.order("inside-out");
              break;
            case"expand":
              b.offset("expand"), b.order("default");
              break;
            case"stack_percent":
              b.offset(b.d3_stackedOffset_stackPercent), b.order("default")
          }
        }
      }, duration: {
        get: function() {
          return t
        }, set: function(a) {
          t = a, v.reset(t), s.duration(t)
        }
      }
    }), a.utils.inheritOptions(b, s), a.utils.initOptions(b), b
  }, a.models.stackedAreaChart = function() {
    "use strict";
    function b(k) {
      return H.reset(), H.models(e), r && H.models(f), s && H.models(g), k.each(function(k) {
        var z = d3.select(this), H = this;
        a.utils.initSVG(z);
        var M = a.utils.availableWidth(m, z, l), N = a.utils.availableHeight(n, z, l);
        if (b.update = function() {
            z.transition().duration(E).call(b)
          }, b.container = this, x.setter(K(k), b.update).getter(J(k)).update(), x.disabled = k.map(function(a) {
            return !!a.disabled
          }), !y) {
          var O;
          y = {};
          for (O in x)x[O] instanceof Array ? y[O] = x[O].slice(0) : y[O] = x[O]
        }
        if (!(k && k.length && k.filter(function(a) {
            return a.values.length
          }).length))return a.utils.noData(b, z), b;
        z.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale();
        var P = z.selectAll("g.nv-wrap.nv-stackedAreaChart").data([k]), Q = P.enter().append("g").attr("class", "nvd3 nv-wrap nv-stackedAreaChart").append("g"), R = P.select("g");
        if (Q.append("rect").style("opacity", 0), Q.append("g").attr("class", "nv-x nv-axis"), Q.append("g").attr("class", "nv-y nv-axis"), Q.append("g").attr("class", "nv-stackedWrap"), Q.append("g").attr("class", "nv-legendWrap"), Q.append("g").attr("class", "nv-controlsWrap"), Q.append("g").attr("class", "nv-interactive"), R.select("rect").attr("width", M).attr("height", N), q) {
          var S = p ? M - B : M;
          h.width(S), R.select(".nv-legendWrap").datum(k).call(h), l.top != h.height() && (l.top = h.height(), N = a.utils.availableHeight(n, z, l)), R.select(".nv-legendWrap").attr("transform", "translate(" + (M - S) + "," + -l.top + ")")
        }
        if (p) {
          var T = [{key: D.stacked || "Stacked", metaKey: "Stacked", disabled: "stack" != e.style(), style: "stack"}, {key: D.stream || "Stream", metaKey: "Stream", disabled: "stream" != e.style(), style: "stream"}, {key: D.expanded || "Expanded", metaKey: "Expanded", disabled: "expand" != e.style(), style: "expand"}, {key: D.stack_percent || "Stack %", metaKey: "Stack_Percent", disabled: "stack_percent" != e.style(), style: "stack_percent"}];
          B = C.length / 3 * 260, T = T.filter(function(a) {
            return -1 !== C.indexOf(a.metaKey)
          }), i.width(B).color(["#444", "#444", "#444"]), R.select(".nv-controlsWrap").datum(T).call(i), l.top != Math.max(i.height(), h.height()) && (l.top = Math.max(i.height(), h.height()), N = a.utils.availableHeight(n, z, l)), R.select(".nv-controlsWrap").attr("transform", "translate(0," + -l.top + ")")
        }
        P.attr("transform", "translate(" + l.left + "," + l.top + ")"), t && R.select(".nv-y.nv-axis").attr("transform", "translate(" + M + ",0)"), u && (j.width(M).height(N).margin({left: l.left, top: l.top}).svgContainer(z).xScale(c), P.select(".nv-interactive").call(j)), e.width(M).height(N);
        var U = R.select(".nv-stackedWrap").datum(k);
        if (U.transition().call(e), r && (f.scale(c)._ticks(a.utils.calcTicksX(M / 100, k)).tickSize(-N, 0), R.select(".nv-x.nv-axis").attr("transform", "translate(0," + N + ")"), R.select(".nv-x.nv-axis").transition().duration(0).call(f)), s) {
          var V;
          if (V = "wiggle" === e.offset() ? 0 : a.utils.calcTicksY(N / 36, k), g.scale(d)._ticks(V).tickSize(-M, 0), "expand" === e.style() || "stack_percent" === e.style()) {
            var W = g.tickFormat();
            F && W === L || (F = W), g.tickFormat(L)
          } else F && (g.tickFormat(F), F = null);
          R.select(".nv-y.nv-axis").transition().duration(0).call(g)
        }
        e.dispatch.on("areaClick.toggle", function(a) {
          1 === k.filter(function(a) {
            return !a.disabled
          }).length ? k.forEach(function(a) {
            a.disabled = !1
          }) : k.forEach(function(b, c) {
            b.disabled = c != a.seriesIndex
          }), x.disabled = k.map(function(a) {
            return !!a.disabled
          }), A.stateChange(x), b.update()
        }), h.dispatch.on("stateChange", function(a) {
          for (var c in a)x[c] = a[c];
          A.stateChange(x), b.update()
        }), i.dispatch.on("legendClick", function(a, c) {
          a.disabled && (T = T.map(function(a) {
            return a.disabled = !0, a
          }), a.disabled = !1, e.style(a.style), x.style = e.style(), A.stateChange(x), b.update())
        }), j.dispatch.on("elementMousemove", function(c) {
          e.clearHighlights();
          var d, f, g, h = [], i = 0;
          if (k.filter(function(a, b) {
              return a.seriesIndex = b, !a.disabled
            }).forEach(function(j, k) {
              f = a.interactiveBisect(j.values, c.pointXValue, b.x());
              var l = j.values[f], m = b.y()(l, f);
              if (null != m && e.highlightPoint(k, f, !0), "undefined" != typeof l) {
                "undefined" == typeof d && (d = l), "undefined" == typeof g && (g = b.xScale()(b.x()(l, f)));
                var n = "expand" == e.style() ? l.display.y : b.y()(l, f);
                h.push({key: j.key, value: n, color: o(j, j.seriesIndex), stackedValue: l.display}), v && "expand" != e.style() && (i += n)
              }
            }), h.reverse(), h.length > 2) {
            var l = b.yScale().invert(c.mouseY), m = null;
            h.forEach(function(a, b) {
              l = Math.abs(l);
              var c = Math.abs(a.stackedValue.y0), d = Math.abs(a.stackedValue.y);
              return l >= c && d + c >= l ? void(m = b) : void 0
            }), null != m && (h[m].highlight = !0)
          }
          v && "expand" != e.style() && h.length >= 2 && h.push({key: w, value: i, total: !0});
          var n = b.x()(d, f), p = j.tooltip.valueFormatter();
          "expand" === e.style() || "stack_percent" === e.style() ? (G || (G = p), p = d3.format(".1%")) : G && (p = G, G = null), j.tooltip.chartContainer(H.parentNode).valueFormatter(p).data({value: n, series: h})(), j.renderGuideLine(g)
        }), j.dispatch.on("elementMouseout", function(a) {
          e.clearHighlights()
        }), A.on("changeState", function(a) {
          "undefined" != typeof a.disabled && k.length === a.disabled.length && (k.forEach(function(b, c) {
            b.disabled = a.disabled[c]
          }), x.disabled = a.disabled), "undefined" != typeof a.style && (e.style(a.style), I = a.style), b.update()
        })
      }), H.renderEnd("stacked Area chart immediate"), b
    }

    var c, d, e = a.models.stackedArea(), f = a.models.axis(), g = a.models.axis(), h = a.models.legend(), i = a.models.legend(), j = a.interactiveGuideline(), k = a.models.tooltip(), l = {top: 30, right: 25, bottom: 50, left: 60}, m = null, n = null, o = a.utils.defaultColor(), p = !0, q = !0, r = !0, s = !0, t = !1, u = !1, v = !0, w = "TOTAL", x = a.utils.state(), y = null, z = null, A = d3.dispatch("stateChange", "changeState", "renderEnd"), B = 250, C = ["Stacked", "Stream", "Expanded"], D = {}, E = 250;
    x.style = e.style(), f.orient("bottom").tickPadding(7), g.orient(t ? "right" : "left"), k.headerFormatter(function(a, b) {
      return f.tickFormat()(a, b)
    }).valueFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    }), j.tooltip.headerFormatter(function(a, b) {
      return f.tickFormat()(a, b)
    }).valueFormatter(function(a, b) {
      return g.tickFormat()(a, b)
    });
    var F = null, G = null;
    i.updateState(!1);
    var H = a.utils.renderWatch(A), I = e.style(), J = function(a) {
      return function() {
        return {
          active: a.map(function(a) {
            return !a.disabled
          }), style: e.style()
        }
      }
    }, K = function(a) {
      return function(b) {
        void 0 !== b.style && (I = b.style), void 0 !== b.active && a.forEach(function(a, c) {
          a.disabled = !b.active[c]
        })
      }
    }, L = d3.format("%");
    return e.dispatch.on("elementMouseover.tooltip", function(a) {
      a.point.x = e.x()(a.point), a.point.y = e.y()(a.point), k.data(a).hidden(!1)
    }), e.dispatch.on("elementMouseout.tooltip", function(a) {
      k.hidden(!0)
    }), b.dispatch = A, b.stacked = e, b.legend = h, b.controls = i, b.xAxis = f, b.yAxis = g, b.interactiveLayer = j, b.tooltip = k, b.dispatch = A, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return m
        }, set: function(a) {
          m = a
        }
      }, height: {
        get: function() {
          return n
        }, set: function(a) {
          n = a
        }
      }, showLegend: {
        get: function() {
          return q
        }, set: function(a) {
          q = a
        }
      }, showXAxis: {
        get: function() {
          return r
        }, set: function(a) {
          r = a
        }
      }, showYAxis: {
        get: function() {
          return s
        }, set: function(a) {
          s = a
        }
      }, defaultState: {
        get: function() {
          return y
        }, set: function(a) {
          y = a
        }
      }, noData: {
        get: function() {
          return z
        }, set: function(a) {
          z = a
        }
      }, showControls: {
        get: function() {
          return p
        }, set: function(a) {
          p = a
        }
      }, controlLabels: {
        get: function() {
          return D
        }, set: function(a) {
          D = a
        }
      }, controlOptions: {
        get: function() {
          return C
        }, set: function(a) {
          C = a
        }
      }, showTotalInTooltip: {
        get: function() {
          return v
        }, set: function(a) {
          v = a
        }
      }, totalLabel: {
        get: function() {
          return w
        }, set: function(a) {
          w = a
        }
      }, margin: {
        get: function() {
          return l
        }, set: function(a) {
          l.top = void 0 !== a.top ? a.top : l.top, l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left
        }
      }, duration: {
        get: function() {
          return E
        }, set: function(a) {
          E = a, H.reset(E), e.duration(E), f.duration(E), g.duration(E)
        }
      }, color: {
        get: function() {
          return o
        }, set: function(b) {
          o = a.utils.getColor(b), h.color(o), e.color(o)
        }
      }, rightAlignYAxis: {
        get: function() {
          return t
        }, set: function(a) {
          t = a, g.orient(t ? "right" : "left")
        }
      }, useInteractiveGuideline: {
        get: function() {
          return u
        }, set: function(a) {
          u = !!a, b.interactive(!a), b.useVoronoi(!a), e.scatter.interactive(!a)
        }
      }
    }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b
  }, a.models.sunburst = function() {
    "use strict";
    function b(v) {
      return u.reset(), v.each(function(u) {
        function v(a) {
          a.x0 = a.x, a.dx0 = a.dx
        }

        function w(a) {
          var b = d3.interpolate(q.domain(), [a.x, a.x + a.dx]), c = d3.interpolate(r.domain(), [a.y, 1]), d = d3.interpolate(r.range(), [a.y ? 20 : 0, A]);
          return function(a, e) {
            return e ? function(b) {
              return t(a)
            } : function(e) {
              return q.domain(b(e)), r.domain(c(e)).range(d(e)), t(a)
            }
          }
        }

        l = d3.select(this);
        var x, y = a.utils.availableWidth(g, l, f), z = a.utils.availableHeight(h, l, f), A = Math.min(y, z) / 2;
        a.utils.initSVG(l);
        var B = l.selectAll(".nv-wrap.nv-sunburst").data(u), C = B.enter().append("g").attr("class", "nvd3 nv-wrap nv-sunburst nv-chart-" + k), D = C.selectAll("nv-sunburst");
        b.update = function() {
          0 === o ? l.call(b) : l.transition().duration(o).call(b)
        }, b.container = this, B.attr("transform", "translate(" + y / 2 + "," + z / 2 + ")"), l.on("click", function(a, b) {
          p.chartClick({data: a, index: b, pos: d3.event, id: k})
        }), r.range([0, A]), c = c || u, e = u[0], s.value(j[i] || j.count), x = D.data(s.nodes).enter().append("path").attr("d", t).style("fill", function(a) {
          return a.color ? a.color : m(n ? (a.children ? a : a.parent).name : a.name)
        }).style("stroke", "#FFF").on("click", function(a) {
          d !== c && c !== a && (d = c), c = a, x.transition().duration(o).attrTween("d", w(a))
        }).each(v).on("dblclick", function(a) {
          d.parent == a && x.transition().duration(o).attrTween("d", w(e))
        }).each(v).on("mouseover", function(a, b) {
          d3.select(this).classed("hover", !0).style("opacity", .8), p.elementMouseover({data: a, color: d3.select(this).style("fill")})
        }).on("mouseout", function(a, b) {
          d3.select(this).classed("hover", !1).style("opacity", 1), p.elementMouseout({data: a})
        }).on("mousemove", function(a, b) {
          p.elementMousemove({data: a})
        })
      }), u.renderEnd("sunburst immediate"), b
    }

    var c, d, e, f = {top: 0, right: 0, bottom: 0, left: 0}, g = null, h = null, i = "count", j = {
      count: function(a) {
        return 1
      }, size: function(a) {
        return a.size
      }
    }, k = Math.floor(1e4 * Math.random()), l = null, m = a.utils.defaultColor(), n = !0, o = 500, p = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMousemove", "elementMouseover", "elementMouseout", "renderEnd"), q = d3.scale.linear().range([0, 2 * Math.PI]), r = d3.scale.sqrt(), s = d3.layout.partition().sort(null).value(function(a) {
      return 1
    }), t = d3.svg.arc().startAngle(function(a) {
      return Math.max(0, Math.min(2 * Math.PI, q(a.x)))
    }).endAngle(function(a) {
      return Math.max(0, Math.min(2 * Math.PI, q(a.x + a.dx)))
    }).innerRadius(function(a) {
      return Math.max(0, r(a.y))
    }).outerRadius(function(a) {
      return Math.max(0, r(a.y + a.dy))
    }), u = a.utils.renderWatch(p);
    return b.dispatch = p, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      width: {
        get: function() {
          return g
        }, set: function(a) {
          g = a
        }
      }, height: {
        get: function() {
          return h
        }, set: function(a) {
          h = a
        }
      }, mode: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, id: {
        get: function() {
          return k
        }, set: function(a) {
          k = a
        }
      }, duration: {
        get: function() {
          return o
        }, set: function(a) {
          o = a
        }
      }, groupColorByParent: {
        get: function() {
          return n
        }, set: function(a) {
          n = !!a
        }
      }, margin: {
        get: function() {
          return f
        }, set: function(a) {
          f.top = void 0 != a.top ? a.top : f.top, f.right = void 0 != a.right ? a.right : f.right, f.bottom = void 0 != a.bottom ? a.bottom : f.bottom, f.left = void 0 != a.left ? a.left : f.left
        }
      }, color: {
        get: function() {
          return m
        }, set: function(b) {
          m = a.utils.getColor(b)
        }
      }
    }), a.utils.initOptions(b), b
  }, a.models.sunburstChart = function() {
    "use strict";
    function b(d) {
      return m.reset(), m.models(c), d.each(function(d) {
        var h = d3.select(this);
        a.utils.initSVG(h);
        var i = a.utils.availableWidth(f, h, e), j = a.utils.availableHeight(g, h, e);
        if (b.update = function() {
            0 === k ? h.call(b) : h.transition().duration(k).call(b)
          }, b.container = this, !d || !d.length)return a.utils.noData(b, h), b;
        h.selectAll(".nv-noData").remove();
        var l = h.selectAll("g.nv-wrap.nv-sunburstChart").data(d), m = l.enter().append("g").attr("class", "nvd3 nv-wrap nv-sunburstChart").append("g"), n = l.select("g");
        m.append("g").attr("class", "nv-sunburstWrap"), l.attr("transform", "translate(" + e.left + "," + e.top + ")"), c.width(i).height(j);
        var o = n.select(".nv-sunburstWrap").datum(d);
        d3.transition(o).call(c)
      }), m.renderEnd("sunburstChart immediate"), b
    }

    var c = a.models.sunburst(), d = a.models.tooltip(), e = {top: 30, right: 20, bottom: 20, left: 20}, f = null, g = null, h = a.utils.defaultColor(), i = (Math.round(1e5 * Math.random()), null), j = null, k = 250, l = d3.dispatch("stateChange", "changeState", "renderEnd");
    d.duration(0);
    var m = a.utils.renderWatch(l);
    return d.headerEnabled(!1).valueFormatter(function(a, b) {
      return a
    }), c.dispatch.on("elementMouseover.tooltip", function(a) {
      a.series = {key: a.data.name, value: a.data.size, color: a.color}, d.data(a).hidden(!1)
    }), c.dispatch.on("elementMouseout.tooltip", function(a) {
      d.hidden(!0)
    }), c.dispatch.on("elementMousemove.tooltip", function(a) {
      d()
    }), b.dispatch = l, b.sunburst = c, b.tooltip = d, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, {
      noData: {
        get: function() {
          return j
        }, set: function(a) {
          j = a
        }
      }, defaultState: {
        get: function() {
          return i
        }, set: function(a) {
          i = a
        }
      }, color: {
        get: function() {
          return h
        }, set: function(a) {
          h = a, c.color(h)
        }
      }, duration: {
        get: function() {
          return k
        }, set: function(a) {
          k = a, m.reset(k), c.duration(k)
        }
      }, margin: {
        get: function() {
          return e
        }, set: function(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left
        }
      }
    }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b
  }, a.version = "1.8.2"
}();
//# sourceMappingURL=nv.d3.min.js.map
!function() {
  "use strict";
  angular.module("nvd3", []).directive("nvd3", [
    "nvd3Utils", function(nvd3Utils) {
      return {
        restrict: "AE", scope: {data: "=", options: "=", api: "=?", events: "=?", config: "=?"}, link: function(scope, element) {
          function configure(chart, options, chartType) {
            chart && options && angular.forEach(chart, function(value, key) {
              "_" === key[0] || ("dispatch" === key ? ((void 0 === options[key] || null === options[key]) && scope._config.extended && (options[key] = {}), configureEvents(value, options[key])) : "tooltip" === key ? ((void 0 === options[key] || null === options[key]) && scope._config.extended && (options[key] = {}), configure(chart[key], options[key], chartType)) : -1 === ["axis", "clearHighlights", "defined", "highlightPoint", "nvPointerEventsClass", "options", "rangeBand", "rangeBands", "scatter", "open", "close"].indexOf(key) && (void 0 === options[key] || null === options[key] ? scope._config.extended && (options[key] = value()) : chart[key](options[key])))
            })
          }

          function configureEvents(dispatch, options) {
            dispatch && options && angular.forEach(dispatch, function(value, key) {
              void 0 === options[key] || null === options[key] ? scope._config.extended && (options[key] = value.on) : dispatch.on(key + "._", options[key])
            })
          }

          function configureWrapper(name) {
            var _ = nvd3Utils.deepExtend(defaultWrapper(name), scope.options[name] || {});
            scope._config.extended && (scope.options[name] = _);
            var wrapElement = angular.element("<div></div>").html(_.html || "").addClass(name).addClass(_.className).removeAttr("style").css(_.css);
            _.html || wrapElement.text(_.text), _.enable && ("title" === name ? element.prepend(wrapElement) : "subtitle" === name ? element.find(".title").after(wrapElement) : "caption" === name && element.append(wrapElement))
          }

          function configureStyles() {
            var _ = nvd3Utils.deepExtend(defaultStyles(), scope.options.styles || {});
            scope._config.extended && (scope.options.styles = _), angular.forEach(_.classes, function(value, key) {
              value ? element.addClass(key) : element.removeClass(key)
            }), element.removeAttr("style").css(_.css)
          }

          function defaultWrapper(_) {
            switch (_) {
              case"title":
                return {enable: !1, text: "Write Your Title", className: "h4", css: {width: scope.options.chart.width + "px", textAlign: "center"}};
              case"subtitle":
                return {enable: !1, text: "Write Your Subtitle", css: {width: scope.options.chart.width + "px", textAlign: "center"}};
              case"caption":
                return {enable: !1, text: "Figure 1. Write Your Caption text.", css: {width: scope.options.chart.width + "px", textAlign: "center"}}
            }
          }

          function defaultStyles() {
            return {classes: {"with-3d-shadow": !0, "with-transitions": !0, gallery: !1}, css: {}}
          }

          var defaultConfig = {extended: !1, visible: !0, disabled: !1, autorefresh: !0, refreshDataOnly: !1, deepWatchOptions: !0, deepWatchData: !1, deepWatchConfig: !0, debounce: 10};
          scope._config = angular.extend(defaultConfig, scope.config), scope.api = {
            refresh: function() {
              scope.api.updateWithOptions(scope.options)
            }, update: function() {
              scope.chart.update()
            }, updateWithOptions: function(options) {
              scope.api.clearElement(), angular.isDefined(options) !== !1 && scope._config.visible && (scope.chart = nv.models[options.chart.type](), scope.chart.id = Math.random().toString(36).substr(2, 15), angular.forEach(scope.chart, function(value, key) {
                "_" === key[0] || ["clearHighlights", "highlightPoint", "id", "options", "resizeHandler", "state", "open", "close"].indexOf(key) >= 0 || ("dispatch" === key ? ((void 0 === options.chart[key] || null === options.chart[key]) && scope._config.extended && (options.chart[key] = {}), configureEvents(scope.chart[key], options.chart[key])) : ["bars", "bars1", "bars2", "boxplot", "bullet", "controls", "discretebar", "distX", "distY", "interactiveLayer", "legend", "lines", "lines1", "lines2", "multibar", "pie", "scatter", "sparkline", "stack1", "stack2", "sunburst", "tooltip", "x2Axis", "xAxis", "y1Axis", "y2Axis", "y3Axis", "y4Axis", "yAxis", "yAxis1", "yAxis2"].indexOf(key) >= 0 || "stacked" === key && "stackedAreaChart" === options.chart.type ? ((void 0 === options.chart[key] || null === options.chart[key]) && scope._config.extended && (options.chart[key] = {}), configure(scope.chart[key], options.chart[key], options.chart.type)) : ("xTickFormat" !== key && "yTickFormat" !== key || "lineWithFocusChart" !== options.chart.type) && ("tooltips" === key && "boxPlotChart" === options.chart.type || (void 0 === options.chart[key] || null === options.chart[key] ? scope._config.extended && (options.chart[key] = value()) : scope.chart[key](options.chart[key]))))
              }), scope.api.updateWithData("sunburstChart" === options.chart.type ? angular.copy(scope.data) : scope.data), (options.title || scope._config.extended) && configureWrapper("title"), (options.subtitle || scope._config.extended) && configureWrapper("subtitle"), (options.caption || scope._config.extended) && configureWrapper("caption"), (options.styles || scope._config.extended) && configureStyles(), nv.addGraph(function() {
                return scope.chart && scope.chart.resizeHandler && scope.chart.resizeHandler.clear(), scope.chart.resizeHandler = nv.utils.windowResize(function() {
                  scope.chart && scope.chart.update && scope.chart.update()
                }), scope.chart
              }, options.chart.callback))
            }, updateWithData: function(data) {
              data && (scope.options.chart.transitionDuration = +scope.options.chart.transitionDuration || 250, d3.select(element[0]).select("svg").remove(), d3.select(element[0]).append("svg").attr("height", scope.options.chart.height).attr("width", scope.options.chart.width || "100%").datum(data).transition().duration(scope.options.chart.transitionDuration).call(scope.chart))
            }, clearElement: function() {
              if (element.find(".title").remove(), element.find(".subtitle").remove(), element.find(".caption").remove(), element.empty(), nv.graphs && scope.chart)for (var i = nv.graphs.length - 1; i >= 0; i--)nv.graphs[i].id === scope.chart.id && nv.graphs.splice(i, 1);
              nv.tooltip && nv.tooltip.cleanup && nv.tooltip.cleanup(), scope.chart && scope.chart.resizeHandler && scope.chart.resizeHandler.clear(), scope.chart = null
            }, getScope: function() {
              return scope
            }
          }, scope.$watch("options", nvd3Utils.debounce(function() {
            !scope._config.disabled && scope._config.autorefresh && scope.api.refresh()
          }, scope._config.debounce, !0), scope._config.deepWatchOptions), scope.$watch("data", function(newData, oldData) {
            newData !== oldData && scope.chart && !scope._config.disabled && scope._config.autorefresh && (scope._config.refreshDataOnly && scope.chart.update ? scope.chart.update() : scope.api.refresh())
          }, scope._config.deepWatchData), scope.$watch("config", function(newConfig, oldConfig) {
            newConfig !== oldConfig && (scope._config = angular.extend(defaultConfig, newConfig), scope.api.refresh())
          }, scope._config.deepWatchConfig), angular.forEach(scope.events, function(eventHandler, event) {
            scope.$on(event, function(e) {
              return eventHandler(e, scope)
            })
          }), element.on("$destroy", function() {
            scope.api.clearElement()
          })
        }
      }
    }
  ]).factory("nvd3Utils", function() {
    return {
      debounce: function(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments, later = function() {
            timeout = null, immediate || func.apply(context, args)
          }, callNow = immediate && !timeout;
          clearTimeout(timeout), timeout = setTimeout(later, wait), callNow && func.apply(context, args)
        }
      }, deepExtend: function(dst) {
        var me = this;
        return angular.forEach(arguments, function(obj) {
          obj !== dst && angular.forEach(obj, function(value, key) {
            dst[key] && dst[key].constructor && dst[key].constructor === Object ? me.deepExtend(dst[key], value) : dst[key] = value
          })
        }), dst
      }
    }
  })
}();
/*! ng-flow 2.6.1 */
angular.module("flow.provider", []).provider("flowFactory", function() {
  "use strict";
  this.defaults = {}, this.factory = function(a) {
    return new Flow(a)
  }, this.events = [], this.on = function(a, b) {
    this.events.push([a, b])
  }, this.$get = function() {
    var a = this.factory, b = this.defaults, c = this.events;
    return {
      create: function(d) {
        var e = a(angular.extend({}, b, d));
        return angular.forEach(c, function(a) {
          e.on(a[0], a[1])
        }), e
      }
    }
  }
}), angular.module("flow.init", ["flow.provider"]).controller("flowCtrl", [
  "$scope", "$attrs", "$parse", "flowFactory", function(a, b, c, d) {
    var e = angular.extend({}, a.$eval(b.flowInit)), f = a.$eval(b.flowObject) || d.create(e), g = function(b) {
      var c = Array.prototype.slice.call(arguments);
      c.shift();
      var d = a.$broadcast.apply(a, ["flow::" + b, f].concat(c));
      return {progress: 1, filesSubmitted: 1, fileSuccess: 1, fileError: 1, complete: 1}[b] && a.$apply(), d.defaultPrevented ? !1 : void 0
    };
    f.on("catchAll", g), a.$on("$destroy", function() {
      f.off("catchAll", g)
    }), a.$flow = f, b.hasOwnProperty("flowName") && (c(b.flowName).assign(a, f), a.$on("$destroy", function() {
      c(b.flowName).assign(a)
    }))
  }
]).directive("flowInit", [
  function() {
    return {scope: !0, controller: "flowCtrl"}
  }
]), angular.module("flow.btn", ["flow.init"]).directive("flowBtn", [
  function() {
    return {
      restrict: "EA", scope: !1, require: "^flowInit", link: function(a, b, c) {
        var d = c.hasOwnProperty("flowDirectory"), e = c.hasOwnProperty("flowSingleFile"), f = c.hasOwnProperty("flowAttrs") && a.$eval(c.flowAttrs);
        a.$flow.assignBrowse(b, d, e, f)
      }
    }
  }
]), angular.module("flow.dragEvents", ["flow.init"]).directive("flowPreventDrop", function() {
  return {
    scope: !1, link: function(a, b) {
      b.bind("drop dragover", function(a) {
        a.preventDefault()
      })
    }
  }
}).directive("flowDragEnter", [
  "$timeout", function(a) {
    return {
      scope: !1, link: function(b, c, d) {
        function e(a) {
          var b = !1, c = a.dataTransfer || a.originalEvent.dataTransfer;
          return angular.forEach(c && c.types, function(a) {
            "Files" === a && (b = !0)
          }), b
        }

        var f, g = !1;
        c.bind("dragover", function(c) {
          e(c) && (g || (b.$apply(d.flowDragEnter), g = !0), a.cancel(f), c.preventDefault())
        }), c.bind("dragleave drop", function() {
          a.cancel(f), f = a(function() {
            b.$eval(d.flowDragLeave), f = null, g = !1
          }, 100)
        })
      }
    }
  }
]), angular.module("flow.drop", ["flow.init"]).directive("flowDrop", function() {
  return {
    scope: !1, require: "^flowInit", link: function(a, b, c) {
      function d() {
        a.$flow.assignDrop(b)
      }

      function e() {
        a.$flow.unAssignDrop(b)
      }

      c.flowDropEnabled ? a.$watch(c.flowDropEnabled, function(a) {
        a ? d() : e()
      }) : d()
    }
  }
}), !function(a) {
  "use strict";
  function b(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
  }

  var c = a.module("flow.events", ["flow.init"]), d = {fileSuccess: ["$file", "$message"], fileProgress: ["$file"], fileAdded: ["$file", "$event"], filesAdded: ["$files", "$event"], filesSubmitted: ["$files", "$event"], fileRetry: ["$file"], fileError: ["$file", "$message"], uploadStart: [], complete: [], progress: [], error: ["$message", "$file"]};
  a.forEach(d, function(d, e) {
    var f = "flow" + b(e);
    "flowUploadStart" == f && (f = "flowUploadStarted"), c.directive(f, [
      function() {
        return {
          require: "^flowInit", controller: [
            "$scope", "$attrs", function(b, c) {
              b.$on("flow::" + e, function() {
                var e = Array.prototype.slice.call(arguments), g = e.shift();
                if (b.$flow === e.shift()) {
                  var h = {};
                  a.forEach(d, function(a, b) {
                    h[a] = e[b]
                  }), b.$eval(c[f], h) === !1 && g.preventDefault()
                }
              })
            }
          ]
        }
      }
    ])
  })
}(angular), angular.module("flow.img", ["flow.init"]).directive("flowImg", [
  function() {
    return {
      scope: !1, require: "^flowInit", link: function(a, b, c) {
        var d = c.flowImg;
        a.$watch(d, function(b) {
          if (b) {
            var d = new FileReader;
            d.readAsDataURL(b.file), d.onload = function(b) {
              a.$apply(function() {
                c.$set("src", b.target.result)
              })
            }
          }
        })
      }
    }
  }
]), angular.module("flow.transfers", ["flow.init"]).directive("flowTransfers", [
  function() {
    return {
      scope: !0, require: "^flowInit", link: function(a) {
        a.transfers = a.$flow.files
      }
    }
  }
]), angular.module("flow", ["flow.provider", "flow.init", "flow.events", "flow.btn", "flow.drop", "flow.transfers", "flow.img", "flow.dragEvents"]);
/*! @flowjs/flow.js 2.10.1 */
!function(a, b, c) {
  "use strict";
  function d(b) {
    if (this.support = !("undefined" == typeof File || "undefined" == typeof Blob || "undefined" == typeof FileList || !Blob.prototype.slice && !Blob.prototype.webkitSlice && !Blob.prototype.mozSlice), this.support) {
      this.supportDirectory = /Chrome/.test(a.navigator.userAgent), this.files = [], this.defaults = {chunkSize: 1048576, forceChunkSize: !1, simultaneousUploads: 3, singleFile: !1, fileParameterName: "file", progressCallbacksInterval: 500, speedSmoothingFactor: .1, query: {}, headers: {}, withCredentials: !1, preprocess: null, method: "multipart", testMethod: "GET", uploadMethod: "POST", prioritizeFirstAndLastChunk: !1, allowDuplicateUploads: !1, target: "/", testChunks: !0, generateUniqueIdentifier: null, maxChunkRetries: 0, chunkRetryInterval: null, permanentErrors: [404, 415, 500, 501], successStatuses: [200, 201, 202], onDropStopPropagation: !1, initFileFn: null, readFileFn: f}, this.opts = {}, this.events = {};
      var c = this;
      this.onDrop = function(a) {
        c.opts.onDropStopPropagation && a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer;
        b.items && b.items[0] && b.items[0].webkitGetAsEntry ? c.webkitReadDataTransfer(a) : c.addFiles(b.files, a)
      }, this.preventEvent = function(a) {
        a.preventDefault()
      }, this.opts = d.extend({}, this.defaults, b || {})
    }
  }

  function e(a, b) {
    this.flowObj = a, this.bytes = null, this.file = b, this.name = b.fileName || b.name, this.size = b.size, this.relativePath = b.relativePath || b.webkitRelativePath || this.name, this.uniqueIdentifier = a.generateUniqueIdentifier(b), this.chunks = [], this.paused = !1, this.error = !1, this.averageSpeed = 0, this.currentSpeed = 0, this._lastProgressCallback = Date.now(), this._prevUploadedSize = 0, this._prevProgress = 0, this.bootstrap()
  }

  function f(a, b, c, d, e) {
    var f = "slice";
    a.file.slice ? f = "slice" : a.file.mozSlice ? f = "mozSlice" : a.file.webkitSlice && (f = "webkitSlice"), e.readFinished(a.file[f](b, c, d))
  }

  function g(a, b, c) {
    this.flowObj = a, this.fileObj = b, this.offset = c, this.tested = !1, this.retries = 0, this.pendingRetry = !1, this.preprocessState = 0, this.readState = 0, this.loaded = 0, this.total = 0, this.chunkSize = this.flowObj.opts.chunkSize, this.startByte = this.offset * this.chunkSize, this.computeEndByte = function() {
      var a = Math.min(this.fileObj.size, (this.offset + 1) * this.chunkSize);
      return this.fileObj.size - a < this.chunkSize && !this.flowObj.opts.forceChunkSize && (a = this.fileObj.size), a
    }, this.endByte = this.computeEndByte(), this.xhr = null;
    var d = this;
    this.event = function(a, b) {
      b = Array.prototype.slice.call(arguments), b.unshift(d), d.fileObj.chunkEvent.apply(d.fileObj, b)
    }, this.progressHandler = function(a) {
      a.lengthComputable && (d.loaded = a.loaded, d.total = a.total), d.event("progress", a)
    }, this.testHandler = function(a) {
      var b = d.status(!0);
      "error" === b ? (d.event(b, d.message()), d.flowObj.uploadNextChunk()) : "success" === b ? (d.tested = !0, d.event(b, d.message()), d.flowObj.uploadNextChunk()) : d.fileObj.paused || (d.tested = !0, d.send())
    }, this.doneHandler = function(a) {
      var b = d.status();
      if ("success" === b || "error" === b)delete this.data, d.event(b, d.message()), d.flowObj.uploadNextChunk(); else {
        d.event("retry", d.message()), d.pendingRetry = !0, d.abort(), d.retries++;
        var c = d.flowObj.opts.chunkRetryInterval;
        null !== c ? setTimeout(function() {
          d.send()
        }, c) : d.send()
      }
    }
  }

  function h(a, b) {
    var c = a.indexOf(b);
    c > -1 && a.splice(c, 1)
  }

  function i(a, b) {
    return "function" == typeof a && (b = Array.prototype.slice.call(arguments), a = a.apply(null, b.slice(1))), a
  }

  function j(a, b) {
    setTimeout(a.bind(b), 0)
  }

  function k(a, b) {
    return l(arguments, function(b) {
      b !== a && l(b, function(b, c) {
        a[c] = b
      })
    }), a
  }

  function l(a, b, c) {
    if (a) {
      var d;
      if ("undefined" != typeof a.length) {
        for (d = 0; d < a.length; d++)if (b.call(c, a[d], d) === !1)return
      } else for (d in a)if (a.hasOwnProperty(d) && b.call(c, a[d], d) === !1)return
    }
  }

  var m = a.navigator.msPointerEnabled;
  d.prototype = {
    on: function(a, b) {
      a = a.toLowerCase(), this.events.hasOwnProperty(a) || (this.events[a] = []), this.events[a].push(b)
    }, off: function(a, b) {
      a !== c ? (a = a.toLowerCase(), b !== c ? this.events.hasOwnProperty(a) && h(this.events[a], b) : delete this.events[a]) : this.events = {}
    }, fire: function(a, b) {
      b = Array.prototype.slice.call(arguments), a = a.toLowerCase();
      var c = !1;
      return this.events.hasOwnProperty(a) && l(this.events[a], function(a) {
        c = a.apply(this, b.slice(1)) === !1 || c
      }, this), "catchall" != a && (b.unshift("catchAll"), c = this.fire.apply(this, b) === !1 || c), !c
    }, webkitReadDataTransfer: function(a) {
      function b(a) {
        a.readEntries(function(f) {
          f.length ? (g += f.length, l(f, function(a) {
            if (a.isFile) {
              var e = a.fullPath;
              a.file(function(a) {
                c(a, e)
              }, d)
            } else a.isDirectory && b(a.createReader())
          }), b(a)) : e()
        }, d)
      }

      function c(a, b) {
        a.relativePath = b.substring(1), h.push(a), e()
      }

      function d(a) {
        throw a
      }

      function e() {
        0 == --g && f.addFiles(h, a)
      }

      var f = this, g = a.dataTransfer.items.length, h = [];
      l(a.dataTransfer.items, function(a) {
        var d = a.webkitGetAsEntry();
        return d ? void(d.isFile ? c(a.getAsFile(), d.fullPath) : b(d.createReader())) : void e()
      })
    }, generateUniqueIdentifier: function(a) {
      var b = this.opts.generateUniqueIdentifier;
      if ("function" == typeof b)return b(a);
      var c = a.relativePath || a.webkitRelativePath || a.fileName || a.name;
      return a.size + "-" + c.replace(/[^0-9a-zA-Z_-]/gim, "")
    }, uploadNextChunk: function(a) {
      var b = !1;
      if (this.opts.prioritizeFirstAndLastChunk && (l(this.files, function(a) {
          return !a.paused && a.chunks.length && "pending" === a.chunks[0].status() ? (a.chunks[0].send(), b = !0, !1) : !a.paused && a.chunks.length > 1 && "pending" === a.chunks[a.chunks.length - 1].status() ? (a.chunks[a.chunks.length - 1].send(), b = !0, !1) : void 0
        }), b))return b;
      if (l(this.files, function(a) {
          return a.paused || l(a.chunks, function(a) {
            return "pending" === a.status() ? (a.send(), b = !0, !1) : void 0
          }), b ? !1 : void 0
        }), b)return !0;
      var c = !1;
      return l(this.files, function(a) {
        return a.isComplete() ? void 0 : (c = !0, !1)
      }), c || a || j(function() {
        this.fire("complete")
      }, this), !1
    }, assignBrowse: function(a, c, d, e) {
      "undefined" == typeof a.length && (a = [a]), l(a, function(a) {
        var f;
        "INPUT" === a.tagName && "file" === a.type ? f = a : (f = b.createElement("input"), f.setAttribute("type", "file"), k(f.style, {visibility: "hidden", position: "absolute", width: "1px", height: "1px"}), a.appendChild(f), a.addEventListener("click", function() {
          f.click()
        }, !1)), this.opts.singleFile || d || f.setAttribute("multiple", "multiple"), c && f.setAttribute("webkitdirectory", "webkitdirectory"), l(e, function(a, b) {
          f.setAttribute(b, a)
        });
        var g = this;
        f.addEventListener("change", function(a) {
          a.target.value && (g.addFiles(a.target.files, a), a.target.value = "")
        }, !1)
      }, this)
    }, assignDrop: function(a) {
      "undefined" == typeof a.length && (a = [a]), l(a, function(a) {
        a.addEventListener("dragover", this.preventEvent, !1), a.addEventListener("dragenter", this.preventEvent, !1), a.addEventListener("drop", this.onDrop, !1)
      }, this)
    }, unAssignDrop: function(a) {
      "undefined" == typeof a.length && (a = [a]), l(a, function(a) {
        a.removeEventListener("dragover", this.preventEvent), a.removeEventListener("dragenter", this.preventEvent), a.removeEventListener("drop", this.onDrop)
      }, this)
    }, isUploading: function() {
      var a = !1;
      return l(this.files, function(b) {
        return b.isUploading() ? (a = !0, !1) : void 0
      }), a
    }, _shouldUploadNext: function() {
      var a = 0, b = !0, c = this.opts.simultaneousUploads;
      return l(this.files, function(d) {
        l(d.chunks, function(d) {
          return "uploading" === d.status() && (a++, a >= c) ? (b = !1, !1) : void 0
        })
      }), b && a
    }, upload: function() {
      var a = this._shouldUploadNext();
      if (a !== !1) {
        this.fire("uploadStart");
        for (var b = !1, c = 1; c <= this.opts.simultaneousUploads - a; c++)b = this.uploadNextChunk(!0) || b;
        b || j(function() {
          this.fire("complete")
        }, this)
      }
    }, resume: function() {
      l(this.files, function(a) {
        a.resume()
      })
    }, pause: function() {
      l(this.files, function(a) {
        a.pause()
      })
    }, cancel: function() {
      for (var a = this.files.length - 1; a >= 0; a--)this.files[a].cancel()
    }, progress: function() {
      var a = 0, b = 0;
      return l(this.files, function(c) {
        a += c.progress() * c.size, b += c.size
      }), b > 0 ? a / b : 0
    }, addFile: function(a, b) {
      this.addFiles([a], b)
    }, addFiles: function(a, b) {
      var c = [];
      l(a, function(a) {
        if ((!m || m && a.size > 0) && (a.size % 4096 !== 0 || "." !== a.name && "." !== a.fileName) && (this.opts.allowDuplicateUploads || !this.getFromUniqueIdentifier(this.generateUniqueIdentifier(a)))) {
          var d = new e(this, a);
          this.fire("fileAdded", d, b) && c.push(d)
        }
      }, this), this.fire("filesAdded", c, b) && l(c, function(a) {
        this.opts.singleFile && this.files.length > 0 && this.removeFile(this.files[0]), this.files.push(a)
      }, this), this.fire("filesSubmitted", c, b)
    }, removeFile: function(a) {
      for (var b = this.files.length - 1; b >= 0; b--)this.files[b] === a && (this.files.splice(b, 1), a.abort())
    }, getFromUniqueIdentifier: function(a) {
      var b = !1;
      return l(this.files, function(c) {
        c.uniqueIdentifier === a && (b = c)
      }), b
    }, getSize: function() {
      var a = 0;
      return l(this.files, function(b) {
        a += b.size
      }), a
    }, sizeUploaded: function() {
      var a = 0;
      return l(this.files, function(b) {
        a += b.sizeUploaded()
      }), a
    }, timeRemaining: function() {
      var a = 0, b = 0;
      return l(this.files, function(c) {
        c.paused || c.error || (a += c.size - c.sizeUploaded(), b += c.averageSpeed)
      }), a && !b ? Number.POSITIVE_INFINITY : a || b ? Math.floor(a / b) : 0
    }
  }, e.prototype = {
    measureSpeed: function() {
      var a = Date.now() - this._lastProgressCallback;
      if (a) {
        var b = this.flowObj.opts.speedSmoothingFactor, c = this.sizeUploaded();
        this.currentSpeed = Math.max((c - this._prevUploadedSize) / a * 1e3, 0), this.averageSpeed = b * this.currentSpeed + (1 - b) * this.averageSpeed, this._prevUploadedSize = c
      }
    }, chunkEvent: function(a, b, c) {
      switch (b) {
        case"progress":
          if (Date.now() - this._lastProgressCallback < this.flowObj.opts.progressCallbacksInterval)break;
          this.measureSpeed(), this.flowObj.fire("fileProgress", this, a), this.flowObj.fire("progress"), this._lastProgressCallback = Date.now();
          break;
        case"error":
          this.error = !0, this.abort(!0), this.flowObj.fire("fileError", this, c, a), this.flowObj.fire("error", c, this, a);
          break;
        case"success":
          if (this.error)return;
          this.measureSpeed(), this.flowObj.fire("fileProgress", this, a), this.flowObj.fire("progress"), this._lastProgressCallback = Date.now(), this.isComplete() && (this.currentSpeed = 0, this.averageSpeed = 0, this.flowObj.fire("fileSuccess", this, c, a));
          break;
        case"retry":
          this.flowObj.fire("fileRetry", this, a)
      }
    }, pause: function() {
      this.paused = !0, this.abort()
    }, resume: function() {
      this.paused = !1, this.flowObj.upload()
    }, abort: function(a) {
      this.currentSpeed = 0, this.averageSpeed = 0;
      var b = this.chunks;
      a && (this.chunks = []), l(b, function(a) {
        "uploading" === a.status() && (a.abort(), this.flowObj.uploadNextChunk())
      }, this)
    }, cancel: function() {
      this.flowObj.removeFile(this)
    }, retry: function() {
      this.bootstrap(), this.flowObj.upload()
    }, bootstrap: function() {
      "function" == typeof this.flowObj.opts.initFileFn && this.flowObj.opts.initFileFn(this), this.abort(!0), this.error = !1, this._prevProgress = 0;
      for (var a = this.flowObj.opts.forceChunkSize ? Math.ceil : Math.floor, b = Math.max(a(this.size / this.flowObj.opts.chunkSize), 1), c = 0; b > c; c++)this.chunks.push(new g(this.flowObj, this, c))
    }, progress: function() {
      if (this.error)return 1;
      if (1 === this.chunks.length)return this._prevProgress = Math.max(this._prevProgress, this.chunks[0].progress()), this._prevProgress;
      var a = 0;
      l(this.chunks, function(b) {
        a += b.progress() * (b.endByte - b.startByte)
      });
      var b = a / this.size;
      return this._prevProgress = Math.max(this._prevProgress, b > .9999 ? 1 : b), this._prevProgress
    }, isUploading: function() {
      var a = !1;
      return l(this.chunks, function(b) {
        return "uploading" === b.status() ? (a = !0, !1) : void 0
      }), a
    }, isComplete: function() {
      var a = !1;
      return l(this.chunks, function(b) {
        var c = b.status();
        return "pending" === c || "uploading" === c || "reading" === c || 1 === b.preprocessState || 1 === b.readState ? (a = !0, !1) : void 0
      }), !a
    }, sizeUploaded: function() {
      var a = 0;
      return l(this.chunks, function(b) {
        a += b.sizeUploaded()
      }), a
    }, timeRemaining: function() {
      if (this.paused || this.error)return 0;
      var a = this.size - this.sizeUploaded();
      return a && !this.averageSpeed ? Number.POSITIVE_INFINITY : a || this.averageSpeed ? Math.floor(a / this.averageSpeed) : 0
    }, getType: function() {
      return this.file.type && this.file.type.split("/")[1]
    }, getExtension: function() {
      return this.name.substr((~-this.name.lastIndexOf(".") >>> 0) + 2).toLowerCase()
    }
  }, g.prototype = {
    getParams: function() {
      return {flowChunkNumber: this.offset + 1, flowChunkSize: this.flowObj.opts.chunkSize, flowCurrentChunkSize: this.endByte - this.startByte, flowTotalSize: this.fileObj.size, flowIdentifier: this.fileObj.uniqueIdentifier, flowFilename: this.fileObj.name, flowRelativePath: this.fileObj.relativePath, flowTotalChunks: this.fileObj.chunks.length}
    }, getTarget: function(a, b) {
      return a += a.indexOf("?") < 0 ? "?" : "&", a + b.join("&")
    }, test: function() {
      this.xhr = new XMLHttpRequest, this.xhr.addEventListener("load", this.testHandler, !1), this.xhr.addEventListener("error", this.testHandler, !1);
      var a = i(this.flowObj.opts.testMethod, this.fileObj, this), b = this.prepareXhrRequest(a, !0);
      this.xhr.send(b)
    }, preprocessFinished: function() {
      this.endByte = this.computeEndByte(), this.preprocessState = 2, this.send()
    }, readFinished: function(a) {
      this.readState = 2, this.bytes = a, this.send()
    }, send: function() {
      var a = this.flowObj.opts.preprocess, b = this.flowObj.opts.readFileFn;
      if ("function" == typeof a)switch (this.preprocessState) {
        case 0:
          return this.preprocessState = 1, void a(this);
        case 1:
          return
      }
      switch (this.readState) {
        case 0:
          return this.readState = 1, void b(this.fileObj, this.startByte, this.endByte, this.fileType, this);
        case 1:
          return
      }
      if (this.flowObj.opts.testChunks && !this.tested)return void this.test();
      this.loaded = 0, this.total = 0, this.pendingRetry = !1, this.xhr = new XMLHttpRequest, this.xhr.upload.addEventListener("progress", this.progressHandler, !1), this.xhr.addEventListener("load", this.doneHandler, !1), this.xhr.addEventListener("error", this.doneHandler, !1);
      var c = i(this.flowObj.opts.uploadMethod, this.fileObj, this), d = this.prepareXhrRequest(c, !1, this.flowObj.opts.method, this.bytes);
      this.xhr.send(d)
    }, abort: function() {
      var a = this.xhr;
      this.xhr = null, a && a.abort()
    }, status: function(a) {
      return 1 === this.readState ? "reading" : this.pendingRetry || 1 === this.preprocessState ? "uploading" : this.xhr ? this.xhr.readyState < 4 ? "uploading" : this.flowObj.opts.successStatuses.indexOf(this.xhr.status) > -1 ? "success" : this.flowObj.opts.permanentErrors.indexOf(this.xhr.status) > -1 || !a && this.retries >= this.flowObj.opts.maxChunkRetries ? "error" : (this.abort(), "pending") : "pending"
    }, message: function() {
      return this.xhr ? this.xhr.responseText : ""
    }, progress: function() {
      if (this.pendingRetry)return 0;
      var a = this.status();
      return "success" === a || "error" === a ? 1 : "pending" === a ? 0 : this.total > 0 ? this.loaded / this.total : 0
    }, sizeUploaded: function() {
      var a = this.endByte - this.startByte;
      return "success" !== this.status() && (a = this.progress() * a), a
    }, prepareXhrRequest: function(a, b, c, d) {
      var e = i(this.flowObj.opts.query, this.fileObj, this, b);
      e = k(e, this.getParams());
      var f = i(this.flowObj.opts.target, this.fileObj, this, b), g = null;
      if ("GET" === a || "octet" === c) {
        var h = [];
        l(e, function(a, b) {
          h.push([encodeURIComponent(b), encodeURIComponent(a)].join("="))
        }), f = this.getTarget(f, h), g = d || null
      } else g = new FormData, l(e, function(a, b) {
        g.append(b, a)
      }), g.append(this.flowObj.opts.fileParameterName, d, this.fileObj.file.name);
      return this.xhr.open(a, f, !0), this.xhr.withCredentials = this.flowObj.opts.withCredentials, l(i(this.flowObj.opts.headers, this.fileObj, this, b), function(a, b) {
        this.xhr.setRequestHeader(b, a)
      }, this), g
    }
  }, d.evalOpts = i, d.extend = k, d.each = l, d.FlowFile = e, d.FlowChunk = g, d.version = "2.10.1", "object" == typeof module && module && "object" == typeof module.exports ? module.exports = d : (a.Flow = d, "function" == typeof define && define.amd && define("flow", [], function() {
    return d
  }))
}(window, document);
!function e(r, t, n) {
  function o(a, l) {
    if (!t[a]) {
      if (!r[a]) {
        var c = "function" == typeof require && require;
        if (!l && c)return c(a, !0);
        if (i)return i(a, !0);
        var u = new Error("Cannot find module '" + a + "'");
        throw u.code = "MODULE_NOT_FOUND", u
      }
      var s = t[a] = {exports: {}};
      r[a][0].call(s.exports, function(e) {
        var t = r[a][1][e];
        return o(t ? t : e)
      }, s, s.exports, e, r, t, n)
    }
    return t[a].exports
  }

  for (var i = "function" == typeof require && require, a = 0; a < n.length; a++)o(n[a]);
  return o
}({
  1: [
    function(e, r, t) {
      "use strict";
      var n = e("./dragularModule");
      n.directive("dragular", [
        "dragularService", function(e) {
          return {
            restrict: "A", link: function(r, t, n) {
              function o(e) {
                try {
                  return JSON.parse(e)
                } catch (r) {
                  return void 0
                }
              }

              var i = r.$eval(n.dragular) || o(n.dragular) || {};
              n.dragularModel ? i = angular.extend({containersModel: r.$eval(n.dragularModel)}, i) : i && i.containersModel && "string" == typeof i.containersModel && (i.containersModel = r.$eval(i.containersModel)), e(t[0], i)
            }
          }
        }
      ])
    }, {"./dragularModule": 2}
  ], 2: [
    function(e, r, t) {
      "use strict";
      r.exports = angular.module("dragularModule", []), {dragularDirective: e("./dragularDirective.js"), dragularService: e("./dragularService.js")}
    }, {"./dragularDirective.js": 1, "./dragularService.js": 3}
  ], 3: [
    function(e, r, t) {
      "use strict";
      var n = e("./dragularModule");
      n.factory("dragularService", [
        "$rootScope", function(e) {
          function r(e, r, t, n) {
            var o = {mouseup: "touchend", mousedown: "touchstart", mousemove: "touchmove"}, i = angular.element(e);
            o[t] && i[r](o[t], n), i[r](t, n)
          }

          function t() {
            return !1
          }

          function n() {
            return !0
          }

          function o(e) {
            return e.width || e.right - e.left
          }

          function i(e) {
            return e.height || e.bottom - e.top
          }

          function a() {
            return {}
          }

          function l(e) {
            function r() {
              var r = e;
              do r = r.nextSibling; while (r && 1 !== r.nodeType);
              return r
            }

            return e.nextElementSibling || r()
          }

          function c(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
          }

          function u(e) {
            var r = y.classesCache[e];
            return r ? r.lastIndex = 0 : y.classesCache[e] = r = new RegExp("(?:^|\\s)" + e + "(?:\\s|$)", "g"), r
          }

          function s(e, r) {
            var t = e.className;
            t.length ? u(r).test(t) || (e.className += " " + r) : e.className = r
          }

          function d(e, r) {
            e.className = e.className.replace(u(r), " ").trim()
          }

          function m(e) {
            return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e
          }

          function f(e, r) {
            var t = m(r), n = {pageX: "clientX", pageY: "clientY"};
            return e in n && !(e in t) && n[e] in t && (e = n[e]), t.type.indexOf("touch") < 0 ? t[e] : t.type.indexOf("end") > -1 ? void 0 : t.originalEvent.touches[0][e.replace("client", "page")]
          }

          function g(e) {
            if (void 0 !== e.buttons)return e.buttons;
            if (void 0 !== e.which)return e.which;
            var r = e.button;
            return void 0 !== r ? 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0 : void 0
          }

          function p(e) {
            return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName
          }

          function v(e, r) {
            return Array.prototype.indexOf.call(angular.element(r).children(), e)
          }

          function h(e, r, t) {
            e && (y.extra = t, e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + r.eventType, r))
          }

          var y = {classesCache: {}, containersCtx: {}, containers: {}, mirror: null, source: null, item: null, copy: null, sourceItem: null, sourceModel: null, target: null, targetCtx: null, targetModel: null, lastDropTarget: null, offsetX: null, offsetY: null, moveX: null, moveY: null, offsetXr: null, offsetYb: null, clientX: null, clientY: null, mirrorWidth: null, mirrorHeight: null, initialSibling: null, currentSibling: null, initialIndex: null, currentIndex: null, isContainerModel: null, dragOverEvents: {}, lastElementBehindCursor: null, grabbed: null}, x = function(u, m) {
            function x(e, r) {
              return Array.isArray(e) ? e : e.length ? Array.prototype.slice.call(e, r) : [e]
            }

            function E(r) {
              e.$applyAsync(function() {
                var e = Array.isArray(r) ? r : x(r);
                e.forEach(function(e) {
                  angular.forEach(ne.nameSpace, function(r) {
                    var t;
                    t = y.containers[r].indexOf(e), y.containers[r].splice(t, 1), y.containersCtx[r].splice(t, 1)
                  })
                })
              })
            }

            function b(e) {
              var t = e ? "off" : "on";
              r(re, t, "mouseup", $), u.forEach(function(e) {
                r(e, "on", "mousedown", Y)
              })
            }

            function M(e) {
              var t = e ? "off" : "on";
              r(re, t, "mousemove", O)
            }

            function C(e) {
              var t = e ? "off" : "on";
              r(re, t, "selectstart", X), r(re, t, "click", X), r(re, t, "touchmove", X)
            }

            function S() {
              b(!0), E(u), $({})
            }

            function X(e) {
              y.grabbed && e.preventDefault()
            }

            function Y(e) {
              if (e = e || window.event, y.moveX = e.clientX, y.moveY = e.clientY, 1 === g(e) && !e.metaKey && !e.ctrlKey) {
                var r = T(e.target);
                r && r.item && (y.grabbed = r, M(), "mousedown" === e.type && (p(r.item) ? r.item.focus() : e.preventDefault()))
              }
            }

            function O(e) {
              if (y.grabbed && !oe.dragging) {
                if (0 === g(e))return void $({});
                if (e.clientX !== y.moveX || e.clientY !== y.moveY) {
                  if (ne.ignoreInputTextSelection) {
                    var r = f("clientX", e), t = f("clientY", e), n = document.elementFromPoint(r, t);
                    if (p(n))return
                  }
                  var o = y.grabbed;
                  if (M(!0), C(), A(), w(o), !ne.direction) {
                    var i = y.sourceItem.parentElement, a = i.offsetHeight, l = i.offsetWidth, c = y.sourceItem.clientHeight, u = y.sourceItem.clientWidth;
                    ne.direction = l / u > a / c ? "horizontal" : "vertical"
                  }
                  var d = Q(y.sourceItem);
                  y.offsetX = f("pageX", e) - d.left, y.offsetY = f("pageY", e) - d.top, y.clientX = f("clientX", e), y.clientY = f("clientY", e), ne.boundingBox && (y.offsetXr = f("pageX", e) - d.right, y.offsetYb = f("pageY", e) - d.bottom), e.preventDefault(), s(y.item, ne.classes.transit), U(), y.mirror.style.left = y.clientX - y.offsetX + "px", y.mirror.style.top = y.clientY - y.offsetY + "px", q(e)
                }
              }
            }

            function T(e) {
              if (!oe.dragging || !y.mirror) {
                for (var r = e; e.parentElement && !Z(e.parentElement);) {
                  if (ne.invalid(e, r))return;
                  if (e = e.parentElement, !e)return
                }
                var t = e.parentElement;
                if (t && !ne.invalid(e, r) && ne.moves(e, t, r, l(e)))return {item: e, source: t}
              }
            }

            function I(e) {
              var r = T(e);
              r && w(r)
            }

            function w(e) {
              y.sourceItem = y.item = e.item, y.source = e.source, y.initialSibling = y.currentSibling = l(e.item), J(e.item, e.source) ? (y.item = e.item.cloneNode(!0), y.copy = !0, ne.scope && ne.scope.$emit("dragularcloned", y.item, e.item)) : y.copy = !1;
              var r = u.indexOf(e.source);
              return y.sourceModel = ne.containersModel[r], y.initialIndex = v(e.item, e.source), oe.dragging = !0, ne.scope && ne.scope.$emit("dragulardrag", y.sourceItem, y.source), !0
            }

            function B() {
              return !1
            }

            function A() {
              oe.dragging && y.item && D(y.item, y.item.parentElement)
            }

            function N() {
              y.grabbed = !1, M(!0), C(!0)
            }

            function $(e) {
              if (N(), oe.dragging) {
                e = e || window.event, y.clientX = f("clientX", e), y.clientY = f("clientY", e);
                var r = V(y.mirror, y.clientX, y.clientY), t = R(r, y.clientX, y.clientY);
                t && (y.copy && ne.copySortSource || !y.copy || t !== y.source) ? D(y.item, t) : ne.removeOnSpill ? H() : j(), y.target = null, y.lastElementBehindCursor && h(y.lastElementBehindCursor, y.dragOverEvents.dragularrelease, r), ne.scope && ne.scope.$emit("dragularrelease", y.item, y.source)
              }
            }

            function D(r, t) {
              function n() {
                ne.scope && (L(t) ? ne.scope.$emit("dragularcancel", r, y.source, y.sourceModel, y.initialIndex) : ne.scope.$emit("dragulardrop", r, t, y.source, y.sourceModel, y.initialIndex, y.targetModel))
              }

              if (y.copy && ne.copySortSource && t === y.source && r.parentElement.removeChild(y.sourceItem), y.sourceModel && !L(t)) {
                var o = r, i = v(o, t);
                e.$applyAsync(function() {
                  t === y.source ? y.sourceModel.splice(i, 0, y.sourceModel.splice(y.initialIndex, 1)[0]) : (y.dropElmModel = y.copy ? angular.copy(y.sourceModel[y.initialIndex]) : y.sourceModel[y.initialIndex], y.targetModel = y.isContainerModel ? y.isContainerModel : y.targetCtx.m, t.removeChild(o), y.copy || y.sourceModel.splice(y.initialIndex, 1), y.targetModel.splice(i, 0, y.dropElmModel)), r.parentElement && r.parentElement.removeChild(r), n(), k()
                })
              } else n(), k()
            }

            function H() {
              if (oe.dragging) {
                var r = y.item.parentElement;
                r && r.removeChild(y.item), y.sourceModel && e.$applyAsync(function() {
                  y.sourceModel.splice(y.initialIndex, 1), k()
                }), ne.scope && ne.scope.$emit(y.copy ? "dragularcancel" : "dragularremove", y.item, r, y.sourceModel, y.initialIndex), y.sourceModel || k()
              }
            }

            function j(e) {
              if (oe.dragging) {
                var r = arguments.length > 0 ? e : ne.revertOnSpill, t = y.item.parentElement, n = L(t);
                n || y.copy || !r || y.source.insertBefore(y.item, y.initialSibling), !y.sourceModel || y.copy || r ? ne.scope && (n || r) && ne.scope.$emit("dragularcancel", y.item, y.source) : D(y.item, t), (!y.sourceModel || y.copy || r || n) && k()
              }
            }

            function k() {
              N(), z(), y.item && d(y.item, ne.classes.transit), oe.dragging = !1, ne.removeOnSpill === !0 && P(), ne.scope && (y.lastDropTarget && ne.scope.$emit("dragularout", y.item, y.lastDropTarget, y.source), ne.scope.$emit("dragulardragend", y.item)), y.source = y.item = y.sourceItem = y.initialSibling = y.currentSibling = y.sourceModel = null, y.initialIndex = y.currentIndex = y.lastDropTarget = y.isContainerModel = y.targetModel = null, y.dropElmModel = y.targetCtx = y.copy = y.moveX = y.moveY = null
            }

            function L(e, r) {
              var t = r || (y.mirror ? y.currentSibling : l(y.item));
              return e === y.source && t === y.initialSibling
            }

            function R(e, r, t) {
              function n() {
                var n = !1;
                if (Z(o)) {
                  for (var i = K(o, e), a = _(o, i, r, t), l = L(o, a), c = ne.nameSpace.length; c--;) {
                    if (-1 !== y.containers[ne.nameSpace[c]].indexOf(o)) {
                      y.targetCtx = y.containersCtx[ne.nameSpace[c]][y.containers[ne.nameSpace[c]].indexOf(o)];
                      break
                    }
                    y.targetCtx || (y.targetCtx = y.containersCtx.dragularCommon[y.containers.dragularCommon.indexOf(o)])
                  }
                  n = l || y.targetCtx.o.accepts(y.item, o, y.source, a, y.sourceModel, y.initialIndex) && ne.canBeAccepted(y.item, o, y.source, a, y.sourceModel, y.initialIndex), y.target !== o && (y.target = o)
                }
                return n
              }

              for (var o = e; o && !n();)o = o.parentElement;
              return o
            }

            function q(e) {
              function r(e) {
                ne.scope && ne.scope.$emit("dragular" + e, y.item, y.lastDropTarget, y.source), ne.removeOnSpill === !0 && ("over" === e ? W() : P())
              }

              function t() {
                m && r("over")
              }

              function n() {
                y.lastDropTarget && r("out")
              }

              if (y.mirror) {
                e = e || window.event, y.clientX = f("clientX", e), y.clientY = f("clientY", e);
                var o, i, a, c = y.clientX - y.offsetX, u = y.clientY - y.offsetY;
                ne.boundingBox && (o = f("pageX", e), i = f("pageY", e), a = Q(ne.boundingBox)), ne.lockY || (!ne.boundingBox || o > a.left + y.offsetX && o < a.right + y.offsetXr ? y.mirror.style.left = c + "px" : ne.boundingBox && (y.mirror.style.left = o < a.left + y.offsetX ? y.clientX - (o - a.left) + "px" : y.clientX - y.mirrorWidth - (o - a.right) + "px")), ne.lockX || (!ne.boundingBox || i > a.top + y.offsetY && i < a.bottom + y.offsetYb ? y.mirror.style.top = u + "px" : ne.boundingBox && (y.mirror.style.top = i < a.top + y.offsetY ? y.clientY - (i - a.top) + "px" : y.clientY - y.mirrorHeight - (i - a.bottom) + "px"));
                var s = V(y.mirror, y.clientX, y.clientY), d = R(s, y.clientX, y.clientY), m = d !== y.lastDropTarget;
                if (s !== y.lastElementBehindCursor && (h(s, y.dragOverEvents.dragularenter, !!d), y.lastElementBehindCursor && h(y.lastElementBehindCursor, y.dragOverEvents.dragularleave, s), y.lastElementBehindCursor = s), m && (n(), y.lastDropTarget = d, t()), d === y.source && y.copy && !ne.copySortSource)return void(y.item.parentElement && y.item.parentElement.removeChild(y.item));
                var g, p = K(d, s);
                if (null !== p)g = _(d, p, y.clientX, y.clientY); else {
                  if (ne.revertOnSpill !== !0 || y.copy)return void(y.copy && null !== y.item.parentElement && y.item.parentElement.removeChild(y.item));
                  g = y.initialSibling, d = y.source
                }
                (null === g || g !== y.item && g !== l(y.item) && g !== y.currentSibling) && (y.currentSibling = g, d.insertBefore(y.item, g), ne.scope && ne.scope.$emit("dragularshadow", y.item, d))
              }
            }

            function W() {
              d(y.item, ne.classes.hide)
            }

            function P() {
              oe.dragging && s(y.item, ne.classes.hide)
            }

            function F(e) {
              if (y.target) {
                var r = y.target.scrollTop;
                y.target.scrollTop += e.deltaY, r !== y.target.scrollTop && (e.stopPropagation(), e.preventDefault())
              }
            }

            function U() {
              if (!y.mirror) {
                var e = y.sourceItem.getBoundingClientRect();
                y.mirror = y.sourceItem.cloneNode(!0), y.mirrorWidth = e.width, y.mirrorHeight = e.height, y.mirror.style.width = o(e) + "px", y.mirror.style.height = i(e) + "px", d(y.mirror, ne.classes.transit), s(y.mirror, ne.classes.mirror), ne.mirrorContainer.appendChild(y.mirror), r(re, "on", "mousemove", q), s(ee, ne.classes.unselectable), r(y.mirror, "on", "wheel", F), ne.scope && ne.scope.$emit("dragularcloned", y.mirror, y.sourceItem)
              }
            }

            function z() {
              y.mirror && (d(ee, ne.classes.unselectable), r(re, "off", "mousemove", q), r(y.mirror, "off", "wheel", F), y.mirror.parentElement.removeChild(y.mirror), y.mirror = null)
            }

            function K(e, r) {
              for (var t = r; t !== e && t.parentElement !== e;)t = t.parentElement;
              return t === re ? null : t
            }

            function _(e, r, t, n) {
              function a() {
                var r, o, i, a = e.children.length;
                for (r = 0; a > r; r++) {
                  if (o = e.children[r], i = o.getBoundingClientRect(), s && i.left > t)return o;
                  if (!s && i.top > n)return o
                }
                return null
              }

              function c() {
                var e = r.getBoundingClientRect();
                return u(s ? t > e.left + o(e) / 2 : n > e.top + i(e) / 2)
              }

              function u(e) {
                return e ? l(r) : r
              }

              var s = "horizontal" === ne.direction, d = r !== e ? c() : a();
              return d
            }

            function J(e, r) {
              return "boolean" == typeof ne.copy ? ne.copy : ne.copy(e, r)
            }

            function G(e, r) {
              return "undefined" != typeof window[r] ? window[r] : re.clientHeight ? re[e] : ee[e]
            }

            function Q(e) {
              var r = e.getBoundingClientRect(), t = G("scrollTop", "pageYOffset"), n = G("scrollLeft", "pageXOffset");
              return {left: r.left + n, right: r.right + n, top: r.top + t, bottom: r.bottom + t}
            }

            function V(e, r, t) {
              var n, o = e || {}, i = o.className;
              return o.className += " " + ne.classes.hide, n = document.elementFromPoint(r, t), o.className = i, n
            }

            1 !== arguments.length || Array.isArray(u) || angular.isElement(u) || u[0] || "string" == typeof u ? "string" == typeof u && (u = document.querySelectorAll(u)) : (m = u, u = []);
            var Z, ee = document.body, re = document.documentElement, te = {mirror: "gu-mirror", hide: "gu-hide", unselectable: "gu-unselectable", transit: "gu-transit"}, ne = {dragOverEventNames: ["dragularenter", "dragularleave", "dragularrelease"], classes: te, containers: !1, moves: n, accepts: n, canBeAccepted: n, isContainer: t, copy: !1, invalid: B, revertOnSpill: !1, removeOnSpill: !1, lockX: !1, lockY: !1, boundingBox: !1, containersModel: !1, isContainerModel: a};
            c(ne.boundingBox) || (ne.boundingBox = null), m && m.classes && (angular.extend(te, m.classes), angular.extend(m.classes, te)), angular.extend(ne, m), ne.mirrorContainer || (ne.mirrorContainer = document.body), u = ne.containers || u || [], u = x(u), ne.containersModel = ne.containersModel ? Array.isArray(ne.containersModel[0]) ? ne.containersModel : [ne.containersModel] : [], ne.nameSpace || (ne.nameSpace = ["dragularCommon"]), Array.isArray(ne.nameSpace) || (ne.nameSpace = [ne.nameSpace]), ne.nameSpace.forEach(function(e) {
              y.containers[e] || (y.containers[e] = [], y.containersCtx[e] = []);
              for (var r = u.length, t = y.containers[e].length, n = 0; r > n; n++)y.containers[e][n + t] = u[n], y.containersCtx[e][n + t] = {o: ne, m: ne.containersModel[n]}
            }), b(), angular.forEach(ne.dragOverEventNames, function(e) {
              document.createEvent ? (y.dragOverEvents[e] = document.createEvent("HTMLEvents"), y.dragOverEvents[e].initEvent(e, !0, !0)) : (y.dragOverEvents[e] = document.createEventObject(), y.dragOverEvents[e].eventType = e)
            }), Z = function(e) {
              for (var r = ne.nameSpace.length; r--;)if (-1 !== y.containers[ne.nameSpace[r]].indexOf(e))return !0;
              return ne.isContainer(e) ? (y.isContainerModel = ne.isContainerModel(e), !0) : (y.isContainerModel = null, !1)
            };
            var oe = {containers: y.containers, containersCtx: y.containersCtx, isContainer: Z, start: I, end: A, cancel: j, remove: H, destroy: S, dragging: !1};
            return oe
          };
          return x.cleanEnviroment = function() {
            y.classesCache = {}, y.containersCtx = {}, y.containers = {}, y.mirror = void 0
          }, x.shared = y, x
        }
      ])
    }, {"./dragularModule": 2}
  ]
}, {}, [2]);
//# sourceMappingURL=dragular.min.js.map
/*! ng-dialog - v0.5.4 (https://github.com/likeastore/ngDialog) */
!function(a, b) {
  "undefined" != typeof module && module.exports ? "undefined" == typeof angular ? module.exports = b(require("angular")) : module.exports = b(angular) : "function" == typeof define && define.amd ? define(["ng-dialog"], function(c) {
    b(a.angular)
  }) : b(a.angular)
}(this, function(a) {
  "use strict";
  var b = a.module("ngDialog", []), c = a.element, d = a.isDefined, e = (document.body || document.documentElement).style, f = d(e.animation) || d(e.WebkitAnimation) || d(e.MozAnimation) || d(e.MsAnimation) || d(e.OAnimation), g = "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend", h = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]", i = "ngdialog-disabled-animation", j = {html: !1, body: !1}, k = {}, l = [], m = !1;
  return b.provider("ngDialog", function() {
    var b = this.defaults = {className: "ngdialog-theme-default", disableAnimation: !1, plain: !1, showClose: !0, closeByDocument: !0, closeByEscape: !0, closeByNavigation: !1, appendTo: !1, preCloseCallback: !1, overlay: !0, cache: !0, trapFocus: !0, preserveFocus: !0, ariaAuto: !0, ariaRole: null, ariaLabelledById: null, ariaLabelledBySelector: null, ariaDescribedById: null, ariaDescribedBySelector: null};
    this.setForceHtmlReload = function(a) {
      j.html = a || !1
    }, this.setForceBodyReload = function(a) {
      j.body = a || !1
    }, this.setDefaults = function(c) {
      a.extend(b, c)
    };
    var d, e = 0, n = 0, o = {};
    this.$get = [
      "$document", "$templateCache", "$compile", "$q", "$http", "$rootScope", "$timeout", "$window", "$controller", "$injector", function(p, q, r, s, t, u, v, w, x, y) {
        var z = [], A = {
          onDocumentKeydown: function(a) {
            27 === a.keyCode && B.close("$escape")
          }, activate: function(a) {
            var b = a.data("$ngDialogOptions");
            b.trapFocus && (a.on("keydown", A.onTrapFocusKeydown), z.body.on("keydown", A.onTrapFocusKeydown))
          }, deactivate: function(a) {
            a.off("keydown", A.onTrapFocusKeydown), z.body.off("keydown", A.onTrapFocusKeydown)
          }, deactivateAll: function(b) {
            a.forEach(b, function(b) {
              var c = a.element(b);
              A.deactivate(c)
            })
          }, setBodyPadding: function(a) {
            var b = parseInt(z.body.css("padding-right") || 0, 10);
            z.body.css("padding-right", b + a + "px"), z.body.data("ng-dialog-original-padding", b), u.$broadcast("ngDialog.setPadding", a)
          }, resetBodyPadding: function() {
            var a = z.body.data("ng-dialog-original-padding");
            a ? z.body.css("padding-right", a + "px") : z.body.css("padding-right", ""), u.$broadcast("ngDialog.setPadding", 0)
          }, performCloseDialog: function(a, b) {
            var c = a.data("$ngDialogOptions"), e = a.attr("id"), h = k[e];
            if (h) {
              if ("undefined" != typeof w.Hammer) {
                var i = h.hammerTime;
                i.off("tap", d), i.destroy && i.destroy(), delete h.hammerTime
              } else a.unbind("click");
              1 === n && z.body.unbind("keydown", A.onDocumentKeydown), a.hasClass("ngdialog-closing") || (n -= 1);
              var j = a.data("$ngDialogPreviousFocus");
              j && j.focus && j.focus(), u.$broadcast("ngDialog.closing", a, b), n = 0 > n ? 0 : n, f && !c.disableAnimation ? (h.$destroy(), a.unbind(g).bind(g, function() {
                A.closeDialogElement(a, b)
              }).addClass("ngdialog-closing")) : (h.$destroy(), A.closeDialogElement(a, b)), o[e] && (o[e].resolve({id: e, value: b, $dialog: a, remainingDialogs: n}), delete o[e]), k[e] && delete k[e], l.splice(l.indexOf(e), 1), l.length || (z.body.unbind("keydown", A.onDocumentKeydown), m = !1)
            }
          }, closeDialogElement: function(a, b) {
            a.remove(), 0 === n && (z.html.removeClass("ngdialog-open"), z.body.removeClass("ngdialog-open"), A.resetBodyPadding()), u.$broadcast("ngDialog.closed", a, b)
          }, closeDialog: function(b, c) {
            var d = b.data("$ngDialogPreCloseCallback");
            if (d && a.isFunction(d)) {
              var e = d.call(b, c);
              a.isObject(e) ? e.closePromise ? e.closePromise.then(function() {
                A.performCloseDialog(b, c)
              }) : e.then(function() {
                A.performCloseDialog(b, c)
              }, function() {
              }) : e !== !1 && A.performCloseDialog(b, c)
            } else A.performCloseDialog(b, c)
          }, onTrapFocusKeydown: function(b) {
            var c, d = a.element(b.currentTarget);
            if (d.hasClass("ngdialog"))c = d; else if (c = A.getActiveDialog(), null === c)return;
            var e = 9 === b.keyCode, f = b.shiftKey === !0;
            e && A.handleTab(c, b, f)
          }, handleTab: function(a, b, c) {
            var d = A.getFocusableElements(a);
            if (0 === d.length)return void(document.activeElement && document.activeElement.blur());
            var e = document.activeElement, f = Array.prototype.indexOf.call(d, e), g = -1 === f, h = 0 === f, i = f === d.length - 1, j = !1;
            c ? (g || h) && (d[d.length - 1].focus(), j = !0) : (g || i) && (d[0].focus(), j = !0), j && (b.preventDefault(), b.stopPropagation())
          }, autoFocus: function(a) {
            var b = a[0], d = b.querySelector("*[autofocus]");
            if (null === d || (d.focus(), document.activeElement !== d)) {
              var e = A.getFocusableElements(a);
              if (e.length > 0)return void e[0].focus();
              var f = A.filterVisibleElements(b.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));
              if (f.length > 0) {
                var g = f[0];
                c(g).attr("tabindex", "-1").css("outline", "0"), g.focus()
              }
            }
          }, getFocusableElements: function(a) {
            var b = a[0], c = b.querySelectorAll(h), d = A.filterTabbableElements(c);
            return A.filterVisibleElements(d)
          }, filterTabbableElements: function(a) {
            for (var b = [], d = 0; d < a.length; d++) {
              var e = a[d];
              "-1" !== c(e).attr("tabindex") && b.push(e)
            }
            return b
          }, filterVisibleElements: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
              var d = a[c];
              (d.offsetWidth > 0 || d.offsetHeight > 0) && b.push(d)
            }
            return b
          }, getActiveDialog: function() {
            var a = document.querySelectorAll(".ngdialog");
            return 0 === a.length ? null : c(a[a.length - 1])
          }, applyAriaAttributes: function(a, b) {
            if (b.ariaAuto) {
              if (!b.ariaRole) {
                var c = A.getFocusableElements(a).length > 0 ? "dialog" : "alertdialog";
                b.ariaRole = c
              }
              b.ariaLabelledBySelector || (b.ariaLabelledBySelector = "h1,h2,h3,h4,h5,h6"), b.ariaDescribedBySelector || (b.ariaDescribedBySelector = "article,section,p")
            }
            b.ariaRole && a.attr("role", b.ariaRole), A.applyAriaAttribute(a, "aria-labelledby", b.ariaLabelledById, b.ariaLabelledBySelector), A.applyAriaAttribute(a, "aria-describedby", b.ariaDescribedById, b.ariaDescribedBySelector)
          }, applyAriaAttribute: function(a, b, d, e) {
            if (d && a.attr(b, d), e) {
              var f = a.attr("id"), g = a[0].querySelector(e);
              if (!g)return;
              var h = f + "-" + b;
              return c(g).attr("id", h), a.attr(b, h), h
            }
          }, detectUIRouter: function() {
            try {
              return a.module("ui.router"), !0
            } catch (b) {
              return !1
            }
          }, getRouterLocationEventName: function() {
            return A.detectUIRouter() ? "$stateChangeSuccess" : "$locationChangeSuccess"
          }
        }, B = {
          open: function(f) {
            function g(a, b) {
              return u.$broadcast("ngDialog.templateLoading", a), t.get(a, b || {}).then(function(b) {
                return u.$broadcast("ngDialog.templateLoaded", a), b.data || ""
              })
            }

            function h(b) {
              return b ? a.isString(b) && j.plain ? b : "boolean" != typeof j.cache || j.cache ? g(b, {cache: q}) : g(b, {cache: !1}) : "Empty template"
            }

            var j = a.copy(b), p = ++e, C = "ngdialog" + p;
            l.push(C), f = f || {}, a.extend(j, f);
            var D;
            o[C] = D = s.defer();
            var E;
            k[C] = E = a.isObject(j.scope) ? j.scope.$new() : u.$new();
            var F, G, H = a.extend({}, j.resolve);
            return a.forEach(H, function(b, c) {
              H[c] = a.isString(b) ? y.get(b) : y.invoke(b, null, null, c)
            }), s.all({template: h(j.template || j.templateUrl), locals: s.all(H)}).then(function(b) {
              var e = b.template, f = b.locals;
              j.showClose && (e += '<div class="ngdialog-close"></div>');
              var g = j.overlay ? "" : " ngdialog-no-overlay";
              if (F = c('<div id="ngdialog' + p + '" class="ngdialog' + g + '"></div>'), F.html(j.overlay ? '<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">' + e + "</div>" : '<div class="ngdialog-content" role="document">' + e + "</div>"), F.data("$ngDialogOptions", j), E.ngDialogId = C, j.data && a.isString(j.data)) {
                var h = j.data.replace(/^\s*/, "")[0];
                E.ngDialogData = "{" === h || "[" === h ? a.fromJson(j.data) : j.data, E.ngDialogData.ngDialogId = C
              } else j.data && a.isObject(j.data) && (E.ngDialogData = j.data, E.ngDialogData.ngDialogId = C);
              if (j.className && F.addClass(j.className), j.disableAnimation && F.addClass(i), G = j.appendTo && a.isString(j.appendTo) ? a.element(document.querySelector(j.appendTo)) : z.body, A.applyAriaAttributes(F, j), j.preCloseCallback) {
                var k;
                a.isFunction(j.preCloseCallback) ? k = j.preCloseCallback : a.isString(j.preCloseCallback) && E && (a.isFunction(E[j.preCloseCallback]) ? k = E[j.preCloseCallback] : E.$parent && a.isFunction(E.$parent[j.preCloseCallback]) ? k = E.$parent[j.preCloseCallback] : u && a.isFunction(u[j.preCloseCallback]) && (k = u[j.preCloseCallback])), k && F.data("$ngDialogPreCloseCallback", k)
              }
              if (E.closeThisDialog = function(a) {
                  A.closeDialog(F, a)
                }, j.controller && (a.isString(j.controller) || a.isArray(j.controller) || a.isFunction(j.controller))) {
                var l;
                j.controllerAs && a.isString(j.controllerAs) && (l = j.controllerAs);
                var o = x(j.controller, a.extend(f, {$scope: E, $element: F}), null, l);
                F.data("$ngDialogControllerController", o)
              }
              if (v(function() {
                  var a = document.querySelectorAll(".ngdialog");
                  A.deactivateAll(a), r(F)(E);
                  var b = w.innerWidth - z.body.prop("clientWidth");
                  z.html.addClass("ngdialog-open"), z.body.addClass("ngdialog-open");
                  var c = b - (w.innerWidth - z.body.prop("clientWidth"));
                  c > 0 && A.setBodyPadding(c), G.append(F), A.activate(F), j.trapFocus && A.autoFocus(F), j.name ? u.$broadcast("ngDialog.opened", {dialog: F, name: j.name}) : u.$broadcast("ngDialog.opened", F)
                }), m || (z.body.bind("keydown", A.onDocumentKeydown), m = !0), j.closeByNavigation) {
                var q = A.getRouterLocationEventName();
                u.$on(q, function() {
                  A.closeDialog(F)
                })
              }
              if (j.preserveFocus && F.data("$ngDialogPreviousFocus", document.activeElement), d = function(a) {
                  var b = j.closeByDocument ? c(a.target).hasClass("ngdialog-overlay") : !1, d = c(a.target).hasClass("ngdialog-close");
                  (b || d) && B.close(F.attr("id"), d ? "$closeButton" : "$document")
                }, "undefined" != typeof w.Hammer) {
                var s = E.hammerTime = w.Hammer(F[0]);
                s.on("tap", d)
              } else F.bind("click", d);
              return n += 1, B
            }), {
              id: C, closePromise: D.promise, close: function(a) {
                A.closeDialog(F, a)
              }
            }
          }, openConfirm: function(b) {
            var d = s.defer(), e = {closeByEscape: !1, closeByDocument: !1};
            a.extend(e, b), e.scope = a.isObject(e.scope) ? e.scope.$new() : u.$new(), e.scope.confirm = function(a) {
              d.resolve(a);
              var b = c(document.getElementById(f.id));
              A.performCloseDialog(b, a)
            };
            var f = B.open(e);
            return f.closePromise.then(function(a) {
              return a ? d.reject(a.value) : d.reject()
            }), d.promise
          }, isOpen: function(a) {
            var b = c(document.getElementById(a));
            return b.length > 0
          }, close: function(a, b) {
            var d = c(document.getElementById(a));
            if (d.length)A.closeDialog(d, b); else if ("$escape" === a) {
              var e = l[l.length - 1];
              d = c(document.getElementById(e)), d.data("$ngDialogOptions").closeByEscape && A.closeDialog(d, "$escape")
            } else B.closeAll(b);
            return B
          }, closeAll: function(a) {
            for (var b = document.querySelectorAll(".ngdialog"), d = b.length - 1; d >= 0; d--) {
              var e = b[d];
              A.closeDialog(c(e), a)
            }
          }, getOpenDialogs: function() {
            return l
          }, getDefaults: function() {
            return b
          }
        };
        return a.forEach(["html", "body"], function(a) {
          if (z[a] = p.find(a), j[a]) {
            var b = A.getRouterLocationEventName();
            u.$on(b, function() {
              z[a] = p.find(a)
            })
          }
        }), B
      }
    ]
  }), b.directive("ngDialog", [
    "ngDialog", function(b) {
      return {
        restrict: "A", scope: {ngDialogScope: "="}, link: function(c, d, e) {
          d.on("click", function(d) {
            d.preventDefault();
            var f = a.isDefined(c.ngDialogScope) ? c.ngDialogScope : "noScope";
            a.isDefined(e.ngDialogClosePrevious) && b.close(e.ngDialogClosePrevious);
            var g = b.getDefaults();
            b.open({template: e.ngDialog, className: e.ngDialogClass || g.className, controller: e.ngDialogController, controllerAs: e.ngDialogControllerAs, bindToController: e.ngDialogBindToController, scope: f, data: e.ngDialogData, showClose: "false" === e.ngDialogShowClose ? !1 : "true" === e.ngDialogShowClose ? !0 : g.showClose, closeByDocument: "false" === e.ngDialogCloseByDocument ? !1 : "true" === e.ngDialogCloseByDocument ? !0 : g.closeByDocument, closeByEscape: "false" === e.ngDialogCloseByEscape ? !1 : "true" === e.ngDialogCloseByEscape ? !0 : g.closeByEscape, overlay: "false" === e.ngDialogOverlay ? !1 : "true" === e.ngDialogOverlay ? !0 : g.overlay, preCloseCallback: e.ngDialogPreCloseCallback || g.preCloseCallback})
          })
        }
      }
    }
  ]), b
});
/*!
 * Angular Datepicker v0.2.12
 *
 * Released by 720kb.net under the MIT license
 * www.opensource.org/licenses/MIT
 *
 * 2015-10-07
 */

!function(a, b) {
  "use strict";
  var c = 864e5, d = function() {
    return b.userAgent && (b.userAgent.match(/Android/i) || b.userAgent.match(/webOS/i) || b.userAgent.match(/iPhone/i) || b.userAgent.match(/iPad/i) || b.userAgent.match(/iPod/i) || b.userAgent.match(/BlackBerry/i) || b.userAgent.match(/Windows Phone/i)) ? !0 : void 0
  }(), e = function(a, b) {
    return d ? ['<div class="_720kb-datepicker-calendar-header">', '<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">', '<select ng-model="month" title="{{ dateMonthTitle }}" ng-change="selectedMonthHandle(month)">', '<option ng-repeat="item in months" ng-selected="month === item" ng-disabled=\'!isSelectableMaxDate(item + " " + day + ", " + year) || !isSelectableMinDate(item + " " + day + ", " + year)\' ng-value="item">', "{{ item }}", "</option>", "</select>", "</div>", "</div>", '<div class="_720kb-datepicker-calendar-header">', '<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">', '<select ng-model="mobileYear" title="{{ dateYearTitle }}" ng-change="setNewYear(mobileYear)">', '<option ng-repeat="item in paginationYears" ng-selected="year === item" ng-value="item" ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)">', "{{ item }}", "</option>", "</select>", "</div>", "</div>"] : ['<div class="_720kb-datepicker-calendar-header">', '<div class="_720kb-datepicker-calendar-header-left">', '<a href="javascript:void(0)" ng-click="prevMonth()" title="{{ buttonPrevTitle }}">', a, "</a>", "</div>", '<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month">', "{{month}}&nbsp;", '<a href="javascript:void(0)" ng-click="showYearsPagination = !showYearsPagination">', "<span>", "{{year}}", "<i ng-class=\"{'_720kb-datepicker-calendar-header-closed-pagination': !showYearsPagination, '_720kb-datepicker-calendar-header-opened-pagination': showYearsPagination}\"></i>", "</span>", "</a>", "</div>", '<div class="_720kb-datepicker-calendar-header-right">', '<a href="javascript:void(0)" ng-click="nextMonth()" title="{{ buttonNextTitle }}">', b, "</a>", "</div>", "</div>"]
  }, f = function(a, b) {
    return ['<div class="_720kb-datepicker-calendar-header" ng-show="showYearsPagination">', '<div class="_720kb-datepicker-calendar-years-pagination">', '<a ng-class="{\'_720kb-datepicker-active\': y === year, \'_720kb-datepicker-disabled\': !isSelectableMaxYear(y) || !isSelectableMinYear(y)}" href="javascript:void(0)" ng-click="setNewYear(y)" ng-repeat="y in paginationYears">', "{{y}}", "</a>", "</div>", '<div class="_720kb-datepicker-calendar-years-pagination-pages">', '<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[0])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsPrevDisabled}">', a, "</a>", '<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[paginationYears.length -1 ])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsNextDisabled}">', b, "</a>", "</div>", "</div>"]
  }, g = function() {
    return ['<div class="_720kb-datepicker-calendar-days-header">', '<div ng-repeat="d in daysInString">', "{{d}}", "</div>", "</div>"]
  }, h = function() {
    return ['<div class="_720kb-datepicker-calendar-body">', '<a href="javascript:void(0)" ng-repeat="px in prevMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">', "{{px}}", "</a>", "<a href=\"javascript:void(0)\" ng-repeat=\"item in days\" ng-click=\"setDatepickerDay(item)\" ng-class=\"{'_720kb-datepicker-active': day === item, '_720kb-datepicker-disabled': !isSelectableMinDate(year + '/' + monthNumber + '/' + item ) || !isSelectableMaxDate(year + '/' + monthNumber + '/' + item) || !isSelectableDate(monthNumber, year, item)}\" class=\"_720kb-datepicker-calendar-day\">", "{{item}}", "</a>", '<a href="javascript:void(0)" ng-repeat="nx in nextMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">', "{{nx}}", "</a>", "</div>"]
  }, i = function(a, b) {
    var c = ['<div class="_720kb-datepicker-calendar" ng-blur="hideCalendar()">', "</div>"], d = e(a, b), i = f(a, b), j = g(), k = h(), l = function(a) {
      c.splice(c.length - 1, 0, a)
    };
    return d.forEach(l), i.forEach(l), j.forEach(l), k.forEach(l), c.join("")
  }, j = function(b, e, f, g, h) {
    var j = function(j, k, l) {
      var m, n, o = l.selector, p = a.element(o ? k[0].querySelector("." + o) : k[0].children[0]), q = '<b class="datepicker-default-button">&lang;</b>', r = '<b class="datepicker-default-button">&rang;</b>', s = l.buttonPrev || q, t = l.buttonNext || r, u = l.dateFormat, v = j.dateDisabledDates, w = new Date, x = g("date")(w, "M"), y = !1, z = !1, A = f.DATETIME_FORMATS, B = i(s, t), C = function() {
        j.month = g("date")(new Date(j.dateMinLimit), "MMMM"), j.monthNumber = Number(g("date")(new Date(j.dateMinLimit), "MM")), j.day = Number(g("date")(new Date(j.dateMinLimit), "dd")), j.year = Number(g("date")(new Date(j.dateMinLimit), "yyyy"))
      }, D = function() {
        j.month = g("date")(new Date(j.dateMaxLimit), "MMMM"), j.monthNumber = Number(g("date")(new Date(j.dateMaxLimit), "MM")), j.day = Number(g("date")(new Date(j.dateMaxLimit), "dd")), j.year = Number(g("date")(new Date(j.dateMaxLimit), "yyyy"))
      }, E = function() {
        j.year = Number(j.year) - 1
      }, F = function() {
        j.year = Number(j.year) + 1
      }, G = function() {
        if (!j.isSelectableMinDate(j.year + "/" + j.monthNumber + "/" + j.day) || !j.isSelectableMaxDate(j.year + "/" + j.monthNumber + "/" + j.day))return !1;
        var a = new Date(j.year + "/" + j.monthNumber + "/" + j.day);
        l.dateFormat ? p.val(g("date")(a, u)) : p.val(a), p.triggerHandler("input"), p.triggerHandler("change")
      }, H = {
        add: function(a, b) {
          var c;
          a.className.indexOf(b) > -1 || (c = a.className.split(" "), c.push(b), a.className = c.join(" "))
        }, remove: function(a, b) {
          var c, d;
          if (-1 !== a.className.indexOf(b)) {
            for (d = a.className.split(" "), c = 0; c < d.length; c += 1)if (d[c] === b) {
              d = d.slice(0, c).concat(d.slice(c + 1));
              break
            }
            a.className = d.join(" ")
          }
        }
      }, I = function() {
        n = b.document.getElementsByClassName("_720kb-datepicker-calendar"), a.forEach(n, function(a, b) {
          n[b].classList ? n[b].classList.remove("_720kb-datepicker-open") : H.remove(n[b], "_720kb-datepicker-open")
        }), m.classList ? m.classList.add("_720kb-datepicker-open") : H.add(m, "_720kb-datepicker-open")
      }, J = function(a, b) {
        var c, d, e, f, g = new Date(b, a, 0).getDate(), h = new Date(b + "/" + a + "/1").getDay(), i = new Date(b + "/" + a + "/" + g).getDay(), k = [], l = [];
        for (j.days = [], c = 1; g >= c; c += 1)j.days.push(c);
        if (0 === h)j.prevMonthDays = []; else {
          for (e = h, f = 1 === Number(a) ? 12 : a - 1, c = 1; c <= new Date(b, f, 0).getDate(); c += 1)k.push(c);
          j.prevMonthDays = k.slice(-e)
        }
        if (6 > i) {
          for (d = 6 - i, c = 1; d >= c; c += 1)l.push(c);
          j.nextMonthDays = l
        } else j.nextMonthDays = []
      }, K = j.$watch("dateSet", function(a) {
        a && (w = new Date(a), j.month = g("date")(w, "MMMM"), j.monthNumber = Number(g("date")(w, "MM")), j.day = Number(g("date")(w, "dd")), j.year = Number(g("date")(w, "yyyy")), J(j.monthNumber, j.year), "true" !== j.dateSetHidden && G())
      });
      j.nextMonth = function() {
        12 === j.monthNumber ? (j.monthNumber = 1, F()) : j.monthNumber += 1, j.month = g("date")(new Date(j.year, j.monthNumber - 1), "MMMM"), J(j.monthNumber, j.year), j.dateMaxLimit && x > j.monthNumber && (j.isSelectableMaxDate(j.year + "/" + j.monthNumber + "/" + j.day) || D()), j.day = void 0
      }, j.prevMonth = function() {
        1 === j.monthNumber ? (j.monthNumber = 12, E()) : j.monthNumber -= 1, j.month = g("date")(new Date(j.year, j.monthNumber - 1), "MMMM"), J(j.monthNumber, j.year), j.dateMinLimit && (j.isSelectableMinDate(j.year + "/" + j.monthNumber + "/" + j.day) || C()), j.day = void 0
      }, j.selectedMonthHandle = function(a) {
        j.monthNumber = Number(g("date")(new Date("01 " + a + " 2000"), "MM")), J(j.monthNumber, j.year), G()
      }, j.setNewYear = function(a) {
        if (j.day = void 0, j.dateMaxLimit && j.year < Number(a)) {
          if (!j.isSelectableMaxYear(a))return
        } else if (j.dateMinLimit && j.year > Number(a) && !j.isSelectableMinYear(a))return;
        j.year = Number(a), J(j.monthNumber, j.year), j.paginateYears(a)
      }, j.hideCalendar = function() {
        m.classList ? m.classList.remove("_720kb-datepicker-open") : H.remove(m, "_720kb-datepicker-open")
      }, j.setDatepickerDay = function(a) {
        j.isSelectableDate(j.monthNumber, j.year, a) && j.isSelectableMaxDate(j.year + "/" + j.monthNumber + "/" + a) && j.isSelectableMinDate(j.year + "/" + j.monthNumber + "/" + a) && (j.day = Number(a), G(), j.hideCalendar())
      }, j.paginateYears = function(a) {
        var b, c = [], e = 10, f = 10;
        for (j.paginationYears = [], d && (e = 50, f = 50, j.dateMinLimit && j.dateMaxLimit && (a = new Date(j.dateMaxLimit).getFullYear(), e = a - new Date(j.dateMinLimit).getFullYear(), f = 1)), b = e; b > 0; b -= 1)c.push(Number(a) - b);
        for (b = 0; f > b; b += 1)c.push(Number(a) + b);
        j.dateMaxLimit && c && c.length && !j.isSelectableMaxYear(Number(c[c.length - 1]) + 1) ? j.paginationYearsNextDisabled = !0 : j.paginationYearsNextDisabled = !1, j.dateMinLimit && c && c.length && !j.isSelectableMinYear(Number(c[0]) - 1) ? j.paginationYearsPrevDisabled = !0 : j.paginationYearsPrevDisabled = !1, j.paginationYears = c
      }, j.isSelectableDate = function(a, b, c) {
        var d = 0;
        if (v && v.length > 0)for (d; d <= v.length; d += 1)if (new Date(v[d]).getTime() === new Date(a + "/" + c + "/" + b).getTime())return !1;
        return !0
      }, j.isSelectableMinDate = function(a) {
        return j.dateMinLimit && new Date(j.dateMinLimit) && new Date(a).getTime() < new Date(j.dateMinLimit).getTime() ? !1 : !0
      }, j.isSelectableMaxDate = function(a) {
        return j.dateMaxLimit && new Date(j.dateMaxLimit) && new Date(a).getTime() > new Date(j.dateMaxLimit).getTime() ? !1 : !0
      }, j.isSelectableMaxYear = function(a) {
        return j.dateMaxLimit && a > new Date(j.dateMaxLimit).getFullYear() ? !1 : !0
      }, j.isSelectableMinYear = function(a) {
        return j.dateMinLimit && a < new Date(j.dateMinLimit).getFullYear() ? !1 : !0
      }, B = B.replace(/{{/g, h.startSymbol()).replace(/}}/g, h.endSymbol()), j.dateMonthTitle = j.dateMonthTitle || "Select month", j.dateYearTitle = j.dateYearTitle || "Select year", j.buttonNextTitle = j.buttonNextTitle || "Next", j.buttonPrevTitle = j.buttonPrevTitle || "Prev", j.month = g("date")(w, "MMMM"), j.monthNumber = Number(g("date")(w, "MM")), j.day = Number(g("date")(w, "dd")), j.dateMaxLimit ? j.year = Number(g("date")(new Date(j.dateMaxLimit), "yyyy")) : j.year = Number(g("date")(w, "yyyy")), j.months = A.MONTH, j.daysInString = ["0", "1", "2", "3", "4", "5", "6"].map(function(a) {
        return g("date")(new Date(new Date("06/08/2014").valueOf() + c * a), "EEE")
      }), p.after(e(a.element(B))(j)), m = k[0].querySelector("._720kb-datepicker-calendar"), p.on("focus click", function() {
        z = !0, I()
      }), p.on("focusout blur", function() {
        z = !1
      }), a.element(m).on("mouseenter", function() {
        y = !0
      }), a.element(m).on("mouseleave", function() {
        y = !1
      }), a.element(m).on("focusin", function() {
        y = !0
      }), a.element(b).on("click focus", function() {
        y || z || !m || j.hideCalendar()
      }), j.dateMinLimit && !j.isSelectableMinYear(j.year) && C(), j.dateMaxLimit && !j.isSelectableMaxYear(j.year) && D(), j.paginateYears(j.year), J(j.monthNumber, j.year), j.$on("$destroy", function() {
        K(), p.off("focus click focusout blur"), a.element(m).off("mouseenter mouseleave focusin"), a.element(b).off("click focus")
      }), l.hasOwnProperty("visibleOnLoad") && I()
    };
    return {restrict: "AEC", scope: {dateSet: "@", dateMinLimit: "@", dateMaxLimit: "@", dateMonthTitle: "@", dateYearTitle: "@", buttonNextTitle: "@", buttonPrevTitle: "@", dateDisabledDates: "@", dateSetHidden: "@"}, link: j}
  };
  a.module("720kb.datepicker", []).directive("datepicker", ["$window", "$compile", "$locale", "$filter", "$interpolate", j])
}(angular, navigator);
//# sourceMappingURL=angular-datepicker.sourcemap.map
/*! ng-notifications-bar - v0.0.14 (http://beletsky.net/ng-notifications-bar/) */
!function(root, factory) {
  "object" == typeof exports ? module.exports = factory(root, require("angular")) : "function" == typeof define && define.amd ? define(["angular"], function(angular) {
    return root.ngNotificationsBar = factory(root, angular)
  }) : root.ngNotificationsBar = factory(root, root.angular)
}(this, function(window, angular) {
  var module = angular.module("ngNotificationsBar", []);
  return module.provider("notificationsConfig", function() {
    function setHideDelay(value) {
      config.hideDelay = value
    }

    function getHideDelay() {
      return config.hideDelay
    }

    function setAcceptHTML(value) {
      config.acceptHTML = value
    }

    function getAcceptHTML() {
      return config.acceptHTML
    }

    function setAutoHide(value) {
      config.autoHide = value
    }

    function getAutoHide() {
      return config.autoHide
    }

    var config = {};
    return {
      setHideDelay: setHideDelay, setAutoHide: setAutoHide, setAcceptHTML: setAcceptHTML, $get: function() {
        return {getHideDelay: getHideDelay, getAutoHide: getAutoHide, getAcceptHTML: getAcceptHTML}
      }
    }
  }), module.factory("notifications", [
    "$rootScope", function($rootScope) {
      var showError = function(message) {
        $rootScope.$broadcast("notifications:error", message)
      }, showWarning = function(message) {
        $rootScope.$broadcast("notifications:warning", message)
      }, showSuccess = function(message) {
        $rootScope.$broadcast("notifications:success", message)
      }, closeAll = function() {
        $rootScope.$broadcast("notifications:closeAll")
      };
      return {showError: showError, showWarning: showWarning, showSuccess: showSuccess, closeAll: closeAll}
    }
  ]), module.directive("notificationsBar", [
    "notificationsConfig", "$timeout", function(notificationsConfig, $timeout) {
      return {
        restrict: "EA", template: function(elem, attr) {
          var acceptHTML = notificationsConfig.getAcceptHTML() || !1, iconClasses = attr.closeicon || "glyphicon glyphicon-remove";
          return acceptHTML ? '					<div class="notifications-container" ng-if="notifications.length">						<div class="{{note.type}}" ng-repeat="note in notifications">							<span class="message" ng-bind-html="note.message"></span>							<span class="' + iconClasses + ' close-click" ng-click="close($index)"></span>						</div>					</div>				' : '					<div class="notifications-container" ng-if="notifications.length">						<div class="{{note.type}}" ng-repeat="note in notifications">							<span class="message" >{{note.message}}</span>							<span class="' + iconClasses + ' close-click" ng-click="close($index)"></span>						</div>					</div>				'
        }, link: function(scope) {
          var notifications = scope.notifications = [], autoHideDelay = notificationsConfig.getHideDelay() || 3e3, autoHide = notificationsConfig.getAutoHide() || !1, removeById = function(id) {
            var found = -1;
            notifications.forEach(function(el, index) {
              el.id === id && (found = index)
            }), found >= 0 && notifications.splice(found, 1)
          }, notificationHandler = function(event, data, type) {
            var message, hide = autoHide, hideDelay = autoHideDelay;
            "object" == typeof data ? (message = data.message, hide = "undefined" == typeof data.hide ? autoHide : !!data.hide, hideDelay = data.hideDelay || hideDelay) : message = data;
            var id = "notif_" + (new Date).getTime();
            if (notifications.push({id: id, type: type, message: message}), hide)var timer = $timeout(function() {
              removeById(id), $timeout.cancel(timer)
            }, hideDelay)
          };
          scope.$on("notifications:error", function(event, data) {
            notificationHandler(event, data, "error")
          }), scope.$on("notifications:warning", function(event, data) {
            notificationHandler(event, data, "warning")
          }), scope.$on("notifications:success", function(event, data) {
            notificationHandler(event, data, "success")
          }), scope.$on("notifications:closeAll", function() {
            notifications.length = 0
          }), scope.close = function(index) {
            notifications.splice(index, 1)
          }
        }
      }
    }
  ]), module
});
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
  module.exports = 'treeControl';
}
(function(angular) {
  'use strict';

  angular.module('treeControl', [])
    .constant('treeConfig', {
      templateUrl: null
    })
    .directive('treecontrol', [
      '$compile', function($compile) {
        /**
         * @param cssClass - the css class
         * @param addClassProperty - should we wrap the class name with class=""
         */
        function classIfDefined(cssClass, addClassProperty) {
          if (cssClass) {
            if (addClassProperty)
              return 'class="' + cssClass + '"';
            else
              return cssClass;
          }
          else
            return "";
        }

        function ensureDefault(obj, prop, value) {
          if (!obj.hasOwnProperty(prop))
            obj[prop] = value;
        }

        return {
          restrict: 'EA',
          require: "treecontrol",
          transclude: true,
          scope: {
            treeModel: "=",
            selectedNode: "=?",
            selectedNodes: "=?",
            expandedNodes: "=?",
            onSelection: "&",
            onNodeToggle: "&",
            options: "=?",
            orderBy: "@",
            reverseOrder: "@",
            filterExpression: "=?",
            filterComparator: "=?"
          },
          controller: [
            '$scope', '$templateCache', '$interpolate', 'treeConfig', function($scope, $templateCache, $interpolate, treeConfig) {

              function defaultIsLeaf(node) {
                return !node[$scope.options.nodeChildren] || node[$scope.options.nodeChildren].length === 0;
              }

              function shallowCopy(src, dst) {
                if (angular.isArray(src)) {
                  dst = dst || [];

                  for (var i = 0; i < src.length; i++) {
                    dst[i] = src[i];
                  }
                } else if (angular.isObject(src)) {
                  dst = dst || {};

                  for (var key in src) {
                    if (hasOwnProperty.call(src, key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
                      dst[key] = src[key];
                    }
                  }
                }

                return dst || src;
              }

              function defaultEquality(a, b) {
                if (a === undefined || b === undefined)
                  return false;
                a = shallowCopy(a);
                a[$scope.options.nodeChildren] = [];
                b = shallowCopy(b);
                b[$scope.options.nodeChildren] = [];
                return angular.equals(a, b);
              }

              function defaultIsSelectable() {
                return true;
              }

              $scope.options = $scope.options || {};
              ensureDefault($scope.options, "multiSelection", false);
              ensureDefault($scope.options, "nodeChildren", "children");
              ensureDefault($scope.options, "dirSelectable", "true");
              ensureDefault($scope.options, "injectClasses", {});
              ensureDefault($scope.options.injectClasses, "ul", "");
              ensureDefault($scope.options.injectClasses, "li", "");
              ensureDefault($scope.options.injectClasses, "liSelected", "");
              ensureDefault($scope.options.injectClasses, "iExpanded", "");
              ensureDefault($scope.options.injectClasses, "iCollapsed", "");
              ensureDefault($scope.options.injectClasses, "iLeaf", "");
              ensureDefault($scope.options.injectClasses, "label", "");
              ensureDefault($scope.options.injectClasses, "labelSelected", "");
              ensureDefault($scope.options, "equality", defaultEquality);
              ensureDefault($scope.options, "isLeaf", defaultIsLeaf);
              ensureDefault($scope.options, "allowDeselect", true);
              ensureDefault($scope.options, "isSelectable", defaultIsSelectable);

              $scope.selectedNodes = $scope.selectedNodes || [];
              $scope.expandedNodes = $scope.expandedNodes || [];
              $scope.expandedNodesMap = {};
              for (var i = 0; i < $scope.expandedNodes.length; i++) {
                $scope.expandedNodesMap["" + i] = $scope.expandedNodes[i];
              }
              $scope.parentScopeOfTree = $scope.$parent;

              function isSelectedNode(node) {
                if (!$scope.options.multiSelection && ($scope.options.equality(node, $scope.selectedNode)))
                  return true;
                else if ($scope.options.multiSelection && $scope.selectedNodes) {
                  for (var i = 0; (i < $scope.selectedNodes.length); i++) {
                    if ($scope.options.equality(node, $scope.selectedNodes[i])) {
                      return true;
                    }
                  }
                  return false;
                }
              }

              $scope.headClass = function(node) {
                var liSelectionClass = classIfDefined($scope.options.injectClasses.liSelected, false);
                var injectSelectionClass = "";
                if (liSelectionClass && isSelectedNode(node))
                  injectSelectionClass = " " + liSelectionClass;
                if ($scope.options.isLeaf(node))
                  return "tree-leaf" + injectSelectionClass;
                if ($scope.expandedNodesMap[this.$id])
                  return "tree-expanded" + injectSelectionClass;
                else
                  return "tree-collapsed" + injectSelectionClass;
              };

              $scope.iBranchClass = function() {
                if ($scope.expandedNodesMap[this.$id])
                  return classIfDefined($scope.options.injectClasses.iExpanded);
                else
                  return classIfDefined($scope.options.injectClasses.iCollapsed);
              };

              $scope.nodeExpanded = function() {
                return !!$scope.expandedNodesMap[this.$id];
              };

              $scope.selectNodeHead = function() {
                var transcludedScope = this;
                var expanding = $scope.expandedNodesMap[transcludedScope.$id] === undefined;
                $scope.expandedNodesMap[transcludedScope.$id] = (expanding ? transcludedScope.node : undefined);
                if (expanding) {
                  $scope.expandedNodes.push(transcludedScope.node);
                }
                else {
                  var index;
                  for (var i = 0; (i < $scope.expandedNodes.length) && !index; i++) {
                    if ($scope.options.equality($scope.expandedNodes[i], transcludedScope.node)) {
                      index = i;
                    }
                  }
                  if (index !== undefined)
                    $scope.expandedNodes.splice(index, 1);
                }
                if ($scope.onNodeToggle) {
                  var parentNode = (transcludedScope.$parent.node === transcludedScope.synteticRoot) ? null : transcludedScope.$parent.node;
                  $scope.onNodeToggle({
                    node: transcludedScope.node, $parentNode: parentNode,
                    $index: transcludedScope.$index, $first: transcludedScope.$first, $middle: transcludedScope.$middle,
                    $last: transcludedScope.$last, $odd: transcludedScope.$odd, $even: transcludedScope.$even, expanded: expanding
                  });

                }
              };

              $scope.selectNodeLabel = function(selectedNode) {
                var transcludedScope = this;
                if (!$scope.options.isLeaf(selectedNode) && (!$scope.options.dirSelectable || !$scope.options.isSelectable(selectedNode))) {
                  // Branch node is not selectable, expand
                  this.selectNodeHead();
                }
                else if ($scope.options.isLeaf(selectedNode) && (!$scope.options.isSelectable(selectedNode))) {
                  // Leaf node is not selectable
                  return;
                }
                else {
                  var selected = false;
                  if ($scope.options.multiSelection) {
                    var pos = -1;
                    for (var i = 0; i < $scope.selectedNodes.length; i++) {
                      if ($scope.options.equality(selectedNode, $scope.selectedNodes[i])) {
                        pos = i;
                        break;
                      }
                    }
                    if (pos === -1) {
                      $scope.selectedNodes.push(selectedNode);
                      selected = true;
                    } else {
                      $scope.selectedNodes.splice(pos, 1);
                    }
                  } else {
                    if (!$scope.options.equality(selectedNode, $scope.selectedNode)) {
                      $scope.selectedNode = selectedNode;
                      selected = true;
                    }
                    else {
                      if ($scope.options.allowDeselect) {
                        $scope.selectedNode = undefined;
                      } else {
                        $scope.selectedNode = selectedNode;
                        selected = true;
                      }
                    }
                  }
                  if ($scope.onSelection) {
                    var parentNode = (transcludedScope.$parent.node === transcludedScope.synteticRoot) ? null : transcludedScope.$parent.node;
                    $scope.onSelection({
                      node: selectedNode, selected: selected, $parentNode: parentNode,
                      $index: transcludedScope.$index, $first: transcludedScope.$first, $middle: transcludedScope.$middle,
                      $last: transcludedScope.$last, $odd: transcludedScope.$odd, $even: transcludedScope.$even
                    });
                  }
                }
              };

              $scope.selectedClass = function() {
                var isThisNodeSelected = isSelectedNode(this.node);
                var labelSelectionClass = classIfDefined($scope.options.injectClasses.labelSelected, false);
                var injectSelectionClass = "";
                if (labelSelectionClass && isThisNodeSelected)
                  injectSelectionClass = " " + labelSelectionClass;

                return isThisNodeSelected ? "tree-selected" + injectSelectionClass : "";
              };

              $scope.unselectableClass = function() {
                var isThisNodeUnselectable = !$scope.options.isSelectable(this.node);
                var labelUnselectableClass = classIfDefined($scope.options.injectClasses.labelUnselectable, false);
                return isThisNodeUnselectable ? "tree-unselectable " + labelUnselectableClass : "";
              };

              //tree template
              $scope.isReverse = function() {
                return !($scope.reverseOrder === 'false' || $scope.reverseOrder === 'False' || $scope.reverseOrder === '' || $scope.reverseOrder === false);
              };

              $scope.orderByFunc = function() {
                return "'" + $scope.orderBy + "'";
              };

              var templateOptions = {
                orderBy: $scope.orderBy ? " | orderBy:orderByFunc():isReverse()" : '',
                ulClass: classIfDefined($scope.options.injectClasses.ul, true),
                nodeChildren: $scope.options.nodeChildren,
                liClass: classIfDefined($scope.options.injectClasses.li, true),
                iLeafClass: classIfDefined($scope.options.injectClasses.iLeaf, false),
                labelClass: classIfDefined($scope.options.injectClasses.label, false)
              };

              var template;
              var templateUrl = $scope.options.templateUrl || treeConfig.templateUrl;

              if (templateUrl) {
                template = $templateCache.get(templateUrl);
              }

              if (!template) {
                template =
                  '<ul {{options.ulClass}} >' +
                  '<li ng-repeat="node in node.{{options.nodeChildren}} | filter:filterExpression:filterComparator {{options.orderBy}}" ng-class="headClass(node)" {{options.liClass}}' +
                  'set-node-to-data>' +
                  '<i class="tree-branch-head" ng-class="iBranchClass()" ng-click="selectNodeHead(node)"></i>' +
                  '<i class="tree-leaf-head {{options.iLeafClass}}"></i>' +
                  '<div class="tree-label {{options.labelClass}}" ng-class="[selectedClass(), unselectableClass()]" ng-click="selectNodeLabel(node)" tree-transclude></div>' +
                  '<treeitem ng-if="nodeExpanded()"></treeitem>' +
                  '</li>' +
                  '</ul>';
              }

              this.template = $compile($interpolate(template)({options: templateOptions}));
            }
          ],
          compile: function(element, attrs, childTranscludeFn) {
            return function(scope, element, attrs, treemodelCntr) {

              scope.$watch("treeModel", function updateNodeOnRootScope(newValue) {
                if (angular.isArray(newValue)) {
                  if (angular.isDefined(scope.node) && angular.equals(scope.node[scope.options.nodeChildren], newValue))
                    return;
                  scope.node = {};
                  scope.synteticRoot = scope.node;
                  scope.node[scope.options.nodeChildren] = newValue;
                }
                else {
                  if (angular.equals(scope.node, newValue))
                    return;
                  scope.node = newValue;
                }
              });

              scope.$watchCollection('expandedNodes', function(newValue, oldValue) {
                var notFoundIds = 0;
                var newExpandedNodesMap = {};
                var $liElements = element.find('li');
                var existingScopes = [];
                // find all nodes visible on the tree and the scope $id of the scopes including them
                angular.forEach($liElements, function(liElement) {
                  var $liElement = angular.element(liElement);
                  var liScope = {
                    $id: $liElement.data('scope-id'),
                    node: $liElement.data('node')
                  };
                  existingScopes.push(liScope);
                });
                // iterate over the newValue, the new expanded nodes, and for each find it in the existingNodesAndScopes
                // if found, add the mapping $id -> node into newExpandedNodesMap
                // if not found, add the mapping num -> node into newExpandedNodesMap
                angular.forEach(newValue, function(newExNode) {
                  var found = false;
                  for (var i = 0; (i < existingScopes.length) && !found; i++) {
                    var existingScope = existingScopes[i];
                    if (scope.options.equality(newExNode, existingScope.node)) {
                      newExpandedNodesMap[existingScope.$id] = existingScope.node;
                      found = true;
                    }
                  }
                  if (!found)
                    newExpandedNodesMap[notFoundIds++] = newExNode;
                });
                scope.expandedNodesMap = newExpandedNodesMap;
              });

//                        scope.$watch('expandedNodesMap', function(newValue) {
//
//                        });

              //Rendering template for a root node
              treemodelCntr.template(scope, function(clone) {
                element.html('').append(clone);
              });
              // save the transclude function from compile (which is not bound to a scope as apposed to the one from link)
              // we can fix this to work with the link transclude function with angular 1.2.6. as for angular 1.2.0 we need
              // to keep using the compile function
              scope.$treeTransclude = childTranscludeFn;
            };
          }
        };
      }
    ])
    .directive("setNodeToData", [
      '$parse', function($parse) {
        return {
          restrict: 'A',
          link: function($scope, $element, $attrs) {
            $element.data('node', $scope.node);
            $element.data('scope-id', $scope.$id);
          }
        };
      }
    ])
    .directive("treeitem", function() {
      return {
        restrict: 'E',
        require: "^treecontrol",
        link: function(scope, element, attrs, treemodelCntr) {
          // Rendering template for the current node
          treemodelCntr.template(scope, function(clone) {
            element.html('').append(clone);
          });
        }
      };
    })
    .directive("treeTransclude", function() {
      return {
        link: function(scope, element, attrs, controller) {
          if (!scope.options.isLeaf(scope.node)) {
            angular.forEach(scope.expandedNodesMap, function(node, id) {
              if (scope.options.equality(node, scope.node)) {
                scope.expandedNodesMap[scope.$id] = scope.node;
                scope.expandedNodesMap[id] = undefined;
              }
            });
          }
          if (!scope.options.multiSelection && scope.options.equality(scope.node, scope.selectedNode)) {
            scope.selectedNode = scope.node;
          } else if (scope.options.multiSelection) {
            var newSelectedNodes = [];
            for (var i = 0; (i < scope.selectedNodes.length); i++) {
              if (scope.options.equality(scope.node, scope.selectedNodes[i])) {
                newSelectedNodes.push(scope.node);
              }
            }
            scope.selectedNodes = newSelectedNodes;
          }

          // create a scope for the transclusion, whos parent is the parent of the tree control
          scope.transcludeScope = scope.parentScopeOfTree.$new();
          scope.transcludeScope.node = scope.node;
          scope.transcludeScope.$parentNode = (scope.$parent.node === scope.synteticRoot) ? null : scope.$parent.node;
          scope.transcludeScope.$index = scope.$index;
          scope.transcludeScope.$first = scope.$first;
          scope.transcludeScope.$middle = scope.$middle;
          scope.transcludeScope.$last = scope.$last;
          scope.transcludeScope.$odd = scope.$odd;
          scope.transcludeScope.$even = scope.$even;
          scope.$on('$destroy', function() {
            scope.transcludeScope.$destroy();
          });

          scope.$treeTransclude(scope.transcludeScope, function(clone) {
            element.empty();
            element.append(clone);
          });
        }
      };
    });
})(angular);
