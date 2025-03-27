import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import interceptorManager from "./core/interceptorManager";

const { VITE_SERVICE_URL, VITE_SERVICE_PORT, VITE_SERVICE_PREFIX } = import.meta
  .env;

const SERVICE_PORT = `${VITE_SERVICE_PORT ? `:${VITE_SERVICE_PORT}` : ""}`;

const BASE_URL = `${VITE_SERVICE_URL}${SERVICE_PORT}${VITE_SERVICE_PREFIX}`;

const service = createAlova({
  baseURL: BASE_URL,
  timeout: 1000 * 8,
  requestAdapter: adapterFetch(),
  beforeRequest: interceptorManager.beforeRequest,
  responded: interceptorManager.responded,
});

export default service;
