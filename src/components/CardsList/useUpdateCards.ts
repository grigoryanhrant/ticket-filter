import { ICard } from "../../types.ts";
import { useEffect, useState } from "react";

interface UseFilterCardsListProps {
  cards: ICard[];
  activeFilterParams: number[];
}

export const useUpdateCards = ({
  cards,
  activeFilterParams,
}: UseFilterCardsListProps) => {
  const [updatedCards, setUpdatedCards] = useState<ICard[] | null>([]);

  useEffect(() => {
    const filteredCards = cards.filter((card: ICard) =>
      activeFilterParams.includes(card.stops)
    );
    activeFilterParams.includes(-1)
      ? setUpdatedCards(cards)
      : setUpdatedCards(filteredCards);
  }, [activeFilterParams, cards]);

  return { updatedCards };
};
