<template>
    <div class="scroll-list">
        <ul>
            <li v-for="(item,i) in lotter" :key="i" :ref="item" @click="showref">{{item}}</li>
        </ul>
    </div>
</template>

<script>
const log = console.log;
export default {
    props: ['cities'],
    data() {
        return {
        };
    },
    components: {},
    computed: {
        lotter() {
            let lot = [];
            for (let i in this.cities) {
                lot.push(i)
            }
            return lot;
        }
    },
    created() {
    },
    methods: {
        showref(){
            console.log(this.$refs);
            
        }
    },
}

</script>

<style lang="scss" scoped>
.scroll-list {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 20px;
  top: 0;
  right: 0;
  bottom: 0;
  background: #add8e6;
  li {
    text-align: center;
    line-height: 1.5;
  }
}
</style>