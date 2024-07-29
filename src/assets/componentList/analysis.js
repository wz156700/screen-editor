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
                type: 'BarChart3', // 组件名
                mark: 'BarChart3', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '横向双柱状图',
                uuid: 'A3',
                image: "/public/img/bar5.jpg",
                isShow: true
            },
            {
                type: 'BarChart4', // 组件名
                mark: 'BarChart4', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '双柱状图',
                uuid: 'A4',
                image: "/public/img/bar6.jpg",
                isShow: true
            },
            {
                type: 'polarBar', // 组件名
                mark: 'polarBar', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '极坐标柱状图-样式1',
                uuid: 'A5',
                image: "/public/img/bar3.jpg",
                isShow: true
            },
            {
                type: 'polarBar2', // 组件名
                mark: 'polarBar2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '极坐标柱状图-样式2',
                uuid: 'A6',
                image: "/public/img/bar4.jpg",
                isShow: true
            }
        ]
    }
]

export default analysis
