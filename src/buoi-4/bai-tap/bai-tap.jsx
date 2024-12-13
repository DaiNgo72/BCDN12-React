import { Button } from "../../components/button/button";

export function BaiTapProps() {
  return (
    <>
      {/* Black */}
      <Box bgc="black" text="Đen" />
      <hr />

      {/* Red */}
      <Box bgc="red" text="Đỏ" />
      <hr />

      {/* Blue */}
      <Box bgc="blue" text="Xanh Da Trời" />
      <hr />

      {/* Green */}
      <Box bgc="green" text="Xanh Lá Chuối" />
      <hr />

      {/* console.log("hellooooooooooooooo");  console.log("hellooooooooooooooo"); */}
      <Button
        handleClick={() => {
          console.log("hellooooooooooooooo");
          console.log("hellooooooooooooooo");
        }}
        variant="primary"
      >
        Hello
      </Button>
      <hr />

      {/* alert("hi") */}
      <Button
        handleClick={() => {
          alert("hi");
        }}
        variant="secondary"
      >
        Hi
      </Button>

      <Button
        data-clr="color: blue"
        data-bgc="color: blue"
        data-id="12"
        style={{
          color: "yellow",
          fontSize: 30,
        }}
        variant="success"
      >
        Success
      </Button>
      <Button variant="danger">Danger</Button>
      <Button>Default</Button>
      <Button variant="warning">Sai</Button>
    </>
  );
}

function Box(props) {
  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: props.bgc,
        }}
      ></div>
      <span>{props.text}</span>
    </>
  );
}
