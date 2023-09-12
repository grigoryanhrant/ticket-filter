import TransferInfo from "../../components/TransferInfo/TransferInfo.tsx";
import { useEffect } from "react";
import initialData from "../../data/tickets.json";
import CardsList from "../../components/CardsList/CardsList.tsx";
import "./TransfersPage.css";
import { useDispatch } from "react-redux";
import { setInitialCards } from "../../store/slices/cardsSlice.ts";

const { tickets } = initialData;

const TransfersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialCards(tickets));
  }, []);

  return (
    <div className={"transfers-page"}>
      <TransferInfo />
      <CardsList />
    </div>
  );
};

export default TransfersPage;
