<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  /*****************
   *     Theme
   *****************/
  @import "assets/theme/theme";
  @import '~element-ui/lib/theme-chalk/index.css';
  /*****************
   *   Basic
   *****************/
  @import "assets/theme/common";
  @import "assets/theme/section";
  @import "assets/theme/responsive";
  @import "assets/theme/shadow";
  @import "assets/theme/interaction";
  @import "assets/theme/skeleton";
  /*****************
   *   Component
   *****************/
  @import "assets/theme/form";
  @import "assets/theme/table";

</style>
