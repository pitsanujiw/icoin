const exchanges = {
  pageInfo: { hasNextPage: true, __typename: 'PageInfo' },
  edges: [
    {
      node: {
        id: 'binance',
        name: 'Binance',
        rank: 1,
        tradingPairs: 497,
        volumeUsd24Hr: 22161052707.1492071106375366,
        percentTotalVolume: 39.020678085798935562,
        topPairBaseSymbol: 'BTC',
        topPairQuoteSymbol: 'USDT',
        updatedAt: 1613375635341,
        __typename: 'Exchange'
      },
      __typename: 'ExchangeEdge'
    },
    {
      node: {
        id: 'huobi',
        name: 'Huobi',
        rank: 2,
        tradingPairs: 502,
        volumeUsd24Hr: 8299902389.2838084567124894,
        percentTotalVolume: 14.614279545092026221,
        topPairBaseSymbol: 'BTC',
        topPairQuoteSymbol: 'USDT',
        updatedAt: 1613375650362,
        __typename: 'Exchange'
      },
      __typename: 'ExchangeEdge'
    },
    {
      node: {
        id: 'bit-z',
        name: 'Bit-Z',
        rank: 3,
        tradingPairs: 90,
        volumeUsd24Hr: 6562864890.5219320811151186,
        percentTotalVolume: 11.555743384475322454,
        topPairBaseSymbol: 'ETH',
        topPairQuoteSymbol: 'USDT',
        updatedAt: 1613375613664,
        __typename: 'Exchange'
      },
      __typename: 'ExchangeEdge'
    },
    {
      node: {
        id: 'gdax',
        name: 'Coinbase Pro',
        rank: 4,
        tradingPairs: 60,
        volumeUsd24Hr: 3856655619.0539363354713109,
        percentTotalVolume: 6.790711587015135692,
        topPairBaseSymbol: 'BTC',
        topPairQuoteSymbol: 'USD',
        updatedAt: 1613375651066,
        __typename: 'Exchange'
      },
      __typename: 'ExchangeEdge'
    },
    {
      node: {
        id: 'hitbtc',
        name: 'HitBTC',
        rank: 5,
        tradingPairs: 707,
        volumeUsd24Hr: 3846241932.9155440413788682,
        percentTotalVolume: 6.77237540507186261,
        topPairBaseSymbol: 'BTC',
        topPairQuoteSymbol: 'USDT',
        updatedAt: 1613375631946,
        __typename: 'Exchange'
      },
      __typename: 'ExchangeEdge'
    }
  ],
  __typename: 'ExchangeConnection'
}

export { exchanges }
