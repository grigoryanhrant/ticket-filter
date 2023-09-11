import { ICard } from "../../types.ts";
import "./Card.css";

const Card = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
}: ICard) => {
  return (
    <div className={"card"}>
      <div className={"left-side"}>
        <div className={"card-button"}>
          <span>Купить</span>
          <span>за ${price} рублей</span>
        </div>
      </div>
      <div>${departure_time}</div>
      <div>${arrival_time}</div>
      <div>
        ${origin}${origin_name}
      </div>
      <div>
        ${destination}${destination_name}
      </div>

      <div>${departure_date}</div>
      <div>${arrival_date}</div>
      <div>${arrival_date}</div>
      <div>${carrier}</div>
      <div>${stops}</div>
    </div>
  );
};

export default Card;
