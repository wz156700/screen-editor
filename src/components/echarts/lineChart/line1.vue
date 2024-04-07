<!--

组件名称: 折线图1 https://www.isqqw.com/viewer?id=39689
-->
<template>
  <div class="line1" ref="line1"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
defineOptions({ name: "LineChart1" });

const props = defineProps({
  data: {
    type: Object,
    default: {
      x: {
        data: ["1月", "2月", "3月", "4月", "5月", "6月"],
      },
      y: [
        {
          name: "温度",
          data: [1, 2, 3, 4, 5, 6],
        },
        {
          name: "湿度",
          data: [5, 7, 2, 1, 8, 4],
        },
      ],
    },
  },
});

const line1 = ref(null);

// 格式化数据
const formatData = (val) => {
  let data = {
    xAxis: {
      type: "category",
      data: val.x.data,
    },
    series: [],
  };
  for (let i = 0; i < val.y.length; i++) {
    data.series.push({
      data: val.y[i].data,
      type: "line",
    });
  }
  return data;
};

let option;
onMounted(() => {
  let myChart = echarts.init(line1.value);
  option = {
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "20%",
      left: "5%",
      right: "5%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: "10%",
      right: "6%",
      data: ["计划出货", "实际出货"],
      itemWidth: 18,
      itemHeight: 18,
      itemGap: 30,
      textStyle: {
        fontSize: 18,
        color: "#C9D2FA",
        padding: [0, 0, 0, 10],
      },
    },
    xAxis: {
      name: "班级",
      triggerEvent: true,
      data: ["1号", "2号", "3号", "4号", "5号", "6号", "7号"],
      axisLabel: {
        show: true,
        fontSize: 14,
        color: "#C9D2FA",
        rotate: 30, // 设置旋转角度为30度
        align: "right",
        verticalAlign: "top",
      },
      axisLine: {
        show: false,
        lineStyle: {
          show: false,
          color: "#F3F3F3",
          width: 2,
        },
      },

      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        name: "单位:万",
        type: "value",
        nameTextStyle: {
          color: "#fff",
        },
        axisLabel: {
          interval: 0,
          show: true,
          fontSize: 18,
          color: "#C9D2FA",
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#F3F3F3",
            width: 1,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#3E4A82",
          },
        },
      },
    ],
    series: [
      {
        name: "计划出货",
        type: "bar",
        silent: true,
        itemStyle: {
          normal: {
            color: "#2F8FFF",
          },
        },
        label: {
          show: true,
          color: "#2F8FFF",
          fontSize: 14,
          position: "top", // 显示位置，可选值有 'top', 'bottom', 'inside', 'outside'
          formatter: "{c}", // 标签内容格式器，这里表示显示数据值
        },
        data: [120, 75, 90, 102, 130, 75, 99],
      },
      {
        name: "实际出货",
        type: "bar",
        silent: true,
        itemStyle: {
          normal: {
            color: "#47B558",
          },
        },
        label: {
          show: true,
          color: "#47B558",
          fontSize: 14,
          position: "top", // 显示位置，可选值有 'top', 'bottom', 'inside', 'outside'
          formatter: "{c}", // 标签内容格式器，这里表示显示数据值
        },
        data: [102, 130, 75, 99, 120, 75, 90],
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<style scoped>
.line1 {
  width: 100%;
  height: 100%;
}
</style>
