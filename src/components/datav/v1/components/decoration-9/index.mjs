var $ = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var f = (o, t, r) => t in o ? $(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, a = (o, t) => {
  for (var r in t || (t = {}))
    b.call(t, r) && f(o, r, t[r]);
  if (d)
    for (var r of d(t))
      D.call(t, r) && f(o, r, t[r]);
  return o;
};
import { defineComponent as N, createVNode as e } from "vue";
import { fade as p } from "@jiaminghi/color";
import { useResize as S } from "../../hooks/useResize.mjs";
import { useUuid as T } from "../../hooks/useUuid.mjs";
import { withInstall as _, mergeColor as z } from "../../utils/common.mjs";
import { createColorProps as P, createDurationProps as I } from "../../utils/decoration.mjs";
import { styled as L } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
function R() {
  return a(a({}, P()), I(3));
}
const s = ["rgba(3, 166, 224, 0.8)", "rgba(3, 166, 224, 0.5)"], m = 100, g = 100, j = L.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.__STYLED__ svg.svg-origin {
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: left top;
`("decoration-9"), J = /* @__PURE__ */ _(N({
  name: "Decoration9",
  props: R(),
  setup(o, {
    slots: t,
    expose: r
  }) {
    const {
      autoBindRef: h,
      refreshLayoutSize: y,
      domSize: k
    } = S();
    r({
      refreshLayoutSize: y
    });
    const l = `decoration-9-polygon-${T().id}`;
    return () => {
      const {
        width: v,
        height: w
      } = k, {
        color: x,
        duration: i
      } = o, n = z(s, x), C = {
        transform: `scale(${v / m},${w / g})`
      };
      return e(j, {
        ref: h
      }, {
        default: () => {
          var c;
          return [e("svg", {
            class: "svg-origin",
            width: m,
            height: g,
            style: C
          }, [e("defs", null, [e("polygon", {
            id: l,
            points: "15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"
          }, null)]), e("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "transparent",
            stroke: n[1],
            "stroke-width": "10",
            "stroke-dasharray": "80, 100, 30, 100"
          }, [e("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 50 50;360 50 50",
            dur: `${i}s`,
            repeatCount: "indefinite"
          }, null)]), e("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "transparent",
            stroke: n[0],
            "stroke-width": "6",
            "stroke-dasharray": "50, 66, 100, 66"
          }, [e("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 50 50;-360 50 50",
            dur: `${i}s`,
            repeatCount: "indefinite"
          }, null)]), e("circle", {
            cx: "50",
            cy: "50",
            r: "38",
            fill: "transparent",
            stroke: p(n[1] || s[1], 30),
            "stroke-width": "1",
            "stroke-dasharray": "5, 1"
          }, null), new Array(20).fill(0).map((B, u) => e("use", {
            key: u,
            "xlink:href": `#${l}`,
            stroke: n[1],
            fill: Math.random() > 0.4 ? "transparent" : n[0]
          }, [e("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 50 50;360 50 50",
            dur: `${i}s`,
            begin: `${u * i / 20}s`,
            repeatCount: "indefinite"
          }, null)])), e("circle", {
            cx: "50",
            cy: "50",
            r: "26",
            fill: "transparent",
            stroke: p(n[1] || s[1], 30),
            "stroke-width": "1",
            "stroke-dasharray": "5, 1"
          }, null)]), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    };
  }
}));
export {
  J as Decoration9
};
