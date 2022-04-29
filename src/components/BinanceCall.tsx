import { FC } from 'react';
import { bind } from '@react-rxjs/core';

import { binanceAll$ } from '../api/binance';

const [ binance ] = bind(binanceAll$);

export const BinanceCall: FC = (): JSX.Element => {

    const bin = (binance().find( curr => curr.symbol === 'BTCUSDT' ));

    return (
        <>
            <p className='text-center'>Symbol: {bin?.symbol}</p>
            <p className='text-center'>Price: {bin?.askPrice}</p>
        </>
    );
};