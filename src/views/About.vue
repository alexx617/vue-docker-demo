<template>
	<div>

	</div>
</template>

<script>
import _ from 'lodash'
import Event from 'events'
const log = console.log;
export default {
	data() {
		return {

		};
	},
	components: {},
	computed: {

	},
	created() {
		// let event_ = new Event();
		// event_.on('some', (rs) => {
		// 	log(rs)
		// 	log('===')
		// })
		// setTimeout(() => {
		// 	event_.emit('some', () => {
		// 		return '22'
		// 	})
		// }, 2000);
		var collection = [
			{ name: '', size: '' },
		];
		log(_.groupBy(collection, 'size'));
		const arr = [
			{ "py": 'a1',name:'a' },
			{ "py": 'a1',name:'b' },
			{ "py": 'a2',name:'c' },
			{ "py": 'c3',name:'d' },
		]
		log(_.groupBy(arr, 'py'))
		// var collection = ['',''];
		// log(_.uniq(collection));
	},
	methods: {

	},
}

</script>

<style scoped>
</style>