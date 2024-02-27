var D = Object.defineProperty;
var p = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var m = (o, t, e) => t in o ? D(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, n = (o, t) => {
  for (var e in t || (t = {}))
    x.call(t, e) && m(o, e, t[e]);
  if (p)
    for (var e of p(t))
      _.call(t, e) && m(o, e, t[e]);
  return o;
};
import { defineComponent as k, createVNode as i } from "vue";
import C from "classnames";
import { useResize as P } from "../../hooks/useResize.mjs";
import { withInstall as S, mergeColor as $ } from "../../utils/common.mjs";
import { createColorProps as b, createReverseProps as z, createDurationProps as L } from "../../utils/decoration.mjs";
import { styled as f } from "../../utils/styled.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
function R() {
  return n(n(n({}, b()), z()), L(3));
}
const E = ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.3)"], T = f.div`
  position: relative;
  width: 100%;
  height: 100%;
`("decoration-4"), Y = f.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  flex: 1;
}
.__STYLED__.normal {
  animation: ani-height ease-in-out infinite;
  left: 50%;
  margin-left: -2px;
}
.__STYLED__.reverse {
  animation: ani-width ease-in-out infinite;
  top: 50%;
  margin-top: -2px;
}
@keyframes ani-height {
  0% {
    height: 0%;
  }
  70% {
    height: 100%;
  }
  100% {
    height: 100%;
  }
}
@keyframes ani-width {
  0% {
    width: 0%;
  }
  70% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`("decoration-content"), F = /* @__PURE__ */ S(k({
  name: "Decoration4",
  props: R(),
  setup(o, {
    expose: t
  }) {
    const {
      autoBindRef: e,
      refreshLayoutSize: g,
      domSize: u
    } = P();
    return t({
      refreshLayoutSize: g
    }), () => {
      const {
        width: s,
        height: a
      } = u, {
        color: w,
        reverse: r,
        duration: v
      } = o, l = $(E, w), h = r ? s : 5, c = r ? 5 : a, y = {
        width: `${h}px`,
        height: `${c}px`,
        animationDuration: `${v}s`
      }, d = r ? `0, 2.5 ${s}, 2.5` : `2.5, 0 2.5, ${a}`;
      return i(T, {
        ref: e
      }, {
        default: () => [i(Y, {
          class: C(r ? "reverse" : "normal"),
          style: y
        }, {
          default: () => [i("svg", {
            width: h,
            height: c
          }, [i("polyline", {
            stroke: l[0],
            points: d
          }, null), i("polyline", {
            class: "bold-line",
            stroke: l[1],
            "stroke-width": "3",
            "stroke-dasharray": "20, 80",
            "stroke-dashoffset": "-30",
            points: d
          }, null)])]
        })]
      });
    };
  }
}));
export {
  F as Decoration4
};
