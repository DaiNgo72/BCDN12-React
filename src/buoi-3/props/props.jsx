import css from "./props.module.css";
import { Card } from "./card";

export function mergeCln(...rest) {
  //   console.log(rest);

  return rest.join(" ");
}

// mergeCln(css.lsp, css.card, css["card-title"], css["card-desc"]);
// mergeCln(css.lsp, css.card, css["card-title"]);
// mergeCln(css.lsp, css.card);

const cards = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    description: "Lorem ipsum dolor sit amet.",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    description: "Lorem ipsum dolor sit amet.",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    description: "Lorem ipsum dolor sit amet.",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    description: "Lorem ipsum dolor sit amet.",
    completed: true,
  },
];

export function Props() {
  return (
    <>
      {/* {[<p>Lorem, ipsum.</p>, <p>Lorem.</p>, <p>Lorem ipsum dolor sit.</p>]} */}

      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            desc={item.description}
            src={"https://i.pravatar.cc?img=" + item.id}
          />
        );
      })}

      {/* {[
        <Card
          title={cards[0].title}
          desc={cards[0].description}
          src={"https://i.pravatar.cc?img=" + cards[0].id}
        />,

        <Card
          title={cards[1].title}
          desc={cards[1].description}
          src={"https://i.pravatar.cc?img=" + cards[1].id}
        />,

        <Card
          title={cards[2].title}
          desc={cards[2].description}
          src={"https://i.pravatar.cc?img=" + cards[2].id}
        />,

        <Card
          title={cards[3].title}
          desc={cards[3].description}
          src={"https://i.pravatar.cc?img=" + cards[3].id}
        />,
      ]} */}

      {/* <Card
        title="Iphone"
        desc="Iphone Desc"
        img="https://i.pravatar.cc?img=4"
      />

      <Card
        title="Iphone 16"
        desc="Iphone16 Desc"
        sourc="https://i.pravatar.cc?img=5"
      /> */}

      <H1 className="haha">Hello</H1>
    </>
  );
}

// React.createElement("div", { className: "" }, "hello");

function H1(props) {
  console.log("props", props);
  return <h1 className={props.className}>{props.children}</h1>;
}
