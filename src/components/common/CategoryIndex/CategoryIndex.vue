<template>
  <div class="category-index-wrapper shadow-2">
    <div class="category-index-title">
      <router-link class="black-link no-underline" to="/course">
        <i class="el-icon-tickets"></i>课程分类<i class="el-icon-arrow-down"></i>
      </router-link>
    </div>

    <div class="category-index-content">
      <template v-for="topLevel in courseCategoryItems">
        <ul class="category-main-menu elevation-4">
          <li class="category-main-menu-item" v-for="firstLevel in topLevel.children">

            <div class="menu-item-title clear-fix">
              <div class="title-text">
                <router-link class="black-link no-underline" :to="'/course?category=' + firstLevel.id"
                             :target="firstLevel.target">
                  {{firstLevel.title}}
                </router-link>
              </div>
              <div class="title-icon" v-if="firstLevel.children">
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>

            <div class="category-menu-aside elevation-6" v-if="firstLevel.children"
                 :style="{'min-height': `${asideMenuHeight}px`}">
              <ul>
                <li v-for="secondLevel in firstLevel.children">

                  <div class="category-aside-title">
                    <router-link class="black-link no-underline" :to="'/course?category=' + secondLevel.id"
                                 :target="secondLevel.target">
                      <b>{{secondLevel.title}}</b>
                    </router-link>
                  </div>

                  <div class="category-aside-content" v-if="secondLevel.children">
                    <template v-for="thirdLevel in secondLevel.children">
                      <router-link class="black-link no-underline" :to="'/course?category=' + thirdLevel.id"
                                   :target="thirdLevel.target">{{thirdLevel.title}}
                      </router-link>
                    </template>
                  </div>

                </li>
              </ul>
            </div>

          </li>
        </ul>
      </template>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {mapState} from "vuex";

  @Component({
    name: 'CategoryIndex',
    computed: {
      ...mapState({
        courseCategoryItems: (state: any): any => state.course.categoryItems,
      }),
      asideMenuHeight() {
        return this.courseCategoryItems[0].children.length * 49 - 1;
      },
    }
  })
  export default class CategoryIndex extends Vue {
    public courseCategoryItems: Array<CategoryIndexEntity>;
    public asideMenuHeight: number;

  }

  interface CategoryIndexEntity {
    id: string,
    title: string;
    link?: string;
    target?: '_blank' | '_self';
    content?: any;
    children?: Array<CategoryIndexEntity>;
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  $category-main-menu-width: 200px;
  $transition-delay: .3s;

  .category-index-wrapper {
    position: relative;
    z-index: 100;
    padding: 0 1rem;
    height: $navHeight;
    line-height: $navHeight;
    background-color: white;
    .category-index-title {
      .el-icon-arrow-down {
        margin-left: .5rem;
        transform: none;
        transform-origin: 50% 50%;
        transition: transform .3s $material-timing-function;
      }
    }
    .category-index-content {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      opacity: 0;
      visibility: hidden;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 0 1rem;
      }
    }
    &:hover {
      .category-index-title {
        .el-icon-arrow-down {
          transform: rotate(180deg);
        }
      }
      .category-index-content {
        opacity: 1;
        visibility: visible;
        transition: opacity .2s ease $transition-delay;
      }
    }
  }

  .category-main-menu {
    .category-main-menu-item {
      width: $category-main-menu-width;
      border-bottom: 1px solid rgb(229, 229, 229);
      transition: background-color .2s ease-out;
      &:last-child {
        border-bottom: none;
      }
      .menu-item-title {
        .title-text {
          float: left;
          font-size: $font-size-md;
        }
        .title-icon {
          float: right;
          transform-origin: 50% 50%;
          transition: transform .2s $material-timing-function $transition-delay;
        }
      }
      &:hover {
        background-color: $lightBg;
        .menu-item-title {
          .title-icon {
            transform: rotate(180deg);
          }
        }
        .category-menu-aside {
          opacity: 1;
          transform: scale(1, 1);
        }
      }
    }
  }

  .category-menu-aside {
    position: absolute;
    top: 0;
    left: $category-main-menu-width;
    width: 50vw;
    max-width: 600px;
    min-height: 400px;
    background-color: white;
    font-size: $font-size-sm;
    line-height: 24px;
    opacity: 0;
    transform: scale(1, 0);
    transition: transform 0s linear $transition-delay, opacity .2s ease-out $transition-delay;
    ul {
      padding-top: 12px;
      padding-bottom: 12px;
      li {
        padding-bottom: 12px;
        &:last-child {
          padding-bottom: 0;
        }
        .category-aside-title {
          display: inline-block;
          width: 7rem;
          padding-right: 1rem;
          vertical-align: top;
        }
        .category-aside-content {
          display: inline-block;
          width: calc(100% - 7rem);
          a {
            display: inline-block;
            padding-right: 1rem;
          }
        }

      }
    }
  }


</style>