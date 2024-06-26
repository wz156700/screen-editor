<!--
组件名称: 可视化编辑器
-->
<template>
  <div class="td-editor">
    <!-- 标尺 -->
    <div class="td-editor-rod">
      <EditorRod :positionInfo="positionInfo"></EditorRod>
    </div>
    <!-- 内容区 -->
    <div class="td-editor-main" ref="editorMain">
      <EditorMain @updataSize="updataSize" @addDOM="addDOM" @updataDOM="updataDOM" @updataDOMArray="updataDOMArray"
        @removeDOM="removeDOM" @selectDom="selectDom" @updataIndex="updataIndex" :draggable="draggable"
        :canvasInfo="canvasInfo" ref="EditorMainRef" :domInfo="domInfo"></EditorMain>
      <editorWhiteboard :editorMainInfo="editorMainInfo" :positionInfo="positionInfo" :domData="domData"
        class="td-editor-mainBoard" :domInfo="domInfo"></editorWhiteboard>
    </div>
  </div>
</template>

<script setup>
import EditorRod from "./editorRods.vue";
import EditorMain from "./editorMain.vue";
import editorWhiteboard from "./editorWhiteboard.vue";

import { onMounted, reactive, ref } from "vue";

const EditorMainRef = ref(null);
const editorMain = ref(null);

const emit = defineEmits([
  "addDOM",
  "updataDOM",
  "updataDOMArray",
  "removeDOM",
  "selectDom",
  "updataIndex",
]);

const props = defineProps({
  domData: {
    type: Object,
    required: true,
  },
  draggable: {
    type: Object,
    default: null,
  },
  canvasInfo: {
    type: Object,
    required: true,
  },
  domInfo: {
    type: Object,
    required: true,
  },
});

// 所有元素信息
// 添加元素
const addDOM = (val) => {
  emit("addDOM", val);
};
// 移动元素
const updataDOM = (val) => {
  emit("updataDOM", val);
};
// 批量移动元素
const updataDOMArray = (vals) => {
  emit("updataDOMArray", vals);
};
// 删除元素
const removeDOM = (val) => {
  emit("removeDOM", val);
};
// 更新z-index
const updataIndex = (item) => {
  emit("updataDOM", {
    uuid: item.uuid,
    zIndex: item.value,
  });
};
// 获取编辑区域的宽高
const editorMainInfo = reactive({
  w: 0,
  h: 0,
});
// 位置信息
const positionInfo = ref({
  w: 0,
  h: 0,
  left: 0,
  top: 0,
  x: 0,
  y: 0,
  zoom: 0,
});

// 位置改变
const updataSize = (item) => {
  positionInfo.value = {
    ...item,
  };
};

const getEditorMain = () => {
  editorMainInfo.w = editorMain.value.offsetWidth;
  editorMainInfo.h = editorMain.value.offsetHeight;
};
onMounted(() => {
  getEditorMain();
});

const selectDom = (val) => {
  emit("selectDom", val);
};

// 选择元素
const selectCanvas = (itemData) => {
  EditorMainRef.value.selectCanvas(itemData);
};

// 修改元素的属性
const updataFiles = (label, value, uuid) => {
  EditorMainRef.value.updataFiles(label, value, uuid);
};
// 删除元素
const deleteItem = (uuid) => {
  EditorMainRef.value.deleteItem(uuid);
};

const undo = () => {
  EditorMainRef.value.undo();
};
const redo = () => {
  EditorMainRef.value.redo();
};
const creatLine = (type, val) => {
  EditorMainRef.value.creatLine(type, val);
};
// 设置canvas
const setCanvas = (val) => {
  EditorMainRef.value.setCanvas(val);
};

const showOrhideEle = (uuid) => {
  EditorMainRef.value.showOrhideEle(uuid);
}
defineExpose({
  updataFiles,
  deleteItem,
  undo,
  redo,
  creatLine,
  setCanvas,
  selectCanvas,
  showOrhideEle
});
</script>

<style scoped>
.td-editor {
  width: 100%;
  height: 200%;
  padding: 40px 0 0 40px;
  box-sizing: border-box;
  position: relative;
}

.td-editor-main {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.td-editor-rod {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

svg {
  margin: 0;
  padding: 0;
}

.td-editor-mainBoard {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
