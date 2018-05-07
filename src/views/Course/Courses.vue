<template>
  <div class="courses">
    <CarouselBlock :options="CarouselOptions" style="height: 400px;"></CarouselBlock>
    <div class="section-wrapper container">

      <button @click.stop="switchItemListStyle">转换</button>
      <transition name="skeleton" mode="out-in">
        <ItemList :collapsed="ItemListCollapsed" :items="ItemListItems" v-if="ItemListReady"></ItemList>
        <ItemListSkeleton :collapsed="ItemListCollapsed" v-else></ItemListSkeleton>
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
  import {ItemListEntityInterface, ItemListOptionsInterface} from "../../components/common/ItemList/ItemList.entity";

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
    public ItemListCollapsed: boolean = true;
    public ItemListItems: Array<ItemListEntityInterface> = Array(8).fill({
      title: '标题',
      content: '123',
      imageUrl: 'img/index/banner.jpg',
      link: '/course/detail/1',
      starCount: 123,
      purchaseCount: 123,
    });

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
      this.ItemListCollapsed = !this.ItemListCollapsed;
      return this;
    }

    private _initItemListCollapse() {
      this.ItemListCollapsed = window.innerWidth > 1000;
    }

  }
</script>

<style scoped lang="scss">

  .el-pagination {
    padding: 0;
  }

</style>