import Head from 'next/head'
import { Charts } from 'components'

const ChartsPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Cryptocurrency Charts Real-time</title>
      </Head>
      <Charts />
    </>
  )
}

export default ChartsPage
