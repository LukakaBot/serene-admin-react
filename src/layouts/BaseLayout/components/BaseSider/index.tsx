import type { FC, CSSProperties } from "react";

import { Layout } from "antd";

const { Sider } = Layout;

const siderStyle: CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const BaseSider: FC = () => (
  <Sider width="25%" style={siderStyle}>
    Sider
  </Sider>
);

export default BaseSider;
