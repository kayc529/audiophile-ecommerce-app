import axios from 'axios';

const customFetch = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_BASE_URL_PROD
      : process.env.REACT_APP_BASE_URL_DEV,
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customFetch;
