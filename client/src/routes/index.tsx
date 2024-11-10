import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./elements";

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "/auth",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    // Home - Dashboard
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
}
