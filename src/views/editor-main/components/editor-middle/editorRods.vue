<!-- 组件名称: 比例尺 -->
<template>
  <div class="ap-editor-rod-main" ref="apEditorRod"></div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  positionInfo: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      w: 0,
      h: 0,
      left: 0,
      top: 0,
    },
  },
});

const getLineNumber = (val) => {
  return parseInt(val / 50);
};

// 获取元素
const apEditorRod = ref(null);
// 获取元素信息
const getRodInfo = () => {
  if (apEditorRod.value) {
    apEditorRod.value.innerHTML = null;
  }
  drawRod(apEditorRod.value.offsetHeight, apEditorRod.value.offsetWidth);
};

// 绘制比例尺
const drawRod = (h, w) => {
  var svg = d3
    .select(apEditorRod.value)
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#1F1F1F");
  // X轴比例尺
  const xScall = d3
    .scaleLinear()
    .domain([
      -props.positionInfo.left,
      props.positionInfo.w - props.positionInfo.left,
    ])
    .range([0, w - 40]); // 数据空间 实际空间d3.max([w, h])

  // Y轴比例尺
  const yScall = d3
    .scaleLinear()
    .domain([
      -props.positionInfo.top,
      props.positionInfo.h - props.positionInfo.top,
    ])
    .range([0, h - 40]);

  // 添加X坐标轴
  const xAxis = d3.axisTop(xScall).ticks(getLineNumber(w));
  // 添加Y坐标轴  // .tickSize(-innerWidth) 添加轴线
  const yAxis = d3.axisLeft(yScall).ticks(getLineNumber(h)); //.tickSize(-w)

  // 添加X坐标轴
  const xAxisG = svg.append("g").call(xAxis).attr("transform", `translate(${40}, ${40})`);
  const yAxisG = svg.append("g").call(yAxis).attr("transform", `translate(${40}, ${40})`);
};

onMounted(() => {
  getRodInfo();
});

watch(
  () => props.positionInfo,
  () => {
    getRodInfo();
  },
  {
    deep: true,
  }
);
</script>

<style scoped>
.ap-editor-rod-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
}
</style>