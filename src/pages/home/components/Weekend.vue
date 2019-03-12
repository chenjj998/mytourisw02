<template>
	<div>
		<div class="recommend-title">周末去哪玩</div>
		<ul>
			<li class="item border-bottom" 
			v-for="item of list"
			:key="item.id"
			>
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgurl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:'HomeWeekend',
	props : {
		list:Array
	}
		
}

</script>

<style  lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title{
		line-height: 2rem;
		background: #ccc;
		text-indent: 1rem;
	}
	.item-img-wrapper{
		height:0;
		overflow:hidden;
		padding-bottom:37.9%;
	}
	.item-img{
		width:100%;
			}
	.item-info{
		padding: .5rem;
	}
	.item-title{
		line-height: 1.2rem;
		font-size: 1.1rem;
		ellipsis();
	}
	.item-desc{
		line-height: 2.5rem;
		font-size:1rem;
		color: #ccc;
		ellipsis();
	}

</style>