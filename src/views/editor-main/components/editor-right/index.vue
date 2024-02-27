<!--
作者: nodebook@qq.com
组件名称: 编辑器右侧
-->
<template>
    <div class="ap-editor-right">
        <!-- 头部 -->
        <div class="ap-editor-right-header">
            <span>属性管理</span>
            <EditorIcon name="right" size="16px"></EditorIcon>
        </div>
        <div class="ap-editor-right-main">
            <div class="ap-editor-right-main-left">
                <!-- <div class="ap-editor-right-main-left-item" title="撤回" @click="redraw('undo')">
					<EditorIcon name="back" size="18px"></EditorIcon>
				</div>
				<div class="ap-editor-right-main-left-item" title="重做" @click="redraw('redo')">
					<EditorIcon name="next" size="18px"></EditorIcon>
				</div> -->
                <div class="ap-editor-right-main-left-item" :class="moveing ? 'is-active' : ''" title="移动画布" @click="updataMoveing">
                    <EditorIcon name="direction-adjustment-three" size="20px"></EditorIcon>
                </div>
                <el-popconfirm title="确定要清空画布嘛?" width="200" confirm-button-text="清空" cancel-button-text="取消" @confirm="confirmDelete">
                    <template #reference>
                        <div class="ap-editor-right-main-left-item" title="清空画布">
                            <EditorIcon name="clear" size="20px"></EditorIcon>
                        </div>
                    </template>
                </el-popconfirm>
                <div class="ap-editor-right-main-left-item" title="横向参考线" @click="reactLine('lineW')">
                    <EditorIcon name="dividing-line" size="20px"></EditorIcon>
                </div>
                <div class="ap-editor-right-main-left-item" title="纵向参考线" @click="reactLine('lineH')">
                    <EditorIcon name="dividing-line" size="20px" style="transform: rotate(90deg)"></EditorIcon>
                </div>
                <div class="ap-editor-right-main-left-line"></div>
                <div :class="classIconRadio" title="图层上移" @click="updataElement('topIndex')">
                    <EditorIcon name="to-top" size="22px"></EditorIcon>
                </div>
                <div :class="classIconRadio" title="图层下移" @click="updataElement('bottomIndex')">
                    <EditorIcon name="to-bottom" size="22px"></EditorIcon>
                </div>
                <div :class="classIconRadioLockL" title="锁定左右" @click="updataElement('auto-height-one')">
                    <EditorIcon name="auto-height-one" size="20px"></EditorIcon>
                </div>
                <div :class="classIconRadioLockT" title="锁定上下" @click="updataElement('auto-width-one')">
                    <EditorIcon name="auto-width-one" size="20px"></EditorIcon>
                </div>
                <div :class="classIcon" title="图层删除" @click="updataElement('delete')">
                    <EditorIcon name="delete" size="20px"></EditorIcon>
                </div>
                <!-- <div :class="classIcon" title="图层复制" @click="updataElement('copy')">
					<EditorIcon name="copy" size="20px"></EditorIcon>
				</div> -->
                <div class="ap-editor-right-main-left-line"></div>
                <div class="ap-editor-right-main-left-item" title="页面换肤">
                    <EditorIcon name="theme" size="20px"></EditorIcon>
                </div>
                <div class="ap-editor-right-main-left-item" title="页面设置">
                    <EditorIcon name="setting-one" size="20px"></EditorIcon>
                </div>
            </div>
            <div class="ap-editor-right-main-right" :key="selectId">
                <el-tabs v-model="activeName" class="ap-editor-right-main-right-tabs" @tab-click="handleClick" :stretch="true">
                    <el-tab-pane label="属性" name="attribute">
                        <el-scrollbar height="100%">
                            <template v-if="propertyTable.attribute.length > 0">
                                <StyleItem
                                    :itemData="propertyData.attribute"
                                    :itemTable="propertyTable.attribute"
                                    :selectId="selectUUIDItem"
                                    :active="attributeActive"
                                    type="attribute"
                                ></StyleItem>
                            </template>
                            <el-empty description=" " v-else>
                                <template #image>暂无数据</template>
                            </el-empty>
                        </el-scrollbar>
                    </el-tab-pane>
                    <el-tab-pane label="样式" name="style">
                        <el-scrollbar height="100%">
                            <template v-if="propertyTable.style.length > 0">
                                <StyleItem :itemData="propertyData.style" :itemTable="propertyTable.style" :active="styleActive" :selectId="selectUUIDItem" type="style"></StyleItem>
                            </template>
                            <el-empty description=" " v-else>
                                <template #image>暂无数据</template>
                            </el-empty>
                        </el-scrollbar>
                    </el-tab-pane>
                    <el-tab-pane label="数据" name="data">
                        <!-- <ItemData></ItemData> -->
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch, inject } from "vue";
import StyleItem from "./styleItem.vue";
import ItemData from "./itemData.vue";
const provideFun = inject("updataRight", null);
const provideFunIcon = inject("updataRightIcon", null);
import { ElMessage, ElMessageBox } from "element-plus";

