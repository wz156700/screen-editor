import { descriptionProps } from "element-plus";
import { keyBy } from "lodash-es";

// 图表
export const LineChart1 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [
                {
                    name: "x轴文本颜色",
                    type: "el-color-picker",
                    field: "xColor",
                    default: "#fff",
                },
                {
                    name: "x轴文字大小",
                    type: "el-input-number",
                    field: "xfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "x轴名称",
                    type: "el-input",
                    field: "xcontent",
                    default: "",
                },
                {
                    name: "x轴名称颜色",
                    type: "el-color-picker",
                    field: "xcontentColor",
                    default: "#fff",
                },

                {
                    name: "y轴文本颜色",
                    type: "el-color-picker",
                    field: "yColor",
                    default: "#fff",
                },
                {
                    name: "y轴文字大小",
                    type: "el-input-number",
                    field: "yfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "y轴名称",
                    type: "el-input",
                    field: "ycontent",
                    default: "",
                },
                {
                    name: "y轴名称颜色",
                    type: "el-color-picker",
                    field: "ycontentColor",
                    default: "#fff",
                },
                {
                    name: "图表颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "起始颜色",
                                    type: "el-color-picker",
                                    field: "barStartColorof1",
                                    default: "#0000ff",
                                },
                                {
                                    name: "终止颜色",
                                    type: "el-color-picker",
                                    field: "barEndColorof1",
                                    default: "#0000ff",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "x",
                mapping: "x",
                description: "类目",
            },
            {
                field: "y",
                mapping: "y",
                description: "值",
            },
            {
                field: "s",
                mapping: "s",
                description: "系列",
            },
        ],
        data: [
            { x: "Mon", y: 120, s: "系列一" },
            { x: "Tue", y: 200, s: "系列一" },
            { x: "Wed", y: 150, s: "系列一" },
            { x: "Thu", y: 80, s: "系列一" },
            { x: "Fri", y: 70, s: "系列一" },
            { x: "Sat", y: 110, s: "系列一" },
            { x: "Sun", y: 130, s: "系列一" },
        ],
    },
};

export const LineChart2 = {
    attribute: [{
        name: "属性配置",
        value: "A",
        children: [
            {
                name: "x轴文本颜色",
                type: "el-color-picker",
                field: "xColor",
                default: "#fff",
            },
            {
                name: "x轴文字大小",
                type: "el-input-number",
                field: "xfontSize",
                default: 12,
                max: 12,
                max: 100,
            },
            {
                name: "x轴名称",
                type: "el-input",
                field: "xcontent",
                default: "",
            },
            {
                name: "x轴名称颜色",
                type: "el-color-picker",
                field: "xcontentColor",
                default: "#fff",
            },
            {
                name: "图表颜色",
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof1",
                                default: "#0000ff",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof1",
                                default: "#0000ff",
                            },
                        ],
                    },
                ],
            },
        ],
    },],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "x",
                mapping: "x",
                description: "类目",
            },
            {
                field: "y",
                mapping: "y",
                description: "值",
            },
            {
                field: "s",
                mapping: "s",
                description: "系列",
            },
        ],
        data: [
            { "x": -0.07, "y": "ten", "s": "系列一" },
            { "x": -0.09, "y": "nine", "s": "系列一" },
            { "x": 0.2, "y": "eight", "s": "系列一" },
            { "x": 0.44, "y": "seven", "s": "系列一" },
            { "x": -0.23, "y": "six", "s": "系列一" },
            { "x": 0.08, "y": "five", "s": "系列一" },
            { "x": -0.17, "y": "four", "s": "系列一" },
            { "x": 0.47, "y": "three", "s": "系列一" },
            { "x": -0.36, "y": "two", "s": "系列一" },
            { "x": 0.18, "y": "one", "s": "系列一" }
        ],
    }
};
