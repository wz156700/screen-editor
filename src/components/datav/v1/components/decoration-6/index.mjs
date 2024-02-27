import { defineComponent as C, createVNode as s } from "vue";
import { random as y } from "lodash-es";
import { useResize as M } from "../../hooks/useResize.mjs";
import { withInstall as k, mergeColor as w } from "../../utils/common.mjs";
import { createColorProps as A } from "../../utils/decoration.mjs";
import { styled as b } from "../../utils/styled.mjs";
import "../../utils/logger.mjs";
const z = ["#7acaec", "#7acaec"], $ = 300, S = 35, D = 1, H = 40, _ = 7, N = _ / 2, R = b.div`
  width: 100%;
  height: 100%;
}
.__STYLED__ .svg-origin {
  transform-origin: left top;
`("decoration-6");
function T({
  width: f,
  height: e,
  rowPoints: o,
  rowCount: n
}) {
  const h = f / (o + 1), c = e / (n + 1), l = new Array(n).fill(0).map((a, r) => new Array(o).fill(0).map((i, t) => [h * (t + 1), c * (r + 1)])).reduce((a, r) => [...a, ...r], []), m = new Array(n * o).fill(0).map(() => Math.random() > 0.8 ? y(0.7 * e, e) : y(0.2 * e, 0.5 * e)), u = new Array(n * o).fill(0).map((a, r) => m[r] * Math.random()), g = new Array(n * o).fill(0).map(() => Math.random() + 1.5);
  return {
    points: l,
    heights: m,
    minHeights: u,
    randoms: g
  };
}
const {
  points: W,
  heights: d,
  minHeights: p,
  randoms: v
} = T({
  width: $,
  height: S,
  rowPoints: H,
  rowCount: D
}), Y = /* @__PURE__ */ k(C({
  name: "Decoration6",
  props: A(),
  setup(f, {
    expose: e
  }) {
    const {
      autoBindRef: o,
      refreshLayoutSize: n,
      domSize: h
    } = M();
    return e({
      refreshLayoutSize: n
    }), () => {
      const {
        width: c,
        height: l
      } = h, {
        color: m
      } = f, u = w(z, m), g = {
        transform: `scale(${c / $},${l / S})`
      }, a = () => u[Math.random() > 0.5 ? 0 : 1];
      return s(R, {
        ref: o
      }, {
        default: () => [s("svg", {
          class: "svg-origin",
          width: c,
          height: l,
          style: g
        }, [W.map(([r, i], t) => s("rect", {
          key: `rect${t}`,
          fill: a(),
          x: r - N,
          y: i - d[t],
          width: _,
          height: d[t]
        }, [s("animate", {
          attributeName: "y",
          values: `${i - p[t] / 2};${i - d[t] / 2};${i - p[t] / 2}`,
          dur: v[t],
          keyTimes: "0;0.5;1",
          calcMode: "spline",
          keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
          begin: "0s",
          repeatCount: "indefinite"
        }, null), s("animate", {
          attributeName: "height",
          values: `${p[t]};${d[t]};${p[t]}`,
          dur: v[t],
          keyTimes: "0;0.5;1",
          calcMode: "spline",
          keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
          begin: "0s",
          repeatCount: "indefinite"
        }, null)]))])]
      });
    };
  }
}));
export {
  Y as Decoration6
};
