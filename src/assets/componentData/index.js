// 每个组件的数据
import { stylePublic } from "./public";

import { elButton } from "./butten";
import { BarChart1, BarChart2, BarChart3, BarChart4, polarBar, polarBar2, lineChart1, lineChart2, lineChart3, lineChart4, pieChart1, pieChart2, pieChart3, scatterPlot1, scatterPlot2, Map1 } from "./analysis";
import {
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    BorderBox6,
    BorderBox7,
    BorderBox8,
    BorderBox9,
    BorderBox10,
    BorderBox11,
    BorderBox12,
    BorderBox13,
    Decoration1,
    Decoration3,
    Decoration5,
    Decoration6,
    Decoration7,
    Decoration8,
    Decoration11,
    Decoration12,
    apWviewText1,
} from "./components";

let data = {
    Map1,
    elButton,
    BarChart1,
    BarChart2,
    BarChart3,
    BarChart4,
    polarBar,
    polarBar2,
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    BorderBox6,
    BorderBox7,
    BorderBox8,
    BorderBox9,
    BorderBox10,
    BorderBox11,
    BorderBox12,
    BorderBox13,
    Decoration1,
    Decoration3,
    Decoration5,
    Decoration6,
    Decoration7,
    Decoration8,
    Decoration11,
    Decoration12,
    apWviewText1,
    lineChart1,
    lineChart2,
    lineChart3,
    lineChart4,
    pieChart1,
    pieChart2,
    pieChart3,
    scatterPlot1,
    scatterPlot2,
    Map1

};

export const getConfig = (name) => {
    console.log("name~~", data[name])
    let itemData = {};
    itemData = {
        ...JSON.parse(JSON.stringify(data[name])),
    };
    itemData.style.unshift(...stylePublic);
    console.log("itemData~~~", itemData)
    return {
        ...itemData,
    };
};

export const getConfigData = (name, value) => {
    console.log('name, value~~', name, value)
    let item = {
        attribute: {},
        style: {},
        data: {},
    };

    let itemData = {
        ...data[name],
    };

    console.log("itemDataxixix~~", itemData)
    let Public = {};
    for (let i = 0; i < stylePublic.length; i++) {
        for (let k = 0; k < stylePublic[i].children.length; k++) {
            Public[stylePublic[i].children[k].field] = value[stylePublic[i].children[k].field] || stylePublic[i].children[k].default;
        }
    }
    item.style = { ...Public };
    for (let i = 0; i < itemData.attribute.length; i++) {
        for (let k = 0; k < itemData.attribute[i].children.length; k++) {
            if (itemData.attribute[i].children[k].field) {
                console.log('typeof value.attribute[itemData.attribute[i].children[k].field]', typeof value.attribute[itemData.attribute[i].children[k].field])
                if (typeof value.attribute[itemData.attribute[i].children[k].field] == 'boolean') {
                    item.attribute[itemData.attribute[i].children[k].field] = value.attribute[itemData.attribute[i].children[k].field]
                } else {
                    item.attribute[itemData.attribute[i].children[k].field] = value.attribute[itemData.attribute[i].children[k].field] || itemData.attribute[i].children[k].default;
                }

            } else {
                for (let j = 0; j < itemData.attribute[i].children[k].children.length; j++) {
                    for (let m = 0; m < itemData.attribute[i].children[k].children[j].children.length; m++) {
                        item.attribute[itemData.attribute[i].children[k].children[j].children[m].field] = value.attribute[itemData.attribute[i].children[k].children[j].children[m].field] || itemData.attribute[i].children[k].children[j].children[m].default;
                    }
                }

            }

        }
    }
    for (let i = 0; i < itemData.style.length; i++) {
        for (let k = 0; k < itemData.style[i].children.length; k++) {
            item.style[itemData.style[i].children[k].field] = value.style[itemData.style[i].children[k].field] || itemData.style[i].children[k].default;
        }
    }

    console.log('item~~~~wlf', item)
    return item;
};
