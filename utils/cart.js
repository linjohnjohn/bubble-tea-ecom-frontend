export const calculatePriceWithModifiers = (item, variant, toppings, quantity = 1) => {
  let price = item.price;

  if (variant) {
    price += variant.markup;
  }

  if (toppings) {
    toppings.forEach(t => {
      price += t.markup;
    });
  }

  return price * quantity;
}

export const getItemCount = (cart) => {
  return cart.reduce((count, orderItem) => {
    count += parseInt(orderItem.quantity);
    return count;
  }, 0);
}

export const getTotalPrice = (cart) => {
  return cart.reduce((price, { unitPrice, quantity }) => {
    price += parseFloat(unitPrice * quantity);
    return price;
  }, 0)
}

export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
}