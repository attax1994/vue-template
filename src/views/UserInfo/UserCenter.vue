<template>
    <div class="userCenter container">
        <div class="left-menu">
            <el-menu :default-openeds="['2']" :default-active="selectMenuIndex" router>
                <el-menu-item index="userDetails">
                    <i class="el-icon-document"></i>
                    <span slot="title" id="userDetailTag">个人信息</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-date"></i>我的课程</template>
                    <el-menu-item index="userOrders">我的订单</el-menu-item>
                    <el-menu-item index="studyRecord">学习记录</el-menu-item>
                    <el-menu-item index="courseManagement">课程管理</el-menu-item>
                </el-submenu>
                <el-menu-item index="userCollect">
                    <i class="el-icon-star-on"></i>
                    <span slot="title" id="userCollectTag">我的收藏</span>
                </el-menu-item>
                <el-menu-item index="userMsg">
                    <i class="el-icon-message"></i>
                    <span slot="title" id="userMsgTag">我的消息</span>
                </el-menu-item>
            </el-menu>
        </div>

        <div class="main-content">
            <router-view class="view"></router-view>
        </div>
    </div>
</template>

<!--<script lang="ts">-->
    <!--import {Component, Vue} from 'vue-property-decorator';-->
    <!--@Component-->
    <!--export default class UserCenter extends Vue {-->
        <!--selectMenuIndex: string = ''-->

        <!--// 生命周期-->
        <!--mounted() {-->
            <!--this.getCurrentRoute()-->
        <!--}-->

        <!--$route() {-->
            <!--var currentRoute = this.$route.path-->
            <!--if(currentRoute==='/userInfoCenter/userDetails') {-->
                <!--this.selectMenuIndex = "userDetails"-->
            <!--} else if (currentRoute==='/userInfoCenter/userOrders') {-->
                <!--this.selectMenuIndex = "userOrders"-->
            <!--} else if (currentRoute==='/userInfoCenter/studyRecord') {-->
                <!--this.selectMenuIndex = "studyRecord"-->
            <!--} else if (currentRoute==='/userInfoCenter/userCollect') {-->
                <!--this.selectMenuIndex = "userCollect"-->
            <!--}-->
        <!--}-->

        <!--// methods-->
        <!--getCurrentRoute() {-->
            <!--var rtVal = this.$route.path;-->
            <!--var start = rtVal.lastIndexOf("/");-->
            <!--this.selectMenuIndex = rtVal.substr(start+1);-->
        <!--}-->
    <!--}-->
<!--</script>-->

<script>
  export default {
    name: "userCenter",
    data() {
        return {
            selectMenuIndex: ''
        }
    },
    mounted() {
        this.getCurrentRoute()
    },
    watch: {
        $route() {
            var currentRoute = this.$route.path
            if(currentRoute==='/userInfoCenter/userDetails') {
                this.selectMenuIndex = "userDetails"
            } else if (currentRoute==='/userInfoCenter/userOrders') {
                this.selectMenuIndex = "userOrders"
            } else if (currentRoute==='/userInfoCenter/studyRecord') {
                this.selectMenuIndex = "studyRecord"
            } else if (currentRoute==='/userInfoCenter/userCollect') {
                this.selectMenuIndex = "userCollect"
            } else if (currentRoute==='/userInfoCenter/courseManagement') {
                this.selectMenuIndex = "courseManagement"
            } else if (currentRoute==='/userInfoCenter/userMsg') {
                this.selectMenuIndex = "userMsg"
            }
        } 
    },
    methods: {
        getCurrentRoute() {
            var rtVal = this.$route.path
            var start = rtVal.lastIndexOf("/")
            this.selectMenuIndex = rtVal.substr(start+1)
        }
    }
  }
</script>

<style scoped lang="scss">
@import url("http://unpkg.com/element-ui@2.3.7/lib/theme-chalk/index.css");

.userCenter {
    .left-menu {
        vertical-align: top;
        display: inline-block;
        width:20%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .main-content {
        vertical-align: top;
        display: inline-block;
        width:78%;
        margin:10px 0 10px 10px;
        vertical-align: center;
        background-color:white;
        min-height:700px;
    }
}
.link-tag {
    text-decoration: none;
    color:black;
}
</style>