import type { ButtonType, ButtonColorType } from "antd/es/button";

export interface ButtonGroupItem {
  /** 按钮文本 */
  text: string;
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮颜色 */
  color?: ButtonColorType;
  /** 按钮图标 */
  icon?: string;
  /** 按钮是否禁用 */
  disabled?: boolean | ((item: ButtonGroupItem) => boolean);
  /** 按钮点击事件 */
  onClick?: (item?: ButtonGroupItem) => void;
}

export interface ButtonGroupProps {
  list: ButtonGroupItem[];
}
