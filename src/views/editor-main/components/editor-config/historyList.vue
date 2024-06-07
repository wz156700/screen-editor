<!--

组件名称: 历史组件
-->
<template>
  <div class="history">
    <div class="history-list" v-for="item in historyListData" :key="item.uuid" @click="clickItem(item)"
      :class="selectData.includes(item.uuid) ? 'history-list-active' : ''">
      <div class="history-list-image" :title="item.name">
        <img v-if="item.image" :src="item.image" />
      </div>
      <div class="history-list-name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import analysisData from "@/assets/componentList/analysis.js";
import componentsData from "@/assets/componentList/components.js";
import mapData from "@/assets/componentList/map.js";
import hTitleData from "@/assets/componentList/hTitle.js";
import materialData from "@/assets/componentList/material.js";
import { computed, ref, watch } from "vue";

const emit = defineEmits(["selectItem"]);
const componentData = [
  ...analysisData,
  ...componentsData,
  ...mapData,
  ...hTitleData,
  ...materialData,
];

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

const selectData = computed(() => (props.selectId ? props.selectId : []));

const historyListData = ref([]);

const setHistoryListData = (data) => {
  historyListData.value = [];
  for (let item in data) {
    for (let k = 0; k < componentData.length; k++) {
      for (let l = 0; l < componentData[k].children.length; l++) {
        if (componentData[k].children[l].uuid == data[item].componentsuuid) {
          historyListData.value.push({
            ...data[item],
            image: componentData[k].children[l].image || "",
          });
        }
      }
    }
  }
};

const domDataList = computed(() => (props.domData ? props.domData : {}));

watch(
  () => domDataList.value,
  (news) => {
    setHistoryListData(news);
  },
  {
    deep: true,
    immediate: true,
  }
);

const clickItem = (item) => {
  emit("selectItem", item);
};
</script>

<style scoped>
.history {
  width: 100%;
  height: auto;
}

.history-list {
  width: 100%;
  height: 50px;
  /* background: yellowgreen; */
  margin-bottom: 5px;
  padding: 5px;
  box-sizing: border-box;
  background: var(--td-editor-echarts-bg);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
}

.history-list-image {
  width: 60px;
  height: 40px;
}

.history-list-image img {
  width: 100%;
  height: 100%;
}

.history-list-name {
  width: calc(100% - 70px);
  height: 100%;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.history-list-active {
  background: rgba(4, 165, 129, 0.2);
  border-color: #01c398;
}
</style>
