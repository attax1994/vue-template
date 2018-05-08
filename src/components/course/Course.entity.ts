export interface CourseCategoryInterface {
  id: string,
  title: string;
  link?: string;
  target?: '_blank' | '_self';
  content?: any;
  children?: Array<CourseCategoryInterface>;
}