import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import Header2 from "./components/header/header2";
import Footer2 from "./components/footer/footer2";
import "./App.css";
import { useLocation } from "react-router-dom";
import { concat } from "@apollo/client/link/core";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import  GlobalProvider  from "./components/Protection/protection";



const uploadLink = createUploadLink({
  uri: "/graphql",
  headers: {
    "Apollo-Require-Preflight": "true",
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = concat(authLink, uploadLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});



function App() {
  const location = useLocation();
  const isContactPage = location.pathname === "/Contact";
  const isAddPage = location.pathname === "/Add";
  const isSearchPage = location.pathname === "/Search";
  const isItemsPage = location.pathname.startsWith("/Items/");
  const isViewItemsPage = location.pathname.startsWith("/ViewItem/");
  const isAboutPage = location.pathname === "/About";

  return (
    <ApolloProvider client={client}>
      <>
        <Header2 />
        <GlobalProvider>
          <main
            className={`${
              isContactPage
                ? "contact-page"
                : isAddPage
                ? "add-page"
                : isAboutPage
                ? "about-page"
                : ""
            }`}
          >
            <Outlet />
          </main>
        </GlobalProvider>
        <Footer2 />
      </>
    </ApolloProvider>
  );
}

export default App;
