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
		<div>
			<el-radio-group v-model="radio3">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<div style="margin-top: 20px">
			<el-radio-group v-model="radio4" size="medium">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<div style="margin-top: 20px">
			<el-radio-group v-model="radio5" size="small">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京" disabled></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<div style="margin-top: 20px">
			<el-radio-group v-model="radio6" disabled size="mini">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio3: '上海',
				radio4: '上海',
				radio5: '上海',
				radio6: '上海'
			};
		}
	}
</script>

<style>

</style>