<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, reactive, nextTick } from "vue";
defineOptions({ name: "scatterPlot2" });

const props = defineProps({
  data: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },

  // x轴文字颜色
  xColor: {
    type: String,
    default: "#fff",
  },
  // x轴文字大小
  xfontSize: {
    type: String,
    default: "10",
  },

  // x轴名称
  xcontent: {
    type: String,
    default: "",
  },
  // x轴名称颜色
  xcontentColor: {
    type: String,
    default: "#fff",
  },

  // y轴文字颜色
  yColor: {
    type: String,
    default: "#fff",
  },
  // y轴文字大小
  yfontSize: {
    type: String,
    default: "10",
  },

  // y轴名称
  ycontent: {
    type: String,
    default: "",
  },
  // y轴名称颜色
  ycontentColor: {
    type: String,
    default: "#fff",
  },
});

let myChart;
const line1 = ref(null);
const data = [
  [
    [28604, 77, 17096869, "Australia", 1990],
    [31163, 77.4, 27662440, "Canada", 1990],
    [1516, 68, 1154605773, "China", 1990],
    [13670, 74.7, 10582082, "Cuba", 1990],
    [28599, 75, 4986705, "Finland", 1990],
    [29476, 77.1, 56943299, "France", 1990],
    [31476, 75.4, 78958237, "Germany", 1990],
    [28666, 78.1, 254830, "Iceland", 1990],
    [1777, 57.7, 870601776, "India", 1990],
    [29550, 79.1, 122249285, "Japan", 1990],
    [2076, 67.9, 20194354, "North Korea", 1990],
    [12087, 72, 42972254, "South Korea", 1990],
    [24021, 75.4, 3397534, "New Zealand", 1990],
    [43296, 76.8, 4240375, "Norway", 1990],
    [10088, 70.8, 38195258, "Poland", 1990],
    [19349, 69.6, 147568552, "Russia", 1990],
    [10670, 67.3, 53994605, "Turkey", 1990],
    [26424, 75.7, 57110117, "United Kingdom", 1990],
    [37062, 75.4, 252847810, "United States", 1990],
  ],
  [
    [44056, 81.8, 23968973, "Australia", 2015],
    [43294, 81.7, 35939927, "Canada", 2015],
    [13334, 76.9, 1376048943, "China", 2015],
    [21291, 78.5, 11389562, "Cuba", 2015],
    [38923, 80.8, 5503457, "Finland", 2015],
    [37599, 81.9, 64395345, "France", 2015],
    [44053, 81.1, 80688545, "Germany", 2015],
    [42182, 82.8, 329425, "Iceland", 2015],
    [5903, 66.8, 1311050527, "India", 2015],
    [36162, 83.5, 126573481, "Japan", 2015],
    [1390, 71.4, 25155317, "North Korea", 2015],
    [34644, 80.7, 50293439, "South Korea", 2015],
    [34186, 80.6, 4528526, "New Zealand", 2015],
    [64304, 81.6, 5210967, "Norway", 2015],
    [24787, 77.3, 38611794, "Poland", 2015],
    [23038, 73.13, 143456918, "Russia", 2015],
    [19360, 76.5, 78665830, "Turkey", 2015],
    [38225, 81.4, 64715810, "United Kingdom", 2015],
    [53354, 79.1, 321773631, "United States", 2015],
  ],
];

const state = reactive({
  option: {
    legend: {
      right: "10%",
      top: "3%",
      data: ["1990", "2015"],
    },
    grid: {
      left: "8%",
      top: "10%",
    },
    xAxis: {
      name: "",
      nameTextStyle: {
        color: "#fff",
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "",
      nameTextStyle: {
        color: "#fff",
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      scale: true,
    },
    series: [
      {
        name: "1990",
        data: data[0],
        type: "scatter",
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: "series",
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: "top",
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(120, 36, 50, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(251, 118, 123)",
            },
            {
              offset: 1,
              color: "rgb(204, 46, 72)",
            },
          ]),
        },
      },
      {
        name: "2015",
        data: data[1],
        type: "scatter",
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: "series",
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: "top",
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(25, 100, 150, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(129, 227, 238)",
            },
            {
              offset: 1,
              color: "rgb(25, 183, 207)",
            },
          ]),
        },
      },
    ],
  },
});

function setOption(option) {
  if (!myChart) {
    nextTick(() => {
      myChart.setOption(option);
    });
    return;
  }
  myChart.setOption(option);
}

//处理数据
const handleData = (data) => {
  let series = [];
  data.map((item) => {
    item.map(() => {});
  });
  console.log("series~~~~", series);

  let seriesArray = [];

  seriesArray.push(
    {
      name: "1990",
      data: data[0],
      type: "scatter",
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: "top",
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(120, 36, 50, 0.5)",
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: "rgb(251, 118, 123)",
          },
          {
            offset: 1,
            color: "rgb(204, 46, 72)",
          },
        ]),
      },
    },
    {
      name: "2015",
      data: data[1],
      type: "scatter",
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: "top",
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(25, 100, 150, 0.5)",
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: "rgb(129, 227, 238)",
          },
          {
            offset: 1,
            color: "rgb(25, 183, 207)",
          },
        ]),
      },
    }
  );

  state.option.series = [...seriesArray];

  setOption(state.option);
};

//监听页面数据变化
watch(
  () => props.data,
  (newval) => {
    console.log(newval);
    let data = JSON.parse(JSON.stringify(newval));
    console.log("data~~~xixixi", typeof data);
    if (Object.keys(data).length == 0) {
      return;
    }
    handleData(data);
  },
  { immediate: true, deep: true }
);

//替换数据
// 监听x轴文本颜色
watch(
  () => props.xColor,
  (newVal) => {
    if (newVal) {
      state.option.xAxis.axisLabel.textStyle.color = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听x轴字体大小
watch(
  () => props.xfontSize,
  (newVal) => {
    if (newVal) {
      state.option.xAxis.axisLabel.textStyle.fontSize = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听x轴name
watch(
  () => props.xcontent,
  (newVal) => {
    if (newVal) {
      state.option.xAxis.name = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听x轴name颜色
watch(
  () => props.xcontentColor,
  (newVal) => {
    if (newVal) {
      state.option.xAxis.nameTextStyle.color = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听y轴文本颜色
watch(
  () => props.yColor,
  (newVal) => {
    if (newVal) {
      state.option.yAxis.axisLabel.textStyle.color = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

// 监听y轴字体大小
watch(
  () => props.yfontSize,
  (newVal) => {
    if (newVal) {
      state.option.yAxis.axisLabel.textStyle.fontSize = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听y轴name
watch(
  () => props.ycontent,
  (newVal) => {
    if (newVal) {
      state.option.yAxis.name = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听y轴name颜色
watch(
  () => props.ycontentColor,
  (newVal) => {
    if (newVal) {
      state.option.yAxis.nameTextStyle.color = newVal;
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
