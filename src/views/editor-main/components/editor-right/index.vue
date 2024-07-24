<!--

组件名称: 编辑器右侧
-->
<template>
  <div class="td-editor-right">
    <!-- 头部 -->
    <div class="td-editor-right-header">
      <span v-if="state.isShowRightBar">属性管理</span>
      <div style="cursor: pointer">
        <EditorIcon
          name="right"
          size="16px"
          @click="isShowRightBar"
          v-if="state.isShowRightBar"
        ></EditorIcon>
        <EditorIcon
          name="left"
          size="16px"
          @click="isShowRightBar"
          v-if="!state.isShowRightBar"
        ></EditorIcon>
      </div>
    </div>
    <div class="td-editor-right-main">
      <div class="td-editor-right-main-left">
        <div
          class="td-editor-right-main-left-item"
          title="撤回"
          @click="redraw('undo')"
        >
          <EditorIcon name="back" size="18px"></EditorIcon>
        </div>
        <div
          class="td-editor-right-main-left-item"
          title="重做"
          @click="redraw('redo')"
        >
          <EditorIcon name="next" size="18px"></EditorIcon>
        </div>
        <div
          class="td-editor-right-main-left-item"
          :class="moveing ? 'is-active' : ''"
          title="移动画布"
          @click="updataMoveing"
        >
          <EditorIcon
            name="direction-adjustment-three"
            size="20px"
          ></EditorIcon>
        </div>
        <el-popconfirm
          title="确定要清空画布嘛?"
          width="200"
          confirm-button-text="清空"
          cancel-button-text="取消"
          @confirm="confirmDelete"
        >
          <template #reference>
            <div class="td-editor-right-main-left-item" title="清空画布">
              <EditorIcon name="clear" size="20px"></EditorIcon>
            </div>
          </template>
        </el-popconfirm>
        <div
          class="td-editor-right-main-left-item"
          title="横向参考线"
          @click="reactLine('lineW')"
        >
          <EditorIcon name="dividing-line" size="20px"></EditorIcon>
        </div>
        <div
          class="td-editor-right-main-left-item"
          title="纵向参考线"
          @click="reactLine('lineH')"
        >
          <EditorIcon
            name="dividing-line"
            size="20px"
            style="transform: rotate(90deg)"
          ></EditorIcon>
        </div>
        <div class="td-editor-right-main-left-line"></div>
        <div
          :class="classIconRadio"
          title="图层上移"
          @click="updataElement('topIndex')"
        >
          <EditorIcon name="to-top" size="22px"></EditorIcon>
        </div>
        <div
          :class="classIconRadio"
          title="图层下移"
          @click="updataElement('bottomIndex')"
        >
          <EditorIcon name="to-bottom" size="22px"></EditorIcon>
        </div>
        <div
          :class="classIconRadioLockL"
          title="锁定左右"
          @click="updataElement('auto-height-one')"
        >
          <EditorIcon name="auto-height-one" size="20px"></EditorIcon>
        </div>
        <div
          :class="classIconRadioLockT"
          title="锁定上下"
          @click="updataElement('auto-width-one')"
        >
          <EditorIcon name="auto-width-one" size="20px"></EditorIcon>
        </div>
        <div
          :class="classIcon"
          title="图层删除"
          @click="updataElement('delete')"
        >
          <EditorIcon name="delete" size="20px"></EditorIcon>
        </div>
        <!-- <div :class="classIcon" title="图层复制" @click="updataElement('copy')">
					<EditorIcon name="copy" size="20px"></EditorIcon>
				</div> -->
        <div class="td-editor-right-main-left-line"></div>
        <div class="td-editor-right-main-left-item" title="页面换肤">
          <EditorIcon name="theme" size="20px"></EditorIcon>
        </div>
        <div class="td-editor-right-main-left-item" title="页面设置">
          <EditorIcon name="setting-one" size="20px"></EditorIcon>
        </div>
      </div>
      <div class="td-editor-right-main-right" :key="selectId">
        <el-tabs
          v-model="activeName"
          class="td-editor-right-main-right-tabs"
          @tab-click="handleClick"
          :stretch="true"
        >
          <el-tab-pane label="属性" name="attribute">
            <el-scrollbar height="100%">
              <template v-if="propertyTable.attribute.length > 0">
                <StyleItem
                  :itemData="propertyData.attribute"
                  :itemTable="propertyTable.attribute"
                  :selectId="selectUUIDItem"
                  :active="attributeActive"
                  type="attribute"
                >
                </StyleItem>
              </template>
              <el-empty description=" " v-else>
                <template #image>暂无数据</template>
              </el-empty>
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane label="样式" name="style">
            <el-scrollbar height="100%">
              <template v-if="propertyTable.style.length > 0">
                <StyleItem
                  :itemData="propertyData.style"
                  :itemTable="propertyTable.style"
                  :active="styleActive"
                  :selectId="selectUUIDItem"
                  type="style"
                ></StyleItem>
              </template>
              <el-empty description=" " v-else>
                <template #image>暂无数据</template>
              </el-empty>
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane label="数据" name="data">
            <template v-if="Object.keys(propertyTable.data).length > 0">
              <ItemData
                @updataDOM="updataDOM"
                :itemData="propertyTable.data"
              ></ItemData>
            </template>
            <el-empty description=" " v-else>
              <template #image>暂无数据</template>
            </el-empty>
          </el-tab-pane>
          <el-tab-pane label="交互" name="nnteraction">
            <el-scrollbar height="100%">
              <p style="text-align: center; line-height: 2.5rem">
                功能正在开发中......
              </p>
            </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, inject, reactive } from "vue";
