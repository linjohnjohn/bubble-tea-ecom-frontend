import Head from "next/head";
import { useRouter } from "next/router";

import React, { useEffect, useState } from 'react'
import { API_URL } from "../utils/urls";

const useOrder = (session_id) => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`${API_URL}/orders/confirm/`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            checkout_session: session_id
          })
        });

        const data = await res.json();
        setOrder(data);

      } catch (error) {
        setOrder(null);
      }
    }

    fetchOrder();
    setIsLoading(false);

  }, [session_id]);

  return { order, isLoading };
}

const success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  const { order, isLoading } = useOrder(session_id);

  return (
    <div>
      <Head>
        <title>Thank you for your purchase</title>
      </Head>
      <h1>Success</h1>
      {isLoading && <p>Loading</p>}
      {order && <p>Your order is confirmed: {order.id}</p>}
    </div>
  )
}

export default success
