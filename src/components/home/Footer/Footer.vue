<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="footer-section link-list">
        <router-link class="white-link link" to="/">首页</router-link>
        <router-link class="white-link link" to="/">首页</router-link>
        <router-link class="white-link link" to="/">首页</router-link>
        <router-link class="white-link link" to="/">首页</router-link>
      </div>
      <div class="footer-section">
        <a class="white-link" href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备18000005号-2</a>
         | Copyright © 2017-2018,
        <a class="white-link" href="http://www.screentiger.cn" target="_blank">SCREENTIGER.CN</a>
        , All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'Footer'
  })
  export default class Footer extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .footer-wrapper {
    height: $footerHeight;
    padding: 1rem;
    color: $light;
    background-color: $darkBg;
    overflow: hidden;
    .footer-section {
      padding-bottom: 1rem;
    }
    .link-list {
      .link {
        padding: 0 1rem;
        border-right: 1px solid $light;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: none;
        }
      }
    }
  }

</style>