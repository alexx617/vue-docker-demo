<template>
	<div>
		<div class="father" ref="wrapperBox">
			<div>
				<div ref="#">
					<div class="title">热门</div>
					<div class="wrapper-box">
						<div class="wrapper" v-for="item in hotCities" :key="item.id">
							<div class="button">{{item.name}}</div>
						</div>
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
			</div>
		</div>
		<!-- 弹出层 -->
		<transition name="fade">
			<div class="toast" v-show="showToast">
				<span class="letter">{{this.letter}}</span>
			</div>
		</transition>
		<scroll-list :cities="cities" v-on:change="changeitem"></scroll-list>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
const log = console.log;
import ajax from '../../utils/ajax'
import cityList from '../../utils/city.json'
import scrollList from './scroll'
export default {
	data() {
		return {
			cities: {},
			hotCities: {},
			letter: '',
			showToast: false
		};
	},
	components: { scrollList },
	computed: {

	},
	watch: {
		letter() {
			if (this.letter) {
				let elment = '';
				if(this.letter!=='#'){
					elment = this.$refs[this.letter][0];
				}else{
					elment = this.$refs[this.letter];
				}
				this.scroll.scrollToElement(elment);
				this.changeToast()
			}
		}
	},
	created() {
		let rs = cityList;
		// ajax.citiesInfo()
		// 	.then(rs => {
		this.cities = rs.data.cities;
		this.hotCities = rs.data.hotCities;
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	})
	},
	mounted() {
		this.scroll = new Bscroll(this.$refs.wrapperBox, {
			click: true
		})
	},
	methods: {
		changeitem(e) {
			this.letter = e;
		},
		changeToast() {
			this.showToast = true
			if (this.timer) {
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				this.showToast = false
			}, 500)
		}
	},
}

</script>

<style lang="scss" scoped>
.father {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  position: sticky;
  top: 0;
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

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  background:rgba(0,0,0,.5);
  border-radius: 50%;
  text-align: center;
  transition: all 0.5s;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-leave,
  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-leave-active {
    opacity: 0;
  }

  .letter {
    line-height: 50px;
    font-size: 16px;
    font-weight: 700;
    color: #eee;
  }
}
</style>