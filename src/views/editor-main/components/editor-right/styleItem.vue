<!--
作者: nodebook@qq.com
组件名称: 样式组件
-->
<template>
	<div class="ap-editor-style">
		<el-collapse v-model="value">
			<el-collapse-item :title="item.name" :name="item.value" v-for="(item, index) in itemTable" :key="index">
				<el-form :model="formPublic" label-width="100px" style="padding-right: 10px; box-sizing: border-box" label-position="top">
					<el-form-item
						:label="items.name"
						v-for="(items, indexs) in item.children"
						:key="indexs"
						:precision="2"
					>
						<template v-if="items.type === 'el-input-number'">
							<el-input-number v-model="formPublic[items.field]" @change="onChange(items.field)" :min="isNaN(items.min) ? items.min : -Infinity" :max="isNaN(items.max) ? items.max : Infinity"  />
						</template>
						<template v-if="items.type === 'el-select'">
							<el-select v-model="formPublic[items.field]" @change="onChangeSelect(items.field)" style="width: 100%;">
								<el-option
									v-for="val in items.options"
									:key="val.value"
									:label="val.label"
									:value="val.value"
								/>
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
								<el-radio :label="val.value" size="large" v-for="(val,index) in items.options" :key="index">{{val.label}}</el-radio>
							</el-radio-group>
						</template>
						<template v-if="items.type === 'el-color-picker'">
							<el-color-picker v-model="formPublic[items.field]"  @change="onChange(items.field)" show-alpha :predefine="items.predefineColors"  />
						</template>
						<template v-if="items.type === 'ArrayColorValue'">
							<ArrayValue v-model="formPublic[items.field]"  @change="onChange(items.field)" :length="2"></ArrayValue>
						</template>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue'
import ArrayValue from './arrayValue.vue'

const props = defineProps({
	itemData: Object,
	itemTable: Object,
	active: {
		type: Array,
		default: null
	},
	type: String,
	selectId: String
})

const value = ref(props.active)

const formPublic = computed(()=>props.itemData)

// watch(()=>formPublic, (news)=>{
// 	console.log(news)
// },{
// 	deep: true,
// 	immediate: true
// })

const provideFun = inject('updataRight', null)

const onChange = (label) => {
	if (!props.selectId) {
		new Error('选中状态的UUID不存在')
		return
	}
	provideFun(label, formPublic.value[label], props.selectId, props.type)
}
const onChangeSelect = (label) => {
	if (!props.selectId) {
		new Error('选中状态的UUID不存在')
		return
	}
	provideFun(label, formPublic.value[label], props.selectId, props.type)
}
</script>

<style lang="scss" scoped>
.ap-editor-style {
	width: 100%;
	height: auto;
	padding-left: 5px;
	padding-right: 5px;
	box-sizing: border-box;
	&:deep(.el-collapse-item__header) {
		padding-left: 10px;
		box-sizing: border-box;
		height: 40px;
	}
	&:deep(.el-collapse-item__content) {
		padding-bottom: 0;
		padding-top: 15px;
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
