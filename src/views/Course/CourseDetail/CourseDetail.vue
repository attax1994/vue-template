<template>
  <div class="container">
    <transition name="skeleton" mode="out-in">
      <div class="course-detail section-wrapper" v-if="isDetailReady" key="course-detail">
        <section class="section">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/course">全部课程</el-breadcrumb-item>
            <el-breadcrumb-item v-for="stack in courseCategoryStack"
                                :to="'/course?category=' + stack.id">{{stack.title}}
            </el-breadcrumb-item>
            <el-breadcrumb-item>当前标题</el-breadcrumb-item>
          </el-breadcrumb>
        </section>

        <section class="information section">
          <img src="@/assets/img/index/banner.jpg">
          <div class="text-wrapper">
            <div class="text">
              <div class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
              <div class="content description">简介：标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
              <div class="content">课程状态：未发布</div>
              <div class="content">价格：0</div>
            </div>

            <div class="teacher">
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
        </section>

        <section class="section">
          <el-tabs type="border-card" class="elevation-2">
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
              <CourseIndex></CourseIndex>
            </el-tab-pane>
            <el-tab-pane label="课程须知">123</el-tab-pane>
          </el-tabs>
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
    },
  })
  export default class CourseDetail extends Vue {
    public isDetailReady: boolean = false;
    public isFavorite: boolean = false;

    public courseCategoryStack: Array<any> = [];
    private _courseCategory: string;
    private _courseCategoryItems: Array<any>;
    private _courseCategoryItems$: Subscription;

    mounted() {
      setTimeout(() => {
        this.isDetailReady = true;
      }, 2000);

      this._courseCategory = '1-1-2';

      this._initBreadCrumbItems();
    }

    beforeDestroy() {
      this._courseCategoryItems$.unsubscribe();
    }

    private _initBreadCrumbItems() {
      this._courseCategoryItems = this.$store.state.course.categoryItems;
      this._unifyCategoryStack();

      this._courseCategoryItems$ = (this.$store.state.course as CourseStateInterface).$categoryItems
        .subscribe((data: Array<any>) => {
          this._courseCategoryItems = data;
          this._unifyCategoryStack();
        });
      return this;
    }

    private _unifyCategoryStack() {
      const levels = this._courseCategory.split('-'),
        results = [];
      let parent = this._courseCategoryItems.find((value: any) => {
        return this._courseCategory.startsWith(value.id);
      });

      levels.forEach(() => {
        if (parent) {
          parent = parent.children.find((value: any) => {
            return this._courseCategory.startsWith(value.id);
          });

          results.push({
            id: parent.id,
            title: parent.title
          });
        }
      });
      this.courseCategoryStack = results;
      return this;
    }
  }
</script>

<style scoped lang="scss">
  @import "./CourseDetail";

  .el-breadcrumb {
    font-size: $font-size-md;
  }

</style>