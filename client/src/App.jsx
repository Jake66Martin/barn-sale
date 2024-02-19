import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import "./App.css";

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const oken = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? "Bearer ${token}" : "",
    },
  };
});

const client = new AppoloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;
