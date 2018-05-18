<template>
  <div class="checkbox-sheet">
    <DynamicInput v-model="currentValue"
                  :defaultItem="defaultItem"
                  name="exam-1"
                  addButtonText="添加选项"
                  @change="dynamicNumberChange">
      <template slot-scope="{item, index, label, inputName}">
        <CheckBoxWithEdit :text="item.text"
                          :key="item.key"
                          :index="index"
                          :name="inputName"
                          :isChecked="item.selected"
                          @change="checkboxChangeHandler"/>
      </template>
    </DynamicInput>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import UtilService from '@/persistence/service/Util.Service'

  @Component({
    name: 'CheckBoxQuestion',
    components: {
      DynamicInput: () => import(/* webpackChunkName: "group-form" */ '@/components/form/DynamicInput/DynamicInput.vue'),
      CheckBoxWithEdit: () => import(/* webpackChunkName: "group-form" */ '@/components/form/CheckBoxWithEdit/CheckBoxWithEdit.vue'),
    },
    computed: {
      inputText() {
        return this.items.map(value => value.text)
      },
      currentValue: {
        set(values) {
          this.$emit('input', values.map((value) => {
            if (!value.key) {
              let key = UtilService.generateRandomKey('exam')
              while (values.find((v) => v.key === key)) {
                key = UtilService.generateRandomKey('exam')
              }
              value.key = key
            }
            return value
          }))
        },
        get() {
          return this.value
        },
      },
    },
  })
  export default class CheckBoxQuestion extends Vue {
    @Prop({required: true, type: Array}) value: Array<{ text: string, selected: boolean, key?: string }>
    public currentValue: Array<{ text: string, selected: boolean, key: string }>
    public defaultItem = {text: '', selected: false}

    public dynamicNumberChange(value) {
      this.currentValue = value
    }

    public checkboxChangeHandler({index, text, status}: { index: number, text: string, status: boolean }) {
      this.$set(this.currentValue[index], 'text', text)
      this.$set(this.currentValue[index], 'selected', status)
    }

  }
</script>

<style scoped lang="scss">

</style>