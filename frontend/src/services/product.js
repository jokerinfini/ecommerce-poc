import axios from 'axios';

export const getProducts = async (token) => {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const createProduct = async (productData, token) => {
  return axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/products`,
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
};