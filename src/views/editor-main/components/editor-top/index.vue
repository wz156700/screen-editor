<!--

组件名称: 编辑器顶部工具链
-->
<template>
  <div class="ap-editorMain-top">
    <!-- 左侧 -->
    <div class="ap-editorMain-top-left" @click="goHome">
      <img src="../../../../assets/image/logo.png" />
      <div class="ap-editorMain-top-left-name">AP-Editor 可视化编辑器</div>
    </div>
    <!-- 中间 -->
    <div class="ap-editorMain-top-middle">
      {{ domInfo.name }}
    </div>
    <!-- 右侧 -->
    <div class="ap-editorMain-top-right">
      <div class="ap-editorMain-top-right-item" @click="saveItem">
        <EditorIcon name="save"></EditorIcon>
        <span>保存</span>
      </div>
      <div class="ap-editorMain-top-right-item" @click="previewItem">
        <EditorIcon name="share"></EditorIcon>
        <span>预览</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["domInfo"]);
const emit = defineEmits(["saveItem", "previewItem"]);
const saveItem = () => {
  emit("saveItem");
};
const previewItem = () => {
  emit("previewItem");
};

const goHome = () => {
  router.push("/");
};
</script>

<style lang="scss">
.ap-editorMain-top {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  user-select: none;
  .ap-editorMain-top-left {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    img {
      width: 35px;
      height: 35px;
      margin: 0 10px;
    }
    .ap-editorMain-top-left-name {
      width: auto;
      height: 35px;
      line-height: 35px;
    }
  }
  .ap-editorMain-top-middle {
    width: calc(100% - 660px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ap-editorMain-top-middle-item {
      width: 50px;
      // background: red;
      text-align: center;
      height: 35px;
      font-size: 14px;
      cursor: pointer;
      span {
        display: block;
        font-size: 12px;
      }
    }
  }
  .ap-editorMain-top-right {
    width: 360px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .ap-editorMain-top-right-item {
      width: 50px;
      // background: red;
      text-align: center;
      height: 35px;
      font-size: 14px;
      cursor: pointer;
      span {
        display: block;
        font-size: 12px;
      }
    }
  }
}
</style>
