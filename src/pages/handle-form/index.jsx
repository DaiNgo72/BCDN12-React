import { useRef, useState, useEffect } from "react";
import { Input } from "./input";
import { Select } from "./select";
import { Button } from "./button";
import { useNavigate } from "react-router";

export function HandleForm({
  listStudent,
  setListStudent,
  isEdit,
  studentEdit,
  setIsEdit,
  setStudentEdit,
}) {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    msv: "001",
    fullName: "Nguyen Van A",
    age: 20,
    gender: "00",
    phone: "0123456789",
    email: "nva@gmail.com",
  });

  // Binding 1 chiều từ dữ liệu của state xuống giao diện

  // Binding chiều từ giao diện lên state
  const handleChange = (e) => {
    const newStudent = {
      ...student,

      [e.target.name]: e.target.value,
    };

    setStudent(newStudent);
  };

  const handleSubmit = (event) => {
    // Prevent reload page
    event.preventDefault();

    if (isEdit) {
      // -------------------

      const newListStudent = listStudent.map((st) => {
        if (st.msv === student.msv) {
          // Map đến đúng vị trí cần thay đổi thì update về state student
          // vì state student là giá trị người dùng nhập vào.
          return student;
        } else {
          return st;
        }
      });

      setListStudent(newListStudent);

      // Sau khi update thành công
      setIsEdit(false);
      // reset studentEdit về null
      setStudentEdit(null);

      // chuyển về trang trước đó.
      // 1: đi tới trang tiếp theo
      // -1: trở về trang trước đó
      navigate(-1);
    } else {
      // Copy danh sách sinh viên cũ + thêm sinh viên mới vào
      const newListStudent = [...listStudent, student];

      setListStudent(newListStudent);

      setStudent({
        msv: "",
        fullName: "",
        age: "",
        phone: "",
        email: "",
        gender: "00",
      });
    }
  };

  useEffect(
    () => {
      // Kiểm tra, nếu isEdit là true thì sẽ cập nhật student thành studentEdit
      if (isEdit) {
        setStudent(studentEdit);
      }
    },
    // Những giá trị bị theo dõi, khi nào 1 trong những giá trị này thay đổi thì callback của useEffect sẽ chạy.
    [isEdit, studentEdit]
  );

  // Trước khi component bị ẩn khỏi giao diện
  useEffect(() => {
    // ----------------
    // ----------------
    return () => {
      // thì sẽ gọi function này
      setIsEdit(false);
      setStudentEdit(null);
    };
  }, []);

  return (
    <>
      <h1>Tạo Sinh Viên</h1>

      <form
        // Khi button type submit click thì sẽ trigger sự kiện onSubmit của form
        onSubmit={handleSubmit}
        className="border border-gray-400 p-4 rounded"
      >
        <div className="w-full">
          <Input
            label="MSV"
            value={student.msv}
            type="text"
            placeholder="Nhập mã số sinh viên"
            onChange={handleChange}
            name="msv"
            disabled={isEdit}
          />
        </div>

        <Input
          value={student.fullName}
          label="Họ và Tên"
          type="text"
          placeholder="Nhập họ và tên"
          onChange={handleChange}
          name="fullName"
        />

        <Input
          value={student.age}
          label="Tuổi"
          type="number"
          placeholder="Nhập tuổi"
          onChange={handleChange}
          name="age"
        />

        <Select
          value={student.gender}
          label="Giới tính"
          options={[
            { value: "00", name: "Nam" },
            { value: "01", name: "Nữ" },
            { value: "11", name: "Khác" },
          ]}
          name={"gender"}
          onChange={handleChange}
        />

        <Input
          value={student.phone}
          label="Số điện thoại"
          type="text"
          placeholder="Nhập số điện thoại"
          onChange={handleChange}
          name="phone"
        />

        <Input
          value={student.email}
          label="Email"
          type="email"
          placeholder="Nhập email"
          onChange={handleChange}
          name="email"
        />

        <br />

        <Button type="submit">{isEdit ? "Update" : "Submit"}</Button>
      </form>
    </>
  );
}
