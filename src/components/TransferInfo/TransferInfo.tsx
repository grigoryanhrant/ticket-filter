import "./TransferInfo.css";
import { currenciesData } from "./constants.ts";
import Currency from "../Currency/Currency.tsx";
import Checkbox from "../Checkbox/Checkbox.tsx";
import { useDispatch } from "react-redux";
import {
  changeFilterParam,
  setCurrency,
} from "../../store/slices/cardsSlice.ts";
import { useAppSelector } from "../../store/hooks.ts";

const TransferInfo = () => {
  const dispatch = useDispatch();

  const { currency: activeCurrency } = useAppSelector(
    (state) => state.transfers
  );

  const changeCurrency = (currency: string) => {
    dispatch(setCurrency(currency));
  };

  const changeFilterParamHandler = (checkboxId: number) => {
    dispatch(changeFilterParam(checkboxId));
  };

  const currenciesRender = currenciesData.map(({ id, currency }) => {
    return (
      <Currency
        key={id}
        currency={currency}
        changeCurrency={changeCurrency}
        activeCurrency={activeCurrency}
      />
    );
  });

  const { filterParams } = useAppSelector((state) => state.transfers);

  const transfersRender = filterParams.map(({ id, checked, value }) => {
    return (
      <Checkbox
        key={id}
        checked={checked}
        value={value}
        id={id}
        changeFilterParamHandler={changeFilterParamHandler}
      />
    );
  });

  return (
    <div className={"transfer-info"}>
      <div className={"group"}>
        <span className={"title"}>валюта</span>
        <div className={"currencies-wrapper"}>{currenciesRender}</div>
      </div>

      <div className={"group"}>
        <span className={"title"}>количество пересадок</span>
        <div className={"transfers-wrapper"}>{transfersRender}</div>
      </div>
    </div>
  );
};

export default TransferInfo;
