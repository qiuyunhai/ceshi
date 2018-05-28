<template>
	<div id="app">

		<el-container>
			<el-header>header</el-header>
			<el-container>
				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
					<el-menu :default-openeds="urlOpen">
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-menu"></i>组件</template>
							<el-menu-item-group>
								<el-menu-item index="1-1" @click="HelloWorld('/?url=1')">布局</el-menu-item>
								<el-menu-item index="1-2" @click="HelloWorld('/Container?url=1')">布局容器</el-menu-item>
								<el-menu-item index="1-3" @click="HelloWorld('/Color?url=1')">色彩</el-menu-item>
								<el-menu-item index="1-4" @click="HelloWorld('/Typography?url=1')">字体</el-menu-item>
								<el-menu-item index="1-5" @click="HelloWorld('/Icon?url=1')">图标</el-menu-item>
								<el-menu-item index="1-6" @click="HelloWorld('/Button?url=1')">按钮</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title"><i class="el-icon-menu"></i>Form</template>
							<el-menu-item-group>
								<el-menu-item index="2-1" @click="HelloWorld('/Radio?url=2')">单选框</el-menu-item>
								<el-menu-item index="2-2" @click="HelloWorld('/Checkbox?url=2')">多选框</el-menu-item>
								<el-menu-item index="2-3" @click="HelloWorld('/Input?url=2')">输入框</el-menu-item>
								<el-menu-item index="2-4" @click="HelloWorld('/InputNumber?url=2')">计数器</el-menu-item>
								<el-menu-item index="2-5" @click="HelloWorld('/Select?url=2')">选择器</el-menu-item>
								<el-menu-item index="2-6" @click="HelloWorld('/Cascader?url=2')">级联选择器</el-menu-item>
								<el-menu-item index="2-7" @click="HelloWorld('/Switch?url=2')">开关</el-menu-item>
								<el-menu-item index="2-8" @click="HelloWorld('/Slider?url=2')">滑块</el-menu-item>
								<el-menu-item index="2-9" @click="HelloWorld('/TimePicker?url=2')">时间选择器</el-menu-item>
								<el-menu-item index="2-10" @click="HelloWorld('/DatePicker?url=2')">日期算择器</el-menu-item>
								<el-menu-item index="2-11" @click="HelloWorld('/DateTimePicker?url=2')">日期时间选择器</el-menu-item>
								<el-menu-item index="2-12" @click="HelloWorld('/Upload?url=2')">上传</el-menu-item>
								<el-menu-item index="2-13" @click="HelloWorld('/Rate?url=2')">评分</el-menu-item>
								<el-menu-item index="2-14" @click="HelloWorld('/ColorPicker?url=2')">颜色选择器</el-menu-item>
								<el-menu-item index="2-15" @click="HelloWorld('/Transfer?url=2')">穿梭框</el-menu-item>
								<el-menu-item index="2-16" @click="HelloWorld('/Form?url=2')">表单</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-menu"></i>Data</template>
							<el-menu-item-group>
								<el-menu-item index="3-1" @click="HelloWorld('/Table')">表格</el-menu-item>
								<el-menu-item index="3-2" @click="HelloWorld('/Tag')">标签</el-menu-item>
								<el-menu-item index="3-3" @click="HelloWorld('/Progress')">进度条</el-menu-item>
								<el-menu-item index="3-4" @click="HelloWorld('/Tree')">树形控件</el-menu-item>
								<el-menu-item index="3-5" @click="HelloWorld('/Pagination')">分页</el-menu-item>
								<el-menu-item index="3-6" @click="HelloWorld('/Badge')">标记</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="4">
							<template slot="title"><i class="el-icon-menu"></i>Notice</template>
							<el-menu-item-group>
								<el-menu-item index="4-1" @click="HelloWorld('/Alert')">警告</el-menu-item>
								<el-menu-item index="4-2" @click="HelloWorld('/Loading')">加载</el-menu-item>
								<el-menu-item index="4-3" @click="HelloWorld('/Message')">消息提示</el-menu-item>
								<el-menu-item index="4-4" @click="HelloWorld('/MessageBox')">弹框</el-menu-item>
								<el-menu-item index="4-5" @click="HelloWorld('/Notification')">通知</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="5">
							<template slot="title"><i class="el-icon-menu"></i>Navigation</template>
							<el-menu-item-group>
								<el-menu-item index="5-1" @click="HelloWorld('/NavMenu')">导航菜单</el-menu-item>
								<el-menu-item index="5-2" @click="HelloWorld('/Tabs')">标签页</el-menu-item>
								<el-menu-item index="5-3" @click="HelloWorld('/Breadcrumb')">面包屑</el-menu-item>
								<el-menu-item index="5-4" @click="HelloWorld('/Dropdown')">下拉菜单</el-menu-item>
								<el-menu-item index="5-5" @click="HelloWorld('/Steps')">步骤条</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="6">
							<template slot="title"><i class="el-icon-menu"></i>Others</template>
							<el-menu-item-group>
								<el-menu-item index="6-1" @click="HelloWorld('/Dialog')">对话框</el-menu-item>
								<el-menu-item index="6-2" @click="HelloWorld('/Tooltip')">文字提示</el-menu-item>
								<el-menu-item index="6-3" @click="HelloWorld('/Popover')">弹出框</el-menu-item>
								<el-menu-item index="6-4" @click="HelloWorld('/Card')">卡片</el-menu-item>
								<el-menu-item index="6-5" @click="HelloWorld('/Carousel')">走马灯</el-menu-item>
								<el-menu-item index="6-6" @click="HelloWorld('/Collapse')">折叠面板</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<el-container class="el-container">
						<router-view></router-view>
					</el-container>
				</el-main>

			</el-container>
		</el-container>
	</div>
</template>

<script>
	import headerNav from "./components/header-nav"
	import dataList from "./data/dataList"
	console.log(dataList)
	export default {
		name: 'App',
		components: {
			headerNav
		},
		data() {
			return {

			}
		},
		computed: {
			show() {
				return this.$store.state.show
			},
			total() {
				console.log(this)
				return this.$store.getters.total
			},
			urlOpen() {
				var url = window.location.hash;
				url = url.substring(url.indexOf("=") + 1)
				return [url]
			}
		},
		methods: {
			showShow() {
				this.$store.commit({
					type: "show",
					name: "nishi"
				})
			},
			hideShow() {
				this.$store.commit("hideShow")
			},
			HelloWorld(path) {
				this.$router.push({
					path: path
				})
			}
		}
	}
</script>

<style>
	@import url("assets/css/animate.css");
	* {
		margin: 0;
		padding: 0;
	}
	
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>