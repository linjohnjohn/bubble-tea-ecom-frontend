import Link from "next/link";
import { useContext, useState } from "react"

import { CartTable } from "../components/CartTable";
import { Checkout } from "../components/Checkout";
import AuthContext from "../context/AuthContext";
import CartContext, { actions } from "../context/CartContext"
import { getItemCount, getTotalPrice } from "../utils/cart";

const cart = () => {
  const { user } = useContext(AuthContext);
  const { cart, itemCount, totalPrice, dispatch } = useContext(CartContext);
  const [orderCart, setOrderCart] = useState(cart);
  const [isCheckout, setIsCheckout] = useState(false)

  const handleUpdateQuantity = (index, quantity) => {
    dispatch(actions.changeQuantity(index, quantity))
  }

  if (!isCheckout) {
    return (
      <div className="stack-l mt-8" style={{ "--space": "var(--s2)" }}>
        <CartTable cart={cart} itemCount={itemCount} totalPrice={totalPrice} handleUpdateQuantity={handleUpdateQuantity} />
        {user ?
          <button disabled={itemCount === 0} className="w-full text-center btn btn-brown" onClick={() => setIsCheckout(true)}>
            Proceed to Checkout
          </button> :
          <Link href="/login">
            <a className="w-full text-center btn btn-brown">
              Login to Checkout
            </a>
          </Link>
        }
      </div>
    )
  } else {
    const itemCount = getItemCount(orderCart);
    const totalPrice = getTotalPrice(orderCart);

    return (
      <div className="sidebar-l-right mt-8" style={{ "--sideWidth": "300px", "--contentMin": "60%" }}>
        <CartTable cart={orderCart} itemCount={itemCount} totalPrice={totalPrice} isEditable={false} />
        <Checkout setOrderCart={setOrderCart}></Checkout>
      </div>
    )
  }
}

export default cart
