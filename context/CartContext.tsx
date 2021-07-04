import {
  Dispatch, useReducer, createContext, useEffect,
} from 'react';
import { LocalOrderItem } from 'ts-defs/cart';

import { getItemCount, getTotalPrice } from '../utils/cart';

interface CartReducerState {
  cart: LocalOrderItem[]
}

const initialState: CartReducerState = {
  cart: [],
};

export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
  SET_STATE: 'SET_STATE',
};

export const actions = {
  addItem: (orderItem: LocalOrderItem) => ({ type: actionTypes.ADD_ITEM, orderItem }),
  removeItem: (index: number) => ({ type: actionTypes.REMOVE_ITEM, index }),
  clearCart: () => ({ type: actionTypes.CLEAR_CART }),
  changeQuantity: (index: number, quantity: number) => (
    { type: actionTypes.CHANGE_QUANTITY, index, quantity }
  ),
  setState: (state: CartReducerState) => ({ type: actionTypes.SET_STATE, state }),
};

const CartReducer = (state: CartReducerState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.orderItem],
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.index),
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case actionTypes.CHANGE_QUANTITY:
      if (action.index >= state.cart.length || action.index < 0) {
        console.error('change quantity index out of bounds');
        return state;
      }

      if (action.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter((_, i) => i !== action.index),
        };
      } else {
        const newCart = [...state.cart];
        const newOrderItem = {
          ...state.cart[action.index],
          quantity: action.quantity,
        };

        newCart[action.index] = newOrderItem;

        return {
          ...state,
          cart: newCart,
        };
      }
    case actionTypes.SET_STATE:
      return action.state;
    default:
      throw new Error();
  }
};

interface ICartContext {
  cart: LocalOrderItem[],
  itemCount: number,
  totalPrice: number,
  dispatch?: Dispatch<any>
}

const CartContext = createContext<ICartContext>({
  cart: [],
  itemCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    let localCart;
    try {
      localCart = JSON.parse(localStorage.getItem('cart') || '');
    } catch (error) {
      console.warn('Invalid saved cart');
    }

    if (localCart) {
      dispatch(actions.setState(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const { cart } = state;
  const itemCount = getItemCount(cart);
  const totalPrice = getTotalPrice(cart);

  return (
    <CartContext.Provider value={{
      cart, itemCount, totalPrice, dispatch,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
