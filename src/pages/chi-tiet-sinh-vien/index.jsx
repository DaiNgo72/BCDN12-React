import { useNavigate, useParams } from "react-router";

export function ChiTietSinhVien({ listStudent }) {
  const params = useParams();
  const { msv } = params;
  console.log("[msv]", msv);
  const student = listStudent.find((student) => student.msv === msv);
  console.log(student);
  const navigate = useNavigate();

  return (
    <div className="border rounded p-10">
      <h1 className="text-4xl">Chi tiết sinh viên</h1>
      <hr />
      <div>
        <p>MSV: {student.msv}</p>
        <p>Full name: {student.fullName}</p>
        <p>Age: {student.age}</p>
        <p>
          Gender:
          {student.gender === "00"
            ? "Nam"
            : student.gender === "01"
            ? "Nữ"
            : "Khác"}
        </p>
        <p>Phone: {student.phone}</p>
        <p>Email: {student.email}</p>

        <button
          onClick={() => {
            navigate(`/handle-form?msv=${msv}&type=edit`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
