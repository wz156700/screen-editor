<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, reactive, nextTick } from "vue";
defineOptions({ name: "scatterPlot1" });

const props = defineProps({
  data: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },

  // 散点颜色
  scatterPlotColor: {
    type: String,
    default: "#c23531",
  },
  //散点大小
  scatterPlotSize: {
    type: Number,
    default: 20,
  },
});

let myChart;
const line1 = ref(null);

const state = reactive({
  option: {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 40,
        itemStyle: { color: "#0000ff" },
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: "scatter",
      },
    ],
  },
});

function setOption(option) {
  console.log("option", option, myChart);
  if (!myChart) {
    nextTick(() => {
      myChart.setOption(option);
    });
    return;
  }
  myChart.setOption(option);
}

// //处理数据
const handleData = (data) => {
  let seriesArray = [];
  seriesArray.push({
    symbolSize: props.scatterPlotSize,
    itemStyle: { color: props.scatterPlotColor },
    data: data,
    type: "scatter",
  });

  state.option.series = [...seriesArray];

  setOption(state.option);
};

//监听散点大小
watch(
  () => props.scatterPlotSize,
  (newVal) => {
    if (newVal) {
      console.log("newVal", newVal);
      state.option.series[0].symbolSize = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听系列颜色
watch(
  () => props.scatterPlotColor,
  (newVal) => {
    if (newVal) {
      state.option.series[0].itemStyle.color = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  myChart = echarts.init(line1.value);
  myChart.setOption(state.option);
});
</script>

<style scoped>
.line1 {
  width: 100%;
  height: 100%;
}
</style>
