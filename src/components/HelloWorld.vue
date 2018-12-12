<template>
  <div class="hello">
    <h1>{{ msg.a }}</h1>
    <h2>{{ msg.b }}</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{

}
</style>
