<template>
  <WordTyping :options="WordTypingOptions"></WordTyping>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {WordTypingOptionsInterface} from "../../components/common/WordTyping/WordTyping.entity";

  @Component({
    components: {
      WordTyping: () => import(/* webpackChunkName: "group-word-typing" */ '@/components/common/WordTyping/WordTyping.vue'),
    },
  })
  export default class TypingDemo extends Vue {
    public WordTypingOptions: WordTypingOptionsInterface = {
      delay: 150,
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

</style>