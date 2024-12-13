import css from "./button.module.css";

// console.log(css);

// let variant = "primary";

// console.log(css[variant]);

export function Button(props) {
  // # Xử lý lấy giá trị mặc định
  // Nếu người dùng không truyền prop variant vào thì sẽ lấy "secondary"

  let variant = props.variant || "secondary";

  // # "primary", "secondary", "success", "danger"
  // Nếu như truyền sai giá trị thì cũng render ra màu secondary
  //   if (
  //     variant !== "primary" &&
  //     variant !== "secondary" &&
  //     variant !== "success" &&
  //     variant !== "danger"
  //   ) {
  //     variant = "secondary";
  //   }

  if (!["primary", "secondary", "success", "danger"].includes(variant)) {
    variant = "secondary";
  }

  return (
    <>
      <button
        // Rãi tất cả những prop nhận được của Button xuống cho
        // button của html
        // ## Phải đặt nó trước những prop khác
        {...props}

        // ## Đây là các  prop khác (onClick, className, ...)
        onClick={() => {
          props.handleClick();
        }}
        className={css[variant]}

        // style={props.style}
        // onTouchMoveCapture={() => {}}
        // onDrag={() => {}}
        // onBlur={props.onBlur}
        // data-btn={134}
        // data-id={props["data-id"]}
        // data-clr={props["data-clr"]}
        // data-bgc={props["data-bgc"]}
      >
        {props.children}
      </button>
    </>
  );
}
