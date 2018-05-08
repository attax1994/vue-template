<template>
  <el-radio-group :class="{ascend}">
    <el-radio-button label="sales" :class="{'is-active': orderBy === 'sales'}">
      <span class="inner" @click="handleValueChoose('sales')">销量 <i class="el-icon-caret-bottom"></i></span>
    </el-radio-button>
    <el-radio-button label="price" :class="{'is-active': orderBy === 'price'}">
      <span class="inner" @click="handleValueChoose('price')">价格 <i class="el-icon-caret-bottom"></i></span>
    </el-radio-button>
  </el-radio-group>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    name: "CategorySort",
  })
  export default class CategorySort extends Vue {
    @Prop({required: false, type: String, default: ''}) orderBy: string;
    @Prop({required: false, type: Boolean, default: false}) ascend: boolean;

    public handleValueChoose(orderBy: string) {
      if (orderBy === this.orderBy) {
        this.$emit('change', {orderBy, ascend: (!this.ascend).toString()});
      } else {
        switch (orderBy) {
          case('price'):
            this.$emit('change', {orderBy, ascend: 'true'});
            break;
          default:
            this.$emit('change', {orderBy, ascend: 'false'});
            break;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .inner {
    margin: -12px -20px;
    padding: 12px 20px;
    i {
      transform-origin: 50% 50%;
      transition: transform .3s $material-timing-function;
    }
  }

  .is-active {
    .inner {
      background-color: #409EFF;
      color: white;
    }
  }

  .ascend {
    .is-active {
      i {
        transform: rotate(180deg);
      }
    }
  }

</style>