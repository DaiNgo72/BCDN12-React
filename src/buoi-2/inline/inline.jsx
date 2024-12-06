const theme = {
  light: {
    clr: "black",
    bgc: "yellow",
  },

  dark: {
    clr: "white",
    bgc: "black",
  },
};

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export function Inline() {
  const style = isDark ? "dung" : "sai";

  return (
    <>
      <hr />
      
      <div className="box"></div>

      {/* <button style={"color: blue; font-size: 100px"}>Click Me</button> */}
      <button
        style={{
          color: "blue",
          fontSize: 100, // -> 100px
          border: "1px solid black",
          borderRadius: "4px",
          lineHeight: "10rem",
        }}
      >
        Click Me
      </button>

      {/* xét màu sắc cho thẻ nội dung thẻ p dựa vào theme của system */}
      <p
        style={
          isDark
            ? { color: theme.dark.clr, backgroundColor: theme.dark.bgc }
            : { color: theme.light.clr, backgroundColor: theme.light.bgc }
        }
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vel
        unde voluptatibus minima voluptatum, consectetur fugit doloremque
        inventore itaque minus nisi iure quam impedit porro modi. Rerum qui
        vitae expedita voluptatem odio, debitis nihil cupiditate sunt, beatae
        velit, consequuntur eaque modi voluptatibus! Aut minima odio ullam
        asperiores fugiat natus eos iure autem expedita voluptatum recusandae,
        vero explicabo quasi maxime repellat. Eaque numquam error autem eveniet
        atque facilis quam iste ab sit, porro reprehenderit dicta quod placeat
        nemo ratione pariatur alias enim ullam? Corrupti suscipit eum minus
        voluptate nobis ea officiis, repudiandae iure eius sit ratione velit vel
        tempora, omnis totam!
      </p>
    </>
  );
}
