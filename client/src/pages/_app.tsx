import { AppProps } from "next/app"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>

  )
}
export default MyApp
