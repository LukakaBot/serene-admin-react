import { Outlet } from "react-router";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

function AppContent() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <Outlet />
    </Content>
  );
}

export default AppContent;
