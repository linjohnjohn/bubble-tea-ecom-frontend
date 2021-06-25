import Image from 'next/image';
import { IoIosAdd, IoIosRemove } from 'react-icons/io'

import { formatPrice, getItemCount, getTotalPrice } from "../utils/cart";
import { fromImageToUrl } from "../utils/urls";

export const CartTable = ({ cart, itemCount, totalPrice, handleUpdateQuantity, isEditable = true }) => {
  if (!totalPrice) {
    totalPrice = getTotalPrice(cart);
  }

  if (!itemCount) {
    itemCount = getItemCount(cart);
  }

  return (
    <div className="stack-l shadow-lg rounded-md p-4">
      <div className="flex w-full justify-items-center">
        <div className="w-1/6"></div>
        <div className="w-3/6">Item</div>
        <div className="w-1/6">Quantity</div>
        <div className="w-1/6">Price</div>
      </div>

      {cart.map((orderItem, i) => {
        const {
          quantity,
          item,
          toppings,
          variant,
          unitPrice,
        } = orderItem;

        const { name, image } = item || {};

        return <div className="flex items-center w-full">
          <div className="w-1/6">
            <div className="frame-l" style={{ "--n": 1, "--d": 1 }}>
              <Image src={fromImageToUrl(image)} alt={image?.alternativeText} layout="fill" sizes="17vw" objectFit="cover" />
            </div>
          </div>
          <div className="w-3/6 flex flex-col">
            <span>{name}</span>
            {variant && <span className="text-gray-600 text-sm">{variant.name}</span>}
            {toppings && toppings.map(t => {
              return <span key={t.id} className="text-gray-600 text-sm">{t.name}</span>
            })}
          </div>
          <div className="w-1/6 flex items-center">
            {isEditable && <button className="mr-3 btn-square-sm btn-red" onClick={() => {
              handleUpdateQuantity(i, quantity - 1)
            }}><IoIosRemove className="icon-sm text-white" /></button>}
            <span>{quantity}</span>
            {isEditable && <button className="ml-3 btn-square-sm btn-green" onClick={() => {
              handleUpdateQuantity(i, quantity + 1)
            }}><IoIosAdd className="icon-sm text-white" /></button>}
          </div>
          <div className="w-1/6">{formatPrice(unitPrice * quantity)}</div>
        </div>
      })}

      <div className="flex w-full font-bold">
        <div className="w-1/6"></div>
        <div className="w-3/6">Total</div>
        <div className="w-1/6">{itemCount}</div>
        <div className="w-1/6">{formatPrice(totalPrice)}</div>
      </div>
    </div>
  )
}