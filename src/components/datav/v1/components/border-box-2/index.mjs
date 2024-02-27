import { defineComponent as a, createVNode as o } from "vue";
import { useResize as x } from "../../hooks/useResize.mjs";
import { createBorderBoxCommonProps as B, mergeColor as g } from "../../utils/borderBox.mjs";
import { withInstall as h } from "../../utils/common.mjs";
import { styled as i } from "../../utils/styled.mjs";
import { BorderBoxContainer as $, BorderBoxContent as y } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const C = ["#fff", "rgba(255, 255, 255, 0.6)"], b = i.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-width: 1;
`("border-svg-container"), R = /* @__PURE__ */ h(a({
  name: "BorderBox2",
  props: B(),
  setup(c, {
    slots: t,
    expose: d
  }) {
    const {
      autoBindRef: f,
      refreshLayoutSize: p,
      domSize: m
    } = x();
    return d({
      refreshLayoutSize: p
    }), () => {
      const {
        color: s,
        backgroundColor: u
      } = c, {
        width: r,
        height: e
      } = m, l = g(C, s);
      return o($, {
        class: i.getClassNameForBind("border-box-2"),
        ref: f
      }, {
        default: () => [o(b, {
          width: r,
          height: e
        }, {
          default: () => [o("polygon", {
            fill: u,
            points: `7, 7 ${r - 7}, 7 ${r - 7}, ${e - 7} 7, ${e - 7}`
          }, null), o("polyline", {
            stroke: l[0],
            points: `2, 2 ${r - 2} ,2 ${r - 2}, ${e - 2} 2, ${e - 2} 2, 2`
          }, null), o("polyline", {
            stroke: l[1],
            points: `6, 6 ${r - 6}, 6 ${r - 6}, ${e - 6} 6, ${e - 6} 6, 6`
          }, null), o("circle", {
            fill: l[0],
            cx: "11",
            cy: "11",
            r: "1"
          }, null), o("circle", {
            fill: l[0],
            cx: r - 11,
            cy: "11",
            r: "1"
          }, null), o("circle", {
            fill: l[0],
            cx: r - 11,
            cy: e - 11,
            r: "1"
          }, null), o("circle", {
            fill: l[0],
            cx: "11",
            cy: e - 11,
            r: "1"
          }, null)]
        }), o(y, null, {
          default: () => {
            var n;
            return [(n = t.default) == null ? void 0 : n.call(t)];
          }
        })]
      });
    };
  }
}));
export {
  R as BorderBox2
};
