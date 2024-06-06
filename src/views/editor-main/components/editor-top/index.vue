<!--

组件名称: 编辑器顶部工具链
-->
<template>
  <div class="td-editorMain-top">
    <!-- 左侧 -->
    <div class="td-editorMain-top-left" @click="goHome">
      <EditorIcon name="left" size="1rem" class="backIcon">
      </EditorIcon>
      <div class="td-editorMain-top-left-name">动态面板</div>
    </div>
    <!-- 中间 -->
    <div class="td-editorMain-top-middle">
      {{ domInfo.name }}
    </div>
    <!-- 右侧 -->
    <div class="td-editorMain-top-right">
      <div class="td-editorMain-top-right-item" @click="saveItem">
        <EditorIcon name="save"></EditorIcon>
        <span>保存</span>
      </div>
      <div class="td-editorMain-top-right-item" @click="previewItem">
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
.td-editorMain-top {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  user-select: none;

  .td-editorMain-top-left {
    width: 18.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bolder;
    color: #fff;

    .backIcon {
      margin: 0 10% 0 10%;
      font-weight: bold;
      color: #fff;
    }

    img {
      width: 2.1875rem;
      height: 2.1875rem;
      margin: 0 .625rem;
    }

    .td-editorMain-top-left-name {
      width: auto;
      height: 2.1875rem;
      line-height: 2.1875rem;

    }
  }

  .td-editorMain-top-middle {
    width: calc(100% - 41.25rem);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .td-editorMain-top-middle-item {
      width: 3.125rem;
      // background: red;
      text-align: center;
      height: 2.1875rem;
      font-size: .875rem;
      cursor: pointer;

      span {
        display: block;
        font-size: .75rem;
      }
    }
  }

  .td-editorMain-top-right {
    width: 22.5rem;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .td-editorMain-top-right-item {
      width: 3.125rem;
      // background: red;
      text-align: center;
      height: 2.1875rem;
      font-size: .875rem;
      cursor: pointer;

      span {
        display: block;
        font-size: .75rem;
      }
    }
  }
}
</style>
