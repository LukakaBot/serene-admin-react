import Bucket from "@/plugins/bucket/core/Bucket"

declare global {
  interface Window {
    $bucket?: Bucket;
    $message?: import('antd/es/message/interface').MessageInstance;
  }
}