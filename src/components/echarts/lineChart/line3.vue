<template>
  <div class="line2" ref="line2"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, reactive, watch, nextTick } from "vue";
defineOptions({ name: "lineChart3" });

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
  //柱子颜色
  barStartColorof1: {
    type: String,
    default: "#0000ff",
  },
  barEndColorof1: {
    type: String,
    default: "#0000ff",
  },
  barStartColorof2: {
    type: String,
    default: "#0000ff",
  },
  barEndColorof2: {
    type: String,
    default: "#0000ff",
  },
});

let myChart;
const line2 = ref(null);

const state = reactive({
  option: {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      //   text: "Gradient Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "0",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      //   boundaryGap: false,
      name: "",
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ebf8ac", //X轴文字颜色
        },
      },
      nameTextStyle: {
        color: "#fff",
      },
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      name: "",
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#FFFFFF",
        },
      },
      nameTextStyle: {
        color: "#ebf8ac",
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ebf8ac",
        },
      },
    },

    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: "Line 2",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 282, 111, 234, 220, 340, 310],
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

// //处理数据
const handleData = (data) => {
  let max = 0,
    min = 0;
  //分系列
  let series = [];
  data.map((item) => {
    if (series.indexOf(item["s"]) == -1) {
      series.push(item["s"]);
    }
  });
  console.log("series~~~~", series);

  let XData = data
    .map((item) => {
      if (item["s"] == series[0]) return item.x;
    })
    .filter((item) => item !== undefined && item !== null);
  console.log("XData~~~", XData);

  let seriesArray = [];

  for (let i = 0; i < series.length; i++) {
    let valueData = data
      .map((item) => {
        if (max == 0) {
          max = item.y;
        } else {
          max > parseInt(item.y) ? (max = item.y) : (max = max);
        }
        if (min == 0) {
          min = item.y;
        } else {
          min < parseInt(item.y) ? (min = item.y) : (min = min);
        }
        if (item["s"] == series[i]) return item.y;
      })
      .filter((item) => item !== undefined && item !== null);

    console.log("valueData", valueData);

    seriesArray.push({
      name: series[i],
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: props.barStartColorof1 }, // 渐变起始颜色
          { offset: 1, color: props.barEndColorof1 }, // 渐变结束颜色
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: valueData,
    });
  }

  state.option.series = [...seriesArray];
  state.option.xAxis.data = XData;
  console.log("min,max", min, max);
  state.option.yAxis.min = min;
  state.option.yAxis.max = max;

  setOption(state.option);
};

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
      console.log("newVal", newVal);
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

//监听柱子起始颜色
watch(
  () => props.barStartColorof1,
  (newVal) => {
    if (newVal) {
      state.option.series[0].areaStyle.color =
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: newVal }, // 渐变起始颜色
          { offset: 1, color: props.barEndColorof1 }, // 渐变结束颜色
        ]);
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
//监听柱子终止颜色
watch(
  () => props.barEndColorof1,
  (newVal) => {
    if (newVal) {
      state.option.series[0].areaStyle.color =
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: props.barStartColorof1 }, // 渐变起始颜色
          { offset: 1, color: newVal }, // 渐变结束颜色
        ]);
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

//监听柱子起始颜色
watch(
  () => props.barStartColorof2,
  (newVal) => {
    if (newVal) {
      state.option.series[1].areaStyle.color =
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: newVal }, // 渐变起始颜色
          { offset: 1, color: props.barEndColorof2 }, // 渐变结束颜色
        ]);
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
//监听柱子终止颜色
watch(
  () => props.barEndColorof2,
  (newVal) => {
    if (newVal) {
      state.option.series[1].areaStyle.color =
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: props.barStartColorof2 }, // 渐变起始颜色
          { offset: 1, color: newVal }, // 渐变结束颜色
        ]);
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

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

onMounted(() => {
  myChart = echarts.init(line2.value);
  myChart.setOption(state.option);
});
</script>

<style scoped>
.line2 {
  width: 100%;
  height: 100%;
}
</style>
