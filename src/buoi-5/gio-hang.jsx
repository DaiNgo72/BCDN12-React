export function GioHang(props) {
  // [1]: binding
  const { carts, setCarts } = props;

  const handleXoaSanPham = (maSP) => {
    const newCarts = carts.filter((cart) => {
      // lấy ra những sản phẩm có mã sản phẩm khác với mã sản phẩm mà mình muốn xóa
      return cart.maSP !== maSP;
    });
    setCarts(newCarts);
  };

  const handleTangSoLuong = (maSP) => {
    const newCarts = carts.map((cart) => {
      if (cart.maSP === maSP) {
        return {
          ...cart,
          soLuong: cart.soLuong + 1,
        };
      }

      return cart;
    });

    setCarts(newCarts);
  };

  const handleGiamSoLuong = (maSP) => {
    const findItem = carts.find((cart) => cart.maSP === maSP);
    // Nếu số lượng của sản phẩm đó là 1 thì xóa sản phẩm đó đi
    if (findItem.soLuong === 1) {
      handleXoaSanPham(maSP);
    } else {
      const newCarts = carts.map((cart) => {
        if (cart.maSP === maSP) {
          return {
            ...cart,
            soLuong: cart.soLuong - 1,
          };
        }

        return cart;
      });

      setCarts(newCarts);
    }
  };

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
                  <button onClick={() => handleGiamSoLuong(sanPham.maSP)}>
                    -
                  </button>
                  <p>{sanPham.soLuong}</p>
                  <button onClick={() => handleTangSoLuong(sanPham.maSP)}>
                    +
                  </button>
                </td>
                <td>{sanPham.giaBan * sanPham.soLuong}</td>
                <td>
                  <button onClick={() => handleXoaSanPham(sanPham.maSP)}>
                    Xóa
                  </button>
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
