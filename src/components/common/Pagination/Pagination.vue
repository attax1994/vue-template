<template>
  <div class="pagination-wrapper" @click.prevent="choosePageHandler">
    <span class="pagination-item pointer" :data-page="currentPage - 1"
          :class="{disabled: currentPage<=1}">上一页</span>
    <span class="pagination-item pointer" :data-page="currentPage - 2"
          v-if="currentPage>2">{{currentPage - 2}}</span>
    <span class="pagination-item pointer" :data-page="currentPage - 1"
          v-if="currentPage>1">{{currentPage - 1}}</span>
    <span class="pagination-item active">{{currentPage}}</span>
    <span class="pagination-item pointer" :data-page="currentPage + 1"
          v-if="realOptions.totalPage - currentPage > 0">{{currentPage + 1}}</span>
    <span class="pagination-item pointer" :data-page="currentPage + 2"
          v-if="realOptions.totalPage - currentPage > 1">{{currentPage + 2}}</span>
    <span class="pagination-item pointer" :data-page="currentPage + 1"
          :class="{disabled: currentPage === realOptions.totalPage}">下一页</span>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {Provided} from "../../../persistence/injection/ModuleManager";
  import {PaginationConfigEntity, PaginationConfigInterface} from "./Pagination.entity";
  import EventsService from "@/persistence/service/Events.Service";

  @Component({
    name: 'Pagination',
    computed: {
      realOptions() {
        return Object.assign(new PaginationConfigEntity(), this.options);
      },
    },
  })
  export default class Pagination extends Vue {
    @Prop({required: true, default: null, type: Object}) options: PaginationConfigInterface;
    public realOptions: PaginationConfigInterface;
    public currentPage: number = 1;

    @Provided(EventsService) private _eventsService: EventsService;

    constructor() {
      super();
    }


    /*****************
     * Life Cycles
     *****************/
    mounted() {
      // 如果允许外部控制，注册相应的eventListener
      if (this.realOptions.allowOuterControl) {
        this._eventsService.on(this.realOptions.outerControlEventName, (page: number) => {
          if (this.realOptions.allowOuterControl) {
            this._choosePage(page);
          }
        });
      }
    }

    /*****************
     * Page Control
     *****************/
    public choosePageHandler(event: MouseEvent) {
      const pageIndex = Number.parseInt((event.target as HTMLElement).getAttribute('data-page'));
      this._choosePage(pageIndex);
    }

    private _choosePage(pageIndex: number) {
      if (!pageIndex || pageIndex < 1 || pageIndex > this.realOptions.totalPage) return;

      this.currentPage = pageIndex;
      this.$emit('choose-page', pageIndex);
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .pagination-wrapper {
    white-space: nowrap;
    overflow: hidden;
    & > .pagination-item {
      display: inline-block;
      vertical-align: top;
      height: 40px;
      line-height: 40px;
      padding: 0 1rem;
      margin-right: -1px;
      border: 1px solid $secondary;
      color: #555;
      font-size: $font-size-sm;
      user-select: none;
      &:not(.active):not(.disabled):hover {
        background: $primary;
        color: white;
      }
      &.active, &.disabled {
        cursor: initial;
        background: #ddd;
      }
    }
  }
</style>