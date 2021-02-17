import Head from 'next/head'
import { Charts } from 'components'

const ChartsPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Cryptocurrency Charts Real-time</title>
        <script src="https://s3.tradingview.com/tv.js" async></script>
      </Head>
      <Charts />
    </>
  )
}

export default ChartsPage
