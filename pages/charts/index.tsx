import Head from 'next/head'
import { Charts } from 'components'

const ChartsPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Charts - ICoin / Cryptocurrency Market Data</title>
      </Head>
      <Charts />
    </>
  )
}

export default ChartsPage
