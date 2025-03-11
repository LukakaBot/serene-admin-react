import { Icon } from "@iconify/react";
import type { BaseIconProps } from "./types";

const defaultProps: Omit<BaseIconProps, "name"> = {
  color: "#000",
  size: "16px",
};

function BaseIcon(props: BaseIconProps) {
  const { name, color, size } = { ...defaultProps, ...props };

  const iconName = useMemo(() => `#svg-${name}`, [name]);

  const iconStyle = useMemo(() => ({ color }), [color]);

  const isLocalIcon = useMemo(() => name.startsWith("icon-"), [name]);

  return isLocalIcon ? (
    <svg style={iconStyle} width={size} height={size} aria-hidden="true">
      <use xlinkHref={iconName} fill={color} />
    </svg>
  ) : (
    <Icon icon={name} color={color} width={size} height={size} />
  );
}

export default BaseIcon;
