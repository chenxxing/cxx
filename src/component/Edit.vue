<template>
	<div style="overflow: auto;">
		详情页
		<button @click=go()>放回</button>
		  <div>
    <group>
      <cell title="title" value="value"></cell>
      <InlineXNumber></InlineXNumber>
    </group>
  </div>
	</div>
	
</template>


<script>
	import { Group, Cell ,InlineXNumber} from 'vux'
	export default {
	components: {
	    Group,
	    Cell,
	    InlineXNumber
	  },
	  data () {
	    return {
	
	    }
	  },
	 methods: {
		go(){
			history.go(-1)
		}
   },
  }

</script>

<style>
	
</style>