import gql from 'graphql-tag'

export default gql`
  query getPosts {
    allPosts {
      nodes {
        id
        title
      }
    }
  }
`
