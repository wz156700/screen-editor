<template>
  <div class="td-editorMain-top">
    <!-- 左侧 -->
    <div class="td-editorMain-top-left">
      <div @click="goHome" style="display: flex;min-width: 20%;">
        <EditorIcon name="left" size="1rem" class="backIcon">
        </EditorIcon>
        <div class="td-editorMain-top-left-name"> {{ domInfo.name }}</div>
      </div>

      <el-button :icon="Edit" circle @click="showShwoTue" />
    </div>
    <!-- 中间 -->
    <div class="td-editorMain-top-middle">
      <EditorLeft @selectItem="selectItem" :selectId="selectUUID"></EditorLeft>
    </div>
    <!-- 右侧 -->
    <div class="td-editorMain-top-right">
      <div class="td-editorMain-top-right-item" @click="saveItem">
        <EditorIcon name="save"></EditorIcon>
        <span>保存</span>
      </div>
      <div class="td-editorMain-top-right-item" @click="previewItem">
        <EditorIcon name="share"></EditorIcon>
        <span>预览</span>
      </div>
    </div>
  </div>
  <el-dialog v-model="showShwo" title="设置项目" width="30%">
    <el-form :model="form" label-width="100px" :rules="rules" ref="ruleFormRef">
      <el-form-item label="项目名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="分辨率" prop="ratio">
        <el-select v-model="form.ratio" placeholder="请选择分辨率" style="width: 100%">
          <el-option v-for="item in ratioOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="封面" prop="Cover">
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload" :http-request="handleUpload">
          <img v-if="imageData || form.cover" :src="imageData ? imageData : form.cover" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
        <el-button @click="captureAndDownload">截图</el-button>
      </el-form-item>
      <el-form-item label="背景色" prop="backgroundColor">
        <el-color-picker v-model="form.backgroundColor" />
      </el-form-item>
      <el-form-item label="背景图片" prop="backgroundImg">
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload" :http-request="handleUploadOfBg">
          <img v-if="bgData || form.backgroundImg" :src="bgData || form.backgroundImg" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showShwo = false">取消</el-button>
        <el-button type="primary" @click="okButton"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
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
import {
  Plus
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import EditorLeft from "../editor-config/index.vue";
import {
  Edit,
} from '@element-plus/icons-vue'
const router = useRouter();
import { useRoute } from 'vue-router';
const props = defineProps(["domInfo"]);
const emit = defineEmits(["saveItem", "previewItem"]);
import { ElMessage } from "element-plus";
import html2canvas from 'html2canvas';
const {
  indexDBSearch,
  indexDBUpdata,
} = getCurrentInstance().appContext.config.globalProperties;
const showShwo = ref(false)
const ratioOptions = [
  { label: "1440*900", value: "1440*900" },
  { label: "1920*1200", value: "1920*1200" },
  { label: "1920*1080", value: "1920*1080" },
  { label: "1280*800", value: "1280*800" },
];
const route = useRoute();

const saveItem = () => {
  emit("saveItem");
};
const previewItem = () => {
  emit("previewItem");
};
const ruleFormRef = ref(null);

const goHome = () => {
  router.push("/");
};

const showShwoTue = () => {
  showShwo.value = true
}

const form = reactive({
  name: null,
  ratio: null,
  uuid: route.params.id,
  backgroundColor: null,
  cover: null,
  backgroundImg: null
});

const okButton = async () => {
  await ruleFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      console.log('form~~~', form)
      let result = await indexDBSearch("project", form.uuid);
      indexDBUpdata("project", {
        ...result,
        name: form.name,
        ratio: form.ratio,
        backgroundColor: form.backgroundColor,
        cover: imageData.value,
        backgroundImg: bgData.value
      })
        .then((res) => {
          ElMessage({
            message: "修改成功",
            type: "success",
          });
          showShwo.value = false;
        })
        .catch(() => {
          ElMessage({
            message: "修改失败",
            type: "error",
          });
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};

//图片上传
const imageData = ref('')
const handleAvatarSuccess = (
  response,
  uploadFile
) => {
  console.log('uploadFile', uploadFile)
}

//截图
const captureAndDownload = async () => {
  const targetElement = document.getElementById('td-editor-whiteboard'); // 你要截图的 DOM 元素的 ID
  if (!targetElement) return;

  try {
    const canvas = await html2canvas(targetElement, {
      allowTaint: true,
      useCORS: true, // 如果图片跨域，需要设置此选项以允许 CORS
    });
    // 将 canvas 转换为 data URL
    const imgData = canvas.toDataURL('image/png');
    imageData.value = imgData

  } catch (error) {
    console.error('Error while capturing screenshot:', error);
  }
}

//背景图片上传
let bgData = ref('')
const handleUploadOfBg = (options) => {
  const file = options.file;
  const reader = new FileReader();
  reader.onload = function (event) {
    const imgData = event.target.result;
    bgData.value = imgData;
  };
  reader.readAsDataURL(file);
}


// 上传前的校验
const beforeAvatarUpload = (rawFile) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
  if (!allowedTypes.includes(rawFile.type)) {
    ElMessage.error('只能上传图片！')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

//处理上传函数
const handleUpload = (options) => {
  const file = options.file;
  const reader = new FileReader();
  reader.onload = function (event) {
    const imgData = event.target.result;
    imageData.value = imgData;
  };
  reader.readAsDataURL(file);
}

watch(() => props.domInfo, (newval) => {
  form.name = newval.name;
  form.ratio = newval.ratio;
  form.backgroundColor = newval.backgroundColor;
  form.cover = newval.cover;
  imageData.value = newval.cover;
  form.backgroundImg = newval.backgroundImg
  bgData.value = newval.backgroundImg
})

onMounted(() => {

})
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style lang="scss">
.td-editorMain-top {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  user-select: none;

  .td-editorMain-top-left {
    width: 18.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bolder;
    color: #fff;

    .backIcon {
      margin: 0 5% 0 10%;
      font-weight: bold;
      color: #fff;
    }

    img {
      width: 2.1875rem;
      height: 2.1875rem;
      margin: 0 .625rem;
    }

    .td-editorMain-top-left-name {
      width: auto;
      height: 2.1875rem;
      line-height: 2.1875rem;

    }
  }

  .td-editorMain-top-middle {
    width: calc(100% - 41.25rem);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .td-editorMain-top-middle-item {
      width: 3.125rem;
      // background: red;
      text-align: center;
      height: 2.1875rem;
      font-size: .875rem;
      cursor: pointer;

      span {
        display: block;
        font-size: .75rem;
      }
    }
  }

  .td-editorMain-top-right {
    width: 22.5rem;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .td-editorMain-top-right-item {
      width: 3.125rem;
      text-align: center;
      height: 2.1875rem;
      font-size: .875rem;
      cursor: pointer;
      color: #fff;


      span {
        display: block;
        font-size: 0.85rem;
        font-weight: bold;
      }
    }
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
