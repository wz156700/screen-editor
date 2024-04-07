<!--

组件名称: ICON 组件
-->
<template>
  <iconpark-icon :name="name" :size="size"></iconpark-icon>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: "1em",
  },
});
</script>
