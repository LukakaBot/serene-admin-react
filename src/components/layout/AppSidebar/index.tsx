import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuProps["items"] = [];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

export default AppSidebar;
