import { Routes } from 'services'
import { useRouter, NextRouter } from 'next/router'

interface IUseChangeRoute {
  onPush: (href: string) => Promise<boolean>

  onAssetDetails: (id: string) => Promise<boolean>

  router: NextRouter
}

const useChangeRoute = (): IUseChangeRoute => {
  const router = useRouter()

  const onAssetDetails = (id: string) => router.push(`${Routes.assets}/${id}`)

  const onPush = (href: string) => router.push(href)

  return { onPush, onAssetDetails, router }
}

export { useChangeRoute }
