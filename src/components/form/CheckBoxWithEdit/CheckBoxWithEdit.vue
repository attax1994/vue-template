<template>
  <div class="checkbox-with-edit">
    <div class="checkbox">
      <el-checkbox border
                   :name="name"
                   :checked="isChecked"
                   @change="checkboxChangeHandler">
        <span class="selection-label">{{index | NumberToChar}}.</span>
        <el-input :value="text" placeholder="请输入选项内容" @change="textChangeHandler"></el-input>
      </el-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component({
    name: 'CheckBoxWithEdit',
  })
  export default class CheckBoxWithEdit extends Vue {
    @Prop({required: false, type: String, default: ''}) text: string
    @Prop({required: true, type: Number, default: 0}) index: number
    @Prop({required: false, type: String, default: ''}) name: string
    @Prop({required: false, type: Boolean, default: false}) isChecked: boolean

    public checkboxChangeHandler(status) {
      this.$emit('change', {index: this.index, status, text: this.text})
    }

    public textChangeHandler(text) {
      this.$emit('change', {index: this.index, status: this.isChecked, text: text})
    }
  }
</script>

<style scoped lang="scss">

</style>

<style lang="scss">
  @import "../../../assets/theme/theme";

  .checkbox-with-edit {
    .checkbox {
      .el-checkbox {
        width: 100%;
        height: 50px;
        padding: 0 1rem;
        line-height: 48px;
        .el-checkbox__label {
          width: calc(100% - 14px);
        }
        span {
          vertical-align: middle;
        }
        .selection-label {
          display: inline-block;
          width: 40px;
          text-align: center;
          font-size: $font-size-xl;
          padding-right: 10px;
        }
        .el-input {
          width: calc(100% - 40px);
          .el-input__inner {
            height: 2rem;
          }
        }
      }

    }
  }
</style>