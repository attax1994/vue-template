<template>
  <div>
    <form>
      <div class="form-header">
        Form Title
      </div>

      <div class="form-body">
        <div class="input-wrapper">
          <div v-pretty-input>
            <label for="FirstName">FirstName</label>
            <input type="text" id="FirstName">
          </div>
        </div>

        <div class="input-wrapper">
          <div v-pretty-input>
            <label class="with-placeholder" for="LastName">LastName</label>
            <input type="text" id="LastName" placeholder="I have placeholder">
          </div>
        </div>

        <div class="input-wrapper">
          <div v-pretty-input v-validators="[BasicValidator, AgeValidator]">
            <label for="Age">Age</label>
            <input type="number" id="Age">
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'formDemo'
  })
  export default class FormDemo extends Vue {
    public BasicValidator: (value: any) => string | null = function (value: any) {
      return value.length > 1 ? null : '长度不足';
    };
    public AgeValidator: (value: any) => string | null = function (value: any) {
      return Number.parseInt(value) < 200 ? null : '年龄过大';
    };

    constructor() {
      super();
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/theme/theme';

  form {
    margin: 2rem auto;
    padding-bottom: 1rem;
    width: 50%;
    box-shadow: 0 2px 8px rgba($dark, .5), 0 4px 8px rgba($dark, .3);
    .form-header {
      padding: .5rem 1rem;
      font-size: 1.25rem;
      text-align: left;
      color: white;
      background: $primary;
    }
    .form-body {
      display: flex;
      flex-wrap: wrap;
      .input-wrapper {
        width: 50%;
        padding: 0 1rem;
      }
    }
  }

</style>