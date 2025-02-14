import type { FC, CSSProperties } from "react";

import { Layout } from "antd";

const { Footer } = Layout;

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const BaseFooter: FC = () => <Footer style={footerStyle}>Footer</Footer>;

export default BaseFooter;
