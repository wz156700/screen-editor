<template>
  <div class="map-container" ref="refDom"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, watch, defineProps, reactive, nextTick } from "vue";
import { repJson } from "./data";

defineOptions({ name: "Map1" });

const props = defineProps({
  data: {
    type: String,
    require: true,
  },
  jsondata: {
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
    default: "",
  },
  MiddleColorof1: {
    type: String,
    default: "",
  },
  highColorof1: {
    type: String,
    default: "",
  },
});

const refDom = ref(null);

const state = reactive({
  option: {
    visualMap: {
      text: ['高', '低'],
      textStyle: {
        color: '#fff'
      },
      realtime: false,
      calculable: true,
      inRange: {
        color: ['#e0ffff', '#006edd',]
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
            fontSize: 18,
          },
          emphasis: {
            show: true,
            color: "#ff0000",
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: "red", // 高亮时候地图显示的颜色
            borderWidth: 1, // 高亮时的边框宽度
          }
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

//处理数据
const handleData = (data) => {
  state.option.series[0].data = data;

  setOption(state.option);
};

onMounted(() => {
  infoMap();
});

watch(() => props.mapLabelColor, (newVal) => {
  if (newVal) {
    state.option.series[0].label.normal.color = newVal
    setOption(state.option)
  }
}, { immediate: true, deep: true })

watch(() => props.mapLabelFontSize, (newVal) => {
  if (newVal) {
    state.option.series[0].label.normal.fontSize = newVal
    setOption(state.option)
  }
}, { immediate: true, deep: true })


watch(() => props.emphasisColor, (newVal) => {
  if (newVal) {
    state.option.series[0].label.emphasis.color = newVal
    setOption(state.option)
  }
}, { immediate: true, deep: true })

watch(() => props.plateEdgeColor, (newVal) => {
  if (newVal) {
    state.option.series[0].itemStyle.borderColor = newVal
    setOption(state.option)
  }
}, { immediate: true, deep: true })

watch(() => props.lowColorof1, (newVal) => {
  if (newVal) {
    state.option.visualMap.inRange.color[0] = newVal
    state.option.visualMap.inRange.color[1] = props.MiddleColorof1
    state.option.visualMap.inRange.color[2] = props.highColorof1
    setOption(state.option)
  }
})

watch(() => props.MiddleColorof1, (newVal) => {
  if (newVal) {
    state.option.visualMap.inRange.color[1] = newVal
    state.option.visualMap.inRange.color[0] = props.lowColorof1
    state.option.visualMap.inRange.color[2] = props.highColorof1
    setOption(state.option)
  }
}, { immediate: true, deep: true })

watch(() => props.highColorof1, (newVal) => {
  if (newVal) {
    state.option.visualMap.inRange.color[2] = newVal
    state.option.visualMap.inRange.color[1] = props.MiddleColorof1
    state.option.visualMap.inRange.color[0] = props.lowColorof1
    setOption(state.option)
  }
}, { immediate: true, deep: true })

//监听页面数据变化
watch(() => props.data, (newval) => {
  console.log("地图数据改变了~", newval)
  if (newval) {
    let data = JSON.parse(JSON.stringify(newval))
    console.log("data~~~xixixi", typeof data)
    if (Object.keys(data).length == 0) {
      return
    }
    handleData(data)
  }

}, { immediate: true, deep: true })

watch(() => props.jsondata, (newval) => {
  console.log('地图Json数据~~', newval)
  if (newval != "初始化" && newval) {
    let data = JSON.parse(JSON.stringify(newval))
    console.log("data~~~", data)
    echarts.registerMap("china", data);
    state.option.series[0].map = 'china'
    setOption(state.option);
  }

}, { immediate: true, deep: true })

</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
