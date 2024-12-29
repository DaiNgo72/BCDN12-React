export function Input(props) {
  const { label, ...inputProps } = props;
  return (
    <label>
      <p>{label}</p>
      <input
        className="px-2 py-1 rounded border border-gray-600 block w-full"
        // ----------
        // type={props.type}
        // placeholder={props.placeholder}
        // value={props.value}
        // onChange={props.onChange}
        // name={props.name}
        // disabled={props.disabled}
        // ------------
        {...inputProps}
      />
    </label>
  );
}

const sv = {
  name: 20,
  age: 21,
  addr: "dn",
};

const { age, ...restSv } = sv;
/**
 * restSv = {
 *  name: 20,
 *  addr: "dn",
 * }
 */
