import { createProdMockServer } from 'vite-plugin-mock/client';
import modules from './modules';


export function setupProdMockServer() {
  createProdMockServer([
    ...modules,
  ]);
}