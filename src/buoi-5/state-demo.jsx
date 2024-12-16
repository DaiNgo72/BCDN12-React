import { useState } from "react";

const _useState = (init) => {
  let value = init;
  const setValue = (nValue) => {
    if (typeof nValue === "function") {
      value = nValue(value);
    } else {
      value = nValue;
    }

    // tutu chay chạy lại UI
  };

  return [value, setValue];
};

export function StateDemo() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((preNumber) => {
            return preNumber + 1;
          });
          setNumber((preNumber) => {
            return preNumber + 1;
          });
          setNumber((preNumber) => {
            return preNumber + 1;
          });
        }}
      >
        +3
      </button>
    </>
  );
}
