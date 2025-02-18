import type { FC, CSSProperties } from 'react';
import { Layout } from 'antd';
import type { BaseContentProps } from './props';

const { Content } = Layout;

const contentStyle: CSSProperties = {
	display: 'flex',
	flex: '1',
	flexDirection: 'column',
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#0958d9',
};

const BaseContent: FC<BaseContentProps> = (props) => {
	return <Content style={contentStyle}>{props.children}</Content>;
};

export default BaseContent;
