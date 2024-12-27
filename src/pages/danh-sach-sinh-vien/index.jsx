import { Link, useNavigate } from "react-router";

export function DanhSachSinhVien({
  listStudent,
  setListStudent,
  setIsEdit,
  setStudentEdit,
}) {
  const navigate = useNavigate();

  const handleDeleteStudent = (msv) => {
    setListStudent((pre) => {
      const newList = pre.filter((student) => student.msv !== msv);

      return newList;
    });
  };

  const handleEditStudent = (msv) => {
    navigate("/handle-form");
    setIsEdit(true);

    const studentEdit = listStudent.find((student) => student.msv === msv);
    setStudentEdit(studentEdit);
  };

  return (
    <>
      <h1>Danh sách sinh viên</h1>

      {listStudent.length === 0 ? (
        <p>Không có sinh viên nào</p>
      ) : (
        <table className="border border-gray-400">
          <thead>
            <tr>
              <th className="px-1 border border-gray-400">MSV</th>
              <th className="px-1 border border-gray-400">Họ và Tên</th>
              <th className="px-1 border border-gray-400">Số điện thoại</th>
              <th className="px-1 border border-gray-400">Email</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {listStudent.map((student) => {
              return (
                <tr key={student.msv}>
                  <td className="px-1 border border-gray-400">{student.msv}</td>
                  <td className="px-1 border border-gray-400">
                    <Link
                      className="underline text-blue-500"
                      to={"/chi-tiet-sinh-vien/" + student.msv}
                    >
                      {student.fullName}
                    </Link>
                  </td>
                  <td className="px-1 border border-gray-400">
                    {student.phone}
                  </td>
                  <td className="px-1 border border-gray-400">
                    {student.email}
                  </td>
                  <td className="px-1 border border-gray-400">
                    <button
                      onClick={() => handleDeleteStudent(student.msv)}
                      className="cursor-pointer px-2 py-1 bg-red-600 text-white rounded"
                    >
                      Xóa
                    </button>
                    <button
                      onClick={() => handleEditStudent(student.msv)}
                      className="cursor-pointer ml-1 px-2 py-1 bg-slate-500 text-white rounded"
                    >
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
