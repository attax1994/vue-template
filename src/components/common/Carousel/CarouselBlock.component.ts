import {Component, Prop, Vue} from 'vue-property-decorator';
import {CarouselOptionsInterface, DefaultCarouselOptionsEntity} from "./Carousel.entity";

@Component({
  name: 'Carousel',
  computed: {
    realOptions() {
      return Object.assign(new DefaultCarouselOptionsEntity(), this.options);
    },
  },
})
export default class Carousel extends Vue {
  // Configuration
  @Prop({required: true, default: null}) options: CarouselOptionsInterface;
  public realOptions: CarouselOptionsInterface;

  // Page Status
  public imageList: Array<string> = Array(3).fill('');
  public currentIndex: number = 0;
  public width: number = 1000;
  public height: number = 1000;

  // Controls
  private _isAnimating: boolean = false;
  private _isDragging: boolean = false;

  // Timers
  private _swipeTimer: any = null;
  private _inViewThrottler: any = null;

  // Recorders
  private _container: HTMLElement | null;
  private _pagination: HTMLElement | null;
  private _initialPoint: { x: number, y: number };
  private _movement: { x: number, y: number };

  // Listeners
  private _initCarouselListener: EventListener;
  private _checkInViewListener: EventListener;

  /*****************
   * Life Cycles
   *****************/
  constructor() {
    super();
  }

  created() {
    // 初始状态
    const source = this.realOptions.src;
    this.imageList = [source[source.length - 1], source[0], source[1] || source[0]];
  }

  mounted() {
    this._container = <HTMLElement>document.querySelector('#carousel-block-image-container');
    this._pagination = <HTMLElement>document.querySelector('#carousel-block-pagination');
    this._initialPoint = {x: 0, y: 0};
    this._movement = {x: 0, y: 0};

    this._initCarouselListener = () => this._initCarousel(this.realOptions);
    this._initCarousel(this.realOptions);
    window.addEventListener('resize', this._initCarouselListener, false);
    this._checkInViewListener = () => this._checkInView();
    this._checkInView();
    window.addEventListener('scroll', this._checkInViewListener, false);
  }

  beforeDestroy() {
    this._stopTimer();
    window.removeEventListener('resize', this._initCarouselListener, false);
    window.removeEventListener('scroll', this._checkInViewListener, false);
  }

  /*****************
   * Basic
   *****************/
  private _initCarousel(options: CarouselOptionsInterface) {
    const wrapper = document.querySelector('#carousel-block-wrapper');
    this.width = wrapper.clientWidth;
    this.height = wrapper.clientHeight;

    requestAnimationFrame(() => {
      this._container.style.width = `${this.width * 3}px`;
      this._container.style.transform = `translate(-${this.width}px, 0)`;
      this._updatePagination(this.currentIndex)._stopTimer()._startTimer();
    });

    return this;
  }

  private _checkInView() {
    this._inViewThrottler = this._inViewThrottler || setTimeout(() => {
      const info = this._container.getBoundingClientRect();
      if (info.top > document.documentElement.clientHeight || info.bottom < 0) {
        this._stopTimer();
      } else {
        this._startTimer();
      }
      this._inViewThrottler = null;
    }, 500);
  }

  private _stopTimer() {
    if (this._swipeTimer) {
      clearTimeout(this._swipeTimer);
      this._swipeTimer = null;
    }
    return this;
  }

  private _startTimer() {
    const delayMS = this.realOptions.delayMS;
    if (!delayMS) return this;

    this._swipeTimer = this._swipeTimer || setTimeout(() => {
      this.switchPage(this.currentIndex + 1);
    }, delayMS);
    return this;
  }


  /*****************
   * Page Switch
   *****************/
  public async switchPage(index: number) {
    // 不可响应状态下直接返回
    if (this._isAnimating || this.currentIndex === index) return;

    this._pause();

    if (this.currentIndex < index) {
      // 达到最右侧，使用第一张
      if (index >= this.realOptions.src.length) {
        index = 0;
      }
      await this._swipeRight(index);
    } else {
      // 达到最左侧，使用最后一张
      if (!~index) {
        index = this.realOptions.src.length - 1;
      }
      await this._swipeLeft(index);
    }
    return this._executeTransition(this.currentIndex = index);
  }

