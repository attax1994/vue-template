<template>
  <h1>WTF?传说中的404被你找到了，
    <router-link to="/">赶紧返回首页</router-link>
  </h1>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    name: 'EmptyRoute'
  })
  export default class EmptyRoute extends Vue {
  }
</script>

<style scoped lang="scss">

</style>