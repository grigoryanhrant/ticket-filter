import Card from "../Card/Card.tsx";
import "./CardsList.css";
import { useAppSelector } from "../../store/hooks.ts";
import Loader from "../Loader/Loader.tsx";
import { useEffect, useState } from "react";
import { useUpdateCards } from "./useUpdateCards.ts";

const CardsList = () => {
  const { cards } = useAppSelector((state) => state.transfers);
  const { activeFilterParams } = useAppSelector((state) => state.transfers);

  const [loading, setLoading] = useState(true);

  const { updatedCards } = useUpdateCards({
    cards,
    activeFilterParams,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const cardsRender = updatedCards?.map(
    ({
      origin,
      origin_name,
      destination,
      destination_name,
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
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
          stops={stops}
          price={price}
        />
      );
    }
  );

  return <div className={"cards-flexbox"}>{cardsRender}</div>;
};

export default CardsList;
