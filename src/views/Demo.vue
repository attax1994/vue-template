<template>
  <div class="Demo">
    <div class="nav">
      <div class="list">

        <div class="item">
          <span>Demos</span>
          <div class="arrow"></div>
          <div class="side-menu">
            <div class="menu-item">
              <router-link to="/demo/carousel" active-class="router-active">Carousel</router-link>
            </div>

            <div class="menu-item">
              <router-link to="/demo/pagination" active-class="router-active">Pagination</router-link>
            </div>

            <div class="menu-item">
              <router-link to="/demo/panel" active-class="router-active">Option Panel</router-link>
            </div>

            <div class="menu-item">
              <router-link to="/demo/form" active-class="router-active">Form</router-link>
            </div>

            <div class="menu-item">
              <router-link to="/demo/typing" active-class="router-active">Typing</router-link>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="router-wrapper">
      <router-view></router-view>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Demo extends Vue {

    constructor() {
      super();
    }

    mounted() {
    }

  }
</script>

<style scoped lang="scss">
  @import "../assets/theme/theme";

  .nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10%;
    z-index: 10;
    background: $darkBg;
    .list {
      text-align: left;
      .item {
        position: relative;
        z-index: 1;
        padding: 1rem;
        color: white;

        span {
          cursor: default;
        }

        .arrow {
          position: absolute;
          top: 18px;
          right: 10%;
          height: 0;
          border: 8px solid transparent;
          border-left-color: white;
        }

        .side-menu {
          position: absolute;
          top: 0;
          left: 100%;
          width: 150px;
          background: $lightBg;
          border: 1px solid $lightBg;
          transform: scaleY(0);
          transform-origin: center top;
          transition: transform .1s ease-out .5s;
          .menu-item {
            padding: .5rem 1rem;
            a {
              color: $dark;
            }
            &:hover {
              background: white;
              a {
                color: $primary !important;
              }
            }
          }
        }

        &:hover {
          transition-timing-function: ease-in;
          transition-delay: 0s;
          .side-menu {
            transform: scaleY(1);
            transition-duration: .2s;
            transition-timing-function: ease-in;
          }
        }

      }
    }
  }

  .router-active {
    color: rgba($primary, .8) !important;
  }

  .router-wrapper {
    padding-left: 10%;
  }

</style>