export default {
  inserted(el: HTMLElement) {
    const input: HTMLInputElement = el.querySelector('.input');
    el.classList.add('pretty-input');

    function checkValue() {
      if (input.value) {
        el.classList.add('has-value');
      } else {
        el.classList.remove('has-value');
      }
    }

    checkValue();

    input.addEventListener('focus', (ev: Event) => {
      ev.stopPropagation();
      el.classList.add('focused');
    }, false);
    input.addEventListener('blur', (ev: Event) => {
      ev.stopPropagation();
      el.classList.remove('focused');
      checkValue();
    }, false);

  },
}