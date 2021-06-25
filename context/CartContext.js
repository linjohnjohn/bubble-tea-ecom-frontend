import { useReducer } from 'react';
import { createContext, useEffect } from 'react';
import { getItemCount, getTotalPrice } from '../utils/cart';

const initialState = {
    cart: []
};

export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART',
    CHANGE_QUANTITY: 'CHANGE_QUANTITY',
    SET_STATE: 'SET_STATE'
}

export const actions = {
    addItem: (orderItem) => ({ type: actionTypes.ADD_ITEM, orderItem }),
    removeItem: (index) => ({ type: actionTypes.REMOVE_ITEM, index }),
    clearCart: () => ({ type: actionTypes.CLEAR_CART }),
    changeQuantity: (index, quantity) => ({ type: actionTypes.CHANGE_QUANTITY, index, quantity }),
    setState: (state) => ({ type: actionTypes.SET_STATE, state }),
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const { orderItem } = action;
            return {
                ...state,
                cart: [...state.cart, orderItem]
            };
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter((_, i) => i !== action.index)
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case actionTypes.CHANGE_QUANTITY:
            if (action.quantity <= 0) {
                return {
                    ...state,
                    cart: state.cart.filter((_, i) => i !== action.index)
                }
            } else {
                const newCart = [...state.cart];
                const newOrderItem = {
                    ...state.cart[action.index],
                    quantity: action.quantity
                };

                newCart[action.index] = newOrderItem;

                return {
                    ...state,
                    cart: newCart
                }
            }
        case actionTypes.SET_STATE:
            return action.state;
        default:
            throw new Error();
    }
}

const CartContext = createContext();

export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    useEffect(() => {
        let localCart;
        try {
            localCart = JSON.parse(localStorage.getItem('cart'));
        } catch (error) { }

        if (localCart) {
            dispatch(actions.setState(localCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);

    const { cart } = state;

    // @todo refactor totalCount
    const itemCount = getItemCount(cart);

    // @todo refactor totalPrice
    const totalPrice = getTotalPrice(cart);

    return <CartContext.Provider value={{ cart, itemCount, totalPrice, dispatch }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext