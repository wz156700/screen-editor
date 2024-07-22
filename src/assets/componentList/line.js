// 图表
const lines = [
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'lineChart1', // 组件名
                mark: 'lineChart1', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '普通折线图',
                uuid: 'A1',
                image: "/public/img/bar1.jpg",
                isShow: true
            },
            {
                type: 'lineChart2', // 组件名
                mark: 'lineChart2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '双折线图',
                uuid: 'A1',
                image: "/public/img/bar1.jpg",
                isShow: true
            },
            {
                type: 'lineChart3', // 组件名
                mark: 'lineChart3', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '渐变堆叠折线图',
                uuid: 'A1',
                image: "/public/img/bar1.jpg",
                isShow: true
            },
            {
                type: 'lineChart4', // 组件名
                mark: 'lineChart4', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '阶梯折线图',
                uuid: 'A1',
                image: "/public/img/bar1.jpg",
                isShow: true
            },
        ]
    }
]

export default lines
