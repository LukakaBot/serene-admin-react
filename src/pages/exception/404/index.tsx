import { Result, Button } from "antd";
import { useRouter } from "@/hooks";

function Exception404Page() {
  const router = useRouter();
  function handleClick() {
    router.replace("/");
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="页面不存在"
      extra={
        <Button type="primary" onClick={handleClick}>
          回到首页
        </Button>
      }
    />
  );
}

export default Exception404Page;
