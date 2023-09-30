import { ICard } from "../../types.ts";
import "./Card.css";
import icon from "../../assets/images/airplane-icon.png";

import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import { useAppSelector } from "../../store/hooks.ts";
import { currencies } from "./constants.ts";

const Card = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_time,
  arrival_date,
  stops,
  price,
}: ICard) => {
  const currency = useAppSelector((state) => state.transfers.currency);
  return (
    <div className={"card"}>
      <div className={"left-side"}>
        <div className={"logo-wrapper"}>
          <img src={logo} alt="airlines" />
        </div>
        <div className={"card-button"}>
          <span>Купить</span>
          <span>
            за {price} {currencies[currency]}
          </span>
        </div>
      </div>
      <div className={"content"}>
        <div className={"content-group"}>
          <div className={"time"}>{departure_time}</div>

          <div className={"city"}>
            {origin}, {origin_name}
          </div>

          <div className={"date"}>
            {dayjs(departure_date).locale(ru).format("D MMM YYYY")}
          </div>
        </div>

        <div className={"content-divider"}>
          <div className={"stops"}>{stops} пересадка</div>
          <div className={"airplane-icon-wrapper"}>
            <img src={icon} alt={"airplane icon"} />
          </div>
        </div>

        <div className={"content-group"}>
          <div className={"time"}>{arrival_time}</div>

          <div className={"city"}>
            {destination}, {destination_name}
          </div>

          <div className={"date"}>
            {dayjs(arrival_date).locale(ru).format("D MMM YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
