<template>
	<div class="wrapper">
	<swiper :options="swiperOption" v-if="showSwiper">
	    <!-- 轮播图 -->
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<img class="swiper-img" :src="item.imgurl">
	    </swiper-slide>
	    

	    <!-- 滑动小数点 -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	 
	    
	</swiper>
	</div>
</template>

<script>
export default {
	name : 'HomeSwiper',
	props :{
		list:Array
	},
	data (){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				loop:true
			}
			
		}
	},
	computed : {
		showSwiper () {
			return this.list.length
		}
	}

}
</script>


<style lang="stylus" scoped >
.wrapper >>> .swiper-pagination-bullet-active{
		background: #fff !important;
	}
	.wrapper{
		/*height: 31.25vw   部分不兼容 */
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 26.5%;
	}

	.swiper-img{
		width: 100%;
	}
</style>