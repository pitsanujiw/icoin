const assetMarkets = {
  pageInfo: { hasNextPage: true, __typename: 'PageInfo' },
  edges: [
    {
      node: {
        id: '3a6e1109-9f90-4659-8985-5c8b9e36328b',
        exchangeId: 'binance',
        exchangeName: 'Binance',
        baseSymbol: 'BTC',
        quoteSymbol: 'USDT',
        volumeUsd24Hr: 3822582086.935666004007041,
        priceUsd: 47483.608071927724242,
        percentVolume: 18.2682261132248922,
        updatedAt: '2021-02-15T08:48:27.353Z',
        __typename: 'AssetMarket'
      },
      __typename: 'AssetMarketEdge'
    },
    {
      node: {
        id: '04a633d2-d43f-4b73-9e0c-22fc9195af8a',
        exchangeId: 'bit-z',
        exchangeName: 'Bit-Z',
        baseSymbol: 'BTC',
        quoteSymbol: 'USDT',
        volumeUsd24Hr: 1543652315.1777949383004728,
        priceUsd: 47489.0307680033636913,
        percentVolume: 7.3771573487587625,
        updatedAt: '2021-02-15T08:48:12.995Z',
        __typename: 'AssetMarket'
      },
      __typename: 'AssetMarketEdge'
    },
    {
      node: {
        id: '00ae5690-a93a-41aa-917f-6fc4b6e03b56',
        exchangeId: 'huobi',
        exchangeName: 'Huobi',
        baseSymbol: 'BTC',
        quoteSymbol: 'USDT',
        volumeUsd24Hr: 1466373888.025307072992641,
        priceUsd: 47504.9586871037659115,
        percentVolume: 7.0078415960059594,
        updatedAt: '2021-02-15T08:35:29.911Z',
        __typename: 'AssetMarket'
      },
      __typename: 'AssetMarketEdge'
    }
  ],
  __typename: 'AssetMarketConnection'
}

export { assetMarkets }
