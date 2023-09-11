import { Props } from "../Card/types.ts";
import Card from "../Card/Card.tsx";
import "./CardsList.css";

const CardsList = ({ cards }: Props) => {
  const cardsRender = cards.map(
    ({
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
    }) => {
      return (
        <Card
          key={arrival_date + price}
          origin={origin}
          origin_name={origin_name}
          destination={destination}
          destination_name={destination_name}
          departure_date={departure_date}
          departure_time={departure_time}
          arrival_date={arrival_date}
          arrival_time={arrival_time}
          carrier={carrier}
          stops={stops}
          price={price}
        />
      );
    }
  );

  return <div className={"cards-flexbox"}>{cardsRender}</div>;
};

export default CardsList;
