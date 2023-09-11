import { Props } from "./types.ts";
import "./Checkbox.css";

const Checkbox = ({ checked, value }: Props) => {
  return (
    <label className={"input-wrapper"}>
      <input type={"checkbox"} checked={checked} />
      <span className={"value"}>{value}</span>
    </label>
  );
};

export default Checkbox;
