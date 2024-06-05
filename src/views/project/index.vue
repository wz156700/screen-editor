<!--

组件名称: 项目
-->
<template>
  <div class="projectPage">
    <div class="projectPageLeft">
      <div class="projectPageLeftList">
        <div class="projectPageLeftListNav">个人空间</div>
      </div>
    </div>
    <div class="projectPageContent">
      <p class="itemTitle">精选模板</p>
      <div class="templateList">
        <div class="addItem" @click="addItem(true)">+</div>
      </div>
      <p class="itemTitle">最近打开</p>
      <div class="projectPageContentList">
        <div class="projectPageContentListItem" v-for="item in projectList" :key="item.uuid">
          <div class="projectPageContentListItemTitle">
            <div>
              {{ item.name }}
            </div>
            <div style="text-align: right;">
              <span :class="item.state ? 'circle activeCircle' : 'circle'"></span>
              <span>{{ item.state ? "已发布" : "未发布" }}</span>
            </div>
          </div>
          <div class="projectPageContentListItemImage"></div>
          <div class="projectPageContentListItemFooter">
            <span title="项目编辑"><el-button :icon="EditPen" @click="goItem(item.uuid)" /></span>
            <el-dropdown @command="handleCommand">
              <el-button :icon="MoreFilled" class="el-dropdown-link" style="margin-left: 10px" />
              <template #dropdown>
                <el-dropdown-menu style="width: 100px">
                  <el-dropdown-item :command="'preview-----' + item.uuid"><el-icon>
                      <Monitor />
                    </el-icon>预览</el-dropdown-item>
                  <el-dropdown-item :command="'editor-----' + item.uuid"><el-icon>
                      <Monitor />
                    </el-icon>设置</el-dropdown-item>
                  <el-dropdown-item :disabled="item.state == 1" :command="'release-----' + item.uuid"><el-icon>
                      <Position />
                    </el-icon>发布</el-dropdown-item>
                  <el-dropdown-item divided :command="'delete-----' + item.uuid"><el-icon>
                      <Delete />
                    </el-icon>删除</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="addShwo" :title="state.isAdd ? '新建项目' : '设置项目'" width="30%">
      <el-form :model="form" label-width="100px" :rules="rules" ref="ruleFormRef">
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="分辨率" prop="ratio">
          <el-select v-model="form.ratio" placeholder="请选择分辨率" style="width: 100%">
            <el-option v-for="item in ratioOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="背景色" prop="backgroundColor">
          <el-color-picker v-model="form.backgroundColor" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addShwo = false">取消</el-button>
          <el-button type="primary" @click="okButton"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  Plus,
  UserFilled,
  ArrowDown,
  Close,
  FullScreen,
  EditPen,
  MoreFilled,
  Position,
  Delete,
  Monitor,
} from "@element-plus/icons-vue";
import { onMounted, reactive, ref, getCurrentInstance } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";
const userRouter = useRouter();
const {
  indexDBAdd,
  indexDBSearchAll,
  indexDBRemove,
  indexDBSearch,
  indexDBUpdata,
} = getCurrentInstance().appContext.config.globalProperties;
const ruleFormRef = ref(null);
const ratioOptions = [
  { label: "2560*1440", value: "2560*1440" },
  { label: "1920*1440", value: "1920*1440" },
  { label: "1920*1080", value: "1920*1080" },
];
const rules = {
  name: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
    { min: 3, max: 10, message: "请输入3~10个字符", trigger: "blur" },
  ],
  ratio: [{ required: true, message: "请选择分辨率", trigger: "blur" }],
};

//页面状态
const state = reactive({
  isAdd: false
})

const addShwo = ref(false);
const form = reactive({
  name: null,
  ratio: null,
  uuid: null,
  backgroundColor: null,
});


const addItem = (isadd) => {
  addShwo.value = true;
  state.isAdd = isadd
};

const projectList = ref([]);

