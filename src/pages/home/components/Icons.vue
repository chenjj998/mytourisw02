<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon"
				v-for="item of page" 
				:key="item.id"
				>
					<div class="icon-img">
					<img class="icon-img-content" :src='item.imgurl'>
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>

			<div class="swiper-pagination" slot="pagination"></div>	
		</swiper>
	</div>
</template>

<script>
export default {
	name:'HomeIcons',
	props :  {
		list:Array
	},
	data () {
		return {
			swiperOption:{
				pagination:'.swiper-pagination',
			}
			
		}
	},
	computed:{
		pages () {
			const pages = []
			this.list.forEach((item,index) => {
				const page = Math.floor(index / 8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>


<style  lang='stylus' scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
.icons >>> .swiper-container{
  	height:0;
  	padding-bottom:50%;
}
	.icons{
		margin-top:.4rem;
		height: 0;
		padding-bottom: 50%;
		overflow: hidden;
		
	}
	.icon{
		position: relative;
		overflow: hidden;
		width: 25%;
		float: left;
		height: 0;
		padding-bottom: 21%;
		
	}
	.icon-img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1rem;
		box-sizing: border-box;
		padding: .2rem;
		
	}
	.icon-img-content{
		display: block;
		margin: 0 auto;
		
		height: 100%;
	}
	.icon-desc{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		color: $darkTextColor
		ellipsis()
	}
</style>
