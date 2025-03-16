import type { CSSProperties } from "react";
import { Layout, Menu } from "antd";
import type { BaseSiderProps } from "./types";
import useRouteStore from "@/store/route";

const { Sider } = Layout;

const defaultSiderStyle: CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

function BaseSider(props: BaseSiderProps) {
  const { siderStyle } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { routes } = useRouteStore();

  const mergedSiderStyle = {
    ...defaultSiderStyle,
    ...siderStyle,
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
      style={mergedSiderStyle}
    >
      <Menu
        items={menus}
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
      />
    </Sider>
  );
}

export default BaseSider;
