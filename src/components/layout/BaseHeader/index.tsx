import type { CSSProperties } from "react";
import { Layout } from "antd";
import type { BaseHeaderProps } from "./types";

const { Header } = Layout;

const defaultHeaderStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};

function BaseHeader(props: BaseHeaderProps) {
  const { headerStyle } = props;
  const mergedHeaderStyle = { ...defaultHeaderStyle, ...headerStyle };

  return <Header style={mergedHeaderStyle}>Header</Header>;
}

export default BaseHeader;
