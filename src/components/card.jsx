// Tạo thẻ custom với react
// function
// return chính là giao diện muốn hiển thị lên
/**
 * # Lưu ý
 * - Viết hoa chữ cái đầu thẻ do mình tạo - phân biệt với thẻ html
 */
export function Card() {
  return (
    <div className="card">
      <div className="card-header">header 1</div>
      <div className="card-content">content 2</div>
    </div>
  );
}
