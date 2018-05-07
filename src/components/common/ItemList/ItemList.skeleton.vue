<template>
  <div class="list-wrapper">
    <transition name="list-change" mode="out-in">

      <section class="list" :class="{collapsed: collapsed}"
               :key="collapsed? 'item-list-skeleton-collapsed':'item-list-skeleton-full'">
        <div class="item" v-for="item in counter">
          <div class="image skeleton fade"></div>
          <div class="text">
            <div class="title skeleton fade"></div>
            <div class="content skeleton fade"></div>
            <div class="actions">
              <div class="skeleton fade"></div>
            </div>
          </div>
        </div>
      </section>

    </transition>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    name: 'ItemListSkeleton',
  })
  export default class ItemListSkeleton extends Vue {
    @Prop({required: false, type: Boolean, default: false}) collapsed;
    public counter = Array(4).fill(0);
  }
</script>

<style scoped lang="scss">
  @import "./ItemList";

  .list {
    &.collapsed {
      .content {
        height: 20px !important;
      }
    }
    .title {
      height: 24px !important;
    }
    .actions {
      .skeleton {
        display: inline-block !important;
        height: 18px !important;
        width: 70px !important;
      }
    }
  }

</style>