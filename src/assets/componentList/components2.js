import Decoration1Icon from "../image/icon/Decoration1.png";
import Decoration3Icon from "../image/icon/Decoration3.png";
import Decoration6Icon from "../image/icon/Decoration6.png";
import Decoration7Icon from "../image/icon/Decoration7.png";
import Decoration8Icon from "../image/icon/Decoration8.png";
import Decoration11Icon from "../image/icon/Decoration11.png";
import Decoration12Icon from "../image/icon/Decoration12.png";


const components = [
    {
        name: "DataV装饰组件",
        value: 2,
        children: [
            {
                type: "Decoration1", // 组件名
                mark: "Decoration1", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 150, //
                name: "装饰条1",
                image: Decoration1Icon,
                uuid: 'B21',
                isShow: true
            },
            {
                type: "Decoration3", // 组件名
                mark: "Decoration3", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 150, //
                name: "装饰条3",
                image: Decoration3Icon,
                uuid: 'B23',
                isShow: true
            },
            {
                type: "Decoration5", // 组件名
                mark: "Decoration5", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 150, //
                name: "装饰条5",
                uuid: 'B25',
                isShow: true
            },
            {
                type: "Decoration6", // 组件名
                mark: "Decoration6", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 150, //
                name: "装饰条6",
                image: Decoration6Icon,
                uuid: 'B26',
                isShow: true
            },
            {
                type: "Decoration7", // 组件名
                mark: "Decoration7", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 150, //
                name: "装饰条7",
                image: Decoration7Icon,
                uuid: 'B27',
                isShow: true
            },
            {
                type: "Decoration8", // 组件名
                mark: "Decoration8", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 150, //
                name: "装饰条8",
                image: Decoration8Icon,
                uuid: 'B28',
                isShow: true
            },
            {
                type: "Decoration11", // 组件名
                mark: "Decoration11", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 80, //
                name: "装饰条11",
                image: Decoration11Icon,
                uuid: 'B211',
                isShow: true
            },
            {
                type: "Decoration12", // 组件名
                mark: "Decoration12", // 配置数据的名字
                fabricType: "rect",
                width: 250, // 初始化大小
                height: 250, //
                name: "装饰条12",
                image: Decoration12Icon,
                uuid: 'B212',
                isShow: true
            },
        ],
    }
]
export default components;