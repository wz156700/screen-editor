<!--
作者: nodebook@qq.com
组件名称: 
-->
<template>
    <div class="itemData">
        <el-form :model="formPublic" label-width="100px" style="padding-right: 10px; box-sizing: border-box">
            <el-form-item label="请求方式">
                <el-select v-model="formPublic.dataType" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
        </el-form>
        <div class="itemDataItemName">
            静态数据
        </div>
        <div class="itemDataItemCode">
            <Codemirror class="bodyItemCode" :value="formPublic.resBody" :options="cmOptions" placeholder="请使用标准的JSON语法"
                :height="450" @change="change"></Codemirror>
        </div>
    </div>
</template>

<script setup>
import Codemirror from "codemirror-editor-vue3";
// placeholder
import "codemirror/addon/display/placeholder.js";

// language
import "codemirror/mode/javascript/javascript.js";
// placeholder
import "codemirror/addon/display/placeholder.js";
// theme
import "codemirror/theme/dracula.css";

import { reactive } from "vue";
const options = [
    { label: '静态数据', value: 1 },
    { label: '接口数据', value: 2 }
]
const cmOptions = {
    mode: "text/javascript", // Language mode
    theme: "neo", // Theme
    lineNumbers: true, // Show line number
    smartIndent: true, // Smart indent
    indentUnit: 0, // The smart indent unit is 2 spaces in length
    foldGutter: true, // Code folding
    styleActiveLine: true, // Display the style of the selected row
    tabSize: 4,
    autofocus: true,
    showCursorWhenSelecting: true
}
const formPublic = reactive({
    dataType: 1,
    resBody: ''
})
const change = () => {

}
</script>

<style scoped lang="scss">
.itemData {
    width: 100%;
    height: 100%;
}

.itemDataItemName {
    width: 120px;
    height: 35px;
    line-height: 35px;
    text-align: right;
    font-size: 14px;
    color: #606266;
    text-align: center;
}

.itemDataItemCode {
    width: 100%;
    height: 400px;
    border-top: 1px solid #040404;
    border-bottom: 1px solid #040404;

    &:deep(.CodeMirror) {
        background: transparent !important;
        color: #999;
    }

    &:deep(.CodeMirror-cursor) {
        border-left-color: #999;
    }

    &:deep(.CodeMirror-gutters) {
        border-right: 1px solid transparent;
        background-color: transparent;
    }
}
</style>