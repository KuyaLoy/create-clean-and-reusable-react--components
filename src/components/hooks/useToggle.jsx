import { useState } from "react";

const useToggle = () => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => setStatus((prevExpand) => !prevExpand);

  return { status, toggleStatus };
};

export default useToggle;
