// 小组件
const components = [
    {
        name: "地图组件",
        value: 1,
        children: [
            {
                type: "Map1", // 组件名
                mark: "Map1", // 配置数据的名字
                fabricType: "rect",
                width: 450, // 初始化大小
                height: 450, //
                name: "基础地图",
                uuid: 'D1',
                isShow: true,
                image: "/public/img/Map1.png",
            },
        ]
    }
]


export default components;