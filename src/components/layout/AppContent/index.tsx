import { Outlet } from "react-router";
import { Layout, Breadcrumb, theme } from "antd";

const { Content } = Layout;

function AppContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content className="flex flex-col mx-4">
      <Breadcrumb className="!my-4">
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="flex-1 p-6 box-border"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet />
      </div>
    </Content>
  );
}

export default AppContent;
