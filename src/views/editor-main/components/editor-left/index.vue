<!--

组件名称: 组件管理
-->
<template>
    <div class="td-editorLeft">
        <!-- 名称 -->
        <div class="td-editorLeft-name">
            <span v-if="state.isShowLeftBar">页面结构</span>
            <div style="cursor: pointer">
                <EditorIcon name="left" size="16px" @click="closeLeftBar" v-if="state.isShowLeftBar">
                </EditorIcon>
                <EditorIcon name="right" size="16px" @click="closeLeftBar" v-if="!state.isShowLeftBar"></EditorIcon>
            </div>

        </div>
        <!-- 内容 -->
        <div class="td-editorLeft-content">
            <div class="itemContent" v-for="(item, index) in state.domData" :key="item.uuid">
                <div class="img">
                    <img :src="item.img" alt="">
                </div>

                <div class="editText" v-if="state.showEditText">
                    <el-input v-model="state.input" :placeholder="item.name" @blur="closeEdit" />
                </div>
                <div class="text" v-else @dblclick="edittext">{{ item.name }}</div>

                <div class="icon" @click="hideOrShowEle(item)">
                    <SvgIcon iconName="icon-yincang1" style="margin-right: 5px;" v-if="item.isShow"></SvgIcon>
                    <SvgIcon iconName="icon-yincang" style="margin-right: 5px;" v-if="!item.isShow"></SvgIcon>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, reactive, computed } from "vue";

import { useCounterStore } from '@/store/editor'
const emit = defineEmits(["selectItem", "updataDOM", 'updateShowOrHideEles']);
const userStore = useCounterStore()
const props = defineProps({
    domData: {
        type: Object,
        required: true,
    },
    selectId: {
        type: Array,
        default: [],
    },
});

const state = reactive({
    isShowLeftBar: computed(() => userStore.global.isShowLeftBar), input: '', showEditText: false,
    domData: computed(() => props.domData)
})



const closeLeftBar = () => {
    userStore.global.isShowLeftBar = !userStore.global.isShowLeftBar
}

const edittext = () => {
    console.log("点击了")
    state.showEditText = true;

}

const closeEdit = () => {
    console.log("失去焦点了")
    state.showEditText = false;
}

const hideOrShowEle = (item) => {
    item.isShow = !item.isShow
    emit("updataDOM", item);
    emit("updateShowOrHideEles", state.domData);
}

</script>

<style lang="scss" scoped>
.td-editorLeft {
    width: 100%;
    height: 100%;
    font-size: 12px;
    user-select: none;
    overflow: hidden;


    .td-editorLeft-name {
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
        }
    }

    .td-editorLeft-content {
        width: 100%;
        height: calc(100% - 36px);

        .itemContent {
            display: flex;
            width: 80%;
            height: 2.5rem;
            margin: 0.5rem auto;
            outline: 1px solid red;

            .img {
                width: 30%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .text,
            .editText {
                width: 50%;
                line-height: 2.5rem;
                color: #fff;
                margin-left: 0.5rem;
                font-size: 0.85rem;

            }

            .editText {
                input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                }
            }

            .icon {
                position: relative;
                width: 20%;
                height: 100%;
                font-size: 1rem;
                color: white;
                cursor: pointer;
            }
        }
    }

}
</style>

<style>
.el-input {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}

.el-input__wrapper {
    padding: 0 !important
}

.el-input__wrapper {
    border: none !important;
}

.el-input__inner {
    padding-block: 0 !important;
    padding-inline: 0 !important;
    font-size: 0.85rem;
}

.el-input__wrapper:hover {
    box-shadow: none !important;
}

.is-focus {
    box-shadow: none !important;
}

.el-input__wrapper {
    box-shadow: none !important;
}
</style>