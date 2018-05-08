<template>
  <div class="course-filter">

    <section class="border-bottom">
      <CategoryLocation :category="courseCategory"></CategoryLocation>
    </section>

    <section class="border-bottom">
      <CategoryChildren :category="courseCategory" @change="handleCategoryChange"></CategoryChildren>
    </section>

    <section>
      <el-radio-group v-model="courseType" @change="handleCourseTypeChange">
        <el-radio-button label="">全部</el-radio-button>
        <el-radio-button label="membership">会员课程</el-radio-button>
        <el-radio-button label="free">免费课程</el-radio-button>
        <el-radio-button label="charge">收费课程</el-radio-button>
      </el-radio-group>
    </section>

    <div>
      <CategorySort :orderBy="orderBy" :ascend="orderAscend" @change="handlerSortChange"></CategorySort>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Route} from "vue-router";
  import UtilService from "@/persistence/service/Util.Service";
  import {FilterParams} from "./CourseFilter.entity";

  @Component({
    name: 'CourseFilter',
    components: {
      CategoryLocation: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CategoryLocation/CategoryLocation.vue'),
      CategoryChildren: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CategoryChildren/CategoryChildren.vue'),
      CategorySort: () => import(/* webpackChunkName: "group-course" */ '@/components/course/CategorySort/CategorySort.vue'),
    },
    watch: {
      '$route'(to: Route, from: Route) {
        if (UtilService.hasEmptyProperty(to.query)) {
          this.$router.push({path: '/course', query: UtilService.eraseEmptyProperty(to.query)});
          return;
        }

        this._refreshQueryParams(to.query as FilterParams);
      }
    },
  })
  export default class CourseFilter extends Vue {
    public routeQueryParams: FilterParams;
    public courseCategory: string = '';
    public courseType: string = '';
    public orderBy: string = '';
    public orderAscend: boolean = false;

    mounted() {
      this._refreshQueryParams(this.$route.query as FilterParams);
    }

    public handleCategoryChange(category: string) {
      this.$emit('change', Object.assign({}, this.$route.query, {category}));
    }

    public handleCourseTypeChange(courseType: string) {
      this.$emit('change', Object.assign({}, this.$route.query, {courseType}));
    }

    public handlerSortChange(value: { orderBy: string, ascend: string }) {
      this.$emit('change', Object.assign({}, this.$route.query, value));
    }

    private _refreshQueryParams(params: FilterParams) {
      this.routeQueryParams = params;
      const {category, courseType, orderBy, ascend} = params;
      this.courseCategory = category || '';
      this.courseType = courseType || '';
      this.orderBy = orderBy || '';
      this.orderAscend = ascend === 'true';
    }
  }

</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .course-filter {
    section {
      padding: 1rem 0;
      &:first-child {
        padding-top: 0;
      }
    }
  }

  .border-bottom {
    border-bottom: 1px solid $secondary;
  }
</style>