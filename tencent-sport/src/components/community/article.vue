<template>
  <div class="article">
   <h1>hello article</h1>
  </div>
</template>

<script>
export default {
  name: 'article',
  props:{

  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/styles/util.scss';
	.article{
		margin-top:px2rem(80);
	}
</style>
