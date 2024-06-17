<!--

组件名称: 可视化编辑器主内容区
-->
<template>


  <div class="td-editor-main-box" ref="apEditorMain" @mousemove="canvasMouseMove" @mousewheel="canvasMouseWheel">
    <canvas ref="apEditorCanvas"></canvas>
  </div>
</template>

<script setup>
import { fabric } from "fabric";
import { nextTick, onMounted, ref, watch, reactive, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
//pinia仓库
import { useCounterStore } from "@/store/editor";
const dataStore = useCounterStore();


// 不需要渲染到画布上的
let NotDom = ["referenceLine", "datunBox"];

const emit = defineEmits([
  "updataSize",
  "addDOM",
  "updataDOM",
  "updataDOMArray",
  "removeDOM",
  "selectDom",
  "updataIndex",
]);

const props = defineProps({
  draggable: {
    type: Object,
    default: null,
  },
  canvasInfo: {
    type: Object,
    required: true,
  },
  domInfo: {
    type: Object,
    required: true,
  }
});


const pageState = reactive({
  domInfo: computed(() => props.domInfo)
})


// 操作历史记录数组
var history = [];

const apEditorCanvas = ref(null);
const apEditorMain = ref(null);

const origin = {
  x: 0,
  y: 0,
};
// 缩放比
const Scaling = 0.05;
// 参考位置名字
const referName = "refer";
let refer;
let w = 0;
let h = 0;
// Fabric 对象
let canvas;

const FabricSelect = ref(null);

const fixed = (num, seep = 2) => {
  return parseFloat(num.toFixed(seep));
};

// 单个元素的更新
const updataDomItem = (target) => {
  if (NotDom.includes(target.name)) {
    return;
  }

  emit("updataDOM", {
    uuid: target.uuid,
    left: fixed(target.left),
    top: fixed(target.top),
    width: fixed(target.width * target.scaleX),
    height: fixed(target.height * target.scaleY),
    angle: target.angle,
    name: target.name,
    angleX: 0,
    angleY: 0,
  });
};

// 批量更新
const updataDomItems = (target) => {
  let arrItems = [];
  let targets = target._objects;
  for (let i = 0; i < targets.length; i++) {
    if (NotDom.includes(target.name)) continue;
    let targetsItem = targets[i];
    let item = {
      uuid: targetsItem.uuid,
      left: fixed(
        targetsItem.left * target.scaleX +
        target.left +
        (target.width * target.scaleX) / 2
      ),
      top: fixed(
        targetsItem.top * target.scaleY +
        target.top +
        (target.height * target.scaleY) / 2
      ),
      width: fixed(targetsItem.width * targetsItem.scaleX * target.scaleX),
      height: fixed(targetsItem.height * targetsItem.scaleY * target.scaleY),
      angle: target.angle + targetsItem.angle,
      angleX: -fixed(
        (target.width * target.scaleX) / 2 + targetsItem.left * target.scaleX
      ),
      angleY: -fixed(
        (target.height * target.scaleY) / 2 + targetsItem.top * target.scaleX
      ),
      name: targetsItem.name,
    };
    arrItems.push(item);
  }
  emit("updataDOMArray", arrItems);
};

// 创建元素
function createRect(top, left, item) {
  console.log("2.为拖拽过来的文件生成一个相应大小的矩形框，然后添加到画布上")
  let rt = new fabric.Rect({
    top,
    left,
    width: item.width || 100,
    height: item.height || 50,
    fill: "transparent",
    type: item.type,
    mark: item.mark,
    fabricType: item.fabricType,
    name: item.name,
    componentsuuid: item.uuid,
    uuid: uuidv4(),
    angle: 0,
  });
  canvas.add(rt);
}

// 初始化
const getInfo = async () => {
  w = apEditorMain.value.offsetWidth;
  h = apEditorMain.value.offsetHeight;
  apEditorCanvas.value.setAttribute("width", w);
  apEditorCanvas.value.setAttribute("height", h);
  canvas = new fabric.Canvas(apEditorCanvas.value, {
    backgroundColor: "transparent",
    hasRotatingPoint: false,
  });
  canvas.setWidth(w);
  canvas.setHeight(h);
  if (pageState.domInfo.ratio) {
    let obj = pageState.domInfo.ratio.split("*");
    let scale = w / obj[0]
    canvas.setZoom(scale)

  }
  //记录当前中间区域的宽高
  dataStore.global.canvasContainnerWidth = w;
  dataStore.global.canvasContainnerHeight = h;

  // 位置参考
  refer = new fabric.Rect({
    top: 0, // 距离容器顶部 100px
    left: 0, // 距离容器左侧 100px
    fill: "transparent", // 填充 橙色
    width: 0, // 宽度 100px
    height: 0, // 高度 100px
    name: referName,
    selectable: false,
  });

  canvas.add(refer);
  nextTick(() => { getPosition(); })




  // 元素移动
  canvas.on("object:moving", function (event) {
    let target = event.target; // 获取目标元素
    if (event.target._objects) {
      updataDomItems(event.target);
    } else {
      updataDomItem(target);
    }
  });
  // 元素缩放
  canvas.on("object:scaling", function (event) {
    let target = event.target; // 获取目标元素
    if (event.target._objects) {
      updataDomItems(event.target);
    } else {
      updataDomItem(target);
    }
  });
  // 元素旋转
  canvas.on("object:rotating", function (event) {
    let target = event.target; // 获取目标元素
    if (event.target._objects) {
      updataDomItems(event.target);
    } else {
      updataDomItem(target);
    }
  });
  // 元素倾斜
  canvas.on("object:skewing", function (event) {
    let target = event.target; // 获取目标元素
  });
  // 当元素大小调整时触发。
  canvas.on("object:resizing", function (event) {
    let target = event.target; // 获取目标元素
    if (event.target._objects) {
      updataDomItems(event.target);
    } else {
      updataDomItem(target);
    }
  });
  // 当元素添加到画布上时触发。
  canvas.on("object:added", function (event) {
    console.log('3.拖拽过来的文件已经被添加到画布上了~~')
    let target = event.target; // 获取目标元素
    if (NotDom.includes(target.name)) return;
    // 同步数据到domData中
    emit("addDOM", {
      name: target.name,
      left: fixed(target.left),
      top: fixed(target.top),
      width: fixed(target.width),
      height: fixed(target.height),
      uuid: target.uuid,
      angle: target.angle,
      angleX: target.angleX || 0,
      angleY: target.angleY || 0,
      zIndex: target.zIndex || canvas.getObjects().length,
      mtl: target.mtl || 0,
      mtr: target.mtr || 0,
      mbl: target.mbl || 0,
      mbr: target.mbr || 0,
      btl: target.btl || 0,
      btr: target.btr || 0,
      bbl: target.bbl || 0,
      bbr: target.bbr || 0,
      alignH: target.alignH || "",
      alignW: target.alignW || "",
      type: target.type,
      mark: target.mark,
      componentsuuid: target.componentsuuid,
      fabricType: target.fabricType,
      attribute: target.attribute || {},
      style: target.style || {},
      data: target.data || {},
      scaleX: target.scaleX || 1,
      scaleY: target.scaleY || 1,
      lockMovementX: target.lockMovementX || false,
      lockMovementY: target.lockMovementY || false,
    });
  });
  // 当元素从画布上移除时触发。
  canvas.on("object:removed", function (event) {
    let target = event.target; // 获取目标元素
  });

  // //当元素被选中时触发。
  // canvas.on("object:selected", function (event) {
  //   console.log("2.1元素被选中了")
  //   let target = event.target; // 获取目标元素
  //   if (NotDom.includes(target.name)) {
  //     return;
  //   }
  // });

  // // 当元素被取消选中时触发。
  // canvas.on("object:deselected", function (event) {
  //   let target = event.target; // 获取目标元素
  // });

  // 当画布平移时触发。
  canvas.on("after:render", function (event) { });

  canvas.on("object:removed", function (event) {
    console.log('元素删除了！')
    var removedElement = event.target;
    emit("removeDOM", removedElement.uuid);
  });

  // 监听元素被选中的事件
  canvas.on("selection:created", function (e) {
    console.log("2.1 元素被选中了")
    var selectedObjects = e.selected.filter(
      (item) => !NotDom.includes(item.name)
    );

    FabricSelect.value = selectedObjects;
  });

  canvas.on("selection:updated", function (e) {
    var selectedObjects = e.selected.filter(
      (item) => !NotDom.includes(item.name)
    );
    FabricSelect.value = selectedObjects;
  });

  // 监听取消选中的事件
  canvas.on("selection:cleared", function () {
    FabricSelect.value = null;
  });

  // 自定义控制点

  // fabric.Object.prototype.controls.mtr = false
  // 控制线颜色
  fabric.Object.prototype.borderColor = "#F3AF02";
  // 修改控制点的形状，默认为`rect`矩形，可选的值还有`circle`圆形
  fabric.Object.prototype.cornerStyle = "circle";
  // 修改控制点的填充色为白色
  fabric.Object.prototype.cornerColor = "white";
  // 修改控制点的大小为10px
  fabric.Object.prototype.cornerSize = 10;
  // 设置控制点不透明，即可以盖住其下的控制线
  fabric.Object.prototype.transparentCorners = false;
  // 修改控制点的边框颜色为`gray`灰色
  fabric.Object.prototype.cornerStrokeColor = "gray";

  // 自定义控制点
  fabric.Object.prototype.setControlsVisibility({ mtr: false });

  // 平移
  canvas.on("mouse:down", (opt) => {
    // 鼠标按下时触发
    let evt = opt.e;
    if (props.canvasInfo.moveing) {
      // 是否按住alt
      canvas.isDragging = true; // isDragging 是自定义的
      canvas.lastPosX = evt.clientX; // lastPosX 是自定义的
      canvas.lastPosY = evt.clientY; // lastPosY 是自定义的
    }
  });

  canvas.on("mouse:move", (opt) => {
    // 鼠标移动时触发
    if (canvas.isDragging) {
      let evt = opt.e;
      let vpt = canvas.viewportTransform; // 聚焦视图的转换
      vpt[4] += evt.clientX - canvas.lastPosX;
      vpt[5] += evt.clientY - canvas.lastPosY;
      canvas.requestRenderAll();
      canvas.lastPosX = evt.clientX;
      canvas.lastPosY = evt.clientY;
      canvas.setViewportTransform(canvas.viewportTransform); // 设置此画布实例的视口转换
      setTransform();
    }
  });

  canvas.on("mouse:up", () => {
    // 鼠标松开时触发
    canvas.isDragging = false;
  });
  // canvas.selectionFullyContained = true // 只选择完全包含在拖动选择矩形中的形状

  canvas.on("object:modified", (event) => {
    var object = event.target;

    // 保存被修改的对象到历史记录
    var state = canvas.toJSON();
    history.push(state);
  });

  // 拖拽
  //文件被拖拽到画布上时触发
  canvas.on("drop", function (opt) {
    console.log('1. 拖拽的文件被丢过来了')
    // 画布元素距离浏览器左侧和顶部的距离
    let offset = {
      left: canvas.getSelectionElement().getBoundingClientRect().left,
      top: canvas.getSelectionElement().getBoundingClientRect().top,
    };

    // 鼠标坐标转换成画布的坐标（未经过缩放和平移的坐标）
    let point = {
      x: opt.e.x - offset.left,
      y: opt.e.y - offset.top,
      markId: 1,
    };

    // 转换后的坐标，restorePointerVpt 不受视窗变换的影响
    let pointerVpt = canvas.restorePointerVpt(point);
    let currentType = props.draggable;
    if (!currentType) {
      new Error("目标元素为空");
      return;
    }
    switch (currentType.fabricType) {
      case "rect":
        createRect(pointerVpt.y, pointerVpt.x, currentType);
        break;
    }
  });
};

const resizeInfo = () => {
  if (!apEditorMain.value) return;
  setTimeout(() => {
    w = apEditorMain.value.clientWidth;
    h = apEditorMain.value.clientHeight;
    apEditorCanvas.value.setAttribute("width", w);
    apEditorCanvas.value.setAttribute("height", h);
    canvas.setWidth(w);
    canvas.setHeight(h);
    //记录当前中间区域的宽高
    dataStore.global.canvasContainnerMessage.width = w;
    dataStore.global.canvasContainnerMessage.height = h;
    if (pageState.domInfo.ratio) {
      let obj = pageState.domInfo.ratio.split("*");
      let scale = w / obj[0]
      canvas.setZoom(scale)
    }
    canvas.renderAll();
    getPosition("referenceLine");
  }, 0)

};


onMounted(async () => {
  await getInfo();
  resizeInfo();
  window.addEventListener("resize", resizeInfo, false);
  console.log('canvas的全部元素', canvas.getObjects())
});

watch(() => props.domInfo, async (newVal) => {
  pageState.domInfo.value = newVal
  await getInfo()
}, {
  deep: true
})

//监听左侧边栏和右侧边栏是否收起
watch(() => dataStore.global.isShowLeftBar, (newVal) => {
  resizeInfo()
})

watch(() => dataStore.global.isShowRightBar, (newVal) => {
  resizeInfo()
})

// 缩放
const canvasMouseWheel = (e) => {
  const delta = e.deltaY;
  let zoom = canvas.getZoom();

  if (e.ctrlKey) {
    let layerX = e.layerX;
    let layerY = e.layerY;
    if (e.wheelDelta > 0) {
      // if (canvas.getZoom() < 0.5) return;
      canvas.zoomToPoint(
        new fabric.Point(layerX, layerY),
        canvas.getZoom() - Scaling
      );
    } else {
      // if (canvas.getZoom() > 3.5) return;
      canvas.zoomToPoint(
        new fabric.Point(layerX, layerY),
        canvas.getZoom() + Scaling
      );
    }
    getPosition("referenceLine");
    e.preventDefault();
    e.stopPropagation();
  } else {
  }
};

// 移动
const canvasMouseMove = (e) => {
  origin.x = e.layerX; //记录下鼠标相对于画布左上角的x坐标
  origin.y = e.layerY;//记录下鼠标相对于画布左上角的y坐标
};

// 获取位置坐标
const getPosition = (val) => {
  // 获取画布内的所有元素
  let t = canvas.getObjects();
  // 获取参考线的那个元素
  let referItem = t.filter((item) => item.name == referName)[0];
  // 获取位置信息
  let referInfo = referItem.getBoundingRect();
  // 实际位置
  const sizeInfo = {
    w: w / referInfo.width,
    h: h / referInfo.height,
    left: referInfo.left / referInfo.width,
    top: referInfo.top / referInfo.height,
    x: (origin.x + referInfo.left) * referInfo.width,
    y: (origin.y + referInfo.top) * referInfo.height,
    zoom: canvas.getZoom(),
  };

  if (val === "referenceLine" && canvas) {
    updataLine();
  }
  emit("updataSize", sizeInfo);
};

// 如果选择移动 则取消框选
watch(
  () => props.canvasInfo.moveing,
  (news) => {
    if (news && canvas) {
      // 取消框选
      canvas.discardActiveObject();
      // 禁止框选
      canvas.selection = false;
      canvas.requestRenderAll();
    } else if (canvas) {
      canvas.selection = true;
    }
  }
);

// 框选
watch(
  () => FabricSelect.value,
  (news) => {
    if (news) {
      console.log("news~~~", news)
      let selectUUID = news.map((item) => item.uuid);
      let selectLock = news.map((item) => {
        return {
          uuid: item.uuid,
          lockMovementX: item.lockMovementX,
          lockMovementY: item.lockMovementY,
        };
      });
      emit("selectDom", selectUUID);
      emit("updataDOMArray", selectLock);
    } else {
      emit("selectDom", null);
    }
  },
  {
    immediate: true,
  }
);

let type1 = ["left", "top"];
// 修改元素的属性
const updataFiles = (label, value, uuid) => {
  let canvasObj = canvas.getObjects();
  let target = canvasObj.filter((item) => item.uuid == uuid);
  if (target && target.length == 1) {
    if (type1.includes(label)) {
      target[0][label] = value;
      emit("updataDOM", {
        uuid,
        [label]: value,
      });
    }

    if (label == "width") {
      let w = value / target[0].scaleX;
      target[0].set("width", w);
      emit("updataDOM", {
        uuid,
        width: value,
      });
    }
    if (label == "height") {
      let h = value / target[0].scaleY;
      target[0][label] = h;
      emit("updataDOM", {
        uuid,
        height: value,
      });
    }
    if (label == "zIndex") {
      target[0].moveTo(value);
      emit("updataIndex", {
        value,
        uuid,
      });
    }
    if (label == "lockMovementY") {
      target[0].lockMovementY = value;
      emit("updataDOM", {
        [label]: value,
        uuid,
      });
    }
    if (label == "lockMovementX") {
      target[0].lockMovementX = value;
      emit("updataDOM", {
        [label]: value,
        uuid,
      });
    }
    canvas.renderAll();
  }
};

// 删除元素
const deleteItem = (val) => {
  if (val) {
    console.log('canvas~~~', canvas.getObjects)
    FabricSelect.value = null;
    let canvasObj = canvas.getObjects();
    console.log("canvasObj~~hehiehi", canvasObj)
    let target = canvasObj.filter((item) => val.includes(item.uuid));

    for (let i = 0; i < target.length; i++) {
      canvas.remove(target[i]);
    }
    canvas.discardActiveObject();

    canvas.renderAll();
  } else {
    // 清空画布
    canvas.clear();
    // 重新添加保留的元素
    canvas.add(refer);
    getPosition();
  }
};

// 撤回操作
function undo() {
  if (history.length > 1) {
    // 移除当前状态
    history.pop();
    // 获取上一个状态
    var state = history[history.length - 1];
    // 恢复上一个状态到画布
    canvas.loadFromJSON(state);
  }
}

// 重做操作
function redo() {
  if (history.length < 2) return;

  // 获取下一个状态
  var state = history[history.length - 2];
  // 恢复下一个状态到画布
  canvas.loadFromJSON(state);

  // 将状态从历史记录中移除
  history.pop();
}

// 画布平移
const setTransform = () => {
  var viewportTransform = canvas.viewportTransform;
  let left = viewportTransform[4];
  let top = viewportTransform[5];
  if (left != 0 || top != 0) {
    getPosition("referenceLine");
  }
};

// 创建参考线
const creatLine = (type, val) => {
  let lineArr = [];
  let t = canvas.getObjects();
  // 获取参考线的那个元素
  let referItem = t.filter((item) => item.name == referName)[0];
  // 获取位置信息
  let referInfo = referItem.getBoundingRect();
  console.log('referInfo~~~', referInfo)
  // let move = {}
  if (type == "lineW") {
    // lineArr = [-(referInfo.left / referInfo.width), val.value, canvas.width, val.value]
    let w = parseFloat(canvas.width);
    let v = parseFloat(val.value);
    let scale = canvas.getZoom();
    let line = new fabric.Line([0, 0, w, 0], {
      stroke: "red",
      strokeWidth: 1,
      selectable: false,
      strokeDashArray: [3, 3],
      hoverCursor: "pointer",
    });
    // 创建文本
    let text = new fabric.Text(v + " px", {
      left: 25,
      top: 5,
      fontSize: 12,
      fill: "#fff",
    });
    // 创建关闭按钮
    // 定义叉号的路径数据
    let crossPath = "M10 0 L0 10 M0 0 L10 10";
    let closeButton = new fabric.Path(crossPath, {
      stroke: "red",
      strokeWidth: 1,
      selectable: false,
      left: 10,
      top: 5,
      hoverCursor: "text",
    });
    line.hoverCursor = "row-resize";

    // 创建分组
    let group = new fabric.Group([line, text, closeButton], {
      left: -(referInfo.left / referInfo.width),
      top: v,
      width: w,
      name: "referenceLine",
      selectable: false,
      lockMovementX: true,
      lineType: type,
      scaleX: 1 / scale,
      scaleY: 1 / scale,
    });
    // 将分组添加到画布
    canvas.add(group);

    group.on("click", (e) => { });
    let groupRect = group.item(1);
    // 给分组添加拖动事件
    group.on("mousedown", function (e) {
      if (e.pointer.x < 20) {
        canvas.remove(group);
        canvas.discardActiveObject();
        canvas.renderAll();
        return;
      }
      canvas.selection = false;
      var offset = {
        x: e.target.left,
        y: e.target.top,
        offsetX: e.e.offsetX,
        offsetY: e.e.offsetY,
        scaleX: e.target.scaleX,
        scaleY: e.target.scaleY,
      };
      fabric.util.addListener(document, "mousemove", moveHandler);
      fabric.util.addListener(document, "mouseup", upHandler);

      function moveHandler(e) {
        if (props.canvasInfo.moveing) return;

        let val = (e.offsetY - offset.offsetY) * offset.scaleY + offset.y;
        group.set({
          top: val,
        });
        groupRect.set({
          text: parseInt(val) + "px",
        });
        canvas.requestRenderAll();
      }

      function upHandler() {
        canvas.setZoom(canvas.getZoom());
        canvas.selection = true;
        fabric.util.removeListener(document, "mousemove", moveHandler);
        fabric.util.removeListener(document, "mouseup", upHandler);
      }
    });
  } else {
    // lineArr = [val.value, -(referInfo.top / referInfo.height), val.value, canvas.height]
    // move.lockMovementY = true
    let h = parseFloat(canvas.height);
    let v = parseFloat(val.value);
    let scale = canvas.getZoom();
    let line = new fabric.Line([0, 0, 0, h], {
      stroke: "red",
      strokeWidth: 1,
      selectable: false,
      strokeDashArray: [3, 3],
    });
    // 创建文本
    let text = new fabric.Text(v + " px", {
      left: 25,
      top: 5,
      fontSize: 12,
      fill: "#fff",
    });
    // 创建关闭按钮
    // 定义叉号的路径数据
    let crossPath = "M10 0 L0 10 M0 0 L10 10";
    let closeButton = new fabric.Path(crossPath, {
      stroke: "red",
      strokeWidth: 1,
      selectable: false,
      left: 10,
      top: 5,
    });
    // 创建分组
    let group = new fabric.Group([line, text, closeButton], {
      left: v,
      top: -(referInfo.top / referInfo.height),
      height: canvas.height,
      name: "referenceLine",
      selectable: false,
      lockMovementY: true,
      lineType: type,
      scaleX: 1 / scale,
      scaleY: 1 / scale,
    });
    group.hoverCursor = "col-resize";
    // 将分组添加到画布
    canvas.add(group);
    // 给分组添加拖动事件
    group.on("mousedown", function (e) {
      if (e.pointer.y < 20) {
        canvas.remove(group);
        canvas.discardActiveObject();
        canvas.renderAll();
        return;
      }
      canvas.selection = false;
      var offset = {
        x: e.target.left,
        y: e.target.top,
        offsetX: e.e.offsetX,
        offsetY: e.e.offsetY,
        scaleX: e.target.scaleX,
        scaleY: e.target.scaleY,
      };
      fabric.util.addListener(document, "mousemove", moveHandler);
      fabric.util.addListener(document, "mouseup", upHandler);

      function moveHandler(e) {
        if (props.canvasInfo.moveing) return;
        var groupRect = group.item(1);
        let val = (e.offsetX - offset.offsetX) * offset.scaleX + offset.x;
        group.set({
          left: val,
        });
        groupRect.set({
          text: parseInt(val) + "px",
        });
        canvas.requestRenderAll();
      }

      function upHandler() {
        canvas.setZoom(canvas.getZoom());
        canvas.selection = true;
        fabric.util.removeListener(document, "mousemove", moveHandler);
        fabric.util.removeListener(document, "mouseup", upHandler);
      }
    });
  }
};

// 重绘参考线
const updataLine = () => {
  // 获取画布内的所有元素
  let t = canvas.getObjects();
  // 获取参考线的那个元素
  let referItem = t.filter((item) => item.name == referName)[0];
  // 获取位置信息
  let referInfo = referItem.getBoundingRect();
  let canvasObj = canvas.getObjects();
  let target = canvasObj.filter((item) => NotDom.includes(item.name));
  let scale = canvas.getZoom();
  for (let i = 0; i < target.length; i++) {
    if (target[i].lineType == "lineW") {
      target[i].set({
        scaleX: 1 / scale,
        scaleY: 1 / scale,
        left: -(referInfo.left / referInfo.width),
        width: canvas.width,
      });
    } else {
      target[i].set({
        scaleX: 1 / scale,
        scaleY: 1 / scale,
        top: -(referInfo.top / referInfo.height),
        height: canvas.height,
      });
    }
    canvas.renderAll();
  }
};

// 创建元素
async function createInfoRect(item) {
  let rt = new fabric.Rect({
    ...item,
    fill: "transparent",
  });
  canvas.add(rt);

}

const setCanvas = async (canvasData) => {
  console.log('canvasData~~', canvasData)
  for (let item in canvasData) {
    await createInfoRect(canvasData[item]);
  }
  canvas.renderAll();
  console.log('canvas.getObjects()', canvas.getObjects())
  // 处理按键删除事件
  document.addEventListener("keydown", (e) => {
    console.log('canvas的全部元素', canvas.getObjects())
    if (e.key === "Delete" || e.key === "Backspace") {
      //获取选中元素
      let target = FabricSelect.value;

      console.log("目标元素", target)
      if (target) {
        for (let i = 0; i < target.length; i++) {
          canvas.remove(target[i]);
        }
        canvas.discardActiveObject();
        canvas.renderAll();
        console.log("删除成功！")
      }
    }
  });

};

// 选择元素
const selectCanvas = (itemData) => {
  let canvasObj = canvas.getObjects();
  let target = canvasObj.filter((item) => item.uuid == itemData.uuid);
  if (target.length > 0) {
    canvas.setActiveObject(target[0]);
    canvas.renderAll();
  }
};

defineExpose({
  updataFiles,
  deleteItem,
  undo,
  redo,
  creatLine,
  setCanvas,
  selectCanvas,
});
</script>

<style>
.td-editor-main-box {
  width: 100%;
  height: 100%;
  background: transparent;

}

.elBT {
  position: fixed;
  left: -1000px;
  top: -1000px;
  /* transform: translateY(); */
}
</style>