const okButton = async () => {
  await ruleFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      if (form.uuid) {
        let result = await indexDBSearch("project", form.uuid);
        console.log("result~~~", result);
        indexDBUpdata("project", {
          ...result,
          name: form.name,
          ratio: form.ratio,
          backgroundColor: form.backgroundColor,
        })
          .then((res) => {
            ElMessage({
              message: "修改成功",
              type: "success",
            });
            addShwo.value = false;
            getProjectAll();
          })
          .catch(() => {
            ElMessage({
              message: "修改失败",
              type: "error",
            });
          });
      } else {
        indexDBAdd("project", {
          uuid: uuidv4(),
          name: form.name,
          ratio: form.ratio,
          state: 0,
        })
          .then((res) => {
            ElMessage({
              message: "创建成功",
              type: "success",
            });
            addShwo.value = false;
            getProjectAll();
          })
          .catch(() => {
            ElMessage({
              message: "创建失败",
              type: "error",
            });
          });
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};
onMounted(() => {
  getProjectAll();
});
const getProjectAll = () => {
  indexDBSearchAll("project").then((res) => {
    projectList.value = res;
  });
};
const deleteProject = (val) => {
  indexDBRemove("project", val).then(() => {
    ElMessage({
      message: "删除成功",
      type: "success",
    });
    getProjectAll();
  });
};

//设置项目
const editroItem = (val) => {
  indexDBSearch("project", val).then((res) => {
    form.name = res.name;
    form.ratio = res.ratio;
    form.uuid = res.uuid;
    form.backgroundColor = res.backgroundColor;
  });
  addShwo.value = true;
  state.isAdd = false;
};

//预览项目
const previewItem = (val) => {
  userRouter.push({
    name: "preview",
    params: {
      id: val,
    },
  });
};

//发布项目——目前只是改一个状态而已，发布的流程未定，后续需要接入服务器相关内容。
const releaseItem = (val) => {
  ElMessageBox.confirm("确定要发布?", "重要提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "success",
  })
    .then(async () => {
      let result = await indexDBSearch("project", val);
      indexDBUpdata("project", {
        ...result,
        state: 1,
      })
        .then((res) => {
          ElMessage({
            message: "发布成功",
            type: "success",
          });
          getProjectAll();
        })
        .catch(() => {
          ElMessage({
            message: "发布失败",
            type: "error",
          });
        });
    })
    .catch(() => { });
};

//处理dropdown的command事件
const handleCommand = (command) => {
  let comVal = command.split("-----");
  switch (comVal[0]) {
    case "preview":
      previewItem(comVal[1]); //预览
      break;
    case "release":
      releaseItem(comVal[1]); //发布
      break;
    case "editor":
      editroItem(comVal[1]); //设置
      break;
    case "delete":
      deleteProject(comVal[1]); // 删除
      break;
  }
};

//跳转到编辑页并通过id参数查询数据库中数据
const goItem = (val) => {
  // 跳转
  userRouter.push({
    name: "editor",
    params: {
      id: val,
    },
  });
};
</script>

