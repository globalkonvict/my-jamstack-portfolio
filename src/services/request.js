import { extend } from 'umi-request';

export default extend({
  prefix: '/.netlify/functions',
  timeout: 3000,
  headers: {
    'Content-Type': 'aplication/json',
  },
});
