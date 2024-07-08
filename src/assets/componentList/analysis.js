// 图表
const analysis = [
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'LineChart1', // 组件名
                mark: 'LineChart1', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '普通柱状图',
                uuid: 'A1',
                image: "/public/img/bar1.jpg",
                isShow: true
            },
            {
                type: 'LineChart2', // 组件名
                mark: 'LineChart2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '横向柱状图',
                uuid: 'A2',
                image: "/public/img/smalltitle.png",
                isShow: true
            }
        ]
    }
]

export default analysis
