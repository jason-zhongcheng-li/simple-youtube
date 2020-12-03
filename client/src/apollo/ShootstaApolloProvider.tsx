import React from "react"
import { ApolloProvider } from "react-apollo";
import MenuBar from "../components/MenuBar";
import Routes from "../routes/Routes";
import ShootstaApolloClient from "./ShootstaApolloClient";


const ShootstaApolloProvider: React.FunctionComponent = () => {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <ApolloProvider client={ShootstaApolloClient} >
          <Routes />
        </ApolloProvider >
      </header>
    </div>
  )
}

export default ShootstaApolloProvider;