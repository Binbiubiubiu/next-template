import request from '@/utils/request';

export const login = () => {
  return request.get('https://github.com/redux-saga/redux-saga');
};
