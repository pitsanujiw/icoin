import Head from 'next/head'
import { Exchanges } from 'components'

const ExchangesPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Exchanges</title>
      </Head>
      <Exchanges />
    </>
  )
}

export default ExchangesPage
