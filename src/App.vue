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

<style scoped></style>
