
import Landingpage from "../pages/Landingpage";
import Registationpage from "../pages/Registationpage";

import SmartphoneContainers from "../components/smartphones/Productsdata"

export const routespage = [
  {
    path: "/",
    component: Landingpage,
  },

  {
    path: "/registerpage",
    component: Registationpage,
  },



  {
    path: "/products/:item",
    component: SmartphoneContainers,
  },

  

];
