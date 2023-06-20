import { IRouteItem } from "app/config/@interfaces/route.interface";
import Error404 from "app/pages/404";
import Dashboard from "app/pages/dashboard";
import Detail from "app/pages/detail";

const userRoutes: IRouteItem[] = [
  {
    text: "Shippers",
    url: "/shippers",
    component: Dashboard,
  },
  {
    text: "Carriers",
    url: "/carriers",
    component: Dashboard,
  },
  {
    text: "Brokers",
    url: "/brokers",
    component: Dashboard,
  },
  {
    text: "About Us",
    url: "/about",
    component: Dashboard,
  },
  {
    text: "Articles",
    url: "/dashboard",
    component: Dashboard,
  },
  {
    text: "",
    url: "/dashboard/detail/:id",
    component: Detail,
  },
];
export default userRoutes;
