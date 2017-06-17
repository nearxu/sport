<template>
  <div class="active">
   <h1>hello active</h1>
  </div>
</template>

<script>
export default {
  name: 'active',
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
	.active{
		margin-top:px2rem(80);
	}
</style>
