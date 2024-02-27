import { defineComponent as c, createVNode as e } from "vue";
import { useResize as k } from "../../hooks/useResize.mjs";
import { createBorderBoxCommonProps as m, mergeColor as f } from "../../utils/borderBox.mjs";
import { withInstall as w } from "../../utils/common.mjs";
import { styled as i } from "../../utils/styled.mjs";
import { BorderBoxContainer as x, BorderBoxContent as g } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const B = ["rgba(128,128,128,0.3)", "rgba(128,128,128,0.5)"], y = i.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-linecap: round;
}
.__STYLED__ .stroke-width2 {
  stroke-width: 2px;
}
.__STYLED__ .stroke-width5 {
  stroke-width: 5px;
`("border-svg-container"), E = /* @__PURE__ */ w(c({
  name: "BorderBox7",
  props: m(),
  setup(n, {
    slots: l,
    expose: d
  }) {
    const {
      autoBindRef: p,
      refreshLayoutSize: a,
      domSize: $
    } = k();
    return d({
      refreshLayoutSize: a
    }), () => {
      const {
        color: h,
        backgroundColor: u
      } = n, {
        width: o,
        height: t
      } = $, r = f(B, h);
      return e(x, {
        class: i.getClassNameForBind("border-box-7"),
        ref: p,
        style: {
          boxShadow: `inset 0 0 40px ${r[0]}`,
          border: `1px solid ${r[0]}`,
          backgroundColor: u
        }
      }, {
        default: () => [e(y, {
          width: o,
          height: t
        }, {
          default: () => [e("polyline", {
            class: "stroke-width2",
            stroke: r[0],
            points: "0, 25 0, 0 25, 0"
          }, null), e("polyline", {
            class: "stroke-width2",
            stroke: r[0],
            points: `${o - 25}, 0 ${o}, 0 ${o}, 25`
          }, null), e("polyline", {
            class: "stroke-width2",
            stroke: r[0],
            points: `${o - 25}, ${t} ${o}, ${t} ${o}, ${t - 25}`
          }, null), e("polyline", {
            class: "stroke-width2",
            stroke: r[0],
            points: `0, ${t - 25} 0, ${t} 25, ${t}`
          }, null), e("polyline", {
            class: "stroke-width5",
            stroke: r[1],
            points: "0, 10 0, 0 10, 0"
          }, null), e("polyline", {
            class: "stroke-width5",
            stroke: r[1],
            points: `${o - 10}, 0 ${o}, 0 ${o}, 10`
          }, null), e("polyline", {
            class: "stroke-width5",
            stroke: r[1],
            points: `${o - 10}, ${t} ${o}, ${t} ${o}, ${t - 10}`
          }, null), e("polyline", {
            class: "stroke-width5",
            stroke: r[1],
            points: `0, ${t - 10} 0, ${t} 10, ${t}`
          }, null)]
        }), e(g, null, {
          default: () => {
            var s;
            return [(s = l.default) == null ? void 0 : s.call(l)];
          }
        })]
      });
    };
  }
}));
export {
  E as BorderBox7
};
