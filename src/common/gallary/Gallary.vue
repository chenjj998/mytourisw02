<template>
    <div class="container " @click="handleGallaryClick">
        <div class="wrapper">
           <swiper :options="swiperOptions">
                <!-- 轮播图 -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                
	    <!-- 滑动小数点 -->
	        <div class="swiper-pagination"  slot="pagination"></div>
	        </swiper>
        </div>
    </div>
</template>
<script>

export default {
    name : 'CommonGallary',
    props : {
        imgs:{
            type:Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOptions:{
                pagination: '.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer: true
            }
        }
    },
    methods : {
        handleGallaryClick() {
            this.$emit('close')
        }
    }
    
}
</script>

<style  scoped>
.container >>> .swiper-container{
    overflow:inherit;
}
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom:0;
        background-color: #000;
    }
    .wrapper{
        height: 0;
        padding-bottom: 100%;
    }
    .gallary-img{
        width: 100%;
    }
    .swiper-pagination{
        color:#fff;
        bottom:-1.5rem;
    }
</style>


