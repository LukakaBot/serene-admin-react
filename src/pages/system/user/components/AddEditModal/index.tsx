import { AddEditModalProps } from "./types";
import BaseModal from "@/components/BaseModal";

function AddEditModal(props: AddEditModalProps) {
  const { ref } = props;
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function handleOk() {
    console.log("handleOk");
    closeModal();
  }

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    };
  });

  return (
    <BaseModal
      title="添加/编辑用户"
      show={show}
      onCancel={closeModal}
      onOk={handleOk}
    >
      <div>123</div>
    </BaseModal>
  );
}

export default AddEditModal;
