<template>
  <div style="background: white; overflow: hidden;">
    <div class="container section-wrapper">
      <el-steps class="section" :active="courseStep">
        <el-step title="step1:选择课程类型"></el-step>
        <el-step title="step2:输入课程标题"></el-step>
        <el-step title="step3:选择课程分类"></el-step>
        <el-step title="课程简述"></el-step>
      </el-steps>

      <section class="section">
        <transition :name="'fade-' + slideDirection" mode="out-in">
          <div :key="`course-create-${courseStep}`">
            <section v-if="courseStep === 1">
              <div class="classTypeBoard" style="margin-left: 20%;">
                  <el-row>
                      <el-col :span="8">
                          <div class="grid-content bg-purple order-frame">
                              <div class="content-title">
                                  <img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" />
                              </div>
                              <div class="content-body">
                                  <span class="main-title"><h3>收费课程</h3></span>
                                  <p>课程描述</p>
                                  <p>课程描述</p>
                                  <p>课程描述</p>
                              </div>
                          </div>
                      </el-col>
                      <el-col :span="8">
                          <div class="grid-content bg-purple order-frame">
                              <div class="content-title">
                                  <img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" />
                              </div>
                              <div class="content-body">
                                  <span class="main-title"><h3>年费课程</h3></span>
                                  <p>课程描述</p>
                                  <p>课程描述</p>
                                  <p>课程描述</p>
                              </div>
                          </div>
                      </el-col>
                      <el-col :span="8">
                          <div class="grid-content bg-purple order-frame">
                              <div class="content-title">
                                  <img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" />
                              </div>
                              <div class="content-body">
                                  <span class="main-title">
                                      <h3>学校免费课程</h3>
                                  </span>
                                  <p>课程描述</p>
                                  <p>课程描述</p>
                                  <p>课程描述</p>
                              </div>
                          </div>
                      </el-col>
                  </el-row>
              </div>
            </section>

            <section class="input-section" v-if="courseStep === 2">
              <TextInput label="课程标题"
                         :max-length="20"
                         :validators="[Required()]"
                         v-model="courseTitle" @status="inputStatusHandler">
              </TextInput>
            </section>

            <section class="input-section" v-if="courseStep === 3">
                <DynamicInput v-model="dynamicInputItems"
                              :validators="[Required()]"
                              @status="inputStatusHandler">
                    <template slot-scope="{item, index, label}"></template>
                </DynamicInput>
            </section>

            <section class="input-section" v-if="courseStep === 4">
                <RichTextArea label="课程简述"
                              :max-length="200"
                              :validators="[Required()]"
                              v-model="courseDescription" @status="inputStatusHandler">
                </RichTextArea>
            </section>
          </div>
        </transition>
      </section>

      <transition :name="'fade-' + slideDirection" mode="out-in">
        <section class="section" style="text-align: center;" :key="`course-create-button-${courseStep}`">
          <el-button type="info" @click="switchPreviousHandler" :disabled="courseStep<=1">
            上一步
          </el-button>
          <el-button type="primary" @click="switchNextHandler"
                     :disabled="courseStep>3" v-if="courseStep<4">
            下一步
          </el-button>
          <el-button type="primary" v-else @click="openEditCoursePage">进行课程编辑</el-button>
        </section>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Required} from '@/components/form/FormValidators'

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
        Required,
      }
    },
      methods: {
          openEditCoursePage() {
              this.$router.push({path:'/course/editCourse'});
          }
      }
  })
  export default class CreateCourse extends Vue {
    public courseStep: number = 1
    public slideDirection: 'next' | 'previous' = 'next'

    public dynamicInputItems = Array(3).fill('')
    public courseType: string = '1'
    public courseTitle: string = ''
    public courseDescription: string = ''

    public isNextValid: boolean = true

    public inputStatusHandler(status: boolean) {
      this.isNextValid = status
    }

    public switchNextHandler() {
      this.courseStep < 4 && this.courseStep++
      this.slideDirection = 'next'
      this.isNextValid = true
    }

    public switchPreviousHandler() {
      this.courseStep > 0 && this.courseStep--
      this.slideDirection = 'previous'
      this.isNextValid = true
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

  .input-section {
    max-width: 800px;
    margin: 0 auto;
  }
  .classTypeBoard {
      width: 60%;
  }
  .order-frame {
      font-size: 14px;
      border: 1px solid #e2e2e2;
      padding: 3px 3px 5px 3px;
      margin: 5px;
      cursor: pointer;
      height: 350px;
  }
  .order-frame:hover {
      background-color: #e2e2e2
  }
  .content-title {
      display: inline-block;
      vertical-align: top;
  }
  .content-title-img {
      padding: 2px;
      border: 1px solid #e2e2e2;
      height: 150px;
      vertical-align: center;
  }
  .content-body {
      display: inline-block;
      margin-left: 10px;
      vertical-align: top;
  }
</style>