<template>
  <div class="mycircle">
   <h1>hello mycircle</h1>
  </div>
</template>

<script>
export default {
  name: 'circle',
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
	.mycircle{
		margin-top:px2rem(80);
	}
</style>
