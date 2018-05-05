<template>
  <div style="background: white; overflow: hidden;">
    <div class="container section-wrapper">
      <el-steps class="section" :active="courseStep">
        <el-step title="课程类型"></el-step>
        <el-step title="课程标题"></el-step>
        <el-step title="课程简述"></el-step>
        <el-step title="课程简述"></el-step>
      </el-steps>

      <section class="section">
        <transition :name="'fade-' + slideDirection" mode="out-in">
          <div :key="courseStep">
            <section v-if="courseStep === 1">
              <RadioBlock name="courseType"
                          label="1"
                          v-model="courseType">
                <div class="col-4">
                  <ShowCase></ShowCase>
                </div>
              </RadioBlock>
              <RadioBlock name="courseType"
                          label="2"
                          v-model="courseType">
                <div class="col-4">
                  <ShowCase></ShowCase>
                </div>
              </RadioBlock>
              <RadioBlock name="courseType"
                          label="3"
                          v-model="courseType">
                <div class="col-4">
                  <ShowCase></ShowCase>
                </div>
              </RadioBlock>
              <h1>{{courseType}}</h1>
            </section>

            <section v-if="courseStep === 2">
              <TextInput label="课程标题"
                         :max-length="20"
                         :validators="[Required()]"
                         v-model="courseTitle" @status="inputStatusHandler">
              </TextInput>
            </section>

            <section v-if="courseStep === 3">
              <RichTextArea label="课程简述"
                            :max-length="200"
                            :validators="[Required()]"
                            v-model="courseDescription" @status="inputStatusHandler">
              </RichTextArea>
            </section>

            <section v-if="courseStep === 4">
              <DynamicInput v-model="dynamicInputItems"
                            :validators="[Required()]"
                            @status="inputStatusHandler">
                <template slot-scope="{item, index, label}"></template>
              </DynamicInput>
            </section>
          </div>
        </transition>
      </section>

      <section class="section" style="text-align: center;">
        <el-button type="info" @click="switchPreviousHandler" :disabled="courseStep<=1">
          上一步
        </el-button>
        <el-button type="primary" @click="switchNextHandler"
                   :disabled="!isNextValid" v-if="courseStep<4">
          下一步
        </el-button>
        <el-button type="primary" :disabled="!isNextValid" v-else>完&nbsp;&nbsp;&nbsp;成</el-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Required} from '@/components/form/FormValidators';

  @Component({
    components: {
      ElSteps: () => import(/* webpackChunkName: "group-el" */ 'element-ui/lib/steps.js'),
      ElStep: () => import(/* webpackChunkName: "group-el" */ 'element-ui/lib/step.js'),
      ShowCase: () => import(/* webpackChunkName: "group-course" */ '@/components/course/ShowCase/ShowCase.vue'),
      DynamicInput: () => import(/* webpackChunkName: "group-form" */ '@/components/form/DynamicInput/DynamicInput.vue'),
      RadioBlock: () => import(/* webpackChunkName: "group-form" */ '@/components/form/RadioBlock/RadioBlock.vue'),
      TextInput: () => import(/* webpackChunkName: "group-form" */ '@/components/form/TextInput/TextInput.vue'),
      RichTextArea: () => import(/* webpackChunkName: "group-form" */ '@/components/form/RichTextArea/RichTextArea.vue'),
    },
    data() {
      return {
        Required
      }
    }
  })
  export default class CreateCourse extends Vue {
    public courseStep: number = 1;
    public slideDirection: 'next' | 'previous' = 'next';

    public dynamicInputItems = ['', '', ''];
    public courseType: string = '1';
    public courseTitle: string = '';
    public courseDescription: string = '';

    public isNextValid: boolean = true;

    public inputStatusHandler(status: boolean) {
      this.isNextValid = status;
    }

    public switchNextHandler() {
      this.courseStep >= 4 ? this.courseStep = 4 : this.courseStep++;
      this.slideDirection = 'next';
      this.isNextValid = true;
    }

    public switchPreviousHandler() {
      this.courseStep--;
      this.slideDirection = 'previous';
      this.isNextValid = true;
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/theme/theme";

  .container {
    min-height: calc(100vh - #{$navHeight*2} - #{$footerHeight});
  }

  .col-4 {
    padding: 0 1rem;
  }

</style>