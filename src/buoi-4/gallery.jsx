import { useState } from "react";
import { sculptureList } from "./data.js";

export function Gallery() {
  // Khi click button next thì sẽ tăng index lên 1 đơn vị
  let [index, setIndex] = useState(0);

  let [isShowMore, setIsShowMore] = useState(false);

  function handleClick() {
    // length: 12
    // index: 11
    if (index === sculptureList.length - 1) {
      return;
    }

    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />

      <br />
      {/* 
        - click: less -> ẩn đi desc và button less. hiển thị show more button
        - click show more -> ẩn đi show more button. hiển thị lại desc + less button
      */}

      {isShowMore ? (
        <>
          <p>{sculpture.description}</p>
          <button
            onClick={() => {
              setIsShowMore(false);
            }}
          >
            Less
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsShowMore(true);
          }}
        >
          Show More
        </button>
      )}
    </>
  );
}
