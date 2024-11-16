import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div>Login page</div>
  },
  {
    path: "/users",
    element: <div> Users Page</div>
  },
  {
    path: "/products",
    element: <div> Product Page</div>

  },
  {
    path: "/registers",
    element: <div> registers page</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
