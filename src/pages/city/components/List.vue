<template>
	<div class="list">
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<ul class="mp-list">
				<li>{{this.$store.state.city}}</li>
			</ul>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<ul class="mp-list">
				<li v-for="item of hot" 
			:key="item.id"
			@click="handleCityClick(item.name)"
			>{{item.name}}</li>
			</ul>
		</div>
		<div class="area">
			<div class="title border-topbottom">字母排序</div>
			<ul class="mp-character-list">
				<li><a href="#domestic-A">A</a></li>
				<li><a href="#domestic-B">B</a></li>
				<li><a href="#domestic-C">C</a></li>
				<li><a href="#domestic-D">D</a></li>
				<li><a href="#domestic-E">E</a></li>
				<li><a href="#domestic-F">F</a></li>
				<li><a href="#domestic-G">G</a></li>
				<li><a href="#domestic-H">H</a></li>
				<li><a href="#domestic-I">I</a></li>
				<li><a href="#domestic-J">J</a></li>
				<li><a href="#domestic-K">K</a></li>
				<li><a href="#domestic-L">L</a></li>
				<li><a href="#domestic-M">M</a></li>
				<li><a href="#domestic-N">N</a></li>
				<li><a href="#domestic-O">O</a></li>
				<li><a href="#domestic-P">P</a></li>
				<li><a href="#domestic-Q">Q</a></li>
				<li><a href="#domestic-R">R</a></li>
				<li><a href="#domestic-S">S</a></li>
				<li><a href="#domestic-T">T</a></li>
				<li><a href="#domestic-U">U</a></li>
				<li><a href="#domestic-V">V</a></li>
				<li><a href="#domestic-W">W</a></li>
				<li><a href="#domestic-X">X</a></li>
				<li><a href="#domestic-Y">Y</a></li>
				<li><a href="#domestic-Z">Z</a></li>
			</ul>
		</div>
		<div class="area">
			<div class="title border-topbottom" id="domestic-A">A</div>
			<ul class="mp-list">
				<li>阿坝藏族羌族自治州</li>
				<li>阿克苏地区</li>
				<li>阿拉尔</li>
				<li>阿拉善盟</li>
				<li>阿勒泰</li>
				<li>阿里</li>
				<li>安康</li>
				<li>安庆</li>
				<li>安顺</li>
				<li>安阳</li>
				<li>鞍山</li>
				<li>澳门</li>
			</ul>
		</div>
		<div class="area">
			<div class="title border-topbottom" id="domestic-B">B</div>
			<ul class="mp-list">
				<li v-for="item of hot" 
			:key="item.id">{{item.name}}</li>
			</ul>
		</div>
		<div class="area">
			<div class="title border-topbottom" id="domestic-C">C</div>
			<ul class="mp-list">
				<li>北京</li>
				<li>上海</li>
				<li>三亚</li>
				<li>香港</li>
				<li>杭州</li>
				<li>广州</li>
				<li>成都</li>
				<li>深圳</li>
				<li>苏州</li>
				<li>桂林</li>
				<li>西安</li>
				<li>厦门</li>
			</ul>
		</div>
	</div>
</template>

<script>
export	default {
	name : 'CityList',
	props :{
		hot:Array
	},
	methods: {
		handleCityClick (city) {
			this.$store.commit('changeCity',city)
			this.$router.push('/')
		}
	}
}

</script>

<style  scoped>
/*@import '~styles/varibles.styl'*/
	.border-topbottom{
		
	}
	a{
		text-decoration: none;
		color:#666;
	} 
	.title{
		line-height: 2rem;
		background: #eee;
		padding-left: .5rem;
		color:#666;
		font-size: 1rem;
	}
	.mp-list{
		overflow: hidden;
	}
	.mp-list li{
		width:33.33%;
		height: 2rem;
		line-height: 2rem;
		color:#666;
		float:left;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		list-style:none;
		text-align:center;
		box-sizing: border-box;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.mp-character-list{
		overflow: hidden;
		padding: 1rem 0;
	}
	.mp-character-list li{
		width:16.66%;
		float:left;
		padding: .5rem 0;
		list-style: none;
		text-align: center;
	}
</style>
