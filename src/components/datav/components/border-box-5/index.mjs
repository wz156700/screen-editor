var w = Object.defineProperty, B = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var p = (s, o, t) => o in s ? w(s, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[o] = t, a = (s, o) => {
  for (var t in o || (o = {}))
    x.call(o, t) && p(s, t, o[t]);
  if (d)
    for (var t of d(o))
      y.call(o, t) && p(s, t, o[t]);
  return s;
}, $ = (s, o) => B(s, g(o));
import { defineComponent as C, createVNode as l } from "vue";
import b from "classnames";
import { useResize as S } from "../../hooks/useResize.mjs";
import { mergeColor as v, createBorderBoxCommonProps as L } from "../../utils/borderBox.mjs";
import { withInstall as D } from "../../utils/common.mjs";
import { styled as m } from "../../utils/styled.mjs";
import { BorderBoxContainer as E, BorderBoxContent as T } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const Y = ["rgba(255, 255, 255, 0.35)", "rgba(255, 255, 255, 0.20)"], z = m.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
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
.__STYLED__ .stroke-width2 {
  stroke-width: 2px;
}
.__STYLED__ .stroke-width5 {
  stroke-width: 5px;
`("border-svg-container"), N = () => $(a({}, L()), {
  reverse: {
    type: Boolean,
    default: !1
  }
}), J = /* @__PURE__ */ D(C({
  name: "BorderBox5",
  props: N(),
  setup(s, {
    slots: o,
    expose: t
  }) {
    const {
      autoBindRef: h,
      refreshLayoutSize: c,
      domSize: f
    } = S();
    return t({
      refreshLayoutSize: c
    }), () => {
      const {
        color: u,
        backgroundColor: _,
        reverse: k
      } = s, {
        width: e,
        height: r
      } = f, i = v(Y, u);
      return l(E, {
        class: m.getClassNameForBind("border-box-5"),
        ref: h
      }, {
        default: () => [l(z, {
          class: b({
            reverse: k
          }),
          width: e,
          height: r
        }, {
          default: () => [l("polygon", {
            fill: _,
            points: `
                  10, 22 ${e - 22}, 22 ${e - 22}, ${r - 86} ${e - 84}, ${r - 24} 10, ${r - 24}`
          }, null), l("polyline", {
            class: "stroke-width1",
            stroke: i[0],
            points: `8, 5 ${e - 5}, 5 ${e - 5}, ${r - 100}
                  ${e - 100}, ${r - 5} 8, ${r - 5} 8, 5`
          }, null), l("polyline", {
            class: "stroke-width1",
            stroke: i[1],
            points: `3, 5 ${e - 20}, 5 ${e - 20}, ${r - 60}
                  ${e - 74}, ${r - 5} 3, ${r - 5} 3, 5`
          }, null), l("polyline", {
            class: "stroke-width5",
            stroke: i[1],
            points: `50, 13 ${e - 35}, 13`
          }, null), l("polyline", {
            class: "stroke-width2",
            stroke: i[1],
            points: `15, 20 ${e - 35}, 20`
          }, null), l("polyline", {
            class: "stroke-width2",
            stroke: i[1],
            points: `15, ${r - 20} ${e - 110}, ${r - 20}`
          }, null), l("polyline", {
            class: "stroke-width5",
            stroke: i[1],
            points: `15, ${r - 13} ${e - 110}, ${r - 13}`
          }, null)]
        }), l(T, null, {
          default: () => {
            var n;
            return [(n = o.default) == null ? void 0 : n.call(o)];
          }
        })]
      });
    };
  }
}));
export {
  J as BorderBox5
};
