import { Flex, Modal, Button } from "antd";
import { BaseModalProps } from "./types";

function BaseModal(props: BaseModalProps) {
  const {
    title,
    show = false,
    confirmLoading = false,
    showCancel = true,
    showOk = true,
    footer,
    onCancel,
    onOk,
    children,
  } = props;

  const DefaultFooter = useMemo(
    () => (
      <Flex justify="center" gap={10}>
        {showCancel && <Button onClick={onCancel}>取消</Button>}
        {showOk && (
          <Button loading={confirmLoading} type="primary" onClick={onOk}>
            确定
          </Button>
        )}
      </Flex>
    ),
    [showCancel, showOk, confirmLoading, onCancel, onOk],
  );

  return (
    <Modal
      title={title}
      open={show}
      confirmLoading={confirmLoading}
      footer={footer || DefaultFooter}
      onCancel={onCancel}
      onOk={onOk}
    >
      {children}
    </Modal>
  );
}

export default BaseModal;
