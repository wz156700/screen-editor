// 图表
const analysis = [
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'BarChart1', // 组件名
                mark: 'BarChart1', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '普通柱状图',
                uuid: 'A1',
                image: "/public/img/bar1.jpg",
                isShow: true
            },
            {
                type: 'BarChart2', // 组件名
                mark: 'BarChart2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '横向交错柱状图',
                uuid: 'A2',
                image: "/public/img/bar2.jpg",
                isShow: true
            },
            {
                type: 'polarBar', // 组件名
                mark: 'polarBar', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '极坐标柱状图',
                uuid: 'A3',
                image: "/public/img/bar2.jpg",
                isShow: true
            }
        ]
    }
]

export default analysis
