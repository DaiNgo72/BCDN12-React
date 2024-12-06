/**
 * Nơi để liên kết với HTML
 */

import React from "react";
import ReactDOM from "react-dom/client";

// Liên kết app vào main
import { App } from "./_app.jsx";

// Lấy thẻ có id là root
// Chèn nội dung của thẻ do chúng ta tự tạo App vào thẻ root
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.createElement(
  //   "div",
  //   { className: "card" },
  //   React.createElement("div", { className: "card-header" }, "header"),
  //   React.createElement("div", { className: "card-content" }, "content")
  // )

  // Cách sử dụng thẻ do chúng ta tự tạo
  <App></App>
);


