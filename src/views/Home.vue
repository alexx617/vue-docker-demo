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
				<el-button type="primary" @click="login">立即创建</el-button>
				<el-button>登陆</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import ajax from '../utils/ajax'
export default {
	name: 'home',
	data() {
		return {
			form: {
				name: '',
				password: ''
			},
			a: '',
			b: ''
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		login() {
			ajax.test_list(this.form)
				.then(rs => { this.$tip(log(rs)) })
				.catch(err => this.$err(err.msg));




			// let promise1 = ajax.test_list(this.form).catch(err => this.$err(err.msg));
			// let promise2 = ajax.test_list2(this.form).catch(err => this.$err(err.msg));
			// Promise.all([promise2, promise1]).then(res => {
			// 	console.log(this);
			// 	// let [a,b] = res);
			// 	// this.a = a;
			// 	// this.b = b;
			// })
		}
	},
	created() {
		// this.init();
	},

}
</script>
