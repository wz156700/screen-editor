<template>
  <div class="map-container" ref="refDom"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, defineProps, reactive } from "vue";
import { repJson } from "./data";

defineOptions({ name: "Map1" });

const props = defineProps({
  data: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },

  mapLabelColor: {
    type: String,
    default: "#fff",
  },

  mapLabelFontSize: {
    type: String,
    default: "10",
  },

  emphasisColor: {
    type: String,
    default: "#fff",
  },

  plateEdgeColor: {
    type: String,
    default: "#fff",
  },

  lowColorof1: {
    type: String,
    default: "rgba(4, 255, 0, 1)",
  },
  MiddleColorof1: {
    type: String,
    default: "rgba(14, 208, 202, 1)",
  },
  highColorof1: {
    type: String,
    default: "rgba(187, 224, 2, 1)",
  },
});

const refDom = ref(null);

const state = reactive({
  option: {
    visualMap: {
      min: 0,
      max: 50,
      text: ['High', 'Low'],
      textStyle: {
        color: '#fff'
      },
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },
    series: [
      {
        name: "辽宁地图全览",
        type: "map",
        map: "liaoning",
        label: {
          normal: {
            show: true,
            color: "#fff",
            fontSize: 12,
          },
          emphasis: {
            show: true,
            color: "#fff",
            fontSize: 12,
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: "red", // 高亮时候地图显示的颜色
            borderWidth: 1, // 高亮时的边框宽度
          },
          label: {
            fontSize: 12, // 选中地图文字字号和字体颜色
            color: "#fff",
          },
        },
        itemStyle: {
          borderColor: "#17caf0", //地图各块的边框颜色
          borderWidth: 1, //地图各块的边框
          borderType: "solid",
        },
        data: [
          { name: "沈阳市", value: 11 },
          { name: "大连市", value: 14 },
          { name: "鞍山市", value: 31 },
          { name: "抚顺市", value: 6 },
          { name: "本溪市", value: 0 },
          { name: "丹东市", value: 0 },
          { name: "锦州市", value: 3 },
          { name: "营口市", value: 4 },
          { name: "阜新市", value: 5 },
          { name: "辽阳市", value: 21 },
          { name: "盘锦市", value: 4 },
          { name: "铁岭市", value: 5 },
          { name: "朝阳市", value: 0 },
          { name: "葫芦岛市", value: 0 },
        ],
      },
    ],
  }
})

let myChart;
const infoMap = () => {
  myChart = echarts.init(refDom.value);
  echarts.registerMap("liaoning", repJson);
  myChart.setOption(state.option);
};

function setOption(option) {
  if (!myChart) {
    nextTick(() => {
      myChart.setOption(option);
    });
    return;
  }
  myChart.setOption(option);
}

onMounted(() => {
  infoMap();
});

watch(() => props.mapLabelColor, (newVal) => {
  if (newVal) {
    state.option.series[0].label.normal.color = newVal
    setOption(state.option)
  }
})

watch(() => props.mapLabelFontSize, (newVal) => {
  if (newVal) {
    state.option.series[0].label.normal.fontSize = newVal
    setOption(state.option)
  }
})


watch(() => props.emphasisColor, (newVal) => {
  if (newVal) {
    state.option.series[0].label.emphasis.color = newVal
    setOption(state.option)
  }
})

watch(() => props.plateEdgeColor, (newVal) => {
  if (newVal) {
    state.option.series[0].itemStyle.borderColor = newVal
    setOption(state.option)
  }
})

watch(() => props.lowColorof1, (newVal) => {
  if (newVal) {
    state.option.visualMap.inRange.color[0] = newVal
    setOption(state.option)
  }
})

watch(() => props.MiddleColorof1, (newVal) => {
  if (newVal) {
    state.option.visualMap.inRange.color[1] = newVal
    setOption(state.option)
  }
})

watch(() => props.highColorof1, (newVal) => {
  if (newVal) {
    state.option.visualMap.inRange.color[2] = newVal
    setOption(state.option)
  }
})

</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
