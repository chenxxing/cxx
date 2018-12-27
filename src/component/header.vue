<template>
		<div class="header">
			{{title}}
		</div>
</template>

<script>
	import Bus from "../assets/bus.js"
export default {
  data () {
    return {
			title:"首页"
    }
  },
  mounted(){
     var that = this;
		 Bus.$on("aaa",(m)=>{
			 console.log(m)
			 that.title = m
		 })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
	
.header{
	width: 100%;
	height: 45px;
	background: #2C3E50;
	text-align: center;
	line-height: 45px;
	color: #fff;
	font-size: 18px;
}
</style>
