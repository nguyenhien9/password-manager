import { useRoutes } from "react-router-dom";
import RegisterPage from "../modules/auth/pages/RegisterPage";
import HomePage from "../modules/main/pages/HomePage";

export default function Routes() {
  return useRoutes([
    //auth
    {
      path: "auth",
      children: [
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },

    // main
    {
      path: "",
      element: <HomePage />,
    },
  ]);
}
