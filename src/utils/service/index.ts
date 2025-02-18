import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import interceptorManager from './core/interceptorManager';

const service = createAlova({
  baseURL: '/api',
  requestAdapter: adapterFetch(),
  beforeRequest: interceptorManager.beforeRequest,
  responded: {
    onSuccess: interceptorManager.responded.onSuccess,
    onError: interceptorManager.responded.onError,
    onComplete: () => { }
  }
})

export default service;