<template>
  <div class="horizontal-scroll">

    <section class="list-wrapper">
      <div class="card-list" :style="{transform: `translate(-${offsetLeft}px, 0)`}">
        <div class="col-6 col-md-3 col-lg-2 card-wrapper" v-for="(item, index) in items">
          <el-popover placement="right" width="250" trigger="hover" :open-delay="300">

            <div class="card elevation-2 shadow-6" slot="reference">
              <router-link class="no-underline" :to="item.link || '/'">
                <img :src="item.image | FilePathParser">
                <div class="text">
                  <div class="ellipsis title" :title="item.title">{{item.title}}</div>
                  <div class="ellipsis content" :title="item.content">{{item.content}}</div>
                  <div class="button-group">
                    <el-button type="primary" size="small">立即购买</el-button>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="popover-wrapper">
              <div class="text">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
              </div>
            </div>

          </el-popover>
        </div>
      </div>
    </section>

    <section class="actions">
      <div class="arrow left" v-show="currentIndex" @click.prevent="scrollClickHandler($event, currentIndex - 1)"></div>
      <div class="arrow right" v-show="currentIndex < trailingIndex"
           @click.prevent="scrollClickHandler($event, currentIndex + 1)"></div>
    </section>

  </div>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {
    HorizontalScrollEntityInterface,
    HorizontalScrollOptions,
    HorizontalScrollOptionsInterface
  } from "./HorizontalScroll.entity";

  @Component({
    name: 'HorizontalScroll',
    computed: {
      realOptions() {
        this._initWrapper();
        return Object.assign(new HorizontalScrollOptions(), this.options);
      },
    },
  })
  export default class HorizontalScroll extends Vue {
    @Prop({required: false, type: Object}) options: HorizontalScrollOptionsInterface;
    @Prop({required: true, type: Array}) items: Array<HorizontalScrollEntityInterface>;
    public realOptions: HorizontalScrollOptionsInterface;

    public currentIndex: number = 0;
    public trailingIndex: number = 0;
    public offsetLeft: number = 0;

    private _resizeListener: EventListener;

    constructor() {
      super();
    }

    mounted() {
      this._resizeListener = (evt: Event): void => {
        this._initWrapper()._resetOffsetLeft();
      };
      this._initWrapper()._resetOffsetLeft();
      window.addEventListener('resize', this._resizeListener);
    }

    beforeDestroy() {
      window.removeEventListener('resize', this._resizeListener);
    }

    public scrollClickHandler(event: MouseEvent, index: number) {
      this.offsetLeft = ((event.target as Node).parentNode.previousSibling.firstChild.childNodes[index] as HTMLElement).offsetLeft;

      if (index >= 0 && index <= this.trailingIndex) {
        this.currentIndex = index;
        if (index === this.trailingIndex) {
          this.$emit('scrollEnd', this.items.length);
        }
      }
      return this;
    }

    private _resetOffsetLeft() {
      this.currentIndex = 0;
      this.offsetLeft = 0;
      return this;
    }

    private _initWrapper() {
      const windowWidth = window.innerWidth;
      let showCount: number;
      if (windowWidth >= 1366) {
        showCount = 6;
      } else if (windowWidth < 1366 && windowWidth >= 768) {
        showCount = 4;
      } else {
        showCount = 2;
      }
      this.trailingIndex = this.items.length - showCount;
      return this;
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";
  @import "./HoriziontalScroll";

  .horizontal-scroll {
    position: relative;
  }

  .arrow {
    position: absolute;
    top: 50%;
    height: 3rem;
    width: 3rem;
    transform: translate(0, -50%);
    background-color: $HorizonBackground;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    transition: box-shadow .3s linear;
    &:before {
      content: '';
      position: absolute;
      top: .75rem;
      border: .75rem solid transparent;
      border-radius: .5rem;
      transition: border .3s linear;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      top: .75rem;
      border: .75rem solid transparent;
    }
    &.left {
      left: -1rem;
      &:before {
        left: .375rem;
        border-right-color: $secondary;
      }
      &:after {
        left: .625rem;
        border-right-color: $HorizonBackground;
      }
    }
    &.right {
      right: -1rem;
      &:before {
        right: .375rem;
        border-left-color: $secondary;
      }
      &:after {
        right: .625rem;
        border-left-color: $HorizonBackground;
      }
    }
    &:hover {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
      &.left:before {
        border-right-color: $primary
      }
      &.right:before {
        border-left-color: $primary
      }
    }
  }

</style>