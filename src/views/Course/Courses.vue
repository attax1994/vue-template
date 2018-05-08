<template>
  <div class="courses">
    <CarouselBlock :options="CarouselOptions" style="height: 400px;"></CarouselBlock>
    <div class="section-wrapper container">

      <section class="section">
        <CourseFilter @change="handleFilterChange"></CourseFilter>
      </section>

      <button @click.stop="switchCourseListStyle">转换</button>
      <section class="section">
        <transition name="skeleton" mode="out-in">
          <CourseList :collapsed="CourseListCollapsed" :items="CourseListItems" v-if="CourseListReady"></CourseList>
          <CourseListSkeleton :collapsed="CourseListCollapsed" v-else></CourseListSkeleton>
        </transition>
      </section>

      <section class="section">
        <el-pagination
          @current-change="handlePageChange"
          :current-page.sync="currentPage"
          :page-size="12"
          layout="prev, pager, next, jumper"
          :total="120">
        </el-pagination>
      </section>

    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Route} from "vue-router";
  import InteractionService from "@/persistence/service/Interaction.Service";
  import {CarouselOptionsInterface} from "@/components/common/Carousel/Carousel.entity";
  import {CourseListEntityInterface} from "@/components/course/CourseList/CourseList.entity";
  import {FilterParams} from "@/components/course/CourseFilter/CourseFilter.entity";

  @Component({
    components: {
      CarouselBlock: () => import(/* webpackChunkName: "group-carousel" */ '@/components/common/Carousel/CarouselBlock.vue'),
      CourseFilter: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CourseFilter/CourseFilter.vue'),
      CourseList: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CourseList/CourseList.vue'),
      CourseListSkeleton: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CourseList/CourseList.skeleton.vue'),
    },
    beforeRouteUpdate(to: Route, from: Route, next) {
      InteractionService.scroll(0, 496);

      const queryParams = to.query;

      // update list data
      this.CourseListReady = false;
      setTimeout(() => {
        this.CourseListReady = true;
      }, 1000);

      next();
    }
  })
  export default class Courses extends Vue {
    public CarouselOptions: CarouselOptionsInterface = {
      src: [
        'img/carousel/carousel1.jpg',
        'img/carousel/carousel2.jpg',
        'img/carousel/carousel3.jpg',
        'img/carousel/carousel4.jpg',
      ],
      delayMS: 2000,
    };

    public CourseListReady: boolean = false;
    public CourseListCollapsed: boolean = true;
    public CourseListItems: Array<CourseListEntityInterface> = Array(8).fill({
      title: '标题',
      content: '123',
      imageUrl: 'img/index/banner.jpg',
      link: '/course/detail/1',
      starCount: 123,
      purchaseCount: 123,
    });

    public currentPage = 1;

    created() {
      this._initCourseListCollapse();
    }

    mounted() {
      setTimeout(() => {
        this.CourseListReady = true;
      }, 2000);
    }

    public handleFilterChange(value: FilterParams) {
      // restore page when new route comes from filter
      delete value.page;
      this.currentPage = 1;
      this.$router.push({path: '/course', query: value as any});
      return this;
    }

    public handlePageChange(page: number) {
      this.$router.push({path: '/course', query: Object.assign({}, this.$route.query, {page: page.toString()})});
      return this;
    }

    public switchCourseListStyle() {
      this.CourseListCollapsed = !this.CourseListCollapsed;
      return this;
    }

    private _initCourseListCollapse() {
      this.CourseListCollapsed = window.innerWidth > 1000;
      return this;
    }

  }
</script>

<style scoped lang="scss">

  .el-pagination {
    padding: 0;
  }

</style>