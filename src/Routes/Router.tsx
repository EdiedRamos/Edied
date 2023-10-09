import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { ROUTE_URLS } from "../Domain/Constants/urls";

const Home = lazy(() => import("../Components/Pages/Home/Home"));
const Projects = lazy(() => import("../Components/Pages/Projects/Projects"));
const Contact = lazy(() => import("../Components/Pages/Contact/Contact"));

import { Root } from "../Components/Layouts";

export const Router = createBrowserRouter([
  {
    path: ROUTE_URLS.ROOT,
    element: <Root />,
    children: [
      {
        path: ROUTE_URLS.HOME,
        element: <Suspense children={<Home />} />,
      },
      {
        path: ROUTE_URLS.PROJECTS,
        element: <Suspense children={<Projects />} />,
      },
      {
        path: ROUTE_URLS.CONTACT,
        element: <Suspense children={<Contact />} />,
      },
      {
        path: ROUTE_URLS.ROOT,
        element: <Navigate to={ROUTE_URLS.HOME} />,
      },
      {
        path: ROUTE_URLS.ALL,
        element: <Navigate to={ROUTE_URLS.HOME} />,
      },
    ],
  },
]);
