<!--
作者: nodebook@qq.com
组件名称: arrayValue
-->
<template>
    <div class="arrayValue">
        <el-input v-model="input" placeholder="请使用 , 分割多值" @change="inputData"  />
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { ElMessage } from 'element-plus'

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
	modelValue: {
        default: () => [],
        type: Array,
    },
    length: {
        default: 1,
        type: Number,
    }
})
// 判断是否是一个颜色值
function isColor(value) {
 const colorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
 return colorRegex.test(value);
}


const input = ref(props.modelValue ? props.modelValue.join(',') : '')

const inputData = (e)=>{
    if(e.length>0){
        let dataArr = e.split(',')
        let index = -1
        for(let i=0;i<dataArr.length;i++){
            if(!isColor(dataArr[i])){
                index = i
                break
            }
        }
        
        if(index >-1){
            ElMessage.error('第'+(index+1)+'个值不符合颜色值')
        }else{
            if(dataArr.length>props.length){
                dataArr.length = props.length
            }
            emit('update:modelValue', dataArr)
            emit('change', dataArr)
        }
    }
}
</script>

<style scoped>
.arrayValue{
    width: 100%;
    height: auto;
}
.arrayValue-item{
    margin-bottom: 10px;
}
</style>