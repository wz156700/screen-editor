<!--

组件名称: 预览
-->
<template>
  <div class="preview" :style="{
    height: pageInfo.height ? pageInfo.height : '100vh',
    width: pageInfo.width ? pageInfo.width : '100vw',
    background: pageInfo.backgroundColor
      ? pageInfo.backgroundColor
      : 'transparent',
    background: 'url(data:' + pageInfo.backgroundImg + ')',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }">
    <template v-for="item in domDataPage" :key="
        item.uuid +
        item.width +
        item.height +
        item.mtl +
        item.mtr +
        item.mbr +
        item.mbl
      ">
      <div class="td-editor-whiteboard-box-item" :style="{
    left: item.left + 'px',
    top: item.top + 'px',
    width: item.width + 'px',
    height: item.height + 'px',
    transform: `rotate(${item.angle}deg)`,
    transformOrigin: `${item.angleX}px ${item.angleY}px`,
    zIndex: item.zIndex,
    borderRadius: `${item.btl}px ${item.btr}px ${item.bbr}px ${item.bbl}px`,
    padding: `${item.mtl}px ${item.mtr}px ${item.mbr}px ${item.mbl}px`,
    alignItems: `${item.alignW}`,
    justifyContent: `${item.alignH}`,
  }">
        <component :is="item.type" class="td-editor-whiteboard-box-item-com" :key="item.uuid"
          :data="item.data ? item.data : '初始化'" v-bind="item.attribute"></component>
      </div>
    </template>
  </div>
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
  onMounted,
  nextTick,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const route = useRoute();
const userRouter = useRouter();
const { indexDBSearch } =
  getCurrentInstance().appContext.config.globalProperties;
let domDataPage = ref({});
let pageInfo = ref({});

// 查询数据
const getItem = () => {
  indexDBSearch("project", route.params.id).then((res) => {
    if (!res) {
      ElMessage.error("查询项目不存在");
      userRouter.replace("/");
      return;
    }
    let domDataIndexDB = res.domData ? JSON.parse(res.domData) : null;
    if (domDataIndexDB) {
      domDataPage.value = { ...domDataIndexDB };
    }
    res.width = res.ratio.split("*")[0] + "px";
    res.height = res.ratio.split("*")[1] + "px";
    res.backgroundColor = res.backgroundColor
      ? res.backgroundColor
      : "transparent";
    pageInfo.value = { ...res };
  });
};

onMounted(() => {
  if (!route.params.id) {
    userRouter.replace("/");
    return;
  }
  getItem();
});
</script>

<style scoped lang="scss">
.preview {
  width: 100%;
  height: 100%;
  position: relative;
  background: #1f1f1f;
}

.td-editor-whiteboard-box-item {
  position: absolute;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  pointer-events: none;

  .td-editor-whiteboard-box-item-com {
    flex-shrink: 0;
  }
}

.screenshot {
  position: absolute;
  left: 5%;
  top: 5%;
  width: 10rem;
  height: 10rem;
  outline: 1px solid red;
}
</style>
