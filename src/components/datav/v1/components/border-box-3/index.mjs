import { defineComponent as u, createVNode as t } from "vue";
import { useResize as f } from "../../hooks/useResize.mjs";
import { createBorderBoxCommonProps as c, mergeColor as k } from "../../utils/borderBox.mjs";
import { withInstall as B } from "../../utils/common.mjs";
import { styled as l } from "../../utils/styled.mjs";
import { BorderBoxContainer as w, BorderBoxContent as _ } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const g = ["#2862b7", "#2862b7"], C = l.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
}
.__STYLED__ .stroke-width-1 {
  stroke-width: 1;
}
.__STYLED__ .stroke-width-3 {
  stroke-width: 3;
`("border-svg-container"), E = /* @__PURE__ */ B(u({
  name: "BorderBox3",
  props: c(),
  setup(s, {
    slots: i,
    expose: d
  }) {
    const {
      autoBindRef: p,
      refreshLayoutSize: a,
      domSize: m
    } = f();
    return d({
      refreshLayoutSize: a
    }), () => {
      const {
        color: $,
        backgroundColor: h
      } = s, {
        width: o,
        height: e
      } = m, r = k(g, $);
      return t(w, {
        class: l.getClassNameForBind("border-box-3"),
        ref: p
      }, {
        default: () => [t(C, {
          width: o,
          height: e
        }, {
          default: () => [t("polygon", {
            fill: h,
            points: `23, 23 ${o - 24}, 23 ${o - 24}, ${e - 24} 23, ${e - 24}`
          }, null), t("polyline", {
            class: "stroke-width-3",
            stroke: r[0],
            points: `4, 4 ${o - 22} ,4 ${o - 22}, ${e - 22} 4, ${e - 22} 4, 4`
          }, null), t("polyline", {
            class: "stroke-width-1",
            stroke: r[1],
            points: `10, 10 ${o - 16}, 10 ${o - 16}, ${e - 16} 10, ${e - 16} 10, 10`
          }, null), t("polyline", {
            class: "stroke-width-1",
            stroke: r[1],
            points: `16, 16 ${o - 10}, 16 ${o - 10}, ${e - 10} 16, ${e - 10} 16, 16`
          }, null), t("polyline", {
            class: "stroke-width-1",
            stroke: r[1],
            points: `22, 22 ${o - 4}, 22 ${o - 4}, ${e - 4} 22, ${e - 4} 22, 22`
          }, null)]
        }), t(_, null, {
          default: () => {
            var n;
            return [(n = i.default) == null ? void 0 : n.call(i)];
          }
        })]
      });
    };
  }
}));
export {
  E as BorderBox3
};
