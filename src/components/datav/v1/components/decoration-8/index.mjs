var $ = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var f = (e, o, t) => o in e ? $(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    w.call(o, t) && f(e, t, o[t]);
  if (c)
    for (var t of c(o))
      g.call(o, t) && f(e, t, o[t]);
  return e;
};
import { defineComponent as k, createVNode as i } from "vue";
import { useResize as y } from "../../hooks/useResize.mjs";
import { withInstall as C, mergeColor as v } from "../../utils/common.mjs";
import { createColorProps as D, createReverseProps as P } from "../../utils/decoration.mjs";
import { styled as x } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const z = ["#3f96a5", "#3f96a5"];
function R() {
  return a(a({}, D()), P());
}
const S = x.div`
  display: flex;
  width: 100%;
  height: 100%;
`("decoration-8"), A = /* @__PURE__ */ C(k({
  name: "Decoration8",
  props: R(),
  setup(e, {
    expose: o
  }) {
    const {
      autoBindRef: t,
      refreshLayoutSize: d,
      domSize: m
    } = y();
    return o({
      refreshLayoutSize: d
    }), () => {
      const {
        color: u,
        reverse: h
      } = e, {
        width: s,
        height: n
      } = m, r = (p) => h ? s - p : p, l = v(z, u);
      return i(S, {
        ref: t
      }, {
        default: () => [i("svg", {
          width: s,
          height: n
        }, [i("polyline", {
          stroke: l[0],
          "stroke-width": "2",
          fill: "transparent",
          points: `${r(0)}, 0 ${r(30)}, ${n / 2}`
        }, null), i("polyline", {
          stroke: l[0],
          "stroke-width": "2",
          fill: "transparent",
          points: `${r(20)}, 0 ${r(50)}, ${n / 2} ${r(s)}, ${n / 2}`
        }, null), i("polyline", {
          stroke: l[1],
          fill: "transparent",
          "stroke-width": "3",
          points: `${r(0)}, ${n - 3}, ${r(200)}, ${n - 3}`
        }, null)])]
      });
    };
  }
}));
export {
  A as Decoration8
};
