import { createBrowserRouter } from "react-router-dom";

import Home from "./home/home";
import NotFound from "./not-found/not-found";
import ErrorBoundary from "./error-boundary/error-boundary";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  },
]);
