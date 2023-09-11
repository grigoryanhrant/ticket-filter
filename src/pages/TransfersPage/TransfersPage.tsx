import TransferInfo from "../../components/TransferInfo/TransferInfo.tsx";
import { useState } from "react";
import initialData from "../../data/tickets.json";
import CardsList from "../../components/CardsList/CardsList.tsx";
import "./TransfersPage.css";

const { tickets } = initialData;

const TransfersPage = () => {
  const [cards, setCards] = useState(tickets);

  return (
    <div className={"transfers-page"}>
      <TransferInfo />
      <CardsList cards={cards} />
    </div>
  );
};

export default TransfersPage;
