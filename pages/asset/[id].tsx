import { Asset } from 'components'
import { useRouter } from 'next/router'
import { capitalize } from 'lodash'
import Head from 'next/head'

const AsssetPage = (): React.ReactElement => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>{capitalize(id as string)}</title>
      </Head>
      <Asset />
    </>
  )
}

export default AsssetPage
