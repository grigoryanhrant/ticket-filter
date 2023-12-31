import { Props } from "./types.ts";
import "./Checkbox.css";

const Checkbox = ({ checked, value, id, changeFilterParamHandler }: Props) => {
  return (
    <label className={"input-wrapper"}>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={() => changeFilterParamHandler(id)}
      />
      <span className={"value"}>{value}</span>
    </label>
  );
};

export default Checkbox;
