import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { getOrElse, map, tryCatch } from 'fp-ts/lib/TaskEither'

import { type Binance, errorBinance } from '@/home/models'
import { axiosClient, timeout } from '~/modules'

export const getBitcoin = () =>
  pipe(
    tryCatch(
      () =>
        axiosClient.get<Binance[]>('/v3/ticker/24hr', {
          timeout
        }),
      e => e
    ),
    map(
      res => res.data.find(curr => curr.symbol === 'BTCUSDT') ?? errorBinance
    ),
    getOrElse(() => of(errorBinance))
  )()
