import { useRef, useState, useEffect } from "react";
import { Input } from "./input";
import { Select } from "./select";
import { Button } from "./button";
import { useNavigate, useSearchParams } from "react-router";

export function HandleForm({ listStudent, setListStudent }) {
  const navigate = useNavigate();
  const [queryString] = useSearchParams();

  const type = queryString.get("type");
  const msv = queryString.get("msv");
  const isEdit = type === "edit";
  const studentEdit = listStudent.find((s) => s.msv === msv);

  // Giá trị default của student
  // Xét cho lần render đầu tiên - mouting
  const [student, setStudent] = useState(
    isEdit
      ? studentEdit
      : {
          msv: "001",
          fullName: "Nguyen Van A",
          age: "20",
          gender: "00",
          phone: "0123456789",
          email: "nva@gmail.com",

          msv: "",
          fullName: "",
          age: "",
          gender: "",
          phone: "",
          email: "",
        }
  );

  const [errors, setErrors] = useState({
    msv: "",
    fullName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
  });

  const [touches, setTouches] = useState({
    msv: false,
    fullName: false,
    age: false,
    gender: false,
    phone: false,
    email: false,
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

  const handleValidate = () => {
    let errors = {
      msv: "",
      fullName: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
    };

    let REGEX_NUMBER = /^\d+$/;
    if (student.msv.trim() === "") {
      errors.msv = "Không được bỏ trống";
    } else if (!REGEX_NUMBER.test(student.msv.trim())) {
      errors.msv = "Không được nhập chữ";
    } else if (listStudent.find((s) => s.msv === student.msv)) {
      errors.msv = "Mã sinh viên đã tồn tại";
    }

    if (student.fullName.trim() === "") {
      errors.fullName = "Không được bỏ trống";
    }

    if (student.age.trim() === "") {
      errors.age = "Không được bỏ trống";
    } else if (Number(student.age) <= 0) {
      errors.age = "Tuổi không hợp lệ";
    }

    setErrors(errors);

    // ---------------------------
    const v = Object.values(errors);

    console.log(v);

    // Tất cả các trường error bằng rỗng thì mới hợp lệ
    const isValid = v.every((field) => field.trim() === "");

    return isValid;
  };

  const handleSubmit = (event) => {
    // Prevent reload page
    event.preventDefault();

    // Nếu đã submit thì chắc chắn đã touches toàn bộ, nên xét tất cả về giá trị true
    setTouches({
      msv: true,
      fullName: true,
      age: true,
      gender: true,
      phone: true,
      email: true,
    });

    // Nếu như validate thất bại thì dừng function
    if (!handleValidate()) return;

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

  const handleBlur = (event) => {
    console.log(event.target.name); // age

    // Sau khi blur thì mình sẽ validate
    handleValidate();

    // Blur input nào thì đánh dấu nó đã từng chạm vào
    setTouches({
      ...touches,

      // ???
      [event.target.name]: true, // age: true
    });
  };

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
            // Sự kiện lắng nghe khi người dùng rời khỏi ô input
            onBlur={handleBlur}
          />

          {touches.msv && errors.msv && (
            <p className="text-red-600">{errors.msv}</p>
          )}
        </div>

        <div>
          <Input
            value={student.fullName}
            label="Họ và Tên"
            type="text"
            placeholder="Nhập họ và tên"
            onChange={handleChange}
            name="fullName"
            onBlur={handleBlur}
          />
          {touches.fullName && errors.fullName && (
            <p className="text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <Input
            value={student.age}
            label="Tuổi"
            type="number"
            placeholder="Nhập tuổi"
            onChange={handleChange}
            name="age"
            onBlur={handleBlur}
          />
          {touches.age && errors.age && (
            <p className="text-red-600">{errors.age}</p>
          )}
        </div>

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
