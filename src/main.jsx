import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import UserPage from './pages/user.jsx';
import RegisterPage from './pages/register.jsx';
import ProductPage from './pages/product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/users",
    element: <UserPage />
  },
  {
    path: "/products",
    element: <ProductPage />

  },
  {
    path: "/registers",
    element: <RegisterPage />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
