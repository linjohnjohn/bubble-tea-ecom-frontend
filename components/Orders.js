import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { fetchOrders } from '../utils/api';
import { formatPrice, getItemCount } from '../utils/cart';
import { fromImageToUrl } from '../utils/urls';
import Loader from './Loader';


export const Orders = () => {
  const { isLoading, isError, data: orders, error } = useQuery('orders', fetchOrders);

  if (isLoading) {
    return <Loader />
  } else if (isError) {
    return <div>Sorry we couldn't find your orders</div>
  }

  return (
    <div className="stack-l">
      {orders.map(({ id, order_items, total, created_at }) => {
        const itemCount = getItemCount(order_items)
        return <article key={id} className="rounded-md shadow-md p-2 sm:p-4">
          <div className="flex items-start">
            <div className="px-2 stack-l" style={{ "--space": "var(--s-3)" }}>
              <p>Order Placed</p>
              <p>{new Date(created_at).toLocaleDateString('en-EN')}</p>
            </div>

            <div className="px-2 stack-l" style={{ "--space": "var(--s-3)" }}>
              <p>Total Items</p>
              <p>{itemCount}</p>
            </div>

            <div className="px-2 stack-l" style={{ "--space": "var(--s-3)" }}>
              <p>Price</p>
              <p>{formatPrice(total)}</p>
            </div>
            <Link href={`/orders/${id}`}>
              <a className="ml-auto btn btn-brown">
                Order Details
              </a>
            </Link>
          </div>

          <ul className="py-4 flex">
            {order_items.map(({ item }) => {
              return <li className="w-12">
                <div className="frame-l" style={{ "--n": 1, "--d": 1 }}>
                  <Image className="rounded-full" src={fromImageToUrl(item.image)} layout="fill" sizes="3rem" objectFit="cover" />
                </div>
              </li>
            })}
          </ul>
        </article>
      })}
    </div>
  )
}

