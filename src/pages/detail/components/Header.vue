<template>
    <div>
       <router-link 
       tag="div" 
       to='/' 
       class="header-abs"
       v-show="showAbs"
       >
           <div class="iconfont header-abs-back">&#xe624;</div>
       </router-link>
       <div 
       class="header-fixed" 
       v-show="!showAbs"
       :style="opacityStyle"
       >
           景点详情
           <router-link to='/'>
			<div class="iconfont header-fixed-back">&#xe624;</div>
		   </router-link>
       </div>
    </div>
</template>
<script>

export default {
    name : 'DetailHeader',
    data () {
        return {
          showAbs:true,
          opacityStyle:{
              opacity:0  //渐变隐藏
          } 
        }
    },
    methods :{
        //判断超出高度显示标题栏
        handleScroll(){
            const top = document.documentElement.scrollTop
            if(top > 60 ){ //取值范围60~140 随意取值
                let opacity = top /140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    mounted () {
        //DOM元素全局污染，
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated (){
        //DOM元素在当前操，清除全局影响
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header-abs{
        position: absolute;
        left: .5rem;
        top: .5rem;
        width: 2rem;
        height: 2rem;
        text-align: center;
        border-radius: 1rem;
        background:rgba(0,0,0,.5);
         
    }
    .header-abs-back{
        color:#fff;
        font-size: 1.2rem;
        margin-top: .3rem;
    }
    .header-fixed{
        z-index:2;
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
		height: $headerHeight;
		line-height: $headerHeight;
		text-align: center;
		color:#fff;
		background: $bgColor;
	}
	.header-fixed-back{
		position:absolute;
		top:0;
		left:0;
		width:1rem;
		text-align:center;
		font-size:1rem;
		color:#FFF;
	}
</style>


