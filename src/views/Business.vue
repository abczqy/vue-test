<template>
    <div>
        {{getData.a}}
        <br>
        {{getData.b}}
        <button @click="change">change</button>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Business',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['getData'])
    },
    methods: {
      ...mapActions(['changeData']),
      change: function () {
        this.changeData({
          name: 'a',
          value: 'test'
        })
      }
    }
  }
</script>

<style scoped lang='less'>

</style>
