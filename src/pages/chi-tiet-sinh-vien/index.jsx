import { useParams } from "react-router";

export function ChiTietSinhVien() {
  const params = useParams();
  const { msv } = params;

  console.log("[msv]", msv);

  return <>Chi tiết sinh viên</>;
}
