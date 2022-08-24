import React from "react"

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { useQuery } from '@apollo/react-hooks';

import gql from "graphql-tag"

const test = gql`
      query getBooks {
        allBooks {
          nodes {
            id
            title
          }
        }
      }
    `

const IndexPage = () => {
  const { data, loading, error } = useQuery(test);
  if (loading) return <p>"loading"</p>
  if (error) return <p>ERROR</p>

  console.log(data)

  return (
    <>
      <h1>FrontEnd</h1>
      {data && data.allBooks.nodes.map((book) => {
        <p>{book.id}</p>
      })}
    </>
  )
}

export default IndexPage