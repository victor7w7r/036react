import { FC } from 'react';
import { bind } from '@react-rxjs/core';

import { binanceAll$ } from '../api/binance';

const [ binance ] = bind(binanceAll$);

export const BinanceCall: FC = (): JSX.Element => {

    const bin = (binance().find( curr => curr.symbol === 'BTCUSDT'));

    return (
        <>
            <p className='adaptable-center-text text-base lg:text-lg font-semibold'>
                Symbol: {bin?.symbol}
            </p>
            <p className='adaptable-center-text text-base lg:text-lg font-semibold'>
                Price: {bin?.askPrice}
            </p>
        </>
    );
};