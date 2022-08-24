import gql from 'graphql-tag'

export const getPosts = gql`
  query getBooks {
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

export interface BooksData {
  allBooks: {
    books: Book[]
  }
}
