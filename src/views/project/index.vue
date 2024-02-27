<!--
作者: nodebook@qq.com
组件名称: 项目
-->
<template>
    <div class="projectPage">
        <div class="projectPageLeft">
            <div class="projectPageLeftAdd">
                <el-button type="primary" :icon="Plus" style="width: 100px" @click="addItem">新建</el-button>
            </div>
            <div class="projectPageLeftList">
                <div class="projectPageLeftListNav">全部项目</div>
            </div>
            <div class="projectPageLeftFooter">
                <div class="projectPageLeftFooterGitee">
                    <a href="https://gitee.com/nodebook-web/ap-visual-editor" target="_blank">仓库地址</a>
                </div>
            </div>
        </div>
        <div class="projectPageContent">
            <div class="projectPageContentHeader">
                <!-- <el-dropdown>
                    <span class="el-dropdown-link" style="cursor: pointer">
                        <el-avatar :icon="UserFilled" :size="30" />
                        <el-icon class="el-icon--right" style="margin-left: 10px">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>关于系统</el-dropdown-item>
                            <el-dropdown-item divided>退出系统</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown> -->
            </div>
            <div class="projectPageContentList">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :lg="12" :xl="6" v-for="item in projectList" :key="item.uuid">
                        <div class="projectPageContentListItem">
                            <div class="projectPageContentListItemTitle">
                                {{ item.name }}
                                <el-icon class="projectPageContentListItemTitleIcon" :size="12">
                                    <FullScreen />
                                </el-icon>
                            </div>
                            <div class="projectPageContentListItemImage"></div>
                            <div class="projectPageContentListItemFooter">
                                <span class="projectPageContentListItemFooterIcon1"
                                    :class="item.state ? 'projectPageContentListItemFooterIcon1Active' : ''"></span>
                                <span>{{ item.state ? '已发布' : '未发布' }}</span>
                                <el-button :icon="EditPen" @click="goItem(item.uuid)" />
                                <el-dropdown @command="handleCommand">
                                    <el-button :icon="MoreFilled" class="el-dropdown-link" style="margin-left: 10px" />
                                    <template #dropdown>
                                        <el-dropdown-menu style="width: 100px">
                                            <el-dropdown-item :command="'preview-----' + item.uuid"><el-icon>
                                                    <Monitor />
                                                </el-icon>预览</el-dropdown-item>
                                            <el-dropdown-item :command="'editor-----' + item.uuid"><el-icon>
                                                    <Monitor />
                                                </el-icon>编辑</el-dropdown-item>
                                            <el-dropdown-item :disabled="item.state == 1"
                                                :command="'release-----' + item.uuid"><el-icon>
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
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-dialog v-model="addShwo" title="添加项目" width="30%">
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
import { Plus, UserFilled, ArrowDown, Close, FullScreen, EditPen, MoreFilled, Position, Delete, Monitor } from '@element-plus/icons-vue'
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'vue-router'
const userRouter = useRouter()
const { indexDBAdd, indexDBSearchAll, indexDBRemove, indexDBSearch, indexDBUpdata } = getCurrentInstance().appContext.config.globalProperties
const ruleFormRef = ref(null)
const ratioOptions = [
    { label: '2560*1440', value: '2560*1440' },
    { label: '1920*1440', value: '1920*1440' },
    { label: '1920*1080', value: '1920*1080' }
]
const rules = {
    name: [
        { required: true, message: '请输入项目名称', trigger: 'blur' },
        { min: 3, max: 10, message: '请输入3~10个字符', trigger: 'blur' }
    ],
    ratio: [{ required: true, message: '请选择分辨率', trigger: 'blur' }]
}
const addShwo = ref(false)
const form = reactive({
    name: null,
    ratio: null,
    uuid: null,
    backgroundColor: null
})
const addItem = () => {
    addShwo.value = true
}



