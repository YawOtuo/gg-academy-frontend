import { useState } from "react";

function useDisclosure() {
  const [open, setOpen] = useState<boolean>(false);
  return {
    open,
    setOpen,
  };
}

export default useDisclosure;
