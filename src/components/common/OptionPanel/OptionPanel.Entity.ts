export interface OptionPanelItemInterface {
  id: string,
  title: string;
  link?: string;
  target?: '_blank' | '_self';
  content?: any;
  children?: Array<OptionPanelItemInterface>;
}

export class OptionPanelEntity {
  fontSize: string = '1rem';
  height: string = '48px';
  theme: 'light' | 'dark' = 'light';
}

export interface OptionPanelInterface {
  baseUrl?: string;
  fontSize?: string;
  height?: string;
  theme?: 'light' | 'dark';
}