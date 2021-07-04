import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { LocalOrderItem } from 'ts-defs/cart';

import { CartTable } from '../components/CartTable';
import { Checkout } from '../components/Checkout';
import AuthContext from '../context/AuthContext';
import CartContext, { actions } from '../context/CartContext';

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const { cart, itemCount, dispatch } = useContext(CartContext);
  const [orderCart, setOrderCart] = useState<LocalOrderItem[]>(cart);
  const [isCheckout, setIsCheckout] = useState(false);

  const handleUpdateQuantity = (index, quantity) => {
    dispatch(actions.changeQuantity(index, quantity));
  };

  if (!isCheckout) {
    return (
      <div className="stack-l mt-8" style={{ '--space': 'var(--s2)' } as React.CSSProperties}>
        <CartTable
          cart={cart}
          handleUpdateQuantity={handleUpdateQuantity}
          isEditable
        />
        {user
          ? (
            <button type="button" disabled={itemCount === 0} className="w-full text-center btn btn-brown" onClick={() => setIsCheckout(true)}>
              Proceed to Checkout
            </button>
          )
          : (
            <Link href={`/login?next=${encodeURIComponent('/cart')}`}>
              <a className="w-full text-center btn btn-brown">
                Login to Checkout
              </a>
            </Link>
          )}
      </div>
    );
  } else {
    return (
      <div className="sidebar-l-right mt-8" style={{ '--sideWidth': '300px', '--contentMin': '60%' } as React.CSSProperties}>
        <CartTable cart={orderCart} isEditable={false} />
        <Checkout setOrderCart={setOrderCart} />
      </div>
    );
  }
};

export default CartPage;
