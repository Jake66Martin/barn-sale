import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import "./App.css";
import { useLocation } from 'react-router-dom'
import { concat } from '@apollo/client/link/core';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

const uploadLink = createUploadLink({
  uri: '/graphql',
  headers: {
    'Apollo-Require-Preflight': 'true'
  }
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

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === '/Contact';
  const isAddPage = location.pathname === '/Add';
  const isSearchPage = location.pathname === '/Search';
  const isItemsPage = location.pathname.startsWith('/Items/');
  const isViewItemsPage = location.pathname.startsWith('/ViewItem/');
  const isAboutPage = location.pathname === '/About';



  
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <main className={`main-height ${isContactPage ? 'contact-page' : isAddPage ?  'add-page' : isItemsPage ? 'items-page' : isSearchPage ? 'search-page' : isViewItemsPage ? 'view-item': isAboutPage ? 'about-page' : ''}`}>
          <Outlet />
        </main>
        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;
