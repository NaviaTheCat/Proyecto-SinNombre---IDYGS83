import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CatalogoTramites from "../pages/CatalogoTramites";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/catalogo",
        element: <CatalogoTramites></CatalogoTramites>
    }
])