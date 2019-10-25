<template>
    <div class="home">
        <div class="logo"></div>
        <div></div>
        <el-carousel :interval="15000" height="800px" arrow="always">
            <el-carousel-item v-for="item in arrs" :key="item.id">
                <div :class="item.img"></div>
                <h3 :class="item.txt"></h3>
                <div class="link" @click="explore(item.name)">探索</div>
            </el-carousel-item>
        </el-carousel>
        <!-- <Header :username="username" /> -->
        <!-- <div id="outerContainer">
            <div id="sitemapHost" class="leftPanel">
                <ul>
                    <li><router-link to="/index">首页</router-link></li>
                    <li><router-link to="/my">我的项目</router-link></li>
                    <li><router-link to="/center">个人中心</router-link></li>
                </ul>
            </div>
            <div id="clippingBounds" style="height: 270px; left: 220px; width: 1460px; opacity: 1;">
                sdfdsf
            </div>
        </div> -->
    </div>
</template>
<script>
    import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
} from 'vuex'
// @ is an alias to /src
import Header from '@/components/header/Header.vue'

export default {
    name: 'home',
    data() {
        return {
            arrs: [
            {
                img:'map1',
                txt:'text1',
                id:1,
                name:'调味料'
            },
            {
                img:'map2',
                txt:'text2',
                id:2,
                name:'肉制品'
            },
            {
                img:'map3',
                txt:'text3',
                id:3,
                name:'泡椒凤爪'
            }
            ]
        };
    },
    computed: {
        ...mapState(['map']),
        ...mapGetters(['infoModal']),
    },
    components: {
        Header
    },
    methods:{
        explore(name){
            console.log(name)
            this.$router.push('/explore?type='+encodeURIComponent(name));
            
        }
    }
}
</script>
<style type="text/css">
.home {
    background: #0a0e2c url('../assets/images/bg.png') center no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .logo {
        background: url('../assets/images/logo.png') no-repeat center;
        background-size: 270px 44px;
        /*no*/
        width: 270px;
        /*no*/
        height: 44px;
        /*no*/
        margin-left: 42px;
        /*no*/
        margin-top: 10px;
        /*no*/
        overflow: hidden;
    }

    .link {
        font-size: 34px;
        color: #87efff;
        position: absolute;
        right: 50px;
        bottom: 26px;
        text-align: left;
        background: url('../assets/images/arrow.png') 82px center no-repeat;
        background-size: 34px 24px;
        width: 120px;
        ffont-weight: bold;
    }
}

.el-carousel__item .map1 {
    background: url('../assets/images/map1.png') center no-repeat;
    background-size: 1053px 881px;
    width: 1053px;
    height: 881px;
    position: absolute;
    right: 11%;
    top: 0;
}

.el-carousel__item .map2 {
    background: url('../assets/images/map2.png') center no-repeat;
    background-size: 1053px 881px;
    width: 1053px;
    height: 881px;
    position: absolute;
    left: 8%;
    top: 0;
}

.el-carousel__item .map3 {
    background: url('../assets/images/map3.png') center no-repeat;
    background-size: 892px 795px;
    width: 892px;
    height: 795px;
    position: absolute;
    right: 10%;
    top: 9%;
}

.el-carousel__item .text1 {
    background: url('../assets/images/text1.png') center no-repeat;
    background-size: 398px 118px;
    width: 398px;
    height: 118px;
    position: absolute;
    left: 170px;
    top: 120px;
}

.el-carousel__item .text2 {
    background: url('../assets/images/text2.png') center no-repeat;
    background-size: 447px 118px;
    width: 447px;
    height: 118px;
    position: absolute;
    right: 14%;
    top: 388px;
}

.el-carousel__item .text3 {
    background: url('../assets/images/text3.png') center no-repeat;
    background-size: 643px 118px;
    width: 643px;
    height: 118px;
    position: absolute;
    left: 11%;
    top: 380px;
}

.el-carousel__indicator--horizontal {
    padding: 10px 8px;
}

.el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.is-active {
    .el-carousel__button {
        width: 20px;
        border-radius: 5px;
    }
}


.el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
}

.el-carousel__item:nth-child(2n+1) {
    /*background-color: #d3dce6;*/
}
</style>