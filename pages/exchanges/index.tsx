import { Exchanges } from 'components'
import Head from 'next/head'

const ExchangesPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Exchanges - ICoin / Cryptocurrency Market Data</title>
      </Head>
      <Exchanges />
    </>
  )
}

export default ExchangesPage
