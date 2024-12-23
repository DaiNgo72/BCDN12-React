import { useRef, useState } from "react";
import { Input } from "./input";
import { Select } from "./select";
import { Button } from "./button";

export function HandleForm({ listStudent, setListStudent }) {
  //   const { listStudent, setListStudent } = props;

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

  console.log("[listStudent]", listStudent);

  const handleSubmit = (event) => {
    // Prevent reload page
    event.preventDefault();

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
  };

  //   const handleChangeMSV = (e) => {};
  //   const handleChangeFullName = (e) => {};

  return (
    <>
      <h1>Tạo Sinh Viên</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-400 p-4 rounded"
      >
        <div className="w-full">
          <Input
            value={student.msv}
            label="MSV"
            type="text"
            placeholder="Nhập mã số sinh viên"
            onChange={handleChange}
            name="msv"
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

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export function HandleFormDemo() {
  const inputRef = useRef();
  const [name, setName] = useState("Cyber");

  const handleSubmit = () => {
    // document.querySelector("input").value
    // const value = inputRef.current.value;

    console.log(name);
  };

  const handleChangeValue = (e) => {
    setName(e.target.value);
  };

  //   UI
  // \/\/\/\/\/\/\/
  return (
    <>
      <input
        // Lấy một element bằng React
        ref={inputRef}
        className="px-4 py-2 border rounded border-black"
        type="text"
        placeholder="Enter your name"
        // Binding 1 chiều từ dữ liệu của state xuống giao diện
        value={name}
        // Binding 2 chiều từ giao diện lên state
        // Khi gõ vào input thì name sẽ thay đổi theo giá trị của input
        onChange={handleChangeValue}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

const linhDong = "age";

const sv = {
  name: 20,

  [linhDong]: "Nguyen Van A",
};

console.log(sv);
