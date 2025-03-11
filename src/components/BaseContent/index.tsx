import type { CSSProperties } from "react";
import { Layout } from "antd";
import type { BaseContentProps } from "./props";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  display: "flex",
  flex: "1",
  flexDirection: "column",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#0958d9",
};

function BaseContent(props: BaseContentProps) {
  const { children } = props;
  return <Content style={contentStyle}>{children}</Content>;
}

export default BaseContent;
