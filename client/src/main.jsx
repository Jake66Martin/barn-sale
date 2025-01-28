import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Homepage from './pages/homepage/homepage.jsx'
import Homepage2 from './pages/homepage/homepage2.jsx'
import About from './pages/about/about.jsx'
import About2 from './pages/about/about2.jsx'
import Browse2 from './pages/browse/browse2.jsx'
import Login from './pages/login/login.jsx'
import Contact from './pages/contact/contact.jsx'
import Contact2 from './pages/contact/contact2.jsx'
import Register from './pages/register/register.jsx'
import Subcategories from './pages/sub-categories/sub-categories.jsx'
import Subcategories2 from './pages/sub-categories/sub-categories2.jsx'
import Items from './pages/items/items.jsx'
import Search from './pages/search/search.jsx'
import Search2 from './pages/search/search2.jsx'
import Dummy from './pages/search/dummy.jsx'
import Add from './pages/add/add.jsx'
import Categories from './pages/categories/categories.jsx'
// import ViewItem from './pages/viewitem/viewitem.jsx'
import Checkout from './pages/checkout/checkout.jsx'
import Viewitem2 from './pages/viewitem2/viewitem2.jsx'
import Success from './pages/success/success.jsx'
import Failure from './pages/failure/failure.jsx'
import Protection from './components/Protection/protection.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage2 />
      },
      {path: '/About', element: <About2 />},
      {path: '/Browse', element: <Browse2 />},
      {path: '/Login', element: <Login />},
      {path: '/Contact', element: <Contact2 />},
      {path: '/Register', element: <Register />},
      {path: '/Subcategories/:name', element: <Subcategories2/>},
      {path: '/Items/:id', element: <Items/>},
      {path: '/Search', element: <Search2/>},
      {path: "/dummy", element: <Dummy/>},
      {path: '/Add', element: <Add/>},
      {path: '/Categories/:id', element: <Categories/>},
      // {path: '/ViewItem/:id', element: <ViewItem/>},
      {path: '/Viewitem2/:id', element: <Viewitem2/>},
      {path: '/Checkout', element: <Checkout/>},
      {path: '/Success', element: <Success/>},
      {path: '/Failure', element: <Failure/>}
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