const projectList = ref([])
const okButton = async () => {
    await ruleFormRef.value.validate(async (valid, fields) => {
        if (valid) {
            if (form.uuid) {
                let result = await indexDBSearch('project', form.uuid)
                indexDBUpdata('project', {
                    ...result,
                    name: form.name,
                    ratio: form.ratio,
                    backgroundColor: form.backgroundColor
                })
                    .then((res) => {
                        ElMessage({
                            message: '修改成功',
                            type: 'success'
                        })
                        addShwo.value = false
                        getProjectAll()
                    })
                    .catch(() => {
                        ElMessage({
                            message: '修改失败',
                            type: 'error'
                        })
                    })
            } else {
                indexDBAdd('project', {
                    uuid: uuidv4(),
                    name: form.name,
                    ratio: form.ratio,
                    state: 0
                })
                    .then((res) => {
                        ElMessage({
                            message: '创建成功',
                            type: 'success'
                        })
                        addShwo.value = false
                        getProjectAll()
                    })
                    .catch(() => {
                        ElMessage({
                            message: '创建失败',
                            type: 'error'
                        })
                    })
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}
onMounted(() => {
    getProjectAll()
})
const getProjectAll = () => {
    indexDBSearchAll('project').then((res) => {
        projectList.value = res
    })
}
const deleteProject = (val) => {
    indexDBRemove('project', val).then(() => {
        ElMessage({
            message: '删除成功',
            type: 'success'
        })
        getProjectAll()
    })
}
const editroItem = (val) => {
    indexDBSearch('project', val).then((res) => {
        form.name = res.name
        form.ratio = res.ratio
        form.uuid = res.uuid
        form.backgroundColor = res.backgroundColor
    })
    addShwo.value = true
}
const previewItem = (val) => {
    userRouter.push({
        name: 'preview',
        params: {
            id: val
        }
    })
}
const releaseItem = (val) => {
    ElMessageBox.confirm('确定要发布?', '重要提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
    })
        .then(async () => {
            let result = await indexDBSearch('project', val)
            indexDBUpdata('project', {
                ...result,
                state: 1
            })
                .then((res) => {
                    ElMessage({
                        message: '发布成功',
                        type: 'success'
                    })
                    getProjectAll()
                })
                .catch(() => {
                    ElMessage({
                        message: '发布失败',
                        type: 'error'
                    })
                })
        })
        .catch(() => { })
}
const handleCommand = (command) => {
    let comVal = command.split('-----')
    switch (comVal[0]) {
        case 'preview':
            console.log('预览')
            previewItem(comVal[1])
            break
        case 'release':
            releaseItem(comVal[1])
            break
        case 'editor':
            editroItem(comVal[1])
            break
        case 'delete':
            deleteProject(comVal[1])
            break
    }
}

const goItem = (val) => {
    // 跳转
    userRouter.push({
        name: 'editor',
        params: {
            id: val
        }
    })
}
</script>

<style scoped lang="scss">
.projectPage {
    background: var(--ap-editor-bg);
    width: 100%;
    height: 100%;
    display: flex;

    .projectPageLeft {
        width: 300px;
        height: 100%;
        border-right: 1px solid var(--ap-editor-border);
        box-sizing: border-box;
        padding: 0 20px;

        .projectPageLeftAdd {
            width: 100%;
            height: 120px;
            border-bottom: 1px solid var(--ap-editor-border);
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .projectPageLeftList {
            width: 100%;
            height: calc(100% - 200px);
            overflow-y: auto;
            padding-top: 20px;
            box-sizing: border-box;

            .projectPageLeftListNav {
                width: 100%;
                height: 35px;
                line-height: 35px;
                background: var(--ap-editor-left-nav-bg);
                font-size: 14px;
                padding: 0 15px;
                box-sizing: border-box;
                color: var(--ap-editor-left-nav-text);
                cursor: pointer;
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
        width: calc(100% - 300px);
        height: 100%;
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

        .projectPageContentList {
            width: 100%;
            height: calc(100% - 60px);
            overflow-y: auto;
            overflow-x: hidden;
            padding: 20px;
            box-sizing: border-box;
            background: var(--ap-editor-project-bg);

            .projectPageContentListItem {
                background: var(--ap-editor-project-item-bg);
                width: 100%;
                height: 300px;
                border-radius: 5px;
                border: 1px solid var(--ap-editor-border);
                overflow: hidden;

                .projectPageContentListItemTitle {
                    width: 100%;
                    height: 30px;
                    padding-right: 10px;
                    box-sizing: border-box;
                    text-align: center;
                    color: #fff;
                    font-size: 12px;
                    line-height: 30px;
                    position: relative;

                    .projectPageContentListItemTitleIcon {
                        position: absolute;
                        right: 10px;
                        top: 7px;
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        cursor: pointer;
                        color: #fff;

                        &:hover {
                            color: red;
                        }
                    }
                }

                .projectPageContentListItemImage {
                    width: 100%;
                    height: calc(100% - 80px);
                }

                .projectPageContentListItemFooter {
                    width: 100%;
                    height: 50px;
                    background: var(--ap-editor-project-item-footer);
                    color: var(--ap-editor-text);
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 10px;
                    box-sizing: border-box;

                    span {
                        margin-right: 10px;
                    }

                    .projectPageContentListItemFooterIcon1 {
                        width: 12px;
                        height: 12px;
                        display: inline-block;
                        border-radius: 50%;
                        background: var(--ap-editor-project-item-unrelease);
                    }

                    .projectPageContentListItemFooterIcon1Active {
                        background: var(--ap-editor-project-item-release);
                    }
                }
            }
        }
    }
}
</style>
