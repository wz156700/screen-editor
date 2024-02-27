import { defineComponent as u, createVNode as n } from "vue";
import { fade as l } from "@jiaminghi/color";
import { useResize as h } from "../../hooks/useResize.mjs";
import { withInstall as g, mergeColor as y } from "../../utils/common.mjs";
import { createColorProps as C } from "../../utils/decoration.mjs";
import { styled as s } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const k = s.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-11"), w = s.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`("decoration-content"), i = ["#1a98fc", "#2cf7fe"], B = /* @__PURE__ */ g(u({
  name: "Decoration11",
  props: C(),
  setup($, {
    slots: r,
    expose: a
  }) {
    const {
      autoBindRef: f,
      refreshLayoutSize: c,
      domSize: d
    } = h();
    return a({
      refreshLayoutSize: c
    }), () => {
      const {
        width: t,
        height: o
      } = d, {
        color: m
      } = $, e = y(i, m);
      return n(k, {
        ref: f
      }, {
        default: () => [n("svg", {
          width: t,
          height: o
        }, [n("polygon", {
          fill: l(e[1] || i[1], 10),
          stroke: e[1],
          points: "20 10, 25 4, 55 4 60 10"
        }, null), n("polygon", {
          fill: l(e[1] || i[1], 10),
          stroke: e[1],
          points: `20 ${o - 10}, 25 ${o - 4}, 55 ${o - 4} 60 ${o - 10}`
        }, null), n("polygon", {
          fill: l(e[1] || i[1], 10),
          stroke: e[1],
          points: `${t - 20} 10, ${t - 25} 4, ${t - 55} 4 ${t - 60} 10`
        }, null), n("polygon", {
          fill: l(e[1] || i[1], 10),
          stroke: e[1],
          points: `${t - 20} ${o - 10}, ${t - 25} ${o - 4}, ${t - 55} ${o - 4} ${t - 60} ${o - 10}`
        }, null), n("polygon", {
          fill: l(e[0] || i[0], 20),
          stroke: e[0],
          points: `
        20 10, 5 ${o / 2} 20 ${o - 10}
        ${t - 20} ${o - 10} ${t - 5} ${o / 2} ${t - 20} 10
      `
        }, null), n("polyline", {
          fill: "transparent",
          stroke: l(e[0] || i[0], 70),
          points: `25 18, 15 ${o / 2} 25 ${o - 18}`
        }, null), n("polyline", {
          fill: "transparent",
          stroke: l(e[0] || i[0], 70),
          points: `${t - 25} 18, ${t - 15} ${o / 2} ${t - 25} ${o - 18}`
        }, null)]), n(w, null, {
          default: () => {
            var p;
            return [(p = r.default) == null ? void 0 : p.call(r)];
          }
        })]
      });
    };
  }
}));
export {
  B as Decoration11
};
