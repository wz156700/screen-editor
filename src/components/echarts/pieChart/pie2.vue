<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, reactive, nextTick } from "vue";
defineOptions({ name: "pieChart2" });

const props = defineProps({
  data: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },

  // x轴文字大小
  labelfontSize: {
    type: String,
    default: "10",
  },

  //系列颜色
  partColorof1: {
    type: String,
    default: "#c23531",
  },
  partColorof2: {
    type: String,
    default: "#2f4554",
  },
  partColorof3: {
    type: String,
    default: "#61a0a8",
  },
  partColorof4: {
    type: String,
    default: "#d48265",
  },
  partColorof5: {
    type: String,
    default: "#91c7ae",
  },
  lengendColor: {
    type: String,
    default: "#c23531",
  },
});

let myChart;
const line1 = ref(null);

const state = reactive({
  option: {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        // 这是另一种设置文字颜色的方式
        color: "#ffffff",
      },
    },
    color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae"],
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
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
  let seriesArray = [];
  seriesArray.push({
    name: "Access From",
    type: "pie",
    radius: "50%",
    data: data,
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  });

  state.option.series = [...seriesArray];

  setOption(state.option);
};

//监听label字体大小
watch(
  () => props.labelfontSize,
  (newVal) => {
    if (newVal) {
      state.option.series[0].emphasis.label.fontSize = newVal;
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
  () => props.partColorof1,
  (newVal) => {
    if (newVal) {
      state.option.color[0] = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(
  () => props.partColorof2,
  (newVal) => {
    if (newVal) {
      state.option.color[1] = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(
  () => props.partColorof3,
  (newVal) => {
    if (newVal) {
      state.option.color[2] = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(
  () => props.partColorof4,
  (newVal) => {
    if (newVal) {
      state.option.color[3] = newVal;
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
watch(
  () => props.partColorof5,
  (newVal) => {
    if (newVal) {
      state.option.color[4] = newVal;
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
