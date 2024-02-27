import { defineComponent as a, createVNode as t } from "vue";
import { useResize as d } from "../../hooks/useResize.mjs";
import { withInstall as f, mergeColor as c } from "../../utils/common.mjs";
import { createColorProps as m } from "../../utils/decoration.mjs";
import { styled as h } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const u = h.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-7"), g = ["#1dc1f5", "#1dc1f5"], z = /* @__PURE__ */ f(a({
  name: "Decoration7",
  props: m(),
  setup(n, {
    slots: o,
    expose: i
  }) {
    const {
      autoBindRef: l,
      refreshLayoutSize: p
    } = d();
    return i({
      refreshLayoutSize: p
    }), () => {
      const {
        color: s
      } = n, e = c(g, s);
      return t(u, {
        ref: l
      }, {
        default: () => {
          var r;
          return [t("svg", {
            width: "21px",
            height: "20px"
          }, [t("polyline", {
            "stroke-width": "4",
            fill: "transparent",
            stroke: e[0],
            points: "10, 0 19, 10 10, 20"
          }, null), t("polyline", {
            "stroke-width": "2",
            fill: "transparent",
            stroke: e[1],
            points: "2, 0 11, 10 2, 20"
          }, null)]), (r = o.default) == null ? void 0 : r.call(o), t("svg", {
            width: "21px",
            height: "20px"
          }, [t("polyline", {
            "stroke-width": "4",
            fill: "transparent",
            stroke: e[0],
            points: "11, 0 2, 10 11, 20"
          }, null), t("polyline", {
            "stroke-width": "2",
            fill: "transparent",
            stroke: e[1],
            points: "19, 0 10, 10 19, 20"
          }, null)])];
        }
      });
    };
  }
}));
export {
  z as Decoration7
};
