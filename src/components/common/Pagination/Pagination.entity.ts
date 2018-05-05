export class PaginationConfigEntity {
  totalPage: number = 1;
  allowOuterControl: boolean = false;
  outerControlEventName: string = 'choose-page';
}


export interface PaginationConfigInterface {
  totalPage?: number;
  allowOuterControl?: boolean;
  outerControlEventName?: string;
}