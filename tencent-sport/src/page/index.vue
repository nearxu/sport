<template>
  <div>
    <v-header :routes="routes" :pageIndex="pageIndex"></v-header>
    <router-view></router-view>
    <v-tab v-on:switchNav="switchNav"></v-tab>
  </div>
</template>

<script>
import vHeader from '../components/publice/header'
import vTab from '../components/publice/tab'
export default {
  data () {
    return {
      pageIndex: 1,
      routes: []
    }
  },
  // 路由名用于渲染页面head的nav
  mounted () {
    this.routes = this.$store.getters.getRoutes;
    console.log(this.routes);
    
  },
  methods:{
    switchNav(n){
      this.pageIndex=n;
    }
  },
  components:{
    vHeader,
    vTab
  }
}
</script>

<style lang="scss" >     
</style>
