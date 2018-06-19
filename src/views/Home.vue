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
		<p class="title">无意间，我留意到某个情感公众号接受投稿，投稿要求并不高，字数在一千到两千多之间，什么风格都可以写，没有太多条条框框，只是稿费并不高，才几十块，既然刚起步，我不如试试吧。 最重要的是，这家公众号发表的文章，跟我拿手的情感文章比较契合，这样过稿的机会比较大。 打定主意后，我翻出之前在草稿箱里的文章进行润色，改好之后便拿去投稿，过了一周，我得到了回复，主编并没有要采纳我的文章，说是文章主题不够鲜明，事例烂大街，可以作为冲量文。 作者：苏州没有苏 链接：https://www.jianshu.com/p/9e61bc78bbee 來源：简书 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
		<p class="test">无意间，我留意到某个情感公众号接受投稿，投稿要求并不高，字数在一千到两千多之间，什么风格都可以写，没有太多条条框框，只是稿费并不高，才几十块，既然刚起步，我不如试试吧。 最重要的是，这家公众号发表的文章，跟我拿手的情感文章比较契合，这样过稿的机会比较大。 打定主意后，我翻出之前在草稿箱里的文章进行润色，改好之后便拿去投稿，过了一周，我得到了回复，主编并没有要采纳我的文章，说是文章主题不够鲜明，事例烂大街，可以作为冲量文。 作者：苏州没有苏 链接：https://www.jianshu.com/p/9e61bc78bbee 來源：简书 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
		</p>
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
	created() {
		// this.init();
	},

}
</script>
