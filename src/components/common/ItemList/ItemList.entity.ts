export interface ItemListEntityInterface {
  title: string;
  content: string;
  imageUrl: string;
  link: string;
  starCount?: number;
  purchaseCount?: number;
}

export interface ItemListOptionsInterface {
  collapsed?: boolean;
  items: Array<ItemListEntityInterface>;
}

export class ItemListOptionsEntity {
  collapsed: boolean = false;
  items: Array<ItemListEntityInterface> = [];
}