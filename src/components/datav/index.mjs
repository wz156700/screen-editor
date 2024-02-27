import { BorderBox1 as m } from "./components/border-box-1/index.mjs";
import { BorderBox1 as lo } from "./components/border-box-1/index.mjs";
import { BorderBox10 as e } from "./components/border-box-10/index.mjs";
import { BorderBox10 as Lo } from "./components/border-box-10/index.mjs";
import { BorderBox11 as p } from "./components/border-box-11/index.mjs";
import { BorderBox11 as Eo } from "./components/border-box-11/index.mjs";
import { BorderBox12 as i } from "./components/border-box-12/index.mjs";
import { BorderBox12 as bo } from "./components/border-box-12/index.mjs";
import { BorderBox13 as f } from "./components/border-box-13/index.mjs";
import { BorderBox13 as ko } from "./components/border-box-13/index.mjs";
import { BorderBox2 as x } from "./components/border-box-2/index.mjs";
import { BorderBox2 as vo } from "./components/border-box-2/index.mjs";
import { BorderBox3 as B } from "./components/border-box-3/index.mjs";
import { BorderBox3 as yo } from "./components/border-box-3/index.mjs";
import { BorderBox4 as a } from "./components/border-box-4/index.mjs";
import { BorderBox4 as Ao } from "./components/border-box-4/index.mjs";
import { BorderBox5 as n } from "./components/border-box-5/index.mjs";
import { BorderBox5 as Go } from "./components/border-box-5/index.mjs";
import { BorderBox6 as d } from "./components/border-box-6/index.mjs";
import { BorderBox6 as Io } from "./components/border-box-6/index.mjs";
import { BorderBox7 as c } from "./components/border-box-7/index.mjs";
import { BorderBox7 as Ko } from "./components/border-box-7/index.mjs";
import { BorderBox8 as D } from "./components/border-box-8/index.mjs";
import { BorderBox8 as Po } from "./components/border-box-8/index.mjs";
import { BorderBox9 as s } from "./components/border-box-9/index.mjs";
import { BorderBox9 as Ro } from "./components/border-box-9/index.mjs";
import { Decoration1 as C } from "./components/decoration-1/index.mjs";
import { Decoration1 as To } from "./components/decoration-1/index.mjs";
import { Decoration10 as V } from "./components/decoration-10/index.mjs";
import { Decoration10 as Wo } from "./components/decoration-10/index.mjs";
import { Decoration11 as g } from "./components/decoration-11/index.mjs";
import { Decoration11 as Yo } from "./components/decoration-11/index.mjs";
import { Decoration12 as l } from "./components/decoration-12/index.mjs";
import { Decoration12 as _o } from "./components/decoration-12/index.mjs";
import { Decoration2 as u } from "./components/decoration-2/index.mjs";
import { Decoration2 as Mo } from "./components/decoration-2/index.mjs";
import { Decoration3 as L } from "./components/decoration-3/index.mjs";
import { Decoration3 as rr } from "./components/decoration-3/index.mjs";
import { Decoration4 as h } from "./components/decoration-4/index.mjs";
import { Decoration4 as mr } from "./components/decoration-4/index.mjs";
import { Decoration5 as E } from "./components/decoration-5/index.mjs";
import { Decoration5 as pr } from "./components/decoration-5/index.mjs";
import { Decoration6 as N } from "./components/decoration-6/index.mjs";
import { Decoration6 as fr } from "./components/decoration-6/index.mjs";
import { Decoration7 as b } from "./components/decoration-7/index.mjs";
import { Decoration7 as Br } from "./components/decoration-7/index.mjs";
import { Decoration8 as j } from "./components/decoration-8/index.mjs";
import { Decoration8 as nr } from "./components/decoration-8/index.mjs";
import { Decoration9 as k } from "./components/decoration-9/index.mjs";
import { Decoration9 as cr } from "./components/decoration-9/index.mjs";
import { Loading as q } from "./components/loading/index.mjs";
import { Loading as sr } from "./components/loading/index.mjs";
import { setClassNamePrefix as v } from "./utils/styled.mjs";
import { setClassNamePrefix as Vr } from "./utils/styled.mjs";
import "vue";
import "./hooks/useResize.mjs";
import "lodash-es";
import "./utils/logger.mjs";
import "./utils/borderBox.mjs";
import "./utils/common.mjs";
import "./components/styled/borderBox.mjs";
import "@jiaminghi/color";
import "./hooks/useUuid.mjs";
import "classnames";
import "./utils/decoration.mjs";
function Co(t, { classNamePrefix: o } = {}) {
  [
    m,
    e,
    p,
    i,
    f,
    x,
    B,
    a,
    n,
    d,
    c,
    D,
    s,
    C,
    u,
    L,
    h,
    E,
    N,
    b,
    j,
    k,
    V,
    g,
    l,
    q
  ].forEach((r) => t.component(r.name, r)), o && v(o);
}
export {
  lo as BorderBox1,
  Lo as BorderBox10,
  Eo as BorderBox11,
  bo as BorderBox12,
  ko as BorderBox13,
  vo as BorderBox2,
  yo as BorderBox3,
  Ao as BorderBox4,
  Go as BorderBox5,
  Io as BorderBox6,
  Ko as BorderBox7,
  Po as BorderBox8,
  Ro as BorderBox9,
  To as Decoration1,
  Wo as Decoration10,
  Yo as Decoration11,
  _o as Decoration12,
  Mo as Decoration2,
  rr as Decoration3,
  mr as Decoration4,
  pr as Decoration5,
  fr as Decoration6,
  Br as Decoration7,
  nr as Decoration8,
  cr as Decoration9,
  sr as Loading,
  Co as default,
  Vr as setClassNamePrefix
};
