<template>
	<div class="home">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="form.password" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			form: {
				name: '',
				password: ''
			}
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		}
	}
}
</script>
