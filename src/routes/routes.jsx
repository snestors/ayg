import Login from "../pages/auth/login.jsx";
import NotFound from "../pages/404.jsx";
import Autos from "../pages/autos/index.jsx";
import Home from "../pages/home/home.jsx";
import Graneles from "../pages/graneles/index.jsx";
import Administracion from "../pages/Administracion/index.jsx";
import Sgs from "../pages/Sgs/index.jsx";

import Naves from "../pages/autos/naves/index.jsx";

import { supabase } from "../lib/supabase.js";
import { createBrowserRouter } from "react-router-dom";
import App from "../app.jsx";
import { getNaves } from "../lib/naves/listnaves.js";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Autos",
        element: <Autos />,
        children: [
          {
            path: "Naves",
            element: <Naves />,
            loader: getNaves
            
          },
          {
            path: "Naves/:id",
            element: <Naves />,
            loader: getNaves
            
          },
          {
            path: "Embarques",
            element: <>Embarques</>,
          },
          {
            path: "Inspeccion",
            element: <>Inspecciones</>,
          },
        ],
      },
      {
        path: "Graneles",
        element: <Graneles />,
      },
      {
        path: "Administracion",
        element: <Administracion />,
      },
      {
        path: "Sgs",
        element: <Sgs />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "noAutorizado",
    element: (
      <>
        <button
          className="text-red-600"
          onClick={() => supabase.auth.signOut()}
        >
          No Autorizado{" "}
        </button>
      </>
    ),
  },
]);

