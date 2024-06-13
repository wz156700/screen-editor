import { defineStore } from "pinia";

export const useCounterStore = defineStore("editor", {
  state: () => ({
    global: {
      // 撤销
      revoke: 0,
      revokeDisabled: false,
      // 重做
      redo: 0,
      redoDisabled: false,
      // 移动画布
      moveing: false,
      // 是否清楚画布
      clear: false,
      // 清楚按钮是否可以点击
      clearDisabled: false,
      // 横向参考线
      referX: false,
      // 纵向参考线
      referY: false,
      isShowLeftBar: true,
      isShowRightBar: true,
      ratio: '', //分辨率
      backgroundColor: '', //背景颜色
      backgroundImg: '' //背景图片
    },
    element: {
      select: false,
      // 图层上移
      topIndex: 0,
      // 图层下移
      bottomIndex: 0,
      // 锁定/解锁
      lockLeft: false,
      lockTop: false,
      // 删除
      delete: false,
      // 复制
      copy: false,
      // 矫正
      check: false,
      // 是否选中单个
      radio: false,
      selectedUUid: "",
    },
    // 当前拖拽的元素信息
    draggable: {},
    // 属性管理
    propertyData: {},
    // 属性列表
    propertyTable: {},
    dataSource: {
      defaultData: {},
    },
  }),
  getters: {},
  actions: {},
});
