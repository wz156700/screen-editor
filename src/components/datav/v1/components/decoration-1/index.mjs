import { defineComponent as S, createVNode as e } from "vue";
import { useResize as x } from "../../hooks/useResize.mjs";
import { withInstall as P, mergeColor as _ } from "../../utils/common.mjs";
import { createColorProps as z } from "../../utils/decoration.mjs";
import { styled as D } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
function L({
  width: u,
  height: d,
  rowPoints: a,
  rowCount: s
}) {
  const c = u / (a + 1), m = d / (s + 1);
  return new Array(s).fill(0).map((l, n) => new Array(a).fill(0).map((o, h) => [c * (h + 1), m * (n + 1)])).reduce((l, n) => [...l, ...n], []);
}
const R = ["#fff", "#0de7c2"], f = 200, p = 50, g = 20, M = 4, t = 2.5, C = t / 2, v = L({
  width: f,
  height: p,
  rowPoints: g,
  rowCount: M
}), i = v[g * 2 - 1], r = v[g * 2 - 3], A = D.div`
  width: 100%;
  height: 100%;
}
.__STYLED__ svg {
  transform-origin: left top;
`("decoration-1"), V = /* @__PURE__ */ P(S({
  name: "Decoration1",
  props: z(),
  setup(u, {
    expose: d
  }) {
    const {
      autoBindRef: a,
      refreshLayoutSize: s,
      domSize: c
    } = x();
    return d({
      refreshLayoutSize: s
    }), () => {
      const {
        color: m
      } = u, {
        width: l,
        height: n
      } = c, o = _(R, m), h = {
        transform: `scale(${l / f},${n / p})`
      };
      return e(A, {
        ref: a
      }, {
        default: () => [e("svg", {
          width: f,
          height: p,
          style: h
        }, [v.map(([w, y], $) => {
          const b = w - C, N = y - C;
          return Math.random() > 0.6 ? e("rect", {
            key: $,
            x: b,
            y: N,
            width: t,
            height: t,
            fill: o[0]
          }, [Math.random() > 0.6 && e("animate", {
            attributeName: "fill",
            values: `${o[0]};transparent`,
            dur: "1s",
            begin: Math.random() * 2,
            repeatCount: "indefinite"
          }, null)]) : null;
        }), e("rect", {
          fill: o[1],
          x: i[0] - t,
          y: i[1] - t,
          width: t * 2,
          height: t * 2
        }, [e("animate", {
          attributeName: "width",
          values: `0;${t * 2}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null), e("animate", {
          attributeName: "height",
          values: `0;${t * 2}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null), e("animate", {
          attributeName: "x",
          values: `${i[0]};${i[0] - t}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null), e("animate", {
          attributeName: "y",
          values: `${i[1]};${i[1] - t}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null)]), e("rect", {
          fill: o[1],
          x: r[0] - t,
          y: r[1] - t,
          width: t * 2,
          height: t * 2
        }, [e("animate", {
          attributeName: "width",
          values: "0;40;0",
          dur: "2s",
          repeatCount: "indefinite"
        }, null), e("animate", {
          attributeName: "x",
          values: `${r[0]};${r[0] - 40};${r[0]}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null)])])]
      });
    };
  }
}));
export {
  V as Decoration1
};
