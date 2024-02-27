import { defineComponent as v, createVNode as r } from "vue";
import { useResize as C } from "../../hooks/useResize.mjs";
import { withInstall as S, mergeColor as _ } from "../../utils/common.mjs";
import { createColorProps as P } from "../../utils/decoration.mjs";
import { styled as z } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
function D({
  width: i,
  height: a,
  rowPoints: o,
  rowCount: e
}) {
  const s = i / (o + 1), c = a / (e + 1);
  return new Array(e).fill(0).map((n, t) => new Array(o).fill(0).map((l, m) => [s * (m + 1), c * (t + 1)])).reduce((n, t) => [...n, ...t], []);
}
const L = ["#7acaec", "transparent"], d = 300, h = 35, M = 25, x = 2, f = 7, p = f / 2, $ = D({
  width: d,
  height: h,
  rowPoints: M,
  rowCount: x
}), b = z.div`
  width: 100%;
  height: 100%;
}
.__STYLED__ svg {
  transform-origin: left top;
`("decoration-3"), E = /* @__PURE__ */ S(v({
  name: "Decoration3",
  props: P(),
  setup(i, {
    expose: a
  }) {
    const {
      autoBindRef: o,
      refreshLayoutSize: e,
      domSize: s
    } = C();
    return a({
      refreshLayoutSize: e
    }), () => {
      const {
        width: c,
        height: n
      } = s, {
        color: t
      } = i, l = _(L, t);
      return r(b, {
        ref: o
      }, {
        default: () => [r("svg", {
          width: d,
          height: h,
          style: {
            transform: `scale(${c / d},${n / h})`
          }
        }, [$.map(([m, u], g) => {
          const w = m - p, y = u - p;
          return Math.random() > 0.6 ? r("rect", {
            key: g,
            x: w,
            y,
            width: f,
            height: f,
            fill: l[0]
          }, [Math.random() > 0.6 && r("animate", {
            attributeName: "fill",
            values: l.join(";"),
            dur: `${Math.random() + 1}s`,
            begin: Math.random() * 2,
            repeatCount: "indefinite"
          }, null)]) : null;
        })])]
      });
    };
  }
}));
export {
  E as Decoration3
};
