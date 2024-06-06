<!--
组件名称:canvas预览
-->
<template>
  <div class="image-preview" :draggable="true" @dragstart="onDragstartItem">
    <div class="image-preview-list">
      <div class="image-preview-list-title">
        <div class="image-preview-list-title-text">
          {{ props.itemData.name }}
        </div>
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
  height: 28.125rem;
  padding: .625rem;
  box-sizing: border-box;
}

.image-preview-list {
  background: var(--td-editor-echarts-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: .3125rem;
}

.image-preview-list-title {
  font-family: 'Alibaba_PuHuiTi';
  width: 100%;
  height: 2.1875rem;
  line-height: 2.1875rem;
  /* background: var(--td-editor-echarts-titlebg); */
  background: url("/public/img/smalltitle.png");
  background-size: 100% 100%;
  padding-left: 1rem;
  box-sizing: border-box;
  font-weight: bolder;
}

.image-preview-list-title-text {
  background: linear-gradient(to top, #87DAFF, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 1rem;
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
