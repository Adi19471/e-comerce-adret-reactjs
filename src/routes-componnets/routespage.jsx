
import Landingpage from "../pages/Landingpage";
import Registationpage from "../pages/Registationpage";

import SmartphoneContainers from "../components/smartphones/Smartphone.Containers"

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
