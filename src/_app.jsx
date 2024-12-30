/**
 * Nơi code chính trong dự án
 */
// Không cần gõ .jsx cũng được nhờ vite support nhận diện đuôi file (extension) giúp chúng ta
import React, { useState } from "react";

import { PhoneShop } from "./buoi-5/phone-shop";

import { Routes, Route, NavLink, Link } from "react-router";
import { DataBinding } from "./buoi-2/data-binding/data-binding";
import { HandleEvent } from "./buoi-2/handle-event/handle-event";
import { Home } from "./home";
import { ErrorPage } from "./error";
import { HandleForm } from "./pages/handle-form";
import { DanhSachSinhVien } from "./pages/danh-sach-sinh-vien";
import { ChiTietSinhVien } from "./pages/chi-tiet-sinh-vien";
import { TodoPage } from "./pages/todo";

export function App() {
  const [listStudent, setListStudent] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // ??? cái này có chạy trước khi giao diện được render hay không ??? Không chắc chắn được 100%. tại vì setState là 1 hàm không đồng bộ
  const [studentEdit, setStudentEdit] = useState({});
  console.log("studentEdit", studentEdit);

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
        {/* Quay về phone shope: -> https://localhost:5173/phone-shop */}
        <NavLink to="phone-shop">Phone Shop</NavLink>
        {/* 😊 */}
        <Link to="data-binding">Data Binding</Link>
        <Link to="handle-event">Handle Event</Link>
        <NavLink to={"handle-form"}>Handle Form</NavLink>
        <NavLink to={"danh-sach-sinh-vien"}>Danh sách sinh viên</NavLink>
        <NavLink to={"todo"}>Todo</NavLink>
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

        <Route
          path="handle-form"
          element={
            <HandleForm
              studentEdit={studentEdit}
              isEdit={isEdit}
              listStudent={listStudent}
              setListStudent={setListStudent}
              setIsEdit={setIsEdit}
              setStudentEdit={setStudentEdit}
            />
          }
        />

        <Route
          path="danh-sach-sinh-vien"
          element={
            <DanhSachSinhVien
              listStudent={listStudent}
              setListStudent={setListStudent}
              setIsEdit={setIsEdit}
              setStudentEdit={setStudentEdit}
            />
          }
        />

        {/*
- Những đường dẫn sẽ render ra trang ChiTietSinhVien
- /chi-tiet-sinh-vien/1
- /chi-tiet-sinh-vien/2
- /chi-tiet-sinh-vien/3
- /chi-tiet-sinh-vien/afjksdlfjlaksdf

- /chi-tiet-sinh-vien ❌
- /chi-tiet-sinh-vien/1/2 ❌
*/}

        {/* 
  :msv làm tham số của đường dẫn
  - để lấy được giá trị tham số đó thì dùng useParams từ react-router
*/}
        <Route
          path="chi-tiet-sinh-vien/:msv"
          element={<ChiTietSinhVien listStudent={listStudent} />}
        ></Route>

        <Route path="todo" element={<TodoPage />}></Route>

        {/* Nhận mọi đường dẫn nếu như không có đường dẫn nào setup sẵn trước đó, thì sẽ rơi vào trường hợp ngoại lệ này. */}
        {/* Liên tưởng giống switch case và đây là case default */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

// promise_1 gọi là instance của Promise.
// promise_1 là một object
// then, catch, finally
const promise_1 = new Promise((resolve, reject) => {
  // resolve + reject giống như là return trong function
  // tìm được kết quả mà nó cần rồi thì resolve hay reject khác sẽ không được xử lý nữa
  // resolve hoặc reject chỉ được 1 lần
  setTimeout(() => {
    if (Math.random() < 0.3) {
      // Dậy nổi

      resolve("thành công");
      reject("thất bại 3");

      console.log("---------------");
      console.log("---------------");
      console.log("---------------");

      resolve("thành công 1");
      resolve("thành công 2");
    } else {
      // Không dậy nổi

      reject("thất bại");
      resolve("thành công 3");

      console.log("---------------");
      console.log("---------------");
      console.log("---------------");

      reject("thất bại 1");
      reject("thất bại 2");
    }
  }, 1000);

  // cần 3s thì mới có kết quả trả về cho chúng ta

  setTimeout(() => {
    // tìm kiếm trong database
    // coi thử có không
    // nếu như có
    // resolve(<ket_qua_tim_duoc>)
    // nếu không tìm thấy
    // resolve(null)
    // Gọi sai đường dẫn, hoặc method cho cái dường dẫn đó không tồn tại
    // reject(<error>)
  }, 3000); // giả sử
});

const promise_1_1 = promise_1.then((response) => {
  console.log(response);
});

promise_1_1
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
