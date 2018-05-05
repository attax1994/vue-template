<template>
  <div class="courses">
    <CarouselBlock :options="CarouselOptions" style="height: 400px;"></CarouselBlock>
    <div class="section-wrapper container">

      <button @click.stop="switchItemListStyle">转换</button>
      <transition name="skeleton" mode="out-in">
        <ItemList :options="ItemListOptions" v-if="ItemListReady"></ItemList>
        <ItemListSkeleton :collapsed="ItemListOptions.collapsed" v-else></ItemListSkeleton>
      </transition>

      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="12"
        layout="prev, pager, next, jumper"
        :total="120">
      </el-pagination>

    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {CarouselOptionsInterface} from "../../components/common/Carousel/Carousel.entity";
  import {ItemListOptionsInterface} from "../../components/common/ItemList/ItemList.entity";

  @Component({
    components: {
      CarouselBlock: () => import(/* webpackChunkName: "group-carousel" */ '@/components/common/Carousel/CarouselBlock.vue'),
      ItemList: () => import(/* webpackChunkName: "group-ItemList" */ '@/components/common/ItemList/ItemList.vue'),
      ItemListSkeleton: () => import(/* webpackChunkName: "group-ItemList" */ '@/components/common/ItemList/ItemList.skeleton.vue'),
    },
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

    public ItemListReady: boolean = false;
    public ItemListOptions: ItemListOptionsInterface = {
      collapsed: true,
      items: Array(8).fill({
        title: '标题',
        content: '123',
        imageUrl: 'img/index/banner.jpg',
        link: '/course/detail/1',
        starCount: 123,
        purchaseCount: 123,
      }),
    };

    public currentPage = 1;

    created() {
      this._initItemListCollapse();
    }

    mounted() {
      setTimeout(() => {
        this.ItemListReady = true;
      }, 2000);
    }

    public handleCurrentChange(page: number) {
      console.log(page);
      window.scroll(0, 496);
    }

    public switchItemListStyle() {
      this.$set(this.ItemListOptions, 'collapsed', !this.ItemListOptions.collapsed);
      return this;
    }

    private _initItemListCollapse() {
      if (window.innerWidth > 1000) {
        this.$set(this.ItemListOptions, 'collapsed', true);
      } else {
        this.$set(this.ItemListOptions, 'collapsed', false);
      }
    }

  }
</script>

<style scoped lang="scss">

  .el-pagination {
    padding: 0;
  }

</style>