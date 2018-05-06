<template>
  <section class="section">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/course">全部课程</el-breadcrumb-item>
      <el-breadcrumb-item v-for="stack in courseCategoryStack"
                          :to="'/course?category=' + stack.id">{{stack.title}}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{courseTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Subscription} from "rxjs/Subscription";
  import {CourseStateInterface} from "../../../persistence/store/course";

  @Component({
    name: 'CourseLocation',
    components: {
      ElBreadcrumb: () => import(/* webpackChunkName: "group-course" */ 'element-ui/lib/breadcrumb.js'),
      ElBreadcrumbItem: () => import(/* webpackChunkName: "group-course" */ 'element-ui/lib/breadcrumb-item.js'),
    },
  })
  export default class CourseLocation extends Vue {
    @Prop({required: true, type: String, default: ''}) category: string;
    @Prop({required: false, type: String, default: '当前课程'}) courseTitle: string;

    public courseCategoryStack: Array<any> = [];
    private _courseCategoryItems: Array<any>;
    private _courseCategoryItems$: Subscription;

    mounted() {
      this._initBreadCrumbItems();
    }

    beforeDestroy() {
      this._courseCategoryItems$.unsubscribe();
    }

    private _initBreadCrumbItems() {
      this._courseCategoryItems = this.$store.state.course.categoryItems;
      this._unifyCategoryStack();

      this._courseCategoryItems$ = (this.$store.state.course as CourseStateInterface).categoryItems$
        .subscribe((data: Array<any>) => {
          this._courseCategoryItems = data;
          this._unifyCategoryStack();
        });
      return this;
    }

    private _unifyCategoryStack() {
      const levels = this.category.split('-'),
        results = [];
      let parent = this._courseCategoryItems.find((value: any) => {
        return this.category.startsWith(value.id);
      });

      levels.forEach(() => {
        if (parent && parent.children) {
          parent = parent.children.find((value: any) => {
            return this.category.startsWith(value.id);
          });

          if (parent) {
            results.push({
              id: parent.id,
              title: parent.title
            });
          }
        }
      });
      this.courseCategoryStack = results;
      return this;
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .el-breadcrumb {
    font-size: $font-size-md;
  }
</style>