  private async _swipeRight(index: number) {
    const origin = this.realOptions.src;

    await this._requestAnimationFrame(() => {
      this._toggleSwitching(true);
      this.imageList = [this.imageList[0], this.imageList[1], origin[index]];
      this._container.style.transform = `translate(-${this.width * 2}px, 0)`;
    });

    await this._delay(300);
    this.imageList = [origin[index - 1] || origin[origin.length - 1], origin[index], origin[index]];

    return this;
  }

  private async _swipeLeft(index: number) {
    const origin = this.realOptions.src;

    await this._requestAnimationFrame(() => {
      this._toggleSwitching(true);
      this.imageList = [origin[index], this.imageList[1], this.imageList[2]];
      this._container.style.transform = `translate(0, 0)`;
    });

    await this._delay(300);
    this.imageList = [origin[index], origin[index], origin[index + 1] || origin[0]];

    return this;
  }

  private async _swipeBack() {
    await this._requestAnimationFrame(() => {
      this._toggleSwitching(true);
      this._container.style.transform = `translate(-${this.width}px, 0)`;
    });

    await this._delay(300);
    this._toggleSwitching(false)._startTimer();

    return this;
  }

  private async _executeTransition(index: number) {
    const origin = this.realOptions.src;

    await this._delay(50);
    await this._requestAnimationFrame(() => {
      this._toggleSwitching(false); // 去掉transition，
      this._container.style.transform = `translate(-${this.width}px, 0)`; // 恢复中间位置
    });

    await this._delay(50);
    await this._requestAnimationFrame(() => {
      this.imageList = [origin[index - 1] || origin[origin.length - 1], origin[index], origin[index + 1] || origin[0]];  // 恢复图片列表
      this._isAnimating = false;    // 恢复可响应状态
      this._updatePagination(index) // 更新pagination
        ._startTimer();             // 开始自动播放
    });

    return this;
  }

  private _pause() {
    this._stopTimer();                // 取消自动播放
    this._isAnimating = true;         // 不响应状态
    return this;
  }

  private _updatePagination(index: number) {
    const previous = this._pagination.querySelector('.selected');
    if (previous) {
      requestAnimationFrame(() => {
        previous.classList.remove('selected');
        this._pagination.children[index].classList.add('selected');
      });
    } else {
      requestAnimationFrame(() => {
        this._pagination.children[index].classList.add('selected');
      })
    }
    return this;
  }

  private _delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  private _requestAnimationFrame(fn: Function) {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        fn();
        resolve();
      })
    });
  }

  private _toggleSwitching(status: boolean) {
    this._container.classList.toggle('switching', status);
    return this;
  }


  /*****************
   * Event Handlers
   *****************/
  public pointerDownHandler(ev: PointerEvent) {
    if (this._isAnimating) return;

    this._stopTimer();
    this._isDragging = true;
    this._initialPoint.x = ev.clientX;
  }

  public touchStartHandler(ev: TouchEvent) {
    if (this._isAnimating) return;

    this._stopTimer();
    this._isDragging = true;
    this._initialPoint.x = ev.touches[0].clientX;
  }

  public pointerMoveHandler(ev: PointerEvent) {
    if (!this._isDragging) return;

    this._movement.x = ev.clientX - this._initialPoint.x;
    this._container.style.transform = `translate(-${this.width - this._movement.x}px, 0)`;
  }

  public touchMoveHandler(ev: TouchEvent) {
    if (!this._isDragging) return;

    this._movement.x = ev.touches[0].clientX - this._initialPoint.x;
    this._container.style.transform = `translate(-${this.width - this._movement.x}px, 0)`;
  }

  public pointerUpHandler() {
    if (!this._isDragging) return;
    this._isDragging = false;

    const limit = this.width / 5,
      movementX = this._movement.x;
    if (Math.abs(movementX) > limit) {
      if (movementX < 0) {
        this.switchPage(this.currentIndex + 1);
      } else {
        this.switchPage(this.currentIndex - 1);
      }
    } else {
      this._swipeBack();
    }
  }

  public touchEndHandler() {
    if (!this._isDragging) return;
    this._isDragging = false;

    const limit = this.width / 5,
      movementX = this._movement.x;
    if (Math.abs(movementX) > limit) {
      if (movementX < 0) {
        this.switchPage(this.currentIndex + 1);
      } else {
        this.switchPage(this.currentIndex - 1);
      }
    } else {
      this._swipeBack();
    }
  }

}