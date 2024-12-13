import { useState } from "react";

export function TangGiamFont() {
  let [fontSize, setFontSize] = useState(30);

  return (
    <>
      <button
        onClick={() => {
          setFontSize(fontSize + 4);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setFontSize(fontSize - 4);
        }}
      >
        -
      </button>

      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quas
        earum illum molestias error beatae quo culpa velit quos voluptas?
      </p>
    </>
  );
}
