import type { FormRule } from 'antd';
import { Card, Form, Input, Button } from 'antd';
import type { UserTokenAccountParams } from '@/api/system/user/types';
import { fetchUserTokenByAccount } from '@/api/system/user';
import useLoading from '@/hooks/loading/useLoading';

const rules: Record<keyof UserTokenAccountParams, FormRule[]> = {
	username: [{ required: true, message: '请输入用户名' }],
	password: [{ required: true, message: '请输入密码' }],
};

async function handleFinish(
	values: UserTokenAccountParams,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
	try {
		setLoading(true);
		const res = await fetchUserTokenByAccount(values);
		console.log(res);
	} finally {
		setLoading(false);
	}
}

const LoginBox: React.FC = () => {
	const [loading, setLoading] = useLoading();

	return (
		<div className='flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			<Card style={{ width: 300 }}>
				<Form
					labelCol={{ span: 6 }}
					onFinish={(values) => handleFinish(values, setLoading)}
				>
					<Form.Item label='用户名' name='username' rules={rules.username}>
						<Input placeholder='请输入用户名' />
					</Form.Item>
					<Form.Item label='密码' name='password' rules={rules.password}>
						<Input placeholder='请输入密码' />
					</Form.Item>
					<Form.Item>
						<Button block type='primary' htmlType='submit' loading={loading}>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default LoginBox;
