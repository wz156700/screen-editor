<!--

组件名称: 样式组件
-->
<template>
  <div class="td-editor-style">
    <el-collapse v-model="value">
      {{ itemData }}
      <el-collapse-item :title="item.name" :name="item.value" v-for="(item, index) in itemTable" :key="index">
        <el-form :model="formPublic" label-width="100px" style="padding-right: 10px; box-sizing: border-box"
          label-position="top">
          <el-form-item :label="items.name" v-for="(items, indexs) in item.children" :key="indexs" :precision="2">
            <template v-if="items.type === 'el-input-number'">
              <el-input-number v-model="formPublic[items.field]" @change="onChange(items.field)"
                :min="isNaN(items.min) ? items.min : -Infinity" :max="isNaN(items.max) ? items.max : Infinity" />
            </template>
            <template v-if="items.type === 'el-select'">
              <el-select v-model="formPublic[items.field]" @change="onChangeSelect(items.field)" style="width: 100%">
                <el-option v-for="val in items.options" :key="val.value" :label="val.label" :value="val.value" />
              </el-select>
            </template>
            <template v-if="items.type === 'el-input'">
              <el-input v-model="formPublic[items.field]" @input="onChange(items.field)" />
            </template>
            <template v-if="items.type === 'el-switch'">
              <el-switch v-model="formPublic[items.field]" @change="onChange(items.field)" />
            </template>
            <template v-if="items.type === 'el-radio'">
              <el-radio-group v-model="formPublic[items.field]" @change="onChange(items.field)">
                <el-radio :label="val.value" size="large" v-for="(val, index) in items.options" :key="index">{{
      val.label }}</el-radio>
              </el-radio-group>
            </template>
            <template v-if="items.type === 'el-color-picker'">
              <el-color-picker v-model="formPublic[items.field]" @change="onChange(items.field)" show-alpha
                :predefine="items.predefineColors" />
            </template>
            <template v-if="items.type === 'ArrayColorValue'">
              <ArrayValue v-model="formPublic[items.field]" @change="onChange(items.field)" :length="2"></ArrayValue>
            </template>

            <template v-if="items.type === 'barColor'">
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane :label="item.name" :name="item.key" v-for="(item) in items.children">
                  <p v-for="(ele) in item.children">
                    <span style="font-size:0.65rem;color:#fff;">{{ ele.name }}:</span>
                    {{ ele.field }}
                    <el-color-picker v-model="formPublic[ele.field]" @change="onChange(ele.field)" show-alpha
                      :predefine="ele.predefineColors" />
                  </p>

                </el-tab-pane>

              </el-tabs>

            </template>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from "vue";
import ArrayValue from "./arrayValue.vue";
const emit = defineEmits(["updataDOM"]);

const props = defineProps({
  itemData: Object,
  itemTable: Object,
  active: {
    type: Array,
    default: null,
  },
  type: String,
  selectId: String
});

const value = ref(props.active);

const formPublic = computed(() => props.itemData);
const activeName = ref('series1')

watch(() => formPublic, (news) => {
  console.log("变化了，嘻嘻嘻", news.value)
}, {
  deep: true,
  immediate: true
})

const provideFun = inject("updataRight", null);

const onChange = (label) => {
  if (!props.selectId) {
    new Error("选中状态的UUID不存在");
    return;
  }
  provideFun(label, formPublic.value[label], props.selectId, props.type);
};
const onChangeSelect = (label) => {
  if (!props.selectId) {
    new Error("选中状态的UUID不存在");
    return;
  }
  provideFun(label, formPublic.value[label], props.selectId, props.type);
};
</script>

<style lang="scss" scoped>
.td-editor-style {
  width: 100%;
  height: auto;
  padding-left: .3125rem;
  padding-right: .3125rem;
  box-sizing: border-box;

  &:deep(.el-collapse-item__header) {
    padding-left: .625rem;
    box-sizing: border-box;
    height: 2.5rem;
    padding: 1.25rem;
    font-weight: bold;
    color: #3a89fe;

  }

  &:deep(.el-collapse-item__content) {
    padding-bottom: 0;
    padding-top: .9375rem;
  }

  &:deep(.el-collapse-item__wrap) {
    background: transparent;
  }

  &:deep(.el-input-number__decrease) {
    background: transparent;
  }

  &:deep(.el-input-number__increase) {
    background: transparent;
  }

  &:deep(.el-input-number) {
    width: 100%;
  }
}
</style>
