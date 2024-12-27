import { useState, useEffect } from "react";
import { Button } from "../handle-form/button";

// UI -> useEffect::callback

// độc lập của mỗi useEffect
let cache = null;
// độc lập của mỗi useEffect
const _useEffect = (callback, dependencies) => {
  let cleanup = null;
  // đợi giao diện chạy lên xong
  // gọi callback
  if (cache === null) {
    cleanup = callback();
    cache = dependencies;
  } else if (dependencies !== cache) {
    // 1. Gọi cleanup trước khi component được cập nhật lại giao diện
    cleanup();

    // 2. Cập nhật giao diện
    // 3. Gọi callback

    cleanup = callback();
  }

  // Chuẩn bị xóa khỏi giao diện
  cleanup();
  // Xóa khỏi giao diện
};

export function TodoPage() {
  const [listTodo, setListTodo] = useState([]);
  const [c, setC] = useState(0);
  const [l, setL] = useState(0);

  const handleGetAllTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((r) => r.json())
      .then((r) => {
        console.log(r);

        setListTodo(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Vừa vào trang web thì sẽ gọi call back của useEffect
  useEffect(() => {
    handleGetAllTodo();
  }, []);

  // -----------------
  useEffect(() => {
    console.log("dependencies bị rỗng");
  });

  console.log("dependencies bị rỗng");

  useEffect(() => {
    console.log("render lan dau");

    return () => {
      console.log("chuẩn bị xóa khỏi gian diện");
    };
  }, []);

  useEffect(() => {
    // c = 16
    console.log("[count] change", c);

    return () => {
      console.log("[count] chuẩn bị cập nhật giao diện", c);
    };
  }, [c]);

  useEffect(() => {
    console.log("like change");
  }, [l]);

  useEffect(() => {
    console.log("like or count change");
  }, [c, l]);

  useEffect(() => {
    // gọi function cleanup trước khi component bị unmount

    // const cleanup = () => {
    //   console.log("unmount");
    // };

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setC(c + 1);
        }}
      >
        Count: {c}
      </button>

      <button
        onClick={() => {
          setL(l + 1);
        }}
      >
        Like: {l}
      </button>
      <Button onClick={handleGetAllTodo}>Get All Todo</Button>

      <hr />

      {listTodo.length === 0
        ? "Empty"
        : listTodo.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
          })}
    </>
  );
}
