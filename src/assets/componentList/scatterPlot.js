// 图表
const scatterPlot = [
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'scatterPlot1', // 组件名
                mark: 'scatterPlot1', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '基础散点图',
                uuid: 'A1',
                image: "/public/img/dot1.png",
                isShow: true
            },
            {
                type: 'scatterPlot2', // 组件名
                mark: 'scatterPlot2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '气泡图',
                uuid: 'A1',
                image: "/public/img/dot2.png",
                isShow: true
            }
        ]
    }
]

export default scatterPlot
