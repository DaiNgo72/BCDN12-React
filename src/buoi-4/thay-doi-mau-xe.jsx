// Nếu như lưu ở nào nào đó khác public thì phải sử dụng import
import srcIconBlack from "./icons/icon-black.jpg";
import { useState } from "react";

export function ThayDoiMauXe() {
  const [src, setSrc] = useState("/products/black-car.jpg");

  console.log("render");

  return (
    <>
      {/* Lưu trong folder public */}
      <img src={src} width={400} />

      {/* Lưu ở nơi khác public */}
      <img src={srcIconBlack} width={100} />

      <hr />

      <button
        onClick={() => {
          setSrc("/products/black-car.jpg");
        }}
      >
        Black
      </button>
      <button
        onClick={() => {
          setSrc("/products/red-car.jpg");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setSrc("/products/silver-car.jpg");
        }}
      >
        Silver
      </button>
      <button
        onClick={() => {
          setSrc("/products/steel-car.jpg");
        }}
      >
        Steel
      </button>
    </>
  );
}
