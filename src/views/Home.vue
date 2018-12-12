<template>
  <div class="home">
    <div class="nav">
      <router-link tag="div" :to="{path: `/index/${user_id}`}" class="navlink">
        首页
      </router-link>
      <router-link tag="div" :to="{path: `/business/${user_id}`}" class="navlink">
        商机
      </router-link>
      <router-link tag="div" :to="{path: `/number/${user_id}`}" class="navlink">
        看数
      </router-link>
      <router-link tag="div" :to="{path: `/customer/${user_id}`}" class="navlink">
        客户
      </router-link>
      <router-link tag="div" :to="{path: `/knowledge/${user_id}`}" class="navlink">
        知识
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      msg: {
        a: 123,
        b: 234
      },
      user_id: 123
    }
  }
}
</script>

<style lang="less" scoped>
  .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
  &>div {
     flex: 1;
     height: 40px;
     line-height: 40px;
     vertical-align: middle;
   }
  .navlink {
    font-weight: bold;
    color: #2c3e50;
    font-size: 14px;
    &.router-link-exact-active {
       color: #42b983;
     }
    }
  }
</style>
