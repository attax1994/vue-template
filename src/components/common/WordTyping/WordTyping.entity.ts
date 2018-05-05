export class WordTypingItemInterface {
  text: string;
  link?: string;
}

export class WordTypingOptions {
  delay: number = 150;
  endDelay: number = 2000;
  theme: 'light' | 'dark' = 'dark';
  fontSize: string = '2.5rem';
  preText: string = '';
  items: Array<WordTypingItemInterface> = [];
}

export interface WordTypingOptionsInterface {
  delay?: number;
  endDelay?: number;
  theme?: 'light' | 'dark';
  fontSize?: string;
  preText?: string;
  items: Array<WordTypingItemInterface>;
}