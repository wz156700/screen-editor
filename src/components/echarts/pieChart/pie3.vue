<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, reactive, nextTick } from "vue";
defineOptions({ name: "pieChart3" });

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
  isShowLabel: {
    type: Boolean,
    default: true,
  },

  lengendColor: {
    type: String,
    default: "#c23531",
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
});

let myChart;
const line1 = ref(null);

const state = reactive({
  option: {
    legend: {
      top: "bottom",
      textStyle: {
        // 这是另一种设置文字颜色的方式
        color: "#ffffff",
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    tooltip: {
      trigger: "item",
    },
    color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae"],
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [50, 250],
        center: ["50%", "50%"],
        roseType: "area",
        label: {
          show: false,
          fontSize: 12,
        },
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: "rose 1" },
          { value: 38, name: "rose 2" },
          { value: 32, name: "rose 3" },
          { value: 30, name: "rose 4" },
          { value: 28, name: "rose 5" },
        ],
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

//处理数据
const handleData = (data) => {
  let seriesArray = [];
  seriesArray.push({
    name: "Nightingale Chart",
    type: "pie",
    radius: [50, 250],
    center: ["50%", "50%"],
    roseType: "area",
    label: { show: props.isShowLabel, fontSize: props.labelfontSize },
    itemStyle: {
      borderRadius: 8,
    },
    data: data,
  });

  state.option.series = [...seriesArray];

  setOption(state.option);
};

//监听label字体大小
watch(
  () => props.labelfontSize,
  (newVal) => {
    if (newVal) {
      state.option.series[0].label.fontSize = newVal;
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
  () => props.isShowLabel,
  (newVal) => {
    console.log("newValxixixiix", typeof newVal, newVal);
    state.option.series[0].label.show = newVal;
    setOption(state.option);
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
