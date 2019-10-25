<template>
    <div id="header">
        <div class="page-header lightBlue">
            <div class="title">
                <h1>LOGO</h1>
                <div class="user">
                    <el-popover placement="bottom-end" width="200" trigger="click">
                        <div class="loginContent">
                            <ul>
                                <li>
                                    <div class="username">
                                        个人中心
                                    </div>
                                </li>
                                <li>
                                    <div class="exit" @click="logout">
                                        <span>退出登录</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <el-button slot="reference"><i class="name">张三</i></el-button>
                    </el-popover>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';

export default {
    name: 'bdheader',
    props: {
        username: ''
    },
    data() {
        return {};
    },
    computed: {
        UpperName: function() {
            return this.username.toUpperCase().charAt(0);
        }
    },
    components: {},
    mounted() {},
    methods: {
        deleteCookie() {
            Cookies.remove('TD-Smart-Choice-Token');
        },
        logout() {
            this.deleteCookie();
            this.$router.push({
                name: 'poilogin'
            });
        }
    }
};
</script>
<style>
@import './header.css';
</style>