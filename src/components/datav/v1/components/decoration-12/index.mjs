var _ = Object.defineProperty, z = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var w = (n, t, o) => t in n ? _(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o, A = (n, t) => {
  for (var o in t || (t = {}))
    S.call(t, o) && w(n, o, t[o]);
  if (C)
    for (var o of C(t))
      B.call(t, o) && w(n, o, t[o]);
  return n;
}, k = (n, t) => z(n, L(t));
import { defineComponent as E, createVNode as r } from "vue";
import { fade as M } from "@jiaminghi/color";
import { useResize as F } from "../../hooks/useResize.mjs";
import { useUuid as T } from "../../hooks/useUuid.mjs";
import { withInstall as U, mergeColor as V } from "../../utils/common.mjs";
import { createColorProps as W } from "../../utils/decoration.mjs";
import { styled as I } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const X = I.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-12"), Y = I.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"), D = ["#2783ce", "#2cf7fe"], x = 30, q = Math.PI / 3, H = 3, J = 1, K = (n, t) => {
  const o = 100 / (t - 1);
  return new Array(t).fill(n).map((a, l) => M(n, 100 - l * o));
};
function O() {
  return k(A({}, W()), {
    scanDuration: {
      type: Number,
      default: 3
    },
    haloDuration: {
      type: Number,
      default: 2
    }
  });
}
const m = (n, t, o, a) => [n + Math.cos(a) * o, t + Math.sin(a) * o], Q = ({
  x: n,
  y: t,
  width: o,
  segment: a,
  sectorAngle: l
}) => {
  const u = -Math.PI / 2, d = l / a, e = o / 4;
  let p = m(n, t, e, u);
  return new Array(a).fill("").map((c, i) => {
    const h = m(n, t, e, u - (i + 1) * d).map((g) => g.toFixed(5)), y = `M${p.join(",")} A${e}, ${e} 0 0 0 ${h.join(",")}`;
    return p = h, y;
  });
}, Z = ({
  ringNum: n,
  width: t,
  ringWidth: o
}) => {
  const a = (t / 2 - o / 2) / n;
  return new Array(n).fill(0).map((l, u) => a * (u + 1));
}, tt = ({
  x: n,
  y: t,
  width: o
}) => {
  const a = Math.PI / 6, l = o / 2;
  return new Array(6).fill("").map((u, d) => {
    const e = a * (d + 1), p = e + Math.PI, c = m(n, t, l, e), i = m(n, t, l, p);
    return `${c.join(",")} ${i.join(",")}`;
  });
}, nt = ({
  x: n,
  y: t,
  width: o
}) => {
  const a = Math.PI / 6, l = o / 2 - 1;
  return new Array(4).fill("").map((u, d) => {
    const e = a * (3 * d + 1), p = e + a, c = m(n, t, l, e), i = m(n, t, l, p);
    return `M${c.join(",")} A${n}, ${t} 0 0 1 ${i.join(",")}`;
  });
}, dt = /* @__PURE__ */ U(E({
  name: "Decoration12",
  props: O(),
  setup(n, {
    slots: t,
    expose: o
  }) {
    const {
      autoBindRef: a,
      refreshLayoutSize: l,
      domSize: u
    } = F();
    o({
      refreshLayoutSize: l
    });
    const d = T();
    return () => {
      const {
        width: e,
        height: p
      } = u, c = e / 2, i = p / 2, {
        color: h,
        scanDuration: y,
        haloDuration: g
      } = n, $ = `decoration-12-g-${d.id}`, P = `decoration-12-gradient-${d.id}`, f = V(D, h), j = K(f[0], x), v = Q({
        x: c,
        y: i,
        width: e,
        segment: x,
        sectorAngle: q
      }), b = Z({
        ringNum: H,
        ringWidth: J,
        width: e
      }), G = tt({
        x: c,
        y: i,
        width: e
      }), N = nt({
        x: c,
        y: i,
        width: e
      });
      return r(X, {
        ref: a
      }, {
        default: () => [r("svg", {
          width: e,
          height: p
        }, [r("defs", null, [r("g", {
          id: $
        }, [v.map((s, R) => r("path", {
          stroke: j[R],
          "stroke-width": e / 2,
          fill: "transparent",
          key: s,
          d: s
        }, null))]), r("radialGradient", {
          id: P,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, [r("stop", {
          offset: "0%",
          "stop-color": "transparent",
          "stop-opacity": "1"
        }, null), r("stop", {
          offset: "100%",
          "stop-color": M(f[1] || D[1], 30),
          "stop-opacity": "1"
        }, null)])]), b.map((s) => r("circle", {
          r: s,
          cx: c,
          cy: i,
          stroke: f[1],
          "stroke-width": "0.5",
          fill: "transparent"
        }, null)), r("circle", {
          r: "1",
          cx: c,
          cy: i,
          stroke: "transparent",
          fill: `url(#${P})`
        }, [r("animate", {
          attributeName: "r",
          values: `1;${e / 2}`,
          dur: `${g}s`,
          repeatCount: "indefinite"
        }, null), r("animate", {
          attributeName: "opacity",
          values: "1;0",
          dur: `${g}s`,
          repeatCount: "indefinite"
        }, null)]), r("circle", {
          r: "2",
          cx: c,
          cy: i,
          fill: f[1]
        }, null), r("g", null, [G.map((s) => r("polyline", {
          key: s,
          points: s,
          stroke: f[1],
          "stroke-width": "0.5",
          opacity: "0.5"
        }, null))]), N.map((s) => r("path", {
          key: s,
          d: s,
          stroke: f[1],
          "stroke-width": "2",
          fill: "transparent"
        }, null)), r("use", {
          "xlink:href": `#${$}`
        }, [r("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: `0, ${c} ${i};360, ${c} ${i}`,
          dur: `${y}s`,
          repeatCount: "indefinite"
        }, null)])]), r(Y, null, {
          default: () => {
            var s;
            return [(s = t.default) == null ? void 0 : s.call(t)];
          }
        })]
      });
    };
  }
}));
export {
  dt as Decoration12
};
