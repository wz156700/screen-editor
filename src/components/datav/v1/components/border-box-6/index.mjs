import { defineComponent as m, createVNode as o } from "vue";
import { useResize as a } from "../../hooks/useResize.mjs";
import { createBorderBoxCommonProps as y, mergeColor as k } from "../../utils/borderBox.mjs";
import { withInstall as g } from "../../utils/common.mjs";
import { styled as i } from "../../utils/styled.mjs";
import { BorderBoxContainer as x, BorderBoxContent as B } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const h = ["rgba(255, 255, 255, 0.35)", "gray"], C = i.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-width: 1;
`("border-svg-container"), R = /* @__PURE__ */ g(m({
  name: "BorderBox6",
  props: y(),
  setup(p, {
    slots: n,
    expose: s
  }) {
    const {
      autoBindRef: u,
      refreshLayoutSize: c,
      domSize: $
    } = a();
    return s({
      refreshLayoutSize: c
    }), () => {
      const {
        color: d,
        backgroundColor: f
      } = p, {
        width: l,
        height: e
      } = $, r = k(h, d);
      return o(x, {
        class: i.getClassNameForBind("border-box-6"),
        ref: u
      }, {
        default: () => [o(C, {
          width: l,
          height: e
        }, {
          default: () => [o("polygon", {
            fill: f,
            points: `
              9, 7 ${l - 9}, 7 ${l - 9}, ${e - 7} 9, ${e - 7}`
          }, null), o("circle", {
            fill: r[1],
            cx: "5",
            cy: "5",
            r: "2"
          }, null), o("circle", {
            fill: r[1],
            cx: l - 5,
            cy: "5",
            r: "2"
          }, null), o("circle", {
            fill: r[1],
            cx: l - 5,
            cy: e - 5,
            r: "2"
          }, null), o("circle", {
            fill: r[1],
            cx: "5",
            cy: e - 5,
            r: "2"
          }, null), o("polyline", {
            stroke: r[0],
            points: `10, 4 ${l - 10}, 4`
          }, null), o("polyline", {
            stroke: r[0],
            points: `10, ${e - 4} ${l - 10}, ${e - 4}`
          }, null), o("polyline", {
            stroke: r[0],
            points: `5, 70 5, ${e - 70}`
          }, null), o("polyline", {
            stroke: r[0],
            points: `${l - 5}, 70 ${l - 5}, ${e - 70}`
          }, null), o("polyline", {
            stroke: r[0],
            points: "3, 10, 3, 50"
          }, null), o("polyline", {
            stroke: r[0],
            points: "7, 30 7, 80"
          }, null), o("polyline", {
            stroke: r[0],
            points: `${l - 3}, 10 ${l - 3}, 50`
          }, null), o("polyline", {
            stroke: r[0],
            points: `${l - 7}, 30 ${l - 7}, 80`
          }, null), o("polyline", {
            stroke: r[0],
            points: `3, ${e - 10} 3, ${e - 50}`
          }, null), o("polyline", {
            stroke: r[0],
            points: `7, ${e - 30} 7, ${e - 80}`
          }, null), o("polyline", {
            stroke: r[0],
            points: `${l - 3}, ${e - 10} ${l - 3}, ${e - 50}`
          }, null), o("polyline", {
            stroke: r[0],
            points: `${l - 7}, ${e - 30} ${l - 7}, ${e - 80}`
          }, null)]
        }), o(B, null, {
          default: () => {
            var t;
            return [(t = n.default) == null ? void 0 : t.call(n)];
          }
        })]
      });
    };
  }
}));
export {
  R as BorderBox6
};
