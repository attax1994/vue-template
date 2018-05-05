<template>
  <div class="list-wrapper">
    <transition name="list-change" mode="out-in">

      <section class="list" v-if="!realOptions.collapsed" key="full">
        <div class="item elevation-2 shadow-8 hover-scale" v-for="item in realOptions.items">
          <router-link class="black-link" :to="item.link || '/'">
            <div class="image">
              <img class="hover-scale-lg" :src="item.imageUrl | FilePathParser">
            </div>

            <div class="text">
              <div class="title ellipsis">{{item.title}}</div>
              <div class="content">{{item.content}}</div>
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

      <section class="list collapsed" v-else key="collapsed">
        <div class="item elevation-2 shadow-6" v-for="item in realOptions.items">
          <router-link class="black-link" :to="item.link || '/'">
            <div class="image">
              <img class="hover-scale-lg" :src="item.imageUrl | FilePathParser">
            </div>

            <div class="text">
              <div class="title ellipsis">{{item.title}}</div>
              <div class="content ellipsis">{{item.content}}</div>
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
  import {ItemListOptionsEntity, ItemListOptionsInterface} from './ItemList.entity';

  @Component({
    name: 'ItemList',
    computed: {
      realOptions() {
        return Object.assign(new ItemListOptionsEntity, this.options);
      }
    }
  })
  export default class ItemList extends Vue {
    @Prop({required: true, type: Object}) options: ItemListOptionsInterface;

  }
</script>

<style scoped lang="scss">
  @import "./ItemList";

</style>