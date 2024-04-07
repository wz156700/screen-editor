<!--

组件名称: 组件截图
-->
<template>
  <div class="component-container">
    <div class="component-title">
      <div class="component-title-input">
        <span style="margin-right: 10px">组件名称:</span>
        <el-input
          v-model="componentInfo.name"
          placeholder="请输入组件名称"
          style="width: 150px"
        />
      </div>
      <div class="component-title-input">
        <span style="margin-right: 10px">组件宽度:</span>
        <el-input-number v-model="componentInfo.width" :min="0" />
      </div>
      <div class="component-title-input">
        <span style="margin-right: 10px">组件高度:</span>
        <el-input-number v-model="componentInfo.height" :min="0" />
      </div>
      <el-button type="primary" @click="downloadPng">下载图片</el-button>
    </div>
    <div class="component-main">
      <!-- <div ref="componentRef" :style="{width: componentInfo.width + 'px', height: componentInfo.height + 'px'}">
                <component :is="componentInfo.name"  :style="{width: componentInfo.width + 'px', height: componentInfo.height + 'px'}"></component>
            </div> -->
      <div
        ref="componentRef"
        class="component-main-bg"
        :style="{
          width: componentInfo.width + 'px',
          height: componentInfo.height + 'px',
        }"
      >
        <apWviewText1
          style="width: 200px; height: 100px"
          content="文本组件"
        ></apWviewText1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import html2canvas from "html2canvas";

const componentRef = ref(null);

const componentInfo = reactive({
  width: 300,
  height: 250,
  name: "Decoration12",
});
const downloadPng = async () => {
  const canvas = await html2canvas(componentRef.value, {
    width: componentInfo.width,
    height: componentInfo.height,
    backgroundColor: null,
    scale: 1,
  });

  const url = canvas.toDataURL();
  const a = document.createElement("a");

  a.href = url;
  a.download = componentInfo.name + ".png";
  a.click();
};
</script>

<style scoped>
.component-container {
  width: 100%;
  height: 100%;
}
.component-title {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  box-sizing: border-box;
}
.component-title-input {
  width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
}
.component-main {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.component-main-bg {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
