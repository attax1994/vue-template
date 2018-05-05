export interface ButtonGroupEntity {
  title: string;
  data?: any;
}

export class ButtonGroupOptions {
  items: Array<ButtonGroupEntity> = [];
  style: 'border' | 'underline' = 'border';
  asyncEvent: boolean = false;
}

export interface ButtonGroupOptionsInterface {
  items: Array<ButtonGroupEntity>;
  style?: 'border' | 'underline';
  asyncEvent?: boolean;
}