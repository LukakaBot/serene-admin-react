import Bucket from './core/Bucket';

export default function setupBucket() {
  const storageType = import.meta.env.VITE_STORAGE_TYPE;
  window.$bucket = new Bucket(storageType);
}
