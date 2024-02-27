var w = Object.defineProperty, v = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var h = (r, o, e) => o in r ? w(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, $ = (r, o) => {
  for (var e in o || (o = {}))
    N.call(o, e) && h(r, e, o[e]);
  if (c)
    for (var e of c(o))
      z.call(o, e) && h(r, e, o[e]);
  return r;
}, x = (r, o) => v(r, I(o));
import { defineComponent as M, createVNode as t } from "vue";
import { useResize as S } from "../../hooks/useResize.mjs";
import { useUuid as P } from "../../hooks/useUuid.mjs";
import { mergeColor as R, createBorderBoxCommonProps as D } from "../../utils/borderBox.mjs";
import { withInstall as F } from "../../utils/common.mjs";
import { styled as g } from "../../utils/styled.mjs";
import { BorderBoxContainer as G, BorderBoxContent as U } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const V = ["#235fa7", "#4fd2dd"], j = g.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
`("border-svg-container"), q = () => x($({}, D()), {
  duration: {
    type: Number,
    default: 3
  },
  reverse: {
    type: Boolean,
    default: !1
  }
}), Y = /* @__PURE__ */ F(M({
  name: "BorderBox8",
  props: q(),
  setup(r, {
    slots: o,
    expose: e
  }) {
    const {
      autoBindRef: B,
      refreshLayoutSize: b,
      domSize: k
    } = S();
    e({
      refreshLayoutSize: b
    });
    const d = P();
    return () => {
      const {
        color: C,
        backgroundColor: y,
        duration: l,
        reverse: L
      } = r, {
        width: n,
        height: i
      } = k, s = R(V, C), a = `border-box-8-path-${d.id}`, f = `border-box-8-gradient-${d.id}`, u = `border-box-8-mask-${d.id}`, p = L ? `M 2.5, 2.5 L 2.5, ${i - 2.5} L ${n - 2.5}, ${i - 2.5} L ${n - 2.5}, 2.5 L 2.5, 2.5` : `M2.5, 2.5 L${n - 2.5}, 2.5 L${n - 2.5}, ${i - 2.5} L2.5, ${i - 2.5} L2.5, 2.5`;
      return t(G, {
        class: g.getClassNameForBind("border-box-8"),
        ref: B
      }, {
        default: () => [t(j, {
          width: n,
          height: i
        }, {
          default: () => [t("defs", null, [t("path", {
            id: a,
            d: p,
            fill: "transparent"
          }, null), t("radialGradient", {
            id: f,
            cx: "50%",
            cy: "50%",
            r: "50%"
          }, [t("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null), t("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null)]), t("mask", {
            id: u
          }, [t("circle", {
            cx: "0",
            cy: "0",
            r: "150",
            fill: `url(#${f})`
          }, [t("animateMotion", {
            dur: `${l}s`,
            path: p,
            rotate: "auto",
            repeatCount: "indefinite"
          }, null)])])]), t("polygon", {
            fill: y,
            points: `5, 5 ${n - 5}, 5 ${n - 5} ${i - 5} 5, ${i - 5}`
          }, null), t("use", {
            stroke: s[0],
            "stroke-width": "1",
            "xlink:href": `#${a}`
          }, null), t("use", {
            stroke: s[1],
            "stroke-width": "3",
            "xlink:href": `#${a}`,
            mask: `url(#${u})`
          }, [t("animate", {
            attributeName: "stroke-dasharray",
            from: `0, ${length}`,
            to: `${length}, 0`,
            dur: `${l}s`,
            repeatCount: "indefinite"
          }, null)])]
        }), t(U, null, {
          default: () => {
            var m;
            return [(m = o.default) == null ? void 0 : m.call(o)];
          }
        })]
      });
    };
  }
}));
export {
  Y as BorderBox8
};
