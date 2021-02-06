import { TIconType } from 'types'

const CDN = {
  getIcon: (id: string, type: TIconType = 'color'): string =>
    `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/${type}/${id}.svg`,

  defaultIcon:
    'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/generic.svg'
}

export { CDN }
