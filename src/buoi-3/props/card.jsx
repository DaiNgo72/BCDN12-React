import css from "./props.module.css";
import { mergeCln } from "./props";

export function Card(props) {
  console.log("props", props);

  return (
    <div className={css.card}>
      <div className="card-head">
        <img
          // ???
          //   src= {props.src ? props.src : (props.img ? props.img : "")}

          src={props.src || props.img}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="card-body">
        {/* "abc def fkasdjf" */}

        {/* "_card-title_1yqwp_15 _lsp_1yqwp_33"  */}
        {/* css["card-title"] + " " + css.lsp  */}
        <h3 className={css["card-title"] + " " + css.lsp}>{props.title} 😁</h3>

        {/* css fz: 20, màu: gray */}
        <p className={mergeCln(css["card-desc"], css.lsp)}>{props.desc}</p>
      </div>
    </div>
  );
}