<template>
  <div class="dash-dialog">
    <div class="ellipsis dashboard">
      <a class="white-link dash-title" @click.prevent.stop="dialogVisible = true">{{realOptions.abstract}}</a>
    </div>
    <el-dialog class="container-sm" :title="realOptions.title" width="100%" :visible.sync="dialogVisible"
               :before-close="handleDialogClose">
      <p v-for="item in realOptions.content">{{item}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">{{realOptions.closeText}}</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {DashDialogOptionsEntity, DashDialogOptionsInterface} from "./DashDialog.entity";

  @Component({
    name: 'DashDialog',
  })
  export default class DashDialog extends Vue {
    @Prop({required: true, type: Object}) options: DashDialogOptionsInterface;
    public realOptions: DashDialogOptionsInterface;
    public dialogVisible: boolean = false;

    constructor() {
      super();
    }

    data() {
      return {
        realOptions: Object.assign(new DashDialogOptionsEntity(), this.options),
      };
    }

    public handleDialogClose(done: Function) {
      done();
    }

  }


</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .dashboard {
    height: $navDashboardHeight;
    background: $secondary;
    text-align: center;
    color: white;
    .dash-title {
      height: 100%;
      line-height: $navDashboardHeight;
      font-size: $font-size-xl;
      cursor: pointer;
    }
  }
</style>