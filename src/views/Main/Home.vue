<template>
  <div class="home">
    <Banner :options="BannerOptions">
      <div class="container word-typing">
        <div class="typing-header">Welcome to xxx</div>
        <WordTyping :options="WordTypingOptions"></WordTyping>
      </div>
    </Banner>

    <FeatureBar></FeatureBar>

    <div class="section-wrapper">
      <div class="section container">
        <h1>Popularity</h1>
        <transition name="skeleton" mode="out-in">
          <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                            key="Popularity" @scrollEnd="handlerScrollEnd"></HorizontalScroll>
          <HorizontalScrollSkeleton v-else key="Popularity-skeleton"></HorizontalScrollSkeleton>
        </transition>
      </div>

      <div class="section container">
        <h1>Interesting</h1>
        <transition name="skeleton" mode="out-in">
          <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                            key="Interesting"></HorizontalScroll>
          <HorizontalScrollSkeleton v-else key="Interesting-skeleton"></HorizontalScrollSkeleton>
        </transition>
      </div>

      <div class="section container">
        <h1>Top Sellers</h1>
        <transition name="skeleton" mode="out-in">
          <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                            key="TopSellers"></HorizontalScroll>
          <HorizontalScrollSkeleton v-else key="TopSellers-skeleton"></HorizontalScrollSkeleton>
        </transition>
      </div>

      <div class="section container">
        <h1>Best Commented</h1>
        <transition name="skeleton" mode="out-in">
          <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                            key="BestCommented"></HorizontalScroll>
          <HorizontalScrollSkeleton v-else key="BestCommented-skeleton"></HorizontalScrollSkeleton>
        </transition>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {BannerOptionsInterface} from "@/components/home/Banner/Banner.entity";
  import {WordTypingOptionsInterface} from "@/components/common/WordTyping/WordTyping.entity";
  import {HorizontalScrollEntityInterface} from "@/components/common/HorizonScroll/HorizontalScroll.entity";
  import JSONPService from "@/persistence/service/JSONP.Service";

  @Component({
    components: {
      Banner: () => import(/* webpackChunkName: "group-home" */ '@/components/home/Banner/Banner.vue'),
      WordTyping: () => import(/* webpackChunkName: "group-word-typing" */ '@/components/common/WordTyping/WordTyping.vue'),
      FeatureBar: () => import(/* webpackChunkName: "group-home" */ '@/components/home/FeatureBar/FeatureBar.vue'),
      HorizontalScroll: () => import(/* webpackChunkName: "group-horizontal-scroll" */ '@/components/common/HorizonScroll/HorizontalScroll.vue'),
      HorizontalScrollSkeleton: () => import(/* webpackChunkName: "group-horizontal-scroll" */ '@/components/common/HorizonScroll/HorizontalScroll.skeleton.vue')
    },
  })
  export default class Home extends Vue {
    public BannerOptions: BannerOptionsInterface = {
      backgroundImage: 'img/index/banner.jpg',
    };

    public WordTypingOptions: WordTypingOptionsInterface = {
      delay: 150,
      theme: 'light',
      fontSize: '2rem',
      items: [
        {
          text: 'Login',
          link: '/',
        }, {
          text: 'Sign up Now',
          link: '/blog',
        },
      ],
    };

    public HorizontalItemsReady: boolean = false;
    public HorizontalScrollItems: Array<HorizontalScrollEntityInterface> = [
      {
        image: 'img/carousel/carousel1.jpg',
        title: '123gggggggggggggggggggggggggggggggggg',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/course/detail/1',
      }, {
        image: 'img/index/banner.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/course/detail/1',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      }, {
        image: 'img/carousel/carousel1.jpg',
        title: '123',
        content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        link: '/',
      },
    ];

    constructor() {
      super();
    }

    mounted() {
      setTimeout(() => {
        this.HorizontalItemsReady = true;
      }, 2000);

      this.$store.dispatch('dashboard/showDashBoard', true)
    }

    beforeDestroy() {
      this.$store.dispatch('dashboard/showDashBoard', false);
    }

    public handlerScrollEnd(count: number) {
      console.log(count);
      /*this.$set(this.HorizontalScrollOptions, 'items', this.HorizontalScrollOptions.items.concat(this.HorizontalScrollOptions.items));*/
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/theme/theme";

  .word-typing {
    padding-top: 5rem;
    .typing-header {
      font-size: 3rem;
      line-height: 1.5;
      font-weight: bold;
    }
  }

  h1 {
    margin: 0;
    padding-bottom: 1rem;
  }
</style>