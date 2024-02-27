var D = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var d = (o, e, n) => e in o ? D(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n, l = (o, e) => {
  for (var n in e || (e = {}))
    $.call(e, n) && d(o, n, e[n]);
  if (f)
    for (var n of f(e))
      b.call(e, n) && d(o, n, e[n]);
  return o;
};
import { defineComponent as T, createVNode as t } from "vue";
import { sum as y } from "lodash-es";
import { useResize as j } from "../../hooks/useResize.mjs";
import { withInstall as M, mergeColor as z, calcTwoPointDistance as L } from "../../utils/common.mjs";
import { createColorProps as N, createDurationProps as v } from "../../utils/decoration.mjs";
import { styled as R } from "../../utils/styled.mjs";
import "../../utils/logger.mjs";
const V = ["#3f96a5", "#3f96a5"];
function X() {
  return l(l({}, N()), v(1.2));
}
function P(o) {
  return new Array(o.length - 1).fill(0).map((e, n) => L(o[n], o[n + 1]));
}
function x(o, e) {
  const n = [[0, e * 0.2], [o * 0.18, e * 0.2], [o * 0.2, e * 0.4], [o * 0.25, e * 0.4], [o * 0.27, e * 0.6], [o * 0.72, e * 0.6], [o * 0.75, e * 0.4], [o * 0.8, e * 0.4], [o * 0.82, e * 0.2], [o, e * 0.2]], i = [[o * 0.3, e * 0.8], [o * 0.7, e * 0.8]];
  return {
    line1Sum: y(P(n)),
    line2Sum: y(P(i)),
    line1Point: n.map((r) => r.join(",")).join(" "),
    line2Point: i.map((r) => r.join(",")).join(" ")
  };
}
const A = R.div`
  width: 100%;
  height: 100%;
`("decoration-5"), J = /* @__PURE__ */ M(T({
  name: "Decoration5",
  props: X(),
  setup(o, {
    expose: e
  }) {
    const {
      autoBindRef: n,
      refreshLayoutSize: i,
      domSize: r
    } = j();
    return e({
      refreshLayoutSize: i
    }), () => {
      const {
        width: m,
        height: c
      } = r, {
        color: k,
        duration: u
      } = o, p = z(V, k), {
        line1Sum: a,
        line2Sum: s,
        line1Point: S,
        line2Point: C
      } = x(m, c);
      return t(A, {
        ref: n
      }, {
        default: () => [t("svg", {
          width: m,
          height: c
        }, [t("polyline", {
          fill: "transparent",
          stroke: p[0],
          "stroke-width": "3",
          points: S
        }, [t("animate", {
          attributeName: "stroke-dasharray",
          attributeType: "XML",
          from: `0, ${a / 2}, 0, ${a / 2}`,
          to: `0, 0, ${a}, 0`,
          dur: `${u}s`,
          begin: "0s",
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: "0.4,1,0.49,0.98",
          repeatCount: "indefinite"
        }, null)]), t("polyline", {
          fill: "transparent",
          stroke: p[1],
          "stroke-width": "2",
          points: C
        }, [t("animate", {
          attributeName: "stroke-dasharray",
          attributeType: "XML",
          from: `0, ${s / 2}, 0, ${s / 2}`,
          to: `0, 0, ${s}, 0`,
          dur: `${u}s`,
          begin: "0s",
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: ".4,1,.49,.98",
          repeatCount: "indefinite"
        }, null)])])]
      });
    };
  }
}));
export {
  J as Decoration5
};
