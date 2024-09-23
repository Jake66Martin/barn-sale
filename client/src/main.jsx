import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Homepage from './pages/homepage/homepage.jsx'
import Homepage2 from './pages/homepage/homepage2.jsx'
import About from './pages/about/about.jsx'
import About2 from './pages/about/about2.jsx'
import Browse from './pages/browse/browse.jsx'
import Login from './pages/login/login.jsx'
import Contact from './pages/contact/contact.jsx'
import Register from './pages/register/register.jsx'
import Subcategories from './pages/sub-categories/sub-categories.jsx'
import Items from './pages/items/items.jsx'
import Search from './pages/search/search.jsx'
import Add from './pages/add/add.jsx'
import Categories from './pages/categories/categories.jsx'
import ViewItem from './pages/viewitem/viewitem.jsx'

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
      {path: '/About2', element: <About2 />},
      {path: '/Browse', element: <Browse />},
      {path: '/Login', element: <Login />},
      {path: '/Contact', element: <Contact />},
      {path: '/Register', element: <Register />},
      {path: '/Subcategories/:id', element: <Subcategories/>},
      {path: '/Items/:id', element: <Items/>},
      {path: '/Search', element: <Search/>},
      {path: '/Add', element: <Add/>},
      {path: '/Categories/:id', element: <Categories/>},
      {path: '/ViewItem/:id', element: <ViewItem/>}
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
