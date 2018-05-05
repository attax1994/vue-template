<template>
  <div class="course-detail section-wrapper">
    <section class="section">
      <div class="skeleton fade" style="width: 350px; height: 17px;"></div>
    </section>

    <section class="information section">
      <div class="image">
        <div class=" skeleton fade" style="height: 100%;"></div>
      </div>
      <div class="text-wrapper">
        <div class="text">
          <div class="title skeleton fade"></div>
          <div class="content description skeleton fade"></div>
          <div class="content skeleton fade"></div>
          <div class="content skeleton fade"></div>
        </div>

        <div class="teacher">
          <div class="title">
            <div class="avatar skeleton fade"></div>
            <div class="info">
              <div class="title skeleton fade" style="height: 24px; margin-bottom: 5px;"></div>
              <div class="content skeleton fade"></div>
            </div>
          </div>
          <div class="content skeleton fade"></div>
          <div class="content skeleton fade"></div>
        </div>

        <div class="content button-group">
          <span class="button skeleton fade"></span>
          <span class="button skeleton fade"></span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="elevation-2">
        <div class="skeleton fade" style="height: 40px;"></div>
        <div style="padding: 15px;">
          <div class="title skeleton fade" style="width:30%; height: 24px;"></div>
          <div class="content skeleton fade" style="height: 68px;"></div>
          <div class="title skeleton fade" style="width:30%; height: 24px;"></div>
          <div class="content skeleton fade" style="height: 150px;"></div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'CourseDetailSkeleton'
  })
  export default class CourseDetailSkeleton extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "./CourseDetail";

  .image {
    display: inline-block;
    width: $imageWidth;
    height: $informationSectionHeight;
    vertical-align: top;
    padding-right: 1rem;
    margin-bottom: .5rem;
  }

  .content {
    height: 19px;
  }

  .button {
    display: inline-block;
    width: 8rem !important;
    height: 40px !important;
    padding: 0 !important;
    margin-right: 10px;
  }
</style>