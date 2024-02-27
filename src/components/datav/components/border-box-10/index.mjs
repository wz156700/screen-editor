import { defineComponent as u, createVNode as o } from "vue";
import { useResize as c } from "../../hooks/useResize.mjs";
import { createBorderBoxCommonProps as x, mergeColor as b } from "../../utils/borderBox.mjs";
import { withInstall as B } from "../../utils/common.mjs";
import { styled as l } from "../../utils/styled.mjs";
import { BorderBoxContainer as _, BorderBoxContent as C } from "../styled/borderBox.mjs";
import "lodash-es";
import "../../utils/logger.mjs";
const $ = ["#1d48c4", "#d3e1f8"], y = ["left-top", "right-top", "left-bottom", "right-bottom"], d = l.svg`
  position: absolute;
  display: block;
}
.__STYLED__.right-top {
  right: 0px;
  transform: rotateY(180deg);
}
.__STYLED__.left-bottom {
  bottom: 0px;
  transform: rotateX(180deg);
}
.__STYLED__.right-bottom {
  right: 0px;
  bottom: 0px;
  transform: rotateX(180deg) rotateY(180deg);
`("border-svg-container"), E = /* @__PURE__ */ B(u({
  name: "BorderBox10",
  props: x(),
  setup(p, {
    slots: n,
    expose: a
  }) {
    const {
      autoBindRef: m,
      refreshLayoutSize: s,
      domSize: f
    } = c();
    return a({
      refreshLayoutSize: s
    }), () => {
      const {
        width: t,
        height: r
      } = f, {
        backgroundColor: g,
        color: h
      } = p, i = b($, h);
      return o(_, {
        class: l.getClassNameForBind("border-box-10"),
        ref: m,
        style: {
          boxShadow: `inset 0 0 25px 3px ${i[0]}`
        }
      }, {
        default: () => [o(d, {
          width: t,
          height: r
        }, {
          default: () => [o("polygon", {
            fill: g,
            points: `
                  4, 0 ${t - 4}, 0 ${t}, 4 ${t}, ${r - 4} ${t - 4}, ${r}
                  4, ${r} 0, ${r - 4} 0, 4
                `
          }, null)]
        }), y.map((e) => o(d, {
          width: "150px",
          height: "150px",
          key: e,
          class: e
        }, {
          default: () => [o("polygon", {
            fill: i[1],
            points: "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
          }, null)]
        })), o(C, null, {
          default: () => {
            var e;
            return [(e = n.default) == null ? void 0 : e.call(n)];
          }
        })]
      });
    };
  }
}));
export {
  E as BorderBox10
};