import StyleItem from "./styleItem.vue";
import ItemData from "./itemData.vue";
const provideFun = inject("updataRight", null);
const provideFunIcon = inject("updataRightIcon", null);
import { ElMessage, ElMessageBox } from "element-plus";

//pinia仓库
import { useCounterStore } from "@/store/editor";
const dataStore = useCounterStore();

const attributeActive = ref(["A"]);
const styleActive = ref(["A"]);

const emit = defineEmits(["updataDOM"]);

const updataDOM = (val) => {
  emit("updataDOM", val);
};

const state = reactive({
  isShowRightBar: computed(() => dataStore.global.isShowRightBar),
});

//控制右侧边栏是否展开
const isShowRightBar = () => {
  dataStore.global.isShowRightBar = !dataStore.global.isShowRightBar;
};

const props = defineProps({
  propertyTable: {
    type: Object,
    default: {
      attribute: [],
      style: [],
      data: {},
    },
  },
  propertyData: {
    type: Object,
    default: {
      attribute: {},
      style: {},
      data: {},
    },
  },
  domData: Object,
  selectId: Array,
  canvasInfo: {
    type: Object,
    required: true,
  },
});

const moveing = computed(() => {
  return props.canvasInfo.moveing;
});

const selectUUIDItem = computed(() => {
  if (props.selectId && props.selectId.length == 1) {
    return props.selectId[0];
  } else {
    return null;
  }
});

const lockMovementX = computed(() => {
  if (
    selectUUIDItem.value &&
    props.domData &&
    props.domData[selectUUIDItem.value]
  ) {
    return props.domData[selectUUIDItem.value].lockMovementX;
  } else {
    false;
  }
});
const lockMovementY = computed(() => {
  if (
    selectUUIDItem.value &&
    props.domData &&
    props.domData[selectUUIDItem.value]
  ) {
    return props.domData[selectUUIDItem.value].lockMovementY;
  } else {
    false;
  }
});

const updataMoveing = () => {
  provideFunIcon.moveing();
};

const classIcon = computed(() => [
  "td-editor-right-main-left-item",
  props.selectId && props.selectId.length > 0 ? "" : "is-disabled",
]);

const classIconRadio = computed(() => [
  "td-editor-right-main-left-item",
  selectUUIDItem.value ? "" : "is-disabled",
]);

