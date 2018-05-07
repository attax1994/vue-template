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
          <div class="logo" style="width: 200px;height: 48px; background: lightblue;">Logo</div>
          <div class="category-index-wrapper">
            <CategoryIndex></CategoryIndex>
          </div>

        </div>


        <div class="right">
          <el-button type="success">微信登陆</el-button>
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {mapGetters, mapState} from "vuex";
  import {OptionPanelInterface, OptionPanelItemInterface} from "@/components/common/OptionPanel/OptionPanel.Entity";
  import {DashDialogOptionsInterface} from "../DashDialog/DashDialog.entity";

  @Component({
    name: 'NavBar',
    components: {
      DashDialog: () => import(/* webpackChunkName: "group-navbar" */ '@/components/home/DashDialog/DashDialog.vue'),
      OptionPanel: () => import(/* webpackChunkName: "group-navbar" */ '@/components/common/OptionPanel/OptionPanel.vue'),
      CategoryIndex: () => import(/* webpackChunkName: "group-navbar" */ '@/components/common/CategoryIndex/CategoryIndex.vue'),
    },
    computed: {
      ...mapGetters({
        isDashBoardActive: 'dashboard/isDashBoardActive',
      }),
      ...mapState({
        courseCategoryItems: (state: any): any => state.course.categoryItems,
      })
    }
  })
  export default class NavBar extends Vue {
    public isDashBoardActive: boolean;
    public DashDialogOptions: DashDialogOptionsInterface = {
      abstract: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum LoreLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumm ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      content: ['段落1', '段落2'],
    };

    public courseCategoryItems: Array<OptionPanelItemInterface>;
    public OptionPanelOptions: OptionPanelInterface = {
      height: '48px',
      theme: 'light',
      baseUrl: '/course',
    };

    constructor() {
      super();
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
      }
    }
  }


</style>