<template>
  <div class="line2" ref="line2"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, reactive, watch, nextTick } from "vue";
defineOptions({ name: "lineChart2" });

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
  legendColor: {
    type: String,
    default: "#fff",
  },
  //柱子颜色
  barStartColorof1: {
    type: String,
    default: "rgba(94, 255, 0, 1)",
  },
  barEndColorof1: {
    type: String,
    default: "rgba(0, 255, 221, 1)",
  },
  barStartColorof2: {
    type: String,
    default: "rgba(204, 255, 0, 1)",
  },
  barEndColorof2: {
    type: String,
    default: "rgba(255, 191, 0, 1)",
  },
});

let myChart;
const line2 = ref(null);

const state = reactive({
  option: {
    title: {
      // text: '热源实时流量',
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 20,
      },
      top: "3%",
      left: "10%",
    },
    grid: {
      top: "25%",
      bottom: "10%", //也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
        },
      },
    },
    legend: {
      top: "15%",
      textStyle: {
        color: "#ffffff"
      }
    },
    xAxis: {
      data: ["国投热源1#", "国投热源2#", "城西热源"],
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#01FCE3",
        },
      },
      axisTick: {
        show: true, //隐藏X轴刻度
      },
      nameTextStyle: {
        color: "#fff",
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ebf8ac", //X轴文字颜色
        },
      },
    },
    yAxis: {
      type: "value",
      name: "T/h",
      scale: true,
      nameTextStyle: {
        color: "#ebf8ac",
      },
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
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ebf8ac",
        },
      },
    },
    series: [
      {
        name: "供水",
        type: "line",
        // yAxisIndex: 1,
        // barGap:'100%',
        barWidth: 25, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        //  color: '#FF8247',
        itemStyle: {
          color: "#FF8247",
          barBorderRadius: [50, 50, 0, 0],
        },
        data: [4, 5.8, 5],
      },
      {
        name: "回水",
        type: "line",
        barWidth: 25,
        smooth: true, //平滑曲线显示
        itemStyle: {
          color: "#4693EC",
          barBorderRadius: [50, 50, 0, 0],
        },
        data: [4.2, 3.8, 5.3],
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
      smooth: true,
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
//监听x轴name颜色
watch(
  () => props.legendColor,
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
