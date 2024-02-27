export const stylePublic = [
	{
		name: '盒子公共样式',
		value: 'A',
		children: [
			{
				name: '组件宽度',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'width',
				default: 0
			},
			{
				name: '组件高度',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'height',
				default: 0
			},
			{
				name: '距离顶部',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'top',
				default: 0
			},
			{
				name: '距离左侧',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'left',
				default: 0
			},
			{
				name: '组件层级',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'zIndex',
				default: 0
			},
			{
				name: '横向对齐方式',
				value: 0,
				type: 'el-select',
				field: 'alignW',
				default: 'flex-start',
				options: [
					{
						label: '左对齐',
						value: 'flex-start'
					},
					{
						label: '居中',
						value: 'center'
					},
					{
						label: '右对齐',
						value: 'flex-end'
					}
				]
			},
			{
				name: '纵向对齐方式',
				value: 0,
				type: 'el-select',
				field: 'alignH',
				default: 'flex-start',
				options: [
					{
						label: '上对齐',
						value: 'flex-start'
					},
					{
						label: '中对齐',
						value: 'center'
					},
					{
						label: '下对齐',
						value: 'flex-end'
					}
				]
			}
		]
	},
	{
		name: '盒子内边距',
		value: 'B',
		children: [
			{
				name: '左上',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'mtl',
				default: 0
			},
			{
				name: '右上',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'mtr',
				default: 0
			},
			{
				name: '右下',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'mbr',
				default: 0
			},
			{
				name: '左下',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'mbr',
				default: 0
			}
		]
	},
	{
		name: '盒子边框角度',
		value: 'C',
		children: [
			{
				name: '左上',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'btl',
				default: 0
			},
			{
				name: '右上',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'btr',
				default: 0
			},
			{
				name: '右下',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'bbr',
				default: 0
			},
			{
				name: '左下',
				value: 0,
				type: 'el-input-number',
				min: 0,
				field: 'bbr',
				default: 0
			}
		]
	}
]
