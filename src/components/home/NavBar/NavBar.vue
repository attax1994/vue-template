<template>
  <div class="nav">
    <transition name="dialog-change">
      <div class="dashboard" v-if="isDashBoardActive" key="dashboard">
        <DashDialog :options="DashDialogOptions"></DashDialog>
      </div>
    </transition>

    <div class="menu">
      <div class="container">
        <div class="left">
          <div class="logo" style="width: 100px;height: 48px; background: lightblue;">Logo</div>

          <div class="category-index-wrapper">
            <CategoryIndex></CategoryIndex>
          </div>


          <div class="top-search">
            <el-input
              size="medium"
              style="margin-top:6px;width: 400px;height: 40px;margin-left:8px;border-radius:40px 0px 0px 40px;"
              placeholder="请输入内容" suffix-icon="el-icon-search">
            </el-input>
          </div>
        </div>

        <div class="right" id="app">

            <div class="before-login" v-if="isNotLogin">

                <el-button class="tag-style" type="text">成为讲师</el-button>
                <el-button class="tag-style" type="text">年费会员</el-button>
                <el-button class="tag-style" type="text" @click="loginDialog = true">微信登录</el-button>

                <el-dialog :visible.sync="loginDialog" width="35%" :before-close="handleClose"
                           style="text-align: left;padding: 0px;">
                    <el-row :gutter="12">
                        <el-col :span="12">
                            <el-card shadow="hover">
                                <img src="../../../assets/img/user/QR_code.png" class="image" style="width: 300px;height: 200px;">
                                扫描微信二维码登录
                            </el-card>
                        </el-col>
                        <el-col :span="12">
                            <el-card shadow="hover">
                                <img src="../../../assets/img/user/QR_code.png" class="image" style="width: 300px;height: 200px;">
                                扫描QQ二维码登录<span @click="loginDialog = false,isNotLogin = false" style="color: #28a745;">(登录成功)</span>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-dialog>
            </div>
            <div class="after-login" v-else="isNotLogin">
                <el-dropdown style="margin-right:20px;">
                  <span class="el-dropdown-link">
                    讲师<i class="el-icon-arrow-down el-icon--rights"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" style="margin-right:10px;">
                    <el-dropdown-item>查看我的授课</el-dropdown-item>
                      <router-link to="/course/create" class="link-tag">
                        <el-dropdown-item>创建一门课程</el-dropdown-item>
                      </router-link>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown style="margin-right:20px;">
                  <span class="el-dropdown-link">
                    我的课程<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" style="margin-right:10px;">
                    <el-dropdown-item>已购课程</el-dropdown-item>
                    <el-dropdown-item>班级课程</el-dropdown-item>
                    <el-dropdown-item>收藏课程</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown style="margin-right:10px;">
                  <el-button type="primary" icon="el-icon-service" circle style="border-radius: 40px;"></el-button>
                  <el-dropdown-menu slot="dropdown">
                    <router-link to="/userInfoCenter/userDetails" class="link-tag">
                      <el-dropdown-item>个人信息</el-dropdown-item>
                    </router-link>
                    <router-link to="/userInfoCenter/userOrders" class="link-tag">
                      <el-dropdown-item>我的订单</el-dropdown-item>
                    </router-link>
                    <router-link to="/userInfoCenter/studyRecord" class="link-tag">
                      <el-dropdown-item>学习记录</el-dropdown-item>
                    </router-link>
                    <router-link to="/userInfoCenter/userCollect" class="link-tag">
                      <el-dropdown-item>我的收藏</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item @click.native="isNotLogin = true">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
          </div>

        </div>

      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {mapGetters} from 'vuex'
  import {OptionPanelInterface, OptionPanelItemInterface} from '@/components/common/OptionPanel/OptionPanel.Entity'
  import {DashDialogOptionsInterface} from '../DashDialog/DashDialog.entity'

  @Component({
    name: 'NavBar',
    data() {
        return {
            isNotLogin:true,
            loginDialog:false
        }
    },
    components: {
      DashDialog: () => import(/* webpackChunkName: "group-navbar" */ '@/components/home/DashDialog/DashDialog.vue'),
      CategoryIndex: () => import(/* webpackChunkName: "group-navbar" */ '@/components/course/CategoryIndex/CategoryIndex.vue'),
    },
    computed: {
      ...mapGetters({
        isDashBoardActive: 'dashboard/isDashBoardActive',
      }),
    },
      methods: {
          handleClose(done) {
              this.$confirm('确认关闭？')
                  .then(_ => {
                      done();
                  })
                  .catch(_ => {});
          }
      }
  })
  export default class NavBar extends Vue {
    public isDashBoardActive: boolean

    public DashDialogOptions: DashDialogOptionsInterface = {
      abstract: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoreLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      content: ['段落1', '段落2'],
    }

    constructor() {
      super()
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .dashboard {
    height: $navDashboardHeight;
    opacity: 1;
    overflow: hidden;
    transition: height .5s, opacity .5s;
    &.dialog-change-enter, &.dialog-change-leave-to {
      height: 0;
      opacity: 0;
    }
  }

  .menu {
    height: $navHeight;
    background: white;
    .container {
      word-spacing: 0;
      height: $navHeight;
      .left {
        display: inline-block;
        width: 66%;
        height: 100%;
        vertical-align: top;
        .logo {
          display: inline-block;
          vertical-align: top;
        }
        .category-index-wrapper {
          display: inline-block;
        }
      }
      .right {
        display: inline-block;
        height: 100%;
        line-height: $navHeight;
        width: 33%;
        text-align: right;
        .tag {
          display: inline-block;
        }

      }
    }
  }

  .top-search {
    display: inline-block;
  }

  .after-login {
    display: inline-block;
  }

  .link-tag {
    text-decoration: none;
    color: black;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-button {
    border-radius: 0;
  }

  .an-select {
    width: 100px;
    height: 450px;
  }
    .tag-style {
        margin-right:10px;
    }
</style>