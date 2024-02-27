var v = Object.defineProperty, N = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var s = ($, i, n) => i in $ ? v($, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : $[i] = n, f = ($, i) => {
  for (var n in i || (i = {}))
    k.call(i, n) && s($, n, i[n]);
  if (p)
    for (var n of p(i))
      S.call(i, n) && s($, n, i[n]);
  return $;
}, d = ($, i) => N($, w(i));
import { defineComponent as z, createVNode as o } from "vue";
import { fade as G } from "@jiaminghi/color";
import { useResize as M } from "../../hooks/useResize.mjs";
import { useUuid as _ } from "../../hooks/useUuid.mjs";
import { mergeColor as I, createBorderBoxCommonProps as D } from "../../utils/borderBox.mjs";
import { withInstall as F } from "../../utils/common.mjs";
import { styled as c } from "../../utils/styled.mjs";
import { BorderBoxContainer as L, BorderBoxContent as P } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const m = ["#8aaafb", "#1f33a2"], R = c.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.__STYLED__ > polyline {
  fill: none;
  stroke-width: 1;
`("border-svg-container"), W = () => d(f({}, D()), {
  titleWidth: {
    type: Number,
    default: 250
  },
  title: {
    type: String,
    default: ""
  }
}), O = /* @__PURE__ */ F(z({
  name: "BorderBox11",
  props: W(),
  setup($, {
    slots: i,
    expose: n
  }) {
    const {
      autoBindRef: g,
      refreshLayoutSize: y,
      domSize: b
    } = M();
    n({
      refreshLayoutSize: y
    });
    const h = _();
    return () => {
      const {
        color: C,
        backgroundColor: x,
        titleWidth: t,
        title: B
      } = $, {
        width: e,
        height: l
      } = b, r = I(m, C), a = `border-box-11-filterId-${h}`;
      return o(L, {
        class: c.getClassNameForBind("border-box-11"),
        ref: g
      }, {
        default: () => [o(R, {
          width: e,
          height: l
        }, {
          default: () => [o("defs", null, [o("filter", {
            id: a,
            height: "150%",
            width: "150%",
            x: "-25%",
            y: "-25%"
          }, [o("feMorphology", {
            operator: "dilate",
            radius: "2",
            in: "SourceAlpha",
            result: "thicken"
          }, null), o("feGaussianBlur", {
            in: "thicken",
            stdDeviation: "3",
            result: "blurred"
          }, null), o("feFlood", {
            "flood-color": r[1],
            result: "glowColor"
          }, null), o("feComposite", {
            in: "glowColor",
            in2: "blurred",
            operator: "in",
            result: "softGlowColored"
          }, null), o("feMerge", null, [o("feMergeNode", {
            in: "softGlowColored"
          }, null), o("feMergeNode", {
            in: "SourceGraphic"
          }, null)])])]), o("polygon", {
            fill: x,
            points: `
                  20, 32 ${e * 0.5 - t / 2}, 32 ${e * 0.5 - t / 2 + 20}, 53
                  ${e * 0.5 + t / 2 - 20}, 53 ${e * 0.5 + t / 2}, 32
                  ${e - 20}, 32 ${e - 8}, 48 ${e - 8}, ${l - 25} ${e - 20}, ${l - 8}
                  20, ${l - 8} 8, ${l - 25} 8, 50
                `
          }, null), o("polyline", {
            stroke: r[0],
            filter: `url(#${a})`,
            points: `
                  ${(e - t) / 2}, 30
                  20, 30 7, 50 7, ${50 + (l - 167) / 2}
                  13, ${55 + (l - 167) / 2} 13, ${135 + (l - 167) / 2}
                  7, ${140 + (l - 167) / 2} 7, ${l - 27}
                  20, ${l - 7} ${e - 20}, ${l - 7} ${e - 7}, ${l - 27}
                  ${e - 7}, ${140 + (l - 167) / 2} ${e - 13}, ${135 + (l - 167) / 2}
                  ${e - 13}, ${55 + (l - 167) / 2} ${e - 7}, ${50 + (l - 167) / 2}
                  ${e - 7}, 50 ${e - 20}, 30 ${(e + t) / 2}, 30
                  ${(e + t) / 2 - 20}, 7 ${(e - t) / 2 + 20}, 7
                  ${(e - t) / 2}, 30 ${(e - t) / 2 + 20}, 52
                  ${(e + t) / 2 - 20}, 52 ${(e + t) / 2}, 30
                `
          }, null), o("polygon", {
            stroke: r[0],
            fill: "transparent",
            points: `
                  ${(e + t) / 2 - 5}, 30 ${(e + t) / 2 - 21}, 11
                  ${(e + t) / 2 - 27}, 11 ${(e + t) / 2 - 8}, 34
                `
          }, null), o("polygon", {
            stroke: r[0],
            fill: "transparent",
            points: `
                  ${(e - t) / 2 + 5}, 30 ${(e - t) / 2 + 22}, 49
                  ${(e - t) / 2 + 28}, 49 ${(e - t) / 2 + 8}, 26
                `
          }, null), o("polygon", {
            stroke: r[0],
            fill: G(r[1] || m[1], 30),
            filter: `url(#${a})`,
            points: `
                  ${(e + t) / 2 - 11}, 37 ${(e + t) / 2 - 32}, 11
                  ${(e - t) / 2 + 23}, 11 ${(e - t) / 2 + 11}, 23
                  ${(e - t) / 2 + 33}, 49 ${(e + t) / 2 - 22}, 49
                `
          }, null), o("polygon", {
            filter: `url(#${a})`,
            fill: r[0],
            opacity: "1",
            points: `
                  ${(e - t) / 2 - 10}, 37 ${(e - t) / 2 - 31}, 37
                  ${(e - t) / 2 - 25}, 46 ${(e - t) / 2 - 4}, 46
                `
          }, [o("animate", {
            attributeName: "opacity",
            values: "1;0.7;1",
            dur: "2s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), o("polygon", {
            filter: `url(#${a})`,
            fill: r[0],
            opacity: "0.7",
            points: `
                  ${(e - t) / 2 - 40}, 37 ${(e - t) / 2 - 61}, 37
                  ${(e - t) / 2 - 55}, 46 ${(e - t) / 2 - 34}, 46
                `
          }, [o("animate", {
            attributeName: "opacity",
            values: "0.7;0.4;0.7",
            dur: "2s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), o("polygon", {
            filter: `url(#${a})`,
            fill: r[0],
            opacity: "0.5",
            points: `
                  ${(e - t) / 2 - 70}, 37 ${(e - t) / 2 - 91}, 37
                  ${(e - t) / 2 - 85}, 46 ${(e - t) / 2 - 64}, 46
                `
          }, [o("animate", {
            attributeName: "opacity",
            values: "0.5;0.2;0.5",
            dur: "2s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), o("polygon", {
            filter: `url(#${a})`,
            fill: r[0],
            opacity: "1",
            points: `
                  ${(e + t) / 2 + 30}, 37 ${(e + t) / 2 + 9}, 37
                  ${(e + t) / 2 + 3}, 46 ${(e + t) / 2 + 24}, 46
                `
          }, [o("animate", {
            attributeName: "opacity",
            values: "1;0.7;1",
            dur: "2s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), o("polygon", {
            filter: `url(#${a})`,
            fill: r[0],
            opacity: "0.7",
            points: `
                  ${(e + t) / 2 + 60}, 37 ${(e + t) / 2 + 39}, 37
                  ${(e + t) / 2 + 33}, 46 ${(e + t) / 2 + 54}, 46
                `
          }, [o("animate", {
            attributeName: "opacity",
            values: "0.7;0.4;0.7",
            dur: "2s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), o("polygon", {
            filter: `url(#${a})`,
            fill: r[0],
            opacity: "0.5",
            points: `
                  ${(e + t) / 2 + 90}, 37 ${(e + t) / 2 + 69}, 37
                  ${(e + t) / 2 + 63}, 46 ${(e + t) / 2 + 84}, 46
                `
          }, [o("animate", {
            attributeName: "opacity",
            values: "0.5;0.2;0.5",
            dur: "2s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null)]), o("text", {
            class: "dv-border-box-11-title",
            x: `${e / 2}`,
            y: "32",
            fill: "#fff",
            "font-size": "18",
            "text-anchor": "middle",
            "dominant-baseline": "middle"
          }, [B]), o("polygon", {
            fill: r[0],
            filter: `url(#${a})`,
            points: `
                  7, ${53 + (l - 167) / 2} 11, ${57 + (l - 167) / 2}
                  11, ${133 + (l - 167) / 2} 7, ${137 + (l - 167) / 2}
                `
          }, null), o("polygon", {
            fill: r[0],
            filter: `url(#${a})`,
            points: `
                  ${e - 7}, ${53 + (l - 167) / 2} ${e - 11}, ${57 + (l - 167) / 2}
                  ${e - 11}, ${133 + (l - 167) / 2} ${e - 7}, ${137 + (l - 167) / 2}
                `
          }, null)]
        }), o(P, null, {
          default: () => {
            var u;
            return [(u = i.default) == null ? void 0 : u.call(i)];
          }
        })]
      });
    };
  }
}));
export {
  O as BorderBox11
};
