import axios from 'axios';

export const register = async (email, password, role) => {
  return axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, {
    email,
    password,
    role,
  });
};

export const login = async (email, password) => {
  return axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/login`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

