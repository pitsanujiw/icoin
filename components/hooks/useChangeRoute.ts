import { useRouter, NextRouter } from 'next/router'

interface IUseChangeRoute {
  onPush: (href: string) => Promise<boolean>

  router: NextRouter
}

const useChangeRoute = (): IUseChangeRoute => {
  const router = useRouter()

  const onPush = (href: string) => {
    return router.push(href)
  }

  return { onPush, router }
}

export { useChangeRoute }
