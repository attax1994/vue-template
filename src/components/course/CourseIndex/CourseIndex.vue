<template>
  <div class="course-index">
    <div class="section">
      <div class="title">章节目录</div>
      <el-tree :data="data" node-key="id" :default-expanded-keys="[1]" @node-click="handleNodeClick">
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <span class="course-title" v-if="data.children">第{{data.chapterIndex}}章 {{data.label}}</span>
          <span class="course-title" v-else>{{data.chapterIndex}}.{{data.courseIndex}} {{data.label}}</span>

          <el-tooltip v-if="data.isUploaded" effect="dark" content="该课程已上传" placement="top">
            <span class="icon el-icon-circle-check"></span>
          </el-tooltip>
          <el-tooltip v-else effect="dark" content="该课程尚未上传" placement="top">
            <span class="icon el-icon-question"></span>
          </el-tooltip>

          <div v-if="data.children" class="course-count">{{data.children.length}}课时</div>
        </div>
      </el-tree>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'CourseIndex'
  })
  export default class CourseIndex extends Vue {
    public data = [{
      id: 1,
      chapterIndex: 1,
      label: '一级 1',
      children: [{
        label: '二级 1-1',
        chapterIndex: 1,
        courseIndex: 1,
        isUploaded: true,
      }],
    }, {
      id: 2,
      chapterIndex: 2,
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        chapterIndex: 2,
        courseIndex: 1,
        isUploaded: true,
      }, {
        label: '二级 2-2',
        chapterIndex: 2,
        courseIndex: 2,
        isUploaded: false,
      }]
    }, {
      id: 3,
      chapterIndex: 3,
      label: '一级 3',
      children: [{
        label: '二级 3-1',
        chapterIndex: 3,
        courseIndex: 1,
        isUploaded: false,
      }, {
        label: '二级 3-2',
        chapterIndex: 3,
        courseIndex: 2,
        isUploaded: true,
      }]
    }];

    public handleNodeClick(data) {
      /*console.log(data);*/
    }

  }
</script>

<style lang="scss">
  @import "../../../assets/theme/theme";

  $chapterHeight: 50px;
  $courseHeight: 40px;

  .course-index {
    .course-title {
      display: inline-block;
      margin-right: 1rem;
      vertical-align: middle;
    }
    .icon {
      font-size: $font-size-xl;
      vertical-align: middle;
    }
    .course-count {
      margin-right: 1rem;
      float: right;
    }
    .el-tree > .el-tree-node {
      margin-bottom: 2px;
      .custom-tree-node {
        flex-grow: 1;
      }
      & > .el-tree-node__content {
        height: $chapterHeight;
        line-height: $chapterHeight;
        background: $lightBg;
        font-size: $font-size-md;
        font-weight: bold;
        color: $titleColor;
        .icon {
          display: none;
        }
      }
      & > .el-tree-node__children .el-tree-node__content {
        height: $courseHeight;
        line-height: $courseHeight;
        background: white;
        font-size: $font-size-sm;
        color: $titleColor;
        &:hover {
          background: #fafafa;
        }
        .icon {
          display: inline;
        }
      }
      .el-tree-node__expand-icon:not(.is-leaf) {
        color: $darkBg;
      }
    }
  }


</style>