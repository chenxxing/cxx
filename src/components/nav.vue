<template>
	<header class="head">
	 <span>豆瓣</span>
	 <ul>
	 	<li>
	 		<router-link :to="{name:''}">
	 			电影
	 		</router-link>
	 	</li>
	 	<li>
	 		<router-link :to="{name:''}">
	 			图书
	 		</router-link>
	 	</li>
	 	<li>
	 		<router-link :to="{name:''}">
	 			广播
	 		</router-link>
	 	</li>
	 	<li>
	 		<router-link :to="{name:''}">
	 			小组
	 		</router-link>
	 	</li>
	 </ul>
	 <i class="el-icon-search"></i>
</header>
</template>


<script>
	export default {
		data(){
			return {
				
		}
   },
  }

</script>


<style lang="scss" scoped>
.head{
	height: 58px;
	width: 100%;
	display: flex;
	border-bottom: 1px solid #f3f3f3;
	span{
		color: #00b600;
		flex: 0.3;
		font-size:28px ;
		line-height: 58px;
		font-weight: 600;
	}
	ul{
		flex: 0.6;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		li a{
			text-decoration: none;
			padding: 0 10px;
			font-size: 16px;
		}
		li:nth-child(1) a{
			color: rgb(35, 132, 232);
		}
		li:nth-child(2) a{
			color: rgb(159, 120, 96);
		}
		li:nth-child(3) a{
			color: rgb(228, 168, 19);
		}
		li:nth-child(4) a{
			color: rgb(42, 184, 204);
		}
		
	}
	i{
		flex: 0.1;
		line-height: 58px;
    font-size: 18px;
	}
}
</style>