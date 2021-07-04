import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Order, OrderItem } from 'ts-defs/generated';
import { CartTable } from '../../components/CartTable';
import Loader from '../../components/Loader';
import { fetchOrder } from '../../utils/api';

const order = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data, isLoading, isError, isSuccess,
  } = useQuery<Order, any>(['order', id], () => {
    if (id === undefined) {
      throw new Error('No order id provided');
    }
    return fetchOrder(id);
  });

  return (
    <div className="mt-8">
      {isLoading && <Loader />}
      {isError && <div>{'Sorry! We\'re unable to find this order'}</div>}
      {isSuccess && <CartTable isEditable={false} cart={data?.order_items as OrderItem[]} />}
    </div>
  );
};

export default order;
