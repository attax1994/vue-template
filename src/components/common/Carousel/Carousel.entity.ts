export class DefaultCarouselOptionsEntity {
  src: Array<string> = [];
  delayMS = 500;
  click = {
    stopOnClick: false,
  };

}

export interface CarouselOptionsInterface {
  src: Array<string>; // 所有src以assets文件夹定位为准
  delayMS?: number;
  click?: {
    stopOnClick?: boolean
  };
}

