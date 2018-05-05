<template>
  <div class="typing" :class="[realOptions.theme]" :style="{fontSize: realOptions.fontSize}">
    <span class="pre-text">{{realOptions.preText}}</span>
    <span class="text"><router-link class="no-underline" :to="link">{{textContent}}</router-link></span>
    <span class="cursor">|</span>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {WordTypingItemInterface, WordTypingOptions, WordTypingOptionsInterface} from "./WordTyping.entity";

  @Component({
    name: 'WordTyping'
  })
  export default class WordTyping extends Vue {
    @Prop({type: Object, required: true,}) options: WordTypingOptionsInterface;
    public realOptions: WordTypingOptionsInterface;
    public textContent = '';
    public link = '';

    constructor() {
      super();
    }

    data() {
      return {
        realOptions: Object.assign(new WordTypingOptions(), this.options),
      }
    }

    mounted() {
      this._initTyping(this.realOptions.items);
    }

    private _initTyping(textArray: Array<WordTypingItemInterface>) {
      let currentIndex = 0,
        str, len, i;

      /**
       * Switch to next string
       */
      const startTyping = () => {
        const currentItem = textArray[currentIndex] || textArray[currentIndex = 0];
        str = currentItem.text;
        len = str.length;

        this.link = currentItem.link || '/';
        currentIndex++;
        i = 0;

        addLetter();
      };

      /**
       * Add next letter to the content.
       * Pass space without delay.
       */
      const addLetter = () => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            do {
              this.textContent += str[i++];
            } while (str[i] === ' ');

            if (i < len) {
              addLetter();
            } else {
              // trigger reverting after delay
              setTimeout(rollBack, this.realOptions.endDelay);
            }
          });
        }, this.realOptions.delay);
      };

      /**
       * Revert content to empty.
       */
      const rollBack = () => {
        requestAnimationFrame(() => {
          this.textContent = this.textContent.substring(0, --i);
          if (i) {
            rollBack();
          } else {
            // animate next string
            startTyping();
          }
        });
      };

      startTyping();
      return this;
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .typing {
    white-space: nowrap;
    overflow: hidden;
    font-size: 2.5rem;
    line-height: 1.5;
    font-weight: bold;
    vertical-align: text-top;
    .text {
      display: inline-block;
      vertical-align: top;
      margin: 0 .1em;
      border-bottom: .25rem solid $primary;
      transition: border-bottom-color .3s linear;
      a {
        &:hover {
          text-decoration: none;
        }
      }
    }
    .cursor {
      display: inline-block;
      opacity: 1;
      animation: caret .8s steps(1) infinite;
    }
  }

  @keyframes caret {
    50% {
      opacity: 0;
    }
  }

  .typing.dark {
    color: $darkBg;
    .text {
      a {
        color: $darkBg !important;
      }
      &:hover {
        border-color: $darkBg;
      }
    }
  }

  .typing.light {
    color: $light;
    .text {
      a {
        color: $light !important;
      }
      &:hover {
        border-color: $light;
      }
    }
  }

</style>