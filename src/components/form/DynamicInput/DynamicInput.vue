<template>
  <div class="wrapper">
    <div class="input-list">
      <div class="input-item" v-for="(inputItem, index) in currentValue">
        <slot :item="inputItem" :index="index" :label="label">
          <text-input :label="label + (index + 1)"
                      :name="name + (index + 1)"
                      :max-length="50"
                      :validators="validators"
                      v-model="currentValue[index]"
                      @status="statusChange(index, $event)">
          </text-input>
        </slot>
        <div class="inline-actions">
          <span class="inline-action" @click.stop="removeItem(index)"><i class="el-icon-delete"></i></span>
        </div>
      </div>
    </div>
    <div class="actions">
      <el-button type="text" @click.stop="addItem()"><i class="el-icon-circle-plus-outline"></i>添加一个项目</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {FormValidatorFunction} from '../FormValidators'

  @Component({
    name: 'DynamicInput',
    computed: {
      currentValue: {
        set(value) {
          this.$emit('input', value)
        },
        get() {
          return this.value
        },
      },
    },
    components: {
      TextInput: () => import(/* webpackChunkName: "group-form" */ '@/components/form/TextInput/TextInput.vue'),
    },
  })
  export default class DynamicInput extends Vue {
    @Prop({required: false, type: Array, default: () => []}) value: Array<string>
    public currentValue: Array<string>
    @Prop({required: false, type: String, default: '项目'}) label: string
    @Prop({required: false, type: String, default: '项目'}) name: string
    @Prop({required: false, type: Array, default: () => []}) validators: Array<FormValidatorFunction>

    private _statusGroup: Array<boolean>
    private _composedStatus: boolean

    mounted() {
      this._statusGroup = Array(this.value.length).fill(true)
      this._composedStatus = true
    }

    public addItem() {
      this.currentValue.push('')
      this._statusGroup.push(true)
    }

    public removeItem(index: number) {
      this.currentValue.splice(index, 1)
      this._statusGroup.splice(index, 1)
    }

    public statusChange(index: number, status: boolean) {
      this._statusGroup[index] = status
      this._emitComposedStatus()
    }

    private _emitComposedStatus() {
      const newStatus = this._statusGroup.reduce((accumulator: boolean, value: boolean) => {
        if (value) {
          return accumulator
        } else {
          return false
        }
      })
      if (this._composedStatus !== newStatus) {
        this._composedStatus = newStatus
        this.$emit('status', this._composedStatus)
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .input-item {
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    .inline-actions {
      position: absolute;
      right: 0;
      top: 50%;
      width: 2rem;
      opacity: 0;
      transform: translate(0, -50%);
      .inline-action {
        color: $secondary;
        font-size: 2rem;
        cursor: pointer;
        transition: color .3s;
        &:hover {
          color: $primary;
        }
      }
    }
    &:hover {
      .inline-actions {
        opacity: 1;
      }
    }
  }

  .actions {
    text-align: center;
    button {
      font-size: $font-size-md;
    }
  }
</style>