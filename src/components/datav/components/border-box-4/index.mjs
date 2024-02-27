var $ = Object.defineProperty, _ = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var a = (s, o, r) => o in s ? $(s, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[o] = r, d = (s, o) => {
  for (var r in o || (o = {}))
    g.call(o, r) && a(s, r, o[r]);
  if (p)
    for (var r of p(o))
      x.call(o, r) && a(s, r, o[r]);
  return s;
}, k = (s, o) => _(s, B(o));
import { defineComponent as C, createVNode as e } from "vue";
import b from "classnames";
import { useResize as S } from "../../hooks/useResize.mjs";
import { mergeColor as v, createBorderBoxCommonProps as D } from "../../utils/borderBox.mjs";
import { withInstall as L } from "../../utils/common.mjs";
import { styled as c } from "../../utils/styled.mjs";
import { BorderBoxContainer as E, BorderBoxContent as T } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const Y = ["red", "rgba(0,0,255,0.8)"], z = c.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
}
.__STYLED__.reverse {
  transform: rotate(180deg);
}
.__STYLED__ .stroke-width1 {
  stroke-width: 1;
}
.__STYLED__ .stroke-width3 {
  stroke-width: 3px;
  stroke-linecap: round;
`("border-svg-container"), N = () => k(d({}, D()), {
  reverse: {
    type: Boolean,
    default: !1
  }
}), J = /* @__PURE__ */ L(C({
  name: "BorderBox4",
  props: N(),
  setup(s, {
    slots: o,
    expose: r
  }) {
    const {
      autoBindRef: h,
      refreshLayoutSize: u,
      domSize: m
    } = S();
    return r({
      refreshLayoutSize: u
    }), () => {
      const {
        color: f,
        backgroundColor: y,
        reverse: w
      } = s, {
        width: n,
        height: t
      } = m, l = v(Y, f);
      return e(E, {
        class: c.getClassNameForBind("border-box-4"),
        ref: h
      }, {
        default: () => [e(z, {
          class: b({
            reverse: w
          }),
          width: n,
          height: t
        }, {
          default: () => [e("polygon", {
            fill: y,
            points: `${n - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                16, 42 16, ${t - 32} 41, ${t - 7} ${n - 15}, ${t - 7}`
          }, null), e("polyline", {
            class: "stroke-width1",
            stroke: l[0],
            points: `145, ${t - 5} 40, ${t - 5} 10, ${t - 35} 10, 40 40, 5 150, 5 170, 20 ${n - 15}, 20`
          }, null), e("polyline", {
            stroke: l[1],
            class: "stroke-width1",
            points: `245, ${t - 1} 36, ${t - 1} 14, ${t - 23} 14, ${t - 100}`
          }, null), e("polyline", {
            class: "stroke-width3",
            stroke: l[0],
            points: `7, ${t - 40} 7, ${t - 75}`
          }, null), e("polyline", {
            class: "stroke-width3",
            stroke: l[0],
            points: "28, 24 13, 41 13, 64"
          }, null), e("polyline", {
            class: "stroke-width1",
            stroke: l[0],
            points: "5, 45 5, 140"
          }, null), e("polyline", {
            class: "stroke-width1",
            stroke: l[1],
            points: "14, 75 14, 180"
          }, null), e("polyline", {
            class: "stroke-width1",
            stroke: l[1],
            points: "55, 11 147, 11 167, 26 250, 26"
          }, null), e("polyline", {
            class: "stroke-width3",
            stroke: l[1],
            points: "158, 5 173, 16"
          }, null), e("polyline", {
            class: "stroke-width3",
            style: {
              strokeDasharray: "100 250"
            },
            stroke: l[0],
            points: `200, 17 ${n - 10}, 17`
          }, null), e("polyline", {
            class: "stroke-width1",
            style: {
              strokeDasharray: "80 270"
            },
            stroke: l[1],
            points: `385, 17 ${n - 10}, 17`
          }, null)]
        }), e(T, null, {
          default: () => {
            var i;
            return [(i = o.default) == null ? void 0 : i.call(o)];
          }
        })]
      });
    };
  }
}));
export {
  J as BorderBox4
};
