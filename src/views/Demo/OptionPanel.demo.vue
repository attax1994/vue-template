<template>
  <div>
    <transition :name="transitionType" @after-enter="resolveSkeleton" mode="out-in">
      <OptionPanel :options="options" :items="items" v-if="options.items.length" :key="'OptionPanel'"></OptionPanel>

      <div class="option-list skeleton" v-else>
        <div class="option-item skeleton-head">
          <span>1111</span>
        </div>
        <div class="option-item skeleton-head">
          <span>1111</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {OptionPanelInterface} from "@/components/common/OptionPanel/OptionPanel.Entity";
  import {OptionPanelItemInterface} from "../../components/common/OptionPanel/OptionPanel.Entity";

  @Component({
    components: {
      OptionPanel: () => import(/* webpackChunkName: "group-option-panel" */ '@/components/common/OptionPanel/OptionPanel.vue'),
    },
  })
  export default class OptionPanelDemo extends Vue {
    public options: OptionPanelInterface = {};
    public items: Array<OptionPanelItemInterface> = [];
    public transitionType: string = 'fade';

    constructor() {
      super();
      setTimeout(() => {
        this.items = [
          {
            "id": "",
            "title": "课程",
            "children": [
              {
                "id": "1",
                "title": "类目1(新页面)",
                "target": "_blank",
                "children": [
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "1",
                "title": "类目1(新页面)",
                "target": "_blank",
                "children": [
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "1",
                "title": "类目1(新页面)",
                "target": "_blank",
                "children": [
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  },
                  {
                    "id": "1-1",
                    "title": "类目1-标签1",
                    "children": [
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      },
                      {
                        "id": "1-1-1",
                        "title": "类目1-标签1-1"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }, 1000);
    }

    resolveSkeleton() {
      if (this.items.length) {
        this.transitionType = '';
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/theme/theme";

  .option-list {
    .option-item {
      position: relative;
      display: inline-block;
      padding: .75rem 1.5rem .75rem;
    }
  }

  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>