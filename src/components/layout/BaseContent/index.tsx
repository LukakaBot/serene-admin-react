import type { CSSProperties } from "react";
import { Layout } from "antd";
import type { BaseContentProps } from "./types";

const { Content } = Layout;

const defaultContentStyle: CSSProperties = {
  display: "flex",
  flex: "1",
  flexDirection: "column",
  textAlign: "center",
  color: "#fff",
};

function BaseContent(props: BaseContentProps) {
  const { children, contentStyle } = props;
  const mergedContentStyle = { ...defaultContentStyle, ...contentStyle };

  return <Content style={mergedContentStyle}>{children}</Content>;
}

export default BaseContent;
