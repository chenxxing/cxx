<template>
	<footer class="footer">
		<div v-for="(ft,index) in footList" :key="index" @click="Sondtitle(ft.txt)" :title="ft.txt"
			
			
		>
			<router-link :to="{name:ft.name}" :class= "footIndex==index?'ft-active':''">
				<i :class="ft.icon"></i>
				<span>{{ft.txt}}</span>
			</router-link>
		</div>
	</footer>
</template>

<script>
	import Bus from "../assets/bus.js"
	export default{
		data(){
			return {
				footList:[
					{icon:"el-icon-tickets",txt:"首页",path:"/component/home",name:"home"},
					{icon:"el-icon-search",txt:"发现",path:"/component/find",name:"find"},
					{icon:"el-icon-menu",txt:"我的",path:"/component/my",name:"my"},
					{icon:"el-icon-setting",txt:"退出",path:"/component/exit",name:"exit"},
				],
				footIndex:0,
				title:"",
			}
		},
		methods:{
			Sondtitle(title){
				Bus.$emit("aaa",title)
			}
		}
	}
</script>

<style scoped lang="stylus">
	.footer{
		height: 45px;
		width: 100%;
	}
	footer{
	position:fixed;
	width:100%;
	height:45px;
	left:0;
	bottom:0;
	background:#fff;
	display:flex;
	z-index:10;
	background: #2C3E50;
	}
	footer div{
		flex:1;
		height:45px;
		}
	footer div a{
		display: block;
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		box-sizing:border-box;
		padding:3px 0;
		text-align:center;
		color:#999;
		}
			
	footer div a i{
		font-size: 21px;
	}
	footer div a span{
		width:100%;
		height:17px;
		line-height:17px;
		font-size:13px;
	}
		
		.router-link-active{
			color:#0dc441;
		    border-color:#0dc441;
			background: #D2E0E6;
			text-decoration: none;
		}
		.ft-active-1{
			color:#0dc441;;
			border-color:#0dc441;
			background: #D2E0E6;
		}
	

	
</style>