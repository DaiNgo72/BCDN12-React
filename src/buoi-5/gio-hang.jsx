export function GioHang(props) {
  // [1]: binding
  const { carts } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên</th>
            <th>Hình Ảnh</th>
            <th>Đơn Giá</th>
            <th>Số Lượng</th>
            <th>Thành Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carts.map((sanPham) => {
            return (
              <tr key={sanPham.maSP}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>
                  <img src={sanPham.hinhAnh} width={50} alt="" />
                </td>
                <td>{sanPham.giaBan}</td>
                <td
                  style={{
                    display: "flex",
                  }}
                >
                  <button>-</button>
                  <p>{sanPham.soLuong}</p>
                  <button>+</button>
                </td>
                <td>{sanPham.giaBan * sanPham.soLuong}</td>
                <td>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function inner() {
  const c = 10;
}

function inner2() {}
