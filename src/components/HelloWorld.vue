
<template>
			<div style="width: 100%;height: 100%;overflow: hidden;">
				<transition>
					<router-view class="contant"></router-view>
				</transition>
				<Footer></Footer>
			</div>
</template>

<script>
	import Header from "@/component/header";
	import Footer from "@/component/footer";
  export default {
		components: {Header,Footer},
    data () {
      return {
        radio: '1',
				        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: ''
      };
    }
  }
</script>

<style>
	.contant{
		width: 100%;
		height: calc(100% - 45px);
	}
	.contant {
		transition: all .1s ease;
	}
</style>