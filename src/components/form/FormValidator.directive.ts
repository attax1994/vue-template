import {VNodeDirective} from "vue/types/vnode";

export default {
  inserted(el: HTMLElement, binding: VNodeDirective) {
    const validators: Array<Function> = binding.value,
      input: HTMLInputElement = el.querySelector('.input');

    // if there is validator
    if (validators && validators.length) {
      let errorTextWrapper: HTMLElement = el.querySelector('.error-text'),
        isValid: boolean | null = null,
        debounceTimer: any = null;

      function checkInput() {
        if (debounceTimer) {
          clearTimeout(debounceTimer);
        }
        debounceTimer = setTimeout(() => {
          const {value: inputValue} = input;
          let error: string;

          // change dirty
          if (inputValue.length) el.classList.add('dirty');

          // apply validators
          for (let validator of validators) {
            if (error = validator(inputValue)) break;
          }

          // error handler
          if (error) {
            if (isValid || isValid === null) {
              isValid = false;
              el.classList.add('error');
              input.dispatchEvent(new CustomEvent('status', {detail: isValid}));
            }

            if (errorTextWrapper) {
              errorTextWrapper.textContent = error;
            } else {
              errorTextWrapper = document.createElement('div');
              errorTextWrapper.className = 'error-text';
              errorTextWrapper.textContent = error;
              el.appendChild(errorTextWrapper);
            }
          } else {
            if (!isValid || isValid === null) {
              isValid = true;
              el.classList.remove('error');
              input.dispatchEvent(new CustomEvent('status', {detail: isValid}));
            }
          }
        }, 300);
      }

      checkInput();

      input.addEventListener('input', (ev: Event) => {
        ev.stopPropagation();
        checkInput();
      }, false);
      input.addEventListener('change', (ev: Event) => {
        ev.stopPropagation();
        checkInput();
      }, false);
    }
    // if there is no validator
    else {
      setTimeout(() => {
        input.dispatchEvent(new CustomEvent('status', {detail: true}));
      }, 300);
    }
  }
}