<template>
  <label :tabindex="selected" :class="{'radio-selected': selected}">
    <slot>选项</slot>
    <input type="radio"
           :name="name"
           :value="label"
           v-model="currentValue"/>
  </label>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
    name: 'RadioBlock',
    computed: {
      currentValue: {
        set(value) {
          this.$emit('input', value);
        },
        get() {
          return this.value;
        }
      },
      selected() {
        return this.value === this.label;
      }
    }
  })
  export default class RadioBlock extends Vue {
    @Prop({required: false, type: String, default: ''}) value: string;
    @Prop({required: false, type: String, default: 'radio-default'}) name: string;
    @Prop({required: false, type: String, default: ''}) label: string;

  }
</script>

<style scoped lang="scss">
  label {
    position: relative;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
  }
</style>