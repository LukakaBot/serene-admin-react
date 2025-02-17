import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import { requestInterceptor } from './core/interceptors';

const service = createAlova({
  baseURL: '/api',
  requestAdapter: adapterFetch(),
  beforeRequest: requestInterceptor,
})

export default service;