import { Outlet } from "react-router";
import { Layout } from "antd";
import type { BaseLayoutProps } from "./props";
import BaseHeader from "@/components/BaseHeader";
import BaseSider from "@/components/BaseSider";
import BaseContent from "@/components/BaseContent";
import BaseFooter from "@/components/BaseFooter";

const defaultLayoutStyle: React.CSSProperties = {
  overflow: "hidden",
  width: "100%",
};

function BaseLayout(props: BaseLayoutProps) {
  const { layoutStyle } = props;

  const mergedLayoutStyle = {
    ...defaultLayoutStyle,
    ...layoutStyle,
  };

  return (
    <Layout className="w-full h-full" style={mergedLayoutStyle}>
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
}

export default BaseLayout;
