<template>
  <div class="feature-introduction-wrapper">
    <div class="container feature-item-wrapper">
      <div class="feature-item">
        <div class="icon el-icon-circle-check-outline"></div>
        <div class="introduction">
          <div class="introduction-title">优势1</div>
          <div class="introduction-content">描述</div>
        </div>
      </div>

      <div class="feature-item">
        <div class="icon el-icon-star-off"></div>
        <div class="introduction">
          <div class="introduction-title">优势2</div>
          <div class="introduction-content">描述</div>
        </div>
      </div>

      <div class="feature-item">
        <div class="icon el-icon-edit-outline"></div>
        <div class="introduction">
          <div class="introduction-title">优势3</div>
          <div class="introduction-content">描述</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    name: 'FeatureBar',
  })
  export default class FeatureBar extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .feature-introduction-wrapper {
    background-color: $primary;
    background-image: linear-gradient(135deg, $darkBg, $primary);
    .feature-item-wrapper {
      height: 5rem;
      color: white;
      word-spacing: 0;
      .feature-item {
        display: inline-block;
        width: 33%;
        height: 100%;
        &:nth-child(2) {
          text-align: center;
        }
        &:last-child {
          text-align: right;
        }
        & > div {
          display: inline-block;
          vertical-align: middle;
          text-align: left;
        }
        .icon {
          height: 5rem;
          line-height: 5rem;
          margin-right: 1rem;
          font-size: 3rem;
        }
        .introduction {
          height: 4rem;
          margin: .5rem 0;
          line-height: 2rem;
          .introduction-title {
            font-size: $font-size-lg;
            font-weight: bold;
          }
          .introduction-content {
            font-size: $font-size-md;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>