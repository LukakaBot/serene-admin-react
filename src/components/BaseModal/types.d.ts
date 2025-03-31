export interface BaseModalProps {
  title: string;
  show: boolean;
  confirmLoading?: boolean;
  showCancel?: boolean;
  showOk?: boolean;
  footer?: React.ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  children?: React.ReactNode;
}
