<template>
	<div id="list">
		<template v-if="mold === 'thumbnail'" v-for="(a,index) in item" >
			<router-link :to="{name:'DetailView',params:{id:a.id}}" :key="index">
				<div class="title">
					<img :src="a.image_hlarge" alt="cover">
					<h3>{{a.title}}</h3>
					<p>{{a.content | subStr}}</p>
					<div class="names">
						<span>{{a.category_name}}</span>
						<span class="label" v-if="a.subcategory_name" style="float: right;">
							本活动来自栏目 {{a.subcategory_name}}
						</span>
					</div>
					
				</div>			
			</router-link>			
		</template>
		<template v-if="mold === 'basic'">
		<ul class="basic">
			<li v-for="(b,index) in item" :key="index">
			<a href="#">
				<h3>{{b.title}}</h3>
				<div class="info">{{b.comments}}</div>
			</a>
			</li>
		</ul>
		</template>		
	</div>
</template>


<script>
	export default {
		name:'list',
		props:{
			mold: {
				type: String,
				default: 'basic'
			},
			item:{
			    type: Array,
  				required: true
			},
			num:{
				type:Number,
			}
		},
		data(){
			return {
				
			}
   },
    filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  } 
  }

</script>

<style lang="scss" scoped>
#list{
	width: 100%;
	text-decoration: none;
	overflow-y :auto;
	margin: 10px 0;
	.title{
		padding: 25px 0;
		margin: 0 18px;
		border-bottom: 1px solid #ccc;
		h3{
			font-size: 17px;
			font-weight: 500;
			color: #494949;
			margin-bottom: 6px;
			text-align: justify;
			text-decoration: none;
		}
		p{
			line-height: 15px;
			text-align: justify;
			color: #aaa;
			font-size: 12px;
			overflow: hidden;
			margin: 10px 0;
			text-decoration: none;
		}
		img{
			float: right;
			width: 25.6%;
			margin-left: 25px;
			height:80px;
		}
		h6{
			font-size: 12px;
			color: #ccc;
			text-align: left;
			text-decoration: none;
		}
		.names{
			display: inline-block;
			width: 100%;
			text-align: left;
			padding-right:10px;
			span{
				color: #ccc
			}
		}
	}
}
.router-link-active {
    text-decoration: none;
  }
</style>