import { useRoutes } from "react-router-dom";
import {
  DashboardPage,
  LandingPage,
  LoginPage,
  RegisterPage,
} from "./elements";

export default function Router() {
  return useRoutes([
    // Page
    { path: "/", element: <LandingPage /> },
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
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);
}
