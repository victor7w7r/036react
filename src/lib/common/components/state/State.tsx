import type { FC } from 'react';

import { useAppSelector } from '@/common/store';

export const State: FC = () => {
  const count = useAppSelector(state => state.dataSlice.value);

  return count.length > 0 ? (
    <p className='adaptable-xl'>
      Store State: Yes, you write
      <b> {count} </b>
    </p>
  ) : (
    <p className='adaptable-xl'>Store State: Not yet.</p>
  );
};
