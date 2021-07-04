import { HasMarkup, HasPrice, LocalOrderItem } from 'ts-defs/cart';

export const calculatePriceWithModifiers = (
  item: HasPrice, variant: HasMarkup, toppings: HasMarkup[], quantity = 1,
) => {
  let { price } = item;

  if (variant) {
    price += variant.markup;
  }

  if (toppings) {
    toppings.forEach((t) => {
      price += t.markup;
    });
  }

  return price * quantity;
};

export const getItemCount = (cart: LocalOrderItem[]) => cart
  .reduce((count, orderItem) => count + orderItem.quantity, 0);

export const getTotalPrice = (cart: LocalOrderItem[]) => cart
  .reduce((price, { unitPrice, quantity }) => price + unitPrice * quantity, 0);

export const formatPrice = (price: number | string) => {
  if (typeof price === 'string') {
    return `$${parseFloat(price).toFixed(2)}`;
  }
  return `$${price.toFixed(2)}`;
};
