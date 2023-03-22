import * as e from "react";
import { useMemo as Ee } from "react";
import { useQueryClient as xe, onlineManager as ce, notifyManager as ke } from "@tanstack/react-query";
import { r as Se, S as pe, s as we } from "./index-eafad694.js";
import "@emotion/styled";
import "@emotion/react";
import "@mui/material";
function A() {
  return A = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var l = arguments[n];
      for (var r in l)
        Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
    }
    return t;
  }, A.apply(this, arguments);
}
const Le = (t) => {
  try {
    const n = localStorage.getItem(t);
    return typeof n == "string" ? JSON.parse(n) : void 0;
  } catch {
    return;
  }
};
function O(t, n) {
  const [l, r] = e.useState();
  e.useEffect(() => {
    const c = Le(t);
    r(typeof c > "u" || c === null ? typeof n == "function" ? n() : n : c);
  }, [n, t]);
  const s = e.useCallback((c) => {
    r((o) => {
      let d = c;
      typeof c == "function" && (d = c(o));
      try {
        localStorage.setItem(t, JSON.stringify(d));
      } catch {
      }
      return d;
    });
  }, [t]);
  return [l, s];
}
const u = {
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
}, me = /* @__PURE__ */ e.createContext(u);
function fe({
  theme: t,
  ...n
}) {
  return /* @__PURE__ */ e.createElement(me.Provider, A({
    value: t
  }, n));
}
function Qe() {
  return e.useContext(me);
}
function Re(t) {
  const [n, l] = e.useState(() => {
    if (typeof window < "u")
      return window.matchMedia(t).matches;
  });
  return e.useEffect(() => {
    if (typeof window < "u") {
      const r = window.matchMedia(t), s = ({
        matches: c
      }) => l(c);
      return r.addListener(s), () => {
        r.removeListener(s);
      };
    }
  }, [n, t, l]), n;
}
function ge({
  queryState: t,
  observerCount: n,
  isStale: l,
  theme: r
}) {
  return t.fetchStatus === "fetching" ? r.active : n ? t.fetchStatus === "paused" ? r.paused : l ? r.warning : r.success : r.gray;
}
function _(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function k(t, n, l = {}) {
  return /* @__PURE__ */ e.forwardRef(({
    style: r,
    ...s
  }, c) => {
    const o = Qe(), d = Object.entries(l).reduce((g, [m, p]) => Re(m) ? {
      ...g,
      ...typeof p == "function" ? p(s, o) : p
    } : g, {});
    return /* @__PURE__ */ e.createElement(t, {
      ...s,
      style: {
        ...typeof n == "function" ? n(s, o) : n,
        ...r,
        ...d
      },
      ref: c
    });
  });
}
function De() {
  const t = e.useRef(!1), n = e.useCallback(() => t.current, []);
  return e.useEffect(() => (t.current = !0, () => {
    t.current = !1;
  }), []), n;
}
const ye = (t, n = !1) => {
  const {
    json: l
  } = pe.serialize(t);
  return JSON.stringify(l, null, n ? 2 : void 0);
}, J = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, Me = (t, n) => t.queryHash.localeCompare(n.queryHash), he = (t, n) => t.state.dataUpdatedAt < n.state.dataUpdatedAt ? 1 : -1, Pe = (t, n) => J(t) === J(n) ? he(t, n) : J(t) > J(n) ? 1 : -1, ne = {
  "Status > Last Updated": Pe,
  "Query Hash": Me,
  "Last Updated": he
}, oe = 70, N = 500, Ae = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
function K(t) {
  return ["left", "right"].includes(t);
}
function be(t) {
  return Ae[t];
}
function se(t, n) {
  return "" + t + (n.charAt(0).toUpperCase() + n.slice(1));
}
function Oe({
  position: t = "bottom",
  height: n,
  width: l,
  devtoolsTheme: r,
  isOpen: s,
  isResizing: c,
  panelStyle: o
}) {
  const d = be(t), g = se("border", d), m = K(t);
  return {
    ...o,
    direction: "ltr",
    position: "fixed",
    [t]: 0,
    [g]: "1px solid " + r.gray,
    transformOrigin: d,
    boxShadow: "0 0 20px rgba(0,0,0,.3)",
    zIndex: 99999,
    // visibility will be toggled after transitions, but set initial state here
    visibility: s ? "visible" : "hidden",
    ...c ? {
      transition: "none"
    } : {
      transition: "all .2s ease"
    },
    ...s ? {
      opacity: 1,
      pointerEvents: "all",
      transform: m ? "translateX(0) scale(1)" : "translateY(0) scale(1)"
    } : {
      opacity: 0,
      pointerEvents: "none",
      transform: m ? "translateX(15px) scale(1.02)" : "translateY(15px) scale(1.02)"
    },
    ...m ? {
      top: 0,
      height: "100vh",
      maxWidth: "90%",
      width: typeof l == "number" && l >= oe ? l : N
    } : {
      left: 0,
      width: "100%",
      maxHeight: "90%",
      height: typeof n == "number" && n >= oe ? n : N
    }
  };
}
function Ie(t = "bottom") {
  const n = K(t), l = be(t), r = se("margin", l);
  return {
    position: "absolute",
    cursor: n ? "col-resize" : "row-resize",
    zIndex: 1e5,
    [l]: 0,
    [r]: "-4px",
    ...n ? {
      top: 0,
      height: "100%",
      width: "4px"
    } : {
      width: "100%",
      height: "4px"
    }
  };
}
const ze = k("div", (t, n) => ({
  fontSize: "clamp(12px, 1.5vw, 14px)",
  fontFamily: "sans-serif",
  display: "flex",
  backgroundColor: n.background,
  color: n.foreground
}), {
  "(max-width: 700px)": {
    flexDirection: "column"
  },
  "(max-width: 600px)": {
    fontSize: ".9em"
    // flexDirection: 'column',
  }
}), Be = k("div", () => ({
  flex: "1 1 500px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  height: "100%"
}), {
  "(max-width: 700px)": (t, n) => ({
    borderTop: "2px solid " + n.gray
  })
}), M = k("button", (t, n) => ({
  appearance: "none",
  fontSize: ".9em",
  fontWeight: "bold",
  background: n.gray,
  border: "0",
  borderRadius: ".3em",
  color: "white",
  padding: ".5em",
  opacity: t.disabled ? ".5" : void 0,
  cursor: "pointer"
})), Te = k("span", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5em",
  fontSize: "0.9em"
}), $ = k("span", {
  display: "inline-flex",
  alignItems: "center",
  padding: ".2em .4em",
  fontWeight: "bold",
  textShadow: "0 0 10px black",
  borderRadius: ".2em"
}), P = k("code", {
  fontSize: ".9em",
  color: "inherit",
  background: "inherit"
}), _e = k("input", (t, n) => ({
  backgroundColor: n.inputBackgroundColor,
  border: 0,
  borderRadius: ".2em",
  color: n.inputTextColor,
  fontSize: ".9em",
  lineHeight: "1.3",
  padding: ".3em .4em"
})), le = k("select", (t, n) => ({
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
  backgroundColor: n.inputBackgroundColor,
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23444444'><polygon points='0,25 100,25 50,75'/></svg>")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right .55em center",
  backgroundSize: ".65em auto, 100%",
  color: n.inputTextColor
}), {
  "(max-width: 500px)": {
    display: "none"
  }
});
function ae({
  text: t
}) {
  return /* @__PURE__ */ e.createElement("span", {
    style: {
      position: "absolute",
      width: "0.1px",
      height: "0.1px",
      overflow: "hidden"
    }
  }, t);
}
const ue = k("div", {
  fontFamily: "Menlo, monospace",
  fontSize: "1em",
  lineHeight: "1.7",
  outline: "none",
  wordBreak: "break-word"
}), He = k("span", {
  color: "white"
}), Fe = k("button", {
  cursor: "pointer",
  color: "white"
}), je = k("button", {
  cursor: "pointer",
  color: "inherit",
  font: "inherit",
  outline: "inherit",
  background: "transparent",
  border: "none",
  padding: 0
}), We = ({
  value: t
}) => {
  const [n, l] = e.useState("NoCopy");
  return /* @__PURE__ */ e.createElement("button", {
    onClick: n === "NoCopy" ? () => {
      navigator.clipboard.writeText(pe.stringify(t)).then(() => {
        l("SuccessCopy"), setTimeout(() => {
          l("NoCopy");
        }, 1500);
      }, (r) => {
        console.error("Failed to copy: ", r), l("ErrorCopy"), setTimeout(() => {
          l("NoCopy");
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
  }, n === "NoCopy" ? /* @__PURE__ */ e.createElement(Ze, null) : n === "SuccessCopy" ? /* @__PURE__ */ e.createElement(Ve, null) : /* @__PURE__ */ e.createElement(Ue, null));
}, $e = k("span", (t, n) => ({
  color: n.danger
})), re = k("div", {
  marginLeft: ".1em",
  paddingLeft: "1em",
  borderLeft: "2px solid rgba(0,0,0,.15)"
}), Ne = k("span", {
  color: "grey",
  fontSize: ".7em"
}), de = ({
  expanded: t,
  style: n = {}
}) => /* @__PURE__ */ e.createElement("span", {
  style: {
    display: "inline-block",
    transition: "all .1s ease",
    transform: "rotate(" + (t ? 90 : 0) + "deg) " + (n.transform || ""),
    ...n
  }
}, "▶"), Ze = () => /* @__PURE__ */ e.createElement("span", {
  "aria-label": "Copy object to clipboard",
  title: "Copy object to clipboard",
  style: {
    paddingLeft: "1em"
  }
}, /* @__PURE__ */ e.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10"
}, /* @__PURE__ */ e.createElement("path", {
  fill: "currentColor",
  d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
}), /* @__PURE__ */ e.createElement("path", {
  fill: "currentColor",
  d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
}))), Ue = () => /* @__PURE__ */ e.createElement("span", {
  "aria-label": "Failed copying to clipboard",
  title: "Failed copying to clipboard",
  style: {
    paddingLeft: "1em",
    display: "flex",
    alignItems: "center"
  }
}, /* @__PURE__ */ e.createElement("svg", {
  height: "12",
  viewBox: "0 0 16 12",
  width: "10",
  display: "block"
}, /* @__PURE__ */ e.createElement("path", {
  fill: "red",
  d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
})), /* @__PURE__ */ e.createElement("span", {
  style: {
    color: "red",
    fontSize: "12px",
    paddingLeft: "4px",
    position: "relative",
    top: "2px"
  }
}, "See console")), Ve = () => /* @__PURE__ */ e.createElement("span", {
  "aria-label": "Object copied to clipboard",
  title: "Object copied to clipboard",
  style: {
    paddingLeft: "1em",
    display: "inline-block",
    verticalAlign: "middle"
  }
}, /* @__PURE__ */ e.createElement("svg", {
  height: "16",
  viewBox: "0 0 16 16",
  width: "16",
  display: "block"
}, /* @__PURE__ */ e.createElement("path", {
  fill: "green",
  d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
})));
function Ye(t, n) {
  if (n < 1)
    return [];
  let l = 0;
  const r = [];
  for (; l < t.length; )
    r.push(t.slice(l, l + n)), l = l + n;
  return r;
}
const Xe = ({
  handleEntry: t,
  label: n,
  value: l,
  subEntries: r = [],
  subEntryPages: s = [],
  type: c,
  expanded: o = !1,
  copyable: d = !1,
  toggleExpanded: g,
  pageSize: m
}) => {
  const [p, b] = e.useState([]);
  return /* @__PURE__ */ e.createElement(ue, {
    key: n
  }, s.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(je, {
    onClick: () => g()
  }, /* @__PURE__ */ e.createElement(de, {
    expanded: o
  }), " ", n, " ", /* @__PURE__ */ e.createElement(Ne, null, String(c).toLowerCase() === "iterable" ? "(Iterable) " : "", r.length, " ", r.length > 1 ? "items" : "item")), d ? /* @__PURE__ */ e.createElement(We, {
    value: l
  }) : null, o ? s.length === 1 ? /* @__PURE__ */ e.createElement(re, null, r.map(t)) : /* @__PURE__ */ e.createElement(re, null, s.map((C, a) => /* @__PURE__ */ e.createElement("div", {
    key: a
  }, /* @__PURE__ */ e.createElement(ue, null, /* @__PURE__ */ e.createElement(Fe, {
    onClick: () => b((i) => i.includes(a) ? i.filter((h) => h !== a) : [...i, a])
  }, /* @__PURE__ */ e.createElement(de, {
    expanded: o
  }), " [", a * m, " ...", " ", a * m + m - 1, "]"), p.includes(a) ? /* @__PURE__ */ e.createElement(re, null, C.map(t)) : null)))) : null) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(He, null, n, ":"), " ", /* @__PURE__ */ e.createElement($e, null, ye(l))));
};
function Je(t) {
  return Symbol.iterator in t;
}
function ie({
  value: t,
  defaultExpanded: n,
  renderer: l = Xe,
  pageSize: r = 100,
  copyable: s = !1,
  ...c
}) {
  const [o, d] = e.useState(!!n), g = e.useCallback(() => d((a) => !a), []);
  let m = typeof t, p = [];
  const b = (a) => {
    const i = n === !0 ? {
      [a.label]: !0
    } : n == null ? void 0 : n[a.label];
    return {
      ...a,
      defaultExpanded: i
    };
  };
  Array.isArray(t) ? (m = "array", p = t.map((a, i) => b({
    label: i.toString(),
    value: a
  }))) : t !== null && typeof t == "object" && Je(t) && typeof t[Symbol.iterator] == "function" ? (m = "Iterable", p = Array.from(t, (a, i) => b({
    label: i.toString(),
    value: a
  }))) : typeof t == "object" && t !== null && (m = "object", p = Object.entries(t).map(([a, i]) => b({
    label: a,
    value: i
  })));
  const C = Ye(p, r);
  return l({
    handleEntry: (a) => /* @__PURE__ */ e.createElement(ie, A({
      key: a.label,
      value: t,
      renderer: l,
      copyable: s
    }, c, a)),
    type: m,
    subEntries: p,
    subEntryPages: C,
    value: t,
    expanded: o,
    copyable: s,
    toggleExpanded: g,
    pageSize: r,
    ...c
  });
}
function ve(t) {
  return /* @__PURE__ */ e.createElement("svg", A({
    width: "40px",
    height: "40px",
    viewBox: "0 0 190 190",
    version: "1.1"
  }, t), /* @__PURE__ */ e.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ e.createElement("g", {
    transform: "translate(-33.000000, 0.000000)"
  }, /* @__PURE__ */ e.createElement("path", {
    d: "M72.7239712,61.3436237 C69.631224,46.362877 68.9675112,34.8727722 70.9666331,26.5293551 C72.1555965,21.5671678 74.3293088,17.5190846 77.6346064,14.5984631 C81.1241394,11.5150478 85.5360327,10.0020122 90.493257,10.0020122 C98.6712013,10.0020122 107.26826,13.7273214 116.455725,20.8044264 C120.20312,23.6910458 124.092437,27.170411 128.131651,31.2444746 C128.45314,30.8310265 128.816542,30.4410453 129.22143,30.0806152 C140.64098,19.9149716 150.255245,13.5989272 158.478408,11.1636507 C163.367899,9.715636 167.958526,9.57768202 172.138936,10.983031 C176.551631,12.4664684 180.06766,15.5329489 182.548314,19.8281091 C186.642288,26.9166735 187.721918,36.2310983 186.195595,47.7320243 C185.573451,52.4199112 184.50985,57.5263831 183.007094,63.0593153 C183.574045,63.1277086 184.142416,63.2532808 184.705041,63.4395297 C199.193932,68.2358678 209.453582,73.3937462 215.665021,79.2882839 C219.360669,82.7953831 221.773972,86.6998434 222.646365,91.0218204 C223.567176,95.5836746 222.669313,100.159332 220.191548,104.451297 C216.105211,111.529614 208.591643,117.11221 197.887587,121.534031 C193.589552,123.309539 188.726579,124.917559 183.293259,126.363748 C183.541176,126.92292 183.733521,127.516759 183.862138,128.139758 C186.954886,143.120505 187.618598,154.61061 185.619477,162.954027 C184.430513,167.916214 182.256801,171.964297 178.951503,174.884919 C175.46197,177.968334 171.050077,179.48137 166.092853,179.48137 C157.914908,179.48137 149.31785,175.756061 140.130385,168.678956 C136.343104,165.761613 132.410866,162.238839 128.325434,158.108619 C127.905075,158.765474 127.388968,159.376011 126.77857,159.919385 C115.35902,170.085028 105.744755,176.401073 97.5215915,178.836349 C92.6321009,180.284364 88.0414736,180.422318 83.8610636,179.016969 C79.4483686,177.533532 75.9323404,174.467051 73.4516862,170.171891 C69.3577116,163.083327 68.2780823,153.768902 69.8044053,142.267976 C70.449038,137.410634 71.56762,132.103898 73.1575891,126.339009 C72.5361041,126.276104 71.9120754,126.144816 71.2949591,125.940529 C56.8060684,121.144191 46.5464184,115.986312 40.3349789,110.091775 C36.6393312,106.584675 34.2260275,102.680215 33.3536352,98.3582381 C32.4328237,93.7963839 33.3306866,89.2207269 35.8084524,84.9287618 C39.8947886,77.8504443 47.4083565,72.2678481 58.1124133,67.8460273 C62.5385143,66.0176154 67.5637208,64.366822 73.1939394,62.8874674 C72.9933393,62.3969171 72.8349374,61.8811235 72.7239712,61.3436237 Z",
    fill: "#002C4B",
    fillRule: "nonzero",
    transform: "translate(128.000000, 95.000000) scale(-1, 1) translate(-128.000000, -95.000000) "
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M113.396882,64 L142.608177,64 C144.399254,64 146.053521,64.958025 146.944933,66.5115174 L161.577138,92.0115174 C162.461464,93.5526583 162.461464,95.4473417 161.577138,96.9884826 L146.944933,122.488483 C146.053521,124.041975 144.399254,125 142.608177,125 L113.396882,125 C111.605806,125 109.951539,124.041975 109.060126,122.488483 L94.4279211,96.9884826 C93.543596,95.4473417 93.543596,93.5526583 94.4279211,92.0115174 L109.060126,66.5115174 C109.951539,64.958025 111.605806,64 113.396882,64 Z M138.987827,70.2765273 C140.779849,70.2765273 142.434839,71.2355558 143.325899,72.7903404 L154.343038,92.0138131 C155.225607,93.5537825 155.225607,95.4462175 154.343038,96.9861869 L143.325899,116.20966 C142.434839,117.764444 140.779849,118.723473 138.987827,118.723473 L117.017233,118.723473 C115.225211,118.723473 113.570221,117.764444 112.67916,116.20966 L101.662022,96.9861869 C100.779452,95.4462175 100.779452,93.5537825 101.662022,92.0138131 L112.67916,72.7903404 C113.570221,71.2355558 115.225211,70.2765273 117.017233,70.2765273 L138.987827,70.2765273 Z M135.080648,77.1414791 L120.924411,77.1414791 C119.134228,77.1414791 117.480644,78.0985567 116.5889,79.6508285 L116.5889,79.6508285 L109.489217,92.0093494 C108.603232,93.5515958 108.603232,95.4484042 109.489217,96.9906506 L109.489217,96.9906506 L116.5889,109.349172 C117.480644,110.901443 119.134228,111.858521 120.924411,111.858521 L120.924411,111.858521 L135.080648,111.858521 C136.870831,111.858521 138.524416,110.901443 139.41616,109.349172 L139.41616,109.349172 L146.515843,96.9906506 C147.401828,95.4484042 147.401828,93.5515958 146.515843,92.0093494 L146.515843,92.0093494 L139.41616,79.6508285 C138.524416,78.0985567 136.870831,77.1414791 135.080648,77.1414791 L135.080648,77.1414791 Z M131.319186,83.7122186 C133.108028,83.7122186 134.760587,84.6678753 135.652827,86.2183156 L138.983552,92.0060969 C139.87203,93.5500005 139.87203,95.4499995 138.983552,96.9939031 L135.652827,102.781684 C134.760587,104.332125 133.108028,105.287781 131.319186,105.287781 L124.685874,105.287781 C122.897032,105.287781 121.244473,104.332125 120.352233,102.781684 L117.021508,96.9939031 C116.13303,95.4499995 116.13303,93.5500005 117.021508,92.0060969 L120.352233,86.2183156 C121.244473,84.6678753 122.897032,83.7122186 124.685874,83.7122186 L131.319186,83.7122186 Z M128.003794,90.1848875 C126.459294,90.1848875 125.034382,91.0072828 124.263005,92.3424437 C123.491732,93.6774232 123.491732,95.3225768 124.263005,96.6575563 C125.034382,97.9927172 126.459294,98.8151125 128.001266,98.8151125 L128.001266,98.8151125 C129.545766,98.8151125 130.970678,97.9927172 131.742055,96.6575563 C132.513327,95.3225768 132.513327,93.6774232 131.742055,92.3424437 C130.970678,91.0072828 129.545766,90.1848875 128.003794,90.1848875 L128.003794,90.1848875 Z M93,94.5009646 L100.767764,94.5009646",
    fill: "#FFD94C"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M87.8601729,108.357758 C89.1715224,107.608286 90.8360246,108.074601 91.5779424,109.399303 L91.5779424,109.399303 L92.0525843,110.24352 C95.8563392,116.982993 99.8190116,123.380176 103.940602,129.435068 C108.807881,136.585427 114.28184,143.82411 120.362479,151.151115 C121.316878,152.30114 121.184944,154.011176 120.065686,154.997937 L120.065686,154.997937 L119.454208,155.534625 C99.3465389,173.103314 86.2778188,176.612552 80.2480482,166.062341 C74.3500652,155.742717 76.4844915,136.982888 86.6513274,109.782853 C86.876818,109.179582 87.3045861,108.675291 87.8601729,108.357758 Z M173.534177,129.041504 C174.986131,128.785177 176.375496,129.742138 176.65963,131.194242 L176.65963,131.194242 L176.812815,131.986376 C181.782365,157.995459 178.283348,171 166.315764,171 C154.609745,171 139.708724,159.909007 121.612702,137.727022 C121.211349,137.235047 120.994572,136.617371 121,135.981509 C121.013158,134.480686 122.235785,133.274651 123.730918,133.287756 L123.730918,133.287756 L124.684654,133.294531 C132.305698,133.335994 139.714387,133.071591 146.910723,132.501323 C155.409039,131.82788 164.283523,130.674607 173.534177,129.041504 Z M180.408726,73.8119663 C180.932139,72.4026903 182.508386,71.6634537 183.954581,72.149012 L183.954581,72.149012 L184.742552,72.4154854 C210.583763,81.217922 220.402356,90.8916805 214.198332,101.436761 C208.129904,111.751366 190.484347,119.260339 161.26166,123.963678 C160.613529,124.067994 159.948643,123.945969 159.382735,123.618843 C158.047025,122.846729 157.602046,121.158214 158.388848,119.847438 L158.388848,119.847438 L158.889328,119.0105 C162.877183,112.31633 166.481358,105.654262 169.701854,99.0242957 C173.50501,91.1948179 177.073967,82.7907081 180.408726,73.8119663 Z M94.7383398,66.0363218 C95.3864708,65.9320063 96.0513565,66.0540315 96.6172646,66.3811573 C97.9529754,67.153271 98.3979538,68.8417862 97.6111517,70.1525615 L97.6111517,70.1525615 L97.1106718,70.9895001 C93.1228168,77.6836699 89.5186416,84.3457379 86.2981462,90.9757043 C82.49499,98.8051821 78.9260328,107.209292 75.5912744,116.188034 C75.0678608,117.59731 73.4916142,118.336546 72.045419,117.850988 L72.045419,117.850988 L71.2574475,117.584515 C45.4162372,108.782078 35.597644,99.1083195 41.8016679,88.5632391 C47.8700957,78.2486335 65.515653,70.7396611 94.7383398,66.0363218 Z M136.545792,34.4653746 C156.653461,16.8966864 169.722181,13.3874478 175.751952,23.9376587 C181.649935,34.2572826 179.515508,53.0171122 169.348673,80.2171474 C169.123182,80.8204179 168.695414,81.324709 168.139827,81.6422422 C166.828478,82.3917144 165.163975,81.9253986 164.422058,80.6006966 L164.422058,80.6006966 L163.947416,79.7564798 C160.143661,73.0170065 156.180988,66.6198239 152.059398,60.564932 C147.192119,53.4145727 141.71816,46.1758903 135.637521,38.8488847 C134.683122,37.6988602 134.815056,35.9888243 135.934314,35.0020629 L135.934314,35.0020629 Z M90.6842361,18 C102.390255,18 117.291276,29.0909926 135.387298,51.2729777 C135.788651,51.7649527 136.005428,52.3826288 136,53.0184911 C135.986842,54.5193144 134.764215,55.7253489 133.269082,55.7122445 L133.269082,55.7122445 L132.315346,55.7054689 C124.694302,55.6640063 117.285613,55.9284091 110.089277,56.4986773 C101.590961,57.17212 92.7164767,58.325393 83.4658235,59.9584962 C82.0138691,60.2148231 80.6245044,59.2578618 80.3403697,57.805758 L80.3403697,57.805758 L80.1871846,57.0136235 C75.2176347,31.0045412 78.7166519,18 90.6842361,18 Z",
    fill: "#FF4154"
  }))));
}
function Ke({
  initialIsOpen: t,
  panelProps: n = {},
  closeButtonProps: l = {},
  toggleButtonProps: r = {},
  position: s = "bottom-left",
  containerElement: c = "aside",
  context: o,
  styleNonce: d,
  panelPosition: g = "bottom",
  errorTypes: m = []
}) {
  const p = e.useRef(null), b = e.useRef(null), [C, a] = O("reactQueryDevtoolsOpen", t), [i, h] = O("reactQueryDevtoolsHeight", N), [S, L] = O("reactQueryDevtoolsWidth", N), [w = "bottom", G] = O("reactQueryDevtoolsPanelPosition", g), [E, H] = e.useState(!1), [z, Z] = e.useState(!1), F = De(), U = (y, v) => {
    if (!y || v.button !== 0)
      return;
    const Q = K(w);
    Z(!0);
    const {
      height: W,
      width: te
    } = y.getBoundingClientRect(), B = v.clientX, T = v.clientY;
    let D = 0;
    const Y = (I) => {
      I.preventDefault(), Q ? (D = te + (w === "right" ? B - I.clientX : I.clientX - B), L(D)) : (D = W + (w === "bottom" ? T - I.clientY : I.clientY - T), h(D)), D < oe ? a(!1) : a(!0);
    }, X = () => {
      z && Z(!1), document.removeEventListener("mousemove", Y, !1), document.removeEventListener("mouseUp", X, !1);
    };
    document.addEventListener("mousemove", Y, !1), document.addEventListener("mouseup", X, !1);
  };
  e.useEffect(() => {
    H(C ?? !1);
  }, [C, E, H]), e.useEffect(() => {
    const y = b.current;
    if (y) {
      const v = () => {
        E && (y.style.visibility = "visible");
      }, Q = () => {
        E || (y.style.visibility = "hidden");
      };
      return y.addEventListener("transitionstart", v), y.addEventListener("transitionend", Q), () => {
        y.removeEventListener("transitionstart", v), y.removeEventListener("transitionend", Q);
      };
    }
  }, [E]), e.useEffect(() => {
    var y;
    if (E && (y = p.current) != null && y.parentElement) {
      const {
        parentElement: v
      } = p.current, Q = se("padding", w), W = K(w), te = (({
        padding: T,
        paddingTop: D,
        paddingBottom: Y,
        paddingLeft: X,
        paddingRight: I
      }) => ({
        padding: T,
        paddingTop: D,
        paddingBottom: Y,
        paddingLeft: X,
        paddingRight: I
      }))(v.style), B = () => {
        v.style.padding = "0px", v.style.paddingTop = "0px", v.style.paddingBottom = "0px", v.style.paddingLeft = "0px", v.style.paddingRight = "0px", v.style[Q] = (W ? S : i) + "px";
      };
      if (B(), typeof window < "u")
        return window.addEventListener("resize", B), () => {
          window.removeEventListener("resize", B), Object.entries(te).forEach(([T, D]) => {
            v.style[T] = D;
          });
        };
    }
  }, [E, w, i, S]);
  const {
    style: j = {},
    ...q
  } = n, {
    style: ee = {},
    onClick: R,
    ...V
  } = r, f = Oe({
    position: w,
    devtoolsTheme: u,
    isOpen: E,
    height: i,
    width: S,
    isResizing: z,
    panelStyle: j
  });
  return F() ? /* @__PURE__ */ e.createElement(c, {
    ref: p,
    className: "ReactQueryDevtools",
    "aria-label": "React Query Devtools"
  }, /* @__PURE__ */ e.createElement(fe, {
    theme: u
  }, /* @__PURE__ */ e.createElement(Ce, A({
    ref: b,
    context: o,
    styleNonce: d,
    position: w,
    onPositionChange: G,
    showCloseButton: !0,
    closeButtonProps: l
  }, q, {
    style: f,
    isOpen: E,
    setIsOpen: a,
    onDragStart: (y) => U(b.current, y),
    errorTypes: m
  }))), E ? null : /* @__PURE__ */ e.createElement("button", A({
    type: "button"
  }, V, {
    "aria-label": "Open React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: (y) => {
      a(!0), R == null || R(y);
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
      ...s === "top-right" ? {
        top: "0",
        right: "0"
      } : s === "top-left" ? {
        top: "0",
        left: "0"
      } : s === "bottom-right" ? {
        bottom: "0",
        right: "0"
      } : {
        bottom: "0",
        left: "0"
      },
      ...ee
    }
  }), /* @__PURE__ */ e.createElement(ve, {
    "aria-hidden": !0
  }), /* @__PURE__ */ e.createElement(ae, {
    text: "Open React Query Devtools"
  }))) : null;
}
const x = (t, n, l = !1) => we.useSyncExternalStore(e.useCallback((r) => l ? () => {
} : t.subscribe(ke.batchCalls(r)), [t, l]), n, n), Ce = /* @__PURE__ */ e.forwardRef(function(n, l) {
  const {
    isOpen: r = !0,
    styleNonce: s,
    setIsOpen: c,
    context: o,
    onDragStart: d,
    onPositionChange: g,
    showCloseButton: m,
    position: p,
    closeButtonProps: b = {},
    errorTypes: C = [],
    ...a
  } = n, {
    onClick: i,
    ...h
  } = b, S = xe({
    context: o
  }), L = S.getQueryCache(), [w, G] = O("reactQueryDevtoolsSortFn", Object.keys(ne)[0]), [E, H] = O("reactQueryDevtoolsFilter", ""), [z, Z] = O("reactQueryDevtoolsBaseSort", 1), F = e.useMemo(() => ne[w], [w]), U = x(L, () => L.getAll().length, !r), [j, q] = O("reactQueryDevtoolsActiveQueryHash", ""), ee = e.useMemo(() => {
    const f = L.getAll();
    if (U === 0)
      return [];
    const y = E ? f.filter((Q) => Se(Q.queryHash, E).passed) : [...f];
    return F ? y.sort((Q, W) => F(Q, W) * z) : y;
  }, [z, F, E, U, L]), [R, V] = e.useState(!1);
  return /* @__PURE__ */ e.createElement(fe, {
    theme: u
  }, /* @__PURE__ */ e.createElement(ze, A({
    ref: l,
    className: "ReactQueryDevtoolsPanel",
    "aria-label": "React Query Devtools Panel",
    id: "ReactQueryDevtoolsPanel"
  }, a, {
    style: {
      height: N,
      position: "relative",
      ...a.style
    }
  }), /* @__PURE__ */ e.createElement("style", {
    nonce: s,
    dangerouslySetInnerHTML: {
      __html: `
            .ReactQueryDevtoolsPanel * {
              scrollbar-color: ` + u.backgroundAlt + " " + u.gray + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar, .ReactQueryDevtoolsPanel scrollbar {
              width: 1em;
              height: 1em;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-track, .ReactQueryDevtoolsPanel scrollbar-track {
              background: ` + u.backgroundAlt + `;
            }

            .ReactQueryDevtoolsPanel *::-webkit-scrollbar-thumb, .ReactQueryDevtoolsPanel scrollbar-thumb {
              background: ` + u.gray + `;
              border-radius: .5em;
              border: 3px solid ` + u.backgroundAlt + `;
            }
          `
    }
  }), /* @__PURE__ */ e.createElement("div", {
    style: Ie(p),
    onMouseDown: d
  }), r && /* @__PURE__ */ e.createElement("div", {
    style: {
      flex: "1 1 500px",
      minHeight: "40%",
      maxHeight: "100%",
      overflow: "auto",
      borderRight: "1px solid " + u.grayAlt,
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ e.createElement("div", {
    style: {
      padding: ".5em",
      background: u.backgroundAlt,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /* @__PURE__ */ e.createElement("button", {
    type: "button",
    "aria-label": "Close React Query Devtools",
    "aria-controls": "ReactQueryDevtoolsPanel",
    "aria-haspopup": "true",
    "aria-expanded": "true",
    onClick: () => c(!1),
    style: {
      display: "inline-flex",
      background: "none",
      border: 0,
      padding: 0,
      marginRight: ".5em",
      cursor: "pointer"
    }
  }, /* @__PURE__ */ e.createElement(ve, {
    "aria-hidden": !0
  }), /* @__PURE__ */ e.createElement(ae, {
    text: "Close React Query Devtools"
  })), /* @__PURE__ */ e.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ e.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".5em"
    }
  }, /* @__PURE__ */ e.createElement(qe, {
    queryCache: L
  }), p && g ? /* @__PURE__ */ e.createElement(le, {
    "aria-label": "Panel position",
    value: p,
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (f) => g(f.target.value)
  }, /* @__PURE__ */ e.createElement("option", {
    value: "left"
  }, "Left"), /* @__PURE__ */ e.createElement("option", {
    value: "right"
  }, "Right"), /* @__PURE__ */ e.createElement("option", {
    value: "top"
  }, "Top"), /* @__PURE__ */ e.createElement("option", {
    value: "bottom"
  }, "Bottom")) : null), /* @__PURE__ */ e.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.5em"
    }
  }, /* @__PURE__ */ e.createElement(_e, {
    placeholder: "Filter",
    "aria-label": "Filter by queryhash",
    value: E ?? "",
    onChange: (f) => H(f.target.value),
    onKeyDown: (f) => {
      f.key === "Escape" && H("");
    },
    style: {
      flex: "1",
      width: "100%"
    }
  }), /* @__PURE__ */ e.createElement(le, {
    "aria-label": "Sort queries",
    value: w,
    onChange: (f) => G(f.target.value),
    style: {
      flex: "1",
      minWidth: 75,
      marginRight: ".5em"
    }
  }, Object.keys(ne).map((f) => /* @__PURE__ */ e.createElement("option", {
    key: f,
    value: f
  }, "Sort by ", f))), /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => Z((f) => f * -1),
    style: {
      padding: ".3em .4em",
      marginRight: ".5em"
    }
  }, z === 1 ? "⬆ Asc" : "⬇ Desc"), /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => {
      R ? (ce.setOnline(void 0), V(!1), window.dispatchEvent(new Event("online"))) : (ce.setOnline(!1), V(!0));
    },
    "aria-label": R ? "Restore offline mock" : "Mock offline behavior",
    title: R ? "Restore offline mock" : "Mock offline behavior",
    style: {
      padding: "0",
      height: "2em"
    }
  }, /* @__PURE__ */ e.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "2em",
    height: "2em",
    viewBox: "0 0 24 24",
    stroke: R ? u.danger : "currentColor",
    fill: "none"
  }, R ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ e.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374"
  }), /* @__PURE__ */ e.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21"
  })) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ e.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M9.172 15.172a4 4 0 0 1 5.656 0"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M6.343 12.343a8 8 0 0 1 11.314 0"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
  }))), /* @__PURE__ */ e.createElement(ae, {
    text: R ? "Restore offline mock" : "Mock offline behavior"
  }))))), /* @__PURE__ */ e.createElement("div", {
    style: {
      overflowY: "auto",
      flex: "1"
    }
  }, ee.map((f) => /* @__PURE__ */ e.createElement(et, {
    queryKey: f.queryKey,
    activeQueryHash: j,
    setActiveQueryHash: q,
    key: f.queryHash,
    queryCache: L
  })))), j && r ? /* @__PURE__ */ e.createElement(Ge, {
    activeQueryHash: j,
    queryCache: L,
    queryClient: S,
    errorTypes: C
  }) : null, m ? /* @__PURE__ */ e.createElement(M, A({
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
    onClick: (f) => {
      c(!1), i == null || i(f);
    }
  }), "Close") : null));
}), Ge = ({
  queryCache: t,
  activeQueryHash: n,
  queryClient: l,
  errorTypes: r
}) => {
  var s, c;
  const o = x(t, () => t.getAll().find((i) => i.queryHash === n)), d = x(t, () => {
    var i;
    return (i = t.getAll().find((h) => h.queryHash === n)) == null ? void 0 : i.state;
  }), g = (s = x(t, () => {
    var i;
    return (i = t.getAll().find((h) => h.queryHash === n)) == null ? void 0 : i.isStale();
  })) != null ? s : !1, m = (c = x(t, () => {
    var i;
    return (i = t.getAll().find((h) => h.queryHash === n)) == null ? void 0 : i.getObserversCount();
  })) != null ? c : 0, p = () => {
    const i = o == null ? void 0 : o.fetch();
    i == null || i.catch(tt);
  }, b = Ee(() => {
    if (o && d != null && d.error) {
      const i = r.find((h) => {
        var S;
        return h.initializer(o).toString() === ((S = d.error) == null ? void 0 : S.toString());
      });
      return i == null ? void 0 : i.name;
    }
  }, [o, d == null ? void 0 : d.error, r]);
  if (!o || !d)
    return null;
  const C = (i) => {
    var h;
    const S = (h = i == null ? void 0 : i.initializer(o)) != null ? h : new Error("Unknown error from devtools"), L = o.options;
    o.setState({
      status: "error",
      error: S,
      fetchMeta: {
        ...o.state.fetchMeta,
        __previousQueryOptions: L
      }
    });
  }, a = () => {
    o.fetch(o.state.fetchMeta.__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  return /* @__PURE__ */ e.createElement(Be, null, /* @__PURE__ */ e.createElement("div", {
    style: {
      padding: ".5em",
      background: u.backgroundAlt,
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Details"), /* @__PURE__ */ e.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ e.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ e.createElement(P, {
    style: {
      lineHeight: "1.8em"
    }
  }, /* @__PURE__ */ e.createElement("pre", {
    style: {
      margin: 0,
      padding: 0,
      overflow: "auto"
    }
  }, ye(o.queryKey, !0))), /* @__PURE__ */ e.createElement("span", {
    style: {
      padding: "0.3em .6em",
      borderRadius: "0.4em",
      fontWeight: "bold",
      textShadow: "0 2px 10px black",
      background: ge({
        queryState: d,
        isStale: g,
        observerCount: m,
        theme: u
      }),
      flexShrink: 0
    }
  }, _(o))), /* @__PURE__ */ e.createElement("div", {
    style: {
      marginBottom: ".5em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Observers: ", /* @__PURE__ */ e.createElement(P, null, m)), /* @__PURE__ */ e.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Last Updated:", " ", /* @__PURE__ */ e.createElement(P, null, new Date(d.dataUpdatedAt).toLocaleTimeString()))), /* @__PURE__ */ e.createElement("div", {
    style: {
      background: u.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Actions"), /* @__PURE__ */ e.createElement("div", {
    style: {
      padding: "0.5em",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5em",
      alignItems: "flex-end"
    }
  }, /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: p,
    disabled: d.fetchStatus === "fetching",
    style: {
      background: u.active
    }
  }, "Refetch"), " ", /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => l.invalidateQueries(o),
    style: {
      background: u.warning,
      color: u.inputTextColor
    }
  }, "Invalidate"), " ", /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => l.resetQueries(o),
    style: {
      background: u.gray
    }
  }, "Reset"), " ", /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => l.removeQueries(o),
    style: {
      background: u.danger
    }
  }, "Remove"), " ", /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => {
      if (o.state.data === void 0)
        a();
      else {
        const i = o.options;
        o.fetch({
          ...i,
          queryFn: () => new Promise(() => {
          }),
          cacheTime: -1
        }), o.setState({
          data: void 0,
          status: "loading",
          fetchMeta: {
            ...o.state.fetchMeta,
            __previousQueryOptions: i
          }
        });
      }
    },
    style: {
      background: u.paused
    }
  }, o.state.status === "loading" ? "Restore" : "Trigger", " ", "loading"), " ", r.length === 0 || o.state.status === "error" ? /* @__PURE__ */ e.createElement(M, {
    type: "button",
    onClick: () => {
      o.state.error ? l.resetQueries(o) : C();
    },
    style: {
      background: u.danger
    }
  }, o.state.status === "error" ? "Restore" : "Trigger", " error") : /* @__PURE__ */ e.createElement("label", null, "Trigger error:", /* @__PURE__ */ e.createElement(le, {
    value: b ?? "",
    style: {
      marginInlineStart: ".5em"
    },
    onChange: (i) => {
      const h = r.find((S) => S.name === i.target.value);
      C(h);
    }
  }, /* @__PURE__ */ e.createElement("option", {
    key: "",
    value: ""
  }), r.map((i) => /* @__PURE__ */ e.createElement("option", {
    key: i.name,
    value: i.name
  }, i.name))))), /* @__PURE__ */ e.createElement("div", {
    style: {
      background: u.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Data Explorer"), /* @__PURE__ */ e.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ e.createElement(ie, {
    label: "Data",
    value: d.data,
    defaultExpanded: {},
    copyable: !0
  })), /* @__PURE__ */ e.createElement("div", {
    style: {
      background: u.backgroundAlt,
      padding: ".5em",
      position: "sticky",
      top: 0,
      zIndex: 1
    }
  }, "Query Explorer"), /* @__PURE__ */ e.createElement("div", {
    style: {
      padding: ".5em"
    }
  }, /* @__PURE__ */ e.createElement(ie, {
    label: "Query",
    value: o,
    defaultExpanded: {
      queryKey: !0
    }
  })));
}, qe = ({
  queryCache: t
}) => {
  const n = x(t, () => t.getAll().filter((o) => _(o) === "fresh").length), l = x(t, () => t.getAll().filter((o) => _(o) === "fetching").length), r = x(t, () => t.getAll().filter((o) => _(o) === "paused").length), s = x(t, () => t.getAll().filter((o) => _(o) === "stale").length), c = x(t, () => t.getAll().filter((o) => _(o) === "inactive").length);
  return /* @__PURE__ */ e.createElement(Te, null, /* @__PURE__ */ e.createElement($, {
    style: {
      background: u.success,
      opacity: n ? 1 : 0.3
    }
  }, "fresh ", /* @__PURE__ */ e.createElement(P, null, "(", n, ")")), " ", /* @__PURE__ */ e.createElement($, {
    style: {
      background: u.active,
      opacity: l ? 1 : 0.3
    }
  }, "fetching ", /* @__PURE__ */ e.createElement(P, null, "(", l, ")")), " ", /* @__PURE__ */ e.createElement($, {
    style: {
      background: u.paused,
      opacity: r ? 1 : 0.3
    }
  }, "paused ", /* @__PURE__ */ e.createElement(P, null, "(", r, ")")), " ", /* @__PURE__ */ e.createElement($, {
    style: {
      background: u.warning,
      color: "black",
      textShadow: "0",
      opacity: s ? 1 : 0.3
    }
  }, "stale ", /* @__PURE__ */ e.createElement(P, null, "(", s, ")")), " ", /* @__PURE__ */ e.createElement($, {
    style: {
      background: u.gray,
      opacity: c ? 1 : 0.3
    }
  }, "inactive ", /* @__PURE__ */ e.createElement(P, null, "(", c, ")")));
}, et = /* @__PURE__ */ e.memo(({
  queryKey: t,
  setActiveQueryHash: n,
  activeQueryHash: l,
  queryCache: r
}) => {
  var s, c, o, d;
  const g = (s = x(r, () => {
    var a;
    return (a = r.find(t)) == null ? void 0 : a.queryHash;
  })) != null ? s : "", m = x(r, () => {
    var a;
    return (a = r.find(t)) == null ? void 0 : a.state;
  }), p = (c = x(r, () => {
    var a;
    return (a = r.find(t)) == null ? void 0 : a.isStale();
  })) != null ? c : !1, b = (o = x(r, () => {
    var a;
    return (a = r.find(t)) == null ? void 0 : a.isDisabled();
  })) != null ? o : !1, C = (d = x(r, () => {
    var a;
    return (a = r.find(t)) == null ? void 0 : a.getObserversCount();
  })) != null ? d : 0;
  return m ? /* @__PURE__ */ e.createElement("div", {
    role: "button",
    "aria-label": "Open query details for " + g,
    onClick: () => n(l === g ? "" : g),
    style: {
      display: "flex",
      borderBottom: "solid 1px " + u.grayAlt,
      cursor: "pointer",
      background: g === l ? "rgba(255,255,255,.1)" : void 0
    }
  }, /* @__PURE__ */ e.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: "2em",
      height: "2em",
      background: ge({
        queryState: m,
        isStale: p,
        observerCount: C,
        theme: u
      }),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      textShadow: p ? "0" : "0 0 10px black",
      color: p ? "black" : "white"
    }
  }, C), b ? /* @__PURE__ */ e.createElement("div", {
    style: {
      flex: "0 0 auto",
      height: "2em",
      background: u.gray,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      padding: "0 0.5em"
    }
  }, "disabled") : null, /* @__PURE__ */ e.createElement(P, {
    style: {
      padding: ".5em"
    }
  }, "" + g)) : null;
});
function tt() {
}
const st = Ke, ct = Ce;
export {
  st as ReactQueryDevtools,
  ct as ReactQueryDevtoolsPanel
};
