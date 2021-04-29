
import Dashboard from "views/Dashboard.js";
import Map from "views/Map.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Stock Table",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },


  {
    path: "/map",
    name: "Trade Map",
    icon: "tim-icons icon-square-pin",
    component: Map,
    layout: "/admin",
  },
  

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },

];

export default routes;