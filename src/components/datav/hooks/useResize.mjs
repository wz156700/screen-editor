import { debounce as a, once as m, isElement as c } from "lodash-es";
import { ref as l, reactive as f, onMounted as h, onUnmounted as b } from "vue";
import { withPrefix as v } from "../utils/logger.mjs";
const i = v("useResize");
function g(e, n) {
  const t = new MutationObserver(n);
  return t.observe(e, {
    attributes: !0,
    attributeFilter: ["class", "style"],
    attributeOldValue: !0
  }), t;
}
function p(e, n) {
  const { clientWidth: t = 0, clientHeight: o = 0 } = e || {};
  e ? (!t || !o) && i.warn("Component width or height is 0px, rendering abnormality may occur!") : i.warn("Failed to get dom node, component rendering may be abnormal!"), n.width = t, n.height = o;
}
function w(e) {
  return c(e) ? e : c(e.$el) ? e.$el : null;
}
function S() {
  const e = l(), n = [], t = f({
    width: 0,
    height: 0
  }), o = () => {
    p(e.value, t);
  }, s = a(o, 100), d = m((r) => {
    if (!r) {
      i.error("Ref不存在");
      return;
    }
    const u = w(r);
    if (!u) {
      i.error("Bind Component Dom Ref Failed!");
      return;
    }
    e.value = u;
  });
  return h(() => {
    o();
    const r = g(e.value, s);
    window.addEventListener("resize", s), n.push(
      () => {
        r.disconnect();
      },
      () => {
        window.removeEventListener("resize", s);
      }
    );
  }), b(() => {
    n.forEach((r) => r());
  }), {
    domSize: t,
    autoBindRef: d,
    refreshLayoutSize: o
  };
}
export {
  S as useResize
};
