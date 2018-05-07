<template>
  <div class="option-panel">
    <div class="option-list" :class="[realOptions.theme]"
         :style="{height: realOptions.height, lineHeight: realOptions.height}">
      <div class="option-item" v-for="(firstLevel, index) in items">
        <router-link class="no-underline option-link" :to="realOptions.baseUrl + '?category=' + firstLevel.id"
                     :target="firstLevel.target">
          {{firstLevel.title}}
          <div class="indicator first" v-if="firstLevel.children"></div>
        </router-link>

        <div class="sub-list second" v-if="firstLevel.children">
          <div class="sub-item" v-for="(secondLevel, index) in firstLevel.children">
            <router-link class="sub-link no-underline" :to="realOptions.baseUrl + '?category=' + secondLevel.id"
                         :target="secondLevel.target">
              {{secondLevel.title}}
              <div class="indicator second" v-if="secondLevel.children"></div>
            </router-link>

            <div class="sub-list third" v-if="secondLevel.children">
              <div class="sub-item no-underline" v-for="(thirdLevel, index) in secondLevel.children">
                <router-link class="sub-link no-underline" :to="realOptions.baseUrl + '?category=' + thirdLevel.id"
                             :target="thirdLevel.target">
                  {{thirdLevel.title}}
                  <div class="indicator third" v-if="thirdLevel.children"></div>
                </router-link>

                <div class="sub-list fourth" v-if="thirdLevel.children">
                  <div class="sub-item" v-for="(fourthLevel, index) in thirdLevel.children">
                    <router-link class="sub-link no-underline" :to="realOptions.baseUrl + '?category=' + fourthLevel.id"
                                 :target="fourthLevel.target">
                      {{fourthLevel.title}}
                    </router-link>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {OptionPanelEntity, OptionPanelInterface, OptionPanelItemInterface} from "./OptionPanel.Entity";

  @Component({
    name: 'OptionPanel',
    computed: {
      realOptions(): OptionPanelInterface {
        return Object.assign(new OptionPanelEntity(), this.options);
      },
    },
  })
  export default class OptionPanel extends Vue {
    @Prop({required: false, default: null, type: Object}) options: OptionPanelInterface;
    @Prop({required: true, default: [], type: Array}) items: Array<OptionPanelItemInterface>;
    public realOptions: OptionPanelInterface;

    constructor() {
      super();
    }

    /*****************
     * Life Cycles
     *****************/
    mounted() {
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  $closeDelay: .3s;

  .option-list {
    .option-item {
      position: relative;
      display: inline-block;
      height: 100%;
      transition: background-color .3s ease;
      .option-link {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 1.5rem;
        color: $darkBg;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        height: .25rem;
        background: $primary;
        transform-origin: center top;
        transition: left .3s ease, right .3s ease;
      }
      &.selected {
        color: $danger;
      }
      &:hover {
        background: $lightBg;
        &:before {
          left: 0;
          right: 0;
        }
      }
    }
  }

  .sub-list {
    position: absolute;
    text-align: left;
    line-height: 1.5;
    background: white;
    transform: scale(1, 0);
    transform-origin: center top;
    transition: transform 0s $material-timing-function $closeDelay;
    &.second {
      top: 100%;
      left: 0;
      z-index: 1000;
      box-shadow: 0 3px 6px rgba($darkBg, .5);
    }
    &.third {
      top: 0;
      left: 100%;
      z-index: 1001;
      box-shadow: 2px 4px 8px 2px rgba($darkBg, .5);
    }
    &.fourth {
      top: 0;
      left: 100%;
      z-index: 1002;
      box-shadow: 2px 5px 10px 4px rgba($darkBg, .5);
    }
    .sub-item {
      position: relative;
      white-space: nowrap;
      .sub-link {
        display: block;
        padding: .5rem 2rem .5rem 1rem;
        color: $darkBg;
      }
      &:hover {
        color: $primary;
        background: $lightBg;
      }
    }
  }

  .indicator {
    position: absolute;
    top: 50%;
    right: .5rem;
    height: 0;
    width: 0;
    border: 6px solid transparent;
    transform: translate(0, -50%);
    &.first {
      margin-top: 3px;
      border-top-color: $darkBg;
    }
    &.second, &.third {
      border-left-color: $darkBg;
    }
  }

  .option-item:hover > .sub-list.second,
  .sub-list.second > .sub-item:hover > .sub-list.third,
  .sub-list.third > .sub-item:hover > .sub-list.fourth {
    transform: scale(1, 1);
    transition: transform .1s $material-timing-function $closeDelay;
  }

  .option-list.dark {
    background: $darkBg;
    color: white;
    .option-item {
      .option-link {
        color: white;
      }
      &:hover {
        background: $darkBg;
      }
    }
    .sub-list {
      background: $darkBg;
      .sub-link {
        color: white;
      }
      .sub-item:hover {
        background: white;
        & > .sub-link {
          color: $darkBg;
          & > .indicator {
            &.first {
              border-top-color: $darkBg;
            }
            &.second, &.third {
              border-left-color: $darkBg;
            }
          }
        }
      }
    }
    .indicator {
      &.first {
        border-top-color: white;
      }
      &.second, &.third {
        border-left-color: white;
      }
    }
  }

</style>