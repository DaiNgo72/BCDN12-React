/**
 * Nơi code chính trong dự án
 */
// Không cần gõ .jsx cũng được nhờ vite support nhận diện đuôi file (extension) giúp chúng ta
import React from "react";

import { PhoneShop } from "./buoi-5/phone-shop";

export function App() {
  // Phải bao bọc bởi một thẻ cha
  // div, Fragment => <> </>

  return (
    <>
      <PhoneShop />
    </>
  );
}
