import { defineComponent as h, createVNode as t } from "vue";
import { useResize as b } from "../../hooks/useResize.mjs";
import { useUuid as x } from "../../hooks/useUuid.mjs";
import { createBorderBoxCommonProps as y, mergeColor as C } from "../../utils/borderBox.mjs";
import { withInstall as k } from "../../utils/common.mjs";
import { styled as f } from "../../utils/styled.mjs";
import { BorderBoxContainer as B, BorderBoxContent as w } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const v = ["#11eefd", "#0078d2"], N = f.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
`("border-svg-container"), V = /* @__PURE__ */ k(h({
  name: "BorderBox9",
  props: y(),
  setup(a, {
    slots: n,
    expose: d
  }) {
    const {
      autoBindRef: p,
      refreshLayoutSize: u,
      domSize: m
    } = b();
    d({
      refreshLayoutSize: u
    });
    const r = x();
    return () => {
      const {
        color: c,
        backgroundColor: g
      } = a, {
        width: e,
        height: o
      } = m, l = C(v, c), i = `border-box-9-gradient-${r.id}`, $ = `border-box-9-mask-${r.id}`;
      return t(B, {
        class: f.getClassNameForBind("border-box-9"),
        ref: p
      }, {
        default: () => [t(N, {
          width: e,
          height: o
        }, {
          default: () => [t("defs", null, [t("linearGradient", {
            id: i,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%"
          }, [t("animate", {
            attributeName: "x1",
            values: "0%;100%;0%",
            dur: "10s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null), t("animate", {
            attributeName: "x2",
            values: "100%;0%;100%",
            dur: "10s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null), t("stop", {
            offset: "0%",
            "stop-color": l[0]
          }, [t("animate", {
            attributeName: "stop-color",
            values: `${l[0]};${l[1]};${l[0]}`,
            dur: "10s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), t("stop", {
            offset: "100%",
            "stop-color": l[1]
          }, [t("animate", {
            attributeName: "stop-color",
            values: `${l[1]};${l[0]};${l[1]}`,
            dur: "10s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)])]), t("mask", {
            id: $
          }, [t("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `8, ${o * 0.4} 8, 3, ${e * 0.4 + 7}, 3`
          }, null), t("polyline", {
            fill: "#fff",
            points: `
                      8, ${o * 0.15} 8, 3, ${e * 0.1 + 7}, 3
                      ${e * 0.1}, 8 14, 8 14, ${o * 0.15 - 7}
                    `
          }, null), t("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `${e * 0.5}, 3 ${e - 3}, 3, ${e - 3}, ${o * 0.25}`
          }, null), t("polyline", {
            fill: "#fff",
            points: `
                      ${e * 0.52}, 3 ${e * 0.58}, 3
                      ${e * 0.58 - 7}, 9 ${e * 0.52 + 7}, 9
                    `
          }, null), t("polyline", {
            fill: "#fff",
            points: `
                      ${e * 0.9}, 3 ${e - 3}, 3 ${e - 3}, ${o * 0.1}
                      ${e - 9}, ${o * 0.1 - 7} ${e - 9}, 9 ${e * 0.9 + 7}, 9
                    `
          }, null), t("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `8, ${o * 0.5} 8, ${o - 3} ${e * 0.3 + 7}, ${o - 3}`
          }, null), t("polyline", {
            fill: "#fff",
            points: `
                      8, ${o * 0.55} 8, ${o * 0.7}
                      2, ${o * 0.7 - 7} 2, ${o * 0.55 + 7}
                    `
          }, null), t("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `${e * 0.35}, ${o - 3} ${e - 3}, ${o - 3} ${e - 3}, ${o * 0.35}`
          }, null), t("polyline", {
            fill: "#fff",
            points: `
                      ${e * 0.92}, ${o - 3} ${e - 3}, ${o - 3} ${e - 3}, ${o * 0.8} ${e - 9}, ${o * 0.8 + 7} ${e - 9}, ${o - 9} ${e * 0.92 + 7}, ${o - 9}`
          }, null)])]), t("polygon", {
            fill: g,
            points: `
                  15, 9 ${e * 0.1 + 1}, 9 ${e * 0.1 + 4}, 6 ${e * 0.52 + 2}, 6
                  ${e * 0.52 + 6}, 10 ${e * 0.58 - 7}, 10 ${e * 0.58 - 2}, 6
                  ${e * 0.9 + 2}, 6 ${e * 0.9 + 6}, 10 ${e - 10}, 10 ${e - 10}, ${o * 0.1 - 6}
                  ${e - 6}, ${o * 0.1 - 1} ${e - 6}, ${o * 0.8 + 1} ${e - 10}, ${o * 0.8 + 6}
                  ${e - 10}, ${o - 10} ${e * 0.92 + 7}, ${o - 10}  ${e * 0.92 + 2}, ${o - 6}
                  11, ${o - 6} 11, ${o * 0.15 - 2} 15, ${o * 0.15 - 7}
                `
          }, null), t("rect", {
            x: "0",
            y: "0",
            width: e,
            height: o,
            fill: `url(#${i})`,
            mask: `url(#${$})`
          }, null)]
        }), t(w, null, {
          default: () => {
            var s;
            return [(s = n.default) == null ? void 0 : s.call(n)];
          }
        })]
      });
    };
  }
}));
export {
  V as BorderBox9
};
