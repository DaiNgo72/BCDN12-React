export function Select(props) {
  return (
    <label>
      <p>{props.label}</p>
      <select
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        className="px-2 py-[5px] rounded border border-gray-600 block w-full"
      >
        {props.options.map((op) => {
          return (
            <option key={op.value} value={op.value}>
              {op.name}
            </option>
          );
        })}
      </select>
    </label>
  );
}
