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
            <div class="itemContent">
                <div class="img">
                    <img src="/img/bg.png" alt="">
                </div>

                <div class="editText" v-if="showEditText">
                    <el-input v-model="state.input" style="width: 240px" placeholder="Please input" />
                </div>
                <div class="text" v-else>123</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, reactive, computed } from "vue";

import { useCounterStore } from '@/store/editor'
const emit = defineEmits(["selectItem"]);
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
    isShowLeftBar: computed(() => userStore.global.isShowLeftBar), input: '', showEditText: false
})



const closeLeftBar = () => {
    userStore.global.isShowLeftBar = !userStore.global.isShowLeftBar
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
        display: flex;

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
                width: 70%;
                line-height: 2.5rem;
                color: #fff;
                margin-left: 0.5rem;

            }

            .editText {


                input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                }
            }
        }
    }

}
</style>