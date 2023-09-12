import { IFilterParams } from "../../types.ts";

export const currenciesData = [
  {
    id: 0,
    selected: true,
    currency: "rub",
  },
  {
    id: 1,
    selected: false,
    currency: "usd",
  },
  {
    id: 2,
    selected: false,
    currency: "eur",
  },
];

export const numberTransfersData: IFilterParams[] = [
  {
    id: 0,
    checked: true,
    value: "Все",
    transfersNumber: -1,
  },
  {
    id: 1,
    checked: false,
    value: "Без пересадок",
    transfersNumber: 0,
  },
  {
    id: 2,
    checked: false,
    value: "1 пересадка",
    transfersNumber: 1,
  },
  {
    id: 3,
    checked: false,
    value: "2 пересадки",
    transfersNumber: 2,
  },
  {
    id: 4,
    checked: false,
    value: "3 пересадки",
    transfersNumber: 3,
  },
];
