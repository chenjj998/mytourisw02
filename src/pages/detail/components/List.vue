<template>
    <div>
        <div class="item" 
        v-for="(item,index) of list"
        :key="index"
        >
            <div class="item-title border-bottom">
                <span class="iconfont list-icon">&#xe603;</span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name : 'DetailList',
    props : {
        list:Array
    }
 
}
</script>

<style lang="stylus" scoped>
.item-title-icon{
    position relative
    display:inline-block;
    left:.2rem;
    top:.06rem;
    width .36rem
    height .36rem
    background:url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right:.1rem;
    background-size:.4rem 3rem;
}
.item-title{
    line-height:1.5rem;
    font-size:1rem;
    padding:0 .5rem;
}
.list-icon{
    color blue
}
.item-children{
    padding:0 .6rem
}
</style>


