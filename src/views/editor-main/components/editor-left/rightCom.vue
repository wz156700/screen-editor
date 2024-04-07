<!--

组件名称: 右侧组件
-->
<template>
  <el-collapse v-model="value">
    <template v-for="(item, index) in menuList" :key="index">
      <el-collapse-item :title="item.name" :name="item.value">
        <!-- <TextItem v-for="(items, indexs) in item.children" :key="indexs" :itemData="items"></TextItem> -->
        <ImageItem
          v-for="(items, indexs) in item.children"
          :key="indexs"
          :itemData="items"
          style="width: 100%; height: 220px"
        ></ImageItem>
      </el-collapse-item>
    </template>
  </el-collapse>
</template>

<script setup>
import TextItem from "./TextItem.vue";
import ImageItem from "./ImageItem.vue";
import { ref } from "vue";
const value = ref([1]);

defineProps({
  menuList: {
    type: Array,
  },
});
</script>

<style scoped></style>
