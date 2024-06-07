<!--

组件名称: 文本组件
-->
<template>
    <div class="image-preview-containner">
        <template v-for="(item, index) in menuList" :key="index">
            <TextItem :itemData="item" />
        </template>
    </div>

</template>

<script setup>
import TextItem from "./TextItem.vue";
import { ref } from "vue";
const value = ref([1]);

defineProps({
    menuList: {
        type: Array,
    },
});
</script>

<style scoped>
.image-preview-containner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 18.75rem;
    overflow-y: auto;
}
</style>