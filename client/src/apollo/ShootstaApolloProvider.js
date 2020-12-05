import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ShootstaClient from './ShootstaApolloClient';
import Routes from '../routes/Routes';

const ShootstaApolloProvider = () => {
  return (
    <ApolloProvider client={ShootstaClient}>
      <Routes />
    </ApolloProvider>
  )
}

export default ShootstaApolloProvider;