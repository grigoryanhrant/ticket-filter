import { createSlice } from "@reduxjs/toolkit";
import { ICard, IFilterParams } from "../../types.ts";
import { numberTransfersData } from "../../components/TransferInfo/constants.ts";

interface CardsState {
  cards: ICard[];
  currency: "rub" | "usd" | "eur";
  activeFilterParams: number[];
  filterParams: IFilterParams[];
}

const initialState: CardsState = {
  cards: [],
  currency: "rub",
  activeFilterParams: [-1],
  filterParams: numberTransfersData,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setInitialCards(state, action) {
      state.cards.push(...action.payload);
    },
    setCurrency(state, action) {
      state.currency = action.payload;
    },
    changeFilterParam(state, action) {
      const updatedFilterParams = state.filterParams.map((filterParam) => {
        if (filterParam.id === action.payload) {
          return { ...filterParam, checked: !filterParam.checked };
        }
        return filterParam;
      });

      state.filterParams = updatedFilterParams;

      const transfersNumber = updatedFilterParams.reduce(
        (accumulator: number[], currentItem) => {
          if (currentItem.checked === true) {
            accumulator.push(currentItem.transfersNumber);
          }
          return accumulator;
        },
        []
      );
      state.activeFilterParams = transfersNumber;
    },
  },
});

export const { setInitialCards, setCurrency, changeFilterParam } =
  cardsSlice.actions;

export default cardsSlice.reducer;
