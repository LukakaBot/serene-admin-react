import type { CSSProperties } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

function BaseFooter() {
  return <Footer style={footerStyle}>Footer</Footer>;
}

export default BaseFooter;
