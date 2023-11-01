import * as types from './types';

import {createAction} from '@reduxjs/toolkit';

export const requestLogin = createAction(
  types.LOGIN_REQUEST,
  function prepare(data) {
    return {
      payload: data,
    };
  },
);
