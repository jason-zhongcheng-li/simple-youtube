import ApolloClient from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createUploadLink({ uri: "http://localhost:4000/graphql" });

const ShootstaClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default ShootstaClient;
