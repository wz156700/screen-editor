## 画布平移
```js
	// 获取当前的viewportTransform
		var viewportTransform = canvas.viewportTransform;
		// 设置平移的偏移量
		var dx = 10; // 水平方向的平移量
		var dy = 5; // 垂直方向的平移量
		// 修改viewportTransform的前两个值，实现平移
		viewportTransform[4] += dx;
		viewportTransform[5] += dy;
		// 应用修改后的viewportTransform
		canvas.setViewportTransform(viewportTransform);
```
## 设置款选样式
```js
	canvas.selectionColor = 'rgba(106, 101, 216, 0.3)' // 画布鼠标框选时的背景色
	canvas.selectionBorderColor = "#ffffff" // 画布鼠标框选时的边框颜色
	canvas.selectionLineWidth = 1 // 画布鼠标框选时的边框厚度
	canvas.selectionDashArray = [3, 3] // 画布鼠标框选时边框虚线规则
	canvas.selectionFullyContained = true // 只选择完全包含在拖动选择矩形中的形状
```