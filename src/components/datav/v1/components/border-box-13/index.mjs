import { defineComponent as L, createVNode as e } from "vue";
import { useResize as h } from "../../hooks/useResize.mjs";
import { createBorderBoxCommonProps as c, mergeColor as B } from "../../utils/borderBox.mjs";
import { withInstall as $ } from "../../utils/common.mjs";
import { styled as i } from "../../utils/styled.mjs";
import { BorderBoxContainer as g, BorderBoxContent as C } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const x = ["#6586ec", "#2cf7fe"], k = i.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`("border-svg-container"), R = /* @__PURE__ */ $(L({
  name: "BorderBox13",
  props: c(),
  setup(l, {
    slots: n,
    expose: d
  }) {
    const {
      autoBindRef: p,
      refreshLayoutSize: s,
      domSize: f
    } = h();
    return d({
      refreshLayoutSize: s
    }), () => {
      const {
        color: m,
        backgroundColor: u
      } = l, {
        width: o,
        height: r
      } = f, t = B(x, m);
      return e(g, {
        class: i.getClassNameForBind("border-box-13"),
        ref: p
      }, {
        default: () => [e(k, {
          width: o,
          height: r
        }, {
          default: () => [e("path", {
            fill: u,
            stroke: t[0],
            d: `
                  M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                  L ${o - 20} 10 L ${o - 5} 25
                  L ${o - 5} ${r - 5} L 20 ${r - 5}
                  L 5 ${r - 20} L 5 20
                `
          }, null), e("path", {
            fill: "transparent",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-dasharray": "10, 5",
            stroke: t[0],
            d: "M 16 9 L 61 9"
          }, null), e("path", {
            fill: "transparent",
            stroke: t[1],
            d: "M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"
          }, null), e("path", {
            fill: "transparent",
            stroke: t[1],
            d: `M ${o - 5} ${r - 30} L ${o - 5} ${r - 5} L ${o - 30} ${r - 5}`
          }, null)]
        }), e(C, null, {
          default: () => {
            var a;
            return [(a = n.default) == null ? void 0 : a.call(n)];
          }
        })]
      });
    };
  }
}));
export {
  R as BorderBox13
};
