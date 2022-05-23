import { extend } from 'umi-request';

const request = extend({
  prefix: '/.netlify/functions',
  timeout: 3000,
  headers: {
    'Content-Type': 'aplication/json',
  },
});

export default request;
