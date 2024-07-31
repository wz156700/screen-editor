<template>
  <div class="line2" ref="line2"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, reactive, watch, nextTick } from "vue";
defineOptions({ name: "BarChart3" });

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
  lengendColor: {
    type: String,
    default: "#fff",
  },
  //柱子颜色
  barStartColorof1: {
    type: String,
    default: "rgba(4, 255, 0, 1)",
  },
  barEndColorof1: {
    type: String,
    default: "rgba(14, 208, 202, 1)",
  },
  barStartColorof2: {
    type: String,
    default: "rgba(187, 224, 2, 1)",
  },
  barEndColorof2: {
    type: String,
    default: "rgba(245, 202, 12, 1)",
  },
});

let myChart;
const line2 = ref(null);

const state = reactive({
  option: {
    title: {
      text: "World Population",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      textStyle: {
        color: '#ff0000'  // 修改为红色
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      scale: true,
      boundaryGap: [0, 0.01],
      name: "值",
      nameTextStyle: {
        color: "#fff",
      },
      axisLabel: {
        textStyle: {
          // 设置x轴标签的颜色
          color: "#fff", // 或者你想要的任何颜色
          // 设置x轴标签的字体大小
          fontSize: 14, // 或者你想要的任何大小
        },
      },
    },
    yAxis: {
      type: "category",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
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
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#00FF00" }, // 渐变起始颜色
            { offset: 1, color: "#FF0000" }, // 渐变结束颜色
          ]),
        },
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#00FF00" }, // 渐变起始颜色
            { offset: 1, color: "#FF0000" }, // 渐变结束颜色
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
        if (item["s"] == series[i]) return item.x;
      })
      .filter((item) => item !== undefined && item !== null);

    console.log("valueData", valueData);

    seriesArray.push({
      name: series[i],
      type: "bar",
      data: valueData,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: props.barStartColorof1 }, // 渐变起始颜色
          { offset: 1, color: props.barEndColorof1 }, // 渐变结束颜色
        ]),
      },
    });
  }

  state.option.series = [...seriesArray];
  state.option.yAxis.data = XData;

  setOption(state.option);
};

//替换数据
// 监听x轴文本颜色
watch(
  () => props.xColor,
  (newVal) => {
    if (newVal) {
      console.log("newval~~变化了", newVal);
      state.option.xAxis.axisLabel.textStyle.color = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(
  () => props.lengendColor,
  (newVal) => {
    if (newVal) {
      state.option.legend.textStyle.color = newVal;
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

//监听柱子起始颜色
watch(
  () => props.barStartColorof1,
  (newVal) => {
    if (newVal) {
      state.option.series[0].itemStyle.color =
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
      state.option.series[0].itemStyle.color =
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
      state.option.series[1].itemStyle.color =
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
      state.option.series[1].itemStyle.color =
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
