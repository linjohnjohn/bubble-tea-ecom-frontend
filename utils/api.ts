import { PaymentIntent } from '@stripe/stripe-js';
import { RequestOrderItem } from 'ts-defs/cart';
import {
  Category, Home, Item, Order, UsersPermissionsUser,
} from 'ts-defs/generated';

export class CustomError extends Error {
  status: number;
  details: any;
}

/**
 * Wrapper for fetch converting HTTP error to Javascript Errors
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
export default function request<T>(url, options): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (response) => {
        if (response.ok) {
          return resolve(response.json());
        }

        const error = await response.json();

        // @todo replace with real logging service
        console.error('Fetch Error: ', { url, options, error });
        // extract the error from the server's json
        const e = new CustomError(error.message);

        if (typeof error.message !== 'string') {
          e.details = error.message;
        }

        e.status = response.status;
        return reject(e);
      })
      .catch((error) => reject(new CustomError(error.message)));
  });
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const fetchGet = <T>(url: string, params = {}): Promise<T> => {
  const query = new URLSearchParams(params).toString();
  return request(`${url}?${query}`, {
    credentials: 'include',
  });
};

export const fetchPost = <T>(url: string, body?: any, params = {}): Promise<T> => {
  const query = new URLSearchParams(params).toString();
  return request(`${url}?${query}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
};

// User API
export const UserAPI = {
  login: async ({ email, password }: { email: string, password: string }) => (
    fetchPost<{ user: UsersPermissionsUser }>(`${API_URL}/auth/local`, { identifier: email, password })
  ),
  register: async ({ email, password }: {
    email: string, password: string
  }) => {
    return fetchPost(`${API_URL}/auth/local/register`, { email, username: email, password });
  },
  logout: async () => {
    return fetchPost(`${API_URL}/logout`);
  },
  forgotPassword: async (email) => {
    return fetchPost(`${API_URL}/auth/forgot-password`, { email });
  },
  resetPassword: async ({ password, code, passwordConfirmation }:
  { password: string, code: string, passwordConfirmation: string }) => {
    return fetchPost(`${API_URL}/auth/reset-password`, { password, passwordConfirmation, code });
  },
  getCurrentUser: async () => {
    return fetchGet<UsersPermissionsUser>(`${API_URL}/users/me`);
  },
};

// Pages API

export const getHomeData = async () => {
  return fetchGet<Home>(`${API_URL}/home`);
};

// Items API

export const getAllItems = async () => {
  return fetchGet<Item[]>(`${API_URL}/items`);
};

export const getAllCategories = async () => {
  return fetchGet<Category[]>(`${API_URL}/categories`);
};

// Orders API

export const fetchOrders = async () => {
  return fetchGet<Order[]>(`${API_URL}/orders`);
};

export const fetchOrder = async (id) => {
  return fetchGet<Order>(`${API_URL}/orders/${id}`);
};

interface InitiateCheckoutReturnType {
  order: Order,
  paymentIntent: PaymentIntent
}

export const initiateCheckout = async (cart: RequestOrderItem[]) => {
  return fetchPost<InitiateCheckoutReturnType>(`${API_URL}/orders/initiateCheckout`, { cart });
};

export const confirmPayment = async (paymentIntent) => {
  return fetchPost<Order>(`${API_URL}/orders/confirmPayment`, { paymentIntent });
};
