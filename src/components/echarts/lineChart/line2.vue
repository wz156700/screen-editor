<!--

组件名称: 折线图1 https://www.isqqw.com/viewer?id=39689
-->
<template>
  <div class="line2" ref="line2"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
defineOptions({ name: "LineChart2" });

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const line2 = ref(null);

const labelRight = {
  position: "right",
};

let option;
onMounted(() => {
  let myChart = echarts.init(line2.value);
  option = {
    title: {
      text: "Bar Chart with Negative Value",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 80,
      bottom: 30,
    },
    xAxis: {
      type: "value",
      position: "top",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        "ten",
        "nine",
        "eight",
        "seven",
        "six",
        "five",
        "four",
        "three",
        "two",
        "one",
      ],
    },
    series: [
      {
        name: "Cost",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          formatter: "{b}",
        },
        data: [
          { value: -0.07, label: labelRight },
          { value: -0.09, label: labelRight },
          0.2,
          0.44,
          { value: -0.23, label: labelRight },
          0.08,
          { value: -0.17, label: labelRight },
          0.47,
          { value: -0.36, label: labelRight },
          0.18,
        ],
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<style scoped>
.line2 {
  width: 100%;
  height: 100%;
}
</style>
