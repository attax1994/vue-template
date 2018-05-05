<template>
  <div class="blog-wrapper">
    <Banner :options="BannerOptions">
      <div class="container">
        <WordTyping :options="WordTypingOptions"></WordTyping>
      </div>
    </Banner>

    <div class="router-wrapper">
      <router-view></router-view>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Banner from '@/components/home/Banner/Banner.vue';
  import {BannerOptionsInterface} from "@/components/home/Banner/Banner.entity";
  import WordTyping from '@/components/common/WordTyping/WordTyping.vue';
  import {WordTypingOptionsInterface} from "@/components/common/WordTyping/WordTyping.entity";

  @Component({
    name: 'BlogWrapper',
    components: {
      Banner,
      WordTyping
    }
  })
  export default class BlogWrapper extends Vue {
    public BannerOptions: BannerOptionsInterface = {
      backgroundImage: 'img/carousel/carousel1.jpg',
    };

    public WordTypingOptions: WordTypingOptionsInterface = {
      delay: 150,
      preText: 'abc: ',
      theme: 'light',
      items: [
        {
          text: 'Lorem ipsum dolor sit amet.',
        }, {
          text: 'CSS is awesome!',
        }, {
          text: 'Yet another sentence.',
        }, {
          text: 'Last one.',
        },
      ],
    };

    constructor() {
      super();
    }
  }

</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .blog-wrapper {
    background: $lightBg;
  }

  .router-wrapper {
    position: relative;
    z-index: 1;
    background: $lightBg;
  }

</style>