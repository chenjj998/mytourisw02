<template>
	<div class="search">
		<!-- <input class="search-input" type="text" placeholder="输入城市名或拼音"> -->
		<ul class="search-chooes">
			<!-- <li v-bind:class="{activ}"></li>
			<li>境外*港澳台</li> -->
			<li v-for="item in fron" 
			:key="item.id"
			>{{item.name}}</li>
			<!-- <router-link>
				<li to="/City/List">境内</li>
				<li to="/City/domestic">境外*港澳台</li>
			</router-link> -->
		</ul>
	</div>
</template>

<script>
export	default {
	name : 'CitySearch',
	props :{
		fron:Array
	}
}

</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
	.search{
		padding:0 2.5rem;
		height: 2rem;
		text-align: center;
		background: $bgColor
	}
	.showL{
		display:none;
	}
	.search-chooes{
		
	}
	.search-chooes li{
		float:left;
		list-style:none;
		width:50%;
		color:#FFF;
		box-sizing: border-box;
    	border: 1px solid #fff;
	}
	.search-chooes li:first-child{
		background:#FFF;
		color:#00bcd4;
		
	}

</style>
