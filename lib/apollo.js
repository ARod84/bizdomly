import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `${process.env.WORDPRESS_API_URL}/graphql`,
    cache: new InMemoryCache(),
})

export const publicClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    cache: new InMemoryCache(),
})