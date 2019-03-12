<template>
    <div>
        <div class="banner" @click="handeBannerClick">
            <img class="banner-img" :src="bannerImg" >
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xebac;</span>
                    {{this.bannerImgs.lenght}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary 
            :imgs="imgs" 
            v-show="showGallary"
            @close="handleGallaryClose"
            ></common-gallary>
        </fade-animation>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
    name : 'DetailBanner' ,
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    components : {
        CommonGallary,
        FadeAnimation
    },
    data () {
        return{
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1809/6b/6bf6eaefb47cb7c9a3.img.jpg_r_800x800_6c725761.jpg',
                'http://img1.qunarzz.com/sight/p0/1502/84/841dafa5dc3bb3d5.water.jpg_r_800x800_ec3f0870.jpg'
            ]
        }
      
    },
    methods:{
        handeBannerClick() {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
      
}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1053969 */
  src: url('//at.alicdn.com/t/font_1053969_1vkm8i6jbj8.eot');
  src: url('//at.alicdn.com/t/font_1053969_1vkm8i6jbj8.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1053969_1vkm8i6jbj8.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1053969_1vkm8i6jbj8.woff') format('woff'),
  url('//at.alicdn.com/t/font_1053969_1vkm8i6jbj8.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1053969_1vkm8i6jbj8.svg#iconfont') format('svg');
}
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img{
        width: 100%;
    }
    .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        color:#fff;
        line-height: 1rem;
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
    }
    .banner-title{
        font-size: 1.2rem;
        padding: .5rem;
        flex: 1;
    }
    .banner-number{
        line-height: 1rem;
        padding: 0 1rem;
        height: 1rem;
        border-radius: .8rem;
        background:rgb(0,0,0,.6);
        margin-top: .5rem;
        font-size: .8rem;
    }
    .banner-icon{
        font-size: .5rem;
       
    }
    
</style>


