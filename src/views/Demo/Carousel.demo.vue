<template>
  <div>
    <CarouselAbsolute :options="CarouselOptions" style="height: 50vh;"></CarouselAbsolute>
    <CarouselBlock :options="CarouselOptions" style="height: 50vh;"></CarouselBlock>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {CarouselOptionsInterface} from "@/components/common/Carousel/Carousel.entity";

  @Component({
    components: {
      CarouselAbsolute: () => import(/* webpackChunkName: "group-carousel" */ '@/components/common/Carousel/CarouselAbsolute.vue'),
      CarouselBlock: () => import(/* webpackChunkName: "group-carousel" */ '@/components/common/Carousel/CarouselBlock.vue'),
    },
  })
  export default class PaginationDemo extends Vue {
    public CarouselOptions: CarouselOptionsInterface = {
      src: [
        'img/carousel/carousel1.jpg',
        'img/carousel/carousel2.jpg',
        'img/carousel/carousel3.jpg',
        'img/carousel/carousel4.jpg',
      ],
      delayMS: 2000,
    };

    constructor() {
      super();
    }

  }
</script>

<style scoped>

</style>