import React from "react";

export interface AddEditModalRef {
  openModal: () => void;
  closeModal: () => void;
}

export interface AddEditModalProps {
  ref: React.Ref<AddEditModalRef>;
}
