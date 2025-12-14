import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: "/api/graphql",
    }),
    cache: new InMemoryCache(),
})

export default apolloClient;