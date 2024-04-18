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
import { useLocation } from 'react-router-dom';


const httpLink = createHttpLink({
  uri: '/graphql',
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === '/Contact';
  const isAddPage = location.pathname === '/Add';
  const isSearchPage = location.pathname === '/Search';
  const isItemsPage = location.pathname.startsWith('/Items/');
  const isViewItemsPage = location.pathname.startsWith('/ViewItem/');



  
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <main className={`main-height ${isContactPage ? 'contact-page' : isAddPage ?  'add-page' : isItemsPage ? 'items-page' : isSearchPage ? 'search-page' : isViewItemsPage ? 'view-item': ''}`}>
          <Outlet />
        </main>
        <Footer />
      </>
    </ApolloProvider>
  );
}

export default App;
