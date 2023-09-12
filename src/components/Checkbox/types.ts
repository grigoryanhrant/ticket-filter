export interface Props {
  checked: boolean;
  value: string;
  id: number;
  changeFilterParamHandler: (checkboxId: number) => void;
}
