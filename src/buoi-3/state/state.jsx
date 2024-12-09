import { useState } from "react";

function __useState(defaultValue) {
  let value = defaultValue;

  let setValue = (nValue) => {
    value = nValue;

    // renderUI
  };

  return [value, setValue];
}

// 1 file chỉ có được 1 export default
// khi import với default thì mình có thể đặt tên tùy ý
export default function State() {
  console.log("render");
  // destructuring object
  // destructuring array
  let [count, setCount] = useState(1);
  let [url, setUrl] = useState("https://i.pravatar.cc?img=1");

  let c = 0;
  console.log(c);

  const inc = () => {
    setCount(count + 1);
  };

  const desc = () => {
    setCount(count - 1);
  };

  let [bgc, setBgc] = useState("blue");

  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: bgc,
        }}
      ></div>
      <button
        onClick={() => {
          setBgc("red");
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setBgc("blue");
        }}
      >
        blue
      </button>
      <button
        onClick={() => {
          setBgc("green");
        }}
      >
        green
      </button>
      <br />
      <button
        onClick={() => {
          c += 1;
          console.log(c);
        }}
      >
        Click
      </button>
      <img src={url} width={100} height={100} />
      <button
        onClick={() => {
          setUrl("https://i.pravatar.cc?img=2");
        }}
      >
        Update
      </button>
      State
      <p>{count}</p>
      <button onClick={inc}>+</button>
      <button onClick={desc}>-</button>
    </>
  );
}
