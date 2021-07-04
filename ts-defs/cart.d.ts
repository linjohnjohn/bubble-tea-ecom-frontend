import { OrderItem } from './generated';

export type HasPrice = {
  price: number
} & {
  [key: string]: any
};

export type HasMarkup = {
  markup: number
} & {
  [key: string]: any
};

export type LocalOrderItem = Omit<OrderItem, 'created_at' | 'id' | 'updated_at'> & {
  [key: string]: any
};

export interface RequestOrderItem extends LocalOrderItem {
  item: string,
  toppings: string[],
  variant: string,
}
