import axios, {AxiosInstance} from 'axios';
import apiConfig from 'config/api';
import {store} from 'store';
import {logout} from 'store/slice/userSlice';

const apiClient: AxiosInstance = axios.create({
  responseType: 'json',
  baseURL: apiConfig.BASE_URL,
  validateStatus: function () {
    return true; // default
  },
});

apiClient.interceptors.request.use(async function (config) {
  // const token = (await AsyncStorage.getItem('token')) || ''; //|| '';

  // config.headers = {
  //   'Content-Type': 'application/json',
  // };
  console.log(
    'config',
    config.url,
    config.method == 'post' ? config.data : config.params,
    config.headers,
  );

  return config;
});

apiClient.interceptors.response.use(
  function (response) {
    if (
      response?.data?.error?.status == 401 ||
      response?.data?.error?.name == 'UnauthorizedError'
    ) {
      store.dispatch(logout());
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export {apiClient};
