import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import userRoutes from "./routes";
import Error404 from "app/pages/404";
import Layout from "app/layouts";
import Main from "app/pages/main";

const RouteComponent = () => {
  return <Main></Main>;
};
export default RouteComponent;
