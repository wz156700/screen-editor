<!--

组件名称:主页面
-->
<template>
  <div class="ap-editorMain">
    <!-- 上 -->
    <div class="ap-editorMain-topBox">
      <EditorTop @saveItem="saveItem" @previewItem="previewItem" :domInfo="domInfo"></EditorTop>
    </div>
    <!-- 中心 -->
    <div class="ap-editorMain-main">
      <!-- 左侧 -->
      <div class="ap-editorMain-main-left" :style="{ width: state.isShowLeftBar ? '18.75rem' : '3.75rem' }">
        <EditorLeft :domData="domData" @selectItem="selectItem" :selectId="selectUUID"></EditorLeft>
      </div>
      <!-- 中间 -->

      <div class="ap-editorMain-main-middle" ref="mainMiddle">
        <EditorMiddle :domData="domData" @addDOM="addDOM" @updataDOM="updataDOM" @updataDOMArray="updataDOMArray"
          @removeDOM="removeDOM" @selectDom="selectDom" :draggable="draggable" ref="EditorMiddleRef"
          :canvasInfo="canvasState" :domInfo="domInfo"></EditorMiddle>
      </div>
      <!-- 右侧 -->
      <div class="ap-editorMain-main-right" :style="{ width: state.isShowRightBar ? '22.5rem' : '2.5rem' }">
        <EditorRight :propertyData="propertyData" :propertyTable="propertyTable" :selectId="selectUUID"
          :domData="domData" :canvasInfo="canvasState" @updataDOM="updataDOM"></EditorRight>
      </div>
    </div>
  </div>
</template>

