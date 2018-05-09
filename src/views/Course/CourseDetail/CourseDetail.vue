<template>
  <div>
    <transition name="skeleton" mode="out-in">
      <div class="course-detail" v-if="isDetailReady" key="course-detail">
        <section class="section-wrapper" style="background: white">
          <div class="section container">
            <CourseLocation :category="'1-1-2'" courseTitle="当前"></CourseLocation>
          </div>

          <div class="information section container">
            <img src="@/assets/img/index/banner.jpg">
            <div class="text-wrapper">
              <div class="text">
                <div class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
                <div class="content description">简介：标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
                <div class="content">课程状态：未发布</div>
                <div class="content">价格：0</div>
              </div>

              <div class="button-group">
                <el-button class="button" type="primary"><i class="el-icon-location-outline"></i> 立即购买</el-button>
                <transition name="fade" mode="out-in">
                  <el-button class="button" type="success" v-if="!isFavorite" key="not-favorite"
                             @click.stop="isFavorite = true">
                    <i class="el-icon-star-off"></i> 加入收藏
                  </el-button>
                  <el-button class="button" type="info" v-else key="favorite"
                             @click.stop="isFavorite = false">
                    <i class="el-icon-star-on"></i> 已收藏
                  </el-button>
                </transition>
              </div>

            </div>
          </div>
        </section>

        <section class="section-wrapper container">
          <el-tabs type="border-card" class="tabs elevation-2">
            <el-tab-pane label="课程信息">
              <div class="title">摘要</div>
              <div class="content">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              </div>
            </el-tab-pane>
            <el-tab-pane label="章节目录">
              <CourseIndex></CourseIndex>
            </el-tab-pane>
          </el-tabs>

          <aside class="teacher elevation-2">
            <div class="title">
              <div class="avatar">
                <img src="@/assets/img/index/banner.jpg">
              </div>
              <div class="info">
                <div class="title">213</div>
                <div class="content">教授/高校</div>
              </div>
            </div>
            <div class="content">单位：xx大学</div>
            <div class="content">研究方向：Java，人工智能</div>
          </aside>
        </section>
      </div>

      <CourseDetailSkeleton key="course-detail-skeleton" v-else></CourseDetailSkeleton>
    </transition>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {CourseStateInterface} from "@/persistence/store/course";
  import {Subscription} from "rxjs/Subscription";

  @Component({
    components: {
      CourseIndex: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CourseIndex/CourseIndex.vue'),
      CourseDetailSkeleton: () => import(/* webpackChunkName: "group-course" */ '@/views/Course/CourseDetail/CourseDetail.skeleton.vue'),
      CourseLocation: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CategoryLocation/CategoryLocation.vue'),
    },
  })
  export default class CourseDetail extends Vue {
    public isDetailReady: boolean = false;
    public isFavorite: boolean = false;

    mounted() {
      setTimeout(() => {
        this.isDetailReady = true;
      }, 2000);
    }

  }
</script>

<style scoped lang="scss">
  @import "CourseDetail";

</style>