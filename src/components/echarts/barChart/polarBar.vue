<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, reactive, nextTick } from "vue";
defineOptions({ name: "polarBar" });
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
  //文本颜色
  contentColor:{
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
});

let myChart;
const line1 = ref(null);

const state = reactive({
  option: {
    title: [
      {
        text: "Radial Polar Bar Label Position (middle)",
      },
    ],
    polar: {
      radius: [30, "80%"],
    },
    radiusAxis: {
      max: 4,
    },
    angleAxis: {
      type: "category",
      data: ["a", "b", "c", "d"],
      startAngle: 75,
      axisLabel: {
        color: "#fff", // 设置文字颜色
        fontSize: 18, // 设置字体大小
      },
    },
    tooltip: {},
    series: [{
      type: "bar",
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: "polar",
      label: {
        show: true,
        position: "middle",
        formatter: "{b}: {c}",
        color: '#912d2d', // 设置文字颜色
      },
    itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {offset: 0, color: '#f6e380'},
                                {offset: 1, color: '#ff9f1a'}
                            ])
            }
        }
    }],
    animation: false,
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

  let seriesArray = [];
  let XData = data
    .map((item) => {
      if (item["s"] == series[0]) return item.x;
    })
    .filter((item) => item !== undefined && item !== null);
  console.log("XData~~~", XData);

  for (let i = 0; i < series.length; i++) {
    let valueData = data
      .map((item) => {
        if (item["s"] == series[i]) return item.y;
      })
      .filter((item) => item !== undefined && item !== null);

    seriesArray.push({
      data: valueData,
      type: "bar",
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

  setOption(state.option);
};

//替换数据
// 监听x轴文本颜色
watch(
  () => props.xColor,
  (newVal) => {
    if (newVal) {
      state.option.angleAxis.axisLabel.color = newVal;
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
      state.option.angleAxis.axisLabel.fontSize = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

// 监听文本颜色
watch(
  () => props.contentColor,
  (newVal) => {
    if (newVal) {
        state.option.series[0].label.color = newVal;
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
