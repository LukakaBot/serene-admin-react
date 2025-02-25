import type { ReactElement } from 'react';
import { fetchAccountUserToken } from '@/api/system/user';

async function getUserTokenByAccount() {
	try {
		const params = {
			username: 'admin',
			password: '123456',
		};
		const res = await fetchAccountUserToken(params);
		console.log(res);
	} finally {
		console.log('completed');
	}
}

function UserPage(): ReactElement {
	useEffect(() => {
		getUserTokenByAccount();
	}, []);

	return (
		<>
			<h1>用户管理</h1>
		</>
	);
}

export default UserPage;
