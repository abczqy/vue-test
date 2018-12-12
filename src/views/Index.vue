<template>
    <div>
        <input v-model="msg" type="text" placeholder="修改msg">
        <br>
        <radio v-model="check"></radio>
        <button @click="change">确认</button>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Index',
  data() {
    return {
      msg: this.gettersMsg
    }
  },
  methods: {
    ...mapActions(['changeMsg']),
    change: function() {
      this.changeMsg(this.msg)
    },
    show: function(e){
      console.log(e.target.value);
      console.log(this.msg)
    }
  },
  computed: {
    ...mapGetters(['gettersMsg'])
  },
  mounted() {
    this.msg = this.gettersMsg
  }
}
</script>

<style scoped lang='less'>

</style>
