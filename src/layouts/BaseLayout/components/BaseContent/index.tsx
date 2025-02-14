import type { FC, CSSProperties } from "react";
import { Layout } from "antd";
import type { BaseContentProps } from "./props";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const BaseContent: FC<BaseContentProps> = (props) => {
  return (
    <Content style={contentStyle}>
      {props.children.content ? props.children.content : <div>123</div>}
    </Content>
  );
};

export default BaseContent;
