import { useContext, useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import Link from 'next/link';
import {
  Elements, CardElement, useStripe, useElements, CardElementComponent,
} from '@stripe/react-stripe-js';
import { loadStripe, PaymentIntent, StripeError } from '@stripe/stripe-js';

import CartContext, { actions } from 'context/CartContext';
import { STRIPE_PK } from 'utils/urls';
import { confirmPayment, initiateCheckout } from 'utils/api';
import { formatPrice } from 'utils/cart';

import Loader from './Loader';

const stripePromise = loadStripe(STRIPE_PK);

const stripeOptions = {
  style: {
    base: {
      color: 'red',
      fontSize: '15px',
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#CFD7DF',
      },
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238',
      },
    },
  },
};

const CheckoutForm = ({ setOrderCart }) => {
  const { cart, dispatch } = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState(null);
  const [total, setTotal] = useState(0);
  const [isErrorInit, setIsErrorInit] = useState(false);

  useEffect(() => {
    (async () => {
      const formattedCart = cart.map(({
        item, toppings, variant, quantity,
      }) => ({
        item: item.id,
        toppings: toppings?.map((t) => t.id),
        variant: variant?.id,
        quantity,
      }));
      try {
        const { paymentIntent, order } = await initiateCheckout(formattedCart);
        const { client_secret: cs, amount } = paymentIntent;

        setClientSecret(cs);
        setTotal(amount);
        setOrderCart(order.order_items);
      } catch (e) {
        setIsErrorInit(true);
      }
    })();
  }, []);

  const stripe = useStripe();
  const elements = useElements();

  const stripeMutation = useMutation<PaymentIntent, Error & StripeError, CardElementComponent>(
    async (CardEl) => {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardEl),
        },
      });

      if (result.error) {
        const newErr = Object.assign(
          new Error(result.error.message),
          result.error,
        );
        throw newErr;
        // throw new Error(result.error.message);
      } else {
        return result.paymentIntent;
      }
    },
  );

  const confirmMutation = useMutation(confirmPayment, {
    onSuccess: () => {
      dispatch(actions.clearCart());
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let paymentIntent;

    try {
      paymentIntent = await stripeMutation.mutateAsync(CardElement);
      confirmMutation.mutate(paymentIntent);
    } catch (error) {
      console.error(error);
    }
  };

  if (!clientSecret) {
    return <Loader />;
  } else if (isErrorInit) {
    return <div>{'We\'re unable to process you\'re checkout right now.'}</div>;
  }

  if (confirmMutation.isSuccess) {
    return (
      <div className="stack-l">
        <p>
          {'Thank you for your purchase. You can view your orders on your '}
          <Link href="/account">
            <a className="link">
              accounts page
            </a>
          </Link>
        </p>

      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="stack-l">
      <div className="px-2 py-4 border rounded-md">
        <CardElement options={stripeOptions} />
      </div>
      {stripeMutation.isLoading ? <button type="button" className="btn btn-green w-full" disabled>Processing Payment...</button>
        : (
          <button type="submit" className="btn btn-green w-full" disabled={!stripe}>
            {`Purchase for ${formatPrice(total / 100)}`}
          </button>
        )}
      {stripeMutation.isError && <p className="text-red-500">{stripeMutation.error.message}</p>}
      <p>
        {'This site is for demonstrational and educational purpose and uses Stripe\'s testing environment for payment processing, and so you can checkout with any of '}
        <a className="link" href="https://stripe.com/docs/testing#cards" target="_blank" rel="noreferrer">{'Stripe\'s test cards'}</a>
      </p>
    </form>
  );
};

export const Checkout = ({ setOrderCart }) => (
  <div>
    <Elements stripe={stripePromise}>
      <CheckoutForm setOrderCart={setOrderCart} />
    </Elements>
  </div>
);
