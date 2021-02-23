const search = {
  assets: {
    edges: [
      {
        node: {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          __typename: 'Asset'
        },
        __typename: 'AssetEdge'
      },
      {
        node: {
          id: 'binance-coin',
          name: 'Binance Coin',
          symbol: 'BNB',
          __typename: 'Asset'
        },
        __typename: 'AssetEdge'
      },
      {
        node: {
          id: 'bitcoin-cash',
          name: 'Bitcoin Cash',
          symbol: 'BCH',
          __typename: 'Asset'
        },
        __typename: 'AssetEdge'
      },
      {
        node: {
          id: 'bitcoin-sv',
          name: 'Bitcoin SV',
          symbol: 'BSV',
          __typename: 'Asset'
        },
        __typename: 'AssetEdge'
      },
      {
        node: {
          id: 'binance-usd',
          name: 'Binance USD',
          symbol: 'BUSD',
          __typename: 'Asset'
        },
        __typename: 'AssetEdge'
      }
    ],
    __typename: 'AssetConnection'
  },
  exchanges: {
    edges: [
      {
        node: { id: 'binance', name: 'Binance', __typename: 'Exchange' },
        __typename: 'ExchangeEdge'
      },
      {
        node: { id: 'bit-z', name: 'Bit-Z', __typename: 'Exchange' },
        __typename: 'ExchangeEdge'
      },
      {
        node: { id: 'bitfinex', name: 'Bitfinex', __typename: 'Exchange' },
        __typename: 'ExchangeEdge'
      },
      {
        node: { id: 'bitstamp', name: 'Bitstamp', __typename: 'Exchange' },
        __typename: 'ExchangeEdge'
      }
    ],
    __typename: 'ExchangeConnection'
  }
}

export { search }
