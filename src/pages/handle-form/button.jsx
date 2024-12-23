export function Button(props) {
  return (
    <button
      // Lấy hết tất cả các props truyền vào component Button và gán cho thẻ button
      {...props}
      // ------------------------------
      className="px-2 py-1 border rounded-md cursor-pointer bg-slate-600 text-white"
    >
      {props.children}
    </button>
  );
}
