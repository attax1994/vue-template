<template>
  <div class="course-category-children">
    <div class="label">
      <b>课程类型：</b>
    </div>
    <div class="items">
      <span class="no-underline" :class="{'link-active': category === (currentCategory.id || '')}"
            @click="$emit('change', currentCategory.id)">
        全部
      </span>
      <template v-for="child in currentCategory.children">
        <span class="no-underline" :class="{'link-active': category === child.id}" @click="$emit('change', child.id)">
          {{child.title}}
        </span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {mapState} from "vuex";
  import {CourseCategoryInterface} from "../Course.entity";

  @Component({
    name: "CategoryChildren",
    computed: {
      ...mapState({
        '_courseCategoryItems': (state: any): any => state.course.categoryItems,
      }),
      currentCategory() {
        return this._findCategory(this.category, this._courseCategoryItems);
      }
    }
  })
  export default class CourseCategoryChildren extends Vue {
    @Prop({required: false, type: String, default: ''}) category: string;

    public currentCategory: Array<CourseCategoryInterface>;
    private _courseCategoryItems: Array<CourseCategoryInterface>;

    private _findCategory(category: string = '', categoryItems: Array<CourseCategoryInterface> = []) {
      const levels = category.split('-').filter((value) => value);
      let parent: any = {children: categoryItems},
        previous: any;

      for (let i = 0; i < levels.length; i++) {
        if (parent && parent.children) {
          previous = parent;
          parent = parent.children.find((value: CourseCategoryInterface) => {
            return category.startsWith(value.id);
          });
        }
      }

      if (parent && parent.children) {
        return parent;
      } else {
        return previous;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .course-category-children {
    line-height: 2;
    font-size: $font-size-md;
    .label {
      display: inline-block;
      vertical-align: top;
      width: 7rem;
      padding-right: 1rem;
    }
    .items {
      display: inline-block;
      vertical-align: top;
      width: calc(100% - 7rem);
      span {
        display: inline-block;
        margin-right: 1rem;
        color: $darkBg;
        cursor: pointer;
        &:hover {
          color: $primary;
        }
      }
    }
  }

  .link-active {
    color: $primary !important;
  }
</style>