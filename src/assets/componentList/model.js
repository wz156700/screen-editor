import { useCounterStore } from "@/store/editor";
const dataStore = useCounterStore();

// 图表
const analysis = [
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'model1', // 组件名
                mark: 'model1', // 配置数据的名字
                fabricType: 'rect',
                width: 550, // 初始化大小
                height: 550, // 
                name: '模型1',
                uuid: 'A1',
                image: "/public/img/gltf-model1.png",
                isShow: true
            },
        ]
    },
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'moel2', // 组件名
                mark: 'model2', // 配置数据的名字
                fabricType: 'rect',
                width: 550, // 初始化大小
                height: 550, // 
                name: '模型1',
                uuid: 'A1',
                image: "/public/img/gltf-model2.png",
                isShow: true
            },
        ]
    }
]

export default analysis
