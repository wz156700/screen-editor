<!--

组件名称: span文本组件
-->
<template>
  <div class="td-wviews-span" :style="{
    color: color,
    fontSize: fontSize + 'rem',
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    justifyContent: justifyContent,
    alignItems: alignItems,
    letterSpacing: letterSpacing > 0 ? letterSpacing + 'px' : 'normal',
  }" :class="overflow ? 'td-wviews-overflow' : ''">
    {{ content }}
  </div>
</template>

<script setup>
import { watch } from 'vue'
const props = defineProps({
  // 文本内容
  content: {
    type: String,
    default: "文本组件",
  },
  // 文本颜色
  color: {
    type: String,
    default: "#fff",
  },
  // 文字大小
  fontSize: {
    type: Number,
    default: 1,
  },
  // 字体类型
  fontStyle: {
    type: String,
    default: "normal",
  },
  // 字体粗细
  fontWeight: {
    type: String,
    default: "normal",
  },
  // 横向
  justifyContent: {
    type: String,
    default: "center",
  },
  // 纵向
  alignItems: {
    type: String,
    default: "center",
  },
  // 字体间距
  letterSpacing: {
    type: Number,
    default: null,
  },
  // 是否溢出隐藏
  overflow: {
    type: Boolean,
    default: false,
  },
});
defineOptions({ name: "apWviewText1" });

watch(() => props.content, (newText) => {
  console.log("文本变化了", newText)
}, { deep: true })
</script>

<style scoped>
.td-wviews-span {
  display: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid transparent;
}

.td-wviews-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
