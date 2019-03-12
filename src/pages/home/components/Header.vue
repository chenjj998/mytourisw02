<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
		<span class="iconfont">&#xe632;</span>
		输入城市景点/游玩主题
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{this.$store.state.city}}
			<span class="iconfont arrow-icon">&#xe6aa;</span>
			</div>
		</router-link>		
	</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header{
		display: flex;
		line-height: $headerHeight;
		background: #00bcd4;
		color: #fff;
	}
	.header-left{
		width: 2rem;
		float: left;
	}
	.back-icon{
		text-align: center;
		font-size: 1rem
	}
	.header-input{
		flex: 1;
		line-height: 1.8rem;
		height: 1.8rem;
		background: #fff;
		border-radius: .5rem;
		margin-top: .3rem;
		margin-left: .5rem;
		padding-left: .5rem;
		outline: none;
		color: #ccc;
	}
	.header-right{
		text-align: center;
		width:4rem;
		float: right;
		color:#FFF;
	}
	.arrow-icon{
		font-size: 1rem;
	}
	

</style>