import { defineComponent as v, onMounted as h, onUnmounted as F, createVNode as o, mergeProps as $ } from "vue";
import { uniqueId as E } from "lodash-es";
function T(C) {
  let f = C;
  const r = {}, i = (n) => {
    var e;
    return (e = r[n]) != null ? e : 0;
  }, p = (n) => {
    var e;
    r[n] = ((e = r[n]) != null ? e : 0) + 1;
  }, y = (n) => {
    let e = r[n] - 1;
    e <= 0 && (e = 0), r[n] = e;
  }, S = (n) => {
    f = n;
  }, c = (n, e = !0) => `${e ? "." : ""}${f || ""}${n}`, N = (n) => c(n, !1), g = (n, e) => {
    const a = c(e);
    return `.__STYLED__ {${n.toString()}}`.replaceAll(".__STYLED__", a);
  };
  function t(n) {
    return (e) => {
      const a = document.createElement("style"), m = (l) => {
        a.innerHTML = g(e, l), document.querySelector("head").appendChild(a);
      }, R = () => document.querySelector("head").removeChild(a);
      return (l) => {
        const x = n, u = E("style");
        return /* @__PURE__ */ v({
          setup(P, {
            slots: d
          }) {
            h(() => {
              i(u) === 0 && m(l), p(u);
            }), F(() => {
              y(u), i(u) === 0 && R();
            });
            const _ = c(l, !1);
            return () => o(x, $(P, {
              class: _
            }), {
              default: () => {
                var s;
                return [(s = d == null ? void 0 : d.default) == null ? void 0 : s.call(d)];
              }
            });
          }
        });
      };
    };
  }
  return t.setClassNamePrefix = S, t.getClassNameForBind = N, t.span = t((n, {
    slots: e
  }) => o("span", n, [e == null ? void 0 : e.default()])), t.div = t((n, {
    slots: e
  }) => o("div", n, [e == null ? void 0 : e.default()])), t.img = t((n) => o("img", n, null)), t.svg = t((n, {
    slots: e
  }) => o("svg", n, [e == null ? void 0 : e.default()])), t;
}
const q = "dv-", L = T(q), U = L.setClassNamePrefix;
export {
  U as setClassNamePrefix,
  L as styled
};
