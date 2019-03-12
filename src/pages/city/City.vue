<template>
	<div>
		<city-header></city-header>
		<city-search :fron="frontier"></city-search>
		<city-list :hot="hotCities"></city-list>
	</div>
</template>


<script>
import axios from 'axios'
import CityHeader from './components/Citychoes'
import CitySearch from './components/Search'
import CityList from './components/List'
export	default {
	name : 'City',
	components:{
		CityHeader,
		CitySearch,
		CityList
	},
	data () {
		return {
			hotCities:[],
			frontier:[]
		}
	},
	methods:{
		getCityInfo(){
			axios.get('/api/city.json')
			.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				this.hotCities = res.data.hotCities
				this.frontier = res.data.frontier
			}
			console.log(res)
		}
	},
	mounted () {
		this.getCityInfo()
	}
}

</script>

<style scoped>
	
</style>
