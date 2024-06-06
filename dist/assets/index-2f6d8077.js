import { _ as ee, u as te, H as oe, g as C, x as ae, q as le, r as n, o as v, c as k, a as d, b as e, w as o, l as c, K as se, A as u, L as ne, F as I, h as P, d as de, t as L, M as re, n as ce, N as ue, O as V, P as ie, Q as pe, R as _e, p as me, m as fe, E as p, D as ge } from "./index-52dfe5e3.js"; import { v as ve } from "./v4-a960c1f4.js"; const B = f => (me("data-v-12d9ef22"), f = f(), fe(), f), be = { class: "projectPage" }, he = { class: "projectPageLeft" }, Ce = { class: "projectPageLeftAdd" }, ke = se('<div class="projectPageLeftList" data-v-12d9ef22><div class="projectPageLeftListNav" data-v-12d9ef22>全部项目</div></div><div class="projectPageLeftFooter" data-v-12d9ef22><div class="projectPageLeftFooterGitee" data-v-12d9ef22><a href="https://gitee.com/nodebook-web/td-visual-editor" target="_blank" data-v-12d9ef22>仓库地址</a></div></div>', 2), je = { class: "projectPageContent" }, we = B(() => d("div", { class: "projectPageContentHeader" }, null, -1)), xe = { class: "projectPageContentList" }, ye = { class: "projectPageContentListItem" }, Ie = { class: "projectPageContentListItemTitle" }, Pe = B(() => d("div", { class: "projectPageContentListItemImage" }, null, -1)), Le = { class: "projectPageContentListItemFooter" }, Ve = { class: "dialog-footer" }, Be = { __name: "index", setup(f) { const j = te(), { indexDBAdd: F, indexDBSearchAll: S, indexDBRemove: D, indexDBSearch: b, indexDBUpdata: w } = oe().appContext.config.globalProperties, x = C(null), A = [{ label: "2560*1440", value: "2560*1440" }, { label: "1920*1440", value: "1920*1440" }, { label: "1920*1080", value: "1920*1080" }], N = { name: [{ required: !0, message: "请输入项目名称", trigger: "blur" }, { min: 3, max: 10, message: "请输入3~10个字符", trigger: "blur" }], ratio: [{ required: !0, message: "请选择分辨率", trigger: "blur" }] }, i = C(!1), l = ae({ name: null, ratio: null, uuid: null, backgroundColor: null }), R = () => { i.value = !0 }, y = C([]), T = async () => { await x.value.validate(async (s, t) => { if (s) if (l.uuid) { let r = await b("project", l.uuid); w("project", { ...r, name: l.name, ratio: l.ratio, backgroundColor: l.backgroundColor }).then(_ => { p({ message: "修改成功", type: "success" }), i.value = !1, m() }).catch(() => { p({ message: "修改失败", type: "error" }) }) } else F("project", { uuid: ve(), name: l.name, ratio: l.ratio, state: 0 }).then(r => { p({ message: "创建成功", type: "success" }), i.value = !1, m() }).catch(() => { p({ message: "创建失败", type: "error" }) }); else console.log("error submit!", t) }) }; le(() => { m() }); const m = () => { S("project").then(s => { y.value = s }) }, U = s => { D("project", s).then(() => { p({ message: "删除成功", type: "success" }), m() }) }, E = s => { b("project", s).then(t => { l.name = t.name, l.ratio = t.ratio, l.uuid = t.uuid, l.backgroundColor = t.backgroundColor }), i.value = !0 }, M = s => { j.push({ name: "preview", params: { id: s } }) }, q = s => { ge.confirm("确定要发布?", "重要提示", { confirmButtonText: "确定", cancelButtonText: "取消", type: "success" }).then(async () => { let t = await b("project", s); w("project", { ...t, state: 1 }).then(r => { p({ message: "发布成功", type: "success" }), m() }).catch(() => { p({ message: "发布失败", type: "error" }) }) }).catch(() => { }) }, z = s => { let t = s.split("-----"); switch (t[0]) { case "preview": console.log("预览"), M(t[1]); break; case "release": q(t[1]); break; case "editor": E(t[1]); break; case "delete": U(t[1]); break } }, H = s => { j.push({ name: "editor", params: { id: s } }) }; return (s, t) => { const r = n("el-button"), _ = n("el-icon"), g = n("el-dropdown-item"), O = n("el-dropdown-menu"), $ = n("el-dropdown"), G = n("el-col"), K = n("el-row"), Q = n("el-input"), h = n("el-form-item"), J = n("el-option"), W = n("el-select"), X = n("el-color-picker"), Y = n("el-form"), Z = n("el-dialog"); return v(), k("div", be, [d("div", he, [d("div", Ce, [e(r, { type: "primary", icon: c(ne), style: { width: "100px" }, onClick: R }, { default: o(() => [u("新建")]), _: 1 }, 8, ["icon"])]), ke]), d("div", je, [we, d("div", xe, [e(K, { gutter: 20 }, { default: o(() => [(v(!0), k(I, null, P(y.value, a => (v(), de(G, { xs: 24, sm: 12, lg: 12, xl: 6, key: a.uuid }, { default: o(() => [d("div", ye, [d("div", Ie, [u(L(a.name) + " ", 1), e(_, { class: "projectPageContentListItemTitleIcon", size: 12 }, { default: o(() => [e(c(re))]), _: 1 })]), Pe, d("div", Le, [d("span", { class: ce(["projectPageContentListItemFooterIcon1", a.state ? "projectPageContentListItemFooterIcon1Active" : ""]) }, null, 2), d("span", null, L(a.state ? "已发布" : "未发布"), 1), e(r, { icon: c(ue), onClick: Fe => H(a.uuid) }, null, 8, ["icon", "onClick"]), e($, { onCommand: z }, { dropdown: o(() => [e(O, { style: { width: "100px" } }, { default: o(() => [e(g, { command: "preview-----" + a.uuid }, { default: o(() => [e(_, null, { default: o(() => [e(c(V))]), _: 1 }), u("预览")]), _: 2 }, 1032, ["command"]), e(g, { command: "editor-----" + a.uuid }, { default: o(() => [e(_, null, { default: o(() => [e(c(V))]), _: 1 }), u("编辑")]), _: 2 }, 1032, ["command"]), e(g, { disabled: a.state == 1, command: "release-----" + a.uuid }, { default: o(() => [e(_, null, { default: o(() => [e(c(ie))]), _: 1 }), u("发布")]), _: 2 }, 1032, ["disabled", "command"]), e(g, { divided: "", command: "delete-----" + a.uuid }, { default: o(() => [e(_, null, { default: o(() => [e(c(pe))]), _: 1 }), u("删除")]), _: 2 }, 1032, ["command"])]), _: 2 }, 1024)]), default: o(() => [e(r, { icon: c(_e), class: "el-dropdown-link", style: { "margin-left": "10px" } }, null, 8, ["icon"])]), _: 2 }, 1024)])])]), _: 2 }, 1024))), 128))]), _: 1 })])]), e(Z, { modelValue: i.value, "onUpdate:modelValue": t[4] || (t[4] = a => i.value = a), title: "添加项目", width: "30%" }, { footer: o(() => [d("span", Ve, [e(r, { onClick: t[3] || (t[3] = a => i.value = !1) }, { default: o(() => [u("取消")]), _: 1 }), e(r, { type: "primary", onClick: T }, { default: o(() => [u(" 确定 ")]), _: 1 })])]), default: o(() => [e(Y, { model: l, "label-width": "100px", rules: N, ref_key: "ruleFormRef", ref: x }, { default: o(() => [e(h, { label: "项目名称", prop: "name" }, { default: o(() => [e(Q, { modelValue: l.name, "onUpdate:modelValue": t[0] || (t[0] = a => l.name = a) }, null, 8, ["modelValue"])]), _: 1 }), e(h, { label: "分辨率", prop: "ratio" }, { default: o(() => [e(W, { modelValue: l.ratio, "onUpdate:modelValue": t[1] || (t[1] = a => l.ratio = a), placeholder: "请选择分辨率", style: { width: "100%" } }, { default: o(() => [(v(), k(I, null, P(A, a => e(J, { key: a.value, label: a.label, value: a.value }, null, 8, ["label", "value"])), 64))]), _: 1 }, 8, ["modelValue"])]), _: 1 }), e(h, { label: "背景色", prop: "backgroundColor" }, { default: o(() => [e(X, { modelValue: l.backgroundColor, "onUpdate:modelValue": t[2] || (t[2] = a => l.backgroundColor = a) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue"])]) } } }, Ae = ee(Be, [["__scopeId", "data-v-12d9ef22"]]); export { Ae as default };
