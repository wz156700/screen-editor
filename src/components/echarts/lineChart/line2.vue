<!--
横向柱状图
-->
<template>
  <div class="line2" ref="line2"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, reactive, watch, nextTick } from "vue";
defineOptions({ name: "LineChart2" });

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

  //柱子颜色
  barStartColorof1: {
    type: String,
    default: "#0000ff",
  },
  barEndColorof1: {
    type: String,
    default: "#0000ff",
  }
});

let myChart;
const line2 = ref(null);

const state = reactive({
  option: {
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
      name: '值',
      nameTextStyle: {
        color: '#fff'
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      axisLabel: {
        textStyle: {
          // 设置x轴标签的颜色
          color: '#fff', // 或者你想要的任何颜色
          // 设置x轴标签的字体大小
          fontSize: 14, // 或者你想要的任何大小
        }

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
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#00FF00' }, // 渐变起始颜色
            { offset: 1, color: '#FF0000' } // 渐变结束颜色
          ])
        },
        data: [
          -0.07,
          -0.09,
          0.2,
          0.44,
          -0.23,
          0.08,
          -0.17,
          0.47,
          -0.36,
          0.18,
        ],
      },
    ],
  }
})

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
    if (series.indexOf(item['s']) == -1) {
      series.push(item['s'])
    }
  })
  console.log("series~~~~", series)

  let seriesArray = []

  for (let i = 0; i < series.length; i++) {
    let valueData = data.map((item) => {
      if (item['s'] == series[i])
        return item.x
    }).filter((item) => item !== undefined && item !== null)

    console.log("valueData", valueData)

    seriesArray.push({
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: valueData,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: props.barStartColorof1 }, // 渐变起始颜色
          { offset: 1, color: props.barEndColorof1 } // 渐变结束颜色
        ])
      }
    })
  }

  state.option.series = [...seriesArray]

  setOption(state.option)

}

//替换数据
// 监听x轴文本颜色
watch(
  () => props.xColor,
  (newVal) => {
    if (newVal) {
      console.log("newval~~变化了", newVal)
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


//监听柱子起始颜色
watch(
  () => props.barStartColorof1,
  (newVal) => {
    if (newVal) {
      state.option.series[0].itemStyle.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: newVal }, // 渐变起始颜色
        { offset: 1, color: props.barEndColorof1 } // 渐变结束颜色
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
      state.option.series[0].itemStyle.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: props.barStartColorof1 }, // 渐变起始颜色
        { offset: 1, color: newVal } // 渐变结束颜色
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
watch(() => props.data, (newval) => {
  console.log(newval)
  let data = JSON.parse(JSON.stringify(newval))
  console.log("data~~~xixixi", typeof data)
  if (Object.keys(data).length == 0) {
    return
  }
  handleData(data)
}, { immediate: true, deep: true })

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
