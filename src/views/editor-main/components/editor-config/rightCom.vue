<!--

组件名称: 右侧组件
-->
<template>
  <div class="image-preview-containner">
    <template v-for="(item, index) in menuList" :key="index">
      <ImageItem v-for="(items, indexs) in item.children" :key="indexs" :itemData="items"></ImageItem>
    </template>
  </div>

</template>

<script setup>
import ImageItem from "./ImageItem.vue";
import { ref } from "vue";
const value = ref([1]);

defineProps({
  menuList: {
    type: Array,
  },
});
</script>

<style scoped>
.image-preview-containner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 18.75rem;
  overflow-y: auto;
}
</style>
