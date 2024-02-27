var x = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (o, e, t) => e in o ? x(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, s = (o, e) => {
  for (var t in e || (e = {}))
    C.call(e, t) && h(o, t, e[t]);
  if (m)
    for (var t of m(e))
      v.call(e, t) && h(o, t, e[t]);
  return o;
};
import { defineComponent as D, createVNode as r } from "vue";
import { useResize as S } from "../../hooks/useResize.mjs";
import { withInstall as k, mergeColor as P } from "../../utils/common.mjs";
import { createColorProps as b, createReverseProps as z, createDurationProps as N } from "../../utils/decoration.mjs";
import { styled as R } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const M = ["#3faacb", "#fff"];
function T() {
  return s(s(s({}, b()), z()), N(6));
}
function V(o, e, t) {
  return o ? {
    width: 1,
    height: t,
    x: e / 2,
    y: 0
  } : {
    width: e,
    height: 1,
    x: 0,
    y: t / 2
  };
}
const $ = R.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`("decoration-2"), A = /* @__PURE__ */ k(D({
  name: "Decoration2",
  props: T(),
  setup(o, {
    expose: e
  }) {
    const {
      autoBindRef: t,
      refreshLayoutSize: u,
      domSize: p
    } = S();
    return e({
      refreshLayoutSize: u
    }), () => {
      const {
        width: n,
        height: a
      } = p, {
        color: g,
        reverse: i,
        duration: c
      } = o, l = P(M, g), {
        x: d,
        y: f,
        width: y,
        height: w
      } = V(i, n, a);
      return r($, {
        ref: t
      }, {
        default: () => [r("svg", {
          width: n,
          height: a
        }, [r("rect", {
          x: d,
          y: f,
          width: y,
          height: w,
          fill: l[0]
        }, [r("animate", {
          attributeName: i ? "height" : "width",
          from: "0",
          to: i ? a : n,
          dur: `${c}s`,
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: ".42,0,.58,1",
          repeatCount: "indefinite"
        }, null)]), r("rect", {
          x: d,
          y: f,
          width: "1",
          height: "1",
          fill: l[1]
        }, [r("animate", {
          attributeName: i ? "y" : "x",
          from: "0",
          to: i ? a : n,
          dur: `${c}s`,
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: "0.42,0,0.58,1",
          repeatCount: "indefinite"
        }, null)])])]
      });
    };
  }
}));
export {
  A as Decoration2
};
