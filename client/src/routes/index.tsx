import { useRoutes } from "react-router-dom";
import { DashboardPage, LoginPage, RegisterPage } from "./elements";

export default function Router() {
  return useRoutes([
    {
      // Auth
      path: "/auth",
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
    // Dashboard
    {
      path: "/",
      element: <DashboardPage />,
    },
  ]);
}
