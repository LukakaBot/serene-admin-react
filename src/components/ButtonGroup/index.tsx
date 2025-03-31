import { Space, Button } from "antd";
import { ButtonGroupProps, ButtonGroupItem } from "./types";
import BaseIcon from "../BaseIcon";

function ButtonGroup(props: ButtonGroupProps) {
  const { list } = props;

  const handleClick = useCallback((item: ButtonGroupItem) => {
    item.onClick?.(item);
  }, []);

  return (
    <Space>
      {list.map((item) => (
        <Button
          key={item.text}
          size="middle"
          type={item.type}
          color={item.color}
          icon={item.icon && <BaseIcon name={item.icon} />}
          disabled={
            typeof item.disabled === "function"
              ? item.disabled(item)
              : item.disabled
          }
          onClick={() => handleClick(item)}
        >
          {item.text}
        </Button>
      ))}
    </Space>
  );
}

export default ButtonGroup;
