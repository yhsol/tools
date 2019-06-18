import React, { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange };
};

export default useInput;
