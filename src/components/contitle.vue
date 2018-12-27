<template>
	<div class="contitle">
		<ul>
			<li>
				<router-link :to="{name:''}">影院热映</router-link>
			</li>
			<li>
				<router-link :to="{name:''}">欧美新碟榜</router-link>
			</li>
			<li>
				<router-link :to="{name:''}">注册账号</router-link>
			</li>
			<li>
				<router-link :to="{name:''}">登录豆瓣</router-link>
			</li>
		</ul>
	</div>
</template>


<script>
	export default {
		data(){
			return {
				
			}
		},
  }

</script>

<style lang="scss" scoped="">
	.contitle{
	width: 100%;
	ul{
		margin: 0 18px;
		padding-top: 16px;
		li{
			width: 50%;
			float: left;
			padding: 3px;
			    box-sizing: border-box;
			a{
				display: block;
				padding: 12px 0;
				font-size:15px ;
				color: #000000;
				background-color: #f6f6f6;
				border-radius: 2px;
				line-height: 20px;
				text-decoration: none;
			}
		}
	}
}
</style>