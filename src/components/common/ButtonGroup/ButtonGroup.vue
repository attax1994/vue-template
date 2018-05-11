<template>
  <div class="button-group-wrapper" :class="[realOptions.style]">
    <div class="button-group-list">
      <div class="button-group-item" v-for="(item) in realOptions.items" :key="item.title">
        <span @click.prevent.self.stop="chooseTitle($event, item)">{{item.title}}</span>
      </div>
    </div>

    <div class="indicator"></div>
  </div>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {ButtonGroupEntity, ButtonGroupOptions, ButtonGroupOptionsInterface} from './ButtonGroup.entity'
  import EventsService from '@/persistence/service/Events.Service'
  import {Provided} from '../../../persistence/injection/ModuleManager'

  @Component({
    name: 'ButtonGroup',
    computed: {
      realOptions(): ButtonGroupOptionsInterface {
        this.$nextTick(() => {
          this._chooseByIndex(0)
        })
        return Object.assign(new ButtonGroupOptions(), this.options)
      },
    },
  })
  export default class ButtonGroup extends Vue {
    @Prop({required: true, type: Object}) options: ButtonGroupOptionsInterface
    private _indicator: HTMLElement | null

    @Provided(EventsService) private _eventsService: EventsService

    constructor() {
      super()
    }

    mounted() {
      this._indicator = document.querySelector('.button-group-wrapper .indicator') as HTMLElement

      if (this.options.asyncEvent) {
        this._eventsService.on('button-group', (index: number) => {
          setTimeout(() => {
            this._chooseByIndex(index)
          }, 100)
        })
      } else {
        this._chooseByIndex(0)
      }
    }

    public chooseTitle(event: MouseEvent, item: ButtonGroupEntity) {
      const current = (<Node>event.target).parentNode as HTMLElement
      this._chooseItem(current, item)
    }

    private _chooseByIndex(index: number) {
      const current = document.querySelectorAll('.button-group-wrapper>.button-group-list>.button-group-item')[index] as HTMLElement
      this._chooseItem(current, this.options.items[index])
      return this
    }

    private _chooseItem(current: HTMLElement, data: ButtonGroupEntity) {
      const previous = document.querySelector('.button-group-wrapper>.button-group-list>.button-group-item.selected')

      if (previous) {
        if (current.textContent === previous.textContent) return
        previous.classList.remove('selected')
      }

      current.classList.add('selected')

      if (this.options.style === 'underline') {
        requestAnimationFrame(() => {
          const left = current.offsetLeft,
            width = current.clientWidth,
            s = this._indicator.style
          s.transform = `translate(${left}px, 0)`
          s.width = `${width}px`
        })
      }

      this.$emit('choose', data)
      return this
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";

  .button-group-wrapper {
    position: relative;
    .button-group-list {
      .button-group-item {
        display: inline-block;
        margin: 0 .5rem;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        cursor: pointer;
        border: 1px solid transparent;
        transition: color .3s ease, border .3s ease;
        span {
          display: inline-block;
          padding: .5rem 1rem;
          font-weight: 400;
          user-select: none;
        }
        &.selected {
          color: $primary;
        }
      }
    }
  }

  .border {
    .button-group-item {
      &.selected {
        border-color: $primary;
      }
    }
  }

  .underline {
    .indicator {
      position: relative;
      width: 0;
      height: 2px;
      background: $primary;
      transform: translate(0, 0);
      transition: transform .3s ease;
    }
  }

</style>