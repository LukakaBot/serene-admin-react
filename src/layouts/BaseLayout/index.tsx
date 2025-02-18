import type { CSSProperties, FC } from 'react';
import { Outlet } from 'react-router';
import { Layout } from 'antd';
import type { BaseLayoutProps } from './props';
import BaseHeader from '@/components/BaseHeader';
import BaseSider from '@/components/BaseSider';
import BaseContent from '@/components/BaseContent';
import BaseFooter from '@/components/BaseFooter';

const layoutStyle: CSSProperties = {
	overflow: 'hidden',
	width: '100%',
};

const BaseLayout: FC<BaseLayoutProps> = () => {
	return (
		<Layout className='w-full h-full' style={layoutStyle}>
			<BaseSider />
			<Layout>
				<BaseHeader />
				<BaseContent>
					<Outlet />
				</BaseContent>
				<BaseFooter />
			</Layout>
		</Layout>
	);
};

export default BaseLayout;
