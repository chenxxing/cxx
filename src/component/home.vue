<template>
		<div>
			<navi></navi>
      <div id="contant">
        <contitle></contitle>
        <div style="clear: both;"></div>
        <list :item="events" :num="num" mold="thumbnail"></list>     
			  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
		      <loading slot="spinner"></loading>
		    </infinite-loading>           
      </div>
<!--			<router-link to="/Edit" style>详情</router-link>-->
		</div>
</template>


<script>
	import { mapState, mapActions } from 'vuex'
	import InfiniteLoading from 'vue-infinite-loading'
	import navi from '../components/nav'
	import contitle from '../components/contitle'
	import list from '../components/list'
	import Loading from '../components/Loading'
  export default {
  	components:{navi,contitle,list,InfiniteLoading,Loading},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    computed:{
	    onInfinite () {
	      setTimeout(() => {
          this.loadMore()
          console.log(this)
	        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
	      }, 1000)
	    },
    	...mapState({
    		events: state => state.home.events,
    		num:state => state.home.num,
    	}),
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      ...mapActions([
      	'loadMore',
      ])
    },
    mounted:function(){ 
		//this.loadMore();
    },
  }
</script>

<style lang="scss" scoped>
  .router-link-active {
    text-decoration: none;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #contant{
    width: 100%;
    height: calc(100% - 59px);
    overflow: auto;
  }
</style>