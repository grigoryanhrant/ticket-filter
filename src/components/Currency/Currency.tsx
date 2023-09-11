import { Props } from "./types.ts";
import "./Currency.css";

const Currency = ({ currency }: Props) => {
  return <div className={"currency"}>{currency}</div>;
};

export default Currency;
