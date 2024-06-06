<!--

组件名称: 组件管理
-->
<template>
  <div class="td-editorLeft">
    <!-- 名称 -->
    <div class="td-editorLeft-name">
      <span v-if="state.isShowLeftBar">组件管理</span>
      <div style="cursor: pointer">
        <EditorIcon name="left" size="16px" @click="closeLeftBar" v-if="state.isShowLeftBar">
        </EditorIcon>
        <EditorIcon name="right" size="16px" @click="closeLeftBar" v-if="!state.isShowLeftBar"></EditorIcon>
      </div>

    </div>
    <!-- 内容 -->
    <div class="td-editorLeft-content">
      <!-- 左侧 -->
      <div class="td-editorLeft-content-left">
        <div class="td-editorLeft-content-left-item" :class="active === 'history' ? 'is-active' : ''"
          @click="updataActive('history')">
          <EditorIcon name="history" size="16px"></EditorIcon>
          <span>最近</span>
        </div>
        <div class="td-editorLeft-content-left-item" :class="active === 'analysis' ? 'is-active' : ''"
          @click="updataActive('analysis')">
          <EditorIcon name="analysis" size="16px"></EditorIcon>
          <span>图表</span>
        </div>
        <div class="td-editorLeft-content-left-item" :class="active === 'components' ? 'is-active' : ''"
          @click="updataActive('components')">
          <EditorIcon name="components" size="16px"></EditorIcon>
          <span>小组件</span>
        </div>
        <div class="td-editorLeft-content-left-item" :class="active === 'map' ? 'is-active' : ''"
          @click="updataActive('map')">
          <EditorIcon name="history" size="16px"></EditorIcon>
          <span>地图</span>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="td-editorLeft-content-right">
        <el-scrollbar height="100%">
          <div class="td-editorLeft-content-right-box">
            <historyList :domData="domData" v-if="active === 'history'" @selectItem="selectItem" :selectId="selectId">
            </historyList>
            <rightCom :menuList="mapData" v-if="active === 'map'"></rightCom>
            <rightCom :menuList="analysisData" v-if="active === 'analysis'"></rightCom>
            <rightCom :menuList="componentsData" v-if="active === 'components'"></rightCom>
            <rightCom :menuList="hTitleData" v-if="active === 'hTitle'"></rightCom>
            <rightCom :menuList="materialData" v-if="active === 'material'"></rightCom>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed } from "vue";
import rightCom from "./rightCom.vue";
import historyList from "./historyList.vue";
import analysisData from "@/assets/componentList/analysis.js";
import componentsData from "@/assets/componentList/components.js";
import mapData from "@/assets/componentList/map.js";
import hTitleData from "@/assets/componentList/hTitle.js";
import materialData from "@/assets/componentList/material.js";
import { useCounterStore } from '@/store/editor'
const emit = defineEmits(["selectItem"]);
const active = ref("analysis");
const updataActive = (val) => {
  active.value = val;
};
const userStore = useCounterStore()

const state = reactive({
  isShowLeftBar: computed(() => userStore.global.isShowLeftBar)
})

const props = defineProps({
  domData: {
    type: Object,
    required: true,
  },
  selectId: {
    type: Array,
    default: [],
  },
});

const selectItem = (item) => {
  emit("selectItem", item);
};

const closeLeftBar = () => {
  userStore.global.isShowLeftBar = !userStore.global.isShowLeftBar
}
</script>

<style lang="scss" scoped>
.td-editorLeft {
  width: 100%;
  height: 100%;
  font-size: 12px;
  user-select: none;
  overflow: hidden;


  .td-editorLeft-name {
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--td-editor-border);

    i {
      font-size: 14px;
    }
  }

  .td-editorLeft-content {
    width: 100%;
    height: calc(100% - 36px);
    display: flex;

    .td-editorLeft-content-left {
      width: 3.75rem;
      height: 100%;
      padding: .3125rem;
      box-sizing: border-box;
      background: var(--td-editor-left-nav-one);

      .td-editorLeft-content-left-item {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        border-radius: 2px;
        margin-bottom: 5px;
        cursor: pointer;

        span {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: 5px;
        }
      }
    }

    .td-editorLeft-content-right {
      width: calc(100% - 60px);
      height: 100%;
      padding-top: 5px;
      padding-left: 5px;
      padding-right: 5px;
      box-sizing: border-box;

      .td-editorLeft-content-right-box {
        width: 100%;
        height: 100%;

        &:deep(.el-collapse-item__header) {
          padding-left: 10px;
          box-sizing: border-box;
          height: 40px;
        }

        &:deep(.el-collapse-item__content) {
          padding-bottom: 0;
        }

        &:deep(.el-collapse-item__wrap) {
          z-index: 1;
          background: transparent;
        }
      }
    }
  }

  .is-active {
    background: var(--td-editor-left-nav-bg);
    color: var(--td-editor-left-nav-text);
  }
}
</style>
