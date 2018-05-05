<template>
  <div class="container blog-list-wrapper">

    <div class="section-wrapper button-group">
      <ButtonGroup :options="ButtonGroupOptions" @choose="buttonGroupChooseHandler"></ButtonGroup>
    </div>

    <div class="section-wrapper blog-pagination">
      <Pagination :options="PaginationOptions" @choosePage="choosePageHandler"></Pagination>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Pagination from '@/components/common/Pagination/Pagination.vue';
  import {PaginationConfigInterface} from "@/components/common/Pagination/Pagination.entity";
  import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup.vue';
  import {ButtonGroupEntity, ButtonGroupOptionsInterface} from "@/components/common/ButtonGroup/ButtonGroup.entity";

  @Component({
    name: 'BlogList',
    components: {
      Pagination,
      ButtonGroup,
    },
  })
  export default class BlogList extends Vue {
    public ButtonGroupOptions: ButtonGroupOptionsInterface = {
      items: [
        {
          title: '标题1'
        }, {
          title: '标题2'
        }
      ],
    };
    public PaginationOptions: PaginationConfigInterface = {
      totalPage: 5,
    };

    constructor() {
      super();
    }

    buttonGroupChooseHandler(data: ButtonGroupEntity) {
      console.log(data)
    }

    choosePageHandler(page: number) {
      console.log(page);
    }

  }
</script>

<style scoped lang="scss">
  .blog-list-wrapper {
    .button-group {
    }
  }
</style>