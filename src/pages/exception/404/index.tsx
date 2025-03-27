import { Result, Button } from "antd";
import { useRouter } from "@/hook";

function Exception404Page() {
  const router = useRouter();
  function handleClick() {
    router.replace("/");
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="你来到了没有知识的荒漠"
      extra={
        <Button type="primary" onClick={handleClick}>
          回到首页
        </Button>
      }
    />
  );
}

export default Exception404Page;
