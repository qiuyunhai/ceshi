<template>
	<div style="width: 100%;">
		<el-header style="text-align: right; font-size: 12px;margin-bottom: 15px;">
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>查看</el-dropdown-item>
					<el-dropdown-item>新增</el-dropdown-item>
					<el-dropdown-item>删除</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span>王小虎</span>
		</el-header>
		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>