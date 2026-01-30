import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    }
])