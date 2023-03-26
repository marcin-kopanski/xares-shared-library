import * as l from "react";
import Pt, { useMemo as qo, lazy as Go, useState as Ct, useEffect as Ln, Suspense as Xo, createContext as Zo, useContext as Jo } from "react";
import { useQueryClient as ei, onlineManager as Yr, notifyManager as ti, QueryClient as ri, QueryClientProvider as ni } from "@tanstack/react-query";
import oi from "@emotion/styled";
import "@emotion/react";
import { Snackbar as ii, IconButton as ai } from "@mui/material";
function jn(e) {
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
var pt = {}, si = {
  get exports() {
    return pt;
  },
  set exports(e) {
    pt = e;
  }
}, at = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function ui() {
  if (Hr)
    return at;
  Hr = 1;
  var e = Pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, c, f) {
    var d, m = {}, p = null, y = null;
    f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (d in c)
      n.call(c, d) && !i.hasOwnProperty(d) && (m[d] = c[d]);
    if (u && u.defaultProps)
      for (d in c = u.defaultProps, c)
        m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: t, type: u, key: p, ref: y, props: m, _owner: o.current };
  }
  return at.Fragment = r, at.jsx = a, at.jsxs = a, at;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function li() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function v(s) {
      if (s === null || typeof s != "object")
        return null;
      var E = g && s[g] || s[h];
      return typeof E == "function" ? E : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(s) {
      {
        for (var E = arguments.length, w = new Array(E > 1 ? E - 1 : 0), D = 1; D < E; D++)
          w[D - 1] = arguments[D];
        O("error", s, w);
      }
    }
    function O(s, E, w) {
      {
        var D = T.ReactDebugCurrentFrame, K = D.getStackAddendum();
        K !== "" && (E += "%s", w = w.concat([K]));
        var oe = w.map(function(Y) {
          return String(Y);
        });
        oe.unshift("Warning: " + E), Function.prototype.apply.call(console[s], console, oe);
      }
    }
    var x = !1, b = !1, N = !1, fe = !1, se = !1, $;
    $ = Symbol.for("react.module.reference");
    function te(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || se || s === o || s === f || s === d || fe || s === y || x || b || N || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === m || s.$$typeof === a || s.$$typeof === u || s.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === $ || s.getModuleId !== void 0));
    }
    function ue(s, E, w) {
      var D = s.displayName;
      if (D)
        return D;
      var K = E.displayName || E.name || "";
      return K !== "" ? w + "(" + K + ")" : w;
    }
    function ge(s) {
      return s.displayName || "Context";
    }
    function ne(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var E = s;
            return ge(E) + ".Consumer";
          case a:
            var w = s;
            return ge(w._context) + ".Provider";
          case c:
            return ue(s, s.render, "ForwardRef");
          case m:
            var D = s.displayName || null;
            return D !== null ? D : ne(s.type) || "Memo";
          case p: {
            var K = s, oe = K._payload, Y = K._init;
            try {
              return ne(Y(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, B = 0, U, re, de, he, S, _, M;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function k() {
      {
        if (B === 0) {
          U = console.log, re = console.info, de = console.warn, he = console.error, S = console.group, _ = console.groupCollapsed, M = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        B++;
      }
    }
    function j() {
      {
        if (B--, B === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, s, {
              value: U
            }),
            info: ie({}, s, {
              value: re
            }),
            warn: ie({}, s, {
              value: de
            }),
            error: ie({}, s, {
              value: he
            }),
            group: ie({}, s, {
              value: S
            }),
            groupCollapsed: ie({}, s, {
              value: _
            }),
            groupEnd: ie({}, s, {
              value: M
            })
          });
        }
        B < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = T.ReactCurrentDispatcher, L;
    function F(s, E, w) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (K) {
            var D = K.stack.trim().match(/\n( *(at )?)/);
            L = D && D[1] || "";
          }
        return `
` + L + s;
      }
    }
    var W = !1, V;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      V = new ye();
    }
    function C(s, E) {
      if (!s || W)
        return "";
      {
        var w = V.get(s);
        if (w !== void 0)
          return w;
      }
      var D;
      W = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = P.current, P.current = null, k();
      try {
        if (E) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (ke) {
              D = ke;
            }
            Reflect.construct(s, [], Y);
          } else {
            try {
              Y.call();
            } catch (ke) {
              D = ke;
            }
            s.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            D = ke;
          }
          s();
        }
      } catch (ke) {
        if (ke && D && typeof ke.stack == "string") {
          for (var z = ke.stack.split(`
`), ve = D.stack.split(`
`), pe = z.length - 1, me = ve.length - 1; pe >= 1 && me >= 0 && z[pe] !== ve[me]; )
            me--;
          for (; pe >= 1 && me >= 0; pe--, me--)
            if (z[pe] !== ve[me]) {
              if (pe !== 1 || me !== 1)
                do
                  if (pe--, me--, me < 0 || z[pe] !== ve[me]) {
                    var we = `
` + z[pe].replace(" at new ", " at ");
                    return s.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", s.displayName)), typeof s == "function" && V.set(s, we), we;
                  }
                while (pe >= 1 && me >= 0);
              break;
            }
        }
      } finally {
        W = !1, P.current = oe, j(), Error.prepareStackTrace = K;
      }
      var Ye = s ? s.displayName || s.name : "", Wr = Ye ? F(Ye) : "";
      return typeof s == "function" && V.set(s, Wr), Wr;
    }
    function Se(s, E, w) {
      return C(s, !1);
    }
    function R(s) {
      var E = s.prototype;
      return !!(E && E.isReactComponent);
    }
    function xe(s, E, w) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return C(s, R(s));
      if (typeof s == "string")
        return F(s);
      switch (s) {
        case f:
          return F("Suspense");
        case d:
          return F("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            return Se(s.render);
          case m:
            return xe(s.type, E, w);
          case p: {
            var D = s, K = D._payload, oe = D._init;
            try {
              return xe(oe(K), E, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, ot = {}, kr = T.ReactDebugCurrentFrame;
    function St(s) {
      if (s) {
        var E = s._owner, w = xe(s.type, s._source, E ? E.type : null);
        kr.setExtraStackFrame(w);
      } else
        kr.setExtraStackFrame(null);
    }
    function Ao(s, E, w, D, K) {
      {
        var oe = Function.call.bind(Ie);
        for (var Y in s)
          if (oe(s, Y)) {
            var z = void 0;
            try {
              if (typeof s[Y] != "function") {
                var ve = Error((D || "React class") + ": " + w + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              z = s[Y](E, Y, D, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              z = pe;
            }
            z && !(z instanceof Error) && (St(K), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", w, Y, typeof z), St(null)), z instanceof Error && !(z.message in ot) && (ot[z.message] = !0, St(K), I("Failed %s type: %s", w, z.message), St(null));
          }
      }
    }
    var Po = Array.isArray;
    function zt(s) {
      return Po(s);
    }
    function $o(s) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, w = E && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w;
      }
    }
    function Io(s) {
      try {
        return Mr(s), !1;
      } catch {
        return !0;
      }
    }
    function Mr(s) {
      return "" + s;
    }
    function Dr(s) {
      if (Io(s))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $o(s)), Mr(s);
    }
    var it = T.ReactCurrentOwner, ko = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lr, jr, Bt;
    Bt = {};
    function Mo(s) {
      if (Ie.call(s, "ref")) {
        var E = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Do(s) {
      if (Ie.call(s, "key")) {
        var E = Object.getOwnPropertyDescriptor(s, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Lo(s, E) {
      if (typeof s.ref == "string" && it.current && E && it.current.stateNode !== E) {
        var w = ne(it.current.type);
        Bt[w] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(it.current.type), s.ref), Bt[w] = !0);
      }
    }
    function jo(s, E) {
      {
        var w = function() {
          Lr || (Lr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function No(s, E) {
      {
        var w = function() {
          jr || (jr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Fo = function(s, E, w, D, K, oe, Y) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: E,
        ref: w,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: oe
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
        value: D
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Vo(s, E, w, D, K) {
      {
        var oe, Y = {}, z = null, ve = null;
        w !== void 0 && (Dr(w), z = "" + w), Do(E) && (Dr(E.key), z = "" + E.key), Mo(E) && (ve = E.ref, Lo(E, K));
        for (oe in E)
          Ie.call(E, oe) && !ko.hasOwnProperty(oe) && (Y[oe] = E[oe]);
        if (s && s.defaultProps) {
          var pe = s.defaultProps;
          for (oe in pe)
            Y[oe] === void 0 && (Y[oe] = pe[oe]);
        }
        if (z || ve) {
          var me = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          z && jo(Y, me), ve && No(Y, me);
        }
        return Fo(s, z, ve, K, D, it.current, Y);
      }
    }
    var Wt = T.ReactCurrentOwner, Nr = T.ReactDebugCurrentFrame;
    function We(s) {
      if (s) {
        var E = s._owner, w = xe(s.type, s._source, E ? E.type : null);
        Nr.setExtraStackFrame(w);
      } else
        Nr.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function Ht(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Fr() {
      {
        if (Wt.current) {
          var s = ne(Wt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Uo(s) {
      {
        if (s !== void 0) {
          var E = s.fileName.replace(/^.*[\\\/]/, ""), w = s.lineNumber;
          return `

Check your code at ` + E + ":" + w + ".";
        }
        return "";
      }
    }
    var Vr = {};
    function zo(s) {
      {
        var E = Fr();
        if (!E) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (E = `

Check the top-level render call using <` + w + ">.");
        }
        return E;
      }
    }
    function Ur(s, E) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var w = zo(E);
        if (Vr[w])
          return;
        Vr[w] = !0;
        var D = "";
        s && s._owner && s._owner !== Wt.current && (D = " It was passed a child from " + ne(s._owner.type) + "."), We(s), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, D), We(null);
      }
    }
    function zr(s, E) {
      {
        if (typeof s != "object")
          return;
        if (zt(s))
          for (var w = 0; w < s.length; w++) {
            var D = s[w];
            Ht(D) && Ur(D, E);
          }
        else if (Ht(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var K = v(s);
          if (typeof K == "function" && K !== s.entries)
            for (var oe = K.call(s), Y; !(Y = oe.next()).done; )
              Ht(Y.value) && Ur(Y.value, E);
        }
      }
    }
    function Bo(s) {
      {
        var E = s.type;
        if (E == null || typeof E == "string")
          return;
        var w;
        if (typeof E == "function")
          w = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === m))
          w = E.propTypes;
        else
          return;
        if (w) {
          var D = ne(E);
          Ao(w, s.props, "prop", D, s);
        } else if (E.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var K = ne(E);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wo(s) {
      {
        for (var E = Object.keys(s.props), w = 0; w < E.length; w++) {
          var D = E[w];
          if (D !== "children" && D !== "key") {
            We(s), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), We(null);
            break;
          }
        }
        s.ref !== null && (We(s), I("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    function Br(s, E, w, D, K, oe) {
      {
        var Y = te(s);
        if (!Y) {
          var z = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Uo(K);
          ve ? z += ve : z += Fr();
          var pe;
          s === null ? pe = "null" : zt(s) ? pe = "array" : s !== void 0 && s.$$typeof === t ? (pe = "<" + (ne(s.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof s, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, z);
        }
        var me = Vo(s, E, w, K, oe);
        if (me == null)
          return me;
        if (Y) {
          var we = E.children;
          if (we !== void 0)
            if (D)
              if (zt(we)) {
                for (var Ye = 0; Ye < we.length; Ye++)
                  zr(we[Ye], s);
                Object.freeze && Object.freeze(we);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zr(we, s);
        }
        return s === n ? Wo(me) : Bo(me), me;
      }
    }
    function Yo(s, E, w) {
      return Br(s, E, w, !0);
    }
    function Ho(s, E, w) {
      return Br(s, E, w, !1);
    }
    var Ko = Ho, Qo = Yo;
    st.Fragment = n, st.jsx = Ko, st.jsxs = Qo;
  }()), st;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ui() : e.exports = li();
})(si);
const Nn = pt.Fragment, Oe = pt.jsx, $t = pt.jsxs, ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: Nn,
  jsx: Oe,
  jsxs: $t
}, Symbol.toStringTag, { value: "Module" })), ql = () => /* @__PURE__ */ Oe("div", { children: "Hello World zostal zmieniony!!!" });
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ne.apply(this, arguments);
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
const Fn = {
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
}, fi = Object.keys(Fn).join("|"), di = new RegExp(fi, "g");
function pi(e) {
  return e.replace(di, (t) => Fn[t]);
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
function mi(e, t, r) {
  var n;
  if (r = r || {}, r.threshold = (n = r.threshold) != null ? n : _e.MATCHES, !r.accessors) {
    const a = Qr(e, t, r);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: e,
      rank: a,
      accessorIndex: -1,
      accessorThreshold: r.threshold,
      passed: a >= r.threshold
    };
  }
  const o = vi(e, r.accessors), i = {
    rankedValue: e,
    rank: _e.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: r.threshold,
    passed: !1
  };
  for (let a = 0; a < o.length; a++) {
    const u = o[a];
    let c = Qr(u.itemValue, t, r);
    const {
      minRanking: f,
      maxRanking: d,
      threshold: m = r.threshold
    } = u.attributes;
    c < f && c >= _e.MATCHES ? c = f : c > d && (c = d), c = Math.min(c, d), c >= m && c > i.rank && (i.rank = c, i.passed = !0, i.accessorIndex = a, i.accessorThreshold = m, i.rankedValue = u.itemValue);
  }
  return i;
}
function Qr(e, t, r) {
  return e = qr(e, r), t = qr(t, r), t.length > e.length ? _e.NO_MATCH : e === t ? _e.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? _e.EQUAL : e.startsWith(t) ? _e.STARTS_WITH : e.includes(` ${t}`) ? _e.WORD_STARTS_WITH : e.includes(t) ? _e.CONTAINS : t.length === 1 ? _e.NO_MATCH : yi(e).includes(t) ? _e.ACRONYM : gi(e, t));
}
function yi(e) {
  let t = "";
  return e.split(" ").forEach((n) => {
    n.split("-").forEach((i) => {
      t += i.substr(0, 1);
    });
  }), t;
}
function gi(e, t) {
  let r = 0, n = 0;
  function o(c, f, d) {
    for (let m = d, p = f.length; m < p; m++)
      if (f[m] === c)
        return r += 1, m + 1;
    return -1;
  }
  function i(c) {
    const f = 1 / c, d = r / t.length;
    return _e.MATCHES + d * f;
  }
  const a = o(t[0], e, 0);
  if (a < 0)
    return _e.NO_MATCH;
  n = a;
  for (let c = 1, f = t.length; c < f; c++) {
    const d = t[c];
    if (n = o(d, e, n), !(n > -1))
      return _e.NO_MATCH;
  }
  const u = n - a;
  return i(u);
}
function qr(e, t) {
  let {
    keepDiacritics: r
  } = t;
  return e = `${e}`, r || (e = pi(e)), e;
}
function hi(e, t) {
  let r = t;
  typeof t == "object" && (r = t.accessor);
  const n = r(e);
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function vi(e, t) {
  const r = [];
  for (let n = 0, o = t.length; n < o; n++) {
    const i = t[n], a = bi(i), u = hi(e, i);
    for (let c = 0, f = u.length; c < f; c++)
      r.push({
        itemValue: u[c],
        attributes: a
      });
  }
  return r;
}
const Gr = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function bi(e) {
  return typeof e == "function" ? Gr : {
    ...Gr,
    ...e
  };
}
const Ei = (e) => {
  try {
    const t = localStorage.getItem(e);
    return typeof t == "string" ? JSON.parse(t) : void 0;
  } catch {
    return;
  }
};
function Fe(e, t) {
  const [r, n] = l.useState();
  l.useEffect(() => {
    const i = Ei(e);
    n(typeof i > "u" || i === null ? typeof t == "function" ? t() : t : i);
  }, [t, e]);
  const o = l.useCallback((i) => {
    n((a) => {
      let u = i;
      typeof i == "function" && (u = i(a));
      try {
        localStorage.setItem(e, JSON.stringify(u));
      } catch {
      }
      return u;
    });
  }, [e]);
  return [r, o];
}
var Si = (
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
), Vn = (
  /** @class */
  function() {
    function e(t) {
      this.generateIdentifier = t, this.kv = new Si();
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
), _i = globalThis && globalThis.__extends || function() {
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
}(), Ci = (
  /** @class */
  function(e) {
    _i(t, e);
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
  }(Vn)
), wi = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
};
function xi(e) {
  if ("values" in Object)
    return Object.values(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(e[r]);
  return t;
}
function Oi(e, t) {
  var r = xi(e);
  if ("find" in r)
    return r.find(t);
  for (var n = r, o = 0; o < n.length; o++) {
    var i = n[o];
    if (t(i))
      return i;
  }
}
function tt(e, t) {
  Object.entries(e).forEach(function(r) {
    var n = wi(r, 2), o = n[0], i = n[1];
    return t(i, o);
  });
}
function wt(e, t) {
  return e.indexOf(t) !== -1;
}
function Xr(e, t) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (t(n))
      return n;
  }
}
var Ti = (
  /** @class */
  function() {
    function e() {
      this.transfomers = {};
    }
    return e.prototype.register = function(t) {
      this.transfomers[t.name] = t;
    }, e.prototype.findApplicable = function(t) {
      return Oi(this.transfomers, function(r) {
        return r.isApplicable(t);
      });
    }, e.prototype.findByName = function(t) {
      return this.transfomers[t];
    }, e;
  }()
), Ri = function(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}, Un = function(e) {
  return typeof e > "u";
}, Ai = function(e) {
  return e === null;
}, mt = function(e) {
  return typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}, ur = function(e) {
  return mt(e) && Object.keys(e).length === 0;
}, Ue = function(e) {
  return Array.isArray(e);
}, Pi = function(e) {
  return typeof e == "string";
}, $i = function(e) {
  return typeof e == "number" && !isNaN(e);
}, Ii = function(e) {
  return typeof e == "boolean";
}, ki = function(e) {
  return e instanceof RegExp;
}, yt = function(e) {
  return e instanceof Map;
}, gt = function(e) {
  return e instanceof Set;
}, zn = function(e) {
  return Ri(e) === "Symbol";
}, Mi = function(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}, Di = function(e) {
  return e instanceof Error;
}, Zr = function(e) {
  return typeof e == "number" && isNaN(e);
}, Jr = function(e) {
  return Ii(e) || Ai(e) || Un(e) || $i(e) || Pi(e) || zn(e);
}, Li = function(e) {
  return typeof e == "bigint";
}, ji = function(e) {
  return e === 1 / 0 || e === -1 / 0;
}, Ni = function(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}, Fi = function(e) {
  return e instanceof URL;
}, Bn = function(e) {
  return e.replace(/\./g, "\\.");
}, Kt = function(e) {
  return e.map(String).map(Bn).join(".");
}, ft = function(e) {
  for (var t = [], r = "", n = 0; n < e.length; n++) {
    var o = e.charAt(n), i = o === "\\" && e.charAt(n + 1) === ".";
    if (i) {
      r += ".", n++;
      continue;
    }
    var a = o === ".";
    if (a) {
      t.push(r), r = "";
      continue;
    }
    r += o;
  }
  var u = r;
  return t.push(u), t;
}, lr = globalThis && globalThis.__assign || function() {
  return lr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, lr.apply(this, arguments);
}, cr = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, fr = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
    e[o] = t[r];
  return e;
};
function Ae(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Wn = [
  Ae(Un, "undefined", function() {
    return null;
  }, function() {
  }),
  Ae(Li, "bigint", function(e) {
    return e.toString();
  }, function(e) {
    return typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e);
  }),
  Ae(Mi, "Date", function(e) {
    return e.toISOString();
  }, function(e) {
    return new Date(e);
  }),
  Ae(Di, "Error", function(e, t) {
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
  Ae(ki, "regexp", function(e) {
    return "" + e;
  }, function(e) {
    var t = e.slice(1, e.lastIndexOf("/")), r = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, r);
  }),
  Ae(
    gt,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(e) {
      return fr([], cr(e.values()));
    },
    function(e) {
      return new Set(e);
    }
  ),
  Ae(yt, "map", function(e) {
    return fr([], cr(e.entries()));
  }, function(e) {
    return new Map(e);
  }),
  Ae(function(e) {
    return Zr(e) || ji(e);
  }, "number", function(e) {
    return Zr(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Ae(function(e) {
    return e === 0 && 1 / e === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Ae(Fi, "URL", function(e) {
    return e.toString();
  }, function(e) {
    return new URL(e);
  })
];
function It(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Yn = It(function(e, t) {
  if (zn(e)) {
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
}), Vi = [
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
}, {}), Hn = It(Ni, function(e) {
  return ["typed-array", e.constructor.name];
}, function(e) {
  return fr([], cr(e));
}, function(e, t) {
  var r = Vi[t[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(e);
});
function Kn(e, t) {
  if (e != null && e.constructor) {
    var r = !!t.classRegistry.getIdentifier(e.constructor);
    return r;
  }
  return !1;
}
var Qn = It(Kn, function(e, t) {
  var r = t.classRegistry.getIdentifier(e.constructor);
  return ["class", r];
}, function(e, t) {
  var r = t.classRegistry.getAllowedProps(e.constructor);
  if (!r)
    return lr({}, e);
  var n = {};
  return r.forEach(function(o) {
    n[o] = e[o];
  }), n;
}, function(e, t, r) {
  var n = r.classRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), e);
}), qn = It(function(e, t) {
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
}), Ui = [Qn, Yn, qn, Hn], en = function(e, t) {
  var r = Xr(Ui, function(o) {
    return o.isApplicable(e, t);
  });
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation(e, t)
    };
  var n = Xr(Wn, function(o) {
    return o.isApplicable(e, t);
  });
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation
    };
}, Gn = {};
Wn.forEach(function(e) {
  Gn[e.annotation] = e;
});
var zi = function(e, t, r) {
  if (Ue(t))
    switch (t[0]) {
      case "symbol":
        return Yn.untransform(e, t, r);
      case "class":
        return Qn.untransform(e, t, r);
      case "custom":
        return qn.untransform(e, t, r);
      case "typed-array":
        return Hn.untransform(e, t, r);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    var n = Gn[t];
    if (!n)
      throw new Error("Unknown transformation: " + t);
    return n.untransform(e, r);
  }
}, Je = function(e, t) {
  for (var r = e.keys(); t > 0; )
    r.next(), t--;
  return r.next().value;
};
function Xn(e) {
  if (wt(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (wt(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (wt(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Bi = function(e, t) {
  Xn(t);
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (gt(e))
      e = Je(e, +n);
    else if (yt(e)) {
      var o = +n, i = +t[++r] == 0 ? "key" : "value", a = Je(e, o);
      switch (i) {
        case "key":
          e = a;
          break;
        case "value":
          e = e.get(a);
          break;
      }
    } else
      e = e[n];
  }
  return e;
}, dr = function(e, t, r) {
  if (Xn(t), t.length === 0)
    return r(e);
  for (var n = e, o = 0; o < t.length - 1; o++) {
    var i = t[o];
    if (Ue(n)) {
      var a = +i;
      n = n[a];
    } else if (mt(n))
      n = n[i];
    else if (gt(n)) {
      var u = +i;
      n = Je(n, u);
    } else if (yt(n)) {
      var c = o === t.length - 2;
      if (c)
        break;
      var u = +i, f = +t[++o] == 0 ? "key" : "value", d = Je(n, u);
      switch (f) {
        case "key":
          n = d;
          break;
        case "value":
          n = n.get(d);
          break;
      }
    }
  }
  var m = t[t.length - 1];
  if ((Ue(n) || mt(n)) && (n[m] = r(n[m])), gt(n)) {
    var p = Je(n, +m), y = r(p);
    p !== y && (n.delete(p), n.add(y));
  }
  if (yt(n)) {
    var u = +t[t.length - 2], g = Je(n, u), f = +m == 0 ? "key" : "value";
    switch (f) {
      case "key": {
        var h = r(g);
        n.set(h, n.get(g)), h !== g && n.delete(g);
        break;
      }
      case "value": {
        n.set(g, r(n.get(g)));
        break;
      }
    }
  }
  return e;
}, De = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, Ve = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
    e[o] = t[r];
  return e;
};
function pr(e, t, r) {
  if (r === void 0 && (r = []), !!e) {
    if (!Ue(e)) {
      tt(e, function(a, u) {
        return pr(a, t, Ve(Ve([], De(r)), De(ft(u))));
      });
      return;
    }
    var n = De(e, 2), o = n[0], i = n[1];
    i && tt(i, function(a, u) {
      pr(a, t, Ve(Ve([], De(r)), De(ft(u))));
    }), t(o, r);
  }
}
function Wi(e, t, r) {
  return pr(t, function(n, o) {
    e = dr(e, o, function(i) {
      return zi(i, n, r);
    });
  }), e;
}
function Yi(e, t) {
  function r(a, u) {
    var c = Bi(e, ft(u));
    a.map(ft).forEach(function(f) {
      e = dr(e, f, function() {
        return c;
      });
    });
  }
  if (Ue(t)) {
    var n = De(t, 2), o = n[0], i = n[1];
    o.forEach(function(a) {
      e = dr(e, ft(a), function() {
        return e;
      });
    }), i && tt(i, r);
  } else
    tt(t, r);
  return e;
}
var Hi = function(e, t) {
  return mt(e) || Ue(e) || yt(e) || gt(e) || Kn(e, t);
};
function Ki(e, t, r) {
  var n = r.get(e);
  n ? n.push(t) : r.set(e, [t]);
}
function Qi(e) {
  var t = {}, r = void 0;
  return e.forEach(function(n) {
    if (!(n.length <= 1)) {
      var o = De(n.map(function(u) {
        return u.map(String);
      }).sort(function(u, c) {
        return u.length - c.length;
      })), i = o[0], a = o.slice(1);
      i.length === 0 ? r = a.map(Kt) : t[Kt(i)] = a.map(Kt);
    }
  }), r ? ur(t) ? [r] : [r, t] : ur(t) ? void 0 : t;
}
var Zn = function(e, t, r, n, o) {
  var i;
  if (n === void 0 && (n = []), o === void 0 && (o = []), Jr(e) || Ki(e, n, t), !Hi(e, r)) {
    var a = en(e, r);
    return a ? {
      transformedValue: a.value,
      annotations: [a.type]
    } : {
      transformedValue: e
    };
  }
  if (wt(o, e))
    return {
      transformedValue: null
    };
  var u = en(e, r), c = (i = u == null ? void 0 : u.value) !== null && i !== void 0 ? i : e;
  Jr(e) || (o = Ve(Ve([], De(o)), [e]));
  var f = Ue(c) ? [] : {}, d = {};
  return tt(c, function(m, p) {
    var y = Zn(m, t, r, Ve(Ve([], De(n)), [p]), o);
    f[p] = y.transformedValue, Ue(y.annotations) ? d[p] = y.annotations : mt(y.annotations) && tt(y.annotations, function(g, h) {
      d[Bn(p) + "." + h] = g;
    });
  }), ur(d) ? {
    transformedValue: f,
    annotations: u ? [u.type] : void 0
  } : {
    transformedValue: f,
    annotations: u ? [u.type, d] : d
  };
};
function Jn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function qi(e) {
  if (Jn(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t.constructor === Object && t === Object.prototype;
}
function tn(e) {
  return Jn(e) === "Array";
}
function Gi(e, t, r, n, o) {
  const i = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = r), o && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function mr(e, t = {}) {
  if (tn(e))
    return e.map((o) => mr(o, t));
  if (!qi(e))
    return e;
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols(e);
  return [...r, ...n].reduce((o, i) => {
    if (tn(t.props) && !t.props.includes(i))
      return o;
    const a = e[i], u = mr(a, t);
    return Gi(o, i, u, e, t.nonenumerable), o;
  }, {});
}
var Be = globalThis && globalThis.__assign || function() {
  return Be = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Be.apply(this, arguments);
}, Xi = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, Zi = globalThis && globalThis.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, o = e.length; r < n; r++, o++)
    e[o] = t[r];
  return e;
}, eo = (
  /** @class */
  function() {
    function e() {
      this.classRegistry = new Ci(), this.symbolRegistry = new Vn(function(t) {
        var r;
        return (r = t.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new Ti(), this.allowedErrorProps = [];
    }
    return e.prototype.serialize = function(t) {
      var r = /* @__PURE__ */ new Map(), n = Zn(t, r, this), o = {
        json: n.transformedValue
      };
      n.annotations && (o.meta = Be(Be({}, o.meta), { values: n.annotations }));
      var i = Qi(r);
      return i && (o.meta = Be(Be({}, o.meta), { referentialEqualities: i })), o;
    }, e.prototype.deserialize = function(t) {
      var r = t.json, n = t.meta, o = mr(r);
      return n != null && n.values && (o = Wi(o, n.values, this)), n != null && n.referentialEqualities && (o = Yi(o, n.referentialEqualities)), o;
    }, e.prototype.stringify = function(t) {
      return JSON.stringify(this.serialize(t));
    }, e.prototype.parse = function(t) {
      return this.deserialize(JSON.parse(t));
    }, e.prototype.registerClass = function(t, r) {
      this.classRegistry.register(t, r);
    }, e.prototype.registerSymbol = function(t, r) {
      this.symbolRegistry.register(t, r);
    }, e.prototype.registerCustom = function(t, r) {
      this.customTransformerRegistry.register(Be({ name: r }, t));
    }, e.prototype.allowErrorProps = function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (t = this.allowedErrorProps).push.apply(t, Zi([], Xi(r)));
    }, e.defaultInstance = new e(), e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance), e.deserialize = e.defaultInstance.deserialize.bind(e.defaultInstance), e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance), e.parse = e.defaultInstance.parse.bind(e.defaultInstance), e.registerClass = e.defaultInstance.registerClass.bind(e.defaultInstance), e.registerSymbol = e.defaultInstance.registerSymbol.bind(e.defaultInstance), e.registerCustom = e.defaultInstance.registerCustom.bind(e.defaultInstance), e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(e.defaultInstance), e;
  }()
);
const H = {
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
}, to = /* @__PURE__ */ l.createContext(H);
function ro({
  theme: e,
  ...t
}) {
  return /* @__PURE__ */ l.createElement(to.Provider, Ne({
    value: e
  }, t));
}
function Ji() {
  return l.useContext(to);
}
function ea(e) {
  const [t, r] = l.useState(() => {
    if (typeof window < "u")
      return window.matchMedia(e).matches;
  });
  return l.useEffect(() => {
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
function no({
  queryState: e,
  observerCount: t,
  isStale: r,
  theme: n
}) {
  return e.fetchStatus === "fetching" ? n.active : t ? e.fetchStatus === "paused" ? n.paused : r ? n.warning : n.success : n.gray;
}
function Xe(e) {
  return e.state.fetchStatus === "fetching" ? "fetching" : e.getObserversCount() ? e.state.fetchStatus === "paused" ? "paused" : e.isStale() ? "stale" : "fresh" : "inactive";
}
function Ee(e, t, r = {}) {
  return /* @__PURE__ */ l.forwardRef(({
    style: n,
    ...o
  }, i) => {
    const a = Ji(), u = Object.entries(r).reduce((c, [f, d]) => ea(f) ? {
      ...c,
      ...typeof d == "function" ? d(o, a) : d
    } : c, {});
    return /* @__PURE__ */ l.createElement(e, {
      ...o,
      style: {
        ...typeof t == "function" ? t(o, a) : t,
        ...n,
        ...u
      },
      ref: i
    });
  });
}
function ta() {
  const e = l.useRef(!1), t = l.useCallback(() => e.current, []);
  return l.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t;
}
const oo = (e, t = !1) => {
  const {
    json: r
  } = eo.serialize(e);
  return JSON.stringify(r, null, t ? 2 : void 0);
}, _t = (e) => e.state.fetchStatus !== "idle" ? 0 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3, ra = (e, t) => e.queryHash.localeCompare(t.queryHash), io = (e, t) => e.state.dataUpdatedAt < t.state.dataUpdatedAt ? 1 : -1, na = (e, t) => _t(e) === _t(t) ? io(e, t) : _t(e) > _t(t) ? 1 : -1, Qt = {
  "Status > Last Updated": na,
  "Query Hash": ra,
  "Last Updated": io
}, yr = 70, ht = 500, oa = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
function Ot(e) {
  return ["left", "right"].includes(e);
}
function ao(e) {
  return oa[e];
}
function _r(e, t) {
  return "" + e + (t.charAt(0).toUpperCase() + t.slice(1));
}
function ia({
  position: e = "bottom",
  height: t,
  width: r,
  devtoolsTheme: n,
  isOpen: o,
  isResizing: i,
  panelStyle: a
}) {
  const u = ao(e), c = _r("border", u), f = Ot(e);
  return {
    ...a,
    direction: "ltr",
    position: "fixed",
    [e]: 0,
    [c]: "1px solid " + n.gray,
    transformOrigin: u,
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
      transform: f ? "translateX(0) scale(1)" : "translateY(0) scale(1)"
    } : {
      opacity: 0,
      pointerEvents: "none",
      transform: f ? "translateX(15px) scale(1.02)" : "translateY(15px) scale(1.02)"
    },
    ...f ? {
      top: 0,
      height: "100vh",
      maxWidth: "90%",
      width: typeof r == "number" && r >= yr ? r : ht
    } : {
      left: 0,
      width: "100%",
      maxHeight: "90%",
      height: typeof t == "number" && t >= yr ? t : ht
    }
  };
}
function aa(e = "bottom") {
  const t = Ot(e), r = ao(e), n = _r("margin", r);
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
const sa = Ee("div", (e, t) => ({
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
}), ua = Ee("div", () => ({
  flex: "1 1 500px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  height: "100%"
}), {
  "(max-width: 700px)": (e, t) => ({
    borderTop: "2px solid " + t.gray
  })
}), Me = Ee("button", (e, t) => ({
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
})), la = Ee("span", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5em",
  fontSize: "0.9em"
}), ut = Ee("span", {
  display: "inline-flex",
  alignItems: "center",
  padding: ".2em .4em",
  fontWeight: "bold",
  textShadow: "0 0 10px black",
  borderRadius: ".2em"
}), Le = Ee("code", {
  fontSize: ".9em",
  color: "inherit",
  background: "inherit"
}), ca = Ee("input", (e, t) => ({
  backgroundColor: t.inputBackgroundColor,
  border: 0,
  borderRadius: ".2em",
  color: t.inputTextColor,
  fontSize: ".9em",
  lineHeight: "1.3",
  padding: ".3em .4em"
})), gr = Ee("select", (e, t) => ({
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
function hr({
  text: e
}) {
  return /* @__PURE__ */ l.createElement("span", {
    style: {
      position: "absolute",
      width: "0.1px",
      height: "0.1px",
      overflow: "hidden"
    }
  }, e);
}
const rn = Ee("div", {
  fontFamily: "Menlo, monospace",
  fontSize: "1em",
  lineHeight: "1.7",
  outline: "none",
  wordBreak: "break-word"
}), fa = Ee("span", {
  color: "white"
}), da = Ee("button", {
  cursor: "pointer",
  color: "white"
}), pa = Ee("button", {
  cursor: "pointer",
  color: "inherit",
  font: "inherit",
  outline: "inherit",
  background: "transparent",
  border: "none",
  padding: 0
}), ma = ({
  value: e
}) => {
  const [t, r] = l.useState("NoCopy");
  return /* @__PURE__ */ l.createElement("button", {
    onClick: t === "NoCopy" ? () => {
      navigator.clipboard.writeText(eo.stringify(e)).then(() => {
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
  }, t === "NoCopy" ? /* @__PURE__ */ l.createElement(ha, null) : t === "SuccessCopy" ? /* @__PURE__ */ l.createElement(ba, null) : /* @__PURE__ */ l.createElement(va, null));
}, ya = Ee("span", (e, t) => ({
  color: t.danger
})), qt = Ee("div", {
  marginLeft: ".1em",
  paddingLeft: "1em",
  borderLeft: "2px solid rgba(0,0,0,.15)"
}), ga = Ee("span", {
  color: "grey",
  fontSize: ".7em"
}), nn = ({
  expanded: e,
  style: t = {}
}) => /* @__PURE__ */ l.createElement("span", {
  style: {
    display: "inline-block",
    transition: "all .1s ease",
    transform: "rotate(" + (e ? 90 : 0) + "deg) " + (t.transform || ""),
    ...t
  }
}, "▶"), ha = () => /* @__PURE__ */ l.createElement("span", {
  "aria-label": "Copy object to clipboard",
  title: "Copy object to clipboard",
  style: {
    paddingLeft: "1em"
  }
}, /* @__PURE__ */ l.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10"
}, /* @__PURE__ */ l.createElement("path", {
  fill: "currentColor",
  d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
}), /* @__PURE__ */ l.createElement("path", {
  fill: "currentColor",
  d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
}))), va = () => /* @__PURE__ */ l.createElement("span", {
  "aria-label": "Failed copying to clipboard",
  title: "Failed copying to clipboard",
  style: {
    paddingLeft: "1em",
    display: "flex",
    alignItems: "center"
  }
}, /* @__PURE__ */ l.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10",
  display: "block"
}, /* @__PURE__ */ l.createElement("path", {
  fill: "red",
  d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
})), /* @__PURE__ */ l.createElement("span", {
  style: {
    color: "red",
    fontSize: "12px",
    paddingLeft: "4px",
    position: "relative",
    top: "2px"
  }
}, "See console")), ba = () => /* @__PURE__ */ l.createElement("span", {
  "aria-label": "Object copied to clipboard",
  title: "Object copied to clipboard",
  style: {
    paddingLeft: "1em",
    display: "inline-block",
    verticalAlign: "middle"
  }
}, /* @__PURE__ */ l.createElement("svg", {
  height: "16",
  viewBox: "0 0 16 16",
  width: "16",
  display: "block"
}, /* @__PURE__ */ l.createElement("path", {
  fill: "green",
  d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
})));
function Ea(e, t) {
  if (t < 1)
    return [];
  let r = 0;
  const n = [];
  for (; r < e.length; )
    n.push(e.slice(r, r + t)), r = r + t;
  return n;
}
const Sa = ({
  handleEntry: e,
  label: t,
  value: r,
  subEntries: n = [],
  subEntryPages: o = [],
  type: i,
  expanded: a = !1,
  copyable: u = !1,
  toggleExpanded: c,
  pageSize: f
}) => {
  const [d, m] = l.useState([]);
  return /* @__PURE__ */ l.createElement(rn, {
    key: t
  }, o.length ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(pa, {
    onClick: () => c()
  }, /* @__PURE__ */ l.createElement(nn, {
    expanded: a
  }), " ", t, " ", /* @__PURE__ */ l.createElement(ga, null, String(i).toLowerCase() === "iterable" ? "(Iterable) " : "", n.length, " ", n.length > 1 ? "items" : "item")), u ? /* @__PURE__ */ l.createElement(ma, {
    value: r
  }) : null, a ? o.length === 1 ? /* @__PURE__ */ l.createElement(qt, null, n.map(e)) : /* @__PURE__ */ l.createElement(qt, null, o.map((p, y) => /* @__PURE__ */ l.createElement("div", {
    key: y
  }, /* @__PURE__ */ l.createElement(rn, null, /* @__PURE__ */ l.createElement(da, {
    onClick: () => m((g) => g.includes(y) ? g.filter((h) => h !== y) : [...g, y])
  }, /* @__PURE__ */ l.createElement(nn, {
    expanded: a
  }), " [", y * f, " ...", " ", y * f + f - 1, "]"), d.includes(y) ? /* @__PURE__ */ l.createElement(qt, null, p.map(e)) : null)))) : null) : /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(fa, null, t, ":"), " ", /* @__PURE__ */ l.createElement(ya, null, oo(r))));
};
function _a(e) {
  return Symbol.iterator in e;
}
function vr({
  value: e,
  defaultExpanded: t,
  renderer: r = Sa,
  pageSize: n = 100,
  copyable: o = !1,
  ...i
}) {
  const [a, u] = l.useState(!!t), c = l.useCallback(() => u((y) => !y), []);
  let f = typeof e, d = [];
  const m = (y) => {
    const g = t === !0 ? {
      [y.label]: !0
    } : t == null ? void 0 : t[y.label];
    return {
      ...y,
      defaultExpanded: g
    };
  };
  Array.isArray(e) ? (f = "array", d = e.map((y, g) => m({
    label: g.toString(),
    value: y
  }))) : e !== null && typeof e == "object" && _a(e) && typeof e[Symbol.iterator] == "function" ? (f = "Iterable", d = Array.from(e, (y, g) => m({
    label: g.toString(),
    value: y
  }))) : typeof e == "object" && e !== null && (f = "object", d = Object.entries(e).map(([y, g]) => m({
    label: y,
    value: g
  })));
  const p = Ea(d, n);
  return r({
    handleEntry: (y) => /* @__PURE__ */ l.createElement(vr, Ne({
      key: y.label,
      value: e,
      renderer: r,
      copyable: o
    }, i, y)),
    type: f,
    subEntries: d,
    subEntryPages: p,
    value: e,
    expanded: a,
    copyable: o,
    toggleExpanded: c,
    pageSize: n,
    ...i
  });
}
function so(e) {
  return /* @__PURE__ */ l.createElement("svg", Ne({
    width: "40px",
    height: "40px",
    viewBox: "0 0 190 190",
    version: "1.1"
  }, e), /* @__PURE__ */ l.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ l.createElement("g", {
    transform: "translate(-33.000000, 0.000000)"
  }, /* @__PURE__ */ l.createElement("path", {
    d: "M72.7239712,61.3436237 C69.631224,46.362877 68.9675112,34.8727722 70.9666331,26.5293551 C72.1555965,21.5671678 74.3293088,17.5190846 77.6346064,14.5984631 C81.1241394,11.5150478 85.5360327,10.0020122 90.493257,10.0020122 C98.6712013,10.0020122 107.26826,13.7273214 116.455725,20.8044264 C120.20312,23.6910458 124.092437,27.170411 128.131651,31.2444746 C128.45314,30.8310265 128.816542,30.4410453 129.22143,30.0806152 C140.64098,19.9149716 150.255245,13.5989272 158.478408,11.1636507 C163.367899,9.715636 167.958526,9.57768202 172.138936,10.983031 C176.551631,12.4664684 180.06766,15.5329489 182.548314,19.8281091 C186.642288,26.9166735 187.721918,36.2310983 186.195595,47.7320243 C185.573451,52.4199112 184.50985,57.5263831 183.007094,63.0593153 C183.574045,63.1277086 184.142416,63.2532808 184.705041,63.4395297 C199.193932,68.2358678 209.453582,73.3937462 215.665021,79.2882839 C219.360669,82.7953831 221.773972,86.6998434 222.646365,91.0218204 C223.567176,95.5836746 222.669313,100.159332 220.191548,104.451297 C216.105211,111.529614 208.591643,117.11221 197.887587,121.534031 C193.589552,123.309539 188.726579,124.917559 183.293259,126.363748 C183.541176,126.92292 183.733521,127.516759 183.862138,128.139758 C186.954886,143.120505 187.618598,154.61061 185.619477,162.954027 C184.430513,167.916214 182.256801,171.964297 178.951503,174.884919 C175.46197,177.968334 171.050077,179.48137 166.092853,179.48137 C157.914908,179.48137 149.31785,175.756061 140.130385,168.678956 C136.343104,165.761613 132.410866,162.238839 128.325434,158.108619 C127.905075,158.765474 127.388968,159.376011 126.77857,159.919385 C115.35902,170.085028 105.744755,176.401073 97.5215915,178.836349 C92.6321009,180.284364 88.0414736,180.422318 83.8610636,179.016969 C79.4483686,177.533532 75.9323404,174.467051 73.4516862,170.171891 C69.3577116,163.083327 68.2780823,153.768902 69.8044053,142.267976 C70.449038,137.410634 71.56762,132.103898 73.1575891,126.339009 C72.5361041,126.276104 71.9120754,126.144816 71.2949591,125.940529 C56.8060684,121.144191 46.5464184,115.986312 40.3349789,110.091775 C36.6393312,106.584675 34.2260275,102.680215 33.3536352,98.3582381 C32.4328237,93.7963839 33.3306866,89.2207269 35.8084524,84.9287618 C39.8947886,77.8504443 47.4083565,72.2678481 58.1124133,67.8460273 C62.5385143,66.0176154 67.5637208,64.366822 73.1939394,62.8874674 C72.9933393,62.3969171 72.8349374,61.8811235 72.7239712,61.3436237 Z",
    fill: "#002C4B",
    fillRule: "nonzero",
    transform: "translate(128.000000, 95.000000) scale(-1, 1) translate(-128.000000, -95.000000) "
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M113.396882,64 L142.608177,64 C144.399254,64 146.053521,64.958025 146.944933,66.5115174 L161.577138,92.0115174 C162.461464,93.5526583 162.461464,95.4473417 161.577138,96.9884826 L146.944933,122.488483 C146.053521,124.041975 144.399254,125 142.608177,125 L113.396882,125 C111.605806,125 109.951539,124.041975 109.060126,122.488483 L94.4279211,96.9884826 C93.543596,95.4473417 93.543596,93.5526583 94.4279211,92.0115174 L109.060126,66.5115174 C109.951539,64.958025 111.605806,64 113.396882,64 Z M138.987827,70.2765273 C140.779849,70.2765273 142.434839,71.2355558 143.325899,72.7903404 L154.343038,92.0138131 C155.225607,93.5537825 155.225607,95.4462175 154.343038,96.9861869 L143.325899,116.20966 C142.434839,117.764444 140.779849,118.723473 138.987827,118.723473 L117.017233,118.723473 C115.225211,118.723473 113.570221,117.764444 112.67916,116.20966 L101.662022,96.9861869 C100.779452,95.4462175 100.779452,93.5537825 101.662022,92.0138131 L112.67916,72.7903404 C113.570221,71.2355558 115.225211,70.2765273 117.017233,70.2765273 L138.987827,70.2765273 Z M135.080648,77.1414791 L120.924411,77.1414791 C119.134228,77.1414791 117.480644,78.0985567 116.5889,79.6508285 L116.5889,79.6508285 L109.489217,92.0093494 C108.603232,93.5515958 108.603232,95.4484042 109.489217,96.9906506 L109.489217,96.9906506 L116.5889,109.349172 C117.480644,110.901443 119.134228,111.858521 120.924411,111.858521 L120.924411,111.858521 L135.080648,111.858521 C136.870831,111.858521 138.524416,110.901443 139.41616,109.349172 L139.41616,109.349172 L146.515843,96.9906506 C147.401828,95.4484042 147.401828,93.5515958 146.515843,92.0093494 L146.515843,92.0093494 L139.41616,79.6508285 C138.524416,78.0985567 136.870831,77.1414791 135.080648,77.1414791 L135.080648,77.1414791 Z M131.319186,83.7122186 C133.108028,83.7122186 134.760587,84.6678753 135.652827,86.2183156 L138.983552,92.0060969 C139.87203,93.5500005 139.87203,95.4499995 138.983552,96.9939031 L135.652827,102.781684 C134.760587,104.332125 133.108028,105.287781 131.319186,105.287781 L124.685874,105.287781 C122.897032,105.287781 121.244473,104.332125 120.352233,102.781684 L117.021508,96.9939031 C116.13303,95.4499995 116.13303,93.5500005 117.021508,92.0060969 L120.352233,86.2183156 C121.244473,84.6678753 122.897032,83.7122186 124.685874,83.7122186 L131.319186,83.7122186 Z M128.003794,90.1848875 C126.459294,90.1848875 125.034382,91.0072828 124.263005,92.3424437 C123.491732,93.6774232 123.491732,95.3225768 124.263005,96.6575563 C125.034382,97.9927172 126.459294,98.8151125 128.001266,98.8151125 L128.001266,98.8151125 C129.545766,98.8151125 130.970678,97.9927172 131.742055,96.6575563 C132.513327,95.3225768 132.513327,93.6774232 131.742055,92.3424437 C130.970678,91.0072828 129.545766,90.1848875 128.003794,90.1848875 L128.003794,90.1848875 Z M93,94.5009646 L100.767764,94.5009646",
    fill: "#FFD94C"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M87.8601729,108.357758 C89.1715224,107.608286 90.8360246,108.074601 91.5779424,109.399303 L91.5779424,109.399303 L92.0525843,110.24352 C95.8563392,116.982993 99.8190116,123.380176 103.940602,129.435068 C108.807881,136.585427 114.28184,143.82411 120.362479,151.151115 C121.316878,152.30114 121.184944,154.011176 120.065686,154.997937 L120.065686,154.997937 L119.454208,155.534625 C99.3465389,173.103314 86.2778188,176.612552 80.2480482,166.062341 C74.3500652,155.742717 76.4844915,136.982888 86.6513274,109.782853 C86.876818,109.179582 87.3045861,108.675291 87.8601729,108.357758 Z M173.534177,129.041504 C174.986131,128.785177 176.375496,129.742138 176.65963,131.194242 L176.65963,131.194242 L176.812815,131.986376 C181.782365,157.995459 178.283348,171 166.315764,171 C154.609745,171 139.708724,159.909007 121.612702,137.727022 C121.211349,137.235047 120.994572,136.617371 121,135.981509 C121.013158,134.480686 122.235785,133.274651 123.730918,133.287756 L123.730918,133.287756 L124.684654,133.294531 C132.305698,133.335994 139.714387,133.071591 146.910723,132.501323 C155.409039,131.82788 164.283523,130.674607 173.534177,129.041504 Z M180.408726,73.8119663 C180.932139,72.4026903 182.508386,71.6634537 183.954581,72.149012 L183.954581,72.149012 L184.742552,72.4154854 C210.583763,81.217922 220.402356,90.8916805 214.198332,101.436761 C208.129904,111.751366 190.484347,119.260339 161.26166,123.963678 C160.613529,124.067994 159.948643,123.945969 159.382735,123.618843 C158.047025,122.846729 157.602046,121.158214 158.388848,119.847438 L158.388848,119.847438 L158.889328,119.0105 C162.877183,112.31633 166.481358,105.654262 169.701854,99.0242957 C173.50501,91.1948179 177.073967,82.7907081 180.408726,73.8119663 Z M94.7383398,66.0363218 C95.3864708,65.9320063 96.0513565,66.0540315 96.6172646,66.3811573 C97.9529754,67.153271 98.3979538,68.8417862 97.6111517,70.1525615 L97.6111517,70.1525615 L97.1106718,70.9895001 C93.1228168,77.6836699 89.5186416,84.3457379 86.2981462,90.9757043 C82.49499,98.8051821 78.9260328,107.209292 75.5912744,116.188034 C75.0678608,117.59731 73.4916142,118.336546 72.045419,117.850988 L72.045419,117.850988 L71.2574475,117.584515 C45.4162372,108.782078 35.597644,99.1083195 41.8016679,88.5632391 C47.8700957,78.2486335 65.515653,70.7396611 94.7383398,66.0363218 Z M136.545792,34.4653746 C156.653461,16.8966864 169.722181,13.3874478 175.751952,23.9376587 C181.649935,34.2572826 179.515508,53.0171122 169.348673,80.2171474 C169.123182,80.8204179 168.695414,81.324709 168.139827,81.6422422 C166.828478,82.3917144 165.163975,81.9253986 164.422058,80.6006966 L164.422058,80.6006966 L163.947416,79.7564798 C160.143661,73.0170065 156.180988,66.6198239 152.059398,60.564932 C147.192119,53.4145727 141.71816,46.1758903 135.637521,38.8488847 C134.683122,37.6988602 134.815056,35.9888243 135.934314,35.0020629 L135.934314,35.0020629 Z M90.6842361,18 C102.390255,18 117.291276,29.0909926 135.387298,51.2729777 C135.788651,51.7649527 136.005428,52.3826288 136,53.0184911 C135.986842,54.5193144 134.764215,55.7253489 133.269082,55.7122445 L133.269082,55.7122445 L132.315346,55.7054689 C124.694302,55.6640063 117.285613,55.9284091 110.089277,56.4986773 C101.590961,57.17212 92.7164767,58.325393 83.4658235,59.9584962 C82.0138691,60.2148231 80.6245044,59.2578618 80.3403697,57.805758 L80.3403697,57.805758 L80.1871846,57.0136235 C75.2176347,31.0045412 78.7166519,18 90.6842361,18 Z",
    fill: "#FF4154"
  }))));
}
var br = {}, Ca = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
}, Gt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function wa() {
  if (on)
    return Gt;
  on = 1;
  var e = Pt;
  function t(m, p) {
    return m === p && (m !== 0 || 1 / m === 1 / p) || m !== m && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function u(m, p) {
    var y = p(), g = n({ inst: { value: y, getSnapshot: p } }), h = g[0].inst, v = g[1];
    return i(function() {
      h.value = y, h.getSnapshot = p, c(h) && v({ inst: h });
    }, [m, y, p]), o(function() {
      return c(h) && v({ inst: h }), m(function() {
        c(h) && v({ inst: h });
      });
    }, [m]), a(y), y;
  }
  function c(m) {
    var p = m.getSnapshot;
    m = m.value;
    try {
      var y = p();
      return !r(m, y);
    } catch {
      return !0;
    }
  }
  function f(m, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : u;
  return Gt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Gt;
}
var Xt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function xa() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Pt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), N = 1; N < x; N++)
          b[N - 1] = arguments[N];
        n("error", O, b);
      }
    }
    function n(O, x, b) {
      {
        var N = t.ReactDebugCurrentFrame, fe = N.getStackAddendum();
        fe !== "" && (x += "%s", b = b.concat([fe]));
        var se = b.map(function($) {
          return String($);
        });
        se.unshift("Warning: " + x), Function.prototype.apply.call(console[O], console, se);
      }
    }
    function o(O, x) {
      return O === x && (O !== 0 || 1 / O === 1 / x) || O !== O && x !== x;
    }
    var i = typeof Object.is == "function" ? Object.is : o, a = e.useState, u = e.useEffect, c = e.useLayoutEffect, f = e.useDebugValue, d = !1, m = !1;
    function p(O, x, b) {
      d || e.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = x();
      if (!m) {
        var fe = x();
        i(N, fe) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var se = a({
        inst: {
          value: N,
          getSnapshot: x
        }
      }), $ = se[0].inst, te = se[1];
      return c(function() {
        $.value = N, $.getSnapshot = x, y($) && te({
          inst: $
        });
      }, [O, N, x]), u(function() {
        y($) && te({
          inst: $
        });
        var ue = function() {
          y($) && te({
            inst: $
          });
        };
        return O(ue);
      }, [O]), f(N), N;
    }
    function y(O) {
      var x = O.getSnapshot, b = O.value;
      try {
        var N = x();
        return !i(b, N);
      } catch {
        return !0;
      }
    }
    function g(O, x, b) {
      return x();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !h, T = v ? g : p, I = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : T;
    Xt.useSyncExternalStore = I, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = wa() : e.exports = xa();
})(Ca);
function Oa({
  initialIsOpen: e,
  panelProps: t = {},
  closeButtonProps: r = {},
  toggleButtonProps: n = {},
  position: o = "bottom-left",
  containerElement: i = "aside",
  context: a,
  styleNonce: u,
  panelPosition: c = "bottom",
  errorTypes: f = []
}) {
  const d = l.useRef(null), m = l.useRef(null), [p, y] = Fe("reactQueryDevtoolsOpen", e), [g, h] = Fe("reactQueryDevtoolsHeight", ht), [v, T] = Fe("reactQueryDevtoolsWidth", ht), [I = "bottom", O] = Fe("reactQueryDevtoolsPanelPosition", c), [x, b] = l.useState(!1), [N, fe] = l.useState(!1), se = ta(), $ = (U, re) => {
    if (!U || re.button !== 0)
      return;
    const de = Ot(I);
    fe(!0);
    const {
      height: he,
      width: S
    } = U.getBoundingClientRect(), _ = re.clientX, M = re.clientY;
    let A = 0;
    const k = (P) => {
      P.preventDefault(), de ? (A = S + (I === "right" ? _ - P.clientX : P.clientX - _), T(A)) : (A = he + (I === "bottom" ? M - P.clientY : P.clientY - M), h(A)), A < yr ? y(!1) : y(!0);
    }, j = () => {
      N && fe(!1), document.removeEventListener("mousemove", k, !1), document.removeEventListener("mouseUp", j, !1);
    };
    document.addEventListener("mousemove", k, !1), document.addEventListener("mouseup", j, !1);
  };
  l.useEffect(() => {
    b(p ?? !1);
  }, [p, x, b]), l.useEffect(() => {
    const U = m.current;
    if (U) {
      const re = () => {
        x && (U.style.visibility = "visible");
      }, de = () => {
        x || (U.style.visibility = "hidden");
      };
      return U.addEventListener("transitionstart", re), U.addEventListener("transitionend", de), () => {
        U.removeEventListener("transitionstart", re), U.removeEventListener("transitionend", de);
      };
    }
  }, [x]), l.useEffect(() => {
    var U;
    if (x && (U = d.current) != null && U.parentElement) {
      const {
        parentElement: re
      } = d.current, de = _r("padding", I), he = Ot(I), S = (({
        padding: M,
        paddingTop: A,
        paddingBottom: k,
        paddingLeft: j,
        paddingRight: P
      }) => ({
        padding: M,
        paddingTop: A,
        paddingBottom: k,
        paddingLeft: j,
        paddingRight: P
      }))(re.style), _ = () => {
        re.style.padding = "0px", re.style.paddingTop = "0px", re.style.paddingBottom = "0px", re.style.paddingLeft = "0px", re.style.paddingRight = "0px", re.style[de] = (he ? v : g) + "px";
      };
      if (_(), typeof window < "u")
        return window.addEventListener("resize", _), () => {
          window.removeEventListener("resize", _), Object.entries(S).forEach(([M, A]) => {
            re.style[M] = A;
          });
        };
    }
  }, [x, I, g, v]);
  const {
    style: te = {},
    ...ue
  } = t, {
    style: ge = {},
    onClick: ne,
    ...ie
  } = n, B = ia({
    position: I,
    devtoolsTheme: H,
    isOpen: x,
    height: g,
    width: v,
    isResizing: N,
    panelStyle: te
  });
  return se() ? /* @__PURE__ */ l.createElement(i, {
    ref: d,
    className: "ReactQueryDevtools",
    "aria-label": "React Query Devtools"
  }, /* @__PURE__ */ l.createElement(ro, {
    theme: H
  }, /* @__PURE__ */ l.createElement(uo, Ne({
    ref: m,
    context: a,
    styleNonce: u,
    position: I,
    onPositionChange: O,
    showCloseButton: !0,
    closeButtonProps: r
  }, ue, {
    style: B,
    isOpen: x,
    setIsOpen: y,
    onDragStart: (U) => $(m.current, U),
    errorTypes: f
  }))), x ? null : /* @__PURE__ */ l.createElement("button", Ne({
    type: "button"
  }, ie, {
    "aria-label": "Open React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: (U) => {
      y(!0), ne == null || ne(U);
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
      ...ge
    }
  }), /* @__PURE__ */ l.createElement(so, {
    "aria-hidden": !0
  }), /* @__PURE__ */ l.createElement(hr, {
    text: "Open React Query Devtools"
  }))) : null;
}
const be = (e, t, r = !1) => br.useSyncExternalStore(l.useCallback((n) => r ? () => {
} : e.subscribe(ti.batchCalls(n)), [e, r]), t, t), uo = /* @__PURE__ */ l.forwardRef(function(t, r) {
  const {
    isOpen: n = !0,
    styleNonce: o,
    setIsOpen: i,
    context: a,
    onDragStart: u,
    onPositionChange: c,
    showCloseButton: f,
    position: d,
    closeButtonProps: m = {},
    errorTypes: p = [],
    ...y
  } = t, {
    onClick: g,
    ...h
  } = m, v = ei({
    context: a
  }), T = v.getQueryCache(), [I, O] = Fe("reactQueryDevtoolsSortFn", Object.keys(Qt)[0]), [x, b] = Fe("reactQueryDevtoolsFilter", ""), [N, fe] = Fe("reactQueryDevtoolsBaseSort", 1), se = l.useMemo(() => Qt[I], [I]), $ = be(T, () => T.getAll().length, !n), [te, ue] = Fe("reactQueryDevtoolsActiveQueryHash", ""), ge = l.useMemo(() => {
    const B = T.getAll();
    if ($ === 0)
      return [];
    const U = x ? B.filter((de) => mi(de.queryHash, x).passed) : [...B];
    return se ? U.sort((de, he) => se(de, he) * N) : U;
  }, [N, se, x, $, T]), [ne, ie] = l.useState(!1);
  return /* @__PURE__ */ l.createElement(ro, {
    theme: H
  }, /* @__PURE__ */ l.createElement(sa, Ne({
    ref: r,
    className: "ReactQueryDevtoolsPanel",
    "aria-label": "React Query Devtools Panel",
    id: "ReactQueryDevtoolsPanel"
  }, y, {
    style: {
      height: ht,
      position: "relative",
      ...y.style
    }
  }), /* @__PURE__ */ l.createElement("style", {
    nonce: o,
    dangerouslySetInnerHTML: {
      __html: `
            .ReactQueryDevtoolsPanel * {
              scrollbar-color: ` + H.backgroundAlt + " " + H.gray + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar, .ReactQueryDevtoolsPanel scrollbar {
              width: 1em;
              height: 1em;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-track, .ReactQueryDevtoolsPanel scrollbar-track {
              background: ` + H.backgroundAlt + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-thumb, .ReactQueryDevtoolsPanel scrollbar-thumb {
              background: ` + H.gray + `;
              border-radius: .5em;
              border: 3px solid ` + H.backgroundAlt + `;
            }
          `
    }
  }), /* @__PURE__ */ l.createElement("div", {
    style: aa(d),
    onMouseDown: u
  }), n && /* @__PURE__ */ l.createElement("div", {
    style: {
      flex: "1 1 500px",
      minHeight: "40%",
      maxHeight: "100%",
      overflow: "auto",
      borderRight: "1px solid " + H.grayAlt,
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ l.createElement("div", {
    style: {
      padding: ".5em",
      background: H.backgroundAlt,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /* @__PURE__ */ l.createElement("button", {
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
  }, /* @__PURE__ */ l.createElement(so, {
    "aria-hidden": !0
  }), /* @__PURE__ */ l.createElement(hr, {
    text: "Close React Query Devtools"
  })), /* @__PURE__ */ l.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ l.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".5em"
    }
  }, /* @__PURE__ */ l.createElement(Ra, {
    queryCache: T
  }), d && c ? /* @__PURE__ */ l.createElement(gr, {
    "aria-label": "Panel position",
    value: d,
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (B) => c(B.target.value)
  }, /* @__PURE__ */ l.createElement("option", {
    value: "left"
  }, "Left"), /* @__PURE__ */ l.createElement("option", {
    value: "right"
  }, "Right"), /* @__PURE__ */ l.createElement("option", {
    value: "top"
  }, "Top"), /* @__PURE__ */ l.createElement("option", {
    value: "bottom"
  }, "Bottom")) : null), /* @__PURE__ */ l.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.5em"
    }
  }, /* @__PURE__ */ l.createElement(ca, {
    placeholder: "Filter",
    "aria-label": "Filter by queryhash",
    value: x ?? "",
    onChange: (B) => b(B.target.value),
    onKeyDown: (B) => {
      B.key === "Escape" && b("");
    },
    style: {
      flex: "1",
      width: "100%"
    }
  }), /* @__PURE__ */ l.createElement(gr, {
    "aria-label": "Sort queries",
    value: I,
    onChange: (B) => O(B.target.value),
    style: {
      flex: "1",
      minWidth: 75,
      marginRight: ".5em"
    }
  }, Object.keys(Qt).map((B) => /* @__PURE__ */ l.createElement("option", {
    key: B,
    value: B
  }, "Sort by ", B))), /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => fe((B) => B * -1),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, N === 1 ? "⬆ Asc" : "⬇ Desc"), /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => {
      ne ? (Yr.setOnline(void 0), ie(!1), window.dispatchEvent(new Event("online"))) : (Yr.setOnline(!1), ie(!0));
    },
    "aria-label": ne ? "Restore offline mock" : "Mock offline behavior",
    title: ne ? "Restore offline mock" : "Mock offline behavior",
    style: {
      padding: "0",
      height: "2em"
    }
  }, /* @__PURE__ */ l.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "2em",
    height: "2em",
    viewBox: "0 0 24 24",
    stroke: ne ? H.danger : "currentColor",
    fill: "none"
  }, ne ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ l.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374"
  }), /* @__PURE__ */ l.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21"
  })) : /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ l.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M6.343 12.343a8 8 0 0 1 11.314 0"
  }), /* @__PURE__ */ l.createElement("path", {
    d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
  }))), /* @__PURE__ */ l.createElement(hr, {
    text: ne ? "Restore offline mock" : "Mock offline behavior"
  }))))), /* @__PURE__ */ l.createElement("div", {
    style: {
      overflowY: "auto",
      flex: "1"
    }
  }, ge.map((B) => /* @__PURE__ */ l.createElement(Aa, {
    queryKey: B.queryKey,
    activeQueryHash: te,
    setActiveQueryHash: ue,
    key: B.queryHash,
    queryCache: T
  })))), te && n ? /* @__PURE__ */ l.createElement(Ta, {
    activeQueryHash: te,
    queryCache: T,
    queryClient: v,
    errorTypes: p
  }) : null, f ? /* @__PURE__ */ l.createElement(Me, Ne({
    type: "button",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, h, {
    style: {
      position: "absolute",
      zIndex: 99999,
      margin: ".5em",
      bottom: 0,
      left: 0,
      ...h.style
    },
    onClick: (B) => {
      i(!1), g == null || g(B);
    }
  }), "Close") : null));
}), Ta = ({
  queryCache: e,
  activeQueryHash: t,
  queryClient: r,
  errorTypes: n
}) => {
  var o, i;
  const a = be(e, () => e.getAll().find((g) => g.queryHash === t)), u = be(e, () => {
    var g;
    return (g = e.getAll().find((h) => h.queryHash === t)) == null ? void 0 : g.state;
  }), c = (o = be(e, () => {
    var g;
    return (g = e.getAll().find((h) => h.queryHash === t)) == null ? void 0 : g.isStale();
  })) != null ? o : !1, f = (i = be(e, () => {
    var g;
    return (g = e.getAll().find((h) => h.queryHash === t)) == null ? void 0 : g.getObserversCount();
  })) != null ? i : 0, d = () => {
    const g = a == null ? void 0 : a.fetch();
    g == null || g.catch(Pa);
  }, m = qo(() => {
    if (a && u != null && u.error) {
      const g = n.find((h) => {
        var v;
        return h.initializer(a).toString() === ((v = u.error) == null ? void 0 : v.toString());
      });
      return g == null ? void 0 : g.name;
    }
  }, [a, u == null ? void 0 : u.error, n]);
  if (!a || !u)
    return null;
  const p = (g) => {
    var h;
    const v = (h = g == null ? void 0 : g.initializer(a)) != null ? h : new Error("Unknown error from devtools"), T = a.options;
    a.setState({
      status: "error",
      error: v,
      fetchMeta: {
        ...a.state.fetchMeta,
        __previousQueryOptions: T
      }
    });
  }, y = () => {
    a.fetch(a.state.fetchMeta.__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  return /* @__PURE__ */ l.createElement(ua, null, /* @__PURE__ */ l.createElement("div", {
    style: {
      padding: ".5em",
      background: H.backgroundAlt,
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Details"), /* @__PURE__ */ l.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ l.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ l.createElement(Le, {
    style: {
      lineHeight: "1.8em"
    }
  }, /* @__PURE__ */ l.createElement("pre", {
    style: {
      margin: 0,
      padding: 0,
      overflow: "auto"
    }
  }, oo(a.queryKey, !0))), /* @__PURE__ */ l.createElement("span", {
    style: {
      padding: "0.3em .6em",
      borderRadius: "0.4em",
      fontWeight: "bold",
      textShadow: "0 2px 10px black",
      background: no({
        queryState: u,
        isStale: c,
        observerCount: f,
        theme: H
      }),
      flexShrink: 0
    }
  }, Xe(a))), /* @__PURE__ */ l.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Observers: ", /* @__PURE__ */ l.createElement(Le, null, f)), /* @__PURE__ */ l.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Last Updated:", " ", /* @__PURE__ */ l.createElement(Le, null, new Date(u.dataUpdatedAt).toLocaleTimeString()))), /* @__PURE__ */ l.createElement("div", {
    style: {
      background: H.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Actions"), /* @__PURE__ */ l.createElement("div", {
    style: {
      padding: "0.5em",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      alignItems: "flex-end"
    }
  }, /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: d,
    disabled: u.fetchStatus === "fetching",
    style: {
      background: H.active
    }
  }, "Refetch"), " ", /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => r.invalidateQueries(a),
    style: {
      background: H.warning,
      color: H.inputTextColor
    }
  }, "Invalidate"), " ", /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => r.resetQueries(a),
    style: {
      background: H.gray
    }
  }, "Reset"), " ", /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => r.removeQueries(a),
    style: {
      background: H.danger
    }
  }, "Remove"), " ", /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => {
      if (a.state.data === void 0)
        y();
      else {
        const g = a.options;
        a.fetch({
          ...g,
          queryFn: () => new Promise(() => {
          }),
          cacheTime: -1
        }), a.setState({
          data: void 0,
          status: "loading",
          fetchMeta: {
            ...a.state.fetchMeta,
            __previousQueryOptions: g
          }
        });
      }
    },
    style: {
      background: H.paused
    }
  }, a.state.status === "loading" ? "Restore" : "Trigger", " ", "loading"), " ", n.length === 0 || a.state.status === "error" ? /* @__PURE__ */ l.createElement(Me, {
    type: "button",
    onClick: () => {
      a.state.error ? r.resetQueries(a) : p();
    },
    style: {
      background: H.danger
    }
  }, a.state.status === "error" ? "Restore" : "Trigger", " error") : /* @__PURE__ */ l.createElement("label", null, "Trigger error:", /* @__PURE__ */ l.createElement(gr, {
    value: m ?? "",
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (g) => {
      const h = n.find((v) => v.name === g.target.value);
      p(h);
    }
  }, /* @__PURE__ */ l.createElement("option", {
    key: "",
    value: ""
  }), n.map((g) => /* @__PURE__ */ l.createElement("option", {
    key: g.name,
    value: g.name
  }, g.name))))), /* @__PURE__ */ l.createElement("div", {
    style: {
      background: H.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Data Explorer"), /* @__PURE__ */ l.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ l.createElement(vr, {
    label: "Data",
    value: u.data,
    defaultExpanded: {},
    copyable: !0
  })), /* @__PURE__ */ l.createElement("div", {
    style: {
      background: H.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Explorer"), /* @__PURE__ */ l.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ l.createElement(vr, {
    label: "Query",
    value: a,
    defaultExpanded: {
      queryKey: !0
    }
  })));
}, Ra = ({
  queryCache: e
}) => {
  const t = be(e, () => e.getAll().filter((a) => Xe(a) === "fresh").length), r = be(e, () => e.getAll().filter((a) => Xe(a) === "fetching").length), n = be(e, () => e.getAll().filter((a) => Xe(a) === "paused").length), o = be(e, () => e.getAll().filter((a) => Xe(a) === "stale").length), i = be(e, () => e.getAll().filter((a) => Xe(a) === "inactive").length);
  return /* @__PURE__ */ l.createElement(la, null, /* @__PURE__ */ l.createElement(ut, {
    style: {
      background: H.success,
      opacity: t ? 1 : 0.3
    }
  }, "fresh ", /* @__PURE__ */ l.createElement(Le, null, "(", t, ")")), " ", /* @__PURE__ */ l.createElement(ut, {
    style: {
      background: H.active,
      opacity: r ? 1 : 0.3
    }
  }, "fetching ", /* @__PURE__ */ l.createElement(Le, null, "(", r, ")")), " ", /* @__PURE__ */ l.createElement(ut, {
    style: {
      background: H.paused,
      opacity: n ? 1 : 0.3
    }
  }, "paused ", /* @__PURE__ */ l.createElement(Le, null, "(", n, ")")), " ", /* @__PURE__ */ l.createElement(ut, {
    style: {
      background: H.warning,
      color: "black",
      textShadow: "0",
      opacity: o ? 1 : 0.3
    }
  }, "stale ", /* @__PURE__ */ l.createElement(Le, null, "(", o, ")")), " ", /* @__PURE__ */ l.createElement(ut, {
    style: {
      background: H.gray,
      opacity: i ? 1 : 0.3
    }
  }, "inactive ", /* @__PURE__ */ l.createElement(Le, null, "(", i, ")")));
}, Aa = /* @__PURE__ */ l.memo(({
  queryKey: e,
  setActiveQueryHash: t,
  activeQueryHash: r,
  queryCache: n
}) => {
  var o, i, a, u;
  const c = (o = be(n, () => {
    var y;
    return (y = n.find(e)) == null ? void 0 : y.queryHash;
  })) != null ? o : "", f = be(n, () => {
    var y;
    return (y = n.find(e)) == null ? void 0 : y.state;
  }), d = (i = be(n, () => {
    var y;
    return (y = n.find(e)) == null ? void 0 : y.isStale();
  })) != null ? i : !1, m = (a = be(n, () => {
    var y;
    return (y = n.find(e)) == null ? void 0 : y.isDisabled();
  })) != null ? a : !1, p = (u = be(n, () => {
    var y;
    return (y = n.find(e)) == null ? void 0 : y.getObserversCount();
  })) != null ? u : 0;
  return f ? /* @__PURE__ */ l.createElement("div", {
    role: "button",
    "aria-label": "Open query details for " + c,
    onClick: () => t(r === c ? "" : c),
    style: {
      display: "flex",
      borderBottom: "solid 1px " + H.grayAlt,
      cursor: "pointer",
      background: c === r ? "rgba(255,255,255,.1)" : void 0
    }
  }, /* @__PURE__ */ l.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: "2em",
      height: "2em",
      background: no({
        queryState: f,
        isStale: d,
        observerCount: p,
        theme: H
      }),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      textShadow: d ? "0" : "0 0 10px black",
      color: d ? "black" : "white"
    }
  }, p), m ? /* @__PURE__ */ l.createElement("div", {
    style: {
      flex: "0 0 auto",
      height: "2em",
      background: H.gray,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      padding: "0 0.5em"
    }
  }, "disabled") : null, /* @__PURE__ */ l.createElement(Le, {
    style: {
      padding: ".5em"
    }
  }, "" + c)) : null;
});
function Pa() {
}
const $a = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : Oa;
process.env.NODE_ENV;
const Ia = new ri(), ka = Go(
  () => import("./index.prod-c0ffc3cd.js").then((e) => ({
    default: e.ReactQueryDevtools
  }))
), Gl = ({
  children: e,
  axiosInstance: t
}) => {
  const [r, n] = Ct(!1);
  return Ln(() => {
    window.toggleDevtools = () => n((o) => !o), t.interceptors.request.use(
      function(o) {
        return o;
      },
      function(o) {
        return Promise.reject(o);
      }
    ), t.interceptors.response.use(
      function(o) {
        return o;
      },
      function(o) {
        return Promise.reject(o);
      }
    );
  }, []), /* @__PURE__ */ $t(ni, { client: Ia, children: [
    e,
    /* @__PURE__ */ Oe($a, { initialIsOpen: !0 }),
    r && /* @__PURE__ */ Oe(Xo, { fallback: null, children: /* @__PURE__ */ Oe(ka, {}) })
  ] });
};
var Cr = {}, Er = {}, Ma = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
};
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ma);
var Zt = {};
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Q.apply(this, arguments);
}
function Ze(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function lo(e) {
  if (!Ze(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = lo(e[r]);
  }), t;
}
function je(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? Q({}, e) : e;
  return Ze(e) && Ze(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ze(t[o]) && o in e && Ze(e[o]) ? n[o] = je(e[o], t[o], r) : r.clone ? n[o] = Ze(t[o]) ? lo(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
var J = {}, sn = {
  get exports() {
    return J;
  },
  set exports(e) {
    J = e;
  }
}, Tt = {}, Da = {
  get exports() {
    return Tt;
  },
  set exports(e) {
    Tt = e;
  }
}, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function La() {
  if (un)
    return q;
  un = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function O(b) {
    if (typeof b == "object" && b !== null) {
      var N = b.$$typeof;
      switch (N) {
        case t:
          switch (b = b.type, b) {
            case c:
            case f:
            case n:
            case i:
            case o:
            case m:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case u:
                case d:
                case g:
                case y:
                case a:
                  return b;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function x(b) {
    return O(b) === f;
  }
  return q.AsyncMode = c, q.ConcurrentMode = f, q.ContextConsumer = u, q.ContextProvider = a, q.Element = t, q.ForwardRef = d, q.Fragment = n, q.Lazy = g, q.Memo = y, q.Portal = r, q.Profiler = i, q.StrictMode = o, q.Suspense = m, q.isAsyncMode = function(b) {
    return x(b) || O(b) === c;
  }, q.isConcurrentMode = x, q.isContextConsumer = function(b) {
    return O(b) === u;
  }, q.isContextProvider = function(b) {
    return O(b) === a;
  }, q.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, q.isForwardRef = function(b) {
    return O(b) === d;
  }, q.isFragment = function(b) {
    return O(b) === n;
  }, q.isLazy = function(b) {
    return O(b) === g;
  }, q.isMemo = function(b) {
    return O(b) === y;
  }, q.isPortal = function(b) {
    return O(b) === r;
  }, q.isProfiler = function(b) {
    return O(b) === i;
  }, q.isStrictMode = function(b) {
    return O(b) === o;
  }, q.isSuspense = function(b) {
    return O(b) === m;
  }, q.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === m || b === p || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === y || b.$$typeof === a || b.$$typeof === u || b.$$typeof === d || b.$$typeof === v || b.$$typeof === T || b.$$typeof === I || b.$$typeof === h);
  }, q.typeOf = O, q;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function ja() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function O(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === f || C === i || C === o || C === m || C === p || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === y || C.$$typeof === a || C.$$typeof === u || C.$$typeof === d || C.$$typeof === v || C.$$typeof === T || C.$$typeof === I || C.$$typeof === h);
    }
    function x(C) {
      if (typeof C == "object" && C !== null) {
        var Se = C.$$typeof;
        switch (Se) {
          case t:
            var R = C.type;
            switch (R) {
              case c:
              case f:
              case n:
              case i:
              case o:
              case m:
                return R;
              default:
                var xe = R && R.$$typeof;
                switch (xe) {
                  case u:
                  case d:
                  case g:
                  case y:
                  case a:
                    return xe;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var b = c, N = f, fe = u, se = a, $ = t, te = d, ue = n, ge = g, ne = y, ie = r, B = i, U = o, re = m, de = !1;
    function he(C) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(C) || x(C) === c;
    }
    function S(C) {
      return x(C) === f;
    }
    function _(C) {
      return x(C) === u;
    }
    function M(C) {
      return x(C) === a;
    }
    function A(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function k(C) {
      return x(C) === d;
    }
    function j(C) {
      return x(C) === n;
    }
    function P(C) {
      return x(C) === g;
    }
    function L(C) {
      return x(C) === y;
    }
    function F(C) {
      return x(C) === r;
    }
    function W(C) {
      return x(C) === i;
    }
    function V(C) {
      return x(C) === o;
    }
    function ye(C) {
      return x(C) === m;
    }
    G.AsyncMode = b, G.ConcurrentMode = N, G.ContextConsumer = fe, G.ContextProvider = se, G.Element = $, G.ForwardRef = te, G.Fragment = ue, G.Lazy = ge, G.Memo = ne, G.Portal = ie, G.Profiler = B, G.StrictMode = U, G.Suspense = re, G.isAsyncMode = he, G.isConcurrentMode = S, G.isContextConsumer = _, G.isContextProvider = M, G.isElement = A, G.isForwardRef = k, G.isFragment = j, G.isLazy = P, G.isMemo = L, G.isPortal = F, G.isProfiler = W, G.isStrictMode = V, G.isSuspense = ye, G.isValidElementType = O, G.typeOf = x;
  }()), G;
}
var cn;
function co() {
  return cn || (cn = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = La() : e.exports = ja();
  }(Da)), Tt;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jt, fn;
function Na() {
  if (fn)
    return Jt;
  fn = 1;
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
      for (var a = {}, u = 0; u < 10; u++)
        a["_" + String.fromCharCode(u)] = u;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Jt = o() ? Object.assign : function(i, a) {
    for (var u, c = n(i), f, d = 1; d < arguments.length; d++) {
      u = Object(arguments[d]);
      for (var m in u)
        t.call(u, m) && (c[m] = u[m]);
      if (e) {
        f = e(u);
        for (var p = 0; p < f.length; p++)
          r.call(u, f[p]) && (c[f[p]] = u[f[p]]);
      }
    }
    return c;
  }, Jt;
}
var er, dn;
function wr() {
  if (dn)
    return er;
  dn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return er = e, er;
}
var tr, pn;
function fo() {
  return pn || (pn = 1, tr = Function.call.bind(Object.prototype.hasOwnProperty)), tr;
}
var rr, mn;
function Fa() {
  if (mn)
    return rr;
  mn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = wr(), r = {}, n = fo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, u, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var m;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[d](a, d, c, u, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + u + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var y = f ? f() : "";
            e(
              "Failed " + u + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, rr = o, rr;
}
var nr, yn;
function Va() {
  if (yn)
    return nr;
  yn = 1;
  var e = co(), t = Na(), r = wr(), n = fo(), o = Fa(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var c = "Warning: " + u;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return nr = function(u, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(S) {
      var _ = S && (f && S[f] || S[d]);
      if (typeof _ == "function")
        return _;
    }
    var p = "<<anonymous>>", y = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: I(),
      arrayOf: O,
      element: x(),
      elementType: b(),
      instanceOf: N,
      node: te(),
      objectOf: se,
      oneOf: fe,
      oneOfType: $,
      shape: ge,
      exact: ne
    };
    function g(S, _) {
      return S === _ ? S !== 0 || 1 / S === 1 / _ : S !== S && _ !== _;
    }
    function h(S, _) {
      this.message = S, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(S) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, M = 0;
      function A(j, P, L, F, W, V, ye) {
        if (F = F || p, V = V || L, ye !== r) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = F + ":" + L;
            !_[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[Se] = !0, M++);
          }
        }
        return P[L] == null ? j ? P[L] === null ? new h("The " + W + " `" + V + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new h("The " + W + " `" + V + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : S(P, L, F, W, V);
      }
      var k = A.bind(null, !1);
      return k.isRequired = A.bind(null, !0), k;
    }
    function T(S) {
      function _(M, A, k, j, P, L) {
        var F = M[A], W = U(F);
        if (W !== S) {
          var V = re(F);
          return new h(
            "Invalid " + j + " `" + P + "` of type " + ("`" + V + "` supplied to `" + k + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return v(_);
    }
    function I() {
      return v(a);
    }
    function O(S) {
      function _(M, A, k, j, P) {
        if (typeof S != "function")
          return new h("Property `" + P + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var L = M[A];
        if (!Array.isArray(L)) {
          var F = U(L);
          return new h("Invalid " + j + " `" + P + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected an array."));
        }
        for (var W = 0; W < L.length; W++) {
          var V = S(L, W, k, j, P + "[" + W + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(_);
    }
    function x() {
      function S(_, M, A, k, j) {
        var P = _[M];
        if (!u(P)) {
          var L = U(P);
          return new h("Invalid " + k + " `" + j + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(S);
    }
    function b() {
      function S(_, M, A, k, j) {
        var P = _[M];
        if (!e.isValidElementType(P)) {
          var L = U(P);
          return new h("Invalid " + k + " `" + j + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(S);
    }
    function N(S) {
      function _(M, A, k, j, P) {
        if (!(M[A] instanceof S)) {
          var L = S.name || p, F = he(M[A]);
          return new h("Invalid " + j + " `" + P + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return v(_);
    }
    function fe(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(M, A, k, j, P) {
        for (var L = M[A], F = 0; F < S.length; F++)
          if (g(L, S[F]))
            return null;
        var W = JSON.stringify(S, function(ye, C) {
          var Se = re(C);
          return Se === "symbol" ? String(C) : C;
        });
        return new h("Invalid " + j + " `" + P + "` of value `" + String(L) + "` " + ("supplied to `" + k + "`, expected one of " + W + "."));
      }
      return v(_);
    }
    function se(S) {
      function _(M, A, k, j, P) {
        if (typeof S != "function")
          return new h("Property `" + P + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var L = M[A], F = U(L);
        if (F !== "object")
          return new h("Invalid " + j + " `" + P + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected an object."));
        for (var W in L)
          if (n(L, W)) {
            var V = S(L, W, k, j, P + "." + W, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return v(_);
    }
    function $(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < S.length; _++) {
        var M = S[_];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(M) + " at index " + _ + "."
          ), a;
      }
      function A(k, j, P, L, F) {
        for (var W = [], V = 0; V < S.length; V++) {
          var ye = S[V], C = ye(k, j, P, L, F, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && W.push(C.data.expectedType);
        }
        var Se = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new h("Invalid " + L + " `" + F + "` supplied to " + ("`" + P + "`" + Se + "."));
      }
      return v(A);
    }
    function te() {
      function S(_, M, A, k, j) {
        return ie(_[M]) ? null : new h("Invalid " + k + " `" + j + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return v(S);
    }
    function ue(S, _, M, A, k) {
      return new h(
        (S || "React class") + ": " + _ + " type `" + M + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function ge(S) {
      function _(M, A, k, j, P) {
        var L = M[A], F = U(L);
        if (F !== "object")
          return new h("Invalid " + j + " `" + P + "` of type `" + F + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var W in S) {
          var V = S[W];
          if (typeof V != "function")
            return ue(k, j, P, W, re(V));
          var ye = V(L, W, k, j, P + "." + W, r);
          if (ye)
            return ye;
        }
        return null;
      }
      return v(_);
    }
    function ne(S) {
      function _(M, A, k, j, P) {
        var L = M[A], F = U(L);
        if (F !== "object")
          return new h("Invalid " + j + " `" + P + "` of type `" + F + "` " + ("supplied to `" + k + "`, expected `object`."));
        var W = t({}, M[A], S);
        for (var V in W) {
          var ye = S[V];
          if (n(S, V) && typeof ye != "function")
            return ue(k, j, P, V, re(ye));
          if (!ye)
            return new h(
              "Invalid " + j + " `" + P + "` key `" + V + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(M[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var C = ye(L, V, k, j, P + "." + V, r);
          if (C)
            return C;
        }
        return null;
      }
      return v(_);
    }
    function ie(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(ie);
          if (S === null || u(S))
            return !0;
          var _ = m(S);
          if (_) {
            var M = _.call(S), A;
            if (_ !== S.entries) {
              for (; !(A = M.next()).done; )
                if (!ie(A.value))
                  return !1;
            } else
              for (; !(A = M.next()).done; ) {
                var k = A.value;
                if (k && !ie(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(S, _) {
      return S === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function U(S) {
      var _ = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : B(_, S) ? "symbol" : _;
    }
    function re(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var _ = U(S);
      if (_ === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function de(S) {
      var _ = re(S);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function he(S) {
      return !S.constructor || !S.constructor.name ? p : S.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, nr;
}
var or, gn;
function Ua() {
  if (gn)
    return or;
  gn = 1;
  var e = wr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, or = function() {
    function n(a, u, c, f, d, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, or;
}
if (process.env.NODE_ENV !== "production") {
  var za = co(), Ba = !0;
  sn.exports = Va()(za.isElement, Ba);
} else
  sn.exports = Ua()();
function rt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Rt = {}, Wa = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
}, X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function Ya() {
  if (hn)
    return X;
  hn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var T = v.$$typeof;
      switch (T) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case u:
                case a:
                case c:
                case p:
                case m:
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
  return X.ContextConsumer = a, X.ContextProvider = i, X.Element = e, X.ForwardRef = c, X.Fragment = r, X.Lazy = p, X.Memo = m, X.Portal = t, X.Profiler = o, X.StrictMode = n, X.Suspense = f, X.SuspenseList = d, X.isAsyncMode = function() {
    return !1;
  }, X.isConcurrentMode = function() {
    return !1;
  }, X.isContextConsumer = function(v) {
    return h(v) === a;
  }, X.isContextProvider = function(v) {
    return h(v) === i;
  }, X.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, X.isForwardRef = function(v) {
    return h(v) === c;
  }, X.isFragment = function(v) {
    return h(v) === r;
  }, X.isLazy = function(v) {
    return h(v) === p;
  }, X.isMemo = function(v) {
    return h(v) === m;
  }, X.isPortal = function(v) {
    return h(v) === t;
  }, X.isProfiler = function(v) {
    return h(v) === o;
  }, X.isStrictMode = function(v) {
    return h(v) === n;
  }, X.isSuspense = function(v) {
    return h(v) === f;
  }, X.isSuspenseList = function(v) {
    return h(v) === d;
  }, X.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === f || v === d || v === y || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === m || v.$$typeof === i || v.$$typeof === a || v.$$typeof === c || v.$$typeof === g || v.getModuleId !== void 0);
  }, X.typeOf = h, X;
}
var Z = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Ha() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = !1, h = !1, v = !1, T = !1, I = !1, O;
    O = Symbol.for("react.module.reference");
    function x(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === o || I || R === n || R === f || R === d || T || R === y || g || h || v || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === m || R.$$typeof === i || R.$$typeof === a || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === O || R.getModuleId !== void 0));
    }
    function b(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case e:
            var Ie = R.type;
            switch (Ie) {
              case r:
              case o:
              case n:
              case f:
              case d:
                return Ie;
              default:
                var ot = Ie && Ie.$$typeof;
                switch (ot) {
                  case u:
                  case a:
                  case c:
                  case p:
                  case m:
                  case i:
                    return ot;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var N = a, fe = i, se = e, $ = c, te = r, ue = p, ge = m, ne = t, ie = o, B = n, U = f, re = d, de = !1, he = !1;
    function S(R) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(R) {
      return he || (he = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(R) {
      return b(R) === a;
    }
    function A(R) {
      return b(R) === i;
    }
    function k(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function j(R) {
      return b(R) === c;
    }
    function P(R) {
      return b(R) === r;
    }
    function L(R) {
      return b(R) === p;
    }
    function F(R) {
      return b(R) === m;
    }
    function W(R) {
      return b(R) === t;
    }
    function V(R) {
      return b(R) === o;
    }
    function ye(R) {
      return b(R) === n;
    }
    function C(R) {
      return b(R) === f;
    }
    function Se(R) {
      return b(R) === d;
    }
    Z.ContextConsumer = N, Z.ContextProvider = fe, Z.Element = se, Z.ForwardRef = $, Z.Fragment = te, Z.Lazy = ue, Z.Memo = ge, Z.Portal = ne, Z.Profiler = ie, Z.StrictMode = B, Z.Suspense = U, Z.SuspenseList = re, Z.isAsyncMode = S, Z.isConcurrentMode = _, Z.isContextConsumer = M, Z.isContextProvider = A, Z.isElement = k, Z.isForwardRef = j, Z.isFragment = P, Z.isLazy = L, Z.isMemo = F, Z.isPortal = W, Z.isProfiler = V, Z.isStrictMode = ye, Z.isSuspense = C, Z.isSuspenseList = Se, Z.isValidElementType = x, Z.typeOf = b;
  }()), Z;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ya() : e.exports = Ha();
})(Wa);
const Ka = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Qa(e) {
  const t = `${e}`.match(Ka);
  return t && t[1] || "";
}
function po(e, t = "") {
  return e.displayName || e.name || Qa(e) || t;
}
function bn(e, t, r) {
  const n = po(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function qa(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return po(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Rt.ForwardRef:
          return bn(e, e.render, "ForwardRef");
        case Rt.Memo:
          return bn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Te(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : rt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ga(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Xa(e, t = 166) {
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
function Za(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, a) => {
    const u = o || "<<anonymous>>", c = a || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${u}\` is deprecated. ${t}`) : null;
  };
}
function Ja(e, t) {
  return /* @__PURE__ */ l.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function mo(e) {
  return e && e.ownerDocument || document;
}
function es(e) {
  return mo(e).defaultView || window;
}
function ts(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? Q({}, t.propTypes) : null;
  return (o) => (i, a, u, c, f, ...d) => {
    const m = f || a, p = r == null ? void 0 : r[m];
    if (p) {
      const y = p(i, a, u, c, f, ...d);
      if (y)
        return y;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function yo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const rs = typeof window < "u" ? l.useLayoutEffect : l.useEffect, go = rs;
let En = 0;
function ns(e) {
  const [t, r] = l.useState(e), n = e || t;
  return l.useEffect(() => {
    t == null && (En += 1, r(`mui-${En}`));
  }, [t]), n;
}
const Sn = l["useId"];
function os(e) {
  if (Sn !== void 0) {
    const t = Sn();
    return e ?? t;
  }
  return ns(e);
}
function is(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function as({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = l.useRef(e !== void 0), [i, a] = l.useState(t), u = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    l.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: f
    } = l.useRef(t);
    l.useEffect(() => {
      !o && f !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = l.useCallback((f) => {
    o || a(f);
  }, []);
  return [u, c];
}
function ss(e) {
  const t = l.useRef(e);
  return go(() => {
    t.current = e;
  }), l.useCallback((...r) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...r)
  ), []);
}
function us(...e) {
  return l.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      yo(r, t);
    });
  }, e);
}
let kt = !0, Sr = !1, _n;
const ls = {
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
function cs(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && ls[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function fs(e) {
  e.metaKey || e.altKey || e.ctrlKey || (kt = !0);
}
function ir() {
  kt = !1;
}
function ds() {
  this.visibilityState === "hidden" && Sr && (kt = !0);
}
function ps(e) {
  e.addEventListener("keydown", fs, !0), e.addEventListener("mousedown", ir, !0), e.addEventListener("pointerdown", ir, !0), e.addEventListener("touchstart", ir, !0), e.addEventListener("visibilitychange", ds, !0);
}
function ms(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return kt || cs(t);
}
function ys() {
  const e = l.useCallback((o) => {
    o != null && ps(o.ownerDocument);
  }, []), t = l.useRef(!1);
  function r() {
    return t.current ? (Sr = !0, window.clearTimeout(_n), _n = window.setTimeout(() => {
      Sr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return ms(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function ho(e, t) {
  const r = Q({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = Q({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = Q({}, i), Object.keys(o).forEach((a) => {
        r[n][a] = ho(o[a], i[a]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function gs(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const u = t(a);
          u !== "" && i.push(u), r && r[a] && i.push(r[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Cn = (e) => e, hs = () => {
  let e = Cn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Cn;
    }
  };
}, vs = hs(), vo = vs, bs = {
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
function xr(e, t, r = "Mui") {
  const n = bs[t];
  return n ? `${r}-${n}` : `${vo.generate(e)}-${t}`;
}
function Es(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = xr(e, o, r);
  }), n;
}
function Re(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function bo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = bo(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ss() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = bo(e)) && (n && (n += " "), n += t);
  return n;
}
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _s(e, t) {
  const r = oi(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Cs = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ws = process.env.NODE_ENV !== "production" ? J.oneOfType([J.number, J.string, J.object, J.array]) : {}, ze = ws;
function dt(e, t) {
  return t ? je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Or = {
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
}, wn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Or[e]}px)`
};
function $e(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || wn;
    return t.reduce((a, u, c) => (a[i.up(i.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || wn;
    return Object.keys(t).reduce((a, u) => {
      if (Object.keys(i.values || Or).indexOf(u) !== -1) {
        const c = i.up(u);
        a[c] = r(t[u], u);
      } else {
        const c = u;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function xs(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Os(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Mt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function At(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Mt(e, r) || n, t && (o = t(o, n, e)), o;
}
function ee(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const u = a[t], c = a.theme, f = Mt(c, n) || {};
    return $e(a, u, (m) => {
      let p = At(f, o, m);
      return m === p && typeof m == "string" && (p = At(f, o, `${t}${m === "default" ? "" : Te(m)}`, m)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ze
  } : {}, i.filterProps = [t], i;
}
function Dt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? dt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ts(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Rs = {
  m: "margin",
  p: "padding"
}, As = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, xn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ps = Ts((e) => {
  if (e.length > 2)
    if (xn[e])
      e = xn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Rs[t], o = As[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Lt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], jt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], $s = [...Lt, ...jt];
function bt(e, t, r, n) {
  var o;
  const i = (o = Mt(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Eo(e) {
  return bt(e, "spacing", 8, "spacing");
}
function Et(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Is(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Et(t, r), n), {});
}
function ks(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Ps(r), i = Is(o, n), a = e[r];
  return $e(e, a, i);
}
function So(e, t) {
  const r = Eo(e.theme);
  return Object.keys(e).map((n) => ks(e, t, n, r)).reduce(dt, {});
}
function le(e) {
  return So(e, Lt);
}
le.propTypes = process.env.NODE_ENV !== "production" ? Lt.reduce((e, t) => (e[t] = ze, e), {}) : {};
le.filterProps = Lt;
function ce(e) {
  return So(e, jt);
}
ce.propTypes = process.env.NODE_ENV !== "production" ? jt.reduce((e, t) => (e[t] = ze, e), {}) : {};
ce.filterProps = jt;
process.env.NODE_ENV !== "production" && $s.reduce((e, t) => (e[t] = ze, e), {});
function Pe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ms = ee({
  prop: "border",
  themeKey: "borders",
  transform: Pe
}), Ds = ee({
  prop: "borderTop",
  themeKey: "borders",
  transform: Pe
}), Ls = ee({
  prop: "borderRight",
  themeKey: "borders",
  transform: Pe
}), js = ee({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Pe
}), Ns = ee({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Pe
}), Fs = ee({
  prop: "borderColor",
  themeKey: "palette"
}), Vs = ee({
  prop: "borderTopColor",
  themeKey: "palette"
}), Us = ee({
  prop: "borderRightColor",
  themeKey: "palette"
}), zs = ee({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Bs = ee({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Nt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = bt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Et(t, n)
    });
    return $e(e, e.borderRadius, r);
  }
  return null;
};
Nt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ze
} : {};
Nt.filterProps = ["borderRadius"];
Dt(Ms, Ds, Ls, js, Ns, Fs, Vs, Us, zs, Bs, Nt);
const Ft = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = bt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Et(t, n)
    });
    return $e(e, e.gap, r);
  }
  return null;
};
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ze
} : {};
Ft.filterProps = ["gap"];
const Vt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = bt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Et(t, n)
    });
    return $e(e, e.columnGap, r);
  }
  return null;
};
Vt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ze
} : {};
Vt.filterProps = ["columnGap"];
const Ut = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = bt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Et(t, n)
    });
    return $e(e, e.rowGap, r);
  }
  return null;
};
Ut.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ze
} : {};
Ut.filterProps = ["rowGap"];
const Ws = ee({
  prop: "gridColumn"
}), Ys = ee({
  prop: "gridRow"
}), Hs = ee({
  prop: "gridAutoFlow"
}), Ks = ee({
  prop: "gridAutoColumns"
}), Qs = ee({
  prop: "gridAutoRows"
}), qs = ee({
  prop: "gridTemplateColumns"
}), Gs = ee({
  prop: "gridTemplateRows"
}), Xs = ee({
  prop: "gridTemplateAreas"
}), Zs = ee({
  prop: "gridArea"
});
Dt(Ft, Vt, Ut, Ws, Ys, Hs, Ks, Qs, qs, Gs, Xs, Zs);
function et(e, t) {
  return t === "grey" ? t : e;
}
const Js = ee({
  prop: "color",
  themeKey: "palette",
  transform: et
}), eu = ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: et
}), tu = ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: et
});
Dt(Js, eu, tu);
function Ce(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ru = ee({
  prop: "width",
  transform: Ce
}), Tr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o, i;
      return {
        maxWidth: ((n = e.theme) == null || (o = n.breakpoints) == null || (i = o.values) == null ? void 0 : i[r]) || Or[r] || Ce(r)
      };
    };
    return $e(e, e.maxWidth, t);
  }
  return null;
};
Tr.filterProps = ["maxWidth"];
const nu = ee({
  prop: "minWidth",
  transform: Ce
}), ou = ee({
  prop: "height",
  transform: Ce
}), iu = ee({
  prop: "maxHeight",
  transform: Ce
}), au = ee({
  prop: "minHeight",
  transform: Ce
});
ee({
  prop: "size",
  cssProperty: "width",
  transform: Ce
});
ee({
  prop: "size",
  cssProperty: "height",
  transform: Ce
});
const su = ee({
  prop: "boxSizing"
});
Dt(ru, Tr, nu, ou, iu, au, su);
const ar = (e) => (t) => {
  if (t[e] !== void 0 && t[e] !== null) {
    const r = (n) => {
      var o;
      let i = (o = t.theme.typography) == null ? void 0 : o[n];
      if (typeof i == "object" && (i = null), !i) {
        var a, u;
        i = (a = t.theme.typography) == null ? void 0 : a[`${e}${t[e] === "default" || t[e] === e ? "" : Te((u = t[e]) == null ? void 0 : u.toString())}`];
      }
      if (!i) {
        var c, f, d;
        i = (c = (f = t.theme.typography) == null || (d = f[n]) == null ? void 0 : d[e]) != null ? c : n;
      }
      return {
        [e]: i
      };
    };
    return $e(t, t[e], r);
  }
  return null;
}, uu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Pe
  },
  borderTop: {
    themeKey: "borders",
    transform: Pe
  },
  borderRight: {
    themeKey: "borders",
    transform: Pe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Pe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Pe
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
    style: Nt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: et
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: et
  },
  backgroundColor: {
    themeKey: "palette",
    transform: et
  },
  // spacing
  p: {
    style: ce
  },
  pt: {
    style: ce
  },
  pr: {
    style: ce
  },
  pb: {
    style: ce
  },
  pl: {
    style: ce
  },
  px: {
    style: ce
  },
  py: {
    style: ce
  },
  padding: {
    style: ce
  },
  paddingTop: {
    style: ce
  },
  paddingRight: {
    style: ce
  },
  paddingBottom: {
    style: ce
  },
  paddingLeft: {
    style: ce
  },
  paddingX: {
    style: ce
  },
  paddingY: {
    style: ce
  },
  paddingInline: {
    style: ce
  },
  paddingInlineStart: {
    style: ce
  },
  paddingInlineEnd: {
    style: ce
  },
  paddingBlock: {
    style: ce
  },
  paddingBlockStart: {
    style: ce
  },
  paddingBlockEnd: {
    style: ce
  },
  m: {
    style: le
  },
  mt: {
    style: le
  },
  mr: {
    style: le
  },
  mb: {
    style: le
  },
  ml: {
    style: le
  },
  mx: {
    style: le
  },
  my: {
    style: le
  },
  margin: {
    style: le
  },
  marginTop: {
    style: le
  },
  marginRight: {
    style: le
  },
  marginBottom: {
    style: le
  },
  marginLeft: {
    style: le
  },
  marginX: {
    style: le
  },
  marginY: {
    style: le
  },
  marginInline: {
    style: le
  },
  marginInlineStart: {
    style: le
  },
  marginInlineEnd: {
    style: le
  },
  marginBlock: {
    style: le
  },
  marginBlockStart: {
    style: le
  },
  marginBlockEnd: {
    style: le
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
    style: Ft
  },
  rowGap: {
    style: Ut
  },
  columnGap: {
    style: Vt
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
    transform: Ce
  },
  maxWidth: {
    style: Tr
  },
  minWidth: {
    transform: Ce
  },
  height: {
    transform: Ce
  },
  maxHeight: {
    transform: Ce
  },
  minHeight: {
    transform: Ce
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography",
    style: ar("fontFamily")
  },
  fontSize: {
    themeKey: "typography",
    style: ar("fontSize")
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography",
    style: ar("fontWeight")
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Rr = uu;
function lu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function cu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fu() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, u = i[r];
    if (!u)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: f,
      transform: d,
      style: m
    } = u;
    if (n == null)
      return null;
    const p = Mt(o, f) || {};
    return m ? m(a) : $e(a, n, (g) => {
      let h = At(p, d, g);
      return g === h && typeof g == "string" && (h = At(p, d, `${r}${g === "default" ? "" : Te(g)}`, g)), c === !1 ? h : {
        [c]: h
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
    const a = (n = i.unstable_sxConfig) != null ? n : Rr;
    function u(c) {
      let f = c;
      if (typeof c == "function")
        f = c(i);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const d = xs(i.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((y) => {
        const g = cu(f[y], i);
        if (g != null)
          if (typeof g == "object")
            if (a[y])
              p = dt(p, e(y, g, i, a));
            else {
              const h = $e({
                theme: i
              }, g, (v) => ({
                [y]: v
              }));
              lu(h, g) ? p[y] = t({
                sx: g,
                theme: i
              }) : p = dt(p, h);
            }
          else
            p = dt(p, e(y, g, i, a));
      }), Os(m, p);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return t;
}
const _o = fu();
_o.filterProps = ["sx"];
const Ar = _o, du = ["values", "unit", "step"], pu = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => Q({}, r, {
    [n.key]: n.val
  }), {});
};
function mu(e) {
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
  } = e, o = Re(e, du), i = pu(t), a = Object.keys(i);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function f(p, y) {
    const g = a.indexOf(y);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : y) - n / 100}${r})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? f(p, a[a.indexOf(p) + 1]) : u(p);
  }
  function m(p) {
    const y = a.indexOf(p);
    return y === 0 ? u(a[1]) : y === a.length - 1 ? c(a[y]) : f(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return Q({
    keys: a,
    values: i,
    up: u,
    down: c,
    between: f,
    only: d,
    not: m,
    unit: r
  }, o);
}
const yu = {
  borderRadius: 4
}, gu = yu;
function hu(e = 8) {
  if (e.mui)
    return e;
  const t = Eo({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
const vu = ["breakpoints", "palette", "spacing", "shape"];
function Pr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = Re(e, vu), u = mu(r), c = hu(o);
  let f = je({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Q({
      mode: "light"
    }, n),
    spacing: c,
    shape: Q({}, gu, i)
  }, a);
  return f = t.reduce((d, m) => je(d, m), f), f.unstable_sxConfig = Q({}, Rr, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(m) {
    return Ar({
      sx: m,
      theme: this
    });
  }, f;
}
const Co = /* @__PURE__ */ l.createContext(null);
process.env.NODE_ENV !== "production" && (Co.displayName = "ThemeContext");
const bu = Co;
function Eu() {
  const e = l.useContext(bu);
  return process.env.NODE_ENV !== "production" && l.useDebugValue(e), e;
}
function Su(e) {
  return Object.keys(e).length === 0;
}
function _u(e = null) {
  const t = Eu();
  return !t || Su(t) ? e : t;
}
const Cu = Pr();
function wu(e = Cu) {
  return _u(e);
}
const xu = ["variant"];
function On(e) {
  return e.length === 0;
}
function wo(e) {
  const {
    variant: t
  } = e, r = Re(e, xu);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += On(n) ? e[o] : Te(e[o]) : n += `${On(n) ? o : Te(o)}${Te(e[o].toString())}`;
  }), n;
}
const Ou = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], Tu = ["theme"], Ru = ["theme"];
function lt(e) {
  return Object.keys(e).length === 0;
}
function Au(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Pu = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, $u = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((o) => {
    const i = wo(o.props);
    n[i] = o.style;
  }), n;
}, Iu = (e, t, r, n) => {
  var o, i;
  const {
    ownerState: a = {}
  } = e, u = [], c = r == null || (o = r.components) == null || (i = o[n]) == null ? void 0 : i.variants;
  return c && c.forEach((f) => {
    let d = !0;
    Object.keys(f.props).forEach((m) => {
      a[m] !== f.props[m] && e[m] !== f.props[m] && (d = !1);
    }), d && u.push(t[wo(f.props)]);
  }), u;
};
function xt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ku = Pr(), Mu = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Du(e = {}) {
  const {
    defaultTheme: t = ku,
    rootShouldForwardProp: r = xt,
    slotShouldForwardProp: n = xt
  } = e, o = (i) => {
    const a = lt(i.theme) ? t : i.theme;
    return Ar(Q({}, i, {
      theme: a
    }));
  };
  return o.__mui_systemSx = !0, (i, a = {}) => {
    Cs(i, (O) => O.filter((x) => !(x != null && x.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: f,
      skipSx: d,
      overridesResolver: m
    } = a, p = Re(a, Ou), y = f !== void 0 ? f : c && c !== "Root" || !1, g = d || !1;
    let h;
    process.env.NODE_ENV !== "production" && u && (h = `${u}-${Mu(c || "Root")}`);
    let v = xt;
    c === "Root" ? v = r : c ? v = n : Au(i) && (v = void 0);
    const T = _s(i, Q({
      shouldForwardProp: v,
      label: h
    }, p)), I = (O, ...x) => {
      const b = x ? x.map(($) => typeof $ == "function" && $.__emotion_real !== $ ? (te) => {
        let {
          theme: ue
        } = te, ge = Re(te, Tu);
        return $(Q({
          theme: lt(ue) ? t : ue
        }, ge));
      } : $) : [];
      let N = O;
      u && m && b.push(($) => {
        const te = lt($.theme) ? t : $.theme, ue = Pu(u, te);
        if (ue) {
          const ge = {};
          return Object.entries(ue).forEach(([ne, ie]) => {
            ge[ne] = typeof ie == "function" ? ie(Q({}, $, {
              theme: te
            })) : ie;
          }), m($, ge);
        }
        return null;
      }), u && !y && b.push(($) => {
        const te = lt($.theme) ? t : $.theme;
        return Iu($, $u(u, te), te, u);
      }), g || b.push(o);
      const fe = b.length - x.length;
      if (Array.isArray(O) && fe > 0) {
        const $ = new Array(fe).fill("");
        N = [...O, ...$], N.raw = [...O.raw, ...$];
      } else
        typeof O == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        O.__emotion_real !== O && (N = ($) => {
          let {
            theme: te
          } = $, ue = Re($, Ru);
          return O(Q({
            theme: lt(te) ? t : te
          }, ue));
        });
      const se = T(N, ...b);
      if (process.env.NODE_ENV !== "production") {
        let $;
        u && ($ = `${u}${c || ""}`), $ === void 0 && ($ = `Styled(${qa(i)})`), se.displayName = $;
      }
      return se;
    };
    return T.withConfig && (I.withConfig = T.withConfig), I;
  };
}
function Lu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : ho(t.components[r].defaultProps, n);
}
function ju({
  props: e,
  name: t,
  defaultTheme: r
}) {
  const n = wu(r);
  return Lu({
    theme: n,
    name: t,
    props: e
  });
}
function xo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Nu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(Nu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : rt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : rt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function $r(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Fu(e) {
  e = nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let u = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (u += "a", c.push(t[3])), $r({
    type: u,
    values: c
  });
}
function Tn(e) {
  e = nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? nt(Fu(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Rn(e, t) {
  const r = Tn(e), n = Tn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Vu(e, t) {
  if (e = nt(e), t = xo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return $r(e);
}
function Uu(e, t) {
  if (e = nt(e), t = xo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return $r(e);
}
function zu(e, t) {
  return Q({
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
const Bu = {
  black: "#000",
  white: "#fff"
}, vt = Bu, Wu = {
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
}, Yu = Wu, Hu = {
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
}, He = Hu, Ku = {
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
}, Ke = Ku, Qu = {
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
}, ct = Qu, qu = {
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
}, Qe = qu, Gu = {
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
}, qe = Gu, Xu = {
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
}, Ge = Xu, Zu = ["mode", "contrastThreshold", "tonalOffset"], An = {
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
    paper: vt.white,
    default: vt.white
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
}, sr = {
  text: {
    primary: vt.white,
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
    active: vt.white,
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
function Pn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Uu(e.main, o) : t === "dark" && (e.dark = Vu(e.main, i)));
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: Qe[200],
    light: Qe[50],
    dark: Qe[400]
  } : {
    main: Qe[700],
    light: Qe[400],
    dark: Qe[800]
  };
}
function el(e = "light") {
  return e === "dark" ? {
    main: He[200],
    light: He[50],
    dark: He[400]
  } : {
    main: He[500],
    light: He[300],
    dark: He[700]
  };
}
function tl(e = "light") {
  return e === "dark" ? {
    main: Ke[500],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[700],
    light: Ke[400],
    dark: Ke[800]
  };
}
function rl(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[700],
    light: qe[500],
    dark: qe[900]
  };
}
function nl(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: Ge[800],
    light: Ge[500],
    dark: Ge[900]
  };
}
function ol(e = "light") {
  return e === "dark" ? {
    main: ct[400],
    light: ct[300],
    dark: ct[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ct[500],
    dark: ct[900]
  };
}
function il(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Re(e, Zu), i = e.primary || Ju(t), a = e.secondary || el(t), u = e.error || tl(t), c = e.info || rl(t), f = e.success || nl(t), d = e.warning || ol(t);
  function m(h) {
    const v = Rn(h, sr.text.primary) >= r ? sr.text.primary : An.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Rn(h, v);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${v} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: h,
    name: v,
    mainShade: T = 500,
    lightShade: I = 300,
    darkShade: O = 700
  }) => {
    if (h = Q({}, h), !h.main && h[T] && (h.main = h[T]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : rt(11, v ? ` (${v})` : "", T));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : rt(12, v ? ` (${v})` : "", JSON.stringify(h.main)));
    return Pn(h, "light", I, n), Pn(h, "dark", O, n), h.contrastText || (h.contrastText = m(h.main)), h;
  }, y = {
    dark: sr,
    light: An
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), je(Q({
    // A collection of common colors.
    common: Q({}, vt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Yu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, y[t]), o);
}
const al = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function sl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const $n = {
  textTransform: "uppercase"
}, In = '"Roboto", "Helvetica", "Arial", sans-serif';
function ul(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = In,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m
  } = r, p = Re(r, al);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = o / 14, g = m || ((T) => `${T / f * y}rem`), h = (T, I, O, x, b) => Q({
    fontFamily: n,
    fontWeight: T,
    fontSize: g(I),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O
  }, n === In ? {
    letterSpacing: `${sl(x / I)}em`
  } : {}, b, d), v = {
    h1: h(i, 96, 1.167, -1.5),
    h2: h(i, 60, 1.2, -0.5),
    h3: h(a, 48, 1.167, 0),
    h4: h(a, 34, 1.235, 0.25),
    h5: h(a, 24, 1.334, 0),
    h6: h(u, 20, 1.6, 0.15),
    subtitle1: h(a, 16, 1.75, 0.15),
    subtitle2: h(u, 14, 1.57, 0.1),
    body1: h(a, 16, 1.5, 0.15),
    body2: h(a, 14, 1.43, 0.15),
    button: h(u, 14, 1.75, 0.4, $n),
    caption: h(a, 12, 1.66, 0.4),
    overline: h(a, 12, 2.66, 1, $n),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je(Q({
    htmlFontSize: f,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: u,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const ll = 0.2, cl = 0.14, fl = 0.12;
function ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ll})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fl})`].join(",");
}
const dl = ["none", ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], pl = dl, ml = ["duration", "easing", "delay"], yl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, gl = {
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
function kn(e) {
  return `${Math.round(e)}ms`;
}
function hl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function vl(e) {
  const t = Q({}, yl, e.easing), r = Q({}, gl, e.duration);
  return Q({
    getAutoHeightDuration: hl,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: u = t.easeInOut,
        delay: c = 0
      } = i, f = Re(i, ml);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(u) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : kn(a)} ${u} ${typeof c == "string" ? c : kn(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const bl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, El = bl, Sl = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function _l(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = Re(e, Sl);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : rt(18));
  const u = il(n), c = Pr(e);
  let f = je(c, {
    mixins: zu(c.breakpoints, r),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: pl.slice(),
    typography: ul(u, i),
    transitions: vl(o),
    zIndex: Q({}, El)
  });
  if (f = je(f, a), f = t.reduce((d, m) => je(d, m), f), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, y) => {
      let g;
      for (g in p) {
        const h = p[g];
        if (d.indexOf(g) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = xr("", g);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(f.components).forEach((p) => {
      const y = f.components[p].styleOverrides;
      y && p.indexOf("Mui") === 0 && m(y, p);
    });
  }
  return f.unstable_sxConfig = Q({}, Rr, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(m) {
    return Ar({
      sx: m,
      theme: this
    });
  }, f;
}
const Cl = _l(), Oo = Cl;
function wl({
  props: e,
  name: t
}) {
  return ju({
    props: e,
    name: t,
    defaultTheme: Oo
  });
}
const xl = (e) => xt(e) && e !== "classes", Ol = Du({
  defaultTheme: Oo,
  rootShouldForwardProp: xl
}), Tl = Ol;
function Rl(e) {
  return xr("MuiSvgIcon", e);
}
Es("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Al = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Pl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Te(t)}`, `fontSize${Te(r)}`]
  };
  return gs(o, Rl, n);
}, $l = Tl("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Te(r.color)}`], t[`fontSize${Te(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, a, u, c, f, d, m, p, y, g, h, v, T, I;
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
      small: ((a = e.typography) == null || (u = a.pxToRem) == null ? void 0 : u.call(a, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (f = c.pxToRem) == null ? void 0 : f.call(c, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (m = d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (y = (e.vars || e).palette) == null || (g = y[t.color]) == null ? void 0 : g.main) != null ? p : {
      action: (h = (e.vars || e).palette) == null || (v = h.action) == null ? void 0 : v.active,
      disabled: (T = (e.vars || e).palette) == null || (I = T.action) == null ? void 0 : I.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ir = /* @__PURE__ */ l.forwardRef(function(t, r) {
  const n = wl({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: u = "svg",
    fontSize: c = "medium",
    htmlColor: f,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = n, y = Re(n, Al), g = Q({}, n, {
    color: a,
    component: u,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p
  }), h = {};
  d || (h.viewBox = p);
  const v = Pl(g);
  return /* @__PURE__ */ $t($l, Q({
    as: u,
    className: Ss(v.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r
  }, h, y, {
    ownerState: g,
    children: [o, m ? /* @__PURE__ */ Oe("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ir.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: J.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: J.object,
  /**
   * @ignore
   */
  className: J.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: J.oneOfType([J.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), J.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: J.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: J.oneOfType([J.oneOf(["inherit", "large", "medium", "small"]), J.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: J.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: J.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: J.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: J.oneOfType([J.arrayOf(J.oneOfType([J.func, J.object, J.bool])), J.func, J.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: J.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: J.string
});
Ir.muiName = "SvgIcon";
const Mn = Ir;
function Il(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ Oe(Mn, Q({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Mn.muiName, /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(r));
}
const kl = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), vo.configure(e);
  }
}, Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Te,
  createChainedFunction: Ga,
  createSvgIcon: Il,
  debounce: Xa,
  deprecatedPropType: Za,
  isMuiElement: Ja,
  ownerDocument: mo,
  ownerWindow: es,
  requirePropFactory: ts,
  setRef: yo,
  unstable_ClassNameGenerator: kl,
  unstable_useEnhancedEffect: go,
  unstable_useId: os,
  unsupportedProp: is,
  useControlled: as,
  useEventCallback: ss,
  useForkRef: us,
  useIsFocusVisible: ys
}, Symbol.toStringTag, { value: "Module" })), Dl = /* @__PURE__ */ jn(Ml);
var Dn;
function Ll() {
  return Dn || (Dn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Dl;
  }(Zt)), Zt;
}
const jl = /* @__PURE__ */ jn(ci);
var Nl = Er;
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
var To = Cr.default = void 0, Fl = Nl(Ll()), Vl = jl, Ul = (0, Fl.default)(/* @__PURE__ */ (0, Vl.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
To = Cr.default = Ul;
const zl = () => (/* @__PURE__ */ new Date()).getTime(), Bl = {
  getRandomKey: zl
}, Ro = Zo(void 0), Xl = ({ children: e }) => {
  const [t, r] = Ct([]), [n, o] = Ct(!1), [i, a] = Ct(void 0);
  Ln(() => {
    t.length && !i ? (a({ ...t[0] }), r((g) => g.slice(1)), o(!0)) : t.length && i && n && o(!1);
  }, [t, i, n]);
  const u = (g) => {
    r((h) => [...h, { message: g, key: Bl.getRandomKey() }]);
  }, c = (g, h) => {
    h !== "clickaway" && o(!1);
  }, f = () => {
    a(void 0);
  }, d = (g) => u(g), m = (g) => u(g), p = (g) => u(g), y = (g) => u(g);
  return /* @__PURE__ */ $t(Ro.Provider, { value: { showInfo: d, showSuccess: m, showError: p, showWarning: y }, children: [
    e,
    /* @__PURE__ */ Oe(
      ii,
      {
        open: n,
        autoHideDuration: 6e3,
        onClose: c,
        TransitionProps: { onExited: f },
        message: i ? i.message : void 0,
        action: /* @__PURE__ */ Oe(Nn, { children: /* @__PURE__ */ Oe(ai, { "aria-label": "close", color: "inherit", sx: { p: 0.5 }, onClick: c, children: /* @__PURE__ */ Oe(To, {}) }) })
      },
      i ? i.key : void 0
    )
  ] });
}, Zl = () => {
  const e = Jo(Ro);
  if (e === void 0)
    throw new Error("useToasts must be used within a ToastContext");
  return e;
};
export {
  Bl as A,
  ql as H,
  Gl as N,
  eo as S,
  Ro as T,
  Xl as a,
  mi as r,
  br as s,
  Zl as u
};
