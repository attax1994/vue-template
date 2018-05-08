<template>
  <div class="list-wrapper">
    <transition name="list-change" mode="out-in">

      <section class="list" :class="{collapsed: collapsed}" :key="collapsed? 'course-list-collapsed':'course-list-full'">
        <div class="item elevation-2 shadow-8 hover-scale" v-for="item in items">
          <router-link class="black-link" :to="item.link || '/'">
            <div class="image">
              <img :src="item.imageUrl | FilePathParser">
            </div>

            <div class="text">
              <div class="title ellipsis">{{item.title}}</div>
              <div class="content" :class="{ellipsis: collapsed}">{{item.content}}</div>
              <div class="actions">
                <span class="el-icon-star-on"></span>
                <span>{{item.starCount || 0}} </span>
                <span class="el-icon-goods"></span>
                <span>{{item.purchaseCount || 0}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </section>

    </transition>
  </div>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {ItemListEntityInterface} from './CourseList.entity';

  @Component({
    name: 'CourseList',
  })
  export default class ItemList extends Vue {
    @Prop({required: false, type: Boolean, default: true}) collapsed: boolean;
    @Prop({required: false, type: Array, default: () => []}) items: Array<ItemListEntityInterface>;

  }
</script>

<style scoped lang="scss">
  @import "CourseList";

</style>