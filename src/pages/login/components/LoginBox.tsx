import type { FormRule } from "antd";
import { Card, Form, Input, Button } from "antd";
import type { AccountUserTokenParams } from "@/api/system/user/types";
import useLoading from "@/hooks/loading/useLoading";
import userStore from "@/store/user";
import { useRouter } from "@/hooks/index";

const rules: Record<keyof AccountUserTokenParams, FormRule[]> = {
  username: [{ required: true, message: "请输入用户名" }],
  password: [{ required: true, message: "请输入密码" }],
};

const LoginBox: React.FC = () => {
  const [loading, setLoading] = useLoading();
  const { getAccountUserToken } = userStore();
  const router = useRouter();

  const [formData] = useState<AccountUserTokenParams>({
    username: "admin",
    password: "123456",
  });

  async function handleFinish(values: AccountUserTokenParams) {
    try {
      setLoading(true);
      await getAccountUserToken(values);
      router.replace("/dashboard/home");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card style={{ width: 300 }}>
        <Form
          labelCol={{ span: 6 }}
          initialValues={formData}
          onFinish={handleFinish}
        >
          <Form.Item label="用户名" name="username" rules={rules.username}>
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={rules.password}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginBox;
