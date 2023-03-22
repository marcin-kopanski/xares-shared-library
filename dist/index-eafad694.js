import * as p from "react";
import Qt, { useMemo as ls, lazy as fs, useState as Mt, useEffect as Io, Suspense as ds, createContext as ps, useContext as ms } from "react";
import { useQueryClient as hs, onlineManager as Pn, notifyManager as ys, QueryClient as gs, QueryClientProvider as vs } from "@tanstack/react-query";
import bs from "@emotion/styled";
import "@emotion/react";
import { Snackbar as Es, IconButton as Ss } from "@mui/material";
function $o(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ct = {}, ws = {
  get exports() {
    return Ct;
  },
  set exports(e) {
    Ct = e;
  }
}, yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Os() {
  if (kn)
    return yt;
  kn = 1;
  var e = Qt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, u) {
    var f, d = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps)
      for (f in c = a.defaultProps, c)
        d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: h, ref: g, props: d, _owner: o.current };
  }
  return yt.Fragment = r, yt.jsx = s, yt.jsxs = s, yt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Cs() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function v(l) {
      if (l === null || typeof l != "object")
        return null;
      var S = m && l[m] || l[y];
      return typeof S == "function" ? S : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(l) {
      {
        for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), L = 1; L < S; L++)
          _[L - 1] = arguments[L];
        R("error", l, _);
      }
    }
    function R(l, S, _) {
      {
        var L = T.ReactDebugCurrentFrame, Q = L.getStackAddendum();
        Q !== "" && (S += "%s", _ = _.concat([Q]));
        var se = _.map(function(q) {
          return String(q);
        });
        se.unshift("Warning: " + S), Function.prototype.apply.call(console[l], console, se);
      }
    }
    var x = !1, E = !1, F = !1, pe = !1, ce = !1, $;
    $ = Symbol.for("react.module.reference");
    function ne(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || ce || l === o || l === u || l === f || pe || l === g || x || E || F || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === d || l.$$typeof === s || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === $ || l.getModuleId !== void 0));
    }
    function le(l, S, _) {
      var L = l.displayName;
      if (L)
        return L;
      var Q = S.displayName || S.name || "";
      return Q !== "" ? _ + "(" + Q + ")" : _;
    }
    function be(l) {
      return l.displayName || "Context";
    }
    function ie(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case a:
            var S = l;
            return be(S) + ".Consumer";
          case s:
            var _ = l;
            return be(_._context) + ".Provider";
          case c:
            return le(l, l.render, "ForwardRef");
          case d:
            var L = l.displayName || null;
            return L !== null ? L : ie(l.type) || "Memo";
          case h: {
            var Q = l, se = Q._payload, q = Q._init;
            try {
              return ie(q(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, W = 0, V, oe, me, Ee, w, O, D;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function N() {
      {
        if (W === 0) {
          V = console.log, oe = console.info, me = console.warn, Ee = console.error, w = console.group, O = console.groupCollapsed, D = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        W++;
      }
    }
    function j() {
      {
        if (W--, W === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, l, {
              value: V
            }),
            info: ae({}, l, {
              value: oe
            }),
            warn: ae({}, l, {
              value: me
            }),
            error: ae({}, l, {
              value: Ee
            }),
            group: ae({}, l, {
              value: w
            }),
            groupCollapsed: ae({}, l, {
              value: O
            }),
            groupEnd: ae({}, l, {
              value: D
            })
          });
        }
        W < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = T.ReactCurrentDispatcher, M;
    function U(l, S, _) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (Q) {
            var L = Q.stack.trim().match(/\n( *(at )?)/);
            M = L && L[1] || "";
          }
        return `
` + M + l;
      }
    }
    var H = !1, B;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ve();
    }
    function C(l, S) {
      if (!l || H)
        return "";
      {
        var _ = B.get(l);
        if (_ !== void 0)
          return _;
      }
      var L;
      H = !0;
      var Q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = I.current, I.current = null, N();
      try {
        if (S) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Me) {
              L = Me;
            }
            Reflect.construct(l, [], q);
          } else {
            try {
              q.call();
            } catch (Me) {
              L = Me;
            }
            l.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            L = Me;
          }
          l();
        }
      } catch (Me) {
        if (Me && L && typeof Me.stack == "string") {
          for (var z = Me.stack.split(`
`), Se = L.stack.split(`
`), he = z.length - 1, ye = Se.length - 1; he >= 1 && ye >= 0 && z[he] !== Se[ye]; )
            ye--;
          for (; he >= 1 && ye >= 0; he--, ye--)
            if (z[he] !== Se[ye]) {
              if (he !== 1 || ye !== 1)
                do
                  if (he--, ye--, ye < 0 || z[he] !== Se[ye]) {
                    var Te = `
` + z[he].replace(" at new ", " at ");
                    return l.displayName && Te.includes("<anonymous>") && (Te = Te.replace("<anonymous>", l.displayName)), typeof l == "function" && B.set(l, Te), Te;
                  }
                while (he >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        H = !1, I.current = se, j(), Error.prepareStackTrace = Q;
      }
      var Ze = l ? l.displayName || l.name : "", An = Ze ? U(Ze) : "";
      return typeof l == "function" && B.set(l, An), An;
    }
    function Ce(l, S, _) {
      return C(l, !1);
    }
    function A(l) {
      var S = l.prototype;
      return !!(S && S.isReactComponent);
    }
    function Re(l, S, _) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return C(l, A(l));
      if (typeof l == "string")
        return U(l);
      switch (l) {
        case u:
          return U("Suspense");
        case f:
          return U("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return Ce(l.render);
          case d:
            return Re(l.type, S, _);
          case h: {
            var L = l, Q = L._payload, se = L._init;
            try {
              return Re(se(Q), S, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, mt = {}, vn = T.ReactDebugCurrentFrame;
    function Dt(l) {
      if (l) {
        var S = l._owner, _ = Re(l.type, l._source, S ? S.type : null);
        vn.setExtraStackFrame(_);
      } else
        vn.setExtraStackFrame(null);
    }
    function Wi(l, S, _, L, Q) {
      {
        var se = Function.call.bind(Le);
        for (var q in l)
          if (se(l, q)) {
            var z = void 0;
            try {
              if (typeof l[q] != "function") {
                var Se = Error((L || "React class") + ": " + _ + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              z = l[q](S, q, L, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              z = he;
            }
            z && !(z instanceof Error) && (Dt(Q), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", _, q, typeof z), Dt(null)), z instanceof Error && !(z.message in mt) && (mt[z.message] = !0, Dt(Q), P("Failed %s type: %s", _, z.message), Dt(null));
          }
      }
    }
    var Hi = Array.isArray;
    function fr(l) {
      return Hi(l);
    }
    function qi(l) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, _ = S && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return _;
      }
    }
    function Yi(l) {
      try {
        return bn(l), !1;
      } catch {
        return !0;
      }
    }
    function bn(l) {
      return "" + l;
    }
    function En(l) {
      if (Yi(l))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qi(l)), bn(l);
    }
    var ht = T.ReactCurrentOwner, Ki = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Sn, wn, dr;
    dr = {};
    function Qi(l) {
      if (Le.call(l, "ref")) {
        var S = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Gi(l) {
      if (Le.call(l, "key")) {
        var S = Object.getOwnPropertyDescriptor(l, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Ji(l, S) {
      if (typeof l.ref == "string" && ht.current && S && ht.current.stateNode !== S) {
        var _ = ie(ht.current.type);
        dr[_] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ie(ht.current.type), l.ref), dr[_] = !0);
      }
    }
    function Xi(l, S) {
      {
        var _ = function() {
          Sn || (Sn = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Zi(l, S) {
      {
        var _ = function() {
          wn || (wn = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var es = function(l, S, _, L, Q, se, q) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: S,
        ref: _,
        props: q,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function ts(l, S, _, L, Q) {
      {
        var se, q = {}, z = null, Se = null;
        _ !== void 0 && (En(_), z = "" + _), Gi(S) && (En(S.key), z = "" + S.key), Qi(S) && (Se = S.ref, Ji(S, Q));
        for (se in S)
          Le.call(S, se) && !Ki.hasOwnProperty(se) && (q[se] = S[se]);
        if (l && l.defaultProps) {
          var he = l.defaultProps;
          for (se in he)
            q[se] === void 0 && (q[se] = he[se]);
        }
        if (z || Se) {
          var ye = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          z && Xi(q, ye), Se && Zi(q, ye);
        }
        return es(l, z, Se, Q, L, ht.current, q);
      }
    }
    var pr = T.ReactCurrentOwner, On = T.ReactDebugCurrentFrame;
    function Xe(l) {
      if (l) {
        var S = l._owner, _ = Re(l.type, l._source, S ? S.type : null);
        On.setExtraStackFrame(_);
      } else
        On.setExtraStackFrame(null);
    }
    var mr;
    mr = !1;
    function hr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function Cn() {
      {
        if (pr.current) {
          var l = ie(pr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function rs(l) {
      {
        if (l !== void 0) {
          var S = l.fileName.replace(/^.*[\\\/]/, ""), _ = l.lineNumber;
          return `

Check your code at ` + S + ":" + _ + ".";
        }
        return "";
      }
    }
    var _n = {};
    function ns(l) {
      {
        var S = Cn();
        if (!S) {
          var _ = typeof l == "string" ? l : l.displayName || l.name;
          _ && (S = `

Check the top-level render call using <` + _ + ">.");
        }
        return S;
      }
    }
    function xn(l, S) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var _ = ns(S);
        if (_n[_])
          return;
        _n[_] = !0;
        var L = "";
        l && l._owner && l._owner !== pr.current && (L = " It was passed a child from " + ie(l._owner.type) + "."), Xe(l), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, L), Xe(null);
      }
    }
    function Tn(l, S) {
      {
        if (typeof l != "object")
          return;
        if (fr(l))
          for (var _ = 0; _ < l.length; _++) {
            var L = l[_];
            hr(L) && xn(L, S);
          }
        else if (hr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var Q = v(l);
          if (typeof Q == "function" && Q !== l.entries)
            for (var se = Q.call(l), q; !(q = se.next()).done; )
              hr(q.value) && xn(q.value, S);
        }
      }
    }
    function os(l) {
      {
        var S = l.type;
        if (S == null || typeof S == "string")
          return;
        var _;
        if (typeof S == "function")
          _ = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === d))
          _ = S.propTypes;
        else
          return;
        if (_) {
          var L = ie(S);
          Wi(_, l.props, "prop", L, l);
        } else if (S.PropTypes !== void 0 && !mr) {
          mr = !0;
          var Q = ie(S);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function is(l) {
      {
        for (var S = Object.keys(l.props), _ = 0; _ < S.length; _++) {
          var L = S[_];
          if (L !== "children" && L !== "key") {
            Xe(l), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Xe(null);
            break;
          }
        }
        l.ref !== null && (Xe(l), P("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function Rn(l, S, _, L, Q, se) {
      {
        var q = ne(l);
        if (!q) {
          var z = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = rs(Q);
          Se ? z += Se : z += Cn();
          var he;
          l === null ? he = "null" : fr(l) ? he = "array" : l !== void 0 && l.$$typeof === t ? (he = "<" + (ie(l.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : he = typeof l, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, z);
        }
        var ye = ts(l, S, _, Q, se);
        if (ye == null)
          return ye;
        if (q) {
          var Te = S.children;
          if (Te !== void 0)
            if (L)
              if (fr(Te)) {
                for (var Ze = 0; Ze < Te.length; Ze++)
                  Tn(Te[Ze], l);
                Object.freeze && Object.freeze(Te);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Te, l);
        }
        return l === n ? is(ye) : os(ye), ye;
      }
    }
    function ss(l, S, _) {
      return Rn(l, S, _, !0);
    }
    function as(l, S, _) {
      return Rn(l, S, _, !1);
    }
    var us = as, cs = ss;
    gt.Fragment = n, gt.jsx = us, gt.jsxs = cs;
  }()), gt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Os() : e.exports = Cs();
})(ws);
const No = Ct.Fragment, Ae = Ct.jsx, Gt = Ct.jsxs, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: No,
  jsx: Ae,
  jsxs: Gt
}, Symbol.toStringTag, { value: "Module" })), _d = () => /* @__PURE__ */ Ae("div", { children: "Hello World zostal zmieniony!!!" });
function ze() {
  return ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ze.apply(this, arguments);
}
/**
 * match-sorter-utils
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Do = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z"
}, xs = Object.keys(Do).join("|"), Ts = new RegExp(xs, "g");
function Rs(e) {
  return e.replace(Ts, (t) => Do[t]);
}
/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
const _e = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function As(e, t, r) {
  var n;
  if (r = r || {}, r.threshold = (n = r.threshold) != null ? n : _e.MATCHES, !r.accessors) {
    const s = $n(e, t, r);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: e,
      rank: s,
      accessorIndex: -1,
      accessorThreshold: r.threshold,
      passed: s >= r.threshold
    };
  }
  const o = $s(e, r.accessors), i = {
    rankedValue: e,
    rank: _e.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: r.threshold,
    passed: !1
  };
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    let c = $n(a.itemValue, t, r);
    const {
      minRanking: u,
      maxRanking: f,
      threshold: d = r.threshold
    } = a.attributes;
    c < u && c >= _e.MATCHES ? c = u : c > f && (c = f), c = Math.min(c, f), c >= d && c > i.rank && (i.rank = c, i.passed = !0, i.accessorIndex = s, i.accessorThreshold = d, i.rankedValue = a.itemValue);
  }
  return i;
}
function $n(e, t, r) {
  return e = Nn(e, r), t = Nn(t, r), t.length > e.length ? _e.NO_MATCH : e === t ? _e.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? _e.EQUAL : e.startsWith(t) ? _e.STARTS_WITH : e.includes(` ${t}`) ? _e.WORD_STARTS_WITH : e.includes(t) ? _e.CONTAINS : t.length === 1 ? _e.NO_MATCH : Ps(e).includes(t) ? _e.ACRONYM : ks(e, t));
}
function Ps(e) {
  let t = "";
  return e.split(" ").forEach((n) => {
    n.split("-").forEach((i) => {
      t += i.substr(0, 1);
    });
  }), t;
}
function ks(e, t) {
  let r = 0, n = 0;
  function o(c, u, f) {
    for (let d = f, h = u.length; d < h; d++)
      if (u[d] === c)
        return r += 1, d + 1;
    return -1;
  }
  function i(c) {
    const u = 1 / c, f = r / t.length;
    return _e.MATCHES + f * u;
  }
  const s = o(t[0], e, 0);
  if (s < 0)
    return _e.NO_MATCH;
  n = s;
  for (let c = 1, u = t.length; c < u; c++) {
    const f = t[c];
    if (n = o(f, e, n), !(n > -1))
      return _e.NO_MATCH;
  }
  const a = n - s;
  return i(a);
}
function Nn(e, t) {
  let {
    keepDiacritics: r
  } = t;
  return e = `${e}`, r || (e = Rs(e)), e;
}
function Is(e, t) {
  let r = t;
  typeof t == "object" && (r = t.accessor);
  const n = r(e);
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function $s(e, t) {
  const r = [];
  for (let n = 0, o = t.length; n < o; n++) {
    const i = t[n], s = Ns(i), a = Is(e, i);
    for (let c = 0, u = a.length; c < u; c++)
      r.push({
        itemValue: a[c],
        attributes: s
      });
  }
  return r;
}
const Dn = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function Ns(e) {
  return typeof e == "function" ? Dn : {
    ...Dn,
    ...e
  };
}
const Ds = (e) => {
  try {
    const t = localStorage.getItem(e);
    return typeof t == "string" ? JSON.parse(t) : void 0;
  } catch {
    return;
  }
};
function qe(e, t) {
  const [r, n] = p.useState();
  p.useEffect(() => {
    const i = Ds(e);
    n(typeof i > "u" || i === null ? typeof t == "function" ? t() : t : i);
  }, [t, e]);
  const o = p.useCallback((i) => {
    n((s) => {
      let a = i;
      typeof i == "function" && (a = i(s));
      try {
        localStorage.setItem(e, JSON.stringify(a));
      } catch {
      }
      return a;
    });
  }, [e]);
  return [r, o];
}
var Ls = (
  /** @class */
  function() {
    function e() {
      this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
    }
    return e.prototype.set = function(t, r) {
      this.keyToValue.set(t, r), this.valueToKey.set(r, t);
    }, e.prototype.getByKey = function(t) {
      return this.keyToValue.get(t);
    }, e.prototype.getByValue = function(t) {
      return this.valueToKey.get(t);
    }, e.prototype.clear = function() {
      this.keyToValue.clear(), this.valueToKey.clear();
    }, e;
  }()
), Lo = (
  /** @class */
  function() {
    function e(t) {
      this.generateIdentifier = t, this.kv = new Ls();
    }
    return e.prototype.register = function(t, r) {
      this.kv.getByValue(t) || (r || (r = this.generateIdentifier(t)), this.kv.set(r, t));
    }, e.prototype.clear = function() {
      this.kv.clear();
    }, e.prototype.getIdentifier = function(t) {
      return this.kv.getByValue(t);
    }, e.prototype.getValue = function(t) {
      return this.kv.getByKey(t);
    }, e;
  }()
), Ms = globalThis && globalThis.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), js = (
  /** @class */
  function(e) {
    Ms(t, e);
    function t() {
      var r = e.call(this, function(n) {
        return n.name;
      }) || this;
      return r.classToAllowedProps = /* @__PURE__ */ new Map(), r;
    }
    return t.prototype.register = function(r, n) {
      typeof n == "object" ? (n.allowProps && this.classToAllowedProps.set(r, n.allowProps), e.prototype.register.call(this, r, n.identifier)) : e.prototype.register.call(this, r, n);
    }, t.prototype.getAllowedProps = function(r) {
      return this.classToAllowedProps.get(r);
    }, t;
  }(Lo)
), Fs = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
};
function Us(e) {
  if ("values" in Object)
    return Object.values(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(e[r]);
  return t;
}
function Bs(e, t) {
  var r = Us(e);
  if ("find" in r)
    return r.find(t);
  for (var n = r, o = 0; o < n.length; o++) {
    var i = n[o];
    if (t(i))
      return i;
  }
}
function ct(e, t) {
  Object.entries(e).forEach(function(r) {
    var n = Fs(r, 2), o = n[0], i = n[1];
    return t(i, o);
  });
}
function jt(e, t) {
  return e.indexOf(t) !== -1;
}
function Ln(e, t) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (t(n))
      return n;
  }
}
var Vs = (
  /** @class */
  function() {
    function e() {
      this.transfomers = {};
    }
    return e.prototype.register = function(t) {
      this.transfomers[t.name] = t;
    }, e.prototype.findApplicable = function(t) {
      return Bs(this.transfomers, function(r) {
        return r.isApplicable(t);
      });
    }, e.prototype.findByName = function(t) {
      return this.transfomers[t];
    }, e;
  }()
), zs = function(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}, Mo = function(e) {
  return typeof e > "u";
}, Ws = function(e) {
  return e === null;
}, _t = function(e) {
  return typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}, Dr = function(e) {
  return _t(e) && Object.keys(e).length === 0;
}, Ke = function(e) {
  return Array.isArray(e);
}, Hs = function(e) {
  return typeof e == "string";
}, qs = function(e) {
  return typeof e == "number" && !isNaN(e);
}, Ys = function(e) {
  return typeof e == "boolean";
}, Ks = function(e) {
  return e instanceof RegExp;
}, xt = function(e) {
  return e instanceof Map;
}, Tt = function(e) {
  return e instanceof Set;
}, jo = function(e) {
  return zs(e) === "Symbol";
}, Qs = function(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}, Gs = function(e) {
  return e instanceof Error;
}, Mn = function(e) {
  return typeof e == "number" && isNaN(e);
}, jn = function(e) {
  return Ys(e) || Ws(e) || Mo(e) || qs(e) || Hs(e) || jo(e);
}, Js = function(e) {
  return typeof e == "bigint";
}, Xs = function(e) {
  return e === 1 / 0 || e === -1 / 0;
}, Zs = function(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}, ea = function(e) {
  return e instanceof URL;
}, Fo = function(e) {
  return e.replace(/\./g, "\\.");
}, yr = function(e) {
  return e.map(String).map(Fo).join(".");
}, wt = function(e) {
  for (var t = [], r = "", n = 0; n < e.length; n++) {
    var o = e.charAt(n), i = o === "\\" && e.charAt(n + 1) === ".";
    if (i) {
      r += ".", n++;
      continue;
    }
    var s = o === ".";
    if (s) {
      t.push(r), r = "";
      continue;
    }
    r += o;
  }
  var a = r;
  return t.push(a), t;
}, Lr = globalThis && globalThis.__assign || function() {
  return Lr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Lr.apply(this, arguments);
}, Mr = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, jr = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
    e[o] = t[r];
  return e;
};
function Ie(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Uo = [
  Ie(Mo, "undefined", function() {
    return null;
  }, function() {
  }),
  Ie(Js, "bigint", function(e) {
    return e.toString();
  }, function(e) {
    return typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e);
  }),
  Ie(Qs, "Date", function(e) {
    return e.toISOString();
  }, function(e) {
    return new Date(e);
  }),
  Ie(Gs, "Error", function(e, t) {
    var r = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach(function(n) {
      r[n] = e[n];
    }), r;
  }, function(e, t) {
    var r = new Error(e.message);
    return r.name = e.name, r.stack = e.stack, t.allowedErrorProps.forEach(function(n) {
      r[n] = e[n];
    }), r;
  }),
  Ie(Ks, "regexp", function(e) {
    return "" + e;
  }, function(e) {
    var t = e.slice(1, e.lastIndexOf("/")), r = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, r);
  }),
  Ie(
    Tt,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(e) {
      return jr([], Mr(e.values()));
    },
    function(e) {
      return new Set(e);
    }
  ),
  Ie(xt, "map", function(e) {
    return jr([], Mr(e.entries()));
  }, function(e) {
    return new Map(e);
  }),
  Ie(function(e) {
    return Mn(e) || Xs(e);
  }, "number", function(e) {
    return Mn(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Ie(function(e) {
    return e === 0 && 1 / e === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Ie(ea, "URL", function(e) {
    return e.toString();
  }, function(e) {
    return new URL(e);
  })
];
function Jt(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Bo = Jt(function(e, t) {
  if (jo(e)) {
    var r = !!t.symbolRegistry.getIdentifier(e);
    return r;
  }
  return !1;
}, function(e, t) {
  var r = t.symbolRegistry.getIdentifier(e);
  return ["symbol", r];
}, function(e) {
  return e.description;
}, function(e, t, r) {
  var n = r.symbolRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), ta = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(e, t) {
  return e[t.name] = t, e;
}, {}), Vo = Jt(Zs, function(e) {
  return ["typed-array", e.constructor.name];
}, function(e) {
  return jr([], Mr(e));
}, function(e, t) {
  var r = ta[t[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(e);
});
function zo(e, t) {
  if (e != null && e.constructor) {
    var r = !!t.classRegistry.getIdentifier(e.constructor);
    return r;
  }
  return !1;
}
var Wo = Jt(zo, function(e, t) {
  var r = t.classRegistry.getIdentifier(e.constructor);
  return ["class", r];
}, function(e, t) {
  var r = t.classRegistry.getAllowedProps(e.constructor);
  if (!r)
    return Lr({}, e);
  var n = {};
  return r.forEach(function(o) {
    n[o] = e[o];
  }), n;
}, function(e, t, r) {
  var n = r.classRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), e);
}), Ho = Jt(function(e, t) {
  return !!t.customTransformerRegistry.findApplicable(e);
}, function(e, t) {
  var r = t.customTransformerRegistry.findApplicable(e);
  return ["custom", r.name];
}, function(e, t) {
  var r = t.customTransformerRegistry.findApplicable(e);
  return r.serialize(e);
}, function(e, t, r) {
  var n = r.customTransformerRegistry.findByName(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(e);
}), ra = [Wo, Bo, Ho, Vo], Fn = function(e, t) {
  var r = Ln(ra, function(o) {
    return o.isApplicable(e, t);
  });
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation(e, t)
    };
  var n = Ln(Uo, function(o) {
    return o.isApplicable(e, t);
  });
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation
    };
}, qo = {};
Uo.forEach(function(e) {
  qo[e.annotation] = e;
});
var na = function(e, t, r) {
  if (Ke(t))
    switch (t[0]) {
      case "symbol":
        return Bo.untransform(e, t, r);
      case "class":
        return Wo.untransform(e, t, r);
      case "custom":
        return Ho.untransform(e, t, r);
      case "typed-array":
        return Vo.untransform(e, t, r);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    var n = qo[t];
    if (!n)
      throw new Error("Unknown transformation: " + t);
    return n.untransform(e, r);
  }
}, at = function(e, t) {
  for (var r = e.keys(); t > 0; )
    r.next(), t--;
  return r.next().value;
};
function Yo(e) {
  if (jt(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (jt(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (jt(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var oa = function(e, t) {
  Yo(t);
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (Tt(e))
      e = at(e, +n);
    else if (xt(e)) {
      var o = +n, i = +t[++r] == 0 ? "key" : "value", s = at(e, o);
      switch (i) {
        case "key":
          e = s;
          break;
        case "value":
          e = e.get(s);
          break;
      }
    } else
      e = e[n];
  }
  return e;
}, Fr = function(e, t, r) {
  if (Yo(t), t.length === 0)
    return r(e);
  for (var n = e, o = 0; o < t.length - 1; o++) {
    var i = t[o];
    if (Ke(n)) {
      var s = +i;
      n = n[s];
    } else if (_t(n))
      n = n[i];
    else if (Tt(n)) {
      var a = +i;
      n = at(n, a);
    } else if (xt(n)) {
      var c = o === t.length - 2;
      if (c)
        break;
      var a = +i, u = +t[++o] == 0 ? "key" : "value", f = at(n, a);
      switch (u) {
        case "key":
          n = f;
          break;
        case "value":
          n = n.get(f);
          break;
      }
    }
  }
  var d = t[t.length - 1];
  if ((Ke(n) || _t(n)) && (n[d] = r(n[d])), Tt(n)) {
    var h = at(n, +d), g = r(h);
    h !== g && (n.delete(h), n.add(g));
  }
  if (xt(n)) {
    var a = +t[t.length - 2], m = at(n, a), u = +d == 0 ? "key" : "value";
    switch (u) {
      case "key": {
        var y = r(m);
        n.set(y, n.get(m)), y !== m && n.delete(m);
        break;
      }
      case "value": {
        n.set(m, r(n.get(m)));
        break;
      }
    }
  }
  return e;
}, Fe = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, Ye = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
    e[o] = t[r];
  return e;
};
function Ur(e, t, r) {
  if (r === void 0 && (r = []), !!e) {
    if (!Ke(e)) {
      ct(e, function(s, a) {
        return Ur(s, t, Ye(Ye([], Fe(r)), Fe(wt(a))));
      });
      return;
    }
    var n = Fe(e, 2), o = n[0], i = n[1];
    i && ct(i, function(s, a) {
      Ur(s, t, Ye(Ye([], Fe(r)), Fe(wt(a))));
    }), t(o, r);
  }
}
function ia(e, t, r) {
  return Ur(t, function(n, o) {
    e = Fr(e, o, function(i) {
      return na(i, n, r);
    });
  }), e;
}
function sa(e, t) {
  function r(s, a) {
    var c = oa(e, wt(a));
    s.map(wt).forEach(function(u) {
      e = Fr(e, u, function() {
        return c;
      });
    });
  }
  if (Ke(t)) {
    var n = Fe(t, 2), o = n[0], i = n[1];
    o.forEach(function(s) {
      e = Fr(e, wt(s), function() {
        return e;
      });
    }), i && ct(i, r);
  } else
    ct(t, r);
  return e;
}
var aa = function(e, t) {
  return _t(e) || Ke(e) || xt(e) || Tt(e) || zo(e, t);
};
function ua(e, t, r) {
  var n = r.get(e);
  n ? n.push(t) : r.set(e, [t]);
}
function ca(e) {
  var t = {}, r = void 0;
  return e.forEach(function(n) {
    if (!(n.length <= 1)) {
      var o = Fe(n.map(function(a) {
        return a.map(String);
      }).sort(function(a, c) {
        return a.length - c.length;
      })), i = o[0], s = o.slice(1);
      i.length === 0 ? r = s.map(yr) : t[yr(i)] = s.map(yr);
    }
  }), r ? Dr(t) ? [r] : [r, t] : Dr(t) ? void 0 : t;
}
var Ko = function(e, t, r, n, o) {
  var i;
  if (n === void 0 && (n = []), o === void 0 && (o = []), jn(e) || ua(e, n, t), !aa(e, r)) {
    var s = Fn(e, r);
    return s ? {
      transformedValue: s.value,
      annotations: [s.type]
    } : {
      transformedValue: e
    };
  }
  if (jt(o, e))
    return {
      transformedValue: null
    };
  var a = Fn(e, r), c = (i = a == null ? void 0 : a.value) !== null && i !== void 0 ? i : e;
  jn(e) || (o = Ye(Ye([], Fe(o)), [e]));
  var u = Ke(c) ? [] : {}, f = {};
  return ct(c, function(d, h) {
    var g = Ko(d, t, r, Ye(Ye([], Fe(n)), [h]), o);
    u[h] = g.transformedValue, Ke(g.annotations) ? f[h] = g.annotations : _t(g.annotations) && ct(g.annotations, function(m, y) {
      f[Fo(h) + "." + y] = m;
    });
  }), Dr(f) ? {
    transformedValue: u,
    annotations: a ? [a.type] : void 0
  } : {
    transformedValue: u,
    annotations: a ? [a.type, f] : f
  };
};
function Qo(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function la(e) {
  if (Qo(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t.constructor === Object && t === Object.prototype;
}
function Un(e) {
  return Qo(e) === "Array";
}
function fa(e, t, r, n, o) {
  const i = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = r), o && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Br(e, t = {}) {
  if (Un(e))
    return e.map((o) => Br(o, t));
  if (!la(e))
    return e;
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols(e);
  return [...r, ...n].reduce((o, i) => {
    if (Un(t.props) && !t.props.includes(i))
      return o;
    const s = e[i], a = Br(s, t);
    return fa(o, i, a, e, t.nonenumerable), o;
  }, {});
}
var Je = globalThis && globalThis.__assign || function() {
  return Je = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Je.apply(this, arguments);
}, da = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, pa = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
    e[o] = t[r];
  return e;
}, Go = (
  /** @class */
  function() {
    function e() {
      this.classRegistry = new js(), this.symbolRegistry = new Lo(function(t) {
        var r;
        return (r = t.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new Vs(), this.allowedErrorProps = [];
    }
    return e.prototype.serialize = function(t) {
      var r = /* @__PURE__ */ new Map(), n = Ko(t, r, this), o = {
        json: n.transformedValue
      };
      n.annotations && (o.meta = Je(Je({}, o.meta), { values: n.annotations }));
      var i = ca(r);
      return i && (o.meta = Je(Je({}, o.meta), { referentialEqualities: i })), o;
    }, e.prototype.deserialize = function(t) {
      var r = t.json, n = t.meta, o = Br(r);
      return n != null && n.values && (o = ia(o, n.values, this)), n != null && n.referentialEqualities && (o = sa(o, n.referentialEqualities)), o;
    }, e.prototype.stringify = function(t) {
      return JSON.stringify(this.serialize(t));
    }, e.prototype.parse = function(t) {
      return this.deserialize(JSON.parse(t));
    }, e.prototype.registerClass = function(t, r) {
      this.classRegistry.register(t, r);
    }, e.prototype.registerSymbol = function(t, r) {
      this.symbolRegistry.register(t, r);
    }, e.prototype.registerCustom = function(t, r) {
      this.customTransformerRegistry.register(Je({ name: r }, t));
    }, e.prototype.allowErrorProps = function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (t = this.allowedErrorProps).push.apply(t, pa([], da(r)));
    }, e.defaultInstance = new e(), e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance), e.deserialize = e.defaultInstance.deserialize.bind(e.defaultInstance), e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance), e.parse = e.defaultInstance.parse.bind(e.defaultInstance), e.registerClass = e.defaultInstance.registerClass.bind(e.defaultInstance), e.registerSymbol = e.defaultInstance.registerSymbol.bind(e.defaultInstance), e.registerCustom = e.defaultInstance.registerCustom.bind(e.defaultInstance), e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(e.defaultInstance), e;
  }()
);
const K = {
  background: "#0b1521",
  backgroundAlt: "#132337",
  foreground: "white",
  gray: "#3f4e60",
  grayAlt: "#222e3e",
  inputBackgroundColor: "#fff",
  inputTextColor: "#000",
  success: "#00ab52",
  danger: "#ff0085",
  active: "#006bff",
  paused: "#8c49eb",
  warning: "#ffb200"
}, Jo = /* @__PURE__ */ p.createContext(K);
function Xo({
  theme: e,
  ...t
}) {
  return /* @__PURE__ */ p.createElement(Jo.Provider, ze({
    value: e
  }, t));
}
function ma() {
  return p.useContext(Jo);
}
function ha(e) {
  const [t, r] = p.useState(() => {
    if (typeof window < "u")
      return window.matchMedia(e).matches;
  });
  return p.useEffect(() => {
    if (typeof window < "u") {
      const n = window.matchMedia(e), o = ({
        matches: i
      }) => r(i);
      return n.addListener(o), () => {
        n.removeListener(o);
      };
    }
  }, [t, e, r]), t;
}
function Zo({
  queryState: e,
  observerCount: t,
  isStale: r,
  theme: n
}) {
  return e.fetchStatus === "fetching" ? n.active : t ? e.fetchStatus === "paused" ? n.paused : r ? n.warning : n.success : n.gray;
}
function it(e) {
  return e.state.fetchStatus === "fetching" ? "fetching" : e.getObserversCount() ? e.state.fetchStatus === "paused" ? "paused" : e.isStale() ? "stale" : "fresh" : "inactive";
}
function Oe(e, t, r = {}) {
  return /* @__PURE__ */ p.forwardRef(({
    style: n,
    ...o
  }, i) => {
    const s = ma(), a = Object.entries(r).reduce((c, [u, f]) => ha(u) ? {
      ...c,
      ...typeof f == "function" ? f(o, s) : f
    } : c, {});
    return /* @__PURE__ */ p.createElement(e, {
      ...o,
      style: {
        ...typeof t == "function" ? t(o, s) : t,
        ...n,
        ...a
      },
      ref: i
    });
  });
}
function ya() {
  const e = p.useRef(!1), t = p.useCallback(() => e.current, []);
  return p.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t;
}
const ei = (e, t = !1) => {
  const {
    json: r
  } = Go.serialize(e);
  return JSON.stringify(r, null, t ? 2 : void 0);
}, Lt = (e) => e.state.fetchStatus !== "idle" ? 0 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3, ga = (e, t) => e.queryHash.localeCompare(t.queryHash), ti = (e, t) => e.state.dataUpdatedAt < t.state.dataUpdatedAt ? 1 : -1, va = (e, t) => Lt(e) === Lt(t) ? ti(e, t) : Lt(e) > Lt(t) ? 1 : -1, gr = {
  "Status > Last Updated": va,
  "Query Hash": ga,
  "Last Updated": ti
}, Vr = 70, Rt = 500, ba = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
function Wt(e) {
  return ["left", "right"].includes(e);
}
function ri(e) {
  return ba[e];
}
function Zr(e, t) {
  return "" + e + (t.charAt(0).toUpperCase() + t.slice(1));
}
function Ea({
  position: e = "bottom",
  height: t,
  width: r,
  devtoolsTheme: n,
  isOpen: o,
  isResizing: i,
  panelStyle: s
}) {
  const a = ri(e), c = Zr("border", a), u = Wt(e);
  return {
    ...s,
    direction: "ltr",
    position: "fixed",
    [e]: 0,
    [c]: "1px solid " + n.gray,
    transformOrigin: a,
    boxShadow: "0 0 20px rgba(0,0,0,.3)",
    zIndex: 99999,
    // visibility will be toggled after transitions, but set initial state here
    visibility: o ? "visible" : "hidden",
    ...i ? {
      transition: "none"
    } : {
      transition: "all .2s ease"
    },
    ...o ? {
      opacity: 1,
      pointerEvents: "all",
      transform: u ? "translateX(0) scale(1)" : "translateY(0) scale(1)"
    } : {
      opacity: 0,
      pointerEvents: "none",
      transform: u ? "translateX(15px) scale(1.02)" : "translateY(15px) scale(1.02)"
    },
    ...u ? {
      top: 0,
      height: "100vh",
      maxWidth: "90%",
      width: typeof r == "number" && r >= Vr ? r : Rt
    } : {
      left: 0,
      width: "100%",
      maxHeight: "90%",
      height: typeof t == "number" && t >= Vr ? t : Rt
    }
  };
}
function Sa(e = "bottom") {
  const t = Wt(e), r = ri(e), n = Zr("margin", r);
  return {
    position: "absolute",
    cursor: t ? "col-resize" : "row-resize",
    zIndex: 1e5,
    [r]: 0,
    [n]: "-4px",
    ...t ? {
      top: 0,
      height: "100%",
      width: "4px"
    } : {
      width: "100%",
      height: "4px"
    }
  };
}
const wa = Oe("div", (e, t) => ({
  fontSize: "clamp(12px, 1.5vw, 14px)",
  fontFamily: "sans-serif",
  display: "flex",
  backgroundColor: t.background,
  color: t.foreground
}), {
  "(max-width: 700px)": {
    flexDirection: "column"
  },
  "(max-width: 600px)": {
    fontSize: ".9em"
    // flexDirection: 'column',
  }
}), Oa = Oe("div", () => ({
  flex: "1 1 500px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  height: "100%"
}), {
  "(max-width: 700px)": (e, t) => ({
    borderTop: "2px solid " + t.gray
  })
}), je = Oe("button", (e, t) => ({
  appearance: "none",
  fontSize: ".9em",
  fontWeight: "bold",
  background: t.gray,
  border: "0",
  borderRadius: ".3em",
  color: "white",
  padding: ".5em",
  opacity: e.disabled ? ".5" : void 0,
  cursor: "pointer"
})), Ca = Oe("span", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5em",
  fontSize: "0.9em"
}), vt = Oe("span", {
  display: "inline-flex",
  alignItems: "center",
  padding: ".2em .4em",
  fontWeight: "bold",
  textShadow: "0 0 10px black",
  borderRadius: ".2em"
}), Ue = Oe("code", {
  fontSize: ".9em",
  color: "inherit",
  background: "inherit"
}), _a = Oe("input", (e, t) => ({
  backgroundColor: t.inputBackgroundColor,
  border: 0,
  borderRadius: ".2em",
  color: t.inputTextColor,
  fontSize: ".9em",
  lineHeight: "1.3",
  padding: ".3em .4em"
})), zr = Oe("select", (e, t) => ({
  display: "inline-block",
  fontSize: ".9em",
  fontFamily: "sans-serif",
  fontWeight: "normal",
  lineHeight: "1.3",
  padding: ".3em 1.5em .3em .5em",
  height: "auto",
  border: 0,
  borderRadius: ".2em",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundColor: t.inputBackgroundColor,
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23444444'><polygon points='0,25 100,25 50,75'/></svg>")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right .55em center",
  backgroundSize: ".65em auto, 100%",
  color: t.inputTextColor
}), {
  "(max-width: 500px)": {
    display: "none"
  }
});
function Wr({
  text: e
}) {
  return /* @__PURE__ */ p.createElement("span", {
    style: {
      position: "absolute",
      width: "0.1px",
      height: "0.1px",
      overflow: "hidden"
    }
  }, e);
}
const Bn = Oe("div", {
  fontFamily: "Menlo, monospace",
  fontSize: "1em",
  lineHeight: "1.7",
  outline: "none",
  wordBreak: "break-word"
}), xa = Oe("span", {
  color: "white"
}), Ta = Oe("button", {
  cursor: "pointer",
  color: "white"
}), Ra = Oe("button", {
  cursor: "pointer",
  color: "inherit",
  font: "inherit",
  outline: "inherit",
  background: "transparent",
  border: "none",
  padding: 0
}), Aa = ({
  value: e
}) => {
  const [t, r] = p.useState("NoCopy");
  return /* @__PURE__ */ p.createElement("button", {
    onClick: t === "NoCopy" ? () => {
      navigator.clipboard.writeText(Go.stringify(e)).then(() => {
        r("SuccessCopy"), setTimeout(() => {
          r("NoCopy");
        }, 1500);
      }, (n) => {
        console.error("Failed to copy: ", n), r("ErrorCopy"), setTimeout(() => {
          r("NoCopy");
        }, 1500);
      });
    } : void 0,
    style: {
      cursor: "pointer",
      color: "inherit",
      font: "inherit",
      outline: "inherit",
      background: "transparent",
      border: "none",
      padding: 0
    }
  }, t === "NoCopy" ? /* @__PURE__ */ p.createElement(Ia, null) : t === "SuccessCopy" ? /* @__PURE__ */ p.createElement(Na, null) : /* @__PURE__ */ p.createElement($a, null));
}, Pa = Oe("span", (e, t) => ({
  color: t.danger
})), vr = Oe("div", {
  marginLeft: ".1em",
  paddingLeft: "1em",
  borderLeft: "2px solid rgba(0,0,0,.15)"
}), ka = Oe("span", {
  color: "grey",
  fontSize: ".7em"
}), Vn = ({
  expanded: e,
  style: t = {}
}) => /* @__PURE__ */ p.createElement("span", {
  style: {
    display: "inline-block",
    transition: "all .1s ease",
    transform: "rotate(" + (e ? 90 : 0) + "deg) " + (t.transform || ""),
    ...t
  }
}, "▶"), Ia = () => /* @__PURE__ */ p.createElement("span", {
  "aria-label": "Copy object to clipboard",
  title: "Copy object to clipboard",
  style: {
    paddingLeft: "1em"
  }
}, /* @__PURE__ */ p.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10"
}, /* @__PURE__ */ p.createElement("path", {
  fill: "currentColor",
  d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
}), /* @__PURE__ */ p.createElement("path", {
  fill: "currentColor",
  d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
}))), $a = () => /* @__PURE__ */ p.createElement("span", {
  "aria-label": "Failed copying to clipboard",
  title: "Failed copying to clipboard",
  style: {
    paddingLeft: "1em",
    display: "flex",
    alignItems: "center"
  }
}, /* @__PURE__ */ p.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10",
  display: "block"
}, /* @__PURE__ */ p.createElement("path", {
  fill: "red",
  d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
})), /* @__PURE__ */ p.createElement("span", {
  style: {
    color: "red",
    fontSize: "12px",
    paddingLeft: "4px",
    position: "relative",
    top: "2px"
  }
}, "See console")), Na = () => /* @__PURE__ */ p.createElement("span", {
  "aria-label": "Object copied to clipboard",
  title: "Object copied to clipboard",
  style: {
    paddingLeft: "1em",
    display: "inline-block",
    verticalAlign: "middle"
  }
}, /* @__PURE__ */ p.createElement("svg", {
  height: "16",
  viewBox: "0 0 16 16",
  width: "16",
  display: "block"
}, /* @__PURE__ */ p.createElement("path", {
  fill: "green",
  d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
})));
function Da(e, t) {
  if (t < 1)
    return [];
  let r = 0;
  const n = [];
  for (; r < e.length; )
    n.push(e.slice(r, r + t)), r = r + t;
  return n;
}
const La = ({
  handleEntry: e,
  label: t,
  value: r,
  subEntries: n = [],
  subEntryPages: o = [],
  type: i,
  expanded: s = !1,
  copyable: a = !1,
  toggleExpanded: c,
  pageSize: u
}) => {
  const [f, d] = p.useState([]);
  return /* @__PURE__ */ p.createElement(Bn, {
    key: t
  }, o.length ? /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Ra, {
    onClick: () => c()
  }, /* @__PURE__ */ p.createElement(Vn, {
    expanded: s
  }), " ", t, " ", /* @__PURE__ */ p.createElement(ka, null, String(i).toLowerCase() === "iterable" ? "(Iterable) " : "", n.length, " ", n.length > 1 ? "items" : "item")), a ? /* @__PURE__ */ p.createElement(Aa, {
    value: r
  }) : null, s ? o.length === 1 ? /* @__PURE__ */ p.createElement(vr, null, n.map(e)) : /* @__PURE__ */ p.createElement(vr, null, o.map((h, g) => /* @__PURE__ */ p.createElement("div", {
    key: g
  }, /* @__PURE__ */ p.createElement(Bn, null, /* @__PURE__ */ p.createElement(Ta, {
    onClick: () => d((m) => m.includes(g) ? m.filter((y) => y !== g) : [...m, g])
  }, /* @__PURE__ */ p.createElement(Vn, {
    expanded: s
  }), " [", g * u, " ...", " ", g * u + u - 1, "]"), f.includes(g) ? /* @__PURE__ */ p.createElement(vr, null, h.map(e)) : null)))) : null) : /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(xa, null, t, ":"), " ", /* @__PURE__ */ p.createElement(Pa, null, ei(r))));
};
function Ma(e) {
  return Symbol.iterator in e;
}
function Hr({
  value: e,
  defaultExpanded: t,
  renderer: r = La,
  pageSize: n = 100,
  copyable: o = !1,
  ...i
}) {
  const [s, a] = p.useState(!!t), c = p.useCallback(() => a((g) => !g), []);
  let u = typeof e, f = [];
  const d = (g) => {
    const m = t === !0 ? {
      [g.label]: !0
    } : t == null ? void 0 : t[g.label];
    return {
      ...g,
      defaultExpanded: m
    };
  };
  Array.isArray(e) ? (u = "array", f = e.map((g, m) => d({
    label: m.toString(),
    value: g
  }))) : e !== null && typeof e == "object" && Ma(e) && typeof e[Symbol.iterator] == "function" ? (u = "Iterable", f = Array.from(e, (g, m) => d({
    label: m.toString(),
    value: g
  }))) : typeof e == "object" && e !== null && (u = "object", f = Object.entries(e).map(([g, m]) => d({
    label: g,
    value: m
  })));
  const h = Da(f, n);
  return r({
    handleEntry: (g) => /* @__PURE__ */ p.createElement(Hr, ze({
      key: g.label,
      value: e,
      renderer: r,
      copyable: o
    }, i, g)),
    type: u,
    subEntries: f,
    subEntryPages: h,
    value: e,
    expanded: s,
    copyable: o,
    toggleExpanded: c,
    pageSize: n,
    ...i
  });
}
function ni(e) {
  return /* @__PURE__ */ p.createElement("svg", ze({
    width: "40px",
    height: "40px",
    viewBox: "0 0 190 190",
    version: "1.1"
  }, e), /* @__PURE__ */ p.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ p.createElement("g", {
    transform: "translate(-33.000000, 0.000000)"
  }, /* @__PURE__ */ p.createElement("path", {
    d: "M72.7239712,61.3436237 C69.631224,46.362877 68.9675112,34.8727722 70.9666331,26.5293551 C72.1555965,21.5671678 74.3293088,17.5190846 77.6346064,14.5984631 C81.1241394,11.5150478 85.5360327,10.0020122 90.493257,10.0020122 C98.6712013,10.0020122 107.26826,13.7273214 116.455725,20.8044264 C120.20312,23.6910458 124.092437,27.170411 128.131651,31.2444746 C128.45314,30.8310265 128.816542,30.4410453 129.22143,30.0806152 C140.64098,19.9149716 150.255245,13.5989272 158.478408,11.1636507 C163.367899,9.715636 167.958526,9.57768202 172.138936,10.983031 C176.551631,12.4664684 180.06766,15.5329489 182.548314,19.8281091 C186.642288,26.9166735 187.721918,36.2310983 186.195595,47.7320243 C185.573451,52.4199112 184.50985,57.5263831 183.007094,63.0593153 C183.574045,63.1277086 184.142416,63.2532808 184.705041,63.4395297 C199.193932,68.2358678 209.453582,73.3937462 215.665021,79.2882839 C219.360669,82.7953831 221.773972,86.6998434 222.646365,91.0218204 C223.567176,95.5836746 222.669313,100.159332 220.191548,104.451297 C216.105211,111.529614 208.591643,117.11221 197.887587,121.534031 C193.589552,123.309539 188.726579,124.917559 183.293259,126.363748 C183.541176,126.92292 183.733521,127.516759 183.862138,128.139758 C186.954886,143.120505 187.618598,154.61061 185.619477,162.954027 C184.430513,167.916214 182.256801,171.964297 178.951503,174.884919 C175.46197,177.968334 171.050077,179.48137 166.092853,179.48137 C157.914908,179.48137 149.31785,175.756061 140.130385,168.678956 C136.343104,165.761613 132.410866,162.238839 128.325434,158.108619 C127.905075,158.765474 127.388968,159.376011 126.77857,159.919385 C115.35902,170.085028 105.744755,176.401073 97.5215915,178.836349 C92.6321009,180.284364 88.0414736,180.422318 83.8610636,179.016969 C79.4483686,177.533532 75.9323404,174.467051 73.4516862,170.171891 C69.3577116,163.083327 68.2780823,153.768902 69.8044053,142.267976 C70.449038,137.410634 71.56762,132.103898 73.1575891,126.339009 C72.5361041,126.276104 71.9120754,126.144816 71.2949591,125.940529 C56.8060684,121.144191 46.5464184,115.986312 40.3349789,110.091775 C36.6393312,106.584675 34.2260275,102.680215 33.3536352,98.3582381 C32.4328237,93.7963839 33.3306866,89.2207269 35.8084524,84.9287618 C39.8947886,77.8504443 47.4083565,72.2678481 58.1124133,67.8460273 C62.5385143,66.0176154 67.5637208,64.366822 73.1939394,62.8874674 C72.9933393,62.3969171 72.8349374,61.8811235 72.7239712,61.3436237 Z",
    fill: "#002C4B",
    fillRule: "nonzero",
    transform: "translate(128.000000, 95.000000) scale(-1, 1) translate(-128.000000, -95.000000) "
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M113.396882,64 L142.608177,64 C144.399254,64 146.053521,64.958025 146.944933,66.5115174 L161.577138,92.0115174 C162.461464,93.5526583 162.461464,95.4473417 161.577138,96.9884826 L146.944933,122.488483 C146.053521,124.041975 144.399254,125 142.608177,125 L113.396882,125 C111.605806,125 109.951539,124.041975 109.060126,122.488483 L94.4279211,96.9884826 C93.543596,95.4473417 93.543596,93.5526583 94.4279211,92.0115174 L109.060126,66.5115174 C109.951539,64.958025 111.605806,64 113.396882,64 Z M138.987827,70.2765273 C140.779849,70.2765273 142.434839,71.2355558 143.325899,72.7903404 L154.343038,92.0138131 C155.225607,93.5537825 155.225607,95.4462175 154.343038,96.9861869 L143.325899,116.20966 C142.434839,117.764444 140.779849,118.723473 138.987827,118.723473 L117.017233,118.723473 C115.225211,118.723473 113.570221,117.764444 112.67916,116.20966 L101.662022,96.9861869 C100.779452,95.4462175 100.779452,93.5537825 101.662022,92.0138131 L112.67916,72.7903404 C113.570221,71.2355558 115.225211,70.2765273 117.017233,70.2765273 L138.987827,70.2765273 Z M135.080648,77.1414791 L120.924411,77.1414791 C119.134228,77.1414791 117.480644,78.0985567 116.5889,79.6508285 L116.5889,79.6508285 L109.489217,92.0093494 C108.603232,93.5515958 108.603232,95.4484042 109.489217,96.9906506 L109.489217,96.9906506 L116.5889,109.349172 C117.480644,110.901443 119.134228,111.858521 120.924411,111.858521 L120.924411,111.858521 L135.080648,111.858521 C136.870831,111.858521 138.524416,110.901443 139.41616,109.349172 L139.41616,109.349172 L146.515843,96.9906506 C147.401828,95.4484042 147.401828,93.5515958 146.515843,92.0093494 L146.515843,92.0093494 L139.41616,79.6508285 C138.524416,78.0985567 136.870831,77.1414791 135.080648,77.1414791 L135.080648,77.1414791 Z M131.319186,83.7122186 C133.108028,83.7122186 134.760587,84.6678753 135.652827,86.2183156 L138.983552,92.0060969 C139.87203,93.5500005 139.87203,95.4499995 138.983552,96.9939031 L135.652827,102.781684 C134.760587,104.332125 133.108028,105.287781 131.319186,105.287781 L124.685874,105.287781 C122.897032,105.287781 121.244473,104.332125 120.352233,102.781684 L117.021508,96.9939031 C116.13303,95.4499995 116.13303,93.5500005 117.021508,92.0060969 L120.352233,86.2183156 C121.244473,84.6678753 122.897032,83.7122186 124.685874,83.7122186 L131.319186,83.7122186 Z M128.003794,90.1848875 C126.459294,90.1848875 125.034382,91.0072828 124.263005,92.3424437 C123.491732,93.6774232 123.491732,95.3225768 124.263005,96.6575563 C125.034382,97.9927172 126.459294,98.8151125 128.001266,98.8151125 L128.001266,98.8151125 C129.545766,98.8151125 130.970678,97.9927172 131.742055,96.6575563 C132.513327,95.3225768 132.513327,93.6774232 131.742055,92.3424437 C130.970678,91.0072828 129.545766,90.1848875 128.003794,90.1848875 L128.003794,90.1848875 Z M93,94.5009646 L100.767764,94.5009646",
    fill: "#FFD94C"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M87.8601729,108.357758 C89.1715224,107.608286 90.8360246,108.074601 91.5779424,109.399303 L91.5779424,109.399303 L92.0525843,110.24352 C95.8563392,116.982993 99.8190116,123.380176 103.940602,129.435068 C108.807881,136.585427 114.28184,143.82411 120.362479,151.151115 C121.316878,152.30114 121.184944,154.011176 120.065686,154.997937 L120.065686,154.997937 L119.454208,155.534625 C99.3465389,173.103314 86.2778188,176.612552 80.2480482,166.062341 C74.3500652,155.742717 76.4844915,136.982888 86.6513274,109.782853 C86.876818,109.179582 87.3045861,108.675291 87.8601729,108.357758 Z M173.534177,129.041504 C174.986131,128.785177 176.375496,129.742138 176.65963,131.194242 L176.65963,131.194242 L176.812815,131.986376 C181.782365,157.995459 178.283348,171 166.315764,171 C154.609745,171 139.708724,159.909007 121.612702,137.727022 C121.211349,137.235047 120.994572,136.617371 121,135.981509 C121.013158,134.480686 122.235785,133.274651 123.730918,133.287756 L123.730918,133.287756 L124.684654,133.294531 C132.305698,133.335994 139.714387,133.071591 146.910723,132.501323 C155.409039,131.82788 164.283523,130.674607 173.534177,129.041504 Z M180.408726,73.8119663 C180.932139,72.4026903 182.508386,71.6634537 183.954581,72.149012 L183.954581,72.149012 L184.742552,72.4154854 C210.583763,81.217922 220.402356,90.8916805 214.198332,101.436761 C208.129904,111.751366 190.484347,119.260339 161.26166,123.963678 C160.613529,124.067994 159.948643,123.945969 159.382735,123.618843 C158.047025,122.846729 157.602046,121.158214 158.388848,119.847438 L158.388848,119.847438 L158.889328,119.0105 C162.877183,112.31633 166.481358,105.654262 169.701854,99.0242957 C173.50501,91.1948179 177.073967,82.7907081 180.408726,73.8119663 Z M94.7383398,66.0363218 C95.3864708,65.9320063 96.0513565,66.0540315 96.6172646,66.3811573 C97.9529754,67.153271 98.3979538,68.8417862 97.6111517,70.1525615 L97.6111517,70.1525615 L97.1106718,70.9895001 C93.1228168,77.6836699 89.5186416,84.3457379 86.2981462,90.9757043 C82.49499,98.8051821 78.9260328,107.209292 75.5912744,116.188034 C75.0678608,117.59731 73.4916142,118.336546 72.045419,117.850988 L72.045419,117.850988 L71.2574475,117.584515 C45.4162372,108.782078 35.597644,99.1083195 41.8016679,88.5632391 C47.8700957,78.2486335 65.515653,70.7396611 94.7383398,66.0363218 Z M136.545792,34.4653746 C156.653461,16.8966864 169.722181,13.3874478 175.751952,23.9376587 C181.649935,34.2572826 179.515508,53.0171122 169.348673,80.2171474 C169.123182,80.8204179 168.695414,81.324709 168.139827,81.6422422 C166.828478,82.3917144 165.163975,81.9253986 164.422058,80.6006966 L164.422058,80.6006966 L163.947416,79.7564798 C160.143661,73.0170065 156.180988,66.6198239 152.059398,60.564932 C147.192119,53.4145727 141.71816,46.1758903 135.637521,38.8488847 C134.683122,37.6988602 134.815056,35.9888243 135.934314,35.0020629 L135.934314,35.0020629 Z M90.6842361,18 C102.390255,18 117.291276,29.0909926 135.387298,51.2729777 C135.788651,51.7649527 136.005428,52.3826288 136,53.0184911 C135.986842,54.5193144 134.764215,55.7253489 133.269082,55.7122445 L133.269082,55.7122445 L132.315346,55.7054689 C124.694302,55.6640063 117.285613,55.9284091 110.089277,56.4986773 C101.590961,57.17212 92.7164767,58.325393 83.4658235,59.9584962 C82.0138691,60.2148231 80.6245044,59.2578618 80.3403697,57.805758 L80.3403697,57.805758 L80.1871846,57.0136235 C75.2176347,31.0045412 78.7166519,18 90.6842361,18 Z",
    fill: "#FF4154"
  }))));
}
var qr = {}, ja = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, br = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Fa() {
  if (zn)
    return br;
  zn = 1;
  var e = Qt;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(d, h) {
    var g = h(), m = n({ inst: { value: g, getSnapshot: h } }), y = m[0].inst, v = m[1];
    return i(function() {
      y.value = g, y.getSnapshot = h, c(y) && v({ inst: y });
    }, [d, g, h]), o(function() {
      return c(y) && v({ inst: y }), d(function() {
        c(y) && v({ inst: y });
      });
    }, [d]), s(g), g;
  }
  function c(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var g = h();
      return !r(d, g);
    } catch {
      return !0;
    }
  }
  function u(d, h) {
    return h();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return br.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, br;
}
var Er = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Ua() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Qt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(R) {
      {
        for (var x = arguments.length, E = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
          E[F - 1] = arguments[F];
        n("error", R, E);
      }
    }
    function n(R, x, E) {
      {
        var F = t.ReactDebugCurrentFrame, pe = F.getStackAddendum();
        pe !== "" && (x += "%s", E = E.concat([pe]));
        var ce = E.map(function($) {
          return String($);
        });
        ce.unshift("Warning: " + x), Function.prototype.apply.call(console[R], console, ce);
      }
    }
    function o(R, x) {
      return R === x && (R !== 0 || 1 / R === 1 / x) || R !== R && x !== x;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, a = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, f = !1, d = !1;
    function h(R, x, E) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var F = x();
      if (!d) {
        var pe = x();
        i(F, pe) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var ce = s({
        inst: {
          value: F,
          getSnapshot: x
        }
      }), $ = ce[0].inst, ne = ce[1];
      return c(function() {
        $.value = F, $.getSnapshot = x, g($) && ne({
          inst: $
        });
      }, [R, F, x]), a(function() {
        g($) && ne({
          inst: $
        });
        var le = function() {
          g($) && ne({
            inst: $
          });
        };
        return R(le);
      }, [R]), u(F), F;
    }
    function g(R) {
      var x = R.getSnapshot, E = R.value;
      try {
        var F = x();
        return !i(E, F);
      } catch {
        return !0;
      }
    }
    function m(R, x, E) {
      return x();
    }
    var y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !y, T = v ? m : h, P = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : T;
    Er.useSyncExternalStore = P, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Er;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Fa() : e.exports = Ua();
})(ja);
function Ba({
  initialIsOpen: e,
  panelProps: t = {},
  closeButtonProps: r = {},
  toggleButtonProps: n = {},
  position: o = "bottom-left",
  containerElement: i = "aside",
  context: s,
  styleNonce: a,
  panelPosition: c = "bottom",
  errorTypes: u = []
}) {
  const f = p.useRef(null), d = p.useRef(null), [h, g] = qe("reactQueryDevtoolsOpen", e), [m, y] = qe("reactQueryDevtoolsHeight", Rt), [v, T] = qe("reactQueryDevtoolsWidth", Rt), [P = "bottom", R] = qe("reactQueryDevtoolsPanelPosition", c), [x, E] = p.useState(!1), [F, pe] = p.useState(!1), ce = ya(), $ = (V, oe) => {
    if (!V || oe.button !== 0)
      return;
    const me = Wt(P);
    pe(!0);
    const {
      height: Ee,
      width: w
    } = V.getBoundingClientRect(), O = oe.clientX, D = oe.clientY;
    let k = 0;
    const N = (I) => {
      I.preventDefault(), me ? (k = w + (P === "right" ? O - I.clientX : I.clientX - O), T(k)) : (k = Ee + (P === "bottom" ? D - I.clientY : I.clientY - D), y(k)), k < Vr ? g(!1) : g(!0);
    }, j = () => {
      F && pe(!1), document.removeEventListener("mousemove", N, !1), document.removeEventListener("mouseUp", j, !1);
    };
    document.addEventListener("mousemove", N, !1), document.addEventListener("mouseup", j, !1);
  };
  p.useEffect(() => {
    E(h ?? !1);
  }, [h, x, E]), p.useEffect(() => {
    const V = d.current;
    if (V) {
      const oe = () => {
        x && (V.style.visibility = "visible");
      }, me = () => {
        x || (V.style.visibility = "hidden");
      };
      return V.addEventListener("transitionstart", oe), V.addEventListener("transitionend", me), () => {
        V.removeEventListener("transitionstart", oe), V.removeEventListener("transitionend", me);
      };
    }
  }, [x]), p.useEffect(() => {
    var V;
    if (x && (V = f.current) != null && V.parentElement) {
      const {
        parentElement: oe
      } = f.current, me = Zr("padding", P), Ee = Wt(P), w = (({
        padding: D,
        paddingTop: k,
        paddingBottom: N,
        paddingLeft: j,
        paddingRight: I
      }) => ({
        padding: D,
        paddingTop: k,
        paddingBottom: N,
        paddingLeft: j,
        paddingRight: I
      }))(oe.style), O = () => {
        oe.style.padding = "0px", oe.style.paddingTop = "0px", oe.style.paddingBottom = "0px", oe.style.paddingLeft = "0px", oe.style.paddingRight = "0px", oe.style[me] = (Ee ? v : m) + "px";
      };
      if (O(), typeof window < "u")
        return window.addEventListener("resize", O), () => {
          window.removeEventListener("resize", O), Object.entries(w).forEach(([D, k]) => {
            oe.style[D] = k;
          });
        };
    }
  }, [x, P, m, v]);
  const {
    style: ne = {},
    ...le
  } = t, {
    style: be = {},
    onClick: ie,
    ...ae
  } = n, W = Ea({
    position: P,
    devtoolsTheme: K,
    isOpen: x,
    height: m,
    width: v,
    isResizing: F,
    panelStyle: ne
  });
  return ce() ? /* @__PURE__ */ p.createElement(i, {
    ref: f,
    className: "ReactQueryDevtools",
    "aria-label": "React Query Devtools"
  }, /* @__PURE__ */ p.createElement(Xo, {
    theme: K
  }, /* @__PURE__ */ p.createElement(oi, ze({
    ref: d,
    context: s,
    styleNonce: a,
    position: P,
    onPositionChange: R,
    showCloseButton: !0,
    closeButtonProps: r
  }, le, {
    style: W,
    isOpen: x,
    setIsOpen: g,
    onDragStart: (V) => $(d.current, V),
    errorTypes: u
  }))), x ? null : /* @__PURE__ */ p.createElement("button", ze({
    type: "button"
  }, ae, {
    "aria-label": "Open React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: (V) => {
      g(!0), ie == null || ie(V);
    },
    style: {
      background: "none",
      border: 0,
      padding: 0,
      position: "fixed",
      zIndex: 99999,
      display: "inline-flex",
      fontSize: "1.5em",
      margin: ".5em",
      cursor: "pointer",
      width: "fit-content",
      ...o === "top-right" ? {
        top: "0",
        right: "0"
      } : o === "top-left" ? {
        top: "0",
        left: "0"
      } : o === "bottom-right" ? {
        bottom: "0",
        right: "0"
      } : {
        bottom: "0",
        left: "0"
      },
      ...be
    }
  }), /* @__PURE__ */ p.createElement(ni, {
    "aria-hidden": !0
  }), /* @__PURE__ */ p.createElement(Wr, {
    text: "Open React Query Devtools"
  }))) : null;
}
const we = (e, t, r = !1) => qr.useSyncExternalStore(p.useCallback((n) => r ? () => {
} : e.subscribe(ys.batchCalls(n)), [e, r]), t, t), oi = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const {
    isOpen: n = !0,
    styleNonce: o,
    setIsOpen: i,
    context: s,
    onDragStart: a,
    onPositionChange: c,
    showCloseButton: u,
    position: f,
    closeButtonProps: d = {},
    errorTypes: h = [],
    ...g
  } = t, {
    onClick: m,
    ...y
  } = d, v = hs({
    context: s
  }), T = v.getQueryCache(), [P, R] = qe("reactQueryDevtoolsSortFn", Object.keys(gr)[0]), [x, E] = qe("reactQueryDevtoolsFilter", ""), [F, pe] = qe("reactQueryDevtoolsBaseSort", 1), ce = p.useMemo(() => gr[P], [P]), $ = we(T, () => T.getAll().length, !n), [ne, le] = qe("reactQueryDevtoolsActiveQueryHash", ""), be = p.useMemo(() => {
    const W = T.getAll();
    if ($ === 0)
      return [];
    const V = x ? W.filter((me) => As(me.queryHash, x).passed) : [...W];
    return ce ? V.sort((me, Ee) => ce(me, Ee) * F) : V;
  }, [F, ce, x, $, T]), [ie, ae] = p.useState(!1);
  return /* @__PURE__ */ p.createElement(Xo, {
    theme: K
  }, /* @__PURE__ */ p.createElement(wa, ze({
    ref: r,
    className: "ReactQueryDevtoolsPanel",
    "aria-label": "React Query Devtools Panel",
    id: "ReactQueryDevtoolsPanel"
  }, g, {
    style: {
      height: Rt,
      position: "relative",
      ...g.style
    }
  }), /* @__PURE__ */ p.createElement("style", {
    nonce: o,
    dangerouslySetInnerHTML: {
      __html: `
            .ReactQueryDevtoolsPanel * {
              scrollbar-color: ` + K.backgroundAlt + " " + K.gray + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar, .ReactQueryDevtoolsPanel scrollbar {
              width: 1em;
              height: 1em;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-track, .ReactQueryDevtoolsPanel scrollbar-track {
              background: ` + K.backgroundAlt + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-thumb, .ReactQueryDevtoolsPanel scrollbar-thumb {
              background: ` + K.gray + `;
              border-radius: .5em;
              border: 3px solid ` + K.backgroundAlt + `;
            }
          `
    }
  }), /* @__PURE__ */ p.createElement("div", {
    style: Sa(f),
    onMouseDown: a
  }), n && /* @__PURE__ */ p.createElement("div", {
    style: {
      flex: "1 1 500px",
      minHeight: "40%",
      maxHeight: "100%",
      overflow: "auto",
      borderRight: "1px solid " + K.grayAlt,
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ p.createElement("div", {
    style: {
      padding: ".5em",
      background: K.backgroundAlt,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /* @__PURE__ */ p.createElement("button", {
    type: "button",
    "aria-label": "Close React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true",
    onClick: () => i(!1),
    style: {
      display: "inline-flex",
      background: "none",
      border: 0,
      padding: 0,
      marginRight: ".5em",
      cursor: "pointer"
    }
  }, /* @__PURE__ */ p.createElement(ni, {
    "aria-hidden": !0
  }), /* @__PURE__ */ p.createElement(Wr, {
    text: "Close React Query Devtools"
  })), /* @__PURE__ */ p.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ p.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".5em"
    }
  }, /* @__PURE__ */ p.createElement(za, {
    queryCache: T
  }), f && c ? /* @__PURE__ */ p.createElement(zr, {
    "aria-label": "Panel position",
    value: f,
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (W) => c(W.target.value)
  }, /* @__PURE__ */ p.createElement("option", {
    value: "left"
  }, "Left"), /* @__PURE__ */ p.createElement("option", {
    value: "right"
  }, "Right"), /* @__PURE__ */ p.createElement("option", {
    value: "top"
  }, "Top"), /* @__PURE__ */ p.createElement("option", {
    value: "bottom"
  }, "Bottom")) : null), /* @__PURE__ */ p.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.5em"
    }
  }, /* @__PURE__ */ p.createElement(_a, {
    placeholder: "Filter",
    "aria-label": "Filter by queryhash",
    value: x ?? "",
    onChange: (W) => E(W.target.value),
    onKeyDown: (W) => {
      W.key === "Escape" && E("");
    },
    style: {
      flex: "1",
      width: "100%"
    }
  }), /* @__PURE__ */ p.createElement(zr, {
    "aria-label": "Sort queries",
    value: P,
    onChange: (W) => R(W.target.value),
    style: {
      flex: "1",
      minWidth: 75,
      marginRight: ".5em"
    }
  }, Object.keys(gr).map((W) => /* @__PURE__ */ p.createElement("option", {
    key: W,
    value: W
  }, "Sort by ", W))), /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => pe((W) => W * -1),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, F === 1 ? "⬆ Asc" : "⬇ Desc"), /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => {
      ie ? (Pn.setOnline(void 0), ae(!1), window.dispatchEvent(new Event("online"))) : (Pn.setOnline(!1), ae(!0));
    },
    "aria-label": ie ? "Restore offline mock" : "Mock offline behavior",
    title: ie ? "Restore offline mock" : "Mock offline behavior",
    style: {
      padding: "0",
      height: "2em"
    }
  }, /* @__PURE__ */ p.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "2em",
    height: "2em",
    viewBox: "0 0 24 24",
    stroke: ie ? K.danger : "currentColor",
    fill: "none"
  }, ie ? /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ p.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374"
  }), /* @__PURE__ */ p.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21"
  })) : /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ p.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M6.343 12.343a8 8 0 0 1 11.314 0"
  }), /* @__PURE__ */ p.createElement("path", {
    d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
  }))), /* @__PURE__ */ p.createElement(Wr, {
    text: ie ? "Restore offline mock" : "Mock offline behavior"
  }))))), /* @__PURE__ */ p.createElement("div", {
    style: {
      overflowY: "auto",
      flex: "1"
    }
  }, be.map((W) => /* @__PURE__ */ p.createElement(Wa, {
    queryKey: W.queryKey,
    activeQueryHash: ne,
    setActiveQueryHash: le,
    key: W.queryHash,
    queryCache: T
  })))), ne && n ? /* @__PURE__ */ p.createElement(Va, {
    activeQueryHash: ne,
    queryCache: T,
    queryClient: v,
    errorTypes: h
  }) : null, u ? /* @__PURE__ */ p.createElement(je, ze({
    type: "button",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, y, {
    style: {
      position: "absolute",
      zIndex: 99999,
      margin: ".5em",
      bottom: 0,
      left: 0,
      ...y.style
    },
    onClick: (W) => {
      i(!1), m == null || m(W);
    }
  }), "Close") : null));
}), Va = ({
  queryCache: e,
  activeQueryHash: t,
  queryClient: r,
  errorTypes: n
}) => {
  var o, i;
  const s = we(e, () => e.getAll().find((m) => m.queryHash === t)), a = we(e, () => {
    var m;
    return (m = e.getAll().find((y) => y.queryHash === t)) == null ? void 0 : m.state;
  }), c = (o = we(e, () => {
    var m;
    return (m = e.getAll().find((y) => y.queryHash === t)) == null ? void 0 : m.isStale();
  })) != null ? o : !1, u = (i = we(e, () => {
    var m;
    return (m = e.getAll().find((y) => y.queryHash === t)) == null ? void 0 : m.getObserversCount();
  })) != null ? i : 0, f = () => {
    const m = s == null ? void 0 : s.fetch();
    m == null || m.catch(Ha);
  }, d = ls(() => {
    if (s && a != null && a.error) {
      const m = n.find((y) => {
        var v;
        return y.initializer(s).toString() === ((v = a.error) == null ? void 0 : v.toString());
      });
      return m == null ? void 0 : m.name;
    }
  }, [s, a == null ? void 0 : a.error, n]);
  if (!s || !a)
    return null;
  const h = (m) => {
    var y;
    const v = (y = m == null ? void 0 : m.initializer(s)) != null ? y : new Error("Unknown error from devtools"), T = s.options;
    s.setState({
      status: "error",
      error: v,
      fetchMeta: {
        ...s.state.fetchMeta,
        __previousQueryOptions: T
      }
    });
  }, g = () => {
    s.fetch(s.state.fetchMeta.__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  return /* @__PURE__ */ p.createElement(Oa, null, /* @__PURE__ */ p.createElement("div", {
    style: {
      padding: ".5em",
      background: K.backgroundAlt,
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Details"), /* @__PURE__ */ p.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ p.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ p.createElement(Ue, {
    style: {
      lineHeight: "1.8em"
    }
  }, /* @__PURE__ */ p.createElement("pre", {
    style: {
      margin: 0,
      padding: 0,
      overflow: "auto"
    }
  }, ei(s.queryKey, !0))), /* @__PURE__ */ p.createElement("span", {
    style: {
      padding: "0.3em .6em",
      borderRadius: "0.4em",
      fontWeight: "bold",
      textShadow: "0 2px 10px black",
      background: Zo({
        queryState: a,
        isStale: c,
        observerCount: u,
        theme: K
      }),
      flexShrink: 0
    }
  }, it(s))), /* @__PURE__ */ p.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Observers: ", /* @__PURE__ */ p.createElement(Ue, null, u)), /* @__PURE__ */ p.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Last Updated:", " ", /* @__PURE__ */ p.createElement(Ue, null, new Date(a.dataUpdatedAt).toLocaleTimeString()))), /* @__PURE__ */ p.createElement("div", {
    style: {
      background: K.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Actions"), /* @__PURE__ */ p.createElement("div", {
    style: {
      padding: "0.5em",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      alignItems: "flex-end"
    }
  }, /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: f,
    disabled: a.fetchStatus === "fetching",
    style: {
      background: K.active
    }
  }, "Refetch"), " ", /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => r.invalidateQueries(s),
    style: {
      background: K.warning,
      color: K.inputTextColor
    }
  }, "Invalidate"), " ", /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => r.resetQueries(s),
    style: {
      background: K.gray
    }
  }, "Reset"), " ", /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => r.removeQueries(s),
    style: {
      background: K.danger
    }
  }, "Remove"), " ", /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => {
      if (s.state.data === void 0)
        g();
      else {
        const m = s.options;
        s.fetch({
          ...m,
          queryFn: () => new Promise(() => {
          }),
          cacheTime: -1
        }), s.setState({
          data: void 0,
          status: "loading",
          fetchMeta: {
            ...s.state.fetchMeta,
            __previousQueryOptions: m
          }
        });
      }
    },
    style: {
      background: K.paused
    }
  }, s.state.status === "loading" ? "Restore" : "Trigger", " ", "loading"), " ", n.length === 0 || s.state.status === "error" ? /* @__PURE__ */ p.createElement(je, {
    type: "button",
    onClick: () => {
      s.state.error ? r.resetQueries(s) : h();
    },
    style: {
      background: K.danger
    }
  }, s.state.status === "error" ? "Restore" : "Trigger", " error") : /* @__PURE__ */ p.createElement("label", null, "Trigger error:", /* @__PURE__ */ p.createElement(zr, {
    value: d ?? "",
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (m) => {
      const y = n.find((v) => v.name === m.target.value);
      h(y);
    }
  }, /* @__PURE__ */ p.createElement("option", {
    key: "",
    value: ""
  }), n.map((m) => /* @__PURE__ */ p.createElement("option", {
    key: m.name,
    value: m.name
  }, m.name))))), /* @__PURE__ */ p.createElement("div", {
    style: {
      background: K.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Data Explorer"), /* @__PURE__ */ p.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ p.createElement(Hr, {
    label: "Data",
    value: a.data,
    defaultExpanded: {},
    copyable: !0
  })), /* @__PURE__ */ p.createElement("div", {
    style: {
      background: K.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Explorer"), /* @__PURE__ */ p.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ p.createElement(Hr, {
    label: "Query",
    value: s,
    defaultExpanded: {
      queryKey: !0
    }
  })));
}, za = ({
  queryCache: e
}) => {
  const t = we(e, () => e.getAll().filter((s) => it(s) === "fresh").length), r = we(e, () => e.getAll().filter((s) => it(s) === "fetching").length), n = we(e, () => e.getAll().filter((s) => it(s) === "paused").length), o = we(e, () => e.getAll().filter((s) => it(s) === "stale").length), i = we(e, () => e.getAll().filter((s) => it(s) === "inactive").length);
  return /* @__PURE__ */ p.createElement(Ca, null, /* @__PURE__ */ p.createElement(vt, {
    style: {
      background: K.success,
      opacity: t ? 1 : 0.3
    }
  }, "fresh ", /* @__PURE__ */ p.createElement(Ue, null, "(", t, ")")), " ", /* @__PURE__ */ p.createElement(vt, {
    style: {
      background: K.active,
      opacity: r ? 1 : 0.3
    }
  }, "fetching ", /* @__PURE__ */ p.createElement(Ue, null, "(", r, ")")), " ", /* @__PURE__ */ p.createElement(vt, {
    style: {
      background: K.paused,
      opacity: n ? 1 : 0.3
    }
  }, "paused ", /* @__PURE__ */ p.createElement(Ue, null, "(", n, ")")), " ", /* @__PURE__ */ p.createElement(vt, {
    style: {
      background: K.warning,
      color: "black",
      textShadow: "0",
      opacity: o ? 1 : 0.3
    }
  }, "stale ", /* @__PURE__ */ p.createElement(Ue, null, "(", o, ")")), " ", /* @__PURE__ */ p.createElement(vt, {
    style: {
      background: K.gray,
      opacity: i ? 1 : 0.3
    }
  }, "inactive ", /* @__PURE__ */ p.createElement(Ue, null, "(", i, ")")));
}, Wa = /* @__PURE__ */ p.memo(({
  queryKey: e,
  setActiveQueryHash: t,
  activeQueryHash: r,
  queryCache: n
}) => {
  var o, i, s, a;
  const c = (o = we(n, () => {
    var g;
    return (g = n.find(e)) == null ? void 0 : g.queryHash;
  })) != null ? o : "", u = we(n, () => {
    var g;
    return (g = n.find(e)) == null ? void 0 : g.state;
  }), f = (i = we(n, () => {
    var g;
    return (g = n.find(e)) == null ? void 0 : g.isStale();
  })) != null ? i : !1, d = (s = we(n, () => {
    var g;
    return (g = n.find(e)) == null ? void 0 : g.isDisabled();
  })) != null ? s : !1, h = (a = we(n, () => {
    var g;
    return (g = n.find(e)) == null ? void 0 : g.getObserversCount();
  })) != null ? a : 0;
  return u ? /* @__PURE__ */ p.createElement("div", {
    role: "button",
    "aria-label": "Open query details for " + c,
    onClick: () => t(r === c ? "" : c),
    style: {
      display: "flex",
      borderBottom: "solid 1px " + K.grayAlt,
      cursor: "pointer",
      background: c === r ? "rgba(255,255,255,.1)" : void 0
    }
  }, /* @__PURE__ */ p.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: "2em",
      height: "2em",
      background: Zo({
        queryState: u,
        isStale: f,
        observerCount: h,
        theme: K
      }),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      textShadow: f ? "0" : "0 0 10px black",
      color: f ? "black" : "white"
    }
  }, h), d ? /* @__PURE__ */ p.createElement("div", {
    style: {
      flex: "0 0 auto",
      height: "2em",
      background: K.gray,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      padding: "0 0.5em"
    }
  }, "disabled") : null, /* @__PURE__ */ p.createElement(Ue, {
    style: {
      padding: ".5em"
    }
  }, "" + c)) : null;
});
function Ha() {
}
const qa = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : Ba;
process.env.NODE_ENV;
function ii(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: si } = Object.prototype, { getPrototypeOf: en } = Object, tn = ((e) => (t) => {
  const r = si.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (e) => (e = e.toLowerCase(), (t) => tn(t) === e), Xt = (e) => (t) => typeof t === e, { isArray: pt } = Array, At = Xt("undefined");
function Ya(e) {
  return e !== null && !At(e) && e.constructor !== null && !At(e.constructor) && Qe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ai = We("ArrayBuffer");
function Ka(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ai(e.buffer), t;
}
const Qa = Xt("string"), Qe = Xt("function"), ui = Xt("number"), rn = (e) => e !== null && typeof e == "object", Ga = (e) => e === !0 || e === !1, Ft = (e) => {
  if (tn(e) !== "object")
    return !1;
  const t = en(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ja = We("Date"), Xa = We("File"), Za = We("Blob"), eu = We("FileList"), tu = (e) => rn(e) && Qe(e.pipe), ru = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || si.call(e) === t || Qe(e.toString) && e.toString() === t);
}, nu = We("URLSearchParams"), ou = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), pt(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (n = 0; n < s; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function ci(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const li = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), fi = (e) => !At(e) && e !== li;
function Yr() {
  const { caseless: e } = fi(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && ci(t, o) || o;
    Ft(t[i]) && Ft(n) ? t[i] = Yr(t[i], n) : Ft(n) ? t[i] = Yr({}, n) : pt(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && kt(arguments[n], r);
  return t;
}
const iu = (e, t, r, { allOwnKeys: n } = {}) => (kt(t, (o, i) => {
  r && Qe(o) ? e[i] = ii(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), su = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), au = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, uu = (e, t, r, n) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = r !== !1 && en(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, cu = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, lu = (e) => {
  if (!e)
    return null;
  if (pt(e))
    return e;
  let t = e.length;
  if (!ui(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, fu = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && en(Uint8Array)), du = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, pu = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, mu = We("HTMLFormElement"), hu = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Hn = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), yu = We("RegExp"), di = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  kt(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, gu = (e) => {
  di(e, (t, r) => {
    if (Qe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Qe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, vu = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return pt(e) ? n(e) : n(String(e).split(t)), r;
}, bu = () => {
}, Eu = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Sr = "abcdefghijklmnopqrstuvwxyz", qn = "0123456789", pi = {
  DIGIT: qn,
  ALPHA: Sr,
  ALPHA_DIGIT: Sr + Sr.toUpperCase() + qn
}, Su = (e = 16, t = pi.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function wu(e) {
  return !!(e && Qe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ou = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (rn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = pt(n) ? [] : {};
        return kt(n, (s, a) => {
          const c = r(s, o + 1);
          !At(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, b = {
  isArray: pt,
  isArrayBuffer: ai,
  isBuffer: Ya,
  isFormData: ru,
  isArrayBufferView: Ka,
  isString: Qa,
  isNumber: ui,
  isBoolean: Ga,
  isObject: rn,
  isPlainObject: Ft,
  isUndefined: At,
  isDate: Ja,
  isFile: Xa,
  isBlob: Za,
  isRegExp: yu,
  isFunction: Qe,
  isStream: tu,
  isURLSearchParams: nu,
  isTypedArray: fu,
  isFileList: eu,
  forEach: kt,
  merge: Yr,
  extend: iu,
  trim: ou,
  stripBOM: su,
  inherits: au,
  toFlatObject: uu,
  kindOf: tn,
  kindOfTest: We,
  endsWith: cu,
  toArray: lu,
  forEachEntry: du,
  matchAll: pu,
  isHTMLForm: mu,
  hasOwnProperty: Hn,
  hasOwnProp: Hn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: di,
  freezeMethods: gu,
  toObjectSet: vu,
  toCamelCase: hu,
  noop: bu,
  toFiniteNumber: Eu,
  findKey: ci,
  global: li,
  isContextDefined: fi,
  ALPHABET: pi,
  generateString: Su,
  isSpecCompliantForm: wu,
  toJSONObject: Ou
};
function Y(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
b.inherits(Y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const mi = Y.prototype, hi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  hi[e] = { value: e };
});
Object.defineProperties(Y, hi);
Object.defineProperty(mi, "isAxiosError", { value: !0 });
Y.from = (e, t, r, n, o, i) => {
  const s = Object.create(mi);
  return b.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Y.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Cu = null;
function Kr(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function yi(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yn(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = yi(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function _u(e) {
  return b.isArray(e) && !e.some(Kr);
}
const xu = b.toFlatObject(b, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Zt(e, t, r) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, v) {
    return !b.isUndefined(v[y]);
  });
  const n = r.metaTokens, o = r.visitor || f, i = r.dots, s = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (b.isDate(m))
      return m.toISOString();
    if (!c && b.isBlob(m))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(m) || b.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, y, v) {
    let T = m;
    if (m && !v && typeof m == "object") {
      if (b.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (b.isArray(m) && _u(m) || (b.isFileList(m) || b.endsWith(y, "[]")) && (T = b.toArray(m)))
        return y = yi(y), T.forEach(function(R, x) {
          !(b.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Yn([y], x, i) : s === null ? y : y + "[]",
            u(R)
          );
        }), !1;
    }
    return Kr(m) ? !0 : (t.append(Yn(v, y, i), u(m)), !1);
  }
  const d = [], h = Object.assign(xu, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Kr
  });
  function g(m, y) {
    if (!b.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(m), b.forEach(m, function(T, P) {
        (!(b.isUndefined(T) || T === null) && o.call(
          t,
          T,
          b.isString(P) ? P.trim() : P,
          y,
          h
        )) === !0 && g(T, y ? y.concat(P) : [P]);
      }), d.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Kn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function nn(e, t) {
  this._pairs = [], e && Zt(e, this, t);
}
const gi = nn.prototype;
gi.append = function(t, r) {
  this._pairs.push([t, r]);
};
gi.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Kn);
  } : Kn;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Tu(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function vi(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Tu, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = b.isURLSearchParams(t) ? t.toString() : new nn(t, r).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ru {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    b.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Qn = Ru, bi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Au = typeof URLSearchParams < "u" ? URLSearchParams : nn, Pu = typeof FormData < "u" ? FormData : null, ku = typeof Blob < "u" ? Blob : null, Iu = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), $u = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ne = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Au,
    FormData: Pu,
    Blob: ku
  },
  isStandardBrowserEnv: Iu,
  isStandardBrowserWebWorkerEnv: $u,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Nu(e, t) {
  return Zt(e, new Ne.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Ne.isNode && b.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Du(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Lu(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Ei(e) {
  function t(r, n, o, i) {
    let s = r[i++];
    const a = Number.isFinite(+s), c = i >= r.length;
    return s = !s && b.isArray(o) ? o.length : s, c ? (b.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !a) : ((!o[s] || !b.isObject(o[s])) && (o[s] = []), t(r, n, o[s], i) && b.isArray(o[s]) && (o[s] = Lu(o[s])), !a);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const r = {};
    return b.forEachEntry(e, (n, o) => {
      t(Du(n), o, r, 0);
    }), r;
  }
  return null;
}
const Mu = {
  "Content-Type": void 0
};
function ju(e, t, r) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const er = {
  transitional: bi,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = b.isObject(t);
    if (i && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
      return o && o ? JSON.stringify(Ei(t)) : t;
    if (b.isArrayBuffer(t) || b.isBuffer(t) || b.isStream(t) || b.isFile(t) || b.isBlob(t))
      return t;
    if (b.isArrayBufferView(t))
      return t.buffer;
    if (b.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Nu(t, this.formSerializer).toString();
      if ((a = b.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Zt(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), ju(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || er.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && b.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? Y.from(a, Y.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ne.classes.FormData,
    Blob: Ne.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
b.forEach(["delete", "get", "head"], function(t) {
  er.headers[t] = {};
});
b.forEach(["post", "put", "patch"], function(t) {
  er.headers[t] = b.merge(Mu);
});
const on = er, Fu = b.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Uu = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && Fu[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Gn = Symbol("internals");
function bt(e) {
  return e && String(e).trim().toLowerCase();
}
function Ut(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(Ut) : String(e);
}
function Bu(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Vu(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function wr(e, t, r, n, o) {
  if (b.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!b.isString(t)) {
    if (b.isString(n))
      return t.indexOf(n) !== -1;
    if (b.isRegExp(n))
      return n.test(t);
  }
}
function zu(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Wu(e, t) {
  const r = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, s) {
        return this[n].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class tr {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(a, c, u) {
      const f = bt(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = b.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = Ut(a));
    }
    const s = (a, c) => b.forEach(a, (u, f) => i(u, f, c));
    return b.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : b.isString(t) && (t = t.trim()) && !Vu(t) ? s(Uu(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = bt(t), t) {
      const n = b.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Bu(o);
        if (b.isFunction(r))
          return r.call(this, o, n);
        if (b.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = bt(t), t) {
      const n = b.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || wr(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = bt(s), s) {
        const a = b.findKey(n, s);
        a && (!r || wr(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return b.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || wr(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return b.forEach(this, (o, i) => {
      const s = b.findKey(n, i);
      if (s) {
        r[s] = Ut(o), delete r[i];
        return;
      }
      const a = t ? zu(i) : String(i).trim();
      a !== i && delete r[i], r[a] = Ut(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && b.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Gn] = this[Gn] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = bt(s);
      n[a] || (Wu(o, s), n[a] = !0);
    }
    return b.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
tr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.freezeMethods(tr.prototype);
b.freezeMethods(tr);
const Be = tr;
function Or(e, t) {
  const r = this || on, n = t || r, o = Be.from(n.headers);
  let i = n.data;
  return b.forEach(e, function(a) {
    i = a.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Si(e) {
  return !!(e && e.__CANCEL__);
}
function It(e, t, r) {
  Y.call(this, e ?? "canceled", Y.ERR_CANCELED, t, r), this.name = "CanceledError";
}
b.inherits(It, Y, {
  __CANCEL__: !0
});
function Hu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Y(
    "Request failed with status code " + r.status,
    [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const qu = Ne.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, s, a) {
        const c = [];
        c.push(r + "=" + encodeURIComponent(n)), b.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), b.isString(i) && c.push("path=" + i), b.isString(s) && c.push("domain=" + s), a === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Yu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ku(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wi(e, t) {
  return e && !Yu(t) ? Ku(e, t) : t;
}
const Qu = Ne.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let s = i;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(s) {
      const a = b.isString(s) ? o(s) : s;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Gu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ju(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), f = n[i];
    s || (s = u), r[o] = c, n[o] = u;
    let d = i, h = 0;
    for (; d !== o; )
      h += r[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < t)
      return;
    const g = f && u - f;
    return g ? Math.round(h * 1e3 / g) : void 0;
  };
}
function Jn(e, t) {
  let r = 0;
  const n = Ju(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - r, c = n(a), u = i <= s;
    r = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && s && u ? (s - i) / c : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const Xu = typeof XMLHttpRequest < "u", Zu = Xu && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = Be.from(e.headers).normalize(), s = e.responseType;
    let a;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    b.isFormData(o) && (Ne.isStandardBrowserEnv || Ne.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(g + ":" + m));
    }
    const f = wi(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), vi(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function d() {
      if (!u)
        return;
      const g = Be.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: e,
        request: u
      };
      Hu(function(T) {
        r(T), c();
      }, function(T) {
        n(T), c();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (n(new Y("Request aborted", Y.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new Y("Network Error", Y.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || bi;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new Y(
        m,
        y.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Ne.isStandardBrowserEnv) {
      const g = (e.withCredentials || Qu(f)) && e.xsrfCookieName && qu.read(e.xsrfCookieName);
      g && i.set(e.xsrfHeaderName, g);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && b.forEach(i.toJSON(), function(m, y) {
      u.setRequestHeader(y, m);
    }), b.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Jn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Jn(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (g) => {
      u && (n(!g || g.type ? new It(null, e, u) : g), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const h = Gu(f);
    if (h && Ne.protocols.indexOf(h) === -1) {
      n(new Y("Unsupported protocol " + h + ":", Y.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, Bt = {
  http: Cu,
  xhr: Zu
};
b.forEach(Bt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ec = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = b.isString(r) ? Bt[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new Y(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        b.hasOwnProp(Bt, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!b.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Bt
};
function Cr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new It(null, e);
}
function Xn(e) {
  return Cr(e), e.headers = Be.from(e.headers), e.data = Or.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ec.getAdapter(e.adapter || on.adapter)(e).then(function(n) {
    return Cr(e), n.data = Or.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Be.from(n.headers), n;
  }, function(n) {
    return Si(n) || (Cr(e), n && n.response && (n.response.data = Or.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Be.from(n.response.headers))), Promise.reject(n);
  });
}
const Zn = (e) => e instanceof Be ? e.toJSON() : e;
function lt(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, d) {
    return b.isPlainObject(u) && b.isPlainObject(f) ? b.merge.call({ caseless: d }, u, f) : b.isPlainObject(f) ? b.merge({}, f) : b.isArray(f) ? f.slice() : f;
  }
  function o(u, f, d) {
    if (b.isUndefined(f)) {
      if (!b.isUndefined(u))
        return n(void 0, u, d);
    } else
      return n(u, f, d);
  }
  function i(u, f) {
    if (!b.isUndefined(f))
      return n(void 0, f);
  }
  function s(u, f) {
    if (b.isUndefined(f)) {
      if (!b.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, f);
  }
  function a(u, f, d) {
    if (d in t)
      return n(u, f);
    if (d in e)
      return n(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, f) => o(Zn(u), Zn(f), !0)
  };
  return b.forEach(Object.keys(e).concat(Object.keys(t)), function(f) {
    const d = c[f] || o, h = d(e[f], t[f], f);
    b.isUndefined(h) && d !== a || (r[f] = h);
  }), r;
}
const Oi = "1.3.4", sn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  sn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const eo = {};
sn.transitional = function(t, r, n) {
  function o(i, s) {
    return "[Axios v" + Oi + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new Y(
        o(s, " has been removed" + (r ? " in " + r : "")),
        Y.ERR_DEPRECATED
      );
    return r && !eo[s] && (eo[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function tc(e, t, r) {
  if (typeof e != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new Y("option " + i + " must be " + c, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Y("Unknown option " + i, Y.ERR_BAD_OPTION);
  }
}
const Qr = {
  assertOptions: tc,
  validators: sn
}, He = Qr.validators;
class Ht {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Qn(),
      response: new Qn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = lt(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Qr.assertOptions(n, {
      silentJSONParsing: He.transitional(He.boolean),
      forcedJSONParsing: He.transitional(He.boolean),
      clarifyTimeoutError: He.transitional(He.boolean)
    }, !1), o !== void 0 && Qr.assertOptions(o, {
      encode: He.function,
      serialize: He.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && b.merge(
      i.common,
      i[r.method]
    ), s && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = Be.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (c = c && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let f, d = 0, h;
    if (!c) {
      const m = [Xn.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), h = m.length, f = Promise.resolve(r); d < h; )
        f = f.then(m[d++], m[d++]);
      return f;
    }
    h = a.length;
    let g = r;
    for (d = 0; d < h; ) {
      const m = a[d++], y = a[d++];
      try {
        g = m(g);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      f = Xn.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = u.length; d < h; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = lt(this.defaults, t);
    const r = wi(t.baseURL, t.url);
    return vi(r, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(t) {
  Ht.prototype[t] = function(r, n) {
    return this.request(lt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, s, a) {
      return this.request(lt(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Ht.prototype[t] = r(), Ht.prototype[t + "Form"] = r(!0);
});
const Vt = Ht;
class an {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      n.reason || (n.reason = new It(i, s, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new an(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const rc = an;
function nc(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function oc(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const Gr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Gr).forEach(([e, t]) => {
  Gr[t] = e;
});
const ic = Gr;
function Ci(e) {
  const t = new Vt(e), r = ii(Vt.prototype.request, t);
  return b.extend(r, Vt.prototype, t, { allOwnKeys: !0 }), b.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Ci(lt(e, o));
  }, r;
}
const ge = Ci(on);
ge.Axios = Vt;
ge.CanceledError = It;
ge.CancelToken = rc;
ge.isCancel = Si;
ge.VERSION = Oi;
ge.toFormData = Zt;
ge.AxiosError = Y;
ge.Cancel = ge.CanceledError;
ge.all = function(t) {
  return Promise.all(t);
};
ge.spread = nc;
ge.isAxiosError = oc;
ge.mergeConfig = lt;
ge.AxiosHeaders = Be;
ge.formToJSON = (e) => Ei(b.isHTMLForm(e) ? new FormData(e) : e);
ge.HttpStatusCode = ic;
ge.default = ge;
const sc = ge, ac = new gs(), to = sc.create({
  baseURL: "https://dummyjson.com",
  timeout: 1e3,
  headers: { "X-Custom-Header": "foobar" }
}), uc = fs(
  () => import("./index.prod-bbd89743.js").then((e) => ({
    default: e.ReactQueryDevtools
  }))
), xd = ({ children: e }) => {
  const [t, r] = Mt(!1);
  return Io(() => {
    window.toggleDevtools = () => r((n) => !n), to.interceptors.request.use(
      function(n) {
        return n;
      },
      function(n) {
        return Promise.reject(n);
      }
    ), to.interceptors.response.use(
      function(n) {
        return n;
      },
      function(n) {
        return Promise.reject(n);
      }
    );
  }, []), /* @__PURE__ */ Gt(vs, { client: ac, children: [
    e,
    /* @__PURE__ */ Ae(qa, { initialIsOpen: !0 }),
    t && /* @__PURE__ */ Ae(ds, { fallback: null, children: /* @__PURE__ */ Ae(uc, {}) })
  ] });
};
var un = {}, Jr = {}, cc = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
};
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(cc);
var _r = {};
function G() {
  return G = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, G.apply(this, arguments);
}
function st(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function _i(e) {
  if (!st(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = _i(e[r]);
  }), t;
}
function Ve(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? G({}, e) : e;
  return st(e) && st(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (st(t[o]) && o in e && st(e[o]) ? n[o] = Ve(e[o], t[o], r) : r.clone ? n[o] = st(t[o]) ? _i(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
var te = {}, ro = {
  get exports() {
    return te;
  },
  set exports(e) {
    te = e;
  }
}, qt = {}, lc = {
  get exports() {
    return qt;
  },
  set exports(e) {
    qt = e;
  }
}, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function fc() {
  if (no)
    return J;
  no = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function R(E) {
    if (typeof E == "object" && E !== null) {
      var F = E.$$typeof;
      switch (F) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case f:
                case m:
                case g:
                case s:
                  return E;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function x(E) {
    return R(E) === u;
  }
  return J.AsyncMode = c, J.ConcurrentMode = u, J.ContextConsumer = a, J.ContextProvider = s, J.Element = t, J.ForwardRef = f, J.Fragment = n, J.Lazy = m, J.Memo = g, J.Portal = r, J.Profiler = i, J.StrictMode = o, J.Suspense = d, J.isAsyncMode = function(E) {
    return x(E) || R(E) === c;
  }, J.isConcurrentMode = x, J.isContextConsumer = function(E) {
    return R(E) === a;
  }, J.isContextProvider = function(E) {
    return R(E) === s;
  }, J.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, J.isForwardRef = function(E) {
    return R(E) === f;
  }, J.isFragment = function(E) {
    return R(E) === n;
  }, J.isLazy = function(E) {
    return R(E) === m;
  }, J.isMemo = function(E) {
    return R(E) === g;
  }, J.isPortal = function(E) {
    return R(E) === r;
  }, J.isProfiler = function(E) {
    return R(E) === i;
  }, J.isStrictMode = function(E) {
    return R(E) === o;
  }, J.isSuspense = function(E) {
    return R(E) === d;
  }, J.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === u || E === i || E === o || E === d || E === h || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === g || E.$$typeof === s || E.$$typeof === a || E.$$typeof === f || E.$$typeof === v || E.$$typeof === T || E.$$typeof === P || E.$$typeof === y);
  }, J.typeOf = R, J;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function dc() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function R(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === u || C === i || C === o || C === d || C === h || typeof C == "object" && C !== null && (C.$$typeof === m || C.$$typeof === g || C.$$typeof === s || C.$$typeof === a || C.$$typeof === f || C.$$typeof === v || C.$$typeof === T || C.$$typeof === P || C.$$typeof === y);
    }
    function x(C) {
      if (typeof C == "object" && C !== null) {
        var Ce = C.$$typeof;
        switch (Ce) {
          case t:
            var A = C.type;
            switch (A) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case d:
                return A;
              default:
                var Re = A && A.$$typeof;
                switch (Re) {
                  case a:
                  case f:
                  case m:
                  case g:
                  case s:
                    return Re;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var E = c, F = u, pe = a, ce = s, $ = t, ne = f, le = n, be = m, ie = g, ae = r, W = i, V = o, oe = d, me = !1;
    function Ee(C) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(C) || x(C) === c;
    }
    function w(C) {
      return x(C) === u;
    }
    function O(C) {
      return x(C) === a;
    }
    function D(C) {
      return x(C) === s;
    }
    function k(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function N(C) {
      return x(C) === f;
    }
    function j(C) {
      return x(C) === n;
    }
    function I(C) {
      return x(C) === m;
    }
    function M(C) {
      return x(C) === g;
    }
    function U(C) {
      return x(C) === r;
    }
    function H(C) {
      return x(C) === i;
    }
    function B(C) {
      return x(C) === o;
    }
    function ve(C) {
      return x(C) === d;
    }
    X.AsyncMode = E, X.ConcurrentMode = F, X.ContextConsumer = pe, X.ContextProvider = ce, X.Element = $, X.ForwardRef = ne, X.Fragment = le, X.Lazy = be, X.Memo = ie, X.Portal = ae, X.Profiler = W, X.StrictMode = V, X.Suspense = oe, X.isAsyncMode = Ee, X.isConcurrentMode = w, X.isContextConsumer = O, X.isContextProvider = D, X.isElement = k, X.isForwardRef = N, X.isFragment = j, X.isLazy = I, X.isMemo = M, X.isPortal = U, X.isProfiler = H, X.isStrictMode = B, X.isSuspense = ve, X.isValidElementType = R, X.typeOf = x;
  }()), X;
}
var io;
function xi() {
  return io || (io = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = fc() : e.exports = dc();
  }(lc)), qt;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xr, so;
function pc() {
  if (so)
    return xr;
  so = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xr = o() ? Object.assign : function(i, s) {
    for (var a, c = n(i), u, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var d in a)
        t.call(a, d) && (c[d] = a[d]);
      if (e) {
        u = e(a);
        for (var h = 0; h < u.length; h++)
          r.call(a, u[h]) && (c[u[h]] = a[u[h]]);
      }
    }
    return c;
  }, xr;
}
var Tr, ao;
function cn() {
  if (ao)
    return Tr;
  ao = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tr = e, Tr;
}
var Rr, uo;
function Ti() {
  return uo || (uo = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var Ar, co;
function mc() {
  if (co)
    return Ar;
  co = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = cn(), r = {}, n = Ti();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var d;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (c || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = i[f](s, f, c, a, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + a + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ar = o, Ar;
}
var Pr, lo;
function hc() {
  if (lo)
    return Pr;
  lo = 1;
  var e = xi(), t = pc(), r = cn(), n = Ti(), o = mc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Pr = function(a, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(w) {
      var O = w && (u && w[u] || w[f]);
      if (typeof O == "function")
        return O;
    }
    var h = "<<anonymous>>", g = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: P(),
      arrayOf: R,
      element: x(),
      elementType: E(),
      instanceOf: F,
      node: ne(),
      objectOf: ce,
      oneOf: pe,
      oneOfType: $,
      shape: be,
      exact: ie
    };
    function m(w, O) {
      return w === O ? w !== 0 || 1 / w === 1 / O : w !== w && O !== O;
    }
    function y(w, O) {
      this.message = w, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function v(w) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, D = 0;
      function k(j, I, M, U, H, B, ve) {
        if (U = U || h, B = B || M, ve !== r) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = U + ":" + M;
            !O[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Ce] = !0, D++);
          }
        }
        return I[M] == null ? j ? I[M] === null ? new y("The " + H + " `" + B + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new y("The " + H + " `" + B + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : w(I, M, U, H, B);
      }
      var N = k.bind(null, !1);
      return N.isRequired = k.bind(null, !0), N;
    }
    function T(w) {
      function O(D, k, N, j, I, M) {
        var U = D[k], H = V(U);
        if (H !== w) {
          var B = oe(U);
          return new y(
            "Invalid " + j + " `" + I + "` of type " + ("`" + B + "` supplied to `" + N + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return v(O);
    }
    function P() {
      return v(s);
    }
    function R(w) {
      function O(D, k, N, j, I) {
        if (typeof w != "function")
          return new y("Property `" + I + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var M = D[k];
        if (!Array.isArray(M)) {
          var U = V(M);
          return new y("Invalid " + j + " `" + I + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected an array."));
        }
        for (var H = 0; H < M.length; H++) {
          var B = w(M, H, N, j, I + "[" + H + "]", r);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return v(O);
    }
    function x() {
      function w(O, D, k, N, j) {
        var I = O[D];
        if (!a(I)) {
          var M = V(I);
          return new y("Invalid " + N + " `" + j + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(w);
    }
    function E() {
      function w(O, D, k, N, j) {
        var I = O[D];
        if (!e.isValidElementType(I)) {
          var M = V(I);
          return new y("Invalid " + N + " `" + j + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(w);
    }
    function F(w) {
      function O(D, k, N, j, I) {
        if (!(D[k] instanceof w)) {
          var M = w.name || h, U = Ee(D[k]);
          return new y("Invalid " + j + " `" + I + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return v(O);
    }
    function pe(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function O(D, k, N, j, I) {
        for (var M = D[k], U = 0; U < w.length; U++)
          if (m(M, w[U]))
            return null;
        var H = JSON.stringify(w, function(ve, C) {
          var Ce = oe(C);
          return Ce === "symbol" ? String(C) : C;
        });
        return new y("Invalid " + j + " `" + I + "` of value `" + String(M) + "` " + ("supplied to `" + N + "`, expected one of " + H + "."));
      }
      return v(O);
    }
    function ce(w) {
      function O(D, k, N, j, I) {
        if (typeof w != "function")
          return new y("Property `" + I + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var M = D[k], U = V(M);
        if (U !== "object")
          return new y("Invalid " + j + " `" + I + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected an object."));
        for (var H in M)
          if (n(M, H)) {
            var B = w(M, H, N, j, I + "." + H, r);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return v(O);
    }
    function $(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var O = 0; O < w.length; O++) {
        var D = w[O];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + me(D) + " at index " + O + "."
          ), s;
      }
      function k(N, j, I, M, U) {
        for (var H = [], B = 0; B < w.length; B++) {
          var ve = w[B], C = ve(N, j, I, M, U, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && H.push(C.data.expectedType);
        }
        var Ce = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new y("Invalid " + M + " `" + U + "` supplied to " + ("`" + I + "`" + Ce + "."));
      }
      return v(k);
    }
    function ne() {
      function w(O, D, k, N, j) {
        return ae(O[D]) ? null : new y("Invalid " + N + " `" + j + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return v(w);
    }
    function le(w, O, D, k, N) {
      return new y(
        (w || "React class") + ": " + O + " type `" + D + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function be(w) {
      function O(D, k, N, j, I) {
        var M = D[k], U = V(M);
        if (U !== "object")
          return new y("Invalid " + j + " `" + I + "` of type `" + U + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var H in w) {
          var B = w[H];
          if (typeof B != "function")
            return le(N, j, I, H, oe(B));
          var ve = B(M, H, N, j, I + "." + H, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return v(O);
    }
    function ie(w) {
      function O(D, k, N, j, I) {
        var M = D[k], U = V(M);
        if (U !== "object")
          return new y("Invalid " + j + " `" + I + "` of type `" + U + "` " + ("supplied to `" + N + "`, expected `object`."));
        var H = t({}, D[k], w);
        for (var B in H) {
          var ve = w[B];
          if (n(w, B) && typeof ve != "function")
            return le(N, j, I, B, oe(ve));
          if (!ve)
            return new y(
              "Invalid " + j + " `" + I + "` key `" + B + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(D[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var C = ve(M, B, N, j, I + "." + B, r);
          if (C)
            return C;
        }
        return null;
      }
      return v(O);
    }
    function ae(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(ae);
          if (w === null || a(w))
            return !0;
          var O = d(w);
          if (O) {
            var D = O.call(w), k;
            if (O !== w.entries) {
              for (; !(k = D.next()).done; )
                if (!ae(k.value))
                  return !1;
            } else
              for (; !(k = D.next()).done; ) {
                var N = k.value;
                if (N && !ae(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function W(w, O) {
      return w === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function V(w) {
      var O = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : W(O, w) ? "symbol" : O;
    }
    function oe(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var O = V(w);
      if (O === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function me(w) {
      var O = oe(w);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Ee(w) {
      return !w.constructor || !w.constructor.name ? h : w.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Pr;
}
var kr, fo;
function yc() {
  if (fo)
    return kr;
  fo = 1;
  var e = cn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, kr = function() {
    function n(s, a, c, u, f, d) {
      if (d !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, kr;
}
if (process.env.NODE_ENV !== "production") {
  var gc = xi(), vc = !0;
  ro.exports = hc()(gc.isElement, vc);
} else
  ro.exports = yc()();
function ft(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Yt = {}, bc = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
}, Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function Ec() {
  if (po)
    return Z;
  po = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var T = v.$$typeof;
      switch (T) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case s:
                case c:
                case h:
                case d:
                case i:
                  return v;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return Z.ContextConsumer = s, Z.ContextProvider = i, Z.Element = e, Z.ForwardRef = c, Z.Fragment = r, Z.Lazy = h, Z.Memo = d, Z.Portal = t, Z.Profiler = o, Z.StrictMode = n, Z.Suspense = u, Z.SuspenseList = f, Z.isAsyncMode = function() {
    return !1;
  }, Z.isConcurrentMode = function() {
    return !1;
  }, Z.isContextConsumer = function(v) {
    return y(v) === s;
  }, Z.isContextProvider = function(v) {
    return y(v) === i;
  }, Z.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, Z.isForwardRef = function(v) {
    return y(v) === c;
  }, Z.isFragment = function(v) {
    return y(v) === r;
  }, Z.isLazy = function(v) {
    return y(v) === h;
  }, Z.isMemo = function(v) {
    return y(v) === d;
  }, Z.isPortal = function(v) {
    return y(v) === t;
  }, Z.isProfiler = function(v) {
    return y(v) === o;
  }, Z.isStrictMode = function(v) {
    return y(v) === n;
  }, Z.isSuspense = function(v) {
    return y(v) === u;
  }, Z.isSuspenseList = function(v) {
    return y(v) === f;
  }, Z.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === u || v === f || v === g || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === d || v.$$typeof === i || v.$$typeof === s || v.$$typeof === c || v.$$typeof === m || v.getModuleId !== void 0);
  }, Z.typeOf = y, Z;
}
var ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function Sc() {
  return mo || (mo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = !1, y = !1, v = !1, T = !1, P = !1, R;
    R = Symbol.for("react.module.reference");
    function x(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || P || A === n || A === u || A === f || T || A === g || m || y || v || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === d || A.$$typeof === i || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === R || A.getModuleId !== void 0));
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var Re = A.$$typeof;
        switch (Re) {
          case e:
            var Le = A.type;
            switch (Le) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Le;
              default:
                var mt = Le && Le.$$typeof;
                switch (mt) {
                  case a:
                  case s:
                  case c:
                  case h:
                  case d:
                  case i:
                    return mt;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var F = s, pe = i, ce = e, $ = c, ne = r, le = h, be = d, ie = t, ae = o, W = n, V = u, oe = f, me = !1, Ee = !1;
    function w(A) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(A) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(A) {
      return E(A) === s;
    }
    function k(A) {
      return E(A) === i;
    }
    function N(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function j(A) {
      return E(A) === c;
    }
    function I(A) {
      return E(A) === r;
    }
    function M(A) {
      return E(A) === h;
    }
    function U(A) {
      return E(A) === d;
    }
    function H(A) {
      return E(A) === t;
    }
    function B(A) {
      return E(A) === o;
    }
    function ve(A) {
      return E(A) === n;
    }
    function C(A) {
      return E(A) === u;
    }
    function Ce(A) {
      return E(A) === f;
    }
    ee.ContextConsumer = F, ee.ContextProvider = pe, ee.Element = ce, ee.ForwardRef = $, ee.Fragment = ne, ee.Lazy = le, ee.Memo = be, ee.Portal = ie, ee.Profiler = ae, ee.StrictMode = W, ee.Suspense = V, ee.SuspenseList = oe, ee.isAsyncMode = w, ee.isConcurrentMode = O, ee.isContextConsumer = D, ee.isContextProvider = k, ee.isElement = N, ee.isForwardRef = j, ee.isFragment = I, ee.isLazy = M, ee.isMemo = U, ee.isPortal = H, ee.isProfiler = B, ee.isStrictMode = ve, ee.isSuspense = C, ee.isSuspenseList = Ce, ee.isValidElementType = x, ee.typeOf = E;
  }()), ee;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ec() : e.exports = Sc();
})(bc);
const wc = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Oc(e) {
  const t = `${e}`.match(wc);
  return t && t[1] || "";
}
function Ri(e, t = "") {
  return e.displayName || e.name || Oc(e) || t;
}
function ho(e, t, r) {
  const n = Ri(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Cc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ri(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt.ForwardRef:
          return ho(e, e.render, "ForwardRef");
        case Yt.Memo:
          return ho(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _c(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function xc(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(i, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Tc(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, s) => {
    const a = o || "<<anonymous>>", c = s || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${a}\` is deprecated. ${t}`) : null;
  };
}
function Rc(e, t) {
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function Ai(e) {
  return e && e.ownerDocument || document;
}
function Ac(e) {
  return Ai(e).defaultView || window;
}
function Pc(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? G({}, t.propTypes) : null;
  return (o) => (i, s, a, c, u, ...f) => {
    const d = u || s, h = r == null ? void 0 : r[d];
    if (h) {
      const g = h(i, s, a, c, u, ...f);
      if (g)
        return g;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${d}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Pi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const kc = typeof window < "u" ? p.useLayoutEffect : p.useEffect, ki = kc;
let yo = 0;
function Ic(e) {
  const [t, r] = p.useState(e), n = e || t;
  return p.useEffect(() => {
    t == null && (yo += 1, r(`mui-${yo}`));
  }, [t]), n;
}
const go = p["useId"];
function $c(e) {
  if (go !== void 0) {
    const t = go();
    return e ?? t;
  }
  return Ic(e);
}
function Nc(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Dc({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = p.useRef(e !== void 0), [i, s] = p.useState(t), a = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    p.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = p.useRef(t);
    p.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = p.useCallback((u) => {
    o || s(u);
  }, []);
  return [a, c];
}
function Lc(e) {
  const t = p.useRef(e);
  return ki(() => {
    t.current = e;
  }), p.useCallback((...r) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...r)
  ), []);
}
function Mc(...e) {
  return p.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Pi(r, t);
    });
  }, e);
}
let rr = !0, Xr = !1, vo;
const jc = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Fc(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && jc[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Uc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (rr = !0);
}
function Ir() {
  rr = !1;
}
function Bc() {
  this.visibilityState === "hidden" && Xr && (rr = !0);
}
function Vc(e) {
  e.addEventListener("keydown", Uc, !0), e.addEventListener("mousedown", Ir, !0), e.addEventListener("pointerdown", Ir, !0), e.addEventListener("touchstart", Ir, !0), e.addEventListener("visibilitychange", Bc, !0);
}
function zc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return rr || Fc(t);
}
function Wc() {
  const e = p.useCallback((o) => {
    o != null && Vc(o.ownerDocument);
  }, []), t = p.useRef(!1);
  function r() {
    return t.current ? (Xr = !0, window.clearTimeout(vo), vo = window.setTimeout(() => {
      Xr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return zc(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Ii(e, t) {
  const r = G({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = G({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = G({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = Ii(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Hc(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const bo = (e) => e, qc = () => {
  let e = bo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = bo;
    }
  };
}, Yc = qc(), $i = Yc, Kc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function ln(e, t, r = "Mui") {
  const n = Kc[t];
  return n ? `${r}-${n}` : `${$i.generate(e)}-${t}`;
}
function Qc(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = ln(e, o, r);
  }), n;
}
function ke(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ni(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ni(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Gc() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ni(e)) && (n && (n += " "), n += t);
  return n;
}
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Jc(e, t) {
  const r = bs(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Xc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Zc = process.env.NODE_ENV !== "production" ? te.oneOfType([te.number, te.string, te.object, te.array]) : {}, Ge = Zc;
function Ot(e, t) {
  return t ? Ve(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Eo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fn[e]}px)`
};
function De(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Eo;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Eo;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || fn).indexOf(a) !== -1) {
        const c = i.up(a);
        s[c] = r(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function el(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function tl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function nr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Kt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = nr(e, r) || n, t && (o = t(o, n, e)), o;
}
function re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = nr(c, n) || {};
    return De(s, a, (d) => {
      let h = Kt(u, o, d);
      return d === h && typeof d == "string" && (h = Kt(u, o, `${t}${d === "default" ? "" : Pe(d)}`, d)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ge
  } : {}, i.filterProps = [t], i;
}
function or(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ot(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function rl(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const nl = {
  m: "margin",
  p: "padding"
}, ol = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, So = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, il = rl((e) => {
  if (e.length > 2)
    if (So[e])
      e = So[e];
    else
      return [e];
  const [t, r] = e.split(""), n = nl[t], o = ol[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ir = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], sr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], sl = [...ir, ...sr];
function $t(e, t, r, n) {
  var o;
  const i = (o = nr(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Di(e) {
  return $t(e, "spacing", 8, "spacing");
}
function Nt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function al(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Nt(t, r), n), {});
}
function ul(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = il(r), i = al(o, n), s = e[r];
  return De(e, s, i);
}
function Li(e, t) {
  const r = Di(e.theme);
  return Object.keys(e).map((n) => ul(e, t, n, r)).reduce(Ot, {});
}
function fe(e) {
  return Li(e, ir);
}
fe.propTypes = process.env.NODE_ENV !== "production" ? ir.reduce((e, t) => (e[t] = Ge, e), {}) : {};
fe.filterProps = ir;
function de(e) {
  return Li(e, sr);
}
de.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = Ge, e), {}) : {};
de.filterProps = sr;
process.env.NODE_ENV !== "production" && sl.reduce((e, t) => (e[t] = Ge, e), {});
function $e(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const cl = re({
  prop: "border",
  themeKey: "borders",
  transform: $e
}), ll = re({
  prop: "borderTop",
  themeKey: "borders",
  transform: $e
}), fl = re({
  prop: "borderRight",
  themeKey: "borders",
  transform: $e
}), dl = re({
  prop: "borderBottom",
  themeKey: "borders",
  transform: $e
}), pl = re({
  prop: "borderLeft",
  themeKey: "borders",
  transform: $e
}), ml = re({
  prop: "borderColor",
  themeKey: "palette"
}), hl = re({
  prop: "borderTopColor",
  themeKey: "palette"
}), yl = re({
  prop: "borderRightColor",
  themeKey: "palette"
}), gl = re({
  prop: "borderBottomColor",
  themeKey: "palette"
}), vl = re({
  prop: "borderLeftColor",
  themeKey: "palette"
}), ar = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $t(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Nt(t, n)
    });
    return De(e, e.borderRadius, r);
  }
  return null;
};
ar.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ge
} : {};
ar.filterProps = ["borderRadius"];
or(cl, ll, fl, dl, pl, ml, hl, yl, gl, vl, ar);
const ur = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $t(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Nt(t, n)
    });
    return De(e, e.gap, r);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ge
} : {};
ur.filterProps = ["gap"];
const cr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $t(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Nt(t, n)
    });
    return De(e, e.columnGap, r);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ge
} : {};
cr.filterProps = ["columnGap"];
const lr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $t(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Nt(t, n)
    });
    return De(e, e.rowGap, r);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ge
} : {};
lr.filterProps = ["rowGap"];
const bl = re({
  prop: "gridColumn"
}), El = re({
  prop: "gridRow"
}), Sl = re({
  prop: "gridAutoFlow"
}), wl = re({
  prop: "gridAutoColumns"
}), Ol = re({
  prop: "gridAutoRows"
}), Cl = re({
  prop: "gridTemplateColumns"
}), _l = re({
  prop: "gridTemplateRows"
}), xl = re({
  prop: "gridTemplateAreas"
}), Tl = re({
  prop: "gridArea"
});
or(ur, cr, lr, bl, El, Sl, wl, Ol, Cl, _l, xl, Tl);
function ut(e, t) {
  return t === "grey" ? t : e;
}
const Rl = re({
  prop: "color",
  themeKey: "palette",
  transform: ut
}), Al = re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ut
}), Pl = re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ut
});
or(Rl, Al, Pl);
function xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const kl = re({
  prop: "width",
  transform: xe
}), dn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o, i;
      return {
        maxWidth: ((n = e.theme) == null || (o = n.breakpoints) == null || (i = o.values) == null ? void 0 : i[r]) || fn[r] || xe(r)
      };
    };
    return De(e, e.maxWidth, t);
  }
  return null;
};
dn.filterProps = ["maxWidth"];
const Il = re({
  prop: "minWidth",
  transform: xe
}), $l = re({
  prop: "height",
  transform: xe
}), Nl = re({
  prop: "maxHeight",
  transform: xe
}), Dl = re({
  prop: "minHeight",
  transform: xe
});
re({
  prop: "size",
  cssProperty: "width",
  transform: xe
});
re({
  prop: "size",
  cssProperty: "height",
  transform: xe
});
const Ll = re({
  prop: "boxSizing"
});
or(kl, dn, Il, $l, Nl, Dl, Ll);
const $r = (e) => (t) => {
  if (t[e] !== void 0 && t[e] !== null) {
    const r = (n) => {
      var o;
      let i = (o = t.theme.typography) == null ? void 0 : o[n];
      if (typeof i == "object" && (i = null), !i) {
        var s, a;
        i = (s = t.theme.typography) == null ? void 0 : s[`${e}${t[e] === "default" || t[e] === e ? "" : Pe((a = t[e]) == null ? void 0 : a.toString())}`];
      }
      if (!i) {
        var c, u, f;
        i = (c = (u = t.theme.typography) == null || (f = u[n]) == null ? void 0 : f[e]) != null ? c : n;
      }
      return {
        [e]: i
      };
    };
    return De(t, t[e], r);
  }
  return null;
}, Ml = {
  // borders
  border: {
    themeKey: "borders",
    transform: $e
  },
  borderTop: {
    themeKey: "borders",
    transform: $e
  },
  borderRight: {
    themeKey: "borders",
    transform: $e
  },
  borderBottom: {
    themeKey: "borders",
    transform: $e
  },
  borderLeft: {
    themeKey: "borders",
    transform: $e
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ar
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ut
  },
  // spacing
  p: {
    style: de
  },
  pt: {
    style: de
  },
  pr: {
    style: de
  },
  pb: {
    style: de
  },
  pl: {
    style: de
  },
  px: {
    style: de
  },
  py: {
    style: de
  },
  padding: {
    style: de
  },
  paddingTop: {
    style: de
  },
  paddingRight: {
    style: de
  },
  paddingBottom: {
    style: de
  },
  paddingLeft: {
    style: de
  },
  paddingX: {
    style: de
  },
  paddingY: {
    style: de
  },
  paddingInline: {
    style: de
  },
  paddingInlineStart: {
    style: de
  },
  paddingInlineEnd: {
    style: de
  },
  paddingBlock: {
    style: de
  },
  paddingBlockStart: {
    style: de
  },
  paddingBlockEnd: {
    style: de
  },
  m: {
    style: fe
  },
  mt: {
    style: fe
  },
  mr: {
    style: fe
  },
  mb: {
    style: fe
  },
  ml: {
    style: fe
  },
  mx: {
    style: fe
  },
  my: {
    style: fe
  },
  margin: {
    style: fe
  },
  marginTop: {
    style: fe
  },
  marginRight: {
    style: fe
  },
  marginBottom: {
    style: fe
  },
  marginLeft: {
    style: fe
  },
  marginX: {
    style: fe
  },
  marginY: {
    style: fe
  },
  marginInline: {
    style: fe
  },
  marginInlineStart: {
    style: fe
  },
  marginInlineEnd: {
    style: fe
  },
  marginBlock: {
    style: fe
  },
  marginBlockStart: {
    style: fe
  },
  marginBlockEnd: {
    style: fe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ur
  },
  rowGap: {
    style: lr
  },
  columnGap: {
    style: cr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: xe
  },
  maxWidth: {
    style: dn
  },
  minWidth: {
    transform: xe
  },
  height: {
    transform: xe
  },
  maxHeight: {
    transform: xe
  },
  minHeight: {
    transform: xe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography",
    style: $r("fontFamily")
  },
  fontSize: {
    themeKey: "typography",
    style: $r("fontSize")
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography",
    style: $r("fontWeight")
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, pn = Ml;
function jl(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Fl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ul() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: f,
      style: d
    } = a;
    if (n == null)
      return null;
    const h = nr(o, u) || {};
    return d ? d(s) : De(s, n, (m) => {
      let y = Kt(h, f, m);
      return m === y && typeof m == "string" && (y = Kt(h, f, `${r}${m === "default" ? "" : Pe(m)}`, m)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : pn;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const f = el(i.breakpoints), d = Object.keys(f);
      let h = f;
      return Object.keys(u).forEach((g) => {
        const m = Fl(u[g], i);
        if (m != null)
          if (typeof m == "object")
            if (s[g])
              h = Ot(h, e(g, m, i, s));
            else {
              const y = De({
                theme: i
              }, m, (v) => ({
                [g]: v
              }));
              jl(y, m) ? h[g] = t({
                sx: m,
                theme: i
              }) : h = Ot(h, y);
            }
          else
            h = Ot(h, e(g, m, i, s));
      }), tl(d, h);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Mi = Ul();
Mi.filterProps = ["sx"];
const mn = Mi, Bl = ["values", "unit", "step"], Vl = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => G({}, r, {
    [n.key]: n.val
  }), {});
};
function zl(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = ke(e, Bl), i = Vl(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function u(h, g) {
    const m = s.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : g) - n / 100}${r})`;
  }
  function f(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function d(h) {
    const g = s.indexOf(h);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? c(s[g]) : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return G({
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: f,
    not: d,
    unit: r
  }, o);
}
const Wl = {
  borderRadius: 4
}, Hl = Wl;
function ql(e = 8) {
  if (e.mui)
    return e;
  const t = Di({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
const Yl = ["breakpoints", "palette", "spacing", "shape"];
function hn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = ke(e, Yl), a = zl(r), c = ql(o);
  let u = Ve({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: G({
      mode: "light"
    }, n),
    spacing: c,
    shape: G({}, Hl, i)
  }, s);
  return u = t.reduce((f, d) => Ve(f, d), u), u.unstable_sxConfig = G({}, pn, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return mn({
      sx: d,
      theme: this
    });
  }, u;
}
const ji = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ji.displayName = "ThemeContext");
const Kl = ji;
function Ql() {
  const e = p.useContext(Kl);
  return process.env.NODE_ENV !== "production" && p.useDebugValue(e), e;
}
function Gl(e) {
  return Object.keys(e).length === 0;
}
function Jl(e = null) {
  const t = Ql();
  return !t || Gl(t) ? e : t;
}
const Xl = hn();
function Zl(e = Xl) {
  return Jl(e);
}
const ef = ["variant"];
function wo(e) {
  return e.length === 0;
}
function Fi(e) {
  const {
    variant: t
  } = e, r = ke(e, ef);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += wo(n) ? e[o] : Pe(e[o]) : n += `${wo(n) ? o : Pe(o)}${Pe(e[o].toString())}`;
  }), n;
}
const tf = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], rf = ["theme"], nf = ["theme"];
function Et(e) {
  return Object.keys(e).length === 0;
}
function of(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const sf = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, af = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((o) => {
    const i = Fi(o.props);
    n[i] = o.style;
  }), n;
}, uf = (e, t, r, n) => {
  var o, i;
  const {
    ownerState: s = {}
  } = e, a = [], c = r == null || (o = r.components) == null || (i = o[n]) == null ? void 0 : i.variants;
  return c && c.forEach((u) => {
    let f = !0;
    Object.keys(u.props).forEach((d) => {
      s[d] !== u.props[d] && e[d] !== u.props[d] && (f = !1);
    }), f && a.push(t[Fi(u.props)]);
  }), a;
};
function zt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const cf = hn(), lf = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function ff(e = {}) {
  const {
    defaultTheme: t = cf,
    rootShouldForwardProp: r = zt,
    slotShouldForwardProp: n = zt
  } = e, o = (i) => {
    const s = Et(i.theme) ? t : i.theme;
    return mn(G({}, i, {
      theme: s
    }));
  };
  return o.__mui_systemSx = !0, (i, s = {}) => {
    Xc(i, (R) => R.filter((x) => !(x != null && x.__mui_systemSx)));
    const {
      name: a,
      slot: c,
      skipVariantsResolver: u,
      skipSx: f,
      overridesResolver: d
    } = s, h = ke(s, tf), g = u !== void 0 ? u : c && c !== "Root" || !1, m = f || !1;
    let y;
    process.env.NODE_ENV !== "production" && a && (y = `${a}-${lf(c || "Root")}`);
    let v = zt;
    c === "Root" ? v = r : c ? v = n : of(i) && (v = void 0);
    const T = Jc(i, G({
      shouldForwardProp: v,
      label: y
    }, h)), P = (R, ...x) => {
      const E = x ? x.map(($) => typeof $ == "function" && $.__emotion_real !== $ ? (ne) => {
        let {
          theme: le
        } = ne, be = ke(ne, rf);
        return $(G({
          theme: Et(le) ? t : le
        }, be));
      } : $) : [];
      let F = R;
      a && d && E.push(($) => {
        const ne = Et($.theme) ? t : $.theme, le = sf(a, ne);
        if (le) {
          const be = {};
          return Object.entries(le).forEach(([ie, ae]) => {
            be[ie] = typeof ae == "function" ? ae(G({}, $, {
              theme: ne
            })) : ae;
          }), d($, be);
        }
        return null;
      }), a && !g && E.push(($) => {
        const ne = Et($.theme) ? t : $.theme;
        return uf($, af(a, ne), ne, a);
      }), m || E.push(o);
      const pe = E.length - x.length;
      if (Array.isArray(R) && pe > 0) {
        const $ = new Array(pe).fill("");
        F = [...R, ...$], F.raw = [...R.raw, ...$];
      } else
        typeof R == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        R.__emotion_real !== R && (F = ($) => {
          let {
            theme: ne
          } = $, le = ke($, nf);
          return R(G({
            theme: Et(ne) ? t : ne
          }, le));
        });
      const ce = T(F, ...E);
      if (process.env.NODE_ENV !== "production") {
        let $;
        a && ($ = `${a}${c || ""}`), $ === void 0 && ($ = `Styled(${Cc(i)})`), ce.displayName = $;
      }
      return ce;
    };
    return T.withConfig && (P.withConfig = T.withConfig), P;
  };
}
function df(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Ii(t.components[r].defaultProps, n);
}
function pf({
  props: e,
  name: t,
  defaultTheme: r
}) {
  const n = Zl(r);
  return df({
    theme: n,
    name: t,
    props: e
  });
}
function Ui(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function mf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function dt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return dt(mf(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ft(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ft(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function yn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function hf(e) {
  e = dt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), yn({
    type: a,
    values: c
  });
}
function Oo(e) {
  e = dt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? dt(hf(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Co(e, t) {
  const r = Oo(e), n = Oo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function yf(e, t) {
  if (e = dt(e), t = Ui(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return yn(e);
}
function gf(e, t) {
  if (e = dt(e), t = Ui(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return yn(e);
}
function vf(e, t) {
  return G({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const bf = {
  black: "#000",
  white: "#fff"
}, Pt = bf, Ef = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Sf = Ef, wf = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, et = wf, Of = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, tt = Of, Cf = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, St = Cf, _f = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, rt = _f, xf = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, nt = xf, Tf = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ot = Tf, Rf = ["mode", "contrastThreshold", "tonalOffset"], _o = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Pt.white,
    default: Pt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Nr = {
  text: {
    primary: Pt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Pt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function xo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = gf(e.main, o) : t === "dark" && (e.dark = yf(e.main, i)));
}
function Af(e = "light") {
  return e === "dark" ? {
    main: rt[200],
    light: rt[50],
    dark: rt[400]
  } : {
    main: rt[700],
    light: rt[400],
    dark: rt[800]
  };
}
function Pf(e = "light") {
  return e === "dark" ? {
    main: et[200],
    light: et[50],
    dark: et[400]
  } : {
    main: et[500],
    light: et[300],
    dark: et[700]
  };
}
function kf(e = "light") {
  return e === "dark" ? {
    main: tt[500],
    light: tt[300],
    dark: tt[700]
  } : {
    main: tt[700],
    light: tt[400],
    dark: tt[800]
  };
}
function If(e = "light") {
  return e === "dark" ? {
    main: nt[400],
    light: nt[300],
    dark: nt[700]
  } : {
    main: nt[700],
    light: nt[500],
    dark: nt[900]
  };
}
function $f(e = "light") {
  return e === "dark" ? {
    main: ot[400],
    light: ot[300],
    dark: ot[700]
  } : {
    main: ot[800],
    light: ot[500],
    dark: ot[900]
  };
}
function Nf(e = "light") {
  return e === "dark" ? {
    main: St[400],
    light: St[300],
    dark: St[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: St[500],
    dark: St[900]
  };
}
function Df(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = ke(e, Rf), i = e.primary || Af(t), s = e.secondary || Pf(t), a = e.error || kf(t), c = e.info || If(t), u = e.success || $f(t), f = e.warning || Nf(t);
  function d(y) {
    const v = Co(y, Nr.text.primary) >= r ? Nr.text.primary : _o.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Co(y, v);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${v} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const h = ({
    color: y,
    name: v,
    mainShade: T = 500,
    lightShade: P = 300,
    darkShade: R = 700
  }) => {
    if (y = G({}, y), !y.main && y[T] && (y.main = y[T]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : ft(11, v ? ` (${v})` : "", T));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ft(12, v ? ` (${v})` : "", JSON.stringify(y.main)));
    return xo(y, "light", P, n), xo(y, "dark", R, n), y.contrastText || (y.contrastText = d(y.main)), y;
  }, g = {
    dark: Nr,
    light: _o
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ve(G({
    // A collection of common colors.
    common: G({}, Pt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Sf,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, g[t]), o);
}
const Lf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Mf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const To = {
  textTransform: "uppercase"
}, Ro = '"Roboto", "Helvetica", "Arial", sans-serif';
function jf(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Ro,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d
  } = r, h = ke(r, Lf);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, m = d || ((T) => `${T / u * g}rem`), y = (T, P, R, x, E) => G({
    fontFamily: n,
    fontWeight: T,
    fontSize: m(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, n === Ro ? {
    letterSpacing: `${Mf(x / P)}em`
  } : {}, E, f), v = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, To),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, To),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ve(G({
    htmlFontSize: u,
    pxToRem: m,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c
  }, v), h, {
    clone: !1
    // No need to clone deep
  });
}
const Ff = 0.2, Uf = 0.14, Bf = 0.12;
function ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ff})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Uf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Bf})`].join(",");
}
const Vf = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zf = Vf, Wf = ["duration", "easing", "delay"], Hf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, qf = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ao(e) {
  return `${Math.round(e)}ms`;
}
function Yf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Kf(e) {
  const t = G({}, Hf, e.easing), r = G({}, qf, e.duration);
  return G({
    getAutoHeightDuration: Yf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: c = 0
      } = i, u = ke(i, Wf);
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", d = (h) => !isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Ao(s)} ${a} ${typeof c == "string" ? c : Ao(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Qf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Gf = Qf, Jf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Xf(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = ke(e, Jf);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ft(18));
  const a = Df(n), c = hn(e);
  let u = Ve(c, {
    mixins: vf(c.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zf.slice(),
    typography: jf(a, i),
    transitions: Kf(o),
    zIndex: G({}, Gf)
  });
  if (u = Ve(u, s), u = t.reduce((f, d) => Ve(f, d), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], d = (h, g) => {
      let m;
      for (m in h) {
        const y = h[m];
        if (f.indexOf(m) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = ln("", m);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${m}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[m] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const g = u.components[h].styleOverrides;
      g && h.indexOf("Mui") === 0 && d(g, h);
    });
  }
  return u.unstable_sxConfig = G({}, pn, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return mn({
      sx: d,
      theme: this
    });
  }, u;
}
const Zf = Xf(), Bi = Zf;
function ed({
  props: e,
  name: t
}) {
  return pf({
    props: e,
    name: t,
    defaultTheme: Bi
  });
}
const td = (e) => zt(e) && e !== "classes", rd = ff({
  defaultTheme: Bi,
  rootShouldForwardProp: td
}), nd = rd;
function od(e) {
  return ln("MuiSvgIcon", e);
}
Qc("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const id = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], sd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Pe(t)}`, `fontSize${Pe(r)}`]
  };
  return Hc(o, od, n);
}, ad = nd("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Pe(r.color)}`], t[`fontSize${Pe(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, s, a, c, u, f, d, h, g, m, y, v, T, P;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (i = o.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem",
      large: ((f = e.typography) == null || (d = f.pxToRem) == null ? void 0 : d.call(f, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (g = (e.vars || e).palette) == null || (m = g[t.color]) == null ? void 0 : m.main) != null ? h : {
      action: (y = (e.vars || e).palette) == null || (v = y.action) == null ? void 0 : v.active,
      disabled: (T = (e.vars || e).palette) == null || (P = T.action) == null ? void 0 : P.disabled,
      inherit: void 0
    }[t.color]
  };
}), gn = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const n = ed({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: d,
    viewBox: h = "0 0 24 24"
  } = n, g = ke(n, id), m = G({}, n, {
    color: s,
    component: a,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: h
  }), y = {};
  f || (y.viewBox = h);
  const v = sd(m);
  return /* @__PURE__ */ Gt(ad, G({
    as: a,
    className: Gc(v.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r
  }, y, g, {
    ownerState: m,
    children: [o, d ? /* @__PURE__ */ Ae("title", {
      children: d
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (gn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: te.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: te.object,
  /**
   * @ignore
   */
  className: te.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: te.oneOfType([te.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), te.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: te.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: te.oneOfType([te.oneOf(["inherit", "large", "medium", "small"]), te.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: te.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: te.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: te.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: te.oneOfType([te.arrayOf(te.oneOfType([te.func, te.object, te.bool])), te.func, te.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: te.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: te.string
});
gn.muiName = "SvgIcon";
const Po = gn;
function ud(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ Ae(Po, G({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Po.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(r));
}
const cd = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), $i.configure(e);
  }
}, ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Pe,
  createChainedFunction: _c,
  createSvgIcon: ud,
  debounce: xc,
  deprecatedPropType: Tc,
  isMuiElement: Rc,
  ownerDocument: Ai,
  ownerWindow: Ac,
  requirePropFactory: Pc,
  setRef: Pi,
  unstable_ClassNameGenerator: cd,
  unstable_useEnhancedEffect: ki,
  unstable_useId: $c,
  unsupportedProp: Nc,
  useControlled: Dc,
  useEventCallback: Lc,
  useForkRef: Mc,
  useIsFocusVisible: Wc
}, Symbol.toStringTag, { value: "Module" })), fd = /* @__PURE__ */ $o(ld);
var ko;
function dd() {
  return ko || (ko = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = fd;
  }(_r)), _r;
}
const pd = /* @__PURE__ */ $o(_s);
var md = Jr;
Object.defineProperty(un, "__esModule", {
  value: !0
});
var Vi = un.default = void 0, hd = md(dd()), yd = pd, gd = (0, hd.default)(/* @__PURE__ */ (0, yd.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
Vi = un.default = gd;
const vd = () => (/* @__PURE__ */ new Date()).getTime(), bd = {
  getRandomKey: vd
}, zi = ps(void 0), Td = ({ children: e }) => {
  const [t, r] = Mt([]), [n, o] = Mt(!1), [i, s] = Mt(void 0);
  Io(() => {
    t.length && !i ? (s({ ...t[0] }), r((m) => m.slice(1)), o(!0)) : t.length && i && n && o(!1);
  }, [t, i, n]);
  const a = (m) => {
    r((y) => [...y, { message: m, key: bd.getRandomKey() }]);
  }, c = (m, y) => {
    y !== "clickaway" && o(!1);
  }, u = () => {
    s(void 0);
  }, f = (m) => a(m), d = (m) => a(m), h = (m) => a(m), g = (m) => a(m);
  return /* @__PURE__ */ Gt(zi.Provider, { value: { showInfo: f, showSuccess: d, showError: h, showWarning: g }, children: [
    e,
    /* @__PURE__ */ Ae(
      Es,
      {
        open: n,
        autoHideDuration: 6e3,
        onClose: c,
        TransitionProps: { onExited: u },
        message: i ? i.message : void 0,
        action: /* @__PURE__ */ Ae(No, { children: /* @__PURE__ */ Ae(Ss, { "aria-label": "close", color: "inherit", sx: { p: 0.5 }, onClick: c, children: /* @__PURE__ */ Ae(Vi, {}) }) })
      },
      i ? i.key : void 0
    )
  ] });
}, Rd = () => {
  const e = ms(zi);
  if (e === void 0)
    throw new Error("useToasts must be used within a ToastContext");
  return e;
};
export {
  bd as A,
  _d as H,
  xd as N,
  Go as S,
  zi as T,
  to as a,
  Td as b,
  As as r,
  qr as s,
  Rd as u
};
