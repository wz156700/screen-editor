var x = Object.defineProperty, C = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var a = (l, e, n) => e in l ? x(l, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[e] = n, d = (l, e) => {
  for (var n in e || (e = {}))
    k.call(e, n) && a(l, n, e[n]);
  if (f)
    for (var n of f(e))
      z.call(e, n) && a(l, n, e[n]);
  return l;
}, $ = (l, e) => C(l, b(e));
import { defineComponent as v, createVNode as r } from "vue";
import { fade as p } from "@jiaminghi/color";
import { useResize as w } from "../../hooks/useResize.mjs";
import { withInstall as D, mergeColor as B } from "../../utils/common.mjs";
import { createColorProps as S } from "../../utils/decoration.mjs";
import { styled as c } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const P = c.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-11"), R = c.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"), s = ["#1a98fc", "#2cf7fe"], j = () => $(d({}, S()), {
  title: {
    type: String,
    default: ""
  }
}), H = /* @__PURE__ */ D(v({
  name: "Decoration11",
  props: j(),
  setup(l, {
    slots: e,
    expose: n
  }) {
    const {
      autoBindRef: m,
      refreshLayoutSize: u,
      domSize: g
    } = w();
    return n({
      refreshLayoutSize: u
    }), () => {
      const {
        width: t,
        height: o
      } = g, {
        color: h,
        title: y
      } = l, i = B(s, h);
      return r(P, {
        ref: m
      }, {
        default: () => [r("svg", {
          width: t,
          height: o
        }, [r("polygon", {
          fill: p(i[1] || s[1], 10),
          stroke: i[1],
          points: "20 10, 25 4, 55 4 60 10"
        }, null), r("polygon", {
          fill: p(i[1] || s[1], 10),
          stroke: i[1],
          points: `20 ${o - 10}, 25 ${o - 4}, 55 ${o - 4} 60 ${o - 10}`
        }, null), r("polygon", {
          fill: p(i[1] || s[1], 10),
          stroke: i[1],
          points: `${t - 20} 10, ${t - 25} 4, ${t - 55} 4 ${t - 60} 10`
        }, null), r("polygon", {
          fill: p(i[1] || s[1], 10),
          stroke: i[1],
          points: `${t - 20} ${o - 10}, ${t - 25} ${o - 4}, ${t - 55} ${o - 4} ${t - 60} ${o - 10}`
        }, null), r("polygon", {
          fill: p(i[0] || s[0], 20),
          stroke: i[0],
          points: `
        20 10, 5 ${o / 2} 20 ${o - 10}
        ${t - 20} ${o - 10} ${t - 5} ${o / 2} ${t - 20} 10
      `
        }, null), r("polyline", {
          fill: "transparent",
          stroke: p(i[0] || s[0], 70),
          points: `25 18, 15 ${o / 2} 25 ${o - 18}`
        }, null), r("polyline", {
          fill: "transparent",
          stroke: p(i[0] || s[0], 70),
          points: `${t - 25} 18, ${t - 15} ${o / 2} ${t - 25} ${o - 18}`
        }, null)]), r(R, null, {
          default: () => [r("text", {
            class: "dv-border-box-11-title",
            y: "32",
            fill: "#fff",
            "font-size": "18",
            "text-anchor": "middle",
            "dominant-baseline": "middle",
            style: "color: #fff; font-size: 18px; padding: 0 10px; box-sizing: border-box;"
          }, [y])]
        })]
      });
    };
  }
}));
export {
  H as Decoration11
};
