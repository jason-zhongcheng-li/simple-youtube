import React from "react"
import { ApolloProvider } from "react-apollo";
import Header from "../components/Header";
import Routes from "../routes/Routes";
import ShootstaApolloClient from "./ShootstaApolloClient";


const ShootstaApolloProvider: React.FunctionComponent = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <ApolloProvider client={ShootstaApolloClient} >
        <Routes />
      </ApolloProvider >
    </div>
  )
}

export default ShootstaApolloProvider;