<template>
  <div>
    <Pagination :options="PaginationOptions" @choose-page="choosePage" style="text-align: center"></Pagination>
    <div>{{currentPage}}</div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {PaginationConfigInterface} from "@/components/common/Pagination/Pagination.entity";

  @Component({
    components: {
      Pagination: () => import(/* webpackChunkName: "group-pagination" */ '@/components/common/Pagination/Pagination.vue'),
    },
  })
  export default class PaginationDemo extends Vue {
    public PaginationOptions: PaginationConfigInterface = {
      totalPage: 5,
      allowOuterControl: false,
    };
    public currentPage: number = 1;

    constructor() {
      super();
    }

    public choosePage(page: number) {
      this.currentPage = page;
    }
  }
</script>

<style scoped>

</style>