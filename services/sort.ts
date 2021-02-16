import { TDirection, TMaterialDirection } from 'use-react-common'

const Sort = {
  toMaterialDirection: (direction: TDirection): TMaterialDirection => {
    if (direction === 'ASC') {
      return 'asc'
    }

    return 'desc'
  }
}

export { Sort }
