/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON(response) {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
export default function request(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        const e = new Error(response.json.message);
        e.status = response.status
        return reject(e);
      })
      .catch((error) => reject({
        networkError: error.message,
      }));
  });
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const fetchGet = (url, params = {}) => {
  const query = new URLSearchParams(params).toString();
  return request(`${url}?${query}`, {
    credentials: "include"
  });
}

export const fetchPost = (url, body, params = {}) => {
  const query = new URLSearchParams(params).toString();
  return request(`${url}?${query}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

// User API

export const UserAPI = {
  login: async ({ email, password }) => {
    return fetchPost(`${API_URL}/auth/local`, { identifier: email, password });
  },
  register: async ({ email, password }) => {
    return fetchPost(`${API_URL}/auth/local/register`, { email, username: email, password })
  },
  logout: async () => {
    return fetchPost(`${API_URL}/logout`);
  },
  getCurrentUser: async () => {
    return fetchGet(`${API_URL}/users/me`);
  }
}

// Pages API

export const getHomeData = async () => {
  return fetchGet(`${API_URL}/home`);
}

// Items API

export const getAllItems = async () => {
  return fetchGet(`${API_URL}/items`);
}

export const getAllCategories = async () => {
  return fetchGet(`${API_URL}/categories`);
}

// Orders API

export const fetchOrders = async () => {
  return fetchGet(`${API_URL}/orders`);
}

export const fetchOrder = async (id) => {
  return fetchGet(`${API_URL}/orders/${id}`);
}

export const initiateCheckout = async (cart) => {
  return fetchPost(`${API_URL}/orders/initiateCheckout`, { cart });
}

export const confirmPayment = async (paymentIntent) => {
  return fetchPost(`${API_URL}/orders/confirmPayment`, { paymentIntent });
}