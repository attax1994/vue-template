<template>
  <div class="list-wrapper">
    <div class="col-6 col-md-3 col-lg-2 card-wrapper" v-for="item in itemCount">
      <div class="card">
        <div class="image skeleton fade"></div>
        <div class="text">
          <div class="title skeleton fade"></div>
          <div class="content skeleton fade"></div>
          <div class="button-group">
            <div class="button skeleton fade"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    name: 'HorizontalScrollSkeleton',
  })
  export default class HorizontalScrollSkeleton extends Vue {
    public itemCount = 6;
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";
  @import "./HoriziontalScroll";

  .card-wrapper {
    .card {
      .image {
        height: $imageHeight;
      }
      .text {
        .title {
          height: 1rem;
        }
        .content {
          height: 1rem;
        }
        .button-group {
          .button {
            display: inline-block;
            width: 80px;
            height: 32px;
            border-radius: 3px;
          }
        }
      }
    }
  }

</style>