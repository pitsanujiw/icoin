const Paginate = {
  offset: (page: number, perPage: number): number => --page * perPage,

  count: (total: number, perPage: number): number => Math.ceil(total / perPage)
}

export { Paginate }
