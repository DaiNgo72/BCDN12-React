const text = "hello world";
const number = 20;

const bool = true;
const nul = null;
const und = undefined;

const divEle = <div>div ele</div>;

console.log(divEle);

const arr = [1, 2, 3];
const obj = { name: "cyber" };

const renderTitle = () => {
  return "BCDN 12";
};

const firstName = "Nguyen";
const lastName = "Van B";

const fullName = "Nguyen Van C";

const sv = {
  id: 1,
  name: "BCDN 12",
  age: 4,
};

export function DataBinding() {
  return (
    <>
      <button>DataBinding {text}</button>

      <p>{2 + 3}</p>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sv.id}</td>
            <td>{sv.name}</td>
            <td>{sv.age}</td>
          </tr>
        </tbody>
      </table>

      {/* hiển thị firstName */}
      <p>{firstName.toUpperCase()}</p>
      {/* hiển thị lastName */}
      <p>{lastName.toLowerCase()}</p>
      {/* Nối firstName và lastName  */}
      {/* Nguyen - Van B  */}
      <p>
        {firstName} - {lastName}
        {/* {firstName + " - " + lastName} */}
      </p>

      {/* Hiển thị fullName */}
      <p>{fullName}</p>

      {/* ----------------- */}

      <div>{renderTitle()}</div>

      <p> {text} </p>

      {/* Số 20 xuất hiện trong nội dung thẻ p */}
      <p>{number}</p>

      {/* true */}
      <p>{bool}</p>

      {/* null */}
      <p>{nul}</p>

      {/* undefined */}
      <p>{und}</p>

      {/*  */}
      <div>{divEle}</div>

      {/* arr */}
      <div>{arr}</div>

      {/*  */}
      {/* <div>{obj}</div> */}
    </>
  );
}
