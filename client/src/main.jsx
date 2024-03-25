import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import Homepage from './pages/homepage/homepage.jsx'
import About from './pages/about/about.jsx'
import Browse from './pages/browse/browse.jsx'
import Login from './pages/login/login.jsx'
import Contact from './pages/contact/contact.jsx'
import Register from './pages/register/register.jsx'
import Subcategories from './pages/sub-categories/sub-categories.jsx'
import Items from './pages/items/items.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {path: '/About', element: <About />},
      {path: '/Browse', element: <Browse />},
      {path: '/Login', element: <Login />},
      {path: '/Contact', element: <Contact />},
      {path: '/Register', element: <Register />},
      {path: '/Subcategories/:id', element: <Subcategories/>},
      {path: '/Items/:name', element: <Items/>}
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
