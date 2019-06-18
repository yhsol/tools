import { useState } from "react";

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

// 해당 hook 을 쓸 때 hook 을 쓰는 input 내에 value 와 onChange 값을 지정해서 hook 의 value 와 onChange 를 읽을 수 있게 해야한다.
