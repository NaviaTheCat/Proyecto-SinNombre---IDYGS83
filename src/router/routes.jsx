import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CatalogoTramites from "../pages/CatalogoTramites";
import FormularioSolicitar from "../pages/FormularioSolicitar";
import Pago from "../pages/Pago";
import MisTramites from "../pages/MisTramites";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/catalogo",
        element: <CatalogoTramites></CatalogoTramites>
    },
    {
        path: "/formulario",
        element: <FormularioSolicitar></FormularioSolicitar>
    },
    {
        path: "/pago",
        element: <Pago></Pago>
    },
    {
        path: "/mistramites",
        element: <MisTramites></MisTramites>
    }
])