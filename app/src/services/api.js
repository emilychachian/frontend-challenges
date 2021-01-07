import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
    uri: 'http://localhost:3001',
    cache: new InMemoryCache()
});

export default api;