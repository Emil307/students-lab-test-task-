export interface IQuotesList {
  _id: string,
  content: string,
  author: string,
  authorSlug: string,
  length: number,
  tags: string[]
}

export interface IQuotes {
  count: number,
  totalCount: number,
  page: number,
  totalPages: number,
  lastItemIndex: number,
  results: IQuotesList[],
}