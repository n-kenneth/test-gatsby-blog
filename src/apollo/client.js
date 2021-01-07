import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://murmuring-sea-67492.herokuapp.com/",
    fetch,
  }),
  cache: new InMemoryCache(),
})
