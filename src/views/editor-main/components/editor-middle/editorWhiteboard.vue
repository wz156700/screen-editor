<!--

组件名称: 画布白板
-->
<template>
  <div class="td-editor-whiteboard" id="td-editor-whiteboard" :style="{
    width: state.width + 'px',
    height: state.height + 'px',
  }">
    <!-- {{ domDataPage }} -->
    <div class="td-editor-whiteboard-box" :style="styleBox">
      <!-- {{ domDataPage }} -->
      <template v-for="item in domDataPage" :key="
          item.uuid +
          item.width +
          item.height +
          item.mtl +
          item.mtr +
          item.mbr +
          item.mbl
        ">

        <div class="td-editor-whiteboard-box-item" :style="{
    display: item.isShow ? 'block' : 'none',
    left:
      whiteboardBox.left + props.positionInfo.left + item.left + 'px',
    top: whiteboardBox.top + props.positionInfo.top + item.top + 'px',
    width: item.width + 'px',
    height: item.height + 'px',
    transform: `rotate(${item.angle}deg)`,
    transformOrigin: `${item.angleX}px ${item.angleY}px`,
    zIndex: item.zIndex,
    borderRadius: `${item.btl}px ${item.btr}px ${item.bbr}px ${item.bbl}px`,
    padding: `${item.mtl}px ${item.mtr}px ${item.mbr}px ${item.mbl}px`,
    alignItems: `${item.alignW}`,
    justifyContent: `${item.alignH}`,
  }" :set-key="item.uuid">
          {{ item.height }}
          <component :is="item.type" class="td-editor-whiteboard-box-item-com" :key="item.uuid" v-bind="item.attribute"
            :width="item.width" :height="item.height" :data="item.data ? item.data : '初始化'"
            :jsondata="item.jsonData ? item.jsonData : '初始化'">
          </component>
        </div>
      </template>
      <h1>{{ domInfo.backgroundColor }}</h1>
      <div class="td-editor-whiteboard-border" id="td-editor-whiteboard-border" :style="{
    left: whiteboardBox.left + props.positionInfo.left + 'px',
    top: whiteboardBox.top + props.positionInfo.top + 'px',
    width: state.width + 'px',
    height: state.height + 'px',
    backgroundColor: state.backgroundColor
      ? state.backgroundColor
      : 'transparent',
    backgroundImage: 'url(data:' + state.backgroundImg + ')',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch } from "vue";
//pinia仓库
import { useCounterStore } from "@/store/editor";
const dataStore = useCounterStore();

const props = defineProps({
  editorMainInfo: {
    type: Object,
    require: true,
  },
  positionInfo: {
    type: Object,
    require: true,
  },
  domData: {
    type: Object,
    default: {},
  },
  domInfo: {
    type: Object,
    default: {},
  },
});

watch(
  () => props.domData,
  (newVal) => {
    console.log("domData变化了", newVal);
  }
);

const state = reactive({
  width: "",
  height: "",
  backgroundColor: "",
  backgroundImg: "",
  targetWidth: "",
  targetHeight: "",
});

watch(
  () => props.domInfo,
  (newVal) => {
    console.log("hahahha变化了~~", newVal);
    let obj = newVal.ratio.split("*");
    state.targetWidth = obj[0];
    state.targetHeight = obj[1];
    state.backgroundColor = newVal.backgroundColor;
    state.backgroundImg = newVal.backgroundImg;
    state.width = obj[0];
    state.height = obj[1];
  },
  { deep: true }
);

watch(
  () => dataStore.ratio,
  (newVal) => {
    console.log("分辨率变化了", newVal);
    let obj = newVal.split("*");
    state.targetWidth = obj[0];
    state.targetHeight = obj[1];
    state.width = obj[0];
    state.height = obj[1];
  },
  {
    deep: true,
  }
);

watch(
  () => dataStore.backgroundColor,
  (newVal) => {
    state.backgroundColor = newVal;
  },
  {
    deep: true,
  }
);

watch(
  () => dataStore.backgroundImg,
  (newVal) => {
    state.backgroundImg = newVal;
  },
  {
    deep: true,
  }
);

const domDataPage = computed(() => {
  return Object.values(props.domData);
});

const whiteboardBox = reactive({
  left: 5000,
  top: 5000,
  x: 0,
  y: 0,
});

const styleBox = computed(() => {
  return {
    left: -whiteboardBox.left + "px",
    top: -whiteboardBox.top + "px",
    transformOrigin: `${whiteboardBox.left}px ${whiteboardBox.top}px`, // ,
    transform: `scale(${props.positionInfo.zoom})`,
    width: `${props.positionInfo.w * 200}px`,
    height: `${props.positionInfo.h * 200}px`,
  };
});
</script>

<style scoped lang="scss">
.td-editor-whiteboard {
  position: relative;

  .td-editor-whiteboard-box {
    width: 20000px;
    height: 20000px;
    position: absolute;
    transform: translateZ(0);

    .td-editor-whiteboard-box-item {
      position: absolute;
      overflow: hidden;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      pointer-events: none;

      .td-editor-whiteboard-box-item-com {
        flex-shrink: 0;
      }
    }
  }

  .td-editor-whiteboard-border {
    z-index: -1;
    // background: yellowgreen;
    position: absolute;
    border: 1px dashed #666;
  }
}
</style>
