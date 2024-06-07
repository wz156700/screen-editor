<!--

组件名称: 文本组件
-->
<template>
  <div class="td-TextItem" :draggable="true" @dragstart="onDragstartItem">
    {{ itemData.name }}
  </div>
</template>

<script setup>
import { inject } from "vue";

const parent = inject("draggable", null);

const props = defineProps({
  itemData: Object,
});

const onDragstartItem = () => {
  parent(props.itemData);
};
</script>

<style scoped lang="scss">
.td-TextItem {
  width: 100%;
  height: 35px;
  cursor: pointer;
  line-height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
  user-select: none;
  color: #fff;

  &:hover {
    // background: var(--td-editor-left-nav-bg);
    color: var(--td-editor-left-nav-text);
  }
}
</style>