const classIconRadioLockL = computed(() => [
  "td-editor-right-main-left-item",
  selectUUIDItem.value ? "" : "is-disabled",
  selectUUIDItem.value && lockMovementX.value ? "is-active" : "",
]);
const classIconRadioLockT = computed(() => [
  "td-editor-right-main-left-item",
  selectUUIDItem.value ? "" : "is-disabled",
  selectUUIDItem.value && lockMovementY.value ? "is-active" : "",
]);

const updataElement = (item) => {
  switch (item) {
    case "topIndex":
      provideFun(
        "zIndex",
        props.domData[selectUUIDItem.value].zIndex + 1,
        selectUUIDItem.value,
        "style"
      );
      break;
    case "bottomIndex":
      if (props.domData[selectUUIDItem.value].zIndex < 0) {
        new Error("层级小于0");
        return;
      }
      provideFun(
        "zIndex",
        props.domData[selectUUIDItem.value].zIndex - 1,
        selectUUIDItem.value,
        "style"
      );
      break;
    case "auto-height-one":
      provideFun(
        "lockMovementX",
        !lockMovementX.value,
        selectUUIDItem.value,
        "style"
      );
      break;
    case "auto-width-one":
      provideFun(
        "lockMovementY",
        !lockMovementY.value,
        selectUUIDItem.value,
        "style"
      );
      break;
    case "delete":
      provideFunIcon.deleteItem(props.selectId);
      break;
  }
};

const confirmDelete = () => {
  provideFunIcon.deleteItem();
};

const activeName = ref("style");
const handleClick = (tab, event) => {
  // console.log(tab, event)
};

const redraw = (val) => {
  if (val == "undo") {
    provideFunIcon.undo();
  } else {
    provideFunIcon.redo();
  }
};

const reactLine = (val) => {
  let title;
  if (val == "lineW") {
    title = "横向参考线Y轴坐标";
  } else {
    title = "纵向参考线X轴坐标";
  }
  ElMessageBox.prompt(`请输入${title}`, "创建参考线", {
    confirmButtonText: "创建",
    cancelButtonText: "取消",
    inputPattern: /^\d+$/,
    inputErrorMessage: "请输入数字",
  })
    .then(({ value }) => {
      provideFunIcon.creatLine(val, {
        value,
      });
    })
    .catch(() => {});
};
</script>

<style scoped lang="scss">
.td-editor-right {
  width: 100%;
  height: 100%;
  font-size: 12px;
  user-select: none;
}

.td-editor-right-header {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--td-editor-border);

  i {
    font-size: 14px;
    cursor: pointer;
  }
}

.td-editor-right-main {
  width: 100%;
  height: calc(100% - 36px);
  display: flex;

  .td-editor-right-main-left {
    width: 2.5rem;
    height: 100%;
    border-right: 1px solid var(--td-editor-border);
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    padding-top: 15px;
    box-sizing: border-box;

    .td-editor-right-main-left-item {
      width: 1.875rem;
      height: 1.875rem;
      // background: yellowgreen;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.25rem;
      cursor: pointer;

      &.is-active {
        background: var(--td-editor-left-nav-bg);
        color: var(--td-editor-left-nav-text);
      }

      &.is-disabled {
        color: var(--td-editor-disabled-text);
        cursor: not-allowed;
        pointer-events: none;
      }
    }

    .td-editor-right-main-left-line {
      width: 1.875rem;
      height: 1px;
      background: var(--td-editor-left-nav-bg);
      margin-bottom: 1.25rem;
    }
  }

  .td-editor-right-main-right {
    width: calc(100% - 2.5rem);
    height: 100%;
    background-color: rgba(33, 51, 124, 0.5);

    .td-editor-right-main-right-tabs {
      width: 100%;
      height: 100%;
    }

    &:deep(.el-tabs__content) {
      width: 100%;
      height: calc(100% - 55px);
    }

    &:deep(.el-tab-pane) {
      width: 100%;
      height: 100%;
    }

    .td-editor-right-main-right-tabs-item {
      width: 100%;
      // height: calc(100% - 40px);
      // background: yellow;
    }
  }
}
</style>
