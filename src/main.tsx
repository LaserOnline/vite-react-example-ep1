import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Blog from './components/Blog.tsx'
import Contact from './components/Contact.tsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "blog",
    element: <Blog/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
