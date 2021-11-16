import * as React from "react";

const useToggleModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return { open, handleOpenModal, handleCloseModal };
};

export default useToggleModal;
