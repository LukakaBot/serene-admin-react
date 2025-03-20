import type { CSSProperties } from "react";
import { Layout, Menu } from "antd";
import type { AppSidebarProps } from "./types";
import useRouteStore from "@/store/route";

const { Sider } = Layout;

const defaultSidebarStyle: CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

function AppSidebar(props: AppSidebarProps) {
  const { sidebarStyle } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { routes } = useRouteStore();

  const mergedSidebarStyle = {
    ...defaultSidebarStyle,
    ...sidebarStyle,
  };

  const menus = useMemo(() => {
    return routes;
  }, [routes]);

  useEffect(() => {
    console.log(menus);
  }, [menus]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={mergedSidebarStyle}
    >
      <div className="m-4 h-8 rounded-md bg-[rgba(255,255,255,0.2)]" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={menus}
      />
    </Sider>
  );
}

export default AppSidebar;
