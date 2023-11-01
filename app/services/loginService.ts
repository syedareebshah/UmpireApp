import axios from 'axios';
import {apiClient} from './client';

import apiConfig from 'config/api';
export const loginService = async () => {
  return await apiClient.get(apiConfig.GET_USER_DATA);
};
