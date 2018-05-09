<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item to="/course">全部课程</el-breadcrumb-item>
    <el-breadcrumb-item v-for="stack in unifiedCategoryStack"
                        :to="'/course?category=' + stack.id">{{stack.title}}
    </el-breadcrumb-item>
    <el-breadcrumb-item v-if="courseTitle">{{courseTitle}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {mapState} from "vuex";
  import {CourseStateInterface} from "@/persistence/store/course";
  import {CourseCategoryInterface} from "../Course.entity";

  @Component({
    name: 'CategoryLocation',
    components: {
      ElBreadcrumb: () => import(/* webpackChunkName: "group-course" */ 'element-ui/lib/breadcrumb.js'),
      ElBreadcrumbItem: () => import(/* webpackChunkName: "group-course" */ 'element-ui/lib/breadcrumb-item.js'),
    },
    computed: {
      ...mapState({
        '_courseCategoryItems': (state: any): any => state.course.categoryItems,
      }),
      unifiedCategoryStack() {
        return this._unifyCategoryStack(this.category, this._courseCategoryItems);
      }
    }
  })
  export default class CategoryLocation extends Vue {
    @Prop({required: true, type: String, default: ''}) category: string;
    @Prop({required: false, type: String, default: ''}) courseTitle: string;

    public unifiedCategoryStack: Array<{ id: string, title: string }>;
    private _courseCategoryItems: Array<CourseCategoryInterface>;

    private _unifyCategoryStack(category: string = '', categoryItems: Array<CourseCategoryInterface> = []) {
      const levels = category.split('-'),
        results = [];
      let parent: any = {children: categoryItems};

      levels.forEach(() => {
        if (parent && parent.children) {
          parent = parent.children.find((value: CourseCategoryInterface) => {
            return category.startsWith(value.id);
          });

          if (parent) {
            results.push({
              id: parent.id,
              title: parent.title
            });
          }
        }
      });
      return results;
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .el-breadcrumb {
    line-height: 18px;
    font-size: $font-size-md;
  }
</style>