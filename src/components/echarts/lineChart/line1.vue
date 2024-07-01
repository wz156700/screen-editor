<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, reactive, nextTick } from "vue";
defineOptions({ name: "LineChart1" });

const props = defineProps({
  data: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },
  // 文本颜色
  xColor: {
    type: String,
    default: "#fff",
  },
});

let myChart;
const line1 = ref(null);

const state = reactive({
  option: {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLabel: {
        show: true,
        textStyle: {
          color: "#00c7ff",
        }
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
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

//替换数据
watch(
  () => props.data,
  (newVal) => {
    if (typeof newVal == "object") {
      newVal = newVal.val;
    }

    if (!newVal) {
      setOption(state.option);
      return;
    }
    if (newVal) {
      state.option = JSON.parse(newVal);
      setOption(state.option);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(
  () => props.key,
  () => {
    console.log("key", props.key);
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
