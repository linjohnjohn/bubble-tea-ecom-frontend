import { useRouter } from "next/router"
import { useQuery } from "react-query";
import { CartTable } from "../../components/CartTable"
import Loader from "../../components/Loader";
import { fetchOrder } from "../../utils/api";

const order = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, isSuccess } = useQuery(['order', id], () => {
    if (id === undefined) {
      throw new Error("No order id provided")
    }
    return fetchOrder(id)
  });

  return (
    <div className="mt-8">
      {isLoading && <Loader></Loader>}
      {isError && <div>Sorry! We're unable to find this order</div>}
      {isSuccess && <CartTable isEditable={false} cart={data.order_items}></CartTable>}
    </div>
  )
}

export default order
