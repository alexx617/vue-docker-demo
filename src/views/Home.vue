<template>
	<div class="home">
		<!-- <el-form ref="form" :model="form" label-width="80px">
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
		<div id="mount-point"></div>
		 -->
		<input type="button" value="显示弹窗" @click="showToast">
	</div>
</template>

<script>
import ajax from '../utils/ajax'
import promo from '../utils/promo'
import toast from './toast/toast'
export default {
	name: 'home',
	data() {
		return {
			form: {
				name: 'tim',
				password: 'pass'
			},
			a: '',
			b: ''
		}
	},
	components: {
		toast
	},
	created() {
		// console.log(this.$unicom);
		class Rectangle {
			constructor(opt) {
				this.width = opt.width;
				this.height = opt.height;
			}
			getArea() {
				return this.width * this.height;
			}
			getType(){
				return this.some_type
			}
		}

		class Square extends Rectangle {
			constructor(opt) {
				super(opt);
				this.some_type = 66;
			}
			getSome(){
				// console.log(this.width)
				return this
			}
		}
		let a = new Square({width:12, height:2});
		console.log(a.getType());

	},
	mounted() {
		// let msg = new promo['1'](this.form.name,{
		// 	password:this.form.password
		// });
		// console.log(msg);
	},
	methods: {
		showToast() {
			this.$toast('msg');
		},
		onSubmit() {
			console.log('submit!');
		},
		login() {
			ajax.test_list(this.form)
				.then(rs => { this.$tip(rs) })
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

}
</script>
<style scoped>
</style>
