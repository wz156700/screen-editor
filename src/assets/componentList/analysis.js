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
                height: 150, // 
                name: '图表示例1',
                uuid: 'A1',
                image: "/public/img/smalltitle.png"
            },
            {
                type: 'LineChart2', // 组件名
                mark: 'LineChart2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 150, // 
                name: '图表示例2',
                uuid: 'A2'
            }
        ]
    }
]

export default analysis
