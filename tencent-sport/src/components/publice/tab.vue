<template>
  <div class="bottom">
   	<router-link to="/competition/recommend" @click.native="setIndex('1')">赛事</router-link>
   	<router-link to="/community/hotpost" @click.native="setIndex('2')">社区</router-link>
   	<router-link to="/agenda/focus" @click.native="setIndex('3')">赛程</router-link>
   	<router-link to="/mine" @click.native="setIndex('5')">我的</router-link>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props:{

  },
  data () {
    return {
     	selected:1
    }
  },
  methods:{
  	setIndex(n){
  		this.selected=n;
  	}
  },
  watch:{
  	selected:function(value){
  		this.$emit('switchNav',value);
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	 @import '../../assets/styles/util.scss';

	.bottom{
		width:100%;
		height:px2rem(80);
		line-height:px2rem(80);
		position:fixed;
		z-index:100;
		left:0;
		bottom:0;
		background:#3466f6;
		display:flex;
		display:-webkit-flex;
		a{
			flex:1;
			text-align:center;
			color:#fff;
			padding-left:px2rem(10);
		}
		
	}
</style>
