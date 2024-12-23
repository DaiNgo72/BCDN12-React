/**
 * Nơi code chính trong dự án
 */
// Không cần gõ .jsx cũng được nhờ vite support nhận diện đuôi file (extension) giúp chúng ta
import React from "react";

import { PhoneShop } from "./buoi-5/phone-shop";

import { Routes, Route, NavLink, Link } from "react-router";
import { DataBinding } from "./buoi-2/data-binding/data-binding";
import { HandleEvent } from "./buoi-2/handle-event/handle-event";
import { Home } from "./home";
import { ErrorPage } from "./error";
import { HandleForm } from "./pages/handle-form";

export function App() {
  // Phải bao bọc bởi một thẻ cha
  // div, Fragment => <> </>

  return (
    <>
      <header>
        {/* 😒: làm trang web reload -> tải lại toàn bộ resource của trang web */}
        {/* <a href="phone-shop">Phone Shop 😒</a> */}

        {/* 😊 */}
        {/* Quay về trang chủ: -> https://localhost:5173/ */}
        <NavLink to="/">Home</NavLink>
        <br />
        {/* Quay về phone shope: -> https://localhost:5173/phone-shop */}
        <NavLink to="phone-shop">Phone Shop</NavLink>
        <br />
        {/* 😊 */}
        <Link to="data-binding">Data Binding</Link>
        <br />
        <Link to="handle-event">Handle Event</Link>
        <br />
        <NavLink to={"handle-form"}>Handle Form</NavLink>
      </header>

      {/* Quy định đường dẫn nào đến page nào */}

      {/* Cài đặt đường dẫn cho nhiều route */}
      <Routes>
        {/* C1: setup trang home */}
        {/* <Route path="" element={<Home />} /> */}
        {/* C2: setup trang home */}
        {/* <Route index={true} element={<Home />} /> */}
        <Route index element={<Home />} />

        {/* Cài đặt đường dẫn cụ thể cho từng page */}
        <Route path="phone-shop" element={<PhoneShop />} />
        {/* Phải đặt Route bên trong Routes */}
        <Route path="data-binding" element={<DataBinding />} />

        <Route path="handle-event" element={<HandleEvent />} />

        <Route path="handle-form" element={<HandleForm />} />

        {/* Nhận mọi đường dẫn nếu như không có đường dẫn nào setup sẵn trước đó, thì sẽ rơi vào trường hợp ngoại lệ này. */}
        {/* Liên tưởng giống switch case và đây là case default */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
