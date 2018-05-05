import {VNodeDirective} from "vue/types/vnode";
import Vue from 'vue';

function generateIndicator(el: HTMLElement) {
  const indicator: HTMLElement = document.createElement('div');
  indicator.classList.add('input-indicator');
  el.appendChild(indicator);
}

function checkRestValue(el: HTMLElement, maxLength: number) {
  const input: HTMLInputElement = el.querySelector('.input'),
    indicator: HTMLElement = el.querySelector('.input-indicator'),
    currentLength = input.value.length;
  indicator.textContent = (maxLength - currentLength).toString();
}

export default {
  inserted(el: HTMLElement, binding: VNodeDirective) {
    const maxLength: number = Number(binding.value);
    if (maxLength) {
      generateIndicator(el);
      // check in next frame after rendering
      Vue.nextTick(() => {
        checkRestValue(el, maxLength);
      });
    }
  },
  componentUpdated(el: HTMLElement, binding: VNodeDirective) {
    const maxLength: number = Number(binding.value);
    if (maxLength) {
      checkRestValue(el, maxLength);
    }
  }
}