const attributeActive = ref(["A"]);
const styleActive = ref(["A"]);

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
    if (selectUUIDItem.value && props.domData && props.domData[selectUUIDItem.value]) {
        return props.domData[selectUUIDItem.value].lockMovementX;
    } else {
        false;
    }
});
const lockMovementY = computed(() => {
    if (selectUUIDItem.value && props.domData && props.domData[selectUUIDItem.value]) {
        return props.domData[selectUUIDItem.value].lockMovementY;
    } else {
        false;
    }
});

const updataMoveing = () => {
    provideFunIcon.moveing();
};

const classIcon = computed(() => ["ap-editor-right-main-left-item", props.selectId && props.selectId.length > 0 ? "" : "is-disabled"]);

const classIconRadio = computed(() => ["ap-editor-right-main-left-item", selectUUIDItem.value ? "" : "is-disabled"]);

const classIconRadioLockL = computed(() => ["ap-editor-right-main-left-item", selectUUIDItem.value ? "" : "is-disabled", selectUUIDItem.value && lockMovementX.value ? "is-active" : ""]);
const classIconRadioLockT = computed(() => ["ap-editor-right-main-left-item", selectUUIDItem.value ? "" : "is-disabled", selectUUIDItem.value && lockMovementY.value ? "is-active" : ""]);

const updataElement = (item) => {
    switch (item) {
        case "topIndex":
            provideFun("zIndex", props.domData[selectUUIDItem.value].zIndex + 1, selectUUIDItem.value, "style");
            break;
        case "bottomIndex":
            if (props.domData[selectUUIDItem.value].zIndex < 0) {
                new Error("层级小于0");
                return;
            }
            provideFun("zIndex", props.domData[selectUUIDItem.value].zIndex - 1, selectUUIDItem.value, "style");
            break;
        case "auto-height-one":
            provideFun("lockMovementX", !lockMovementX.value, selectUUIDItem.value, "style");
            break;
        case "auto-width-one":
            provideFun("lockMovementY", !lockMovementY.value, selectUUIDItem.value, "style");
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
.ap-editor-right {
    width: 100%;
    height: 100%;
    font-size: 12px;
    user-select: none;
}
.ap-editor-right-header {
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--ap-editor-border);
    i {
        font-size: 14px;
        cursor: pointer;
    }
}
.ap-editor-right-main {
    width: 100%;
    height: calc(100% - 36px);
    display: flex;
    .ap-editor-right-main-left {
        width: 40px;
        height: 100%;
        border-right: 1px solid var(--ap-editor-border);
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        padding-top: 15px;
        box-sizing: border-box;
        .ap-editor-right-main-left-item {
            width: 30px;
            height: 30px;
            // background: yellowgreen;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            cursor: pointer;
            &.is-active {
                background: var(--ap-editor-left-nav-bg);
                color: var(--ap-editor-left-nav-text);
            }
            &.is-disabled {
                color: var(--ap-editor-disabled-text);
                cursor: not-allowed;
                pointer-events: none;
            }
        }
        .ap-editor-right-main-left-line {
            width: 30px;
            height: 1px;
            background: var(--ap-editor-left-nav-bg);
            margin-bottom: 20px;
        }
    }
    .ap-editor-right-main-right {
        width: calc(100% - 40px);
        height: 100%;
        .ap-editor-right-main-right-tabs {
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
        .ap-editor-right-main-right-tabs-item {
            width: 100%;
            // height: calc(100% - 40px);
            // background: yellow;
        }
    }
}
</style>
