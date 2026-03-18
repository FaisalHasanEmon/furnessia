import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Shop from "../pages/Shop/Shop";
import Dining from "../pages/Dining/Dining";
import Home from "../pages/Home/Home";
import Bedroom from "../pages/Bedroom/Bedroom";
import Living from "../pages/Living/Living";
import CustomOrder from "../pages/CustomOrder/CustomOrder";
import Contact from "../pages/Contact/Contact";
import Office from "../pages/Office/Office";
import NotFound from "../pages/NotFound/NotFound";
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {   path:"/",               element:<Home></Home>                           },
            {   path:"/shop",           element:<Shop></Shop>                           },
            {   path:"/dining",         element:<Dining></Dining>                       },
            {   path:"/bedroom",        element:<Bedroom></Bedroom>                     },
            {   path:"/living",         element:<Living></Living>                       },
            {   path:"/Office",         element:<Office></Office>                       },
            {   path:"/custom-order",   element:<CustomOrder></CustomOrder>             },
            {   path:"/contact",        element:<Contact></Contact>                     }
        ]
    },
    {
        path:"*",
        element:<NotFound></NotFound>
    }
])
export default router;