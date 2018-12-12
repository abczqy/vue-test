<template>
    <div>
        knowledge
        <div>
            {{ $route.params.name }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Knowledge',
  mounted () {
    this.getName();
  },
  methods: {
    getName: function() {
      console.log(this.$route.params.name);
    }
  }
}
</script>

<style scoped lang='less'>

</style>
