<template>
  <div class="itemData_1712648946598">
    <p class="title">数据字段说明</p>
    <el-table :data="state.fieldDescription" style="width: 100%">
      <el-table-column prop="field" label="字段" />
      <el-table-column prop="mapping" label="映射" />
      <el-table-column prop="description" label="说明" />
    </el-table>
    <el-form :model="formPublic" style="padding-right: 10px; box-sizing: border-box">
      <el-form-item label="请求方式">
        <el-select v-model="formPublic.dataType" class="m-2" placeholder="Select" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
    <p v-if="state.isMap"><span>上传地图json文件</span><input type="file" id="jsonFileInput" @change="handleJsonChange"></p>
    <div class="itemDataItemName">
      静态数据 <button @click="handleChange">提交</button>
    </div>
    <div class="itemDataItemCode">
      <div style="border: 1px solid #ccc">
        <!-- <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
          :mode="mode" /> -->
        <Editor style="height: 500px;" :mode="mode" @onCreated="handleCreated" />
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入 wangEditor 相关内容
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, reactive, watch, nextTick } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

import { useCounterStore } from "@/store/editor";

const dataStore = useCounterStore();

const emit = defineEmits(["updataDOM"]);

const props = defineProps({
  itemData: Object,
});

const options = [
  { label: "静态数据", value: 1 },
];

const formPublic = reactive({
  dataType: 1
});

const state = reactive({
  fieldDescription: [],
  isMap: false
})

const mode = "default";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 实例创建
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！

};

const handleChange = () => {
  const editor = editorRef.value;
  const text = editor.getText();
  emit("updataDOM", {
    uuid: dataStore.element.selectedUUid,
    data: JSON.parse(text),
  });
};

//针对地图部分的逻辑
const handleJsonChange = (e) => {
  var file = e.target.files[0];

  if (file) {
    var reader = new FileReader();

    // 当读取完成时触发
    reader.onload = function (event) {
      try {
        var content = event.target.result; // 这里是文件的原始文本内容
        emit("updataDOM", {
          uuid: dataStore.element.selectedUUid,
          jsonData: JSON.parse(content),
        });
      } catch (error) {
        console.error('Error parsing JSON string:', error);
      }
    };

    // 开始读取文件
    reader.readAsText(file);
  }
}



// 监听图表数据
watch(() => props.itemData, (newVal) => {
  state.fieldDescription = newVal.fieldDescription
  //如果是数组
  if (Array.isArray(newVal.data)) {
    const dataString = JSON.stringify(newVal.data, null, 2); // 格式化 JSON 字符串
    nextTick(() => {
      const editor = editorRef.value;
      // 使用命令插入代码块
      editor.focus()
      editor.insertText(dataString)
    })
  } else {
    state.isMap = newVal.data.isMap
    const dataString = JSON.stringify(newVal.data.mapData, null, 2); // 格式化 JSON 字符串
    nextTick(() => {
      //地图数据data
      const editor = editorRef.value;
      // 使用命令插入代码块
      editor.focus()
      editor.insertText(dataString)

    })
  }



}, {
  immediate: true, deep: true
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
</script>

<style lang="scss">
.itemData_1712648946598 {
  width: 100%;
  height: 100%;

  .title {
    font-size: 1rem;
  }

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

  .defaultMsg {
    word-wrap: break-word;
  }
}

.el-table .cell {
  font-size: 0.85rem !important;
}

.el-form-item__label {
  justify-content: flex-start !important;
  height: 2.5rem !important;
  line-height: 2.5rem !important;
}
</style>