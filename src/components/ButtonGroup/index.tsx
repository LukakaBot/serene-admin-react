import { Button } from "antd";
import { ButtonGroupProps } from "./types";
import BaseIcon from "../BaseIcon";

function ButtonGroup(props: ButtonGroupProps) {
  const { list } = props;

  return (
    <div>
      {list.map((item) => (
        <Button
          key={item.text}
          size="middle"
          type={item.type}
          color={item.color}
          icon={item.icon ? <BaseIcon name={item.icon} /> : undefined}
          disabled={
            typeof item.disabled === "function"
              ? item.disabled(item)
              : item.disabled
          }
          onClick={() => item.onClick?.(item)}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
}

export default ButtonGroup;
