import gql from 'graphql-tag'

export const getAllBooks = gql`
  query getAllBooks {
    allBooks {
      nodes {
        id
        title
      }
    }
  }
`

interface Book {
  id: number
  title: string
}

export interface BookList {
  allBooks: {
    nodes: Book[]
  }
}
