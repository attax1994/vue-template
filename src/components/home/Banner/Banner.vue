<template>
  <div class="banner">
    <div class="banner-wrapper">
      <slot></slot>
    </div>

    <div class="aside" v-if="realOptions.backgroundImage">
      <div class="mask"></div>
      <img :src="realOptions.backgroundImage | FilePathParser">
    </div>
  </div>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {BannerOptions, BannerOptionsInterface} from "./Banner.entity";

  @Component({
    name: 'Banner',
  })
  export default class Banner extends Vue {
    @Prop({required: true, type: Object, default: {}}) options: BannerOptionsInterface;
    public realOptions: BannerOptionsInterface = {};

    constructor() {
      super();
    }

    data() {
      return {
        realOptions: Object.assign(new BannerOptions(), this.options),
      };
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .banner {
    position: relative;
  }

  .banner-wrapper {
    position: relative;
    z-index: 1;
    height: 300px;
    color: white;
  }

  .aside {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: $darkBg;
    .mask {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #293039;
      opacity: .5;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

</style>