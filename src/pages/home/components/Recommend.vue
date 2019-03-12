<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			
			<router-link tag="li"
		    class="item border-bottom" 
			v-for="item of list"
			:key="item.id"
			:to="'/detail/'+item.id"
			>
					<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
			
		</ul>
	</div>
</template>

<script>
export default {
	name:'HomeRecommend',
	props: {
		list:Array
	},
	data () {
		return {}
	}
	
		
		
}

</script>

<style  lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title{
		margin-top: .4rem;
		line-height: 2rem;
		background: #ccc;
		text-indent: 1rem;
	}
	.item{
		display: flex;
		height: 7rem;
	}
	.item-img{
		width: 5.7rem;
		height: 5.7rem;
		padding: .5rem;
	}
	.item-info{
		flex: 1;
		padding: .5rem;
		min-width:0;
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
	.item-button{
		line-height: 1rem;
		margin-top: .2rem;
		background: #ff9300;
		padding: .2rem;
		border-radius: .3rem;
		color:#fff;
	}
</style>