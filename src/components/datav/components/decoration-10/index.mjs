import { defineComponent as g, createVNode as i } from "vue";
import { useResize as y } from "../../hooks/useResize.mjs";
import { useUuid as k } from "../../hooks/useUuid.mjs";
import { withInstall as z, mergeColor as v } from "../../utils/common.mjs";
import { createColorProps as N } from "../../utils/decoration.mjs";
import { styled as w } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const I = w.div`
  width: 100%;
  height: 100%;
  display: flex;
`("decoration-10"), x = ["#00c2ff", "rgba(0, 194, 255, 0.3)"], V = /* @__PURE__ */ z(g({
  name: "Decoration10",
  props: N(),
  setup(f, {
    expose: m
  }) {
    const {
      autoBindRef: c,
      refreshLayoutSize: b,
      domSize: h
    } = y();
    m({
      refreshLayoutSize: b
    });
    const l = k(), n = `d10ani${l.id}1`, o = `d10ani${l.id}2`, s = `d10ani${l.id}3`, d = `d10ani${l.id}4`, u = `d10ani${l.id}5`, $ = `d10ani${l.id}6`, r = `d10ani${l.id}7`;
    return () => {
      const {
        width: e,
        height: a
      } = h, {
        color: p
      } = f, t = v(x, p);
      return i(I, {
        ref: c
      }, {
        default: () => [i("svg", {
          width: e,
          height: a
        }, [i("polyline", {
          stroke: t[1],
          "stroke-width": "2",
          points: `0, ${a / 2} ${e}, ${a / 2}`
        }, null), i("polyline", {
          stroke: t[0],
          "stroke-width": "2",
          points: `5, ${a / 2} ${e * 0.2 - 3}, ${a / 2}`,
          "stroke-dasharray": `0, ${e * 0.2}`,
          fill: "freeze"
        }, [i("animate", {
          id: o,
          attributeName: "stroke-dasharray",
          values: `0, ${e * 0.2};${e * 0.2}, 0;`,
          dur: "3s",
          begin: `${n}.end`,
          fill: "freeze"
        }, null), i("animate", {
          attributeName: "stroke-dasharray",
          values: `${e * 0.2}, 0;0, ${e * 0.2}`,
          dur: "0.01s",
          begin: `${r}.end`,
          fill: "freeze"
        }, null)]), i("polyline", {
          stroke: t[0],
          "stroke-width": "2",
          points: `${e * 0.2 + 3}, ${a / 2} ${e * 0.8 - 3}, ${a / 2}`,
          "stroke-dasharray": `0, ${e * 0.6}`
        }, [i("animate", {
          id: d,
          attributeName: "stroke-dasharray",
          values: `0, ${e * 0.6};${e * 0.6}, 0`,
          dur: "3s",
          begin: `${s}.end + 1s`,
          fill: "freeze"
        }, null), i("animate", {
          attributeName: "stroke-dasharray",
          values: `${e * 0.6}, 0;0, ${e * 0.6}`,
          dur: "0.01s",
          begin: `${r}.end`,
          fill: "freeze"
        }, null)]), i("polyline", {
          stroke: t[0],
          "stroke-width": "2",
          points: `${e * 0.8 + 3}, ${a / 2} ${e - 5}, ${a / 2}`,
          "stroke-dasharray": `0, ${e * 0.2}`
        }, [i("animate", {
          id: $,
          attributeName: "stroke-dasharray",
          values: `0, ${e * 0.2};${e * 0.2}, 0`,
          dur: "3s",
          begin: `${u}.end + 1s`,
          fill: "freeze"
        }, null), i("animate", {
          attributeName: "stroke-dasharray",
          values: `${e * 0.2}, 0;0, ${e * 0.3}`,
          dur: "0.01s",
          begin: `${r}.end`,
          fill: "freeze"
        }, null)]), i("circle", {
          cx: "2",
          cy: a / 2,
          r: "2",
          fill: t[1]
        }, [i("animate", {
          id: n,
          attributeName: "fill",
          values: `${t[1]};${t[0]}`,
          begin: `0s;${r}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null)]), i("circle", {
          cx: e * 0.2,
          cy: a / 2,
          r: "2",
          fill: t[1]
        }, [i("animate", {
          id: s,
          attributeName: "fill",
          values: `${t[1]};${t[0]}`,
          begin: `${o}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null), i("animate", {
          attributeName: "fill",
          values: `${t[1]};${t[1]}`,
          dur: "0.01s",
          begin: `${r}.end`,
          fill: "freeze"
        }, null)]), i("circle", {
          cx: e * 0.8,
          cy: a / 2,
          r: "2",
          fill: t[1]
        }, [i("animate", {
          id: u,
          attributeName: "fill",
          values: `${t[1]};${t[0]}`,
          begin: `${d}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null), i("animate", {
          attributeName: "fill",
          values: `${t[1]};${t[1]}`,
          dur: "0.01s",
          begin: `${r}.end`,
          fill: "freeze"
        }, null)]), i("circle", {
          cx: e - 2,
          cy: a / 2,
          r: "2",
          fill: t[1]
        }, [i("animate", {
          id: r,
          attributeName: "fill",
          values: `${t[1]};${t[0]}`,
          begin: `${$}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null), i("animate", {
          attributeName: "fill",
          values: `${t[1]};${t[1]}`,
          dur: "0.01s",
          begin: `${r}.end`,
          fill: "freeze"
        }, null)])])]
      });
    };
  }
}));
export {
  V as Decoration10
};
