<template>
  <div id="carousel-absolute-wrapper">
    <div id="carousel-absolute-image-container"
         @pointerdown.prevent="pointerDownHandler($event)"
         @pointermove.prevent="pointerMoveHandler($event)"
         @pointerup.prevent="pointerUpHandler()"
         @pointerleave.prevent="pointerUpHandler()"
         @touchstart.prevent="touchStartHandler($event)"
         @touchmove.prevent="touchMoveHandler($event)"
         @touchend.prevent="touchEndHandler()">
      <div class="image-item" v-for="(item, index) in imageList" :key="`image-${index}`"
           :style="{ left: `${width*(index-1)}px` }">
        <img :src="item | FilePathParser">
      </div>
    </div>

    <div id="carousel-absolute-pagination">
      <div class="pagination-item" v-for="(item, index) in realOptions.src" :key="`pagination-${index}`"
           @click.prevent.self="switchPage(index)"></div>
    </div>

    <div>
      <div class="arrow left" @click="switchPage(currentIndex - 1)"></div>
      <div class="arrow right" @click="switchPage(currentIndex + 1)"></div>
    </div>

  </div>
</template>

<script lang="ts">
  import CarouselAbsolute from './CarouselAbsolute.component';

  export default CarouselAbsolute;
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  #carousel-absolute-wrapper {
    position: relative;
    overflow: hidden;
  }

  #carousel-absolute-image-container {
    position: relative;
    height: 100%;
    transform: translate(0, 0);
    transition: transform 0s ease;
    &.switching {
      transition-duration: .3s;
    }
    .image-item {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  #carousel-absolute-pagination {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    height: 20px;
    text-align: center;
    .pagination-item {
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1px solid gray;
      border-radius: 100%;
      margin: 0 .5rem;
      background: transparent;
      cursor: pointer;
      &.selected {
        background: $primary;
        border-color: $primary;
      }
    }
  }

  .arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5rem;
    cursor: pointer;
    background: rgba(gray, 0);
    will-change: background-color, left, right;
    transition: background-color .4s ease-in, left .4s ease-in, right .4s ease-in;
    &:hover {
      background: rgba($secondary, .3) !important;
    }
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      width: 40px;
      height: 40px;
      transform: translate(0, -50%) rotate(45deg);
      will-change: border;
      transition: border .4s ease;
    }
    &.left {
      left: -100%;
      &:before {
        left: 1.5rem;
        border-left: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
      &:hover {
        &:before {
          border-left-color: rgba($primary, 1) !important;
          border-bottom-color: rgba($primary, 1) !important;
        }
      }
    }
    &.right {
      right: -100%;
      &:before {
        right: 1.5rem;
        border-right: 8px solid transparent;
        border-top: 8px solid transparent;
      }
      &:hover {
        &:before {
          border-right-color: rgba($primary, 1) !important;
          border-top-color: rgba($primary, 1) !important;
        }
      }
    }
  }

  #carousel-absolute-wrapper:hover .arrow {
    background: rgba($secondary, 0);
    transition-timing-function: ease-out;
    &.left {
      left: 0;
      &:before {
        border-left-color: rgba($primary, .7);
        border-bottom-color: rgba($primary, .7);
      }
    }
    &.right {
      right: 0;
      &:before {
        border-right-color: rgba($primary, .7);
        border-top-color: rgba($primary, .7);
      }
    }
  }

  @media (max-width: 768px) {
    .arrow {
      display: none !important;
    }
  }
</style>