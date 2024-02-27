var m = Object.defineProperty, h = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var l = (o, t, e) => t in o ? m(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, s = (o, t) => {
  for (var e in t || (t = {}))
    x.call(t, e) && l(o, e, t[e]);
  if (n)
    for (var e of n(t))
      g.call(t, e) && l(o, e, t[e]);
  return o;
}, p = (o, t) => h(o, u(t));
import { defineComponent as y, createVNode as r } from "vue";
import { useResize as k } from "../../hooks/useResize.mjs";
import { withInstall as w, mergeColor as b } from "../../utils/common.mjs";
import { createColorProps as C } from "../../utils/decoration.mjs";
import { styled as z } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const v = z.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-7"), B = ["#1dc1f5", "#1dc1f5"], D = () => p(s({}, C()), {
  title: {
    type: String,
    default: ""
  }
}), q = /* @__PURE__ */ w(y({
  name: "Decoration7",
  props: D(),
  setup(o, {
    slots: t,
    expose: e
  }) {
    const {
      autoBindRef: d,
      refreshLayoutSize: a
    } = k();
    return e({
      refreshLayoutSize: a
    }), () => {
      const {
        color: f,
        title: c
      } = o, i = b(B, f);
      return r(v, {
        ref: d
      }, {
        default: () => [r("svg", {
          width: "21px",
          height: "20px"
        }, [r("polyline", {
          "stroke-width": "4",
          fill: "transparent",
          stroke: i[0],
          points: "10, 0 19, 10 10, 20"
        }, null), r("polyline", {
          "stroke-width": "2",
          fill: "transparent",
          stroke: i[1],
          points: "2, 0 11, 10 2, 20"
        }, null)]), r("text", {
          class: "dv-border-box-11-title",
          y: "32",
          fill: "#fff",
          "font-size": "18",
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          style: "color: #fff; font-size: 18px; padding: 0 10px; box-sizing: border-box;"
        }, [c]), r("svg", {
          width: "21px",
          height: "20px"
        }, [r("polyline", {
          "stroke-width": "4",
          fill: "transparent",
          stroke: i[0],
          points: "11, 0 2, 10 11, 20"
        }, null), r("polyline", {
          "stroke-width": "2",
          fill: "transparent",
          stroke: i[1],
          points: "19, 0 10, 10 19, 20"
        }, null)])]
      });
    };
  }
}));
export {
  q as Decoration7
};
