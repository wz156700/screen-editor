<!--
作者: nodebook@qq.com
组件名称: 画布白板
-->
<template>
    <div class="ap-editor-whiteboard" :style="{ height: editorMainInfo.h + 'px', width: editorMainInfo.w + 'px' }">
        <div class="ap-editor-whiteboard-box" :style="styleBox">
            <template v-for="item in domDataPage" :key="item.uuid + item.width + item.height + item.mtl + item.mtr + item.mbr + item.mbl">
                <div
                    class="ap-editor-whiteboard-box-item"
                    :style="{
                        left: whiteboardBox.left + props.positionInfo.left + item.left + 'px',
                        top: whiteboardBox.top + props.positionInfo.top + item.top + 'px',
                        width: item.width + 'px',
                        height: item.height + 'px',
                        transform: `rotate(${item.angle}deg)`,
                        transformOrigin: `${item.angleX}px ${item.angleY}px`,
                        zIndex: item.zIndex,
                        borderRadius: `${item.btl}px ${item.btr}px ${item.bbr}px ${item.bbl}px`,
                        padding: `${item.mtl}px ${item.mtr}px ${item.mbr}px ${item.mbl}px`,
                        alignItems: `${item.alignW}`,
                        justifyContent: `${item.alignH}`,
                    }"
                    :set-key="item.uuid" 
                >
                    <component :is="item.type" class="ap-editor-whiteboard-box-item-com" :key="item.uuid" v-bind="item.attribute" ></component>
                </div>
            </template>
            <h1>{{ domInfo.backgroundColor }}</h1>
            <div
                class="ap-editor-whiteboard-border"
                :style="{
                    left: whiteboardBox.left + props.positionInfo.left + 'px',
                    top: whiteboardBox.top + props.positionInfo.top + 'px',
                    width: domInfo.width,
                    height: domInfo.height,
                    backgroundColor: domInfo.backgroundColor ? domInfo.backgroundColor : 'transparent'
                }"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch } from "vue";

const props = defineProps({
    editorMainInfo: {
        type: Object,
        require: true,
    },
    positionInfo: {
        type: Object,
        require: true,
    },
    domData: {
        type: Object,
        default: {},
    },
    domInfo: {
        type: Object,
        default: {},
    },
});

const domDataPage = computed(() => Object.values(props.domData));

const whiteboardBox = reactive({
    left: 5000,
    top: 5000,
    x: 0,
    y: 0,
});

const styleBox = computed(() => {
    return {
        left: -whiteboardBox.left + "px",
        top: -whiteboardBox.top + "px",
        transformOrigin: `${whiteboardBox.left}px ${whiteboardBox.top}px`, // ,
        transform: `scale(${props.positionInfo.zoom})`,
        width: `${props.positionInfo.w * 200}px`,
        height: `${props.positionInfo.h * 200}px`,
    };
});

</script>

<style scoped lang="scss">
.ap-editor-whiteboard {
    position: relative;

    .ap-editor-whiteboard-box {
        width: 20000px;
        height: 20000px;
        position: absolute;
        transform: translateZ(0);
        .ap-editor-whiteboard-box-item {
            position: absolute;
            overflow: hidden;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            pointer-events: none;
            .ap-editor-whiteboard-box-item-com {
                flex-shrink: 0;
            }
        }
    }
    .ap-editor-whiteboard-border {
        z-index: -1;
        // background: yellowgreen;
        position: absolute;
        border: 1px dashed #666;
    }
}
</style>
