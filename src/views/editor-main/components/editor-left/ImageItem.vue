<!--
作者: nodebook@qq.com
组件名称: 图片预览
-->
<template>
  <div class="image-preview" :draggable="true" @dragstart="onDragstartItem">
    <div class="image-preview-list">
      <div class="image-preview-list-title">
        {{ props.itemData.name }}
      </div>
      <div class="image-preview-list-image">
        <template v-if="!props.itemData.image">
          <component :is="props.itemData.type" />
        </template>
        <template v-if="props.itemData.image">
          <img :src="props.itemData.image" :title="props.itemData.name" />
        </template>
      </div>
    </div>
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

<style scoped>
.image-preview {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.image-preview-list {
  background: var(--ap-editor-echarts-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
}
.image-preview-list-title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  background: var(--ap-editor-echarts-titlebg);
  padding-left: 10px;
  box-sizing: border-box;
}
.image-preview-list-image {
  width: 100%;
  height: calc(100% - 35px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-preview img {
  width: 80%;
  max-height: 100%;
  height: auto;
}
</style>
