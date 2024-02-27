import { defineComponent as k, createVNode as r } from "vue";
import { fade as n } from "@jiaminghi/color";
import { useResize as C } from "../../hooks/useResize.mjs";
import { useUuid as w } from "../../hooks/useUuid.mjs";
import { createBorderBoxCommonProps as B, mergeColor as L } from "../../utils/borderBox.mjs";
import { withInstall as b } from "../../utils/common.mjs";
import { styled as a } from "../../utils/styled.mjs";
import { BorderBoxContainer as x, BorderBoxContent as M } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const i = ["#2e6099", "#7ce7fd"], Q = a.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`("border-svg-container"), D = /* @__PURE__ */ b(k({
  name: "BorderBox12",
  props: B(),
  setup(s, {
    slots: d,
    expose: f
  }) {
    const {
      autoBindRef: p,
      refreshLayoutSize: $,
      domSize: h
    } = C();
    f({
      refreshLayoutSize: $
    });
    const m = w();
    return () => {
      const {
        color: c,
        backgroundColor: g
      } = s, {
        width: e,
        height: o
      } = h, t = L(i, c), l = `border-box-12-filterId-${m}`;
      return r(x, {
        class: a.getClassNameForBind("border-box-12"),
        ref: p
      }, {
        default: () => [r(Q, {
          width: e,
          height: o
        }, {
          default: () => [r("defs", null, [r("filter", {
            id: l,
            height: "150%",
            width: "150%",
            x: "-25%",
            y: "-25%"
          }, [r("feMorphology", {
            operator: "dilate",
            radius: "1",
            in: "SourceAlpha",
            result: "thicken"
          }, null), r("feGaussianBlur", {
            in: "thicken",
            stdDeviation: "2",
            result: "blurred"
          }, null), r("feFlood", {
            "flood-color": n(t[1] || i[1], 70),
            result: "glowColor"
          }, [r("animate", {
            attributeName: "flood-color",
            values: `
                        ${n(t[1] || i[1], 70)};
                        ${n(t[1] || i[1], 30)};
                        ${n(t[1] || i[1], 70)};
                      `,
            dur: "3s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), r("feComposite", {
            in: "glowColor",
            in2: "blurred",
            operator: "in",
            result: "softGlowColored"
          }, null), r("feMerge", null, [r("feMergeNode", {
            in: "softGlowColored"
          }, null), r("feMergeNode", {
            in: "SourceGraphic"
          }, null)])])]), e && o && r("path", {
            fill: g,
            "stroke-width": "2",
            stroke: t[0],
            d: `
                    M15 5 L ${e - 15} 5 Q ${e - 5} 5, ${e - 5} 15
                    L ${e - 5} ${o - 15} Q ${e - 5} ${o - 5}, ${e - 15} ${o - 5}
                    L 15, ${o - 5} Q 5 ${o - 5} 5 ${o - 15} L 5 15
                    Q 5 5 15 5
                  `
          }, null), r("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${l})`,
            stroke: t[1],
            d: "M 20 5 L 15 5 Q 5 5 5 15 L 5 20"
          }, null), r("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${l})`,
            stroke: t[1],
            d: `M ${e - 20} 5 L ${e - 15} 5 Q ${e - 5} 5 ${e - 5} 15 L ${e - 5} 20`
          }, null), r("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${l})`,
            stroke: t[1],
            d: `
                  M ${e - 20} ${o - 5} L ${e - 15} ${o - 5}
                  Q ${e - 5} ${o - 5} ${e - 5} ${o - 15}
                  L ${e - 5} ${o - 20}
                `
          }, null), r("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${l})`,
            stroke: t[1],
            d: `
                  M 20 ${o - 5} L 15 ${o - 5}
                  Q 5 ${o - 5} 5 ${o - 15}
                  L 5 ${o - 20}
                `
          }, null)]
        }), r(M, null, {
          default: () => {
            var u;
            return [(u = d.default) == null ? void 0 : u.call(d)];
          }
        })]
      });
    };
  }
}));
export {
  D as BorderBox12
};
