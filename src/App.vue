<script setup>
import { onMounted } from 'vue'

//做自适应
const setRem = () => {
	const htmlWidth =
		document.documentElement.clientWidth || document.body.clientWidth

	const htmlDom = document.getElementsByTagName('html')[0]

	//不做移动端适配
	if (htmlWidth > 750) {
		htmlDom.style.fontSize = Math.ceil(htmlWidth / 120) + 'px'
		// userStore.htmlFonstSize = Math.ceil(htmlWidth / 120)
		// console.log(userStore.htmlFonstSize)
	}
}

onMounted(() => {

	// 设置 rem 基准值
	window.addEventListener('resize', e => {
		setRem()
	})

	// 初始化
	setRem()
})

</script>

<template>
	<router-view></router-view>
</template>

<style>
/* 整个滚动条 */
::-webkit-scrollbar {
	width: 0;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgb(9, 82, 176);
	border-radius: 10px;
}

/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	background: rgb(9, 82, 176);
}

/* 滚动条的滑块：鼠标悬停或按下时 */
::-webkit-scrollbar-thumb:hover,
::-webkit-scrollbar-thumb:active {
	background: rgb(9, 82, 176);
}

@font-face {
	font-family: 'Alibaba_PuHuiTi';
	src:
		url('./assets/font/Alibaba_PuHuiTi_2.0_45_Thin_45_Thin.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

.el-input__wrapper {
	background: transparent !important;
	border: 1px solid #0067DD !important;
}

.el-select__wrapper {
	background: transparent !important;
	border: 1px solid #0067DD !important;
}

.el-select__wrapper {
	background: transparent !important;
	border: 1px solid #0067DD !important;
	color: #fff !important;
}
</style>
