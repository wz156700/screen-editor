<!--

组件名称: 
-->
<template>
  <div class="itemData_1712648946598">
    <el-form
      :model="formPublic"
      label-width="100px"
      style="padding-right: 10px; box-sizing: border-box"
    >
      <el-form-item label="请求方式">
        <el-select
          v-model="formPublic.dataType"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <div class="itemDataItemName">
      静态数据 <button @click="handleChange">提交</button>
    </div>
    <div class="itemDataItemCode">
      <div style="border: 1px solid #ccc">
        <!-- <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        /> -->
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
//引入wangEditor相关内容
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, reactive } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

import { useCounterStore } from "@/store/editor";

const dataStore = useCounterStore();

const emit = defineEmits(["updataDOM"]);

const options = [
  { label: "静态数据", value: 1 },
  { label: "接口数据", value: 2 },
];

const formPublic = reactive({
  dataType: 1,
  resBody: "",
});

const mode = "default";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

// 模拟 ajax 异步获取内容
onMounted(() => {});
//快速排序

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const handleChange = () => {
  const editor = editorRef.value;
  const text = editor.getText();
  console.log("text~~~", text);
  emit("updataDOM", {
    uuid: dataStore.element.selectedUUid,
    data: JSON.parse(text),
  });
};
</script>

<style lang="scss">
.itemData_1712648946598 {
  width: 100%;
  height: 100%;
  .w-e-text-container {
    background-color: rgb(54, 131, 231);
    color: white !important;
  }
  .itemDataItemName {
    width: 120px;
    height: 35px;
    line-height: 35px;
    text-align: right;
    font-size: 14px;
    color: white;
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
}
</style>
