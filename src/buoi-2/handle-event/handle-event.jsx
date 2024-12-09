export function HandleEvent() {
  const handleClick = (name) => {
    alert(name);
  };

  const handleClick2 = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <>
      <button onClick={handleClick2} data-name="bcdn12">
        Click BCDN12
      </button>

      <button onClick={handleClick2} data-name="Cyber">
        Click Cyber
      </button>

      <button
        onClick={(event) => {
          console.log(event);
          handleClick("hello");
        }}
      >
        Click Hello
      </button>

      <button
        onClick={() => {
          handleClick("hi");
        }}
      >
        Click Hi
      </button>
    </>
  );
}

// document.getElementById('a').onclick = (event) => {}
