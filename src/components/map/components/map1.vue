<!--

组件名称: 地图组件
-->
<template>
  <div class="map-container" ref="refDom"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import { repJson } from "./data";

defineOptions({ name: "Map1" });
const refDom = ref(null);

const infoMap = () => {
  let myChart = echarts.init(refDom.value);
  echarts.registerMap("liaoning", repJson);

  let option = {
    // visualMap: {
    //     min: 0,
    //     max: 50,
    //     text:['High','Low'],
    //     textStyle:{
    //         color:'#fff'
    //     },
    //     realtime: false,
    //     calculable: true,
    //     inRange: {
    //         color: ['lightskyblue','yellow', 'orangered']
    //     }
    // },
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
          areaColor: {
            x: 0.5,
            y: 0.7,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "#2A72D7",
              },
              {
                offset: 1,
                color: "#51A1FB",
              },
            ],
            global: false, // 缺省为 false
          },
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
  };

  option && myChart.setOption(option);
};

onMounted(() => {
  infoMap();
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
