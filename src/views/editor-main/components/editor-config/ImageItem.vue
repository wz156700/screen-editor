<!--
组件名称:canvas预览
-->
<template>
  <div class="image-preview" :draggable="true" @dragstart="onDragstartItem">
    <div class="image-preview-list">
      <div class="image-preview-list-image">
        <template v-if="!props.itemData.image">
          <component :is="props.itemData.type" />
        </template>
        <template v-if="props.itemData.image">
          <img :src="props.itemData.image" :title="props.itemData.name" />
        </template>
      </div>
      <div class="image-preview-list-title">
        {{ props.itemData.name }}
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
  width: 50% !important;
  height: 9.375rem !important;
  padding: .625rem;
  box-sizing: border-box;
  cursor: pointer;
}

.image-preview-list:hover .image-preview-list-image {
  border: 1px solid #409eff;
}

.image-preview-list:hover .image-preview-list-title {
  color: #fff;
}

.image-preview-list {
  background: var(--td-editor-echarts-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: .3125rem;
}

.image-preview-list-title {
  /* font-family: 'Alibaba_PuHuiTi'; */
  width: 100%;
  height: 2.1875rem;
  line-height: 2.1875rem;
  padding-left: 1rem;
  box-sizing: border-box;
  font-weight: bolder;
  font-size: 0.75rem;
  text-align: center;
}

.image-preview-list-image {
  width: 90%;
  height: calc(100% - 2.1875rem);
  margin: 0 auto;
  border: 1px solid #000;
}

.image-preview img {
  width: 98%;
  max-height: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: cover;
}
</style>