<style scoped lang="scss">
.projectPage {
  //background: var(--ap-editor-bg);
  width: 100%;
  height: 100%;
  background: url("/public/img/bg.png");
  background-size: 100% 100%;

  .projectPageLeft {
    width: calc(100% - 40px);
    border-right: 1px solid var(--ap-editor-border);
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;

    .projectPageLeftAdd {
      width: 20%;
      border-bottom: 1px solid var(--ap-editor-border);
      box-sizing: border-box;
      display: flex;
      justify-content: right;
      align-items: center;
    }

    .projectPageLeftList {
      width: 80%;
      height: calc(100% - 200px);
      overflow-y: auto;
      padding-top: 20px;
      box-sizing: border-box;

      .projectPageLeftListNav {
        width: 100%;
        height: 2.1875rem;
        line-height: 2.1875rem;
        font-size: 1.25rem;
        padding: 0 .9375rem;
        box-sizing: border-box;
        color: var(--ap-editor-left-nav-text);
        cursor: pointer;
        font-weight: bold;
      }
    }

    .projectPageLeftFooter {
      width: 100%;
      height: 80px;

      .projectPageLeftFooterGitee {
        width: 120px;
        height: 30px;
        line-height: 30px;

        a {
          color: var(--ap-editor-text);
          font-size: 14px;
        }
      }
    }
  }

  .projectPageContent {
    width: calc(100%);
    overflow: hidden;

    .projectPageContentHeader {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid var(--ap-editor-border);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 30px;
      box-sizing: border-box;
    }

    .itemTitle {
      width: 96%;
      color: #fff;
      font-size: 0.85rem;
      line-height: 2rem;
      margin: 1rem auto;
      letter-spacing: 1px;
      font-weight: bolder;

    }

    .templateList {
      width: 96%;
      margin: 1rem auto;

      .addItem {
        width: 8.75rem;
        height: 8.75rem;
        border-radius: .3125rem;
        cursor: pointer;
        border: 1px solid rgb(59, 130, 246);
        background: var(--ap-editor-project-item-bg);
        color: rgb(59, 130, 246);
        font-size: 2.5rem;
        text-align: center;
        line-height: 8.75rem;
      }
    }


    .projectPageContentList {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
      /* 自动填充列，每列最小宽度100px，最大宽度为1份可用空间 */
      gap: 1.5rem;
      /* 设置行间距和列间距为24px */
      width: 100%;
      height: calc(100% - 3.75rem);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 1rem;
      box-sizing: border-box;



      .projectPageContentListItem {
        position: relative;
        width: 20.75rem;
        height: 14.75rem;
        border-radius: .3125rem;
        border: 1px solid var(--ap-editor-border);
        overflow: hidden;
        background: var(--ap-editor-project-item-bg);
        cursor: pointer;
        transition: all ease 0.5s;

        .projectPageContentListItemTitle {
          display: flex;
          width: 90%;
          height: 1.875rem;
          padding-right: .625rem;
          box-sizing: border-box;
          text-align: center;
          color: #fff;
          font-size: .75rem;
          line-height: 1.875rem;
          position: relative;
          text-align: left;
          margin: 0 auto;

          div {
            display: flex;
            width: 50%;
            height: 100%;

            .circle {
              display: inline-block;
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
              background-color: #ffffff62;
              margin: 8% 5% 0 60%;
            }

            .activeCircle {
              background-color: rgb(59, 130, 246);
            }
          }

          .projectPageContentListItemTitleIcon {
            position: absolute;
            right: .625rem;
            top: .4375rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            cursor: pointer;
            color: #fff;

            &:hover {
              color: red;
            }
          }
        }

        .projectPageContentListItemImage {
          width: 90%;
          height: calc(100% - 5rem);
          background: url('/public/img/default_screen.png');
          background-size: 80% 80%;
          margin: 0 auto;
          background-position: center;
        }



        .projectPageContentListItemFooter {
          width: 100%;
          height: 3.125rem;
          background: var(--ap-editor-project-item-footer);
          color: var(--ap-editor-text);
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: .625rem;
          box-sizing: border-box;

          .projectPageContentListItemFooterIcon1 {
            width: .75rem;
            height: .75rem;
            display: inline-block;
            border-radius: 50%;
            background: var(--ap-editor-project-item-unrelease);
          }

          .projectPageContentListItemFooterIcon1Active {
            background: var(--ap-editor-project-item-release);
          }
        }
      }

      .projectPageContentListItem:hover {
        transform: translateY(-6px);
      }

      .projectPageContentListItem::before,
      .projectPageContentListItem::after {
        box-sizing: inherit;
        position: absolute;
        content: '';
        border: 2px solid transparent;
        width: 0;
        height: 0;
      }

      .projectPageContentListItem::after {
        bottom: 0;
        right: 0;
      }

      .projectPageContentListItem::before {
        top: 0;
        left: 0;
      }

      .projectPageContentListItem:hover::before,
      .projectPageContentListItem:hover::after {
        width: 98.9%;
        height: 100%;
        pointer-events: none;
      }

      .projectPageContentListItem:hover::before {
        border-top-color: rgb(59, 130, 246);
        border-right-color: rgb(59, 130, 246);
        transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
      }

      .projectPageContentListItem:hover::after {
        border-bottom-color: rgb(59, 130, 246);
        border-left-color: rgb(59, 130, 246);
        transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s, height 0.1s ease-out 0.3s;
      }
    }
  }
}
</style>
