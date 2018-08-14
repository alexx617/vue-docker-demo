<template>
	<div>
		<div class="title">热门</div>
		<div class="wrapper-box">
			<div class="wrapper" v-for="item in hotCities" :key="item.id">
				<div class="button">{{item.name}}</div>
			</div>
		</div>
		<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
			<div class="title">{{key}}</div>
			<div class="wrapper-box">
				<div class="wrapper" v-for="innerItem in item" :key="innerItem.id">
					<div class="button">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
		<scrollList :cities="cities"></scrollList>
	</div>
</template>

<script>
const log = console.log;
import ajax from '../../utils/ajax'
import scrollList from './scroll'
export default {
	data() {
		return {
			cities: {},
			hotCities: {}
		};
	},
	components: {scrollList},
	computed: {
		
	},
	created() {
		ajax.citiesInfo()
			.then(rs => {
				this.cities = rs.data.cities;
				this.hotCities = rs.data.hotCities;
			})
			.catch(err => {
				console.log(err);
			})
	},
	methods: {

	},
}

</script>

<style lang="scss" scoped>
.title {
  background: #eee;
  padding: 10px;
}
.wrapper-box {
  display: flex;
  flex-wrap: wrap;
  .wrapper {
    width: 30%;
    .button {
      padding: 5px 10px;
      border-radius: 1px;
      border: 1px solid #666;
      margin: 10px;
      text-align: center;
    }
  }
}
</style>