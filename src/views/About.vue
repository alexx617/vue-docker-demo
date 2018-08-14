<template>

	<div>
		<section>

			<header>
				<b>丹歌惊鸿(王也)</b>
			</header>
			<main>
				<article class="left">左侧 <br>丹歌起势 同风而起 <br> 卧龙低伏 入我阵来 <br> 我即方位 我即吉凶 <br> 四方万物 皆我主宰</article>
				<article class="center">
					山里偷得的半日的闲
					<br>搁这儿遛弯儿的人别扰着 您都请便
					<br>半不邋遢 小道名也
					<br>胸无大志 爱咧咧
					<br>少来打听那有的没的
					<br>翻你个底儿掉掀朝天
					<br>顺天下势 理天下事
					<br>云山雾绕 方为术士
					<br>人间不如意 随了谁的性
				</article>
				<article class="right">右侧 <br>但求无愧 自在随心
					<br>常应常静 常静清灵
					<br>凡人本就 六欲七情
					<br>祖师在上 弟子凡心
					<br>不入龙虎局 不得常清静</article>
			</main>
			<footer>
				风后奇门&nbsp;&nbsp;&nbsp;&nbsp;[一人之下]
			</footer>

		</section>
	</div>

</template>

<script>
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
		class Animal {

			constructor(name) {
				this.speed = 0;
				this.name = name;
			}

			run(speed) {
				this.speed += speed;
				console.log(`${this.name} runs with speed ${this.speed}.`);
			}

			stop() {
				this.speed = 0;
				console.log(`${this.name} stopped.`);
			}

		}

		class Rabbit extends Animal {

			constructor(name) {
				super(name)
			}

			hide() {
				console.log(`${this.name} hides!`);
			}


			stop() {
				super.stop(); // call parent stop
				this.hide(); // and then hide
			}

		}

		let rabbit = new Rabbit("White Rabbit");

		rabbit.run(5); // White Rabbit runs with speed 5.
		rabbit.stop(); // White Rabbit stopped. White rabbit hides!
	},
	methods: {
	}
}

</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 50px;
}

header,
footer {
  flex: 0 0 50px;
}

main {
  flex: 1 0 auto;
}

header {
  background-color: #fdf6e3;
}

main {
  background-color: #ffffff;
  display: flex;
  /*轴向默认为横, 其实这里可以不写*/
  flex-direction: row;
}

footer {
  background-color: #323232;
  color: #ffffff;
}

.left,
.right {
  flex: 0 0 200px;
}
.left {
  background-color: #509839;
}

.right {
  background-color: #823384;
}

.center {
  flex: 1 0 auto;
}
</style>