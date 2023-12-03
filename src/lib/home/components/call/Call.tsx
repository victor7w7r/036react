import { useEffect } from 'react';

import { Spinner } from '..';
import { useAppDispatch, useAppSelector } from '@/common/store';
import { fetchCoins } from '@/home/slices/binance-slice';

export const Call = () => {
  const state = useAppSelector(state => state.binanceSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCoins());
  }, [dispatch]);

  return state.loading ? (
    <Spinner />
  ) : (
    <>
      <p className='adaptable-call'>
        Symbol:
        {state.data.symbol}
      </p>
      <p className='adaptable-call'>
        Price:
        {state.data.askPrice}
      </p>
    </>
  );
};
