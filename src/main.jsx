import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app.jsx";
import Login from './pages/auth/login.jsx'
import NotFound from "./pages/404.jsx";
import Autos from "./pages/autos/index.jsx";
import Home from "./pages/home/home.jsx";
import Graneles from "./pages/graneles/index.jsx";
import Administracion from "./pages/Administracion/index.jsx";
import Sgs from "./pages/Sgs/index.jsx";
import { AppContextProvider } from "./context/appContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {        
        path:'Autos',
        element: <Autos />
      },
      {        
        path:'Graneles',
        element: <Graneles />
      },
      {        
        path:'Administracion',
        element: <Administracion />
      },
      {
        path:'Sgs',
        element: <Sgs/>
        
      }
    
    
    ]

  },
  {
    path: "/Login",
    element: <Login/>,

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
