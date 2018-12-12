<template>
    <div>
        test: {{gettersMsg}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Customer',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['gettersMsg'])
  }
}
</script>

<style scoped lang='less'>

</style>
