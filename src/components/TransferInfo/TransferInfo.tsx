import './TransferInfo.css';
import {currenciesData, numberTransfersData} from "./constants.ts";
import Currency from "../Currency/Currency.tsx";
import Checkbox from "../Checkbox/Checkbox.tsx";

const TransferInfo = () => {

    const currenciesRender = currenciesData.map(({id, currency}) => {
        return <Currency key={id} currency={currency}/>
    })

    const transfersRender = numberTransfersData.map(({id, checked, value}) => {
        return <Checkbox key={id} checked={checked} value={value} />
    })

    return (
        <div className={'transfer-info'}>
            <div className={'group'}>
                <span className={'title'}>валюта</span>
                <div className={'currencies-wrapper'}>
                    {currenciesRender}
                </div>
            </div>

            <div className={'group'}>
                <span className={'title'}>количество пересадок</span>
                <div className={'transfers-wrapper'}>
                    {transfersRender}
                </div>
            </div>
        </div>
    );
};

export default TransferInfo;