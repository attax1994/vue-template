<template>
  <div class="multiple" v-pretty-input v-form-validator="validators" v-max-input-check="maxLength">
    <label :class="{'with-placeholder': placeholder}">{{label}}</label>
    <textarea class="input"
              ref="input"
              :name="name"
              :value="value"
              :placeholder="placeholder"
              :maxlength="maxLength || 999"
              @keyup="formValueHandler($event)"
              @input="formValueHandler($event)">
    </textarea>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {FormValidatorFunction} from "../FormValidators";
  import PrettyInput from '@/components/form/PrettyInput.directive';
  import FormValidator from '@/components/form/FormValidator.directive';
  import MaxInputCheck from '@/components/form/MaxInputCheck.directive';


  @Component({
    name: 'RichTextArea',
    directives: {
      PrettyInput,
      FormValidator,
      MaxInputCheck
    }
  })
  export default class RichTextArea extends Vue {
    @Prop({required: false, type: String, default: ''}) value: string;
    @Prop({required: false, type: String, default: ''}) name: string;
    @Prop({required: false, type: String, default: ''}) placeholder: string;
    @Prop({required: false, type: String, default: ''}) label: string;
    @Prop({required: false, type: Number, default: 0}) maxLength: number;
    @Prop({required: false, type: Array, default: () => []}) validators: Array<FormValidatorFunction>;

    mounted() {
      // listener for valid status change from validator
      (this.$refs.input as HTMLInputElement).addEventListener('status', (event: CustomEvent) => {
        this.$emit('status', event.detail);
      });
    }

    public formValueHandler(event: Event) {
      const {value} = event.target as HTMLInputElement;
      this.$emit('input', value);
    }

  }
</script>

<style lang="scss">
  @import "../Input.style";

</style>