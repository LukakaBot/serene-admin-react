import type { FC } from 'react';
import { fetchUserTokenByAccount } from '@/api/system/user';

async function getUserTokenByAccount() {
	try {
		const params = {
			username: 'admin',
			password: '123456',
		};
		const res = await fetchUserTokenByAccount(params);
		console.log(res);
	} finally {
		console.log('completed');
	}
}

const UserPage: FC = () => {
	useEffect(() => {
		getUserTokenByAccount();
	}, []);

	return (
		<>
			<h1>用户管理</h1>
		</>
	);
};

export default UserPage;
