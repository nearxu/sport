<template>
  <div class="header">
   	<router-link v-for="route in routes[pageIndex-1]" :to="route.url">{{route.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'header',
  props:['pageIndex','routes'],
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	 @import '../../assets/styles/util.scss';

	.header{
		width:100%;
		height:px2rem(80);
		line-height:px2rem(80);
		position:fixed;
		z-index:100;
		left:0;
		top:0;
		background:#3466f6;
		a{
			color:#fff;
			padding-left:px2rem(10);
		}
		
	}
</style>
