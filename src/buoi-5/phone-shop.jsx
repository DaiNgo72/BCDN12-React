import { Fragment, useState } from "react";
import { MOCK_DATA } from "./__mock-data__";
import { GioHang } from "./gio-hang";

export function PhoneShop() {
  const [carts, setCarts] = useState([
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      // ---
      soLuong: 2,
    },
  ]);
  // [3]
  const [sanPham, setSanPham] = useState(MOCK_DATA[0]);

  return (
    <>
      <GioHang carts={carts} />

      <div style={{ display: "flex", gap: 20 }}>
        {MOCK_DATA.map((item) => {
          // ✅ key đặt tại nơi render list array.
          return (
            <Phone
              setCarts={setCarts}
              setSanPham={setSanPham}
              key={item.maSP}
              item={item}
            />
          );
        })}
      </div>

      <Detail sanPham={sanPham} />
    </>
  );
}

function Phone(props) {
  // [2]: cập nhật state

  // const item = props.item;
  const { item, setSanPham, setCarts } = props; // tạo biến có tên là item và giá trị của nó là props.item

  return (
    // SAI ❌
    <Fragment key={item.maSP}>
      <div
        style={{
          border: "1px solid black",
          padding: 20,
        }}
      >
        <div>
          <img src={item.hinhAnh} width={250} />
        </div>
        <div>
          <p>{item.tenSP}</p>

          <button
            onClick={() => {
              // gọi setSanPham
              setSanPham(item);
            }}
          >
            Xem Chi Tiết
          </button>

          <button
            style={{
              marginLeft: 10,
            }}
            onClick={() => {
              // Thêm sản phẩm vào

              setCarts((preCarts) => {
                preCarts.push(item); //❌

                console.log(preCarts); // có thêm vào sản phẩm mới.

                return preCarts; // không thay đổi, không trigger render lại giao diện
              });

              // carts.push(item);
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </Fragment>
  );
}

function Detail(props) {
  const { sanPham } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 6fr",
      }}
    >
      <div>
        <h2>{sanPham.tenSP}</h2>
        <img src={sanPham.hinhAnh} width={300} />
      </div>

      <div>
        <h2>Thông Số Kỹ Thuật</h2>

        <table>
          <tbody>
            <tr>
              <th>Màn Hình</th>
              <td>{sanPham.manHinh}</td>
            </tr>
            <tr>
              <th>Hệ điều hành</th>
              <td>{sanPham.heDieuHanh}</td>
            </tr>
            <tr>
              <th>Camera trước</th>
              <td>{sanPham.cameraTruoc}</td>
            </tr>

            <tr>
              <th>Camera sau</th>
              <td>{sanPham.cameraSau}</td>
            </tr>
            <tr>
              <th>Ram</th>
              <td>{sanPham.ram}</td>
            </tr>
            <tr>
              <th>Rom</th>
              <td>{sanPham.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
