import { useEffect, useState } from 'react';

import { binanceData } from '../api/binance';
import type { TBinance } from '../types/TBinance';

export const useBinance = () => {
    
    const [ bin, setBin ] = useState<TBinance>();
    
    const [ isLoading,  setIsLoading ] = useState<boolean>(true);
    
    const getCurrencies = async() => {
        const resp = await binanceData.get<TBinance[]>('');
        const BTCUSDT = resp.data.find(curr => curr.symbol === 'BTCUSDT');
        setBin( BTCUSDT );
        setIsLoading(false);
    };
    
    useEffect(() => {
        getCurrencies();
    }, []);
    
    return { bin, isLoading };
};
