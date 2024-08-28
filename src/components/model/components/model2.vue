<template>
    <canvas ref="renderCanvas"></canvas>
</template>

<script setup>
import { onMounted, ref, reactive, watch, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//此处加载gltf模型，故使用GLFTLoader
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const props = defineProps({
    width: {
        type: String,
        require: true,
    },
    height: {
        type: String,
        require: true,
    },
});
defineOptions({ name: "model1" });

const renderCanvas = ref(null);

const state = reactive({
    width: 550,
    height: 550
})

const loadModel = () => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xffffff); // 白色背景

    //相机
    const camera = new THREE.PerspectiveCamera(
        65,
        state.width / state.height,
        0.1,
        1000
    );
    // 设置相机的位置
    camera.position.set(5, 5, 5); // x, y, z坐标
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 添加相机到场景
    scene.add(camera);

    //光照
    var ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // 添加光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // 聚光源
    const spotLight = new THREE.SpotLight(0xffffff, 1.0);
    scene.add(spotLight);//光源添加到场景中
    // 设置聚光光源发散角度
    spotLight.angle = Math.PI / 2;//光锥角度的二分之一
    // 设置聚光光源位置
    spotLight.position.set(200, 500, 1000);

    // spotLight.target是一个模型对象Object3D，默认在坐标原点
    spotLight.target.position.set(0, 0, 0);
    // spotLight.target添加到场景中.target.position才会起作用
    scene.add(spotLight.target);

    // 聚广源辅助对象，可视化聚广源
    const spotLightHelper = new THREE.SpotLightHelper(spotLight, 0xffffff)
    scene.add(spotLightHelper);
    spotLight.decay = 0.0;//设置光源不随距离衰减
    spotLight.intensity = 10.0;//光照强度


    let renderer;
    nextTick(() => {
        //render
        renderer = new THREE.WebGLRenderer({
            canvas: renderCanvas.value,
            alpha: true
        });


        renderer.setSize(state.width, state.height);

        // 设置相机控件轨道控制器OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0, 0); //与lookAt参数保持一致
        controls.update(); //update()函数内会执行camera.lookAt(controls.target)
        // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
        controls.addEventListener('change', function () {
            renderer.render(scene, camera); //执行渲染操作

        });//监听鼠标、键盘事件



        loadGLTFModel('./model/san_francisco_city_4k.glb');
    })

    function render() {

        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }


    function loadGLTFModel(fileURL) {
        var loader = new GLTFLoader();
        loader.load(
            fileURL,
            function (gltf) {
                var model = gltf.scene;
                // console.log("gltf", gltf)
                model.position.set(0, 0, 0); // 将模型移到世界坐标原点
                model.scale.set(2, 2, 2);
                scene.add(model);

                // 给所有网格对象应用相同的材质
                model.traverse(function (child) {
                    // console.log("child", child)
                    if (child instanceof THREE.Mesh) {
                        // console.log("mesh child", child)
                        // child.material = new THREE.MeshStandardMaterial({
                        //     color: 0x228B22, // 绿色
                        //     roughness: 0.5,
                        //     metalness: 0.5
                        // });
                    }
                });
                render();
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );
    }





}

onMounted(() => {
    // loadModel()
})

watch(() => props.width, (newVal) => {
    if (newVal) {
        state.width = newVal

    }

    // console.log("宽度改变了", newVal)

}, {
    deep: true,
    immediate: true,
})

watch(() => props.height, (newVal) => {
    console.log("高度改变了", newVal, props.width)
    if (newVal) {
        state.height = newVal
    }

    loadModel()

}, {
    deep: true,
    immediate: true
})

</script>

<style scoped>
.map-container {
    width: 100%;
    height: 100%;
}
</style>