<script setup>
import EditorTop from "./components/editor-top/index.vue";
import EditorLeft from "./components/editor-left/index.vue";
import EditorMiddle from "./components/editor-middle/index.vue";
import EditorRight from "./components/editor-right/index.vue";
import { getConfig, getConfigData } from "@/assets/componentData/index";
import {
  computed,
  provide,
  reactive,
  ref,
  toRef,
  watch,
  toRaw,
  getCurrentInstance,
  onMounted
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const route = useRoute();
const userRouter = useRouter();
const { indexDBUpdata, indexDBSearch } =
  getCurrentInstance().appContext.config.globalProperties;
const EditorMiddleRef = ref(null);

//pinia仓库
import { useCounterStore } from "@/store/editor";
const dataStore = useCounterStore();
const mainMiddle = ref(null);

const state = reactive({
  isShowLeftBar: computed(() => dataStore.global.isShowLeftBar),
  isShowRightBar: computed(() => dataStore.global.isShowRightBar)
})

//监听左侧边栏更改中间编辑区域的宽度
watch(() => dataStore.global.isShowLeftBar, (newVal) => {
  console.log('mainMiddle', mainMiddle.value.style, newVal)
  if (newVal) {
    //如果两边都展开的话
    mainMiddle.value.style.width = dataStore.global.isShowRightBar ? 'calc(100% - 41.25rem)' : 'calc(100% - 21.25rem)';
  } else {
    mainMiddle.value.style.width = dataStore.global.isShowRightBar ? 'calc(100% - 26.25rem)' : 'calc(100% - 6.25rem)';
  }
})

//监听右侧边栏更改中间编辑区域的宽度
watch(() => dataStore.global.isShowRightBar, (newVal) => {
  if (newVal) {
    //如果两边都展开的话
    mainMiddle.value.style.width = dataStore.global.isShowLeftBar ? 'calc(100% - 41.25rem)' : 'calc(100% - 26.5rem)';
  } else {
    mainMiddle.value.style.width = dataStore.global.isShowLeftBar ? 'calc(100% - 21.25rem)' : 'calc(100% - 6.25rem)';
  }
})

// 当前拖拽的元素
const draggable = ref(null);

// 所有元素信息
let domData = reactive({});

// 项目初始化数据
let domInfo = ref({});

// 选中的元素
const selectUUID = ref(null);

// 画布状态
const canvasState = ref({
  moveing: false,
  lineH: false,
  lineW: false,
});

defineOptions({ name: "ap-editor" });

// 添加元素
const addDOM = (val) => {
  if (val.uuid) {
    domData[val.uuid] = val;
  }
};
// 移动元素
const updataDOM = (val) => {
  console.log("val~~~", val);
  if (!val.uuid) return;
  domData[val.uuid] = {
    ...domData[val.uuid],
    ...val,
  };
  console.log("domData[val.uuid]", domData[val.uuid]);
};
// 批量移动元素
const updataDOMArray = (vals) => {
  if (!vals) return;
  for (let i = 0; i < vals.length; i++) {
    if (!vals[i].uuid) continue;
    domData[vals[i].uuid] = {
      ...domData[vals[i].uuid],

      ...vals[i],
    };
  }
};
// 删除元素
const removeDOM = (val) => {
  delete domData[val];
};

// 当前选中的元素信息
const propertyData = ref({
  attribute: {},
  style: {},
  data: {},
});
// 当前选中的元素结构
const propertyTable = ref({
  attribute: [],
  style: [],
  data: {},
});
// 选中元素
const selectDom = (val) => {
  selectUUID.value = val;
  dataStore.element.selectedUUid = selectUUID.value;

  if (val && val.length == 1) {
    let itemData = domData[val[0]];
    propertyData.value = {
      ...getConfigData(itemData.mark, itemData),
    };

    propertyTable.value = {
      ...getConfig(itemData.mark),
    };
  } else {
    propertyData.value = {
      attribute: {},
      style: {},
      data: {},
    };
    propertyTable.value = {
      attribute: [],
      style: [],
      data: {},
    };
  }
};

const selectItem = (item) => {
  EditorMiddleRef.value.selectCanvas(item);
};

// 监听画布改变，更新元素
watch(
  () => domData,
  (news) => {
    // 检查对象是否为空
    const isEmpty = Object.keys(news).length === 0;
    if (!isEmpty && selectUUID.value && selectUUID.value.length == 1) {
      let itemData = news[selectUUID.value];
      if (itemData) {
        propertyData.value = {
          ...getConfigData(itemData.mark, itemData),
        };
      } else {
        propertyData.value = {
          attribute: {},
          style: {},
          data: {},
        };
        propertyTable.value = {
          attribute: [],
          style: [],
          data: {},
        };
      }
    }
  },
  {
    deep: true,
  }
);

// 需要修改画布的属性
let canvasUpdata = [
  "width",
  "height",
  "zIndex",
  "left",
  "top",
  "lockMovementY",
  "lockMovementX",
];

let domUpdata = [
  "mbl",
  "mbr",
  "mtl",
  "mtr",
  "bbl",
  "bbr",
  "btl",
  "btr",
  "alignH",
  "alignW",
];

const updataRight = (label, value, uuid, type) => {
  if (type == "style" && canvasUpdata.includes(label)) {
    EditorMiddleRef.value.updataFiles(label, value, uuid);
  } else if (type == "style" && domUpdata.includes(label)) {
    domData[uuid][label] = value;
  } else if (type == "style") {
    domData[uuid].style[label] = value;
  } else if (type == "attribute") {
    domData[uuid].attribute[label] = value;
  }
};

const draggableLeft = (val) => {
  draggable.value = val;
};
// 更新属性
provide("updataRight", updataRight);
// 更新拖拽元素
provide("draggable", draggableLeft);

// 左侧侧边栏操作
provide("updataRightIcon", {
  moveing: () => {
    canvasState.value.moveing = !canvasState.value.moveing;
  },
  deleteItem: (vals) => {
    EditorMiddleRef.value.deleteItem(vals);
  },
  redo: () => {
    EditorMiddleRef.value.redo();
  },
  undo: () => {
    EditorMiddleRef.value.undo();
  },
  creatLine: (type, val) => {
    EditorMiddleRef.value.creatLine(type, val);
  },
});
// 保存
const saveItem = async () => {
  let result = await indexDBSearch("project", route.params.id);

  indexDBUpdata("project", {
    ...result,
    uuid: route.params.id,
    domData: JSON.stringify(domData),
  });
  ElMessage({
    type: "success",
    message: "保存成功",
  });
};
// 预览
const previewItem = () => {
  // 跳转
  userRouter.push({
    name: "preview",
    params: {
      id: route.params.id,
    },
  });
};
// 查询数据
const getItem = () => {
  indexDBSearch("project", route.params.id).then((res) => {
    if (!res) {
      ElMessage.error("查询项目不存在");
      userRouter.replace("/");
      return;
    }
    let domDataIndexDB = res.domData ? JSON.parse(res.domData) : null;
    if (domDataIndexDB) {
      EditorMiddleRef.value.setCanvas(domDataIndexDB);
    }
    res.width = res.ratio.split("*")[0] + "px";
    res.height = res.ratio.split("*")[1] + "px";
    res.backgroundColor = res.backgroundColor
      ? res.backgroundColor
      : "transparent";
    domInfo.value = {
      ...res,
    };
  });
};

onMounted(() => {
  if (!route.params.id) {
    userRouter.replace("/");
    return;
  }
  getItem();
});
</script>

<style lang="scss" scoped>
.ap-editorMain {
  width: 100%;
  height: 100%;
  background: var(--ap-editor-bg);
  color: var(--ap-editor-color);


  .ap-editorMain-topBox {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid var(--ap-editor-border);
    box-sizing: border-box;
  }

  .ap-editorMain-main {
    width: 100%;
    height: calc(100% - 45px);
    display: flex;

    .ap-editorMain-main-left {
      width: 18.75rem;
      height: 100%;
      border-right: 1px solid var(--ap-editor-border);
      box-sizing: border-box;
      // transition: all 1s ease;
    }

    .ap-editorMain-main-middle {
      width: calc(100% - 41.25rem);
      height: 100%;
    }

    .ap-editorMain-main-right {
      width: 22.5rem;
      height: 100%;
      border-left: 1px solid var(--ap-editor-border);
      box-sizing: border-box;
      overflow: hidden;
    }
  }
}
</style>
