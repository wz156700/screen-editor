<!--
作者: nodebook@qq.com
组件名称: 组件管理
-->
<template>
	<div class="ap-editorLeft">
		<!-- 名称 -->
		<div class="ap-editorLeft-name">
			<span>组件管理</span>
			<EditorIcon name="left" size="16px"></EditorIcon>
		</div>
		<!-- 内容 -->
		<div class="ap-editorLeft-content">
			<!-- 左侧 -->
			<div class="ap-editorLeft-content-left">
				<div
					class="ap-editorLeft-content-left-item"
					:class="active === 'history' ? 'is-active' : ''"
					@click="updataActive('history')"
				>
					<EditorIcon name="history" size="16px"></EditorIcon>
					<span>最近</span>
				</div>
				<div class="ap-editorLeft-content-left-item" :class="active === 'analysis' ? 'is-active' : ''"
					@click="updataActive('analysis')">
					<EditorIcon name="analysis" size="16px"></EditorIcon>
					<span>图表</span>
				</div>
				<div class="ap-editorLeft-content-left-item" :class="active === 'components' ? 'is-active' : ''"
					@click="updataActive('components')">
					<EditorIcon name="components" size="16px"></EditorIcon>
					<span>小组件</span>
				</div>
				<div class="ap-editorLeft-content-left-item" :class="active === 'map' ? 'is-active' : ''"
					@click="updataActive('map')">
					<EditorIcon name="history" size="16px"></EditorIcon>
					<span>地图</span>
				</div>
				<!-- <div
					class="ap-editorLeft-content-left-item"
					:class="active === 'hTitle' ? 'is-active' : ''"
					@click="updataActive('hTitle')"
				>
					<EditorIcon name="h" size="16px"></EditorIcon>
					<span>标题</span>
				</div>
				<div
					class="ap-editorLeft-content-left-item"
					:class="active === 'material' ? 'is-active' : ''"
					@click="updataActive('material')"
				>
					<EditorIcon name="material" size="16px"></EditorIcon>
					<span>素材</span>
				</div> -->
			</div>
			<!-- 右侧 -->
			<div class="ap-editorLeft-content-right">
				<el-scrollbar height="100%">
					<div class="ap-editorLeft-content-right-box">
						<historyList :domData="domData" v-if="active === 'history'" @selectItem="selectItem" :selectId="selectId"></historyList>
						<rightCom :menuList="mapData" v-if="active === 'map'"></rightCom>
						<rightCom :menuList="analysisData" v-if="active === 'analysis'"></rightCom>
						<rightCom :menuList="componentsData" v-if="active === 'components'"></rightCom>
						<rightCom :menuList="hTitleData" v-if="active === 'hTitle'"></rightCom>
						<rightCom :menuList="materialData" v-if="active === 'material'"></rightCom>
					</div>
				</el-scrollbar>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import rightCom from './rightCom.vue'
import historyList from './historyList.vue'
import analysisData from '@/assets/componentList/analysis.js'
import componentsData from '@/assets/componentList/components.js'
import mapData from '@/assets/componentList/map.js'
import hTitleData from '@/assets/componentList/hTitle.js'
import materialData from '@/assets/componentList/material.js'
const emit = defineEmits(['selectItem'])
const active = ref('analysis')
const updataActive = (val) => {
	active.value = val
}

const props = defineProps({
	domData: {
        type: Object,
        required: true,
    },
	selectId: {
		type: Array,
		default: []
	}
})


const selectItem = (item)=>{
    emit('selectItem', item)
}
</script>

<style lang="scss" scoped>
.ap-editorLeft {
	width: 100%;
	height: 100%;
	font-size: 12px;
	user-select: none;
	.ap-editorLeft-name {
		width: 100%;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		box-sizing: border-box;
		border-bottom: 1px solid var(--ap-editor-border);

		i {
			font-size: 14px;
		}
	}

	.ap-editorLeft-content {
		width: 100%;
		height: calc(100% - 36px);
		display: flex;

		.ap-editorLeft-content-left {
			width: 60px;
			height: 100%;
			padding: 5px;
			box-sizing: border-box;
			background: var(--ap-editor-left-nav-one);

			.ap-editorLeft-content-left-item {
				width: 100%;
				height: 60px;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				flex-direction: column;
				border-radius: 2px;
				margin-bottom: 5px;
				cursor: pointer;

				span {
					display: block;
					width: 100%;
					text-align: center;
					margin-top: 5px;
				}
			}
		}

		.ap-editorLeft-content-right {
			width: calc(100% - 60px);
			height: 100%;
			padding-top: 5px;
			padding-left: 5px;
			padding-right: 5px;
			box-sizing: border-box;

			.ap-editorLeft-content-right-box {
				width: 100%;
				height: 100%;

				&:deep(.el-collapse-item__header) {
					padding-left: 10px;
					box-sizing: border-box;
					height: 40px;
				}

				&:deep(.el-collapse-item__content) {
					padding-bottom: 0;
				}

				&:deep(.el-collapse-item__wrap) {
					z-index: 1;
					background: transparent;
				}
			}
		}
	}

	.is-active {
		background: var(--ap-editor-left-nav-bg);
		color: var(--ap-editor-left-nav-text);
	}
}
</style>
