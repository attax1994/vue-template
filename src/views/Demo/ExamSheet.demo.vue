<template>
  <div class="wrapper">
    <CheckBoxQuestion v-model="items"></CheckBoxQuestion>
    <div v-for="item in items">
      <p>当前值：{{item.text}}，当前状态：{{item.selected}}，key为：{{item.key}}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    components: {
      CheckBoxQuestion: () => import(/* webpackChunkName: "group-form" */ '@/components/exam/CheckBoxQuestion/CheckBoxQuestion.vue'),
    },
  })
  export default class ExamSheet extends Vue {
    public items = [{text: '第一个选项', selected: true}, {text: '第二个选项', selected: false}]

  }
</script>

<style scoped>
  .wrapper {
    width: 50%;
    margin: 0 auto;
  }
</style>