<template>
  <div class="td-editorConfig">
    <div class="td-editorConfig-content-top">
      <div class="td-editorConfig-content-top-item">
        <EditorIcon name="analysis" size="16px"></EditorIcon>
        <span>图表</span>
        <div class="dropDowm">
          <el-tabs
            tab-position="left"
            style="width: 100%; height: 100%"
            class="demo-tabs"
          >
            <el-tab-pane label="柱状图">
              <rightCom :menuList="analysisData"></rightCom>
            </el-tab-pane>
            <el-tab-pane label="折线图">
              <rightCom :menuList="linesData"></rightCom>
            </el-tab-pane>
            <el-tab-pane label="饼图">
              <rightCom :menuList="piesData"></rightCom>
            </el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="td-editorConfig-content-top-item">
        <EditorIcon name="components" size="16px"></EditorIcon>
        <span>组件</span>
        <div class="dropDowm">
          <el-tabs
            tab-position="left"
            style="width: 100%; height: 100%"
            class="demo-tabs"
          >
            <el-tab-pane label="柱状图">
              <rightCom :menuList="componentsData"></rightCom>
            </el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="td-editorConfig-content-top-item">
        <EditorIcon name="history" size="16px"></EditorIcon>
        <span>地图</span>
        <div class="dropDowm">
          <el-tabs
            tab-position="left"
            style="width: 100%; height: 100%"
            class="demo-tabs"
          >
            <el-tab-pane label="柱状图">
              <rightCom :menuList="mapData"></rightCom>
            </el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="td-editorConfig-content-top-item">
        <EditorIcon name="history" size="16px"></EditorIcon>
        <span>文字</span>
        <div class="dropDowm">
          <el-tabs
            tab-position="left"
            style="width: 100%; height: 100%"
            class="demo-tabs"
          >
            <el-tab-pane label="柱状图">
              <textCom :menuList="hTitleData"></textCom>
            </el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>

    <!-- 展示列表 -->
    <!-- 暂时不考虑历史记录功能 -->
    <!-- <historyList :domData="domData" v-if="active === 'history'" @selectItem="selectItem" :selectId="selectId">
            </historyList> -->
    <!-- <div class="td-editorConfig-content-right">
      <el-scrollbar height="100%">
        <div class="td-editorConfig-content-right-box">
          <rightCom :menuList="mapData" v-if="active === 'map'"></rightCom>
          <rightCom :menuList="analysisData" v-if="active === 'analysis'"></rightCom>
          <rightCom :menuList="componentsData" v-if="active === 'components'"></rightCom>
          <rightCom :menuList="hTitleData" v-if="active === 'hTitle'"></rightCom>
          <rightCom :menuList="materialData" v-if="active === 'material'"></rightCom>
        </div>
      </el-scrollbar>
    </div> -->
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed } from "vue";
import rightCom from "./rightCom.vue";
import textCom from "./textCom.vue";
import historyList from "./historyList.vue";
import analysisData from "@/assets/componentList/analysis.js";
import linesData from "@/assets/componentList/line.js";
import piesData from "@/assets/componentList/pie.js";
import componentsData from "@/assets/componentList/components.js";
import mapData from "@/assets/componentList/map.js";
import hTitleData from "@/assets/componentList/hTitle.js";
import materialData from "@/assets/componentList/material.js";
import { useCounterStore } from "@/store/editor";
const emit = defineEmits(["selectItem"]);

const props = defineProps({
  selectId: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
.td-editorConfig {
  width: 100%;
  height: 100%;
  font-size: 12px;
  user-select: none;

  .td-editorConfig-content-top {
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    background: var(--td-editor-left-nav-one);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .td-editorConfig-content-top-item {
      position: relative;
      height: 100%;
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
        color: #b4b7c1;
      }

      .dropDowm {
        position: absolute;
        left: 0;
        top: 100%;
        z-index: 9;
        display: none;
        width: 31.25rem;
        height: 18.75rem;
        background-color: #000;
      }
    }

    .td-editorConfig-content-top-item:hover,
    .td-editorConfig-content-top-item:hover span {
      color: #fff;
    }

    .td-editorConfig-content-top-item:hover .dropDowm {
      display: block;
    }
  }

  .td-editorConfig-content-right {
    width: calc(100% - 3.75rem);
    height: 100%;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;

    .td-editorConfig-content-right-box {
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
</style>
