<template>
  <div class="show-case">
    <h1>收费课程</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
    name: 'RadioBlock',
  })
  export default class RadioBlock extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .show-case {
    text-align: center;
    border: 1px solid $primary;
  }

  .radio-selected {
    .show-case {
      background-color: $secondary;
    }
  }
</style>